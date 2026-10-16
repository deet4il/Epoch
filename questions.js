const QUESTIONS_DB = [
  // --- SOUTHEAST ASIA ---
  {
    id: "SEA_001",
    title: "Laguna Copperplate Inscription Issued in Early Kawi Script",
    category: "Law & Civilization",
    region: "Southeast Asia",
    value: 900,
    displayValue: "900 CE",
    clue: "Earliest known written legal document found in Luzon, recording debt clearance in gold."
  },
  {
    id: "SEA_002",
    title: "Borobudur Buddhist Monument Completed in Central Java",
    category: "Architecture",
    region: "Southeast Asia",
    value: 825,
    displayValue: "c. 825 CE",
    clue: "Sailendra dynasty constructs the world's largest Buddhist temple with over 2,600 relief panels."
  },
  {
    id: "SEA_003",
    title: "Angkor Wat Built by Suryavarman II",
    category: "Architecture & Hydrology",
    region: "Southeast Asia",
    value: 1113,
    displayValue: "c. 1113 CE",
    clue: "Monumental stone temple mountain surrounded by an expansive hydraulic reservoir network."
  },
  {
    id: "SEA_004",
    title: "Manunggul Burial Jar Crafted in Palawan",
    category: "Ceramics & Art",
    region: "Southeast Asia",
    value: -890,
    displayValue: "c. 890 BCE",
    clue: "Neolithic vessel featuring two spirit boatmen navigating the passage to the afterlife."
  },
  {
    id: "SEA_005",
    title: "Battle of Bach Dang River Traps the Yuan Fleet with Iron-Tipped Stakes",
    category: "Military History",
    region: "Southeast Asia",
    value: 1288,
    displayValue: "1288 CE",
    clue: "General Tran Hung Dao repels the Mongol invasion of Dai Viet using tidal hydrology."
  },

  // --- SUB-SAHARAN & NORTH AFRICA ---
  {
    id: "AFR_001",
    title: "Mansa Musa Embarks on Pilgrimage Distributing Gold in Cairo",
    category: "Economy & Empires",
    region: "West Africa",
    value: 1324,
    displayValue: "1324 CE",
    clue: "The Mali Empire's ruler travels to Mecca, causing long-lasting gold devaluation in the Mediterranean."
  },
  {
    id: "AFR_002",
    title: "Kingdom of Aksum Mints Bimetallic Currency and Erects Monolithic Stelae",
    category: "Trade & Architecture",
    region: "Horn of Africa",
    value: 330,
    displayValue: "c. 330 CE",
    clue: "King Ezana unifies the Red Sea trade crossroads and mints trilingual coinage."
  },
  {
    id: "AFR_003",
    title: "Great Zimbabwe Great Enclosure Dry-Stone Walls Constructed",
    category: "Architecture",
    region: "Southern Africa",
    value: 1200,
    displayValue: "c. 1200 CE",
    clue: "Shona masons fit curved granite masonry up to 11 meters high without mortar."
  },
  {
    id: "AFR_004",
    title: "Igbo-Ukwu Bronze Casters Pioneer High-Detail Lead-Bronze Regalia",
    category: "Metallurgy",
    region: "West Africa",
    value: 850,
    displayValue: "c. 850 CE",
    clue: "Excavations in southeastern Nigeria reveal intricate lost-wax bronzes intertwined with beetles and cords."
  },
  {
    id: "AFR_005",
    title: "Al-Qarawiyyin University Founded by Fatima al-Fihri in Fez",
    category: "Education",
    region: "North Africa",
    value: 859,
    displayValue: "859 CE",
    clue: "UNESCO-recognized oldest continually operating degree-granting higher education institution."
  },

  // --- SOUTH & CENTRAL ASIA ---
  {
    id: "SAS_001",
    title: "Panini Formalizes Sanskrit Grammar (Ashtadhyayi)",
    category: "Linguistics & Logic",
    region: "South Asia",
    value: -400,
    displayValue: "c. 4th Cent. BCE",
    clue: "Generative rule framework of 3,959 algebraic sutras describing morphology and phonetics."
  },
  {
    id: "SAS_002",
    title: "Bakhshali Manuscript Uses Dot for Zero as Place Value",
    category: "Mathematics",
    region: "South Asia",
    value: 300,
    displayValue: "c. 300 CE",
    clue: "Birch bark mathematical manuscript recording earliest formal arithmetic place-value zero."
  },
  {
    id: "SAS_003",
    title: "Madhava of Sangamagrama Discovers Infinite Series for Pi and Trig",
    category: "Mathematics",
    region: "South Asia",
    value: 1380,
    displayValue: "c. 1380 CE",
    clue: "Kerala school establishes mathematical power series centuries before European calculus."
  },
  {
    id: "SAS_004",
    title: "Ulugh Beg Builds Samarkand Observatory and Compiles Zij-i Sultani",
    category: "Astronomy",
    region: "Central Asia",
    value: 1428,
    displayValue: "1428 CE",
    clue: "A massive 30-meter radius stone quadrant maps naked-eye celestial coordinates with unmatched precision."
  },

  // --- EAST ASIA ---
  {
    id: "EAS_001",
    title: "Zhang Heng Invents the First Directional Seismoscope",
    category: "Inventions & Science",
    region: "East Asia",
    value: 132,
    displayValue: "132 CE",
    clue: "Pendulum vessel dropping bronze balls from dragon mouths to indicate seismic direction."
  },
  {
    id: "EAS_002",
    title: "Jikji Printed with Movable Metal Type in Goryeo Korea",
    category: "Printing & Culture",
    region: "East Asia",
    value: 1377,
    displayValue: "1377 CE",
    clue: "Oldest extant book printed using cast metal types, preceding Gutenberg."
  },
  {
    id: "EAS_003",
    title: "King Sejong Promulgates the Hangul Alphabet in Hunminjeongeum",
    category: "Linguistics & Society",
    region: "East Asia",
    value: 1446,
    displayValue: "1446 CE",
    clue: "Scientific featural script engineered to make reading and writing universally accessible."
  },

  // --- THE AMERICAS ---
  {
    id: "AME_001",
    title: "Caral-Supe Sacred City and Monumental Sunken Plazas Built",
    category: "Civilization & Cities",
    region: "South America",
    value: -3000,
    displayValue: "c. 3000 BCE",
    clue: "Oldest known urban center in the Americas, flourishing in Peru without ceramics or fortifications."
  },
  {
    id: "AME_002",
    title: "Maya Astronomers Formulate the Long Count Calendar and Vigesimal Zero",
    category: "Astronomy & Math",
    region: "Mesoamerica",
    value: -36,
    displayValue: "36 BCE",
    clue: "Base-20 numerical system using shell glyphs to track cosmic cycles over millennia."
  },
  {
    id: "AME_003",
    title: "Haudenosaunee Confederacy Formed Under the Great Law of Peace",
    category: "Governance & Law",
    region: "North America",
    value: 1451,
    displayValue: "c. 1451 CE",
    clue: "Five nations unite under a participatory democratic constitution symbolized by the Tree of Peace."
  },
  {
    id: "AME_004",
    title: "Inca Empire Expands the Qhapaq Ñan Road Across 40,000 Kilometers",
    category: "Infrastructure",
    region: "South America",
    value: 1438,
    displayValue: "c. 1438 CE",
    clue: "Alpine highway network utilizing suspension bridges and chasqui relay couriers."
  },

  // --- OCEANIA & PACIFIC ---
  {
    id: "OCE_001",
    title: "Budj Bim Volcanic Stone Eel Aquaculture Canals Engineered",
    category: "Hydrology & Agriculture",
    region: "Oceania",
    value: -4600,
    displayValue: "c. 4600 BCE",
    clue: "Gunditjmara channels and holding weirs create one of humanity's earliest aquaculture systems."
  },
  {
    id: "OCE_002",
    title: "Nan Madol Megalithic City Built on Pohnpei Coral Reefs",
    category: "Architecture",
    region: "Oceania",
    value: 1200,
    displayValue: "c. 1200 CE",
    clue: "Artificial islets constructed using monumental prism-shaped columnar basalt boulders."
  },
  {
    id: "OCE_003",
    title: "Polynesian Voyaging Canals Settle Aotearoa Becoming the Māori",
    category: "Maritime Migration",
    region: "Oceania",
    value: 1280,
    displayValue: "c. 1280 CE",
    clue: "Open ocean double-hulled waka navigate by swell patterns and celestial coordinates."
  },

  // --- MIDDLE EAST & WEST ASIA ---
  {
    id: "MEA_001",
    title: "Ibn al-Haytham Publishes the Book of Optics (Kitab al-Manazir)",
    category: "Physics & Science",
    region: "Middle East",
    value: 1021,
    displayValue: "1021 CE",
    clue: "Introduces experimental optics, refuting emission theory and proving sight is light entering the pupil."
  },
  {
    id: "MEA_002",
    title: "Al-Jazari Publishes The Book of Knowledge of Ingenious Mechanical Devices",
    category: "Robotics & Mechanics",
    region: "Middle East",
    value: 1206,
    displayValue: "1206 CE",
    clue: "Designs early crankshafts, automated humanoid drink servers, and the elephant water clock."
  },

  // --- GLOBAL SCIENCE & NATURAL MILESTONES ---
  {
    id: "SCI_001",
    title: "Cambrian Explosion Diversifies Bilaterian Animal Phyla",
    category: "Paleontology",
    region: "Global Science",
    value: -538800000,
    displayValue: "538.8 Million BCE",
    clue: "Marine fossil record documents the rapid evolutionary radiation of complex multicellular body plans."
  },
  {
    id: "SCI_002",
    title: "Chicxulub Asteroid Impact Drives Non-Avian Dinosaurs to Extinction",
    category: "Geology & Astronomy",
    region: "Global Science",
    value: -66000000,
    displayValue: "66 Million BCE",
    clue: "A 10-kilometer asteroid impacts Yucatán, creating an impact winter and ending the Mesozoic Era."
  },
  {
    id: "SCI_003",
    title: "Event Horizon Telescope Captures First Direct Image of a Supermassive Black Hole",
    category: "Astrophysics",
    region: "Global Science",
    value: 2019,
    displayValue: "2019 CE",
    clue: "Synchronized global radio telescope arrays reconstruct the photon silhouette of M87*."
  }
];
