const IcoPathDiPe 	= "poke_icon/g04/1/";
const IcoPathPl		= "poke_icon/g04/1/";
const IcoPathHGSS	= "poke_icon/g04/1/";

const ImgWd_G04		= 32;
const BoxCap_G04	= 30;
const MaxBox_G04	= 18;
const DivBox_G04	=  6;

//============================================================================
// NATIONAL POKEDEX
//============================================================================
const _Regdex_n_400 =
{
	"0001"									: "Bulbasaur",
	"0002"									: "Ivysaur",
	"0003"									: "Venusaur",
//	"0003-m"								: "Venusaur♂",
//	"0003-f"								: "Venusaur♀",
	"0004"									: "Charmander",
	"0005"									: "Charmeleon",
	"0006"									: "Charizard",
	"0007"									: "Squirtle",
	"0008"									: "Wartortle",
	"0009"									: "Blastoise",
	"0010"									: "Caterpie",
	"0011"									: "Metapod",
	"0012"									: "Butterfree",
//	"0012-m"								: "Butterfree♂",
//	"0012-f"								: "Butterfree♀",
	"0013"									: "Weedle",
	"0014"									: "Kakuna",
	"0015"									: "Beedrill",
	"0016"									: "Pidgey",
	"0017"									: "Pidgeotto",
	"0018"									: "Pidgeot",
	"0019"									: "Rattata",
//	"0019-m"								: "Rattata♂",
//	"0019-f"								: "Rattata♀",
	"0020"									: "Raticate",
//	"0020-m"								: "Raticate♂",
//	"0020-f"								: "Raticate♀",
	"0021"									: "Spearow",
	"0022"									: "Fearow",
	"0023"									: "Ekans",
	"0024"									: "Arbok",
	"0025"									: "Pikachu",
//	"0025-m"								: "Pikachu♂",
//	"0025-f"								: "Pikachu♀",
	"0026"									: "Raichu",
//	"0026-m"								: "Raichu♂",
//	"0026-f"								: "Raichu♀",
	"0027"									: "Sandshrew",
	"0028"									: "Sandslash",
//	"0029"									: "Nidoran",
	"0029-f"								: "Nidoran♀",
	"0030"									: "Nidorina",
	"0031"									: "Nidoqueen",
//	"0032"									: "Nidoran",
	"0032-m"								: "Nidoran♂",
	"0033"									: "Nidorino",
	"0034"									: "Nidoking",
	"0035"									: "Clefairy",
	"0036"									: "Clefable",
	"0037"									: "Vulpix",
	"0038"									: "Ninetales",
	"0039"									: "Jigglypuff",
	"0040"									: "Wigglytuff",
	"0041"									: "Zubat",
//	"0041-m"								: "Zubat♂",
//	"0041-f"								: "Zubat♀",
	"0042"									: "Golbat",
//	"0042-m"								: "Golbat♂",
//	"0042-f"								: "Golbat♀",
	"0043"									: "Oddish",
	"0044"									: "Gloom",
//	"0044-m"								: "Gloom♂",
//	"0044-f"								: "Gloom♀",
	"0045"									: "Vileplume",
//	"0045-m"								: "Vileplume♂",
//	"0045-f"								: "Vileplume♀",
	"0046"									: "Paras",
	"0047"									: "Parasect",
	"0048"									: "Venonat",
	"0049"									: "Venomoth",
	"0050"									: "Diglett",
	"0051"									: "Dugtrio",
	"0052"									: "Meowth",
	"0053"									: "Persian",
	"0054"									: "Psyduck",
	"0055"									: "Golduck",
	"0056"									: "Mankey",
	"0057"									: "Primeape",
	"0058"									: "Growlithe",
	"0059"									: "Arcanine",
	"0060"									: "Poliwag",
	"0061"									: "Poliwhirl",
	"0062"									: "Poliwrath",
	"0063"									: "Abra",
	"0064"									: "Kadabra",
//	"0064-m"								: "Kadabra♂",
//	"0064-f"								: "Kadabra♀",
	"0065"									: "Alakazam",
//	"0065-m"								: "Alakazam♂",
//	"0065-f"								: "Alakazam♀",
	"0066"									: "Machop",
	"0067"									: "Machoke",
	"0068"									: "Machamp",
	"0069"									: "Bellsprout",
	"0070"									: "Weepinbell",
	"0071"									: "Victreebel",
	"0072"									: "Tentacool",
	"0073"									: "Tentacruel",
	"0074"									: "Geodude",
	"0075"									: "Graveler",
	"0076"									: "Golem",
	"0077"									: "Ponyta",
	"0078"									: "Rapidash",
	"0079"									: "Slowpoke",
	"0080"									: "Slowbro",
	"0081"									: "Magnemite",
	"0082"									: "Magneton",
	"0083"									: "Farfetch'd",
	"0084"									: "Doduo",
//	"0084-m"								: "Doduo♂",
//	"0084-f"								: "Doduo♀",
	"0085"									: "Dodrio",
//	"0085-m"								: "Dodrio♂",
//	"0085-f"								: "Dodrio♀",
	"0086"									: "Seel",
	"0087"									: "Dewgong",
	"0088"									: "Grimer",
	"0089"									: "Muk",
	"0090"									: "Shellder",
	"0091"									: "Cloyster",
	"0092"									: "Gastly",
	"0093"									: "Haunter",
	"0094"									: "Gengar",
	"0095"									: "Onix",
	"0096"									: "Drowzee",
	"0097"									: "Hypno",
//	"0097-m"								: "Hypno♂",
//	"0097-f"								: "Hypno♀",
	"0098"									: "Krabby",
	"0099"									: "Kingler",
	"0100"									: "Voltorb", // uknown gender
	"0101"									: "Electrode", // uknown gender
	"0102"									: "Exeggcute",
	"0103"									: "Exeggutor",
	"0104"									: "Cubone",
	"0105"									: "Marowak",
	"0106"									: "Hitmonlee", // male only
	"0107"									: "Hitmonchan", // male only
	"0108"									: "Lickitung",
	"0109"									: "Koffing",
	"0110"									: "Weezing",
	"0111"									: "Rhyhorn",
//	"0111-m"								: "Rhyhorn♂",
//	"0111-f"								: "Rhyhorn♀",
	"0112"									: "Rhydon",
//	"0112-m"								: "Rhydon♂",
//	"0112-f"								: "Rhydon♀",
	"0113"									: "Chansey", // female only
	"0114"									: "Tangela",
	"0115"									: "Kangaskhan", // female only
	"0116"									: "Horsea",
	"0117"									: "Seadra",
	"0118"									: "Goldeen",
//	"0118-m"								: "Goldeen♂",
//	"0118-f"								: "Goldeen♀",
	"0119"									: "Seaking",
//	"0119-m"								: "Seaking♂",
//	"0119-f"								: "Seaking♀",
 	"0120"									: "Staryu", // uknown gender
	"0121"									: "Starmie", // uknown gender
	"0122"									: "Mr. Mime",
	"0123"									: "Scyther",
//	"0123-m"								: "Scyther♂",
//	"0123-f"								: "Scyther♀",
	"0124"									: "Jynx",
	"0125"									: "Electabuzz",
	"0126"									: "Magmar",
	"0127"									: "Pinsir",
	"0128"									: "Tauros", // male only
	"0129"									: "Magikarp",
//	"0129-m"								: "Magikarp♂",
//	"0129-f"								: "Magikarp♀",
	"0130"									: "Gyarados",
//	"0130-m"								: "Gyarados♂",
//	"0130-f"								: "Gyarados♀",
	"0131"									: "Lapras",
	"0132"									: "Ditto", // uknown gender
	"0133"									: "Eevee",
//	"0133-m"								: "Eevee♂",
//	"0133-f"								: "Eevee♀",
	"0134"									: "Vaporeon",
	"0135"									: "Jolteon",
	"0136"									: "Flareon",
	"0137"									: "Porygon", // uknown gender
	"0138"									: "Omanyte",
	"0139"									: "Omastar",
	"0140"									: "Kabuto",
	"0141"									: "Kabutops",
	"0142"									: "Aerodactyl",
	"0143"									: "Snorlax",
	"0144"									: "Articuno", // uknown gender
	"0145"									: "Zapdos", // uknown gender
	"0146"									: "Moltres", // uknown gender
	"0147"									: "Dratini",
	"0148"									: "Dragonair",
	"0149"									: "Dragonite",
	"0150"									: "Mewtwo", // uknown gender
	"0151"									: "Mew", // uknown gender
	"0152"									: "Chikorita",
	"0153"									: "Bayleef",
	"0154"									: "Meganium",
//	"0154-m"								: "Meganium♂",
//	"0154-f"								: "Meganium♀",
	"0155"									: "Cyndaquil",
	"0156"									: "Quilava",
	"0157"									: "Typhlosion",
	"0158"									: "Totodile",
	"0159"									: "Croconaw",
	"0160"									: "Feraligatr",
	"0161"									: "Sentret",
	"0162"									: "Furret",
	"0163"									: "Hoothoot",
	"0164"									: "Noctowl",
	"0165"									: "Ledyba",
//	"0165-m"								: "Ledyba♂",
//	"0165-f"								: "Ledyba♀",
	"0166"									: "Ledian",
//	"0166-m"								: "Ledian♂",
//	"0166-f"								: "Ledian♀",
	"0167"									: "Spinarak",
	"0168"									: "Ariados",
	"0169"									: "Crobat",
	"0170"									: "Chinchou",
	"0171"									: "Lanturn",
	"0172"									: "Pichu",
	"0172-spiky-eared"						: "Spiky-eared Pichu", // female only
	"0173"									: "Cleffa",
	"0174"									: "Igglybuff",
	"0175"									: "Togepi",
	"0176"									: "Togetic",
	"0177"									: "Natu",
	"0178"									: "Xatu",
//	"0178-m"								: "Xatu♂",
//	"0178-f"								: "Xatu♀",
	"0179"									: "Mareep",
	"0180"									: "Flaaffy",
	"0181"									: "Ampharos",
	"0182"									: "Bellossom",
	"0183"									: "Marill",
	"0184"									: "Azumarill",
	"0185"									: "Sudowoodo",
//	"0185-m"								: "Sudowoodo♂",
//	"0185-f"								: "Sudowoodo♀",
	"0186"									: "Politoed",
//	"0186-m"								: "Politoed♂",
//	"0186-f"								: "Politoed♀",
	"0187"									: "Hoppip",
	"0188"									: "Skiploom",
	"0189"									: "Jumpluff",
	"0190"									: "Aipom",
//	"0190-m"								: "Aipom♂",
//	"0190-f"								: "Aipom♀",
	"0191"									: "Sunkern",
	"0192"									: "Sunflora",
	"0193"									: "Yanma",
	"0194"									: "Wooper",
//	"0194-m"								: "Wooper♂",
//	"0194-f"								: "Wooper♀",
	"0195"									: "Quagsire",
//	"0195-m"								: "Quagsire♂",
//	"0195-f"								: "Quagsire♀",
	"0196"									: "Espeon",
	"0197"									: "Umbreon",
	"0198"									: "Murkrow",
//	"0198-m"								: "Murkrow♂",
//	"0198-f"								: "Murkrow♀",
	"0199"									: "Slowking",
	"0200"									: "Misdreavus",
//	"0201"									: "Unown", // uknown gender
//	"0201-angry"							: "Unown Angry", // uknown gender
	"0201-anger"							: "Unown Anger", // uknown gender
	"0201-bear"								: "Unown Bear", // uknown gender
	"0201-chase"							: "Unown Chase", // uknown gender
	"0201-direct"							: "Unown Direct", // uknown gender
	"0201-engage"							: "Unown Engage", // uknown gender
	"0201-find"								: "Unown Find", // uknown gender
	"0201-give"								: "Unown Give", // uknown gender
	"0201-help"								: "Unown Help", // uknown gender
	"0201-increase"							: "Unown Increase", // uknown gender
	"0201-join"								: "Unown Join", // uknown gender
	"0201-keep"								: "Unown Keep", // uknown gender
	"0201-laugh"							: "Unown Laugh", // uknown gender
	"0201-make"								: "Unown Make", // uknown gender
	"0201-nuzzle"							: "Unown Nuzzle", // uknown gender
	"0201-observe"							: "Unown Observe", // uknown gender
	"0201-perform"							: "Unown Perform", // uknown gender
	"0201-quicken"							: "Unown Quicken", // uknown gender
	"0201-reassure"							: "Unown Reassure", // uknown gender
	"0201-search"							: "Unown Search", // uknown gender
	"0201-tell"								: "Unown Tell", // uknown gender
	"0201-undo"								: "Unown Undo", // uknown gender
	"0201-vanish"							: "Unown Vanish", // uknown gender
	"0201-want"								: "Unown Want", // uknown gender
	"0201-xxxxx"							: "Unown XXXXX", // uknown gender
	"0201-yield"							: "Unown Yield", // uknown gender
	"0201-zoom"								: "Unown Zoom", // uknown gender
	"0201-exclamation"						: "Unown !!!!!", // uknown gender
	"0201-question"							: "Unown ?????", // uknown gender
	"0202"									: "Wobbuffet",
//	"0202-m"								: "Wobbuffet♂",
//	"0202-f"								: "Wobbuffet♀",
	"0203"									: "Girafarig",
//	"0203-m"								: "Girafarig♂",
//	"0203-f"								: "Girafarig♀",
	"0204"									: "Pineco",
	"0205"									: "Forretress",
	"0206"									: "Dunsparce",
	"0207"									: "Gligar",
//	"0207-m"								: "Gligar♂",
//	"0207-f"								: "Gligar♀",
	"0208"									: "Steelix",
//	"0208-m"								: "Steelix♂",
//	"0208-f"								: "Steelix♀",
	"0209"									: "Snubbull",
	"0210"									: "Granbull",
	"0211"									: "Qwilfish",
	"0212"									: "Scizor",
//	"0212-m"								: "Scizor♂",
//	"0212-f"								: "Scizor♀",
	"0213"									: "Shuckle",
	"0214"									: "Heracross",
//	"0214-m"								: "Heracross♂",
//	"0214-f"								: "Heracross♀",
	"0215"									: "Sneasel",
//	"0215-m"								: "Sneasel♂",
//	"0215-f"								: "Sneasel♀",
	"0216"									: "Teddiursa",
	"0217"									: "Ursaring",
//	"0217-m"								: "Ursaring♂",
//	"0217-f"								: "Ursaring♀",
	"0218"									: "Slugma",
	"0219"									: "Magcargo",
	"0220"									: "Swinub",
	"0221"									: "Piloswine",
//	"0221-m"								: "Piloswine♂",
//	"0221-f"								: "Piloswine♀",
	"0222"									: "Corsola",
	"0223"									: "Remoraid",
	"0224"									: "Octillery",
//	"0224-m"								: "Octillery♂",
//	"0224-f"								: "Octillery♀",
	"0225"									: "Delibird",
	"0226"									: "Mantine",
	"0227"									: "Skarmory",
	"0228"									: "Houndour",
	"0229"									: "Houndoom",
//	"0229-m"								: "Houndoom♂",
//	"0229-f"								: "Houndoom♀",
	"0230"									: "Kingdra",
	"0231"									: "Phanpy",
	"0232"									: "Donphan",
//	"0232-m"								: "Donphan♂",
//	"0232-f"								: "Donphan♀",
	"0233"									: "Porygon2", // uknown gender
	"0234"									: "Stantler",
	"0235"									: "Smeargle",
	"0236"									: "Tyrogue", // male only
	"0237"									: "Hitmontop", // male only
	"0238"									: "Smoochum", // female only
	"0239"									: "Elekid",
	"0240"									: "Magby",
	"0241"									: "Miltank", // female only
	"0242"									: "Blissey", // female only
	"0243"									: "Raikou", // uknown gender
	"0244"									: "Entei", // uknown gender
	"0245"									: "Suicune", // uknown gender
	"0246"									: "Larvitar",
	"0247"									: "Pupitar",
	"0248"									: "Tyranitar",
	"0249"									: "Lugia", // uknown gender
	"0250"									: "Ho-Oh", // uknown gender
	"0251"									: "Celebi", // uknown gender
	"0252"									: "Treecko",
	"0253"									: "Grovyle",
	"0254"									: "Sceptile",
	"0255"									: "Torchic",
//	"0255-m"								: "Torchic♂",
//	"0255-f"								: "Torchic♀",
	"0256"									: "Combusken",
//	"0256-m"								: "Combusken♂",
//	"0256-f"								: "Combusken♀",
	"0257"									: "Blaziken",
//	"0257-m"								: "Blaziken♂",
//	"0257-f"								: "Blaziken♀",
	"0258"									: "Mudkip",
	"0259"									: "Marshtomp",
	"0260"									: "Swampert",
	"0261"									: "Poochyena",
	"0262"									: "Mightyena",
	"0263"									: "Zigzagoon",
	"0264"									: "Linoone",
	"0265"									: "Wurmple",
	"0266"									: "Silcoon",
	"0267"									: "Beautifly",
//	"0267-m"								: "Beautifly♂",
//	"0267-f"								: "Beautifly♀",
	"0268"									: "Cascoon",
	"0269"									: "Dustox",
//	"0269-m"								: "Dustox♂",
//	"0269-f"								: "Dustox♀",
	"0270"									: "Lotad",
	"0271"									: "Lombre",
	"0272"									: "Ludicolo",
//	"0272-m"								: "Ludicolo♂",
//	"0272-f"								: "Ludicolo♀",
	"0273"									: "Seedot",
	"0274"									: "Nuzleaf",
//	"0274-m"								: "Nuzleaf♂",
//	"0274-f"								: "Nuzleaf♀",
	"0275"									: "Shiftry",
//	"0275-m"								: "Shiftry♂",
//	"0275-f"								: "Shiftry♀",
	"0276"									: "Taillow",
	"0277"									: "Swellow",
	"0278"									: "Wingull",
	"0279"									: "Pelipper",
	"0280"									: "Ralts",
	"0281"									: "Kirlia",
	"0282"									: "Gardevoir",
	"0283"									: "Surskit",
	"0284"									: "Masquerain",
	"0285"									: "Shroomish",
	"0286"									: "Breloom",
	"0287"									: "Slakoth",
	"0288"									: "Vigoroth",
	"0289"									: "Slaking",
	"0290"									: "Nincada",
	"0291"									: "Ninjask",
	"0292"									: "Shedinja", // uknown gender
	"0293"									: "Whismur",
	"0294"									: "Loudred",
	"0295"									: "Exploud",
	"0296"									: "Makuhita",
	"0297"									: "Hariyama",
	"0298"									: "Azurill",
	"0299"									: "Nosepass",
	"0300"									: "Skitty",
	"0301"									: "Delcatty",
	"0302"									: "Sableye",
	"0303"									: "Mawile",
	"0304"									: "Aron",
	"0305"									: "Lairon",
	"0306"									: "Aggron",
	"0307"									: "Meditite",
//	"0307-m"								: "Meditite♂",
//	"0307-f"								: "Meditite♀",
	"0308"									: "Medicham",
//	"0308-m"								: "Medicham♂",
//	"0308-f"								: "Medicham♀",
	"0309"									: "Electrike",
	"0310"									: "Manectric",
	"0311"									: "Plusle",
	"0312"									: "Minun",
	"0313"									: "Volbeat", // male only
	"0314"									: "Illumise", // female only
	"0315"									: "Roselia",
//	"0315-m"								: "Roselia♂",
//	"0315-f"								: "Roselia♀",
	"0316"									: "Gulpin",
//	"0316-m"								: "Gulpin♂",
//	"0316-f"								: "Gulpin♀",
	"0317"									: "Swalot",
//	"0317-m"								: "Swalot♂",
//	"0317-f"								: "Swalot♀",
	"0318"									: "Carvanha",
	"0319"									: "Sharpedo",
	"0320"									: "Wailmer",
	"0321"									: "Wailord",
	"0322"									: "Numel",
//	"0322-m"								: "Numel♂",
//	"0322-f"								: "Numel♀",
	"0323"									: "Camerupt",
//	"0323-m"								: "Camerupt♂",
//	"0323-f"								: "Camerupt♀",
	"0324"									: "Torkoal",
	"0325"									: "Spoink",
	"0326"									: "Grumpig",
	"0327"									: "Spinda",
	"0328"									: "Trapinch",
	"0329"									: "Vibrava",
	"0330"									: "Flygon",
	"0331"									: "Cacnea",
	"0332"									: "Cacturne",
//	"0332-m"								: "Cacturne♂",
//	"0332-f"								: "Cacturne♀",
	"0333"									: "Swablu",
	"0334"									: "Altaria",
	"0335"									: "Zangoose",
	"0336"									: "Seviper",
	"0337"									: "Lunatone", // uknown gender
	"0338"									: "Solrock", // uknown gender
	"0339"									: "Barboach",
	"0340"									: "Whiscash",
	"0341"									: "Corphish",
	"0342"									: "Crawdaunt",
	"0343"									: "Baltoy", // uknown gender
	"0344"									: "Claydol", // uknown gender
	"0345"									: "Lileep",
	"0346"									: "Cradily",
	"0347"									: "Anorith",
	"0348"									: "Armaldo",
	"0349"									: "Feebas",
	"0350"									: "Milotic",
//	"0350-m"								: "Milotic♂",
//	"0350-f"								: "Milotic♀",
	"0351"									: "Castform",
//	"0351-sunny"							: "Sunny Castform",
//	"0351-rainy"							: "Rainy Castform",
//	"0351-snowy"							: "Snowy Castform",
	"0352"									: "Kecleon",
	"0353"									: "Shuppet",
	"0354"									: "Banette",
	"0355"									: "Duskull",
	"0356"									: "Dusclops",
	"0357"									: "Tropius",
	"0358"									: "Chimecho",
	"0359"									: "Absol",
	"0360"									: "Wynaut",
	"0361"									: "Snorunt",
	"0362"									: "Glalie",
	"0363"									: "Spheal",
	"0364"									: "Sealeo",
	"0365"									: "Walrein",
	"0366"									: "Clamperl",
	"0367"									: "Huntail",
	"0368"									: "Gorebyss",
	"0369"									: "Relicanth",
//	"0369-m"								: "Relicanth♂",
//	"0369-f"								: "Relicanth♀",
	"0370"									: "Luvdisc",
	"0371"									: "Bagon",
	"0372"									: "Shelgon",
	"0373"									: "Salamence",
	"0374"									: "Beldum", // uknown gender
	"0375"									: "Metang", // uknown gender
	"0376"									: "Metagross", // uknown gender
	"0377"									: "Regirock", // uknown gender
	"0378"									: "Regice", // uknown gender
	"0379"									: "Registeel", // uknown gender
	"0380"									: "Latias", // female only
	"0381"									: "Latios", // male only
	"0382"									: "Kyogre", // uknown gender
	"0383"									: "Groudon", // uknown gender
	"0384"									: "Rayquaza", // uknown gender
	"0385"									: "Jirachi", // uknown gender
	"0386"									: "Deoxys", // uknown gender
	"0386-attack"							: "Attack Deoxys", // uknown gender
	"0386-defense"							: "Defense Deoxys", // uknown gender
	"0386-speed"							: "Speed Deoxys", // uknown gender
	"0387"									: "Turtwig",
	"0388"									: "Grotle",
	"0389"									: "Torterra",
	"0390"									: "Chimchar",
	"0391"									: "Monferno",
	"0392"									: "Infernape",
	"0393"									: "Piplup",
	"0394"									: "Prinplup",
	"0395"									: "Empoleon",
	"0396"									: "Starly",
//	"0396-m"								: "Starly♂",
//	"0396-f"								: "Starly♀",
	"0397"									: "Staravia",
//	"0397-m"								: "Staravia♂",
//	"0397-f"								: "Staravia♀",
	"0398"									: "Staraptor",
//	"0398-m"								: "Staraptor♂",
//	"0398-f"								: "Staraptor♀",
	"0399"									: "Bidoof",
//	"0399-m"								: "Bidoof♂",
//	"0399-f"								: "Bidoof♀",
	"0400"									: "Bibarel",
//	"0400-m"								: "Bibarel♂",
//	"0400-f"								: "Bibarel♀",
	"0401"									: "Kricketot",
//	"0401-m"								: "Kricketot♂",
//	"0401-f"								: "Kricketot♀",
	"0402"									: "Kricketune",
//	"0402-m"								: "Kricketune♂",
//	"0402-f"								: "Kricketune♀",
	"0403"									: "Shinx",
//	"0403-m"								: "Shinx♂",
//	"0403-f"								: "Shinx♀",
	"0404"									: "Luxio",
//	"0404-m"								: "Luxio♂",
//	"0404-f"								: "Luxio♀",
	"0405"									: "Luxray",
//	"0405-m"								: "Luxray♂",
//	"0405-f"								: "Luxray♀",
	"0406"									: "Budew",
	"0407"									: "Roserade",
//	"0407-m"								: "Roserade♂",
//	"0407-f"								: "Roserade♀",
	"0408"									: "Cranidos",
	"0409"									: "Rampardos",
	"0410"									: "Shieldon",
	"0411"									: "Bastiodon",
//	"0412"									: "Burmy",
	"0412-plant"							: "Burmy Plant Cloak",
	"0412-sandy"							: "Burmy Sandy Cloak",
	"0412-trash"							: "Burmy Trash Cloak",
//	"0413"									: "Wormadam", // female only
	"0413-plant"							: "Wormadam Plant Cloak", // female only
	"0413-sandy"							: "Wormadam Sandy Cloak", // female only
	"0413-trash"							: "Wormadam Trash Cloak", // female only
	"0414"									: "Mothim", // male only
	"0415"									: "Combee",
//	"0415-m"								: "Combee♂",
//	"0415-f"								: "Combee♀",
	"0416"									: "Vespiquen", // female only
	"0417"									: "Pachirisu",
//	"0417-m"								: "Pachirisu♂",
//	"0417-f"								: "Pachirisu♀",
	"0418"									: "Buizel",
//	"0418-m"								: "Buizel♂",
//	"0418-f"								: "Buizel♀",
	"0419"									: "Floatzel",
//	"0419-m"								: "Floatzel♂",
//	"0419-f"								: "Floatzel♀",
	"0420"									: "Cherubi",
//	"0421"									: "Cherrim",
	"0421-overcast"							: "Overcast Cherrim",
//	"0421-sunshine"							: "Sunshine Cherrim",
//	"0422"									: "Shellos",
	"0422-west"								: "West Sea Shellos",
	"0422-east"								: "East Sea Shellos",
//	"0423"									: "Gastrodon",
	"0423-west"								: "West Sea Gastrodon",
	"0423-east"								: "East Sea Gastrodon",
	"0424"									: "Ambipom",
//	"0424-m"								: "Ambipom♂",
//	"0424-f"								: "Ambipom♀",
	"0425"									: "Drifloon",
	"0426"									: "Drifblim",
	"0427"									: "Buneary",
	"0428"									: "Lopunny",
	"0429"									: "Mismagius",
	"0430"									: "Honchkrow",
	"0431"									: "Glameow",
	"0432"									: "Purugly",
	"0433"									: "Chingling",
	"0434"									: "Stunky",
	"0435"									: "Skuntank",
	"0436"									: "Bronzor", // uknown gender
	"0437"									: "Bronzong", // uknown gender
	"0438"									: "Bonsly",
	"0439"									: "Mime Jr.",
	"0440"									: "Happiny", // female only
	"0441"									: "Chatot",
	"0442"									: "Spiritomb",
	"0443"									: "Gible",
//	"0443-m"								: "Gible♂",
//	"0443-f"								: "Gible♀",
	"0444"									: "Gabite",
//	"0444-m"								: "Gabite♂",
//	"0444-f"								: "Gabite♀",
	"0445"									: "Garchomp",
//	"0445-m"								: "Garchomp♂",
//	"0445-f"								: "Garchomp♀",
	"0446"									: "Munchlax",
	"0447"									: "Riolu",
	"0448"									: "Lucario",
	"0449"									: "Hippopotas",
//	"0449-m"								: "Hippopotas♂",
//	"0449-f"								: "Hippopotas♀",
	"0450"									: "Hippowdon",
//	"0450-m"								: "Hippowdon♂",
//	"0450-f"								: "Hippowdon♀",
	"0451"									: "Skorupi",
	"0452"									: "Drapion",
	"0453"									: "Croagunk",
//	"0453-m"								: "Croagunk♂",
//	"0453-f"								: "Croagunk♀",
	"0454"									: "Toxicroak",
//	"0454-m"								: "Toxicroak♂",
//	"0454-f"								: "Toxicroak♀",
	"0455"									: "Carnivine",
	"0456"									: "Finneon",
//	"0456-m"								: "Finneon♂",
//	"0456-f"								: "Finneon♀",
	"0457"									: "Lumineon",
//	"0457-m"								: "Lumineon♂",
//	"0457-f"								: "Lumineon♀",
	"0458"									: "Mantyke",
	"0459"									: "Snover",
//	"0459-m"								: "Snover♂",
//	"0459-f"								: "Snover♀",
	"0460"									: "Abomasnow",
//	"0460-m"								: "Abomasnow♂",
//	"0460-f"								: "Abomasnow♀",
	"0461"									: "Weavile",
//	"0461-m"								: "Weavile♂",
//	"0461-f"								: "Weavile♀",
	"0462"									: "Magnezone", // uknown gender
	"0463"									: "Lickilicky",
	"0464"									: "Rhyperior",
//	"0464-m"								: "Rhyperior♂",
//	"0464-f"								: "Rhyperior♀",
	"0465"									: "Tangrowth",
//	"0465-m"								: "Tangrowth♂",
//	"0465-f"								: "Tangrowth♀",
	"0466"									: "Electivire",
	"0467"									: "Magmortar",
	"0468"									: "Togekiss",
	"0469"									: "Yanmega",
	"0470"									: "Leafeon",
	"0471"									: "Glaceon",
	"0472"									: "Gliscor",
	"0473"									: "Mamoswine",
//	"0473-m"								: "Mamoswine♂",
//	"0473-f"								: "Mamoswine♀",
	"0474"									: "Porygon-Z", // uknown gender
	"0475"									: "Gallade", // male only
	"0476"									: "Probopass",
	"0477"									: "Dusknoir",
	"0478"									: "Froslass", // female only
	"0479"									: "Rotom", // uknown gender
	"0479-heat"								: "Heat Rotom", // uknown gender
	"0479-wash"								: "Wash Rotom", // uknown gender
	"0479-frost"							: "Frost Rotom", // uknown gender
	"0479-fan"								: "Fan Rotom", // uknown gender
	"0479-mow"								: "Mow Rotom", // uknown gender
	"0480"									: "Uxie", // uknown gender
	"0481"									: "Mesprit", // uknown gender
	"0482"									: "Azelf", // uknown gender
	"0483"									: "Dialga", // uknown gender
	"0484"									: "Palkia", // uknown gender
	"0485"									: "Heatran",
	"0486"									: "Regigigas", // uknown gender
//	"0487"									: "Giratina", // uknown gender
	"0487-altered"							: "Giratina Altered Forme", // uknown gender
	"0487-origin"							: "Giratina Origin Forme", // uknown gender
	"0488"									: "Cresselia", // female only
	"0489"									: "Phione", // uknown gender
	"0490"									: "Manaphy", // uknown gender
	"0491"									: "Darkrai", // uknown gender
//	"0492"									: "Shaymin", // uknown gender
	"0492-land"								: "Shaymin Land Forme", // uknown gender
	"0492-sky"								: "Shaymin Sky Forme", // uknown gender
	"0493"									: "Arceus", // uknown gender
//	"0493-fighting"							: "Fighting Arceus", // uknown gender
//	"0493-flying"							: "Flying Arceus", // uknown gender
//	"0493-poison"							: "Poison Arceus", // uknown gender
//	"0493-ground"							: "Ground Arceus", // uknown gender
//	"0493-rock"								: "Rock Arceus", // uknown gender
//	"0493-bug"								: "Bug Arceus", // uknown gender
//	"0493-ghost"							: "Ghost Arceus", // uknown gender
//	"0493-steel"							: "Steel Arceus", // uknown gender
//	"0493-fire"								: "Fire Arceus", // uknown gender
//	"0493-water"							: "Water Arceus", // uknown gender
//	"0493-grass"							: "Grass Arceus", // uknown gender
//	"0493-electric"							: "Electric Arceus", // uknown gender
//	"0493-psychic"							: "Psychic Arceus", // uknown gender
//	"0493-ice"								: "Ice Arceus", // uknown gender
//	"0493-dragon"							: "Dragon Arceus", // uknown gender
//	"0493-dark"								: "Dark Arceus", // uknown gender
}

//============================================================================
// EVOLUTION POKEDEX
//============================================================================
const _Regdex_e_400 =
{
}

//============================================================================
// REGIONAL POKEDEX
//============================================================================
const _Regdex_r_400 =
{
}
