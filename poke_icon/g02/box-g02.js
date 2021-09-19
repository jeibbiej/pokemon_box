const IcoPathGoSi 	= "poke_icon/g02/1/";
const IcoPathCr		= "poke_icon/g02/1/";

const ImgWd_G02		= 16;
const BoxCap_G02	= 20;
const MaxBox_G02	= 14;
const DivBox_G02	=  5;

//============================================================================
// NATIONAL POKEDEX
//============================================================================
const _Regdex_n_201 =
{
	"0001"         : {ico: "01",  flags: 0},                     // "Bulbasaur",
	"0002"         : {ico: "01",  flags: 0},                     // "Ivysaur",
	"0003"         : {ico: "01",  flags: 0},                     // "Venusaur",
	"0004"         : {ico: "02",  flags: 0},                     // "Charmander",
	"0005"         : {ico: "02",  flags: 0},                     // "Charmeleon",
	"0006"         : {ico: "03",  flags: 0},                     // "Charizard",
	"0007"         : {ico: "04",  flags: 0},                     // "Squirtle",
	"0008"         : {ico: "04",  flags: 0},                     // "Wartortle",
/**/"0009"         : {ico: "00",  flags: 0},                     // "Blastoise",
	"0010"         : {ico: "z05", flags: 0},                     // "Caterpie",
	"0011"         : {ico: "z05", flags: 0},                     // "Metapod",
	"0012"         : {ico: "z06", flags: 0},                     // "Butterfree",
	"0013"         : {ico: "z05", flags: 0},                     // "Weedle",
	"0014"         : {ico: "z05", flags: 0},                     // "Kakuna",
	"0015"         : {ico: "z07", flags: 0},                     // "Beedrill",
/**/"0016"         : {ico: "00",  flags: 0},                     // "Pidgey",
	"0017"         : {ico: "z08", flags: 0},                     // "Pidgeotto",
/**/"0018"         : {ico: "00",  flags: 0},                     // "Pidgeot",
	"0019"         : {ico: "z09", flags: 0},                     // "Rattata",
	"0020"         : {ico: "z09", flags: 0},                     // "Raticate",
	"0021"         : {ico: "z08", flags: 0},                     // "Spearow",
/**/"0022"         : {ico: "00",  flags: 0},                     // "Fearow",
/**/"0023"         : {ico: "00",  flags: 0},                     // "Ekans",
/**/"0024"         : {ico: "00",  flags: 0},                     // "Arbok",
/**/"0025"         : {ico: "00",  flags: 0},                     // "Pikachu",
/**/"0026"         : {ico: "00",  flags: 0},                     // "Raichu",
	"0027"         : {ico: "z12", flags: 0},                     // "Sandshrew",
/**/"0028"         : {ico: "00",  flags: 0},                     // "Sandslash",
	"0029"         : {ico: "z09", flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran",
	"0029-f"       : {ico: "z09", flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♀",
/**/"0030"         : {ico: "00",  flags: 0},                     // "Nidorina",
/**/"0031"         : {ico: "00",  flags: 0},                     // "Nidoqueen",
	"0032"         : {ico: "00",  flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran",
/**/"0032-m"       : {ico: "00",  flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♂",
/**/"0033"         : {ico: "00",  flags: 0},                     // "Nidorino",
/**/"0034"         : {ico: "00",  flags: 0},                     // "Nidoking",
/**/"0035"         : {ico: "00",  flags: 0},                     // "Clefairy",
/**/"0036"         : {ico: "00",  flags: 0},                     // "Clefable",
/**/"0037"         : {ico: "00",  flags: 0},                     // "Vulpix",
/**/"0038"         : {ico: "00",  flags: 0},                     // "Ninetales",
	"0039"         : {ico: "z14", flags: 0},                     // "Jigglypuff",
/**/"0040"         : {ico: "00",  flags: 0},                     // "Wigglytuff",
	"0041"         : {ico: "z15", flags: 0},                     // "Zubat",
	"0042"         : {ico: "z15", flags: 0},                     // "Golbat",
	"0043"         : {ico: "z16", flags: 0},                     // "Oddish",
/**/"0044"         : {ico: "00",  flags: 0},                     // "Gloom",
/**/"0045"         : {ico: "00",  flags: 0},                     // "Vileplume",
	"0046"         : {ico: "z07", flags: 0},                     // "Paras",
/**/"0047"         : {ico: "00",  flags: 0},                     // "Parasect",
	"0048"         : {ico: "z05", flags: 0},                     // "Venonat",
/**/"0049"         : {ico: "00",  flags: 0},                     // "Venomoth",
/**/"0050"         : {ico: "00",  flags: 0},                     // "Diglett",
/**/"0051"         : {ico: "00",  flags: 0},                     // "Dugtrio",
/**/"0052"         : {ico: "00",  flags: 0},                     // "Meowth",
/**/"0053"         : {ico: "00",  flags: 0},                     // "Persian",
/**/"0054"         : {ico: "00",  flags: 0},                     // "Psyduck",
/**/"0055"         : {ico: "00",  flags: 0},                     // "Golduck",
/**/"0056"         : {ico: "00",  flags: 0},                     // "Mankey",
/**/"0057"         : {ico: "00",  flags: 0},                     // "Primeape",
/**/"0058"         : {ico: "00",  flags: 0},                     // "Growlithe",
/**/"0059"         : {ico: "00",  flags: 0},                     // "Arcanine",
	"0060"         : {ico: "z19", flags: 0},                     // "Poliwag",
	"0061"         : {ico: "z19", flags: 0},                     // "Poliwhirl",
/**/"0062"         : {ico: "00",  flags: 0},                     // "Poliwrath",
	"0063"         : {ico: "z20", flags: 0},                     // "Abra",
/**/"0064"         : {ico: "00",  flags: 0},                     // "Kadabra",
/**/"0065"         : {ico: "00",  flags: 0},                     // "Alakazam",
	"0066"         : {ico: "z18", flags: 0},                     // "Machop",
/**/"0067"         : {ico: "00",  flags: 0},                     // "Machoke",
/**/"0068"         : {ico: "00",  flags: 0},                     // "Machamp",
	"0069"         : {ico: "z16", flags: 0},                     // "Bellsprout",
/**/"0070"         : {ico: "00",  flags: 0},                     // "Weepinbell",
/**/"0071"         : {ico: "00",  flags: 0},                     // "Victreebel",
	"0072"         : {ico: "z21", flags: 0},                     // "Tentacool",
	"0073"         : {ico: "z21", flags: 0},                     // "Tentacruel",
	"0074"         : {ico: "z22", flags: 0},                     // "Geodude",
	"0075"         : {ico: "z22", flags: 0},                     // "Graveler",
/**/"0076"         : {ico: "00",  flags: 0},                     // "Golem",
/**/"0077"         : {ico: "00",  flags: 0},                     // "Ponyta",
/**/"0078"         : {ico: "00",  flags: 0},                     // "Rapidash",
	"0079"         : {ico: "z24", flags: 0},                     // "Slowpoke",
/**/"0080"         : {ico: "00",  flags: 0},                     // "Slowbro",
/**/"0081"         : {ico: "00",  flags: 0},                     // "Magnemite",
/**/"0082"         : {ico: "00",  flags: 0},                     // "Magneton",
/**/"0083"         : {ico: "00",  flags: 0},                     // "Farfetch'd",
/**/"0084"         : {ico: "00",  flags: 0},                     // "Doduo",
/**/"0085"         : {ico: "00",  flags: 0},                     // "Dodrio",
/**/"0086"         : {ico: "00",  flags: 0},                     // "Seel",
/**/"0087"         : {ico: "00",  flags: 0},                     // "Dewgong",
/**/"0088"         : {ico: "00",  flags: 0},                     // "Grimer",
/**/"0089"         : {ico: "00",  flags: 0},                     // "Muk",
/**/"0090"         : {ico: "00",  flags: 0},                     // "Shellder",
/**/"0091"         : {ico: "00",  flags: 0},                     // "Cloyster",
	"0092"         : {ico: "z29", flags: 0},                     // "Gastly",
/**/"0093"         : {ico: "00",  flags: 0},                     // "Haunter",
/**/"0094"         : {ico: "00",  flags: 0},                     // "Gengar",
	"0095"         : {ico: "z10", flags: 0},                     // "Onix",
	"0096"         : {ico: "z20", flags: 0},                     // "Drowzee",
/**/"0097"         : {ico: "00",  flags: 0},                     // "Hypno",
	"0098"         : {ico: "z28", flags: 0},                     // "Krabby",
/**/"0099"         : {ico: "00",  flags: 0},                     // "Kingler",
	"0100"         : {ico: "z25", flags: 0},                     // "Voltorb", // uknown gender
	"0101"         : {ico: "z25", flags: 0},                     // "Electrode", // uknown gender
/**/"0102"         : {ico: "00",  flags: 0},                     // "Exeggcute",
/**/"0103"         : {ico: "00",  flags: 0},                     // "Exeggutor",
/**/"0104"         : {ico: "00",  flags: 0},                     // "Cubone",
/**/"0105"         : {ico: "00",  flags: 0},                     // "Marowak",
/**/"0106"         : {ico: "00",  flags: 0},                     // "Hitmonlee", // male only
/**/"0107"         : {ico: "00",  flags: 0},                     // "Hitmonchan", // male only
	"0108"         : {ico: "z12", flags: 0},                     // "Lickitung",
	"0109"         : {ico: "z27", flags: 0},                     // "Koffing",
/**/"0110"         : {ico: "00",  flags: 0},                     // "Weezing",
/**/"0111"         : {ico: "00",  flags: 0},                     // "Rhyhorn",
/**/"0112"         : {ico: "00",  flags: 0},                     // "Rhydon",
/**/"0113"         : {ico: "00",  flags: 0},                     // "Chansey", // female only
/**/"0114"         : {ico: "00",  flags: 0},                     // "Tangela",
/**/"0115"         : {ico: "00",  flags: 0},                     // "Kangaskhan", // female only
/**/"0116"         : {ico: "00",  flags: 0},                     // "Horsea",
/**/"0117"         : {ico: "00",  flags: 0},                     // "Seadra",
	"0118"         : {ico: "z30", flags: 0},                     // "Goldeen",
/**/"0119"         : {ico: "00",  flags: 0},                     // "Seaking",
/**/"0120"         : {ico: "00",  flags: 0},                     // "Staryu", // uknown gender
/**/"0121"         : {ico: "00",  flags: 0},                     // "Starmie", // uknown gender
/**/"0122"         : {ico: "00",  flags: 0},                     // "Mr. Mime",
	"0123"         : {ico: "z07", flags: 0},                     // "Scyther",
	"0124"         : {ico: "z20", flags: 0},                     // "Jynx", // female only
/**/"0125"         : {ico: "00",  flags: 0},                     // "Electabuzz",
/**/"0126"         : {ico: "00",  flags: 0},                     // "Magmar",
	"0127"         : {ico: "z07", flags: 0},                     // "Pinsir",
	"0128"         : {ico: "z23", flags: 0},                     // "Tauros", // male only
	"0129"         : {ico: "z30", flags: 0},                     // "Magikarp",
	"0130"         : {ico: "z32", flags: 0},                     // "Gyarados",
/**/"0131"         : {ico: "00",  flags: 0},                     // "Lapras",
	"0132"         : {ico: "z27", flags: 0},                     // "Ditto", // uknown gender
	"0133"         : {ico: "z09", flags: 0},                     // "Eevee",
/**/"0134"         : {ico: "00",  flags: 0},                     // "Vaporeon",
/**/"0135"         : {ico: "00",  flags: 0},                     // "Jolteon",
/**/"0136"         : {ico: "00",  flags: 0},                     // "Flareon",
/**/"0137"         : {ico: "00",  flags: 0},                     // "Porygon", // uknown gender
/**/"0138"         : {ico: "00",  flags: 0},                     // "Omanyte",
/**/"0139"         : {ico: "00",  flags: 0},                     // "Omastar",
/**/"0140"         : {ico: "00",  flags: 0},                     // "Kabuto",
/**/"0141"         : {ico: "00",  flags: 0},                     // "Kabutops",
/**/"0142"         : {ico: "00",  flags: 0},                     // "Aerodactyl",
/**/"0143"         : {ico: "00",  flags: 0},                     // "Snorlax",
/**/"0144"         : {ico: "00",  flags: 0},                     // "Articuno", // uknown gender
/**/"0145"         : {ico: "00",  flags: 0},                     // "Zapdos", // uknown gender
/**/"0146"         : {ico: "00",  flags: 0},                     // "Moltres", // uknown gender
/**/"0147"         : {ico: "00",  flags: 0},                     // "Dratini",
/**/"0148"         : {ico: "00",  flags: 0},                     // "Dragonair",
/**/"0149"         : {ico: "00",  flags: 0},                     // "Dragonite",
/**/"0150"         : {ico: "00",  flags: 0},                     // "Mewtwo", // uknown gender
/**/"0151"         : {ico: "00",  flags: 0},                     // "Mew", // uknown gender
	"0152"         : {ico: "z16", flags: 0},                     // "Chikorita",
/**/"0153"         : {ico: "00",  flags: 0},                     // "Bayleef",
	"0154"         : {ico: "z16", flags: 0},                     // "Meganium",
	"0155"         : {ico: "z09", flags: 0},                     // "Cyndaquil",
/**/"0156"         : {ico: "00",  flags: 0},                     // "Quilava",
/**/"0157"         : {ico: "00",  flags: 0},                     // "Typhlosion",
	"0158"         : {ico: "z12", flags: 0},                     // "Totodile",
/**/"0159"         : {ico: "00",  flags: 0},                     // "Croconaw",
	"0160"         : {ico: "z12", flags: 0},                     // "Feraligatr",
	"0161"         : {ico: "z09", flags: 0},                     // "Sentret",
/**/"0162"         : {ico: "00",  flags: 0},                     // "Furret",
	"0163"         : {ico: "z08", flags: 0},                     // "Hoothoot",
	"0164"         : {ico: "z08", flags: 0},                     // "Noctowl",
/**/"0165"         : {ico: "00",  flags: 0},                     // "Ledyba",
/**/"0166"         : {ico: "00",  flags: 0},                     // "Ledian",
	"0167"         : {ico: "z07", flags: 0},                     // "Spinarak",
/**/"0168"         : {ico: "00",  flags: 0},                     // "Ariados",
/**/"0169"         : {ico: "00",  flags: 0},                     // "Crobat",
/**/"0170"         : {ico: "00",  flags: 0},                     // "Chinchou",
/**/"0171"         : {ico: "00",  flags: 0},                     // "Lanturn",
/**/"0172"         : {ico: "00",  flags: 0},                     // "Pichu",
/**/"0173"         : {ico: "00",  flags: 0},                     // "Cleffa",
/**/"0174"         : {ico: "00",  flags: 0},                     // "Igglybuff",
	"0175"         : {ico: "z13", flags: 0},                     // "Togepi",
/**/"0176"         : {ico: "00",  flags: 0},                     // "Togetic",
	"0177"         : {ico: "z08", flags: 0},                     // "Natu",
/**/"0178"         : {ico: "00",  flags: 0},                     // "Xatu",
	"0179"         : {ico: "z09", flags: 0},                     // "Mareep",
	"0180"         : {ico: "z12", flags: 0},                     // "Flaaffy",
/**/"0181"         : {ico: "00",  flags: 0},                     // "Ampharos",
/**/"0182"         : {ico: "00",  flags: 0},                     // "Bellossom",
/**/"0183"         : {ico: "00",  flags: 0},                     // "Marill",
/**/"0184"         : {ico: "00",  flags: 0},                     // "Azumarill",
	"0185"         : {ico: "z34", flags: 0},                     // "Sudowoodo",
/**/"0186"         : {ico: "00",  flags: 0},                     // "Politoed",
/**/"0187"         : {ico: "00",  flags: 0},                     // "Hoppip",
/**/"0188"         : {ico: "00",  flags: 0},                     // "Skiploom",
/**/"0189"         : {ico: "00",  flags: 0},                     // "Jumpluff",
/**/"0190"         : {ico: "00",  flags: 0},                     // "Aipom",
	"0191"         : {ico: "z16", flags: 0},                     // "Sunkern",
/**/"0192"         : {ico: "00",  flags: 0},                     // "Sunflora",
/**/"0193"         : {ico: "00",  flags: 0},                     // "Yanma",
	"0194"         : {ico: "z12", flags: 0},                     // "Wooper",
	"0195"         : {ico: "z12", flags: 0},                     // "Quagsire",
/**/"0196"         : {ico: "00",  flags: 0},                     // "Espeon",
/**/"0197"         : {ico: "00",  flags: 0},                     // "Umbreon",
/**/"0198"         : {ico: "00",  flags: 0},                     // "Murkrow",
/**/"0199"         : {ico: "00",  flags: 0},                     // "Slowking",
/**/"0200"         : {ico: "00",  flags: 0},                     // "Misdreavus",
	"0201"         : {ico: "z35", flags: FLAGS_FORM_0201_BASE},  // "Unown", // uknown gender
	"0201-angry"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Angry", // uknown gender
	"0201-bear"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Bear", // uknown gender
	"0201-chase"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Chase", // uknown gender
	"0201-direct"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Direct", // uknown gender
	"0201-engage"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Engage", // uknown gender
	"0201-find"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Find", // uknown gender
	"0201-give"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Give", // uknown gender
	"0201-help"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Help", // uknown gender
	"0201-increase": {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Increase", // uknown gender
	"0201-join"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Join", // uknown gender
	"0201-keep"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Keep", // uknown gender
	"0201-laugh"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Laugh", // uknown gender
	"0201-make"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Make", // uknown gender
	"0201-nuzzle"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Nuzzle", // uknown gender
	"0201-observe" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Observe", // uknown gender
	"0201-perform" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Perform", // uknown gender
	"0201-quicken" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Quicken", // uknown gender
	"0201-reassure": {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Reassure", // uknown gender
	"0201-search"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Search", // uknown gender
	"0201-tell"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Tell", // uknown gender
	"0201-undo"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Undo", // uknown gender
	"0201-vanish"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Vanish", // uknown gender
	"0201-want"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Want", // uknown gender
	"0201-xxxxx"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown XXXXX", // uknown gender
	"0201-yield"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Yield", // uknown gender
	"0201-zoom"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Zoom", // uknown gender
/**/"0202"         : {ico: "00",  flags: 0},                     // "Wobbuffet",
	"0203"         : {ico: "z23", flags: 0},                     // "Girafarig",
/**/"0204"         : {ico: "00",  flags: 0},                     // "Pineco",
/**/"0205"         : {ico: "00",  flags: 0},                     // "Forretress",
/**/"0206"         : {ico: "00",  flags: 0},                     // "Dunsparce",
	"0207"         : {ico: "z07", flags: 0},                     // "Gligar",
/**/"0208"         : {ico: "00",  flags: 0},                     // "Steelix",
	"0209"         : {ico: "z12", flags: 0},                     // "Snubbull",
/**/"0210"         : {ico: "00",  flags: 0},                     // "Granbull",
	"0211"         : {ico: "z30", flags: 0},                     // "Qwilfish",
/**/"0212"         : {ico: "00",  flags: 0},                     // "Scizor",
	"0213"         : {ico: "z07", flags: 0},                     // "Shuckle",
/**/"0214"         : {ico: "00",  flags: 0},                     // "Heracross",
/**/"0215"         : {ico: "00",  flags: 0},                     // "Sneasel",
	"0216"         : {ico: "z12", flags: 0},                     // "Teddiursa",
/**/"0217"         : {ico: "00",  flags: 0},                     // "Ursaring",
/**/"0218"         : {ico: "00",  flags: 0},                     // "Slugma",
/**/"0219"         : {ico: "00",  flags: 0},                     // "Magcargo",
	"0220"         : {ico: "z23", flags: 0},                     // "Swinub",
/**/"0221"         : {ico: "00",  flags: 0},                     // "Piloswine",
/**/"0222"         : {ico: "00",  flags: 0},                     // "Corsola",
/**/"0223"         : {ico: "00",  flags: 0},                     // "Remoraid",
/**/"0224"         : {ico: "00",  flags: 0},                     // "Octillery",
/**/"0225"         : {ico: "00",  flags: 0},                     // "Delibird",
	"0226"         : {ico: "z30", flags: 0},                     // "Mantine",
/**/"0227"         : {ico: "00",  flags: 0},                     // "Skarmory",
/**/"0228"         : {ico: "00",  flags: 0},                     // "Houndour",
/**/"0229"         : {ico: "00",  flags: 0},                     // "Houndoom",
/**/"0230"         : {ico: "00",  flags: 0},                     // "Kingdra",
/**/"0231"         : {ico: "00",  flags: 0},                     // "Phanpy",
/**/"0232"         : {ico: "00",  flags: 0},                     // "Donphan",
/**/"0233"         : {ico: "00",  flags: 0},                     // "Porygon2", // uknown gender
	"0234"         : {ico: "z23", flags: 0},                     // "Stantler",
	"0235"         : {ico: "z12", flags: 0},                     // "Smeargle",
/**/"0236"         : {ico: "00",  flags: 0},                     // "Tyrogue", // male only
/**/"0237"         : {ico: "00",  flags: 0},                     // "Hitmontop", // male only
/**/"0238"         : {ico: "00",  flags: 0},                     // "Smoochum", // female only
/**/"0239"         : {ico: "00",  flags: 0},                     // "Elekid",
/**/"0240"         : {ico: "00",  flags: 0},                     // "Magby",
	"0241"         : {ico: "z23", flags: 0},                     // "Miltank", // female only
/**/"0242"         : {ico: "00",  flags: 0},                     // "Blissey", // female only
/**/"0243"         : {ico: "00",  flags: 0},                     // "Raikou", // uknown gender
/**/"0244"         : {ico: "00",  flags: 0},                     // "Entei", // uknown gender
/**/"0245"         : {ico: "00",  flags: 0},                     // "Suicune", // uknown gender
/**/"0246"         : {ico: "00",  flags: 0},                     // "Larvitar",
/**/"0247"         : {ico: "00",  flags: 0},                     // "Pupitar",
/**/"0248"         : {ico: "00",  flags: 0},                     // "Tyranitar",
/**/"0249"         : {ico: "00",  flags: 0},                     // "Lugia", // uknown gender
/**/"0250"         : {ico: "00",  flags: 0},                     // "Ho-Oh", // uknown gender
/**/"0251"         : {ico: "00",  flags: 0},                     // "Celebi", // uknown gender
};

//============================================================================
// EVOLUTION POKEDEX
//============================================================================
const _Regdex_e_201 =
{
	"0001"         : {ico: "01",  flags: 0},                     // "Bulbasaur",
	"0002"         : {ico: "01",  flags: 0},                     // "Ivysaur",
	"0003"         : {ico: "01",  flags: 0},                     // "Venusaur",
	"0004"         : {ico: "02",  flags: 0},                     // "Charmander",
	"0005"         : {ico: "02",  flags: 0},                     // "Charmeleon",
	"0006"         : {ico: "03",  flags: 0},                     // "Charizard",
	"0007"         : {ico: "04",  flags: 0},                     // "Squirtle",
	"0008"         : {ico: "04",  flags: 0},                     // "Wartortle",
/**/"0009"         : {ico: "00",  flags: 0},                     // "Blastoise",
	"0010"         : {ico: "z05", flags: 0},                     // "Caterpie",
	"0011"         : {ico: "z05", flags: 0},                     // "Metapod",
	"0012"         : {ico: "z06", flags: 0},                     // "Butterfree",
	"0013"         : {ico: "z05", flags: 0},                     // "Weedle",
	"0014"         : {ico: "z05", flags: 0},                     // "Kakuna",
	"0015"         : {ico: "z07", flags: 0},                     // "Beedrill",
/**/"0016"         : {ico: "00",  flags: 0},                     // "Pidgey",
	"0017"         : {ico: "z08", flags: 0},                     // "Pidgeotto",
/**/"0018"         : {ico: "00",  flags: 0},                     // "Pidgeot",
	"0019"         : {ico: "z09", flags: 0},                     // "Rattata",
	"0020"         : {ico: "z09", flags: 0},                     // "Raticate",
	"0021"         : {ico: "z08", flags: 0},                     // "Spearow",
/**/"0022"         : {ico: "00",  flags: 0},                     // "Fearow",
/**/"0023"         : {ico: "00",  flags: 0},                     // "Ekans",
/**/"0024"         : {ico: "00",  flags: 0},                     // "Arbok",
/**/"0172"         : {ico: "00",  flags: 0},                     // "Pichu",
/**/"0025"         : {ico: "00",  flags: 0},                     // "Pikachu",
/**/"0026"         : {ico: "00",  flags: 0},                     // "Raichu",
	"0027"         : {ico: "z12", flags: 0},                     // "Sandshrew",
/**/"0028"         : {ico: "00",  flags: 0},                     // "Sandslash",
	"0029"         : {ico: "z09", flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran♀", SPOT (in-game trade)
	"0029-f"       : {ico: "z09", flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♀", SPOT (in-game trade)
/**/"0030"         : {ico: "00",  flags: 0},                     // "Nidorina", TERRY (in-game trade)
/**/"0031"         : {ico: "00",  flags: 0},                     // "Nidoqueen",
/**/"0032"         : {ico: "00",  flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran♂",
/**/"0032-m"       : {ico: "00",  flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♂",
/**/"0033"         : {ico: "00",  flags: 0},                     // "Nidorino",
/**/"0034"         : {ico: "00",  flags: 0},                     // "Nidoking",
/**/"0173"         : {ico: "00",  flags: 0},                     // "Cleffa",
/**/"0035"         : {ico: "00",  flags: 0},                     // "Clefairy",
/**/"0036"         : {ico: "00",  flags: 0},                     // "Clefable",
/**/"0037"         : {ico: "00",  flags: 0},                     // "Vulpix",
/**/"0038"         : {ico: "00",  flags: 0},                     // "Ninetales",
/**/"0174"         : {ico: "00",  flags: 0},                     // "Igglybuff",
	"0039"         : {ico: "z14", flags: 0},                     // "Jigglypuff",
/**/"0040"         : {ico: "00",  flags: 0},                     // "Wigglytuff",
	"0041"         : {ico: "z15", flags: 0},                     // "Zubat",
	"0042"         : {ico: "z15", flags: 0},                     // "Golbat",
/**/"0169"         : {ico: "00",  flags: 0},                     // "Crobat",
	"0043"         : {ico: "z16", flags: 0},                     // "Oddish",
/**/"0044"         : {ico: "00",  flags: 0},                     // "Gloom",
/**/"0045"         : {ico: "00",  flags: 0},                     // "Vileplume",
/**/"0182"         : {ico: "00",  flags: 0},                     // "Bellossom",
	"0046"         : {ico: "z07", flags: 0},                     // "Paras",
/**/"0047"         : {ico: "00",  flags: 0},                     // "Parasect",
	"0048"         : {ico: "z05", flags: 0},                     // "Venonat",
/**/"0049"         : {ico: "00",  flags: 0},                     // "Venomoth",
/**/"0050"         : {ico: "00",  flags: 0},                     // "Diglett",
/**/"0051"         : {ico: "00",  flags: 0},                     // "Dugtrio",
/**/"0052"         : {ico: "00",  flags: 0},                     // "Meowth",
/**/"0053"         : {ico: "00",  flags: 0},                     // "Persian",
/**/"0054"         : {ico: "00",  flags: 0},                     // "Psyduck",
/**/"0055"         : {ico: "00",  flags: 0},                     // "Golduck",
/**/"0056"         : {ico: "00",  flags: 0},                     // "Mankey",
/**/"0057"         : {ico: "00",  flags: 0},                     // "Primeape",
/**/"0058"         : {ico: "00",  flags: 0},                     // "Growlithe",
/**/"0059"         : {ico: "00",  flags: 0},                     // "Arcanine",
	"0060"         : {ico: "z19", flags: 0},                     // "Poliwag",
	"0061"         : {ico: "z19", flags: 0},                     // "Poliwhirl",
/**/"0062"         : {ico: "00",  flags: 0},                     // "Poliwrath",
/**/"0186"         : {ico: "00",  flags: 0},                     // "Politoed",
	"0063"         : {ico: "z20", flags: 0},                     // "Abra",
/**/"0064"         : {ico: "00",  flags: 0},                     // "Kadabra",
/**/"0065"         : {ico: "00",  flags: 0},                     // "Alakazam",
	"0066"         : {ico: "z18", flags: 0},                     // "Machop",
/**/"0067"         : {ico: "00",  flags: 0},                     // "Machoke",
/**/"0068"         : {ico: "00",  flags: 0},                     // "Machamp",
	"0069"         : {ico: "z16", flags: 0},                     // "Bellsprout",
/**/"0070"         : {ico: "00",  flags: 0},                     // "Weepinbell",
/**/"0071"         : {ico: "00",  flags: 0},                     // "Victreebel",
	"0072"         : {ico: "z21", flags: 0},                     // "Tentacool",
	"0073"         : {ico: "z21", flags: 0},                     // "Tentacruel",
	"0074"         : {ico: "z22", flags: 0},                     // "Geodude",
	"0075"         : {ico: "z22", flags: 0},                     // "Graveler",
/**/"0076"         : {ico: "00",  flags: 0},                     // "Golem",
/**/"0077"         : {ico: "00",  flags: 0},                     // "Ponyta",
/**/"0078"         : {ico: "00",  flags: 0},                     // "Rapidash",
	"0079"         : {ico: "z24", flags: 0},                     // "Slowpoke",
/**/"0080"         : {ico: "00",  flags: 0},                     // "Slowbro",
/**/"0199"         : {ico: "00",  flags: 0},                     // "Slowking",
/**/"0081"         : {ico: "00",  flags: 0},                     // "Magnemite",
/**/"0082"         : {ico: "00",  flags: 0},                     // "Magneton",
/**/"0083"         : {ico: "00",  flags: 0},                     // "Farfetch'd", DUX (in-game trade)
/**/"0084"         : {ico: "00",  flags: 0},                     // "Doduo",
/**/"0085"         : {ico: "00",  flags: 0},                     // "Dodrio",
/**/"0086"         : {ico: "00",  flags: 0},                     // "Seel", SAILOR (in-game trade)
/**/"0087"         : {ico: "00",  flags: 0},                     // "Dewgong",
/**/"0088"         : {ico: "00",  flags: 0},                     // "Grimer",
/**/"0089"         : {ico: "00",  flags: 0},                     // "Muk",
/**/"0090"         : {ico: "00",  flags: 0},                     // "Shellder",
/**/"0091"         : {ico: "00",  flags: 0},                     // "Cloyster",
	"0092"         : {ico: "z29", flags: 0},                     // "Gastly",
/**/"0093"         : {ico: "00",  flags: 0},                     // "Haunter",
/**/"0094"         : {ico: "00",  flags: 0},                     // "Gengar",
	"0095"         : {ico: "z10", flags: 0},                     // "Onix",
/**/"0208"         : {ico: "00",  flags: 0},                     // "Steelix",
	"0096"         : {ico: "z20", flags: 0},                     // "Drowzee",
/**/"0097"         : {ico: "00",  flags: 0},                     // "Hypno",
	"0098"         : {ico: "z28", flags: 0},                     // "Krabby",
/**/"0099"         : {ico: "00",  flags: 0},                     // "Kingler",
	"0100"         : {ico: "z25", flags: 0},                     // "Voltorb", // uknown gender
	"0101"         : {ico: "z25", flags: 0},                     // "Electrode", // uknown gender DORIS (in-game trade)
/**/"0102"         : {ico: "00",  flags: 0},                     // "Exeggcute",
/**/"0103"         : {ico: "00",  flags: 0},                     // "Exeggutor",
/**/"0104"         : {ico: "00",  flags: 0},                     // "Cubone",
/**/"0105"         : {ico: "00",  flags: 0},                     // "Marowak",
/**/"0236"         : {ico: "00",  flags: 0},                     // "Tyrogue", // male only
/**/"0106"         : {ico: "00",  flags: 0},                     // "Hitmonlee", // male only
/**/"0107"         : {ico: "00",  flags: 0},                     // "Hitmonchan", // male only
/**/"0237"         : {ico: "00",  flags: 0},                     // "Hitmontop", // male only
	"0108"         : {ico: "z12", flags: 0},                     // "Lickitung", MARC (in-game trade)
	"0109"         : {ico: "z27", flags: 0},                     // "Koffing",
/**/"0110"         : {ico: "00",  flags: 0},                     // "Weezing",
/**/"0111"         : {ico: "00",  flags: 0},                     // "Rhyhorn",
/**/"0112"         : {ico: "00",  flags: 0},                     // "Rhydon",
/**/"0113"         : {ico: "00",  flags: 0},                     // "Chansey", // female only
/**/"0242"         : {ico: "00",  flags: 0},                     // "Blissey", // female only
/**/"0114"         : {ico: "00",  flags: 0},                     // "Tangela", CRINKLES (in-game trade)
/**/"0115"         : {ico: "00",  flags: 0},                     // "Kangaskhan", // female only
/**/"0116"         : {ico: "00",  flags: 0},                     // "Horsea",
/**/"0117"         : {ico: "00",  flags: 0},                     // "Seadra",
/**/"0230"         : {ico: "00",  flags: 0},                     // "Kingdra",
	"0118"         : {ico: "z30", flags: 0},                     // "Goldeen",
/**/"0119"         : {ico: "00",  flags: 0},                     // "Seaking",
/**/"0120"         : {ico: "00",  flags: 0},                     // "Staryu", // uknown gender
/**/"0121"         : {ico: "00",  flags: 0},                     // "Starmie", // uknown gender
/**/"0122"         : {ico: "00",  flags: 0},                     // "Mr. Mime", MARCEL (in-game trade)
	"0123"         : {ico: "z07", flags: 0},                     // "Scyther",
/**/"0212"         : {ico: "00",  flags: 0},                     // "Scizor",
/**/"0238"         : {ico: "00",  flags: 0},                     // "Smoochum", // female only
	"0124"         : {ico: "z20", flags: 0},                     // "Jynx", // female only LOLA (in-game trade)
/**/"0239"         : {ico: "00",  flags: 0},                     // "Elekid",
/**/"0125"         : {ico: "00",  flags: 0},                     // "Electabuzz",
/**/"0240"         : {ico: "00",  flags: 0},                     // "Magby",
/**/"0126"         : {ico: "00",  flags: 0},                     // "Magmar",
	"0127"         : {ico: "z07", flags: 0},                     // "Pinsir",
	"0128"         : {ico: "z23", flags: 0},                     // "Tauros", // male only
	"0129"         : {ico: "z30", flags: 0},                     // "Magikarp",
	"0130"         : {ico: "z32", flags: 0},                     // "Gyarados",
/**/"0131"         : {ico: "00",  flags: 0},                     // "Lapras",
	"0132"         : {ico: "z27", flags: 0},                     // "Ditto", // uknown gender
	"0133"         : {ico: "z09", flags: 0},                     // "Eevee",
/**/"0134"         : {ico: "00",  flags: 0},                     // "Vaporeon",
/**/"0135"         : {ico: "00",  flags: 0},                     // "Jolteon",
/**/"0136"         : {ico: "00",  flags: 0},                     // "Flareon",
/**/"0196"         : {ico: "00",  flags: 0},                     // "Espeon",
/**/"0197"         : {ico: "00",  flags: 0},                     // "Umbreon",
/**/"0137"         : {ico: "00",  flags: 0},                     // "Porygon", // uknown gender
/**/"0233"         : {ico: "00",  flags: 0},                     // "Porygon2", // uknown gender
/**/"0138"         : {ico: "00",  flags: 0},                     // "Omanyte",
/**/"0139"         : {ico: "00",  flags: 0},                     // "Omastar",
/**/"0140"         : {ico: "00",  flags: 0},                     // "Kabuto",
/**/"0141"         : {ico: "00",  flags: 0},                     // "Kabutops",
/**/"0142"         : {ico: "00",  flags: 0},                     // "Aerodactyl",
/**/"0143"         : {ico: "00",  flags: 0},                     // "Snorlax",
/**/"0144"         : {ico: "00",  flags: 0},                     // "Articuno", // uknown gender
/**/"0145"         : {ico: "00",  flags: 0},                     // "Zapdos", // uknown gender
/**/"0146"         : {ico: "00",  flags: 0},                     // "Moltres", // uknown gender
/**/"0147"         : {ico: "00",  flags: 0},                     // "Dratini",
/**/"0148"         : {ico: "00",  flags: 0},                     // "Dragonair",
/**/"0149"         : {ico: "00",  flags: 0},                     // "Dragonite",
/**/"0150"         : {ico: "00",  flags: 0},                     // "Mewtwo", // uknown gender
/**/"0151"         : {ico: "00",  flags: 0},                     // "Mew", // uknown gender
	"0152"         : {ico: "z16", flags: 0},                     // "Chikorita",
/**/"0153"         : {ico: "00",  flags: 0},                     // "Bayleef",
	"0154"         : {ico: "z16", flags: 0},                     // "Meganium",
	"0155"         : {ico: "z09", flags: 0},                     // "Cyndaquil",
/**/"0156"         : {ico: "00",  flags: 0},                     // "Quilava",
/**/"0157"         : {ico: "00",  flags: 0},                     // "Typhlosion",
	"0158"         : {ico: "z12", flags: 0},                     // "Totodile",
/**/"0159"         : {ico: "00",  flags: 0},                     // "Croconaw",
	"0160"         : {ico: "z12", flags: 0},                     // "Feraligatr",
	"0161"         : {ico: "z09", flags: 0},                     // "Sentret",
/**/"0162"         : {ico: "00",  flags: 0},                     // "Furret",
	"0163"         : {ico: "z08", flags: 0},                     // "Hoothoot",
	"0164"         : {ico: "z08", flags: 0},                     // "Noctowl",
/**/"0165"         : {ico: "00",  flags: 0},                     // "Ledyba",
/**/"0166"         : {ico: "00",  flags: 0},                     // "Ledian",
	"0167"         : {ico: "z07", flags: 0},                     // "Spinarak",
/**/"0168"         : {ico: "00",  flags: 0},                     // "Ariados",
/**/"0170"         : {ico: "00",  flags: 0},                     // "Chinchou",
/**/"0171"         : {ico: "00",  flags: 0},                     // "Lanturn",
	"0175"         : {ico: "z13", flags: 0},                     // "Togepi",
/**/"0176"         : {ico: "00",  flags: 0},                     // "Togetic",
	"0177"         : {ico: "z08", flags: 0},                     // "Natu",
/**/"0178"         : {ico: "00",  flags: 0},                     // "Xatu",
	"0179"         : {ico: "z09", flags: 0},                     // "Mareep",
	"0180"         : {ico: "z12", flags: 0},                     // "Flaaffy",
/**/"0181"         : {ico: "00",  flags: 0},                     // "Ampharos",
/**/"0183"         : {ico: "00",  flags: 0},                     // "Marill",
/**/"0184"         : {ico: "00",  flags: 0},                     // "Azumarill",
	"0185"         : {ico: "z34", flags: 0},                     // "Sudowoodo",
/**/"0187"         : {ico: "00",  flags: 0},                     // "Hoppip",
/**/"0188"         : {ico: "00",  flags: 0},                     // "Skiploom",
/**/"0189"         : {ico: "00",  flags: 0},                     // "Jumpluff",
/**/"0190"         : {ico: "00",  flags: 0},                     // "Aipom",
	"0191"         : {ico: "z16", flags: 0},                     // "Sunkern",
/**/"0192"         : {ico: "00",  flags: 0},                     // "Sunflora",
/**/"0193"         : {ico: "00",  flags: 0},                     // "Yanma",
	"0194"         : {ico: "z12", flags: 0},                     // "Wooper",
	"0195"         : {ico: "z12", flags: 0},                     // "Quagsire",
/**/"0198"         : {ico: "00",  flags: 0},                     // "Murkrow",
/**/"0200"         : {ico: "00",  flags: 0},                     // "Misdreavus",
	"0201"         : {ico: "z35", flags: FLAGS_FORM_0201_BASE},  // "Unown", // uknown gender
	"0201-angry"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Angry", // uknown gender
	"0201-bear"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Bear", // uknown gender
	"0201-chase"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Chase", // uknown gender
	"0201-direct"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Direct", // uknown gender
	"0201-engage"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Engage", // uknown gender
	"0201-find"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Find", // uknown gender
	"0201-give"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Give", // uknown gender
	"0201-help"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Help", // uknown gender
	"0201-increase": {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Increase", // uknown gender
	"0201-join"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Join", // uknown gender
	"0201-keep"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Keep", // uknown gender
	"0201-laugh"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Laugh", // uknown gender
	"0201-make"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Make", // uknown gender
	"0201-nuzzle"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Nuzzle", // uknown gender
	"0201-observe" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Observe", // uknown gender
	"0201-perform" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Perform", // uknown gender
	"0201-quicken" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Quicken", // uknown gender
	"0201-reassure": {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Reassure", // uknown gender
	"0201-search"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Search", // uknown gender
	"0201-tell"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Tell", // uknown gender
	"0201-undo"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Undo", // uknown gender
	"0201-vanish"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Vanish", // uknown gender
	"0201-want"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Want", // uknown gender
	"0201-xxxxx"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown XXXXX", // uknown gender
	"0201-yield"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Yield", // uknown gender
	"0201-zoom"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Zoom", // uknown gender
/**/"0202"         : {ico: "00",  flags: 0},                     // "Wobbuffet",
	"0203"         : {ico: "z23", flags: 0},                     // "Girafarig",
/**/"0204"         : {ico: "00",  flags: 0},                     // "Pineco",
/**/"0205"         : {ico: "00",  flags: 0},                     // "Forretress",
/**/"0206"         : {ico: "00",  flags: 0},                     // "Dunsparce",
	"0207"         : {ico: "z07", flags: 0},                     // "Gligar",
/**/"0209"         : {ico: "00",  flags: 0},                     // "Snubbull",
/**/"0210"         : {ico: "00",  flags: 0},                     // "Granbull",
	"0211"         : {ico: "z30", flags: 0},                     // "Qwilfish",
	"0213"         : {ico: "z07", flags: 0},                     // "Shuckle",
/**/"0214"         : {ico: "00",  flags: 0},                     // "Heracross",
/**/"0215"         : {ico: "00",  flags: 0},                     // "Sneasel",
	"0216"         : {ico: "z12", flags: 0},                     // "Teddiursa",
/**/"0217"         : {ico: "00",  flags: 0},                     // "Ursaring",
/**/"0218"         : {ico: "00",  flags: 0},                     // "Slugma",
/**/"0219"         : {ico: "00",  flags: 0},                     // "Magcargo",
	"0220"         : {ico: "z23", flags: 0},                     // "Swinub",
/**/"0221"         : {ico: "00",  flags: 0},                     // "Piloswine",
/**/"0222"         : {ico: "00",  flags: 0},                     // "Corsola",
/**/"0223"         : {ico: "00",  flags: 0},                     // "Remoraid",
/**/"0224"         : {ico: "00",  flags: 0},                     // "Octillery",
/**/"0225"         : {ico: "00",  flags: 0},                     // "Delibird",
	"0226"         : {ico: "z30", flags: 0},                     // "Mantine",
/**/"0227"         : {ico: "00",  flags: 0},                     // "Skarmory",
/**/"0228"         : {ico: "00",  flags: 0},                     // "Houndour",
/**/"0229"         : {ico: "00",  flags: 0},                     // "Houndoom",
/**/"0231"         : {ico: "00",  flags: 0},                     // "Phanpy",
/**/"0232"         : {ico: "00",  flags: 0},                     // "Donphan",
	"0234"         : {ico: "z23", flags: 0},                     // "Stantler",
	"0235"         : {ico: "z12", flags: 0},                     // "Smeargle",
	"0241"         : {ico: "z23", flags: 0},                     // "Miltank", // female only
/**/"0243"         : {ico: "00",  flags: 0},                     // "Raikou", // uknown gender
/**/"0244"         : {ico: "00",  flags: 0},                     // "Entei", // uknown gender
/**/"0245"         : {ico: "00",  flags: 0},                     // "Suicune", // uknown gender
/**/"0246"         : {ico: "00",  flags: 0},                     // "Larvitar",
/**/"0247"         : {ico: "00",  flags: 0},                     // "Pupitar",
/**/"0248"         : {ico: "00",  flags: 0},                     // "Tyranitar",
/**/"0249"         : {ico: "00",  flags: 0},                     // "Lugia", // uknown gender
/**/"0250"         : {ico: "00",  flags: 0},                     // "Ho-Oh", // uknown gender
/**/"0251"         : {ico: "00",  flags: 0},                     // "Celebi", // uknown gender
};

//============================================================================
// REGIONAL POKEDEX
//============================================================================
const _Regdex_r_201 =
{
/**/"0152"         : {ico: "00",  flags: 0},                     // "Chikorita",
/**/"0153"         : {ico: "00",  flags: 0},                     // "Bayleef",
/**/"0154"         : {ico: "00",  flags: 0},                     // "Meganium",
/**/"0155"         : {ico: "00",  flags: 0},                     // "Cyndaquil",
/**/"0156"         : {ico: "00",  flags: 0},                     // "Quilava",
/**/"0157"         : {ico: "00",  flags: 0},                     // "Typhlosion",
/**/"0158"         : {ico: "00",  flags: 0},                     // "Totodile",
/**/"0159"         : {ico: "00",  flags: 0},                     // "Croconaw",
/**/"0160"         : {ico: "00",  flags: 0},                     // "Feraligatr",
/**/"0016"         : {ico: "00",  flags: 0},                     // "Pidgey",
	"0017"         : {ico: "z08", flags: 0},                     // "Pidgeotto",
/**/"0018"         : {ico: "00",  flags: 0},                     // "Pidgeot",
	"0021"         : {ico: "z08", flags: 0},                     // "Spearow",
/**/"0022"         : {ico: "00",  flags: 0},                     // "Fearow",
	"0163"         : {ico: "z08", flags: 0},                     // "Hoothoot",
/**/"0164"         : {ico: "00",  flags: 0},                     // "Noctowl",
	"0019"         : {ico: "z09", flags: 0},                     // "Rattata",
	"0020"         : {ico: "z09", flags: 0},                     // "Raticate",
	"0161"         : {ico: "z09", flags: 0},                     // "Sentret",
/**/"0162"         : {ico: "00",  flags: 0},                     // "Furret",
/**/"0172"         : {ico: "00",  flags: 0},                     // "Pichu",
/**/"0025"         : {ico: "00",  flags: 0},                     // "Pikachu",
/**/"0026"         : {ico: "00",  flags: 0},                     // "Raichu",
	"0010"         : {ico: "z05", flags: 0},                     // "Caterpie",
	"0011"         : {ico: "z05", flags: 0},                     // "Metapod",
	"0012"         : {ico: "z06", flags: 0},                     // "Butterfree",
	"0013"         : {ico: "z05", flags: 0},                     // "Weedle",
	"0014"         : {ico: "z05", flags: 0},                     // "Kakuna",
	"0015"         : {ico: "z07", flags: 0},                     // "Beedrill",
/**/"0165"         : {ico: "00",  flags: 0},                     // "Ledyba",
/**/"0166"         : {ico: "00",  flags: 0},                     // "Ledian",
	"0167"         : {ico: "z07", flags: 0},                     // "Spinarak",
/**/"0168"         : {ico: "00",  flags: 0},                     // "Ariados",
	"0074"         : {ico: "z22", flags: 0},                     // "Geodude",
/**/"0075"         : {ico: "z22", flags: 0},                     // "Graveler",
/**/"0076"         : {ico: "00",  flags: 0},                     // "Golem",
	"0041"         : {ico: "z15", flags: 0},                     // "Zubat",
	"0042"         : {ico: "z15", flags: 0},                     // "Golbat",
/**/"0169"         : {ico: "00",  flags: 0},                     // "Crobat",
/**/"0173"         : {ico: "00",  flags: 0},                     // "Cleffa",
/**/"0035"         : {ico: "00",  flags: 0},                     // "Clefairy",
/**/"0036"         : {ico: "00",  flags: 0},                     // "Clefable",
/**/"0174"         : {ico: "00",  flags: 0},                     // "Igglybuff",
	"0039"         : {ico: "z14", flags: 0},                     // "Jigglypuff",
/**/"0040"         : {ico: "00",  flags: 0},                     // "Wigglytuff",
	"0175"         : {ico: "z13", flags: 0},                     // "Togepi",
/**/"0176"         : {ico: "00",  flags: 0},                     // "Togetic",
	"0027"         : {ico: "z12", flags: 0},                     // "Sandshrew",
/**/"0028"         : {ico: "00",  flags: 0},                     // "Sandslash",
/**/"0023"         : {ico: "00",  flags: 0},                     // "Ekans",
/**/"0024"         : {ico: "00",  flags: 0},                     // "Arbok",
/**/"0206"         : {ico: "00",  flags: 0},                     // "Dunsparce",
	"0179"         : {ico: "z09", flags: 0},                     // "Mareep",
	"0180"         : {ico: "z12", flags: 0},                     // "Flaaffy",
/**/"0181"         : {ico: "00",  flags: 0},                     // "Ampharos",
	"0194"         : {ico: "z12", flags: 0},                     // "Wooper",
	"0195"         : {ico: "z12", flags: 0},                     // "Quagsire",
	"0092"         : {ico: "z29", flags: 0},                     // "Gastly",
/**/"0093"         : {ico: "00",  flags: 0},                     // "Haunter",
/**/"0094"         : {ico: "00",  flags: 0},                     // "Gengar",
	"0201"         : {ico: "z35", flags: FLAGS_FORM_0201_BASE},  // "Unown", // uknown gender
	"0201-angry"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Angry", // uknown gender
	"0201-bear"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Bear", // uknown gender
	"0201-chase"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Chase", // uknown gender
	"0201-direct"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Direct", // uknown gender
	"0201-engage"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Engage", // uknown gender
	"0201-find"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Find", // uknown gender
	"0201-give"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Give", // uknown gender
	"0201-help"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Help", // uknown gender
	"0201-increase": {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Increase", // uknown gender
	"0201-join"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Join", // uknown gender
	"0201-keep"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Keep", // uknown gender
	"0201-laugh"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Laugh", // uknown gender
	"0201-make"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Make", // uknown gender
	"0201-nuzzle"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Nuzzle", // uknown gender
	"0201-observe" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Observe", // uknown gender
	"0201-perform" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Perform", // uknown gender
	"0201-quicken" : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Quicken", // uknown gender
	"0201-reassure": {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Reassure", // uknown gender
	"0201-search"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Search", // uknown gender
	"0201-tell"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Tell", // uknown gender
	"0201-undo"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Undo", // uknown gender
	"0201-vanish"  : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Vanish", // uknown gender
	"0201-want"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Want", // uknown gender
	"0201-xxxxx"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown XXXXX", // uknown gender
	"0201-yield"   : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Yield", // uknown gender
	"0201-zoom"    : {ico: "z35", flags: FLAGS_FORM_0201},       // "Unown Zoom", // uknown gender
	"0095"         : {ico: "z10", flags: 0},                     // "Onix", ROCKY (in-game trade)
/**/"0208"         : {ico: "00",  flags: 0},                     // "Steelix",
	"0069"         : {ico: "z16", flags: 0},                     // "Bellsprout",
/**/"0070"         : {ico: "00",  flags: 0},                     // "Weepinbell",
/**/"0071"         : {ico: "00",  flags: 0},                     // "Victreebel",
/**/"0187"         : {ico: "00",  flags: 0},                     // "Hoppip",
/**/"0188"         : {ico: "00",  flags: 0},                     // "Skiploom",
/**/"0189"         : {ico: "00",  flags: 0},                     // "Jumpluff",
	"0046"         : {ico: "z07", flags: 0},                     // "Paras",
/**/"0047"         : {ico: "00",  flags: 0},                     // "Parasect",
	"0060"         : {ico: "z19", flags: 0},                     // "Poliwag",
	"0061"         : {ico: "z19", flags: 0},                     // "Poliwhirl",
/**/"0062"         : {ico: "00",  flags: 0},                     // "Poliwrath",
/**/"0186"         : {ico: "00",  flags: 0},                     // "Politoed",
	"0129"         : {ico: "z30", flags: 0},                     // "Magikarp",
	"0130"         : {ico: "z32", flags: 0},                     // "Gyarados",
	"0118"         : {ico: "z30", flags: 0},                     // "Goldeen",
/**/"0119"         : {ico: "00",  flags: 0},                     // "Seaking",
	"0079"         : {ico: "z24", flags: 0},                     // "Slowpoke",
/**/"0080"         : {ico: "00",  flags: 0},                     // "Slowbro",
/**/"0199"         : {ico: "00",  flags: 0},                     // "Slowking",
	"0043"         : {ico: "z16", flags: 0},                     // "Oddish",
/**/"0044"         : {ico: "00",  flags: 0},                     // "Gloom",
/**/"0045"         : {ico: "00",  flags: 0},                     // "Vileplume",
/**/"0182"         : {ico: "00",  flags: 0},                     // "Bellossom",
	"0096"         : {ico: "z20", flags: 0},                     // "Drowzee",
/**/"0097"         : {ico: "00",  flags: 0},                     // "Hypno",
	"0063"         : {ico: "z20", flags: 0},                     // "Abra",
/**/"0064"         : {ico: "00",  flags: 0},                     // "Kadabra",
/**/"0065"         : {ico: "00",  flags: 0},                     // "Alakazam",
	"0132"         : {ico: "z27", flags: 0},                     // "Ditto", // uknown gender
/**/"0204"         : {ico: "00",  flags: 0},                     // "Pineco",
/**/"0205"         : {ico: "00",  flags: 0},                     // "Forretress",
	"0029"         : {ico: "z09", flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran♀",
	"0029-f"       : {ico: "z09", flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♀",
/**/"0030"         : {ico: "00",  flags: 0},                     // "Nidorina",
/**/"0031"         : {ico: "00",  flags: 0},                     // "Nidoqueen",
/**/"0032"         : {ico: "00",  flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran♂",
/**/"0032-m"       : {ico: "00",  flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♂",
/**/"0033"         : {ico: "00",  flags: 0},                     // "Nidorino",
/**/"0034"         : {ico: "00",  flags: 0},                     // "Nidoking",
/**/"0193"         : {ico: "00",  flags: 0},                     // "Yanma",
/**/"0191"         : {ico: "00",  flags: 0},                     // "Sunkern",
/**/"0192"         : {ico: "00",  flags: 0},                     // "Sunflora",
/**/"0102"         : {ico: "00",  flags: 0},                     // "Exeggcute",
/**/"0103"         : {ico: "00",  flags: 0},                     // "Exeggutor",
	"0185"         : {ico: "z34", flags: 0},                     // "Sudowoodo",
/**/"0202"         : {ico: "00",  flags: 0},                     // "Wobbuffet",
	"0048"         : {ico: "z05", flags: 0},                     // "Venonat",
/**/"0049"         : {ico: "00",  flags: 0},                     // "Venomoth",
	"0123"         : {ico: "z07", flags: 0},                     // "Scyther",
/**/"0212"         : {ico: "00",  flags: 0},                     // "Scizor",
/**/"0127"         : {ico: "00",  flags: 0},                     // "Pinsir",
/**/"0214"         : {ico: "00",  flags: 0},                     // "Heracross",
	"0109"         : {ico: "z27", flags: 0},                     // "Koffing",
/**/"0110"         : {ico: "00",  flags: 0},                     // "Weezing",
/**/"0088"         : {ico: "00",  flags: 0},                     // "Grimer",
/**/"0089"         : {ico: "00",  flags: 0},                     // "Muk",
/**/"0081"         : {ico: "00",  flags: 0},                     // "Magnemite",
/**/"0082"         : {ico: "00",  flags: 0},                     // "Magneton",
	"0100"         : {ico: "z25", flags: 0},                     // "Voltorb", // uknown gender VOLTY (in-game trade)
	"0101"         : {ico: "z25", flags: 0},                     // "Electrode", // uknown gender
/**/"0190"         : {ico: "00",  flags: 0},                     // "Aipom",
/**/"0209"         : {ico: "00",  flags: 0},                     // "Snubbull",
/**/"0210"         : {ico: "00",  flags: 0},                     // "Granbull",
/**/"0037"         : {ico: "00",  flags: 0},                     // "Vulpix",
/**/"0038"         : {ico: "00",  flags: 0},                     // "Ninetales",
/**/"0058"         : {ico: "00",  flags: 0},                     // "Growlithe",
/**/"0059"         : {ico: "00",  flags: 0},                     // "Arcanine",
	"0234"         : {ico: "z23", flags: 0},                     // "Stantler",
/**/"0183"         : {ico: "00",  flags: 0},                     // "Marill",
/**/"0184"         : {ico: "00",  flags: 0},                     // "Azumarill",
/**/"0050"         : {ico: "00",  flags: 0},                     // "Diglett",
/**/"0051"         : {ico: "00",  flags: 0},                     // "Dugtrio",
/**/"0056"         : {ico: "00",  flags: 0},                     // "Mankey",
/**/"0057"         : {ico: "00",  flags: 0},                     // "Primeape",
/**/"0052"         : {ico: "00",  flags: 0},                     // "Meowth",
/**/"0053"         : {ico: "00",  flags: 0},                     // "Persian",
/**/"0054"         : {ico: "00",  flags: 0},                     // "Psyduck",
/**/"0055"         : {ico: "00",  flags: 0},                     // "Golduck",
	"0066"         : {ico: "z18", flags: 0},                     // "Machop", MUSCLE (in-game trade)
/**/"0067"         : {ico: "00",  flags: 0},                     // "Machoke",
/**/"0068"         : {ico: "00",  flags: 0},                     // "Machamp",
/**/"0236"         : {ico: "00",  flags: 0},                     // "Tyrogue", // male only
/**/"0106"         : {ico: "00",  flags: 0},                     // "Hitmonlee", // male only
/**/"0107"         : {ico: "00",  flags: 0},                     // "Hitmonchan", // male only
/**/"0237"         : {ico: "00",  flags: 0},                     // "Hitmontop", // male only
/**/"0203"         : {ico: "00",  flags: 0},                     // "Girafarig",
	"0128"         : {ico: "z23", flags: 0},                     // "Tauros", // male only
/**/"0241"         : {ico: "00",  flags: 0},                     // "Miltank", // female only
/**/"0240"         : {ico: "00",  flags: 0},                     // "Magby",
/**/"0126"         : {ico: "00",  flags: 0},                     // "Magmar",
/**/"0238"         : {ico: "00",  flags: 0},                     // "Smoochum", // female only
	"0124"         : {ico: "z20", flags: 0},                     // "Jynx", // female only
/**/"0239"         : {ico: "00",  flags: 0},                     // "Elekid",
/**/"0125"         : {ico: "00",  flags: 0},                     // "Electabuzz",
/**/"0122"         : {ico: "00",  flags: 0},                     // "Mr. Mime",
/**/"0235"         : {ico: "00",  flags: 0},                     // "Smeargle",
/**/"0083"         : {ico: "00",  flags: 0},                     // "Farfetch'd",
/**/"0177"         : {ico: "00",  flags: 0},                     // "Natu",
/**/"0178"         : {ico: "00",  flags: 0},                     // "Xatu",
	"0211"         : {ico: "z30", flags: 0},                     // "Qwilfish",
	"0072"         : {ico: "z21", flags: 0},                     // "Tentacool",
	"0073"         : {ico: "z21", flags: 0},                     // "Tentacruel",
	"0098"         : {ico: "z28", flags: 0},                     // "Krabby",
/**/"0099"         : {ico: "00",  flags: 0},                     // "Kingler",
/**/"0213"         : {ico: "00",  flags: 0},                     // "Shuckle",
/**/"0120"         : {ico: "00",  flags: 0},                     // "Staryu", // uknown gender
/**/"0121"         : {ico: "00",  flags: 0},                     // "Starmie", // uknown gender
/**/"0090"         : {ico: "00",  flags: 0},                     // "Shellder",
/**/"0091"         : {ico: "00",  flags: 0},                     // "Cloyster",
/**/"0222"         : {ico: "00",  flags: 0},                     // "Corsola",
/**/"0223"         : {ico: "00",  flags: 0},                     // "Remoraid",
/**/"0224"         : {ico: "00",  flags: 0},                     // "Octillery",
/**/"0170"         : {ico: "00",  flags: 0},                     // "Chinchou",
/**/"0171"         : {ico: "00",  flags: 0},                     // "Lanturn",
/**/"0086"         : {ico: "00",  flags: 0},                     // "Seel",
/**/"0087"         : {ico: "00",  flags: 0},                     // "Dewgong",
	"0108"         : {ico: "z12", flags: 0},                     // "Lickitung",
/**/"0114"         : {ico: "00",  flags: 0},                     // "Tangela",
	"0133"         : {ico: "z09", flags: 0},                     // "Eevee",
/**/"0134"         : {ico: "00",  flags: 0},                     // "Vaporeon",
/**/"0135"         : {ico: "00",  flags: 0},                     // "Jolteon",
/**/"0136"         : {ico: "00",  flags: 0},                     // "Flareon",
/**/"0196"         : {ico: "00",  flags: 0},                     // "Espeon",
/**/"0197"         : {ico: "00",  flags: 0},                     // "Umbreon",
/**/"0116"         : {ico: "00",  flags: 0},                     // "Horsea",
/**/"0117"         : {ico: "00",  flags: 0},                     // "Seadra",
/**/"0230"         : {ico: "00",  flags: 0},                     // "Kingdra",
/**/"0207"         : {ico: "00",  flags: 0},                     // "Gligar",
/**/"0225"         : {ico: "00",  flags: 0},                     // "Delibird",
/**/"0220"         : {ico: "00",  flags: 0},                     // "Swinub",
/**/"0221"         : {ico: "00",  flags: 0},                     // "Piloswine",
	"0216"         : {ico: "z12", flags: 0},                     // "Teddiursa",
/**/"0217"         : {ico: "00",  flags: 0},                     // "Ursaring",
/**/"0231"         : {ico: "00",  flags: 0},                     // "Phanpy",
/**/"0232"         : {ico: "00",  flags: 0},                     // "Donphan",
/**/"0226"         : {ico: "00",  flags: 0},                     // "Mantine",
/**/"0227"         : {ico: "00",  flags: 0},                     // "Skarmory",
/**/"0084"         : {ico: "00",  flags: 0},                     // "Doduo",
/**/"0085"         : {ico: "00",  flags: 0},                     // "Dodrio",
/**/"0077"         : {ico: "00",  flags: 0},                     // "Ponyta",
/**/"0078"         : {ico: "00",  flags: 0},                     // "Rapidash", RUNNY (in-game trade)
/**/"0104"         : {ico: "00",  flags: 0},                     // "Cubone",
/**/"0105"         : {ico: "00",  flags: 0},                     // "Marowak",
/**/"0115"         : {ico: "00",  flags: 0},                     // "Kangaskhan", // female only
/**/"0111"         : {ico: "00",  flags: 0},                     // "Rhyhorn",
/**/"0112"         : {ico: "00",  flags: 0},                     // "Rhydon",
/**/"0198"         : {ico: "00",  flags: 0},                     // "Murkrow",
/**/"0228"         : {ico: "00",  flags: 0},                     // "Houndour",
/**/"0229"         : {ico: "00",  flags: 0},                     // "Houndoom",
/**/"0218"         : {ico: "00",  flags: 0},                     // "Slugma",
/**/"0219"         : {ico: "00",  flags: 0},                     // "Magcargo",
/**/"0215"         : {ico: "00",  flags: 0},                     // "Sneasel",
/**/"0200"         : {ico: "00",  flags: 0},                     // "Misdreavus",
/**/"0137"         : {ico: "00",  flags: 0},                     // "Porygon", // uknown gender
/**/"0233"         : {ico: "00",  flags: 0},                     // "Porygon2", // uknown gender
/**/"0113"         : {ico: "00",  flags: 0},                     // "Chansey", // female only
/**/"0242"         : {ico: "00",  flags: 0},                     // "Blissey", // female only
/**/"0131"         : {ico: "00",  flags: 0},                     // "Lapras",
/**/"0138"         : {ico: "00",  flags: 0},                     // "Omanyte",
/**/"0139"         : {ico: "00",  flags: 0},                     // "Omastar",
/**/"0140"         : {ico: "00",  flags: 0},                     // "Kabuto",
/**/"0141"         : {ico: "00",  flags: 0},                     // "Kabutops",
/**/"0142"         : {ico: "00",  flags: 0},                     // "Aerodactyl", AEROY (in-game trade)
/**/"0143"         : {ico: "00",  flags: 0},                     // "Snorlax",
	"0001"         : {ico: "01",  flags: 0},                     // "Bulbasaur",
	"0002"         : {ico: "01",  flags: 0},                     // "Ivysaur",
	"0003"         : {ico: "01",  flags: 0},                     // "Venusaur",
	"0004"         : {ico: "02",  flags: 0},                     // "Charmander",
	"0005"         : {ico: "02",  flags: 0},                     // "Charmeleon",
	"0006"         : {ico: "03",  flags: 0},                     // "Charizard",
	"0007"         : {ico: "04",  flags: 0},                     // "Squirtle",
	"0008"         : {ico: "04",  flags: 0},                     // "Wartortle",
/**/"0009"         : {ico: "00",  flags: 0},                     // "Blastoise",
/**/"0144"         : {ico: "00",  flags: 0},                     // "Articuno", // uknown gender
/**/"0145"         : {ico: "00",  flags: 0},                     // "Zapdos", // uknown gender
/**/"0146"         : {ico: "00",  flags: 0},                     // "Moltres", // uknown gender
/**/"0243"         : {ico: "00",  flags: 0},                     // "Raikou", // uknown gender
/**/"0244"         : {ico: "00",  flags: 0},                     // "Entei", // uknown gender
/**/"0245"         : {ico: "00",  flags: 0},                     // "Suicune", // uknown gender
/**/"0147"         : {ico: "00",  flags: 0},                     // "Dratini",
/**/"0148"         : {ico: "00",  flags: 0},                     // "Dragonair",
/**/"0149"         : {ico: "00",  flags: 0},                     // "Dragonite",
/**/"0246"         : {ico: "00",  flags: 0},                     // "Larvitar",
/**/"0247"         : {ico: "00",  flags: 0},                     // "Pupitar",
/**/"0248"         : {ico: "00",  flags: 0},                     // "Tyranitar",
/**/"0249"         : {ico: "00",  flags: 0},                     // "Lugia", // uknown gender
/**/"0250"         : {ico: "00",  flags: 0},                     // "Ho-Oh", // uknown gender
/**/"0150"         : {ico: "00",  flags: 0},                     // "Mewtwo", // uknown gender
/**/"0151"         : {ico: "00",  flags: 0},                     // "Mew", // uknown gender
/**/"0251"         : {ico: "z20", flags: 0},                     // "Celebi", // uknown gender
};
