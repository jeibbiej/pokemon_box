const IcoPathGoSi 	= "poke_icon/g02/1/";
const IcoPathCr		= "poke_icon/g02/1/";

const ImgWd_G02		= 16;
const MaxBox_G02	= 20;
const DivBox_G02	=  5;

//============================================================================
// NATIONAL POKEDEX
//============================================================================
const _Regdex_n_201 =
{
	"0001"			: "01", // "Bulbasaur",
	"0002"			: "01", // "Ivysaur",
	"0003"			: "01", // "Venusaur",
	"0004"			: "02", // "Charmander",
	"0005"			: "02", // "Charmeleon",
	"0006"			: "03", // "Charizard",
	"0007"			: "04", // "Squirtle",
	"0008"			: "04", // "Wartortle",
/**/"0009"			: "00", // "Blastoise",
	"0010"			: "z05", // "Caterpie",
	"0011"			: "z05", // "Metapod",
	"0012"			: "z06", // "Butterfree",
	"0013"			: "z05", // "Weedle",
	"0014"			: "z05", // "Kakuna",
	"0015"			: "z07", // "Beedrill",
/**/"0016"			: "00", // "Pidgey",
	"0017"			: "z08", // "Pidgeotto",
/**/"0018"			: "00", // "Pidgeot",
	"0019"			: "z09", // "Rattata",
	"0020"			: "z09", // "Raticate",
	"0021"			: "z08", // "Spearow",
/**/"0022"			: "00", // "Fearow",
/**/"0023"			: "00", // "Ekans",
/**/"0024"			: "00", // "Arbok",
/**/"0025"			: "00", // "Pikachu",
/**/"0026"			: "00", // "Raichu",
	"0027"			: "z12", // "Sandshrew",
/**/"0028"			: "00", // "Sandslash",
	"0029-f"		: "z09", // "Nidoran♀",
/**/"0030"			: "00", // "Nidorina",
/**/"0031"			: "00", // "Nidoqueen",
/**/"0032-m"		: "00", // "Nidoran♂",
/**/"0033"			: "00", // "Nidorino",
/**/"0034"			: "00", // "Nidoking",
/**/"0035"			: "00", // "Clefairy",
/**/"0036"			: "00", // "Clefable",
/**/"0037"			: "00", // "Vulpix",
/**/"0038"			: "00", // "Ninetales",
	"0039"			: "z14", // "Jigglypuff",
/**/"0040"			: "00", // "Wigglytuff",
	"0041"			: "z15", // "Zubat",
	"0042"			: "z15", // "Golbat",
	"0043"			: "z16", // "Oddish",
/**/"0044"			: "00", // "Gloom",
/**/"0045"			: "00", // "Vileplume",
	"0046"			: "z07", // "Paras",
/**/"0047"			: "00", // "Parasect",
	"0048"			: "z05", // "Venonat",
/**/"0049"			: "00", // "Venomoth",
/**/"0050"			: "00", // "Diglett",
/**/"0051"			: "00", // "Dugtrio",
/**/"0052"			: "00", // "Meowth",
/**/"0053"			: "00", // "Persian",
/**/"0054"			: "00", // "Psyduck",
/**/"0055"			: "00", // "Golduck",
/**/"0056"			: "00", // "Mankey",
/**/"0057"			: "00", // "Primeape",
/**/"0058"			: "00", // "Growlithe",
/**/"0059"			: "00", // "Arcanine",
	"0060"			: "z19", // "Poliwag",
	"0061"			: "z19", // "Poliwhirl",
/**/"0062"			: "00", // "Poliwrath",
	"0063"			: "z20", // "Abra",
/**/"0064"			: "00", // "Kadabra",
/**/"0065"			: "00", // "Alakazam",
	"0066"			: "z18", // "Machop",
/**/"0067"			: "00", // "Machoke",
/**/"0068"			: "00", // "Machamp",
	"0069"			: "z16", // "Bellsprout",
/**/"0070"			: "00", // "Weepinbell",
/**/"0071"			: "00", // "Victreebel",
	"0072"			: "z21", // "Tentacool",
	"0073"			: "z21", // "Tentacruel",
	"0074"			: "z22", // "Geodude",
	"0075"			: "z22", // "Graveler",
/**/"0076"			: "00", // "Golem",
/**/"0077"			: "00", // "Ponyta",
/**/"0078"			: "00", // "Rapidash",
	"0079"			: "z24", // "Slowpoke",
/**/"0080"			: "00", // "Slowbro",
/**/"0081"			: "00", // "Magnemite",
/**/"0082"			: "00", // "Magneton",
/**/"0083"			: "00", // "Farfetch'd",
/**/"0084"			: "00", // "Doduo",
/**/"0085"			: "00", // "Dodrio",
/**/"0086"			: "00", // "Seel",
/**/"0087"			: "00", // "Dewgong",
/**/"0088"			: "00", // "Grimer",
/**/"0089"			: "00", // "Muk",
/**/"0090"			: "00", // "Shellder",
/**/"0091"			: "00", // "Cloyster",
	"0092"			: "z29", // "Gastly",
/**/"0093"			: "00", // "Haunter",
/**/"0094"			: "00", // "Gengar",
	"0095"			: "z10", // "Onix",
	"0096"			: "z20", // "Drowzee",
/**/"0097"			: "00", // "Hypno",
	"0098"			: "z28", // "Krabby",
/**/"0099"			: "00", // "Kingler",
	"0100"			: "z25", // "Voltorb", // uknown gender
	"0101"			: "z25", // "Electrode", // uknown gender
/**/"0102"			: "00", // "Exeggcute",
/**/"0103"			: "00", // "Exeggutor",
/**/"0104"			: "00", // "Cubone",
/**/"0105"			: "00", // "Marowak",
/**/"0106"			: "00", // "Hitmonlee", // male only
/**/"0107"			: "00", // "Hitmonchan", // male only
	"0108"			: "z12", // "Lickitung",
	"0109"			: "z27", // "Koffing",
/**/"0110"			: "00", // "Weezing",
/**/"0111"			: "00", // "Rhyhorn",
/**/"0112"			: "00", // "Rhydon",
/**/"0113"			: "00", // "Chansey", // female only
/**/"0114"			: "00", // "Tangela",
/**/"0115"			: "00", // "Kangaskhan", // female only
/**/"0116"			: "00", // "Horsea",
/**/"0117"			: "00", // "Seadra",
	"0118"			: "z30", // "Goldeen",
/**/"0119"			: "00", // "Seaking",
/**/"0120"			: "00", // "Staryu", // uknown gender
/**/"0121"			: "00", // "Starmie", // uknown gender
/**/"0122"			: "00", // "Mr. Mime",
	"0123"			: "z07", // "Scyther",
	"0124"			: "z20", // "Jynx", // female only
/**/"0125"			: "00", // "Electabuzz",
/**/"0126"			: "00", // "Magmar",
	"0127"			: "z07", // "Pinsir",
	"0128"			: "z23", // "Tauros", // male only
	"0129"			: "z30", // "Magikarp",
	"0130"			: "z32", // "Gyarados",
/**/"0131"			: "00", // "Lapras",
	"0132"			: "z27", // "Ditto", // uknown gender
	"0133"			: "z09", // "Eevee",
/**/"0134"			: "00", // "Vaporeon",
/**/"0135"			: "00", // "Jolteon",
/**/"0136"			: "00", // "Flareon",
/**/"0137"			: "00", // "Porygon", // uknown gender
/**/"0138"			: "00", // "Omanyte",
/**/"0139"			: "00", // "Omastar",
/**/"0140"			: "00", // "Kabuto",
/**/"0141"			: "00", // "Kabutops",
/**/"0142"			: "00", // "Aerodactyl",
/**/"0143"			: "00", // "Snorlax",
/**/"0144"			: "00", // "Articuno", // uknown gender
/**/"0145"			: "00", // "Zapdos", // uknown gender
/**/"0146"			: "00", // "Moltres", // uknown gender
/**/"0147"			: "00", // "Dratini",
/**/"0148"			: "00", // "Dragonair",
/**/"0149"			: "00", // "Dragonite",
/**/"0150"			: "00", // "Mewtwo", // uknown gender
/**/"0151"			: "00", // "Mew", // uknown gender
	"0152"			: "z16", // "Chikorita",
/**/"0153"			: "00", // "Bayleef",
	"0154"			: "z16", // "Meganium",
	"0155"			: "z09", // "Cyndaquil",
/**/"0156"			: "00", // "Quilava",
/**/"0157"			: "00", // "Typhlosion",
	"0158"			: "z12", // "Totodile",
/**/"0159"			: "00", // "Croconaw",
	"0160"			: "z12", // "Feraligatr",
	"0161"			: "z09", // "Sentret",
/**/"0162"			: "00", // "Furret",
	"0163"			: "z08", // "Hoothoot",
	"0164"			: "z08", // "Noctowl",
/**/"0165"			: "00", // "Ledyba",
/**/"0166"			: "00", // "Ledian",
	"0167"			: "z07", // "Spinarak",
/**/"0168"			: "00", // "Ariados",
/**/"0169"			: "00", // "Crobat",
/**/"0170"			: "00", // "Chinchou",
/**/"0171"			: "00", // "Lanturn",
/**/"0172"			: "00", // "Pichu",
/**/"0173"			: "00", // "Cleffa",
/**/"0174"			: "00", // "Igglybuff",
	"0175"			: "z13", // "Togepi",
/**/"0176"			: "00", // "Togetic",
	"0177"			: "z08", // "Natu",
/**/"0178"			: "00", // "Xatu",
	"0179"			: "z09", // "Mareep",
	"0180"			: "z12", // "Flaaffy",
/**/"0181"			: "00", // "Ampharos",
/**/"0182"			: "00", // "Bellossom",
/**/"0183"			: "00", // "Marill",
/**/"0184"			: "00", // "Azumarill",
	"0185"			: "z34", // "Sudowoodo",
/**/"0186"			: "00", // "Politoed",
/**/"0187"			: "00", // "Hoppip",
/**/"0188"			: "00", // "Skiploom",
/**/"0189"			: "00", // "Jumpluff",
/**/"0190"			: "00", // "Aipom",
	"0191"			: "z16", // "Sunkern",
/**/"0192"			: "00", // "Sunflora",
/**/"0193"			: "00", // "Yanma",
	"0194"			: "z12", // "Wooper",
	"0195"			: "z12", // "Quagsire",
/**/"0196"			: "00", // "Espeon",
/**/"0197"			: "00", // "Umbreon",
/**/"0198"			: "00", // "Murkrow",
/**/"0199"			: "00", // "Slowking",
/**/"0200"			: "00", // "Misdreavus",
	"0201"			: "z35", // "Unown", // uknown gender
	"0201-angry"	: "z35", // "Unown Angry", // uknown gender
	"0201-bear"		: "z35", // "Unown Bear", // uknown gender
	"0201-chase"	: "z35", // "Unown Chase", // uknown gender
	"0201-direct"	: "z35", // "Unown Direct", // uknown gender
	"0201-engage"	: "z35", // "Unown Engage", // uknown gender
	"0201-find"		: "z35", // "Unown Find", // uknown gender
	"0201-give"		: "z35", // "Unown Give", // uknown gender
	"0201-help"		: "z35", // "Unown Help", // uknown gender
	"0201-increase"	: "z35", // "Unown Increase", // uknown gender
	"0201-join"		: "z35", // "Unown Join", // uknown gender
	"0201-keep"		: "z35", // "Unown Keep", // uknown gender
	"0201-laugh"	: "z35", // "Unown Laugh", // uknown gender
	"0201-make"		: "z35", // "Unown Make", // uknown gender
	"0201-nuzzle"	: "z35", // "Unown Nuzzle", // uknown gender
	"0201-observe"	: "z35", // "Unown Observe", // uknown gender
	"0201-perform"	: "z35", // "Unown Perform", // uknown gender
	"0201-quicken"	: "z35", // "Unown Quicken", // uknown gender
	"0201-reassure"	: "z35", // "Unown Reassure", // uknown gender
	"0201-search"	: "z35", // "Unown Search", // uknown gender
	"0201-tell"		: "z35", // "Unown Tell", // uknown gender
	"0201-undo"		: "z35", // "Unown Undo", // uknown gender
	"0201-vanish"	: "z35", // "Unown Vanish", // uknown gender
	"0201-want"		: "z35", // "Unown Want", // uknown gender
	"0201-xxxxx"	: "z35", // "Unown XXXXX", // uknown gender
	"0201-yield"	: "z35", // "Unown Yield", // uknown gender
	"0201-zoom"		: "z35", // "Unown Zoom", // uknown gender
/**/"0202"			: "00", // "Wobbuffet",
	"0203"			: "z23", // "Girafarig",
/**/"0204"			: "00", // "Pineco",
/**/"0205"			: "00", // "Forretress",
/**/"0206"			: "00", // "Dunsparce",
	"0207"			: "z07", // "Gligar",
/**/"0208"			: "00", // "Steelix",
	"0209"			: "z12", // "Snubbull",
/**/"0210"			: "00", // "Granbull",
	"0211"			: "z30", // "Qwilfish",
/**/"0212"			: "00", // "Scizor",
	"0213"			: "z07", // "Shuckle",
/**/"0214"			: "00", // "Heracross",
/**/"0215"			: "00", // "Sneasel",
	"0216"			: "z12", // "Teddiursa",
/**/"0217"			: "00", // "Ursaring",
/**/"0218"			: "00", // "Slugma",
/**/"0219"			: "00", // "Magcargo",
	"0220"			: "z23", // "Swinub",
/**/"0221"			: "00", // "Piloswine",
/**/"0222"			: "00", // "Corsola",
/**/"0223"			: "00", // "Remoraid",
/**/"0224"			: "00", // "Octillery",
/**/"0225"			: "00", // "Delibird",
	"0226"			: "z30", // "Mantine",
/**/"0227"			: "00", // "Skarmory",
/**/"0228"			: "00", // "Houndour",
/**/"0229"			: "00", // "Houndoom",
/**/"0230"			: "00", // "Kingdra",
/**/"0231"			: "00", // "Phanpy",
/**/"0232"			: "00", // "Donphan",
/**/"0233"			: "00", // "Porygon2", // uknown gender
	"0234"			: "z23", // "Stantler",
	"0235"			: "z12", // "Smeargle",
/**/"0236"			: "00", // "Tyrogue", // male only
/**/"0237"			: "00", // "Hitmontop", // male only
/**/"0238"			: "00", // "Smoochum", // female only
/**/"0239"			: "00", // "Elekid",
/**/"0240"			: "00", // "Magby",
	"0241"			: "z23", // "Miltank", // female only
/**/"0242"			: "00", // "Blissey", // female only
/**/"0243"			: "00", // "Raikou", // uknown gender
/**/"0244"			: "00", // "Entei", // uknown gender
/**/"0245"			: "00", // "Suicune", // uknown gender
/**/"0246"			: "00", // "Larvitar",
/**/"0247"			: "00", // "Pupitar",
/**/"0248"			: "00", // "Tyranitar",
/**/"0249"			: "00", // "Lugia", // uknown gender
/**/"0250"			: "00", // "Ho-Oh", // uknown gender
/**/"0251"			: "00", // "Celebi", // uknown gender
};

//============================================================================
// EVOLUTION POKEDEX
//============================================================================
const _Regdex_e_201 =
{
	"0001"			: "01", // "Bulbasaur",
	"0002"			: "01", // "Ivysaur",
	"0003"			: "01", // "Venusaur",
	"0004"			: "02", // "Charmander",
	"0005"			: "02", // "Charmeleon",
	"0006"			: "03", // "Charizard",
	"0007"			: "04", // "Squirtle",
	"0008"			: "04", // "Wartortle",
/**/"0009"			: "00", // "Blastoise",
	"0010"			: "z05", // "Caterpie",
	"0011"			: "z05", // "Metapod",
	"0012"			: "z06", // "Butterfree",
	"0013"			: "z05", // "Weedle",
	"0014"			: "z05", // "Kakuna",
	"0015"			: "z07", // "Beedrill",
/**/"0016"			: "00", // "Pidgey",
	"0017"			: "z08", // "Pidgeotto",
/**/"0018"			: "00", // "Pidgeot",
	"0019"			: "z09", // "Rattata",
	"0020"			: "z09", // "Raticate",
	"0021"			: "z08", // "Spearow",
/**/"0022"			: "00", // "Fearow",
/**/"0023"			: "00", // "Ekans",
/**/"0024"			: "00", // "Arbok",
/**/"0172"			: "00", // "Pichu",
/**/"0025"			: "00", // "Pikachu",
/**/"0026"			: "00", // "Raichu",
	"0027"			: "z12", // "Sandshrew",
/**/"0028"			: "00", // "Sandslash",
	"0029-f"		: "z09", // "Nidoran♀", SPOT (in-game trade)
/**/"0030"			: "00", // "Nidorina", TERRY (in-game trade)
/**/"0031"			: "00", // "Nidoqueen",
/**/"0032-m"		: "00", // "Nidoran♂",
/**/"0033"			: "00", // "Nidorino",
/**/"0034"			: "00", // "Nidoking",
/**/"0173"			: "00", // "Cleffa",
/**/"0035"			: "00", // "Clefairy",
/**/"0036"			: "00", // "Clefable",
/**/"0037"			: "00", // "Vulpix",
/**/"0038"			: "00", // "Ninetales",
/**/"0174"			: "00", // "Igglybuff",
	"0039"			: "z14", // "Jigglypuff",
/**/"0040"			: "00", // "Wigglytuff",
	"0041"			: "z15", // "Zubat",
	"0042"			: "z15", // "Golbat",
/**/"0169"			: "00", // "Crobat",
	"0043"			: "z16", // "Oddish",
/**/"0044"			: "00", // "Gloom",
/**/"0045"			: "00", // "Vileplume",
/**/"0182"			: "00", // "Bellossom",
	"0046"			: "z07", // "Paras",
/**/"0047"			: "00", // "Parasect",
	"0048"			: "z05", // "Venonat",
/**/"0049"			: "00", // "Venomoth",
/**/"0050"			: "00", // "Diglett",
/**/"0051"			: "00", // "Dugtrio",
/**/"0052"			: "00", // "Meowth",
/**/"0053"			: "00", // "Persian",
/**/"0054"			: "00", // "Psyduck",
/**/"0055"			: "00", // "Golduck",
/**/"0056"			: "00", // "Mankey",
/**/"0057"			: "00", // "Primeape",
/**/"0058"			: "00", // "Growlithe",
/**/"0059"			: "00", // "Arcanine",
	"0060"			: "z19", // "Poliwag",
	"0061"			: "z19", // "Poliwhirl",
/**/"0062"			: "00", // "Poliwrath",
/**/"0186"			: "00", // "Politoed",
	"0063"			: "z20", // "Abra",
/**/"0064"			: "00", // "Kadabra",
/**/"0065"			: "00", // "Alakazam",
	"0066"			: "z18", // "Machop",
/**/"0067"			: "00", // "Machoke",
/**/"0068"			: "00", // "Machamp",
	"0069"			: "z16", // "Bellsprout",
/**/"0070"			: "00", // "Weepinbell",
/**/"0071"			: "00", // "Victreebel",
	"0072"			: "z21", // "Tentacool",
	"0073"			: "z21", // "Tentacruel",
	"0074"			: "z22", // "Geodude",
	"0075"			: "z22", // "Graveler",
/**/"0076"			: "00", // "Golem",
/**/"0077"			: "00", // "Ponyta",
/**/"0078"			: "00", // "Rapidash",
	"0079"			: "z24", // "Slowpoke",
/**/"0080"			: "00", // "Slowbro",
/**/"0199"			: "00", // "Slowking",
/**/"0081"			: "00", // "Magnemite",
/**/"0082"			: "00", // "Magneton",
/**/"0083"			: "00", // "Farfetch'd", DUX (in-game trade)
/**/"0084"			: "00", // "Doduo",
/**/"0085"			: "00", // "Dodrio",
/**/"0086"			: "00", // "Seel", SAILOR (in-game trade)
/**/"0087"			: "00", // "Dewgong",
/**/"0088"			: "00", // "Grimer",
/**/"0089"			: "00", // "Muk",
/**/"0090"			: "00", // "Shellder",
/**/"0091"			: "00", // "Cloyster",
	"0092"			: "z29", // "Gastly",
/**/"0093"			: "00", // "Haunter",
/**/"0094"			: "00", // "Gengar",
	"0095"			: "z10", // "Onix",
/**/"0208"			: "00", // "Steelix",
	"0096"			: "z20", // "Drowzee",
/**/"0097"			: "00", // "Hypno",
	"0098"			: "z28", // "Krabby",
/**/"0099"			: "00", // "Kingler",
	"0100"			: "z25", // "Voltorb", // uknown gender
	"0101"			: "z25", // "Electrode", // uknown gender DORIS (in-game trade)
/**/"0102"			: "00", // "Exeggcute",
/**/"0103"			: "00", // "Exeggutor",
/**/"0104"			: "00", // "Cubone",
/**/"0105"			: "00", // "Marowak",
/**/"0236"			: "00", // "Tyrogue", // male only
/**/"0106"			: "00", // "Hitmonlee", // male only
/**/"0107"			: "00", // "Hitmonchan", // male only
/**/"0237"			: "00", // "Hitmontop", // male only
	"0108"			: "z12", // "Lickitung", MARC (in-game trade)
	"0109"			: "z27", // "Koffing",
/**/"0110"			: "00", // "Weezing",
/**/"0111"			: "00", // "Rhyhorn",
/**/"0112"			: "00", // "Rhydon",
/**/"0113"			: "00", // "Chansey", // female only
/**/"0242"			: "00", // "Blissey", // female only
/**/"0114"			: "00", // "Tangela", CRINKLES (in-game trade)
/**/"0115"			: "00", // "Kangaskhan", // female only
/**/"0116"			: "00", // "Horsea",
/**/"0117"			: "00", // "Seadra",
/**/"0230"			: "00", // "Kingdra",
	"0118"			: "z30", // "Goldeen",
/**/"0119"			: "00", // "Seaking",
/**/"0120"			: "00", // "Staryu", // uknown gender
/**/"0121"			: "00", // "Starmie", // uknown gender
/**/"0122"			: "00", // "Mr. Mime", MARCEL (in-game trade)
	"0123"			: "z07", // "Scyther",
/**/"0212"			: "00", // "Scizor",
/**/"0238"			: "00", // "Smoochum", // female only
	"0124"			: "z20", // "Jynx", // female only LOLA (in-game trade)
/**/"0239"			: "00", // "Elekid",
/**/"0125"			: "00", // "Electabuzz",
/**/"0240"			: "00", // "Magby",
/**/"0126"			: "00", // "Magmar",
	"0127"			: "z07", // "Pinsir",
	"0128"			: "z23", // "Tauros", // male only
	"0129"			: "z30", // "Magikarp",
	"0130"			: "z32", // "Gyarados",
/**/"0131"			: "00", // "Lapras",
	"0132"			: "z27", // "Ditto", // uknown gender
	"0133"			: "z09", // "Eevee",
/**/"0134"			: "00", // "Vaporeon",
/**/"0135"			: "00", // "Jolteon",
/**/"0136"			: "00", // "Flareon",
/**/"0196"			: "00", // "Espeon",
/**/"0197"			: "00", // "Umbreon",
/**/"0137"			: "00", // "Porygon", // uknown gender
/**/"0233"			: "00", // "Porygon2", // uknown gender
/**/"0138"			: "00", // "Omanyte",
/**/"0139"			: "00", // "Omastar",
/**/"0140"			: "00", // "Kabuto",
/**/"0141"			: "00", // "Kabutops",
/**/"0142"			: "00", // "Aerodactyl",
/**/"0143"			: "00", // "Snorlax",
/**/"0144"			: "00", // "Articuno", // uknown gender
/**/"0145"			: "00", // "Zapdos", // uknown gender
/**/"0146"			: "00", // "Moltres", // uknown gender
/**/"0147"			: "00", // "Dratini",
/**/"0148"			: "00", // "Dragonair",
/**/"0149"			: "00", // "Dragonite",
/**/"0150"			: "00", // "Mewtwo", // uknown gender
/**/"0151"			: "00", // "Mew", // uknown gender
	"0152"			: "z16", // "Chikorita",
/**/"0153"			: "00", // "Bayleef",
	"0154"			: "z16", // "Meganium",
	"0155"			: "z09", // "Cyndaquil",
/**/"0156"			: "00", // "Quilava",
/**/"0157"			: "00", // "Typhlosion",
	"0158"			: "z12", // "Totodile",
/**/"0159"			: "00", // "Croconaw",
	"0160"			: "z12", // "Feraligatr",
	"0161"			: "z09", // "Sentret",
/**/"0162"			: "00", // "Furret",
	"0163"			: "z08", // "Hoothoot",
	"0164"			: "z08", // "Noctowl",
/**/"0165"			: "00", // "Ledyba",
/**/"0166"			: "00", // "Ledian",
	"0167"			: "z07", // "Spinarak",
/**/"0168"			: "00", // "Ariados",
/**/"0170"			: "00", // "Chinchou",
/**/"0171"			: "00", // "Lanturn",
	"0175"			: "z13", // "Togepi",
/**/"0176"			: "00", // "Togetic",
	"0177"			: "z08", // "Natu",
/**/"0178"			: "00", // "Xatu",
	"0179"			: "z09", // "Mareep",
	"0180"			: "z12", // "Flaaffy",
/**/"0181"			: "00", // "Ampharos",
/**/"0183"			: "00", // "Marill",
/**/"0184"			: "00", // "Azumarill",
	"0185"			: "z34", // "Sudowoodo",
/**/"0187"			: "00", // "Hoppip",
/**/"0188"			: "00", // "Skiploom",
/**/"0189"			: "00", // "Jumpluff",
/**/"0190"			: "00", // "Aipom",
	"0191"			: "z16", // "Sunkern",
/**/"0192"			: "00", // "Sunflora",
/**/"0193"			: "00", // "Yanma",
	"0194"			: "z12", // "Wooper",
	"0195"			: "z12", // "Quagsire",
/**/"0198"			: "00", // "Murkrow",
/**/"0200"			: "00", // "Misdreavus",
	"0201"			: "z35", // "Unown", // uknown gender
	"0201-angry"	: "z35", // "Unown Angry", // uknown gender
	"0201-bear"		: "z35", // "Unown Bear", // uknown gender
	"0201-chase"	: "z35", // "Unown Chase", // uknown gender
	"0201-direct"	: "z35", // "Unown Direct", // uknown gender
	"0201-engage"	: "z35", // "Unown Engage", // uknown gender
	"0201-find"		: "z35", // "Unown Find", // uknown gender
	"0201-give"		: "z35", // "Unown Give", // uknown gender
	"0201-help"		: "z35", // "Unown Help", // uknown gender
	"0201-increase"	: "z35", // "Unown Increase", // uknown gender
	"0201-join"		: "z35", // "Unown Join", // uknown gender
	"0201-keep"		: "z35", // "Unown Keep", // uknown gender
	"0201-laugh"	: "z35", // "Unown Laugh", // uknown gender
	"0201-make"		: "z35", // "Unown Make", // uknown gender
	"0201-nuzzle"	: "z35", // "Unown Nuzzle", // uknown gender
	"0201-observe"	: "z35", // "Unown Observe", // uknown gender
	"0201-perform"	: "z35", // "Unown Perform", // uknown gender
	"0201-quicken"	: "z35", // "Unown Quicken", // uknown gender
	"0201-reassure"	: "z35", // "Unown Reassure", // uknown gender
	"0201-search"	: "z35", // "Unown Search", // uknown gender
	"0201-tell"		: "z35", // "Unown Tell", // uknown gender
	"0201-undo"		: "z35", // "Unown Undo", // uknown gender
	"0201-vanish"	: "z35", // "Unown Vanish", // uknown gender
	"0201-want"		: "z35", // "Unown Want", // uknown gender
	"0201-xxxxx"	: "z35", // "Unown XXXXX", // uknown gender
	"0201-yield"	: "z35", // "Unown Yield", // uknown gender
	"0201-zoom"		: "z35", // "Unown Zoom", // uknown gender
/**/"0202"			: "00", // "Wobbuffet",
	"0203"			: "z23", // "Girafarig",
/**/"0204"			: "00", // "Pineco",
/**/"0205"			: "00", // "Forretress",
/**/"0206"			: "00", // "Dunsparce",
	"0207"			: "z07", // "Gligar",
/**/"0209"			: "00", // "Snubbull",
/**/"0210"			: "00", // "Granbull",
	"0211"			: "z30", // "Qwilfish",
	"0213"			: "z07", // "Shuckle",
/**/"0214"			: "00", // "Heracross",
/**/"0215"			: "00", // "Sneasel",
	"0216"			: "z12", // "Teddiursa",
/**/"0217"			: "00", // "Ursaring",
/**/"0218"			: "00", // "Slugma",
/**/"0219"			: "00", // "Magcargo",
	"0220"			: "z23", // "Swinub",
/**/"0221"			: "00", // "Piloswine",
/**/"0222"			: "00", // "Corsola",
/**/"0223"			: "00", // "Remoraid",
/**/"0224"			: "00", // "Octillery",
/**/"0225"			: "00", // "Delibird",
	"0226"			: "z30", // "Mantine",
/**/"0227"			: "00", // "Skarmory",
/**/"0228"			: "00", // "Houndour",
/**/"0229"			: "00", // "Houndoom",
/**/"0231"			: "00", // "Phanpy",
/**/"0232"			: "00", // "Donphan",
	"0234"			: "z23", // "Stantler",
	"0235"			: "z12", // "Smeargle",
	"0241"			: "z23", // "Miltank", // female only
/**/"0243"			: "00", // "Raikou", // uknown gender
/**/"0244"			: "00", // "Entei", // uknown gender
/**/"0245"			: "00", // "Suicune", // uknown gender
/**/"0246"			: "00", // "Larvitar",
/**/"0247"			: "00", // "Pupitar",
/**/"0248"			: "00", // "Tyranitar",
/**/"0249"			: "00", // "Lugia", // uknown gender
/**/"0250"			: "00", // "Ho-Oh", // uknown gender
/**/"0251"			: "00", // "Celebi", // uknown gender
};

//============================================================================
// REGIONAL POKEDEX
//============================================================================
const _Regdex_r_201 =
{
/**/"0152"			: "00", // "Chikorita",
/**/"0153"			: "00", // "Bayleef",
/**/"0154"			: "00", // "Meganium",
/**/"0155"			: "00", // "Cyndaquil",
/**/"0156"			: "00", // "Quilava",
/**/"0157"			: "00", // "Typhlosion",
/**/"0158"			: "00", // "Totodile",
/**/"0159"			: "00", // "Croconaw",
/**/"0160"			: "00", // "Feraligatr",
/**/"0016"			: "00", // "Pidgey",
	"0017"			: "z08", // "Pidgeotto",
/**/"0018"			: "00", // "Pidgeot",
	"0021"			: "z08", // "Spearow",
/**/"0022"			: "00", // "Fearow",
	"0163"			: "z08", // "Hoothoot",
/**/"0164"			: "00", // "Noctowl",
	"0019"			: "z09", // "Rattata",
	"0020"			: "z09", // "Raticate",
	"0161"			: "z09", // "Sentret",
/**/"0162"			: "00", // "Furret",
/**/"0172"			: "00", // "Pichu",
/**/"0025"			: "00", // "Pikachu",
/**/"0026"			: "00", // "Raichu",
	"0010"			: "z05", // "Caterpie",
	"0011"			: "z05", // "Metapod",
	"0012"			: "z06", // "Butterfree",
	"0013"			: "z05", // "Weedle",
	"0014"			: "z05", // "Kakuna",
	"0015"			: "z07", // "Beedrill",
/**/"0165"			: "00", // "Ledyba",
/**/"0166"			: "00", // "Ledian",
	"0167"			: "z07", // "Spinarak",
/**/"0168"			: "00", // "Ariados",
	"0074"			: "z22", // "Geodude",
/**/"0075"			: "z22", // "Graveler",
/**/"0076"			: "00", // "Golem",
	"0041"			: "z15", // "Zubat",
	"0042"			: "z15", // "Golbat",
/**/"0169"			: "00", // "Crobat",
/**/"0173"			: "00", // "Cleffa",
/**/"0035"			: "00", // "Clefairy",
/**/"0036"			: "00", // "Clefable",
/**/"0174"			: "00", // "Igglybuff",
	"0039"			: "z14", // "Jigglypuff",
/**/"0040"			: "00", // "Wigglytuff",
	"0175"			: "z13", // "Togepi",
/**/"0176"			: "00", // "Togetic",
	"0027"			: "z12", // "Sandshrew",
/**/"0028"			: "00", // "Sandslash",
/**/"0023"			: "00", // "Ekans",
/**/"0024"			: "00", // "Arbok",
/**/"0206"			: "00", // "Dunsparce",
	"0179"			: "z09", // "Mareep",
	"0180"			: "z12", // "Flaaffy",
/**/"0181"			: "00", // "Ampharos",
	"0194"			: "z12", // "Wooper",
	"0195"			: "z12", // "Quagsire",
	"0092"			: "z29", // "Gastly",
/**/"0093"			: "00", // "Haunter",
/**/"0094"			: "00", // "Gengar",
	"0201"			: "z35", // "Unown", // uknown gender
	"0201-angry"	: "z35", // "Unown Angry", // uknown gender
	"0201-bear"		: "z35", // "Unown Bear", // uknown gender
	"0201-chase"	: "z35", // "Unown Chase", // uknown gender
	"0201-direct"	: "z35", // "Unown Direct", // uknown gender
	"0201-engage"	: "z35", // "Unown Engage", // uknown gender
	"0201-find"		: "z35", // "Unown Find", // uknown gender
	"0201-give"		: "z35", // "Unown Give", // uknown gender
	"0201-help"		: "z35", // "Unown Help", // uknown gender
	"0201-increase"	: "z35", // "Unown Increase", // uknown gender
	"0201-join"		: "z35", // "Unown Join", // uknown gender
	"0201-keep"		: "z35", // "Unown Keep", // uknown gender
	"0201-laugh"	: "z35", // "Unown Laugh", // uknown gender
	"0201-make"		: "z35", // "Unown Make", // uknown gender
	"0201-nuzzle"	: "z35", // "Unown Nuzzle", // uknown gender
	"0201-observe"	: "z35", // "Unown Observe", // uknown gender
	"0201-perform"	: "z35", // "Unown Perform", // uknown gender
	"0201-quicken"	: "z35", // "Unown Quicken", // uknown gender
	"0201-reassure"	: "z35", // "Unown Reassure", // uknown gender
	"0201-search"	: "z35", // "Unown Search", // uknown gender
	"0201-tell"		: "z35", // "Unown Tell", // uknown gender
	"0201-undo"		: "z35", // "Unown Undo", // uknown gender
	"0201-vanish"	: "z35", // "Unown Vanish", // uknown gender
	"0201-want"		: "z35", // "Unown Want", // uknown gender
	"0201-xxxxx"	: "z35", // "Unown XXXXX", // uknown gender
	"0201-yield"	: "z35", // "Unown Yield", // uknown gender
	"0201-zoom"		: "z35", // "Unown Zoom", // uknown gender
	"0095"			: "z10", // "Onix", ROCKY (in-game trade)
/**/"0208"			: "00", // "Steelix",
	"0069"			: "z16", // "Bellsprout",
/**/"0070"			: "00", // "Weepinbell",
/**/"0071"			: "00", // "Victreebel",
/**/"0187"			: "00", // "Hoppip",
/**/"0188"			: "00", // "Skiploom",
/**/"0189"			: "00", // "Jumpluff",
	"0046"			: "z07", // "Paras",
/**/"0047"			: "00", // "Parasect",
	"0060"			: "z19", // "Poliwag",
	"0061"			: "z19", // "Poliwhirl",
/**/"0062"			: "00", // "Poliwrath",
/**/"0186"			: "00", // "Politoed",
	"0129"			: "z30", // "Magikarp",
	"0130"			: "z32", // "Gyarados",
	"0118"			: "z30", // "Goldeen",
/**/"0119"			: "00", // "Seaking",
	"0079"			: "z24", // "Slowpoke",
/**/"0080"			: "00", // "Slowbro",
/**/"0199"			: "00", // "Slowking",
	"0043"			: "z16", // "Oddish",
/**/"0044"			: "00", // "Gloom",
/**/"0045"			: "00", // "Vileplume",
/**/"0182"			: "00", // "Bellossom",
	"0096"			: "z20", // "Drowzee",
/**/"0097"			: "00", // "Hypno",
	"0063"			: "z20", // "Abra",
/**/"0064"			: "00", // "Kadabra",
/**/"0065"			: "00", // "Alakazam",
	"0132"			: "z27", // "Ditto", // uknown gender
/**/"0204"			: "00", // "Pineco",
/**/"0205"			: "00", // "Forretress",
	"0029-f"		: "z09", // "Nidoran♀",
/**/"0030"			: "00", // "Nidorina",
/**/"0031"			: "00", // "Nidoqueen",
/**/"0032-m"		: "00", // "Nidoran♂",
/**/"0033"			: "00", // "Nidorino",
/**/"0034"			: "00", // "Nidoking",
/**/"0193"			: "00", // "Yanma",
/**/"0191"			: "00", // "Sunkern",
/**/"0192"			: "00", // "Sunflora",
/**/"0102"			: "00", // "Exeggcute",
/**/"0103"			: "00", // "Exeggutor",
	"0185"			: "z34", // "Sudowoodo",
/**/"0202"			: "00", // "Wobbuffet",
	"0048"			: "z05", // "Venonat",
/**/"0049"			: "00", // "Venomoth",
	"0123"			: "z07", // "Scyther",
/**/"0212"			: "00", // "Scizor",
/**/"0127"			: "00", // "Pinsir",
/**/"0214"			: "00", // "Heracross",
	"0109"			: "z27", // "Koffing",
/**/"0110"			: "00", // "Weezing",
/**/"0088"			: "00", // "Grimer",
/**/"0089"			: "00", // "Muk",
/**/"0081"			: "00", // "Magnemite",
/**/"0082"			: "00", // "Magneton",
	"0100"			: "z25", // "Voltorb", // uknown gender VOLTY (in-game trade)
	"0101"			: "z25", // "Electrode", // uknown gender
/**/"0190"			: "00", // "Aipom",
/**/"0209"			: "00", // "Snubbull",
/**/"0210"			: "00", // "Granbull",
/**/"0037"			: "00", // "Vulpix",
/**/"0038"			: "00", // "Ninetales",
/**/"0058"			: "00", // "Growlithe",
/**/"0059"			: "00", // "Arcanine",
	"0234"			: "z23", // "Stantler",
/**/"0183"			: "00", // "Marill",
/**/"0184"			: "00", // "Azumarill",
/**/"0050"			: "00", // "Diglett",
/**/"0051"			: "00", // "Dugtrio",
/**/"0056"			: "00", // "Mankey",
/**/"0057"			: "00", // "Primeape",
/**/"0052"			: "00", // "Meowth",
/**/"0053"			: "00", // "Persian",
/**/"0054"			: "00", // "Psyduck",
/**/"0055"			: "00", // "Golduck",
	"0066"			: "z18", // "Machop", MUSCLE (in-game trade)
/**/"0067"			: "00", // "Machoke",
/**/"0068"			: "00", // "Machamp",
/**/"0236"			: "00", // "Tyrogue", // male only
/**/"0106"			: "00", // "Hitmonlee", // male only
/**/"0107"			: "00", // "Hitmonchan", // male only
/**/"0237"			: "00", // "Hitmontop", // male only
/**/"0203"			: "00", // "Girafarig",
	"0128"			: "z23", // "Tauros", // male only
/**/"0241"			: "00", // "Miltank", // female only
/**/"0240"			: "00", // "Magby",
/**/"0126"			: "00", // "Magmar",
/**/"0238"			: "00", // "Smoochum", // female only
	"0124"			: "z20", // "Jynx", // female only
/**/"0239"			: "00", // "Elekid",
/**/"0125"			: "00", // "Electabuzz",
/**/"0122"			: "00", // "Mr. Mime",
/**/"0235"			: "00", // "Smeargle",
/**/"0083"			: "00", // "Farfetch'd",
/**/"0177"			: "00", // "Natu",
/**/"0178"			: "00", // "Xatu",
	"0211"			: "z30", // "Qwilfish",
	"0072"			: "z21", // "Tentacool",
	"0073"			: "z21", // "Tentacruel",
	"0098"			: "z28", // "Krabby",
/**/"0099"			: "00", // "Kingler",
/**/"0213"			: "00", // "Shuckle",
/**/"0120"			: "00", // "Staryu", // uknown gender
/**/"0121"			: "00", // "Starmie", // uknown gender
/**/"0090"			: "00", // "Shellder",
/**/"0091"			: "00", // "Cloyster",
/**/"0222"			: "00", // "Corsola",
/**/"0223"			: "00", // "Remoraid",
/**/"0224"			: "00", // "Octillery",
/**/"0170"			: "00", // "Chinchou",
/**/"0171"			: "00", // "Lanturn",
/**/"0086"			: "00", // "Seel",
/**/"0087"			: "00", // "Dewgong",
	"0108"			: "z12", // "Lickitung",
/**/"0114"			: "00", // "Tangela",
	"0133"			: "z09", // "Eevee",
/**/"0134"			: "00", // "Vaporeon",
/**/"0135"			: "00", // "Jolteon",
/**/"0136"			: "00", // "Flareon",
/**/"0196"			: "00", // "Espeon",
/**/"0197"			: "00", // "Umbreon",
/**/"0116"			: "00", // "Horsea",
/**/"0117"			: "00", // "Seadra",
/**/"0230"			: "00", // "Kingdra",
/**/"0207"			: "00", // "Gligar",
/**/"0225"			: "00", // "Delibird",
/**/"0220"			: "00", // "Swinub",
/**/"0221"			: "00", // "Piloswine",
	"0216"			: "z12", // "Teddiursa",
/**/"0217"			: "00", // "Ursaring",
/**/"0231"			: "00", // "Phanpy",
/**/"0232"			: "00", // "Donphan",
/**/"0226"			: "00", // "Mantine",
/**/"0227"			: "00", // "Skarmory",
/**/"0084"			: "00", // "Doduo",
/**/"0085"			: "00", // "Dodrio",
/**/"0077"			: "00", // "Ponyta",
/**/"0078"			: "00", // "Rapidash", RUNNY (in-game trade)
/**/"0104"			: "00", // "Cubone",
/**/"0105"			: "00", // "Marowak",
/**/"0115"			: "00", // "Kangaskhan", // female only
/**/"0111"			: "00", // "Rhyhorn",
/**/"0112"			: "00", // "Rhydon",
/**/"0198"			: "00", // "Murkrow",
/**/"0228"			: "00", // "Houndour",
/**/"0229"			: "00", // "Houndoom",
/**/"0218"			: "00", // "Slugma",
/**/"0219"			: "00", // "Magcargo",
/**/"0215"			: "00", // "Sneasel",
/**/"0200"			: "00", // "Misdreavus",
/**/"0137"			: "00", // "Porygon", // uknown gender
/**/"0233"			: "00", // "Porygon2", // uknown gender
/**/"0113"			: "00", // "Chansey", // female only
/**/"0242"			: "00", // "Blissey", // female only
/**/"0131"			: "00", // "Lapras",
/**/"0138"			: "00", // "Omanyte",
/**/"0139"			: "00", // "Omastar",
/**/"0140"			: "00", // "Kabuto",
/**/"0141"			: "00", // "Kabutops",
/**/"0142"			: "00", // "Aerodactyl", AEROY (in-game trade)
/**/"0143"			: "00", // "Snorlax",
	"0001"			: "01", // "Bulbasaur",
	"0002"			: "01", // "Ivysaur",
	"0003"			: "01", // "Venusaur",
	"0004"			: "02", // "Charmander",
	"0005"			: "02", // "Charmeleon",
	"0006"			: "03", // "Charizard",
	"0007"			: "04", // "Squirtle",
	"0008"			: "04", // "Wartortle",
/**/"0009"			: "00", // "Blastoise",
/**/"0144"			: "00", // "Articuno", // uknown gender
/**/"0145"			: "00", // "Zapdos", // uknown gender
/**/"0146"			: "00", // "Moltres", // uknown gender
/**/"0243"			: "00", // "Raikou", // uknown gender
/**/"0244"			: "00", // "Entei", // uknown gender
/**/"0245"			: "00", // "Suicune", // uknown gender
/**/"0147"			: "00", // "Dratini",
/**/"0148"			: "00", // "Dragonair",
/**/"0149"			: "00", // "Dragonite",
/**/"0246"			: "00", // "Larvitar",
/**/"0247"			: "00", // "Pupitar",
/**/"0248"			: "00", // "Tyranitar",
/**/"0249"			: "00", // "Lugia", // uknown gender
/**/"0250"			: "00", // "Ho-Oh", // uknown gender
/**/"0150"			: "00", // "Mewtwo", // uknown gender
/**/"0151"			: "00", // "Mew", // uknown gender
/**/"0251"			: "00", // "Celebi", // uknown gender
};
