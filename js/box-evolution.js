/*
Evolution Dex
>>	Fossil Pokemon should be listed next to each other (following
	Aerodactyl).
>>	Since gender difference was introduced in G00, both Nidoran♂ and 
	Nidoran♀ will be considered as one entry known as Nidoran.
>>	Gender difference will be included in this list. Male should 
	come first before female, since the original design becomes male
	and new design was added for female. Male and female evolution 
	should come together:
		Oddish -+-> (m) Gloom ---+-> (m) Vileplume
		        |                |
		        '-> (f) Gloom -+---> (f) Vileplume
		                       | |
		                       '-'-> Bellossom
>>	Any new evolution that will be introduced from newer generations 
	will be inserted in the lower generation evolution line.
>>	Any new Pokemon related to previous Pokemon should follow the 
	latter.
		Regirock
		Regice
		Registeel
		Regigigas
xx	Mega Evolutions will be included in this list but the Pokemon 
	should be holding the Mega Stone to consider it as caught.
>>	Any regional variant will be considered as new entry following 
	the	older varirants. If a regional variant evolves from other
	regional variant, it is considered as branch evolution:
		Pikachu -+-> Raichu
		         '-> Alolan Raichu
	If a regional variant evolves from same regional variant, it 
	should be considered as different entry:
		Meowth -> Persian
		Alolan Meowth -> Alolan Persian
		Galarian Meowth -> Perrserrker
>>	Pokemon with Gigantamax variants will be included in this list
	but the Pokemon should bear the Gigantamax Gene (logo on the 
	summary). Pokemon with Gigantamax Gene that cannot Gigantamax, 
	like Leon's Charmander -> Charmeleon, should not be included in 
	this list.
*/

_Ndex_evo_08 = [
	// Bulbasaur -> Ivysaur -> Venusaur -+-<-> Mega Venusuar
	//                                   '-<-> Gigantamax Venusaur
	"0001",			// Bulbasaur
	"0002",			// Ivysaur
//	"0003",			// Venusaur
	"0003m",		// Venusaur♂
	"0003f",		// Venusaur♀
//	"0003mega",		// Mega Venusaur
//	"0003gmax",		// Gigantamax Venusaur
	// Charmander -> Charmeleon -> Charizard -+-<-> Mega Charizard X
	//                                        |-<-> Mega Charizard Y
	//                                        '-<-> Gigantamax Charizard
	"0004",			// Charmander
	"0005",			// Charmeleon
	"0006",			// Charizard
//	"0006megax",	// Mega Charizard X
//	"0006megay",	// Mega Charizard Y
	"0006gmax",		// Gigantamax Charizard
	// Squirtle -> Wartortle -> Blastoise -+-<-> Mega Blastoise
	//                                     '-<-> Gigantamax Blastoise
	"0007",			// Squirtle
	"0008",			// Wartortle
	"0009",			// Blastoise
//	"0009mega",		// Mega Blastoise
//	"0009gmax",		// Gigantamax Blastoise
	// Caterpie -> Metapod -> Butterfree <-> Gigantamax Butterfree
	"0010",			// Caterpie
	"0011",			// Metapod
//	"0012",			// Butterfree
	"0012m",		// Butterfree♂
	"0012f",		// Butterfree♀
	"0012gmax",		// Gigantamax Butterfree
	// Weedle -> Kakuna -> Beedrill <-> Mega Beedrill
	"0013",			// Weedle
	"0014",			// Kakuna
	"0015",			// Beedrill
//	"0015mega",		// Mega Beedrill
	// Pidgey -> Pidgeotto -> Pidgeot <-> Mega Pidgeot
	"0016",			// Pidgey
	"0017",			// Pidgeotto
	"0018",			// Pidgeot
//	"0018mega",		// Mega Pidgeot
	// Rattata -> Raticate
//	"0019",			// Rattata
//	"0020",			// Raticate
	"0019m",		// Rattata♂
	"0020m",		// Raticate♂
	"0019f",		// Rattata♀
	"0020f",		// Raticate♀
	// Alolan Rattata -> Alolan Raticate
	"0019alola",	// Alolan Rattata
	"0020alola",	// Alolan Raticate
	// Spearow -> Fearow
	"0021",			// Spearow
	"0022",			// Fearow
	// Ekans -> Arbok
	"0023",			// Ekans
	"0024",			// Arbok
	// Spiky-eared Pichu
	// Cosplay Pikachu (cannot evolve)
	// Pikachu in a Cap (cannot evolve)
	// Partner Pikachu (Let's GO) (cannot evolve)
	// Pikachu <-> Gigantamax Pikachu (cannot evolve)
	// Pichu -> Pikachu +-> 
	//                  |-> Raichu
	//                  '-> Alolan Raichu
//	"0172s",		// Spiky-eared Pichu (female only)
	"0172",			// Pichu
//	"0025",			// Pikachu
//	"0026",			// Raichu
	"0025m",		// Pikachu♂
	"0026m",		// Raichu♂
	"0025f",		// Pikachu♀
	"0026f",		// Raichu♀
	"0026alola",	// Alolan Raichu
//	"0025c",		// Cosplay Pikachu (female only) (cannot evolve)
//	"0025c1",		// Pikachu Rock Star (female only) (cannot evolve)
//	"0025c2",		// Pikachu Belle (female only) (cannot evolve)
//	"0025c3",		// Pikachu Pop Star (female only) (cannot evolve)
//	"0025c4",		// Pikachu, Ph. D (female only) (cannot evolve)
//	"0025c5",		// Pikachu Libre (female only) (cannot evolve)
	"0025cap1",		// Original Cap Pikachu (male only) (cannot evolve)
	"0025cap2",		// Hoenn Cap Pikachu (male only) (cannot evolve)
	"0025cap3",		// Sinnoh Cap Pikachu (male only) (cannot evolve)
	"0025cap4",		// Unova Cap Pikachu (male only) (cannot evolve)
	"0025cap5",		// Kalos Cap Pikachu (male only) (cannot evolve)
	"0025cap6",		// Alola Cap Pikachu (male only) (cannot evolve)
	"0025cap7",		// Partner Cap Pikachu (male only) (cannot evolve)
	"0025gmax",		// Gigantamax Pikachu (cannot evolve)
//	"0025letsgom",	// Parter Pikachu♂ (cannot evolve)
//	"0025letsgof",	// Parter Pikachu♀ (cannot evolve)
	// Sandshrew -> Sandslash
	"0027",			// Sandshrew
	"0028",			// Sandslash
	// Alolan Sandshrew -> Alolan Sandslash
	"0027alola",	// Alolan Sandshrew
	"0028alola",	// Alolan Sandslash
	// Nidoran -+-> Nidorina -> Nidoqueen
	//          '-> Nidorino -> Nidoking
//	"0029",			// Nidoran
	"0032m",		// Nidoran♂
//	"0032",			// Nidoran
	"0033",			// Nidorino
	"0034",			// Nidoking
	"0029f",		// Nidoran♀
	"0030",			// Nidorina
	"0031",			// Nidoqueen
	// Cleffa -> Clefairy -> Clefaible
	"0173",			// Cleffa
	"0035",			// Clefairy
	"0036",			// Clefable
	// Vulpix -> Ninetails
	"0037",			// Vulpix
	"0038",			// Ninetales
	// Alolan Vulpix -> Alolan Ninetails
	"0037alola",	// Alolan Vulpix
	"0038alola",	// Alolan Ninetales
	// Igglybuff -> Jigglypuff -> Wigglytuff
	"0174",			// Igglybuff
	"0039",			// Jigglypuff
	"0040",			// Wigglytuff
	// Zubat -> Golbat -> Crobat
//	"0041",			// Zubat
//	"0042",			// Golbat
	"0041m",		// Zubat♂
	"0042m",		// Golbat♂
	"0041f",		// Zubat♀
	"0042f",		// Golbat♀
	"0169",			// Crobat
	// Oddish -> Gloom -+-> Vileplume
	//                  '-> Bellossom
	"0043",			// Oddish
//	"0044",			// Gloom
//	"0045",			// Vileplume
	"0044m",		// Gloom♂
	"0045m",		// Vileplume♂
	"0044f",		// Gloom♀
	"0045f",		// Vileplume♀
	"0182",			// Bellossom
	// Paras -> Parasect
	"0046",			// Paras
	"0047",			// Parasect
	// Venonat -> Venomoth
	"0048",			// Venonat
	"0049",			// Venomoth
	// Diglett -> Dugtrio
	"0050",			// Diglett
	"0051",			// Dugtrio
	// Alolan Diglett -> Alolan Dugtrio
	"0050alola",	// Alolan Diglett
	"0051alola",	// Alolan Dugtrio
	// Meowth <-> Gigantamax Meowth
	// Meowth -> Persian
	"0052gmax",		// Gigantamax Meowth (cannot evolve)
	"0052",			// Meowth
	"0053",			// Persian
	// Alolan Meowth -> Alolan 
	"0052alola",	// Alolan Meowth
	"0053alola",	// Alolan Persian
	// Galarian Meowth -> Perrserker
	"0052galar",	// Galarian Meowth
	"0863",			// Perrserker
	// Psyduck -> Golduck
	"0054",			// Psyduck
	"0055",			// Golduck
	// Mankey -> Primeape
	"0056",			// Mankey
	"0057",			// Primeape
	// Growlithe -> Arcanine
	"0058",			// Growlithe
	"0059",			// Arcanine
	// Poliwag -> Poliwhirl -+-> Poliwrath
	//                       '-> Politoed
	"0060",			// Poliwag
	"0061",			// Poliwhirl
	"0062",			// Poliwrath
//	"0186",			// Politoed
	"0186m",		// Politoed♂
	"0186f",		// Politoed♀
	// Abra -> Kadabra -> Alakazam <-> Mega Alakazam
	"0063",			// Abra
//	"0064",			// Kadabra
//	"0065",			// Alakazam
	"0064m",		// Kadabra♂
	"0065m",		// Alakazam♂
	"0064f",		// Kadabra♀
	"0065f",		// Alakazam♀
//	"0065mega",		// Mega Alakazam
	// Machop -> Machike -> Machamp <-> Gigantamax Machamp
	"0066",			// Machop
	"0067",			// Machoke
	"0068",			// Machamp
	"0068gmax",		// Gigantamax Machamp
	// Bellsprout -> Weepinbell -> Victreebel
	"0069",			// Bellsprout
	"0070",			// Weepinbell
	"0071",			// Victreebel
	// Tentacool -> Tentacruel (-> Tentachaos)
	"0072",			// Tentacool
	"0073",			// Tentacruel
	// Geodude -> Graveler -> Golem
	"0074",			// Geodude
	"0075",			// Graveler
	"0076",			// Golem
	// Alolan Geodude -> Alolan Graveler -> Alolan Golem
	"0074alola",	// Alolan Geodude
	"0075alola",	// Alolan Graveler
	"0076alola",	// Alolan Golem
	// Ponyta -> Rapidash
	"0077",			// Ponyta
	"0078",			// Rapidash
	// Galarian Ponyta -> Galarian Rapidash
	"0077galar",	// Galarian Ponyta
	"0078galar",	// Galarian Rapidash
	// Slowpoke -+-> Slowbro <-> Mega Slowbro
	//           '-> Slowking
	"0079",			// Slowpoke
	"0080",			// Slowbro
//	"0080mega",		// Mega Slowbro
	"0199",			// Slowking
	// Galarian Slowpoke -+-> Galarian Slowbro
	//                    '-> Galarian Slowking
	"0079galar",	// Galarian Slowpoke
//	"0080galar",	// Galarian Slowbro
//	"0199galar",	// Galarian Slowking
	// Magnemite -> Magneton -> Magnezone
	"0081",			// Magnemite
	"0082",			// Magneton
	"0462",			// Magnezone (uknown gender)
	// Farfetch'd
	"0083",			// Farfetch'd
	// Galarian Farfetch'd -> Sirsetch'd
	"0083galar",	// Galarian Farfetch'd
	"0865",			// Sirfetch'd
	// Doduo -> Dodrio
//	"0084",			// Doduo
//	"0085",			// Dodrio
	"0084m",		// Doduo♂
	"0085m",		// Dodrio♂
	"0084f",		// Doduo♀
	"0085f",		// Dodrio♀
	// Seel -> Dewgong
	"0086",			// Seel
	"0087",			// Dewgong
	// Grimer -> Muk
	"0088",			// Grimer
	"0089",			// Muk
	// Alolan Grimer -> Alolan Muk
	"0088alola",	// Alolan Grimer
	"0089alola",	// Alolan Muk
	// Shellder -> Cloyster
	"0090",			// Shellder
	"0091",			// Cloyster
	// Gastly -> Haunter -> Gengar -+-<-> Mega Gengar
	//                              '-<-> Gigantamax Gengar
	"0092",			// Gastly
	"0093",			// Haunter
	"0094",			// Gengar
//	"0094mega",		// Mega Gengar
	"0094gmax",		// Gigantamax Gengar
	// Onix -> Steelix <-> Mega Steelix
	"0095",			// Onix
//	"0208",			// Steelix
	"0208m",		// Steelix♂
	"0208f",		// Steelix♀
//	"0208mega",		// Mega Steelix
	// Drowzee -> Hypno
	"0096",			// Drowzee
//	"0097",			// Hypno
	"0097m",		// Hypno♂
	"0097f",		// Hypno♀
	// Krabby -> Kingler <-> Gigantamax Kingler
	"0098",			// Krabby
	"0099",			// Kingler
	"0099gmax",		// Gigantamax Kingler
	// Voltorb -> Electrode
	"0100",			// Voltorb (uknown gender)
	"0101",			// Electrode (uknown gender)
	// Exeggcute -+-> Exeggutor
	//            '-> Alolan Exegutor
	"0102",			// Exeggcute
	"0103",			// Exeggutor
	"0103alola",	// Alolan Exeggutor
	// Cubone -+-> Marowak
	//         '-> Alolan Marowak
	"0104",			// Cubone
	"0105",			// Marowak
	"0105alola",	// Alolan Marowak
	// Tyrogue -+-> Hitmonlee
	//          |-> Hitmonchan
	//          '-> Hitmontop
	"0236",			// Tyrogue (male only)
	"0106",			// Hitmonlee (male only)
	"0107",			// Hitmonchan (male only)
	"0237",			// Hitmontop (male only)
	// Lickitung -> Lickilicky
	"0108",			// Lickitung
	"0463",			// Lickilicky
	// Koffing -+-> Weezing
	//          '-> Galarian Weezing
	"0109",			// Koffing
	"0110",			// Weezing
	"0110galar",	// Galarian Weezing
	// Rhyhorn -> Rhydon -> Rhyperior
//	"0111",			// Rhyhorn
//	"0112",			// Rhydon
//	"0464",			// Rhyperior
	"0111m",		// Rhyhorn♂
	"0112m",		// Rhydon♂
	"0464m",		// Rhyperior♂
	"0111f",		// Rhyhorn♀
	"0112f",		// Rhydon♀
	"0464f",		// Rhyperior♀
	// Happiny -> Chansey -> Blissey
	"0440",			// Happiny (female only)
	"0113",			// Chansey (female only)
	"0242",			// Blissey (female only)
	// Tangela -> Tangrowth
	"0114",			// Tangela
//	"0465",			// Tangrowth
	"0465m",		// Tangrowth♂
	"0465f",		// Tangrowth♀
	// Kangaskhan <-> Mega Kangaskhan
	"0115",			// Kangaskhan (female only)
//	"0115mega",		// Mega Kangaskhan (female only)
	// Horsea -> Seadra -> Kingdra
	"0116",			// Horsea
	"0117",			// Seadra
	"0230",			// Kingdra
	// Goldeen -> Seaking
//	"0118",			// Goldeen
//	"0119",			// Seaking
	"0118m",		// Goldeen♂
	"0119m",		// Seaking♂
	"0118f",		// Goldeen♀
	"0119f",		// Seaking♀
	// Staryu -> Starmie
 	"0120",			// Staryu (uknown gender)
	"0121",			// Starmie (uknown gender)
	// Mime Jr. -+-> Mr. Mime
	//           '-> Galarian Mr. Mime -> Mr. Rime
	"0439",			// Mime Jr.
	"0122",			// Mr. Mime
	"0122galar",	// Galarian Mr. Mime
	"0866",			// Mr. Rime
	// Scyther -> Scizor -> Mega Scizor
//	"0123",			// Scyther
//	"0212",			// Scizor
	"0123m",		// Scyther♂
	"0212m",		// Scizor♂
	"0123f",		// Scyther♀
	"0212f",		// Scizor♀
//	"0212mega",		// Mega Scizor
	// Smoochum -> Jynx
	"0238",			// Smoochum (female only)
	"0124",			// Jynx (female only)
	// Elekid -> Electabuzz -> Electivire
	"0239",			// Elekid
	"0125",			// Electabuzz
	"0466",			// Electivire
	// Magby -> Magmar -> Magmortar
	"0240",			// Magby
	"0126",			// Magmar
	"0467",			// Magmortar
	// Pinsir <-> Mega Pinsir
	"0127",			// Pinsir
//	"0127mega",		// Mega Pinsir
	// Tauros
	"0128",			// Tauros (male only)
	// Magikarp -> Gyarados <-> Mega Gyarados
//	"0129",			// Magikarp
//	"0130",			// Gyarados
	"0129m",		// Magikarp♂
	"0130m",		// Gyarados♂
	"0129f",		// Magikarp♀
	"0130f",		// Gyarados♀
//	"0130mega",		// Mega Gyarados
	// Lapras <-> Gigantamax Lapras
	"0131",			// Lapras
	"0131gmax",		// Gigantamax Lapras
	// Ditto
	"0132",			// Ditto (uknown gender)
	// Partner Eevee
	// Eevee -+-> Vaporeon
	//        |-> Jolteon
	//        |-> Flareon
	//        |-> Espeon
	//        |-> Umbreon
	//        |-> Leafeon
	//        |-> Glaceon
	//        '-> Sylveon
	// Eevee <-> Gigantamax Eevee
//	"0133letsgo",	// Partner Eevee (cannot evolve)
//	"0133",			// Eevee
	"0133m",		// Eevee♂
	"0133f",		// Eevee♀
	"0134",			// Vaporeon
	"0135",			// Jolteon
	"0136",			// Flareon
	"0196",			// Espeon
	"0197",			// Umbreon
	"0470",			// Leafeon
	"0471",			// Glaceon
	"0700",			// Sylveon
	"0133gmax",		// Gigantamax Eevee
	// Porygon -> Porygon2 -> Porygon-Z
	"0137",			// Porygon (uknown gender)
	"0233",			// Porygon2 (uknown gender)
	"0474",			// Porygon-Z (uknown gender)
	// Helix Fossil -> Omanyte -> Omastar
	"0138",			// Omanyte
	"0139",			// Omastar
	// Dome Fossil -> Kabuto -> Kabutops
	"0140",			// Kabuto
	"0141",			// Kabutops
	// Old Amber -> Aerodactyl <-> Mega Aerodactyl
	"0142",			// Aerodactyl
//	"0142mega",		// Mega Aerodactyl
	// Root Fossil -> Lileep -> Cradily
	"0345",			// Lileep
	"0346",			// Cradily
	// Claw Fossil -> Anorith -> Armaldo
	"0347",			// Anorith
	"0348",			// Armaldo
	// Skull Fossil -> Cranidos -> Rampardos
	"0408",			// Cranidos
	"0409",			// Rampardos
	// Armor Fossil -> Shieldon -> Bastiodon
	"0410",			// Shieldon
	"0411",			// Bastiodon
	// Cover Fossil -> Tirtouga -> Carracosta
	"0564",			// Tirtouga
	"0565",			// Carracosta
	// Plume Fossil -> Archen -> Archeops
	"0566",			// Archen
	"0567",			// Archeops
	// Jaw Fossil -> Tyrunt -> Tyrantrum
	"0696",			// Tyrunt
	"0697",			// Tyrantrum
	// Sail Fossil -> Amaura -> Aurorus
	"0698",			// Amaura
	"0699",			// Aurorus
	// Fossilized Bird + Fossilized Drake -> Arctozolt
	"0880",			// Dracozolt (uknown gender)
	// Fossilized Bird + Fossilized Dino -> Arctozolt
	"0881",			// Arctozolt (uknown gender)
	// Fossilized Fish + Fossilized Drake -> Dracovish
	"0882",			// Dracovish (uknown gender)
	// Fossilized Fish + Fossilized Dino -> Arctovish
	"0883",			// Arctovish (uknown gender)
	// Munchlax -> Snorlax <-> Gigantamax Snorlax
	"0446",			// Munchlax
	"0143",			// Snorlax
	"0143gmax",		// Gigantamax Snorlax
	// Articuno
	"0144",			// Articuno (uknown gender)
	// Zapdos
	"0145",			// Zapdos (uknown gender)
	// Moltres
	"0146",			// Moltres (uknown gender)
	// Dratini -> Dragonair -> Dragonite
	"0147",			// Dratini
	"0148",			// Dragonair
	"0149",			// Dragonite
	// Mewtwo -+-<-> Mega Mewtwo X
	//         '-<-> Mega Mewtwo Y
	"0150",			// Mewtwo (uknown gender)
//	"0150megax",	// Mega Mewtwo X (uknown gender)
//	"0150megay",	// Mega Mewtwo Y (uknown gender)
	// Mew
	"0151",			// Mew (uknown gender)
	// Chikorita -> Bayleef -> Meganium
	"0152",			// Chikorita
	"0153",			// Bayleef
//	"0154",			// Meganium
	"0154m",		// Meganium♂
	"0154f",		// Meganium♀
	// Cyndaquil -> Quilava -> Typhlosion
	"0155",			// Cyndaquil
	"0156",			// Quilava
	"0157",			// Typhlosion
	// Totodile -> Croconaw -> Feraligatr
	"0158",			// Totodile
	"0159",			// Croconaw
	"0160",			// Feraligatr
	// Sentret -> Furret
	"0161",			// Sentret
	"0162",			// Furret
	// Hoothoot -> Noctowl
	"0163",			// Hoothoot
	"0164",			// Noctowl
	// Ledyba -> Ledian
//	"0165",			// Ledyba
//	"0166",			// Ledian
	"0165m",		// Ledyba♂
	"0166m",		// Ledian♂
	"0165f",		// Ledyba♀
	"0166f",		// Ledian♀
	// Spinarak -> Ariados
	"0167",			// Spinarak
	"0168",			// Ariados
	// Chinchou -> Lanturn
	"0170",			// Chinchou
	"0171",			// Lanturn
	// Togepi -> Togetic -> Togekiss
	"0175",			// Togepi
	"0176",			// Togetic
	"0468",			// Togekiss
	// Natu -> Xatu
	"0177",			// Natu
//	"0178",			// Xatu
	"0178m",		// Xatu♂
	"0178f",		// Xatu♀
	// Mareep -> Flaaffy -> Ampharos <-> Mega Ampharos
	"0179",			// Mareep
	"0180",			// Flaaffy
	"0181",			// Ampharos
//	"0181mega",		// Mega Ampharos
	// Azurill -> Marill -> Azumarill
	"0298",			// Azurill
	"0183",			// Marill
	"0184",			// Azumarill
	// Bonsly -> Sudowoodo
	"0438",			// Bonsly
//	"0185",			// Sudowoodo
	"0185m",		// Sudowoodo♂
	"0185f",		// Sudowoodo♀
	// Hoppip -> Skiploom -> Jumpluff
	"0187",			// Hoppip
	"0188",			// Skiploom
	"0189",			// Jumpluff
	// Aipom -> Ambipom
//	"0190",			// Aipom
//	"0424",			// Ambipom
	"0190m",		// Aipom♂
	"0424m",		// Ambipom♂
	"0190f",		// Aipom♀
	"0424f",		// Ambipom♀
	// Sunkern -> Sunflora
	"0191",			// Sunkern
	"0192",			// Sunflora
	// Yanma -> Yanmega
	"0193",			// Yanma
	"0469",			// Yanmega
	// Wooper -> Quagsire
//	"0194",			// Wooper
//	"0195",			// Quagsire
	"0194m",		// Wooper♂
	"0195m",		// Quagsire♂
	"0194f",		// Wooper♀
	"0195f",		// Quagsire♀
	// Murkrow -> Honchkrow
//	"0198",			// Murkrow
	"0198m",		// Murkrow♂
	"0198f",		// Murkrow♀
	"0430",			// Honchkrow
	// Misdreavus -> Mismagius
	"0200",			// Misdreavus
	"0429",			// Mismagius
	// Unown
//	"0201",			// Unown (uknown gender)
//	"0201a_g2",		// Unown Angry (uknown gender)
	"0201a_g4",		// Unown Anger (uknown gender)
	"0201b",		// Unown Bear (uknown gender)
	"0201c",		// Unown Chase (uknown gender)
	"0201d",		// Unown Direct (uknown gender)
	"0201e",		// Unown Engage (uknown gender)
	"0201f",		// Unown Find (uknown gender)
	"0201g",		// Unown Give (uknown gender)
	"0201h",		// Unown Help (uknown gender)
	"0201i",		// Unown Increase (uknown gender)
	"0201j",		// Unown Join (uknown gender)
	"0201k",		// Unown Keep (uknown gender)
	"0201l",		// Unown Laugh (uknown gender)
	"0201m",		// Unown Make (uknown gender)
	"0201n",		// Unown Nuzzle (uknown gender)
	"0201o",		// Unown Observe (uknown gender)
	"0201p",		// Unown Perform (uknown gender)
	"0201q",		// Unown Quicken (uknown gender)
	"0201r",		// Unown Reassure (uknown gender)
	"0201s",		// Unown Search (uknown gender)
	"0201t",		// Unown Tell (uknown gender)
	"0201u",		// Unown Undo (uknown gender)
	"0201v",		// Unown Vanish (uknown gender)
	"0201w",		// Unown Want (uknown gender)
	"0201x",		// Unown XXXXX (uknown gender)
	"0201y",		// Unown Yield (uknown gender)
	"0201z",		// Unown Zoom (uknown gender)
	"0201ep",		// Unown !!!!! (uknown gender)
	"0201qm",		// Unown ????? (uknown gender)
	// Wynaut -> Wobbuffet
	"0360",			// Wynaut
//	"0202",			// Wobbuffet
	"0202m",		// Wobbuffet♂
	"0202f",		// Wobbuffet♀
	// Girafarig
//	"0203",			// Girafarig
	"0203m",		// Girafarig♂
	"0203f",		// Girafarig♀
	// Pineco -> Forretress
	"0204",			// Pineco
	"0205",			// Forretress
	// Dunsparce
	"0206",			// Dunsparce
	// Gligar -> Gliscor
//	"0207",			// Gligar
	"0207m",		// Gligar♂
	"0207f",		// Gligar♀
	"0472",			// Gliscor
	// Snubbull -> Granbull
	"0209",			// Snubbull
	"0210",			// Granbull
	// Qwilfish
	"0211",			// Qwilfish
	// Shuckle
	"0213",			// Shuckle
	// Heracross <-> Mega Heracross
//	"0214",			// Heracross
	"0214m",		// Heracross♂
	"0214f",		// Heracross♀
//	"0214mega",		// Mega Heracross
	// Sneasel -> Weavile
//	"0215",			// Sneasel
//	"0461",			// Weavile
	"0215m",		// Sneasel♂
	"0461m",		// Weavile♂
	"0215f",		// Sneasel♀
	"0461f",		// Weavile♀
	// Teddiursa -> Ursaring
	"0216",			// Teddiursa
//	"0217",			// Ursaring
	"0217m",		// Ursaring♂
	"0217f",		// Ursaring♀
	// Slugma -> Magcargo
	"0218",			// Slugma
	"0219",			// Magcargo
	// Swinub -> Piloswine -> Mamoswine
	"0220",			// Swinub
//	"0221",			// Piloswine
//	"0473",			// Mamoswine
	"0221m",		// Piloswine♂
	"0473m",		// Mamoswine♂
	"0221f",		// Piloswine♀
	"0473f",		// Mamoswine♀
	// Corsola
	"0222",			// Corsola
	// Galarian Corsola -> Cursola
	"0222galar",	// Galarian Corsola
	"0864",			// Cursola
	// Remoraid -> Octillery
	"0223",			// Remoraid
//	"0224",			// Octillery
	"0224m",		// Octillery♂
	"0224f",		// Octillery♀
	// Delibird
	"0225",			// Delibird
	// Mantine -> Mantine
	"0458",			// Mantyke
	"0226",			// Mantine
	// Skarmory
	"0227",			// Skarmory
	// Houndour -> Houndoom <-> Mega Houndoom
	"0228",			// Houndour
//	"0229",			// Houndoom
	"0229m",		// Houndoom♂
	"0229f",		// Houndoom♀
//	"0229mega",		// Mega Houndoom
	// Phanpy -> Donphan
	"0231",			// Phanpy
//	"0232",			// Donphan
	"0232m",		// Donphan♂
	"0232f",		// Donphan♀
	// Stantler
	"0234",			// Stantler
	// Smeargle
	"0235",			// Smeargle
	// Miltank
	"0241",			// Miltank (female only)
	// Raikou
	"0243",			// Raikou (uknown gender)
	// Entei
	"0244",			// Entei (uknown gender)
	// Suicune
	"0245",			// Suicune (uknown gender)
	// Larvitar -> Pupitar -> Tyranitar <-> Mega Tyranitar
	"0246",			// Larvitar
	"0247",			// Pupitar
	"0248",			// Tyranitar
//	"0248mega",		// Mega Tyranitar
	// Lugia
	"0249",			// Lugia (uknown gender)
	// Ho-Oh
	"0250",			// Ho-Oh (uknown gender)
	// Celebi
	"0251",			// Celebi (uknown gender)
	// Treecko -> Grovyle -> Sceptile <-> Mega Sceptile
	"0252",			// Treecko
	"0253",			// Grovyle
	"0254",			// Sceptile
//	"0254mega",		// Mega Sceptile
	// Torchic -> Combusken -> Blaziken <-> Mega Blaziken
//	"0255",			// Torchic
//	"0256",			// Combusken
//	"0257",			// Blaziken
	"0255m",		// Torchic♂
	"0256m",		// Combusken♂
	"0257m",		// Blaziken♂
	"0255f",		// Torchic♀
	"0256f",		// Combusken♀
	"0257f",		// Blaziken♀
//	"0257mega",		// Mega Blaziken
	// Mudkip -> Marshtomp -> Swampert <-> Mega Swampert
	"0258",			// Mudkip
	"0259",			// Marshtomp
	"0260",			// Swampert
//	"0260mega",		// Mega Swampert
	// Poochyena -> Mightyena
	"0261",			// Poochyena
	"0262",			// Mightyena
	// Zigzagoon -> Linoone
	"0263",			// Zigzagoon
	"0264",			// Linoone
	// Galarian Zigzagoon -> Galarian Linoone -> Obstagoon
	"0263galar",	// Galarian Zigzagoon
	"0264galar",	// Galarian Linoone
	"0862",			// Obstagoon
	// Wurmple -+-> Silcoon -> Beautifly
	//          '-> Cascoon -> Dustox
	"0265",			// Wurmple
	"0266",			// Silcoon
//	"0267",			// Beautifly
	"0267m",		// Beautifly♂
	"0267f",		// Beautifly♀
	"0268",			// Cascoon
//	"0269",			// Dustox
	"0269m",		// Dustox♂
	"0269f",		// Dustox♀
	// Lotad -> Lombre -> Ludicolo
	"0270",			// Lotad
	"0271",			// Lombre
//	"0272",			// Ludicolo
	"0272m",		// Ludicolo♂
	"0272f",		// Ludicolo♀
	// Seedot -> Nuzleaf -> Shiftry
	"0273",			// Seedot
//	"0274",			// Nuzleaf
//	"0275",			// Shiftry
	"0274m",		// Nuzleaf♂
	"0275m",		// Shiftry♂
	"0274f",		// Nuzleaf♀
	"0275f",		// Shiftry♀
	// Taillow -> Swallow
	"0276",			// Taillow
	"0277",			// Swellow
	// Wingull -> Pelipper
	"0278",			// Wingull
	"0279",			// Pelipper
	// Ralts -> Kirlia -+-> Gardevoir <-> Mega Gardevoir
	//                  '-> Gallade <-> Mega Gallade
	"0280",			// Ralts
	"0281",			// Kirlia
	"0282",			// Gardevoir
//	"0282mega",		// Mega Gardevoir
	"0475",			// Gallade (male only)
//	"0475mega",		// Mega Gallade (male only)
	// Surskit -> Masquerain
	"0283",			// Surskit
	"0284",			// Masquerain
	// Shroomish -> Breloom
	"0285",			// Shroomish
	"0286",			// Breloom
	// Slakoth -> Vigoroth -> Slaking
	"0287",			// Slakoth
	"0288",			// Vigoroth
	"0289",			// Slaking
	// Nincada -+-> Ninjask
	//          '-> Shedinja
	"0290",			// Nincada
	"0291",			// Ninjask
	"0292",			// Shedinja (uknown gender)
	// Whismur -> Loudred -> Exploud
	"0293",			// Whismur
	"0294",			// Loudred
	"0295",			// Exploud
	// Makuhita -> Hariyama
	"0296",			// Makuhita
	"0297",			// Hariyama
	// Nosepass -> Probopass
	"0299",			// Nosepass
	"0476",			// Probopass
	// Skitty -> Delcatty
	"0300",			// Skitty
	"0301",			// Delcatty
	// Sableye <-> Mega Sableye
	"0302",			// Sableye
//	"0302mega",		// Mega Sableye
	// Mawile <-> Mega Mawile
	"0303",			// Mawile
//	"0303mega",		// Mega Mawile
	// Aron -> Lairon -> Aggron <-> Mega Aggron
	"0304",			// Aron
	"0305",			// Lairon
	"0306",			// Aggron
//	"0306mega",		// Mega Aggron
	// Meditite -> Medicham <-> Mega Medicham
//	"0307",			// Meditite
//	"0308",			// Medicham
	"0307m",		// Meditite♂
	"0308m",		// Medicham♂
	"0307f",		// Meditite♀
	"0308f",		// Medicham♀
//	"0308mega",		// Mega Medicham
	// Electrike -> Manectric <-> Mega Manectric
	"0309",			// Electrike
	"0310",			// Manectric
//	"0310mega",		// Mega Manectric
	// Plusle
	"0311",			// Plusle
	// Minun
	"0312",			// Minun
	// -+-> Volbeat
	//  '-> Illumise
	"0313",			// Volbeat (male only)
	"0314",			// Illumise (female only)
	// Budew -> Roselia -> Roserade
	"0406",			// Budew
//	"0315",			// Roselia
//	"0407",			// Roserade
	"0315m",		// Roselia♂
	"0407m",		// Roserade♂
	"0315f",		// Roselia♀
	"0407f",		// Roserade♀
	// Gilpin -> Swalot
//	"0316",			// Gulpin
//	"0317",			// Swalot
	"0316m",		// Gulpin♂
	"0317m",		// Swalot♂
	"0316f",		// Gulpin♀
	"0317f",		// Swalot♀
	// Carvanha -> Sharpedo <-> Mega Sharpedo
	"0318",			// Carvanha
	"0319",			// Sharpedo
//	"0319mega",		// Mega Sharpedo
	// Wailmer -> Wailord
	"0320",			// Wailmer
	"0321",			// Wailord
	// Numel -> Camerupt <-> Mega Camerupt
//	"0322",			// Numel
//	"0323",			// Camerupt
	"0322m",		// Numel♂
	"0323m",		// Camerupt♂
	"0322f",		// Numel♀
	"0323f",		// Camerupt♀
//	"0323mega",		// Mega Camerupt
	// Torkoal
	"0324",			// Torkoal
	// Spoink -> Grumpig
	"0325",			// Spoink
	"0326",			// Grumpig
	// Spinda
	"0327",			// Spinda
	// Trapinch -> Vibrava -> Flygon
	"0328",			// Trapinch
	"0329",			// Vibrava
	"0330",			// Flygon
	// Cacnea -> Cacturne
	"0331",			// Cacnea
//	"0332",			// Cacturne
	"0332m",		// Cacturne♂
	"0332f",		// Cacturne♀
	// Swablu -> Altaria <-> Mega Altaria
	"0333",			// Swablu
	"0334",			// Altaria
//	"0334mega",		// Mega Altaria
	// Zangoose
	"0335",			// Zangoose
	// Seviper
	"0336",			// Seviper
	// Lunatone
	"0337",			// Lunatone (uknown gender)
	// Solrock
	"0338",			// Solrock (uknown gender)
	// Barboach -> Whiscash
	"0339",			// Barboach
	"0340",			// Whiscash
	// Corphish -> Crawdaunt
	"0341",			// Corphish
	"0342",			// Crawdaunt
	// Baltoy -> Claydol
	"0343",			// Baltoy (uknown gender)
	"0344",			// Claydol (uknown gender)
	// Feebas -> Milotic
	"0349",			// Feebas
//	"0350",			// Milotic
	"0350m",		// Milotic♂
	"0350f",		// Milotic♀
	// Castform
	"0351",			// Castform
	"0351su",		// Sunny Castform
	"0351ra",		// Rainy Castform
	"0351sn",		// Snowy Castform
	// Kecleon
	"0352",			// Kecleon
	// Shuppet -> Banette <-> Mega Banette
	"0353",			// Shuppet
	"0354",			// Banette
//	"0354mega",		// Mega Banette
	// Duskull -> Dusclops -> Dusknoir
	"0355",			// Duskull
	"0356",			// Dusclops
	"0477",			// Dusknoir
	// Tropius
	"0357",			// Tropius
	// Chingling -> Chimecho
	"0433",			// Chingling
	"0358",			// Chimecho
	// Absol <-> Mega Absol
	"0359",			// Absol
//	"0359mega",		// Mega Absol
	// Snorunt -+-> Glalie <-> Mega Glalie
	//          '-> Froslass
	"0361",			// Snorunt
	"0362",			// Glalie
//	"0362mega",		// Mega Glalie
	"0478",			// Froslass (female only)
	// Spheal -> Sealeo -> Walrein
	"0363",			// Spheal
	"0364",			// Sealeo
	"0365",			// Walrein
	// Clamperl -+-> Huntail
	//           '-> Gorebyss
	"0366",			// Clamperl
	"0367",			// Huntail
	"0368",			// Gorebyss
	// Relicanth
//	"0369",			// Relicanth
	"0369m",		// Relicanth♂
	"0369f",		// Relicanth♀
	// Luvdisc
	"0370",			// Luvdisc
	// Bagon -> Shelgon -> Salamence <-> Mega Salamence
	"0371",			// Bagon
	"0372",			// Shelgon
	"0373",			// Salamence
//	"0373mega",		// Mega Salamence
	// Beldum -> Metang -> Metagross <-> Mega Metagross
	"0374",			// Beldum (uknown gender)
	"0375",			// Metang (uknown gender)
	"0376",			// Metagross (uknown gender)
//	"0376mega",		// Mega Metagross (uknown gender)
	// Regirock
	"0377",			// Regirock (uknown gender)
	// Regice
	"0378",			// Regice (uknown gender)
	// Registeel
	"0379",			// Registeel (uknown gender)
	// Regigigas
	"0486",			// Regigigas (uknown gender)
	// Latias <-> Mega Latias
	"0380",			// Latias (female only)
//	"0380mega",		// Mega Latias (female only)
	// Latios <-> Mega Latios
	"0381",			// Latios (male only)
//	"0381mega",		// Mega Latios (male only)
	// Kyogre <-> Primal Kyogre
	"0382",			// Kyogre (uknown gender)
//	"0382primal",	// Primal Kyogre (uknown gender)
	// Groudon <-> Primal Groudon
	"0383",			// Groudon (uknown gender)
//	"0383primal",	// Primal Groudon (uknown gender)
	// Rayquaza <-> Mega Rayquaza
	"0384",			// Rayquaza (uknown gender)
//	"0384mega",		// Mega Rayquaza (uknown gender)
	// Jirachi
	"0385",			// Jirachi (uknown gender)
	// Deoxys
	"0386",			// Deoxys (uknown gender)
	"0386a",		// Attack Deoxys (uknown gender)
	"0386d",		// Defense Deoxys (uknown gender)
	"0386s",		// Speed Deoxys (uknown gender)
	// Turtwig -> Grotle -> Torterra
	"0387",			// Turtwig
	"0388",			// Grotle
	"0389",			// Torterra
	// Chimchar -> Monferno -> Infernape
	"0390",			// Chimchar
	"0391",			// Monferno
	"0392",			// Infernape
	// Piplup -> Prinplup -> Empoleon
	"0393",			// Piplup
	"0394",			// Prinplup
	"0395",			// Empoleon
	// Starly -> Staravia -> Staraptor
//	"0396",			// Starly
//	"0397",			// Staravia
//	"0398",			// Staraptor
	"0396m",		// Starly♂
	"0397m",		// Staravia♂
	"0398m",		// Staraptor♂
	"0396f",		// Starly♀
	"0397f",		// Staravia♀
	"0398f",		// Staraptor♀
	// Bidoof -> Bibarel
//	"0399",			// Bidoof
//	"0400",			// Bibarel
	"0399m",		// Bidoof♂
	"0400m",		// Bibarel♂
	"0399f",		// Bidoof♀
	"0400f",		// Bibarel♀
	// Kricketot -> Kricketune
//	"0401",			// Kricketot
//	"0402",			// Kricketune
	"0401m",		// Kricketot♂
	"0402m",		// Kricketune♂
	"0401f",		// Kricketot♀
	"0402f",		// Kricketune♀
	// Shinx -> Luxio -> Luxray
//	"0403",			// Shinx
//	"0404",			// Luxio
//	"0405",			// Luxray
	"0403m",		// Shinx♂
	"0404m",		// Luxio♂
	"0405m",		// Luxray♂
	"0403f",		// Shinx♀
	"0404f",		// Luxio♀
	"0405f",		// Luxray♀
	// Burmy -+-> Wormadam
	//        '-> Mothim
//	"0412",			// Burmy
	"0412p",		// Burmy Plant Cloak
	"0412s",		// Burmy Sandy Cloak
	"0412t",		// Burmy Trash Cloak
	"0414",			// Mothim (male only)
//	"0413",			// Wormadam (female only)
	"0413p",		// Wormadam Plant Cloak (female only)
	"0413s",		// Wormadam Sandy Cloak (female only)
	"0413t",		// Wormadam Trash Cloak (female only)
	// Combee -> Vespiquen
//	"0415",			// Combee
	"0415m",		// Combee♂
	"0415f",		// Combee♀
	"0416",			// Vespiquen (female only)
	// Pachirisu
//	"0417",			// Pachirisu
	"0417m",		// Pachirisu♂
	"0417f",		// Pachirisu♀
	// Buizel -> Floatzel
//	"0418",			// Buizel
//	"0419",			// Floatzel
	"0418m",		// Buizel♂
	"0419m",		// Floatzel♂
	"0418f",		// Buizel♀
	"0419f",		// Floatzel♀
	// Cherubi -> Cherrim
	"0420",			// Cherubi
//	"0421",			// Cherrim
	"0421o",		// Overcast Cherrim
//	"0421s",		// Sunshine Cherrim
	// Shellos -> Gastrodon
//	"0422",			// Shellos
	"0422w",		// West Sea Shellos
	"0422e",		// East Sea Shellos
//	"0423",			// Gastrodon
	"0423w",		// West Sea Gastrodon
	"0423e",		// East Sea Gastrodon
	// Drifloon -> Drifblim
	"0425",			// Drifloon
	"0426",			// Drifblim
	// Buneary -> Lopunny <-> Mega Lopunny
	"0427",			// Buneary
	"0428",			// Lopunny
//	"0428mega",		// Mega Lopunny
	// Glameow -> Purugly
	"0431",			// Glameow
	"0432",			// Purugly
	// Stunky -> Stuntank
	"0434",			// Stunky
	"0435",			// Skuntank
	// Bronzor -> Bronzong
	"0436",			// Bronzor (uknown gender)
	"0437",			// Bronzong (uknown gender)
	// Chatot
	"0441",			// Chatot
	// Spiritomb
	"0442",			// Spiritomb
	// Gible -> Gabite -> Garchomp <-> Mega Garchomp
//	"0443",			// Gible
//	"0444",			// Gabite
//	"0445",			// Garchomp
	"0443m",		// Gible♂
	"0444m",		// Gabite♂
	"0445m",		// Garchomp♂
	"0443f",		// Gible♀
	"0444f",		// Gabite♀
	"0445f",		// Garchomp♀
//	"0445mega",		// Mega Garchomp
	// Riolu -> Lucario <-> Mega Lucario
	"0447",			// Riolu
	"0448",			// Lucario
//	"0448mega",		// Mega Lucario
	// Hippopotas -> Hippowdon
//	"0449",			// Hippopotas
//	"0450",			// Hippowdon
	"0449m",		// Hippopotas♂
	"0450m",		// Hippowdon♂
	"0449f",		// Hippopotas♀
	"0450f",		// Hippowdon♀
	// Skorupi -> Drapion
	"0451",			// Skorupi
	"0452",			// Drapion
	// Croagunk -> Toxicroak
//	"0453",			// Croagunk
//	"0454",			// Toxicroak
	"0453m",		// Croagunk♂
	"0454m",		// Toxicroak♂
	"0453f",		// Croagunk♀
	"0454f",		// Toxicroak♀
	// Carnivine
	"0455",			// Carnivine
	// Finneon -> Lumineon
//	"0456",			// Finneon
//	"0457",			// Lumineon
	"0456m",		// Finneon♂
	"0457m",		// Lumineon♂
	"0456f",		// Finneon♀
	"0457f",		// Lumineon♀
	// Snover -> Abomasnow <-> Mega Abomasnow
//	"0459",			// Snover
//	"0460",			// Abomasnow
	"0459m",		// Snover♂
	"0460m",		// Abomasnow♂
	"0459f",		// Snover♀
	"0460f",		// Abomasnow♀
//	"0460mega",		// Mega Abomasnow
	// Rotom
	"0479",			// Rotom (uknown gender)
	"0479he",		// Heat Rotom (uknown gender)
	"0479wa",		// Wash Rotom (uknown gender)
	"0479fr",		// Freeze Rotom (uknown gender)
	"0479fa",		// Fan Rotom (uknown gender)
	"0479mo",		// Mow Rotom (uknown gender)
//	"0479dx",		// Pokédex Rotom (uknown gender)// unofficial
//	"0479ph",		// Phone Rotom (uknown gender)// unofficial
//	"0479mi",		// Rotomi (uknown gender)// unofficial
//	"0479dr",		// Drone Rotom (uknown gender)// unofficial
//	"0479bi",		// Rotom Bike (uknown gender)// unofficial
//	"0479bw",		// Rotom Bike, Water Mode (uknown gender)// unofficial
	// Uxie
	"0480",			// Uxie (uknown gender)
	// Mesprit
	"0481",			// Mesprit (uknown gender)
	// Aself
	"0482",			// Azelf (uknown gender)
	// Dialga
	"0483",			// Dialga (uknown gender)
	// Palkia
	"0484",			// Palkia (uknown gender)
	// Giratina
//	"0487",			// Giratina (uknown gender)
	"0487a",		// Giratina Altered Forme (uknown gender)
	"0487o",		// Giratina Origin Forme (uknown gender)
	// Heatran
	"0485",			// Heatran
	// Cresselia
	"0488",			// Cresselia (female only)
	// Darkrai
	"0491",			// Darkrai (uknown gender)
	// Phione <- Manaphy
	"0489",			// Phione (uknown gender)
	"0490",			// Manaphy (uknown gender)
	// Shaymin
//	"0492",			// Shaymin (uknown gender)
	"0492l",		// Shaymin Land Forme (uknown gender)
	"0492s",		// Shaymin Sky Forme (uknown gender)
	// Arceus
	"0493",			// Arceus (uknown gender)
	"0493ft",		// Fighting Arceus (uknown gender)
	"0493fl",		// Flying Arceus (uknown gender)
	"0493po",		// Poison Arceus (uknown gender)
	"0493gd",		// Ground Arceus (uknown gender)
	"0493ro",		// Rock Arceus (uknown gender)
	"0493bu",		// Bug Arceus (uknown gender)
	"0493gh",		// Ghost Arceus (uknown gender)
	"0493st",		// Steel Arceus (uknown gender)
	"0493fi",		// Fire Arceus (uknown gender)
	"0493wa",		// Water Arceus (uknown gender)
	"0493gr",		// Grass Arceus (uknown gender)
	"0493el",		// Electric Arceus (uknown gender)
	"0493ps",		// Psychic Arceus (uknown gender)
	"0493ic",		// Ice Arceus (uknown gender)
	"0493dr",		// Dragon Arceus (uknown gender)
	"0493dk",		// Dark Arceus (uknown gender)
	"0493fa",		// Fairy Arceus (uknown gender)
	// Victini
	"0494",			// Victini (uknown gender)
	// Snivy -> Servine -> Serperior
	"0495",			// Snivy
	"0496",			// Servine
	"0497",			// Serperior
	// Tepig -> Pignite -> Emboar
	"0498",			// Tepig
	"0499",			// Pignite
	"0500",			// Emboar
	// Oshawott -> Dewott -> Samurott
	"0501",			// Oshawott
	"0502",			// Dewott
	"0503",			// Samurott
	// Patrat -> Watchog
	"0504",			// Patrat
	"0505",			// Watchog
	// Lillipup -> Herdier -> Stoutland
	"0506",			// Lillipup
	"0507",			// Herdier
	"0508",			// Stoutland
	// Purrloin -> Liepard
	"0509",			// Purrloin
	"0510",			// Liepard
	// Pansage -> Simisage
	"0511",			// Pansage
	"0512",			// Simisage
	// Pansear -> Simisear
	"0513",			// Pansear
	"0514",			// Simisear
	// Panpour -> Simipour
	"0515",			// Panpour
	"0516",			// Simipour
	// Munna -> Musharna
	"0517",			// Munna
	"0518",			// Musharna
	// Pidove -> Tranquill -> Unfezant
	"0519",			// Pidove
	"0520",			// Tranquill
//	"0521",			// Unfezant
	"0521m",		// Unfezant♂
	"0521f",		// Unfezant♀
	// Blitzle -> Zebstrika
	"0522",			// Blitzle
	"0523",			// Zebstrika
	// Roggenrola -> Boldore -> Gigalith
	"0524",			// Roggenrola
	"0525",			// Boldore
	"0526",			// Gigalith
	// Woobat -> Swoobat
	"0527",			// Woobat
	"0528",			// Swoobat
	// Drillbur -> Excadrill
	"0529",			// Drilbur
	"0530",			// Excadrill
	// Audino <-> Mega Audino
	"0531",			// Audino
//	"0531mega",		// Mega Audino
	// Timburr -> Gurdurr -> Conkeldurr
	"0532",			// Timburr
	"0533",			// Gurdurr
	"0534",			// Conkeldurr
	// Tympole -> Palpitoad -> Seismitoad
	// Tadphone -> Speakroak -> Amplibian
	"0535",			// Tympole
	"0536",			// Palpitoad
	"0537",			// Seismitoad
	// Throh
	"0538",			// Throh (male only)
	// Sawk
	"0539",			// Sawk (male only)
	// Sewaddle -> Swadloon -> Leavanny
	"0540",			// Sewaddle
	"0541",			// Swadloon
	"0542",			// Leavanny
	// Venipede -> Whirlipede -> Scolipede
	"0543",			// Venipede
	"0544",			// Whirlipede
	"0545",			// Scolipede
	// Cottonee -> Whimsicott
	"0546",			// Cottonee
	"0547",			// Whimsicott
	// Petilil -> Lilligant
	"0548",			// Petilil (female only)
	"0549",			// Lilligant (female only)
	// Basculin
//	"0550",			// Basculin
	"0550r",		// Red-striped Basculin
	"0550b",		// Blue-striped Basculin
	// Sandile -> Krokorok -> Krookodile
	"0551",			// Sandile
	"0552",			// Krokorok
	"0553",			// Krookodile
	// Darumaka -> Darmanitan
	"0554",			// Darumaka
//	"0555",			// Darmanitan
	"0555s",		// Darmanitan Standard Mode
//	"0555z",		// Darmanitan Zen Mode
	// Galarian Darumaka -> Galarian Darmanitan
	"0554galar",	// Galarian Darumaka
//	"0555galar",	// Galarian Darmanitan
	"0555galars",	// Galarian Darmanitan Standard Mode
//	"0555galarz",	// Galarian Darmanitan Zen Mode
	// Maractus
	"0556",			// Maractus
	// Dwebble -> Crustle
	"0557",			// Dwebble
	"0558",			// Crustle
	// Scraggy -> Scrafty
	"0559",			// Scraggy
	"0560",			// Scrafty
	// Sigilyph
	"0561",			// Sigilyph
	// Yamask -> Cofagrigus
	"0562",			// Yamask
	"0563",			// Cofagrigus
	// Galarian Yamask -> Runerigus
	"0562galar",	// Galarian Yamask
	"0867",			// Runerigus
	// Trubbish -> Garbodor <-> Gigantamax Garbodor
	"0568",			// Trubbish
	"0569",			// Garbodor
	"0569gmax",		// Gigantamax Garbodor
	// Zorua -> Zoruark
	"0570",			// Zorua
	"0571",			// Zoroark
	// Minccino -> Cinccino
	"0572",			// Minccino
	"0573",			// Cinccino
	// Gothita -> Gothorita -> Gothitelle
	"0574",			// Gothita
	"0575",			// Gothorita
	"0576",			// Gothitelle
	// Solosin -> Suosion -> Reuniclus
	"0577",			// Solosis
	"0578",			// Duosion
	"0579",			// Reuniclus
	// Ducklett -> Swanna
	"0580",			// Ducklett
	"0581",			// Swanna
	// Vanillite -> Vanillish -> Vanilluxe
	"0582",			// Vanillite
	"0583",			// Vanillish
	"0584",			// Vanilluxe
	// Deerling -> Sawsbuck
//	"0585",			// Deerling
//	"0586",			// Sawsbuck
	"0585sp",		// Spring Deerling
	"0586sp",		// Spring Sawsbuck
	"0585su",		// Summer Deerling
	"0586su",		// Summer Sawsbuck
	"0585au",		// Autumn Deerling
	"0586au",		// Autumn Sawsbuck
	"0585wi",		// Winter Deerling
	"0586wi",		// Winter Sawsbuck
	// Emolga
	"0587",			// Emolga
	// Karrablast -> Escavalier
	"0588",			// Karrablast
	"0589",			// Escavalier
	// Shelmet -> Accelgor
	"0616",			// Shelmet
	"0617",			// Accelgor
	// Foongus -> Amoonguss
	"0590",			// Foongus
	"0591",			// Amoonguss
	// Frillish -> Jellicent
//	"0592",			// Frillish
//	"0593",			// Jellicent
	"0592m",		// Frillish♂
	"0593m",		// Jellicent♂
	"0592f",		// Frillish♀
	"0593f",		// Jellicent♀
	// Alomomola
	"0594",			// Alomomola
	// Joltik -> Galvantula
	"0595",			// Joltik
	"0596",			// Galvantula
	// Ferroseed -> Ferrothorn
	"0597",			// Ferroseed
	"0598",			// Ferrothorn
	// Klink -> Klang -> Klinklang
	"0599",			// Klink (uknown gender)
	"0600",			// Klang (uknown gender)
	"0601",			// Klinklang (uknown gender)
	// Tynamo -> Eelektrik -> Eelektross
	"0602",			// Tynamo
	"0603",			// Eelektrik
	"0604",			// Eelektross
	// Elgyem -> Beheeyem
	"0605",			// Elgyem
	"0606",			// Beheeyem
	// Litwick -> Lampent -> Chandelure
	"0607",			// Litwick
	"0608",			// Lampent
	"0609",			// Chandelure
	// Axew -> Fraxure -> Haxorus
	"0610",			// Axew
	"0611",			// Fraxure
	"0612",			// Haxorus
	// Cubchoo -> Beartic
	"0613",			// Cubchoo
	"0614",			// Beartic
	// Cryogonal
	"0615",			// Cryogonal (uknown gender)
	// Stunfisk
	"0618",			// Stunfisk
	// Galarian Stunfisk
	"0618galar",	// Galarian Stunfisk
	// Mienfoo -> Mienshao
	"0619",			// Mienfoo
	"0620",			// Mienshao
	// Druddigon
	"0621",			// Druddigon
	// Golett -> Golurk
	"0622",			// Golett (uknown gender)
	"0623",			// Golurk (uknown gender)
	// Pawniard -> Bisharp
	"0624",			// Pawniard
	"0625",			// Bisharp
	// Bauffalant
	"0626",			// Bouffalant
	// Rufflet -> Braviary
	"0627",			// Rufflet (male only)
	"0628",			// Braviary (male only)
	// Vullaby -> Mandibuzz
	"0629",			// Vullaby (female only)
	"0630",			// Mandibuzz (female only)
	// Heatmor
	"0631",			// Heatmor
	// Durant
	"0632",			// Durant
	// Deino -> Zweilous -> Hydreigon
	"0633",			// Deino
	"0634",			// Zweilous
	"0635",			// Hydreigon
	// Larvesta -> Volcarona
	"0636",			// Larvesta
	"0637",			// Volcarona
	// Cobalion
	"0638",			// Cobalion (uknown gender)
	// Terrakion
	"0639",			// Terrakion (uknown gender)
	// Virizion
	"0640",			// Virizion (uknown gender)
	// Keldeo
//	"0647",			// Keldeo (uknown gender)
	"0647o",		// Ordinary Form Keldeo (uknown gender)
	"0647r",		// Resolute Form Keldeo (uknown gender)
	// Tornadus
//	"0641",			// Tornadus (male only)
	"0641i",		// Incarnate Forme Tornadus (male only)
	"0641t",		// Therian Forme Tornadus (male only)
	// Thundurus
//	"0642",			// Thundurus (male only)
	"0642i",		// Incarnate Forme Thundurus (male only)
	"0642t",		// Therian Forme Thundurus (male only)
	// Landorus
//	"0645",			// Landorus (male only)
	"0645i",		// Incarnate Forme Landorus (male only)
	"0645t",		// Therian Forme Landorus (male only)
	// Reshiram
	"0643",			// Reshiram (uknown gender)
	// Zekrom
	"0644",			// Zekrom (uknown gender)
	// Kyurem
	"0646",			// Kyurem (uknown gender)
	"0646w",		// White Kyurem (uknown gender)
	"0646b",		// Black Kyurem (uknown gender)
	// Meloetta
//	"0648",			// Meloetta (uknown gender)
	"0648a",		// Aria Forme Meloetta (uknown gender)
	"0648p",		// Pirouette Forme Meloetta (uknown gender)
	// Genesect
	"0649",			// Genesect (uknown gender)
	"0649d",		// Douse Drive Genesect (uknown gender)
	"0649s",		// Shock Drive Genesect (uknown gender)
	"0649b",		// Burn Drive Genesect (uknown gender)
	"0649c",		// Chill Drive Genesect (uknown gender)
	// Chespin -> Quilladin -> Chesnaught
	"0650",			// Chespin
	"0651",			// Quilladin
	"0652",			// Chesnaught
	// Fennekin -> Braixen -> Delphox
	"0653",			// Fennekin
	"0654",			// Braixen
	"0655",			// Delphox
	// Froakie -> Frogadier -> Greninja
	// Ash-Greninja
	"0656",			// Froakie
	"0657",			// Frogadier
	"0658",			// Greninja
	"0658ash",		// Ash-Greninja (male only)
	// Bunnelby -> Diggersby
	"0659",			// Bunnelby
	"0660",			// Diggersby
	// Fletching -> Fletchinder -> Talonflame
	"0661",			// Fletchling
	"0662",			// Fletchinder
	"0663",			// Talonflame
	// Scatterbug -> Spewpa -> Vivillon
	"0664",			// Scatterbug
	"0665",			// Spewpa
//	"0666",			// Vivillon
	"0666is",		// Icy Snow Pattern Vivillon
	"0666po",		// Polar Pattern Vivillon
	"0666tu",		// Tundra Pattern Vivillon
	"0666co",		// Continental Pattern Vivillon
	"0666ga",		// Garden Pattern Vivillon
	"0666el",		// Elegant Pattern Vivillon
	"0666me",		// Meadow Pattern Vivillon
	"0666mo",		// Modern Pattern Vivillon
	"0666ma",		// Marine Pattern Vivillon
	"0666ar",		// Archipelago Pattern Vivillon
	"0666hp",		// High Plains Pattern Vivillon
	"0666ss",		// Sandstorm Pattern Vivillon
	"0666ri",		// River Pattern Vivillon
	"0666ms",		// Monsoon Pattern Vivillon
	"0666sa",		// Savanna Pattern Vivillon
	"0666su",		// Sun Pattern Vivillon
	"0666oc",		// Ocean Pattern Vivillon
	"0666ju",		// Jungle Pattern Vivillon
	"0666fa",		// Fancy Pattern Vivillon
	"0666pb",		// Poké Ball Pattern Vivillon
	// Litleo -> Pyroar
	"0667",			// Litleo
//	"0668",			// Pyroar
	"0668m",		// Pyroar♂
	"0668f",		// Pyroar♀
	// Flabébé -> Floette -> Florges
//	"0669",			// Flabébé (female only)
//	"0670",			// Floette (female only)
//	"0671",			// Florges (female only)
	"0669r",		// Red Flower Flabébé (female only)
	"0670r",		// Red Flower Floette (female only)
	"0671r",		// Red Flower Florges (female only)
	"0670y",		// Yellow Flower Floette (female only)
	"0669y",		// Yellow Flower Flabébé (female only)
	"0671y",		// Yellow Flower Florges (female only)
	"0669o",		// Orange Flower Flabébé (female only)
	"0670o",		// Orange Flower Floette (female only)
	"0671o",		// Orange Flower Florges (female only)
	"0669b",		// Blue Flower Flabébé (female only)
	"0670b",		// Blue Flower Floette (female only)
	"0671b",		// Blue Flower Florges (female only)
	"0669w",		// White Flower Flabébé (female only)
	"0670w",		// White Flower Floette (female only)
	"0671w",		// White Flower Florges (female only)
//	"0670e",		// Eternal Flower Floette (female only)
	// Skiddo -> Gogoat
	"0672",			// Skiddo
	"0673",			// Gogoat
	// Pancham -> Pangoro
	"0674",			// Pancham
	"0675",			// Pangoro
	// Furfrou
	"0676",			// Furfrou
	"0676he",		// Heart Trim Furfrou
	"0676st",		// Star Trim Furfrou
	"0676di",		// Diamond Trim Furfrou
	"0676de",		// Debutante Trim Furfrou
	"0676ma",		// Matron Trim Furfrou
	"0676da",		// Dandy Trim Furfrou
	"0676lr",		// Le Reine Trim Furfrou
	"0676ka",		// Kabuki Trim Furfrou
	"0676ph",		// Pharaoh Trim Furfrou
	// Espurr -> Meowstic
	"0677",			// Espurr
//	"0678",			// Meowstic
	"0678m",		// Meowstic♂ (male only)
	"0678f",		// Meowstic♀ (female only)
	// Honedge -> Doublade -> Aegislash
	"0679",			// Honedge
	"0680",			// Doublade
//	"0681",			// Aegislash
	"0681s",		// Shield Aegislash
//	"0681b",		// Blade Aegislash
	// Spritzee -> Aromatisse
	"0682",			// Spritzee
	"0683",			// Aromatisse
	// Swirlix -> Slurpuff
	"0684",			// Swirlix
	"0685",			// Slurpuff
	// Inkay -> Malamar
	"0686",			// Inkay
	"0687",			// Malamar
	// Binacle -> Barbacle
	"0688",			// Binacle
	"0689",			// Barbaracle
	// Skrelp -> Dragalge
	"0690",			// Skrelp
	"0691",			// Dragalge
	// Clauncher -> Clawitzer
	"0692",			// Clauncher
	"0693",			// Clawitzer
	// Helioptile -> Heliolisk
	"0694",			// Helioptile
	"0695",			// Heliolisk
	// Hawlucha
	"0701",			// Hawlucha
	// Deddene
	"0702",			// Dedenne
	// Carbink
	"0703",			// Carbink (uknown gender)
	// Goomy -> Sligoo -> Goodra
	"0704",			// Goomy
	"0705",			// Sliggoo
	"0706",			// Goodra
	// Klefki
	"0707",			// Klefki
	// Phantump -> Travenant
	"0708",			// Phantump
	"0709",			// Trevenant
	// Pumpkaboo -> Gourgeist
//	"0710",			// Pumpkaboo
//	"0711",			// Gourgeist
	"0710s",		// Small Size Pumpkaboo
	"0711s",		// Small Size Gourgeist
	"0710a",		// Average Size Pumpkaboo
	"0711a",		// Average Size Gourgeist
	"0710l",		// Large Size Pumpkaboo
	"0711l",		// Large Size Gourgeist
	"0710x",		// Super Size Pumpkaboo
	"0711x",		// Super Size Gourgeist
	// Bergmite -> Avalugg
	"0712",			// Bergmite
	"0713",			// Avalugg
	// Noibat -> Noivern
	"0714",			// Noibat
	"0715",			// Noivern
	// Xerneas
//	"0716",			// Xerneas (uknown gender)
	"0716n",		// Neutral Xerneas (uknown gender)
//	"0716a",		// Active Xerneas (uknown gender)
	// Yveltal
	"0717",			// Yveltal (uknown gender)
	// Zygarde
//	"0718",			// Zygarde (uknown gender)
	"0718_010",		// 10% Zygarde (uknown gender)
	"0718_050",		// 50% Zygarde (uknown gender)
	"0718_100",		// Complete Zygarde (uknown gender)
//	"0718_000",		// Zygarde Core (uknown gender)// uncatchable
//	"0718_001",		// Zygarde Cell (uknown gender)// uncatchable
	// Diancie
	"0719",			// Diancie (uknown gender)
//	"0719mega",		// Mega Diancie (uknown gender)
	// Hoopa
//	"0720",			// Hoopa (uknown gender)
	"0720c",		// Hoopa Confined (uknown gender)
	"0720u",		// Hoopa Unbound (uknown gender)
	// Volcanion
	"0721",			// Volcanion (uknown gender)
	// Rowlet -> Dartrix -> Decidueye
	"0722",			// Rowlet
	"0723",			// Dartrix
	"0724",			// Decidueye
	// Litten -> Torracat -> Incineroar
	"0725",			// Litten
	"0726",			// Torracat
	"0727",			// Incineroar
	// Popplio -> Brionne -> Primarina
	"0728",			// Popplio
	"0729",			// Brionne
	"0730",			// Primarina
	// Pikipek -> Trumbeak -> Toucannon
	"0731",			// Pikipek
	"0732",			// Trumbeak
	"0733",			// Toucannon
	// Yungoos -> Gumshoos
	"0734",			// Yungoos
	"0735",			// Gumshoos
	// Grubbin -> Charjabug -> Vikavolt
	"0736",			// Grubbin
	"0737",			// Charjabug
	"0738",			// Vikavolt
	// Crabrawler -> Crabominable
	"0739",			// Crabrawler
	"0740",			// Crabominable
	// Oricorio
//	"0741",			// Oricorio
	"0741ba",		// Baile Style Oricorio
	"0741po",		// Pom-Pom Style Oricorio
	"0741pa",		// Pa'u Style Oricorio
	"0741se",		// Sensu Style Oricorio
	// Cutiefly -> Ribombee
	"0742",			// Cutiefly
	"0743",			// Ribombee
	// Rockruff -> Lycanroc
	"0744",			// Rockruff
//	"0745",			// Lycanroc
	"0745md",		// Midday Lycanroc
	"0745mn",		// Midnight Lycanroc
	"0745du",		// Dusk Lycanroc
	// Wishiwashi
//	"0746",			// Wishiwashi
	"0746so",		// Solo Wishiwashi
//	"0746sc",		// School of Wishiwashi
	// Mareanie -> Toxapex
	"0747",			// Mareanie
	"0748",			// Toxapex
	// Mudbray -> Mudsdale
	"0749",			// Mudbray
	"0750",			// Mudsdale
	// Dewpider -> Araquanid
	"0751",			// Dewpider
	"0752",			// Araquanid
	// Formantis _> Lurantis
	"0753",			// Formantis
	"0754",			// Lurantis
	// Morelull -> Shiinotic
	"0755",			// Morelull
	"0756",			// Shiinotic
	// Salandit -> Salazzle
	"0757",			// Salandit
	"0758",			// Salazzle (female only)
	// Stufful -> Bewear
	"0759",			// Stufful
	"0760",			// Bewear
	// Bounsweet -> Steenee -> Tsareena
	"0761",			// Bounsweet (female only)
	"0762",			// Steenee (female only)
	"0763",			// Tsareena (female only)
	// Comfey
	"0764",			// Comfey
	// Oranguru
	"0765",			// Oranguru
	// Passimian
	"0766",			// Passimian
	// Wimpod -> Golisopod
	"0767",			// Wimpod
	"0768",			// Golisopod
	// Sandygast -> Palossand
	"0769",			// Sandygast
	"0770",			// Palossand
	// Pyukumuku
	"0771",			// Pyukumuku
	// Type: Null -> Silvally
	"0772",			// Type: Null (uknown gender)
	"0773",			// Silvally (uknown gender)
	"0773ft",		// Silvally Type: Fighting (uknown gender)
	"0773fl",		// Silvally Type: Flying (uknown gender)
	"0773po",		// Silvally Type: Poison (uknown gender)
	"0773gd",		// Silvally Type: Ground (uknown gender)
	"0773ro",		// Silvally Type: Rock (uknown gender)
	"0773bu",		// Silvally Type: Bug (uknown gender)
	"0773gh",		// Silvally Type: Ghost (uknown gender)
	"0773st",		// Silvally Type: Steel (uknown gender)
	"0773fi",		// Silvally Type: Fire (uknown gender)
	"0773wa",		// Silvally Type: Water (uknown gender)
	"0773gr",		// Silvally Type: Grass (uknown gender)
	"0773el",		// Silvally Type: Electric (uknown gender)
	"0773ps",		// Silvally Type: Psychic (uknown gender)
	"0773ic",		// Silvally Type: Ice (uknown gender)
	"0773dr",		// Silvally Type: Dragon (uknown gender)
	"0773dk",		// Silvally Type: Dark (uknown gender)
	"0773fa",		// Silvally Type: Fairy (uknown gender)
	// Minior
//	"0774",			// Minior (uknown gender)
//	"0774m",		// Meteor Minior (uknown gender)
	"0774r",		// Red Core Minior (uknown gender)
	"0774o",		// Orange Core Minior (uknown gender)
	"0774y",		// Yellow Core Minior (uknown gender)
	"0774g",		// Green Core Minior (uknown gender)
	"0774b",		// Blue Core Minior (uknown gender)
	"0774i",		// Indigo Core Minior (uknown gender)
	"0774v",		// Violet Core Minior (uknown gender)
	// Komala
	"0775",			// Komala
	// Turtonator
	"0776",			// Turtonator
	// Togedemaru
	"0777",			// Togedemaru
	// Mimikyu
//	"0778",			// Mimikyu
	"0778d",		// Disguised Mimikyu
//	"0778b",		// Busted Mimikyu
	// Bruxish
	"0779",			// Bruxish
	// Drampa
	"0780",			// Drampa
	// Dhelmise
	"0781",			// Dhelmise (uknown gender)
	// Jangmo-o -> Hakamo-o -> Kommo-o
	"0782",			// Jangmo-o
	"0783",			// Hakamo-o
	"0784",			// Kommo-o
	// Tapu Koko
	"0785",			// Tapu Koko (uknown gender)
	// Tapu Lele
	"0786",			// Tapu Lele (uknown gender)
	// Tapu Bulu
	"0787",			// Tapu Bulu (uknown gender)
	// Tapu Fini
	"0788",			// Tapu Fini (uknown gender)
	// Cosmog -> Cosmoen -+-> Solgaleo
	//                    '-> Lunala
	"0789",			// Cosmog (uknown gender)
	"0790",			// Cosmoen (uknown gender)
	"0791",			// Solgaleo (uknown gender)
	"0792",			// Lunala (uknown gender)
	// Necrozma
	"0800",			// Necrozma (uknown gender)
	"0800sun",		// Dusk Mane Necrozma (uknown gender)
	"0800moon",		// Dawn Wings Necrozma (uknown gender)
	"0800ultra",	// Ultra Necrozma (uknown gender)
	// Nihilego
	"0793",			// Nihilego (uknown gender)
	// Buzzwole
	"0794",			// Buzzwole (uknown gender)
	// Phermosa
	"0795",			// Pheromosa (uknown gender)
	// Xurkitree
	"0796",			// Xurkitree (uknown gender)
	// Celesteela
	"0797",			// Celesteela (uknown gender)
	// Kartana
	"0798",			// Kartana (uknown gender)
	// Guzzlord
	"0799",			// Guzzlord (uknown gender)
	// Poipole -> Naganadel
	"0803",			// Poipole (uknown gender)
	"0804",			// Naganadel (uknown gender)
	// Stakataka
	"0805",			// Stakataka (uknown gender)
	// Blacephalon
	"0806",			// Blacephalon (uknown gender)
	// Magearna
	"0801",			// Magearna (uknown gender)
	"0801o",		// Original Color Magearna (uknown gender)
	// Marshadow
	"0802",			// Marshadow (uknown gender)
//	"0802z",		// Zenith Marshadow (uknown gender)
	// Zeraora
	"0807",			// Zeraora (uknown gender)
	// Meltan -> Melmetal <-> Gigantamax Melmetal
	"0808",			// Meltan (uknown gender)
	"0809",			// Melmetal (uknown gender)
	"0809gmax",		// Gigantamax Melmetal (uknown gender)
	// Grookey -> Thwackey -> Rillaboom <-> Gigantamax Rillaboom
	"0810",			// Grookey
	"0811",			// Thwackey
	"0812",			// Rillaboom
//	"0812gmax",		// Gigantamax Rillaboom
	// Scorbunny -> Raboot -> Cinderace <-> Gigantamax Cinderace
	"0813",			// Scorbunny
	"0814",			// Raboot
	"0815",			// Cinderace
//	"0815gmax",		// Gigantamax Cinderace
	// Sobble -> Drizzile -> Inteleon <-> Gigantamax Inteleon
	"0816",			// Sobble
	"0817",			// Drizzile
	"0818",			// Inteleon
//	"0818gmax",		// Gigantamax Inteleon
	// Skwovet -> Greedent
	"0819",			// Skwovet
	"0820",			// Greedent
	// Rookidee -> Corvisquire -> Corviknight <-> Gigantamax Corviknight
	"0821",			// Rookidee
	"0822",			// Corvisquire
	"0823",			// Corviknight
	"0823gmax",		// Gigantamax Corviknight
	// Blipbug -> Dottler -> Orbeetle <-> Gigantamax Orbeetle
	"0824",			// Blipbug
	"0825",			// Dottler
	"0826",			// Orbeetle
	"0826gmax",		// Gigantamax Orbeetle
	// Nickit -> Thievul
	"0827",			// Nickit
	"0828",			// Thievul
	// Glossifluer -> Eldegoss
	"0829",			// Gossifleur
	"0830",			// Eldegoss
	// Wooloo -> Dubwool
	"0831",			// Wooloo
	"0832",			// Dubwool
	// Chewtle -> Drednaw <-> Gigantamax Drednaw
	"0833",			// Chewtle
	"0834",			// Drednaw
	"0834gmax",		// Gigantamax Drednaw
	// Yamper -> Bolthund
	"0835",			// Yamper
	"0836",			// Boltund
	// Rolycoly -> Carkol -> Coalossal <-> Gigantamax Coalossal
	"0837",			// Rolycoly
	"0838",			// Carkol
	"0839",			// Coalossal
	"0839gmax",		// Gigantamax Coalossal
	// Applin -+-> Flapple <-> Gigantamax Flapple
	//         '-> Appletun <-> Gigantamax Appletun
	"0840",			// Applin
	"0841",			// Flapple
	"0841gmax",		// Gigantamax Flapple
	"0842",			// Appletun
	"0842gmax",		// Gigantamax Appletun
	// Silicobra -> Sandaconda <-> Gigantamax Sandaconda
	"0843",			// Silicobra
	"0844",			// Sandaconda
	"0844gmax",		// Gigantamax Sandaconda
	// Cramorant
	"0845",			// Cramorant
//	"0845gu",		// Gulping Cramorant
//	"0845go",		// Gorging Cramorant
	// Arrokuda -> Barraskewda
	"0846",			// Arrokuda
	"0847",			// Barraskewda
	// Toxel -> Toxitricity <-> Gigantamax Toxitricity
	"0848",			// Toxel
//	"0849",			// Toxitricity
//	"0849gmax",		// Gigantamax Toxtricity
	"0849lk",		// Low Key Toxtricity
	"0849lkgmax",	// Gigantamax Low Key Toxtricity
	"0849a",		// Amped Toxtricity
	"0849agmax",	// Gigantamax Amped Toxtricity
	// Sizzlipede -> Centiskorch <-> Gigantamax Centiskorch
	"0850",			// Sizzlipede
	"0851",			// Centiskorch
	"0851gmax",		// Gigantamax Centiskorch
	// Clobbopus -> Grapploct
	"0852",			// Clobbopus
	"0853",			// Grapploct
	// Sinistea -> Polteageist
//	"0854",			// Sinistea (uknown gender)
//	"0855",			// Polteageist (uknown gender)
	"0854p",		// Phony Sinistea (uknown gender)
	"0855p",		// Phony Polteageist (uknown gender)
	"0854a",		// Antique Sinistea (uknown gender)
	"0855a",		// Antique Polteageist (uknown gender)
	// Hatenna -> Hattrem -> Hatterene <-> Gigantamax Hatterene
	"0856",			// Hatenna (female only)
	"0857",			// Hattrem (female only)
	"0858",			// Hatterene (female only)
	"0858gmax",		// Gigantamax Hetterene (female only)
	// Impidimp -> Morgrem -> Grimmsnarl <-> Gigantamax Grimmsnarl
	"0859",			// Impidimp (male only)
	"0860",			// Morgrem (male only)
	"0861",			// Grimmsnarl (male only)
	"0861gmax",		// Gigantamax Grimmsnarl (male only)
	// Milcery -> Alcremie
	"0868",			// Milcery (female only)
//	"0869",			// Alcremie (female only)
//	"0869gmax",		// Gigantamax Alcremie (female only)
	"0869vasb",		// Strawberry Sweet Vanilla Cream Alcremie (female only)
	"0869vasbgmax",	// Gigantamax Strawberry Sweet Vanilla Cream Alcremie (female only)
	"0869vabe",		// Berry Sweet Vanilla Cream Alcremie (female only)
	"0869vabegmax",	// Gigantamax Berry Sweet Vanilla Cream Alcremie (female only)
	"0869valo",		// Love Sweet Vanilla Cream Alcremie (female only)
	"0869valogmax",	// Gigantamax Love Sweet Vanilla Cream Alcremie (female only)
	"0869vast",		// Star Sweet Vanilla Cream Alcremie (female only)
	"0869vastgmax",	// Gigantamax Star Sweet Vanilla Cream Alcremie (female only)
	"0869vacl",		// Clover Sweet Vanilla Cream Alcremie (female only)
	"0869vaclgmax",	// Gigantamax Clover Sweet Vanilla Cream Alcremie (female only)
	"0869vafl",		// Flower Sweet Vanilla Cream Alcremie (female only)
	"0869vaflgmax",	// Gigantamax Flower Sweet Vanilla Cream Alcremie (female only)
	"0869vari",		// Ribbon Sweet Vanilla Cream Alcremie (female only)
	"0869varigmax",	// Gigantamax Ribbon Sweet Vanilla Cream Alcremie (female only)
	"0869rusb",		// Strawberry Sweet Ruby Cream Alcremie (female only)
	"0869rusbgmax",	// Gigantamax Strawberry Sweet Ruby Cream Alcremie (female only)
	"0869rube",		// Berry Sweet Ruby Cream Alcremie (female only)
	"0869rubegmax",	// Gigantamax Berry Sweet Ruby Cream Alcremie (female only)
	"0869rulo",		// Love Sweet Ruby Cream Alcremie (female only)
	"0869rulogmax",	// Gigantamax Love Sweet Ruby Cream Alcremie (female only)
	"0869rust",		// Star Sweet Ruby Cream Alcremie (female only)
	"0869rustgmax",	// Gigantamax Star Sweet Ruby Cream Alcremie (female only)
	"0869rucl",		// Clover Sweet Ruby Cream Alcremie (female only)
	"0869ruclgmax",	// Gigantamax Clover Sweet Ruby Cream Alcremie (female only)
	"0869rufl",		// Flower Sweet Ruby Cream Alcremie (female only)
	"0869ruflgmax",	// Gigantamax Flower Sweet Ruby Cream Alcremie (female only)
	"0869ruri",		// Ribbon Sweet Ruby Cream Alcremie (female only)
	"0869rurigmax",	// Gigantamax Ribbon Sweet Ruby Cream Alcremie (female only)
	"0869masb",		// Strawberry Sweet Matcha Cream Alcremie (female only)
	"0869masbgmax",	// Gigantamax Strawberry Sweet Matcha Cream Alcremie (female only)
	"0869mabe",		// Berry Sweet Matcha Cream Alcremie (female only)
	"0869mabegmax",	// Gigantamax Berry Sweet Matcha Cream Alcremie (female only)
	"0869malo",		// Love Sweet Matcha Cream Alcremie (female only)
	"0869malogmax",	// Gigantamax Love Sweet Matcha Cream Alcremie (female only)
	"0869mast",		// Star Sweet Matcha Cream Alcremie (female only)
	"0869mastgmax",	// Gigantamax Star Sweet Matcha Cream Alcremie (female only)
	"0869macl",		// Clover Sweet Matcha Cream Alcremie (female only)
	"0869maclgmax",	// Gigantamax Clover Sweet Matcha Cream Alcremie (female only)
	"0869mafl",		// Flower Sweet Matcha Cream Alcremie (female only)
	"0869maflgmax",	// Gigantamax Flower Sweet Matcha Cream Alcremie (female only)
	"0869mari",		// Ribbon Sweet Matcha Cream Alcremie (female only)
	"0869marigmax",	// Gigantamax Ribbon Sweet Matcha Cream Alcremie (female only)
	"0869misb",		// Strawberry Sweet Mint Cream Alcremie (female only)
	"0869misbgmax",	// Gigantamax Strawberry Sweet Mint Cream Alcremie (female only)
	"0869mibe",		// Berry Sweet Mint Cream Alcremie (female only)
	"0869mibegmax",	// Gigantamax Berry Sweet Mint Cream Alcremie (female only)
	"0869milo",		// Love Sweet Mint Cream Alcremie (female only)
	"0869milogmax",	// Gigantamax Love Sweet Mint Cream Alcremie (female only)
	"0869mist",		// Star Sweet Mint Cream Alcremie (female only)
	"0869mistgmax",	// Gigantamax Star Sweet Mint Cream Alcremie (female only)
	"0869micl",		// Clover Sweet Mint Cream Alcremie (female only)
	"0869miclgmax",	// Gigantamax Clover Sweet Mint Cream Alcremie (female only)
	"0869mifl",		// Flower Sweet Mint Cream Alcremie (female only)
	"0869miflgmax",	// Gigantamax Flower Sweet Mint Cream Alcremie (female only)
	"0869miri",		// Ribbon Sweet Mint Cream Alcremie (female only)
	"0869mirigmax",	// Gigantamax Ribbon Sweet Mint Cream Alcremie (female only)
	"0869lesb",		// Strawberry Sweet Lemon Cream Alcremie (female only)
	"0869lesbgmax",	// Gigantamax Strawberry Sweet Lemon Cream Alcremie (female only)
	"0869lebe",		// Berry Sweet Lemon Cream Alcremie (female only)
	"0869lebegmax",	// Gigantamax Berry Sweet Lemon Cream Alcremie (female only)
	"0869lelo",		// Love Sweet Lemon Cream Alcremie (female only)
	"0869lelogmax",	// Gigantamax Love Sweet Lemon Cream Alcremie (female only)
	"0869lest",		// Star Sweet Lemon Cream Alcremie (female only)
	"0869lestgmax",	// Gigantamax Star Sweet Lemon Cream Alcremie (female only)
	"0869lecl",		// Clover Sweet Lemon Cream Alcremie (female only)
	"0869leclgmax",	// Gigantamax Clover Sweet Lemon Cream Alcremie (female only)
	"0869lefl",		// Flower Sweet Lemon Cream Alcremie (female only)
	"0869leflgmax",	// Gigantamax Flower Sweet Lemon Cream Alcremie (female only)
	"0869leri",		// Ribbon Sweet Lemon Cream Alcremie (female only)
	"0869lerigmax",	// Gigantamax Ribbon Sweet Lemon Cream Alcremie (female only)
	"0869sasb",		// Strawberry Sweet Salted Cream Alcremie (female only)
	"0869sasbgmax",	// Gigantamax Strawberry Sweet Salted Cream Alcremie (female only)
	"0869sabe",		// Berry Sweet Salted Cream Alcremie (female only)
	"0869sabegmax",	// Gigantamax Berry Sweet Salted Cream Alcremie (female only)
	"0869salo",		// Love Sweet Salted Cream Alcremie (female only)
	"0869salogmax",	// Gigantamax Love Sweet Salted Cream Alcremie (female only)
	"0869sast",		// Star Sweet Salted Cream Alcremie (female only)
	"0869sastgmax",	// Gigantamax Star Sweet Salted Cream Alcremie (female only)
	"0869sacl",		// Clover Sweet Salted Cream Alcremie (female only)
	"0869saclgmax",	// Gigantamax Clover Sweet Salted Cream Alcremie (female only)
	"0869safl",		// Flower Sweet Salted Cream Alcremie (female only)
	"0869saflgmax",	// Gigantamax Flower Sweet Salted Cream Alcremie (female only)
	"0869sari",		// Ribbon Sweet Salted Cream Alcremie (female only)
	"0869sarigmax",	// Gigantamax Ribbon Sweet Salted Cream Alcremie (female only)
	"0869rssb",		// Strawberry Sweet Ruby Swirl Alcremie (female only)
	"0869rssbgmax",	// Gigantamax Strawberry Sweet Ruby Swirl Alcremie (female only)
	"0869rsbe",		// Berry Sweet Ruby Swirl Alcremie (female only)
	"0869rsbegmax",	// Gigantamax Berry Sweet Ruby Swirl Alcremie (female only)
	"0869rslo",		// Love Sweet Ruby Swirl Alcremie (female only)
	"0869rslogmax",	// Gigantamax Love Sweet Ruby Swirl Alcremie (female only)
	"0869rsst",		// Star Sweet Ruby Swirl Alcremie (female only)
	"0869rsstgmax",	// Gigantamax Star Sweet Ruby Swirl Alcremie (female only)
	"0869rscl",		// Clover Sweet Ruby Swirl Alcremie (female only)
	"0869rsclgmax",	// Gigantamax Clover Sweet Ruby Swirl Alcremie (female only)
	"0869rsfl",		// Flower Sweet Ruby Swirl Alcremie (female only)
	"0869rsflgmax",	// Gigantamax Flower Sweet Ruby Swirl Alcremie (female only)
	"0869rsri",		// Ribbon Sweet Ruby Swirl Alcremie (female only)
	"0869rsrigmax",	// Gigantamax Ribbon Sweet Ruby Swirl Alcremie (female only)
	"0869casb",		// Strawberry Sweet Caramel Swirl Alcremie (female only)
	"0869casbgmax",	// Gigantamax Strawberry Sweet Caramel Swirl Alcremie (female only)
	"0869cabe",		// Berry Sweet Caramel Swirl Alcremie (female only)
	"0869cabegmax",	// Gigantamax Berry Sweet Caramel Swirl Alcremie (female only)
	"0869calo",		// Love Sweet Caramel Swirl Alcremie (female only)
	"0869calogmax",	// Gigantamax Love Sweet Caramel Swirl Alcremie (female only)
	"0869cast",		// Star Sweet Caramel Swirl Alcremie (female only)
	"0869castgmax",	// Gigantamax Star Sweet Caramel Swirl Alcremie (female only)
	"0869cacl",		// Clover Sweet Caramel Swirl Alcremie (female only)
	"0869caclgmax",	// Gigantamax Clover Sweet Caramel Swirl Alcremie (female only)
	"0869cafl",		// Flower Sweet Caramel Swirl Alcremie (female only)
	"0869caflgmax",	// Gigantamax Flower Sweet Caramel Swirl Alcremie (female only)
	"0869cari",		// Ribbon Sweet Caramel Swirl Alcremie (female only)
	"0869carigmax",	// Gigantamax Ribbon Sweet Caramel Swirl Alcremie (female only)
	"0869rasb",		// Strawberry Sweet Rainbow Swirl Alcremie (female only)
	"0869rasbgmax",	// Gigantamax Strawberry Sweet Rainbow Swirl Alcremie (female only)
	"0869rabe",		// Berry Sweet Rainbow Swirl Alcremie (female only)
	"0869rabegmax",	// Gigantamax Berry Sweet Rainbow Swirl Alcremie (female only)
	"0869ralo",		// Love Sweet Rainbow Swirl Alcremie (female only)
	"0869ralogmax",	// Gigantamax Love Sweet Rainbow Swirl Alcremie (female only)
	"0869rast",		// Star Sweet Rainbow Swirl Alcremie (female only)
	"0869rastgmax",	// Gigantamax Star Sweet Rainbow Swirl Alcremie (female only)
	"0869racl",		// Clover Sweet Rainbow Swirl Alcremie (female only)
	"0869raclgmax",	// Gigantamax Clover Sweet Rainbow Swirl Alcremie (female only)
	"0869rafl",		// Flower Sweet Rainbow Swirl Alcremie (female only)
	"0869raflgmax",	// Gigantamax Flower Sweet Rainbow Swirl Alcremie (female only)
	"0869rari",		// Ribbon Sweet Rainbow Swirl Alcremie (female only)
	"0869rarigmax",	// Gigantamax Ribbon Sweet Rainbow Swirl Alcremie (female only)
	// Falinks
	"0870",			// Falinks (uknown gender)
	// Pincurchin
	"0871",			// Pincurchin
	// Snom Frosmoth
	"0872",			// Snom
	"0873",			// Frosmoth
	// Stonjourner
	"0874",			// Stonjourner
	// Eiscue
//	"0875",			// Eiscue
	"0875i",		// Ice Face Eiscue
//	"0875n",		// Noice Face Eiscue
	// Indeedee
//	"0876",			// Indeedee
	"0876m",		// Indeedee♂ (male only)
	"0876f",		// Indeedee♀ (female only)
	// Morpeko
//	"0877",			// Morpeko
	"0877f",		// Full Belly Mode Morpeko
//	"0877h",		// Hangry Mode Morpeko
	// Cufant -> Copperajah <-> Gigantamax Copperajah
	"0878",			// Cufant
	"0879",			// Copperajah
	"0879gmax",		// Gigantamax Copperajah
	// Duraludon <-> Gigantamax Duraludon
	"0884",			// Duraludon
	"0884gmax",		// Gigantamax Duraludon
	// Dreepy -> Drakloak -> Dragapult
	"0885",			// Dreepy
	"0886",			// Drakloak
	"0887",			// Dragapult
	// Zacian
//	"0888",			// Zacian (uknown gender)
	"0888h",		// Hero of Many Battles, Zacian (uknown gender)
//	"0888c",		// Crowned Sword Zacian (uknown gender)
	// Zamacenta
//	"0889",			// Zamazenta (uknown gender)
	"0889h",		// Hero of Many Battles, Zamazenta (uknown gender)
//	"0889c",		// Crowned Shield Zamazenta (uknown gender)
	// Eternatus
	"0890",			// Eternatus (uknown gender)
//	"0890emax",		// Eternamax (uknown gender)
];
