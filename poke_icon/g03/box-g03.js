const IcoPathRuSa 	= "poke_icon/g03/1/";
const IcoPathFRLG	= "poke_icon/g03/1/";
const IcoPathEm		= "poke_icon/g03/1/";

const ImgWd_G03		= 32;
const MaxBox_G03	= 30;
const DivBox_G03	=  6;

//============================================================================
// NATIONAL POKEDEX
//============================================================================
const _Regdex_n_300 =
{
	"0001"				: "0001",				// "Bulbasaur",
	"0002"				: "0002",				// "Ivysaur",
	"0003"				: "0003",				// "Venusaur",
	"0004"				: "0004",				// "Charmander",
	"0005"				: "0005",				// "Charmeleon",
	"0006"				: "0006",				// "Charizard",
	"0007"				: "0007",				// "Squirtle",
	"0008"				: "0008",				// "Wartortle",
	"0009"				: "0009",				// "Blastoise",
	"0010"				: "0010",				// "Caterpie",
	"0011"				: "0011",				// "Metapod",
	"0012"				: "0012",				// "Butterfree",
	"0013"				: "0013",				// "Weedle",
	"0014"				: "0014",				// "Kakuna",
	"0015"				: "0015",				// "Beedrill",
	"0016"				: "0016",				// "Pidgey",
	"0017"				: "0017",				// "Pidgeotto",
	"0018"				: "0018",				// "Pidgeot",
	"0019"				: "0019",				// "Rattata",
	"0020"				: "0020",				// "Raticate",
	"0021"				: "0021",				// "Spearow",
	"0022"				: "0022",				// "Fearow",
	"0023"				: "0023",				// "Ekans",
	"0024"				: "0024",				// "Arbok",
	"0025"				: "0025",				// "Pikachu",
	"0026"				: "0026",				// "Raichu",
	"0027"				: "0027",				// "Sandshrew",
	"0028"				: "0028",				// "Sandslash",
	"0029-f"			: "0029-f",				// "Nidoran♀",
	"0030"				: "0030",				// "Nidorina",
	"0031"				: "0031",				// "Nidoqueen",
	"0032-m"			: "0032-m",				// "Nidoran♂",
	"0033"				: "0033",				// "Nidorino",
	"0034"				: "0034",				// "Nidoking",
	"0035"				: "0035",				// "Clefairy",
	"0036"				: "0036",				// "Clefable",
	"0037"				: "0037",				// "Vulpix",
	"0038"				: "0038",				// "Ninetales",
	"0039"				: "0039",				// "Jigglypuff",
	"0040"				: "0040",				// "Wigglytuff",
	"0041"				: "0041",				// "Zubat",
	"0042"				: "0042",				// "Golbat",
	"0043"				: "0043",				// "Oddish",
	"0044"				: "0044",				// "Gloom",
	"0045"				: "0045",				// "Vileplume",
	"0046"				: "0046",				// "Paras",
	"0047"				: "0047",				// "Parasect",
	"0048"				: "0048",				// "Venonat",
	"0049"				: "0049",				// "Venomoth",
	"0050"				: "0050",				// "Diglett",
	"0051"				: "0051",				// "Dugtrio",
	"0052"				: "0052",				// "Meowth",
	"0053"				: "0053",				// "Persian",
	"0054"				: "0054",				// "Psyduck",
	"0055"				: "0055",				// "Golduck",
	"0056"				: "0056",				// "Mankey",
	"0057"				: "0057",				// "Primeape",
	"0058"				: "0058",				// "Growlithe",
	"0059"				: "0059",				// "Arcanine",
	"0060"				: "0060",				// "Poliwag",
	"0061"				: "0061",				// "Poliwhirl",
	"0062"				: "0062",				// "Poliwrath",
	"0063"				: "0063",				// "Abra",
	"0064"				: "0064",				// "Kadabra",
	"0065"				: "0065",				// "Alakazam",
	"0066"				: "0066",				// "Machop",
	"0067"				: "0067",				// "Machoke",
	"0068"				: "0068",				// "Machamp",
	"0069"				: "0069",				// "Bellsprout",
	"0070"				: "0070",				// "Weepinbell",
	"0071"				: "0071",				// "Victreebel",
	"0072"				: "0072",				// "Tentacool",
	"0073"				: "0073",				// "Tentacruel",
	"0074"				: "0074",				// "Geodude",
	"0075"				: "0075",				// "Graveler",
	"0076"				: "0076",				// "Golem",
	"0077"				: "0077",				// "Ponyta",
	"0078"				: "0078",				// "Rapidash",
	"0079"				: "0079",				// "Slowpoke",
	"0080"				: "0080",				// "Slowbro",
	"0081"				: "0081",				// "Magnemite",
	"0082"				: "0082",				// "Magneton",
	"0083"				: "0083",				// "Farfetch'd",
	"0084"				: "0084",				// "Doduo",
	"0085"				: "0085",				// "Dodrio",
	"0086"				: "0086",				// "Seel",
	"0087"				: "0087",				// "Dewgong",
	"0088"				: "0088",				// "Grimer",
	"0089"				: "0089",				// "Muk",
	"0090"				: "0090",				// "Shellder",
	"0091"				: "0091",				// "Cloyster",
	"0092"				: "0092",				// "Gastly",
	"0093"				: "0093",				// "Haunter",
	"0094"				: "0094",				// "Gengar",
	"0095"				: "0095",				// "Onix",
	"0096"				: "0096",				// "Drowzee",
	"0097"				: "0097",				// "Hypno",
	"0098"				: "0098",				// "Krabby",
	"0099"				: "0099",				// "Kingler",
	"0100"				: "0100",				// "Voltorb", // uknown gender
	"0101"				: "0101",				// "Electrode", // uknown gender
	"0102"				: "0102",				// "Exeggcute",
	"0103"				: "0103",				// "Exeggutor",
	"0104"				: "0104",				// "Cubone",
	"0105"				: "0105",				// "Marowak",
	"0106"				: "0106",				// "Hitmonlee", // male only
	"0107"				: "0107",				// "Hitmonchan", // male only
	"0108"				: "0108",				// "Lickitung",
	"0109"				: "0109",				// "Koffing",
	"0110"				: "0110",				// "Weezing",
	"0111"				: "0111",				// "Rhyhorn",
	"0112"				: "0112",				// "Rhydon",
	"0113"				: "0113",				// "Chansey", // female only
	"0114"				: "0114",				// "Tangela",
	"0115"				: "0115",				// "Kangaskhan", // female only
	"0116"				: "0116",				// "Horsea",
	"0117"				: "0117",				// "Seadra",
	"0118"				: "0118",				// "Goldeen",
	"0119"				: "0119",				// "Seaking",
	"0120"				: "0120",				// "Staryu", // uknown gender
	"0121"				: "0121",				// "Starmie", // uknown gender
	"0122"				: "0122",				// "Mr. Mime",
	"0123"				: "0123",				// "Scyther",
	"0124"				: "0124",				// "Jynx", // female only
	"0125"				: "0125",				// "Electabuzz",
	"0126"				: "0126",				// "Magmar",
	"0127"				: "0127",				// "Pinsir",
	"0128"				: "0128",				// "Tauros", // male only
	"0129"				: "0129",				// "Magikarp",
	"0130"				: "0130",				// "Gyarados",
	"0131"				: "0131",				// "Lapras",
	"0132"				: "0132",				// "Ditto", // uknown gender
	"0133"				: "0133",				// "Eevee",
	"0134"				: "0134",				// "Vaporeon",
	"0135"				: "0135",				// "Jolteon",
	"0136"				: "0136",				// "Flareon",
	"0137"				: "0137",				// "Porygon", // uknown gender
	"0138"				: "0138",				// "Omanyte",
	"0139"				: "0139",				// "Omastar",
	"0140"				: "0140",				// "Kabuto",
	"0141"				: "0141",				// "Kabutops",
	"0142"				: "0142",				// "Aerodactyl",
	"0143"				: "0143",				// "Snorlax",
	"0144"				: "0144",				// "Articuno", // uknown gender
	"0145"				: "0145",				// "Zapdos", // uknown gender
	"0146"				: "0146",				// "Moltres", // uknown gender
	"0147"				: "0147",				// "Dratini",
	"0148"				: "0148",				// "Dragonair",
	"0149"				: "0149",				// "Dragonite",
	"0150"				: "0150",				// "Mewtwo", // uknown gender
	"0151"				: "0151",				// "Mew", // uknown gender
	"0152"				: "0152",				// "Chikorita",
	"0153"				: "0153",				// "Bayleef",
	"0154"				: "0154",				// "Meganium",
	"0155"				: "0155",				// "Cyndaquil",
	"0156"				: "0156",				// "Quilava",
	"0157"				: "0157",				// "Typhlosion",
	"0158"				: "0158",				// "Totodile",
	"0159"				: "0159",				// "Croconaw",
	"0160"				: "0160",				// "Feraligatr",
	"0161"				: "0161",				// "Sentret",
	"0162"				: "0162",				// "Furret",
	"0163"				: "0163",				// "Hoothoot",
	"0164"				: "0164",				// "Noctowl",
	"0165"				: "0165",				// "Ledyba",
	"0166"				: "0166",				// "Ledian",
	"0167"				: "0167",				// "Spinarak",
	"0168"				: "0168",				// "Ariados",
	"0169"				: "0169",				// "Crobat",
	"0170"				: "0170",				// "Chinchou",
	"0171"				: "0171",				// "Lanturn",
	"0172"				: "0172",				// "Pichu",
	"0173"				: "0173",				// "Cleffa",
	"0174"				: "0174",				// "Igglybuff",
	"0175"				: "0175",				// "Togepi",
	"0176"				: "0176",				// "Togetic",
	"0177"				: "0177",				// "Natu",
	"0178"				: "0178",				// "Xatu",
	"0179"				: "0179",				// "Mareep",
	"0180"				: "0180",				// "Flaaffy",
	"0181"				: "0181",				// "Ampharos",
	"0182"				: "0182",				// "Bellossom",
	"0183"				: "0183",				// "Marill",
	"0184"				: "0184",				// "Azumarill",
	"0185"				: "0185",				// "Sudowoodo",
	"0186"				: "0186",				// "Politoed",
	"0187"				: "0187",				// "Hoppip",
	"0188"				: "0188",				// "Skiploom",
	"0189"				: "0189",				// "Jumpluff",
	"0190"				: "0190",				// "Aipom",
	"0191"				: "0191",				// "Sunkern",
	"0192"				: "0192",				// "Sunflora",
	"0193"				: "0193",				// "Yanma",
	"0194"				: "0194",				// "Wooper",
	"0195"				: "0195",				// "Quagsire",
	"0196"				: "0196",				// "Espeon",
	"0197"				: "0197",				// "Umbreon",
	"0198"				: "0198",				// "Murkrow",
	"0199"				: "0199",				// "Slowking",
	"0200"				: "0200",				// "Misdreavus",
//	"0201"				: "0201",				// "Unown", // uknown gender
//	"0201-angry"		: "0201-angry",			// "Unown Angry", // uknown gender
	"0201-anger"		: "0201-anger",			// "Unown Angry", // uknown gender
	"0201-bear"			: "0201-bear",			// "Unown Bear", // uknown gender
	"0201-chase"		: "0201-chase",			// "Unown Chase", // uknown gender
	"0201-direct"		: "0201-direct",		// "Unown Direct", // uknown gender
	"0201-engage"		: "0201-engage",		// "Unown Engage", // uknown gender
	"0201-find"			: "0201-find",			// "Unown Find", // uknown gender
	"0201-give"			: "0201-give",			// "Unown Give", // uknown gender
	"0201-help"			: "0201-help",			// "Unown Help", // uknown gender
	"0201-increase"		: "0201-increase",		// "Unown Increase", // uknown gender
	"0201-join"			: "0201-join",			// "Unown Join", // uknown gender
	"0201-keep"			: "0201-keep",			// "Unown Keep", // uknown gender
	"0201-laugh"		: "0201-laugh",			// "Unown Laugh", // uknown gender
	"0201-make"			: "0201-make",			// "Unown Make", // uknown gender
	"0201-nuzzle"		: "0201-nuzzle",		// "Unown Nuzzle", // uknown gender
	"0201-observe"		: "0201-observe",		// "Unown Observe", // uknown gender
	"0201-perform"		: "0201-perform",		// "Unown Perform", // uknown gender
	"0201-quicken"		: "0201-quicken",		// "Unown Quicken", // uknown gender
	"0201-reassure"		: "0201-reassure",		// "Unown Reassure", // uknown gender
	"0201-search"		: "0201-search",		// "Unown Search", // uknown gender
	"0201-tell"			: "0201-tell",			// "Unown Tell", // uknown gender
	"0201-undo"			: "0201-undo",			// "Unown Undo", // uknown gender
	"0201-vanish"		: "0201-vanish",		// "Unown Vanish", // uknown gender
	"0201-want"			: "0201-want",			// "Unown Want", // uknown gender
	"0201-xxxxx"		: "0201-xxxxx",			// "Unown XXXXX", // uknown gender
	"0201-yield"		: "0201-yield",			// "Unown Yield", // uknown gender
	"0201-zoom"			: "0201-zoom",			// "Unown Zoom", // uknown gender
	"0201-exclamation"	: "0201-exclamation",	// "Unown !!!!!", // uknown gender
	"0201-question"		: "0201-question",		// "Unown ?????", // uknown gender
	"0202"				: "0202",				// "Wobbuffet",
	"0203"				: "0203",				// "Girafarig",
	"0204"				: "0204",				// "Pineco",
	"0205"				: "0205",				// "Forretress",
	"0206"				: "0206",				// "Dunsparce",
	"0207"				: "0207",				// "Gligar",
	"0208"				: "0208",				// "Steelix",
	"0209"				: "0209",				// "Snubbull",
	"0210"				: "0210",				// "Granbull",
	"0211"				: "0211",				// "Qwilfish",
	"0212"				: "0212",				// "Scizor",
	"0213"				: "0213",				// "Shuckle",
	"0214"				: "0214",				// "Heracross",
	"0215"				: "0215",				// "Sneasel",
	"0216"				: "0216",				// "Teddiursa",
	"0217"				: "0217",				// "Ursaring",
	"0218"				: "0218",				// "Slugma",
	"0219"				: "0219",				// "Magcargo",
	"0220"				: "0220",				// "Swinub",
	"0221"				: "0221",				// "Piloswine",
	"0222"				: "0222",				// "Corsola",
	"0223"				: "0223",				// "Remoraid",
	"0224"				: "0224",				// "Octillery",
	"0225"				: "0225",				// "Delibird",
	"0226"				: "0226",				// "Mantine",
	"0227"				: "0227",				// "Skarmory",
	"0228"				: "0228",				// "Houndour",
	"0229"				: "0229",				// "Houndoom",
	"0230"				: "0230",				// "Kingdra",
	"0231"				: "0231",				// "Phanpy",
	"0232"				: "0232",				// "Donphan",
	"0233"				: "0233",				// "Porygon2", // uknown gender
	"0234"				: "0234",				// "Stantler",
	"0235"				: "0235",				// "Smeargle",
	"0236"				: "0236",				// "Tyrogue", // male only
	"0237"				: "0237",				// "Hitmontop", // male only
	"0238"				: "0238",				// "Smoochum", // female only
	"0239"				: "0239",				// "Elekid",
	"0240"				: "0240",				// "Magby",
	"0241"				: "0241",				// "Miltank", // female only
	"0242"				: "0242",				// "Blissey", // female only
	"0243"				: "0243",				// "Raikou", // uknown gender
	"0244"				: "0244",				// "Entei", // uknown gender
	"0245"				: "0245",				// "Suicune", // uknown gender
	"0246"				: "0246",				// "Larvitar",
	"0247"				: "0247",				// "Pupitar",
	"0248"				: "0248",				// "Tyranitar",
	"0249"				: "0249",				// "Lugia", // uknown gender
	"0250"				: "0250",				// "Ho-Oh", // uknown gender
	"0251"				: "0251",				// "Celebi", // uknown gender
	"0252"				: "0252",				// "Treecko",
	"0253"				: "0253",				// "Grovyle",
	"0254"				: "0254",				// "Sceptile",
	"0255"				: "0255",				// "Torchic",
	"0256"				: "0256",				// "Combusken",
	"0257"				: "0257",				// "Blaziken",
	"0258"				: "0258",				// "Mudkip",
	"0259"				: "0259",				// "Marshtomp",
	"0260"				: "0260",				// "Swampert",
	"0261"				: "0261",				// "Poochyena",
	"0262"				: "0262",				// "Mightyena",
	"0263"				: "0263",				// "Zigzagoon",
	"0264"				: "0264",				// "Linoone",
	"0265"				: "0265",				// "Wurmple",
	"0266"				: "0266",				// "Silcoon",
	"0267"				: "0267",				// "Beautifly",
	"0268"				: "0268",				// "Cascoon",
	"0269"				: "0269",				// "Dustox",
	"0270"				: "0270",				// "Lotad",
	"0271"				: "0271",				// "Lombre",
	"0272"				: "0272",				// "Ludicolo",
	"0273"				: "0273",				// "Seedot",
	"0274"				: "0274",				// "Nuzleaf",
	"0275"				: "0275",				// "Shiftry",
	"0276"				: "0276",				// "Taillow",
	"0277"				: "0277",				// "Swellow",
	"0278"				: "0278",				// "Wingull",
	"0279"				: "0279",				// "Pelipper",
	"0280"				: "0280",				// "Ralts",
	"0281"				: "0281",				// "Kirlia",
	"0282"				: "0282",				// "Gardevoir",
	"0283"				: "0283",				// "Surskit",
	"0284"				: "0284",				// "Masquerain",
	"0285"				: "0285",				// "Shroomish",
	"0286"				: "0286",				// "Breloom",
	"0287"				: "0287",				// "Slakoth",
	"0288"				: "0288",				// "Vigoroth",
	"0289"				: "0289",				// "Slaking",
	"0290"				: "0290",				// "Nincada",
	"0291"				: "0291",				// "Ninjask",
	"0292"				: "0292",				// "Shedinja", // uknown gender
	"0293"				: "0293",				// "Whismur",
	"0294"				: "0294",				// "Loudred",
	"0295"				: "0295",				// "Exploud",
	"0296"				: "0296",				// "Makuhita",
	"0297"				: "0297",				// "Hariyama",
	"0298"				: "0298",				// "Azurill",
	"0299"				: "0299",				// "Nosepass",
	"0300"				: "0300",				// "Skitty",
	"0301"				: "0301",				// "Delcatty",
	"0302"				: "0302",				// "Sableye",
	"0303"				: "0303",				// "Mawile",
	"0304"				: "0304",				// "Aron",
	"0305"				: "0305",				// "Lairon",
	"0306"				: "0306",				// "Aggron",
	"0307"				: "0307",				// "Meditite",
	"0308"				: "0308",				// "Medicham",
	"0309"				: "0309",				// "Electrike",
	"0310"				: "0310",				// "Manectric",
	"0311"				: "0311",				// "Plusle",
	"0312"				: "0312",				// "Minun",
	"0313"				: "0313",				// "Volbeat", // male only
	"0314"				: "0314",				// "Illumise", // female only
	"0315"				: "0315",				// "Roselia",
	"0316"				: "0316",				// "Gulpin",
	"0317"				: "0317",				// "Swalot",
	"0318"				: "0318",				// "Carvanha",
	"0319"				: "0319",				// "Sharpedo",
	"0320"				: "0320",				// "Wailmer",
	"0321"				: "0321",				// "Wailord",
	"0322"				: "0322",				// "Numel",
	"0323"				: "0323",				// "Camerupt",
	"0324"				: "0324",				// "Torkoal",
	"0325"				: "0325",				// "Spoink",
	"0326"				: "0326",				// "Grumpig",
	"0327"				: "0327",				// "Spinda",
	"0328"				: "0328",				// "Trapinch",
	"0329"				: "0329",				// "Vibrava",
	"0330"				: "0330",				// "Flygon",
	"0331"				: "0331",				// "Cacnea",
	"0332"				: "0332",				// "Cacturne",
	"0333"				: "0333",				// "Swablu",
	"0334"				: "0334",				// "Altaria",
	"0335"				: "0335",				// "Zangoose",
	"0336"				: "0336",				// "Seviper",
	"0337"				: "0337",				// "Lunatone", // uknown gender
	"0338"				: "0338",				// "Solrock", // uknown gender
	"0339"				: "0339",				// "Barboach",
	"0340"				: "0340",				// "Whiscash",
	"0341"				: "0341",				// "Corphish",
	"0342"				: "0342",				// "Crawdaunt",
	"0343"				: "0343",				// "Baltoy", // uknown gender
	"0344"				: "0344",				// "Claydol", // uknown gender
	"0345"				: "0345",				// "Lileep",
	"0346"				: "0346",				// "Cradily",
	"0347"				: "0347",				// "Anorith",
	"0348"				: "0348",				// "Armaldo",
	"0349"				: "0349",				// "Feebas",
	"0350"				: "0350",				// "Milotic",
	"0351"				: "0351",				// "Castform",
//	"0351-sunny"		: "0351-sunny",			// "Sunny Castform",
//	"0351-rainy"		: "0351-rainy",			// "Rainy Castform",
//	"0351-snowy"		: "0351-snowy",			// "Snowy Castform",
	"0352"				: "0352",				// "Kecleon",
	"0353"				: "0353",				// "Shuppet",
	"0354"				: "0354",				// "Banette",
	"0355"				: "0355",				// "Duskull",
	"0356"				: "0356",				// "Dusclops",
	"0357"				: "0357",				// "Tropius",
	"0358"				: "0358",				// "Chimecho",
	"0359"				: "0359",				// "Absol",
	"0360"				: "0360",				// "Wynaut",
	"0361"				: "0361",				// "Snorunt",
	"0362"				: "0362",				// "Glalie",
	"0363"				: "0363",				// "Spheal",
	"0364"				: "0364",				// "Sealeo",
	"0365"				: "0365",				// "Walrein",
	"0366"				: "0366",				// "Clamperl",
	"0367"				: "0367",				// "Huntail",
	"0368"				: "0368",				// "Gorebyss",
	"0369"				: "0369",				// "Relicanth",
	"0370"				: "0370",				// "Luvdisc",
	"0371"				: "0371",				// "Bagon",
	"0372"				: "0372",				// "Shelgon",
	"0373"				: "0373",				// "Salamence",
	"0374"				: "0374",				// "Beldum", // uknown gender
	"0375"				: "0375",				// "Metang", // uknown gender
	"0376"				: "0376",				// "Metagross", // uknown gender
	"0377"				: "0377",				// "Regirock", // uknown gender
	"0378"				: "0378",				// "Regice", // uknown gender
	"0379"				: "0379",				// "Registeel", // uknown gender
	"0380"				: "0380",				// "Latias", // female only
	"0381"				: "0381",				// "Latios", // male only
	"0382"				: "0382",				// "Kyogre", // uknown gender
	"0383"				: "0383",				// "Groudon", // uknown gender
	"0384"				: "0384",				// "Rayquaza", // uknown gender
	"0385"				: "0385",				// "Jirachi", // uknown gender
//	"0386"				: "0386",				// "Deoxys", // uknown gender
//	"0386-attack"		: "0386-attack",		// "Attack Deoxys", // uknown gender
//	"0386-defense"		: "0386-defense",		// "Defense Deoxys", // uknown gender
//	"0386-speed"		: "0386-speed",			// "Speed Deoxys", // uknown gender
}

const _Regdex_n_301 =
{
	..._Regdex_n_300,
	"0386"				: "0386",				// "Deoxys", // uknown gender
}

const _Regdex_n_302 =
{
	..._Regdex_n_300,
	"0386-attack"		: "0386-attack",		// "Attack Deoxys", // uknown gender
}

const _Regdex_n_303 =
{
	..._Regdex_n_300,
	"0386-defense"		: "0386-defense",		// "Defense Deoxys", // uknown gender
}

const _Regdex_n_304 =
{
	..._Regdex_n_300,
	"0386-speed"		: "0386-speed",			// "Speed Deoxys", // uknown gender
}