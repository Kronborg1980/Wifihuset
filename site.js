/* WiFiHuset: progressively rendered static journal, with optional legacy Firebase content. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = value => {
    const raw = String(value || '');
    if (/^[\u0000-\u0020]*[a-z][\w+.-]*:/i.test(raw) && !/^(https?:|mailto:)/i.test(raw)) return '#';
    if (raw.startsWith('//') || /[\u0000-\u001f]/.test(raw)) return '#';
    return raw;
  };
  function cleanHTML(html) {
    const template = document.createElement('template'); template.innerHTML = String(html || '');
    const allowed = new Set(['P','B','STRONG','I','EM','BR','A','UL','LI']);
    [...template.content.querySelectorAll('*')].reverse().forEach(node => {
      if (['SCRIPT','STYLE','IFRAME','OBJECT','SVG'].includes(node.tagName)) { node.remove(); return; }
      if (!allowed.has(node.tagName)) { node.replaceWith(...node.childNodes); return; }
      const href = node.getAttribute('href'); [...node.attributes].forEach(a => node.removeAttribute(a.name));
      if (node.tagName === 'A' && href) { node.setAttribute('href', safeURL(href)); node.setAttribute('rel', 'noopener'); }
    });
    return template.innerHTML;
  }
  function merge(base, incoming) {
    if (incoming == null || typeof incoming !== 'object') return base;
    const out = {...base};
    for (const key of Object.keys(incoming)) {
      if (['__proto__','constructor','prototype'].includes(key)) continue;
      const value = incoming[key];
      out[key] = Array.isArray(value) ? value : value && typeof value === 'object' ? merge(base?.[key] || {}, value) : value;
    }
    return out;
  }
  const I18N = window.WH_I18N || { lang: 'da', t: s => s, phrases: null };
  const EN = I18N.lang === 'en';
  const T = s => I18N.t(s);
  const CONTENT_EN = window.CONTENT_EN || {};
  const isPhoto = e => /^(Produktfoto|Product photo|Eget foto|Our photo)/.test(e.imageNote || '');
  // English view of the editorial configuration. Article lists, featured picks and versions are left untouched.
  function localizeConfig(c) {
    if (!EN || !CONTENT_EN.config) return c;
    const out = merge(c, CONTENT_EN.config);
    out.journal = {...c.journal, ...(CONTENT_EN.journal || {})};
    out.catalog = (c.catalog || []).map(p => ({...p, ...(CONTENT_EN.catalog?.[p.name] || {})}));
    out.winners = (c.winners || []).map(w => ({...w, ...(CONTENT_EN.winners?.[w.name] || {})}));
    return out;
  }
  function localizeEntry(e) {
    if (!EN) return e;
    const tr = CONTENT_EN.entries?.[e.slug], cat = CONTENT_EN.catalog?.[e.name], photo = CONTENT_EN.photos?.[e.slug];
    const out = {...e, body: (e.body || []).map(s => ({heading: T(s.heading), text: T(s.text)}))};
    if (tr) { if (tr.name) { out.sourceName = e.name; out.name = tr.name; } out.kicker = tr.kicker; out.summary = tr.summary; out.body = out.body.map((s, i) => ({...s, text: tr.body[i] ?? s.text})); }
    else if (cat) { out.kicker = cat.proto; out.summary = cat.verdict; if (out.body[0]) out.body[0].text = cat.verdict; }
    if (isPhoto(e) && photo) Object.assign(out, photo); else out.imageNote = T(e.imageNote);
    return out;
  }
  let config = structuredClone(window.DEFAULT_CONFIG);
  const preview = new URLSearchParams(location.search).get('preview') === '1';
  if (preview) { try { const draft = JSON.parse(localStorage.getItem('wifihuset_draft')); if (draft) config = merge(config, draft); } catch { /* Use shipped content if local storage is unavailable. */ } }
  config = localizeConfig(config);
  let category = 'Alle', query = '', pageSize = 6, catalogueOpen = false;
  const isArticle = !!$('#article');
  const typeFor = cat => ({'Netværk':'wifi','Have & Robot':'mower','Sikkerhed':'lock','Lys':'bulb','Klima & Energi':'plug','Hub & Sensorer':'hub'}[cat] || 'hub');
  function entries() {
    const known = config.journal.entries.filter(e => e.slug && e.name).map(e => {
      const photo = window.PRODUCT_PHOTOS?.[e.slug];
      // Upgrade shipped illustrations and known archive images, preserving an editor's custom photograph.
      if (photo && (config.journal.featured.includes(e.slug) || !e.image || /\.svg(?:[?#]|$)/i.test(e.image) || /illustration/i.test(e.imageNote || '') || e.image === photo.image)) return {...e, ...photo};
      return e;
    });
    const names = new Set(known.map(e => e.name.toLowerCase()));
    return known.concat((config.catalog || []).filter(p => !names.has(p.name.toLowerCase())).map((p, i) => ({
      ...p, slug: 'arkiv-' + i, category: p.cat, kicker: p.proto, summary: p.verdict, type: typeFor(p.cat), status:'Fra arkivet',
      image:'images/products/' + typeFor(p.cat) + '.svg', imageNote:'Redaktionel illustration · ikke et produktfoto',
      body:[{heading:'Den redaktionelle vurdering',text:p.verdict},{heading:'Inden du vælger',text:'Kontrollér det præcise modelnummer, firmware og kompatibilitet med dit nuværende setup. Sammenlign producentens aktuelle dokumentation med de funktioner, du har brug for. Den oprindelige katalogpost er bevaret; der er ikke tilføjet egne testresultater.'}]
    }))).map(localizeEntry);
  }
  const articleURL = slug => 'review.html?produkt=' + encodeURIComponent(slug) + (preview ? '&preview=1' : '');
  const priceURL = name => 'https://www.pricerunner.dk/search?q=' + encodeURIComponent(name);
  function imageHTML(e, lazy = true) { if (e.imagePresentation === 'u200-crop') return `<div class="product-photo-window"><img src="${esc(safeURL(e.image))}" alt="${esc(e.imageModel || e.name)}" width="1965" height="2560" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} class="photo-detail"></div>`; return `<img src="${esc(safeURL(e.image || 'images/products/' + (e.type || 'hub') + '.svg'))}" alt="${esc(isPhoto(e) ? (e.imageModel || e.name) : T('Teknisk illustration til') + ' ' + e.name)}" width="800" height="520" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} class="${isPhoto(e) ? (e.imageScene ? 'photo scene' : 'photo') : ''}">`; }
  function card(e, index = 0, archive = false) {
    return `<a class="feature-card" href="${articleURL(e.slug)}"><div class="feature-media">${imageHTML(e)}<span class="pill">${esc(T(e.status || 'Teknisk analyse'))}</span><span class="feature-index">${String(index + 1).padStart(2,'0')} /</span></div><div class="image-credit">${esc(e.imageNote)}</div><div class="feature-body"><span class="feature-category">${esc(T(e.category))} / ${esc(e.kicker)}</span><h3>${esc(e.name)}</h3><p>${esc(e.summary)}</p><div class="feature-bottom"><span>${T(e.status === 'På radaren' ? 'Læs forhåndsanalysen' : e.status === 'Egen test' ? 'Læs anmeldelsen' : archive ? 'Åbn gennemgangen' : 'Læs den tekniske analyse')}</span><span aria-hidden="true"><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></div></div></a>`;
  }
  function legacy(e) { const n = (e.sourceName || e.name).toLowerCase(); return (config.catalog || []).find(p => p.name.toLowerCase() === n); }
  function renderCatalogue() {
    const list = entries().filter(e => (category === 'Alle' || e.category === category) && `${e.name} ${e.sourceName || ''} ${e.category} ${T(e.category)} ${e.kicker} ${e.summary}`.toLocaleLowerCase('da').includes(query.toLocaleLowerCase('da')));
    $('#catalog').innerHTML = list.length ? list.slice(0,pageSize).map((e,i) => card(e,i,true)).join('') : `<div class="empty"><h3>${T('Ingen produkter fundet.')}</h3><p>${T('Prøv et andet søgeord eller en anden kategori.')}</p><button class="text-link" id="reset-filters">${T('Nulstil søgning og filtre')} <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></button></div>`;
    $('#result-count').textContent = I18N.phrases ? I18N.phrases.reviews(Math.min(pageSize,list.length), list.length) : `${Math.min(pageSize,list.length)} af ${list.length} gennemgange`;
    $('#more-products').hidden = pageSize >= list.length;
    document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b.dataset.cat === category); b.setAttribute('aria-pressed', String(b.dataset.cat === category)); });
    bindImageFallbacks();
  }
  function showCatalogue(open, focus = false) {
    catalogueOpen = open;
    $('#catalog-panel').hidden = !open; $('#catalog-gateway').hidden = open;
    $('#open-catalog').setAttribute('aria-expanded', String(open));
    if (open) { renderCatalogue(); if (focus) $('#catalog-search').focus({preventScroll:true}); }
    else if (focus) $('#open-catalog').focus({preventScroll:true});
  }
  function renderHome() {
    const journal = config.journal;
    $('#hero-eyebrow').textContent = journal.eyebrow;
    $('#hero-title').textContent = journal.title;
    $('#hero-accent').textContent = journal.titleAccent;
    $('#hero-intro').textContent = journal.intro;
    const all = entries();
    $('#featured').innerHTML = journal.featured.map(slug => all.find(e => e.slug === slug)).filter(Boolean).slice(0,3).map((e,i) => card(e,i)).join('');
    const method = [
      ['Teknik med kontekst', 'Dækning, stabilitet, opsætning og hverdagsbrug. Vi forklarer, hvad der betyder noget i dit hjem.'],
      ['Hele billedet', 'Begrænsninger, kompatibilitet og abonnementer får plads sammen med de spændende funktioner.'],
      ['Tydelig dokumentation', 'En analyse kaldes en analyse. Egne målinger og betaerfaringer kræver dokumenterede resultater.'],
      ['Åben økonomi', 'Siden kan indeholde affiliate-links. En kommission må aldrig være et argument for en anbefaling.']
    ];
    $('#method-items').innerHTML = method.map(([t,d],i) => `<div class="method-item"><span class="number">0${i+1} /</span><h3>${T(t)}</h3><p>${T(d)}</p></div>`).join('');
    $('#catalog-count').textContent = all.length;
    const cats = ['Alle', ...new Set(all.map(e=>e.category))];
    $('#filters').innerHTML = cats.map(c => `<button class="filter" data-cat="${esc(c)}" aria-pressed="${c===category}">${esc(T(c))}</button>`).join('');
    $('#standards-sub').textContent = config.standardsHead.sub;
    $('#standards-intro').innerHTML = `<h3>${esc(config.standardsIntro.leftTitle)}</h3>${cleanHTML(config.standardsIntro.leftHtml)}<details><summary>${esc(config.standardsIntro.rightTitle)} <span>+</span></summary><div>${cleanHTML(config.standardsIntro.rightHtml)}</div></details>`;
    $('#standards-cards').innerHTML = config.standards.map((s,i) => `<article class="standard"><div class="standard-top"><span>0${i+1} /</span><svg viewBox="0 0 24 24" aria-hidden="true">${window.STD_ICONS[s.n] || window.STD_ICONS._default}</svg></div><h3>${esc(s.n)}</h3><span class="standard-kicker">${esc(s.k)}</span><p>${esc(s.p)}</p><p class="standard-need">${cleanHTML(s.need)}</p></article>`).join('');
    $('#comparison-body').innerHTML = config.compare.map(r => `<tr>${['std','type','freq','hub','best'].map((k,i) => `<${i?'td':'th'}>${esc(r[k])}</${i?'td':'th'}>`).join('')}</tr>`).join('');
    $('#helper-title').textContent = config.helper.title;
    $('#helper-tip').textContent = config.helper.tip;
    $('#helper-rows').innerHTML = config.helper.rows.map(r => `<div class="helper-row"><p>${esc(r.q)}</p><b>${esc(r.a)}</b></div>`).join('');
    $('#offer-text').textContent = T('WiFi-huller, en hub for meget eller en robot, der skal finde vej. Få overblik over opgaven, før du tager fat i en installatør.');
    $('#offer-benefits').innerHTML = ['Beskriv dit netværk eller smart home-projekt','Saml dine ønsker i en opgavebeskrivelse','Tag beskrivelsen med til en fagperson'].map(t=>`<li>${T(t)}</li>`).join('');
    $('#offer-title').textContent = config.offer.formTitle;
    const currentCategory = $('#offer-category').value;
    $('#offer-category').innerHTML = `<option value="">${T('Vælg en kategori')}</option>` + config.offer.formCats.map(c => `<option>${esc(c)}</option>`).join('');
    $('#offer-category').value = currentCategory;
    $('#faq-list').innerHTML = config.faqs.map(f => `<details><summary>${esc(f.q)} <span>+</span></summary><p>${esc(f.a)}</p></details>`).join('');
    $('#footer-columns').innerHTML = config.footer.columns.map(col => `<div><h4>${esc(col.title)}</h4>${col.links.map(l => {
      let href = safeURL(l.href), info = '';
      if (/privatliv|privacy/.test(l.label.toLowerCase())) { href='#privatliv'; info=' data-info="privacy"'; }
      if (/kontakt|contact/.test(l.label.toLowerCase())) { href='#kontakt'; info=' data-info="contact"'; }
      return `<a href="${esc(href)}"${info}>${esc(l.label)}</a>`;
    }).join('')}</div>`).join('');
    $('#disclosure').innerHTML = cleanHTML(config.footer.disclosure);
    $('#copyright').textContent = T('© 2026 WiFiHuset · Et hjem fuld af muligheder');
    showCatalogue(catalogueOpen);
    bindImageFallbacks();
  }
  const checklists = {
    'Netværk':['Mål samme klient fra samme placering før og efter.','Registrér backhaul, kanalvalg og firmware.','Prøv roaming og lokal trafik, ikke kun en internettest.'],
    'Have & Robot':['Notér præcis model, firmware og areal.','Registrér afbrudte ture og manuel indgriben.','Vurdér forhindringer, vedligeholdelse og løbende udgifter.'],
    'Sikkerhed':['Kontrollér mekanisk pasform og kompatibilitet.','Afprøv nødadgang og brug uden internet.','Gennemgå delte adgange, lagring og privatliv.'],
    'Lys':['Kontrollér hub, protokol og fysiske kontakter.','Sammenlign dæmpning og lys i det konkrete rum.','Afprøv automatiseringer efter strøm- og netværksudfald.'],
    'Klima & Energi':['Kontrollér præcis variant, belastning og installation.','Sammenlign målinger med en kendt reference.','Afklar lokale funktioner, firmware og abonnementer.'],
    'Hub & Sensorer':['Kortlæg eksisterende hubs og protokoller.','Afklar controller, bro og Border Router hver for sig.','Dokumentér placering, batteri og adfærd ved udfald.']
  };
  function renderArticle() {
    const slug = new URLSearchParams(location.search).get('produkt');
    const e = entries().find(e => e.slug === slug);
    if (!e) { document.title=T('Artikel ikke fundet — WiFiHuset'); $('#article').innerHTML = `<div class="article-error"><p class="eyebrow">${T('404 / UDEN FOR RADAREN')}</p><h1>${T('Den gennemgang findes ikke.')}</h1><p>${T('Find et produkt i vores udstyrsarkiv.')}</p><a class="button dark" href="index.html#anbefalinger">${T('Til udstyrsarkivet')} <span><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a></div>`; return; }
    document.title = e.name + ' — ' + T(e.status) + ' | WiFiHuset';
    document.querySelector('meta[name=description]').content = e.summary;
    const old = legacy(e), winner = config.winners.find(w => w.name.toLowerCase()===(e.sourceName || e.name).toLowerCase());
    const related = entries().filter(p => p.slug!==e.slug).sort((a,b) => Number(b.category===e.category)-Number(a.category===e.category)).slice(0,2);
    const time = Math.max(2,Math.ceil(e.body.reduce((n,s) => n+s.text.split(/\s+/).length,0)/170));
    $('#article').innerHTML = `<div class="article-breadcrumb"><a href="index.html">${T('Forside')}</a><span>/</span><a href="index.html#anbefalinger">${T('Udstyrsarkivet')}</a><span>/</span><span>${esc(T(e.category))}</span></div><div class="article-hero"><div class="article-title"><p class="eyebrow">${esc(T(e.category))} / ${esc(e.kicker)}</p><h1>${esc(e.name)}</h1><p class="article-lead">${esc(e.summary)}</p><div class="article-meta"><span class="pill">${esc(T(e.status))}</span><span>${time} ${T('MIN. LÆSNING')}</span><span>WiFiHuset</span></div></div><figure class="article-visual">${imageHTML(e,false)}<figcaption>${esc(e.imageNote)}${e.imageSource ? `<span class="photo-source">${T('Kilde:')} <a href="${esc(safeURL(e.imageSource))}" target="_blank" rel="noopener noreferrer">${esc(e.imageCredit || T('Produktdokumentation'))}</a></span>` : ''}</figcaption></figure></div><div class="article-layout"><aside class="article-aside"><div class="article-aside-inner"><h2>${T('I DENNE GENNEMGANG')}</h2><nav aria-label="${T('Artiklens indhold')}">${e.body.map((s,i)=>`<a href="#afsnit-${i}">0${i+1} / ${esc(s.heading)}</a>`).join('')}<a href="#checkliste">${T('Inden du køber')}</a></nav>${e.status==='På radaren' ? `<p>${T('Dansk pris og specifikationer afventer bekræftelse. Ingen testkarakter endnu.')}</p>` : `<a class="button dark" href="${priceURL(e.name)}" target="_blank" rel="noopener noreferrer nofollow sponsored">${T('Sammenlign priser')} <span><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><p>${T('Eksternt link til PriceRunner. Vi henter ikke livepriser på siden.')}</p>`}</div></aside><div class="article-body"><div class="analysis-note">${T(e.status==='På radaren' ? '<b>På radaren.</b> En forhåndsanalyse af det, vi vil undersøge. Ingen egne målinger eller bekræftet betaadgang.' : e.status==='Egen test' ? '<b>Egen test.</b> Denne anmeldelse bygger på vores egen opsætning og brug af produktet. Specifikationer er hentet fra producentens dokumentation; pris og tilgængelighed bør kontrolleres før køb.' : '<b>Om grundlaget.</b> Dette er en teknisk analyse. Der er ikke tilføjet nye egne produkttest eller betaresultater.')}</div>${e.body.map((s,i)=>`<section id="afsnit-${i}"><h2>${esc(s.heading)}</h2><p>${esc(s.text).replace(/\n\n/g,'</p><p>')}</p></section>`).join('')}<div class="article-checks" id="checkliste"><h3>${T('Inden du køber')}</h3><ul>${(checklists[e.category] || checklists['Hub & Sensorer']).map(t=>`<li>${esc(T(t))}</li>`).join('')}</ul></div>${old || winner ? `<details class="archive-note"><summary>${T('Fra det oprindelige katalog')} <span>+</span></summary><div><p>${T('Bevaret arkivmateriale. Tallene er tidligere redaktionelle vurderinger, ikke nye dokumenterede målinger. Produktvarianter, priser og tekniske påstande bør kontrolleres før køb.')}</p>${old ? `<p><b>${T('Tidligere katalogscore')}: ${esc(old.score)} / 10</b></p><p>${esc(old.verdict)}</p><p>${esc(old.proto)}</p>` : ''}${winner ? `<div class="legacy-winners"><h3>${esc(winner.award)}</h3><p>${esc(winner.verdict)}</p><p>${T('Tidligere prisangivelse')}: ${esc(winner.price)} · ${T('ikke en livepris')}</p><ul>${winner.pros.map(t=>`<li>+ ${esc(t)}</li>`).join('')}${winner.cons.map(t=>`<li>− ${esc(t)}</li>`).join('')}</ul></div>`:''}</div></details>`:''}<p class="article-source">${T('Læs også:')} <a href="index.html#standarder">${T('vores guide til protokoller og kompatibilitet')}</a>. ${T('Kontrollér aktuelle modeloplysninger i producentens dokumentation. Analysen er ikke en sammenfatning af verificerede eksterne anmeldelser.')}</p></div></div><section class="article-related"><h2>${T('Fortsæt nørderiet.')}</h2><div class="featured-grid">${related.map((e,i)=>card(e,i)).join('')}</div></section>`;
    bindImageFallbacks();
  }
  function bindImageFallbacks() {
    document.querySelectorAll('img').forEach(img => img.addEventListener('error', () => { if (!img.dataset.fallback) { img.dataset.fallback='1'; const placeholder = document.createElement('div'); placeholder.className='photo-unavailable'; placeholder.setAttribute('role','img'); placeholder.setAttribute('aria-label',img.alt + ': ' + T('foto kunne ikke indlæses')); placeholder.innerHTML='<span>' + T('Produktbilledet kunne ikke indlæses.') + '</span>'; img.replaceWith(placeholder); } }, {once:true}));
  }
  if (!isArticle) {
    $('.menu-toggle').addEventListener('click', e => { const open=e.currentTarget.getAttribute('aria-expanded')!=='true'; e.currentTarget.setAttribute('aria-expanded',String(open)); e.currentTarget.setAttribute('aria-label',T(open?'Luk menu':'Åbn menu')); e.currentTarget.textContent=open?'✕':'☰'; $('#main-nav').classList.toggle('open',open); });
    $('#main-nav').addEventListener('click', e => { if (e.target.closest('a')) { $('.menu-toggle').setAttribute('aria-expanded','false'); $('.menu-toggle').setAttribute('aria-label',T('Åbn menu')); $('.menu-toggle').textContent='☰'; $('#main-nav').classList.remove('open'); } });
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('.menu-toggle').getAttribute('aria-expanded')==='true'){$('.menu-toggle').click();$('.menu-toggle').focus();}});
    $('#open-catalog').addEventListener('click',()=>showCatalogue(true,true));
    $('#close-catalog').addEventListener('click',()=>showCatalogue(false,true));
    $('#catalog-search').addEventListener('input',e=>{query=e.target.value;pageSize=6;renderCatalogue();});
    $('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(b){category=b.dataset.cat;pageSize=6;renderCatalogue();}});
    $('#more-products').addEventListener('click',()=>{pageSize+=6;renderCatalogue();});
    $('#catalog').addEventListener('click',e=>{if(e.target.closest('#reset-filters')){category='Alle';query='';pageSize=6;$('#catalog-search').value='';renderCatalogue();$('#catalog-search').focus();}});
    $('#project-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const text=I18N.phrases ? I18N.phrases.brief(data.get('name'),data.get('postcode'),data.get('category'),data.get('description')) : `OPGAVEBESKRIVELSE / WiFiHuset\n\nNavn: ${data.get('name')}\nPostnummer: ${data.get('postcode')}\nKategori: ${data.get('category')}\n\n${data.get('description')}\n\nDette er en lokal opgavebeskrivelse. Den er ikke sendt til WiFiHuset eller en installatør.\n`;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=I18N.phrases ? I18N.phrases.briefFile() : 'wifihuset-mit-projekt.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#form-status').textContent=T('Din opgavebeskrivelse er klar til download. Intet er sendt.');});
    document.addEventListener('click',e=>{const link=e.target.closest('[data-info]');if(!link)return;e.preventDefault();$('#info-content').innerHTML=link.dataset.info==='privacy'?(I18N.phrases?(EN?I18N.phrases.privacy:I18N.phrases.privacyDa):'')+'':(EN&&I18N.phrases?I18N.phrases.contact:'<h2>Kontakt redaktionen</h2><p>Der er endnu ikke angivet en offentlig kontaktadresse. Undlad at sende adgangskoder eller andre følsomme oplysninger via produktlinks.</p><p>Har du brug for hjælp til et setup, kan du forberede en opgavebeskrivelse i sektionen “Hjælp til dit setup”.</p>');$('#info-dialog').showModal();});
    $('.dialog-close').addEventListener('click',()=>$('#info-dialog').close());
    $('#info-dialog').addEventListener('click',e=>{if(e.target===$('#info-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
  }
  function render() { if (isArticle) renderArticle(); else renderHome(); }
  render();
  // Load optional cloud content after local rendering. Slow or blocked SDKs never blank the site.
  function loadScript(src) { return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.async=true;s.onload=resolve;s.onerror=reject;document.head.appendChild(s);}); }
  async function cloudContent() {
    if(preview || !window.FIREBASE_CONFIG?.apiKey) return;
    try {
      await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
      await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js');
      if(!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
      const snap=await firebase.firestore().doc('site/config').get();
      if(snap.exists){
        const remote=snap.data();
        const localCatalogue=config.catalog;
        const localEntries=config.journal.entries;
        const localFeatured=config.journal.featured, localVersion=config.journal.version||0;
        config=merge(config,remote);
        // Retain the original archive when older cloud records contain only a partial catalogue.
        const remoteNames=new Set((config.catalog||[]).map(p=>p.name));
        config.catalog=[...(config.catalog||[]),...localCatalogue.filter(p=>!remoteNames.has(p.name))];
        // Keep newly shipped articles visible when the cloud document holds an older journal.
        const remoteSlugs=new Set((config.journal?.entries||[]).map(e=>e.slug));
        if(config.journal) config.journal.entries=[...(config.journal.entries||[]),...localEntries.filter(e=>!remoteSlugs.has(e.slug))];
        // A newer shipped journal version decides the front-page picks over an older cloud selection.
        if(config.journal && (remote.journal?.version||0) < localVersion) config.journal.featured=localFeatured;
        config=localizeConfig(config);
        render();
      }
    } catch { /* Static local editorial content remains available. */ }
  }
  cloudContent();
})();
