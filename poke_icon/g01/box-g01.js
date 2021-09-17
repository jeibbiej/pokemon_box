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
	"0001"		: "01", // "Bulbasaur",
	"0002"		: "01", // "Ivysaur",
	"0003"		: "01", // "Venusaur",
	"0004"		: "02", // "Charmander",
	"0005"		: "02", // "Charmeleon",
	"0006"		: "02", // "Charizard",
	"0007"		: "03", // "Squirtle",
	"0008"		: "03", // "Wartortle",
	"0009"		: "03", // "Blastoise",
	"0010"		: "04", // "Caterpie",
	"0011"		: "04", // "Metapod",
	"0012"		: "04", // "Butterfree",
	"0013"		: "04", // "Weedle",
	"0014"		: "04", // "Kakuna",
	"0015"		: "04", // "Beedrill",
	"0016"		: "05", // "Pidgey",
	"0017"		: "05", // "Pidgeotto",
	"0018"		: "05", // "Pidgeot",
	"0019"		: "06", // "Rattata",
	"0020"		: "06", // "Raticate",
	"0021"		: "05", // "Spearow",
	"0022"		: "05", // "Fearow",
	"0023"		: "07", // "Ekans",
	"0024"		: "07", // "Arbok",
	"0025"		: "08", // "Pikachu",
	"0026"		: "08", // "Raichu",
	"0027"		: "02", // "Sandshrew",
	"0028"		: "02", // "Sandslash",
	"0029-f"	: "02", // "Nidoran♀", SPOT (in-game trade)
	"0030"		: "02", // "Nidorina", TERRY (in-game trade)
	"0031"		: "02", // "Nidoqueen",
	"0032-m"	: "02", // "Nidoran♂",
	"0033"		: "02", // "Nidorino",
	"0034"		: "02", // "Nidoking",
	"0035"		: "08", // "Clefairy",
	"0036"		: "08", // "Clefable",
	"0037"		: "06", // "Vulpix",
	"0038"		: "06", // "Ninetales",
	"0039"		: "08", // "Jigglypuff",
	"0040"		: "08", // "Wigglytuff",
	"0041"		: "02", // "Zubat",
	"0042"		: "02", // "Golbat",
	"0043"		: "01", // "Oddish",
	"0044"		: "01", // "Gloom",
	"0045"		: "01", // "Vileplume",
	"0046"		: "04", // "Paras",
	"0047"		: "04", // "Parasect",
	"0048"		: "04", // "Venonat",
	"0049"		: "04", // "Venomoth",
	"0050"		: "02", // "Diglett",
	"0051"		: "02", // "Dugtrio",
	"0052"		: "02", // "Meowth",
	"0053"		: "02", // "Persian",
	"0054"		: "02", // "Psyduck",
	"0055"		: "02", // "Golduck",
	"0056"		: "02", // "Mankey",
	"0057"		: "02", // "Primeape",
	"0058"		: "06", // "Growlithe",
	"0059"		: "06", // "Arcanine",
	"0060"		: "02", // "Poliwag",
	"0061"		: "02", // "Poliwhirl",
	"0062"		: "02", // "Poliwrath",
	"0063"		: "02", // "Abra",
	"0064"		: "02", // "Kadabra",
	"0065"		: "02", // "Alakazam",
	"0066"		: "02", // "Machop",
	"0067"		: "02", // "Machoke",
	"0068"		: "02", // "Machamp",
	"0069"		: "01", // "Bellsprout",
	"0070"		: "01", // "Weepinbell",
	"0071"		: "01", // "Victreebel",
	"0072"		: "03", // "Tentacool",
	"0073"		: "03", // "Tentacruel",
	"0074"		: "02", // "Geodude",
	"0075"		: "02", // "Graveler",
	"0076"		: "02", // "Golem",
	"0077"		: "06", // "Ponyta",
	"0078"		: "06", // "Rapidash",
	"0079"		: "06", // "Slowpoke",
	"0080"		: "02", // "Slowbro",
	"0081"		: "09", // "Magnemite",
	"0082"		: "09", // "Magneton",
	"0083"		: "05", // "Farfetch'd", DUX (in-game trade)
	"0084"		: "05", // "Doduo",
	"0085"		: "05", // "Dodrio",
	"0086"		: "03", // "Seel", SAILOR (in-game trade)
	"0087"		: "03", // "Dewgong",
	"0088"		: "02", // "Grimer",
	"0089"		: "02", // "Muk",
	"0090"		: "10", // "Shellder",
	"0091"		: "10", // "Cloyster",
	"0092"		: "02", // "Gastly",
	"0093"		: "02", // "Haunter",
	"0094"		: "02", // "Gengar",
	"0095"		: "07", // "Onix",
	"0096"		: "02", // "Drowzee",
	"0097"		: "02", // "Hypno",
	"0098"		: "03", // "Krabby",
	"0099"		: "03", // "Kingler",
	"0100"		: "09", // "Voltorb", // uknown gender
	"0101"		: "09", // "Electrode", // uknown gender DORIS (in-game trade)
	"0102"		: "01", // "Exeggcute",
	"0103"		: "01", // "Exeggutor",
	"0104"		: "02", // "Cubone",
	"0105"		: "02", // "Marowak",
	"0106"		: "02", // "Hitmonlee", // male only
	"0107"		: "02", // "Hitmonchan", // male only
	"0108"		: "02", // "Lickitung", MARC (in-game trade)
	"0109"		: "02", // "Koffing",
	"0110"		: "02", // "Weezing",
	"0111"		: "06", // "Rhyhorn",
	"0112"		: "02", // "Rhydon",
	"0113"		: "08", // "Chansey", // female only
	"0114"		: "01", // "Tangela", CRINKLES (in-game trade)
	"0115"		: "02", // "Kangaskhan", // female only
	"0116"		: "03", // "Horsea",
	"0117"		: "03", // "Seadra",
	"0118"		: "03", // "Goldeen",
	"0119"		: "03", // "Seaking",
	"0120"		: "10", // "Staryu", // uknown gender
	"0121"		: "10", // "Starmie", // uknown gender
	"0122"		: "02", // "Mr. Mime", MARCEL (in-game trade)
	"0123"		: "04", // "Scyther",
	"0124"		: "02", // "Jynx", // female only LOLA (in-game trade)
	"0125"		: "02", // "Electabuzz",
	"0126"		: "02", // "Magmar",
	"0127"		: "04", // "Pinsir",
	"0128"		: "06", // "Tauros", // male only
	"0129"		: "03", // "Magikarp",
	"0130"		: "07", // "Gyarados",
	"0131"		: "03", // "Lapras",
	"0132"		: "02", // "Ditto", // uknown gender
	"0133"		: "06", // "Eevee",
/**/"0134"		: "00", // "Vaporeon",
/**/"0135"		: "00", // "Jolteon",
/**/"0136"		: "00", // "Flareon",
/**/"0137"		: "00", // "Porygon", // uknown gender
	"0138"		: "10", // "Omanyte",
/**/"0139"		: "00", // "Omastar",
	"0140"		: "10", // "Kabuto",
/**/"0141"		: "00", // "Kabutops",
	"0142"		: "05", // "Aerodactyl",
	"0143"		: "02", // "Snorlax",
/**/"0144"		: "00", // "Articuno", // uknown gender
/**/"0145"		: "00", // "Zapdos", // uknown gender
	"0146"		: "05", // "Moltres", // uknown gender
	"0147"		: "07", // "Dratini",
	"0148"		: "07", // "Dragonair",
/**/"0149"		: "00", // "Dragonite",
/**/"0150"		: "00", // "Mewtwo", // uknown gender
	"0151"		: "02", // "Mew", // uknown gender
};

const _Regdex_n_102 =
{
	"0001"		: "01", // "Bulbasaur",
	"0002"		: "01", // "Ivysaur",
	"0003"		: "01", // "Venusaur",
	"0004"		: "02", // "Charmander",
	"0005"		: "02", // "Charmeleon",
	"0006"		: "02", // "Charizard",
	"0007"		: "03", // "Squirtle",
	"0008"		: "03", // "Wartortle",
	"0009"		: "03", // "Blastoise",
	"0010"		: "04", // "Caterpie",
	"0011"		: "04", // "Metapod",
	"0012"		: "04", // "Butterfree",
	"0013"		: "04", // "Weedle",
	"0014"		: "04", // "Kakuna",
	"0015"		: "04", // "Beedrill",
	"0016"		: "05", // "Pidgey",
	"0017"		: "05", // "Pidgeotto",
	"0018"		: "05", // "Pidgeot",
	"0019"		: "06", // "Rattata",
	"0020"		: "06", // "Raticate",
	"0021"		: "05", // "Spearow",
	"0022"		: "05", // "Fearow",
	"0023"		: "07", // "Ekans",
	"0024"		: "07", // "Arbok",
	"0025"		: "08", // "Pikachu",
	"0026"		: "08", // "Raichu",
	"0027"		: "02", // "Sandshrew",
	"0028"		: "02", // "Sandslash",
	"0029-f"	: "02", // "Nidoran♀", SPOT (in-game trade)
	"0030"		: "02", // "Nidorina", TERRY (in-game trade)
	"0031"		: "02", // "Nidoqueen",
	"0032-m"	: "02", // "Nidoran♂",
	"0033"		: "02", // "Nidorino",
	"0034"		: "02", // "Nidoking",
	"0035"		: "09", // "Clefairy",
	"0036"		: "09", // "Clefable",
	"0037"		: "06", // "Vulpix",
	"0038"		: "06", // "Ninetales",
	"0039"		: "09", // "Jigglypuff",
	"0040"		: "09", // "Wigglytuff",
	"0041"		: "02", // "Zubat",
	"0042"		: "02", // "Golbat",
	"0043"		: "01", // "Oddish",
	"0044"		: "01", // "Gloom",
	"0045"		: "01", // "Vileplume",
	"0046"		: "04", // "Paras",
	"0047"		: "04", // "Parasect",
	"0048"		: "04", // "Venonat",
	"0049"		: "04", // "Venomoth",
	"0050"		: "02", // "Diglett",
	"0051"		: "02", // "Dugtrio",
	"0052"		: "02", // "Meowth",
	"0053"		: "02", // "Persian",
	"0054"		: "02", // "Psyduck",
	"0055"		: "02", // "Golduck",
	"0056"		: "02", // "Mankey",
	"0057"		: "02", // "Primeape",
	"0058"		: "06", // "Growlithe",
	"0059"		: "06", // "Arcanine",
	"0060"		: "02", // "Poliwag",
	"0061"		: "02", // "Poliwhirl",
	"0062"		: "02", // "Poliwrath",
	"0063"		: "02", // "Abra",
	"0064"		: "02", // "Kadabra",
	"0065"		: "02", // "Alakazam",
	"0066"		: "02", // "Machop",
	"0067"		: "02", // "Machoke",
	"0068"		: "02", // "Machamp", RICKY
	"0069"		: "01", // "Bellsprout",
	"0070"		: "01", // "Weepinbell",
	"0071"		: "01", // "Victreebel",
	"0072"		: "03", // "Tentacool",
	"0073"		: "03", // "Tentacruel",
	"0074"		: "02", // "Geodude",
	"0075"		: "02", // "Graveler",
	"0076"		: "02", // "Golem",
	"0077"		: "06", // "Ponyta",
	"0078"		: "06", // "Rapidash",
	"0079"		: "06", // "Slowpoke",
	"0080"		: "02", // "Slowbro",
	"0081"		: "10", // "Magnemite",
	"0082"		: "10", // "Magneton",
	"0083"		: "05", // "Farfetch'd", DUX (in-game trade)
	"0084"		: "05", // "Doduo",
	"0085"		: "05", // "Dodrio",
	"0086"		: "03", // "Seel", SAILOR (in-game trade)
	"0087"		: "03", // "Dewgong",
	"0088"		: "02", // "Grimer",
	"0089"		: "02", // "Muk",
	"0090"		: "11", // "Shellder",
	"0091"		: "11", // "Cloyster",
	"0092"		: "02", // "Gastly",
	"0093"		: "02", // "Haunter",
	"0094"		: "02", // "Gengar",
	"0095"		: "07", // "Onix",
	"0096"		: "02", // "Drowzee",
	"0097"		: "02", // "Hypno",
	"0098"		: "03", // "Krabby",
	"0099"		: "03", // "Kingler",
	"0100"		: "10", // "Voltorb",
	"0101"		: "10", // "Electrode",DORIS (in-game trade)
	"0102"		: "01", // "Exeggcute",
	"0103"		: "01", // "Exeggutor",
	"0104"		: "02", // "Cubone",
	"0105"		: "02", // "Marowak",
	"0106"		: "02", // "Hitmonlee",
/**/"0107"		: "00", // "Hitmonchan",
/**/"0108"		: "00", // "Lickitung", MARC (in-game trade)
/**/"0109"		: "00", // "Koffing",
/**/"0110"		: "00", // "Weezing",
	"0111"		: "06", // "Rhyhorn",
	"0112"		: "02", // "Rhydon",
	"0113"		: "09", // "Chansey",
/**/"0114"		: "00", // "Tangela", CRINKLES (in-game trade)
	"0115"		: "02", // "Kangaskhan",
/**/"0116"		: "00", // "Horsea",
/**/"0117"		: "00", // "Seadra",
/**/"0118"		: "00", // "Goldeen",
/**/"0119"		: "00", // "Seaking",
	"0120"		: "11", // "Staryu",
	"0121"		: "11", // "Starmie",
/**/"0122"		: "00", // "Mr. Mime", MARCEL (in-game trade)
/**/"0123"		: "00", // "Scyther",
/**/"0124"		: "00", // "Jynx", LOLA (in-game trade)
/**/"0125"		: "00", // "Electabuzz",
/**/"0126"		: "00", // "Magmar",
/**/"0127"		: "00", // "Pinsir",
/**/"0128"		: "00", // "Tauros",
	"0129"		: "03", // "Magikarp",
/**/"0130"		: "00", // "Gyarados",
	"0131"		: "03", // "Lapras",
	"0132"		: "02", // "Ditto",
	"0133"		: "06", // "Eevee",
/**/"0134"		: "00", // "Vaporeon",
/**/"0135"		: "00", // "Jolteon",
/**/"0136"		: "00", // "Flareon",
/**/"0137"		: "00", // "Porygon",
/**/"0138"		: "00", // "Omanyte",
/**/"0139"		: "00", // "Omastar",
	"0140"		: "11", // "Kabuto",
/**/"0141"		: "00", // "Kabutops",
	"0142"		: "05", // "Aerodactyl",
	"0143"		: "02", // "Snorlax",
/**/"0144"		: "00", // "Articuno",
/**/"0145"		: "00", // "Zapdos",
/**/"0146"		: "00", // "Moltres",
/**/"0147"		: "00", // "Dratini",
/**/"0148"		: "00", // "Dragonair",
/**/"0149"		: "00", // "Dragonite",
/**/"0150"		: "00", // "Mewtwo",
/**/"0151"		: "02", // "Mew",
};
