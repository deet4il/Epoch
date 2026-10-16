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
  }
];
