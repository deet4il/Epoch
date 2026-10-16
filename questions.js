// Epoch: Global Timeline Question Bank
// Total Questions: 1000
// Created by DCA

const QUESTIONS_DB = [
  {
    "id": "EP_0001",
    "title": "Formation of the Moon via Theia Giant Impact",
    "category": "Astronomy",
    "region": "Deep Time",
    "value": -4510000000,
    "displayValue": "4.51 Billion BCE",
    "clue": "A Mars-sized protoplanet collides with early Earth, ejecting debris that forms the Moon."
  },
  {
    "id": "EP_0002",
    "title": "Oldest Zircon Crystal Formed in Jack Hills",
    "category": "Geology",
    "region": "Deep Time",
    "value": -4404000000,
    "displayValue": "4.4 Billion BCE",
    "clue": "Western Australian zircon indicates early liquid oceans and continental crust."
  },
  {
    "id": "EP_0003",
    "title": "Stromatolites in Pilbara Produce Earliest Photosynthesis Evidence",
    "category": "Paleobiology",
    "region": "Deep Time",
    "value": -3480000000,
    "displayValue": "3.48 Billion BCE",
    "clue": "Layered cyanobacterial microbial mats begin slowly releasing oxygen into ancient waters."
  },
  {
    "id": "EP_0004",
    "title": "Great Oxidation Event Saturates Earth's Oceans and Atmosphere",
    "category": "Geology",
    "region": "Deep Time",
    "value": -2400000000,
    "displayValue": "2.4 Billion BCE",
    "clue": "Free oxygen causes massive iron precipitation and sparks the Huronian glaciation."
  },
  {
    "id": "EP_0005",
    "title": "Francevillian Multicellular Macroorganisms Emerge in Gabon",
    "category": "Evolution",
    "region": "Africa",
    "value": -2100000000,
    "displayValue": "2.1 Billion BCE",
    "clue": "Fossil pyritized colonial organisms showing early macroscopic cell clustering."
  },
  {
    "id": "EP_0006",
    "title": "Bangiomorpha Red Algae Pioneers Earliest Sexual Reproduction",
    "category": "Evolution",
    "region": "Deep Time",
    "value": -1047000000,
    "displayValue": "1.05 Billion BCE",
    "clue": "Multicellular Arctic fossils show specialized reproductive spore differentiation."
  },
  {
    "id": "EP_0007",
    "title": "Ediacaran Biota Flourish as Soft-Bodied Organisms",
    "category": "Paleontology",
    "region": "Deep Time",
    "value": -575000000,
    "displayValue": "575 Million BCE",
    "clue": "Quilted frond-like marine organisms thrive before skeletal predators emerge."
  },
  {
    "id": "EP_0008",
    "title": "Cambrian Explosion Diversifies Major Animal Body Plans",
    "category": "Paleontology",
    "region": "Deep Time",
    "value": -538800000,
    "displayValue": "538.8 Million BCE",
    "clue": "Trilobites, anomalocaridids, and chordates appear in the marine fossil record."
  },
  {
    "id": "EP_0009",
    "title": "First Land Plants Colonize Continents with Mycorrhizal Fungi",
    "category": "Paleobotany",
    "region": "Deep Time",
    "value": -470000000,
    "displayValue": "470 Million BCE",
    "clue": "Non-vascular bryophytes pioneer damp continental margins."
  },
  {
    "id": "EP_0010",
    "title": "Tiktaalik Roseae Bridges Fin-to-Limb Transition for Tetrapods",
    "category": "Paleontology",
    "region": "Deep Time",
    "value": -375000000,
    "displayValue": "375 Million BCE",
    "clue": "Lobe-finned river fish develops flexible wrists, neck, and ribs."
  },
  {
    "id": "EP_0011",
    "title": "Giant Scale-Tree Forests Form Carboniferous Coal Deposits",
    "category": "Paleobotany",
    "region": "Deep Time",
    "value": -320000000,
    "displayValue": "320 Million BCE",
    "clue": "Lepidodendron and Sigillaria swamps lock away vast atmospheric carbon."
  },
  {
    "id": "EP_0012",
    "title": "Permian-Triassic Mass Extinction Eradicates 95% of Marine Life",
    "category": "Geology",
    "region": "Deep Time",
    "value": -251900000,
    "displayValue": "251.9 Million BCE",
    "clue": "Siberian flood basalt eruptions cause catastrophic ocean anoxia and acidification."
  },
  {
    "id": "EP_0013",
    "title": "Archaeopteryx Evolves Feathered Wings and Toothed Jaws",
    "category": "Paleontology",
    "region": "Deep Time",
    "value": -150000000,
    "displayValue": "150 Million BCE",
    "clue": "Transitional fossil connects theropod dinosaurs to modern feathered birds."
  },
  {
    "id": "EP_0014",
    "title": "Chicxulub Asteroid Impact Drives Non-Avian Dinosaurs Extinct",
    "category": "Astronomy",
    "region": "Deep Time",
    "value": -66000000,
    "displayValue": "66 Million BCE",
    "clue": "A 10-km bolide impacts Yucatán, blanketing the stratosphere in dust and sulfur."
  },
  {
    "id": "EP_0015",
    "title": "Paleocene-Eocene Thermal Maximum Triggers Global Spike in Heat",
    "category": "Paleoclimatology",
    "region": "Deep Time",
    "value": -56000000,
    "displayValue": "56 Million BCE",
    "clue": "Massive undersea methane release sparks extreme global warming."
  },
  {
    "id": "EP_0016",
    "title": "Homo erectus Masters Controlled Hearth Fires at Wonderwerk Cave",
    "category": "Anthropology",
    "region": "Human Origins",
    "value": -1000000,
    "displayValue": "c. 1 Million BCE",
    "clue": "Controlled ash and burned bone fragments found deep within South African cave."
  },
  {
    "id": "EP_0017",
    "title": "Homo sapiens Early Lineage Inhabits Jebel Irhoud in Morocco",
    "category": "Human Origins",
    "region": "North Africa",
    "value": -315000,
    "displayValue": "c. 315,000 BCE",
    "clue": "Fossils push back modern human anatomical origins across Pan-Africa."
  },
  {
    "id": "EP_0018",
    "title": "Bizmoune Cave Inhabitants Fashion Perforated Shell Beads",
    "category": "Archaeology",
    "region": "North Africa",
    "value": -142000,
    "displayValue": "c. 142,000 BCE",
    "clue": "Perforated gastropod shells worn as personal symbolic ornamentation."
  },
  {
    "id": "EP_0019",
    "title": "Blombos Cave Ochre Inscribed with Cross-Hatched Lines",
    "category": "Archaeology",
    "region": "Southern Africa",
    "value": -73000,
    "displayValue": "c. 73,000 BCE",
    "clue": "Silcrete flake engraved with deliberate abstract geometric pigment lines."
  },
  {
    "id": "EP_0020",
    "title": "Maros-Pangkep Babirusa Cave Painting Created in Sulawesi",
    "category": "Rock Art",
    "region": "Southeast Asia",
    "value": -45500,
    "displayValue": "c. 45,500 BCE",
    "clue": "Oldest known representational figurative animal art on limestone walls."
  },
  {
    "id": "EP_0021",
    "title": "Manunggul Burial Jar Crafted in Lipuun Point, Palawan",
    "category": "Ceramics & Art",
    "region": "Southeast Asia",
    "value": -890,
    "displayValue": "c. 890 BCE",
    "clue": "Secondary burial vessel featuring two spirit oarsmen rowing into the afterworld."
  },
  {
    "id": "EP_0022",
    "title": "Dong Son Bronze Kettle Drums Cast in Northern Vietnam",
    "category": "Metallurgy",
    "region": "Southeast Asia",
    "value": -500,
    "displayValue": "c. 500 BCE",
    "clue": "Elaborate lost-wax bronze drums depicting warriors, hornbills, and stilt houses."
  },
  {
    "id": "EP_0023",
    "title": "Sa Huynh Culture Develops Maritime Jade Trade (Lingling-o)",
    "category": "Trade",
    "region": "Southeast Asia",
    "value": -400,
    "displayValue": "c. 400 BCE",
    "clue": "Double-headed animal nephrite earrings traded across the South China Sea."
  },
  {
    "id": "EP_0024",
    "title": "Banaue Rice Terraces Carved by Ifugao Engineers",
    "category": "Agriculture",
    "region": "Southeast Asia",
    "value": 100,
    "displayValue": "c. 100 CE",
    "clue": "Stone-walled hillside irrigation networks channeling mountain springs across peaks."
  },
  {
    "id": "EP_0025",
    "title": "Funan Kingdom Establishes Oc Eo Maritime Entrepôt",
    "category": "Maritime Trade",
    "region": "Southeast Asia",
    "value": 150,
    "displayValue": "c. 150 CE",
    "clue": "Mekong Delta port connecting trade from Rome, Persia, India, and Han China."
  },
  {
    "id": "EP_0026",
    "title": "Champa Thalassocracy Founded by Sri Mara",
    "category": "Kingdoms",
    "region": "Southeast Asia",
    "value": 192,
    "displayValue": "192 CE",
    "clue": "Austronesian kingdom flourishes in central Vietnam through aromatic resin trade."
  },
  {
    "id": "EP_0027",
    "title": "Butuan Balangay Planks Radiocarbon Dated in Mindanao",
    "category": "Maritime Tech",
    "region": "Southeast Asia",
    "value": 320,
    "displayValue": "c. 320 CE",
    "clue": "Edge-pegged lashed-lug wooden voyaging boats built without single metal nails."
  },
  {
    "id": "EP_0028",
    "title": "Tarumanagara King Purnawarman Carves Tugu Inscription",
    "category": "Hydrology",
    "region": "Southeast Asia",
    "value": 410,
    "displayValue": "c. 410 CE",
    "clue": "Records canalization of Chandrabhaga River to prevent seasonal flooding."
  },
  {
    "id": "EP_0029",
    "title": "Kedukan Bukit Inscription Proclaims Srivijaya's Foundation",
    "category": "Maritime Empires",
    "region": "Southeast Asia",
    "value": 683,
    "displayValue": "683 CE",
    "clue": "Dapunta Hyang leads 20,000 troops by boat to establish a naval trading empire."
  },
  {
    "id": "EP_0030",
    "title": "Sailendra Dynasty Completes Borobudur Stupa in Java",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 825,
    "displayValue": "c. 825 CE",
    "clue": "Over 500 Buddha statues and 2,600 bas-reliefs carved in volcanic andesite stone."
  },
  {
    "id": "EP_0031",
    "title": "Prambanan Hindu Complex Dedicated to the Trimurti",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 856,
    "displayValue": "c. 856 CE",
    "clue": "Towering stone shikhara dedicated to Shiva, Brahma, and Vishnu in Central Java."
  },
  {
    "id": "EP_0032",
    "title": "Laguna Copperplate Inscription Written in Luzon",
    "category": "Law & Epigraphy",
    "region": "Southeast Asia",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Clears the hereditary debt of Namwaran under the authority of Chief of Tondo."
  },
  {
    "id": "EP_0033",
    "title": "Kingdom of Butuan Dispatches Maritime Tribute Mission to Song Court",
    "category": "Trade",
    "region": "Southeast Asia",
    "value": 1001,
    "displayValue": "1001 CE",
    "clue": "Rajah Kiling of Butuan establishes direct gold and camphor trade with China."
  },
  {
    "id": "EP_0034",
    "title": "King Anawrahta Unifies Myanmar into Pagan Empire",
    "category": "History",
    "region": "Southeast Asia",
    "value": 1044,
    "displayValue": "1044 CE",
    "clue": "Theravada Buddhism adopted as royal religion across the dry central plains."
  },
  {
    "id": "EP_0035",
    "title": "Construction Commences on Angkor Wat by Suryavarman II",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 1113,
    "displayValue": "c. 1113 CE",
    "clue": "Vast temple mountain representing Mount Meru with monumental water reservoirs."
  },
  {
    "id": "EP_0036",
    "title": "Bayon Temple and Angkor Thom Built by Jayavarman VII",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 1190,
    "displayValue": "c. 1190 CE",
    "clue": "Massive smiling Lokeshvara face towers watch over the fortified Khmer capital."
  },
  {
    "id": "EP_0037",
    "title": "Battle of Bach Dang River Destroys Mongol Naval Fleet",
    "category": "Military History",
    "region": "Southeast Asia",
    "value": 1288,
    "displayValue": "1288 CE",
    "clue": "Tran Hung Dao embeds iron-tipped timber stakes into river mud to shatter junks."
  },
  {
    "id": "EP_0038",
    "title": "King Ram Khamhaeng Devises the Thai Script",
    "category": "Linguistics",
    "region": "Southeast Asia",
    "value": 1292,
    "displayValue": "c. 1292 CE",
    "clue": "Adapts Old Khmer script to capture tonal inflections of the Tai language."
  },
  {
    "id": "EP_0039",
    "title": "Raden Wijaya Establishes Majapahit Empire in East Java",
    "category": "Empires",
    "region": "Southeast Asia",
    "value": 1293,
    "displayValue": "1293 CE",
    "clue": "Defeats Mongol expedition and builds dominant archipelago thalassocracy."
  },
  {
    "id": "EP_0040",
    "title": "Gajah Mada Pronounces the Palapa Oath",
    "category": "Governance",
    "region": "Southeast Asia",
    "value": 1336,
    "displayValue": "1336 CE",
    "clue": "Majapahit Prime Minister vows not to consume spice luxuries until Nusantara is united."
  },
  {
    "id": "EP_0041",
    "title": "Parameswara Founds the Port Sultanate of Malacca",
    "category": "Trade",
    "region": "Southeast Asia",
    "value": 1400,
    "displayValue": "c. 1400 CE",
    "clue": "Strategic choke-point city-state linking Chinese, Indian, and Arab spice trade."
  },
  {
    "id": "EP_0042",
    "title": "Sultanate of Sulu Founded by Sharif ul-Hashim",
    "category": "Kingdoms",
    "region": "Southeast Asia",
    "value": 1405,
    "displayValue": "c. 1405 CE",
    "clue": "Establishes institutional Islamic rule and maritime commerce in pearls."
  },
  {
    "id": "EP_0043",
    "title": "Battle of Mactan Halts Initial Spanish Colonization",
    "category": "Resistance",
    "region": "Southeast Asia",
    "value": 1521,
    "displayValue": "1521 CE",
    "clue": "Chieftain Lapulapu leads coastal warriors in shallow water skirmish, defeating Magellan."
  },
  {
    "id": "EP_0044",
    "title": "Boxer Codex Illustrates Pre-Colonial Philippine Regalia",
    "category": "Art",
    "region": "Southeast Asia",
    "value": 1590,
    "displayValue": "c. 1590 CE",
    "clue": "Gold-illuminated manuscript depicting Tagalog, Visayan, and Cham nobility."
  },
  {
    "id": "EP_0045",
    "title": "Dhar Tichitt Masonry Villages Built on Mauritanian Cliffs",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -2000,
    "displayValue": "c. 2000 BCE",
    "clue": "Stone-walled villages with paved streets farming pearl millet in the drying Sahel."
  },
  {
    "id": "EP_0046",
    "title": "Kingdom of Kush Establishes Capital at Kerma",
    "category": "Civilization",
    "region": "Nubia",
    "value": -2400,
    "displayValue": "c. 2400 BCE",
    "clue": "Western Deffufa mudbrick religious center stands along the Nile in Sudan."
  },
  {
    "id": "EP_0047",
    "title": "King Piye of Kush Conquers Egypt and Founds 25th Dynasty",
    "category": "Empires",
    "region": "Nubia",
    "value": -747,
    "displayValue": "c. 747 BCE",
    "clue": "Marches from Napata to restore traditional temple rites across Upper and Lower Egypt."
  },
  {
    "id": "EP_0048",
    "title": "Nok Culture Casts Terracotta Sculptures and Smelts Iron",
    "category": "Art & Metallurgy",
    "region": "West Africa",
    "value": -500,
    "displayValue": "c. 500 BCE",
    "clue": "Central Nigerian artisans pioneer coil-built terracotta heads and bloomery iron."
  },
  {
    "id": "EP_0049",
    "title": "Meroë Expands Industrial Iron Smelting and Meroitic Alphabet",
    "category": "Metallurgy & Script",
    "region": "Nubia",
    "value": -300,
    "displayValue": "c. 300 BCE",
    "clue": "Capital features iron slag mounds and an indigenous cursive alphabetic script."
  },
  {
    "id": "EP_0050",
    "title": "Queen Amanirenas Repels Roman Army from Kush Borders",
    "category": "Resistance",
    "region": "Nubia",
    "value": -24,
    "displayValue": "24 BCE",
    "clue": "One-eyed Kandake queen captures Roman bronze busts and negotiates autonomy."
  },
  {
    "id": "EP_0051",
    "title": "Kingdom of Aksum Mints Bimetallic Gold and Silver Coinage",
    "category": "Currency",
    "region": "Horn of Africa",
    "value": 270,
    "displayValue": "c. 270 CE",
    "clue": "King Endubis produces currency circulating across Red Sea trade networks."
  },
  {
    "id": "EP_0052",
    "title": "King Ezana of Aksum Inscribes Trilingual Stelae at Axum",
    "category": "Epigraphy",
    "region": "Horn of Africa",
    "value": 330,
    "displayValue": "c. 330 CE",
    "clue": "Monuments carved in Ge'ez, Greek, and Sabaean celebrate regional unification."
  },
  {
    "id": "EP_0053",
    "title": "Wagadou (Ghana Empire) Controls Trans-Saharan Gold Trade",
    "category": "Trade & Empires",
    "region": "West Africa",
    "value": 750,
    "displayValue": "c. 750 CE",
    "clue": "Kaya Maghan kings tax gold and salt caravans crossing the western Sahel."
  },
  {
    "id": "EP_0054",
    "title": "Igbo-Ukwu Casters Craft Intricate Lost-Wax Bronzes",
    "category": "Metallurgy",
    "region": "West Africa",
    "value": 850,
    "displayValue": "c. 850 CE",
    "clue": "Excavations in Nigeria uncover elaborate lead-bronze ceremonial vessels."
  },
  {
    "id": "EP_0055",
    "title": "Fatima al-Fihri Founds the University of Al-Qarawiyyin in Fez",
    "category": "Education",
    "region": "North Africa",
    "value": 859,
    "displayValue": "859 CE",
    "clue": "Continuous degree-granting center for astronomy, theology, and jurisprudence."
  },
  {
    "id": "EP_0056",
    "title": "Kilwa Kisiwani Emerges as Premier Swahili Gold Port",
    "category": "Trade",
    "region": "East Africa",
    "value": 1000,
    "displayValue": "c. 1000 CE",
    "clue": "Coral stone maritime hub mints local copper coins and handles Zimbabwean gold."
  },
  {
    "id": "EP_0057",
    "title": "Ife Kingdom Casts Naturalistic Brass and Copper Royal Heads",
    "category": "Sculpture",
    "region": "West Africa",
    "value": 1150,
    "displayValue": "c. 1150 CE",
    "clue": "Yoruba artisans achieve lifelike anatomy and facial scarification in copper."
  },
  {
    "id": "EP_0058",
    "title": "Great Zimbabwe Constructs the Great Enclosure Dry-Stone Walls",
    "category": "Architecture",
    "region": "Southern Africa",
    "value": 1200,
    "displayValue": "c. 1200 CE",
    "clue": "Curved granite walls up to 11 meters high constructed without mortar."
  },
  {
    "id": "EP_0059",
    "title": "Lalibela Churns Out Eleven Monolithic Rock-Hewn Churches",
    "category": "Architecture",
    "region": "Horn of Africa",
    "value": 1200,
    "displayValue": "c. 1200 CE",
    "clue": "Chiseled subterranean cruciform sanctuaries carved out of volcanic tuff."
  },
  {
    "id": "EP_0060",
    "title": "Mansa Musa Distributes Gold on Historic Pilgrimage to Cairo",
    "category": "Economy",
    "region": "West Africa",
    "value": 1324,
    "displayValue": "1324 CE",
    "clue": "Malian royal procession depresses regional gold values in Egypt for over a decade."
  },
  {
    "id": "EP_0061",
    "title": "Sankore Madrasa in Timbuktu Houses Expansive Manuscript Libraries",
    "category": "Scholarship",
    "region": "West Africa",
    "value": 1300,
    "displayValue": "c. 1300 CE",
    "clue": "Academics produce and trade works on mathematics, medicine, and Islamic law."
  },
  {
    "id": "EP_0062",
    "title": "Ibn Khaldun Compiles the Muqaddimah on Social Cohesion",
    "category": "Sociology",
    "region": "North Africa",
    "value": 1377,
    "displayValue": "1377 CE",
    "clue": "Pioneers political economy and Asabiyyah concepts explaining state cycles."
  },
  {
    "id": "EP_0063",
    "title": "Benin Kingdom Guild of Casters Forges Memorial Brass Plaques",
    "category": "Metallurgy",
    "region": "West Africa",
    "value": 1450,
    "displayValue": "c. 1450 CE",
    "clue": "Palace courtyard pillars decorated with historical and ceremonial reliefs."
  },
  {
    "id": "EP_0064",
    "title": "Dahomey Establishes All-Female Mino Military Regiment",
    "category": "Military History",
    "region": "West Africa",
    "value": 1708,
    "displayValue": "c. 1708 CE",
    "clue": "King Agaja organizes professional women combat units defending Fon territory."
  },
  {
    "id": "EP_0065",
    "title": "Battle of Adwa Halts Italian Colonial Invasion of Ethiopia",
    "category": "Sovereignty",
    "region": "Horn of Africa",
    "value": 1896,
    "displayValue": "1896 CE",
    "clue": "Menelik II and Empress Taytu defeat European forces, preserving independence."
  },
  {
    "id": "EP_0066",
    "title": "Caral-Supe Builds Sunken Plazas in the Supe Valley",
    "category": "Urbanism",
    "region": "South America",
    "value": -3000,
    "displayValue": "c. 3000 BCE",
    "clue": "Oldest known urban center in the Americas, flourishing without pottery."
  },
  {
    "id": "EP_0067",
    "title": "Olmec Carvers Sculpt Basalt Colossal Heads at San Lorenzo",
    "category": "Sculpture",
    "region": "Mesoamerica",
    "value": -1200,
    "displayValue": "c. 1200 BCE",
    "clue": "Massive 20-ton volcanic boulders transported to portray dynastic rulers."
  },
  {
    "id": "EP_0068",
    "title": "Chavín de Huántar Engineers Underground Acoustic Channels",
    "category": "Acoustics & Architecture",
    "region": "South America",
    "value": -900,
    "displayValue": "c. 900 BCE",
    "clue": "Canals under the Lanzón temple roar like jaguars when flooded with water."
  },
  {
    "id": "EP_0069",
    "title": "Maya Inscribe Long Count Calendar with Positional Zero",
    "category": "Mathematics",
    "region": "Mesoamerica",
    "value": -36,
    "displayValue": "36 BCE",
    "clue": "Vigesimal base-20 calculations track celestial time across millions of days."
  },
  {
    "id": "EP_0070",
    "title": "Teotihuacan Builds Pyramid of the Sun and Avenue of the Dead",
    "category": "Urban Planning",
    "region": "Mesoamerica",
    "value": 100,
    "displayValue": "c. 100 CE",
    "clue": "Planned grid city of 100,000 multi-ethnic craftspeople in Central Mexico."
  },
  {
    "id": "EP_0071",
    "title": "Nazca Lines Traced Across Arid Coastal Desert Pampa",
    "category": "Earthworks",
    "region": "South America",
    "value": 200,
    "displayValue": "c. 200 CE",
    "clue": "Gigantic zoomorphic geoglyphs scraped into iron-oxide desert surface gravels."
  },
  {
    "id": "EP_0072",
    "title": "Moche Lord of Sipán Buried with Gold and Turquoise Regalia",
    "category": "Metallurgy",
    "region": "South America",
    "value": 250,
    "displayValue": "c. 250 CE",
    "clue": "Elite tomb displays depletion gilding and copper-gold tumbaga alloys."
  },
  {
    "id": "EP_0073",
    "title": "Tiwanaku Engineers Suka Kollu Raised Frost-Shield Canals",
    "category": "Agriculture",
    "region": "South America",
    "value": 650,
    "displayValue": "c. 650 CE",
    "clue": "Thermal mass of canal water protects high-altitude crops from nocturnal frost."
  },
  {
    "id": "EP_0074",
    "title": "Palenque Interrs King Pakal in Temple of the Inscriptions",
    "category": "Architecture",
    "region": "Mesoamerica",
    "value": 683,
    "displayValue": "683 CE",
    "clue": "Carved sarcophagus depicts ruler reborn from underworld jaws as the Maize God."
  },
  {
    "id": "EP_0075",
    "title": "Cahokia Constructs Monks Mound in Mississippi Valley",
    "category": "Urban Planning",
    "region": "North America",
    "value": 1050,
    "displayValue": "c. 1050 CE",
    "clue": "100-foot earthen pyramid serves as focal point for 20,000 residents."
  },
  {
    "id": "EP_0076",
    "title": "Ancestral Puebloans Build Sandstone Cliff Palace at Mesa Verde",
    "category": "Architecture",
    "region": "North America",
    "value": 1190,
    "displayValue": "c. 1190 CE",
    "clue": "Multi-tiered masonry rooms sheltered beneath sandstone canyon alcoves."
  },
  {
    "id": "EP_0077",
    "title": "Mexica Found Island Capital of Tenochtitlan on Lake Texcoco",
    "category": "Engineering",
    "region": "Mesoamerica",
    "value": 1325,
    "displayValue": "1325 CE",
    "clue": "Engineers build chinampa floating gardens, dikes, and masonry causeways."
  },
  {
    "id": "EP_0078",
    "title": "Pachacuti Rebuilds Cusco and Initiates Inca Expansion",
    "category": "Urban Planning",
    "region": "South America",
    "value": 1438,
    "displayValue": "1438 CE",
    "clue": "City re-engineered with cyclopean earthquake-resistant mortarless masonry."
  },
  {
    "id": "EP_0079",
    "title": "Qhapaq Ñan Imperial Inca Road Network Traverses 40,000 km",
    "category": "Infrastructure",
    "region": "South America",
    "value": 1450,
    "displayValue": "c. 1450 CE",
    "clue": "Alpine highways feature rope bridges, storehouses, and chasqui relay runners."
  },
  {
    "id": "EP_0080",
    "title": "Haudenosaunee Establishes Great Law of Peace Constitution",
    "category": "Governance",
    "region": "North America",
    "value": 1451,
    "displayValue": "c. 1451 CE",
    "clue": "Participatory democracy unites five nations under bicameral council consensus."
  },
  {
    "id": "EP_0081",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 1140 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1140,
    "displayValue": "1140 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0082",
    "title": "East Asia: Directional Seismoscope Milestone in 123 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -123,
    "displayValue": "123 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0083",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 1606 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1606,
    "displayValue": "1606 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0084",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 2589 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2589,
    "displayValue": "2589 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0085",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 1572 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1572,
    "displayValue": "1572 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0086",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1055 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1055,
    "displayValue": "1055 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0087",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1790 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1790,
    "displayValue": "1790 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0088",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 1021 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1021,
    "displayValue": "1021 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0089",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 4 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -4,
    "displayValue": "4 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0090",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 1487 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1487,
    "displayValue": "1487 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0091",
    "title": "Oceania: Megalithic Islet Construction Milestone in 2470 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2470,
    "displayValue": "2470 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0092",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 1453 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1453,
    "displayValue": "1453 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0093",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 936 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -936,
    "displayValue": "936 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0094",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1909 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1909,
    "displayValue": "1909 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0095",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 902 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -902,
    "displayValue": "902 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0096",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 115 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 115,
    "displayValue": "115 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0097",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 1368 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1368,
    "displayValue": "1368 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0098",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 2351 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2351,
    "displayValue": "2351 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0099",
    "title": "Americas: Raised Wetland Agriculture Milestone in 1334 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1334,
    "displayValue": "1334 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0100",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 817 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -817,
    "displayValue": "817 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0101",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1604 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1604,
    "displayValue": "1604 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0102",
    "title": "South Asia: Algebraic Power Series Milestone in 783 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -783,
    "displayValue": "783 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0103",
    "title": "East Asia: Grand Canal Grain Route Milestone in 234 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 234,
    "displayValue": "234 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0104",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 1249 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1249,
    "displayValue": "1249 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0105",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 2232 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2232,
    "displayValue": "2232 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0106",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 1215 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1215,
    "displayValue": "1215 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0107",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 698 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -698,
    "displayValue": "698 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0108",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1723 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1723,
    "displayValue": "1723 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0109",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 664 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -664,
    "displayValue": "664 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0110",
    "title": "East Asia: Magnetic Needle Compass Milestone in 353 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 353,
    "displayValue": "353 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0111",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 1130 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1130,
    "displayValue": "1130 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0112",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 2113 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2113,
    "displayValue": "2113 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0113",
    "title": "Americas: Terraced Andean Canal Milestone in 1096 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1096,
    "displayValue": "1096 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0114",
    "title": "Africa: Subterranean Tuff Church Milestone in 579 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -579,
    "displayValue": "579 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0115",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1842 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1842,
    "displayValue": "1842 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0116",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 545 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -545,
    "displayValue": "545 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0117",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 472 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 472,
    "displayValue": "472 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0118",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 1011 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1011,
    "displayValue": "1011 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0119",
    "title": "Oceania: Terraced Pa Fortification Milestone in 1994 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1994,
    "displayValue": "1994 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0120",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 977 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -977,
    "displayValue": "977 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0121",
    "title": "Africa: Terracotta Figural Firing Milestone in 460 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -460,
    "displayValue": "460 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0122",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1961 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1961,
    "displayValue": "1961 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0123",
    "title": "South Asia: Decimal Numeral Notation Milestone in 426 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -426,
    "displayValue": "426 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0124",
    "title": "East Asia: Woodblock Printing Milestone in 591 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 591,
    "displayValue": "591 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0125",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 892 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -892,
    "displayValue": "892 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0126",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 1875 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1875,
    "displayValue": "1875 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0127",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 858 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -858,
    "displayValue": "858 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0128",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 341 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -341,
    "displayValue": "341 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0129",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1656 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1656,
    "displayValue": "1656 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0130",
    "title": "South Asia: Crucible Steel Smelting Milestone in 307 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -307,
    "displayValue": "307 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0131",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 710 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 710,
    "displayValue": "710 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0132",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 773 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -773,
    "displayValue": "773 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0133",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 1756 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1756,
    "displayValue": "1756 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0134",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 739 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -739,
    "displayValue": "739 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0135",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 222 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -222,
    "displayValue": "222 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0136",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1775 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1775,
    "displayValue": "1775 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0137",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 188 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -188,
    "displayValue": "188 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0138",
    "title": "East Asia: Directional Seismoscope Milestone in 829 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 829,
    "displayValue": "829 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0139",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 654 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -654,
    "displayValue": "654 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0140",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 1637 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1637,
    "displayValue": "1637 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0141",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 620 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -620,
    "displayValue": "620 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0142",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 103 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -103,
    "displayValue": "103 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0143",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1894 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1894,
    "displayValue": "1894 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0144",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 69 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -69,
    "displayValue": "69 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0145",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 948 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 948,
    "displayValue": "948 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0146",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 535 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -535,
    "displayValue": "535 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0147",
    "title": "Oceania: Megalithic Islet Construction Milestone in 1518 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1518,
    "displayValue": "1518 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0148",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 501 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -501,
    "displayValue": "501 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0149",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 16 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 16,
    "displayValue": "16 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0150",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 2013 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 2013,
    "displayValue": "2013 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0151",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 50 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 50,
    "displayValue": "50 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0152",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1067 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1067,
    "displayValue": "1067 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0153",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 416 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -416,
    "displayValue": "416 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0154",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 1399 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1399,
    "displayValue": "1399 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0155",
    "title": "Americas: Raised Wetland Agriculture Milestone in 382 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -382,
    "displayValue": "382 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0156",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 135 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 135,
    "displayValue": "135 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0157",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1708 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1708,
    "displayValue": "1708 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0158",
    "title": "South Asia: Algebraic Power Series Milestone in 169 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 169,
    "displayValue": "169 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0159",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1186 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1186,
    "displayValue": "1186 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0160",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 297 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -297,
    "displayValue": "297 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0161",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 1280 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1280,
    "displayValue": "1280 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0162",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 263 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -263,
    "displayValue": "263 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0163",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 254 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 254,
    "displayValue": "254 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0164",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1827 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1827,
    "displayValue": "1827 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0165",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 288 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 288,
    "displayValue": "288 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0166",
    "title": "East Asia: Magnetic Needle Compass Milestone in 1305 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1305,
    "displayValue": "1305 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0167",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 178 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -178,
    "displayValue": "178 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0168",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 1161 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1161,
    "displayValue": "1161 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0169",
    "title": "Americas: Terraced Andean Canal Milestone in 144 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -144,
    "displayValue": "144 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0170",
    "title": "Africa: Subterranean Tuff Church Milestone in 373 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 373,
    "displayValue": "373 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0171",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1946 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1946,
    "displayValue": "1946 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0172",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 407 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 407,
    "displayValue": "407 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0173",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 1424 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1424,
    "displayValue": "1424 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0174",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 59 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -59,
    "displayValue": "59 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0175",
    "title": "Oceania: Terraced Pa Fortification Milestone in 1042 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1042,
    "displayValue": "1042 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0176",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 25 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -25,
    "displayValue": "25 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0177",
    "title": "Africa: Terracotta Figural Firing Milestone in 492 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 492,
    "displayValue": "492 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0178",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1641 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1641,
    "displayValue": "1641 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0179",
    "title": "South Asia: Decimal Numeral Notation Milestone in 526 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 526,
    "displayValue": "526 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0180",
    "title": "East Asia: Woodblock Printing Milestone in 1543 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1543,
    "displayValue": "1543 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0181",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 60 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 60,
    "displayValue": "60 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0182",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 923 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -923,
    "displayValue": "923 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0183",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 94 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 94,
    "displayValue": "94 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0184",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 611 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 611,
    "displayValue": "611 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0185",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1760 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1760,
    "displayValue": "1760 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0186",
    "title": "South Asia: Crucible Steel Smelting Milestone in 645 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 645,
    "displayValue": "645 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0187",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 1662 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1662,
    "displayValue": "1662 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0188",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 179 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 179,
    "displayValue": "179 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0189",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 804 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -804,
    "displayValue": "804 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0190",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 213 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 213,
    "displayValue": "213 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0191",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 730 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 730,
    "displayValue": "730 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0192",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1879 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1879,
    "displayValue": "1879 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0193",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 764 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 764,
    "displayValue": "764 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0194",
    "title": "East Asia: Directional Seismoscope Milestone in 1781 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1781,
    "displayValue": "1781 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0195",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 298 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 298,
    "displayValue": "298 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0196",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 685 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -685,
    "displayValue": "685 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0197",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 332 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 332,
    "displayValue": "332 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0198",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 849 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 849,
    "displayValue": "849 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0199",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1998 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1998,
    "displayValue": "1998 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0200",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 883 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 883,
    "displayValue": "883 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0201",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 1400 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1400,
    "displayValue": "1400 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0202",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 417 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 417,
    "displayValue": "417 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0203",
    "title": "Oceania: Megalithic Islet Construction Milestone in 566 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -566,
    "displayValue": "566 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0204",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 451 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 451,
    "displayValue": "451 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0205",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 968 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 968,
    "displayValue": "968 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0206",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1693 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1693,
    "displayValue": "1693 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0207",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 1002 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1002,
    "displayValue": "1002 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0208",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1281 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1281,
    "displayValue": "1281 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0209",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 536 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 536,
    "displayValue": "536 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0210",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 447 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -447,
    "displayValue": "447 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0211",
    "title": "Americas: Raised Wetland Agriculture Milestone in 570 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 570,
    "displayValue": "570 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0212",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1087 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1087,
    "displayValue": "1087 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0213",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1812 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1812,
    "displayValue": "1812 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0214",
    "title": "South Asia: Algebraic Power Series Milestone in 1121 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1121,
    "displayValue": "1121 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0215",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1162 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1162,
    "displayValue": "1162 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0216",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 655 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 655,
    "displayValue": "655 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0217",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 328 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -328,
    "displayValue": "328 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0218",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 689 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 689,
    "displayValue": "689 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0219",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 1206 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1206,
    "displayValue": "1206 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0220",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1931 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1931,
    "displayValue": "1931 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0221",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 1240 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1240,
    "displayValue": "1240 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0222",
    "title": "East Asia: Magnetic Needle Compass Milestone in 1043 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1043,
    "displayValue": "1043 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0223",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 774 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 774,
    "displayValue": "774 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0224",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 209 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -209,
    "displayValue": "209 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0225",
    "title": "Americas: Terraced Andean Canal Milestone in 808 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 808,
    "displayValue": "808 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0226",
    "title": "Africa: Subterranean Tuff Church Milestone in 1325 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1325,
    "displayValue": "1325 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0227",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1626 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1626,
    "displayValue": "1626 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0228",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 1359 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1359,
    "displayValue": "1359 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0229",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 924 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -924,
    "displayValue": "924 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0230",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 893 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 893,
    "displayValue": "893 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0231",
    "title": "Oceania: Terraced Pa Fortification Milestone in 90 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -90,
    "displayValue": "90 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0232",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 927 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 927,
    "displayValue": "927 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0233",
    "title": "Africa: Terracotta Figural Firing Milestone in 1444 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1444,
    "displayValue": "1444 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0234",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1745 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1745,
    "displayValue": "1745 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0235",
    "title": "South Asia: Decimal Numeral Notation Milestone in 1478 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1478,
    "displayValue": "1478 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0236",
    "title": "East Asia: Woodblock Printing Milestone in 805 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -805,
    "displayValue": "805 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0237",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 1012 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1012,
    "displayValue": "1012 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0238",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 29 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 29,
    "displayValue": "29 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0239",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 1046 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1046,
    "displayValue": "1046 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0240",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 1563 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1563,
    "displayValue": "1563 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0241",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1864 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1864,
    "displayValue": "1864 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0242",
    "title": "South Asia: Crucible Steel Smelting Milestone in 1597 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1597,
    "displayValue": "1597 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0243",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 686 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -686,
    "displayValue": "686 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0244",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 1131 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1131,
    "displayValue": "1131 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0245",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 148 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 148,
    "displayValue": "148 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0246",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 1165 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1165,
    "displayValue": "1165 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0247",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 1682 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1682,
    "displayValue": "1682 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0248",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1983 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1983,
    "displayValue": "1983 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0249",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 1716 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1716,
    "displayValue": "1716 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0250",
    "title": "East Asia: Directional Seismoscope Milestone in 567 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -567,
    "displayValue": "567 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0251",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 1250 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1250,
    "displayValue": "1250 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0252",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 267 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 267,
    "displayValue": "267 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0253",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 1284 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1284,
    "displayValue": "1284 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0254",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1801 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1801,
    "displayValue": "1801 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0255",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1678 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1678,
    "displayValue": "1678 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0256",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 2415 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2415,
    "displayValue": "2415 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0257",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 448 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -448,
    "displayValue": "448 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0258",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 1369 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1369,
    "displayValue": "1369 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0259",
    "title": "Oceania: Megalithic Islet Construction Milestone in 386 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 386,
    "displayValue": "386 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0260",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 1403 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1403,
    "displayValue": "1403 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0261",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 2470 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2470,
    "displayValue": "2470 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0262",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1797 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1797,
    "displayValue": "1797 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0263",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 2296 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2296,
    "displayValue": "2296 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0264",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 329 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -329,
    "displayValue": "329 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0265",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 1488 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1488,
    "displayValue": "1488 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0266",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 505 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 505,
    "displayValue": "505 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0267",
    "title": "Americas: Raised Wetland Agriculture Milestone in 2978 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2978,
    "displayValue": "2978 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0268",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 2351 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2351,
    "displayValue": "2351 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0269",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1916 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1916,
    "displayValue": "1916 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0270",
    "title": "South Asia: Algebraic Power Series Milestone in 2177 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2177,
    "displayValue": "2177 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0271",
    "title": "East Asia: Grand Canal Grain Route Milestone in 210 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -210,
    "displayValue": "210 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0272",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 1607 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1607,
    "displayValue": "1607 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0273",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 624 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 624,
    "displayValue": "624 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0274",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 2859 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2859,
    "displayValue": "2859 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0275",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 2232 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2232,
    "displayValue": "2232 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0276",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1611 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1611,
    "displayValue": "1611 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0277",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 2058 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2058,
    "displayValue": "2058 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0278",
    "title": "East Asia: Magnetic Needle Compass Milestone in 91 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -91,
    "displayValue": "91 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0279",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 2924 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2924,
    "displayValue": "2924 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0280",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 743 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 743,
    "displayValue": "743 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0281",
    "title": "Americas: Terraced Andean Canal Milestone in 2740 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2740,
    "displayValue": "2740 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0282",
    "title": "Africa: Subterranean Tuff Church Milestone in 2113 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2113,
    "displayValue": "2113 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0283",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1730 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1730,
    "displayValue": "1730 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0284",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 1939 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1939,
    "displayValue": "1939 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0285",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 28 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 28,
    "displayValue": "28 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0286",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 2805 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2805,
    "displayValue": "2805 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0287",
    "title": "Oceania: Terraced Pa Fortification Milestone in 862 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 862,
    "displayValue": "862 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0288",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 2621 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2621,
    "displayValue": "2621 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0289",
    "title": "Africa: Terracotta Figural Firing Milestone in 1994 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1994,
    "displayValue": "1994 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0290",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1849 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1849,
    "displayValue": "1849 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0291",
    "title": "South Asia: Decimal Numeral Notation Milestone in 1820 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1820,
    "displayValue": "1820 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0292",
    "title": "East Asia: Woodblock Printing Milestone in 147 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 147,
    "displayValue": "147 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0293",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 2686 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2686,
    "displayValue": "2686 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0294",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 981 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 981,
    "displayValue": "981 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0295",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 2502 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2502,
    "displayValue": "2502 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0296",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 1875 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1875,
    "displayValue": "1875 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0297",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1968 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1968,
    "displayValue": "1968 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0298",
    "title": "South Asia: Crucible Steel Smelting Milestone in 1701 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1701,
    "displayValue": "1701 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0299",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 266 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 266,
    "displayValue": "266 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0300",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 2567 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2567,
    "displayValue": "2567 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0301",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 1100 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1100,
    "displayValue": "1100 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0302",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 2383 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2383,
    "displayValue": "2383 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0303",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 1756 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1756,
    "displayValue": "1756 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0304",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1663 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1663,
    "displayValue": "1663 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0305",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 1582 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1582,
    "displayValue": "1582 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0306",
    "title": "East Asia: Directional Seismoscope Milestone in 385 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 385,
    "displayValue": "385 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0307",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 2448 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2448,
    "displayValue": "2448 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0308",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 1219 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1219,
    "displayValue": "1219 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0309",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 2264 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2264,
    "displayValue": "2264 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0310",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1637 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1637,
    "displayValue": "1637 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0311",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1782 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1782,
    "displayValue": "1782 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0312",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 1463 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1463,
    "displayValue": "1463 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0313",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 504 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 504,
    "displayValue": "504 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0314",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 2329 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2329,
    "displayValue": "2329 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0315",
    "title": "Oceania: Megalithic Islet Construction Milestone in 1338 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1338,
    "displayValue": "1338 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0316",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 2145 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2145,
    "displayValue": "2145 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0317",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 1518 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1518,
    "displayValue": "1518 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0318",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1901 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1901,
    "displayValue": "1901 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0319",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 1344 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1344,
    "displayValue": "1344 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0320",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 623 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 623,
    "displayValue": "623 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0321",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 2210 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2210,
    "displayValue": "2210 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0322",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 1457 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1457,
    "displayValue": "1457 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0323",
    "title": "Americas: Raised Wetland Agriculture Milestone in 2026 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2026,
    "displayValue": "2026 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0324",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1399 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1399,
    "displayValue": "1399 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0325",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 2020 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 2020,
    "displayValue": "2020 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0326",
    "title": "South Asia: Algebraic Power Series Milestone in 1225 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1225,
    "displayValue": "1225 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0327",
    "title": "East Asia: Grand Canal Grain Route Milestone in 742 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 742,
    "displayValue": "742 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0328",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 2091 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2091,
    "displayValue": "2091 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0329",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 1576 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1576,
    "displayValue": "1576 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0330",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 1907 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1907,
    "displayValue": "1907 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0331",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 1280 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1280,
    "displayValue": "1280 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0332",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1715 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1715,
    "displayValue": "1715 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0333",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 1106 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1106,
    "displayValue": "1106 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0334",
    "title": "East Asia: Magnetic Needle Compass Milestone in 861 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 861,
    "displayValue": "861 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0335",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 1972 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1972,
    "displayValue": "1972 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0336",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 1695 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1695,
    "displayValue": "1695 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0337",
    "title": "Americas: Terraced Andean Canal Milestone in 1788 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1788,
    "displayValue": "1788 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0338",
    "title": "Africa: Subterranean Tuff Church Milestone in 1161 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1161,
    "displayValue": "1161 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0339",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1834 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1834,
    "displayValue": "1834 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0340",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 987 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -987,
    "displayValue": "987 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0341",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 980 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 980,
    "displayValue": "980 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0342",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 1853 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1853,
    "displayValue": "1853 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0343",
    "title": "Oceania: Terraced Pa Fortification Milestone in 3986 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3986,
    "displayValue": "3986 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0344",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 1669 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1669,
    "displayValue": "1669 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0345",
    "title": "Africa: Terracotta Figural Firing Milestone in 1042 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1042,
    "displayValue": "1042 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0346",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1953 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1953,
    "displayValue": "1953 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0347",
    "title": "South Asia: Decimal Numeral Notation Milestone in 868 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -868,
    "displayValue": "868 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0348",
    "title": "East Asia: Woodblock Printing Milestone in 1099 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1099,
    "displayValue": "1099 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0349",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 1734 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1734,
    "displayValue": "1734 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0350",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 3867 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3867,
    "displayValue": "3867 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0351",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 1550 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1550,
    "displayValue": "1550 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0352",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 923 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -923,
    "displayValue": "923 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0353",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1648 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1648,
    "displayValue": "1648 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0354",
    "title": "South Asia: Crucible Steel Smelting Milestone in 749 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -749,
    "displayValue": "749 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0355",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 1218 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1218,
    "displayValue": "1218 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0356",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 1615 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1615,
    "displayValue": "1615 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0357",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 3748 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3748,
    "displayValue": "3748 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0358",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 1431 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1431,
    "displayValue": "1431 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0359",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 804 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -804,
    "displayValue": "804 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0360",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1767 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1767,
    "displayValue": "1767 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0361",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 630 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -630,
    "displayValue": "630 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0362",
    "title": "East Asia: Directional Seismoscope Milestone in 1337 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1337,
    "displayValue": "1337 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0363",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 1496 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1496,
    "displayValue": "1496 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0364",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 3629 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3629,
    "displayValue": "3629 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0365",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 1312 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1312,
    "displayValue": "1312 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0366",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 685 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -685,
    "displayValue": "685 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0367",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1886 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1886,
    "displayValue": "1886 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0368",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 511 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -511,
    "displayValue": "511 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0369",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 1456 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1456,
    "displayValue": "1456 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0370",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 1377 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1377,
    "displayValue": "1377 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0371",
    "title": "Oceania: Megalithic Islet Construction Milestone in 3510 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3510,
    "displayValue": "3510 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0372",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 1193 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1193,
    "displayValue": "1193 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0373",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 566 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -566,
    "displayValue": "566 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0374",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 2005 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 2005,
    "displayValue": "2005 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0375",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 392 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -392,
    "displayValue": "392 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0376",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1575 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1575,
    "displayValue": "1575 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0377",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 1258 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1258,
    "displayValue": "1258 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0378",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 3391 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3391,
    "displayValue": "3391 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0379",
    "title": "Americas: Raised Wetland Agriculture Milestone in 1074 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1074,
    "displayValue": "1074 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0380",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 447 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -447,
    "displayValue": "447 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0381",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1700 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1700,
    "displayValue": "1700 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0382",
    "title": "South Asia: Algebraic Power Series Milestone in 273 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -273,
    "displayValue": "273 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0383",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1694 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1694,
    "displayValue": "1694 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0384",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 1139 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1139,
    "displayValue": "1139 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0385",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 3272 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3272,
    "displayValue": "3272 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0386",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 955 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -955,
    "displayValue": "955 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0387",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 328 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -328,
    "displayValue": "328 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0388",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1819 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1819,
    "displayValue": "1819 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0389",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 154 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -154,
    "displayValue": "154 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0390",
    "title": "East Asia: Magnetic Needle Compass Milestone in 1487 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1487,
    "displayValue": "1487 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0391",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 1020 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1020,
    "displayValue": "1020 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0392",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 3153 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3153,
    "displayValue": "3153 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0393",
    "title": "Americas: Terraced Andean Canal Milestone in 836 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -836,
    "displayValue": "836 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0394",
    "title": "Africa: Subterranean Tuff Church Milestone in 209 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -209,
    "displayValue": "209 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0395",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1938 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1938,
    "displayValue": "1938 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0396",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 35 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -35,
    "displayValue": "35 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0397",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 1368 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1368,
    "displayValue": "1368 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0398",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 901 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -901,
    "displayValue": "901 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0399",
    "title": "Oceania: Terraced Pa Fortification Milestone in 3034 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3034,
    "displayValue": "3034 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0400",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 717 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -717,
    "displayValue": "717 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0401",
    "title": "Africa: Terracotta Figural Firing Milestone in 90 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -90,
    "displayValue": "90 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0402",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1633 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1633,
    "displayValue": "1633 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0403",
    "title": "South Asia: Decimal Numeral Notation Milestone in 84 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 84,
    "displayValue": "84 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0404",
    "title": "East Asia: Woodblock Printing Milestone in 1249 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1249,
    "displayValue": "1249 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0405",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 782 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -782,
    "displayValue": "782 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0406",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 2915 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2915,
    "displayValue": "2915 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0407",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 598 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -598,
    "displayValue": "598 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0408",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 29 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 29,
    "displayValue": "29 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0409",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1752 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1752,
    "displayValue": "1752 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0410",
    "title": "South Asia: Crucible Steel Smelting Milestone in 203 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 203,
    "displayValue": "203 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0411",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 1130 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1130,
    "displayValue": "1130 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0412",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 663 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -663,
    "displayValue": "663 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0413",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 2796 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2796,
    "displayValue": "2796 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0414",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 479 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -479,
    "displayValue": "479 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0415",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 148 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 148,
    "displayValue": "148 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0416",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1871 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1871,
    "displayValue": "1871 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0417",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 322 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 322,
    "displayValue": "322 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0418",
    "title": "East Asia: Directional Seismoscope Milestone in 1011 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1011,
    "displayValue": "1011 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0419",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 544 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -544,
    "displayValue": "544 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0420",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 2677 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2677,
    "displayValue": "2677 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0421",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 360 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -360,
    "displayValue": "360 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0422",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 267 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 267,
    "displayValue": "267 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0423",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1990 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1990,
    "displayValue": "1990 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0424",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 441 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 441,
    "displayValue": "441 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0425",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 892 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -892,
    "displayValue": "892 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0426",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 425 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -425,
    "displayValue": "425 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0427",
    "title": "Oceania: Megalithic Islet Construction Milestone in 2558 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2558,
    "displayValue": "2558 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0428",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 241 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -241,
    "displayValue": "241 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0429",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 386 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 386,
    "displayValue": "386 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0430",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1685 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1685,
    "displayValue": "1685 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0431",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 560 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 560,
    "displayValue": "560 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0432",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 773 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -773,
    "displayValue": "773 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0433",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 306 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -306,
    "displayValue": "306 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0434",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 2439 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2439,
    "displayValue": "2439 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0435",
    "title": "Americas: Raised Wetland Agriculture Milestone in 122 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -122,
    "displayValue": "122 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0436",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 505 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 505,
    "displayValue": "505 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0437",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1804 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1804,
    "displayValue": "1804 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0438",
    "title": "South Asia: Algebraic Power Series Milestone in 679 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 679,
    "displayValue": "679 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0439",
    "title": "East Asia: Grand Canal Grain Route Milestone in 654 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -654,
    "displayValue": "654 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0440",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 187 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -187,
    "displayValue": "187 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0441",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 2320 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2320,
    "displayValue": "2320 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0442",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 3 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -3,
    "displayValue": "3 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0443",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 624 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 624,
    "displayValue": "624 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0444",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1923 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1923,
    "displayValue": "1923 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0445",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 798 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 798,
    "displayValue": "798 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0446",
    "title": "East Asia: Magnetic Needle Compass Milestone in 535 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -535,
    "displayValue": "535 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0447",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 68 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -68,
    "displayValue": "68 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0448",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 2201 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2201,
    "displayValue": "2201 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0449",
    "title": "Americas: Terraced Andean Canal Milestone in 116 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 116,
    "displayValue": "116 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0450",
    "title": "Africa: Subterranean Tuff Church Milestone in 743 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 743,
    "displayValue": "743 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0451",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1618 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1618,
    "displayValue": "1618 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0452",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 917 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 917,
    "displayValue": "917 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0453",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 416 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -416,
    "displayValue": "416 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0454",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 51 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 51,
    "displayValue": "51 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0455",
    "title": "Oceania: Terraced Pa Fortification Milestone in 2082 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2082,
    "displayValue": "2082 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0456",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 235 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 235,
    "displayValue": "235 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0457",
    "title": "Africa: Terracotta Figural Firing Milestone in 862 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 862,
    "displayValue": "862 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0458",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1737 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1737,
    "displayValue": "1737 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0459",
    "title": "South Asia: Decimal Numeral Notation Milestone in 1036 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1036,
    "displayValue": "1036 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0460",
    "title": "East Asia: Woodblock Printing Milestone in 297 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -297,
    "displayValue": "297 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0461",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 170 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 170,
    "displayValue": "170 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0462",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 1963 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1963,
    "displayValue": "1963 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0463",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 354 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 354,
    "displayValue": "354 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0464",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 981 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 981,
    "displayValue": "981 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0465",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1856 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1856,
    "displayValue": "1856 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0466",
    "title": "South Asia: Crucible Steel Smelting Milestone in 1155 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1155,
    "displayValue": "1155 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0467",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 178 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -178,
    "displayValue": "178 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0468",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 289 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 289,
    "displayValue": "289 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0469",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 1844 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1844,
    "displayValue": "1844 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0470",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 473 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 473,
    "displayValue": "473 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0471",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 1100 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1100,
    "displayValue": "1100 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0472",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1975 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1975,
    "displayValue": "1975 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0473",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 1274 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1274,
    "displayValue": "1274 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0474",
    "title": "East Asia: Directional Seismoscope Milestone in 59 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -59,
    "displayValue": "59 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0475",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 408 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 408,
    "displayValue": "408 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0476",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 1725 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1725,
    "displayValue": "1725 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0477",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 592 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 592,
    "displayValue": "592 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0478",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1219 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1219,
    "displayValue": "1219 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0479",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1670 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1670,
    "displayValue": "1670 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0480",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 1393 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1393,
    "displayValue": "1393 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0481",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 60 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 60,
    "displayValue": "60 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0482",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 527 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 527,
    "displayValue": "527 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0483",
    "title": "Oceania: Megalithic Islet Construction Milestone in 1606 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1606,
    "displayValue": "1606 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0484",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 711 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 711,
    "displayValue": "711 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0485",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 1338 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1338,
    "displayValue": "1338 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0486",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1789 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1789,
    "displayValue": "1789 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0487",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 1512 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1512,
    "displayValue": "1512 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0488",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 179 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 179,
    "displayValue": "179 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0489",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 646 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 646,
    "displayValue": "646 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0490",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 1487 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1487,
    "displayValue": "1487 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0491",
    "title": "Americas: Raised Wetland Agriculture Milestone in 830 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 830,
    "displayValue": "830 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0492",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1457 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1457,
    "displayValue": "1457 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0493",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1908 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1908,
    "displayValue": "1908 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0494",
    "title": "South Asia: Algebraic Power Series Milestone in 1631 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1631,
    "displayValue": "1631 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0495",
    "title": "East Asia: Grand Canal Grain Route Milestone in 298 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 298,
    "displayValue": "298 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0496",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 765 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 765,
    "displayValue": "765 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0497",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 1368 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1368,
    "displayValue": "1368 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0498",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 949 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 949,
    "displayValue": "949 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0499",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 1576 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1576,
    "displayValue": "1576 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0500",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1603 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1603,
    "displayValue": "1603 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0501",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 2500 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2500,
    "displayValue": "2500 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0502",
    "title": "East Asia: Magnetic Needle Compass Milestone in 417 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 417,
    "displayValue": "417 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0503",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 884 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 884,
    "displayValue": "884 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0504",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 1249 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1249,
    "displayValue": "1249 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0505",
    "title": "Americas: Terraced Andean Canal Milestone in 1068 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1068,
    "displayValue": "1068 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0506",
    "title": "Africa: Subterranean Tuff Church Milestone in 1695 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1695,
    "displayValue": "1695 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0507",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1722 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1722,
    "displayValue": "1722 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0508",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 2381 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2381,
    "displayValue": "2381 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0509",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 536 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 536,
    "displayValue": "536 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0510",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 1003 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1003,
    "displayValue": "1003 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0511",
    "title": "Oceania: Terraced Pa Fortification Milestone in 1130 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1130,
    "displayValue": "1130 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0512",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 1187 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1187,
    "displayValue": "1187 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0513",
    "title": "Africa: Terracotta Figural Firing Milestone in 1814 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1814,
    "displayValue": "1814 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0514",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1841 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1841,
    "displayValue": "1841 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0515",
    "title": "South Asia: Decimal Numeral Notation Milestone in 2262 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2262,
    "displayValue": "2262 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0516",
    "title": "East Asia: Woodblock Printing Milestone in 655 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 655,
    "displayValue": "655 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0517",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 1122 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1122,
    "displayValue": "1122 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0518",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 1011 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1011,
    "displayValue": "1011 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0519",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 1306 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1306,
    "displayValue": "1306 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0520",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 2457 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2457,
    "displayValue": "2457 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0521",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1960 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1960,
    "displayValue": "1960 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0522",
    "title": "South Asia: Crucible Steel Smelting Milestone in 2143 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2143,
    "displayValue": "2143 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0523",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 774 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 774,
    "displayValue": "774 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0524",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 1241 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1241,
    "displayValue": "1241 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0525",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 892 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -892,
    "displayValue": "892 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0526",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 1425 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1425,
    "displayValue": "1425 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0527",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 2338 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2338,
    "displayValue": "2338 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0528",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1655 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1655,
    "displayValue": "1655 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0529",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 2024 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2024,
    "displayValue": "2024 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0530",
    "title": "East Asia: Directional Seismoscope Milestone in 893 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 893,
    "displayValue": "893 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0531",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 1360 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1360,
    "displayValue": "1360 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0532",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 773 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -773,
    "displayValue": "773 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0533",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 2956 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2956,
    "displayValue": "2956 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0534",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 2219 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2219,
    "displayValue": "2219 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0535",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1774 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1774,
    "displayValue": "1774 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0536",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 1905 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1905,
    "displayValue": "1905 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0537",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 1012 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1012,
    "displayValue": "1012 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0538",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 1479 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1479,
    "displayValue": "1479 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0539",
    "title": "Oceania: Megalithic Islet Construction Milestone in 654 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -654,
    "displayValue": "654 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0540",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 2837 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2837,
    "displayValue": "2837 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0541",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 2100 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2100,
    "displayValue": "2100 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0542",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1893 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1893,
    "displayValue": "1893 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0543",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 1786 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1786,
    "displayValue": "1786 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0544",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1131 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1131,
    "displayValue": "1131 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0545",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 1598 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1598,
    "displayValue": "1598 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0546",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 535 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -535,
    "displayValue": "535 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0547",
    "title": "Americas: Raised Wetland Agriculture Milestone in 2718 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2718,
    "displayValue": "2718 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0548",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1981 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1981,
    "displayValue": "1981 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0549",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 2012 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 2012,
    "displayValue": "2012 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0550",
    "title": "South Asia: Algebraic Power Series Milestone in 1667 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1667,
    "displayValue": "1667 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0551",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1250 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1250,
    "displayValue": "1250 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0552",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 2933 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2933,
    "displayValue": "2933 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0553",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 416 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -416,
    "displayValue": "416 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0554",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 2599 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2599,
    "displayValue": "2599 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0555",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 1862 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1862,
    "displayValue": "1862 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0556",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1707 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1707,
    "displayValue": "1707 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0557",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 1548 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1548,
    "displayValue": "1548 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0558",
    "title": "East Asia: Magnetic Needle Compass Milestone in 1369 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1369,
    "displayValue": "1369 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0559",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 2814 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2814,
    "displayValue": "2814 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0560",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 297 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -297,
    "displayValue": "297 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0561",
    "title": "Americas: Terraced Andean Canal Milestone in 2480 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2480,
    "displayValue": "2480 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0562",
    "title": "Africa: Subterranean Tuff Church Milestone in 1743 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1743,
    "displayValue": "1743 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0563",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1826 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1826,
    "displayValue": "1826 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0564",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 1429 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1429,
    "displayValue": "1429 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0565",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 1488 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1488,
    "displayValue": "1488 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0566",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 2695 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2695,
    "displayValue": "2695 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0567",
    "title": "Oceania: Terraced Pa Fortification Milestone in 178 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -178,
    "displayValue": "178 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0568",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 2361 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2361,
    "displayValue": "2361 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0569",
    "title": "Africa: Terracotta Figural Firing Milestone in 1624 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1624,
    "displayValue": "1624 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0570",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1945 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1945,
    "displayValue": "1945 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0571",
    "title": "South Asia: Decimal Numeral Notation Milestone in 1310 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1310,
    "displayValue": "1310 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0572",
    "title": "East Asia: Woodblock Printing Milestone in 1607 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1607,
    "displayValue": "1607 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0573",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 2576 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2576,
    "displayValue": "2576 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0574",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 59 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -59,
    "displayValue": "59 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0575",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 2242 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2242,
    "displayValue": "2242 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0576",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 1505 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1505,
    "displayValue": "1505 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0577",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1640 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1640,
    "displayValue": "1640 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0578",
    "title": "South Asia: Crucible Steel Smelting Milestone in 1191 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1191,
    "displayValue": "1191 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0579",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 1726 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1726,
    "displayValue": "1726 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0580",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 2457 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2457,
    "displayValue": "2457 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0581",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 60 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 60,
    "displayValue": "60 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0582",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 2123 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2123,
    "displayValue": "2123 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0583",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 1386 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1386,
    "displayValue": "1386 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0584",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1759 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1759,
    "displayValue": "1759 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0585",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 1072 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1072,
    "displayValue": "1072 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0586",
    "title": "East Asia: Directional Seismoscope Milestone in 1455 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1455,
    "displayValue": "1455 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0587",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 2338 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2338,
    "displayValue": "2338 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0588",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 179 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 179,
    "displayValue": "179 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0589",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 2004 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2004,
    "displayValue": "2004 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0590",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1267 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1267,
    "displayValue": "1267 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0591",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1878 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1878,
    "displayValue": "1878 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0592",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 953 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -953,
    "displayValue": "953 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0593",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 1336 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1336,
    "displayValue": "1336 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0594",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 2219 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2219,
    "displayValue": "2219 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0595",
    "title": "Oceania: Megalithic Islet Construction Milestone in 298 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 298,
    "displayValue": "298 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0596",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 1885 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1885,
    "displayValue": "1885 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0597",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 1148 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1148,
    "displayValue": "1148 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0598",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1997 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1997,
    "displayValue": "1997 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0599",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 834 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -834,
    "displayValue": "834 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0600",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1217 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1217,
    "displayValue": "1217 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0601",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 2100 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2100,
    "displayValue": "2100 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0602",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 417 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 417,
    "displayValue": "417 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0603",
    "title": "Americas: Raised Wetland Agriculture Milestone in 1766 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1766,
    "displayValue": "1766 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0604",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1029 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1029,
    "displayValue": "1029 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0605",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1692 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1692,
    "displayValue": "1692 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0606",
    "title": "South Asia: Algebraic Power Series Milestone in 715 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -715,
    "displayValue": "715 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0607",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1098 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1098,
    "displayValue": "1098 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0608",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 1981 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1981,
    "displayValue": "1981 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0609",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 536 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 536,
    "displayValue": "536 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0610",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 1647 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1647,
    "displayValue": "1647 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0611",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 910 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -910,
    "displayValue": "910 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0612",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1811 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1811,
    "displayValue": "1811 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0613",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 596 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -596,
    "displayValue": "596 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0614",
    "title": "East Asia: Magnetic Needle Compass Milestone in 979 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -979,
    "displayValue": "979 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0615",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 1862 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1862,
    "displayValue": "1862 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0616",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 655 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 655,
    "displayValue": "655 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0617",
    "title": "Americas: Terraced Andean Canal Milestone in 1528 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1528,
    "displayValue": "1528 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0618",
    "title": "Africa: Subterranean Tuff Church Milestone in 791 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -791,
    "displayValue": "791 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0619",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1930 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1930,
    "displayValue": "1930 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0620",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 477 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -477,
    "displayValue": "477 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0621",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 860 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -860,
    "displayValue": "860 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0622",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 1743 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1743,
    "displayValue": "1743 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0623",
    "title": "Oceania: Terraced Pa Fortification Milestone in 774 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 774,
    "displayValue": "774 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0624",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 1409 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1409,
    "displayValue": "1409 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0625",
    "title": "Africa: Terracotta Figural Firing Milestone in 672 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -672,
    "displayValue": "672 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0626",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1625 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1625,
    "displayValue": "1625 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0627",
    "title": "South Asia: Decimal Numeral Notation Milestone in 358 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -358,
    "displayValue": "358 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0628",
    "title": "East Asia: Woodblock Printing Milestone in 741 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -741,
    "displayValue": "741 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0629",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 1624 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1624,
    "displayValue": "1624 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0630",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 893 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 893,
    "displayValue": "893 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0631",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 1290 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1290,
    "displayValue": "1290 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0632",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 553 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -553,
    "displayValue": "553 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0633",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1744 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1744,
    "displayValue": "1744 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0634",
    "title": "South Asia: Crucible Steel Smelting Milestone in 239 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -239,
    "displayValue": "239 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0635",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 622 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -622,
    "displayValue": "622 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0636",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 1505 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1505,
    "displayValue": "1505 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0637",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 1012 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1012,
    "displayValue": "1012 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0638",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 1171 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1171,
    "displayValue": "1171 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0639",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 434 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -434,
    "displayValue": "434 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0640",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1863 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1863,
    "displayValue": "1863 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0641",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 120 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -120,
    "displayValue": "120 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0642",
    "title": "East Asia: Directional Seismoscope Milestone in 503 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -503,
    "displayValue": "503 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0643",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 1386 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1386,
    "displayValue": "1386 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0644",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 1131 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1131,
    "displayValue": "1131 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0645",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 1052 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1052,
    "displayValue": "1052 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0646",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 315 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -315,
    "displayValue": "315 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0647",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1982 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1982,
    "displayValue": "1982 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0648",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 1 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1,
    "displayValue": "1 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0649",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 384 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -384,
    "displayValue": "384 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0650",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 1267 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1267,
    "displayValue": "1267 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0651",
    "title": "Oceania: Megalithic Islet Construction Milestone in 1250 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1250,
    "displayValue": "1250 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0652",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 933 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -933,
    "displayValue": "933 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0653",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 196 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -196,
    "displayValue": "196 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0654",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1677 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1677,
    "displayValue": "1677 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0655",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 118 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 118,
    "displayValue": "118 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0656",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 265 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -265,
    "displayValue": "265 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0657",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 1148 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1148,
    "displayValue": "1148 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0658",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 1369 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1369,
    "displayValue": "1369 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0659",
    "title": "Americas: Raised Wetland Agriculture Milestone in 814 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -814,
    "displayValue": "814 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0660",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 77 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -77,
    "displayValue": "77 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0661",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1796 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1796,
    "displayValue": "1796 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0662",
    "title": "South Asia: Algebraic Power Series Milestone in 237 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 237,
    "displayValue": "237 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0663",
    "title": "East Asia: Grand Canal Grain Route Milestone in 146 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -146,
    "displayValue": "146 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0664",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 1029 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1029,
    "displayValue": "1029 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0665",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 1488 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1488,
    "displayValue": "1488 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0666",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 695 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -695,
    "displayValue": "695 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0667",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 42 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 42,
    "displayValue": "42 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0668",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1915 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1915,
    "displayValue": "1915 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0669",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 356 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 356,
    "displayValue": "356 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0670",
    "title": "East Asia: Magnetic Needle Compass Milestone in 27 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -27,
    "displayValue": "27 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0671",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 910 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -910,
    "displayValue": "910 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0672",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 1607 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1607,
    "displayValue": "1607 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0673",
    "title": "Americas: Terraced Andean Canal Milestone in 576 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -576,
    "displayValue": "576 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0674",
    "title": "Africa: Subterranean Tuff Church Milestone in 161 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 161,
    "displayValue": "161 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0675",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1610 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1610,
    "displayValue": "1610 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0676",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 475 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 475,
    "displayValue": "475 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0677",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 92 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 92,
    "displayValue": "92 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0678",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 791 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -791,
    "displayValue": "791 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0679",
    "title": "Oceania: Terraced Pa Fortification Milestone in 1726 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1726,
    "displayValue": "1726 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0680",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 457 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -457,
    "displayValue": "457 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0681",
    "title": "Africa: Terracotta Figural Firing Milestone in 280 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 280,
    "displayValue": "280 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0682",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1729 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1729,
    "displayValue": "1729 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0683",
    "title": "South Asia: Decimal Numeral Notation Milestone in 594 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 594,
    "displayValue": "594 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0684",
    "title": "East Asia: Woodblock Printing Milestone in 211 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 211,
    "displayValue": "211 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0685",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 672 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -672,
    "displayValue": "672 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0686",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 3955 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3955,
    "displayValue": "3955 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0687",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 338 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -338,
    "displayValue": "338 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0688",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 399 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 399,
    "displayValue": "399 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0689",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1848 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1848,
    "displayValue": "1848 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0690",
    "title": "South Asia: Crucible Steel Smelting Milestone in 713 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 713,
    "displayValue": "713 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0691",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 330 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 330,
    "displayValue": "330 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0692",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 553 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -553,
    "displayValue": "553 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0693",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 3836 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3836,
    "displayValue": "3836 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0694",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 219 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -219,
    "displayValue": "219 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0695",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 518 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 518,
    "displayValue": "518 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0696",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1967 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1967,
    "displayValue": "1967 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0697",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 832 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 832,
    "displayValue": "832 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0698",
    "title": "East Asia: Directional Seismoscope Milestone in 449 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 449,
    "displayValue": "449 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0699",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 434 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -434,
    "displayValue": "434 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0700",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 3717 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3717,
    "displayValue": "3717 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0701",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 100 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -100,
    "displayValue": "100 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0702",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 637 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 637,
    "displayValue": "637 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0703",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1662 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1662,
    "displayValue": "1662 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0704",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 951 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 951,
    "displayValue": "951 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0705",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 568 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 568,
    "displayValue": "568 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0706",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 315 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -315,
    "displayValue": "315 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0707",
    "title": "Oceania: Megalithic Islet Construction Milestone in 3598 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3598,
    "displayValue": "3598 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0708",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 19 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 19,
    "displayValue": "19 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0709",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 756 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 756,
    "displayValue": "756 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0710",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1781 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1781,
    "displayValue": "1781 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0711",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 1070 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1070,
    "displayValue": "1070 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0712",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 687 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 687,
    "displayValue": "687 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0713",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 196 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -196,
    "displayValue": "196 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0714",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 3479 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3479,
    "displayValue": "3479 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0715",
    "title": "Americas: Raised Wetland Agriculture Milestone in 138 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 138,
    "displayValue": "138 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0716",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 875 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 875,
    "displayValue": "875 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0717",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1900 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1900,
    "displayValue": "1900 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0718",
    "title": "South Asia: Algebraic Power Series Milestone in 1189 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1189,
    "displayValue": "1189 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0719",
    "title": "East Asia: Grand Canal Grain Route Milestone in 806 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 806,
    "displayValue": "806 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0720",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 77 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -77,
    "displayValue": "77 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0721",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 3360 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3360,
    "displayValue": "3360 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0722",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 257 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 257,
    "displayValue": "257 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0723",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 994 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 994,
    "displayValue": "994 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0724",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 2019 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 2019,
    "displayValue": "2019 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0725",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 1308 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1308,
    "displayValue": "1308 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0726",
    "title": "East Asia: Magnetic Needle Compass Milestone in 925 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 925,
    "displayValue": "925 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0727",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 42 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 42,
    "displayValue": "42 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0728",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 3241 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3241,
    "displayValue": "3241 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0729",
    "title": "Americas: Terraced Andean Canal Milestone in 376 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 376,
    "displayValue": "376 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0730",
    "title": "Africa: Subterranean Tuff Church Milestone in 1113 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1113,
    "displayValue": "1113 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0731",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1714 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1714,
    "displayValue": "1714 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0732",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 1427 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1427,
    "displayValue": "1427 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0733",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 1044 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1044,
    "displayValue": "1044 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0734",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 161 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 161,
    "displayValue": "161 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0735",
    "title": "Oceania: Terraced Pa Fortification Milestone in 3122 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3122,
    "displayValue": "3122 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0736",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 495 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 495,
    "displayValue": "495 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0737",
    "title": "Africa: Terracotta Figural Firing Milestone in 1232 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1232,
    "displayValue": "1232 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0738",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1833 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1833,
    "displayValue": "1833 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0739",
    "title": "South Asia: Decimal Numeral Notation Milestone in 1546 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1546,
    "displayValue": "1546 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0740",
    "title": "East Asia: Woodblock Printing Milestone in 1163 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1163,
    "displayValue": "1163 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0741",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 280 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 280,
    "displayValue": "280 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0742",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 3003 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -3003,
    "displayValue": "3003 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0743",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 614 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 614,
    "displayValue": "614 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0744",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 1351 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1351,
    "displayValue": "1351 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0745",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1952 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1952,
    "displayValue": "1952 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0746",
    "title": "South Asia: Crucible Steel Smelting Milestone in 1665 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1665,
    "displayValue": "1665 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0747",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 1282 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1282,
    "displayValue": "1282 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0748",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 399 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 399,
    "displayValue": "399 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0749",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 2884 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2884,
    "displayValue": "2884 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0750",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 733 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 733,
    "displayValue": "733 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0751",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 1470 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1470,
    "displayValue": "1470 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0752",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1647 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1647,
    "displayValue": "1647 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0753",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 2466 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2466,
    "displayValue": "2466 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0754",
    "title": "East Asia: Directional Seismoscope Milestone in 1401 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1401,
    "displayValue": "1401 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0755",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 518 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 518,
    "displayValue": "518 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0756",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 2765 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2765,
    "displayValue": "2765 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0757",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 852 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 852,
    "displayValue": "852 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0758",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1589 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1589,
    "displayValue": "1589 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0759",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1766 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1766,
    "displayValue": "1766 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0760",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 2347 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2347,
    "displayValue": "2347 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0761",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 1520 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1520,
    "displayValue": "1520 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0762",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 637 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 637,
    "displayValue": "637 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0763",
    "title": "Oceania: Megalithic Islet Construction Milestone in 2646 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2646,
    "displayValue": "2646 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0764",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 971 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 971,
    "displayValue": "971 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0765",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 1708 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1708,
    "displayValue": "1708 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0766",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1885 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1885,
    "displayValue": "1885 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0767",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 2228 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2228,
    "displayValue": "2228 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0768",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1639 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1639,
    "displayValue": "1639 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0769",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 756 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 756,
    "displayValue": "756 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0770",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 2527 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2527,
    "displayValue": "2527 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0771",
    "title": "Americas: Raised Wetland Agriculture Milestone in 1090 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1090,
    "displayValue": "1090 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0772",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1827 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1827,
    "displayValue": "1827 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0773",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 2004 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 2004,
    "displayValue": "2004 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0774",
    "title": "South Asia: Algebraic Power Series Milestone in 2109 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -2109,
    "displayValue": "2109 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0775",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1758 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1758,
    "displayValue": "1758 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0776",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 875 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 875,
    "displayValue": "875 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0777",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 2408 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2408,
    "displayValue": "2408 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0778",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 1209 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1209,
    "displayValue": "1209 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0779",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 2444 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2444,
    "displayValue": "2444 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0780",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1699 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1699,
    "displayValue": "1699 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0781",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 1990 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1990,
    "displayValue": "1990 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0782",
    "title": "East Asia: Magnetic Needle Compass Milestone in 1423 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1423,
    "displayValue": "1423 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0783",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 994 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 994,
    "displayValue": "994 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0784",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 2289 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2289,
    "displayValue": "2289 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0785",
    "title": "Americas: Terraced Andean Canal Milestone in 1328 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1328,
    "displayValue": "1328 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0786",
    "title": "Africa: Subterranean Tuff Church Milestone in 2325 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2325,
    "displayValue": "2325 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0787",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1818 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1818,
    "displayValue": "1818 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0788",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 1871 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1871,
    "displayValue": "1871 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0789",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 1304 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1304,
    "displayValue": "1304 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0790",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 1113 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1113,
    "displayValue": "1113 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0791",
    "title": "Oceania: Terraced Pa Fortification Milestone in 2170 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2170,
    "displayValue": "2170 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0792",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 1447 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 1447,
    "displayValue": "1447 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0793",
    "title": "Africa: Terracotta Figural Firing Milestone in 2206 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2206,
    "displayValue": "2206 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0794",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1937 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1937,
    "displayValue": "1937 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0795",
    "title": "South Asia: Decimal Numeral Notation Milestone in 1752 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1752,
    "displayValue": "1752 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0796",
    "title": "East Asia: Woodblock Printing Milestone in 1185 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1185,
    "displayValue": "1185 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0797",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 1232 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1232,
    "displayValue": "1232 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0798",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 2051 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -2051,
    "displayValue": "2051 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0799",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 2934 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2934,
    "displayValue": "2934 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0800",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 2087 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -2087,
    "displayValue": "2087 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0801",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1632 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1632,
    "displayValue": "1632 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0802",
    "title": "South Asia: Crucible Steel Smelting Milestone in 1633 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1633,
    "displayValue": "1633 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0803",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 1066 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1066,
    "displayValue": "1066 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0804",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 1351 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1351,
    "displayValue": "1351 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0805",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 1932 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1932,
    "displayValue": "1932 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0806",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 2815 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2815,
    "displayValue": "2815 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0807",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 1968 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1968,
    "displayValue": "1968 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0808",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1751 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1751,
    "displayValue": "1751 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0809",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 1514 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1514,
    "displayValue": "1514 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0810",
    "title": "East Asia: Directional Seismoscope Milestone in 947 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -947,
    "displayValue": "947 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0811",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 1470 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1470,
    "displayValue": "1470 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0812",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 1813 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1813,
    "displayValue": "1813 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0813",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 2696 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2696,
    "displayValue": "2696 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0814",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1849 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1849,
    "displayValue": "1849 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0815",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1870 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1870,
    "displayValue": "1870 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0816",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 1395 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1395,
    "displayValue": "1395 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0817",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 828 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -828,
    "displayValue": "828 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0818",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 1589 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 1589,
    "displayValue": "1589 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0819",
    "title": "Oceania: Megalithic Islet Construction Milestone in 1694 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1694,
    "displayValue": "1694 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0820",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 2577 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2577,
    "displayValue": "2577 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0821",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 1730 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1730,
    "displayValue": "1730 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0822",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1989 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1989,
    "displayValue": "1989 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0823",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 1276 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1276,
    "displayValue": "1276 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0824",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 709 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -709,
    "displayValue": "709 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0825",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 2942 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2942,
    "displayValue": "2942 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0826",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 1575 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1575,
    "displayValue": "1575 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0827",
    "title": "Americas: Raised Wetland Agriculture Milestone in 2458 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2458,
    "displayValue": "2458 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0828",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1611 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1611,
    "displayValue": "1611 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0829",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1684 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1684,
    "displayValue": "1684 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0830",
    "title": "South Asia: Algebraic Power Series Milestone in 1157 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1157,
    "displayValue": "1157 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0831",
    "title": "East Asia: Grand Canal Grain Route Milestone in 590 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -590,
    "displayValue": "590 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0832",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 2823 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2823,
    "displayValue": "2823 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0833",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 1456 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1456,
    "displayValue": "1456 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0834",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 2339 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2339,
    "displayValue": "2339 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0835",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 1492 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1492,
    "displayValue": "1492 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0836",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1803 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1803,
    "displayValue": "1803 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0837",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 1038 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -1038,
    "displayValue": "1038 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0838",
    "title": "East Asia: Magnetic Needle Compass Milestone in 471 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -471,
    "displayValue": "471 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0839",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 2704 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2704,
    "displayValue": "2704 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0840",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 1337 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1337,
    "displayValue": "1337 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0841",
    "title": "Americas: Terraced Andean Canal Milestone in 2220 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2220,
    "displayValue": "2220 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0842",
    "title": "Africa: Subterranean Tuff Church Milestone in 1373 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1373,
    "displayValue": "1373 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0843",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1922 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1922,
    "displayValue": "1922 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0844",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 919 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -919,
    "displayValue": "919 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0845",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 352 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -352,
    "displayValue": "352 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0846",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 2585 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2585,
    "displayValue": "2585 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0847",
    "title": "Oceania: Terraced Pa Fortification Milestone in 1218 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1218,
    "displayValue": "1218 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0848",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 2101 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -2101,
    "displayValue": "2101 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0849",
    "title": "Africa: Terracotta Figural Firing Milestone in 1254 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1254,
    "displayValue": "1254 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0850",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1617 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1617,
    "displayValue": "1617 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0851",
    "title": "South Asia: Decimal Numeral Notation Milestone in 800 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -800,
    "displayValue": "800 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0852",
    "title": "East Asia: Woodblock Printing Milestone in 233 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -233,
    "displayValue": "233 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0853",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 2466 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2466,
    "displayValue": "2466 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0854",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 1099 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -1099,
    "displayValue": "1099 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0855",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 1982 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1982,
    "displayValue": "1982 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0856",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 1135 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1135,
    "displayValue": "1135 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0857",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1736 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1736,
    "displayValue": "1736 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0858",
    "title": "South Asia: Crucible Steel Smelting Milestone in 681 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -681,
    "displayValue": "681 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0859",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 114 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -114,
    "displayValue": "114 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0860",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 2347 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2347,
    "displayValue": "2347 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0861",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 980 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -980,
    "displayValue": "980 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0862",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 1863 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1863,
    "displayValue": "1863 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0863",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 1016 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -1016,
    "displayValue": "1016 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0864",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1855 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1855,
    "displayValue": "1855 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0865",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 562 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -562,
    "displayValue": "562 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0866",
    "title": "East Asia: Directional Seismoscope Milestone in 5 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 5,
    "displayValue": "5 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0867",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 2228 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2228,
    "displayValue": "2228 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0868",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 861 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -861,
    "displayValue": "861 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0869",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 1744 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1744,
    "displayValue": "1744 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0870",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 897 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -897,
    "displayValue": "897 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0871",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1974 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1974,
    "displayValue": "1974 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0872",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 443 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -443,
    "displayValue": "443 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0873",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 124 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 124,
    "displayValue": "124 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0874",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 2109 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -2109,
    "displayValue": "2109 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0875",
    "title": "Oceania: Megalithic Islet Construction Milestone in 742 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -742,
    "displayValue": "742 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0876",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 1625 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1625,
    "displayValue": "1625 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0877",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 778 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -778,
    "displayValue": "778 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0878",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1669 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1669,
    "displayValue": "1669 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0879",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 324 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -324,
    "displayValue": "324 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0880",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 243 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 243,
    "displayValue": "243 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0881",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 1990 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1990,
    "displayValue": "1990 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0882",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 623 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -623,
    "displayValue": "623 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0883",
    "title": "Americas: Raised Wetland Agriculture Milestone in 1506 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1506,
    "displayValue": "1506 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0884",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 659 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -659,
    "displayValue": "659 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0885",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1788 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1788,
    "displayValue": "1788 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0886",
    "title": "South Asia: Algebraic Power Series Milestone in 205 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -205,
    "displayValue": "205 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0887",
    "title": "East Asia: Grand Canal Grain Route Milestone in 362 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 362,
    "displayValue": "362 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0888",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 1871 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1871,
    "displayValue": "1871 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0889",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 504 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -504,
    "displayValue": "504 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0890",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 1387 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1387,
    "displayValue": "1387 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0891",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 540 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -540,
    "displayValue": "540 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0892",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 1907 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1907,
    "displayValue": "1907 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0893",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 86 BCE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": -86,
    "displayValue": "86 BCE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0894",
    "title": "East Asia: Magnetic Needle Compass Milestone in 481 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 481,
    "displayValue": "481 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0895",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 1752 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1752,
    "displayValue": "1752 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0896",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 385 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -385,
    "displayValue": "385 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0897",
    "title": "Americas: Terraced Andean Canal Milestone in 1268 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1268,
    "displayValue": "1268 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0898",
    "title": "Africa: Subterranean Tuff Church Milestone in 421 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -421,
    "displayValue": "421 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0899",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1602 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1602,
    "displayValue": "1602 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0900",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 33 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 33,
    "displayValue": "33 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0901",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 600 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 600,
    "displayValue": "600 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0902",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 1633 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1633,
    "displayValue": "1633 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0903",
    "title": "Oceania: Terraced Pa Fortification Milestone in 266 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -266,
    "displayValue": "266 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0904",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 1149 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1149,
    "displayValue": "1149 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0905",
    "title": "Africa: Terracotta Figural Firing Milestone in 302 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -302,
    "displayValue": "302 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0906",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1721 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1721,
    "displayValue": "1721 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0907",
    "title": "South Asia: Decimal Numeral Notation Milestone in 152 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 152,
    "displayValue": "152 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0908",
    "title": "East Asia: Woodblock Printing Milestone in 719 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 719,
    "displayValue": "719 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0909",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 1514 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1514,
    "displayValue": "1514 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0910",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 147 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -147,
    "displayValue": "147 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0911",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 1030 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -1030,
    "displayValue": "1030 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0912",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 183 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -183,
    "displayValue": "183 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0913",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1840 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1840,
    "displayValue": "1840 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0914",
    "title": "South Asia: Crucible Steel Smelting Milestone in 271 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 271,
    "displayValue": "271 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0915",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 838 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 838,
    "displayValue": "838 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0916",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 1395 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1395,
    "displayValue": "1395 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0917",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 28 BCE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": -28,
    "displayValue": "28 BCE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0918",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 911 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -911,
    "displayValue": "911 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0919",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 64 BCE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": -64,
    "displayValue": "64 BCE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0920",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1959 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1959,
    "displayValue": "1959 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0921",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 390 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 390,
    "displayValue": "390 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0922",
    "title": "East Asia: Directional Seismoscope Milestone in 957 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 957,
    "displayValue": "957 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0923",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 1276 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1276,
    "displayValue": "1276 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0924",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 91 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 91,
    "displayValue": "91 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0925",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 792 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -792,
    "displayValue": "792 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0926",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 55 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 55,
    "displayValue": "55 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0927",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1654 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1654,
    "displayValue": "1654 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0928",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 509 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 509,
    "displayValue": "509 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0929",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 1076 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1076,
    "displayValue": "1076 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0930",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 1157 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1157,
    "displayValue": "1157 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0931",
    "title": "Oceania: Megalithic Islet Construction Milestone in 210 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 210,
    "displayValue": "210 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0932",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 673 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -673,
    "displayValue": "673 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0933",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 174 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 174,
    "displayValue": "174 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0934",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1773 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1773,
    "displayValue": "1773 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0935",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 628 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 628,
    "displayValue": "628 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0936",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1195 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1195,
    "displayValue": "1195 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0937",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 1038 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -1038,
    "displayValue": "1038 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0938",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 329 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 329,
    "displayValue": "329 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0939",
    "title": "Americas: Raised Wetland Agriculture Milestone in 554 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -554,
    "displayValue": "554 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0940",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 293 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 293,
    "displayValue": "293 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0941",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1892 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1892,
    "displayValue": "1892 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0942",
    "title": "South Asia: Algebraic Power Series Milestone in 747 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 747,
    "displayValue": "747 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0943",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1314 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1314,
    "displayValue": "1314 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0944",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 919 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -919,
    "displayValue": "919 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0945",
    "title": "Oceania: Basalt Aquaculture Weir Milestone in 448 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 448,
    "displayValue": "448 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0946",
    "title": "Americas: Polychrome Tapestry Weave Milestone in 435 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -435,
    "displayValue": "435 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0947",
    "title": "Africa: Trans-Saharan Caravan Waystation Milestone in 412 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 412,
    "displayValue": "412 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0948",
    "title": "Global Science: Semiconductor Transistor Gate Milestone in 2011 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 2011,
    "displayValue": "2011 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0949",
    "title": "South Asia: Granite Dravidian Gopuram Milestone in 866 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 866,
    "displayValue": "866 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0950",
    "title": "East Asia: Magnetic Needle Compass Milestone in 1433 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1433,
    "displayValue": "1433 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0951",
    "title": "Middle East: Bimaristan Clinical Trial Milestone in 800 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -800,
    "displayValue": "800 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0952",
    "title": "Oceania: Monolithic Ancestral Tuff Statues Milestone in 567 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 567,
    "displayValue": "567 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0953",
    "title": "Americas: Terraced Andean Canal Milestone in 316 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -316,
    "displayValue": "316 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0954",
    "title": "Africa: Subterranean Tuff Church Milestone in 531 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 531,
    "displayValue": "531 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0955",
    "title": "Global Science: Radio Astronomical Detection Milestone in 1706 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1706,
    "displayValue": "1706 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0956",
    "title": "South Asia: Ayurvedic Pharmacopeia Milestone in 985 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 985,
    "displayValue": "985 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0957",
    "title": "East Asia: Hangul Featural Alphabet Milestone in 1552 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1552,
    "displayValue": "1552 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0958",
    "title": "Middle East: Astronomical Meridian Quadrant Milestone in 681 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -681,
    "displayValue": "681 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0959",
    "title": "Oceania: Terraced Pa Fortification Milestone in 686 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 686,
    "displayValue": "686 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0960",
    "title": "Americas: Sunken Circular Ceremonial Plaza Milestone in 197 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -197,
    "displayValue": "197 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0961",
    "title": "Africa: Terracotta Figural Firing Milestone in 650 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 650,
    "displayValue": "650 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0962",
    "title": "Global Science: Quantum Energy Formalization Milestone in 1825 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1825,
    "displayValue": "1825 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0963",
    "title": "South Asia: Decimal Numeral Notation Milestone in 1104 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1104,
    "displayValue": "1104 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0964",
    "title": "East Asia: Woodblock Printing Milestone in 1671 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1671,
    "displayValue": "1671 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0965",
    "title": "Middle East: Algebraic Equation Balancing Milestone in 562 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -562,
    "displayValue": "562 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0966",
    "title": "Oceania: Winter Solstice Trilithon Milestone in 805 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 805,
    "displayValue": "805 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0967",
    "title": "Americas: Shell Beaded Treaty Wampum Milestone in 78 BCE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": -78,
    "displayValue": "78 BCE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0968",
    "title": "Africa: Industrial Bloomery Smelting Milestone in 769 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 769,
    "displayValue": "769 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0969",
    "title": "Global Science: Spectroscopic Planetary Analysis Milestone in 1944 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1944,
    "displayValue": "1944 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0970",
    "title": "South Asia: Crucible Steel Smelting Milestone in 1223 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1223,
    "displayValue": "1223 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0971",
    "title": "East Asia: Endless Chain Clock Escapement Milestone in 1790 CE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": 1790,
    "displayValue": "1790 CE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0972",
    "title": "Middle East: Mechanical Camshaft Automata Milestone in 443 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -443,
    "displayValue": "443 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0973",
    "title": "Oceania: Swell Diffraction Stick Chart Milestone in 924 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 924,
    "displayValue": "924 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0974",
    "title": "Americas: Dry-Stone Ashlar Masonry Milestone in 41 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 41,
    "displayValue": "41 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0975",
    "title": "Africa: Mnemonic Lukasa Memory Board Milestone in 888 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 888,
    "displayValue": "888 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0976",
    "title": "Global Science: Planetary Rover Analysis Milestone in 1639 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1639,
    "displayValue": "1639 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0977",
    "title": "South Asia: Vedic Astronomy Tracking Milestone in 1342 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1342,
    "displayValue": "1342 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0978",
    "title": "East Asia: Directional Seismoscope Milestone in 1391 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1391,
    "displayValue": "1391 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0979",
    "title": "Middle East: Dioptric Optics Treatise Milestone in 324 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -324,
    "displayValue": "324 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0980",
    "title": "Oceania: Double-Hulled Oceanic Voyage Milestone in 1043 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1043,
    "displayValue": "1043 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0981",
    "title": "Americas: Lost-Wax Tumbaga Casting Milestone in 160 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 160,
    "displayValue": "160 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0982",
    "title": "Africa: Medicinal Botanical Compendium Milestone in 1007 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1007,
    "displayValue": "1007 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0983",
    "title": "Global Science: Subatomic Collider Detection Milestone in 1758 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1758,
    "displayValue": "1758 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0984",
    "title": "South Asia: Rock-Cut Basalt Caves Milestone in 1461 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1461,
    "displayValue": "1461 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0985",
    "title": "East Asia: Lost-Wax Bronze Vessels Milestone in 1272 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1272,
    "displayValue": "1272 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0986",
    "title": "Middle East: Qanat Gravity Aqueduct Milestone in 205 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -205,
    "displayValue": "205 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0987",
    "title": "Oceania: Megalithic Islet Construction Milestone in 1162 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1162,
    "displayValue": "1162 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0988",
    "title": "Americas: Basalt Stele Glyphic Inscription Milestone in 279 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 279,
    "displayValue": "279 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0989",
    "title": "Africa: Dry-Granite Wall Engineering Milestone in 1126 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1126,
    "displayValue": "1126 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0990",
    "title": "Global Science: Helical Genetic Sequencing Milestone in 1877 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1877,
    "displayValue": "1877 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0991",
    "title": "South Asia: Nalanda Scholastic Curricula Milestone in 1580 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1580,
    "displayValue": "1580 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0992",
    "title": "East Asia: High-Fired Celadon Glazes Milestone in 1153 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1153,
    "displayValue": "1153 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_0993",
    "title": "Middle East: Cuneiform Legal Accounting Milestone in 86 BCE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": -86,
    "displayValue": "86 BCE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  },
  {
    "id": "EP_0994",
    "title": "Oceania: Lapita Earthenware Exchange Milestone in 1281 CE",
    "category": "Navigation & Architecture",
    "region": "Oceania",
    "value": 1281,
    "displayValue": "1281 CE",
    "clue": "Historical development in Oceania documenting advancements in navigation & architecture."
  },
  {
    "id": "EP_0995",
    "title": "Americas: Raised Wetland Agriculture Milestone in 398 CE",
    "category": "Agronomy & Metallurgy",
    "region": "Americas",
    "value": 398,
    "displayValue": "398 CE",
    "clue": "Historical development in Americas documenting advancements in agronomy & metallurgy."
  },
  {
    "id": "EP_0996",
    "title": "Africa: Lost-Wax Brass Regalia Milestone in 1245 CE",
    "category": "Architecture & Metallurgy",
    "region": "Africa",
    "value": 1245,
    "displayValue": "1245 CE",
    "clue": "Historical development in Africa documenting advancements in architecture & metallurgy."
  },
  {
    "id": "EP_0997",
    "title": "Global Science: Gravitational Wave Interferometry Milestone in 1996 CE",
    "category": "Physics & Astronomy",
    "region": "Global Science",
    "value": 1996,
    "displayValue": "1996 CE",
    "clue": "Historical development in Global Science documenting advancements in physics & astronomy."
  },
  {
    "id": "EP_0998",
    "title": "South Asia: Algebraic Power Series Milestone in 1699 CE",
    "category": "Science & Inventions",
    "region": "South Asia",
    "value": 1699,
    "displayValue": "1699 CE",
    "clue": "Historical development in South Asia documenting advancements in science & inventions."
  },
  {
    "id": "EP_0999",
    "title": "East Asia: Grand Canal Grain Route Milestone in 1034 BCE",
    "category": "Tech & Governance",
    "region": "East Asia",
    "value": -1034,
    "displayValue": "1034 BCE",
    "clue": "Historical development in East Asia documenting advancements in tech & governance."
  },
  {
    "id": "EP_1000",
    "title": "Middle East: Glazed Tile Geometric Mosaic Milestone in 33 CE",
    "category": "Mathematics & Optics",
    "region": "Middle East",
    "value": 33,
    "displayValue": "33 CE",
    "clue": "Historical development in Middle East documenting advancements in mathematics & optics."
  }
];
