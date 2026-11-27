/* English editorial content for WiFiHuset.
   Keyed by article slug and product name, so it follows the Danish content in journal.js and config.js.
   If an article is edited in Danish through the admin panel, update the English text here as well.
   An article without an English entry is shown in Danish. */
window.CONTENT_EN = {
  journal: {
    eyebrow: 'ONE HOME. A THOUSAND POSSIBILITIES.',
    title: 'Your home.',
    titleAccent: 'Next level.',
    intro: 'From next-generation WiFi to robots in the garden. We go beneath the surface of the technology that makes your home a little smarter.'
  },

  entries: {
    'aqara-h1-outdoor': {
      kicker: 'Christmas lights · Matter over Thread',
      summary: 'The most beautiful smart home purchase we have made this year – and now that it’s Christmas, it’s hard to imagine the house without it. Easy to assemble, easy to set up – and the lights make the house glow every single evening.',
      body: [
        'Some products take getting used to. Aqara’s permanent outdoor lights are the opposite: they are a joy from the very first evening. We installed the H1 on our own house, and we were surprised by how little it took. The light string, controller and power supply click together without any tool drama, and mounting along the eaves is simply a matter of cleaning the surface, peeling off the backing film and pressing the light pods into place using the spacing guide.\n\nIn the app, the lights were found and ready within minutes. No cryptic codes, no repeated pairing attempts – just a light string that switches on and does what you ask it to.\n\nAnd then there is the light itself. It is stunning. Every light pod is controlled individually, so colours can flow into each other along the facade, while the warm white gives the house a calm, architectural glow on perfectly ordinary weekday evenings. That is exactly what makes permanent outdoor lighting interesting: it isn’t a Christmas decoration that has to come down again in January, but lighting that suits the whole year – atmospheric in October, festive in December and beautiful on long summer evenings on the patio.',
        'The H1 comes in 15, 30 and 45 metre lengths. Each light pod can show RGB colours and tunable white from 2000 K to 9000 K – from a cosy, candle-like gold to a crisp, cool white that also works as wayfinding light by the driveway. Aqara quotes up to 50 lumens per pod and a lifespan of 50,000 hours.\n\nThe connectivity has been well thought through: the lights speak both Zigbee and Matter over Thread. That means they can be controlled from Apple Home, Google Home, Alexa, SmartThings and Home Assistant – not just Aqara’s own app. With a compatible Aqara hub (e.g. M3, M100 or M200) you get all the Aqara features, including automations with sensors, buttons, locks and cameras. For example, the lights can switch on when the door is unlocked after dark.\n\nA built-in microphone provides music sync, where the lights pulse and ripple in time with the music. It isn’t something you use every day, but it can be a fun touch for a garden party. The light string is IP65 rated and the power supply is IP67.',
        'Mounting is primarily done with an adhesive backing. It works, but the preparation is crucial: clean and dry the surface thoroughly, and press each pod firmly for at least five seconds. On a facade exposed to wind, rain and frost, we recommend using the included screws as extra security – especially on corners and exposed spots. The manufacturer specifies an operating temperature of −20 to 40 °C.\n\nMeasure your eaves before choosing a length. Excess string can be cut off, but the cut must be at least 15 cm from the last light pod. If you want to control the lights via Matter, you need a Thread Border Router and a Matter controller; Aqara’s own features require a compatible Aqara hub on up-to-date firmware. The price isn’t at the budget end either: Aqara’s EU store listed it from €189.99 when we looked, and variants were sold out at times.\n\nOur verdict is nonetheless clear. If you have dreamed of making your house look just as good after dark as it does by day, the Aqara H1 is one of the most rewarding smart home purchases you can make. It is easy, it is robustly designed, and it is beautiful. We are sold.'
      ]
    },
    'anthbot-m9-pro': {
      kicker: 'The next generation in the garden',
      summary: 'The M5 gets a challenger on our radar. We take a close look at the questions a new robot mower has to answer.',
      body: [
        'The M9 Pro is the model we are looking at as a possible successor to the M5. A robot lawn mower has to be judged on more than a name and a promising spec sheet: it has to suit the garden’s shape, passages, slopes and edges. That is why this article starts with the requirements for a thorough assessment. Model name, local availability and final specifications should be confirmed with the manufacturer before buying.',
        'Navigation is only the first part of the job. The relevant test links mapping with repeatable mowing: does the robot find its way back through a narrow passage, does it notice changes in the garden, and can you move a zone without remapping everything? We want to examine its behaviour around trees, close to the house and along flower beds. LiDAR, cameras and satellite navigation have different requirements; we won’t attribute a particular sensor package to the M9 Pro until it is documented.',
        'This is a preview analysis, not a completed product test. There are no documented M9 Pro measurements, prices or beta results on the site yet. A future field test should record firmware, garden area, weather, interrupted runs, edge distance and manual interventions. The M5 article stays in the archive, so its earlier verdict isn’t carried over to a different model.'
      ]
    },
    'asus-zenwifi-bt10': {
      kicker: 'WiFi 7 · next level',
      summary: 'More than a speed figure. Backhaul, placement and your clients decide what WiFi 7 actually gives you.',
      body: [
        'The ZenWiFi BT10 is an interesting place to start if your network has to carry home working, local storage and a growing smart home. WiFi 7 opens the door to newer radio technology, but a generational shift is not in itself a reason to replace a stable network. The gain depends on client support, your internet connection and the link between the mesh nodes.',
        'Look at the backhaul first: the traffic the mesh nodes send to each other. A strong radio signal to the nearest node doesn’t help if its path back to the router is the bottleneck. Ethernet between the nodes can matter more than a big number on the box. In a test, throughput and latency should be measured both close to the main unit and behind several walls, with the same client and the same server.',
        '6 GHz has a shorter practical range through many building materials than 2.4 GHz. Older clients don’t automatically get all the benefits of WiFi 7 either. Check port types, firmware, your regional variant and the security features you expect to use. No BT10 speed measurements of our own have been published here; the text is a technical analysis of how the product is used.'
      ]
    },
    'aqara-u200': {
      kicker: 'Matter over Thread',
      summary: 'A smarter front door starts with compatibility. We look at Thread, access and the mechanical foundation.',
      body: [
        'The U200 combines retrofitting, fingerprint unlocking and Apple Home Key support in an interesting way. It can be relevant if your existing cylinder and door are to become part of a more connected smart home. What matters most, though, isn’t how many ways the lock can be opened, but whether it fits mechanically and how access works for the whole household.',
        'Matter over Thread connects the lock to compatible smart home systems. A Thread network requires a Border Router; Matter control also requires a compatible controller, and the two roles can live in the same device. Home Key requires the relevant Apple setup. Access codes, local operation and remote control should be assessed separately because they don’t have identical dependencies.',
        'Check the cylinder, clearance for the handle, how the door closes and the manufacturer’s compatibility list before buying. A motorised lock won’t fix a door that binds. A practical test should document battery warnings, restarts, use without internet and emergency access options. We don’t show a measured unlocking time or a new test score without a documented test.'
      ]
    },
    'deco-xe75-pro': {
      kicker: 'The well-known mesh reference',
      summary: 'WiFi 6E with a focus on simple mesh. How to judge whether upgrading to WiFi 7 is worth the money.',
      body: [
        'The Deco XE75 Pro remains a relevant benchmark for a home where reliability and simple administration count for more than having the newest standard. A well-functioning WiFi 6E system can deliver more than enough for streaming and working from home. Upgrading only makes sense once a specific bottleneck has been identified.',
        'Three radio bands give flexibility, but placement and backhaul are still decisive. Don’t put an extra node in the middle of the area where the signal has already disappeared. It needs a good connection back itself. Wired backhaul should be compared with wireless in the same room before poor coverage turns into buying more units.',
        'Some security and parental control features may be tied to a subscription. Check the current package and your port needs. The earlier verdict is preserved as archive material; this deeper look contains no new throughput measurements of our own.'
      ]
    },
    'nest-wifi-pro': {
      kicker: 'Networking meets smart home',
      summary: 'Simple administration and Thread in the same ecosystem. But does the level of control suit your home?',
      body: [
        'Nest WiFi Pro is aimed at the home where the network should ideally look after itself. The combination with Google’s smart home ecosystem can reduce the number of boxes, but simplicity should still be weighed against the features you need day to day.',
        'WiFi 6E and Thread do different jobs: one connects fast WiFi clients, the other carries a low-power network for compatible devices. The Thread Border Router function is not a universal replacement for a Zigbee hub. So plan which devices and controllers need to work together before choosing the network.',
        'Check the options for cabling, advanced network settings and mixing with older Nest units. An existing ecosystem is a practical advantage but can also limit your choices. No measurements of our own for this system have been added in this analysis.'
      ]
    },
    're700x': {
      kicker: 'One problem area at a time',
      summary: 'An extender may be enough for that last room. Start by finding out where the signal is lost.',
      body: [
        'The RE700X is a TP-Link WiFi extender; the earlier catalogue listed it as “TP-Link Tapo RE700X”. It is interesting for a limited coverage problem where a whole new mesh system may be unnecessary. The first step is to measure whether the problem is a weak signal, interference or a slow internet connection.',
        'A wireless extender has to talk to the client and also have a usable connection back to the router. That is why placement between the router and the problem area is central. If there is already Ethernet to the room, an access point is often a more direct choice.',
        'Seamless roaming and mesh compatibility depend on the combination with your router and the current firmware. Don’t assume that all TP-Link ranges work as one unified mesh. Check the manufacturer’s compatibility list and compare before and after with the same device.'
      ]
    },
    'anthbot-m5': {
      kicker: 'From the original catalogue',
      summary: 'The M5 stays in the archive. Navigation, edges and the garden’s geometry are still the important questions.',
      body: [
        'The M5 was the featured garden product on the earlier front page. The original verdict is preserved below, while the M9 Pro is now on the radar. The two models don’t automatically share results, specifications or a test score. The M5 is a benchmark in its own right.',
        'LiDAR can be used to build a geometric understanding of the surroundings, but the sensor type alone doesn’t tell you how well a robot handles a particular garden. Narrow passages, low obstacles, slopes and changing vegetation have to be assessed together with the software and safety behaviour.',
        'The earlier information on area, zones, price and any subscription should be checked against the specific variant and current local terms. Words like “flawless” cannot replace a documented failure rate. No new field test results have been added here.'
      ]
    },
    'navimow-i': {
      name: 'Segway Navimow i series',
      kicker: 'A clear view of the sky',
      summary: 'Satellite-based navigation has to be judged in the very garden the robot is going to mow.',
      body: [
        'The Navimow i series is a relevant alternative among mowers without a traditional boundary wire. The series name covers several variants, so a purchase should start with the exact model number and area requirements rather than a general promise of autonomy.',
        'RTK-based navigation uses correction of the satellite position. The placement of the reference equipment and a clear view of the sky are therefore important parts of the installation. Trees, buildings and narrow passages should be part of a test plan; how well it works in practice also depends on the additional sensors and software in the specific model.',
        'Check which features require accessories and how the robot handles a lost position. Factor in edge trimming, noise and storage too. We haven’t added measurements of our own for the series as a whole.'
      ]
    },
    'roborock-qrevo': {
      name: 'Roborock Qrevo series',
      kicker: 'Robots indoors',
      summary: 'The dock is only half the story. Floors, thresholds and maintenance decide everyday life.',
      body: [
        'The Qrevo name covers several Roborock models with different sensors and dock features. The series is interesting if you want to combine vacuuming and mopping, but features from the top model shouldn’t simply be assumed for the whole family.',
        'Mapping, navigation and avoiding small objects are different abilities. A robot can find its way around without avoiding every cable. Also assess how the mop is handled on carpets, space for the dock and access to clean and dirty water. A smart home logo should be checked against the exact model and firmware.',
        'The dock doesn’t remove the need to clean filters, brushes and trays. Look into the prices of consumables and the real maintenance requirements. Matter support is not documented for every Qrevo variant in this article.'
      ]
    },
    'ecovacs-deebot': {
      kicker: 'Choose the specific variant',
      summary: 'A large product family calls for a precise choice of model. Here is what we would compare.',
      body: [
        'Deebot is a product family, not one robot vacuum. So it isn’t meaningful to promise the same cleaning, price or sensors for every model. Use the catalogue entry as a starting point for finding the variant that suits your floors and your home.',
        'Compare pickup along edges, hair in the brush, navigation around furniture and behaviour on carpets. For mopping, mop contact and handling of dirty water are at least as relevant as a high suction figure. Measure the space around the station before buying.',
        'Look into app requirements, spare parts, privacy and whether the specific model includes cameras. A practical assessment should use the same dirt, floor area and cleaning setting across robots. This article contains no new cleaning measurements.'
      ]
    },
    'yale-doorman': {
      kicker: 'A lock is also mechanics',
      summary: 'Door, lock case and installation come before the app. An important correction to the original catalogue.',
      body: [
        'The earlier text described the L3S as an interior retrofit lock that keeps the outside and the key. That shouldn’t be used as a basis for buying: the Doorman L3S is a different type of installation from a motor mounted on top of an existing cylinder. Clarify the exact Flex package with a professional.',
        'Check the door thickness, lock case, fittings and emergency opening requirements. A brand’s approvals are not the same as every installation meeting your insurance conditions. The mechanical function has to be right before automatic locking and access codes are set up.',
        'Remote control and ecosystem integration may require an extra module or accessory. Check the current package and agree who can help with a mechanical problem. The preserved archive score is not a new security certification or a documented lab test.'
      ]
    },
    'nuki-ultra': {
      kicker: 'Compact access',
      summary: 'A small lock with big integration questions. Start with the cylinder and emergency access.',
      body: [
        'The Ultra is interesting as a compact route to a more connected access solution. But before choosing it for its design, look into the included cylinder solution, the door’s dimensions and what the installation actually involves. Don’t compare the mounting directly with all older Nuki models.',
        'Matter and network features can give you more ways to control access. It is still important to distinguish between local unlocking, automation and remote control. Accessories for codes or fingerprints should be counted as a separate part of the solution.',
        'Check cylinder compatibility, charging and what happens with a flat battery or a lost network. Automatic unlocking should be configured conservatively and tested in practice. Our own unlocking times, noise measurements and battery life are not documented here.'
      ]
    },
    'reolink-argus': {
      name: 'Reolink Argus series',
      kicker: 'Recordings on your terms',
      summary: 'Battery cameras are practical, but detection and recording call for a different assessment than a wired camera.',
      body: [
        'The Argus family is relevant if running cables is difficult and local storage is high on your wish list. The series consists of different models, so resolution, field of view and storage options must be checked on the specific variant.',
        'Battery power means the camera typically doesn’t work the same way as a constantly powered camera. Look into wake-up, motion detection and whether the first seconds of an event are captured. Placement and angle matter as much as the resolution on the box.',
        'Local storage also has to be accessible if the camera is removed. Check power, any solar panel, winter conditions and placement in relation to neighbours and public roads. A subscription isn’t necessarily required for every feature, but the terms vary.'
      ]
    },
    'aqara-g4': {
      kicker: 'The doorbell as a sensor',
      summary: 'Access, recording and privacy meet at the front door. Look at the whole chain.',
      body: [
        'The G4 is interesting in a home with Apple Home and a wish for a video doorbell. The assessment should start with placement: does the camera see the visitor, or mostly the driveway? Power supply and space for the indoor unit are also part of the installation.',
        'There is a difference between local storage, the manufacturer’s app and HomeKit Secure Video. They have different requirements and options for events and recordings. Face recognition should be assessed together with data processing and access, not just as a convenience.',
        'Check the current model, the requirements for Apple devices and any iCloud subscription if you want that solution. A good test should cover audio delay, night images and a visitor standing close to the door. No such measurements of our own have been published here.'
      ]
    },
    'philips-hue': {
      name: 'Philips Hue (with Bridge)',
      kicker: 'Light as infrastructure',
      summary: 'A good lighting network still has to work when your phone is in another room.',
      body: [
        'Hue with the Bridge is a mature starting point for rooms where lights, buttons and sensors need to work together. It is particularly interesting when the controls need to be intuitive for people other than whoever installed the system. Physical switches are therefore an important part of the solution.',
        'Zigbee connects many Hue devices to the bridge, while Matter can bridge to supported smart home platforms. A Matter integration doesn’t necessarily mean every Hue-specific effect carries over into another app. Plan scenes and automations on the platform that is going to own them.',
        'Avoid cutting power to mesh bulbs with ordinary wall switches if they are expected to relay traffic. Check the variant, lumens and colour temperature. The earlier catalogue verdict is preserved; no new colour or latency measurements have been added.'
      ]
    },
    'ikea-dirigera': {
      name: 'IKEA DIRIGERA + bulbs',
      kicker: 'A sensible first network',
      summary: 'An affordable ecosystem is most interesting when it can also grow with your home.',
      body: [
        'DIRIGERA with compatible IKEA bulbs is an obvious entry point to room control without buying everything at once. Start with one room, one physical button and one scene that makes sense in everyday life. That makes it easier to see which features you actually use.',
        'The hub brings the compatible devices together and can connect supported features to other platforms via Matter. Matter bridge, Matter controller and Thread Border Router are different roles; check the current documentation rather than assuming one hub can do it all.',
        'Check compatibility, firmware and which features are exposed in your preferred platform. Very low prices are only an advantage if the brightness and controls suit the room. No measurements of our own for dimming and colour rendering have been added.'
      ]
    },
    'tado-x': {
      name: 'tado° Smart Thermostat X',
      kicker: 'Heating with context',
      summary: 'Zone control is exciting. Comfort, valves and your heating system decide the result.',
      body: [
        'tado° X is interesting when heating is to be controlled room by room rather than through one central temperature. Geofencing and schedules can be useful, but you shouldn’t promise a particular saving without knowing the house, the heat source and how it has been used so far.',
        'Matter over Thread is part of the integration story, while radiator valves, heating demand and control of the system itself are another. Check adapters, placement of temperature sensors and the connection to the rest of the system. A warm radiator cover can give a different temperature reading than the living area.',
        'Look into what works locally, what the app adds and which features may require a subscription. The X series shouldn’t be assumed to be directly interchangeable with all earlier tado° generations. Energy savings of our own are not documented here.'
      ]
    },
    'shelly-plug': {
      kicker: 'The small watts add up',
      summary: 'A smart plug can make consumption visible. Start with the load and the right firmware.',
      body: [
        'A Shelly plug is interesting if an ordinary socket needs to be controllable and its energy use tracked. It can make standby consumption and usage patterns more tangible. A single reading is not the same as a documented precision measurement, though.',
        'WiFi connects the plug without a separate Zigbee hub. Matter support should be confirmed for the exact Gen3 variant and firmware. There can be differences between the data and features available in Shelly’s own environment and those a Matter controller shows.',
        'Respect the manufacturer’s maximum load and guidance for the type of appliance; a smart plug is not a universal solution for every heat source. When comparing readings, use a known reference load. No calibration results of our own have been added.'
      ]
    },
    'aqara-m3': {
      kicker: 'The bridge builder in the comms cupboard',
      summary: 'Zigbee, Thread and Matter in one architecture. What matters is which roles you are missing.',
      body: [
        'The M3 is relevant when a growing Aqara system has to fit into a broader smart home architecture. Before buying yet another hub, map your existing boxes and see which protocols and roles they already cover.',
        'A Zigbee hub manages a Zigbee network, a Matter bridge exposes supported devices, and a Thread Border Router connects Thread to the rest of the IP network. The roles can be combined in one device without every connected product’s features necessarily being the same across platforms.',
        'Check migration options, supported devices and local automations before switching. Place the hub with care in relation to metal and WiFi equipment. This analysis contains no new outage or range measurements of our own.'
      ]
    },
    'aqara-sensorer': {
      name: 'Aqara sensor pack',
      kicker: 'A home that can react',
      summary: 'Small sensors make the big automations possible. Start with a concrete everyday situation.',
      body: [
        'A collection of motion, door and temperature sensors can do more for everyday life than yet another app. But a “sensor pack” is not a single product number. Check the models, protocols and which hub they need before buying a pack.',
        'Many Aqara sensors use Zigbee, while other generations may use other connections. Battery sensors don’t normally relay mesh traffic in the same way as mains-powered router devices. A robust network therefore needs more than lots of sensors scattered around the house.',
        'Record placement, battery type and behaviour when the connection is lost. Don’t use a simple consumer sensor as the only safeguard for critical events. Battery life varies with temperature and reporting; no long-term measurements of our own have been added.'
      ]
    }
  },

  photos: {
    'anthbot-m9-pro': { imageNote: 'Product photo · ANTHBOT M9 Pro · ANTHBOT', imageCredit: 'ANTHBOT · official product catalogue', imageModel: 'ANTHBOT M9 Pro' },
    'asus-zenwifi-bt10': { imageNote: 'Product photo · ASUS ZenWiFi BT10 · ASUS', imageCredit: 'ASUS · official product page', imageModel: 'ASUS ZenWiFi BT10, two-unit set' },
    'aqara-u200': { imageNote: 'Product photo · Aqara U200 · Aqara, product detail', imageCredit: 'Aqara · official product page', imageModel: 'Aqara Smart Lock U200 with keypad' },
    'deco-xe75-pro': { imageNote: 'Product photo · TP-Link Deco XE75 Pro · existing image archive', imageModel: 'TP-Link Deco XE75 Pro' },
    'anthbot-m5': { imageNote: 'Product photo · ANTHBOT M5 · existing image archive', imageModel: 'ANTHBOT M5' },
    'yale-doorman': { imageNote: 'Product photo · Yale Doorman L3S · existing image archive', imageModel: 'Yale Doorman L3S' },
    'ikea-dirigera': { imageNote: 'Product photo · IKEA TRÅDFRI LED1623G12 · example from the lighting family', imageCredit: 'Zigbee2MQTT product documentation · IKEA', imageModel: 'IKEA TRÅDFRI LED1623G12, without the DIRIGERA hub' },
    'aqara-sensorer': { imageNote: 'Product photo · Aqara MCCGQ11LM door/window sensor · example from the sensor family', imageCredit: 'Zigbee2MQTT product documentation · Aqara', imageModel: 'Aqara MCCGQ11LM door/window sensor' },
    'philips-hue': { imageNote: 'Product photo · Philips Hue 9290012573A · example from the lighting family', imageCredit: 'Zigbee2MQTT product documentation · Philips Hue', imageModel: 'Philips Hue White and Color Ambiance 9290012573A, without the Bridge' }
  },

  catalog: {
    'TP-Link Deco XE75 Pro': { proto: 'WiFi 6E', verdict: 'Our mesh test winner. The best balance of price, speed and ease of use.' },
    'Google Nest WiFi Pro': { proto: 'WiFi 6E · Matter hub', verdict: 'By far the easiest setup. Also works as a Thread Border Router.' },
    'ASUS ZenWiFi BT10': { proto: 'WiFi 7', verdict: 'For large houses and heavy users. More settings, a bit more tech.' },
    'TP-Link Tapo RE700X': { proto: 'WiFi 6', verdict: 'Affordable WiFi extender for one dead corner – when a whole mesh is overkill.' },
    'Anthbot M5 LiDAR': { proto: 'LiDAR · 4G', verdict: 'Test winner. Wire-free robot mower with LiDAR – unbeatable in shade and under trees.' },
    'Segway Navimow i-serie': { proto: 'RTK GPS', verdict: 'Strong RTK alternative for open, uncomplicated gardens without many obstacles.' },
    'Roborock Qrevo-serie': { proto: 'WiFi · Matter', verdict: 'Top-class robot vacuum with mopping, self-emptying and precise LiDAR mapping.' },
    'Ecovacs Deebot': { proto: 'WiFi', verdict: 'Solid all-round vacuum at a friendlier price than the top models.' },
    'Yale Doorman L3S Flex': { proto: 'Retrofit', verdict: 'Test winner. High security, retrofits and keeps your physical key.' },
    'Aqara Smart Lock U200': { proto: 'Matter over Thread', verdict: 'Best-value lock. Apple Home Key + fingerprint at a sharp price.' },
    'Nuki Smart Lock Ultra': { proto: 'WiFi · Matter', verdict: 'Quick and easy to fit. Lacks a fingerprint reader, though.' },
    'Reolink Argus-serie': { proto: 'WiFi', verdict: 'Wireless security camera with local recording and no forced subscriptions.' },
    'Aqara Video Doorbell G4': { proto: 'WiFi · HomeKit', verdict: 'Doorbell with face recognition and local storage. Strong on privacy.' },
    'Philips Hue (med Bridge)': { proto: 'Zigbee · Matter', verdict: 'The benchmark for smart lighting. Rock-solid via the Bridge, a huge accessory universe.' },
    'IKEA DIRIGERA + pærer': { proto: 'Zigbee · Matter', verdict: 'A much cheaper way into smart lighting. The hub now works as a Matter bridge.' },
    'tado° Smart Termostat X': { proto: 'Matter over Thread', verdict: 'Cuts the heating bill with zone control and geofencing. Easy to retrofit.' },
    'Shelly Plug S Gen3': { proto: 'Matter over WiFi', verdict: 'Smart plug with precise power metering. No extra hub needed.' },
    'Aqara Hub M3': { proto: 'Thread Border Router', verdict: 'A strong centre: Zigbee hub + Thread Border Router + Matter bridge in one.' },
    'Aqara sensor-pakke': { proto: 'Zigbee', verdict: 'Motion, door/window and temperature for pocket money. Years on one battery.' }
  },

  winners: {
    'Anthbot M5 LiDAR': { award: 'Test winner of the year · Garden', price: '≈ 4,799 DKK', verdict: 'Wire-free mower with true 360° LiDAR – the same navigation as self-driving cars. A superb choice under trees and in shade, where RTK models struggle.', pros: ['LiDAR navigates without a boundary wire', 'Up to 20 zones and ~500 m²', 'Sharp price for the technology'], cons: ['The LiDAR tower changes the robot’s profile', '4G subscription after 12 months'] },
    'TP-Link Deco XE75 Pro': { award: 'Test winner · Easiest mesh', price: '≈ 2,199 DKK / 3-pack', verdict: 'The mesh we recommend to most people. Tri-band WiFi 6E, set up in under five minutes in the Deco app – no technical knowledge needed.', pros: ['Lightning-fast setup via the app', 'Tri-band WiFi 6E, one seamless network', 'Built-in security & parental controls'], cons: ['Advanced settings are limited', 'Full security package requires a subscription'] },
    'Yale Doorman L3S Flex': { award: 'Test winner · Security', price: '≈ 2,499 DKK', verdict: 'Denmark’s most trusted door lock. High lock grade, retrofitted without changing the outside of the door – perfect for both owned and rented homes.', pros: ['High security approval', 'Keeps the outside & physical key', 'Stable app & auto-lock'], cons: ['Premium price range', 'Full smart features require a module'] }
  },

  config: {
    standardsHead: {
      sub: 'Most bad purchases happen because two devices speak different languages. Here is the difference explained in plain English, so everything works together from day one.'
    },
    standardsIntro: {
      leftTitle: 'First: radio versus language',
      leftHtml: '<p>The most important thing to understand is that <b>Matter is not a radio</b> – it is a shared language. Zigbee, Z-Wave, Thread and WiFi are the <i>ways</i> the signal is sent. Matter is the agreement that devices understand each other, whether they are made by Philips, Aqara or IKEA.</p><p>When you buy Matter-certified gear, it can be controlled from Apple Home, Google Home, Alexa and SmartThings at the same time – and you can switch systems later without starting over.</p>',
      rightTitle: 'WiFi bands in brief',
      rightHtml: '<p><b>2.4 GHz</b> – long range, best through walls, but slower and the busiest. Used by most smart home devices.</p><p><b>5 GHz</b> – much faster, shorter range. For streaming, gaming and computers.</p><p><b>6 GHz</b> (WiFi 6E/7) – lots of free space and lightning fast, but short range. A <b>mesh system</b> ties several points together into one network, so you roam seamlessly throughout the house.</p>'
    },
    standards: [
      { n: 'Zigbee', k: 'Low-power mesh · 2.4 GHz', p: 'A low-power protocol where devices form a self-healing network and relay each other’s signals. Battery sensors can last a long time; mains-powered devices can extend the mesh.', need: 'Requires a <b>Zigbee hub</b> (e.g. Philips Hue Bridge, Aqara, IKEA DIRIGERA).' },
      { n: 'Z-Wave', k: 'Low-power mesh · 868 MHz', p: 'Similar to Zigbee, but runs on 868 MHz in Europe. Less interference from WiFi and better range through thick walls – popular for alarms and sensors.', need: 'Requires a <b>Z-Wave hub</b>. Fewer simultaneous devices than Zigbee.' },
      { n: 'Thread', k: 'Low-power mesh (IP) · 2.4 GHz', p: 'A modern low-power mesh that speaks IP. Self-healing with no central bottleneck, very responsive, and the foundation under many Matter devices.', need: 'Requires a <b>Thread Border Router</b> (HomePod mini, Apple TV, Nest Hub, Echo, Aqara).' },
      { n: 'Matter', k: 'Shared language · not a radio', p: 'A shared language created by the industry (Apple, Google, Amazon, Samsung and others). It ensures devices from different brands work together across systems.', need: 'Runs on top of <b>WiFi, Thread or Ethernet</b>. Bluetooth is only used for setup.' },
      { n: 'Matter over WiFi', k: 'Matter via your WiFi', p: 'Matter devices that use your ordinary WiFi. Ideal for things with permanent power: smart plugs, switches and appliances, where battery life isn’t a concern.', need: 'Requires <b>WiFi and a compatible Matter controller</b>. No Zigbee hub or Thread Border Router for the WiFi device itself.' },
      { n: 'Matter over Thread', k: 'Matter via Thread', p: 'Matter devices that use Thread. Best for battery-powered devices such as locks, sensors and buttons – long battery life and lightning-fast response.', need: 'Requires a <b>Thread Border Router and a compatible Matter controller</b>. The roles can be combined in one device.' }
    ],
    compare: [
      { std: 'WiFi / Mesh', type: 'Network (IP)', freq: '2.4 / 5 / 6 GHz', hub: 'Your router', best: 'Mains-powered devices, cameras, streaming' },
      { std: 'Zigbee', type: 'Low-power mesh', freq: '2.4 GHz', hub: 'Zigbee hub', best: 'Bulbs, sensors, switches' },
      { std: 'Z-Wave', type: 'Low-power mesh', freq: '868 MHz (EU)', hub: 'Z-Wave hub', best: 'Sensors & alarms, less interference' },
      { std: 'Thread', type: 'Low-power mesh (IP)', freq: '2.4 GHz', hub: 'Border Router', best: 'Battery devices, foundation for Matter' },
      { std: 'Matter over WiFi', type: 'Shared language', freq: 'Via WiFi', hub: 'Router + Matter controller', best: 'Plugs, switches, mains-powered appliances' },
      { std: 'Matter over Thread', type: 'Shared language', freq: 'Via Thread', hub: 'Border Router + Matter controller', best: 'Locks, sensors, battery buttons' }
    ],
    helper: {
      title: 'Quick help: what should I choose?',
      rows: [
        { q: 'I just want it to work – without thinking about brands', a: '→ Matter + a compatible controller' },
        { q: 'Lots of small sensors that need to last long on battery', a: '→ Thread / Zigbee' },
        { q: 'Smart plugs, switches and appliances with permanent power', a: '→ Matter over WiFi + controller' },
        { q: 'Might switch between Apple, Google and Alexa later', a: '→ Matter' },
        { q: 'Thick walls and the signal has to travel far through the house', a: '→ Z-Wave (868 MHz)' },
        { q: 'I already have Philips Hue or IKEA bulbs', a: '→ Stay with a Zigbee hub' }
      ],
      tip: 'Tip: you may already own a Thread Border Router – e.g. a HomePod mini, Apple TV 4K, Google Nest Hub, newer Amazon Echo or an Aqara hub.'
    },
    offer: {
      formTitle: 'Describe your project',
      formCats: ['Network & mesh WiFi setup', 'Smart lighting & switches', 'Smart lock & access', 'Surveillance & alarm', 'Robot mower / garden', 'Other smart home']
    },
    faqs: [
      { q: 'Is WiFiHuset independent?', a: 'We work with open criteria and clear caveats. Product reviews are labelled as technical analyses, preview analyses or hands-on reviews. Earlier verdicts are kept in the archive. The site may contain affiliate links; how we make money is described at the bottom. Our own measurements and beta experience are only stated when they can be documented.' },
      { q: 'What is the difference between Matter and Thread?', a: 'Thread is the way the signal is sent (a low-power radio), while Matter is the language the devices speak. A device can use Matter over Thread or Matter over WiFi. In short: Thread is the road, Matter is the agreement that everyone understands each other.' },
      { q: 'Should I choose mesh WiFi or a powerful router?', a: 'If you live in an apartment or a small house with few walls, one good router may be plenty. If you have several floors, thick walls, a basement or a garden to cover, a mesh system with several points gives a far more stable and seamless network.' },
      { q: 'Do I need a hub for a smart home?', a: 'It depends on the technology. Pure WiFi devices use your network. Matter over WiFi also needs a compatible Matter controller. Zigbee and Z-Wave need their respective hubs; Matter over Thread needs both a Thread Border Router and a Matter controller. The last two roles can live in the same device. Check the exact Apple TV, HomePod or Nest model.' },
      { q: 'Can a robot mower handle a garden with lots of obstacles?', a: 'It depends on the specific robot, the sensor package and the garden. Trees, narrow passages and tall hedges place different demands on navigation. The M5 is in the archive, while the M9 Pro is on the radar. No M9 Pro field tests of our own have been documented on the site yet. Look into a model in a garden similar to yours before choosing.' },
      { q: 'How often do you update the recommendations?', a: 'New analyses and corrections are added editorially. Earlier scores are kept as archive material and should not be read as new tests. Price links open an external price comparison; we don’t fetch live prices on the site. Always check the price, model variant and stock with the retailer.' }
    ],
    footer: {
      disclosure: '<b>How WiFiHuset makes money.</b> We are a free, independent portal. When you buy via a link on the site, we may receive a small commission from the retailer – at no extra cost to you. That funds our work, but it never affects which products win a test or get a top spot. The verdicts are based on the same criteria for everyone.',
      columns: [
        { title: 'Categories', links: [
          { label: 'Best of 2026', href: '#testvindere' },
          { label: 'Network & mesh WiFi', href: '#anbefalinger' },
          { label: 'Robots & garden', href: '#anbefalinger' },
          { label: 'Security & locks', href: '#anbefalinger' }
        ] },
        { title: 'Knowledge', links: [
          { label: 'Zigbee explained', href: '#standarder' },
          { label: 'Thread & Matter', href: '#standarder' },
          { label: 'WiFi bands & mesh', href: '#standarder' },
          { label: 'FAQ', href: '#faq' }
        ] },
        { title: 'Info', links: [
          { label: 'How we test', href: '#metode' },
          { label: 'Get help with your setup', href: '#tilbud' },
          { label: 'Privacy policy', href: '#' },
          { label: 'Contact', href: '#' }
        ] }
      ]
    }
  }
};

/* English version of the Energy AI download page (growatt.html). */
window.GROWATT_EN = `<a class="back" href="index.html">← WiFiHuset</a><p class="eyebrow">WIFIHUSET · CLOSED BETA</p><h1>WiFiHuset Energy AI.<br><span>Your energy overview.</span></h1><p class="lead">Solar, battery, electricity prices and personal notifications. WiFiHuset Energy AI brings your system together in one overview that you can arrange yourself.</p><p class="fine"><b>Please note:</b> the app is built for Danish households. Electricity prices, tariffs and the savings calculator are based on Danish data.</p><div class="download-actions"><a class="download" href="https://growatt-ai-public.kronborgnielsen.workers.dev/downloads/wifihuset-ai-beta.apk?source=wifihuset"><small>Android</small>Get it for Android ↓</a><a class="download" href="https://growatt-ai-public.kronborgnielsen.workers.dev/?source=wifihuset-iphone"><small>iPhone and iPad</small>Get it for iPhone ↗</a></div><p class="fine">Beta access requires an invitation on both phones. You can also <a class="inline" href="https://growatt-ai-public.kronborgnielsen.workers.dev/">open the app in a browser on your computer</a>.</p><a class="spare-box" href="https://growatt-ai-public.kronborgnielsen.workers.dev/spar.html?source=wifihuset"><small>New · free for everyone</small><b>What could I save?</b><span>See what a battery or solar panels would have saved you last year, calculated hour by hour on your real consumption from Eloverblik (Danish households).</span><em>Open the calculator ↗</em></a><div class="platforms"><section id="android"><h2>Android</h2><p>Tap <strong>Get it for Android</strong>, open the file and allow the installation. Android asks once, because the app doesn’t come from Google Play.</p></section><section id="iphone"><h2>iPhone</h2><p>There is no App Store app – you simply use the link:</p><ol><li>Open the link in <strong>Safari</strong>.</li><li>Tap <strong>Share</strong> (the square with the arrow) → <strong>Add to Home Screen</strong>.</li><li>Open the app from the new icon. Then notifications work too.</li></ol></section></div><section><h2>From invitation to energy overview</h2><ol><li><strong>Get an invitation key.</strong> The key is personal and linked to your Google email. The administrator chooses how long it is valid.</li><li><strong>Install the app.</strong> Follow the Android or iPhone guide above.</li><li><strong>Sign in with the invited Google account.</strong> Enter the key to activate your beta access.</li><li><strong>Connect your own Growatt system.</strong> Paste your OpenAPI key into the app and tap Start easy setup. You answer three questions – address, electricity company and battery size – and the app finds tariffs and taxes by itself.</li><li><strong>Turn on notifications.</strong> Under Settings → Notifications you allow notifications. Then you get the day’s electricity prices every day and a reminder 15 minutes before the cheapest hour.</li></ol></section><section><h2>About the beta and your information</h2><p>The beta may contain bugs. Support depends on your inverter and Growatt’s API. Automatic charge control requires separate activation and verified control; installation does not start any charging.</p><p>Google is used for sign-in. WiFiHuset manages name, email address, access status, invitations and recent activity to run the beta. Your Growatt key is stored encrypted. The administrator can grant, extend and block access. Contact the administrator who invited you with questions about your account.</p><p>The app checks for new versions automatically when it is opened or returns from the background. Tap Update now for the latest improvements. If there is a new Android app, choose Get new app version and approve the installation. Choose Update without uninstalling first, so your saved settings are kept.</p></section><footer>Made by <a href="index.html">wifihuset.dk</a> · Lasse Kronborg Breckmann Nielsen</footer>`;
