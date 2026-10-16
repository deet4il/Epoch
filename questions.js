const QUESTIONS_DB = [
  // --- SOUTHEAST ASIA ---
  {
    id: "SEA_001",
    title: "Laguna Copperplate Inscription Issued in Early Kawi Script",
    category: "Law & Civilization",
    region: "Southeast Asia",
    value: 900,
    displayValue: "900 CE",
    clue: "Earliest known written legal document found in Luzon, recording complete debt clearance."
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
    title: "Construction of Angkor Wat under Suryavarman II",
    category: "Architecture & Hydrology",
    region: "Southeast Asia",
    value: 1113,
    displayValue: "c. 1113 CE",
    clue: "Monumental stone temple mountain surrounded by an expansive hydraulic reservoir network."
  },
  {
    id: "SEA_004",
    title: "Manunggul Burial Jar Crafted in Tabon Caves, Palawan",
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
    clue: "The Mali Empire's ruler travels to Mecca, causing decade-long currency inflation in Egypt."
  },
  {
    id: "AFR_002",
    title: "Kingdom of Aksum Mints Bimetallic Coinage and Erects Stelae",
    category: "Trade & Architecture",
    region: "Horn of Africa",
    value: 330,
    displayValue: "c. 330 CE",
    clue: "King Ezana unifies the Red Sea trade crossroads and mints trilingual currency."
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
    clue: "Excavations in Nigeria reveal intricate lost-wax bronzes intertwined with beetles and cords."
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
    clue: "Oldest known urban center in the Americas, flourishing in Peru without defensive fortifications."
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
    title: "Polynesian Voyagers Settle Aotearoa Becoming the Māori",
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
    clue: "Introduces experimental optics, refuting emission theory and proving vision is intromission."
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
  },
  const QUESTIONS_DB = [
  // ==========================================
  // 1. SOUTHEAST ASIA & AUSTRONESIA
  // ==========================================
  {
    id: "SEA_001",
    title: "Laguna Copperplate Inscription Issued in Early Kawi Script",
    category: "Law & Civilization",
    region: "Southeast Asia",
    value: 900,
    displayValue: "900 CE",
    clue: "Earliest known written legal document found in Luzon, recording complete debt clearance."
  },
  {
    id: "SEA_002",
    title: "Sailendra Dynasty Completes Borobudur Stupa in Java",
    category: "Architecture & Religion",
    region: "Southeast Asia",
    value: 825,
    displayValue: "c. 825 CE",
    clue: "Over 500 Buddha statues and 2,600 bas-reliefs carved in volcanic andesite stone."
  },
  {
    id: "SEA_003",
    title: "Construction Commences on Angkor Wat under Suryavarman II",
    category: "Architecture & Hydrology",
    region: "Southeast Asia",
    value: 1113,
    displayValue: "c. 1113 CE",
    clue: "Monumental stone temple mountain surrounded by an expansive hydraulic reservoir network."
  },
  {
    id: "SEA_004",
    title: "Manunggul Burial Jar Crafted in Tabon Caves, Palawan",
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
  {
    id: "SEA_006",
    title: "Dong Son Bronze Kettle Drums Cast in Northern Vietnam",
    category: "Metallurgy & Art",
    region: "Southeast Asia",
    value: -500,
    displayValue: "c. 500 BCE",
    clue: "Elaborate lost-wax bronze drums depicting warriors, hornbills, and stilt houses."
  },
  {
    id: "SEA_007",
    title: "Banaue Rice Terraces Carved by Ifugao Engineers",
    category: "Agriculture & Hydrology",
    region: "Southeast Asia",
    value: 100,
    displayValue: "c. 100 CE",
    clue: "Stone-walled hillside irrigation networks channeling mountain springs across peaks."
  },
  {
    id: "SEA_008",
    title: "Kedukan Bukit Inscription Proclaims Srivijaya's Foundation",
    category: "Maritime Empires",
    region: "Southeast Asia",
    value: 683,
    displayValue: "683 CE",
    clue: "Dapunta Hyang leads 20,000 troops by boat to establish a naval trading empire in Sumatra."
  },
  {
    id: "SEA_009",
    title: "Prambanan Hindu Complex Dedicated to the Trimurti in Yogyakarta",
    category: "Architecture",
    region: "Southeast Asia",
    value: 856,
    displayValue: "c. 856 CE",
    clue: "Towering stone shikhara dedicated to Shiva, Brahma, and Vishnu in Central Java."
  },
  {
    id: "SEA_010",
    title: "King Anawrahta Unifies Myanmar into the Pagan Empire",
    category: "Kingdoms & Religion",
    region: "Southeast Asia",
    value: 1044,
    displayValue: "1044 CE",
    clue: "Theravada Buddhism adopted as royal religion across the dry central plains."
  },
  {
    id: "SEA_011",
    title: "Gajah Mada Pronounces the Palapa Oath in Majapahit",
    category: "Governance & History",
    region: "Southeast Asia",
    value: 1336,
    displayValue: "1336 CE",
    clue: "Majapahit Prime Minister vows not to consume spice luxuries until Nusantara is united."
  },
  {
    id: "SEA_012",
    title: "Parameswara Founds the Port Sultanate of Malacca",
    category: "Trade & Maritime",
    region: "Southeast Asia",
    value: 1400,
    displayValue: "c. 1400 CE",
    clue: "Strategic choke-point city-state linking Chinese, Indian, and Arab spice trade."
  },
  {
    id: "SEA_013",
    title: "King Ram Khamhaeng Devises the Thai Script",
    category: "Linguistics",
    region: "Southeast Asia",
    value: 1292,
    displayValue: "c. 1292 CE",
    clue: "Adapts Old Khmer script to capture tonal inflections of the Tai language."
  },
  {
    id: "SEA_014",
    title: "Battle of Mactan Halts Initial Spanish Colonization",
    category: "Resistance & Sovereignty",
    region: "Southeast Asia",
    value: 1521,
    displayValue: "1521 CE",
    clue: "Chieftain Lapulapu leads coastal warriors in shallow water skirmish, defeating Magellan."
  },
  {
    id: "SEA_015",
    title: "Butuan Balangay Plank Boats Radiocarbon Dated in Mindanao",
    category: "Maritime Tech",
    region: "Southeast Asia",
    value: 320,
    displayValue: "c. 320 CE",
    clue: "Edge-pegged lashed-lug wooden voyaging craft built without metal nails."
  },

  // ==========================================
  // 2. SUB-SAHARAN & NORTH AFRICA
  // ==========================================
  {
    id: "AFR_001",
    title: "Mansa Musa Embarks on Trans-Saharan Pilgrimage with Gold Entourage",
    category: "Economy & Empires",
    region: "West Africa",
    value: 1324,
    displayValue: "1324 CE",
    clue: "The Mali Empire's ruler travels to Mecca, causing long-lasting gold devaluation in Egypt."
  },
  {
    id: "AFR_002",
    title: "Kingdom of Aksum Mints Bimetallic Currency and Erects Monolithic Stelae",
    category: "Trade & Architecture",
    region: "Horn of Africa",
    value: 330,
    displayValue: "c. 330 CE",
    clue: "King Ezana unifies the Red Sea trade crossroads and mints trilingual currency."
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
    category: "Metallurgy & Art",
    region: "West Africa",
    value: 850,
    displayValue: "c. 850 CE",
    clue: "Excavations in Nigeria reveal intricate lost-wax bronzes intertwined with beetles and cords."
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
  {
    id: "AFR_006",
    title: "Rock-Hewn Monolithic Churches of Lalibela Chiseled from Volcanic Tuff",
    category: "Architecture & Religion",
    region: "Horn of Africa",
    value: 1200,
    displayValue: "c. 1200 CE",
    clue: "Zagwe dynasty carves Bete Giyorgis and ten subterranean cruciform sanctuaries."
  },
  {
    id: "AFR_007",
    title: "Piye Marches North from Napata to Establish 25th Nubian Dynasty",
    category: "Empires & Warfare",
    region: "Nubia",
    value: -747,
    displayValue: "c. 747 BCE",
    clue: "Kushite king conquers Thebes and Memphis, reviving classical Nile temple rites."
  },
  {
    id: "AFR_008",
    title: "Nok Culture Produces Terracotta Sculptures and Smelts Iron",
    category: "Art & Metallurgy",
    region: "West Africa",
    value: -500,
    displayValue: "c. 500 BCE",
    clue: "Central Nigeria artisans pioneer hollow terracotta firing alongside iron bloomery smelting."
  },
  {
    id: "AFR_009",
    title: "Benin Kingdom Bronze Guilds Cast Commemorative Oba Plaques",
    category: "Metallurgy & History",
    region: "West Africa",
    value: 1450,
    displayValue: "c. 1450 CE",
    clue: "Edo guild of casters records royal genealogies and treaties on brass relief plaques."
  },
  {
    id: "AFR_010",
    title: "University of Sankore in Timbuktu Houses Hundreds of Thousands of Manuscripts",
    category: "Education & Literature",
    region: "West Africa",
    value: 1300,
    displayValue: "c. 1300 CE",
    clue: "Mosque madrasa becomes an international center for mathematics, astronomy, and jurisprudence."
  },
  {
    id: "AFR_011",
    title: "Kouroukan Fouga Constitution Proclaimed by Mali Empire",
    category: "Law & Human Rights",
    region: "West Africa",
    value: 1236,
    displayValue: "1236 CE",
    clue: "Oral charter establishing civic peace, craft guild rights, and women's legal protections."
  },
  {
    id: "AFR_012",
    title: "Mapungubwe Kingdom Crafts Golden Rhinoceros and Stone Terraces",
    category: "Gold & Trade",
    region: "Southern Africa",
    value: 1220,
    displayValue: "c. 1220 CE",
    clue: "First class-stratified southern African kingdom trading gold and ivory for Indian glass beads."
  },
  {
    id: "AFR_013",
    title: "Kingdom of Dahomey Establishes All-Female Mino Military Unit",
    category: "Military & Society",
    region: "West Africa",
    value: 1708,
    displayValue: "c. 1708 CE",
    clue: "King Agaja formalizes royal women's regiments renowned for discipline and combat."
  },
  {
    id: "AFR_014",
    title: "Ibn Battuta Completes The Rihla Chronicling 73,000 Miles of Global Travel",
    category: "Geography & Literature",
    region: "North Africa",
    value: 1354,
    displayValue: "1354 CE",
    clue: "Moroccan scholar dictates accounts of travels across Africa, Asia, and the Middle East."
  },
  {
    id: "AFR_015",
    title: "Battle of Adwa Halts European Colonial Invasion of Ethiopia",
    category: "Sovereignty & Warfare",
    region: "Horn of Africa",
    value: 1896,
    displayValue: "1896 CE",
    clue: "Emperor Menelik II and Empress Taytu defeat Italian forces, preserving sovereignty."
  },

  // ==========================================
  // 3. THE AMERICAS (INDIGENOUS & PRE-COLUMBIAN)
  // ==========================================
  {
    id: "AME_001",
    title: "Caral-Supe Builds Sacred City and Monumental Sunken Plazas",
    category: "Civilization & Cities",
    region: "South America",
    value: -3000,
    displayValue: "c. 3000 BCE",
    clue: "Oldest known urban center in the Americas, flourishing in Peru without defensive fortifications."
  },
  {
    id: "AME_002",
    title: "Olmec Sculpt Monumental Basalt Colossal Heads at San Lorenzo",
    category: "Sculpture & Art",
    region: "Mesoamerica",
    value: -1200,
    displayValue: "c. 1200 BCE",
    clue: "Transporting 20-ton volcanic boulders without draft animals to carve ruler portraits."
  },
  {
    id: "AME_003",
    title: "Maya Astronomers Formulate Long Count Calendar and Positional Zero",
    category: "Astronomy & Math",
    region: "Mesoamerica",
    value: -36,
    displayValue: "36 BCE",
    clue: "Base-20 numerical system using shell glyphs to track cosmic cycles over millennia."
  },
  {
    id: "AME_004",
    title: "Teotihuacan Constructs Pyramid of the Sun and Avenue of the Dead",
    category: "Urban Planning",
    region: "Mesoamerica",
    value: 100,
    displayValue: "c. 100 CE",
    clue: "Planned grid metropolis with apartment compounds hosting multi-ethnic populations."
  },
  {
    id: "AME_005",
    title: "Tiwanaku Engineers Suka Kollu Raised-Field Agricultural Frost-Shield Canals",
    category: "Agriculture & Hydrology",
    region: "South America",
    value: 650,
    displayValue: "c. 650 CE",
    clue: "Thermal mass of water canals warms ambient night air, preventing crop frost freeze."
  },
  {
    id: "AME_006",
    title: "Nazca Culture Scrapes Giant Zoomorphic Geoglyphs into Arid Pampa",
    category: "Earthworks & Art",
    region: "South America",
    value: 200,
    displayValue: "c. 200 CE",
    clue: "Hummingbird, monkey, and spiral geoglyphs etched by removing reddish desert surface varnish."
  },
  {
    id: "AME_007",
    title: "Moche Lord of Sipán Buried with Master Gold and Turquoise Regalia",
    category: "Metallurgy & Art",
    region: "South America",
    value: 250,
    displayValue: "c. 250 CE",
    clue: "Elite burial chamber revealing electrochemical depletion gilding and copper-gold tumbaga alloys."
  },
  {
    id: "AME_008",
    title: "Cahokia Constructs Monks Mound as Center of Mississippian Metropolis",
    category: "Urban Planning",
    region: "North America",
    value: 1050,
    displayValue: "c. 1050 CE",
    clue: "100-foot tall earthen pyramid commanding Mississippi valley trade in copper and shells."
  },
  {
    id: "AME_009",
    title: "Ancestral Puebloans Build Multi-Story Cliff Palace at Mesa Verde",
    category: "Architecture",
    region: "North America",
    value: 1190,
    displayValue: "c. 1190 CE",
    clue: "Masonry apartment rooms and ceremonial kivas sheltered beneath canyon alcoves."
  },
  {
    id: "AME_010",
    title: "Mexica (Aztecs) Found Tenochtitlan on Lake Texcoco Marshland",
    category: "Cities & Engineering",
    region: "Mesoamerica",
    value: 1325,
    displayValue: "1325 CE",
    clue: "Builds chinampa floating gardens, dikes separating saltwater, and masonry causeways."
  },
  {
    id: "AME_011",
    title: "Machu Picchu Mountain Estate Built with Seismic-Resistant Dry Masonry",
    category: "Architecture & Engineering",
    region: "South America",
    value: 1450,
    displayValue: "c. 1450 CE",
    clue: "Polygonal andesite stones fitted together so tightly that a knife blade cannot enter."
  },
  {
    id: "AME_012",
    title: "Qhapaq Ñan Imperial Inca Road Network Spans 40,000 Kilometers",
    category: "Infrastructure",
    region: "South America",
    value: 1438,
    displayValue: "c. 1438 CE",
    clue: "Mountain highways across modern Colombia to Chile with rope suspension bridges and chasquis."
  },
  {
    id: "AME_013",
    title: "Haudenosaunee (Iroquois) Confederacy Formed Under Great Law of Peace",
    category: "Governance & Law",
    region: "North America",
    value: 1451,
    displayValue: "c. 1451 CE",
    clue: "Five nations unite under a participatory democratic constitution symbolized by the Tree of Peace."
  },
  {
    id: "AME_014",
    title: "Chavín de Huántar Engineers Subterranean Hydraulic Acoustic Chambers",
    category: "Architecture & Acoustics",
    region: "South America",
    value: -900,
    displayValue: "c. 900 BCE",
    clue: "Ceremonial temple uses channeled water flow to create roaring soundscapes mimicking jaguars."
  },

  // ==========================================
  // 4. SOUTH & CENTRAL ASIA
  // ==========================================
  {
    id: "SAS_001",
    title: "Indus Valley Urban Grid Cities Flourish at Mohenjo-daro and Harappa",
    category: "Urban Planning",
    region: "South Asia",
    value: -2600,
    displayValue: "c. 2600 BCE",
    clue: "Standardized kiln-fired bricks, covered drainage networks, and private bathing courtyards."
  },
  {
    id: "SAS_002",
    title: "Panini Formalizes Sanskrit Grammar in the Ashtadhyayi",
    category: "Linguistics & Logic",
    region: "South Asia",
    value: -400,
    displayValue: "c. 4th Cent. BCE",
    clue: "Generative rule framework of 3,959 algebraic sutras anticipating formal computer languages."
  },
  {
    id: "SAS_003",
    title: "Bakhshali Birch-Bark Manuscript Uses Positional Dot for Zero",
    category: "Mathematics",
    region: "South Asia",
    value: 300,
    displayValue: "c. 300 CE",
    clue: "Carbon-dated arithmetic manuscript showing the earliest formal recorded place-value dot zero."
  },
  {
    id: "SAS_004",
    title: "Aryabhata Writes Aryabhatiya on Heliocentrism and Pi Approximation",
    category: "Astronomy & Math",
    region: "South Asia",
    value: 499,
    displayValue: "499 CE",
    clue: "Approximates pi to 3.1416 and asserts Earth rotates daily on its axis casting shadows on the Moon."
  },
  {
    id: "SAS_005",
    title: "Brahmagupta Establishes Arithmetic Rules for Zero and Negatives",
    category: "Mathematics",
    region: "South Asia",
    value: 628,
    displayValue: "628 CE",
    clue: "Brahmasphutasiddhanta formalizes algebraic rules for positive numbers, negatives, and zero."
  },
  {
    id: "SAS_006",
    title: "Madhava of Sangamagrama Discovers Infinite Series for Pi and Trig",
    category: "Mathematics",
    region: "South Asia",
    value: 1380,
    displayValue: "c. 1380 CE",
    clue: "Kerala school establishes mathematical power series centuries before European calculus."
  },
  {
    id: "SAS_007",
    title: "Sushruta Compiles Comprehensive Surgical Compendium (Sushruta Samhita)",
    category: "Medicine",
    region: "South Asia",
    value: -600,
    displayValue: "c. 6th Cent. BCE",
    clue: "Detailed clinical manuals describing forehead skin flap rhinoplasty, cataracts, and 121 instruments."
  },
  {
    id: "SAS_008",
    title: "Wootz Crucible Steel Smelted in Southern India (Tamil Nadu)",
    category: "Metallurgy",
    region: "South Asia",
    value: -300,
    displayValue: "c. 300 BCE",
    clue: "High-carbon crucible steel technology pioneered in Tamil Nadu, later famous as Damascus steel."
  },
  {
    id: "SAS_009",
    title: "Emperor Ashoka Carves Edicts of Non-Violence and Tolerance on Pillars",
    category: "Governance & Ethics",
    region: "South Asia",
    value: -257,
    displayValue: "c. 257 BCE",
    clue: "Following Kalinga War, Ashoka renounces military conquest, promoting veterinary hospitals and peace."
  },
  {
    id: "SAS_010",
    title: "Nalanda University Established as International Residential Center",
    category: "Education & Scholarship",
    region: "South Asia",
    value: 427,
    displayValue: "c. 427 CE",
    clue: "Hosts 10,000 scholars from across Asia studying logic, philosophy, astronomy, and medicine."
  },
  {
    id: "SAS_011",
    title: "Brihadeeswarar Temple Built in Thanjavur by Rajaraja Chola I",
    category: "Architecture",
    region: "South Asia",
    value: 1010,
    displayValue: "1010 CE",
    clue: "Granite Dravidian temple capped with an 80-tonne monolithic stone dome raised via earth ramp."
  },
  {
    id: "SAS_012",
    title: "Ulugh Beg Builds Samarkand Observatory and Compiles Zij-i Sultani",
    category: "Astronomy",
    region: "Central Asia",
    value: 1428,
    displayValue: "1428 CE",
    clue: "A massive 30-meter radius stone quadrant maps naked-eye celestial coordinates with unmatched precision."
  },

  // ==========================================
  // 5. EAST ASIA
  // ==========================================
  {
    id: "EAS_001",
    title: "Oracle Bone Inscriptions at Anyang Record Shang Dynastic Inquiries",
    category: "Writing & Epigraphy",
    region: "East Asia",
    value: -1250,
    displayValue: "c. 1250 BCE",
    clue: "Ox scapulae and turtle plastrons pyromantically heated to consult ancestral spirits."
  },
  {
    id: "EAS_002",
    title: "Cai Lun Standardizes Papermaking Using Plant Bast Fibers",
    category: "Inventions & Tech",
    region: "East Asia",
    value: 105,
    displayValue: "105 CE",
    clue: "Pioneers mass paper manufacturing utilizing mulberry bark, hemp, old rags, and worn fishnets."
  },
  {
    id: "EAS_003",
    title: "Zhang Heng Devises the First Directional Dragon-Frog Seismoscope",
    category: "Science & Inventions",
    region: "East Asia",
    value: 132,
    displayValue: "132 CE",
    clue: "Inverted bronze pendulum drops balls into toad mouths to register distant seismic tremors."
  },
  {
    id: "EAS_004",
    title: "Gunpowder Weapons Documented with Chemical Formula in Wujing Zongyao",
    category: "Military Tech & Chemistry",
    region: "East Asia",
    value: 1044,
    displayValue: "1044 CE",
    clue: "Song military encyclopedia records precise saltpeter, sulfur, and charcoal incendiary proportions."
  },
  {
    id: "EAS_005",
    title: "Bi Sheng Invents Movable Clay Type Printing System",
    category: "Printing",
    region: "East Asia",
    value: 1040,
    displayValue: "c. 1040 CE",
    clue: "Ceramic baked characters set in pine resin matrix on iron plate for interchangeable printing."
  },
  {
    id: "EAS_006",
    title: "Su Song Builds 12-Meter Astronomical Water-Clock Tower in Kaifeng",
    category: "Engineering & Horology",
    region: "East Asia",
    value: 1092,
    displayValue: "1092 CE",
    clue: "Combines escapement mechanism, armillary sphere, and celestial globe driven by waterwheel."
  },
  {
    id: "EAS_007",
    title: "Grand Canal of China Linked Under Emperor Yang of Sui",
    category: "Infrastructure",
    region: "East Asia",
    value: 605,
    displayValue: "605 CE",
    clue: "World's longest man-made waterway uniting grain transport between Yellow and Yangtze rivers."
  },
  {
    id: "EAS_008",
    title: "Jikji Printed with Cast Movable Metal Type in Goryeo Korea",
    category: "Printing & Culture",
    region: "East Asia",
    value: 1377,
    displayValue: "1377 CE",
    clue: "Oldest extant book printed with movable metal type, preceding the Gutenberg Bible."
  },
  {
    id: "EAS_009",
    title: "King Sejong Promulgates Hangul Alphabet in Hunminjeongeum",
    category: "Linguistics & Society",
    region: "East Asia",
    value: 1446,
    displayValue: "1446 CE",
    clue: "Scientific featural script engineered to make reading and writing universally accessible."
  },
  {
    id: "EAS_010",
    title: "Yi Sun-sin Deploys Ironclad Geobukseon (Turtle Ships) at Hansan Island",
    category: "Naval Warfare",
    region: "East Asia",
    value: 1592,
    displayValue: "1592 CE",
    clue: "Spiked metal roof shields crews from boarding during the Japanese Imjin invasions."
  },
  {
    id: "EAS_011",
    title: "Murasaki Shikibu Writes The Tale of Genji in Heian Japan",
    category: "Literature",
    region: "East Asia",
    value: 1008,
    displayValue: "c. 1008 CE",
    clue: "Widely recognized as the world's first psychological novel exploring courtly aesthetics."
  },
  {
    id: "EAS_012",
    title: "Zheng He Commences Indian Ocean Treasure Fleet Voyages",
    category: "Maritime Exploration",
    region: "East Asia",
    value: 1405,
    displayValue: "1405 CE",
    clue: "Massive nine-masted treasure ships sail to Southeast Asia, India, Hormuz, and East Africa."
  },

  // ==========================================
  // 6. MIDDLE EAST & WEST ASIA
  // ==========================================
  {
    id: "MEA_001",
    title: "Göbekli Tepe T-Shaped Megalithic Enclosures Carved in Anatolia",
    category: "Archaeology",
    region: "Middle East",
    value: -9500,
    displayValue: "c. 9500 BCE",
    clue: "Pre-pottery hunter-gatherers carve monumental limestone pillars with high reliefs of predators."
  },
  {
    id: "MEA_002",
    title: "Cuneiform Script Invented on Clay Tablets for Temple Accounting",
    category: "Writing & Language",
    region: "Middle East",
    value: -3200,
    displayValue: "c. 3200 BCE",
    clue: "World's earliest attested logo-syllabic writing system inscribed with reed styluses in Sumer."
  },
  {
    id: "MEA_003",
    title: "Code of Hammurabi Inscribed on 2.25-Meter Diorite Stele",
    category: "Law & Governance",
    region: "Middle East",
    value: -1754,
    displayValue: "c. 1754 BCE",
    clue: "282 edicts regulating commerce, surgical malpractice, tenancy, and criminal justice."
  },
  {
    id: "MEA_004",
    title: "Cyrus the Great Issues the Cyrus Cylinder Following Babylon's Capture",
    category: "Human Rights & Law",
    region: "Middle East",
    value: -539,
    displayValue: "539 BCE",
    clue: "Charter declaring freedom of worship, abolition of forced labor, and return of displaced deities."
  },
  {
    id: "MEA_005",
    title: "Qanat Underground Gravity Aqueducts Pioneered on Iranian Plateau",
    category: "Hydrology & Agriculture",
    region: "Middle East",
    value: -800,
    displayValue: "c. 800 BCE",
    clue: "Hand-dug gently sloping tunnels bringing mountain water to arid farms without evaporation."
  },
  {
    id: "MEA_006",
    title: "House of Wisdom (Bayt al-Hikma) Established in Abbasid Baghdad",
    category: "Scholarship & Science",
    region: "Middle East",
    value: 800,
    displayValue: "c. 800 CE",
    clue: "Scholars translate and expand philosophical, astronomical, and mathematical treatises from multiple languages."
  },
  {
    id: "MEA_007",
    title: "Al-Khwarizmi Publishes The Compendious Book on Calculation by Completion",
    category: "Mathematics",
    region: "Middle East",
    value: 820,
    displayValue: "c. 820 CE",
    clue: "Systematizes linear and quadratic equations, coining algebra (al-jabr) and algorithmic procedures."
  },
  {
    id: "MEA_008",
    title: "Ibn al-Haytham Publishes Book of Optics (Kitab al-Manazir)",
    category: "Physics & Optics",
    region: "Middle East",
    value: 1021,
    displayValue: "1021 CE",
    clue: "Formulates modern scientific method, proving light travels in straight rays into eye pupils."
  },
  {
    id: "MEA_009",
    title: "Al-Jazari Publishes The Book of Knowledge of Ingenious Mechanical Devices",
    category: "Robotics & Mechanics",
    region: "Middle East",
    value: 1206,
    displayValue: "1206 CE",
    clue: "Details crankshafts, connecting rods, camshafts, and programmable automated humanoid robots."
  },

  // ==========================================
  // 7. OCEANIA & PACIFIC
  // ==========================================
  {
    id: "OCE_001",
    title: "Budj Bim Ancient Eel Aquaculture Channels Engineered in Victoria",
    category: "Hydrology & Farming",
    region: "Oceania",
    value: -4600,
    displayValue: "c. 4600 BCE",
    clue: "Gunditjmara construct kilometers of basalt channels and woven traps to farm kooyang eels."
  },
  {
    id: "OCE_002",
    title: "Lapita Dentate-Stamped Pottery Expands Across Remote Oceania",
    category: "Ceramics & Navigation",
    region: "Oceania",
    value: -1350,
    displayValue: "c. 1350 BCE",
    clue: "Seafaring pioneers expand across Vanuatu, Fiji, and Samoa with decorated earthenware."
  },
  {
    id: "OCE_003",
    title: "Nan Madol Megalithic City Built on Pohnpei Barrier Coral Reefs",
    category: "Architecture",
    region: "Oceania",
    value: 1200,
    displayValue: "c. 1200 CE",
    clue: "Saudeleur dynasty constructs 92 artificial stone islets using hexagonal columnar basalt pillars."
  },
  {
    id: "OCE_004",
    title: "Polynesian Double-Hulled Canoes Settle Rapa Nui (Easter Island)",
    category: "Maritime Exploration",
    region: "Oceania",
    value: 1200,
    displayValue: "c. 1200 CE",
    clue: "Long-distance open ocean voyaging guided by bird migrations, swell diffraction, and stars."
  },
  {
    id: "OCE_005",
    title: "Rapa Nui Carvers Erect Monolithic Moai Ancestor Statues on Ahu Platforms",
    category: "Sculpture",
    region: "Oceania",
    value: 1250,
    displayValue: "c. 1250 CE",
    clue: "Quarried at Rano Raraku and 'walked' upright using three-rope rhythmic rocking physics."
  },
  {
    id: "OCE_006",
    title: "Polynesian Voyagers Settle Aotearoa (New Zealand) Becoming the Māori",
    category: "Maritime Migration",
    region: "Oceania",
    value: 1280,
    displayValue: "c. 1280 CE",
    clue: "Ocean-going waka fleets adapt tropical agricultural kumara methods to temperate climates."
  },
  {
    id: "OCE_007",
    title: "Ha'amonga 'a Maui Megalithic Trilithon Erected in Tonga",
    category: "Architecture & Astronomy",
    region: "Oceania",
    value: 1200,
    displayValue: "c. 1200 CE",
    clue: "Tu'i Tonga dynasty erects 40-tonne mortised coral limestone trilithon aligned to winter solstice."
  },

  // ==========================================
  // 8. GLOBAL NATURAL SCIENCE & DISCOVERIES
  // ==========================================
  {
    id: "SCI_001",
    title: "Oldest Zircon Crystal Formed in Jack Hills (Early Continental Crust)",
    category: "Geology",
    region: "Global Science",
    value: -4404000000,
    displayValue: "4.4 Billion BCE",
    clue: "Western Australian zircon indicates early liquid oceans and granite crust formation."
  },
  {
    id: "SCI_002",
    title: "Cambrian Explosion Diversifies Major Animal Body Plans",
    category: "Paleontology",
    region: "Global Science",
    value: -538800000,
    displayValue: "538.8 Million BCE",
    clue: "Trilobites, chordates, and arthropods appear in rich fossil beds worldwide."
  },
  {
    id: "SCI_003",
    title: "Tiktaalik Roseae Bridges Fin-to-Limb Transition for Tetrapods",
    category: "Paleontology",
    region: "Global Science",
    value: -375000000,
    displayValue: "375 Million BCE",
    clue: "Lobe-finned river fish develops flexible neck and wrist joints."
  },
  {
    id: "SCI_004",
    title: "Chicxulub Asteroid Impact Drives Non-Avian Dinosaurs to Extinction",
    category: "Astronomy & Extinction",
    region: "Global Science",
    value: -66000000,
    displayValue: "66 Million BCE",
    clue: "A 10-km bolide impacts Yucatán, blanketing the stratosphere in dust and cooling Earth."
  },
  {
    id: "SCI_005",
    title: "Antikythera Mechanism Geared Bronze Astronomical Computer Constructed",
    category: "Invention & Tech",
    region: "Mediterranean",
    value: -150,
    displayValue: "c. 150 BCE",
    clue: "30-gear differential bronze mechanism calculating lunar eclipses and planetary positions."
  },
  {
    id: "SCI_006",
    title: "Dmitri Mendeleev Constructs the Periodic Table of Chemical Elements",
    category: "Chemistry",
    region: "Global Science",
    value: 1869,
    displayValue: "1869 CE",
    clue: "Organizes elements by atomic weight, predicting undiscovered elements like gallium."
  },
  {
    id: "SCI_007",
    title: "Marie and Pierre Curie Discover Radioactive Radium and Polonium",
    category: "Nuclear Physics",
    region: "Global Science",
    value: 1898,
    displayValue: "1898 CE",
    clue: "Extracts highly radioactive elements from pitchblende, pioneering medical radiation treatments."
  },
  {
    id: "SCI_008",
    title: "Albert Einstein Publishes Special Relativity and E = mc²",
    category: "Theoretical Physics",
    region: "Global Science",
    value: 1905,
    displayValue: "1905 CE",
    clue: "Annus Mirabilis papers demonstrate that time and space are relative to the speed of light."
  },
  {
    id: "SCI_009",
    title: "Alexander Fleming Discovers Antibiotic Penicillin Mold",
    category: "Pharmacology & Medicine",
    region: "Global Science",
    value: 1928,
    displayValue: "1928 CE",
    clue: "Notices clear bacterial clearance halos around Penicillium notatum on culture plates."
  },
  {
    id: "SCI_010",
    title: "Apollo 11 Astronauts Walk on the Lunar Surface",
    category: "Space Exploration",
    region: "Global Science",
    value: 1969,
    displayValue: "1969 CE",
    clue: "Lunar module Eagle lands at Sea of Tranquility, returning 21 kilograms of lunar rock samples."
  },
  {
    id: "SCI_011",
    title: "LIGO Laser Interferometer Directly Detects Gravitational Waves",
    category: "Astrophysics",
    region: "Global Science",
    value: 2015,
    displayValue: "2015 CE",
    clue: "Registers spacetime distortions caused by the merger of two black holes 1.3 billion light-years away."
  },
  {
    id: "SCI_012",
    title: "Event Horizon Telescope Captures First Direct Image of Black Hole M87*",
    category: "Astrophysics",
    region: "Global Science",
    value: 2019,
    displayValue: "2019 CE",
    clue: "Planetary synchronized radio dish array resolves photon shadow ring around supermassive black hole."
  }
];
];
