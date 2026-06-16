/* =====================================================================
   WiFiHuset — delt konfiguration (single source of truth)
   Redigér ALT herfra, eller brug admin.html til at gøre det visuelt.
   Begge sider (index.html + admin.html) loader denne fil.
   ===================================================================== */

/* ---- Indbyggede illustrationer (bruges når et produkt ikke har et foto) ---- */
window.ART = {
  mower:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Robotplæneklipper">
    <g stroke="#8AA67C" stroke-width="3" stroke-linecap="round"><path d="M26 160v-13"/><path d="M40 160v-18"/><path d="M54 160v-12"/><path d="M186 160v-13"/><path d="M200 160v-18"/><path d="M214 160v-12"/></g>
    <line x1="14" y1="160" x2="226" y2="160" stroke="#D9D8D0" stroke-width="3" stroke-linecap="round"/>
    <g stroke="#1B4BFF" stroke-width="2.6" stroke-linecap="round"><path d="M150 62a40 40 0 0 1 27 19" opacity=".9"/><path d="M157 48a58 58 0 0 1 41 29" opacity=".55"/><path d="M164 34a76 76 0 0 1 54 39" opacity=".28"/></g>
    <rect x="48" y="84" width="144" height="56" rx="24" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="64" cy="112" r="6" fill="#1B4BFF"/>
    <circle cx="80" cy="142" r="17" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="160" cy="142" r="17" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="80" cy="142" r="5" fill="#15171C"/><circle cx="160" cy="142" r="5" fill="#15171C"/>
    <rect x="104" y="56" width="34" height="34" rx="12" fill="#15171C"/>
    <circle cx="121" cy="73" r="6" fill="#1B4BFF"/></svg>`,
  wifi:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mesh WiFi">
    <g stroke="#C9C8C0" stroke-width="2.4" stroke-dasharray="2 7" stroke-linecap="round"><path d="M120 100L60 58"/><path d="M120 100L184 124"/></g>
    <rect x="48" y="40" width="24" height="36" rx="11" fill="#FBFBF8" stroke="#15171C" stroke-width="3"/><circle cx="60" cy="53" r="3.5" fill="#1B4BFF"/>
    <rect x="172" y="108" width="24" height="36" rx="11" fill="#FBFBF8" stroke="#15171C" stroke-width="3"/><circle cx="184" cy="121" r="3.5" fill="#1B4BFF"/>
    <g stroke="#1B4BFF" stroke-width="3" stroke-linecap="round"><path d="M104 60a22 22 0 0 1 32 0" opacity=".95"/><path d="M96 50a34 34 0 0 1 48 0" opacity=".6"/><path d="M88 40a46 46 0 0 1 64 0" opacity=".3"/></g>
    <rect x="104" y="70" width="32" height="66" rx="16" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="120" cy="86" r="4.5" fill="#1B4BFF"/></svg>`,
  lock:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart lås">
    <line x1="198" y1="22" x2="198" y2="158" stroke="#D9D8D0" stroke-width="3" stroke-linecap="round"/>
    <rect x="76" y="32" width="78" height="116" rx="18" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="115" cy="66" r="17" fill="none" stroke="#1B4BFF" stroke-width="3"/>
    <circle cx="115" cy="62" r="4.2" fill="#15171C"/><path d="M115 64l-3.4 13h6.8z" fill="#15171C"/>
    <g fill="#15171C"><circle cx="99" cy="102" r="4"/><circle cx="115" cy="102" r="4"/><circle cx="131" cy="102" r="4"/><circle cx="99" cy="121" r="4"/><circle cx="115" cy="121" r="4"/><circle cx="131" cy="121" r="4"/></g>
    <rect x="170" y="84" width="11" height="42" rx="5.5" fill="#15171C"/></svg>`,
  bulb:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart pære">
    <g stroke="#1B4BFF" stroke-width="2.6" stroke-linecap="round"><path d="M120 26v-12"/><path d="M86 40l-8-8"/><path d="M154 40l8-8"/><path d="M74 74h-12"/><path d="M166 74h12"/></g>
    <path d="M84 80a36 36 0 1 1 72 0c0 16-12 22-14 34h-44c-2-12-14-18-14-34z" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <path d="M108 84q12-14 24 0" stroke="#1B4BFF" stroke-width="3" fill="none" stroke-linecap="round"/>
    <rect x="100" y="120" width="40" height="10" rx="3" fill="#15171C"/>
    <rect x="105" y="132" width="30" height="9" rx="3" fill="#15171C"/>
    <rect x="110" y="143" width="20" height="8" rx="3" fill="#15171C"/></svg>`,
  camera:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Overvågningskamera">
    <g stroke="#1B4BFF" stroke-width="2.6" stroke-linecap="round"><path d="M150 60a30 30 0 0 1 22 18" opacity=".7"/><path d="M156 48a46 46 0 0 1 32 26" opacity=".35"/></g>
    <rect x="64" y="74" width="96" height="48" rx="24" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="146" cy="98" r="16" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="146" cy="98" r="7" fill="#1B4BFF"/>
    <circle cx="82" cy="88" r="4" fill="#1B4BFF"/>
    <rect x="106" y="122" width="10" height="22" fill="#15171C"/>
    <rect x="88" y="144" width="46" height="9" rx="4" fill="#15171C"/></svg>`,
  plug:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart stik">
    <rect x="80" y="40" width="80" height="92" rx="22" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="120" cy="86" r="22" fill="none" stroke="#1B4BFF" stroke-width="3"/>
    <line x1="120" y1="70" x2="120" y2="88" stroke="#1B4BFF" stroke-width="3.4" stroke-linecap="round"/>
    <rect x="106" y="132" width="9" height="20" rx="3" fill="#15171C"/>
    <rect x="125" y="132" width="9" height="20" rx="3" fill="#15171C"/></svg>`,
  hub:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart home hub">
    <g stroke="#1B4BFF" stroke-width="3" stroke-linecap="round"><path d="M104 56a22 22 0 0 1 32 0" opacity=".9"/><path d="M96 46a34 34 0 0 1 48 0" opacity=".5"/></g>
    <rect x="84" y="74" width="72" height="72" rx="20" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="120" cy="104" r="7" fill="#1B4BFF"/>
    <g fill="#15171C"><circle cx="104" cy="128" r="3.4"/><circle cx="120" cy="128" r="3.4"/><circle cx="136" cy="128" r="3.4"/></g></svg>`,
  vacuum:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Robotstøvsuger">
    <circle cx="120" cy="96" r="58" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <path d="M70 70a58 58 0 0 1 100 0" fill="none" stroke="#15171C" stroke-width="2.4" opacity=".4"/>
    <circle cx="120" cy="82" r="13" fill="#15171C"/>
    <circle cx="120" cy="82" r="5" fill="#1B4BFF"/>
    <rect x="100" y="140" width="40" height="8" rx="4" fill="#15171C" opacity=".5"/></svg>`,
  generic:`<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart enhed">
    <g stroke="#1B4BFF" stroke-width="2.6" stroke-linecap="round"><path d="M150 56a34 34 0 0 1 24 24" opacity=".5"/></g>
    <rect x="74" y="58" width="92" height="68" rx="16" fill="#FBFBF8" stroke="#15171C" stroke-width="3.4"/>
    <circle cx="120" cy="92" r="11" fill="#1B4BFF"/>
    <rect x="98" y="126" width="44" height="9" rx="4" fill="#15171C"/>
    <rect x="106" y="135" width="28" height="14" rx="3" fill="#15171C" opacity=".25"/></svg>`
};
window.ART_KEYS = ["mower","wifi","lock","bulb","camera","plug","hub","vacuum","generic"];

/* ---- Standardernes ikoner (matcher navn -> ikon) ---- */
window.STD_ICONS = {
  "Zigbee":'<path d="M3 17h4l4-10 4 10h6"/>',
  "Z-Wave":'<path d="M4 12h16"/><path d="M4 7h16"/><path d="M4 17h16"/>',
  "Thread":'<circle cx="12" cy="12" r="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>',
  "Matter":'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 8v8M8 10v4M16 10v4"/>',
  "Matter over WiFi":'<path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1.4"/>',
  "Matter over Thread":'<circle cx="12" cy="12" r="2.4"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2"/>',
  "_default":'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/>'
};

/* ============================ INDHOLD ============================ */
window.DEFAULT_CONFIG = {
  brand:{
    name:"WiFiHuset",
    tagline:"Danmarks uvildige guide til fremtidens intelligente hjem. Vi tester, så du slipper for gætteri.",
    metaTitle:"WiFiHuset — Uvildige test, guides og anbefalinger til Smart Home & WiFi"
  },
  theme:{
    paper:"#EDEDE7", surface:"#FBFBF8", surface2:"#F4F4EF",
    ink:"#15171C", signal:"#1B4BFF", signalDeep:"#0E2FB8", gold:"#A9791A"
  },
  hero:{
    eyebrow:"Uvildig Smart Home- & WiFi-guide",
    line1:"Stabilt net.", line2:"Smart hjem.", line3:"Ingen fejlkøb.",
    lead:"WiFiHuset tester og sammenligner markedets udstyr, så du slipper for gætteri. Find testvindere, forstå standarderne, eller spring teknikken over og få professionel hjælp.",
    btnPrimary:"Se testvinderne 2026",
    btnGhost:"Forstå Zigbee, Thread & Matter",
    stats:[{v:"40+",l:"Produkter vurderet"},{v:"100%",l:"Uvildig metode"},{v:"Jun ’26",l:"Sidst opdateret"}],
    cardLabel:"Mesh-dækning · live", cardScore:"9.4", cardScoreLabel:"Signal score"
  },
  method:{
    eyebrow:"Sådan arbejder vi",
    heading:"En anbefaling skal kunne stoles på",
    sub:"Vi køber ikke os til topplaceringer. Et produkt ryger kun på listen, hvis det består hele rækken — og vi skriver altid, hvad der trækker ned.",
    items:[
      {t:"Reel brug", d:"Vi vurderer udstyret i danske hjem — mursten, etager og haver — ikke kun på et datablad."},
      {t:"Samme kriterier", d:"Dækning, stabilitet, opsætning, app-kvalitet og pris vægtes ens på tværs af kategorien."},
      {t:"Ulemper med", d:"Hvert produkt har et ærligt minus. Findes der ingen, har vi ikke kigget grundigt nok."},
      {t:"Åben økonomi", d:"Vi tjener på affiliate-links, men det påvirker aldrig placeringen. Det står i bunden af siden."}
    ]
  },
  winnersHead:{
    eyebrow:"Bedst i test · 2026",
    heading:"Tre kategorivindere, du ikke fortryder",
    sub:"Vinderne er valgt til almindelige hjem — ikke til netværksnørder. Nemme at sætte op, stabile i hverdagen og prisen værd."
  },
  winners:[
    {id:"w1", name:"Anthbot M5 LiDAR", cat:"Robotplæneklipper", award:"Årets testvinder · Have",
     featured:true, score:9.3, artKey:"mower", img:"", imgFit:"contain", price:"≈ 4.799 kr.",
     verdict:"Trådfri klipper med ægte 360° LiDAR — samme navigation som selvkørende biler. Suverænt valg under træer og i skygge, hvor RTK-modeller svigter.",
     pros:["LiDAR navigerer fejlfrit uden kanttråd","Op til 20 zoner og ~500 m²","Skarp pris for teknologien"],
     cons:["LiDAR-tårnet ændrer robottens profil","4G-abonnement efter 12 mdr."]},
    {id:"w2", name:"TP-Link Deco XE75 Pro", cat:"Mesh-WiFi", award:"Testvinder · Nemmeste mesh",
     featured:false, score:9.1, artKey:"wifi", img:"", imgFit:"contain", price:"≈ 2.199 kr. / 3-pak",
     verdict:"Det mesh, vi anbefaler de fleste. Tri-band WiFi 6E, sat op på under fem minutter i Deco-appen — uden teknisk forståelse.",
     pros:["Lynnem opsætning via app","Tri-band WiFi 6E, ét sømløst net","Indbygget sikkerhed & børnesikring"],
     cons:["Avancerede indstillinger er begrænsede","Fuld sikkerhedspakke kræver abonnement"]},
    {id:"w3", name:"Yale Doorman L3S Flex", cat:"Smart lås", award:"Testvinder · Sikkerhed",
     featured:false, score:9.0, artKey:"lock", img:"", imgFit:"contain", price:"≈ 2.499 kr.",
     verdict:"Danskernes mest betroede dørlås. Høj låseklasse, eftermonteres uden at ændre dørens yderside — perfekt til både ejer- og lejebolig.",
     pros:["Høj sikkerhedsgodkendelse","Beholder yderside & fysisk nøgle","Stabil app & auto-lås"],
     cons:["Premium prisklasse","Fulde smart-funktioner kræver modul"]}
  ],
  catalogHead:{
    eyebrow:"Alle anbefalinger",
    heading:"Vores anbefalede udstyr",
    sub:"Filtrér efter kategori. Alle priser hentes live fra danske forhandlere via prissammenligning, så du altid ser det aktuelle niveau."
  },
  catalog:[
    {name:"TP-Link Deco XE75 Pro", cat:"Netværk", proto:"WiFi 6E", score:9.1, verdict:"Vores mesh-testvinder. Bedste balance mellem pris, hastighed og brugervenlighed."},
    {name:"Google Nest WiFi Pro", cat:"Netværk", proto:"WiFi 6E · Matter-hub", score:8.8, verdict:"Den absolut nemmeste opsætning. Fungerer samtidig som Thread Border Router."},
    {name:"ASUS ZenWiFi BT10", cat:"Netværk", proto:"WiFi 7", score:8.7, verdict:"Til store huse og tunge brugere. Flere indstillinger, lidt mere teknik."},
    {name:"TP-Link Tapo RE700X", cat:"Netværk", proto:"WiFi 6", score:8.0, verdict:"Billig WiFi-forstærker til ét dødt hjørne — når et helt mesh er overkill."},
    {name:"Anthbot M5 LiDAR", cat:"Have & Robot", proto:"LiDAR · 4G", score:9.3, verdict:"Testvinder. Trådfri robotklipper med LiDAR — uovertruffen i skygge og under træer."},
    {name:"Segway Navimow i-serie", cat:"Have & Robot", proto:"RTK-GPS", score:8.6, verdict:"Stærkt RTK-alternativ til åbne, overskuelige haver uden mange forhindringer."},
    {name:"Roborock Qrevo-serie", cat:"Have & Robot", proto:"WiFi · Matter", score:9.0, verdict:"Robotstøvsuger i topklasse med vask, selvtømning og præcis LiDAR-kortlægning."},
    {name:"Ecovacs Deebot", cat:"Have & Robot", proto:"WiFi", score:8.3, verdict:"Solid støvsuger-allrounder til en mere venlig pris end topmodellerne."},
    {name:"Yale Doorman L3S Flex", cat:"Sikkerhed", proto:"Eftermontering", score:9.0, verdict:"Testvinder. Høj sikkerhed, eftermonteres og beholder din fysiske nøgle."},
    {name:"Aqara Smart Lock U200", cat:"Sikkerhed", proto:"Matter over Thread", score:8.9, verdict:"Bedste value-lås. Apple Home Key + fingeraftryk til en skarp pris."},
    {name:"Nuki Smart Lock Ultra", cat:"Sikkerhed", proto:"WiFi · Matter", score:8.4, verdict:"Hurtig og nem montering. Mangler dog fingeraftrykslæser."},
    {name:"Reolink Argus-serie", cat:"Sikkerhed", proto:"WiFi", score:8.5, verdict:"Trådløst overvågningskamera med lokal optagelse og ingen tvungne abonnementer."},
    {name:"Aqara Video Doorbell G4", cat:"Sikkerhed", proto:"WiFi · HomeKit", score:8.2, verdict:"Dørklokke med ansigtsgenkendelse og lokal lagring. Stærk på privatliv."},
    {name:"Philips Hue (med Bridge)", cat:"Lys", proto:"Zigbee · Matter", score:9.2, verdict:"Referencen for smart lys. Rock-solid via Bridge, stort tilbehørs-univers."},
    {name:"IKEA DIRIGERA + pærer", cat:"Lys", proto:"Zigbee · Matter", score:8.4, verdict:"Markant billigere indgang til smart lys. Hub fungerer nu som Matter-bro."},
    {name:"tado° Smart Termostat X", cat:"Klima & Energi", proto:"Matter over Thread", score:8.7, verdict:"Sænker varmeregningen med zonestyring og geofencing. Nem at eftermontere."},
    {name:"Shelly Plug S Gen3", cat:"Klima & Energi", proto:"Matter over WiFi", score:8.6, verdict:"Smart-stik med præcis strømmåling. Ingen ekstra hub nødvendig."},
    {name:"Aqara Hub M3", cat:"Hub & Sensorer", proto:"Thread Border Router", score:8.8, verdict:"Stærk central: Zigbee-hub + Thread Border Router + Matter-bro i én."},
    {name:"Aqara sensor-pakke", cat:"Hub & Sensorer", proto:"Zigbee", score:8.5, verdict:"Bevægelse, dør/vindue og temperatur til småpenge. År på ét batteri."}
  ],
  standardsHead:{
    eyebrow:"Standarder forklaret",
    heading:"Zigbee, Thread, Matter — uden teknisk hovedpine",
    sub:"De fleste fejlkøb sker, fordi to enheder taler hver sit sprog. Her er forskellen forklaret på almindeligt dansk, så alt spiller sammen fra dag ét."
  },
  standardsIntro:{
    leftTitle:"Først: radio kontra sprog",
    leftHtml:"<p>Det vigtigste at forstå er, at <b>Matter ikke er en radio</b> — det er et fælles sprog. Zigbee, Z-Wave, Thread og WiFi er <i>måderne</i>, signalet sendes på. Matter er aftalen om, at enhederne forstår hinanden, uanset om de hedder Philips, Aqara eller IKEA.</p><p>Når du køber Matter-mærket udstyr, kan det styres fra Apple Home, Google Home, Alexa og SmartThings på én gang — og du kan skifte system senere uden at starte forfra.</p>",
    rightTitle:"WiFi-bånd kort fortalt",
    rightHtml:"<p><b>2,4 GHz</b> — lang rækkevidde, går bedst gennem vægge, men langsommere og mest trafik. Bruges af de fleste smart home-enheder.</p><p><b>5 GHz</b> — markant hurtigere, kortere rækkevidde. Til streaming, gaming og computere.</p><p><b>6 GHz</b> (WiFi 6E/7) — masser af fri plads og lynhurtigt, men kort rækkevidde. Et <b>mesh-system</b> binder flere punkter sammen til ét net, så du roamer sømløst i hele huset.</p>"
  },
  standards:[
    {n:"Zigbee", k:"Lavenergi mesh · 2,4 GHz",
     p:"Lavenergi-protokol hvor enhederne danner et selvhelende net og videresender hinandens signal. Pærer, sensorer og kontakter holder år på ét batteri.",
     need:"Kræver en <b>Zigbee-hub</b> (fx Philips Hue Bridge, Aqara, IKEA DIRIGERA)."},
    {n:"Z-Wave", k:"Lavenergi mesh · 868 MHz",
     p:"Ligner Zigbee, men kører på 868 MHz i Europa. Færre forstyrrelser fra WiFi og bedre rækkevidde gennem tykke mure — populært til alarm og sensorer.",
     need:"Kræver en <b>Z-Wave-hub</b>. Færre samtidige enheder end Zigbee."},
    {n:"Thread", k:"Lavenergi mesh (IP) · 2,4 GHz",
     p:"Moderne lavenergi-mesh der taler IP. Selvhelende uden central flaskehals, meget responsivt, og fundamentet under mange Matter-enheder.",
     need:"Kræver en <b>Thread Border Router</b> (HomePod mini, Apple TV, Nest Hub, Echo, Aqara)."},
    {n:"Matter", k:"Fælles sprog · ikke en radio",
     p:"Et fælles sprog skabt af branchen (Apple, Google, Amazon, Samsung m.fl.). Sikrer at enheder fra forskellige mærker spiller sammen på tværs af systemer.",
     need:"Kører oven på <b>WiFi, Thread eller Ethernet</b>. Bluetooth bruges kun til opsætning."},
    {n:"Matter over WiFi", k:"Matter via dit WiFi",
     p:"Matter-enheder der bruger dit almindelige WiFi. Ideelt til ting med fast strøm: smart-stik, kontakter og apparater, hvor batteri ikke er en bekymring.",
     need:"Kræver kun <b>din router</b> — ingen ekstra hub."},
    {n:"Matter over Thread", k:"Matter via Thread",
     p:"Matter-enheder der bruger Thread. Bedst til batteridrevne enheder som låse, sensorer og knapper — lang batteritid og lynhurtig respons.",
     need:"Kræver en <b>Thread Border Router</b> i hjemmet."}
  ],
  compare:[
    {std:"WiFi / Mesh", type:"Netværk (IP)", freq:"2,4 / 5 / 6 GHz", hub:"Din router", best:"Strømførende enheder, kameraer, streaming"},
    {std:"Zigbee", type:"Lavenergi mesh", freq:"2,4 GHz", hub:"Zigbee-hub", best:"Pærer, sensorer, kontakter"},
    {std:"Z-Wave", type:"Lavenergi mesh", freq:"868 MHz (EU)", hub:"Z-Wave-hub", best:"Sensorer & alarm, færre forstyrrelser"},
    {std:"Thread", type:"Lavenergi mesh (IP)", freq:"2,4 GHz", hub:"Border Router", best:"Batterienheder, fundament for Matter"},
    {std:"Matter over WiFi", type:"Fælles sprog", freq:"Via WiFi", hub:"Kun din router", best:"Stik, kontakter, apparater med strøm"},
    {std:"Matter over Thread", type:"Fælles sprog", freq:"Via Thread", hub:"Thread Border Router", best:"Låse, sensorer, knapper på batteri"}
  ],
  helper:{
    title:"Hurtig hjælp: hvad skal jeg vælge?",
    rows:[
      {q:"Jeg vil bare have, det virker — uden at tænke over mærker", a:"→ Køb Matter-mærket"},
      {q:"Mange små sensorer der skal holde længe på batteri", a:"→ Thread / Zigbee"},
      {q:"Smart-stik, kontakter og apparater med fast strøm", a:"→ Matter over WiFi"},
      {q:"Skifter måske mellem Apple, Google og Alexa senere", a:"→ Matter"},
      {q:"Tykke mure og signalet skal langt gennem huset", a:"→ Z-Wave (868 MHz)"},
      {q:"Jeg har allerede Philips Hue eller IKEA-pærer", a:"→ Bliv på Zigbee-hub"}
    ],
    tip:"Tip: en Thread Border Router har du måske allerede — fx HomePod mini, Apple TV 4K, Google Nest Hub, nyere Amazon Echo eller en Aqara-hub."
  },
  offer:{
    eyebrow:"Gør-det-for-mig",
    heading:"Orker du ikke teknikken? Få det sat op for dig.",
    text:"WiFi-huller, pærer der ikke vil parre, en hub for meget. Beskriv opgaven, så matcher vi dig med certificerede installatører i dit område.",
    benefits:[
      "Beskriv opgaven på under et minut",
      "Modtag op til 3 uforpligtende tilbud",
      "Udført af certificerede fagfolk",
      "Helt gratis og uden binding"
    ],
    formTitle:"Beskriv din opgave",
    formSub:"Vi vender tilbage med relevante installatører — typisk inden for 1–2 hverdage.",
    formCats:["Opsætning af netværk & mesh-WiFi","Smart belysning & kontakter","Smart lås & adgang","Overvågning & alarm","Robotplæneklipper / have","Andet smart home"],
    formNote:"Dine oplysninger bruges udelukkende til at indhente tilbud."
  },
  faqHead:{ eyebrow:"Ofte stillede spørgsmål", heading:"Det folk spørger os om" },
  faqs:[
    {q:"Er WiFiHuset uvildigt?", a:"Ja. Vi udvælger og rangerer produkter ud fra de samme kriterier for hele kategorien. Vi tjener på affiliate-links, når du køber via siden, men det påvirker aldrig placeringer eller testvindere. Det står åbent i bunden af siden."},
    {q:"Hvad er forskellen på Matter og Thread?", a:"Thread er måden, signalet sendes på (en lavenergi-radio), mens Matter er sproget, enhederne taler. En enhed kan bruge Matter over Thread eller Matter over WiFi. Kort sagt: Thread er vejen, Matter er aftalen om, at alle forstår hinanden."},
    {q:"Skal jeg vælge mesh-WiFi eller en kraftig router?", a:"Bor du i en lejlighed eller et lille hus med få vægge, kan én god router være rigeligt. Har du etager, tykke mure, en kælder eller en have, der skal dækkes, giver et mesh-system med flere punkter et langt mere stabilt og sømløst net."},
    {q:"Behøver jeg en hub til et smart home?", a:"Det afhænger af teknologien. Matter over WiFi og rene WiFi-enheder kræver kun din router. Zigbee, Z-Wave og Thread/Matter-over-Thread kræver henholdsvis en hub eller en Border Router — som du måske allerede har i en HomePod, Apple TV eller Nest Hub."},
    {q:"Kan en robotplæneklipper klare en have med mange forhindringer?", a:"De bedste kan. Vores testvinder, Anthbot M5 LiDAR, bruger LiDAR-navigation, der fungerer markant bedre under træer og i skygge end RTK-GPS-modeller, som kan blive følsomme ved høje hække og overdækkede områder."},
    {q:"Hvor ofte opdaterer I anbefalingerne?", a:"Vurderingerne gennemgås løbende, og priserne hentes live via prissammenligning, så du altid ser det aktuelle niveau hos danske forhandlere. Datoen for seneste opdatering står i toppen af siden."}
  ],
  footer:{
    disclosure:"<b>Sådan tjener WiFiHuset penge.</b> Vi er en gratis, uafhængig portal. Når du køber via et link på siden, kan vi modtage en mindre kommission fra forhandleren — uden ekstra omkostning for dig. Det finansierer vores arbejde, men det påvirker aldrig, hvilke produkter der vinder en test eller får en topplacering. Vurderingerne bygger på de samme kriterier for alle.",
    columns:[
      {title:"Kategorier", links:[
        {label:"Bedst i test 2026", href:"#testvindere"},
        {label:"Netværk & mesh-WiFi", href:"#anbefalinger"},
        {label:"Robotter & have", href:"#anbefalinger"},
        {label:"Sikkerhed & låse", href:"#anbefalinger"}
      ]},
      {title:"Vidensbank", links:[
        {label:"Zigbee forklaret", href:"#standarder"},
        {label:"Thread & Matter", href:"#standarder"},
        {label:"WiFi-bånd & mesh", href:"#standarder"},
        {label:"FAQ", href:"#faq"}
      ]},
      {title:"Info", links:[
        {label:"Sådan tester vi", href:"#metode"},
        {label:"Få 3 tilbud", href:"#tilbud"},
        {label:"Privatlivspolitik", href:"#"},
        {label:"Kontakt", href:"#"}
      ]}
    ],
    copyright:"© 2026 WiFiHuset · 100% uvildig tech-journalistik",
    sub:"Priser opdateres løbende · Forbehold for udsolgte varer"
  }
};
