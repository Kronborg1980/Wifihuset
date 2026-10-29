/* Editorial layer. The legacy catalogue stays in config.js; new long-form content is editable in admin. */
(function () {
  if (window.DEFAULT_CONFIG.journal) return;
  const sections = (intro, architecture, caveat) => [
    { heading: 'Det interessante', text: intro },
    { heading: 'Under overfladen', text: architecture },
    { heading: 'Det skal du være opmærksom på', text: caveat }
  ];
  const entry = (name, slug, category, kicker, summary, type, body) => ({ name, slug, category, kicker, summary, type, body, status: 'Teknisk analyse' });
  const entries = [
    entry('ANTHBOT M9 Pro', 'anthbot-m9-pro', 'Have & Robot', 'Næste generation i haven', 'M5 får en udfordrer på radaren. Vi går tæt på de spørgsmål, en ny robotklipper skal kunne besvare.', 'mower', sections(
      'M9 Pro er modellen, vi retter blikket mod som mulig afløser for M5. En robotplæneklipper skal bedømmes på mere end et navn og et lovende datablad: den skal passe til havens form, passager, hældninger og kanter. Derfor begynder denne artikel med kravene til en grundig vurdering. Modelnavn, dansk tilgængelighed og de endelige specifikationer skal bekræftes hos producenten før et køb.',
      'Navigation er kun første del af opgaven. Den relevante test forbinder kortlægning med gentagelig klipning: finder robotten tilbage gennem en smal passage, opdager den ændringer i haven, og kan man flytte en zone uden at kortlægge alt igen? Vi vil undersøge adfærden ved træer, tæt på huset og langs bede. LiDAR, kamera og satellitnavigation har forskellige forudsætninger; vi tillægger ikke M9 Pro en bestemt sensorpakke, før den er dokumenteret.',
      'Dette er en forhåndsanalyse, ikke en gennemført produkttest. Der er endnu ingen dokumenterede M9 Pro-målinger, pris eller betaresultater på siden. En kommende felttest bør registrere firmware, haveareal, vejr, afbrudte ture, kantafstand og manuel indgriben. M5-artiklen ligger fortsat i arkivet, så dens tidligere vurdering ikke bliver overført til en anden model.'
    )),
    entry('ASUS ZenWiFi BT10', 'asus-zenwifi-bt10', 'Netværk', 'WiFi 7 · næste niveau', 'Mere end et hastighedstal. Backhaul, placering og dine klienter afgør, hvad WiFi 7 faktisk giver dig.', 'wifi', sections(
      'ZenWiFi BT10 er et interessant sted at starte, hvis netværket skal bære både hjemmearbejde, lokal lagring og et voksende smart home. WiFi 7 åbner for nyere radioteknik, men et generationsskifte er ikke i sig selv et argument for at udskifte et stabilt netværk. Gevinsten afhænger af klienternes understøttelse, internetforbindelsen og forbindelsen mellem mesh-punkterne.',
      'Se først på backhaul: den trafik, mesh-punkterne sender til hinanden. Et godt radiosignal til den nærmeste node hjælper ikke, hvis dens vej tilbage til routeren er flaskehalsen. Ethernet mellem noderne kan være vigtigere end et stort tal på æsken. Ved en test bør gennemløb og latenstid måles både tæt på hovedenheden og bag flere vægge, med samme klient og samme server.',
      '6 GHz har kortere praktisk rækkevidde gennem mange byggematerialer end 2,4 GHz. Ældre klienter får heller ikke automatisk alle fordelene ved WiFi 7. Kontrollér porttyper, firmware, dansk variant og de sikkerhedsfunktioner, du forventer at bruge. Der er ikke offentliggjort egne BT10-hastighedsmålinger her; teksten er en teknisk analyse af produktets anvendelse.'
    )),
    entry('Aqara Smart Lock U200', 'aqara-u200', 'Sikkerhed', 'Matter over Thread', 'En smartere hoveddør starter med kompatibilitet. Vi ser på Thread, adgang og det mekaniske fundament.', 'lock', sections(
      'U200 samler en interessant kombination af eftermontering, fingeraftryk og understøttelse af Apple Home Key. Den kan være relevant, hvis den eksisterende cylinder og døren skal indgå i et mere sammenhængende smart home. Det afgørende er dog ikke, hvor mange måder låsen kan åbnes på, men om den passer mekanisk, og hvordan adgang fungerer for hele husstanden.',
      'Matter over Thread forbinder låsen med kompatible smart home-systemer. Et Thread-netværk kræver en Border Router; Matter-styring kræver også en kompatibel controller, og de to roller kan ligge i samme enhed. Home Key kræver det relevante Apple-setup. Adgangskoder, lokal betjening og fjernstyring skal vurderes hver for sig, fordi de ikke har identiske afhængigheder.',
      'Kontrollér cylinder, frigang til greb, dørens lukning og producentens kompatibilitetsliste før køb. En motorlås retter ikke en dør, som binder. En praktisk test bør dokumentere batteriadvarsler, genstart, brug uden internet og mulighederne for nødadgang. Vi viser ikke en målt åbningstid eller en ny testkarakter uden en dokumenteret test.'
    )),
    entry('TP-Link Deco XE75 Pro', 'deco-xe75-pro', 'Netværk', 'Den velkendte mesh-reference', 'WiFi 6E med fokus på et enkelt mesh. Sådan vurderer du, om en opgradering til WiFi 7 er pengene værd.', 'wifi', sections(
      'Deco XE75 Pro er fortsat et relevant sammenligningspunkt for et hjem, hvor drift og enkel administration vejer tungere end at have den nyeste standard. Et velfungerende WiFi 6E-system kan levere mere end rigeligt til streaming og hjemmearbejde. Opgradering giver først mening, når en konkret flaskehals er identificeret.',
      'Tre radiobånd giver fleksibilitet, men placering og backhaul er stadig afgørende. Placér ikke en ekstra node midt i det område, hvor signalet allerede er forsvundet. Den skal selv have en god forbindelse tilbage. Kablet backhaul bør sammenlignes med trådløs i samme rum, før dårlig dækning bliver til et indkøb af flere enheder.',
      'Nogle sikkerheds- og forældrekontrolfunktioner kan være knyttet til et abonnement. Tjek den aktuelle pakke og dine portbehov. Den tidligere vurdering er bevaret som arkivmateriale; denne uddybning indeholder ikke nye egne gennemløbsmålinger.'
    )),
    entry('Google Nest WiFi Pro', 'nest-wifi-pro', 'Netværk', 'Netværk møder smart home', 'Enkel administration og Thread i samme økosystem. Men passer graden af kontrol til dit hjem?', 'wifi', sections(
      'Nest WiFi Pro henvender sig til hjemmet, hvor netværket helst skal passe sig selv. Kombinationen med Googles smart home-økosystem kan reducere antallet af bokse, men enkelhed bør stadig vurderes op mod de funktioner, man har brug for i det daglige.',
      'WiFi 6E og Thread udfører forskellige opgaver: det ene forbinder hurtige WiFi-klienter, det andet bærer et lavenerginet til kompatible enheder. Thread Border Router-funktionen er ikke en universel erstatning for en Zigbee-hub. Planlæg derfor hvilke enheder og controllere der skal arbejde sammen, før netværket vælges.',
      'Kontrollér mulighederne for kabling, avanceret netværksopsætning og blanding med ældre Nest-enheder. Et eksisterende økosystem er en praktisk fordel, men kan også begrænse valg. Egne målinger af dette system er ikke tilføjet i denne analyse.'
    )),
    entry('TP-Link Tapo RE700X', 're700x', 'Netværk', 'Ét problemområde ad gangen', 'En extender kan være nok til det sidste værelse. Start med at finde ud af, hvor signalet går tabt.', 'wifi', sections(
      'RE700X er en TP-Link WiFi-extender; det tidligere katalog har den anført som “TP-Link Tapo RE700X”. Den er interessant til et afgrænset dækningsproblem, hvor et helt nyt mesh-system kan være unødvendigt. Første skridt er at måle, om problemet er svagt signal, forstyrrelser eller en langsom internetforbindelse.',
      'En trådløs extender skal både kommunikere med klienten og have en brugbar forbindelse tilbage til routeren. Derfor er placering mellem router og problemområde central. Hvis der allerede er Ethernet til rummet, er et access point ofte et mere direkte valg.',
      'Sømløs roaming og mesh-kompatibilitet afhænger af kombinationen med routeren og den aktuelle firmware. Antag ikke, at alle TP-Link-serier fungerer som ét samlet mesh. Tjek producentens kompatibilitetsliste, og sammenlign før og efter med samme enhed.'
    )),
    entry('Anthbot M5 LiDAR', 'anthbot-m5', 'Have & Robot', 'Fra det oprindelige katalog', 'M5 bliver i arkivet. Navigation, kanter og havens geometri er stadig de vigtige spørgsmål.', 'mower', sections(
      'M5 var det fremhævede haveprodukt på den tidligere forside. Den oprindelige vurdering er bevaret nedenfor, mens M9 Pro nu står på radaren. De to modeller deler ikke automatisk resultater, specifikationer eller en testkarakter. M5 er et selvstændigt sammenligningspunkt.',
      'LiDAR kan bruges til at opbygge en geometrisk forståelse af omgivelserne, men sensortypen alene siger ikke, hvor godt en robot klarer en konkret have. Smalle passager, lave forhindringer, skråninger og skiftende vegetation skal vurderes sammen med software og sikkerhedsadfærd.',
      'De tidligere oplysninger om areal, zoner, pris og eventuelt abonnement skal kontrolleres mod den konkrete variant og de aktuelle danske vilkår. Ord som “fejlfrit” kan ikke stå i stedet for en dokumenteret fejlrate. Der er ikke tilføjet nye felttestresultater her.'
    )),
    entry('Segway Navimow i-serie', 'navimow-i', 'Have & Robot', 'Havens frie udsyn', 'Satellitbaseret navigation skal vurderes i netop den have, robotten skal klippe.', 'mower', sections(
      'Navimow i-serien er et relevant alternativ i kategorien af klippere uden traditionel kanttråd. Serienavnet dækker forskellige varianter, så et køb bør begynde med det præcise modelnummer og arealkrav frem for et generelt løfte om autonomi.',
      'RTK-baseret navigation bruger korrektion af satellitpositionen. Placering af referenceudstyr og udsyn til himlen er derfor vigtige dele af installationen. Træer, bygninger og smalle passager bør indgå i en testplan; den praktiske funktion afhænger også af supplerende sensorer og software på den konkrete model.',
      'Kontrollér hvilke funktioner der kræver tilbehør, og hvordan robotten håndterer mistet position. Tag også kantklipning, støj og opbevaring med i regnestykket. Vi har ikke tilføjet egne målinger for serien som helhed.'
    )),
    entry('Roborock Qrevo-serie', 'roborock-qrevo', 'Have & Robot', 'Robotter indenfor', 'Docken er kun halvdelen af historien. Gulve, dørtrin og vedligeholdelse afgør hverdagen.', 'vacuum', sections(
      'Qrevo-navnet dækker flere Roborock-modeller med forskellige sensorer og dockfunktioner. Serien er interessant for den, der vil samle støvsugning og gulvvask, men funktioner fra topmodellen må ikke uden videre overføres til hele familien.',
      'Kortlægning, navigation og undvigelse af små genstande er forskellige egenskaber. En robot kan finde rundt uden at undgå alle kabler. Vurder også moppehåndtering ved tæpper, plads til docken samt adgang til rent og snavset vand. Et smart home-logo bør tjekkes mod præcis model og firmware.',
      'Docken fjerner ikke behovet for rengøring af filtre, børster og bakker. Undersøg priser på forbrugsdele og reelle krav til vedligeholdelse. Matter-understøttelse er ikke dokumenteret for alle Qrevo-varianter i denne artikel.'
    )),
    entry('Ecovacs Deebot', 'ecovacs-deebot', 'Have & Robot', 'Vælg den konkrete variant', 'En stor produktfamilie kræver et præcist modelvalg. Her er det, vi ville sammenligne.', 'vacuum', sections(
      'Deebot er en produktfamilie, ikke én robotstøvsuger. Derfor er det ikke meningsfuldt at love samme rengøring, pris eller sensorer for alle modeller. Brug katalogposten som indgang til at finde den variant, der passer til dine gulve og din bolig.',
      'Sammenlign opsamling langs kanter, hår i børsten, navigation ved møbler og adfærd ved tæpper. For gulvvask er moppekontakt og håndtering af snavset vand mindst lige så relevante som et højt sugetal. Pladsen omkring stationen skal måles før køb.',
      'Undersøg appkrav, reservedele, privatliv og om kameraer indgår i den konkrete model. En praktisk vurdering bør bruge samme snavs, gulvareal og kørselsindstilling på tværs af robotter. Denne artikel indeholder ingen nye rengøringsmålinger.'
    )),
    entry('Yale Doorman L3S Flex', 'yale-doorman', 'Sikkerhed', 'Låsen er også mekanik', 'Dør, låsekasse og installation kommer før appen. Et vigtigt korrektiv til det oprindelige katalog.', 'lock', sections(
      'Den tidligere tekst beskrev L3S som en indvendig eftermonteringslås, der bevarer yderside og nøgle. Det bør ikke bruges som købsgrundlag: Doorman L3S er en anden type installation end en motor monteret oven på en eksisterende cylinder. Afklar den præcise Flex-pakke med en fagperson.',
      'Kontrollér dørtjukkelse, låsekasse, beslag og krav til nødåbning. Et mærkes godkendelser er ikke det samme som, at enhver installation opfylder forsikringens betingelser. Den mekaniske funktion skal være i orden, før automatisk låsning og adgangskoder sættes op.',
      'Fjernbetjening og økosystemintegration kan kræve ekstra modul eller tilbehør. Tjek den aktuelle pakke, og aftal hvem der kan hjælpe ved et mekanisk problem. Den bevarede arkivscore er ikke en ny sikkerhedscertificering eller en dokumenteret laboratorietest.'
    )),
    entry('Nuki Smart Lock Ultra', 'nuki-ultra', 'Sikkerhed', 'Kompakt adgang', 'En lille lås med store integrationsspørgsmål. Start med cylinder og nødadgang.', 'lock', sections(
      'Ultra er interessant som en kompakt vej til en mere sammenhængende adgangsløsning. Men før valget træffes på designet, bør man undersøge den medfølgende cylinderløsning, dørens mål og hvad installationen faktisk indebærer. Sammenlign ikke monteringen direkte med alle ældre Nuki-modeller.',
      'Matter og netværksfunktioner kan give flere måder at styre adgang på. Det er stadig vigtigt at skelne mellem lokal åbning, automatisering og fjernbetjening. Tilbehør til koder eller fingeraftryk skal regnes med som en separat del af løsningen.',
      'Kontrollér cylinderkompatibilitet, opladning og hvad der sker ved tomt batteri eller mistet netværk. Automatisk oplåsning bør konfigureres konservativt og prøves i praksis. Egne åbningstider, støjmålinger og batteritider er ikke dokumenteret her.'
    )),
    entry('Reolink Argus-serie', 'reolink-argus', 'Sikkerhed', 'Optagelser på dine vilkår', 'Batterikameraer er praktiske, men registrering og optagelse kræver en anden vurdering end et kablet kamera.', 'camera', sections(
      'Argus-familien er relevant, hvis kabelføring er vanskelig, og lokal lagring står højt på ønskelisten. Serien består af forskellige modeller. Opløsning, synsfelt og lagermuligheder skal derfor tjekkes på den konkrete variant.',
      'Batteridrift betyder, at kameraet typisk ikke arbejder på samme måde som et konstant strømforsynet kamera. Undersøg opvågning, bevægelsesregistrering og om de første sekunder af en hændelse kommer med. Placering og vinkel er lige så vigtige som opløsningen på æsken.',
      'Lokal lagring skal også kunne tilgås, hvis kameraet bliver fjernet. Kontrollér strøm, eventuelt solpanel, vinterforhold og placering i forhold til naboer og offentlig vej. Et abonnement er ikke nødvendigvis påkrævet til alle funktioner, men vilkårene varierer.'
    )),
    entry('Aqara Video Doorbell G4', 'aqara-g4', 'Sikkerhed', 'Dørklokken som sensor', 'Adgang, optagelse og privatliv mødes ved hoveddøren. Se på hele kæden.', 'camera', sections(
      'G4 er interessant i et hjem med Apple Home og et ønske om en videodørklokke. Vurderingen bør begynde med placeringen: ser kameraet den besøgende, eller mest gårdspladsen? Strømforsyning og plads til indendørsenheden er også en del af installationen.',
      'Der er forskel på lokal lagring, producentens app og HomeKit Secure Video. De har forskellige krav og muligheder for hændelser og optagelser. Ansigtsgenkendelse bør vurderes sammen med databehandling og adgange, ikke kun som en bekvemmelighed.',
      'Kontrollér den aktuelle model, krav til Apple-udstyr og eventuelt iCloud-abonnement, hvis den løsning ønskes. En god test bør dække lydforsinkelse, nattebillede og en besøgende tæt ved døren. Der er ikke offentliggjort sådanne egne målinger her.'
    )),
    entry('Philips Hue (med Bridge)', 'philips-hue', 'Lys', 'Lyset som infrastruktur', 'Et godt lysnet skal stadig virke, når telefonen ligger i et andet rum.', 'bulb', sections(
      'Hue med Bridge er et modent udgangspunkt for rum, hvor lys, knapper og sensorer skal arbejde sammen. Det er særligt interessant, når betjeningen skal være intuitiv for andre end den, der installerede systemet. Fysiske kontakter er derfor en vigtig del af løsningen.',
      'Zigbee forbinder mange Hue-enheder med broen, mens Matter kan bygge bro til understøttede smart home-platforme. En Matter-integration betyder ikke nødvendigvis, at alle Hue-specifikke effekter følger med over i en anden app. Planlæg scener og automatiseringer på den platform, der skal eje dem.',
      'Undgå at afbryde strømmen til mesh-pærer via almindelige vægkontakter, hvis de forventes at videresende trafik. Kontrollér variant, lumen og farvetemperatur. Den tidligere katalogvurdering er bevaret; der er ikke tilføjet nye farve- eller latenstidsmålinger.'
    )),
    entry('IKEA DIRIGERA + pærer', 'ikea-dirigera', 'Lys', 'Et fornuftigt første net', 'Et prisvenligt økosystem er mest interessant, når det også kan vokse med hjemmet.', 'bulb', sections(
      'DIRIGERA med kompatible IKEA-pærer er en oplagt indgang til rumstyring uden at købe alt på én gang. Begynd med et enkelt rum, en fysisk knap og en scene, der giver mening i hverdagen. Det gør det lettere at opdage, hvilke funktioner der faktisk bruges.',
      'Hubben samler de kompatible enheder og kan forbinde understøttede funktioner til andre platforme via Matter. Matter-bro, Matter-controller og Thread Border Router er forskellige roller; se den aktuelle dokumentation i stedet for at antage, at én hub kan alt.',
      'Tjek kompatibilitet, firmware og hvilke funktioner der eksponeres i din foretrukne platform. Meget lave priser er kun en fordel, hvis lysstyrke og betjening passer til rummet. Der er ikke tilføjet egne målinger af dæmpning og farvegengivelse.'
    )),
    entry('tado° Smart Termostat X', 'tado-x', 'Klima & Energi', 'Varme med kontekst', 'Zonestyring er spændende. Komfort, ventiler og varmeanlæg afgør resultatet.', 'climate', sections(
      'tado° X er interessant, når varme skal styres pr. rum frem for gennem én central temperatur. Geofencing og tidsplaner kan være nyttige, men man bør ikke love en bestemt besparelse uden at kende huset, varmekilden og den hidtidige brug.',
      'Matter over Thread er en del af integrationshistorien, mens radiatorventiler, varmebehov og styringen af selve anlægget er en anden. Kontrollér adaptere, placering af temperatursensorer og forbindelsen til resten af systemet. Et varmt radiatorskjul kan give et andet temperaturbillede end opholdszonen.',
      'Undersøg hvad der virker lokalt, hvad appen tilføjer, og hvilke funktioner der eventuelt kræver abonnement. X-serien bør ikke antages at være direkte udskiftelig med alle tidligere tado°-generationer. Egne energibesparelser er ikke dokumenteret her.'
    )),
    entry('Shelly Plug S Gen3', 'shelly-plug', 'Klima & Energi', 'De små watt tæller', 'Et smart-stik kan gøre forbrug synligt. Start med belastning og den rigtige firmware.', 'plug', sections(
      'Et Shelly-stik er interessant, hvis en almindelig stikkontakt skal kunne styres og energiforbruget følges. Det kan gøre standbyforbrug og brugsmønstre mere håndgribelige. En enkelt aflæsning er dog ikke det samme som en dokumenteret præcisionsmåling.',
      'WiFi forbinder stikket uden en separat Zigbee-hub. Matter-understøttelse skal bekræftes for den præcise Gen3-variant og firmware. Der kan være forskel på de data og funktioner, der findes i Shellys eget miljø, og dem en Matter-controller viser.',
      'Respektér producentens maksimale belastning og anvisninger for apparattypen; et smart-stik er ikke en universel løsning til alle varmekilder. Ved sammenligning af målinger bør en kendt referencebelastning bruges. Sådanne egne kalibreringsresultater er ikke tilføjet.'
    )),
    entry('Aqara Hub M3', 'aqara-m3', 'Hub & Sensorer', 'Brobyggeren i teknikskabet', 'Zigbee, Thread og Matter i samme arkitektur. Det afgørende er, hvilke roller du mangler.', 'hub', sections(
      'M3 er relevant, når et voksende Aqara-system skal indgå i en bredere smart home-arkitektur. Før man køber endnu en hub, bør man kortlægge de eksisterende bokse og se, hvilke protokoller og roller de allerede dækker.',
      'En Zigbee-hub administrerer et Zigbee-net, en Matter-bro eksponerer understøttede enheder, og en Thread Border Router forbinder Thread med resten af IP-nettet. Rollerne kan samles i én enhed uden at alle tilknyttede produkters funktioner nødvendigvis bliver ens på tværs af platforme.',
      'Kontrollér migrationsmuligheder, understøttede enheder og lokale automatiseringer før et skift. Placér hubben med omtanke i forhold til metal og WiFi-udstyr. Denne analyse indeholder ikke nye egne udfalds- eller rækkeviddemålinger.'
    )),
    entry('Aqara sensor-pakke', 'aqara-sensorer', 'Hub & Sensorer', 'Et hjem der kan reagere', 'Små sensorer gør de store automatiseringer mulige. Begynd med en konkret hverdagssituation.', 'sensor', sections(
      'En samling af bevægelses-, dør- og temperatursensorer kan gøre mere for hverdagen end endnu en app. Men “sensor-pakke” er ikke et entydigt produktnummer. Tjek modeller, protokoller og hvilken hub de kræver, før en pakke købes.',
      'Mange Aqara-sensorer bruger Zigbee, mens andre generationer kan bruge andre forbindelser. Batterisensorer videresender normalt ikke mesh-trafik på samme måde som strømforsynede routerenheder. Et robust net kræver derfor mere end mange sensorer spredt i huset.',
      'Registrér placering, batteritype og adfærd ved manglende forbindelse. Brug ikke en enkel forbrugersensor som eneste sikkerhedsforanstaltning ved kritiske hændelser. Batterilevetid varierer med temperatur og rapportering; der er ikke tilføjet egne langtidsmålinger.'
    ))
  ];
  entries[0].status = 'På radaren';
  const photos = { 'deco-xe75-pro': 'images/tplink.webp', 'anthbot-m5': 'images/anthbot.webp', 'yale-doorman': 'images/yaledoor.jpg' };
  entries.forEach(e => { e.image = photos[e.slug] || 'images/products/' + e.type + '.svg'; e.imageNote = photos[e.slug] ? 'Produktfoto fra det eksisterende billedarkiv' : 'Redaktionel illustration · ikke et produktfoto'; });
  window.DEFAULT_CONFIG.journal = {
    version: 2,
    eyebrow: 'ET HJEM. TUSIND MULIGHEDER.',
    title: 'Fremtiden bor',
    titleAccent: 'allerede her.',
    intro: 'Fra næste generations WiFi til robotter i haven. Vi går under overfladen på teknologien, der gør dit hjem lidt klogere.',
    featured: ['anthbot-m9-pro', 'asus-zenwifi-bt10', 'aqara-u200'],
    entries
  };
})();
