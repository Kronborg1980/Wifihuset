from playwright.sync_api import sync_playwright
from pathlib import Path
import json
BASE='http://127.0.0.1:8000'
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 context=browser.new_context(viewport={'width':1440,'height':1000},device_scale_factor=1)
 context.route('**/*',lambda r:r.continue_() if r.request.url.startswith(BASE) else r.abort())
 page=context.new_page(); errors=[]; responses=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 page.on('response',lambda r:responses.append((r.status,r.url)) if r.status>=400 and r.url.startswith(BASE) else None)
 page.goto(BASE,wait_until='networkidle')
 page.evaluate("Promise.all(Array.from(document.images).map(i=>{i.loading='eager';return i.decode().catch(()=>{});} ))")
 page.screenshot(path='/tmp/wifihuset-desktop.png',full_page=True)
 assert page.locator('#featured .feature-card').count()==3
 assert page.locator('#featured img[src$=".svg"]').count()==0
 for filename in ['anthbot-m9-pro.png','asus-zenwifi-bt10.png','aqara-u200.jpg']:
  assert page.locator('#featured img[src$="'+filename+'"]').count()==1
 assert page.locator('#featured .feature-card').first.locator('h3').inner_text()=='ANTHBOT M9 Pro'
 assert page.locator('#catalog-panel').is_hidden()
 page.locator('#open-catalog').click()
 assert page.locator('#catalog .feature-card').count()==6
 assert page.locator('#result-count').inner_text()=='6 af 20 gennemgange'
 page.locator('#more-products').click(); assert page.locator('#catalog .feature-card').count()==12
 page.locator('[data-cat="Lys"]').click(); assert page.locator('#catalog .feature-card').count()==2
 page.locator('#catalog-search').fill('ingenfinderdette'); assert page.locator('.empty').is_visible()
 page.locator('#reset-filters').click(); assert page.locator('#catalog .feature-card').count()==6
 page.locator('#catalog-search').fill('M5'); assert page.locator('#catalog h3').filter(has_text='Anthbot M5 LiDAR').count()==1
 page.locator('#close-catalog').click(); assert page.locator('#catalog-panel').is_hidden()
 page.locator('.comparison summary').click(); assert page.locator('#comparison-body tr').count()==6
 assert page.locator('#standards-cards .standard').count()==6
 assert page.locator('#faq-list details').count()==6
 page.locator('[data-info="privacy"]').click(); assert page.locator('#info-dialog').is_visible();page.keyboard.press('Escape')
 page.locator('[name="name"]').fill('Testperson');page.locator('[name="postcode"]').fill('8000')
 page.locator('#offer-category').select_option(index=1); page.locator('textarea[name="description"]').fill('Mesh i et hus med tykke vægge.')
 with page.expect_download() as event:page.locator('#project-form button').click()
 download=event.value
 assert download.suggested_filename=='wifihuset-mit-projekt.txt'
 assert 'Mesh i et hus' in Path(download.path()).read_text()
 slugs=page.evaluate('DEFAULT_CONFIG.journal.entries.map(e=>e.slug)')
 for slug in slugs:
  page.goto(BASE+'/review.html?produkt='+slug,wait_until='networkidle')
  assert page.locator('.article-body section').count()==3,slug
  assert page.locator('.article-title h1').inner_text(),slug
  assert page.evaluate('Array.from(document.images).every(i=>i.complete&&i.naturalWidth>0)'),slug
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),slug
 page.goto(BASE+'/review.html?produkt=not-real'); assert page.locator('.article-error').is_visible()
 page.goto(BASE+'/admin.html',wait_until='networkidle')
 assert page.locator('#tabs button').count()==13
 assert page.locator('#panel h2').inner_text()=='Forside & produktanalyser'
 page.locator('#panel input').nth(1).fill('Min nye danske forside')
 page.wait_for_function("JSON.parse(localStorage.getItem('wifihuset_draft')).journal.title==='Min nye danske forside'")
 page.evaluate("""() => {const d=JSON.parse(localStorage.getItem('wifihuset_draft')); d.journal.entries.forEach(e=>{if(d.journal.featured.includes(e.slug)){e.image='https://example.com/old-render.jpg';e.imageNote='Redaktionel illustration';}});localStorage.setItem('wifihuset_draft',JSON.stringify(d));}""")
 page.goto(BASE+'/?preview=1',wait_until='networkidle');assert page.locator('#hero-title').inner_text()=='Min nye danske forside'
 assert page.locator('#featured img[src*="/photos/"]').count()==3
 page.goto(BASE,wait_until='networkidle');assert page.locator('#hero-title').inner_text()!='Min nye danske forside'
 # Verify fresh mobile layout and accessible menu interactions.
 page.set_viewport_size({'width':390,'height':844});page.goto(BASE,wait_until='networkidle')
 page.screenshot(path='/tmp/wifihuset-mobile.png',full_page=True)
 assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 page.locator('.menu-toggle').click();assert page.locator('#main-nav').is_visible()
 page.locator('#main-nav a').nth(1).click();assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
 page.locator('#open-catalog').click();assert page.locator('#catalog .feature-card').count()==6
 assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 page.goto(BASE+'/review.html?produkt=anthbot-m9-pro',wait_until='networkidle')
 page.screenshot(path='/tmp/wifihuset-article-mobile.png',full_page=True)
 assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 # Simulate an older Firebase document, including a partial catalogue and unsafe HTML.
 remote_context=browser.new_context()
 remote_context.route('**/*',lambda r:r.continue_() if r.request.url.startswith(BASE) else r.abort())
 stub="window.firebase={apps:[],initializeApp(){this.apps.push({})},firestore(){return {doc(){return {get(){return Promise.resolve({exists:true,data(){return {catalog:[{name:'TP-Link Deco XE75 Pro',cat:'Netværk',proto:'WiFi 6E',score:9.1,verdict:'Eksisterende redaktionel tekst'}],standardsIntro:{leftTitle:'Cloud-indhold',leftHtml:'<p>Gyldig tekst</p><img src=x onerror=alert(1)><script>alert(1)</script>'}}}})}}}}}};"
 remote_context.route('https://www.gstatic.com/firebasejs/**',lambda r:r.fulfill(status=200,content_type='application/javascript',body=stub))
 remote_page=remote_context.new_page(); remote_page.on('pageerror',lambda e:errors.append(str(e)))
 remote_page.goto(BASE,wait_until='networkidle')
 assert remote_page.locator('#standards-intro h3').inner_text()=='Cloud-indhold'
 assert remote_page.locator('#standards-intro script').count()==0
 assert remote_page.locator('#standards-intro img').count()==0
 remote_page.locator('#open-catalog').click()
 assert remote_page.locator('#result-count').inner_text()=='6 af 20 gennemgange'
 assert remote_page.locator('#featured .feature-card').count()==3
 remote_context.close()
 assert not errors,errors
 assert not responses,responses
 browser.close()
 print('PASS: 3 featured stories; all 20 full articles; catalogue pagination/search/category/reset; guides/comparison/FAQ; privacy dialog; project download; editable journal/local preview; mobile menu; legacy cloud config and safe HTML; no overflow, broken local assets or JS errors.')
