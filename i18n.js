/* WiFiHuset language layer.
   Decides Danish or English without any third-party service:
   1. ?lang=da|en in the URL (saved as the visitor's choice)
   2. A choice saved earlier with the DA/EN switch
   3. Search engines and automated browsers always get Danish (the site's primary language)
   4. A device clock set to Danish, Faroese or Greenlandic time gets Danish (a privacy-friendly stand-in for a Danish IP)
   5. A browser set to Danish, Faroese or Greenlandic gets Danish
   6. Everyone else gets English */
(() => {
  'use strict';
  const KEY = 'wifihuset_lang';
  const DANISH_ZONES = ['Europe/Copenhagen', 'Atlantic/Faroe', 'Atlantic/Faeroe', 'America/Nuuk', 'America/Godthab', 'America/Danmarkshavn', 'America/Scoresbysund', 'America/Thule'];
  const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const save = lang => { try { localStorage.setItem(KEY, lang); } catch { /* Private mode: the choice lasts for this page only. */ } };
  function detect() {
    const param = new URLSearchParams(location.search).get('lang');
    if (param === 'da' || param === 'en') { save(param); return param; }
    const saved = read();
    if (saved === 'da' || saved === 'en') return saved;
    if (navigator.webdriver || /bot|crawl|spider|slurp|bingpreview|lighthouse|facebookexternalhit|embedly|preview/i.test(navigator.userAgent)) return 'da';
    let zone = '';
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { /* Older browsers. */ }
    if (DANISH_ZONES.includes(zone)) return 'da';
    const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map(l => String(l).toLowerCase());
    if (langs.some(l => /^(da|fo|kl)(-|$)/.test(l))) return 'da';
    return 'en';
  }
  const lang = detect();

  // Danish source text -> English. Used for static HTML and for interface strings in site.js.
  const EN = {
    // Page titles and descriptions
    'WiFiHuset — Teknologien. Hjemmet. Detaljerne.': 'WiFiHuset — The technology. The home. The details.',
    'Gå under overfladen på smart home, WiFi og robotter. Dybe produktanalyser, forståelige guides og et skarpere blik på dit forbundne hjem.': 'Go beneath the surface of smart home, WiFi and robots. In-depth product analysis, clear guides and a sharper look at your connected home.',
    'Produktanalyse — WiFiHuset': 'Product analysis — WiFiHuset',
    'Teknik, kompatibilitet og forbehold. Læs WiFiHusets dybere produktgennemgang.': 'Technology, compatibility and caveats. Read WiFiHuset’s in-depth product review.',
    'WiFiHuset Energi AI · Android og iPhone | WiFiHuset': 'WiFiHuset Energy AI · Android and iPhone | WiFiHuset',
    'Hent WiFiHuset Energi AI til Android eller iPhone. Lukket beta med Google-login og personlig invitationsnøgle fra WiFiHuset.': 'Get WiFiHuset Energy AI for Android or iPhone. Closed beta with Google sign-in and a personal invitation key from WiFiHuset.',
    // Header and navigation
    'Spring til indhold': 'Skip to content',
    'Spring til artikel': 'Skip to article',
    'UAFHÆNGIGE PERSPEKTIVER PÅ ET FORBUNDET HJEM': 'INDEPENDENT PERSPECTIVES ON THE CONNECTED HOME',
    'DANMARK': 'DENMARK',
    'WiFiHuset, forsiden': 'WiFiHuset, home',
    'Hovedmenu': 'Main menu',
    'I fokus': 'In focus',
    'Udstyr': 'Gear',
    'Vidensbank': 'Knowledge',
    'Bag vurderingen': 'Our method',
    'Energi AI': 'Energy AI',
    'Hvad kan jeg spare?': 'What could I save?',
    'Hjælp til dit setup': 'Help with your setup',
    'Åbn menu': 'Open menu',
    'Luk menu': 'Close menu',
    '← Tilbage til udstyret': '← Back to the gear',
    // Hero
    'ET HJEM. TUSIND MULIGHEDER.': 'ONE HOME. A THOUSAND POSSIBILITIES.',
    'Dit hjem.': 'Your home.',
    'Næste niveau.': 'Next level.',
    'Gå på opdagelse': 'Start exploring',
    'Forstå teknologien': 'Understand the technology',
    'Detaljerne gør forskellen.': 'The details make the difference.',
    'Teknik i dybden. Forklaret på dansk.': 'Tech in depth. Explained in plain English.',
    'ANTHBOT M9 Pro fra producentens produktkatalog': 'ANTHBOT M9 Pro from the manufacturer’s product catalogue',
    'NÆSTE STOP: HAVEN': 'NEXT STOP: THE GARDEN',
    'PÅ RADAREN / ANTHBOT M9 PRO': 'ON THE RADAR / ANTHBOT M9 PRO',
    'Haven går': 'The garden is entering',
    'ind i en ny æra.': 'a new era.',
    'Læs om det forbundne hjem': 'Read about the connected home',
    'Produktfoto: ANTHBOT · M9 Pro': 'Product photo: ANTHBOT · M9 Pro',
    'VI NØRDER MED': 'WE GEEK OUT ON',
    'Robotter & LiDAR': 'Robots & LiDAR',
    'Et smartere hjem': 'A smarter home',
    // Featured
    '01 / PÅ VORES RADAR': '01 / ON OUR RADAR',
    'Nyt gear.': 'New gear.',
    'Nye muligheder.': 'New possibilities.',
    'Det nye, det interessante og det, der fortjener et ekstra kig. Tre nedslag i et hjem i udvikling.': 'The new, the interesting and the things that deserve a second look. Three stops in a home in progress.',
    // Method
    '02 / BAG VURDERINGEN': '02 / BEHIND THE VERDICT',
    'Nørdet med vilje.': 'Geeky on purpose.',
    'Åbent om detaljerne.': 'Open about the details.',
    'Et datablad er begyndelsen. Det interessante er, hvad teknologien betyder i et rigtigt hjem.': 'A spec sheet is only the beginning. What matters is what the technology means in a real home.',
    'Se vores testprotokol': 'See our test protocol',
    'Testprotokol & dokumentation': 'Test protocol & documentation',
    'Det skal kunne gentages': 'It has to be repeatable',
    'En dokumenteret test skal angive model, firmware, dato og opsætning. Netværk måles med samme klient og server; robotter med kendt areal og registreret manuel indgriben; låse med beskrevet dør og nødadgang.': 'A documented test must state the model, firmware, date and setup. Networks are measured with the same client and server; robots on a known area with manual interventions logged; locks with the door and emergency access described.',
    'Analyse er ikke en måling': 'Analysis is not measurement',
    'Produktanalyserne på siden er tekniske gennemgange. Betaadgang, egne testresultater og målte hastigheder oplyses kun, når dokumentationen findes. Tidligere karakterer og vurderinger er bevaret som arkivmateriale.': 'The product analyses on this site are technical reviews. Beta access, our own test results and measured speeds are only stated when the documentation exists. Earlier scores and verdicts are kept as archive material.',
    'Teknik med kontekst': 'Tech with context',
    'Dækning, stabilitet, opsætning og hverdagsbrug. Vi forklarer, hvad der betyder noget i dit hjem.': 'Coverage, stability, setup and everyday use. We explain what matters in your home.',
    'Hele billedet': 'The whole picture',
    'Begrænsninger, kompatibilitet og abonnementer får plads sammen med de spændende funktioner.': 'Limitations, compatibility and subscriptions get space alongside the exciting features.',
    'Tydelig dokumentation': 'Clear documentation',
    'En analyse kaldes en analyse. Egne målinger og betaerfaringer kræver dokumenterede resultater.': 'An analysis is called an analysis. Our own measurements and beta experience require documented results.',
    'Åben økonomi': 'Open finances',
    'Siden kan indeholde affiliate-links. En kommission må aldrig være et argument for en anbefaling.': 'The site may contain affiliate links. A commission must never be an argument for a recommendation.',
    // Catalogue
    '03 / UDSTYRSARKIVET': '03 / THE GEAR ARCHIVE',
    'Hele samlingen.': 'The whole collection.',
    'I dit eget tempo.': 'At your own pace.',
    'De oprindelige anbefalinger er her stadig. Find din kategori, og åbn en grundigere gennemgang.': 'The original recommendations are still here. Find your category and open a more thorough review.',
    'Produktfoto af TP-Link Deco XE75 Pro mesh-routere': 'Product photo of TP-Link Deco XE75 Pro mesh routers',
    'NETVÆRK / ROBOTTER / SIKKERHED / LYS': 'NETWORK / ROBOTS / SECURITY / LIGHTING',
    'Dit næste projekt': 'Your next project',
    'starter her.': 'starts here.',
    'produkter og produktfamilier. Ingen endeløs produktvæg.': 'products and product families. No endless wall of products.',
    'Åbn udstyrsarkivet': 'Open the gear archive',
    'Søg efter produkt eller teknologi': 'Search for a product or technology',
    'Søg i udstyrsarkivet': 'Search the gear archive',
    'Luk arkivet ↑': 'Close the archive ↑',
    'Filtrér udstyr': 'Filter gear',
    'Vis flere produkter': 'Show more products',
    'Ingen produkter fundet.': 'No products found.',
    'Prøv et andet søgeord eller en anden kategori.': 'Try another search term or category.',
    'Nulstil søgning og filtre': 'Reset search and filters',
    // Categories and statuses
    'Alle': 'All',
    'Netværk': 'Network',
    'Have & Robot': 'Garden & Robots',
    'Sikkerhed': 'Security',
    'Lys': 'Lighting',
    'Klima & Energi': 'Climate & Energy',
    'Hub & Sensorer': 'Hubs & Sensors',
    'Egen test': 'Hands-on review',
    'På radaren': 'On the radar',
    'Teknisk analyse': 'Technical analysis',
    'Fra arkivet': 'From the archive',
    'Læs forhåndsanalysen': 'Read the preview analysis',
    'Læs anmeldelsen': 'Read the review',
    'Åbn gennemgangen': 'Open the review',
    'Læs den tekniske analyse': 'Read the technical analysis',
    'Redaktionel illustration · ikke et produktfoto': 'Editorial illustration · not a product photo',
    'Teknisk illustration til': 'Technical illustration for',
    'Den redaktionelle vurdering': 'The editorial verdict',
    'Inden du vælger': 'Before you choose',
    'Kontrollér det præcise modelnummer, firmware og kompatibilitet med dit nuværende setup. Sammenlign producentens aktuelle dokumentation med de funktioner, du har brug for. Den oprindelige katalogpost er bevaret; der er ikke tilføjet egne testresultater.': 'Check the exact model number, firmware and compatibility with your current setup. Compare the manufacturer’s current documentation with the features you need. The original catalogue entry is preserved; no test results of our own have been added.',
    // Standards
    '04 / FORSTÅ DIT SETUP': '04 / UNDERSTAND YOUR SETUP',
    'Samme hjem.': 'Same home.',
    'Forskellige sprog.': 'Different languages.',
    'Matter forbinder smart home-platforme via WiFi og Thread. Zigbee kræver en bro.': 'Matter connects smart home platforms over WiFi and Thread. Zigbee needs a bridge.',
    'SYSTEMARKITEKTUR / 001': 'SYSTEM ARCHITECTURE / 001',
    'DET FÆLLES SPROG': 'THE SHARED LANGUAGE',
    'APPARATER': 'APPLIANCES',
    'SENSORER': 'SENSORS',
    'LÅSE': 'LOCKS',
    'RADIO ≠ PROTOKOL': 'RADIO ≠ PROTOCOL',
    'Sammenlign alle standarderne': 'Compare all the standards',
    'Sammenligning af smart home-standarder': 'Comparison of smart home standards',
    'Radio, krav og anvendelse': 'Radio, requirements and use',
    'Frekvens': 'Frequency',
    'Du skal bruge': 'You need',
    'Bedst til': 'Best for',
    'KORT SAGT': 'IN SHORT',
    // Offer
    '05 / FRA IDÉ TIL INSTALLATION': '05 / FROM IDEA TO INSTALLATION',
    'Et godt setup.': 'A good setup.',
    'Også uden nørderiet.': 'Even without the geekery.',
    'FORBIND PRIKKERNE.': 'CONNECT THE DOTS.',
    'FÅ HJÆLP TIL RESTEN.': 'GET HELP WITH THE REST.',
    'DIT NÆSTE PROJEKT': 'YOUR NEXT PROJECT',
    'Tilbudstjenesten er ikke tilsluttet endnu. Du kan forberede og downloade din opgavebeskrivelse her. Intet sendes til os.': 'The quote service is not connected yet. You can prepare and download your project brief here. Nothing is sent to us.',
    'Dit navn': 'Your name',
    'Hvad hedder du?': 'What’s your name?',
    'Postnummer': 'Postcode',
    'Fx 8000': 'E.g. 8000',
    'Hvad vil du have hjælp til?': 'What do you need help with?',
    'Vælg en kategori': 'Choose a category',
    'Fortæl lidt om dit projekt': 'Tell us a little about your project',
    'Boligens størrelse, dit nuværende setup og hvad du drømmer om …': 'The size of your home, your current setup and what you dream of …',
    'Download min opgavebeskrivelse': 'Download my project brief',
    'Gemmes kun i den fil, du selv downloader.': 'Only saved in the file you download yourself.',
    'WiFi-huller, en hub for meget eller en robot, der skal finde vej. Få overblik over opgaven, før du tager fat i en installatør.': 'WiFi dead spots, one hub too many or a robot that needs to find its way. Get an overview of the job before you call an installer.',
    'Beskriv dit netværk eller smart home-projekt': 'Describe your network or smart home project',
    'Saml dine ønsker i en opgavebeskrivelse': 'Gather your wishes in a project brief',
    'Tag beskrivelsen med til en fagperson': 'Take the brief to a professional',
    'Din opgavebeskrivelse er klar til download. Intet er sendt.': 'Your project brief is ready to download. Nothing has been sent.',
    // FAQ and footer
    'GODT SPURGT': 'GOOD QUESTION',
    'Lad os tage': 'Let’s cover',
    'det sidste.': 'the rest.',
    'De spørgsmål, der ofte følger med et smartere hjem.': 'The questions that often come with a smarter home.',
    'Teknologien. Hjemmet.': 'The technology. The home.',
    'Alle de nørdede detaljer.': 'All the geeky details.',
    'BYGGET PÅ NYSGERRIGHED': 'BUILT ON CURIOSITY',
    'Redaktion': 'Editorial',
    'Luk vindue': 'Close window',
    '© 2026 WiFiHuset · Et hjem fuld af muligheder': '© 2026 WiFiHuset · A home full of possibilities',
    'Aktivér JavaScript for at se produktarkivet og de tekniske guides. WiFiHuset er et dansk magasin om smart home og WiFi.': 'Enable JavaScript to see the product archive and the technical guides. WiFiHuset is a Danish magazine about smart home and WiFi.',
    // Article page
    'Sådan vurderer vi udstyr': 'How we assess gear',
    'Hele udstyrsarkivet': 'The whole gear archive',
    'Aktivér JavaScript for at læse produktgennemgangen.': 'Enable JavaScript to read the product review.',
    'Artikel ikke fundet — WiFiHuset': 'Article not found — WiFiHuset',
    '404 / UDEN FOR RADAREN': '404 / OFF THE RADAR',
    'Den gennemgang findes ikke.': 'That review doesn’t exist.',
    'Find et produkt i vores udstyrsarkiv.': 'Find a product in our gear archive.',
    'Til udstyrsarkivet': 'To the gear archive',
    'Forside': 'Home',
    'Udstyrsarkivet': 'Gear archive',
    'MIN. LÆSNING': 'MIN. READ',
    'I DENNE GENNEMGANG': 'IN THIS REVIEW',
    'Artiklens indhold': 'Article contents',
    'Inden du køber': 'Before you buy',
    'Dansk pris og specifikationer afventer bekræftelse. Ingen testkarakter endnu.': 'Pricing and specifications await confirmation. No test score yet.',
    'Sammenlign priser': 'Compare prices',
    'Eksternt link til PriceRunner. Vi henter ikke livepriser på siden.': 'External link to PriceRunner (Danish prices). We don’t fetch live prices on this site.',
    '<b>På radaren.</b> En forhåndsanalyse af det, vi vil undersøge. Ingen egne målinger eller bekræftet betaadgang.': '<b>On the radar.</b> A preview analysis of what we want to investigate. No measurements of our own or confirmed beta access.',
    '<b>Egen test.</b> Denne anmeldelse bygger på vores egen opsætning og brug af produktet. Specifikationer er hentet fra producentens dokumentation; pris og tilgængelighed bør kontrolleres før køb.': '<b>Hands-on review.</b> This review is based on our own setup and use of the product. Specifications come from the manufacturer’s documentation; check price and availability before buying.',
    '<b>Om grundlaget.</b> Dette er en teknisk analyse. Der er ikke tilføjet nye egne produkttest eller betaresultater.': '<b>About the basis.</b> This is a technical analysis. No new product tests or beta results of our own have been added.',
    'Det interessante': 'What makes it interesting',
    'Under overfladen': 'Under the surface',
    'Det skal du være opmærksom på': 'What to watch out for',
    'Fra det oprindelige katalog': 'From the original catalogue',
    'Bevaret arkivmateriale. Tallene er tidligere redaktionelle vurderinger, ikke nye dokumenterede målinger. Produktvarianter, priser og tekniske påstande bør kontrolleres før køb.': 'Preserved archive material. The figures are earlier editorial assessments, not new documented measurements. Check product variants, prices and technical claims before buying.',
    'Tidligere katalogscore': 'Earlier catalogue score',
    'Tidligere prisangivelse': 'Earlier price indication',
    'ikke en livepris': 'not a live price',
    'Læs også:': 'Read also:',
    'vores guide til protokoller og kompatibilitet': 'our guide to protocols and compatibility',
    'Kontrollér aktuelle modeloplysninger i producentens dokumentation. Analysen er ikke en sammenfatning af verificerede eksterne anmeldelser.': 'Check current model information in the manufacturer’s documentation. The analysis is not a summary of verified external reviews.',
    'Fortsæt nørderiet.': 'Keep geeking out.',
    'Kilde:': 'Source:',
    'Produktdokumentation': 'Product documentation',
    'foto kunne ikke indlæses': 'photo could not be loaded',
    'Produktbilledet kunne ikke indlæses.': 'The product image could not be loaded.',
    // Checklists
    'Mål samme klient fra samme placering før og efter.': 'Measure the same client from the same spot before and after.',
    'Registrér backhaul, kanalvalg og firmware.': 'Note the backhaul, channel choice and firmware.',
    'Prøv roaming og lokal trafik, ikke kun en internettest.': 'Try roaming and local traffic, not just an internet speed test.',
    'Notér præcis model, firmware og areal.': 'Note the exact model, firmware and area.',
    'Registrér afbrudte ture og manuel indgriben.': 'Log interrupted runs and manual interventions.',
    'Vurdér forhindringer, vedligeholdelse og løbende udgifter.': 'Assess obstacles, maintenance and running costs.',
    'Kontrollér mekanisk pasform og kompatibilitet.': 'Check the mechanical fit and compatibility.',
    'Afprøv nødadgang og brug uden internet.': 'Test emergency access and use without internet.',
    'Gennemgå delte adgange, lagring og privatliv.': 'Review shared access, storage and privacy.',
    'Kontrollér hub, protokol og fysiske kontakter.': 'Check the hub, protocol and physical switches.',
    'Sammenlign dæmpning og lys i det konkrete rum.': 'Compare dimming and light in the actual room.',
    'Afprøv automatiseringer efter strøm- og netværksudfald.': 'Test automations after power and network outages.',
    'Kontrollér præcis variant, belastning og installation.': 'Check the exact variant, load and installation.',
    'Sammenlign målinger med en kendt reference.': 'Compare readings with a known reference.',
    'Afklar lokale funktioner, firmware og abonnementer.': 'Clarify local features, firmware and subscriptions.',
    'Kortlæg eksisterende hubs og protokoller.': 'Map your existing hubs and protocols.',
    'Afklar controller, bro og Border Router hver for sig.': 'Sort out controller, bridge and Border Router separately.',
    'Dokumentér placering, batteri og adfærd ved udfald.': 'Document placement, battery and behaviour during outages.',
    // Language switch
    'Skift sprog': 'Change language'
  };

  const PHRASES = {
    reviews: (shown, total) => lang === 'en' ? `${shown} of ${total} reviews` : `${shown} af ${total} gennemgange`,
    privacy: '<h2>Privacy on WiFiHuset</h2><p>The project form only downloads a file to your own device. We receive neither your name, postcode nor description through the form.</p><p>The administrator’s drafts are stored in the browser’s local storage. When signed in, the administrator can save content through Firebase. The public site can fetch editorial content from Firebase.</p><p>Your language choice (Danish or English) is stored in your browser. It is decided on your device from your browser language and time zone; no location service is contacted.</p><p>External price links open another service with its own terms. No analytics or advertising scripts have been added with this design.</p>',
    privacyDa: '<h2>Privatliv på WiFiHuset</h2><p>Opgaveformularen downloader kun en fil på din egen enhed. Vi modtager hverken navn, postnummer eller beskrivelse via formularen.</p><p>Administratorens kladder gemmes i browserens lokale lager. Ved login kan administratoren gemme indhold via Firebase. Den offentlige side kan hente redaktionelt indhold fra Firebase.</p><p>Dit sprogvalg (dansk eller engelsk) gemmes i din browser. Det afgøres på din enhed ud fra browserens sprog og tidszone; der kontaktes ingen placeringstjeneste.</p><p>Eksterne prislinks åbner en anden tjeneste med egne vilkår. Der er ingen analyse- eller annonceringsscripts tilføjet med dette design.</p>',
    contact: '<h2>Contact the editors</h2><p>No public contact address has been published yet. Don’t send passwords or other sensitive information through product links.</p><p>If you need help with a setup, you can prepare a project brief in the “Help with your setup” section.</p>',
    brief: (name, postcode, category, description) => lang === 'en'
      ? `PROJECT BRIEF / WiFiHuset\n\nName: ${name}\nPostcode: ${postcode}\nCategory: ${category}\n\n${description}\n\nThis is a local project brief. It has not been sent to WiFiHuset or an installer.\n`
      : `OPGAVEBESKRIVELSE / WiFiHuset\n\nNavn: ${name}\nPostnummer: ${postcode}\nKategori: ${category}\n\n${description}\n\nDette er en lokal opgavebeskrivelse. Den er ikke sendt til WiFiHuset eller en installatør.\n`,
    briefFile: () => lang === 'en' ? 'wifihuset-my-project.txt' : 'wifihuset-mit-projekt.txt'
  };

  const t = text => (lang === 'en' && Object.prototype.hasOwnProperty.call(EN, text)) ? EN[text] : text;

  // Translate static text nodes and attributes. Leading and trailing spaces are kept.
  function translateTree(root) {
    if (lang !== 'en' || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => /^(SCRIPT|STYLE|TEXTAREA)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const raw = node.nodeValue, core = raw.trim();
      if (core && EN[core]) node.nodeValue = raw.replace(core, EN[core]);
    });
    root.querySelectorAll('[placeholder],[aria-label],[alt],[title]').forEach(el => ['placeholder', 'aria-label', 'alt', 'title'].forEach(attr => {
      const value = el.getAttribute(attr);
      if (value && EN[value.trim()]) el.setAttribute(attr, EN[value.trim()]);
    }));
  }

  function setLang(next) {
    save(next);
    const url = new URL(location.href);
    url.searchParams.delete('lang');
    location.replace(url.toString());
  }

  function addSwitch() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lang-switch';
    button.lang = lang === 'en' ? 'da' : 'en';
    button.textContent = lang === 'en' ? 'DA' : 'EN';
    button.title = lang === 'en' ? 'Skift til dansk' : 'Switch to English';
    button.setAttribute('aria-label', button.title);
    button.addEventListener('click', () => setLang(lang === 'en' ? 'da' : 'en'));
    const row = document.querySelector('.site-header .nav-row');
    const toggle = row && row.querySelector('.menu-toggle');
    if (toggle) row.insertBefore(button, toggle);
    else if (row) row.appendChild(button);
    else { const main = document.querySelector('main'); if (main) { button.classList.add('lang-switch-floating'); main.prepend(button); } }
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    if (lang === 'en') {
      document.title = t(document.title);
      const description = document.querySelector('meta[name=description]');
      if (description) description.content = t(description.content);
      const postcode = document.querySelector('input[name=postcode]');
      if (postcode) { postcode.removeAttribute('pattern'); postcode.setAttribute('maxlength', '12'); postcode.removeAttribute('inputmode'); }
      const growatt = document.querySelector('.growatt-download');
      if (growatt && window.GROWATT_EN) growatt.innerHTML = window.GROWATT_EN;
      translateTree(document.body);
    }
    addSwitch();
  }

  window.WH_I18N = { lang, t, phrases: PHRASES, setLang, translateTree };
  // Deferred scripts run after parsing, so the static page is ready here and is translated before site.js renders.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyStatic, { once: true });
  else applyStatic();
})();
