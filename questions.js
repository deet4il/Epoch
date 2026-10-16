const QUESTIONS_DB = [
  {
    id: "MC_001",
    region: "Southeast Asia",
    category: "Law & Epigraphy",
    question: "The Laguna Copperplate Inscription, dated to 900 CE, is the oldest known written legal document found in the Philippines. What primary transaction does it record?",
    options: [
      "A maritime trade alliance with the Kingdom of Brunei",
      "The complete exoneration of an inherited personal debt in gold",
      "The official demarcation of boundary lands along Laguna de Bay",
      "A royal decree formalizing Buddhist monastic vows in Tondo"
    ],
    correct: 1,
    trivia: "Discovered in 1989 along the Lumban River in Laguna, the thin copper plate is inscribed in an early Kawi script with heavy Old Malay, Sanskrit, and Old Tagalog vocabulary. It explicitly documents that the Chief of Tondo, acting on behalf of the sovereign of Medang, released a nobleman named Namwaran and his descendants from a debt of one kati and eight suwarnas of gold.\n\nThis single artifact pushed back the recorded documentary history of the Philippines by over 600 years, conclusively disproving older historical assumptions that pre-colonial Philippine polities existed in complete isolation without written legal apparatus."
  },
  {
    id: "MC_002",
    region: "Americas",
    category: "Agronomy & Climate",
    question: "How did the ancient Tiwanaku civilization around Lake Titicaca protect crops from freezing night frosts at 3,800 meters elevation?",
    options: [
      "By building raised agricultural beds flanked by deep solar heat-retaining water canals",
      "By cultivating subterranean geothermal steam vents inside cave shelters",
      "By coating terraces in pulverized dark basalt dust to absorb extra moonlight",
      "By constructing enclosed multi-tiered adobe greenhouses with mica skylights"
    ],
    correct: 0,
    trivia: "Known as the suka kollu (or camellones) system, Tiwanaku farmers constructed elevated soil platforms interspersed with canals fed by river runoff and rain. During the intense Andean daytime sun, the water in the surrounding canals acts as a massive thermal reservoir.\n\nAt night, when ambient mountain temperatures plunge below freezing, the canals radiate stored heat into the microclimate above the crops, while generating a gentle fog blanket that shields potato and quinoa seedlings from killer frosts."
  },
  {
    id: "MC_003",
    region: "East Asia",
    category: "Printing & Technology",
    question: "Decades before the Gutenberg Bible was produced in Europe, which book was printed using cast movable metal type in Goryeo Korea in 1377?",
    options: [
      "The Tripitaka Koreana",
      "The Hunminjeongeum",
      "The Jikji",
      "The Samguk Yusa"
    ],
    correct: 2,
    trivia: "The Jikji (an anthology of Zen Buddhist teachings) was printed at Heungdeok Temple in Cheongju in 1377. It is formally recognized by UNESCO as the world's oldest extant book printed with movable metal type, predating Johannes Gutenberg's 42-line Bible by roughly 78 years.\n\nWhile woodblock printing had flourished across East Asia for centuries, Korean printers developed sand-mold casting methods to produce thousands of standardized bronze characters, creating durable, interchangeable fonts suited for large book runs."
  },
  {
    id: "MC_004",
    region: "Africa",
    category: "Economics & Empires",
    question: "During his famous 1324 pilgrimage to Mecca, how did the Malian sovereign Mansa Musa inadvertently destabilize the economy of Cairo?",
    options: [
      "By purchasing the entire grain harvest of the Nile delta for his 60,000 attendants",
      "By distributing and spending so much gold that its purchasing value collapsed for over a decade",
      "By forcing Egyptian merchants to adopt West African cowrie shell currency",
      "By imposing steep transport tariffs on Mediterranean spice caravans crossing the Red Sea"
    ],
    correct: 1,
    trivia: "Mansa Musa traveled with an entourage of approximately 60,000 people and dozens of camels, each carrying hundreds of pounds of pure gold bullion mined from Bambuk and Bure. He distributed lavish gifts and paid exorbitant prices for goods across Cairo, Medina, and Mecca.\n\nThe resulting influx of bullion overwhelmed the regional bullion market, causing severe currency inflation that took over 12 years to normalize. Contemporary historian Al-Umari, visiting Cairo a decade later, noted that the value of gold remained severely depressed due to Musa's pilgrimage."
  },
  {
    id: "MC_005",
    region: "Middle East",
    category: "Hydrology & Engineering",
    question: "What was the primary operational advantage of the ancient Persian 'qanat' irrigation system over traditional surface canals?",
    options: [
      "Subterranean gravity tunnels prevented vast water loss from desert evaporation",
      "Rotary water wheels were used to reverse seasonal river flows uphill",
      "Subterranean sulfur minerals naturally desalinated the desert aquifer water",
      "Pressurized copper pipes allowed continuous high-pressure fountain delivery"
    ],
    correct: 0,
    trivia: "Dating back to the early 1st millennium BCE on the Iranian plateau, qanats consist of a series of vertical access shafts connected to a gently sloping underground tunnel. The tunnel taps into mountain alluvial aquifers and carries water across dozens of kilometers entirely by gravity.\n\nBecause the water flows underground away from the blazing desert sun and dry winds, evaporation loss—which normally depletes up to half the water in surface canals—is almost completely eliminated."
  },
  {
    id: "MC_006",
    region: "South Asia",
    category: "Mathematics & Astronomy",
    question: "In his foundational 499 CE treatise Aryabhatiya, what radical cosmological model did Indian astronomer Aryabhata propose?",
    options: [
      "The universe is an infinite stationary sphere surrounded by fiery ether",
      "The Earth is spherical and rotates continuously on its own axis",
      "Planets orbit the Sun along non-elliptical square geometric tracks",
      "Solar eclipses are caused by invisible shadow demons devouring celestial light"
    ],
    correct: 1,
    trivia: "At only 23 years of age, Aryabhata formulated that the apparent daily motion of stars across the sky is an optical illusion caused by the Earth rotating on its own axis—comparing it to a person in a moving boat who sees stationary trees on the riverbank appearing to move backwards.\n\nHe also correctly deducted that lunar and solar eclipses were caused by shadows cast by the Earth and Moon rather than mythological deities, and calculated the value of Pi to 3.1416."
  },
  {
    id: "MC_007",
    region: "Oceania",
    category: "Hydrology & Aquaculture",
    question: "Engineered by the Gunditjmara people over 6,600 years ago in southeastern Australia, what is the Budj Bim cultural landscape renowned for?",
    options: [
      "One of humanity's earliest complex stone-channel aquaculture systems for farming eels",
      "The world's oldest surviving deep-sea outrigger canoe drydocks",
      "Carved coral navigational towers aligned with the constellation Taurus",
      "Subterranean root-cellar silos designed to preserve yam harvests indefinitely"
    ],
    correct: 0,
    trivia: "Using volcanic basalt stones from the Budj Bim lava flow, the Gunditjmara constructed an intricate network of weirs, channels, and holding ponds across Lake Condah. These engineered waterways managed water levels and directed migrating short-finned eels (kooyang) into woven funnel traps.\n\nThis sophisticated aquaculture provided a reliable, year-round food supply that allowed the community to establish settled, semi-permanent stone villages—challenging the outdated historical colonial myth that all indigenous Australians were strictly nomadic hunter-gatherers."
  },
  {
    id: "MC_008",
    region: "Americas",
    category: "Governance & Law",
    question: "Promulgated around 1451, what was the primary political structure established by the Haudenosaunee Great Law of Peace (Kaianerehkó:wa)?",
    options: [
      "A hereditary absolute monarchy ruled by a high priest-king",
      "A participatory bicameral confederacy operating on consensus and women-led clan governance",
      "A military junta that rotated command among tribal generals every full moon",
      "A direct lot-drawing democracy restricted exclusively to male warriors"
    ],
    correct: 1,
    trivia: "Crafted by the Peacemaker Deganawida and Hiawatha, the Great Law of Peace united five warring nations (Mohawk, Oneida, Onondaga, Cayuga, and Seneca) into the Iroquois Confederacy under a complex constitutional system. Clan Mothers held paramount veto power, holding the sole authority to nominate, advise, and depose male council chiefs.\n\nThe constitution balanced federal authority with local tribal sovereignty, explicitly protecting freedom of speech, religion, and redress of grievances centuries before European democratic declarations."
  },
  {
    id: "MC_009",
    region: "Southeast Asia",
    category: "Military Engineering",
    question: "In the 1288 Battle of Bach Dang, how did Dai Viet General Tran Hung Dao destroy the invading Mongol naval fleet?",
    options: [
      "By deploying underwater blast mines packed with Chinese black powder",
      "By planting iron-tipped wooden stakes into the riverbed to impale junks during low tide",
      "By setting rafts of oil-soaked bamboo on fire to create a river firestorm",
      "By using trained diving teams to bore holes directly into the enemy ship hulls"
    ],
    correct: 1,
    trivia: "Tran Hung Dao studied the tidal cycles of the Bach Dang River. In secret, Vietnamese forces planted heavy timber stakes tipped with iron points into the riverbed, entirely concealed under high-tide waters.\n\nWhen the Mongol fleet of over 400 warships advanced, light Vietnamese craft feigned retreat, luring the heavy Mongol junks upriver. When the tide rapidly ebbed, the trapped Mongol warships were impaled, grounded, and shattered on the exposed stakes, ending Kublai Khan's invasions of Vietnam."
  },
  {
    id: "MC_010",
    region: "Africa",
    category: "Architecture",
    question: "What is distinctive about the construction of the massive 11-meter-high perimeter walls of the Great Enclosure at Great Zimbabwe?",
    options: [
      "They were constructed entirely out of dressed granite blocks fitted without a drop of mortar",
      "They were hollowed out internally to create hidden archer galleries",
      "They were reinforced with forged bronze anchors imported from the Swahili coast",
      "They were built out of sundried river mud bricks coated in crushed quartz plaster"
    ],
    correct: 0,
    trivia: "Constructed by Shona masons between the 11th and 15th centuries, the walls of Great Zimbabwe were built using exfoliated granite slabs naturally fractured by temperature swings. Masons carefully chipped and dry-stacked hundreds of thousands of blocks in gentle, self-supporting inward curves.\n\nDespite standing over 11 meters high and up to 6 meters thick with no binding cement or mortar, the walls have endured for centuries, demonstrating mastery over structural dry-stone compression."
  },
  {
    id: "MC_011",
    region: "Global Science",
    category: "Astrophysics & Relativity",
    question: "In 2015, what cosmic phenomenon did the twin LIGO interferometers directly detect for the very first time, confirming a century-old prediction by Albert Einstein?",
    options: [
      "Hawking radiation evaporating from the event horizon of a stellar black hole",
      "Gravitational waves radiating from the merger of two massive black holes",
      "The cosmic neutrino background originating from the first seconds of the Big Bang",
      "Direct tachyon emissions traveling faster than the vacuum speed of light"
    ],
    correct: 1,
    trivia: "Einstein predicted gravitational waves in 1916 as part of his General Theory of Relativity—postulating that violent cosmic events would ripple the fabric of spacetime like stones dropped in a pond. However, he believed they would be far too tiny to ever measure directly.\n\nIn September 2015, the twin Laser Interferometer Gravitational-Wave Observatory (LIGO) detectors in Washington and Louisiana registered a signal (GW150914) from two black holes colliding 1.3 billion light-years away, measuring a distortion smaller than one ten-thousandth the diameter of a proton."
  },
  {
    id: "MC_012",
    region: "Middle East",
    category: "Physics & Scientific Method",
    question: "In his seminal 1021 treatise Book of Optics (Kitab al-Manazir), what fundamental error in classical Greek optics did Ibn al-Haytham disprove?",
    options: [
      "The theory that vision occurs because the eye emits rays of light outward toward objects",
      "The theory that light travels slower in denser mediums like water and glass",
      "The belief that rainbows are physical solid arcs suspended in cloud moisture",
      "The hypothesis that white light is a pure elementary form devoid of color components"
    ],
    correct: 0,
    trivia: "Classical Greek authorities like Euclid and Ptolemy had long championed 'emission theory,' arguing that vision happens because the eyes project luminous beams outward that touch external objects. Ibn al-Haytham proved mathematically and experimentally that this was impossible—pointing out that staring directly at the sun burns the retina, proving light enters the eye from outside (intromission theory).\n\nHis insistence on rigorous, repeatable dark-room experiments using camera obscuras earned him recognition as the foundational architect of the modern empirical scientific method."
  },
  {
    id: "MC_013",
    region: "East Asia",
    category: "Inventions & Science",
    question: "In 132 CE, Han Dynasty polymath Zhang Heng invented the world's first known seismoscope. How did the bronze device indicate the direction of a distant earthquake?",
    options: [
      "Water level dropped in one of four directional porcelain tubes",
      "A pendulum triggered a dragon head to drop a bronze ball into a toad's mouth",
      "A magnetic lodestone spoon rotated toward the seismic epicenter",
      "Fine bell strings tuned to subterranean resonant frequencies severed"
    ],
    correct: 1,
    trivia: "Zhang Heng's device, the Houfeng Didong Yi, featured an internal inverted pendulum mechanism so sensitive it could register distant tremors undetectable to people in the capital.\n\nWhen a shockwave arrived, the pendulum tilted toward the direction of the tremor, releasing a lever that dropped a bronze ball from a dragon's mouth into a bronze toad waiting below. In one famous test, the device signaled an earthquake to the northwest; court officials initially doubted it until a courier arrived days later reporting a major disaster in Longxi province 400 miles away."
  },
  {
    id: "MC_014",
    region: "South Asia",
    category: "Metallurgy & Trade",
    question: "Originating in southern India around 300 BCE, what high-carbon crucible steel was famously exported across the Indian Ocean and later forged into renowned 'Damascus blades'?",
    options: [
      "Wootz steel",
      "Corinthian bronze",
      "Electrum",
      "Orichalcum"
    ],
    correct: 0,
    trivia: "Pioneered in Tamil Nadu and Sri Lanka, Wootz steel was produced by sealing high-purity wrought iron, charcoal, and specific glass flux plant matter inside closed clay crucibles fired at extreme temperatures.\n\nThe resulting ingots featured high carbon content (1.5%) and microscopic carbide bands. When forged into swords by craftsmen in Damascus and the Levant, it produced blades renowned for extraordinary toughness, razor edges, and characteristic swirling water-silk patterns on their surface."
  },
  {
    id: "MC_015",
    region: "Africa",
    category: "Epigraphy & Metallurgy",
    question: "Before developing its distinctive cursive alphabetic script around 200 BCE, the Kingdom of Kush moved its royal capital to Meroë primarily due to what resource advantage?",
    options: [
      "Extensive natural salt mines along the Red Sea coast",
      "Vast acacia timber reserves and iron ore deposits for industrial smelting",
      "Natural subterranean emerald veins in the Ethiopian foothills",
      "Perennial deep-water docks capable of mooring Mediterranean galleys"
    ],
    correct: 1,
    trivia: "Archaeological excavations at Meroë, located in northern Sudan, have revealed enormous slag heaps produced by ancient bloomery furnaces, earning the ancient city the moniker of the 'Birmingham of Ancient Africa.'\n\nThe confluence of rich iron ore deposits and dense acacia woodlands along seasonal Nile tributaries provided abundant charcoal fuel, turning Meroë into a major industrial weapons, agricultural tool, and trading powerhouse across Central Africa and the Mediterranean."
  },
  {
    id: "MC_016",
    region: "Americas",
    category: "Urbanism & Engineering",
    question: "Flourishing around 3000 BCE in coastal Peru, the sacred city of Caral-Supe is recognized as the oldest known civilization center in the Americas. What remarkable feature distinguishes its urban architecture?",
    options: [
      "It features monumental stone pyramids and sunken circular plazas built without pottery or defensive walls",
      "It was constructed entirely on floating reed rafts anchored to marine trenches",
      "Homes were built out of glazed ceramic bricks fired in volcanic vents",
      "The city was encircled by three concentric moats flooded with seawater"
    ],
    correct: 0,
    trivia: "Caral developed in the arid Supe Valley around the same time Egyptian Old Kingdom pyramids were being built. Masons engineered monumental stepped platform temples and circular sunken plazas using shicra bags—woven reed nets filled with quarried stone that functioned as seismic shock absorbers during Andean earthquakes.\n\nRemarkably, extensive excavations have found zero fortifications, no defensive walls, and no weapons of war. Instead, researchers discovered 32 flutes carved from pelican and condor bones, 37 cornet trumpets, and cotton farming networks supported by maritime trade with coastal fishers."
  },
  {
    id: "MC_017",
    region: "Oceania",
    category: "Navigation & Cartography",
    question: "Traditional Marshallese 'stick charts' (such as mattang and rebbelib) were sophisticated navigational instruments used without compasses. What primary natural phenomena did they map?",
    options: [
      "The seasonal flight trajectories of migrating long-tailed cuckoos",
      "Ocean swell reflection and refraction patterns interacting with island chains",
      "Underwater volcanic thermal currents detected by hull vibrations",
      "Bioluminescent plankton density shifts during lunar cycles"
    ],
    correct: 1,
    trivia: "Marshallese navigators constructed these lightweight charts using bound midribs of coconut palm fronds, tied together with coconut sennit cord, and cowrie shells marking island positions.\n\nThe curved and straight wooden strips did not represent geographical distances; instead, they mapped how ocean wave swells bend, reflect, and clash when they strike hidden reefs and atolls. Skilled navigators memorized the patterns on land and lay down in the bottom of voyaging canoes at sea, sensing the wave angles directly through the hull to steer between islands over hundreds of open-ocean miles."
  },
  
    // --- SOUTHEAST ASIA & AUSTRONESIA ---
  {
    id: "MC_018",
    region: "Southeast Asia",
    category: "Architecture & Religion",
    difficulty: "Beginner",
    question: "Constructed in Central Java under the Sailendra dynasty around 825 CE, which monumental structure stands as the world's largest Buddhist temple?",
    options: [
      "Angkor Wat",
      "Borobudur",
      "Shwezigon Pagoda",
      "Wat Arun"
    ],
    correct: 1,
    trivia: "Borobudur is built from approximately two million volcanic andesite stone blocks fitted together without mortar across a natural hill. Designed as a stepped pyramid representing a three-dimensional Buddhist cosmic mandala, pilgrims ascend through three realms of Buddhist cosmology: Kamadhatu (the world of desires), Rupadhatu (the world of forms), and Arupadhatu (the formless realm).\n\nThe monument houses 504 Buddha statues and over 2,670 individual relief panels detailing Buddhist doctrines and daily Javanese 9th-century life, including maritime outrigger ships, markets, flora, and musical instruments."
  },
  {
    id: "MC_019",
    region: "Southeast Asia",
    category: "Maritime Empires",
    difficulty: "Intermediate",
    question: "Between the 7th and 11th centuries, the Buddhist thalassocracy of Srivijaya dominated maritime commerce between China and India primarily by controlling which strategic waterway?",
    options: [
      "The Bab-el-Mandeb",
      "The Strait of Malacca",
      "The Bosphorus Strait",
      "The Palk Strait"
    ],
    correct: 1,
    trivia: "Based in Palembang along the Musi River in Sumatra, Srivijaya controlled both the Strait of Malacca and the Sunda Strait. By securing naval alliances with the nomadic Orang Laut (sea people), the empire provided anti-piracy protection, deep-water harbors, and warehousing for monsoon-bound merchant fleets.\n\nSrivijaya also functioned as an international center of Mahayana Buddhist scholarship; Chinese pilgrim-monk Yijing spent years in Palembang in the 670s translating Sanskrit sutras before journeying to Nalanda in India, noting that over 1,000 Buddhist monks resided and studied there under royal patronage."
  },
  {
    id: "MC_020",
    region: "Southeast Asia",
    category: "Epigraphy & Governance",
    difficulty: "Advanced",
    question: "In 1336, Prime Minister Gajah Mada of the Majapahit Empire uttered the famous 'Palapa Oath' (Sumpah Palapa). What vow did he make?",
    options: [
      "To renounce violence and enter a Buddhist monastery once the Mongol fleet was expelled",
      "To abstain from spices and culinary delicacies until the entire Nusantara archipelago was united",
      "To sacrifice his royal lineage if Majapahit's naval fleet ever crossed west of the Bay of Bengal",
      "To build a stone temple mountain at every river mouth along the Java Sea"
    ],
    correct: 1,
    trivia: "Recorded in the Old Javanese chronicle Pararaton, Gajah Mada announced his vow before Queen Tribhuwana Tunggadewi. He declared that he would not enjoy 'palapa' (widely interpreted by historians as personal earthly pleasures, specifically spices, leisure, and worldly delicacies) until he had brought territories across Sumatra, Borneo, the Malay Peninsula, Bali, and Maluku under Majapahit suzerainty.\n\nUnder his strategic guidance and the naval fleet of Admiral Mpu Nala, Majapahit reached its greatest territorial extent, establishing an expansive tribute and spice-trading network celebrated in Mpu Prapanca's 1365 court poem Nagarakretagama."
  },
  {
    id: "MC_021",
    region: "Southeast Asia",
    category: "Linguistics & Epigraphy",
    difficulty: "Intermediate",
    question: "Devised under King Ram Khamhaeng in 1292 CE and inscribed on stone stelae, the historic Thai script was primarily derived and adapted from which writing system?",
    options: [
      "Old Khmer script",
      "Mongolian Phags-pa script",
      "Chinese Hanzi characters",
      "Tibetan Uchen script"
    ],
    correct: 0,
    trivia: "King Ram Khamhaeng of the Sukhothai Kingdom adapted the Old Khmer cursive script—which had evolved from southern Indian Pallava Brahmic origins—to transcribe the Tai language. The breakthrough invention involved creating specific consonant modifications and tone marks to capture the tonal nuances of spoken Thai that Old Khmer lacked.\n\nThe Ram Khamhaeng Inscription No. 1, uncovered in the 19th century, represents the earliest surviving sample of the script, recording famous descriptions of a prosperous Sukhothai where 'there are fish in the water and rice in the fields.'"
  },

  // --- SUB-SAHARAN & NORTH AFRICA ---
  {
    id: "MC_022",
    region: "Africa",
    category: "Archaeology & Human Origins",
    difficulty: "Intermediate",
    question: "Fossils uncovered at Jebel Irhoud in Morocco dramatically shifted anthropology in 2017 because they represented the oldest known remains of Homo sapiens. Approximately how old are they?",
    options: [
      "Roughly 70,000 years old",
      "Roughly 150,000 years old",
      "Roughly 315,000 years old",
      "Roughly 1.2 million years old"
    ],
    correct: 2,
    trivia: "Prior to the dating of the Jebel Irhoud excavations by thermoluminescence and electron spin resonance, the oldest confirmed Homo sapiens fossils were the Omo Kibish remains from Ethiopia, dated to roughly 195,000 years ago, leading scientists to believe our species originated exclusively in an East African 'cradle.'\n\nThe 315,000-year-old Jebel Irhoud skulls display modern facial anatomy and tooth structures paired with elongated braincases, proving that modern human lineage evolutionary morphology developed across a interconnected pan-African network rather than a single isolated point."
  },
  {
    id: "MC_023",
    region: "Africa",
    category: "Architecture & Monuments",
    difficulty: "Beginner",
    question: "During the 13th century Zagwe Dynasty, how were the world-renowned eleven monolithic churches of Lalibela in Ethiopia constructed?",
    options: [
      "They were assembled using pre-cast volcanic pumice bricks mortared with lime",
      "They were chiseled downward directly out of solid volcanic basalt and tuff bedrock",
      "They were constructed out of imported Mediterranean cedar beams and granite blocks",
      "They were built on stilts inside underground river caverns to hide from invaders"
    ],
    correct: 1,
    trivia: "Commissioned by King Gebre Mesqel Lalibela to serve as a 'New Jerusalem' following the Muslim capture of Jerusalem in 1187, the churches were not built from the ground up. Instead, masons chiseled trenches deep into the reddish volcanic tuff hillside, isolating gigantic monolithic stone cubes, and then carved windows, columns, barrel vaults, and decorative reliefs inward.\n\nBete Giyorgis (the Church of St. George), shaped like a perfect Greek cruciform cross, stands inside a 12-meter-deep pit with complex subterranean drainage trenches to divert seasonal mountain rains and prevent flooding."
  },
  {
    id: "MC_024",
    region: "Africa",
    category: "Metallurgy & Art",
    difficulty: "Advanced",
    question: "Discovered accidentally during well excavations in southeastern Nigeria in 1938, the 9th-century Igbo-Ukwu bronzes are renowned in metallurgy for what specific composition?",
    options: [
      "High-lead bronze alloy decorated with granular filigree and wrapped cords",
      "Pure meteoric iron alloyed with high concentrations of nickel",
      "Arsenical copper beaten exclusively with cold stone hammers",
      "Gilded electrum cast through two-piece ceramic split molds"
    ],
    correct: 0,
    trivia: "The Igbo-Ukwu artifacts date to roughly 850 CE and demonstrate sophisticated lost-wax casting completely independent of European or Arab metallurgical influence. Unlike later Benin bronzes that used brass (copper and zinc), Igbo-Ukwu artisans cast leaded bronze (copper, tin, and up to 20% lead), which lowered the melting point and allowed intricate, paper-thin detailing.\n\nMasterpieces such as the famous roped water pot—a bronze vessel encircled by a fragile, freestanding cast bronze net—featured tiny cast insects, snails, and geometric beads reflecting ancient Igbo religious regalia linked to the Eze Nri divine kingship."
  },
  {
    id: "MC_025",
    region: "Africa",
    category: "Law & Society",
    difficulty: "Intermediate",
    question: "Proclaimed around 1236 CE following the Battle of Kirina, what was the Kouroukan Fouga of the Mali Empire?",
    options: [
      "A military decree ordering the compulsory conscription of all desert salt miners",
      "An oral constitutional charter outlining human rights, craft guild divisions, and civic peace",
      "A theological edict mandating Arabic as the exclusive spoken language across the Niger river",
      "A royal monopoly declaring all unrefined gold nuggets property of the emperor"
    ],
    correct: 1,
    trivia: "Following the overthrow of the Sosso king Sumanguru Kante, the founder of the Mali Empire, Sundiata Keita, assembled a grand council of clan leaders at the plain of Kouroukan Fouga. Together, they formulated an oral constitution consisting of 44 articles transmitted verbatim across generations by Mandinka griots (djeli).\n\nThe charter codified mutual respect, established four distinct social and occupational guilds (warriors, artisans, bards, and clerics), introduced environmental protections regarding burning farmland, and recognized specific legal protections and property rights for women."
  },
  {
    id: "MC_026",
    region: "Africa",
    category: "Scholarship & Education",
    difficulty: "Beginner",
    question: "Founded in Fez, Morocco in 859 CE by Fatima al-Fihri, which institution is recognized by UNESCO as the oldest continually operating university in the world?",
    options: [
      "Al-Azhar University",
      "University of Al-Qarawiyyin",
      "Sankore Madrasa",
      "University of Bologna"
    ],
    correct: 1,
    trivia: "Fatima al-Fihri, the educated daughter of a wealthy merchant who migrated from Kairouan, Tunisia, used her entire inheritance to fund the construction of a large mosque and educational institution for her community in Fez. Over centuries, it expanded from basic religious study into a sprawling university offering degrees in mathematics, astronomy, grammar, rhetoric, and medicine.\n\nIts renowned library houses thousands of irreplaceable medieval manuscripts, including 9th-century Qurans written in early Kufic script on gazelle parchment, and attracted prominent scholars such as the philosopher Ibn Rushd (Averroes) and the Jewish philosopher Maimonides."
  },

  // --- THE AMERICAS (INDIGENOUS & PRE-COLUMBIAN) ---
  {
    id: "MC_027",
    region: "Americas",
    category: "Astronomy & Mathematics",
    difficulty: "Intermediate",
    question: "What was the function of the vigesimal (base-20) shell glyph in the Maya Long Count calendrical script?",
    options: [
      "It represented a sacred leap month added every four solar cycles",
      "It functioned as a positional zero placeholder in mathematical calculations",
      "It indicated that an eclipse would occur during the next zenith passage",
      "It marked the start of the 260-day agricultural Tzolk'in ritual cycle"
    ],
    correct: 1,
    trivia: "Maya mathematicians utilized a vigesimal base-20 numbering system relying on three symbols: a pebble/dot for one, a wooden bar for five, and a stylized bivalve shell for zero. This positional zero allowed scribes to track colossal cosmic numbers, carrying values up into the k'atun (7,200 days) and b'ak'tun (144,000 days).\n\nDeveloped by the 1st century BCE, this Mesoamerican concept of positional zero independently predated the transmission of decimal zero notation into European mathematics by over a millennium."
  },
  {
    id: "MC_028",
    region: "Americas",
    category: "Architecture & Engineering",
    difficulty: "Beginner",
    question: "Constructed without mortar, how did Inca stonemasons ensure that buildings like Sacsayhuamán and Machu Picchu survived major earthquakes?",
    options: [
      "By placing volcanic sulfur rubber pads under the base foundation trenches",
      "By chiseling interlocking polygonal ashlar stones that shifted and resettled safely during tremors",
      "By anchoring interior walls with molten copper tie-rods forged through the rock",
      "By constructing entire royal buildings out of hollow, flexible pumice stone"
    ],
    correct: 1,
    trivia: "Inca imperial architecture mastered dry-stone masonry (ashlar) using hard andesite and granite blocks hammered with harder river stones until they fit together with microscopic precision. Masons angled interior walls slightly inward (trapezoidal design) and carved subtle tongue-and-groove joints into adjoining faces.\n\nDuring high-magnitude Andean earthquakes, the mortarless blocks vibrate and slide slightly with the seismic shockwaves without cracking, settling back into their exact original positions once shaking stops—a technique that consistently outlasted Spanish colonial mortar structures built atop them."
  },
  {
    id: "MC_029",
    region: "Americas",
    category: "Urbanism & Engineering",
    difficulty: "Intermediate",
    question: "Located in the Mississippi River valley near modern St. Louis, Cahokia was the largest pre-Columbian urban center north of Mexico. What monumental earthwork stood at its center?",
    options: [
      "Serpent Mound",
      "Monks Mound",
      "Poverty Point Ridge",
      "Spiro Mound"
    ],
    correct: 1,
    trivia: "Reaching its zenith around 1050 CE with an estimated population of 15,000 to 20,000 people, Cahokia featured over 120 earthen platform and burial mounds. At its civic heart stood Monks Mound, a colossal four-tiered earthen pyramid rising 100 feet (30 meters) high and covering 14 acres—larger at its base than the Great Pyramid of Giza.\n\nThe mound was constructed entirely by hand using woven baskets to move an estimated 22 million cubic feet of carefully selected soils and clays designed to shed water and resist structural collapse over centuries."
  },
  {
    id: "MC_030",
    region: "Americas",
    category: "Agronomy & Hydrology",
    difficulty: "Beginner",
    question: "Around Lake Texcoco in the Valley of Mexico, the Mexica (Aztecs) supported a dense urban population through 'chinampas'. What were they?",
    options: [
      "Terraced stone reservoirs built to capture mountain snowmelt",
      "Artificial, highly fertile floating agricultural islands anchored in shallow lakes",
      "Deep subterranean root cellars heated with volcanic thermal vents",
      "Ceramic irrigation pipes carrying mountain river water beneath city causeways"
    ],
    correct: 1,
    trivia: "Chinampas were engineered by driving wooden posts into shallow lake beds to enclose rectangular plots woven from wattle and reed fences. Farmers layered the enclosure with lake mud, aquatic vegetation, and decomposing organic compost until the soil surface rose above water level, anchoring the edges by planting willow trees (ahuejote).\n\nThe plants' root systems drew water constantly from below through capillary action, completely eliminating drought risk and enabling up to seven bountiful crop harvests per year of maize, beans, squash, and chili peppers."
  },

  // --- SOUTH & CENTRAL ASIA ---
  {
    id: "MC_031",
    region: "South Asia",
    category: "Linguistics & Computer Science",
    difficulty: "Advanced",
    question: "Composed in northwestern India around the 4th century BCE, Panini's grammar treatise 'Ashtadhyayi' is celebrated in modern computer science for what pioneering concept?",
    options: [
      "Developing binary arithmetic logic tables to calculate planetary orbits",
      "Formulating a generative formal grammar using 3,959 algebraic recursive rules",
      "Creating an acoustic frequency analyzer to measure choral chanting pitch",
      "Deconstructing language into 256 hexadecimal phonetic bits"
    ],
    correct: 1,
    trivia: "Panini's Ashtadhyayi ('Eight Chapters') formalized the phonology, morphology, and syntax of classical Sanskrit with extreme mathematical rigor. It operated as a closed generative machine: by feeding a root verb or noun through a sequence of 3,959 sutras (concise rule algorithms), the system systematically generated correct Sanskrit words and sentences.\n\nIn the 20th century, computer pioneer John Backus independently developed the Backus-Naur Form (BNF) to define the syntax of programming languages, only to discover that Panini had formalized the exact principles of formal context-free grammars and auxiliary symbols over two thousand years earlier."
  },
  {
    id: "MC_032",
    region: "South Asia",
    category: "Urban Planning & Sanitation",
    difficulty: "Beginner",
    question: "Flourishing around 2500 BCE, the Indus Valley cities of Harappa and Mohenjo-daro stood out among all Bronze Age civilizations for what infrastructure achievement?",
    options: [
      "Monumental stone burial pyramids lined with gold foil",
      "Standardized kiln-fired brick architecture with covered subterranean municipal drainage networks",
      "Deep mountain aqueducts tunneled through solid granite ridges",
      "Circular defensive walls constructed from fired obsidian volcanic glass"
    ],
    correct: 1,
    trivia: "Unlike contemporary Bronze Age cities in Mesopotamia and Egypt that prioritized grandiose royal palaces and temple pyramids, Indus Valley urban centers emphasized municipal infrastructure, civic health, and standardization. Bricks were manufactured across the entire empire in an identical 1:2:4 dimensional ratio.\n\nNearly every private home had a dedicated bathing room with paved floors that emptied wastewater through clay pipes into covered terracotta drains running beneath the main paved streets, complete with inspection manholes and sump pits cleared periodically by city sanitation workers."
  },
  {
    id: "MC_033",
    region: "South Asia",
    category: "Mathematics",
    difficulty: "Intermediate",
    question: "Compiled in 628 CE, Brahmagupta's Brahmasphutasiddhanta holds a foundational place in the global history of algebra because it was the first text to:",
    options: [
      "Calculate the exact gravitational pull of the Moon on ocean tides",
      "Establish formal arithmetic rules for calculating with positive numbers, negative numbers, and zero",
      "Formulate the Pythagorean theorem using geometric dissections",
      "Introduce decimal logarithms to simplify multidigit multiplication"
    ],
    correct: 1,
    trivia: "Before Brahmagupta, zero had functioned primarily in Babylonian, Maya, and early Indian documents as a positional placeholder (like the zero in '105' to denote no tens). In the Brahmasphutasiddhanta, Brahmagupta elevated zero (shunya) to an active mathematical entity with its own operational laws: positive minus positive is positive, negative times negative is positive, and any number multiplied by zero equals zero.\n\nHe also treated negative numbers (which he termed 'debts' in contrast to 'fortunes' for positive values) as valid algebraic solutions, paving the way for the Islamic Golden Age and modern algebra."
  },
  {
    id: "MC_034",
    region: "South Asia",
    category: "Medicine & Surgery",
    difficulty: "Intermediate",
    question: "Recorded in the Sushruta Samhita around 600 BCE, what pioneer surgical procedure earned ancient Indian physician Sushruta recognition as the 'father of plastic surgery'?",
    options: [
      "Forehead skin flap rhinoplasty to reconstruct severed noses",
      "Corneal laser reshaping to correct severe astigmatism",
      "Subdural trepanation to extract cerebral fluid pressures",
      "Amputation and attachment of articulated bronze prosthetic limbs"
    ],
    correct: 0,
    trivia: "In ancient India, nasal amputation was a common judicial punishment for theft and adultery. To treat these patients, Sushruta developed pedicled flap rhinoplasty: skin and underlying vascular tissue were carefully dissected from the living patient's cheek or forehead, twisted downward while keeping blood vessels intact, shaped over reeds into new nostrils, and stitched over the wound.\n\nHis medical compendium described over 120 surgical instruments (including forceps, scalpels, and trocars), systematic procedures for cataract couching, kidney stone extraction, and caesarean deliveries, emphasizing sterile surgical technique centuries before Joseph Lister."
  },

  // --- EAST ASIA ---
  {
    id: "MC_035",
    region: "East Asia",
    category: "Linguistics & Society",
    difficulty: "Beginner",
    question: "In 1446 CE, King Sejong the Great of Joseon promulgated the Hangul alphabet through the document Hunminjeongeum. What was his primary motivation?",
    options: [
      "To encode secret military transmissions that Japanese scouts could not read",
      "To replace complex Chinese Hanja characters with a phonetic script accessible to commoners",
      "To standardize Buddhist prayers into a uniform courtly chant system",
      "To comply with an imperial decree issued by the Ming Dynasty emperor"
    ],
    correct: 1,
    trivia: "Prior to Hangul, writing in Korea required mastering thousands of Classical Chinese characters (Hanja), a privilege restricted almost exclusively to elite aristocrats (yangban). Recognizing that ordinary farmers, artisans, and women could not read laws, voice grievances, or record contracts, King Sejong and royal scholars designed a 28-letter phonetic alphabet.\n\nThe consonant glyphs are featural—their visual shapes directly depict the anatomical position of the tongue, lips, and throat when producing the sound (e.g., ㄱ mimics the tongue root blocking the throat). Hangul was so intuitive that critics sneered it could be learned in a single morning, democratizing literacy across Korean society."
  },
  {
    id: "MC_036",
    region: "East Asia",
    category: "Hydrology & Engineering",
    difficulty: "Intermediate",
    question: "Engineered around 256 BCE by Li Bing in Sichuan, China, how does the Dujiangyan irrigation system successfully control river flooding without building a dam across the water?",
    options: [
      "By blasting underwater volcanic channels with black powder charges",
      "By naturally splitting the Min River with an artificial mid-river levee that channels silt away",
      "By lifting river water 50 meters into the air using giant undershot bamboo waterwheels",
      "By diverting seasonal river runoff into deep underground limestone karst caverns"
    ],
    correct: 1,
    trivia: "Rather than building a barrier dam that would silt up and block navigation, Li Bing engineered Dujiangyan using natural hydrodynamic principles. He constructed the 'Fish Mouth' (Yuzui), an artificial curved levee in the middle of the roaring Min River that splits the flow: 40% into an inner canal toward the plains during high summer floods, and 60% during dry seasons.\n\nDownstream, the 'Flying Sand Weir' uses centrifugal vortex action to automatically flush heavy gravel and sediment back into the main river channel, protecting the Chengdu Plain from catastrophic flooding and transforming Sichuan into China's most fertile agricultural basin for over 2,200 continuous years."
  },
  {
    id: "MC_037",
    region: "East Asia",
    category: "Military Technology & Chemistry",
    difficulty: "Intermediate",
    question: "Recorded in the Song Dynasty military manual Wujing Zongyao in 1044 CE, what three basic ingredients formed the chemical formula for early black powder?",
    options: [
      "Saltpeter (potassium nitrate), sulfur, and charcoal",
      "Quicklime, petroleum naphtha, and phosphorus",
      "Arsenic, sodium carbonate, and pine resin",
      "Ammonium chloride, powdered copper, and bitumen"
    ],
    correct: 0,
    trivia: "Daoist alchemists experimenting with elixirs of immortality during the Tang Dynasty accidentally discovered that heating potassium nitrate (saltpeter) with sulfur and carbon-rich charcoal produced violent deflagration. By the 11th century, Song military engineers standardized the proportions for incendiary arrows, smoke screens, and explosive bombs.\n\nThe Wujing Zongyao ('Complete Essentials for the Military Classics') contains the world's earliest verified written gunpowder formulas, outlining incendiary bombs thrown by trebuchets and early bamboo lance flamethrowers (huo qiang), long before firearm technology migrated across the Silk Road to Europe."
  },

  // --- MIDDLE EAST & WEST ASIA ---
  {
    id: "MC_038",
    region: "Middle East",
    category: "Archaeology & Prehistory",
    difficulty: "Intermediate",
    question: "Constructed roughly 11,500 years ago in southeastern Anatolia (Turkey), why did the discovery of Göbekli Tepe overturn archaeological timelines of civilization?",
    options: [
      "It proved that metal smelting and iron swords existed during the Ice Age",
      "It proved that pre-agricultural hunter-gatherers organized complex monumental megalithic architecture",
      "It showed that cuneiform script had evolved 6,000 years earlier than previously assumed",
      "It contained the world's oldest preserved wooden wheeled war chariots"
    ],
    correct: 1,
    trivia: "Standard historical models long taught that agriculture developed first, creating grain surpluses that allowed settled societies to support specialized builders and build religious temples. Göbekli Tepe, discovered by Klaus Schmidt in the 1990s, completely flipped this sequence.\n\nCarbon-dated to 9500 BCE, nomadic hunter-gatherers with zero domestic crops or pottery quarried and transported 10-to-20-ton T-shaped limestone pillars carved with high-relief sculptures of lions, vultures, and scorpions to build ceremonial enclosures—suggesting that the social urge to gather for communal religion actually catalyzed the invention of agriculture."
  },
  {
    id: "MC_039",
    region: "Middle East",
    category: "Robotics & Mechanics",
    difficulty: "Intermediate",
    question: "In his 1206 manuscript 'The Book of Knowledge of Ingenious Mechanical Devices', what fundamental mechanical conversion mechanism did engineer Al-Jazari describe?",
    options: [
      "The internal combustion cylinder",
      "The crankshaft and connecting rod mechanism that converts rotary motion into reciprocating linear motion",
      "The electromagnetic dynamo commutator",
      "The air-pressurized steam turbine boiler"
    ],
    correct: 1,
    trivia: "Ismail al-Jazari, serving as chief royal engineer to the Artuqid kings in Upper Mesopotamia, is celebrated as one of the founders of modern mechanical automation. His crankshaft mechanism—which converts continuous circular rotational motion into back-and-forth linear stroke motion—is considered by engineers to be one of the most critical mechanical breakthroughs in history, forming the mechanical core of modern steam and automobile engines.\n\nHis treatise also detailed water-powered monumental clocks, segmented gears, double-acting suction pumps with valves, and programmable automated humanoid musical bands."
  },
  {
    id: "MC_040",
    region: "Middle East",
    category: "Human Rights & Epigraphy",
    difficulty: "Beginner",
    question: "Inscribed in Babylonian cuneiform following the conquest of Babylon in 539 BCE, what policy is famously proclaimed on the baked-clay Cyrus Cylinder?",
    options: [
      "The total confiscation of all foreign temples and royal treasures by Persian satraps",
      "The freedom of worship, repatriation of exiled peoples, and restoration of sanctuary shrines",
      "The mandatory adoption of Zoroastrian fire-temple worship across all satrapies",
      "The immediate execution of the captive Babylonian priest caste"
    ],
    correct: 1,
    trivia: "Following his bloodless capture of Babylon, Cyrus the Great, founder of the Achaemenid Persian Empire, issued a public royal proclamation on a barrel-shaped clay cylinder. Unlike standard ancient Near Eastern kings who inscribed lists of slaughtered enemies and burned cities, Cyrus proclaimed that he came as a liberator.\n\nHe abolished forced temple labor, returned confiscated idols to their original sanctuaries, and permitted displaced captive peoples—including the Jewish population held in Babylonian exile—to return to their ancestral lands and rebuild their temples in Jerusalem, earning the cylinder praise as an early precursor to human rights declarations."
  },

  // --- OCEANIA & PACIFIC ---
  {
    id: "MC_041",
    region: "Oceania",
    category: "Architecture & Monuments",
    difficulty: "Intermediate",
    question: "Built off the coast of Pohnpei in Micronesia by the Saudeleur dynasty around 1200 CE, what makes the megalithic ruins of Nan Madol unique?",
    options: [
      "It is an elite administrative city constructed across 92 artificial islets linked by tidal canals",
      "It consists of hollow obsidian glass towers floating on pumice stone platforms",
      "It was carved entirely into a single subterranean limestone sinkhole beneath sea level",
      "Its temples were constructed from compressed coral dust mixed with whale fat mortar"
    ],
    correct: 0,
    trivia: "Known as the 'Venice of the Pacific,' Nan Madol spans approximately 18 square kilometers off the coast of Pohnpei. The Saudeleur rulers constructed nearly one hundred artificial stone islands atop shallow coral reefs using monumental prismatic columnar basalt boulders quarried from volcanic vents on the other side of the island.\n\nWeighing up to 50 tons each, the polygonal stone logs were stacked horizontally in alternating log-cabin style patterns to form seawalls, mortuary enclosures, and royal residences, completely isolated from mainland freshwater to centralize royal political control."
  },

  // --- GLOBAL SCIENCE & NATURAL DEEP TIME ---
  {
    id: "MC_042",
    region: "Global Science",
    category: "Evolutionary Paleontology",
    difficulty: "Beginner",
    question: "Discovered on Ellesmere Island in the Canadian Arctic in 2004, the 375-million-year-old fossil Tiktaalik roseae is famous in evolutionary biology as the critical transitional link between:",
    options: [
      "Theropod dinosaurs and modern feathered birds",
      "Lobe-finned fish and four-limbed land tetrapods",
      "Marine jawless fishes and armored placoderms",
      "Land-dwelling artiodactyls and aquatic cetacean whales"
    ],
    correct: 1,
    trivia: "Tiktaalik lived during the Late Devonian period and provides stunning morphological evidence of animals making the monumental transition from swimming in water to crawling on land. While it retained fish characteristics like scales, fins, and gills, it also possessed radical land-adapted anatomical features: a flexible neck, distinct ribs for breathing air, and lungs.\n\nCrucially, when paleontologists Neil Shubin and Ted Daeschler dissected its pectoral fin bones, they found interior shoulder, elbow, and primitive wrist bones homologous to our own arms, allowing Tiktaalik to prop its body up and crawl through shallow river shallows."
  }
];
