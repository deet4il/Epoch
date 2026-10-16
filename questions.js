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
  },
  
  // --- EUROPE & MEDITERRANEAN: SCIENCE, MATH & LOGIC ---
  {
    id: "MC_043",
    region: "Europe",
    category: "Linguistics & Cryptanalysis",
    difficulty: "Advanced",
    question: "In 1952, English architect and self-taught linguist Michael Ventris stunned classicists by deciphering Linear B tablets from Bronze Age Mycenae. What did he prove the language actually was?",
    options: [
      "An archaic dialect of Greek written syllabically",
      "An extinct Minoan isolate related to Etruscan",
      "A Northwest Semitic maritime trading pidgin",
      "An Anatolian script borrowed from the Luwians"
    ],
    correct: 0,
    trivia: "Arthur Evans, who excavated Knossos on Crete, spent decades insisting that Linear B recorded an indigenous non-Greek Minoan tongue. Working purely from home using statistical frequency grids, Ventris matched repetitive consonant-vowel syllable grids to geographic place names on Crete (like Amnisos and Knossos).\n\nHis realization that the underlying grammar was an archaic form of Greek—predating Homer’s Iliad by five centuries—pushed back the documented linguistic history of the Greek language into the 14th century BCE and completely reshaped our understanding of Mycenaean palace administrative accounting."
  },
  {
    id: "MC_044",
    region: "Europe",
    category: "Quantum Physics",
    difficulty: "Intermediate",
    question: "In 1900, German physicist Max Planck resolved the long-standing 'ultraviolet catastrophe' in black-body radiation by introducing which revolutionary assumption?",
    options: [
      "Light moves at variable velocities depending on magnetic fields",
      "Electromagnetic energy is emitted and absorbed only in discrete packets called quanta",
      "Electrons collapse continuously into the atomic nucleus as radio waves",
      "Thermal radiation requires an elastic luminiferous ether to propagate"
    ],
    correct: 1,
    trivia: "Classical physics predicted that an ideal black body at thermal equilibrium would emit infinite energy at short ultraviolet wavelengths—an absurd calculation known as the ultraviolet catastrophe. In an act of mathematical desperation, Planck postulated that vibrating atomic resonators could not gain or lose energy continuously.\n\nInstead, energy could only be transferred in discrete chunks: E = hf (where h is Planck's constant and f is frequency). Though Planck initially regarded this formula merely as a mathematical trick, it laid the inescapable foundation for the entire 20th-century quantum mechanics revolution."
  },
  {
    id: "MC_045",
    region: "Mediterranean",
    category: "Mechanical Computing",
    difficulty: "Beginner",
    question: "Recovered from a Roman shipwreck off the Greek coast in 1901, what was the primary operational function of the 2,100-year-old Antikythera Mechanism?",
    options: [
      "A navigational magnetic compass for open-sea steering",
      "A complex geared bronze mechanical analog computer calculating astronomical cycles and eclipses",
      "An odometer for measuring ship distance traveled using paddle wheels",
      "A water-displacement balance for detecting adulterated gold alloys"
    ],
    correct: 1,
    trivia: "Dating to roughly 150–100 BCE, the Antikythera Mechanism contained at least 30 precision bronze gears packed into a shoebox-sized wooden frame. By turning a hand crank, the user could input any calendar date to predict solar and lunar eclipses, the positions of the five known planets, and the exact timing of the ancient Olympic Games.\n\nModern micro-focus X-ray scans revealed differential gearing and epicyclic pin-and-slot mechanisms that replicated the irregular speed of the Moon's orbit (Kepler's second law in mechanical miniature), a level of mechanical sophistication not seen again in Europe until medieval clockwork towers 1,400 years later."
  },
  {
    id: "MC_046",
    region: "Europe",
    category: "Evolutionary Biology",
    difficulty: "Beginner",
    question: "In his garden monastery in Brno during the 1860s, what did Gregor Mendel track through thousands of pea plant experiments to discover the fundamental laws of inheritance?",
    options: [
      "Discrete, non-blending dominant and recessive hereditary units",
      "Epigenetic changes induced by soil moisture variations",
      "Spontaneous chromosome mutations caused by solar radiation",
      "Bacterial plasmid transfers between plant roots"
    ],
    correct: 0,
    trivia: "Prevailing 19th-century dogma, including Charles Darwin's provisional theory of pangenesis, assumed that offspring traits were a blended average of their parents (like mixing red and white paint into pink). Mendel systematically crossed varieties of Pisum sativum, counting specific binary traits such as yellow vs. green seeds and smooth vs. wrinkled coats across over 28,000 plants.\n\nHe showed that traits remained separate and particulate across generations, reappearing in mathematically predictable 3:1 ratios in the F2 generation. His paper was largely ignored when published in 1866 until its independent rediscovery in 1900 birthed modern genetics."
  },
  {
    id: "MC_047",
    region: "Mediterranean",
    category: "Mathematics & Geometry",
    difficulty: "Intermediate",
    question: "Around 300 BCE in Alexandria, Euclid wrote 'The Elements'. What makes this thirteen-volume treatise one of the most influential works in the history of science?",
    options: [
      "It introduced Hindu-Arabic numerals to Mediterranean accounting",
      "It established the axiomatic-deductive method, deriving hundreds of propositions from just five axioms",
      "It calculated the exact distance between the Earth and the Sun using trigonometry",
      "It formulated algebraic notation using symbolic variables"
    ],
    correct: 1,
    trivia: "Euclid did not discover all the geometry inside The Elements; rather, he organized the mathematical knowledge of his era into an airtight deductive hierarchy. Starting from just five self-evident postulates (most famously the controversial parallel postulate) and 23 definitions, Euclid logically derived 465 distinct geometric and number-theoretic proofs.\n\nFor more than two millennia, The Elements was considered the absolute pinnacle of logical rigor and deductive truth, serving as the universal textbook across the Islamic world and Europe. Only the Bible has had more editions printed since the invention of the printing press."
  },

  // --- THE AMERICAS: PHILOSOPHY, SCIENCE & URBANISM ---
  {
    id: "MC_048",
    region: "Americas",
    category: "Philosophy & Epistemology",
    difficulty: "Advanced",
    question: "In Aztec (Nahua) philosophical traditions recorded in texts like the Florentine Codex, what core concept defined 'Teotl'?",
    options: [
      "An anthropomorphic creator deity ruling from a celestial palace",
      "A dynamic, sacred, and single continuous cosmic energy that is constantly becoming and flowing",
      "A rigid dualistic separation between pure spirit and corrupt physical matter",
      "An eternal nothingness that can only be reached through total silence"
    ],
    correct: 1,
    trivia: "Unlike Western monotheism or Greek polytheism, Nahua tlamatinime (philosophers) viewed reality through pantheistic monism. Teotl was not an individual god who created the universe; Teotl was the universe itself—an all-encompassing, living, self-transforming cosmic energy.\n\nBecause Teotl was in constant motion (ollin), earthly life was viewed as inherently unstable, slippery, and elusive. A famous Nahua philosophical aphorism warned: 'Tlapechco in tlalticpac'—'The earth is on a narrow precipice.' Ethical duty centered on cultivating neltiliztli (rooted balance) through poetry, art, and disciplined conduct."
  },
  {
    id: "MC_049",
    region: "Americas",
    category: "Archaeology & Earthworks",
    difficulty: "Intermediate",
    question: "Constructed along Bayou Maçon in Louisiana around 1700 BCE, what makes the Poverty Point earthwork complex an archaeological anomaly in North America?",
    options: [
      "It was a massive geometric earthwork city built entirely by foraging hunter-gatherers with no agriculture",
      "It features stone pyramids mortared with natural petroleum pitch",
      "It contains subterranean copper smelting blast furnaces pre-dating the Bronze Age",
      "It was built atop a submerged wooden piling system in open saltwater marshes"
    ],
    correct: 0,
    trivia: "Classical archaeology historically assumed that complex monumental architecture required sedentary agriculture (like maize farming) to generate caloric surpluses. Poverty Point completely shattered that premise.\n\nOccupying over 400 acres, indigenous hunter-fishers shifted approximately 750,000 cubic meters of earth to build six concentric C-shaped ridges and massive bird effigy mounds. The inhabitants lived entirely on wild nuts, aquatic roots, deer, and fish, while running a massive trade network that imported tons of stone, galena, and quartz from over 1,000 kilometers away."
  },
  {
    id: "MC_050",
    region: "Americas",
    category: "Materials Science & Adornment",
    difficulty: "Intermediate",
    question: "Pre-Columbian metalsmiths in Colombia and Peru widely used 'tumbaga', an alloy of copper and gold. What chemical technique was used to make these objects look like pure gold?",
    options: [
      "Electrochemical electroplating using volcanic battery cells",
      "Depletion gilding, using acidic plant juices to dissolve surface copper and leave pure gold",
      "Dipping objects into boiling mercury amalgam",
      "High-heat vapor deposition inside sealed charcoal kilns"
    ],
    correct: 1,
    trivia: "Tumbaga had significant metallurgical advantages: it melted at a much lower temperature than pure copper or gold (roughly 850°C) and was significantly harder when hammered. To achieve a radiant golden exterior, indigenous artisans utilized depletion gilding (mise en couleur).\n\nAfter casting an ornament, they repeatedly heated it in an open fire to oxidize the surface copper into copper oxide, then quenched the piece in acidic baths made from oxalic plant saps and mineral salts. The acid selectively dissolved the copper oxides, leaving behind a surface layer of microscopic, brilliant pure gold that was burnished to a mirror sheen."
  },
  {
    id: "MC_051",
    region: "Americas",
    category: "Ancient Information Science",
    difficulty: "Beginner",
    question: "Without a phonetic alphabet, how did the Inca Empire's administrators (quipucamayocs) record census data, tribute inventories, and army logistics across the Andes?",
    options: [
      "By carving pictographic glyphs on flat volcanic slate slabs",
      "By using the Quipu—a system of color-coded spun cords and decimal knots",
      "By painting symbolic ideograms on bark paper folded like concertinas",
      "By burning coded notch patterns into wooden administrative batons"
    ],
    correct: 1,
    trivia: "A quipu consisted of a primary horizontal cord from which hundreds of subsidiary pendent cords hung, made of dyed cotton or alpaca wool. Administrators encoded numbers using a base-10 positional system, tying single knots, long knots, and figure-eight knots at precise heights to represent units, tens, hundreds, and thousands.\n\nColor symbolism conveyed categories—for example, red cords for military forces, yellow for gold tribute, or undyed for local populations. Recent computational analyses suggest some quipus may also have recorded non-numerical phonetic narratives and genealogy."
  },

  // --- MIDDLE EAST & CENTRAL ASIA: MATHEMATICS, OPTICS & LOGIC ---
  {
    id: "MC_052",
    region: "Middle East",
    category: "Cryptanalysis & Statistics",
    difficulty: "Intermediate",
    question: "In 9th-century Baghdad, polymath Al-Kindi wrote the 'Manuscript on Deciphering Cryptographic Messages'. What code-breaking method did he pioneer?",
    options: [
      "The polyalphabetic Vigenère cipher wheel",
      "Frequency analysis, using letter distribution counts to break substitution ciphers",
      "Diffie-Hellman public key modulus arithmetic",
      "Mechanical steganography using mirrored grids"
    ],
    correct: 1,
    trivia: "Before Al-Kindi, monoalphabetic substitution ciphers (where every letter is replaced by another letter or symbol) were considered practically unbreakable. While studying the Quran, Al-Kindi realized that letters in any natural human language do not occur in equal proportions.\n\nHe systematically counted Arabic letter frequencies, noting which letters appeared most and least often. By comparing the letter frequencies in an encrypted text to the known frequencies of normal language, code-breakers could systematically deduce the substitutions—inventing cryptanalysis and early statistical linguistics in a single treatise."
  },
  {
    id: "MC_053",
    region: "Central Asia",
    category: "Geodesy & Trigonometry",
    difficulty: "Advanced",
    question: "Around 1017 CE at Fort Nandana (in modern Pakistan), how did Persian polymath Al-Biruni calculate the circumference of the Earth to within 1% of modern satellite measurements?",
    options: [
      "By timing camel caravans walking between Alexandria and Mecca",
      "By measuring the horizon dip angle from a mountain peak and applying spherical trigonometry",
      "By tracking shadow lengths of identical obelisks at solar noon during the solstice",
      "By calculating the exact parabolic curvature of lunar eclipse shadows on the ocean"
    ],
    correct: 1,
    trivia: "Eratosthenes had famously estimated Earth's circumference in ancient Egypt by measuring shadow lengths in two distant cities simultaneously—a method that required coordinating measurements across hundreds of miles of flat desert. Al-Biruni devised a much more elegant, solo trigonometric method.\n\nFirst, he measured the height of a sheer mountain cliff using triangulation from two points in a flat plain. Then, climbing to the summit, he used an astrolabe to measure the dip angle between the horizontal line of sight and the visible dip of the sea horizon. Using trigonometric sine formulas, he calculated Earth's radius as 6,335.7 km (modern value: 6,371 km)."
  },
  {
    id: "MC_054",
    region: "Middle East",
    category: "Medicine & Clinical Pathology",
    difficulty: "Intermediate",
    question: "Written by physician Al-Razi (Rhazes) around 910 CE, what landmark clinical distinction was made in 'A Treatise on the Smallpox and Measles'?",
    options: [
      "It proved that smallpox and measles were two entirely separate diseases with distinct symptoms",
      "It introduced cowpox inoculation to immunize children against measles",
      "It showed that plague was transmitted through contaminated well water rather than miasma",
      "It documented the first microscopic identification of viral cellular structures"
    ],
    correct: 0,
    trivia: "For centuries, classical Galenic medicine conflated smallpox and measles as minor variations of a single humoral disease of the blood. Working at the hospital in Baghdad, Al-Razi recorded meticulous bedside clinical observations.\n\nHe pointed out that measles causes severe back aches, persistent dry coughs, and syncope, whereas smallpox presents with violent nausea, nasal bleeding, and deep, pustular skin lesions. His monograph was translated into Latin, Greek, and English, serving for centuries as the master text on pediatric infectious diagnosis."
  },

  // --- EAST ASIA: CARTOGRAPHY, METALLURGY & MATH ---
  {
    id: "MC_055",
    region: "East Asia",
    category: "Navigation & Magnetism",
    difficulty: "Beginner",
    question: "Described by Song Dynasty polymath Shen Kuo in his 1086 work 'Dream Pool Essays', what crucial magnetic discovery aided mariners using compass needles?",
    options: [
      "Earth's magnetic pole periodically flips polarity every thousand years",
      "Magnetic needles do not point to true geographic north, demonstrating magnetic declination",
      "Copper wire coils can generate artificial magnetic fields from waterwheels",
      "Submarines can shield themselves from magnetic fields using lead hulls"
    ],
    correct: 1,
    trivia: "Chinese artisans had long crafted lodestone spoons (si nan) for geomancy, but by the 11th century, Song scholars refined magnetized steel needles suspended on silk threads or floated on water. Shen Kuo was the first scholar anywhere in the world to document magnetic declination.\n\nHe observed that magnetized needles point slightly east of true north, rather than true polar north, explaining that 'the magnetic needle always inclines slightly to the east and does not point directly to the south.' This revelation transformed maritime navigation across the Indian Ocean centuries before Columbus reached the Americas."
  },
  {
    id: "MC_056",
    region: "East Asia",
    category: "Pure Mathematics",
    difficulty: "Advanced",
    question: "In 480 CE, Chinese mathematician Zu Chongzhi calculated the value of Pi (π) to seven decimal places (between 3.1415926 and 3.1415927). What geometric method did he use?",
    options: [
      "Measuring the circumference of copper rings with calibrated silk thread",
      "Inscribing a regular 24,576-sided polygon inside a circle",
      "Solving infinite trigonometric series formulas on an abacus",
      "Calculating water displacement in precision circular bronze urns"
    ],
    correct: 1,
    trivia: "Zu Chongzhi used the 'circle-cutting method' (geyuan shu) pioneered earlier by Liu Hui. Starting from a regular hexagon, he repeatedly doubled the number of sides—calculating the side lengths using the Pythagorean theorem and square root extraction.\n\nTo reach seven decimal places of accuracy, he had to calculate the perimeter of an inscribed regular polygon with 24,576 sides. Zu Chongzhi's fraction 355/113 (Milü) stood as the world's most accurate rational approximation of Pi for over 900 years until Persian mathematician Jamshid al-Kashi surpassed it in 1424."
  },
  {
    id: "MC_057",
    region: "East Asia",
    category: "Early Acoustics & Musicology",
    difficulty: "Intermediate",
    question: "Excavated at the Neolithic site of Jiahu in Henan, China, what 9,000-year-old musical artifacts represent the oldest playable multi-note instruments ever discovered?",
    options: [
      "Tuned bone flutes carved from the wing bones of red-crowned cranes",
      "Cast bronze clapperless bells with elliptical cross-sections",
      "Hardened ceramic ocarinas tuned to pentatonic minor scales",
      "Hollowed jade lithophones struck with wooden mallets"
    ],
    correct: 0,
    trivia: "Dating to roughly 7000–6000 BCE, the Jiahu flutes were carefully carved from the ulnae (wing bones) of red-crowned cranes. When modern acoustic researchers at the Music Research Institute of Beijing tested an intact six-holed flute, they were astonished to find that it was fully playable.\n\nThe flute produced an accurate heptatonic (seven-note) scale closely matching modern Western diatonic scales, demonstrating that early agriculturalists possessed sophisticated empirical acoustic knowledge and calibrated drilling practices millennia before the Bronze Age."
  },

  // --- SOUTH ASIA: PHILOSOPHY, BOTANY & METALLURGY ---
  {
    id: "MC_058",
    region: "South Asia",
    category: "Epistemology & Logic",
    difficulty: "Intermediate",
    question: "In Jain philosophy, the doctrine of 'Anekantavada' is famously illustrated by the parable of the blind men and an elephant. What is its core philosophical thesis?",
    options: [
      "All physical objects are divine illusions without underlying reality",
      "Truth and reality are complex and multifaceted, meaning no single human perspective can claim absolute monopoly on truth",
      "Words possess no intrinsic meaning and should be abandoned for sensory silence",
      "Only mathematical statements can be verified through sensory perception"
    ],
    correct: 1,
    trivia: "Formulated by Mahavira in the 6th century BCE, Anekantavada ('many-sidedness') asserts that ultimate reality has infinite attributes and relationships. Because human perception is inherently limited, each observer grasps only a partial aspect of the truth—like the blind men who touch the elephant's trunk, ear, or leg and claim the animal is a snake, a fan, or a pillar.\n\nThis epistemological framework led directly to Syadvada (the logic of conditional assertion), fostering intense traditions of non-violence (ahimsa), intellectual tolerance, and multi-perspective philosophical debate across ancient South Asia."
  },
  {
    id: "MC_059",
    region: "South Asia",
    category: "Materials Science & Corrosion",
    difficulty: "Beginner",
    question: "Erected during the Gupta Empire in the 5th century CE, why has the 6-ton Iron Pillar of Delhi survived out in open humid monsoon rains for 1,600 years without rusting away?",
    options: [
      "It was cast from a solid meteoric titanium-platinum alloy",
      "High phosphorus content in the iron formed a microscopic protective crystalline iron-phosphate surface film",
      "It has been coated continuously with animal fats and beeswax by temple priests",
      "The pillar was buried in desert salt sands until the 19th century"
    ],
    correct: 1,
    trivia: "Metallurgists from the Indian Institute of Technology (IIT Kanpur) discovered that ancient blacksmiths produced the pillar using high-temperature charcoal extraction without limestone flux. This left high levels of phosphorus in the wrought iron.\n\nWhen exposed to alternating dry heat and monsoon humidity, the phosphorus catalyzed the rapid formation of a passive, non-porous crystalline layer of misawite (an iron hydrogen phosphate hydrate) just 0.05 millimeters thick. This natural coating hermetically seals the core iron against atmospheric oxygen, completely preventing rust."
  },
  {
    id: "MC_060",
    region: "South Asia",
    category: "Pure Mathematics & Calculus",
    difficulty: "Advanced",
    question: "Founded in the 14th century by Madhava of Sangamagrama, what major mathematical discovery did the Kerala School of Astronomy and Mathematics achieve centuries before Isaac Newton and Gottfried Leibniz?",
    options: [
      "The formulation of non-Euclidean spherical geometry",
      "Infinite power series expansions for trigonometric sine, cosine, and arctangent",
      "The invention of matrix determinants and Gaussian elimination",
      "The proof of the four-color map theorem using permutation tables"
    ],
    correct: 1,
    trivia: "Centuries before European mathematicians developed differential and integral calculus, Madhava and his Kerala school successors (including Nilakantha and Jyesthadeva in the Yuktibhasa) were computing astronomical positions that required calculating values of Pi and trigonometric functions to extreme accuracy.\n\nMadhava discovered the infinite series for arctangent (now commonly known as the Madhava-Gregory series) and infinite series for sine and cosine (the Madhava-Taylor series), using infinitesimal analysis and step-by-step limits to calculate Pi to 11 decimal places."
  },

  // --- OCEANIA & SOUTHEAST ASIA: ASTRONOMY, ENGINEERING & ETHNOBOTANY ---
  {
    id: "MC_061",
    region: "Oceania",
    category: "Celestial Wayfinding",
    difficulty: "Beginner",
    question: "Traditional Polynesian navigators (such as Mau Piailug) navigated thousands of miles across the Pacific without compasses or sextants using 'Star Paths'. How does this system work?",
    options: [
      "By memorizing the horizon rising and setting points of specific stars in dynamic star compasses",
      "By following magnetic light fluctuations in the aurora australis",
      "By calculating the changing parallax of Sirius during night watches",
      "By steering toward stationary constellations that never move across the night sky"
    ],
    correct: 0,
    trivia: "Polynesian wayfinders divide the circular 360-degree horizon into 32 equidistant houses (a mental star compass). Because stars rise and set at identical compass bearings throughout the year at specific latitudes, a navigator steers the canoe by aligning the vessel with stars rising along the horizon ahead or setting behind.\n\nIf clouds obscure the night sky, navigators maintain their course by reading the direction of primary ocean swells hitting the double hull, noting shifts in bird flight trajectories at dawn, and tracking phosphorescence patterns in the water."
  },
  {
    id: "MC_062",
    region: "Southeast Asia",
    category: "Archaeology & Marine Trade",
    difficulty: "Intermediate",
    question: "Excavated in the Mekong Delta of Vietnam, what archaeological discovery at the Funan kingdom's port of Oc Eo proved the vast scale of 2nd-century maritime Silk Road trade?",
    options: [
      "Roman gold medallions of Antoninus Pius and Marcus Aurelius paired with Han Chinese bronze mirrors",
      "Viking runic iron battle axes mixed with Indian ivory tusks",
      "Cast Mayan jade figurines traded across trans-Pacific rafts",
      "Ptolemaic papyrus scrolls detailing Mediterranean shipping insurance"
    ],
    correct: 0,
    trivia: "Excavations begun by French archaeologist Louis Malleret in the 1940s revealed that Oc Eo was a sprawling canal-laced port city connecting the South China Sea to the Gulf of Thailand. Located at the narrow neck of the Indochinese peninsula, merchants unloaded goods to avoid the dangerous voyage around the Malacca Strait.\n\nArtifacts uncovered in its mudbrick docks included Roman gold coins bearing the portraits of Emperor Antoninus Pius (dated 152 CE), Persian glassware, Indian gemstone intaglios inscribed with Sanskrit, and Han Dynasty bronze mirrors, establishing Funan as a premier global transshipment hub."
  },

  // --- GLOBAL DEEP TIME & MODERN PHYSICS ---
  {
    id: "MC_063",
    region: "Global Science",
    category: "Geology & Astrobiology",
    difficulty: "Advanced",
    question: "In 1977, oceanographers aboard the submersible Alvin made a biological discovery along the Galápagos Rift that revolutionized our understanding of the origin of life. What was it?",
    options: [
      "Fossilized trilobites preserved in cold deep-sea methane clathrates",
      "Thriving ecosystems around hydrothermal vents powered entirely by chemosynthesis rather than sunlight",
      "Subterranean coral colonies photosynthesizing using infrared volcanic heat",
      "Living bacterial colonies that incorporate arsenic into their DNA backbone"
    ],
    correct: 1,
    trivia: "Until Alvin’s dive to 2,500 meters depth, all biological textbooks taught that every food web on Earth was ultimately dependent on solar energy through plant photosynthesis. When scientists illuminated the volcanic rift, they found towering mineral chimneys ('black smokers') spewing 350°C mineral-rich fluids surrounded by giant tube worms, blind shrimp, and white crabs.\n\nThese organisms were powered by sulfur-oxidizing bacteria using geothermal chemical energy (chemosynthesis) to synthesize organic matter from hydrogen sulfide, proving life can flourish in total darkness and boosting hopes of finding life inside the sub-surface oceans of moons like Europa and Enceladus."
  },
  {
    id: "MC_064",
    region: "Global Science",
    category: "Astrophysics & Relativity",
    difficulty: "Intermediate",
    question: "In 1919, during a total solar eclipse observed on the island of Príncipe, what did British astronomer Arthur Eddington measure to confirm Albert Einstein's General Theory of Relativity?",
    options: [
      "The gravitational redshift of light leaving the surface of white dwarf stars",
      "The gravitational bending of starlight passing near the massive edge of the Sun",
      "The expansion rate of glowing coronal plasma during solar maximum",
      "The quantum entanglement of photon pairs emitted during lunar occultation"
    ],
    correct: 1,
    trivia: "Einstein’s 1915 General Theory of Relativity made a bold prediction: gravity is not an invisible force pulling masses, but the physical warping of spacetime by mass. Therefore, a beam of starlight passing close to the sun should bend twice as much as predicted by classical Newtonian mechanics.\n\nDuring the May 1919 solar eclipse, the Moon blocked the sun’s glare, allowing Eddington to photograph background stars in the Hyades cluster. Comparing their photographed positions to night charts taken months earlier showed the star positions had shifted by roughly 1.75 arcseconds—exactly matching Einstein’s equations and catapulting him into global fame overnight."
  },
  {
    id: "MC_065",
    region: "Europe",
    category: "Microbiology & Medical History",
    difficulty: "Beginner",
    question: "In 1854, English physician John Snow mapped cholera outbreaks in London’s Soho district. How did his epidemiological map solve the epidemic and challenge prevailing medical theory?",
    options: [
      "By identifying that cholera was waterborne and centered on a contaminated public water pump on Broad Street",
      "By proving that rat fleas transmitted the disease through airborne respiratory droplets",
      "By demonstrating that bloodletting exacerbated patient dehydration mortality",
      "By introducing the first heat-killed oral cholera vaccine to slum residents"
    ],
    correct: 0,
    trivia: "The Victorian medical establishment almost universally believed in 'miasma theory'—the idea that cholera was caused by inhaling noxious foul air rising from decaying matter. During a lethal outbreak in Soho that killed over 600 people in days, Snow marked every recorded death on a street map as a bar next to the victim's house.\n\nThe cluster centered overwhelmingly around the public water handle on Broad Street. Snow convinced the local parish board to remove the pump handle, causing the outbreak to collapse. Later excavations showed that an underground cesspool was leaking directly into the pump's well, laying the cornerstone of modern epidemiology."
  },
  {
    id: "MC_066",
    region: "Global Science",
    category: "Cosmology",
    difficulty: "Beginner",
    question: "In 1964, Arno Penzias and Robert Wilson accidentally discovered the Cosmic Microwave Background (CMB) using the Holmdel Horn Antenna. What did this radiation represent?",
    options: [
      "The residual thermal afterglow from the recombination era roughly 380,000 years after the Big Bang",
      "Radio wave emissions from thousands of spinning millisecond pulsars",
      "Solar wind electrons colliding with Earth's magnetosphere",
      "Synchrotron radiation produced by gas spiraling into the center of the Milky Way"
    ],
    correct: 0,
    trivia: "Penzias and Wilson were testing a sensitive horn antenna for satellite communications at Bell Labs when they picked up a persistent, uniform radio hiss coming from every single direction in the sky, day and night. After cleaning pigeon droppings from the antenna and ruling out military interference, they consulted astrophysicists at Princeton.\n\nThey realized they had detected the cooled residual light released when the early universe cooled to roughly 3,000 Kelvin, allowing electrons and protons to form neutral hydrogen atoms and letting trapped photons travel freely through space for the first time. This discovery provided decisive observational proof of the Big Bang over the rival Steady State model."
  },
  {
    id: "MC_067",
    region: "Americas",
    category: "Evolutionary Genetics",
    difficulty: "Intermediate",
    question: "Phytolith and microfossil genetic analyses in the Balsas River Valley of Mexico proved that modern high-yield maize (corn) was selectively domesticated from what tiny wild ancestor grass?",
    options: [
      "Teosinte",
      "Wild sorghum",
      "Amaranth",
      "Millet"
    ],
    correct: 0,
    trivia: "Wild teosinte looks nothing like a modern corn cob: it is a bushy grass that produces small seed spikes containing only 5 to 12 tiny, rock-hard grains encased in an impenetrable stony fruitcase. Starting roughly 9,000 years ago, indigenous Mexican farmers recognized and selectively propagated rare mutations in teosinte.\n\nOver centuries of careful seed selection, they transformed a single gene (tb1) to eliminate side branching, and another (tga1) to strip away the hard outer casing, transforming an unpalatable wild grass into the most productive, carbohydrate-dense grain crop on planet Earth."
  },
  
  // --- PHILOSOPHY, LOGIC & EPISTEMOLOGY ---
  {
    id: "MC_068",
    region: "East Asia",
    category: "Philosophy & Skepticism",
    difficulty: "Beginner",
    question: "In the foundational Daoist text Zhuangzi, what famous parable is used to illustrate the relativity of subjective experience and waking reality?",
    options: [
      "The man who lost his horse on the frontier border",
      "The philosopher dreaming he was a butterfly without knowing he was Zhuang Zhou",
      "The butcher Cook Ding carving an ox along natural empty spaces",
      "The frog living at the bottom of a collapsed well refusing the vast ocean"
    ],
    correct: 1,
    trivia: "In the inner chapters of the Zhuangzi (written in the 4th century BCE), Zhuang Zhou relates waking up from a dream in which he fluttered joyfully as a butterfly, having no awareness of being human. Upon waking, he found himself solidly Zhuang Zhou once again.\n\nHe then posed the enduring epistemological riddle: was he a man who dreamed he was a butterfly, or is he now a butterfly dreaming he is a man? This parable challenges rigid anthropocentric certainty and introduces Daoist transformation of things (wùhuà)."
  },
  {
    id: "MC_069",
    region: "Mediterranean",
    category: "Philosophy of Science",
    difficulty: "Intermediate",
    question: "In 6th-century BCE Miletus (Ionia), what radical paradigm shift did Thales initiate that led Aristotle to consider him the first natural philosopher?",
    options: [
      "He proposed naturalistic, physical hypotheses to explain natural events instead of attributing them to mythological gods",
      "He invented formal geometric proofs to establish land boundaries along the Nile",
      "He introduced atomism, arguing that matter is composed of indivisible particles",
      "He wrote the first legal constitution establishing judicial trials by jury"
    ],
    correct: 0,
    trivia: "Before Thales, ancient cultures explained physical phenomena—such as earthquakes, ocean tides, and lightning—as direct interventions by capricious deities (like Poseidon shaking the earth). Thales broke away from mythopoetic explanations by arguing that nature operates through inherent internal laws.\n\nHe proposed that water is the fundamental underlying substance (arche) of the cosmos, correctly predicting a solar eclipse in 585 BCE. While his specific material hypothesis was incomplete, his insistence on physical hypotheses subject to empirical observation founded Western natural philosophy."
  },
  {
    id: "MC_070",
    region: "Africa",
    category: "Ethics & Moral Philosophy",
    difficulty: "Beginner",
    question: "Found across Bantu-speaking traditions in Southern and Central Africa, what core principle is expressed by the ethical philosophy of 'Ubuntu' (or Unhu)?",
    options: [
      "Individual enlightenment achieved through solitary ascetic meditation in nature",
      "'A person is a person through other persons'—humanity is realized through relational interconnectedness",
      "Strict legal obedience to divine kingship as the guarantor of cosmic equilibrium",
      "The pursuit of spiritual detachment from all physical possessions and ancestral lineage"
    ],
    correct: 1,
    trivia: "Derived from the Nguni proverb 'Umuntu ngumuntu ngabantu', Ubuntu represents a humanist communal ethics. Unlike Cartesian individualism ('I think, therefore I am'), Ubuntu posits that individual identity, dignity, and morality exist only within reciprocal community relationships.\n\nPracticing Ubuntu entails hospitality, restorative rather than retributive justice, and mutual responsibility. This philosophy was famously integrated into post-apartheid South Africa’s Truth and Reconciliation Commission by figures like Desmond Tutu and Nelson Mandela to emphasize social healing over revenge."
  },

  // --- COMPUTER SCIENCE, AUTOMATA & MATHEMATICS ---
  {
    id: "MC_071",
    region: "Europe",
    category: "Theoretical Computer Science",
    difficulty: "Intermediate",
    question: "In his landmark 1936 paper, English mathematician Alan Turing formulated an abstract theoretical machine to answer which fundamental mathematical question?",
    options: [
      "The exact value of the gravitational constant inside atomic nuclei",
      "David Hilbert's Entscheidungsproblem (the decision problem regarding algorithmic decidability)",
      "The maximum data throughput possible over transatlantic copper telegraph cables",
      "The prime number distribution across the Riemann zeta function"
    ],
    correct: 1,
    trivia: "Hilbert asked whether there could exist a universal mechanical procedure (algorithm) that could decide the truth or falsehood of any mathematical statement. To address this, Turing imagined an abstract device: an infinite paper tape divided into squares, read and modified by a scanning head following a finite table of instructions.\n\nBy formalizing this 'Universal Turing Machine,' Turing proved the negative: there exist mathematically well-defined problems (most famously the Halting Problem) that no algorithmic computer can ever solve, inadvertently defining the theoretical architecture of modern programmable digital computers."
  },
  {
    id: "MC_072",
    region: "Europe",
    category: "Computing & Early Programming",
    difficulty: "Beginner",
    question: "In 1843, Ada Lovelace wrote extensive notes on Charles Babbage's proposed Analytical Engine. Why is she celebrated as the world's first computer programmer?",
    options: [
      "She soldered the first thermionic vacuum tubes used in digital calculating machines",
      "She published an algorithm designed to be carried out by the machine to compute Bernoulli numbers",
      "She constructed a magnetic-core memory drum out of woven copper wires",
      "She designed the mechanical punch-card loom for weaving complex floral silk ribbons"
    ],
    correct: 1,
    trivia: "While translating a French transcript of Babbage's lectures, Lovelace appended 'Note G,' which was triple the length of the original text. In it, she drafted a step-by-step instruction table specifying memory stores, operation cycles, and conditional branching to calculate Bernoulli numbers mechanically.\n\nMore profoundly, while Babbage saw his machine merely as a high-speed calculator for numerical tables, Lovelace envisioned that if information like music, pitch, or graphics could be expressed symbolically, the engine could manipulate symbols to compose music or generate art—anticipating universal computing a century early."
  },
  {
    id: "MC_073",
    region: "Americas",
    category: "Information Theory",
    difficulty: "Intermediate",
    question: "Published in 1948 by Bell Labs mathematician Claude Shannon, 'A Mathematical Theory of Communication' laid the bedrock of the digital age by defining what fundamental concept?",
    options: [
      "The physical transistor gate threshold for silicon semiconductors",
      "The bit (binary digit) as the fundamental unit of information, quantified through entropy",
      "The packet-switching protocol used to route signals over ARPANET",
      "The floating-point standard used by microprocessors for decimal arithmetic"
    ],
    correct: 1,
    trivia: "Shannon stripped communication of its physical medium—whether voice, text, radio waves, or voltage spikes—by treating information as the measurable reduction of uncertainty. He adopted the word 'bit' (coined by John Tukey) to quantify this binary choice (0 or 1).\n\nShannon proved the Noisy-Channel Coding Theorem: any communication channel has a maximum theoretical data transmission limit (channel capacity). As long as transmission rates stay below this limit, error-correcting codes can transmit data across noisy telephone lines or deep-space radio links with virtually zero error."
  },

  // --- CHEMISTRY, PHARMACOLOGY & MATERIALS SCIENCE ---
  {
    id: "MC_074",
    region: "Europe",
    category: "Organic Chemistry",
    difficulty: "Intermediate",
    question: "In 1865, German chemist August Kekulé proposed the cyclical ring structure of benzene (C6H6). According to his accounts, what striking vision inspired this breakthrough?",
    options: [
      "A dream of an ouroboros—a serpent seizing its own tail in a whirling circle",
      "Watching smoke rings rise from an extinguished candle in his laboratory",
      "Looking at the hexagonal symmetry of microscopic ice crystals on a windowpane",
      "Observing six children dancing in an interlocking ring in a Munich town square"
    ],
    correct: 0,
    trivia: "Determining how six carbon atoms could bond with only six hydrogen atoms was the central puzzle of 19th-century organic chemistry, as typical carbon valencies formed straight open chains. Kekulé described dozing by his fireplace and seeing carbon atoms dance and twist before his eyes.\n\nOne chain seized its own tail and whirled mockingly, sparking his realization that benzene formed a closed hexagonal carbon ring with alternating double and single bonds. This planar ring structure explained aromatic stability and founded modern synthetic organic chemistry, dyes, and pharmaceuticals."
  },
  {
    id: "MC_075",
    region: "Europe",
    category: "Pharmacology & Microbiology",
    difficulty: "Beginner",
    question: "In 1928, Scottish bacteriologist Alexander Fleming returned from vacation to discover that an accidental mold contamination in his laboratory had done what?",
    options: [
      "Fermented glucose broth into pure industrial ethyl alcohol",
      "Killed and lysed surrounding colonies of Staphylococcus aureus bacteria on a petri dish",
      "Mutated harmless soil microbes into lethal anthrax spores",
      "Accelerated the crystal growth of synthetic aspirin compounds"
    ],
    correct: 1,
    trivia: "Fleming had left culture plates of Staphylococcus bacteria stacked on a laboratory bench before leaving on holiday. Upon returning, he noticed that a blue-green mold spore (Penicillium notatum) had blown in through an open window and contaminated an uncovered plate.\n\nCrucially, Fleming observed a transparent halo of dead bacteria directly around the mold colony, deducing that the fungus secreted an antibacterial agent that destroyed bacterial cell walls without damaging human cells. Purified a decade later by Howard Florey and Ernst Chain, penicillin transformed medicine, saving tens of millions of lives."
  },
  {
    id: "MC_076",
    region: "Americas",
    category: "Materials Science & Polymers",
    difficulty: "Intermediate",
    question: "Long before European vulcanization was patented in the 1840s, how did Olmec and Maya artisans in Mesoamerica chemically stabilize raw rubber latex into elastic balls and sandals?",
    options: [
      "By boiling latex with crushed limestone and animal tallow",
      "By blending raw latex sap with juice squeezed from morning glory vines (Ipomoea alba)",
      "By smoking raw rubber over burning sulfur-rich volcanic vents",
      "By curing latex sheets under heavy salt presses in arid desert caves"
    ],
    correct: 1,
    trivia: "Raw sap collected from the rubber tree (Castilla elastica) is a sticky, brittle emulsion that decomposes rapidly in heat. Chemical analyses of rubber balls found at the sacred Olmec site of El Manatí (dating to 1600 BCE) showed that indigenous artisans mastered polymer chemistry millennia ahead of their time.\n\nThey discovered that mixing raw latex with alkaline sulfur compounds naturally present in the crushed juice of the morning glory vine cross-linked the polymer chains. By altering the ratio of vine juice to latex, they could manufacture pliable bouncing balls for the sacred ballgame, resilient waterproof shoe soles, or tough hafting bands."
  },

  // --- GEOPHYSICS, CLIMATOLOGY & OCEANOGRAPHY ---
  {
    id: "MC_077",
    region: "Europe",
    category: "Geophysics & Plate Tectonics",
    difficulty: "Intermediate",
    question: "In 1912, German meteorologist Alfred Wegener published his hypothesis of continental drift. What primary geological mechanism was he unable to explain, causing his theory to be initially rejected?",
    options: [
      "How matching fossil species appeared on continents separated by wide oceans",
      "The physical convective driving force capable of plowing solid continents across the seafloor",
      "Why glacial striations existed in equatorial regions of India and Africa",
      "How oceanic basalt layers differed chemically from continental granite crust"
    ],
    correct: 1,
    trivia: "Wegener compiled remarkable empirical evidence for his supercontinent Pangaea: the interlocking jigsaw fit of South America and Africa, identical fossil deposits of the freshwater reptile Mesosaurus across continents, and matching geological strata spanning the Atlantic. However, geologists dismissed him because he suggested continents plowed through ocean floor like icebreakers.\n\nIt was not until the 1960s—when Marie Tharp mapped the Mid-Atlantic Ridge, discovering seafloor spreading driven by mantle convection currents—that plate tectonics became the unifying foundation of modern earth science."
  },
  {
    id: "MC_078",
    region: "Americas",
    category: "Atmospheric Science & Geochemistry",
    difficulty: "Beginner",
    question: "Beginning in 1958 at the Mauna Loa Observatory in Hawaii, what did geochemist Charles David Keeling begin measuring that provided the first incontrovertible proof of human-driven climate change?",
    options: [
      "The annual depletion of stratospheric ozone layers over the South Pole",
      "The relentless rise of atmospheric carbon dioxide concentrations (the Keeling Curve)",
      "The concentration of sulfur dioxide droplets released by submarine volcanoes",
      "The acidification rate of deep-water Pacific ocean currents"
    ],
    correct: 1,
    trivia: "Before Keeling's work, scientists hypothesized that global oceans and forests absorbed virtually all excess industrial carbon dioxide emissions. Keeling built ultra-precise infrared gas analyzers and placed them high on the volcanic slopes of Mauna Loa, far from local industrial smoke.\n\nHis continuous graph revealed two critical realities: a seasonal 'sawtooth' oscillation as Northern Hemisphere forests breathe in CO2 during spring and exhale it in autumn, superimposed on a relentless, year-after-year upward climb from 315 parts per million in 1958 to over 420 ppm today, confirming that human fossil fuel combustion is altering the global atmosphere."
  },
  {
    id: "MC_079",
    region: "Africa",
    category: "Paleoclimatology & Geology",
    difficulty: "Advanced",
    question: "Sediment cores from the Atlantic Ocean revealed that between 14,500 and 5,000 years ago, North Africa underwent the 'African Humid Period'. What was the primary environmental state of the Sahara at that time?",
    options: [
      "A frozen, glaciated plateau covered in permafrost and mammoth steppe",
      "A green savanna covered in expansive freshwater lakes, grasslands, and river systems",
      "An inland hypersaline sea isolated from the Mediterranean by salt dunes",
      "A hyper-arid volcanic desert hotter and drier than the modern Sahara"
    ],
    correct: 1,
    trivia: "Earth's 23,000-year orbital precession cycle shifted the summer solstice closer to the Sun during the early Holocene, intensifying the West African monsoon. Rains swept across North Africa, turning the Sahara into a lush landscape of grasslands, river corridors, and vast freshwater mega-lakes—including Mega-Lake Chad, which was larger than the modern Caspian Sea.\n\nRock art murals at Tassili n'Ajjer in Algeria document pastoralist communities herding cattle, swimming in clear lakes, and hunting hippos, crocodiles, and giraffes in areas that are now scorched, waterless dunes."
  },

  // --- ANTHROPOLOGY, ARCHAEOLOGY & ANCIENT ENGINEERING ---
  {
    id: "MC_080",
    region: "Oceania",
    category: "Experimental Archaeology",
    difficulty: "Intermediate",
    question: "Recent engineering and experimental archaeological research by Terry Hunt and Carl Lipo demonstrated that the massive monolithic Moai statues on Rapa Nui (Easter Island) were transported from quarries by:",
    options: [
      "Rolling them face-down over thousands of imported hardwood palm tree logs",
      "'Walking' them upright using three-rope pulling teams that rocked the statues rhythmically side to side",
      "Floating them along coastal lava trenches flooded with buoyant seawater",
      "Sliding them across greased basalt paving stones using trained draft animals"
    ],
    correct: 1,
    trivia: "Oral tradition on Rapa Nui had long insisted that the moai 'walked' to their ceremonial platforms (ahu). While early European theorists assumed Islanders decimated forests to create wooden log rollers, Hunt and Lipo noticed that road-transit moai had wider, forward-leaning bases and rounded bellies engineered for an upright center of gravity.\n\nBy attaching three ropes to the statue's head—one pulling forward and two steadying the sides—a team of just 18 people could rock a multi-ton replica back and forth, walking it forward at 100 meters per hour with zero timber rollers, matching the indigenous oral history."
  },
  {
    id: "MC_081",
    region: "Americas",
    category: "Archaeological Acoustics",
    difficulty: "Advanced",
    question: "Constructed around 900 BCE in the Peruvian highlands, how did the subterranean stone galleries of Chavín de Huántar utilize hydraulic acoustic engineering?",
    options: [
      "Underground canals were engineered to channel river water through stone baffles, creating a roaring acoustic resonance that sounded like jaguars",
      "Subterranean pipes concentrated thermal steam to produce high-pitched siren whistles",
      "Granite chambers were shaped like elliptical parabolas to amplify whisper networks between priests",
      "Cascading water wheels struck bronze chimes to track seasonal solstice schedules"
    ],
    correct: 0,
    trivia: "Stanford researchers using acoustic mapping discovered that the ceremonial underground labyrinth at Chavín de Huántar was an early acoustic architecture laboratory. Canals diverted the roaring Mosna River directly through stone conduits beneath the temple floor where initiates stood in total darkness before the smiling Lanzón monolith.\n\nThe rushing water produced low-frequency infrasound and acoustic vibrations that vibrated in human chest cavities, imitating the terrifying roar of jaguars. When combined with marine conch trumpet blasts (pututus) and psychotropic San Pedro cactus ceremonies, the acoustic engineering disoriented initiates during spiritual rites."
  },
  {
    id: "MC_082",
    region: "South Asia",
    category: "Hydraulic Architecture",
    difficulty: "Beginner",
    question: "Built across arid western India from the 6th century onward (such as Rani ki Vav in Gujarat), what was the dual function of a 'stepwell' (baoli)?",
    options: [
      "A deep subterranean rainwater reservoir accessible via stepped terraces that also functioned as a cool civic sanctuary",
      "A gravity-fed elevator system designed to transport royal elephants down to river level",
      "A multi-tiered filtration pit packed with charcoal to distill mineral salts for gunpowder",
      "A flood-control drainage funnel designed to sink excess monsoon water into volcanic caverns"
    ],
    correct: 0,
    trivia: "In arid regions of Gujarat and Rajasthan, groundwater tables fluctuate drastically between monsoon downpours and blistering summer droughts. Indian architects engineered stepwells: multi-story subterranean temples dug up to nine levels into the earth, lined with intricate carved stone columns, pavilions, and descending staircases.\n\nAs water levels rose and fell, women could descend to the water level at any time of year. Because the deep underground stone stayed up to 10°C cooler than the scorching surface air, stepwells served as civic community centers where travelers, women, and pilgrims escaped the heat."
  },
  {
    id: "MC_083",
    region: "Middle East",
    category: "Civil Engineering & Materials",
    difficulty: "Intermediate",
    question: "Built around 540 CE near modern Baghdad, the Taq Kasra (Arch of Ctesiphon) stands as a monument of Sasanian architecture because it holds what world record?",
    options: [
      "The oldest surviving dome built from volcanic pozzolanic concrete",
      "The largest single-span unreinforced parabolic brick vault in the world",
      "The earliest known architectural arch reinforced with forged wrought-iron rebar",
      "The highest surviving brick minaret constructed with an internal spiral counterweight"
    ],
    correct: 1,
    trivia: "The great banquet hall of the Persian Sasanian kings at Ctesiphon features a colossal parabolic barrel vault spanning over 25 meters (84 feet) wide and rising 37 meters (120 feet) into the air. What astounds structural engineers is that it was built without centering timber scaffolding during construction and without any interior metal reinforcement.\n\nPersian masons laid sun-baked mud bricks at an inclined slant against a back wall rather than horizontally, using fast-drying gypsum mortar. This allowed each successive brick course to support itself through parabolic compression, surviving centuries of weathering and warfare."
  },

  // --- ASTRONOMY, OPTICS & SENSORY SCIENCE ---
  {
    id: "MC_084",
    region: "East Asia",
    category: "Historical Astronomy",
    difficulty: "Beginner",
    question: "In July 1054 CE, court astronomers of the Song Dynasty recorded a brilliant 'Guest Star' in the constellation Taurus visible in broad daylight for 23 days. What was this celestial event?",
    options: [
      "The perihelion passage of Halley's Comet through inner orbit",
      "A core-collapse supernova explosion that created the Crab Nebula (SN 1054)",
      "A massive solar coronal mass ejection triggering daytime auroral displays",
      "The collision of two asteroids in the asteroid belt shedding reflective dust"
    ],
    correct: 1,
    trivia: "Song court imperial astrologers recorded meticulous dates and coordinates for this celestial apparition, noting it appeared in the morning sky shining brighter than Venus and remained visible in daylight for over three weeks before fading over two years. Ancestral Puebloan artists in Chaco Canyon and Arab physicians also documented the flash.\n\nCenturies later, when modern astronomers turned telescopes toward the exact coordinates recorded by the Song scribes, they found the Crab Nebula: an expanding cloud of stellar debris centered on a rapidly spinning neutron star (pulsar) rotating 30 times per second."
  },
  {
    id: "MC_085",
    region: "Europe",
    category: "Microbiology & Optics",
    difficulty: "Beginner",
    question: "In 1665, English natural philosopher Robert Hooke published 'Micrographia'. What foundational biological term did he coin while examining thin slices of cork under his microscope?",
    options: [
      "Organelle",
      "Cell",
      "Tissue",
      "Membrane"
    ],
    correct: 1,
    trivia: "Micrographia was an international publishing sensation, featuring fold-out copperplate engravings of fleas, lice, and razor blade edges magnified up to 50 times under compound microscopes. While examining thin shavings of bottle cork, Hooke observed porous rectangular compartments filled with air.\n\nHe noted that they resembled the small living rooms or bedrooms inhabited by Christian monks in a monastery, which were called 'cellula' in Latin. Hooke coined the term 'cell' for these structures, establishing the terminology for cellular biology."
  },
  {
    id: "MC_086",
    region: "Americas",
    category: "Archaeoastronomy",
    difficulty: "Intermediate",
    question: "Constructed at Chichén Itzá in Yucatán, Mexico, why is the circular stone tower known as 'El Caracol' renowned in astronomical history?",
    options: [
      "Its viewing slits and horizontal alignments specifically tracked the extreme northern and southern horizons of the planet Venus",
      "It contained a massive reflecting pool lined with liquid mercury to track constellations",
      "It was built atop a submerged freshwater cenote that mirrored Polaris during the winter solstice",
      "It aligned strictly with the magnetic pole rather than the solar equinoxes"
    ],
    correct: 0,
    trivia: "The round, shell-like dome of El Caracol (named 'the snail' by the Spanish due to its internal spiral staircase) was a specialized astronomical observatory. Maya astronomers placed immense religious and military importance on the synodic cycle of Venus (Chak Ek'), the 584-day cycle associated with the god Kukulcán and warfare.\n\nArchaeologists Anthony Aveni and Horst Hartung measured the tower's stone viewing windows and platform orientations, discovering that 20 out of 29 architectural sightlines aligned with astronomical events, including the extreme horizon rising and setting points of Venus at its 8-year maximums."
  },

  // --- GENETICS, EVOLUTION & NEUROBIOLOGY ---
  {
    id: "MC_087",
    region: "Europe",
    category: "Molecular Biology",
    difficulty: "Intermediate",
    question: "In 1952, physical chemist Rosalind Franklin produced 'Photo 51' using X-ray crystallography. What critical structural parameter of DNA did this image reveal?",
    options: [
      "The triple-stranded polypeptide backbone linked by iron bonds",
      "The distinct X-shaped diffraction pattern of an anti-parallel double helix with phosphate backbones on the outside",
      "The covalent bonding mechanism between adenine and thymine",
      "The left-handed helical rotation characteristic of Z-DNA"
    ],
    correct: 1,
    trivia: "At King's College London, Franklin spent months perfecting the hydration of DNA fibers, producing an X-ray diffraction photograph of the B-form of DNA after a 100-hour exposure. The characteristic X-shaped cross pattern mathematically indicated a helical structure, while the missing fourth diamond layer revealed that two sugar-phosphate chains wound in opposite directions (antiparallel).\n\nWhen Maurice Wilkins showed Photo 51 to James Watson without Franklin’s knowledge or consent, Watson immediately recognized the helical geometry, allowing him and Francis Crick to model the double helix and deduce the base-pairing mechanism of genetic inheritance."
  },
  {
    id: "MC_088",
    region: "Europe",
    category: "Neuroscience",
    difficulty: "Advanced",
    question: "In the 1890s, Spanish neuroscientist Santiago Ramón y Cajal overturned prevailing scientific dogma by establishing the 'Neuron Doctrine'. What did he prove?",
    options: [
      "The nervous system is an uninterrupted, continuous physical web of fused cytoplasmic fibers (reticular theory)",
      "The nervous system is composed of discrete, individual cells (neurons) that communicate across microscopic gaps",
      "Electrical impulses in nerves are generated exclusively by hydraulic fluid pressure through hollow sheaths",
      "Brain tissue cannot regenerate or form new synaptic pathways after embryonic development"
    ],
    correct: 1,
    trivia: "Camillo Golgi had championed the reticular theory, believing the brain was a single continuous physical meshwork. Cajal modified Golgi's silver nitrate staining method (which stained only 1% of brain cells, making individual cells visible) and produced thousands of hand-drawn histological illustrations of brain tissue.\n\nCajal observed that the tips of axons and dendrites did not physically fuse; rather, each neuron remained an anatomically independent cellular unit that passed signals across microscopic gaps (later named synapses by Charles Sherrington), establishing the foundation of modern neuroscience."
  },

  // --- ANCIENT ECONOMIES, LAW & MARITIME TRADE ---
  {
    id: "MC_089",
    region: "Middle East",
    category: "Ancient Law & Economics",
    difficulty: "Beginner",
    question: "Carved onto a 2.25-meter black diorite stele around 1754 BCE, what famous legal concept is embodied in the Code of Hammurabi?",
    options: [
      "The presumption of innocence until guilt is established by mathematical certainty",
      "Lex talionis—the law of retaliatory justice ('an eye for an eye, a tooth for a tooth')",
      "The complete abolition of all private debts every seven years through royal pardon",
      "Trial by combat between accused citizens before city elders"
    ],
    correct: 1,
    trivia: "Commissioned by Hammurabi, the sixth Amorite king of Babylon, the basalt monument stands as one of the oldest deciphered legal codes in human history, containing 282 edicts regulating trade, wages, property, marital rights, and surgical malpractice.\n\nWhile famous for proportional retribution (lex talionis), the code was socially stratified: penalties for injuring a noble citizen were far more severe than injuring a commoner or enslaved person. However, it also pioneered early consumer protection, mandating that if a builder constructed a house that collapsed and killed the owner, the builder was put to death."
  },
  {
    id: "MC_090",
    region: "East Asia",
    category: "Economic History",
    difficulty: "Intermediate",
    question: "During the 11th century Song Dynasty in China, what financial breakthrough emerged that transformed global economic systems?",
    options: [
      "The world's first government-issued fiat paper currency (Jiaozi)",
      "The establishment of decentralized joint-stock maritime insurance corporations",
      "The replacement of copper coinage with standardized silver bullion bars",
      "The introduction of compound interest loans issued by Buddhist monasteries"
    ],
    correct: 0,
    trivia: "As trade exploded along the Grand Canal and Silk Road, merchants found transport of stringed copper coins (which weighed dozens of pounds for ordinary wholesale transactions) cumbersome and dangerous. Merchants in Sichuan originally issued private deposit receipts on Mulberry bark paper called Jiaozi.\n\nRecognizing its economic power, the Song government nationalized the system in 1024 CE, producing state-backed paper currency with official seals, anti-counterfeiting ink designs, and fixed redemption values—introducing paper banknotes centuries before European banking families adopted them in Sweden and Italy."
  },
  {
    id: "MC_091",
    region: "Africa",
    category: "Numismatics & Global Trade",
    difficulty: "Intermediate",
    question: "During the 11th to 14th centuries, what small marine shell harvested in the Indian Ocean served as a universal, non-counterfeitable currency across West Africa?",
    options: [
      "Abalone shells",
      "Cowrie shells (Monetaria moneta)",
      "Nautilus shells",
      "Conch shells"
    ],
    correct: 1,
    trivia: "Harvested primarily in the warm waters around the Maldive Islands in the Indian Ocean, cowrie shells were transported by Arab dhows to North Africa and carried across the Sahara by camel caravans into the empires of Ghana, Mali, and Songhai. Because they could not be forged, were uniform in size and weight, and were impossible to gather locally in inland Africa, they functioned as an ideal small-denomination currency.\n\nCowries were used for daily marketplace transactions—purchasing grain, livestock, pottery, and textiles—and became symbols of fertility, wealth, and spiritual power across West African cultural regalia."
  },
  {
    id: "MC_092",
    region: "Southeast Asia",
    category: "Maritime Navigation & Shipbuilding",
    difficulty: "Intermediate",
    question: "Dating back to 320 CE in Mindanao, the Balangay boats of Butuan were constructed using what advanced indigenous Southeast Asian shipbuilding method?",
    options: [
      "Hollowing out single gigantic mahogany logs without internal frames",
      "Edge-pegging wooden planks using hardwood dowels and fiber lashing without a single iron nail",
      "Steam-bending birch bark over flexible whalebone rib cages",
      "Riveting overlap clinker iron plates sealed with volcanic pitch"
    ],
    correct: 1,
    trivia: "Excavated near Butuan City, these large wooden voyaging vessels (up to 15 meters long) demonstrated the sophisticated maritime technology of Austronesian boatbuilders. Planks were carved with protruding raised lugs on their inner faces and joined edge-to-edge using wooden dowels carved from resilient hardwood.\n\nPlanks were then bound tightly to internal ribs using flexible sugar-palm fibers (gomuti) and caulked with natural resins. This edge-pegged, lashed-lug construction gave the hull extraordinary flexibility in heavy ocean swells, allowing Butuan traders to sail directly to Song Dynasty China and Champa without metal fasteners."
  }
];
