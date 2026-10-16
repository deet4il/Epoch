// Epoch: Global Timeline Question Bank
// Total Questions: 1000
// Created by DCA

const QUESTIONS_DB = [
  {
    "id": "EP_0001",
    "title": "Oldest Zircon Crystal Formed in Jack Hills",
    "category": "Geology",
    "region": "Global Science",
    "value": -4404000000,
    "displayValue": "4.4 Billion BCE",
    "clue": "Western Australian zircon indicates early liquid oceans and continental crust."
  },
  {
    "id": "EP_0002",
    "title": "Microbial Stromatolite Formations Emerge in Pilbara",
    "category": "Paleobiology",
    "region": "Global Science",
    "value": -3480000000,
    "displayValue": "3.48 Billion BCE",
    "clue": "Layered cyanobacterial structures release early photosynthetic oxygen."
  },
  {
    "id": "EP_0003",
    "title": "The Great Oxidation Event Saturates Earth's Atmosphere",
    "category": "Geology",
    "region": "Global Science",
    "value": -2400000000,
    "displayValue": "2.4 Billion BCE",
    "clue": "Atmospheric oxygen triggers global rust precipitation and Huronian glaciation."
  },
  {
    "id": "EP_0004",
    "title": "Bangiomorpha Red Algae Pioneers Earliest Sexual Reproduction",
    "category": "Evolution",
    "region": "Global Science",
    "value": -1047000000,
    "displayValue": "1.05 Billion BCE",
    "clue": "Multicellular Arctic fossils show specialized cell differentiation."
  },
  {
    "id": "EP_0005",
    "title": "Ediacaran Soft-Bodied Organisms Flourish (Dickinsonia)",
    "category": "Paleontology",
    "region": "Global Science",
    "value": -575000000,
    "displayValue": "575 Million BCE",
    "clue": "Quilted frond-like marine organisms thrive before modern predators emerge."
  },
  {
    "id": "EP_0006",
    "title": "Cambrian Explosion Diversifies Major Animal Phyla",
    "category": "Paleontology",
    "region": "Global Science",
    "value": -538800000,
    "displayValue": "538.8 Million BCE",
    "clue": "Trilobites, chordates, and arthropods appear in rich fossil beds worldwide."
  },
  {
    "id": "EP_0007",
    "title": "Early Non-Vascular Land Plants Colonize Continents",
    "category": "Paleobotany",
    "region": "Global Science",
    "value": -470000000,
    "displayValue": "470 Million BCE",
    "clue": "Bryophyte ancestors emerge along freshwater coastal margins with fungi."
  },
  {
    "id": "EP_0008",
    "title": "Tiktaalik Roseae Bridges Fin-to-Limb Transition for Tetrapods",
    "category": "Paleontology",
    "region": "Global Science",
    "value": -375000000,
    "displayValue": "375 Million BCE",
    "clue": "Lobe-finned river fish develops flexible neck and wrist joints."
  },
  {
    "id": "EP_0009",
    "title": "Carboniferous Scale Tree Forests Form Major Coal Beds",
    "category": "Paleobotany",
    "region": "Global Science",
    "value": -320000000,
    "displayValue": "320 Million BCE",
    "clue": "Equatorial scale-tree swamps draw down massive atmospheric carbon."
  },
  {
    "id": "EP_0010",
    "title": "Permian-Triassic Mass Extinction Eradicates 95% of Marine Life",
    "category": "Geology",
    "region": "Global Science",
    "value": -251900000,
    "displayValue": "251.9 Million BCE",
    "clue": "Siberian flood basalt eruptions cause catastrophic ocean acidification."
  },
  {
    "id": "EP_0011",
    "title": "Archaeopteryx Evolves Feathered Wings and Toothed Jaws",
    "category": "Paleontology",
    "region": "Global Science",
    "value": -150000000,
    "displayValue": "150 Million BCE",
    "clue": "Transitional fossil connects theropod dinosaurs to modern avian birds."
  },
  {
    "id": "EP_0012",
    "title": "Chicxulub Asteroid Impact Drives Non-Avian Dinosaurs to Extinction",
    "category": "Astronomy",
    "region": "Global Science",
    "value": -66000000,
    "displayValue": "66 Million BCE",
    "clue": "A 10-km bolide impacts Yucatán, blanketing the stratosphere in dust."
  },
  {
    "id": "EP_0013",
    "title": "Paleocene-Eocene Thermal Maximum Triggers Rapid Global Warming",
    "category": "Paleoclimatology",
    "region": "Global Science",
    "value": -56000000,
    "displayValue": "56 Million BCE",
    "clue": "Massive methane and carbon surge triggers deep-sea benthic extinction."
  },
  {
    "id": "EP_0014",
    "title": "Wonderwerk Cave Inhabitants Master Controlled Use of Fire",
    "category": "Anthropology",
    "region": "Human Origins",
    "value": -1000000,
    "displayValue": "c. 1 Million BCE",
    "clue": "Controlled hearths documented in South African subterranean cave strata."
  },
  {
    "id": "EP_0015",
    "title": "Jebel Irhoud Early Modern Humans Inhabit Morocco",
    "category": "Human Origins",
    "region": "North Africa",
    "value": -315000,
    "displayValue": "c. 315,000 BCE",
    "clue": "Fossils push back modern human lineage morphology across Pan-Africa."
  },
  {
    "id": "EP_0016",
    "title": "Bizmoune Cave Inhabitants Fashion Shell Bead Jewelry",
    "category": "Archaeology",
    "region": "North Africa",
    "value": -142000,
    "displayValue": "c. 142,000 BCE",
    "clue": "Perforated gastropod shells worn as personal symbolic ornamentation."
  },
  {
    "id": "EP_0017",
    "title": "Blombos Cave Cross-Hatched Ochre Inscription Engraved",
    "category": "Archaeology",
    "region": "Southern Africa",
    "value": -73000,
    "displayValue": "c. 73,000 BCE",
    "clue": "Silcrete flake engraved with geometric abstract pigment lines."
  },
  {
    "id": "EP_0018",
    "title": "Maros-Pangkep Babirusa Cave Painting Created in Sulawesi",
    "category": "Rock Art",
    "region": "Southeast Asia",
    "value": -45500,
    "displayValue": "c. 45,500 BCE",
    "clue": "Oldest known representational figurative animal art on limestone walls."
  },
  {
    "id": "EP_0019",
    "title": "Manunggul Burial Jar Crafted in Lipuun Point, Palawan",
    "category": "Ceramics & Art",
    "region": "Southeast Asia",
    "value": -890,
    "displayValue": "c. 890 BCE",
    "clue": "Secondary burial vessel featuring two spirit oarsmen rowing into the afterworld."
  },
  {
    "id": "EP_0020",
    "title": "Dong Son Bronze Kettle Drums Cast in Northern Vietnam",
    "category": "Metallurgy",
    "region": "Southeast Asia",
    "value": -500,
    "displayValue": "c. 500 BCE",
    "clue": "Elaborate lost-wax bronze drums depicting warriors, hornbills, and stilt houses."
  },
  {
    "id": "EP_0021",
    "title": "Sa Huynh Culture Develops Maritime Jade Trade (Lingling-o)",
    "category": "Trade",
    "region": "Southeast Asia",
    "value": -400,
    "displayValue": "c. 400 BCE",
    "clue": "Double-headed animal nephrite earrings traded across the South China Sea."
  },
  {
    "id": "EP_0022",
    "title": "Banaue Rice Terraces Carved by Ifugao Engineers",
    "category": "Agriculture",
    "region": "Southeast Asia",
    "value": 100,
    "displayValue": "c. 100 CE",
    "clue": "Stone-walled hillside irrigation networks channeling mountain springs."
  },
  {
    "id": "EP_0023",
    "title": "Funan Kingdom Establishes Oc Eo Maritime Entrepôt",
    "category": "Maritime Trade",
    "region": "Southeast Asia",
    "value": 150,
    "displayValue": "c. 150 CE",
    "clue": "Mekong Delta port connecting trade from Rome, Persia, India, and Han China."
  },
  {
    "id": "EP_0024",
    "title": "Champa Thalassocracy Founded by Sri Mara",
    "category": "Kingdoms",
    "region": "Southeast Asia",
    "value": 192,
    "displayValue": "192 CE",
    "clue": "Austronesian kingdom flourishes in central Vietnam through aromatic resin trade."
  },
  {
    "id": "EP_0025",
    "title": "Butuan Balangay Planks Radiocarbon Dated in Mindanao",
    "category": "Maritime Tech",
    "region": "Southeast Asia",
    "value": 320,
    "displayValue": "c. 320 CE",
    "clue": "Edge-pegged lashed-lug wooden voyaging boats built without single metal nails."
  },
  {
    "id": "EP_0026",
    "title": "Tarumanagara King Purnawarman Carves Tugu Inscription",
    "category": "Hydrology",
    "region": "Southeast Asia",
    "value": 410,
    "displayValue": "c. 410 CE",
    "clue": "Records canalization of Chandrabhaga River to prevent seasonal flooding."
  },
  {
    "id": "EP_0027",
    "title": "Kedukan Bukit Inscription Proclaims Srivijaya's Foundation",
    "category": "Maritime Empires",
    "region": "Southeast Asia",
    "value": 683,
    "displayValue": "683 CE",
    "clue": "Dapunta Hyang leads 20,000 troops by boat to establish a naval trading empire."
  },
  {
    "id": "EP_0028",
    "title": "Sailendra Dynasty Completes Borobudur Stupa in Java",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 825,
    "displayValue": "c. 825 CE",
    "clue": "Over 500 Buddha statues and 2,600 bas-reliefs carved in volcanic andesite stone."
  },
  {
    "id": "EP_0029",
    "title": "Prambanan Hindu Complex Dedicated to the Trimurti",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 856,
    "displayValue": "c. 856 CE",
    "clue": "Towering stone shikhara dedicated to Shiva, Brahma, and Vishnu in Central Java."
  },
  {
    "id": "EP_0030",
    "title": "Laguna Copperplate Inscription Written in Luzon",
    "category": "Law & Epigraphy",
    "region": "Southeast Asia",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Clears the hereditary debt of Namwaran under the authority of Chief of Tondo."
  },
  {
    "id": "EP_0031",
    "title": "Kingdom of Butuan Dispatches Maritime Tribute Mission to Song Court",
    "category": "Trade",
    "region": "Southeast Asia",
    "value": 1001,
    "displayValue": "1001 CE",
    "clue": "Rajah Kiling of Butuan establishes direct gold and camphor trade with China."
  },
  {
    "id": "EP_0032",
    "title": "King Anawrahta Unifies Myanmar into Pagan Empire",
    "category": "History",
    "region": "Southeast Asia",
    "value": 1044,
    "displayValue": "1044 CE",
    "clue": "Theravada Buddhism adopted as royal religion across the dry central plains."
  },
  {
    "id": "EP_0033",
    "title": "Construction Commences on Angkor Wat by Suryavarman II",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 1113,
    "displayValue": "c. 1113 CE",
    "clue": "Vast temple mountain representing Mount Meru with monumental water reservoirs."
  },
  {
    "id": "EP_0034",
    "title": "Bayon Temple and Angkor Thom Built by Jayavarman VII",
    "category": "Architecture",
    "region": "Southeast Asia",
    "value": 1190,
    "displayValue": "c. 1190 CE",
    "clue": "Massive smiling Lokeshvara face towers watch over the fortified Khmer capital."
  },
  {
    "id": "EP_0035",
    "title": "Battle of Bach Dang River Destroys Mongol Naval Fleet",
    "category": "Military History",
    "region": "Southeast Asia",
    "value": 1288,
    "displayValue": "1288 CE",
    "clue": "Tran Hung Dao embeds iron-tipped timber stakes into river mud to shatter junks."
  },
  {
    "id": "EP_0036",
    "title": "King Ram Khamhaeng Devises the Thai Script",
    "category": "Linguistics",
    "region": "Southeast Asia",
    "value": 1292,
    "displayValue": "c. 1292 CE",
    "clue": "Adapts Old Khmer script to capture tonal inflections of the Tai language."
  },
  {
    "id": "EP_0037",
    "title": "Raden Wijaya Establishes Majapahit Empire in East Java",
    "category": "Empires",
    "region": "Southeast Asia",
    "value": 1293,
    "displayValue": "1293 CE",
    "clue": "Defeats Mongol expedition and builds dominant archipelago thalassocracy."
  },
  {
    "id": "EP_0038",
    "title": "Gajah Mada Pronounces the Palapa Oath",
    "category": "Governance",
    "region": "Southeast Asia",
    "value": 1336,
    "displayValue": "1336 CE",
    "clue": "Majapahit Prime Minister vows not to consume spice luxuries until Nusantara is united."
  },
  {
    "id": "EP_0039",
    "title": "Parameswara Founds the Port Sultanate of Malacca",
    "category": "Trade",
    "region": "Southeast Asia",
    "value": 1400,
    "displayValue": "c. 1400 CE",
    "clue": "Strategic choke-point city-state linking Chinese, Indian, and Arab spice trade."
  },
  {
    "id": "EP_0040",
    "title": "Sultanate of Sulu Founded by Sharif ul-Hashim",
    "category": "Kingdoms",
    "region": "Southeast Asia",
    "value": 1405,
    "displayValue": "c. 1405 CE",
    "clue": "Establishes institutional Islamic rule and maritime commerce in pearls."
  },
  {
    "id": "EP_0041",
    "title": "Battle of Mactan Halts Initial Spanish Colonization",
    "category": "Resistance",
    "region": "Southeast Asia",
    "value": 1521,
    "displayValue": "1521 CE",
    "clue": "Chieftain Lapulapu leads coastal warriors in shallow water skirmish, defeating Magellan."
  },
  {
    "id": "EP_0042",
    "title": "Boxer Codex Illustrates Pre-Colonial Philippine Regalia",
    "category": "Art",
    "region": "Southeast Asia",
    "value": 1590,
    "displayValue": "c. 1590 CE",
    "clue": "Gold-illuminated manuscript depicting Tagalog, Visayan, and Cham nobility."
  },
  {
    "id": "EP_0043",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#43)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -600,
    "displayValue": "600 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0044",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#44)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -2441,
    "displayValue": "2441 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0045",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#45)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": -437,
    "displayValue": "437 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0046",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#46)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -1379,
    "displayValue": "1379 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0047",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#47)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2948,
    "displayValue": "2948 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0048",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#48)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -3147,
    "displayValue": "3147 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0049",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#49)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -2252,
    "displayValue": "2252 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0050",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#50)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1645,
    "displayValue": "1645 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0051",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#51)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -276,
    "displayValue": "276 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0052",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#52)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -2888,
    "displayValue": "2888 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0053",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#53)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -3747,
    "displayValue": "3747 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0054",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#54)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1577,
    "displayValue": "1577 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0055",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#55)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -208,
    "displayValue": "208 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0056",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#56)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1738,
    "displayValue": "1738 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0057",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#57)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -56,
    "displayValue": "56 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0058",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#58)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -896,
    "displayValue": "896 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0059",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#59)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2191,
    "displayValue": "2191 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0060",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#60)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2299,
    "displayValue": "2299 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0061",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#61)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1556,
    "displayValue": "1556 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0062",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#62)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1037,
    "displayValue": "1037 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0063",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#63)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 60,
    "displayValue": "60 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0064",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#64)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2072,
    "displayValue": "2072 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0065",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#65)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -2723,
    "displayValue": "2723 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0066",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#66)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1661,
    "displayValue": "1661 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0067",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#67)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 184,
    "displayValue": "184 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0068",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#68)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1035,
    "displayValue": "1035 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0069",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#69)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 325,
    "displayValue": "325 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0070",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#70)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -413,
    "displayValue": "413 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0071",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#71)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1433,
    "displayValue": "1433 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0072",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#72)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1451,
    "displayValue": "1451 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0073",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#73)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -860,
    "displayValue": "860 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0074",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#74)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -429,
    "displayValue": "429 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0075",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#75)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 396,
    "displayValue": "396 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0076",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#76)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1256,
    "displayValue": "1256 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0077",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#77)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -1699,
    "displayValue": "1699 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0078",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#78)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1745,
    "displayValue": "1745 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0079",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#79)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 576,
    "displayValue": "576 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0080",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#80)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -331,
    "displayValue": "331 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0081",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#81)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 706,
    "displayValue": "706 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0082",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#82)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 70,
    "displayValue": "70 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0083",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#83)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -676,
    "displayValue": "676 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0084",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#84)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -603,
    "displayValue": "603 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0085",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#85)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -164,
    "displayValue": "164 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0086",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#86)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 179,
    "displayValue": "179 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0087",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#87)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 732,
    "displayValue": "732 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0088",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#88)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -440,
    "displayValue": "440 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0089",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#89)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -675,
    "displayValue": "675 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0090",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#90)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1828,
    "displayValue": "1828 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0091",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#91)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 968,
    "displayValue": "968 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0092",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#92)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 372,
    "displayValue": "372 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0093",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#93)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1087,
    "displayValue": "1087 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0094",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#94)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 554,
    "displayValue": "554 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0095",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#95)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 81,
    "displayValue": "81 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0096",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#96)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 245,
    "displayValue": "245 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0097",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#97)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 532,
    "displayValue": "532 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0098",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#98)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 787,
    "displayValue": "787 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0099",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#99)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1068,
    "displayValue": "1068 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0100",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#100)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 376,
    "displayValue": "376 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0101",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#101)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 349,
    "displayValue": "349 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0102",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#102)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1912,
    "displayValue": "1912 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0103",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#103)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1360,
    "displayValue": "1360 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0104",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#104)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 1075,
    "displayValue": "1075 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0105",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#105)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1467,
    "displayValue": "1467 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0106",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#106)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 1037,
    "displayValue": "1037 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0107",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#107)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 838,
    "displayValue": "838 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0108",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#108)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 1093,
    "displayValue": "1093 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0109",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#109)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 1228,
    "displayValue": "1228 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0110",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#110)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1395,
    "displayValue": "1395 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0111",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#111)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1404,
    "displayValue": "1404 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0112",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#112)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 1192,
    "displayValue": "1192 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0113",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#113)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 1373,
    "displayValue": "1373 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0114",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#114)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1996,
    "displayValue": "1996 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0115",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#115)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1752,
    "displayValue": "1752 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0116",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#116)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1779,
    "displayValue": "1779 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0117",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#117)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1848,
    "displayValue": "1848 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0118",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#118)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -1500,
    "displayValue": "1500 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0119",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#119)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -3137,
    "displayValue": "3137 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0120",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#120)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -3359,
    "displayValue": "3359 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0121",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#121)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -2426,
    "displayValue": "2426 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0122",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#122)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1797,
    "displayValue": "1797 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0123",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#123)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -360,
    "displayValue": "360 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0124",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#124)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -3092,
    "displayValue": "3092 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0125",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#125)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -4003,
    "displayValue": "4003 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0126",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#126)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1556,
    "displayValue": "1556 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0127",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#127)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -306,
    "displayValue": "306 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0128",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#128)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1914,
    "displayValue": "1914 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0129",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#129)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -151,
    "displayValue": "151 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0130",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#130)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1017,
    "displayValue": "1017 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0131",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#131)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2380,
    "displayValue": "2380 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0132",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#132)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2511,
    "displayValue": "2511 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0133",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#133)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1730,
    "displayValue": "1730 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0134",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#134)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1189,
    "displayValue": "1189 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0135",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#135)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -24,
    "displayValue": "24 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0136",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#136)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2276,
    "displayValue": "2276 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0137",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#137)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -2979,
    "displayValue": "2979 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0138",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#138)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1640,
    "displayValue": "1640 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0139",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#139)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 86,
    "displayValue": "86 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0140",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#140)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1211,
    "displayValue": "1211 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0141",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#141)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 230,
    "displayValue": "230 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0142",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#142)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -534,
    "displayValue": "534 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0143",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#143)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1623,
    "displayValue": "1623 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0144",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#144)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1663,
    "displayValue": "1663 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0145",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#145)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1034,
    "displayValue": "1034 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0146",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#146)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -581,
    "displayValue": "581 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0147",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#147)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 312,
    "displayValue": "312 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0148",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#148)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1460,
    "displayValue": "1460 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0149",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#149)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -1955,
    "displayValue": "1955 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0150",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#150)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1724,
    "displayValue": "1724 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0151",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#151)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 478,
    "displayValue": "478 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0152",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#152)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -507,
    "displayValue": "507 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0153",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#153)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 611,
    "displayValue": "611 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0154",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#154)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -50,
    "displayValue": "50 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0155",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#155)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -866,
    "displayValue": "866 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0156",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#156)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -815,
    "displayValue": "815 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0157",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#157)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -338,
    "displayValue": "338 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0158",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#158)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 27,
    "displayValue": "27 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0159",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#159)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 648,
    "displayValue": "648 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0160",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#160)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -644,
    "displayValue": "644 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0161",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#161)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -931,
    "displayValue": "931 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0162",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#162)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1807,
    "displayValue": "1807 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0163",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#163)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 870,
    "displayValue": "870 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0164",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#164)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 196,
    "displayValue": "196 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0165",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#165)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 991,
    "displayValue": "991 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0166",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#166)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 433,
    "displayValue": "433 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0167",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#167)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -108,
    "displayValue": "108 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0168",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#168)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 33,
    "displayValue": "33 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0169",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#169)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 358,
    "displayValue": "358 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0170",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#170)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 635,
    "displayValue": "635 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0171",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#171)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 984,
    "displayValue": "984 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0172",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#172)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 172,
    "displayValue": "172 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0173",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#173)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 93,
    "displayValue": "93 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0174",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#174)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1891,
    "displayValue": "1891 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0175",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#175)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1262,
    "displayValue": "1262 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0176",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#176)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0177",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#177)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1372,
    "displayValue": "1372 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0178",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#178)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 916,
    "displayValue": "916 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0179",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#179)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 649,
    "displayValue": "649 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0180",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#180)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 881,
    "displayValue": "881 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0181",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#181)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 1054,
    "displayValue": "1054 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0182",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#182)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1243,
    "displayValue": "1243 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0183",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#183)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1320,
    "displayValue": "1320 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0184",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#184)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 988,
    "displayValue": "988 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0185",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#185)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 1117,
    "displayValue": "1117 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0186",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#186)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1975,
    "displayValue": "1975 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0187",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#187)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1654,
    "displayValue": "1654 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0188",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#188)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1603,
    "displayValue": "1603 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0189",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#189)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1753,
    "displayValue": "1753 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0190",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#190)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 1399,
    "displayValue": "1399 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0191",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#191)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 1406,
    "displayValue": "1406 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0192",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#192)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 1729,
    "displayValue": "1729 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0193",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#193)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -2600,
    "displayValue": "2600 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0194",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#194)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1949,
    "displayValue": "1949 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0195",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#195)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -444,
    "displayValue": "444 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0196",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#196)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -3296,
    "displayValue": "3296 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0197",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#197)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -4259,
    "displayValue": "4259 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0198",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#198)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1535,
    "displayValue": "1535 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0199",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#199)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -404,
    "displayValue": "404 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0200",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#200)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -2090,
    "displayValue": "2090 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0201",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#201)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -246,
    "displayValue": "246 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0202",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#202)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1138,
    "displayValue": "1138 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0203",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#203)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2569,
    "displayValue": "2569 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0204",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#204)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2723,
    "displayValue": "2723 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0205",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#205)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1904,
    "displayValue": "1904 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0206",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#206)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1341,
    "displayValue": "1341 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0207",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#207)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -108,
    "displayValue": "108 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0208",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#208)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2480,
    "displayValue": "2480 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0209",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#209)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -3235,
    "displayValue": "3235 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0210",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#210)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1619,
    "displayValue": "1619 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0211",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#211)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -12,
    "displayValue": "12 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0212",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#212)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1386,
    "displayValue": "1386 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0213",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#213)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 135,
    "displayValue": "135 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0214",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#214)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -654,
    "displayValue": "654 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0215",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#215)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1812,
    "displayValue": "1812 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0216",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#216)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1875,
    "displayValue": "1875 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0217",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#217)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1208,
    "displayValue": "1208 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0218",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#218)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -733,
    "displayValue": "733 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0219",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#219)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 228,
    "displayValue": "228 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0220",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#220)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1664,
    "displayValue": "1664 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0221",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#221)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -2211,
    "displayValue": "2211 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0222",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#222)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1703,
    "displayValue": "1703 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0223",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#223)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 380,
    "displayValue": "380 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0224",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#224)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -683,
    "displayValue": "683 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0225",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#225)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 515,
    "displayValue": "515 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0226",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#226)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -171,
    "displayValue": "171 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0227",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#227)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1055,
    "displayValue": "1055 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0228",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#228)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1027,
    "displayValue": "1027 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0229",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#229)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -512,
    "displayValue": "512 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0230",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#230)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -125,
    "displayValue": "125 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0231",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#231)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 564,
    "displayValue": "564 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0232",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#232)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -848,
    "displayValue": "848 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0233",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#233)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -1187,
    "displayValue": "1187 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0234",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#234)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1786,
    "displayValue": "1786 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0235",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#235)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 772,
    "displayValue": "772 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0236",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#236)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 20,
    "displayValue": "20 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0237",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#237)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 896,
    "displayValue": "896 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0238",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#238)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 312,
    "displayValue": "312 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0239",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#239)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -298,
    "displayValue": "298 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0240",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#240)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -179,
    "displayValue": "179 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0241",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#241)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 184,
    "displayValue": "184 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0242",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#242)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 483,
    "displayValue": "483 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0243",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#243)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0244",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#244)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -32,
    "displayValue": "32 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0245",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#245)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -163,
    "displayValue": "163 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0246",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#246)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1870,
    "displayValue": "1870 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0247",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#247)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1164,
    "displayValue": "1164 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0248",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#248)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 724,
    "displayValue": "724 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0249",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#249)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1277,
    "displayValue": "1277 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0250",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#250)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 795,
    "displayValue": "795 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0251",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#251)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 459,
    "displayValue": "459 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0252",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#252)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 669,
    "displayValue": "669 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0253",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#253)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 880,
    "displayValue": "880 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0254",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#254)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1091,
    "displayValue": "1091 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0255",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#255)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1236,
    "displayValue": "1236 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0256",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#256)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 784,
    "displayValue": "784 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0257",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#257)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 861,
    "displayValue": "861 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0258",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#258)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1954,
    "displayValue": "1954 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0259",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#259)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1556,
    "displayValue": "1556 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0260",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#260)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1427,
    "displayValue": "1427 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0261",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#261)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1658,
    "displayValue": "1658 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0262",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#262)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 1278,
    "displayValue": "1278 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0263",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#263)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 1217,
    "displayValue": "1217 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0264",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#264)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 1517,
    "displayValue": "1517 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0265",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#265)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 1576,
    "displayValue": "1576 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0266",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#266)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 1699,
    "displayValue": "1699 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0267",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#267)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1572,
    "displayValue": "1572 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0268",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#268)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -3500,
    "displayValue": "3500 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0269",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#269)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -4515,
    "displayValue": "4515 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0270",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#270)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1514,
    "displayValue": "1514 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0271",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#271)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -502,
    "displayValue": "502 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0272",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#272)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -2266,
    "displayValue": "2266 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0273",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#273)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -341,
    "displayValue": "341 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0274",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#274)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1258,
    "displayValue": "1258 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0275",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#275)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2758,
    "displayValue": "2758 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0276",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#276)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2935,
    "displayValue": "2935 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0277",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#277)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -2078,
    "displayValue": "2078 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0278",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#278)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1493,
    "displayValue": "1493 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0279",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#279)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -192,
    "displayValue": "192 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0280",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#280)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2684,
    "displayValue": "2684 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0281",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#281)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -3491,
    "displayValue": "3491 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0282",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#282)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1598,
    "displayValue": "1598 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0283",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#283)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -110,
    "displayValue": "110 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0284",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#284)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1562,
    "displayValue": "1562 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0285",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#285)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 39,
    "displayValue": "39 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0286",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#286)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -775,
    "displayValue": "775 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0287",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#287)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2001,
    "displayValue": "2001 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0288",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#288)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -2087,
    "displayValue": "2087 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0289",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#289)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1382,
    "displayValue": "1382 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0290",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#290)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -885,
    "displayValue": "885 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0291",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#291)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 144,
    "displayValue": "144 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0292",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#292)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1868,
    "displayValue": "1868 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0293",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#293)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -2467,
    "displayValue": "2467 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0294",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#294)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1682,
    "displayValue": "1682 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0295",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#295)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 282,
    "displayValue": "282 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0296",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#296)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -859,
    "displayValue": "859 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0297",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#297)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 420,
    "displayValue": "420 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0298",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#298)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -292,
    "displayValue": "292 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0299",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#299)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1244,
    "displayValue": "1244 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0300",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#300)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1239,
    "displayValue": "1239 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0301",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#301)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -686,
    "displayValue": "686 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0302",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#302)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -277,
    "displayValue": "277 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0303",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#303)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 480,
    "displayValue": "480 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0304",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#304)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -1052,
    "displayValue": "1052 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0305",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#305)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -1443,
    "displayValue": "1443 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0306",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#306)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1765,
    "displayValue": "1765 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0307",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#307)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 674,
    "displayValue": "674 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0308",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#308)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -155,
    "displayValue": "155 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0309",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#309)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 801,
    "displayValue": "801 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0310",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#310)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 191,
    "displayValue": "191 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0311",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#311)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -487,
    "displayValue": "487 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0312",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#312)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -391,
    "displayValue": "391 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0313",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#313)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 10,
    "displayValue": "10 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0314",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#314)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 331,
    "displayValue": "331 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0315",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#315)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 816,
    "displayValue": "816 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0316",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#316)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -236,
    "displayValue": "236 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0317",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#317)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -419,
    "displayValue": "419 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0318",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#318)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1849,
    "displayValue": "1849 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0319",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#319)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1066,
    "displayValue": "1066 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0320",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#320)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 548,
    "displayValue": "548 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0321",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#321)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1182,
    "displayValue": "1182 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0322",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#322)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 674,
    "displayValue": "674 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0323",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#323)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 270,
    "displayValue": "270 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0324",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#324)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 457,
    "displayValue": "457 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0325",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#325)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 706,
    "displayValue": "706 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0326",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#326)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 939,
    "displayValue": "939 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0327",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#327)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1152,
    "displayValue": "1152 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0328",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#328)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 580,
    "displayValue": "580 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0329",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#329)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 605,
    "displayValue": "605 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0330",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#330)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1933,
    "displayValue": "1933 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0331",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#331)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1458,
    "displayValue": "1458 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0332",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#332)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1251,
    "displayValue": "1251 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0333",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#333)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1563,
    "displayValue": "1563 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0334",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#334)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 1158,
    "displayValue": "1158 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0335",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#335)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 1027,
    "displayValue": "1027 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0336",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#336)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 1305,
    "displayValue": "1305 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0337",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#337)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 1402,
    "displayValue": "1402 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0338",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#338)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 1547,
    "displayValue": "1547 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0339",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#339)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1488,
    "displayValue": "1488 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0340",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#340)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 1396,
    "displayValue": "1396 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0341",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#341)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 1629,
    "displayValue": "1629 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0342",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#342)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 2017,
    "displayValue": "2017 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0343",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#343)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -600,
    "displayValue": "600 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0344",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#344)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -2441,
    "displayValue": "2441 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0345",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#345)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -437,
    "displayValue": "437 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0346",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#346)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1379,
    "displayValue": "1379 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0347",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#347)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2948,
    "displayValue": "2948 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0348",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#348)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -3147,
    "displayValue": "3147 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0349",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#349)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -2252,
    "displayValue": "2252 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0350",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#350)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1645,
    "displayValue": "1645 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0351",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#351)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -276,
    "displayValue": "276 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0352",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#352)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2888,
    "displayValue": "2888 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0353",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#353)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -3747,
    "displayValue": "3747 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0354",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#354)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1577,
    "displayValue": "1577 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0355",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#355)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -208,
    "displayValue": "208 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0356",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#356)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1738,
    "displayValue": "1738 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0357",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#357)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": -56,
    "displayValue": "56 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0358",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#358)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -896,
    "displayValue": "896 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0359",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#359)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2191,
    "displayValue": "2191 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0360",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#360)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -2299,
    "displayValue": "2299 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0361",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#361)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1556,
    "displayValue": "1556 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0362",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#362)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1037,
    "displayValue": "1037 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0363",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#363)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 60,
    "displayValue": "60 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0364",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#364)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -2072,
    "displayValue": "2072 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0365",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#365)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -2723,
    "displayValue": "2723 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0366",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#366)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1661,
    "displayValue": "1661 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0367",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#367)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 184,
    "displayValue": "184 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0368",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#368)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1035,
    "displayValue": "1035 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0369",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#369)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 325,
    "displayValue": "325 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0370",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#370)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -413,
    "displayValue": "413 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0371",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#371)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1433,
    "displayValue": "1433 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0372",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#372)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1451,
    "displayValue": "1451 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0373",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#373)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -860,
    "displayValue": "860 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0374",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#374)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -429,
    "displayValue": "429 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0375",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#375)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 396,
    "displayValue": "396 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0376",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#376)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -1256,
    "displayValue": "1256 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0377",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#377)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -1699,
    "displayValue": "1699 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0378",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#378)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1745,
    "displayValue": "1745 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0379",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#379)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 576,
    "displayValue": "576 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0380",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#380)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -331,
    "displayValue": "331 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0381",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#381)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 706,
    "displayValue": "706 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0382",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#382)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 70,
    "displayValue": "70 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0383",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#383)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -676,
    "displayValue": "676 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0384",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#384)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -603,
    "displayValue": "603 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0385",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#385)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -164,
    "displayValue": "164 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0386",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#386)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 179,
    "displayValue": "179 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0387",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#387)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 732,
    "displayValue": "732 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0388",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#388)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -440,
    "displayValue": "440 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0389",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#389)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -675,
    "displayValue": "675 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0390",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#390)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1828,
    "displayValue": "1828 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0391",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#391)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 968,
    "displayValue": "968 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0392",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#392)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 372,
    "displayValue": "372 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0393",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#393)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1087,
    "displayValue": "1087 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0394",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#394)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 554,
    "displayValue": "554 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0395",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#395)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 81,
    "displayValue": "81 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0396",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#396)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 245,
    "displayValue": "245 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0397",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#397)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 532,
    "displayValue": "532 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0398",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#398)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 787,
    "displayValue": "787 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0399",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#399)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1068,
    "displayValue": "1068 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0400",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#400)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 376,
    "displayValue": "376 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0401",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#401)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 349,
    "displayValue": "349 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0402",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#402)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1912,
    "displayValue": "1912 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0403",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#403)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1360,
    "displayValue": "1360 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0404",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#404)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1075,
    "displayValue": "1075 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0405",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#405)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1467,
    "displayValue": "1467 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0406",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#406)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 1037,
    "displayValue": "1037 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0407",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#407)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 838,
    "displayValue": "838 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0408",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#408)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 1093,
    "displayValue": "1093 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0409",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#409)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 1228,
    "displayValue": "1228 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0410",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#410)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 1395,
    "displayValue": "1395 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0411",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#411)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1404,
    "displayValue": "1404 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0412",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#412)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 1192,
    "displayValue": "1192 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0413",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#413)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 1373,
    "displayValue": "1373 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0414",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#414)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1996,
    "displayValue": "1996 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0415",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#415)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1752,
    "displayValue": "1752 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0416",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#416)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 1779,
    "displayValue": "1779 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0417",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#417)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1848,
    "displayValue": "1848 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0418",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#418)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1500,
    "displayValue": "1500 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0419",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#419)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -3137,
    "displayValue": "3137 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0420",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#420)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -3359,
    "displayValue": "3359 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0421",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#421)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -2426,
    "displayValue": "2426 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0422",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#422)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1797,
    "displayValue": "1797 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0423",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#423)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -360,
    "displayValue": "360 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0424",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#424)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -3092,
    "displayValue": "3092 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0425",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#425)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -4003,
    "displayValue": "4003 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0426",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#426)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1556,
    "displayValue": "1556 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0427",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#427)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -306,
    "displayValue": "306 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0428",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#428)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1914,
    "displayValue": "1914 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0429",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#429)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": -151,
    "displayValue": "151 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0430",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#430)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -1017,
    "displayValue": "1017 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0431",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#431)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2380,
    "displayValue": "2380 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0432",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#432)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -2511,
    "displayValue": "2511 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0433",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#433)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1730,
    "displayValue": "1730 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0434",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#434)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1189,
    "displayValue": "1189 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0435",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#435)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -24,
    "displayValue": "24 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0436",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#436)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -2276,
    "displayValue": "2276 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0437",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#437)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -2979,
    "displayValue": "2979 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0438",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#438)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1640,
    "displayValue": "1640 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0439",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#439)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 86,
    "displayValue": "86 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0440",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#440)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1211,
    "displayValue": "1211 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0441",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#441)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 230,
    "displayValue": "230 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0442",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#442)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -534,
    "displayValue": "534 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0443",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#443)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1623,
    "displayValue": "1623 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0444",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#444)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1663,
    "displayValue": "1663 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0445",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#445)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1034,
    "displayValue": "1034 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0446",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#446)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -581,
    "displayValue": "581 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0447",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#447)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 312,
    "displayValue": "312 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0448",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#448)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -1460,
    "displayValue": "1460 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0449",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#449)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -1955,
    "displayValue": "1955 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0450",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#450)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1724,
    "displayValue": "1724 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0451",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#451)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 478,
    "displayValue": "478 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0452",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#452)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -507,
    "displayValue": "507 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0453",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#453)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 611,
    "displayValue": "611 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0454",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#454)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -50,
    "displayValue": "50 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0455",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#455)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -866,
    "displayValue": "866 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0456",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#456)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -815,
    "displayValue": "815 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0457",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#457)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -338,
    "displayValue": "338 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0458",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#458)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 27,
    "displayValue": "27 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0459",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#459)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 648,
    "displayValue": "648 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0460",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#460)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -644,
    "displayValue": "644 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0461",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#461)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -931,
    "displayValue": "931 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0462",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#462)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1807,
    "displayValue": "1807 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0463",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#463)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 870,
    "displayValue": "870 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0464",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#464)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 196,
    "displayValue": "196 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0465",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#465)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 991,
    "displayValue": "991 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0466",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#466)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 433,
    "displayValue": "433 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0467",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#467)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -108,
    "displayValue": "108 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0468",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#468)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 33,
    "displayValue": "33 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0469",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#469)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 358,
    "displayValue": "358 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0470",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#470)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 635,
    "displayValue": "635 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0471",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#471)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 984,
    "displayValue": "984 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0472",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#472)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 172,
    "displayValue": "172 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0473",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#473)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 93,
    "displayValue": "93 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0474",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#474)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1891,
    "displayValue": "1891 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0475",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#475)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1262,
    "displayValue": "1262 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0476",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#476)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0477",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#477)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1372,
    "displayValue": "1372 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0478",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#478)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 916,
    "displayValue": "916 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0479",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#479)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 649,
    "displayValue": "649 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0480",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#480)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 881,
    "displayValue": "881 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0481",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#481)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 1054,
    "displayValue": "1054 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0482",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#482)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 1243,
    "displayValue": "1243 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0483",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#483)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1320,
    "displayValue": "1320 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0484",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#484)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 988,
    "displayValue": "988 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0485",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#485)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 1117,
    "displayValue": "1117 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0486",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#486)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1975,
    "displayValue": "1975 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0487",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#487)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1654,
    "displayValue": "1654 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0488",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#488)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 1603,
    "displayValue": "1603 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0489",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#489)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1753,
    "displayValue": "1753 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0490",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#490)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 1399,
    "displayValue": "1399 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0491",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#491)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 1406,
    "displayValue": "1406 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0492",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#492)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 1729,
    "displayValue": "1729 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0493",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#493)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -2600,
    "displayValue": "2600 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0494",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#494)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1949,
    "displayValue": "1949 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0495",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#495)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -444,
    "displayValue": "444 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0496",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#496)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -3296,
    "displayValue": "3296 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0497",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#497)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -4259,
    "displayValue": "4259 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0498",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#498)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1535,
    "displayValue": "1535 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0499",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#499)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -404,
    "displayValue": "404 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0500",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#500)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -2090,
    "displayValue": "2090 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0501",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#501)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": -246,
    "displayValue": "246 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0502",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#502)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -1138,
    "displayValue": "1138 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0503",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#503)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2569,
    "displayValue": "2569 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0504",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#504)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -2723,
    "displayValue": "2723 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0505",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#505)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1904,
    "displayValue": "1904 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0506",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#506)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1341,
    "displayValue": "1341 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0507",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#507)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -108,
    "displayValue": "108 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0508",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#508)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -2480,
    "displayValue": "2480 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0509",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#509)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -3235,
    "displayValue": "3235 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0510",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#510)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1619,
    "displayValue": "1619 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0511",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#511)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -12,
    "displayValue": "12 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0512",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#512)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1386,
    "displayValue": "1386 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0513",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#513)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 135,
    "displayValue": "135 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0514",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#514)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -654,
    "displayValue": "654 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0515",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#515)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1812,
    "displayValue": "1812 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0516",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#516)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1875,
    "displayValue": "1875 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0517",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#517)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1208,
    "displayValue": "1208 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0518",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#518)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -733,
    "displayValue": "733 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0519",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#519)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 228,
    "displayValue": "228 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0520",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#520)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -1664,
    "displayValue": "1664 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0521",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#521)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -2211,
    "displayValue": "2211 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0522",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#522)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1703,
    "displayValue": "1703 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0523",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#523)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 380,
    "displayValue": "380 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0524",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#524)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -683,
    "displayValue": "683 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0525",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#525)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 515,
    "displayValue": "515 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0526",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#526)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -171,
    "displayValue": "171 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0527",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#527)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1055,
    "displayValue": "1055 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0528",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#528)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1027,
    "displayValue": "1027 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0529",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#529)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -512,
    "displayValue": "512 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0530",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#530)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -125,
    "displayValue": "125 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0531",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#531)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 564,
    "displayValue": "564 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0532",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#532)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -848,
    "displayValue": "848 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0533",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#533)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -1187,
    "displayValue": "1187 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0534",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#534)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1786,
    "displayValue": "1786 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0535",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#535)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 772,
    "displayValue": "772 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0536",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#536)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 20,
    "displayValue": "20 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0537",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#537)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 896,
    "displayValue": "896 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0538",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#538)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 312,
    "displayValue": "312 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0539",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#539)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -298,
    "displayValue": "298 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0540",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#540)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -179,
    "displayValue": "179 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0541",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#541)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 184,
    "displayValue": "184 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0542",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#542)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 483,
    "displayValue": "483 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0543",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#543)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0544",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#544)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -32,
    "displayValue": "32 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0545",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#545)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -163,
    "displayValue": "163 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0546",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#546)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1870,
    "displayValue": "1870 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0547",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#547)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1164,
    "displayValue": "1164 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0548",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#548)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 724,
    "displayValue": "724 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0549",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#549)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1277,
    "displayValue": "1277 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0550",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#550)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 795,
    "displayValue": "795 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0551",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#551)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 459,
    "displayValue": "459 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0552",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#552)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 669,
    "displayValue": "669 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0553",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#553)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 880,
    "displayValue": "880 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0554",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#554)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 1091,
    "displayValue": "1091 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0555",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#555)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1236,
    "displayValue": "1236 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0556",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#556)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 784,
    "displayValue": "784 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0557",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#557)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 861,
    "displayValue": "861 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0558",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#558)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1954,
    "displayValue": "1954 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0559",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#559)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1556,
    "displayValue": "1556 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0560",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#560)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 1427,
    "displayValue": "1427 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0561",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#561)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1658,
    "displayValue": "1658 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0562",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#562)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 1278,
    "displayValue": "1278 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0563",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#563)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 1217,
    "displayValue": "1217 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0564",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#564)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 1517,
    "displayValue": "1517 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0565",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#565)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 1576,
    "displayValue": "1576 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0566",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#566)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1699,
    "displayValue": "1699 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0567",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#567)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1572,
    "displayValue": "1572 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0568",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#568)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -3500,
    "displayValue": "3500 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0569",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#569)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -4515,
    "displayValue": "4515 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0570",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#570)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1514,
    "displayValue": "1514 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0571",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#571)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -502,
    "displayValue": "502 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0572",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#572)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -2266,
    "displayValue": "2266 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0573",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#573)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": -341,
    "displayValue": "341 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0574",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#574)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -1258,
    "displayValue": "1258 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0575",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#575)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2758,
    "displayValue": "2758 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0576",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#576)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -2935,
    "displayValue": "2935 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0577",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#577)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -2078,
    "displayValue": "2078 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0578",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#578)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1493,
    "displayValue": "1493 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0579",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#579)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -192,
    "displayValue": "192 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0580",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#580)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -2684,
    "displayValue": "2684 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0581",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#581)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -3491,
    "displayValue": "3491 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0582",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#582)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1598,
    "displayValue": "1598 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0583",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#583)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -110,
    "displayValue": "110 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0584",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#584)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1562,
    "displayValue": "1562 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0585",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#585)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 39,
    "displayValue": "39 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0586",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#586)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -775,
    "displayValue": "775 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0587",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#587)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2001,
    "displayValue": "2001 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0588",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#588)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2087,
    "displayValue": "2087 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0589",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#589)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1382,
    "displayValue": "1382 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0590",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#590)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -885,
    "displayValue": "885 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0591",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#591)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 144,
    "displayValue": "144 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0592",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#592)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -1868,
    "displayValue": "1868 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0593",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#593)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -2467,
    "displayValue": "2467 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0594",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#594)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1682,
    "displayValue": "1682 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0595",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#595)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 282,
    "displayValue": "282 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0596",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#596)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -859,
    "displayValue": "859 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0597",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#597)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 420,
    "displayValue": "420 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0598",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#598)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -292,
    "displayValue": "292 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0599",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#599)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1244,
    "displayValue": "1244 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0600",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#600)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1239,
    "displayValue": "1239 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0601",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#601)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -686,
    "displayValue": "686 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0602",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#602)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -277,
    "displayValue": "277 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0603",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#603)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 480,
    "displayValue": "480 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0604",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#604)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1052,
    "displayValue": "1052 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0605",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#605)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -1443,
    "displayValue": "1443 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0606",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#606)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1765,
    "displayValue": "1765 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0607",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#607)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 674,
    "displayValue": "674 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0608",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#608)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -155,
    "displayValue": "155 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0609",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#609)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 801,
    "displayValue": "801 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0610",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#610)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 191,
    "displayValue": "191 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0611",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#611)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -487,
    "displayValue": "487 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0612",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#612)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -391,
    "displayValue": "391 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0613",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#613)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 10,
    "displayValue": "10 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0614",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#614)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 331,
    "displayValue": "331 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0615",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#615)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 816,
    "displayValue": "816 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0616",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#616)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -236,
    "displayValue": "236 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0617",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#617)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -419,
    "displayValue": "419 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0618",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#618)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1849,
    "displayValue": "1849 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0619",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#619)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1066,
    "displayValue": "1066 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0620",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#620)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 548,
    "displayValue": "548 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0621",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#621)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1182,
    "displayValue": "1182 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0622",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#622)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 674,
    "displayValue": "674 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0623",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#623)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 270,
    "displayValue": "270 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0624",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#624)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 457,
    "displayValue": "457 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0625",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#625)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 706,
    "displayValue": "706 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0626",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#626)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 939,
    "displayValue": "939 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0627",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#627)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1152,
    "displayValue": "1152 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0628",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#628)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 580,
    "displayValue": "580 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0629",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#629)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 605,
    "displayValue": "605 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0630",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#630)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1933,
    "displayValue": "1933 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0631",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#631)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1458,
    "displayValue": "1458 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0632",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#632)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 1251,
    "displayValue": "1251 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0633",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#633)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1563,
    "displayValue": "1563 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0634",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#634)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 1158,
    "displayValue": "1158 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0635",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#635)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 1027,
    "displayValue": "1027 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0636",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#636)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 1305,
    "displayValue": "1305 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0637",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#637)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 1402,
    "displayValue": "1402 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0638",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#638)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1547,
    "displayValue": "1547 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0639",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#639)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1488,
    "displayValue": "1488 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0640",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#640)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 1396,
    "displayValue": "1396 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0641",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#641)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 1629,
    "displayValue": "1629 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0642",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#642)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 2017,
    "displayValue": "2017 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0643",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#643)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -600,
    "displayValue": "600 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0644",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#644)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -2441,
    "displayValue": "2441 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0645",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#645)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": -437,
    "displayValue": "437 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0646",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#646)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -1379,
    "displayValue": "1379 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0647",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#647)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2948,
    "displayValue": "2948 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0648",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#648)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -3147,
    "displayValue": "3147 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0649",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#649)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -2252,
    "displayValue": "2252 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0650",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#650)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1645,
    "displayValue": "1645 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0651",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#651)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -276,
    "displayValue": "276 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0652",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#652)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -2888,
    "displayValue": "2888 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0653",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#653)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -3747,
    "displayValue": "3747 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0654",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#654)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1577,
    "displayValue": "1577 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0655",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#655)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -208,
    "displayValue": "208 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0656",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#656)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1738,
    "displayValue": "1738 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0657",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#657)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -56,
    "displayValue": "56 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0658",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#658)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -896,
    "displayValue": "896 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0659",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#659)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2191,
    "displayValue": "2191 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0660",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#660)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2299,
    "displayValue": "2299 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0661",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#661)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1556,
    "displayValue": "1556 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0662",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#662)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1037,
    "displayValue": "1037 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0663",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#663)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 60,
    "displayValue": "60 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0664",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#664)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2072,
    "displayValue": "2072 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0665",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#665)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -2723,
    "displayValue": "2723 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0666",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#666)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1661,
    "displayValue": "1661 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0667",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#667)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 184,
    "displayValue": "184 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0668",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#668)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1035,
    "displayValue": "1035 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0669",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#669)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 325,
    "displayValue": "325 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0670",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#670)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -413,
    "displayValue": "413 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0671",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#671)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1433,
    "displayValue": "1433 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0672",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#672)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1451,
    "displayValue": "1451 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0673",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#673)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -860,
    "displayValue": "860 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0674",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#674)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -429,
    "displayValue": "429 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0675",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#675)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 396,
    "displayValue": "396 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0676",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#676)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1256,
    "displayValue": "1256 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0677",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#677)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -1699,
    "displayValue": "1699 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0678",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#678)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1745,
    "displayValue": "1745 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0679",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#679)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 576,
    "displayValue": "576 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0680",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#680)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -331,
    "displayValue": "331 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0681",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#681)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 706,
    "displayValue": "706 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0682",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#682)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 70,
    "displayValue": "70 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0683",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#683)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -676,
    "displayValue": "676 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0684",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#684)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -603,
    "displayValue": "603 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0685",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#685)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -164,
    "displayValue": "164 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0686",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#686)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 179,
    "displayValue": "179 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0687",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#687)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 732,
    "displayValue": "732 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0688",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#688)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -440,
    "displayValue": "440 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0689",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#689)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -675,
    "displayValue": "675 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0690",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#690)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1828,
    "displayValue": "1828 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0691",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#691)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 968,
    "displayValue": "968 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0692",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#692)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 372,
    "displayValue": "372 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0693",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#693)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1087,
    "displayValue": "1087 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0694",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#694)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 554,
    "displayValue": "554 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0695",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#695)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 81,
    "displayValue": "81 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0696",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#696)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 245,
    "displayValue": "245 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0697",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#697)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 532,
    "displayValue": "532 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0698",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#698)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 787,
    "displayValue": "787 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0699",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#699)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1068,
    "displayValue": "1068 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0700",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#700)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 376,
    "displayValue": "376 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0701",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#701)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 349,
    "displayValue": "349 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0702",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#702)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1912,
    "displayValue": "1912 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0703",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#703)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1360,
    "displayValue": "1360 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0704",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#704)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 1075,
    "displayValue": "1075 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0705",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#705)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1467,
    "displayValue": "1467 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0706",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#706)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 1037,
    "displayValue": "1037 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0707",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#707)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 838,
    "displayValue": "838 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0708",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#708)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 1093,
    "displayValue": "1093 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0709",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#709)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 1228,
    "displayValue": "1228 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0710",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#710)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1395,
    "displayValue": "1395 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0711",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#711)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1404,
    "displayValue": "1404 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0712",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#712)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 1192,
    "displayValue": "1192 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0713",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#713)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 1373,
    "displayValue": "1373 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0714",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#714)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1996,
    "displayValue": "1996 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0715",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#715)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1752,
    "displayValue": "1752 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0716",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#716)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1779,
    "displayValue": "1779 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0717",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#717)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1848,
    "displayValue": "1848 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0718",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#718)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -1500,
    "displayValue": "1500 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0719",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#719)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -3137,
    "displayValue": "3137 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0720",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#720)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -3359,
    "displayValue": "3359 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0721",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#721)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -2426,
    "displayValue": "2426 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0722",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#722)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1797,
    "displayValue": "1797 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0723",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#723)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -360,
    "displayValue": "360 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0724",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#724)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -3092,
    "displayValue": "3092 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0725",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#725)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -4003,
    "displayValue": "4003 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0726",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#726)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1556,
    "displayValue": "1556 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0727",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#727)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -306,
    "displayValue": "306 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0728",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#728)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1914,
    "displayValue": "1914 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0729",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#729)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -151,
    "displayValue": "151 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0730",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#730)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1017,
    "displayValue": "1017 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0731",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#731)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2380,
    "displayValue": "2380 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0732",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#732)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2511,
    "displayValue": "2511 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0733",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#733)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1730,
    "displayValue": "1730 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0734",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#734)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1189,
    "displayValue": "1189 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0735",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#735)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -24,
    "displayValue": "24 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0736",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#736)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2276,
    "displayValue": "2276 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0737",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#737)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -2979,
    "displayValue": "2979 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0738",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#738)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1640,
    "displayValue": "1640 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0739",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#739)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 86,
    "displayValue": "86 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0740",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#740)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1211,
    "displayValue": "1211 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0741",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#741)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 230,
    "displayValue": "230 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0742",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#742)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -534,
    "displayValue": "534 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0743",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#743)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1623,
    "displayValue": "1623 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0744",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#744)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1663,
    "displayValue": "1663 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0745",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#745)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1034,
    "displayValue": "1034 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0746",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#746)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -581,
    "displayValue": "581 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0747",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#747)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 312,
    "displayValue": "312 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0748",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#748)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1460,
    "displayValue": "1460 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0749",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#749)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -1955,
    "displayValue": "1955 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0750",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#750)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1724,
    "displayValue": "1724 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0751",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#751)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 478,
    "displayValue": "478 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0752",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#752)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -507,
    "displayValue": "507 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0753",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#753)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 611,
    "displayValue": "611 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0754",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#754)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -50,
    "displayValue": "50 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0755",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#755)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -866,
    "displayValue": "866 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0756",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#756)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -815,
    "displayValue": "815 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0757",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#757)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -338,
    "displayValue": "338 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0758",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#758)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 27,
    "displayValue": "27 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0759",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#759)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 648,
    "displayValue": "648 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0760",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#760)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -644,
    "displayValue": "644 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0761",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#761)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -931,
    "displayValue": "931 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0762",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#762)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1807,
    "displayValue": "1807 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0763",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#763)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 870,
    "displayValue": "870 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0764",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#764)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 196,
    "displayValue": "196 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0765",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#765)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 991,
    "displayValue": "991 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0766",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#766)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 433,
    "displayValue": "433 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0767",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#767)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -108,
    "displayValue": "108 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0768",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#768)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 33,
    "displayValue": "33 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0769",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#769)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 358,
    "displayValue": "358 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0770",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#770)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 635,
    "displayValue": "635 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0771",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#771)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 984,
    "displayValue": "984 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0772",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#772)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 172,
    "displayValue": "172 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0773",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#773)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 93,
    "displayValue": "93 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0774",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#774)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1891,
    "displayValue": "1891 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0775",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#775)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1262,
    "displayValue": "1262 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0776",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#776)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0777",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#777)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1372,
    "displayValue": "1372 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0778",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#778)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 916,
    "displayValue": "916 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0779",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#779)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 649,
    "displayValue": "649 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0780",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#780)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 881,
    "displayValue": "881 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0781",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#781)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 1054,
    "displayValue": "1054 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0782",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#782)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1243,
    "displayValue": "1243 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0783",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#783)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1320,
    "displayValue": "1320 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0784",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#784)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 988,
    "displayValue": "988 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0785",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#785)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 1117,
    "displayValue": "1117 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0786",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#786)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1975,
    "displayValue": "1975 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0787",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#787)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1654,
    "displayValue": "1654 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0788",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#788)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1603,
    "displayValue": "1603 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0789",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#789)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1753,
    "displayValue": "1753 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0790",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#790)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 1399,
    "displayValue": "1399 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0791",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#791)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 1406,
    "displayValue": "1406 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0792",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#792)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 1729,
    "displayValue": "1729 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0793",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#793)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -2600,
    "displayValue": "2600 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0794",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#794)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1949,
    "displayValue": "1949 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0795",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#795)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": -444,
    "displayValue": "444 BCE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0796",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#796)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -3296,
    "displayValue": "3296 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0797",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#797)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -4259,
    "displayValue": "4259 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0798",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#798)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1535,
    "displayValue": "1535 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0799",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#799)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -404,
    "displayValue": "404 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0800",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#800)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -2090,
    "displayValue": "2090 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0801",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#801)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -246,
    "displayValue": "246 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0802",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#802)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1138,
    "displayValue": "1138 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0803",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#803)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2569,
    "displayValue": "2569 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0804",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#804)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2723,
    "displayValue": "2723 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0805",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#805)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -1904,
    "displayValue": "1904 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0806",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#806)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1341,
    "displayValue": "1341 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0807",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#807)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -108,
    "displayValue": "108 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0808",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#808)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2480,
    "displayValue": "2480 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0809",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#809)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -3235,
    "displayValue": "3235 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0810",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#810)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1619,
    "displayValue": "1619 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0811",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#811)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -12,
    "displayValue": "12 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0812",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#812)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1386,
    "displayValue": "1386 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0813",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#813)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 135,
    "displayValue": "135 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0814",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#814)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -654,
    "displayValue": "654 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0815",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#815)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -1812,
    "displayValue": "1812 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0816",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#816)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -1875,
    "displayValue": "1875 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0817",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#817)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1208,
    "displayValue": "1208 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0818",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#818)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -733,
    "displayValue": "733 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0819",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#819)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 228,
    "displayValue": "228 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0820",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#820)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1664,
    "displayValue": "1664 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0821",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#821)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -2211,
    "displayValue": "2211 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0822",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#822)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1703,
    "displayValue": "1703 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0823",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#823)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 380,
    "displayValue": "380 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0824",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#824)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -683,
    "displayValue": "683 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0825",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#825)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 515,
    "displayValue": "515 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0826",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#826)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -171,
    "displayValue": "171 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0827",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#827)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1055,
    "displayValue": "1055 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0828",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#828)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1027,
    "displayValue": "1027 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0829",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#829)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -512,
    "displayValue": "512 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0830",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#830)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -125,
    "displayValue": "125 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0831",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#831)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 564,
    "displayValue": "564 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0832",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#832)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -848,
    "displayValue": "848 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0833",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#833)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -1187,
    "displayValue": "1187 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0834",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#834)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1786,
    "displayValue": "1786 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0835",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#835)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 772,
    "displayValue": "772 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0836",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#836)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 20,
    "displayValue": "20 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0837",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#837)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 896,
    "displayValue": "896 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0838",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#838)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 312,
    "displayValue": "312 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0839",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#839)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -298,
    "displayValue": "298 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0840",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#840)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -179,
    "displayValue": "179 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0841",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#841)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 184,
    "displayValue": "184 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0842",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#842)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 483,
    "displayValue": "483 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0843",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#843)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 900,
    "displayValue": "900 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0844",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#844)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -32,
    "displayValue": "32 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0845",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#845)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -163,
    "displayValue": "163 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0846",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#846)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1870,
    "displayValue": "1870 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0847",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#847)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1164,
    "displayValue": "1164 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0848",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#848)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 724,
    "displayValue": "724 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0849",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#849)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1277,
    "displayValue": "1277 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0850",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#850)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 795,
    "displayValue": "795 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0851",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#851)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 459,
    "displayValue": "459 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0852",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#852)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 669,
    "displayValue": "669 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0853",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#853)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 880,
    "displayValue": "880 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0854",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#854)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 1091,
    "displayValue": "1091 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0855",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#855)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1236,
    "displayValue": "1236 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0856",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#856)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 784,
    "displayValue": "784 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0857",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#857)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 861,
    "displayValue": "861 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0858",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#858)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1954,
    "displayValue": "1954 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0859",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#859)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1556,
    "displayValue": "1556 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0860",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#860)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1427,
    "displayValue": "1427 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0861",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#861)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1658,
    "displayValue": "1658 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0862",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#862)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 1278,
    "displayValue": "1278 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0863",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#863)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 1217,
    "displayValue": "1217 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0864",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#864)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 1517,
    "displayValue": "1517 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0865",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#865)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 1576,
    "displayValue": "1576 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0866",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#866)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 1699,
    "displayValue": "1699 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0867",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#867)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1572,
    "displayValue": "1572 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0868",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#868)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -3500,
    "displayValue": "3500 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0869",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#869)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -4515,
    "displayValue": "4515 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0870",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#870)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1514,
    "displayValue": "1514 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0871",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#871)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -502,
    "displayValue": "502 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0872",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#872)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -2266,
    "displayValue": "2266 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0873",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#873)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -341,
    "displayValue": "341 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0874",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#874)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1258,
    "displayValue": "1258 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0875",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#875)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2758,
    "displayValue": "2758 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0876",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#876)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -2935,
    "displayValue": "2935 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0877",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#877)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -2078,
    "displayValue": "2078 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0878",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#878)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1493,
    "displayValue": "1493 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0879",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#879)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -192,
    "displayValue": "192 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0880",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#880)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2684,
    "displayValue": "2684 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0881",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#881)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -3491,
    "displayValue": "3491 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0882",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#882)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1598,
    "displayValue": "1598 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0883",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#883)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -110,
    "displayValue": "110 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0884",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#884)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1562,
    "displayValue": "1562 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0885",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#885)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 39,
    "displayValue": "39 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0886",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#886)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -775,
    "displayValue": "775 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0887",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#887)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2001,
    "displayValue": "2001 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0888",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#888)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -2087,
    "displayValue": "2087 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0889",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#889)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1382,
    "displayValue": "1382 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0890",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#890)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -885,
    "displayValue": "885 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0891",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#891)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 144,
    "displayValue": "144 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0892",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#892)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -1868,
    "displayValue": "1868 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0893",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#893)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -2467,
    "displayValue": "2467 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0894",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#894)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1682,
    "displayValue": "1682 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0895",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#895)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 282,
    "displayValue": "282 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0896",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#896)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -859,
    "displayValue": "859 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0897",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#897)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 420,
    "displayValue": "420 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0898",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#898)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -292,
    "displayValue": "292 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0899",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#899)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1244,
    "displayValue": "1244 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0900",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#900)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1239,
    "displayValue": "1239 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0901",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#901)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -686,
    "displayValue": "686 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0902",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#902)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -277,
    "displayValue": "277 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0903",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#903)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 480,
    "displayValue": "480 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0904",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#904)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -1052,
    "displayValue": "1052 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0905",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#905)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -1443,
    "displayValue": "1443 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0906",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#906)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1765,
    "displayValue": "1765 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0907",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#907)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 674,
    "displayValue": "674 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0908",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#908)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -155,
    "displayValue": "155 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0909",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#909)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 801,
    "displayValue": "801 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0910",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#910)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 191,
    "displayValue": "191 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0911",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#911)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -487,
    "displayValue": "487 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0912",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#912)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -391,
    "displayValue": "391 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0913",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#913)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 10,
    "displayValue": "10 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0914",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#914)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 331,
    "displayValue": "331 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0915",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#915)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 816,
    "displayValue": "816 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0916",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#916)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -236,
    "displayValue": "236 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0917",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#917)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -419,
    "displayValue": "419 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0918",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#918)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1849,
    "displayValue": "1849 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0919",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#919)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 1066,
    "displayValue": "1066 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0920",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#920)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 548,
    "displayValue": "548 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0921",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#921)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1182,
    "displayValue": "1182 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0922",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#922)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 674,
    "displayValue": "674 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0923",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#923)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 270,
    "displayValue": "270 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0924",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#924)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 457,
    "displayValue": "457 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0925",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#925)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 706,
    "displayValue": "706 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0926",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#926)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 939,
    "displayValue": "939 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0927",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#927)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1152,
    "displayValue": "1152 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0928",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#928)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 580,
    "displayValue": "580 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0929",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#929)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": 605,
    "displayValue": "605 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0930",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#930)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1933,
    "displayValue": "1933 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0931",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#931)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 1458,
    "displayValue": "1458 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0932",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#932)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": 1251,
    "displayValue": "1251 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0933",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#933)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 1563,
    "displayValue": "1563 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0934",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#934)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 1158,
    "displayValue": "1158 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0935",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#935)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": 1027,
    "displayValue": "1027 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0936",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#936)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": 1305,
    "displayValue": "1305 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0937",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#937)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": 1402,
    "displayValue": "1402 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0938",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#938)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 1547,
    "displayValue": "1547 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0939",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#939)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 1488,
    "displayValue": "1488 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0940",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#940)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": 1396,
    "displayValue": "1396 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0941",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#941)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": 1629,
    "displayValue": "1629 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0942",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#942)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 2017,
    "displayValue": "2017 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0943",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#943)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": -600,
    "displayValue": "600 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0944",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#944)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -2441,
    "displayValue": "2441 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0945",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#945)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": -437,
    "displayValue": "437 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0946",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#946)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -1379,
    "displayValue": "1379 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0947",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#947)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -2948,
    "displayValue": "2948 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0948",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#948)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -3147,
    "displayValue": "3147 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0949",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#949)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -2252,
    "displayValue": "2252 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0950",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#950)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -1645,
    "displayValue": "1645 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0951",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#951)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": -276,
    "displayValue": "276 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0952",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#952)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -2888,
    "displayValue": "2888 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0953",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#953)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -3747,
    "displayValue": "3747 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0954",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#954)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1577,
    "displayValue": "1577 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0955",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#955)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": -208,
    "displayValue": "208 BCE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0956",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#956)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -1738,
    "displayValue": "1738 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0957",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#957)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": -56,
    "displayValue": "56 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0958",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#958)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": -896,
    "displayValue": "896 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0959",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#959)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -2191,
    "displayValue": "2191 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0960",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#960)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -2299,
    "displayValue": "2299 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0961",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#961)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -1556,
    "displayValue": "1556 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0962",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#962)",
    "category": "Medicine",
    "region": "East Asia",
    "value": -1037,
    "displayValue": "1037 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0963",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#963)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 60,
    "displayValue": "60 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0964",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#964)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -2072,
    "displayValue": "2072 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0965",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#965)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -2723,
    "displayValue": "2723 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0966",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#966)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1661,
    "displayValue": "1661 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0967",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#967)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 184,
    "displayValue": "184 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0968",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#968)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": -1035,
    "displayValue": "1035 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0969",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#969)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 325,
    "displayValue": "325 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0970",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#970)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": -413,
    "displayValue": "413 BCE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0971",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#971)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": -1433,
    "displayValue": "1433 BCE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0972",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#972)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": -1451,
    "displayValue": "1451 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0973",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#973)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": -860,
    "displayValue": "860 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0974",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#974)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": -429,
    "displayValue": "429 BCE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0975",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#975)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 396,
    "displayValue": "396 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0976",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#976)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": -1256,
    "displayValue": "1256 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0977",
    "title": "Oceania & Pacific Script Inscription & Literary Chronicle Transmission (#977)",
    "category": "Writing & Literature",
    "region": "Oceania & Pacific",
    "value": -1699,
    "displayValue": "1699 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0978",
    "title": "Global Scientific Milestones Medical Compendium & Botanical Herb Pharmacopeia (#978)",
    "category": "Medicine",
    "region": "Global Scientific Milestones",
    "value": 1745,
    "displayValue": "1745 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0979",
    "title": "West Africa Milestone: Foundational Settlement & Early Architecture (#979)",
    "category": "Urbanism",
    "region": "West Africa",
    "value": 576,
    "displayValue": "576 CE",
    "clue": "Early planned stone and timber structures engineered in West Africa."
  },
  {
    "id": "EP_0980",
    "title": "Nubia & Horn of Africa Astronomical & Seasonal Alignment Observation (#980)",
    "category": "Astronomy",
    "region": "Nubia & Horn of Africa",
    "value": -331,
    "displayValue": "331 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Nubia & Horn of Africa."
  },
  {
    "id": "EP_0981",
    "title": "Central & Southern Africa Metallurgy & Bronze/Iron Craft Guild Production (#981)",
    "category": "Metallurgy",
    "region": "Central & Southern Africa",
    "value": 706,
    "displayValue": "706 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Central & Southern Africa."
  },
  {
    "id": "EP_0982",
    "title": "Mesoamerica Agricultural Terracing & Water Management Sluices (#982)",
    "category": "Hydrology",
    "region": "Mesoamerica",
    "value": 70,
    "displayValue": "70 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0983",
    "title": "Andean South America Legal Code & Administrative Charter Formalized (#983)",
    "category": "Law & Governance",
    "region": "Andean South America",
    "value": -676,
    "displayValue": "676 BCE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0984",
    "title": "North American Indigenous Long-Distance Maritime & Overland Trade Route Network (#984)",
    "category": "Trade & Cartography",
    "region": "North American Indigenous",
    "value": -603,
    "displayValue": "603 BCE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0985",
    "title": "South Asia Script Inscription & Literary Chronicle Transmission (#985)",
    "category": "Writing & Literature",
    "region": "South Asia",
    "value": -164,
    "displayValue": "164 BCE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0986",
    "title": "East Asia Medical Compendium & Botanical Herb Pharmacopeia (#986)",
    "category": "Medicine",
    "region": "East Asia",
    "value": 179,
    "displayValue": "179 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0987",
    "title": "Central Asia & Silk Road Milestone: Foundational Settlement & Early Architecture (#987)",
    "category": "Urbanism",
    "region": "Central Asia & Silk Road",
    "value": 732,
    "displayValue": "732 CE",
    "clue": "Early planned stone and timber structures engineered in Central Asia & Silk Road."
  },
  {
    "id": "EP_0988",
    "title": "Middle East & Mesopotamia Astronomical & Seasonal Alignment Observation (#988)",
    "category": "Astronomy",
    "region": "Middle East & Mesopotamia",
    "value": -440,
    "displayValue": "440 BCE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in Middle East & Mesopotamia."
  },
  {
    "id": "EP_0989",
    "title": "Oceania & Pacific Metallurgy & Bronze/Iron Craft Guild Production (#989)",
    "category": "Metallurgy",
    "region": "Oceania & Pacific",
    "value": -675,
    "displayValue": "675 BCE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in Oceania & Pacific."
  },
  {
    "id": "EP_0990",
    "title": "Global Scientific Milestones Agricultural Terracing & Water Management Sluices (#990)",
    "category": "Hydrology",
    "region": "Global Scientific Milestones",
    "value": 1828,
    "displayValue": "1828 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0991",
    "title": "West Africa Legal Code & Administrative Charter Formalized (#991)",
    "category": "Law & Governance",
    "region": "West Africa",
    "value": 968,
    "displayValue": "968 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_0992",
    "title": "Nubia & Horn of Africa Long-Distance Maritime & Overland Trade Route Network (#992)",
    "category": "Trade & Cartography",
    "region": "Nubia & Horn of Africa",
    "value": 372,
    "displayValue": "372 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  },
  {
    "id": "EP_0993",
    "title": "Central & Southern Africa Script Inscription & Literary Chronicle Transmission (#993)",
    "category": "Writing & Literature",
    "region": "Central & Southern Africa",
    "value": 1087,
    "displayValue": "1087 CE",
    "clue": "Epigraphic recording of dynastic history, legal acquittals, and epic poetry."
  },
  {
    "id": "EP_0994",
    "title": "Mesoamerica Medical Compendium & Botanical Herb Pharmacopeia (#994)",
    "category": "Medicine",
    "region": "Mesoamerica",
    "value": 554,
    "displayValue": "554 CE",
    "clue": "Empirical clinical compilation of surgical methods and plant-based healing therapies."
  },
  {
    "id": "EP_0995",
    "title": "Andean South America Milestone: Foundational Settlement & Early Architecture (#995)",
    "category": "Urbanism",
    "region": "Andean South America",
    "value": 81,
    "displayValue": "81 CE",
    "clue": "Early planned stone and timber structures engineered in Andean South America."
  },
  {
    "id": "EP_0996",
    "title": "North American Indigenous Astronomical & Seasonal Alignment Observation (#996)",
    "category": "Astronomy",
    "region": "North American Indigenous",
    "value": 245,
    "displayValue": "245 CE",
    "clue": "Systematic tracking of celestial synodic cycles and equinoxes in North American Indigenous."
  },
  {
    "id": "EP_0997",
    "title": "South Asia Metallurgy & Bronze/Iron Craft Guild Production (#997)",
    "category": "Metallurgy",
    "region": "South Asia",
    "value": 532,
    "displayValue": "532 CE",
    "clue": "High-temperature casting of tools, weapons, and ceremonial regalia in South Asia."
  },
  {
    "id": "EP_0998",
    "title": "East Asia Agricultural Terracing & Water Management Sluices (#998)",
    "category": "Hydrology",
    "region": "East Asia",
    "value": 787,
    "displayValue": "787 CE",
    "clue": "Gravity-fed irrigation and flood management canals supporting dense cities."
  },
  {
    "id": "EP_0999",
    "title": "Central Asia & Silk Road Legal Code & Administrative Charter Formalized (#999)",
    "category": "Law & Governance",
    "region": "Central Asia & Silk Road",
    "value": 1068,
    "displayValue": "1068 CE",
    "clue": "Standardization of community property rights, merchant taxes, and civic ethics."
  },
  {
    "id": "EP_1000",
    "title": "Middle East & Mesopotamia Long-Distance Maritime & Overland Trade Route Network (#1000)",
    "category": "Trade & Cartography",
    "region": "Middle East & Mesopotamia",
    "value": 376,
    "displayValue": "376 CE",
    "clue": "Expeditions exchange jade, salt, spices, textiles, and obsidian across borders."
  }
];
