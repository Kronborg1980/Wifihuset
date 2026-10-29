# WiFiHuset

Dansk, statisk tech-magasin om WiFi, smart home og robotter. Ingen buildproces eller npm-installation er nødvendig.

## Lokal udvikling

Brug det eksisterende checkout. Cloudopgaver er allerede isoleret; opret kun et Git-worktree, hvis brugeren beder om det.

```sh
cd /workspace/Wifihuset
python3 -m http.server 8000 --bind 127.0.0.1
```

`index.html` er forsiden. `review.html?produkt=anthbot-m9-pro` er en artikel. `admin.html` er redaktionsværktøjet.

## Indhold og redigering

- `config.js` indeholder den oprindelige konfiguration, alle 19 katalogposter, de tidligere fremhævede vurderinger, guides, tabeller og FAQ.
- `journal.js` tilføjer den nye forside, tre kuraterede historier og 20 længere gennemgange. ANTHBOT M9 Pro er en forhåndsanalyse; M5 er fortsat i arkivet. Filen initialiserer kun indhold, når der ikke allerede findes en eksporteret `journal` i konfigurationen.
- `product-photos.js` knytter produktfotos, konkrete modelnavne og billedkilder til artikler. Kildedokumentation for de nye fotos findes i `images/products/photos/SOURCES.md`.
- `site.js` viser først lokalt indhold og henter derefter eventuelt eksisterende Firebase-indhold. Blokerede eller langsomme eksterne scripts hindrer ikke visningen. Ældre cloud-dokumenter uden `journal` beholder det nye redaktionelle lag og hele arkivet.
- `site.css` styrer det responsive design. Skrifttyperne er hostet lokalt; licenser ligger i `fonts/`.

I administratoren findes den nye fane **Forside & artikler**. Her kan overskrifter, fremhævede artikel-id’er, billeder, billednoter og artikelafsnit redigeres. Ændringer gemmes som lokale kladder. **Forhåndsvis** åbner `index.html?preview=1` og bruger kladden uden at udgive. **Gem & udgiv** er en særskilt, eksplicit handling til den eksisterende Firebase-integration. Selve designet udgives ved at sende projektets filer til repositoryets hovedgren; indholdsudgivelse via Firebase erstatter ikke dette trin.

JSON-eksport og download af `config.js` inkluderer også det nye redaktionelle indhold. Tidligere indhold beholdes i arkivfelterne. Gamle produktkarakterer og priser vises kun som tydeligt mærket arkivmateriale i de relevante gennemgange.

## Redaktionelt grundlag og billeder

De nye artikler er tekniske analyser, ikke opdigtede førstehåndstests eller betaerfaringer. Der er ikke importeret eller verificeret eksterne anmeldelser. M9 Pro-navn, specifikationer, tilgængelighed og pris skal bekræftes før en egentlig produkttest eller købsanbefaling. Der er ingen overførsel af M5-karakteren til M9 Pro.

`images/editorial/connected-home.png` er en AI-genereret stemningsillustration, mærket på forsiden. `images/products/` indeholder originale diagrammatiske kategoriillustrationer, tydeligt mærket som illustrationer; de er ikke præcise produktfotos. Seks katalogposter har nu rigtige produktfotos: Deco, ANTHBOT M5, Yale Doorman, IKEA-lys, Philips Hue og Aqara-sensorer. Eksempler fra en produktfamilie er mærket med det konkrete modelnavn. De tre eksisterende fotos i `images/` er bevaret med deres oprindelige filnavne og anvendes kun til de oprindelige produkter. Der hævdes ikke nye rettigheder eller ophav til produktfotos. De øvrige produktillustrationer afventer verificerede billeder; adgang til producenternes sider er endnu blokeret af cloudmiljøets netværkspolitik.

Formularen til installationshjælp downloader en tekstfil lokalt. Der er ingen tilsluttet tilbuds- eller mailtjeneste. Der indsamles ikke personoplysninger gennem formularen. Prislinks åbner PriceRunner; siden henter ikke livepriser.

## Kontrol

Miljøet har Python Playwright og `/usr/bin/chromium`. Start serveren først, og kør:

```sh
python3 tests/browser_smoke.py
```

Kontrollen afprøver alle 20 artikler, billeder, katalogets søgning/filtre/paginering, standardguides, sammenligningstabel, FAQ, privatlivsdialog, download, lokal redigering/forhåndsvisning, mobilmenu og vandret overflow. Den simulerer også et ældre Firebase-dokument og verificerer HTML-filtrering. Eksterne netværkskald blokeres eller simuleres; testen skriver ikke til produktion. Socket- og browseroperationer kan kræve værktøjets understøttede sandbox-tilladelse.

Den eksisterende miljøkommando `python3 /workspace/wifihuset-tools/smoke.py` henviser nu til denne kontrol. Levende processer skal startes igen efter gendannelse af miljøet.

Firebase-login og produktionens Firestore-regler er ikke verificeret. Miljøets nuværende netværkspolitik blokerer Firebase-SDK’et. Repositoryet er tilknyttet GitHub Pages på wifihuset.dk. Kodeudgivelse foretages via hovedgrenen; DNS ændres ikke af projektets kode.
