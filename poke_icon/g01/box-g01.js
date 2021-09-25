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
	"0001"  : {ico: "08", flags: []},                     // "Bulbasaur",
	"0002"  : {ico: "08", flags: []},                     // "Ivysaur",
	"0003"  : {ico: "08", flags: []},                     // "Venusaur",
	"0004"  : {ico: "01", flags: []},                     // "Charmander",
	"0005"  : {ico: "01", flags: []},                     // "Charmeleon",
	"0006"  : {ico: "01", flags: []},                     // "Charizard",
	"0007"  : {ico: "06", flags: []},                     // "Squirtle",
	"0008"  : {ico: "06", flags: []},                     // "Wartortle",
	"0009"  : {ico: "06", flags: []},                     // "Blastoise",
	"0010"  : {ico: "07", flags: []},                     // "Caterpie",
	"0011"  : {ico: "07", flags: []},                     // "Metapod",
	"0012"  : {ico: "07", flags: []},                     // "Butterfree",
	"0013"  : {ico: "07", flags: []},                     // "Weedle",
	"0014"  : {ico: "07", flags: []},                     // "Kakuna",
	"0015"  : {ico: "07", flags: []},                     // "Beedrill",
	"0016"  : {ico: "05", flags: []},                     // "Pidgey",
	"0017"  : {ico: "05", flags: []},                     // "Pidgeotto",
	"0018"  : {ico: "05", flags: []},                     // "Pidgeot",
	"0019"  : {ico: "10", flags: []},                     // "Rattata",
	"0020"  : {ico: "10", flags: []},                     // "Raticate",
	"0021"  : {ico: "05", flags: []},                     // "Spearow",
	"0022"  : {ico: "05", flags: []},                     // "Fearow",
	"0023"  : {ico: "09", flags: []},                     // "Ekans",
	"0024"  : {ico: "09", flags: []},                     // "Arbok",
	"0025"  : {ico: "04", flags: []},                     // "Pikachu",
	"0026"  : {ico: "04", flags: []},                     // "Raichu",
	"0027"  : {ico: "01", flags: []},                     // "Sandshrew",
	"0028"  : {ico: "01", flags: []},                     // "Sandslash",
	"0029"  : {ico: "01", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran",
	"0029-f": {ico: "01", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♀", SPOT (in-game trade)
	"0030"  : {ico: "01", flags: []},                     // "Nidorina", TERRY (in-game trade)
	"0031"  : {ico: "01", flags: []},                     // "Nidoqueen",
	"0032"  : {ico: "01", flags: [FORM_MAJ_GENDER_BASE]}, // "Nidoran",
	"0032-m": {ico: "01", flags: [FORM_MAJ_GENDER_DIFF]}, // "Nidoran♂",
	"0033"  : {ico: "01", flags: []},                     // "Nidorino",
	"0034"  : {ico: "01", flags: []},                     // "Nidoking",
	"0035"  : {ico: "04", flags: []},                     // "Clefairy",
	"0036"  : {ico: "04", flags: []},                     // "Clefable",
	"0037"  : {ico: "10", flags: []},                     // "Vulpix",
	"0038"  : {ico: "10", flags: []},                     // "Ninetales",
	"0039"  : {ico: "04", flags: []},                     // "Jigglypuff",
	"0040"  : {ico: "04", flags: []},                     // "Wigglytuff",
	"0041"  : {ico: "01", flags: []},                     // "Zubat",
	"0042"  : {ico: "01", flags: []},                     // "Golbat",
	"0043"  : {ico: "08", flags: []},                     // "Oddish",
	"0044"  : {ico: "08", flags: []},                     // "Gloom",
	"0045"  : {ico: "08", flags: []},                     // "Vileplume",
	"0046"  : {ico: "07", flags: []},                     // "Paras",
	"0047"  : {ico: "07", flags: []},                     // "Parasect",
	"0048"  : {ico: "07", flags: []},                     // "Venonat",
	"0049"  : {ico: "07", flags: []},                     // "Venomoth",
	"0050"  : {ico: "01", flags: []},                     // "Diglett",
	"0051"  : {ico: "01", flags: []},                     // "Dugtrio",
	"0052"  : {ico: "01", flags: []},                     // "Meowth",
	"0053"  : {ico: "01", flags: []},                     // "Persian",
	"0054"  : {ico: "01", flags: []},                     // "Psyduck",
	"0055"  : {ico: "01", flags: []},                     // "Golduck",
	"0056"  : {ico: "01", flags: []},                     // "Mankey",
	"0057"  : {ico: "01", flags: []},                     // "Primeape",
	"0058"  : {ico: "10", flags: []},                     // "Growlithe",
	"0059"  : {ico: "10", flags: []},                     // "Arcanine",
	"0060"  : {ico: "01", flags: []},                     // "Poliwag",
	"0061"  : {ico: "01", flags: []},                     // "Poliwhirl",
	"0062"  : {ico: "01", flags: []},                     // "Poliwrath",
	"0063"  : {ico: "01", flags: []},                     // "Abra",
	"0064"  : {ico: "01", flags: []},                     // "Kadabra",
	"0065"  : {ico: "01", flags: []},                     // "Alakazam",
	"0066"  : {ico: "01", flags: []},                     // "Machop",
	"0067"  : {ico: "01", flags: []},                     // "Machoke",
	"0068"  : {ico: "01", flags: []},                     // "Machamp",
	"0069"  : {ico: "08", flags: []},                     // "Bellsprout",
	"0070"  : {ico: "08", flags: []},                     // "Weepinbell",
	"0071"  : {ico: "08", flags: []},                     // "Victreebel",
	"0072"  : {ico: "06", flags: []},                     // "Tentacool",
	"0073"  : {ico: "06", flags: []},                     // "Tentacruel",
	"0074"  : {ico: "01", flags: []},                     // "Geodude",
	"0075"  : {ico: "01", flags: []},                     // "Graveler",
	"0076"  : {ico: "01", flags: []},                     // "Golem",
	"0077"  : {ico: "10", flags: []},                     // "Ponyta",
	"0078"  : {ico: "10", flags: []},                     // "Rapidash",
	"0079"  : {ico: "10", flags: []},                     // "Slowpoke",
	"0080"  : {ico: "01", flags: []},                     // "Slowbro",
	"0081"  : {ico: "02", flags: []},                     // "Magnemite",
	"0082"  : {ico: "02", flags: []},                     // "Magneton",
	"0083"  : {ico: "05", flags: []},                     // "Farfetch'd", DUX (in-game trade)
	"0084"  : {ico: "05", flags: []},                     // "Doduo",
	"0085"  : {ico: "05", flags: []},                     // "Dodrio",
	"0086"  : {ico: "06", flags: []},                     // "Seel", SAILOR (in-game trade)
	"0087"  : {ico: "06", flags: []},                     // "Dewgong",
	"0088"  : {ico: "01", flags: []},                     // "Grimer",
	"0089"  : {ico: "01", flags: []},                     // "Muk",
	"0090"  : {ico: "03", flags: []},                     // "Shellder",
	"0091"  : {ico: "03", flags: []},                     // "Cloyster",
	"0092"  : {ico: "01", flags: []},                     // "Gastly",
	"0093"  : {ico: "01", flags: []},                     // "Haunter",
	"0094"  : {ico: "01", flags: []},                     // "Gengar",
	"0095"  : {ico: "09", flags: []},                     // "Onix",
	"0096"  : {ico: "01", flags: []},                     // "Drowzee",
	"0097"  : {ico: "01", flags: []},                     // "Hypno",
	"0098"  : {ico: "06", flags: []},                     // "Krabby",
	"0099"  : {ico: "06", flags: []},                     // "Kingler",
	"0100"  : {ico: "02", flags: []},                     // "Voltorb", // uknown gender
	"0101"  : {ico: "02", flags: []},                     // "Electrode", // uknown gender DORIS (in-game trade)
	"0102"  : {ico: "08", flags: []},                     // "Exeggcute",
	"0103"  : {ico: "08", flags: []},                     // "Exeggutor",
	"0104"  : {ico: "01", flags: []},                     // "Cubone",
	"0105"  : {ico: "01", flags: []},                     // "Marowak",
	"0106"  : {ico: "01", flags: []},                     // "Hitmonlee", // male only
	"0107"  : {ico: "01", flags: []},                     // "Hitmonchan", // male only
	"0108"  : {ico: "01", flags: []},                     // "Lickitung", MARC (in-game trade)
	"0109"  : {ico: "01", flags: []},                     // "Koffing",
	"0110"  : {ico: "01", flags: []},                     // "Weezing",
	"0111"  : {ico: "10", flags: []},                     // "Rhyhorn",
	"0112"  : {ico: "01", flags: []},                     // "Rhydon",
	"0113"  : {ico: "04", flags: []},                     // "Chansey", // female only
	"0114"  : {ico: "08", flags: []},                     // "Tangela", CRINKLES (in-game trade)
	"0115"  : {ico: "01", flags: []},                     // "Kangaskhan", // female only
	"0116"  : {ico: "06", flags: []},                     // "Horsea",
	"0117"  : {ico: "06", flags: []},                     // "Seadra",
	"0118"  : {ico: "06", flags: []},                     // "Goldeen",
	"0119"  : {ico: "06", flags: []},                     // "Seaking",
	"0120"  : {ico: "03", flags: []},                     // "Staryu", // uknown gender
	"0121"  : {ico: "03", flags: []},                     // "Starmie", // uknown gender
	"0122"  : {ico: "01", flags: []},                     // "Mr. Mime", MARCEL (in-game trade)
	"0123"  : {ico: "07", flags: []},                     // "Scyther",
	"0124"  : {ico: "01", flags: []},                     // "Jynx", // female only LOLA (in-game trade)
	"0125"  : {ico: "01", flags: []},                     // "Electabuzz",
	"0126"  : {ico: "01", flags: []},                     // "Magmar",
	"0127"  : {ico: "07", flags: []},                     // "Pinsir",
	"0128"  : {ico: "10", flags: []},                     // "Tauros", // male only
	"0129"  : {ico: "06", flags: []},                     // "Magikarp",
	"0130"  : {ico: "09", flags: []},                     // "Gyarados",
	"0131"  : {ico: "06", flags: []},                     // "Lapras",
	"0132"  : {ico: "01", flags: []},                     // "Ditto", // uknown gender
	"0133"  : {ico: "10", flags: []},                     // "Eevee",
	"0134"  : {ico: "10", flags: []},                     // "Vaporeon",
	"0135"  : {ico: "10", flags: []},                     // "Jolteon",
	"0136"  : {ico: "10", flags: []},                     // "Flareon",
	"0137"  : {ico: "01", flags: []},                     // "Porygon", // uknown gender
	"0138"  : {ico: "03", flags: []},                     // "Omanyte",
	"0139"  : {ico: "03", flags: []},                     // "Omastar",
	"0140"  : {ico: "03", flags: []},                     // "Kabuto",
	"0141"  : {ico: "03", flags: []},                     // "Kabutops",
	"0142"  : {ico: "05", flags: []},                     // "Aerodactyl",
	"0143"  : {ico: "01", flags: []},                     // "Snorlax",
	"0144"  : {ico: "05", flags: []},                     // "Articuno", // uknown gender
	"0145"  : {ico: "05", flags: []},                     // "Zapdos", // uknown gender
	"0146"  : {ico: "05", flags: []},                     // "Moltres", // uknown gender
	"0147"  : {ico: "09", flags: []},                     // "Dratini",
	"0148"  : {ico: "09", flags: []},                     // "Dragonair",
	"0149"  : {ico: "09", flags: []},                     // "Dragonite",
	"0150"  : {ico: "01", flags: []},                     // "Mewtwo", // uknown gender
	"0151"  : {ico: "01", flags: []},                     // "Mew", // uknown gender
};

const _Regdex_n_102 =
{
	..._Regdex_n_101,
	"0025"  : {ico: "11", flags: []},                     // "Pikachu",
	"0026"  : {ico: "11", flags: []},                     // "Raichu",
};
