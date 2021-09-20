const IcoPathReBl 	= "poke_icon/g01/1/";
const IcoPathYe		= "poke_icon/g01/2/";

const ImgWd_G01		= 16;
const BoxCap_G01	= 20;
const MaxBox_G01	= 12;
const DivBox_G01	=  5;

//============================================================================
// NATIONAL POKEDEX
//============================================================================
const _Regdex_n_101 =
{
	"0001"  : {ico: "08", flags: 0},                     // "Bulbasaur",
	"0002"  : {ico: "08", flags: 0},                     // "Ivysaur",
	"0003"  : {ico: "08", flags: 0},                     // "Venusaur",
	"0004"  : {ico: "01", flags: 0},                     // "Charmander",
	"0005"  : {ico: "01", flags: 0},                     // "Charmeleon",
	"0006"  : {ico: "01", flags: 0},                     // "Charizard",
	"0007"  : {ico: "06", flags: 0},                     // "Squirtle",
	"0008"  : {ico: "06", flags: 0},                     // "Wartortle",
	"0009"  : {ico: "06", flags: 0},                     // "Blastoise",
	"0010"  : {ico: "07", flags: 0},                     // "Caterpie",
	"0011"  : {ico: "07", flags: 0},                     // "Metapod",
	"0012"  : {ico: "07", flags: 0},                     // "Butterfree",
	"0013"  : {ico: "07", flags: 0},                     // "Weedle",
	"0014"  : {ico: "07", flags: 0},                     // "Kakuna",
	"0015"  : {ico: "07", flags: 0},                     // "Beedrill",
	"0016"  : {ico: "05", flags: 0},                     // "Pidgey",
	"0017"  : {ico: "05", flags: 0},                     // "Pidgeotto",
	"0018"  : {ico: "05", flags: 0},                     // "Pidgeot",
	"0019"  : {ico: "10", flags: 0},                     // "Rattata",
	"0020"  : {ico: "10", flags: 0},                     // "Raticate",
	"0021"  : {ico: "05", flags: 0},                     // "Spearow",
	"0022"  : {ico: "05", flags: 0},                     // "Fearow",
	"0023"  : {ico: "09", flags: 0},                     // "Ekans",
	"0024"  : {ico: "09", flags: 0},                     // "Arbok",
	"0025"  : {ico: "04", flags: 0},                     // "Pikachu",
	"0026"  : {ico: "04", flags: 0},                     // "Raichu",
	"0027"  : {ico: "01", flags: 0},                     // "Sandshrew",
	"0028"  : {ico: "01", flags: 0},                     // "Sandslash",
	"0029"  : {ico: "01", flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran",
	"0029-f": {ico: "01", flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♀", SPOT (in-game trade)
	"0030"  : {ico: "01", flags: 0},                     // "Nidorina", TERRY (in-game trade)
	"0031"  : {ico: "01", flags: 0},                     // "Nidoqueen",
	"0032"  : {ico: "01", flags: FLAGS_MAJ_GENDER_BASE}, // "Nidoran",
	"0032-m": {ico: "01", flags: FLAGS_MAJ_GENDER_DIFF}, // "Nidoran♂",
	"0033"  : {ico: "01", flags: 0},                     // "Nidorino",
	"0034"  : {ico: "01", flags: 0},                     // "Nidoking",
	"0035"  : {ico: "04", flags: 0},                     // "Clefairy",
	"0036"  : {ico: "04", flags: 0},                     // "Clefable",
	"0037"  : {ico: "10", flags: 0},                     // "Vulpix",
	"0038"  : {ico: "10", flags: 0},                     // "Ninetales",
	"0039"  : {ico: "04", flags: 0},                     // "Jigglypuff",
	"0040"  : {ico: "04", flags: 0},                     // "Wigglytuff",
	"0041"  : {ico: "01", flags: 0},                     // "Zubat",
	"0042"  : {ico: "01", flags: 0},                     // "Golbat",
	"0043"  : {ico: "08", flags: 0},                     // "Oddish",
	"0044"  : {ico: "08", flags: 0},                     // "Gloom",
	"0045"  : {ico: "08", flags: 0},                     // "Vileplume",
	"0046"  : {ico: "07", flags: 0},                     // "Paras",
	"0047"  : {ico: "07", flags: 0},                     // "Parasect",
	"0048"  : {ico: "07", flags: 0},                     // "Venonat",
	"0049"  : {ico: "07", flags: 0},                     // "Venomoth",
	"0050"  : {ico: "01", flags: 0},                     // "Diglett",
	"0051"  : {ico: "01", flags: 0},                     // "Dugtrio",
	"0052"  : {ico: "01", flags: 0},                     // "Meowth",
	"0053"  : {ico: "01", flags: 0},                     // "Persian",
	"0054"  : {ico: "01", flags: 0},                     // "Psyduck",
	"0055"  : {ico: "01", flags: 0},                     // "Golduck",
	"0056"  : {ico: "01", flags: 0},                     // "Mankey",
	"0057"  : {ico: "01", flags: 0},                     // "Primeape",
	"0058"  : {ico: "10", flags: 0},                     // "Growlithe",
	"0059"  : {ico: "10", flags: 0},                     // "Arcanine",
	"0060"  : {ico: "01", flags: 0},                     // "Poliwag",
	"0061"  : {ico: "01", flags: 0},                     // "Poliwhirl",
	"0062"  : {ico: "01", flags: 0},                     // "Poliwrath",
	"0063"  : {ico: "01", flags: 0},                     // "Abra",
	"0064"  : {ico: "01", flags: 0},                     // "Kadabra",
	"0065"  : {ico: "01", flags: 0},                     // "Alakazam",
	"0066"  : {ico: "01", flags: 0},                     // "Machop",
	"0067"  : {ico: "01", flags: 0},                     // "Machoke",
	"0068"  : {ico: "01", flags: 0},                     // "Machamp",
	"0069"  : {ico: "08", flags: 0},                     // "Bellsprout",
	"0070"  : {ico: "08", flags: 0},                     // "Weepinbell",
	"0071"  : {ico: "08", flags: 0},                     // "Victreebel",
	"0072"  : {ico: "06", flags: 0},                     // "Tentacool",
	"0073"  : {ico: "06", flags: 0},                     // "Tentacruel",
	"0074"  : {ico: "01", flags: 0},                     // "Geodude",
	"0075"  : {ico: "01", flags: 0},                     // "Graveler",
	"0076"  : {ico: "01", flags: 0},                     // "Golem",
	"0077"  : {ico: "10", flags: 0},                     // "Ponyta",
	"0078"  : {ico: "10", flags: 0},                     // "Rapidash",
	"0079"  : {ico: "10", flags: 0},                     // "Slowpoke",
	"0080"  : {ico: "01", flags: 0},                     // "Slowbro",
	"0081"  : {ico: "02", flags: 0},                     // "Magnemite",
	"0082"  : {ico: "02", flags: 0},                     // "Magneton",
	"0083"  : {ico: "05", flags: 0},                     // "Farfetch'd", DUX (in-game trade)
	"0084"  : {ico: "05", flags: 0},                     // "Doduo",
	"0085"  : {ico: "05", flags: 0},                     // "Dodrio",
	"0086"  : {ico: "06", flags: 0},                     // "Seel", SAILOR (in-game trade)
	"0087"  : {ico: "06", flags: 0},                     // "Dewgong",
	"0088"  : {ico: "01", flags: 0},                     // "Grimer",
	"0089"  : {ico: "01", flags: 0},                     // "Muk",
	"0090"  : {ico: "03", flags: 0},                     // "Shellder",
	"0091"  : {ico: "03", flags: 0},                     // "Cloyster",
	"0092"  : {ico: "01", flags: 0},                     // "Gastly",
	"0093"  : {ico: "01", flags: 0},                     // "Haunter",
	"0094"  : {ico: "01", flags: 0},                     // "Gengar",
	"0095"  : {ico: "09", flags: 0},                     // "Onix",
	"0096"  : {ico: "01", flags: 0},                     // "Drowzee",
	"0097"  : {ico: "01", flags: 0},                     // "Hypno",
	"0098"  : {ico: "06", flags: 0},                     // "Krabby",
	"0099"  : {ico: "06", flags: 0},                     // "Kingler",
	"0100"  : {ico: "02", flags: 0},                     // "Voltorb", // uknown gender
	"0101"  : {ico: "02", flags: 0},                     // "Electrode", // uknown gender DORIS (in-game trade)
	"0102"  : {ico: "08", flags: 0},                     // "Exeggcute",
	"0103"  : {ico: "08", flags: 0},                     // "Exeggutor",
	"0104"  : {ico: "01", flags: 0},                     // "Cubone",
	"0105"  : {ico: "01", flags: 0},                     // "Marowak",
	"0106"  : {ico: "01", flags: 0},                     // "Hitmonlee", // male only
	"0107"  : {ico: "01", flags: 0},                     // "Hitmonchan", // male only
	"0108"  : {ico: "01", flags: 0},                     // "Lickitung", MARC (in-game trade)
	"0109"  : {ico: "01", flags: 0},                     // "Koffing",
	"0110"  : {ico: "01", flags: 0},                     // "Weezing",
	"0111"  : {ico: "10", flags: 0},                     // "Rhyhorn",
	"0112"  : {ico: "01", flags: 0},                     // "Rhydon",
	"0113"  : {ico: "04", flags: 0},                     // "Chansey", // female only
	"0114"  : {ico: "08", flags: 0},                     // "Tangela", CRINKLES (in-game trade)
	"0115"  : {ico: "01", flags: 0},                     // "Kangaskhan", // female only
	"0116"  : {ico: "06", flags: 0},                     // "Horsea",
	"0117"  : {ico: "06", flags: 0},                     // "Seadra",
	"0118"  : {ico: "06", flags: 0},                     // "Goldeen",
	"0119"  : {ico: "06", flags: 0},                     // "Seaking",
	"0120"  : {ico: "03", flags: 0},                     // "Staryu", // uknown gender
	"0121"  : {ico: "03", flags: 0},                     // "Starmie", // uknown gender
	"0122"  : {ico: "01", flags: 0},                     // "Mr. Mime", MARCEL (in-game trade)
	"0123"  : {ico: "07", flags: 0},                     // "Scyther",
	"0124"  : {ico: "01", flags: 0},                     // "Jynx", // female only LOLA (in-game trade)
	"0125"  : {ico: "01", flags: 0},                     // "Electabuzz",
	"0126"  : {ico: "01", flags: 0},                     // "Magmar",
	"0127"  : {ico: "07", flags: 0},                     // "Pinsir",
	"0128"  : {ico: "10", flags: 0},                     // "Tauros", // male only
	"0129"  : {ico: "06", flags: 0},                     // "Magikarp",
	"0130"  : {ico: "09", flags: 0},                     // "Gyarados",
	"0131"  : {ico: "06", flags: 0},                     // "Lapras",
	"0132"  : {ico: "01", flags: 0},                     // "Ditto", // uknown gender
	"0133"  : {ico: "10", flags: 0},                     // "Eevee",
	"0134"  : {ico: "10", flags: 0},                     // "Vaporeon",
	"0135"  : {ico: "10", flags: 0},                     // "Jolteon",
	"0136"  : {ico: "10", flags: 0},                     // "Flareon",
	"0137"  : {ico: "01", flags: 0},                     // "Porygon", // uknown gender
	"0138"  : {ico: "03", flags: 0},                     // "Omanyte",
	"0139"  : {ico: "03", flags: 0},                     // "Omastar",
	"0140"  : {ico: "03", flags: 0},                     // "Kabuto",
	"0141"  : {ico: "03", flags: 0},                     // "Kabutops",
	"0142"  : {ico: "05", flags: 0},                     // "Aerodactyl",
	"0143"  : {ico: "01", flags: 0},                     // "Snorlax",
	"0144"  : {ico: "05", flags: 0},                     // "Articuno", // uknown gender
	"0145"  : {ico: "05", flags: 0},                     // "Zapdos", // uknown gender
	"0146"  : {ico: "05", flags: 0},                     // "Moltres", // uknown gender
	"0147"  : {ico: "09", flags: 0},                     // "Dratini",
	"0148"  : {ico: "09", flags: 0},                     // "Dragonair",
	"0149"  : {ico: "09", flags: 0},                     // "Dragonite",
	"0150"  : {ico: "01", flags: 0},                     // "Mewtwo", // uknown gender
	"0151"  : {ico: "01", flags: 0},                     // "Mew", // uknown gender
};

const _Regdex_n_102 =
{
	..._Regdex_n_101,
	"0025"  : {ico: "11", flags: 0},                     // "Pikachu",
	"0026"  : {ico: "11", flags: 0},                     // "Raichu",
};
