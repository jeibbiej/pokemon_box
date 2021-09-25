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
	"0001"         : {ico: "22", flags: []},                     // "Bulbasaur",
	"0002"         : {ico: "22", flags: []},                     // "Ivysaur",
	"0003"         : {ico: "22", flags: []},                     // "Venusaur",
	"0004"         : {ico: "23", flags: []},                     // "Charmander",
	"0005"         : {ico: "23", flags: []},                     // "Charmeleon",
	"0006"         : {ico: "38", flags: []},                     // "Charizard",
	"0007"         : {ico: "21", flags: []},                     // "Squirtle",
	"0008"         : {ico: "21", flags: []},                     // "Wartortle",
	"0009"         : {ico: "21", flags: []},                     // "Blastoise",
	"0010"         : {ico: "24", flags: []},                     // "Caterpie",
	"0011"         : {ico: "24", flags: []},                     // "Metapod",
	"0012"         : {ico: "30", flags: []},                     // "Butterfree",
	"0013"         : {ico: "24", flags: []},                     // "Weedle",
	"0014"         : {ico: "24", flags: []},                     // "Kakuna",
	"0015"         : {ico: "11", flags: []},                     // "Beedrill",
	"0016"         : {ico: "07", flags: []},                     // "Pidgey",
	"0017"         : {ico: "07", flags: []},                     // "Pidgeotto",
	"0018"         : {ico: "07", flags: []},                     // "Pidgeot",
	"0019"         : {ico: "15", flags: []},                     // "Rattata",
	"0020"         : {ico: "15", flags: []},                     // "Raticate",
	"0021"         : {ico: "07", flags: []},                     // "Spearow",
	"0022"         : {ico: "07", flags: []},                     // "Fearow",
	"0023"         : {ico: "19", flags: []},                     // "Ekans",
	"0024"         : {ico: "19", flags: []},                     // "Arbok",
	"0025"         : {ico: "04", flags: []},                     // "Pikachu",
	"0026"         : {ico: "04", flags: []},                     // "Raichu",
	"0027"         : {ico: "08", flags: []},                     // "Sandshrew",
	"0028"         : {ico: "08", flags: []},                     // "Sandslash",
	"0029"         : {ico: "15", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran",
	"0029-f"       : {ico: "15", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♀",
	"0030"         : {ico: "15", flags: []},                     // "Nidorina",
	"0031"         : {ico: "08", flags: []},                     // "Nidoqueen",
	"0032"         : {ico: "15", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran",
	"0032-m"       : {ico: "15", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♂",
	"0033"         : {ico: "15", flags: []},                     // "Nidorino",
	"0034"         : {ico: "08", flags: []},                     // "Nidoking",
	"0035"         : {ico: "09", flags: []},                     // "Clefairy",
	"0036"         : {ico: "09", flags: []},                     // "Clefable",
	"0037"         : {ico: "15", flags: []},                     // "Vulpix",
	"0038"         : {ico: "15", flags: []},                     // "Ninetales",
	"0039"         : {ico: "02", flags: []},                     // "Jigglypuff",
	"0040"         : {ico: "02", flags: []},                     // "Wigglytuff",
	"0041"         : {ico: "31", flags: []},                     // "Zubat",
	"0042"         : {ico: "31", flags: []},                     // "Golbat",
	"0043"         : {ico: "10", flags: []},                     // "Oddish",
	"0044"         : {ico: "10", flags: []},                     // "Gloom",
	"0045"         : {ico: "10", flags: []},                     // "Vileplume",
	"0046"         : {ico: "11", flags: []},                     // "Paras",
	"0047"         : {ico: "11", flags: []},                     // "Parasect",
	"0048"         : {ico: "24", flags: []},                     // "Venonat",
	"0049"         : {ico: "30", flags: []},                     // "Venomoth",
	"0050"         : {ico: "03", flags: []},                     // "Diglett",
	"0051"         : {ico: "03", flags: []},                     // "Dugtrio",
	"0052"         : {ico: "15", flags: []},                     // "Meowth",
	"0053"         : {ico: "15", flags: []},                     // "Persian",
	"0054"         : {ico: "08", flags: []},                     // "Psyduck",
	"0055"         : {ico: "08", flags: []},                     // "Golduck",
	"0056"         : {ico: "27", flags: []},                     // "Mankey",
	"0057"         : {ico: "27", flags: []},                     // "Primeape",
	"0058"         : {ico: "15", flags: []},                     // "Growlithe",
	"0059"         : {ico: "15", flags: []},                     // "Arcanine",
	"0060"         : {ico: "01", flags: []},                     // "Poliwag",
	"0061"         : {ico: "01", flags: []},                     // "Poliwhirl",
	"0062"         : {ico: "01", flags: []},                     // "Poliwrath",
	"0063"         : {ico: "14", flags: []},                     // "Abra",
	"0064"         : {ico: "14", flags: []},                     // "Kadabra",
	"0065"         : {ico: "14", flags: []},                     // "Alakazam",
	"0066"         : {ico: "27", flags: []},                     // "Machop",
	"0067"         : {ico: "27", flags: []},                     // "Machoke",
	"0068"         : {ico: "27", flags: []},                     // "Machamp",
	"0069"         : {ico: "10", flags: []},                     // "Bellsprout",
	"0070"         : {ico: "10", flags: []},                     // "Weepinbell",
	"0071"         : {ico: "10", flags: []},                     // "Victreebel",
	"0072"         : {ico: "29", flags: []},                     // "Tentacool",
	"0073"         : {ico: "29", flags: []},                     // "Tentacruel",
	"0074"         : {ico: "26", flags: []},                     // "Geodude",
	"0075"         : {ico: "26", flags: []},                     // "Graveler",
	"0076"         : {ico: "26", flags: []},                     // "Golem",
	"0077"         : {ico: "16", flags: []},                     // "Ponyta",
	"0078"         : {ico: "16", flags: []},                     // "Rapidash",
	"0079"         : {ico: "36", flags: []},                     // "Slowpoke",
	"0080"         : {ico: "36", flags: []},                     // "Slowbro",
	"0081"         : {ico: "20", flags: []},                     // "Magnemite",
	"0082"         : {ico: "20", flags: []},                     // "Magneton",
	"0083"         : {ico: "07", flags: []},                     // "Farfetch'd",
	"0084"         : {ico: "07", flags: []},                     // "Doduo",
	"0085"         : {ico: "07", flags: []},                     // "Dodrio",
	"0086"         : {ico: "13", flags: []},                     // "Seel",
	"0087"         : {ico: "13", flags: []},                     // "Dewgong",
	"0088"         : {ico: "18", flags: []},                     // "Grimer",
	"0089"         : {ico: "18", flags: []},                     // "Muk",
	"0090"         : {ico: "17", flags: []},                     // "Shellder",
	"0091"         : {ico: "17", flags: []},                     // "Cloyster",
	"0092"         : {ico: "12", flags: []},                     // "Gastly",
	"0093"         : {ico: "12", flags: []},                     // "Haunter",
	"0094"         : {ico: "12", flags: []},                     // "Gengar",
	"0095"         : {ico: "19", flags: []},                     // "Onix",
	"0096"         : {ico: "14", flags: []},                     // "Drowzee",
	"0097"         : {ico: "14", flags: []},                     // "Hypno",
	"0098"         : {ico: "17", flags: []},                     // "Krabby",
	"0099"         : {ico: "17", flags: []},                     // "Kingler",
	"0100"         : {ico: "20", flags: []},                     // "Voltorb", // uknown gender
	"0101"         : {ico: "20", flags: []},                     // "Electrode", // uknown gender
	"0102"         : {ico: "10", flags: []},                     // "Exeggcute",
	"0103"         : {ico: "10", flags: []},                     // "Exeggutor",
	"0104"         : {ico: "08", flags: []},                     // "Cubone",
	"0105"         : {ico: "08", flags: []},                     // "Marowak",
	"0106"         : {ico: "27", flags: []},                     // "Hitmonlee", // male only
	"0107"         : {ico: "27", flags: []},                     // "Hitmonchan", // male only
	"0108"         : {ico: "08", flags: []},                     // "Lickitung",
	"0109"         : {ico: "18", flags: []},                     // "Koffing",
	"0110"         : {ico: "18", flags: []},                     // "Weezing",
	"0111"         : {ico: "16", flags: []},                     // "Rhyhorn",
	"0112"         : {ico: "08", flags: []},                     // "Rhydon",
	"0113"         : {ico: "09", flags: []},                     // "Chansey", // female only
	"0114"         : {ico: "10", flags: []},                     // "Tangela",
	"0115"         : {ico: "08", flags: []},                     // "Kangaskhan", // female only
	"0116"         : {ico: "06", flags: []},                     // "Horsea",
	"0117"         : {ico: "06", flags: []},                     // "Seadra",
	"0118"         : {ico: "06", flags: []},                     // "Goldeen",
	"0119"         : {ico: "06", flags: []},                     // "Seaking",
	"0120"         : {ico: "05", flags: []},                     // "Staryu", // uknown gender
	"0121"         : {ico: "05", flags: []},                     // "Starmie", // uknown gender
	"0122"         : {ico: "14", flags: []},                     // "Mr. Mime",
	"0123"         : {ico: "11", flags: []},                     // "Scyther",
	"0124"         : {ico: "14", flags: []},                     // "Jynx", // female only
	"0125"         : {ico: "14", flags: []},                     // "Electabuzz",
	"0126"         : {ico: "14", flags: []},                     // "Magmar",
	"0127"         : {ico: "11", flags: []},                     // "Pinsir",
	"0128"         : {ico: "16", flags: []},                     // "Tauros", // male only
	"0129"         : {ico: "06", flags: []},                     // "Magikarp",
	"0130"         : {ico: "35", flags: []},                     // "Gyarados",
	"0131"         : {ico: "13", flags: []},                     // "Lapras",
	"0132"         : {ico: "18", flags: []},                     // "Ditto", // uknown gender
	"0133"         : {ico: "15", flags: []},                     // "Eevee",
	"0134"         : {ico: "15", flags: []},                     // "Vaporeon",
	"0135"         : {ico: "15", flags: []},                     // "Jolteon",
	"0136"         : {ico: "15", flags: []},                     // "Flareon",
	"0137"         : {ico: "20", flags: []},                     // "Porygon", // uknown gender
	"0138"         : {ico: "17", flags: []},                     // "Omanyte",
	"0139"         : {ico: "17", flags: []},                     // "Omastar",
	"0140"         : {ico: "17", flags: []},                     // "Kabuto",
	"0141"         : {ico: "17", flags: []},                     // "Kabutops",
	"0142"         : {ico: "07", flags: []},                     // "Aerodactyl",
	"0143"         : {ico: "32", flags: []},                     // "Snorlax",
	"0144"         : {ico: "07", flags: []},                     // "Articuno", // uknown gender
	"0145"         : {ico: "07", flags: []},                     // "Zapdos", // uknown gender
	"0146"         : {ico: "07", flags: []},                     // "Moltres", // uknown gender
	"0147"         : {ico: "19", flags: []},                     // "Dratini",
	"0148"         : {ico: "19", flags: []},                     // "Dragonair",
	"0149"         : {ico: "38", flags: []},                     // "Dragonite",
	"0150"         : {ico: "14", flags: []},                     // "Mewtwo", // uknown gender
	"0151"         : {ico: "14", flags: []},                     // "Mew", // uknown gender
	"0152"         : {ico: "10", flags: []},                     // "Chikorita",
	"0153"         : {ico: "10", flags: []},                     // "Bayleef",
	"0154"         : {ico: "10", flags: []},                     // "Meganium",
	"0155"         : {ico: "15", flags: []},                     // "Cyndaquil",
	"0156"         : {ico: "15", flags: []},                     // "Quilava",
	"0157"         : {ico: "15", flags: []},                     // "Typhlosion",
	"0158"         : {ico: "08", flags: []},                     // "Totodile",
	"0159"         : {ico: "08", flags: []},                     // "Croconaw",
	"0160"         : {ico: "08", flags: []},                     // "Feraligatr",
	"0161"         : {ico: "15", flags: []},                     // "Sentret",
	"0162"         : {ico: "15", flags: []},                     // "Furret",
	"0163"         : {ico: "07", flags: []},                     // "Hoothoot",
	"0164"         : {ico: "07", flags: []},                     // "Noctowl",
	"0165"         : {ico: "11", flags: []},                     // "Ledyba",
	"0166"         : {ico: "11", flags: []},                     // "Ledian",
	"0167"         : {ico: "11", flags: []},                     // "Spinarak",
	"0168"         : {ico: "11", flags: []},                     // "Ariados",
	"0169"         : {ico: "31", flags: []},                     // "Crobat",
	"0170"         : {ico: "06", flags: []},                     // "Chinchou",
	"0171"         : {ico: "06", flags: []},                     // "Lanturn",
	"0172"         : {ico: "04", flags: []},                     // "Pichu",
	"0173"         : {ico: "09", flags: []},                     // "Cleffa",
	"0174"         : {ico: "02", flags: []},                     // "Igglybuff",
	"0175"         : {ico: "09", flags: []},                     // "Togepi",
	"0176"         : {ico: "07", flags: []},                     // "Togetic",
	"0177"         : {ico: "07", flags: []},                     // "Natu",
	"0178"         : {ico: "07", flags: []},                     // "Xatu",
	"0179"         : {ico: "15", flags: []},                     // "Mareep",
	"0180"         : {ico: "08", flags: []},                     // "Flaaffy",
	"0181"         : {ico: "08", flags: []},                     // "Ampharos",
	"0182"         : {ico: "10", flags: []},                     // "Bellossom",
	"0183"         : {ico: "02", flags: []},                     // "Marill",
	"0184"         : {ico: "02", flags: []},                     // "Azumarill",
	"0185"         : {ico: "37", flags: []},                     // "Sudowoodo",
	"0186"         : {ico: "01", flags: []},                     // "Politoed",
	"0187"         : {ico: "10", flags: []},                     // "Hoppip",
	"0188"         : {ico: "10", flags: []},                     // "Skiploom",
	"0189"         : {ico: "10", flags: []},                     // "Jumpluff",
	"0190"         : {ico: "08", flags: []},                     // "Aipom",
	"0191"         : {ico: "10", flags: []},                     // "Sunkern",
	"0192"         : {ico: "10", flags: []},                     // "Sunflora",
	"0193"         : {ico: "11", flags: []},                     // "Yanma",
	"0194"         : {ico: "08", flags: []},                     // "Wooper",
	"0195"         : {ico: "08", flags: []},                     // "Quagsire",
	"0196"         : {ico: "15", flags: []},                     // "Espeon",
	"0197"         : {ico: "15", flags: []},                     // "Umbreon",
	"0198"         : {ico: "07", flags: []},                     // "Murkrow",
	"0199"         : {ico: "36", flags: []},                     // "Slowking",
	"0200"         : {ico: "12", flags: []},                     // "Misdreavus",
	"0201"         : {ico: "25", flags: [FORM_0201_BASE]},       // "Unown", // uknown gender
	"0201-angry"   : {ico: "25", flags: [FORM_0201]},            // "Unown Angry", // uknown gender
	"0201-bear"    : {ico: "25", flags: [FORM_0201]},            // "Unown Bear", // uknown gender
	"0201-chase"   : {ico: "25", flags: [FORM_0201]},            // "Unown Chase", // uknown gender
	"0201-direct"  : {ico: "25", flags: [FORM_0201]},            // "Unown Direct", // uknown gender
	"0201-engage"  : {ico: "25", flags: [FORM_0201]},            // "Unown Engage", // uknown gender
	"0201-find"    : {ico: "25", flags: [FORM_0201]},            // "Unown Find", // uknown gender
	"0201-give"    : {ico: "25", flags: [FORM_0201]},            // "Unown Give", // uknown gender
	"0201-help"    : {ico: "25", flags: [FORM_0201]},            // "Unown Help", // uknown gender
	"0201-increase": {ico: "25", flags: [FORM_0201]},            // "Unown Increase", // uknown gender
	"0201-join"    : {ico: "25", flags: [FORM_0201]},            // "Unown Join", // uknown gender
	"0201-keep"    : {ico: "25", flags: [FORM_0201]},            // "Unown Keep", // uknown gender
	"0201-laugh"   : {ico: "25", flags: [FORM_0201]},            // "Unown Laugh", // uknown gender
	"0201-make"    : {ico: "25", flags: [FORM_0201]},            // "Unown Make", // uknown gender
	"0201-nuzzle"  : {ico: "25", flags: [FORM_0201]},            // "Unown Nuzzle", // uknown gender
	"0201-observe" : {ico: "25", flags: [FORM_0201]},            // "Unown Observe", // uknown gender
	"0201-perform" : {ico: "25", flags: [FORM_0201]},            // "Unown Perform", // uknown gender
	"0201-quicken" : {ico: "25", flags: [FORM_0201]},            // "Unown Quicken", // uknown gender
	"0201-reassure": {ico: "25", flags: [FORM_0201]},            // "Unown Reassure", // uknown gender
	"0201-search"  : {ico: "25", flags: [FORM_0201]},            // "Unown Search", // uknown gender
	"0201-tell"    : {ico: "25", flags: [FORM_0201]},            // "Unown Tell", // uknown gender
	"0201-undo"    : {ico: "25", flags: [FORM_0201]},            // "Unown Undo", // uknown gender
	"0201-vanish"  : {ico: "25", flags: [FORM_0201]},            // "Unown Vanish", // uknown gender
	"0201-want"    : {ico: "25", flags: [FORM_0201]},            // "Unown Want", // uknown gender
	"0201-xxxxx"   : {ico: "25", flags: [FORM_0201]},            // "Unown XXXXX", // uknown gender
	"0201-yield"   : {ico: "25", flags: [FORM_0201]},            // "Unown Yield", // uknown gender
	"0201-zoom"    : {ico: "25", flags: [FORM_0201]},            // "Unown Zoom", // uknown gender
	"0202"         : {ico: "12", flags: []},                     // "Wobbuffet",
	"0203"         : {ico: "16", flags: []},                     // "Girafarig",
	"0204"         : {ico: "11", flags: []},                     // "Pineco",
	"0205"         : {ico: "11", flags: []},                     // "Forretress",
	"0206"         : {ico: "19", flags: []},                     // "Dunsparce",
	"0207"         : {ico: "11", flags: []},                     // "Gligar",
	"0208"         : {ico: "19", flags: []},                     // "Steelix",
	"0209"         : {ico: "08", flags: []},                     // "Snubbull",
	"0210"         : {ico: "08", flags: []},                     // "Granbull",
	"0211"         : {ico: "06", flags: []},                     // "Qwilfish",
	"0212"         : {ico: "11", flags: []},                     // "Scizor",
	"0213"         : {ico: "11", flags: []},                     // "Shuckle",
	"0214"         : {ico: "11", flags: []},                     // "Heracross",
	"0215"         : {ico: "15", flags: []},                     // "Sneasel",
	"0216"         : {ico: "08", flags: []},                     // "Teddiursa",
	"0217"         : {ico: "08", flags: []},                     // "Ursaring",
	"0218"         : {ico: "18", flags: []},                     // "Slugma",
	"0219"         : {ico: "18", flags: []},                     // "Magcargo",
	"0220"         : {ico: "16", flags: []},                     // "Swinub",
	"0221"         : {ico: "16", flags: []},                     // "Piloswine",
	"0222"         : {ico: "17", flags: []},                     // "Corsola",
	"0223"         : {ico: "06", flags: []},                     // "Remoraid",
	"0224"         : {ico: "06", flags: []},                     // "Octillery",
	"0225"         : {ico: "08", flags: []},                     // "Delibird",
	"0226"         : {ico: "06", flags: []},                     // "Mantine",
	"0227"         : {ico: "07", flags: []},                     // "Skarmory",
	"0228"         : {ico: "15", flags: []},                     // "Houndour",
	"0229"         : {ico: "15", flags: []},                     // "Houndoom",
	"0230"         : {ico: "38", flags: []},                     // "Kingdra",
	"0231"         : {ico: "16", flags: []},                     // "Phanpy",
	"0232"         : {ico: "16", flags: []},                     // "Donphan",
	"0233"         : {ico: "20", flags: []},                     // "Porygon2", // uknown gender
	"0234"         : {ico: "16", flags: []},                     // "Stantler",
	"0235"         : {ico: "08", flags: []},                     // "Smeargle",
	"0236"         : {ico: "27", flags: []},                     // "Tyrogue", // male only
	"0237"         : {ico: "27", flags: []},                     // "Hitmontop", // male only
	"0238"         : {ico: "14", flags: []},                     // "Smoochum", // female only
	"0239"         : {ico: "14", flags: []},                     // "Elekid",
	"0240"         : {ico: "14", flags: []},                     // "Magby",
	"0241"         : {ico: "16", flags: []},                     // "Miltank", // female only
	"0242"         : {ico: "09", flags: []},                     // "Blissey", // female only
	"0243"         : {ico: "15", flags: []},                     // "Raikou", // uknown gender
	"0244"         : {ico: "15", flags: []},                     // "Entei", // uknown gender
	"0245"         : {ico: "15", flags: []},                     // "Suicune", // uknown gender
	"0246"         : {ico: "08", flags: []},                     // "Larvitar",
	"0247"         : {ico: "08", flags: []},                     // "Pupitar",
	"0248"         : {ico: "08", flags: []},                     // "Tyranitar",
	"0249"         : {ico: "34", flags: []},                     // "Lugia", // uknown gender
	"0250"         : {ico: "33", flags: []},                     // "Ho-Oh", // uknown gender
	"0251"         : {ico: "14", flags: []},                     // "Celebi", // uknown gender
};

//============================================================================
// EVOLUTION POKEDEX
//============================================================================
const _Regdex_e_201 =
{
	"0001"         : {ico: "22", flags: []},                     // "Bulbasaur",
	"0002"         : {ico: "22", flags: []},                     // "Ivysaur",
	"0003"         : {ico: "22", flags: []},                     // "Venusaur",
	"0004"         : {ico: "23", flags: []},                     // "Charmander",
	"0005"         : {ico: "23", flags: []},                     // "Charmeleon",
	"0006"         : {ico: "38", flags: []},                     // "Charizard",
	"0007"         : {ico: "21", flags: []},                     // "Squirtle",
	"0008"         : {ico: "21", flags: []},                     // "Wartortle",
	"0009"         : {ico: "21", flags: []},                     // "Blastoise",
	"0010"         : {ico: "24", flags: []},                     // "Caterpie",
	"0011"         : {ico: "24", flags: []},                     // "Metapod",
	"0012"         : {ico: "30", flags: []},                     // "Butterfree",
	"0013"         : {ico: "24", flags: []},                     // "Weedle",
	"0014"         : {ico: "24", flags: []},                     // "Kakuna",
	"0015"         : {ico: "11", flags: []},                     // "Beedrill",
	"0016"         : {ico: "07", flags: []},                     // "Pidgey",
	"0017"         : {ico: "07", flags: []},                     // "Pidgeotto",
	"0018"         : {ico: "07", flags: []},                     // "Pidgeot",
	"0019"         : {ico: "15", flags: []},                     // "Rattata",
	"0020"         : {ico: "15", flags: []},                     // "Raticate",
	"0021"         : {ico: "07", flags: []},                     // "Spearow",
	"0022"         : {ico: "07", flags: []},                     // "Fearow",
	"0023"         : {ico: "19", flags: []},                     // "Ekans",
	"0024"         : {ico: "19", flags: []},                     // "Arbok",
	"0172"         : {ico: "04", flags: []},                     // "Pichu",
	"0025"         : {ico: "04", flags: []},                     // "Pikachu",
	"0026"         : {ico: "04", flags: []},                     // "Raichu",
	"0027"         : {ico: "08", flags: []},                     // "Sandshrew",
	"0028"         : {ico: "08", flags: []},                     // "Sandslash",
	"0029"         : {ico: "15", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran♀", SPOT (in-game trade)
	"0029-f"       : {ico: "15", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♀", SPOT (in-game trade)
	"0030"         : {ico: "15", flags: []},                     // "Nidorina", TERRY (in-game trade)
	"0031"         : {ico: "08", flags: []},                     // "Nidoqueen",
	"0032"         : {ico: "15", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran♂",
	"0032-m"       : {ico: "15", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♂",
	"0033"         : {ico: "15", flags: []},                     // "Nidorino",
	"0034"         : {ico: "08", flags: []},                     // "Nidoking",
	"0173"         : {ico: "09", flags: []},                     // "Cleffa",
	"0035"         : {ico: "09", flags: []},                     // "Clefairy",
	"0036"         : {ico: "09", flags: []},                     // "Clefable",
	"0037"         : {ico: "15", flags: []},                     // "Vulpix",
	"0038"         : {ico: "15", flags: []},                     // "Ninetales",
	"0174"         : {ico: "02", flags: []},                     // "Igglybuff",
	"0039"         : {ico: "02", flags: []},                     // "Jigglypuff",
	"0040"         : {ico: "02", flags: []},                     // "Wigglytuff",
	"0041"         : {ico: "31", flags: []},                     // "Zubat",
	"0042"         : {ico: "31", flags: []},                     // "Golbat",
	"0169"         : {ico: "31", flags: []},                     // "Crobat",
	"0043"         : {ico: "10", flags: []},                     // "Oddish",
	"0044"         : {ico: "10", flags: []},                     // "Gloom",
	"0045"         : {ico: "10", flags: []},                     // "Vileplume",
	"0182"         : {ico: "10", flags: []},                     // "Bellossom",
	"0046"         : {ico: "11", flags: []},                     // "Paras",
	"0047"         : {ico: "11", flags: []},                     // "Parasect",
	"0048"         : {ico: "24", flags: []},                     // "Venonat",
	"0049"         : {ico: "30", flags: []},                     // "Venomoth",
	"0050"         : {ico: "03", flags: []},                     // "Diglett",
	"0051"         : {ico: "03", flags: []},                     // "Dugtrio",
	"0052"         : {ico: "15", flags: []},                     // "Meowth",
	"0053"         : {ico: "15", flags: []},                     // "Persian",
	"0054"         : {ico: "08", flags: []},                     // "Psyduck",
	"0055"         : {ico: "08", flags: []},                     // "Golduck",
	"0056"         : {ico: "27", flags: []},                     // "Mankey",
	"0057"         : {ico: "27", flags: []},                     // "Primeape",
	"0058"         : {ico: "15", flags: []},                     // "Growlithe",
	"0059"         : {ico: "15", flags: []},                     // "Arcanine",
	"0060"         : {ico: "01", flags: []},                     // "Poliwag",
	"0061"         : {ico: "01", flags: []},                     // "Poliwhirl",
	"0062"         : {ico: "01", flags: []},                     // "Poliwrath",
	"0186"         : {ico: "01", flags: []},                     // "Politoed",
	"0063"         : {ico: "14", flags: []},                     // "Abra",
	"0064"         : {ico: "14", flags: []},                     // "Kadabra",
	"0065"         : {ico: "14", flags: []},                     // "Alakazam",
	"0066"         : {ico: "27", flags: []},                     // "Machop",
	"0067"         : {ico: "27", flags: []},                     // "Machoke",
	"0068"         : {ico: "27", flags: []},                     // "Machamp",
	"0069"         : {ico: "10", flags: []},                     // "Bellsprout",
	"0070"         : {ico: "10", flags: []},                     // "Weepinbell",
	"0071"         : {ico: "10", flags: []},                     // "Victreebel",
	"0072"         : {ico: "29", flags: []},                     // "Tentacool",
	"0073"         : {ico: "29", flags: []},                     // "Tentacruel",
	"0074"         : {ico: "26", flags: []},                     // "Geodude",
	"0075"         : {ico: "26", flags: []},                     // "Graveler",
	"0076"         : {ico: "26", flags: []},                     // "Golem",
	"0077"         : {ico: "16", flags: []},                     // "Ponyta",
	"0078"         : {ico: "16", flags: []},                     // "Rapidash",
	"0079"         : {ico: "36", flags: []},                     // "Slowpoke",
	"0080"         : {ico: "36", flags: []},                     // "Slowbro",
	"0199"         : {ico: "36", flags: []},                     // "Slowking",
	"0081"         : {ico: "20", flags: []},                     // "Magnemite",
	"0082"         : {ico: "20", flags: []},                     // "Magneton",
	"0083"         : {ico: "07", flags: []},                     // "Farfetch'd", DUX (in-game trade)
	"0084"         : {ico: "07", flags: []},                     // "Doduo",
	"0085"         : {ico: "07", flags: []},                     // "Dodrio",
	"0086"         : {ico: "13", flags: []},                     // "Seel", SAILOR (in-game trade)
	"0087"         : {ico: "13", flags: []},                     // "Dewgong",
	"0088"         : {ico: "18", flags: []},                     // "Grimer",
	"0089"         : {ico: "18", flags: []},                     // "Muk",
	"0090"         : {ico: "17", flags: []},                     // "Shellder",
	"0091"         : {ico: "17", flags: []},                     // "Cloyster",
	"0092"         : {ico: "12", flags: []},                     // "Gastly",
	"0093"         : {ico: "12", flags: []},                     // "Haunter",
	"0094"         : {ico: "12", flags: []},                     // "Gengar",
	"0095"         : {ico: "19", flags: []},                     // "Onix",
	"0208"         : {ico: "19", flags: []},                     // "Steelix",
	"0096"         : {ico: "14", flags: []},                     // "Drowzee",
	"0097"         : {ico: "14", flags: []},                     // "Hypno",
	"0098"         : {ico: "17", flags: []},                     // "Krabby",
	"0099"         : {ico: "17", flags: []},                     // "Kingler",
	"0100"         : {ico: "20", flags: []},                     // "Voltorb", // uknown gender
	"0101"         : {ico: "20", flags: []},                     // "Electrode", // uknown gender DORIS (in-game trade)
	"0102"         : {ico: "10", flags: []},                     // "Exeggcute",
	"0103"         : {ico: "10", flags: []},                     // "Exeggutor",
	"0104"         : {ico: "08", flags: []},                     // "Cubone",
	"0105"         : {ico: "08", flags: []},                     // "Marowak",
	"0236"         : {ico: "27", flags: []},                     // "Tyrogue", // male only
	"0106"         : {ico: "27", flags: []},                     // "Hitmonlee", // male only
	"0107"         : {ico: "27", flags: []},                     // "Hitmonchan", // male only
	"0237"         : {ico: "27", flags: []},                     // "Hitmontop", // male only
	"0108"         : {ico: "08", flags: []},                     // "Lickitung", MARC (in-game trade)
	"0109"         : {ico: "18", flags: []},                     // "Koffing",
	"0110"         : {ico: "18", flags: []},                     // "Weezing",
	"0111"         : {ico: "16", flags: []},                     // "Rhyhorn",
	"0112"         : {ico: "08", flags: []},                     // "Rhydon",
	"0113"         : {ico: "09", flags: []},                     // "Chansey", // female only
	"0242"         : {ico: "09", flags: []},                     // "Blissey", // female only
	"0114"         : {ico: "10", flags: []},                     // "Tangela", CRINKLES (in-game trade)
	"0115"         : {ico: "08", flags: []},                     // "Kangaskhan", // female only
	"0116"         : {ico: "06", flags: []},                     // "Horsea",
	"0117"         : {ico: "06", flags: []},                     // "Seadra",
	"0230"         : {ico: "38", flags: []},                     // "Kingdra",
	"0118"         : {ico: "06", flags: []},                     // "Goldeen",
	"0119"         : {ico: "06", flags: []},                     // "Seaking",
	"0120"         : {ico: "05", flags: []},                     // "Staryu", // uknown gender
	"0121"         : {ico: "05", flags: []},                     // "Starmie", // uknown gender
	"0122"         : {ico: "14", flags: []},                     // "Mr. Mime", MARCEL (in-game trade)
	"0123"         : {ico: "11", flags: []},                     // "Scyther",
	"0212"         : {ico: "11", flags: []},                     // "Scizor",
	"0238"         : {ico: "14", flags: []},                     // "Smoochum", // female only
	"0124"         : {ico: "14", flags: []},                     // "Jynx", // female only LOLA (in-game trade)
	"0239"         : {ico: "14", flags: []},                     // "Elekid",
	"0125"         : {ico: "14", flags: []},                     // "Electabuzz",
	"0240"         : {ico: "14", flags: []},                     // "Magby",
	"0126"         : {ico: "14", flags: []},                     // "Magmar",
	"0127"         : {ico: "11", flags: []},                     // "Pinsir",
	"0128"         : {ico: "16", flags: []},                     // "Tauros", // male only
	"0129"         : {ico: "06", flags: []},                     // "Magikarp",
	"0130"         : {ico: "35", flags: []},                     // "Gyarados",
	"0131"         : {ico: "13", flags: []},                     // "Lapras",
	"0132"         : {ico: "18", flags: []},                     // "Ditto", // uknown gender
	"0133"         : {ico: "15", flags: []},                     // "Eevee",
	"0134"         : {ico: "15", flags: []},                     // "Vaporeon",
	"0135"         : {ico: "15", flags: []},                     // "Jolteon",
	"0136"         : {ico: "15", flags: []},                     // "Flareon",
	"0196"         : {ico: "15", flags: []},                     // "Espeon",
	"0197"         : {ico: "15", flags: []},                     // "Umbreon",
	"0137"         : {ico: "20", flags: []},                     // "Porygon", // uknown gender
	"0233"         : {ico: "20", flags: []},                     // "Porygon2", // uknown gender
	"0138"         : {ico: "17", flags: []},                     // "Omanyte",
	"0139"         : {ico: "17", flags: []},                     // "Omastar",
	"0140"         : {ico: "17", flags: []},                     // "Kabuto",
	"0141"         : {ico: "17", flags: []},                     // "Kabutops",
	"0142"         : {ico: "07", flags: []},                     // "Aerodactyl",
	"0143"         : {ico: "32", flags: []},                     // "Snorlax",
	"0144"         : {ico: "07", flags: []},                     // "Articuno", // uknown gender
	"0145"         : {ico: "07", flags: []},                     // "Zapdos", // uknown gender
	"0146"         : {ico: "07", flags: []},                     // "Moltres", // uknown gender
	"0147"         : {ico: "19", flags: []},                     // "Dratini",
	"0148"         : {ico: "19", flags: []},                     // "Dragonair",
	"0149"         : {ico: "38", flags: []},                     // "Dragonite",
	"0150"         : {ico: "14", flags: []},                     // "Mewtwo", // uknown gender
	"0151"         : {ico: "14", flags: []},                     // "Mew", // uknown gender
	"0152"         : {ico: "10", flags: []},                     // "Chikorita",
	"0153"         : {ico: "10", flags: []},                     // "Bayleef",
	"0154"         : {ico: "10", flags: []},                     // "Meganium",
	"0155"         : {ico: "15", flags: []},                     // "Cyndaquil",
	"0156"         : {ico: "15", flags: []},                     // "Quilava",
	"0157"         : {ico: "15", flags: []},                     // "Typhlosion",
	"0158"         : {ico: "08", flags: []},                     // "Totodile",
	"0159"         : {ico: "08", flags: []},                     // "Croconaw",
	"0160"         : {ico: "08", flags: []},                     // "Feraligatr",
	"0161"         : {ico: "15", flags: []},                     // "Sentret",
	"0162"         : {ico: "15", flags: []},                     // "Furret",
	"0163"         : {ico: "07", flags: []},                     // "Hoothoot",
	"0164"         : {ico: "07", flags: []},                     // "Noctowl",
	"0165"         : {ico: "11", flags: []},                     // "Ledyba",
	"0166"         : {ico: "11", flags: []},                     // "Ledian",
	"0167"         : {ico: "11", flags: []},                     // "Spinarak",
	"0168"         : {ico: "11", flags: []},                     // "Ariados",
	"0170"         : {ico: "06", flags: []},                     // "Chinchou",
	"0171"         : {ico: "06", flags: []},                     // "Lanturn",
	"0175"         : {ico: "09", flags: []},                     // "Togepi",
	"0176"         : {ico: "07", flags: []},                     // "Togetic",
	"0177"         : {ico: "07", flags: []},                     // "Natu",
	"0178"         : {ico: "07", flags: []},                     // "Xatu",
	"0179"         : {ico: "15", flags: []},                     // "Mareep",
	"0180"         : {ico: "08", flags: []},                     // "Flaaffy",
	"0181"         : {ico: "08", flags: []},                     // "Ampharos",
	"0183"         : {ico: "02", flags: []},                     // "Marill",
	"0184"         : {ico: "02", flags: []},                     // "Azumarill",
	"0185"         : {ico: "37", flags: []},                     // "Sudowoodo",
	"0187"         : {ico: "10", flags: []},                     // "Hoppip",
	"0188"         : {ico: "10", flags: []},                     // "Skiploom",
	"0189"         : {ico: "10", flags: []},                     // "Jumpluff",
	"0190"         : {ico: "08", flags: []},                     // "Aipom",
	"0191"         : {ico: "10", flags: []},                     // "Sunkern",
	"0192"         : {ico: "10", flags: []},                     // "Sunflora",
	"0193"         : {ico: "11", flags: []},                     // "Yanma",
	"0194"         : {ico: "08", flags: []},                     // "Wooper",
	"0195"         : {ico: "08", flags: []},                     // "Quagsire",
	"0198"         : {ico: "07", flags: []},                     // "Murkrow",
	"0200"         : {ico: "12", flags: []},                     // "Misdreavus",
	"0201"         : {ico: "25", flags: [FORM_0201_BASE]},       // "Unown", // uknown gender
	"0201-angry"   : {ico: "25", flags: [FORM_0201]},            // "Unown Angry", // uknown gender
	"0201-bear"    : {ico: "25", flags: [FORM_0201]},            // "Unown Bear", // uknown gender
	"0201-chase"   : {ico: "25", flags: [FORM_0201]},            // "Unown Chase", // uknown gender
	"0201-direct"  : {ico: "25", flags: [FORM_0201]},            // "Unown Direct", // uknown gender
	"0201-engage"  : {ico: "25", flags: [FORM_0201]},            // "Unown Engage", // uknown gender
	"0201-find"    : {ico: "25", flags: [FORM_0201]},            // "Unown Find", // uknown gender
	"0201-give"    : {ico: "25", flags: [FORM_0201]},            // "Unown Give", // uknown gender
	"0201-help"    : {ico: "25", flags: [FORM_0201]},            // "Unown Help", // uknown gender
	"0201-increase": {ico: "25", flags: [FORM_0201]},            // "Unown Increase", // uknown gender
	"0201-join"    : {ico: "25", flags: [FORM_0201]},            // "Unown Join", // uknown gender
	"0201-keep"    : {ico: "25", flags: [FORM_0201]},            // "Unown Keep", // uknown gender
	"0201-laugh"   : {ico: "25", flags: [FORM_0201]},            // "Unown Laugh", // uknown gender
	"0201-make"    : {ico: "25", flags: [FORM_0201]},            // "Unown Make", // uknown gender
	"0201-nuzzle"  : {ico: "25", flags: [FORM_0201]},            // "Unown Nuzzle", // uknown gender
	"0201-observe" : {ico: "25", flags: [FORM_0201]},            // "Unown Observe", // uknown gender
	"0201-perform" : {ico: "25", flags: [FORM_0201]},            // "Unown Perform", // uknown gender
	"0201-quicken" : {ico: "25", flags: [FORM_0201]},            // "Unown Quicken", // uknown gender
	"0201-reassure": {ico: "25", flags: [FORM_0201]},            // "Unown Reassure", // uknown gender
	"0201-search"  : {ico: "25", flags: [FORM_0201]},            // "Unown Search", // uknown gender
	"0201-tell"    : {ico: "25", flags: [FORM_0201]},            // "Unown Tell", // uknown gender
	"0201-undo"    : {ico: "25", flags: [FORM_0201]},            // "Unown Undo", // uknown gender
	"0201-vanish"  : {ico: "25", flags: [FORM_0201]},            // "Unown Vanish", // uknown gender
	"0201-want"    : {ico: "25", flags: [FORM_0201]},            // "Unown Want", // uknown gender
	"0201-xxxxx"   : {ico: "25", flags: [FORM_0201]},            // "Unown XXXXX", // uknown gender
	"0201-yield"   : {ico: "25", flags: [FORM_0201]},            // "Unown Yield", // uknown gender
	"0201-zoom"    : {ico: "25", flags: [FORM_0201]},            // "Unown Zoom", // uknown gender
	"0202"         : {ico: "12", flags: []},                     // "Wobbuffet",
	"0203"         : {ico: "16", flags: []},                     // "Girafarig",
	"0204"         : {ico: "11", flags: []},                     // "Pineco",
	"0205"         : {ico: "11", flags: []},                     // "Forretress",
	"0206"         : {ico: "19", flags: []},                     // "Dunsparce",
	"0207"         : {ico: "11", flags: []},                     // "Gligar",
	"0209"         : {ico: "08", flags: []},                     // "Snubbull",
	"0210"         : {ico: "08", flags: []},                     // "Granbull",
	"0211"         : {ico: "06", flags: []},                     // "Qwilfish",
	"0213"         : {ico: "11", flags: []},                     // "Shuckle",
	"0214"         : {ico: "11", flags: []},                     // "Heracross",
	"0215"         : {ico: "15", flags: []},                     // "Sneasel",
	"0216"         : {ico: "08", flags: []},                     // "Teddiursa",
	"0217"         : {ico: "08", flags: []},                     // "Ursaring",
	"0218"         : {ico: "18", flags: []},                     // "Slugma",
	"0219"         : {ico: "18", flags: []},                     // "Magcargo",
	"0220"         : {ico: "16", flags: []},                     // "Swinub",
	"0221"         : {ico: "16", flags: []},                     // "Piloswine",
	"0222"         : {ico: "17", flags: []},                     // "Corsola",
	"0223"         : {ico: "06", flags: []},                     // "Remoraid",
	"0224"         : {ico: "06", flags: []},                     // "Octillery",
	"0225"         : {ico: "08", flags: []},                     // "Delibird",
	"0226"         : {ico: "06", flags: []},                     // "Mantine",
	"0227"         : {ico: "07", flags: []},                     // "Skarmory",
	"0228"         : {ico: "15", flags: []},                     // "Houndour",
	"0229"         : {ico: "15", flags: []},                     // "Houndoom",
	"0231"         : {ico: "16", flags: []},                     // "Phanpy",
	"0232"         : {ico: "16", flags: []},                     // "Donphan",
	"0234"         : {ico: "16", flags: []},                     // "Stantler",
	"0235"         : {ico: "08", flags: []},                     // "Smeargle",
	"0241"         : {ico: "16", flags: []},                     // "Miltank", // female only
	"0243"         : {ico: "15", flags: []},                     // "Raikou", // uknown gender
	"0244"         : {ico: "15", flags: []},                     // "Entei", // uknown gender
	"0245"         : {ico: "15", flags: []},                     // "Suicune", // uknown gender
	"0246"         : {ico: "08", flags: []},                     // "Larvitar",
	"0247"         : {ico: "08", flags: []},                     // "Pupitar",
	"0248"         : {ico: "08", flags: []},                     // "Tyranitar",
	"0249"         : {ico: "34", flags: []},                     // "Lugia", // uknown gender
	"0250"         : {ico: "33", flags: []},                     // "Ho-Oh", // uknown gender
	"0251"         : {ico: "14", flags: []},                     // "Celebi", // uknown gender
};

//============================================================================
// REGIONAL POKEDEX
//============================================================================
const _Regdex_r_201 =
{
	"0152"         : {ico: "10", flags: []},                     // "Chikorita",
	"0153"         : {ico: "10", flags: []},                     // "Bayleef",
	"0154"         : {ico: "10", flags: []},                     // "Meganium",
	"0155"         : {ico: "15", flags: []},                     // "Cyndaquil",
	"0156"         : {ico: "15", flags: []},                     // "Quilava",
	"0157"         : {ico: "15", flags: []},                     // "Typhlosion",
	"0158"         : {ico: "08", flags: []},                     // "Totodile",
	"0159"         : {ico: "08", flags: []},                     // "Croconaw",
	"0160"         : {ico: "08", flags: []},                     // "Feraligatr",
	"0016"         : {ico: "07", flags: []},                     // "Pidgey",
	"0017"         : {ico: "07", flags: []},                     // "Pidgeotto",
	"0018"         : {ico: "07", flags: []},                     // "Pidgeot",
	"0021"         : {ico: "07", flags: []},                     // "Spearow",
	"0022"         : {ico: "07", flags: []},                     // "Fearow",
	"0163"         : {ico: "07", flags: []},                     // "Hoothoot",
	"0164"         : {ico: "07", flags: []},                     // "Noctowl",
	"0019"         : {ico: "15", flags: []},                     // "Rattata",
	"0020"         : {ico: "15", flags: []},                     // "Raticate",
	"0161"         : {ico: "15", flags: []},                     // "Sentret",
	"0162"         : {ico: "15", flags: []},                     // "Furret",
	"0172"         : {ico: "04", flags: []},                     // "Pichu",
	"0025"         : {ico: "04", flags: []},                     // "Pikachu",
	"0026"         : {ico: "04", flags: []},                     // "Raichu",
	"0010"         : {ico: "24", flags: []},                     // "Caterpie",
	"0011"         : {ico: "24", flags: []},                     // "Metapod",
	"0012"         : {ico: "30", flags: []},                     // "Butterfree",
	"0013"         : {ico: "24", flags: []},                     // "Weedle",
	"0014"         : {ico: "24", flags: []},                     // "Kakuna",
	"0015"         : {ico: "11", flags: []},                     // "Beedrill",
	"0165"         : {ico: "11", flags: []},                     // "Ledyba",
	"0166"         : {ico: "11", flags: []},                     // "Ledian",
	"0167"         : {ico: "11", flags: []},                     // "Spinarak",
	"0168"         : {ico: "11", flags: []},                     // "Ariados",
	"0074"         : {ico: "26", flags: []},                     // "Geodude",
	"0075"         : {ico: "26", flags: []},                     // "Graveler",
	"0076"         : {ico: "26", flags: []},                     // "Golem",
	"0041"         : {ico: "31", flags: []},                     // "Zubat",
	"0042"         : {ico: "31", flags: []},                     // "Golbat",
	"0169"         : {ico: "31", flags: []},                     // "Crobat",
	"0173"         : {ico: "09", flags: []},                     // "Cleffa",
	"0035"         : {ico: "09", flags: []},                     // "Clefairy",
	"0036"         : {ico: "09", flags: []},                     // "Clefable",
	"0174"         : {ico: "02", flags: []},                     // "Igglybuff",
	"0039"         : {ico: "02", flags: []},                     // "Jigglypuff",
	"0040"         : {ico: "02", flags: []},                     // "Wigglytuff",
	"0175"         : {ico: "09", flags: []},                     // "Togepi",
	"0176"         : {ico: "07", flags: []},                     // "Togetic",
	"0027"         : {ico: "08", flags: []},                     // "Sandshrew",
	"0028"         : {ico: "08", flags: []},                     // "Sandslash",
	"0023"         : {ico: "19", flags: []},                     // "Ekans",
	"0024"         : {ico: "19", flags: []},                     // "Arbok",
	"0206"         : {ico: "19", flags: []},                     // "Dunsparce",
	"0179"         : {ico: "15", flags: []},                     // "Mareep",
	"0180"         : {ico: "08", flags: []},                     // "Flaaffy",
	"0181"         : {ico: "08", flags: []},                     // "Ampharos",
	"0194"         : {ico: "08", flags: []},                     // "Wooper",
	"0195"         : {ico: "08", flags: []},                     // "Quagsire",
	"0092"         : {ico: "12", flags: []},                     // "Gastly",
	"0093"         : {ico: "12", flags: []},                     // "Haunter",
	"0094"         : {ico: "12", flags: []},                     // "Gengar",
	"0201"         : {ico: "25", flags: [FORM_0201_BASE]},  // "Unown", // uknown gender
	"0201-angry"   : {ico: "25", flags: [FORM_0201]},       // "Unown Angry", // uknown gender
	"0201-bear"    : {ico: "25", flags: [FORM_0201]},       // "Unown Bear", // uknown gender
	"0201-chase"   : {ico: "25", flags: [FORM_0201]},       // "Unown Chase", // uknown gender
	"0201-direct"  : {ico: "25", flags: [FORM_0201]},       // "Unown Direct", // uknown gender
	"0201-engage"  : {ico: "25", flags: [FORM_0201]},       // "Unown Engage", // uknown gender
	"0201-find"    : {ico: "25", flags: [FORM_0201]},       // "Unown Find", // uknown gender
	"0201-give"    : {ico: "25", flags: [FORM_0201]},       // "Unown Give", // uknown gender
	"0201-help"    : {ico: "25", flags: [FORM_0201]},       // "Unown Help", // uknown gender
	"0201-increase": {ico: "25", flags: [FORM_0201]},       // "Unown Increase", // uknown gender
	"0201-join"    : {ico: "25", flags: [FORM_0201]},       // "Unown Join", // uknown gender
	"0201-keep"    : {ico: "25", flags: [FORM_0201]},       // "Unown Keep", // uknown gender
	"0201-laugh"   : {ico: "25", flags: [FORM_0201]},       // "Unown Laugh", // uknown gender
	"0201-make"    : {ico: "25", flags: [FORM_0201]},       // "Unown Make", // uknown gender
	"0201-nuzzle"  : {ico: "25", flags: [FORM_0201]},       // "Unown Nuzzle", // uknown gender
	"0201-observe" : {ico: "25", flags: [FORM_0201]},       // "Unown Observe", // uknown gender
	"0201-perform" : {ico: "25", flags: [FORM_0201]},       // "Unown Perform", // uknown gender
	"0201-quicken" : {ico: "25", flags: [FORM_0201]},       // "Unown Quicken", // uknown gender
	"0201-reassure": {ico: "25", flags: [FORM_0201]},       // "Unown Reassure", // uknown gender
	"0201-search"  : {ico: "25", flags: [FORM_0201]},       // "Unown Search", // uknown gender
	"0201-tell"    : {ico: "25", flags: [FORM_0201]},       // "Unown Tell", // uknown gender
	"0201-undo"    : {ico: "25", flags: [FORM_0201]},       // "Unown Undo", // uknown gender
	"0201-vanish"  : {ico: "25", flags: [FORM_0201]},       // "Unown Vanish", // uknown gender
	"0201-want"    : {ico: "25", flags: [FORM_0201]},       // "Unown Want", // uknown gender
	"0201-xxxxx"   : {ico: "25", flags: [FORM_0201]},       // "Unown XXXXX", // uknown gender
	"0201-yield"   : {ico: "25", flags: [FORM_0201]},       // "Unown Yield", // uknown gender
	"0201-zoom"    : {ico: "25", flags: [FORM_0201]},       // "Unown Zoom", // uknown gender
	"0095"         : {ico: "19", flags: []},                     // "Onix", ROCKY (in-game trade)
	"0208"         : {ico: "19", flags: []},                     // "Steelix",
	"0069"         : {ico: "10", flags: []},                     // "Bellsprout",
	"0070"         : {ico: "10", flags: []},                     // "Weepinbell",
	"0071"         : {ico: "10", flags: []},                     // "Victreebel",
	"0187"         : {ico: "10", flags: []},                     // "Hoppip",
	"0188"         : {ico: "10", flags: []},                     // "Skiploom",
	"0189"         : {ico: "10", flags: []},                     // "Jumpluff",
	"0046"         : {ico: "11", flags: []},                     // "Paras",
	"0047"         : {ico: "11", flags: []},                     // "Parasect",
	"0060"         : {ico: "01", flags: []},                     // "Poliwag",
	"0061"         : {ico: "01", flags: []},                     // "Poliwhirl",
	"0062"         : {ico: "01", flags: []},                     // "Poliwrath",
	"0186"         : {ico: "01", flags: []},                     // "Politoed",
	"0129"         : {ico: "06", flags: []},                     // "Magikarp",
	"0130"         : {ico: "35", flags: []},                     // "Gyarados",
	"0118"         : {ico: "06", flags: []},                     // "Goldeen",
	"0119"         : {ico: "06", flags: []},                     // "Seaking",
	"0079"         : {ico: "36", flags: []},                     // "Slowpoke",
	"0080"         : {ico: "36", flags: []},                     // "Slowbro",
	"0199"         : {ico: "36", flags: []},                     // "Slowking",
	"0043"         : {ico: "10", flags: []},                     // "Oddish",
	"0044"         : {ico: "10", flags: []},                     // "Gloom",
	"0045"         : {ico: "10", flags: []},                     // "Vileplume",
	"0182"         : {ico: "10", flags: []},                     // "Bellossom",
	"0096"         : {ico: "14", flags: []},                     // "Drowzee",
	"0097"         : {ico: "14", flags: []},                     // "Hypno",
	"0063"         : {ico: "14", flags: []},                     // "Abra",
	"0064"         : {ico: "14", flags: []},                     // "Kadabra",
	"0065"         : {ico: "14", flags: []},                     // "Alakazam",
	"0132"         : {ico: "18", flags: []},                     // "Ditto", // uknown gender
	"0204"         : {ico: "11", flags: []},                     // "Pineco",
	"0205"         : {ico: "11", flags: []},                     // "Forretress",
	"0029"         : {ico: "15", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran♀",
	"0029-f"       : {ico: "15", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♀",
	"0030"         : {ico: "15", flags: []},                     // "Nidorina",
	"0031"         : {ico: "08", flags: []},                     // "Nidoqueen",
	"0032"         : {ico: "15", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran♂",
	"0032-m"       : {ico: "15", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♂",
	"0033"         : {ico: "15", flags: []},                     // "Nidorino",
	"0034"         : {ico: "08", flags: []},                     // "Nidoking",
	"0193"         : {ico: "11", flags: []},                     // "Yanma",
	"0191"         : {ico: "10", flags: []},                     // "Sunkern",
	"0192"         : {ico: "10", flags: []},                     // "Sunflora",
	"0102"         : {ico: "10", flags: []},                     // "Exeggcute",
	"0103"         : {ico: "10", flags: []},                     // "Exeggutor",
	"0185"         : {ico: "37", flags: []},                     // "Sudowoodo",
	"0202"         : {ico: "12", flags: []},                     // "Wobbuffet",
	"0048"         : {ico: "24", flags: []},                     // "Venonat",
	"0049"         : {ico: "30", flags: []},                     // "Venomoth",
	"0123"         : {ico: "11", flags: []},                     // "Scyther",
	"0212"         : {ico: "11", flags: []},                     // "Scizor",
	"0127"         : {ico: "11", flags: []},                     // "Pinsir",
	"0214"         : {ico: "11", flags: []},                     // "Heracross",
	"0109"         : {ico: "18", flags: []},                     // "Koffing",
	"0110"         : {ico: "18", flags: []},                     // "Weezing",
	"0088"         : {ico: "18", flags: []},                     // "Grimer",
	"0089"         : {ico: "18", flags: []},                     // "Muk",
	"0081"         : {ico: "20", flags: []},                     // "Magnemite",
	"0082"         : {ico: "20", flags: []},                     // "Magneton",
	"0100"         : {ico: "20", flags: []},                     // "Voltorb", // uknown gender VOLTY (in-game trade)
	"0101"         : {ico: "20", flags: []},                     // "Electrode", // uknown gender
	"0190"         : {ico: "08", flags: []},                     // "Aipom",
	"0209"         : {ico: "08", flags: []},                     // "Snubbull",
	"0210"         : {ico: "08", flags: []},                     // "Granbull",
	"0037"         : {ico: "15", flags: []},                     // "Vulpix",
	"0038"         : {ico: "15", flags: []},                     // "Ninetales",
	"0058"         : {ico: "15", flags: []},                     // "Growlithe",
	"0059"         : {ico: "15", flags: []},                     // "Arcanine",
	"0234"         : {ico: "16", flags: []},                     // "Stantler",
	"0183"         : {ico: "02", flags: []},                     // "Marill",
	"0184"         : {ico: "02", flags: []},                     // "Azumarill",
	"0050"         : {ico: "03", flags: []},                     // "Azumarill",
	"0051"         : {ico: "03", flags: []},                     // "Dugtrio",
	"0056"         : {ico: "27", flags: []},                     // "Mankey",
	"0057"         : {ico: "27", flags: []},                     // "Primeape",
	"0052"         : {ico: "15", flags: []},                     // "Meowth",
	"0053"         : {ico: "15", flags: []},                     // "Persian",
	"0054"         : {ico: "08", flags: []},                     // "Psyduck",
	"0055"         : {ico: "08", flags: []},                     // "Golduck",
	"0066"         : {ico: "27", flags: []},                     // "Machop", MUSCLE (in-game trade)
	"0067"         : {ico: "27", flags: []},                     // "Machoke",
	"0068"         : {ico: "27", flags: []},                     // "Machamp",
	"0236"         : {ico: "27", flags: []},                     // "Tyrogue", // male only
	"0106"         : {ico: "27", flags: []},                     // "Hitmonlee", // male only
	"0107"         : {ico: "27", flags: []},                     // "Hitmonchan", // male only
	"0237"         : {ico: "27", flags: []},                     // "Hitmontop", // male only
	"0203"         : {ico: "16", flags: []},                     // "Girafarig",
	"0128"         : {ico: "16", flags: []},                     // "Tauros", // male only
	"0241"         : {ico: "16", flags: []},                     // "Miltank", // female only
	"0240"         : {ico: "14", flags: []},                     // "Magby",
	"0126"         : {ico: "14", flags: []},                     // "Magmar",
	"0238"         : {ico: "14", flags: []},                     // "Smoochum", // female only
	"0124"         : {ico: "14", flags: []},                     // "Jynx", // female only
	"0239"         : {ico: "14", flags: []},                     // "Elekid",
	"0125"         : {ico: "14", flags: []},                     // "Electabuzz",
	"0122"         : {ico: "14", flags: []},                     // "Mr. Mime",
	"0235"         : {ico: "08", flags: []},                     // "Smeargle",
	"0083"         : {ico: "07", flags: []},                     // "Farfetch'd",
	"0177"         : {ico: "07", flags: []},                     // "Natu",
	"0178"         : {ico: "07", flags: []},                     // "Xatu",
	"0211"         : {ico: "06", flags: []},                     // "Qwilfish",
	"0072"         : {ico: "29", flags: []},                     // "Tentacool",
	"0073"         : {ico: "29", flags: []},                     // "Tentacruel",
	"0098"         : {ico: "17", flags: []},                     // "Krabby",
	"0099"         : {ico: "17", flags: []},                     // "Kingler",
	"0213"         : {ico: "11", flags: []},                     // "Shuckle",
	"0120"         : {ico: "05", flags: []},                     // "Staryu", // uknown gender
	"0121"         : {ico: "05", flags: []},                     // "Starmie", // uknown gender
	"0090"         : {ico: "17", flags: []},                     // "Shellder",
	"0091"         : {ico: "17", flags: []},                     // "Cloyster",
	"0222"         : {ico: "17", flags: []},                     // "Corsola",
	"0223"         : {ico: "06", flags: []},                     // "Remoraid",
	"0224"         : {ico: "06", flags: []},                     // "Octillery",
	"0170"         : {ico: "06", flags: []},                     // "Chinchou",
	"0171"         : {ico: "06", flags: []},                     // "Lanturn",
	"0086"         : {ico: "13", flags: []},                     // "Seel",
	"0087"         : {ico: "13", flags: []},                     // "Dewgong",
	"0108"         : {ico: "08", flags: []},                     // "Lickitung",
	"0114"         : {ico: "10", flags: []},                     // "Tangela",
	"0133"         : {ico: "15", flags: []},                     // "Eevee",
	"0134"         : {ico: "15", flags: []},                     // "Vaporeon",
	"0135"         : {ico: "15", flags: []},                     // "Jolteon",
	"0136"         : {ico: "15", flags: []},                     // "Flareon",
	"0196"         : {ico: "15", flags: []},                     // "Espeon",
	"0197"         : {ico: "15", flags: []},                     // "Umbreon",
	"0116"         : {ico: "06", flags: []},                     // "Horsea",
	"0117"         : {ico: "06", flags: []},                     // "Seadra",
	"0230"         : {ico: "38", flags: []},                     // "Kingdra",
	"0207"         : {ico: "11", flags: []},                     // "Gligar",
	"0225"         : {ico: "08", flags: []},                     // "Delibird",
	"0220"         : {ico: "16", flags: []},                     // "Swinub",
	"0221"         : {ico: "16", flags: []},                     // "Piloswine",
	"0216"         : {ico: "08", flags: []},                     // "Teddiursa",
	"0217"         : {ico: "08", flags: []},                     // "Ursaring",
	"0231"         : {ico: "16", flags: []},                     // "Phanpy",
	"0232"         : {ico: "16", flags: []},                     // "Donphan",
	"0226"         : {ico: "06", flags: []},                     // "Mantine",
	"0227"         : {ico: "07", flags: []},                     // "Skarmory",
	"0084"         : {ico: "07", flags: []},                     // "Doduo",
	"0085"         : {ico: "07", flags: []},                     // "Dodrio",
	"0077"         : {ico: "16", flags: []},                     // "Ponyta",
	"0078"         : {ico: "16", flags: []},                     // "Rapidash", RUNNY (in-game trade)
	"0104"         : {ico: "08", flags: []},                     // "Cubone",
	"0105"         : {ico: "08", flags: []},                     // "Marowak",
	"0115"         : {ico: "08", flags: []},                     // "Kangaskhan", // female only
	"0111"         : {ico: "16", flags: []},                     // "Rhyhorn",
	"0112"         : {ico: "08", flags: []},                     // "Rhydon",
	"0198"         : {ico: "07", flags: []},                     // "Murkrow",
	"0228"         : {ico: "15", flags: []},                     // "Houndour",
	"0229"         : {ico: "15", flags: []},                     // "Houndoom",
	"0218"         : {ico: "18", flags: []},                     // "Slugma",
	"0219"         : {ico: "18", flags: []},                     // "Magcargo",
	"0215"         : {ico: "15", flags: []},                     // "Sneasel",
	"0200"         : {ico: "12", flags: []},                     // "Misdreavus",
	"0137"         : {ico: "20", flags: []},                     // "Porygon", // uknown gender
	"0233"         : {ico: "20", flags: []},                     // "Porygon2", // uknown gender
	"0113"         : {ico: "09", flags: []},                     // "Chansey", // female only
	"0242"         : {ico: "09", flags: []},                     // "Blissey", // female only
	"0131"         : {ico: "13", flags: []},                     // "Lapras",
	"0138"         : {ico: "17", flags: []},                     // "Omanyte",
	"0139"         : {ico: "17", flags: []},                     // "Omastar",
	"0140"         : {ico: "17", flags: []},                     // "Kabuto",
	"0141"         : {ico: "17", flags: []},                     // "Kabutops",
	"0142"         : {ico: "07", flags: []},                     // "Aerodactyl", AEROY (in-game trade)
	"0143"         : {ico: "32", flags: []},                     // "Snorlax",
	"0001"         : {ico: "22", flags: []},                     // "Bulbasaur",
	"0002"         : {ico: "22", flags: []},                     // "Ivysaur",
	"0003"         : {ico: "22", flags: []},                     // "Venusaur",
	"0004"         : {ico: "23", flags: []},                     // "Charmander",
	"0005"         : {ico: "23", flags: []},                     // "Charmeleon",
	"0006"         : {ico: "38", flags: []},                     // "Charizard",
	"0007"         : {ico: "21", flags: []},                     // "Squirtle",
	"0008"         : {ico: "21", flags: []},                     // "Wartortle",
	"0009"         : {ico: "21", flags: []},                     // "Blastoise",
	"0144"         : {ico: "07", flags: []},                     // "Articuno", // uknown gender
	"0145"         : {ico: "07", flags: []},                     // "Zapdos", // uknown gender
	"0146"         : {ico: "07", flags: []},                     // "Moltres", // uknown gender
	"0243"         : {ico: "15", flags: []},                     // "Raikou", // uknown gender
	"0244"         : {ico: "15", flags: []},                     // "Entei", // uknown gender
	"0245"         : {ico: "15", flags: []},                     // "Suicune", // uknown gender
	"0147"         : {ico: "19", flags: []},                     // "Dratini",
	"0148"         : {ico: "19", flags: []},                     // "Dragonair",
	"0149"         : {ico: "38", flags: []},                     // "Dragonite",
	"0246"         : {ico: "08", flags: []},                     // "Larvitar",
	"0247"         : {ico: "08", flags: []},                     // "Pupitar",
	"0248"         : {ico: "08", flags: []},                     // "Tyranitar",
	"0249"         : {ico: "34", flags: []},                     // "Lugia", // uknown gender
	"0250"         : {ico: "33", flags: []},                     // "Ho-Oh", // uknown gender
	"0150"         : {ico: "14", flags: []},                     // "Mewtwo", // uknown gender
	"0151"         : {ico: "14", flags: []},                     // "Mew", // uknown gender
	"0251"         : {ico: "14", flags: []},                     // "Celebi", // uknown gender
};
