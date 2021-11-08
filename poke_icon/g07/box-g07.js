const IcoPathBkWh = "poke_icon/g05/1/";
const IcoPathB2W2 = "poke_icon/g05/1/";

const ImgWd_G05  = 32;
const BoxCap_G05 = 30;
const MaxBox_G05 = 18;
const DivBox_G05 =  6;

//============================================================================
// NATIONAL POKEDEX
//============================================================================
const _Regdex_n_601 =
{
	"0001"            : {ico: "0001",             flags: []},                      // "Bulbasaur",
	"0002"            : {ico: "0002",             flags: []},                      // "Ivysaur",
	"0003"            : {ico: "0003",             flags: [FORM_MIN_GENDER_BASE]},  // "Venusaur",
	"0003-m"          : {ico: "0003",             flags: [FORM_MIN_GENDER_DIFF]},  // "Venusaur♂",
	"0003-f"          : {ico: "0003",             flags: [FORM_MIN_GENDER_DIFF]},  // "Venusaur♀",
	"0004"            : {ico: "0004",             flags: []},                      // "Charmander",
	"0005"            : {ico: "0005",             flags: []},                      // "Charmeleon",
	"0006"            : {ico: "0006",             flags: []},                      // "Charizard",
	"0007"            : {ico: "0007",             flags: []},                      // "Squirtle",
	"0008"            : {ico: "0008",             flags: []},                      // "Wartortle",
	"0009"            : {ico: "0009",             flags: []},                      // "Blastoise",
	"0010"            : {ico: "0010",             flags: []},                      // "Caterpie",
	"0011"            : {ico: "0011",             flags: []},                      // "Metapod",
	"0012"            : {ico: "0012",             flags: [FORM_MIN_GENDER_BASE]},  // "Butterfree",
	"0012-m"          : {ico: "0012",             flags: [FORM_MIN_GENDER_DIFF]},  // "Butterfree♂",
	"0012-f"          : {ico: "0012",             flags: [FORM_MIN_GENDER_DIFF]},  // "Butterfree♀",
	"0013"            : {ico: "0013",             flags: []},                      // "Weedle",
	"0014"            : {ico: "0013",             flags: []},                      // "Kakuna",
	"0015"            : {ico: "0015",             flags: []},                      // "Beedrill",
	"0016"            : {ico: "0016",             flags: []},                      // "Pidgey",
	"0017"            : {ico: "0017",             flags: []},                      // "Pidgeotto",
	"0018"            : {ico: "0018",             flags: []},                      // "Pidgeot",
	"0019"            : {ico: "0019",             flags: [FORM_MIN_GENDER_BASE]},  // "Rattata",
	"0019-m"          : {ico: "0019",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rattata♂",
	"0019-f"          : {ico: "0019",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rattata♀",
	"0020"            : {ico: "0020",             flags: [FORM_MIN_GENDER_BASE]},  // "Raticate",
	"0020-m"          : {ico: "0020",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raticate♂",
	"0020-f"          : {ico: "0020",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raticate♀",
	"0021"            : {ico: "0021",             flags: []},                      // "Spearow",
	"0022"            : {ico: "0022",             flags: []},                      // "Fearow",
	"0023"            : {ico: "0023",             flags: []},                      // "Ekans",
	"0024"            : {ico: "0024",             flags: []},                      // "Arbok",
	"0025"            : {ico: "0025",             flags: [FORM_MIN_GENDER_BASE]},  // "Pikachu",
	"0025-m"          : {ico: "0025",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pikachu♂",
	"0025-f"          : {ico: "0025",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pikachu♀",
	"0026"            : {ico: "0026",             flags: [FORM_MIN_GENDER_BASE]},  // "Raichu",
	"0026-m"          : {ico: "0026",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raichu♂",
	"0026-f"          : {ico: "0026",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raichu♀",
	"0027"            : {ico: "0027",             flags: []},                      // "Sandshrew",
	"0028"            : {ico: "0028",             flags: []},                      // "Sandslash",
	"0029"            : {ico: "0029",             flags: [FORM_MAJ_GENDER_BASE]},  // "Nidoran",
	"0029-f"          : {ico: "0029",             flags: [FORM_MAJ_GENDER_DIFF]},  // "Nidoran♀",
	"0030"            : {ico: "0030",             flags: []},                      // "Nidorina",
	"0031"            : {ico: "0031",             flags: []},                      // "Nidoqueen",
	"0032"            : {ico: "0032",             flags: [FORM_MAJ_GENDER_BASE]},  // "Nidoran",
	"0032-m"          : {ico: "0032",             flags: [FORM_MAJ_GENDER_DIFF]},  // "Nidoran♂",
	"0033"            : {ico: "0033",             flags: []},                      // "Nidorino",
	"0034"            : {ico: "0034",             flags: []},                      // "Nidoking",
	"0035"            : {ico: "0035",             flags: []},                      // "Clefairy",
	"0036"            : {ico: "0036",             flags: []},                      // "Clefable",
	"0037"            : {ico: "0037",             flags: []},                      // "Vulpix",
	"0038"            : {ico: "0038",             flags: []},                      // "Ninetales",
	"0039"            : {ico: "0039",             flags: []},                      // "Jigglypuff",
	"0040"            : {ico: "0040",             flags: []},                      // "Wigglytuff",
	"0041"            : {ico: "0041",             flags: [FORM_MIN_GENDER_BASE]},  // "Zubat",
	"0041-m"          : {ico: "0041",             flags: [FORM_MIN_GENDER_DIFF]},  // "Zubat♂",
	"0041-f"          : {ico: "0041",             flags: [FORM_MIN_GENDER_DIFF]},  // "Zubat♀",
	"0042"            : {ico: "0042",             flags: [FORM_MIN_GENDER_BASE]},  // "Golbat",
	"0042-m"          : {ico: "0042",             flags: [FORM_MIN_GENDER_DIFF]},  // "Golbat♂",
	"0042-f"          : {ico: "0042",             flags: [FORM_MIN_GENDER_DIFF]},  // "Golbat♀",
	"0043"            : {ico: "0043",             flags: []},                      // "Oddish",
	"0044"            : {ico: "0044",             flags: [FORM_MIN_GENDER_BASE]},  // "Gloom",
	"0044-m"          : {ico: "0044",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gloom♂",
	"0044-f"          : {ico: "0044",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gloom♀",
	"0045"            : {ico: "0045",             flags: [FORM_MIN_GENDER_BASE]},  // "Vileplume",
	"0045-m"          : {ico: "0045",             flags: [FORM_MIN_GENDER_DIFF]},  // "Vileplume♂",
	"0045-f"          : {ico: "0045",             flags: [FORM_MIN_GENDER_DIFF]},  // "Vileplume♀",
	"0046"            : {ico: "0046",             flags: []},                      // "Paras",
	"0047"            : {ico: "0047",             flags: []},                      // "Parasect",
	"0048"            : {ico: "0048",             flags: []},                      // "Venonat",
	"0049"            : {ico: "0049",             flags: []},                      // "Venomoth",
	"0050"            : {ico: "0050",             flags: []},                      // "Diglett",
	"0051"            : {ico: "0051",             flags: []},                      // "Dugtrio",
	"0052"            : {ico: "0052",             flags: []},                      // "Meowth",
	"0053"            : {ico: "0053",             flags: []},                      // "Persian",
	"0054"            : {ico: "0054",             flags: []},                      // "Psyduck",
	"0055"            : {ico: "0055",             flags: []},                      // "Golduck",
	"0056"            : {ico: "0056",             flags: []},                      // "Mankey",
	"0057"            : {ico: "0057",             flags: []},                      // "Primeape",
	"0058"            : {ico: "0058",             flags: []},                      // "Growlithe",
	"0059"            : {ico: "0059",             flags: []},                      // "Arcanine",
	"0060"            : {ico: "0060",             flags: []},                      // "Poliwag",
	"0061"            : {ico: "0061",             flags: []},                      // "Poliwhirl",
	"0062"            : {ico: "0062",             flags: []},                      // "Poliwrath",
	"0063"            : {ico: "0063",             flags: []},                      // "Abra",
	"0064"            : {ico: "0064",             flags: [FORM_MIN_GENDER_BASE]},  // "Kadabra",
	"0064-m"          : {ico: "0064",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kadabra♂",
	"0064-f"          : {ico: "0064",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kadabra♀",
	"0065"            : {ico: "0065",             flags: [FORM_MIN_GENDER_BASE]},  // "Alakazam",
	"0065-m"          : {ico: "0065",             flags: [FORM_MIN_GENDER_DIFF]},  // "Alakazam♂",
	"0065-f"          : {ico: "0065",             flags: [FORM_MIN_GENDER_DIFF]},  // "Alakazam♀",
	"0066"            : {ico: "0066",             flags: []},                      // "Machop",
	"0067"            : {ico: "0067",             flags: []},                      // "Machoke",
	"0068"            : {ico: "0068",             flags: []},                      // "Machamp",
	"0069"            : {ico: "0069",             flags: []},                      // "Bellsprout",
	"0070"            : {ico: "0070",             flags: []},                      // "Weepinbell",
	"0071"            : {ico: "0071",             flags: []},                      // "Victreebel",
	"0072"            : {ico: "0072",             flags: []},                      // "Tentacool",
	"0073"            : {ico: "0073",             flags: []},                      // "Tentacruel",
	"0074"            : {ico: "0074",             flags: []},                      // "Geodude",
	"0075"            : {ico: "0075",             flags: []},                      // "Graveler",
	"0076"            : {ico: "0076",             flags: []},                      // "Golem",
	"0077"            : {ico: "0077",             flags: []},                      // "Ponyta",
	"0078"            : {ico: "0078",             flags: []},                      // "Rapidash",
	"0079"            : {ico: "0079",             flags: []},                      // "Slowpoke",
	"0080"            : {ico: "0080",             flags: []},                      // "Slowbro",
	"0081"            : {ico: "0081",             flags: []},                      // "Magnemite",
	"0082"            : {ico: "0082",             flags: []},                      // "Magneton",
	"0083"            : {ico: "0083",             flags: []},                      // "Farfetch'd",
	"0084"            : {ico: "0084",             flags: [FORM_MIN_GENDER_BASE]},  // "Doduo",
	"0084-m"          : {ico: "0084",             flags: [FORM_MIN_GENDER_DIFF]},  // "Doduo♂",
	"0084-f"          : {ico: "0084",             flags: [FORM_MIN_GENDER_DIFF]},  // "Doduo♀",
	"0085"            : {ico: "0085",             flags: [FORM_MIN_GENDER_BASE]},  // "Dodrio",
	"0085-m"          : {ico: "0085",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dodrio♂",
	"0085-f"          : {ico: "0085",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dodrio♀",
	"0086"            : {ico: "0086",             flags: []},                      // "Seel",
	"0087"            : {ico: "0087",             flags: []},                      // "Dewgong",
	"0088"            : {ico: "0088",             flags: []},                      // "Grimer",
	"0089"            : {ico: "0089",             flags: []},                      // "Muk",
	"0090"            : {ico: "0090",             flags: []},                      // "Shellder",
	"0091"            : {ico: "0091",             flags: []},                      // "Cloyster",
	"0092"            : {ico: "0092",             flags: []},                      // "Gastly",
	"0093"            : {ico: "0093",             flags: []},                      // "Haunter",
	"0094"            : {ico: "0094",             flags: []},                      // "Gengar",
	"0095"            : {ico: "0095",             flags: []},                      // "Onix",
	"0096"            : {ico: "0096",             flags: []},                      // "Drowzee",
	"0097"            : {ico: "0097",             flags: [FORM_MIN_GENDER_BASE]},  // "Hypno",
	"0097-m"          : {ico: "0097",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hypno♂",
	"0097-f"          : {ico: "0097",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hypno♀",
	"0098"            : {ico: "0098",             flags: []},                      // "Krabby",
	"0099"            : {ico: "0099",             flags: []},                      // "Kingler",
	"0100"            : {ico: "0100",             flags: []},                      // "Voltorb", // uknown gender
	"0101"            : {ico: "0101",             flags: []},                      // "Electrode", // uknown gender
	"0102"            : {ico: "0102",             flags: []},                      // "Exeggcute",
	"0103"            : {ico: "0103",             flags: []},                      // "Exeggutor",
	"0104"            : {ico: "0104",             flags: []},                      // "Cubone",
	"0105"            : {ico: "0105",             flags: []},                      // "Marowak",
	"0106"            : {ico: "0106",             flags: []},                      // "Hitmonlee", // male only
	"0107"            : {ico: "0107",             flags: []},                      // "Hitmonchan", // male only
	"0108"            : {ico: "0108",             flags: []},                      // "Lickitung",
	"0109"            : {ico: "0109",             flags: []},                      // "Koffing",
	"0110"            : {ico: "0110",             flags: []},                      // "Weezing",
	"0111"            : {ico: "0111",             flags: [FORM_MIN_GENDER_BASE]},  // "Rhyhorn",
	"0111-m"          : {ico: "0111",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyhorn♂",
	"0111-f"          : {ico: "0111",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyhorn♀",
	"0112"            : {ico: "0112",             flags: [FORM_MIN_GENDER_BASE]},  // "Rhydon",
	"0112-m"          : {ico: "0112",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhydon♂",
	"0112-f"          : {ico: "0112",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhydon♀",
	"0113"            : {ico: "0113",             flags: []},                      // "Chansey", // female only
	"0114"            : {ico: "0114",             flags: []},                      // "Tangela",
	"0115"            : {ico: "0115",             flags: []},                      // "Kangaskhan", // female only
	"0116"            : {ico: "0116",             flags: []},                      // "Horsea",
	"0117"            : {ico: "0117",             flags: []},                      // "Seadra",
	"0118"            : {ico: "0118",             flags: [FORM_MIN_GENDER_BASE]},  // "Goldeen",
	"0118-m"          : {ico: "0118",             flags: [FORM_MIN_GENDER_DIFF]},  // "Goldeen♂",
	"0118-f"          : {ico: "0118",             flags: [FORM_MIN_GENDER_DIFF]},  // "Goldeen♀",
	"0119"            : {ico: "0119",             flags: [FORM_MIN_GENDER_BASE]},  // "Seaking",
	"0119-m"          : {ico: "0119",             flags: [FORM_MIN_GENDER_DIFF]},  // "Seaking♂",
	"0119-f"          : {ico: "0119",             flags: [FORM_MIN_GENDER_DIFF]},  // "Seaking♀",
 	"0120"            : {ico: "0120",             flags: []},                      // "Staryu", // uknown gender
	"0121"            : {ico: "0121",             flags: []},                      // "Starmie", // uknown gender
	"0122"            : {ico: "0122",             flags: []},                      // "Mr. Mime",
	"0123"            : {ico: "0123",             flags: [FORM_MIN_GENDER_BASE]},  // "Scyther",
	"0123-m"          : {ico: "0123",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scyther♂",
	"0123-f"          : {ico: "0123",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scyther♀",
	"0124"            : {ico: "0124",             flags: []},                      // "Jynx",
	"0125"            : {ico: "0125",             flags: []},                      // "Electabuzz",
	"0126"            : {ico: "0126",             flags: []},                      // "Magmar",
	"0127"            : {ico: "0127",             flags: []},                      // "Pinsir",
	"0128"            : {ico: "0128",             flags: []},                      // "Tauros", // male only
	"0129"            : {ico: "0129",             flags: [FORM_MIN_GENDER_BASE]},  // "Magikarp",
	"0129-m"          : {ico: "0129",             flags: [FORM_MIN_GENDER_DIFF]},  // "Magikarp♂",
	"0129-f"          : {ico: "0129",             flags: [FORM_MIN_GENDER_DIFF]},  // "Magikarp♀",
	"0130"            : {ico: "0130",             flags: [FORM_MIN_GENDER_BASE]},  // "Gyarados",
	"0130-m"          : {ico: "0130",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gyarados♂",
	"0130-f"          : {ico: "0130",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gyarados♀",
	"0131"            : {ico: "0131",             flags: []},                      // "Lapras",
	"0132"            : {ico: "0132",             flags: []},                      // "Ditto", // uknown gender
	"0133"            : {ico: "0133",             flags: []},                      // "Eevee",
	"0134"            : {ico: "0134",             flags: []},                      // "Vaporeon",
	"0135"            : {ico: "0135",             flags: []},                      // "Jolteon",
	"0136"            : {ico: "0136",             flags: []},                      // "Flareon",
	"0137"            : {ico: "0137",             flags: []},                      // "Porygon", // uknown gender
	"0138"            : {ico: "0138",             flags: []},                      // "Omanyte",
	"0139"            : {ico: "0139",             flags: []},                      // "Omastar",
	"0140"            : {ico: "0140",             flags: []},                      // "Kabuto",
	"0141"            : {ico: "0141",             flags: []},                      // "Kabutops",
	"0142"            : {ico: "0142",             flags: []},                      // "Aerodactyl",
	"0143"            : {ico: "0143",             flags: []},                      // "Snorlax",
	"0144"            : {ico: "0144",             flags: []},                      // "Articuno", // uknown gender
	"0145"            : {ico: "0145",             flags: []},                      // "Zapdos", // uknown gender
	"0146"            : {ico: "0146",             flags: []},                      // "Moltres", // uknown gender
	"0147"            : {ico: "0147",             flags: []},                      // "Dratini",
	"0148"            : {ico: "0148",             flags: []},                      // "Dragonair",
	"0149"            : {ico: "0149",             flags: []},                      // "Dragonite",
	"0150"            : {ico: "0150",             flags: []},                      // "Mewtwo", // uknown gender
	"0151"            : {ico: "0151",             flags: []},                      // "Mew", // uknown gender
	"0152"            : {ico: "0152",             flags: []},                      // "Chikorita",
	"0153"            : {ico: "0153",             flags: []},                      // "Bayleef",
	"0154"            : {ico: "0154",             flags: [FORM_MIN_GENDER_BASE]},  // "Meganium",
	"0154-m"          : {ico: "0154",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meganium♂",
	"0154-f"          : {ico: "0154",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meganium♀",
	"0155"            : {ico: "0155",             flags: []},                      // "Cyndaquil",
	"0156"            : {ico: "0156",             flags: []},                      // "Quilava",
	"0157"            : {ico: "0157",             flags: []},                      // "Typhlosion",
	"0158"            : {ico: "0158",             flags: []},                      // "Totodile",
	"0159"            : {ico: "0159",             flags: []},                      // "Croconaw",
	"0160"            : {ico: "0160",             flags: []},                      // "Feraligatr",
	"0161"            : {ico: "0161",             flags: []},                      // "Sentret",
	"0162"            : {ico: "0162",             flags: []},                      // "Furret",
	"0163"            : {ico: "0163",             flags: []},                      // "Hoothoot",
	"0164"            : {ico: "0164",             flags: []},                      // "Noctowl",
	"0165"            : {ico: "0165",             flags: [FORM_MIN_GENDER_BASE]},  // "Ledyba",
	"0165-m"          : {ico: "0165",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledyba♂",
	"0165-f"          : {ico: "0165",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledyba♀",
	"0166"            : {ico: "0166",             flags: [FORM_MIN_GENDER_BASE]},  // "Ledian",
	"0166-m"          : {ico: "0166",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledian♂",
	"0166-f"          : {ico: "0166",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledian♀",
	"0167"            : {ico: "0167",             flags: []},                      // "Spinarak",
	"0168"            : {ico: "0168",             flags: []},                      // "Ariados",
	"0169"            : {ico: "0169",             flags: []},                      // "Crobat",
	"0170"            : {ico: "0170",             flags: []},                      // "Chinchou",
	"0171"            : {ico: "0171",             flags: []},                      // "Lanturn",
	"0172"            : {ico: "0172",             flags: []},                      // "Pichu",
	"0172-spiky-eared": {ico: "0172",             flags: [FORM_0172_HGSS]},        // "Spiky-eared Pichu", // female only
	"0173"            : {ico: "0173",             flags: []},                      // "Cleffa",
	"0174"            : {ico: "0174",             flags: []},                      // "Igglybuff",
	"0175"            : {ico: "0175",             flags: []},                      // "Togepi",
	"0176"            : {ico: "0176",             flags: []},                      // "Togetic",
	"0177"            : {ico: "0177",             flags: []},                      // "Natu",
	"0178"            : {ico: "0178",             flags: [FORM_MIN_GENDER_BASE]},  // "Xatu",
	"0178-m"          : {ico: "0178",             flags: [FORM_MIN_GENDER_DIFF]},  // "Xatu♂",
	"0178-f"          : {ico: "0178",             flags: [FORM_MIN_GENDER_DIFF]},  // "Xatu♀",
	"0179"            : {ico: "0179",             flags: []},                      // "Mareep",
	"0180"            : {ico: "0180",             flags: []},                      // "Flaaffy",
	"0181"            : {ico: "0181",             flags: []},                      // "Ampharos",
	"0182"            : {ico: "0182",             flags: []},                      // "Bellossom",
	"0183"            : {ico: "0183",             flags: []},                      // "Marill",
	"0184"            : {ico: "0184",             flags: []},                      // "Azumarill",
	"0185"            : {ico: "0185",             flags: [FORM_MIN_GENDER_BASE]},  // "Sudowoodo",
	"0185-m"          : {ico: "0185",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sudowoodo♂",
	"0185-f"          : {ico: "0185",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sudowoodo♀",
	"0186"            : {ico: "0186",             flags: [FORM_MIN_GENDER_BASE]},  // "Politoed",
	"0186-m"          : {ico: "0186",             flags: [FORM_MIN_GENDER_DIFF]},  // "Politoed♂",
	"0186-f"          : {ico: "0186",             flags: [FORM_MIN_GENDER_DIFF]},  // "Politoed♀",
	"0187"            : {ico: "0187",             flags: []},                      // "Hoppip",
	"0188"            : {ico: "0188",             flags: []},                      // "Skiploom",
	"0189"            : {ico: "0189",             flags: []},                      // "Jumpluff",
	"0190"            : {ico: "0190",             flags: [FORM_MIN_GENDER_BASE]},  // "Aipom",
	"0190-m"          : {ico: "0190",             flags: [FORM_MIN_GENDER_DIFF]},  // "Aipom♂",
	"0190-f"          : {ico: "0190",             flags: [FORM_MIN_GENDER_DIFF]},  // "Aipom♀",
	"0191"            : {ico: "0191",             flags: []},                      // "Sunkern",
	"0192"            : {ico: "0192",             flags: []},                      // "Sunflora",
	"0193"            : {ico: "0193",             flags: []},                      // "Yanma",
	"0194"            : {ico: "0194",             flags: [FORM_MIN_GENDER_BASE]},  // "Wooper",
	"0194-m"          : {ico: "0194",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wooper♂",
	"0194-f"          : {ico: "0194",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wooper♀",
	"0195"            : {ico: "0195",             flags: [FORM_MIN_GENDER_BASE]},  // "Quagsire",
	"0195-m"          : {ico: "0195",             flags: [FORM_MIN_GENDER_DIFF]},  // "Quagsire♂",
	"0195-f"          : {ico: "0195",             flags: [FORM_MIN_GENDER_DIFF]},  // "Quagsire♀",
	"0196"            : {ico: "0196",             flags: []},                      // "Espeon",
	"0197"            : {ico: "0197",             flags: []},                      // "Umbreon",
	"0198"            : {ico: "0198",             flags: [FORM_MIN_GENDER_BASE]},  // "Murkrow",
	"0198-m"          : {ico: "0198",             flags: [FORM_MIN_GENDER_DIFF]},  // "Murkrow♂",
	"0198-f"          : {ico: "0198",             flags: [FORM_MIN_GENDER_DIFF]},  // "Murkrow♀",
	"0199"            : {ico: "0199",             flags: []},                      // "Slowking",
	"0200"            : {ico: "0200",             flags: []},                      // "Misdreavus",
	"0201"            : {ico: "0201-anger",       flags: [FORM_0201_BASE]},        // "Unown", // uknown gender
//	"0201-angry"      : {ico: "0201-anger",       flags: [FORM_0201]},             // "Unown Angry", // uknown gender
	"0201-anger"      : {ico: "0201-anger",       flags: [FORM_0201]},             // "Unown Anger", // uknown gender
	"0201-bear"       : {ico: "0201-bear",        flags: [FORM_0201]},             // "Unown Bear", // uknown gender
	"0201-chase"      : {ico: "0201-chase",       flags: [FORM_0201]},             // "Unown Chase", // uknown gender
	"0201-direct"     : {ico: "0201-direct",      flags: [FORM_0201]},             // "Unown Direct", // uknown gender
	"0201-engage"     : {ico: "0201-engage",      flags: [FORM_0201]},             // "Unown Engage", // uknown gender
	"0201-find"       : {ico: "0201-find",        flags: [FORM_0201]},             // "Unown Find", // uknown gender
	"0201-give"       : {ico: "0201-give",        flags: [FORM_0201]},             // "Unown Give", // uknown gender
	"0201-help"       : {ico: "0201-help",        flags: [FORM_0201]},             // "Unown Help", // uknown gender
	"0201-increase"   : {ico: "0201-increase",    flags: [FORM_0201]},             // "Unown Increase", // uknown gender
	"0201-join"       : {ico: "0201-join",        flags: [FORM_0201]},             // "Unown Join", // uknown gender
	"0201-keep"       : {ico: "0201-keep",        flags: [FORM_0201]},             // "Unown Keep", // uknown gender
	"0201-laugh"      : {ico: "0201-laugh",       flags: [FORM_0201]},             // "Unown Laugh", // uknown gender
	"0201-make"       : {ico: "0201-make",        flags: [FORM_0201]},             // "Unown Make", // uknown gender
	"0201-nuzzle"     : {ico: "0201-nuzzle",      flags: [FORM_0201]},             // "Unown Nuzzle", // uknown gender
	"0201-observe"    : {ico: "0201-observe",     flags: [FORM_0201]},             // "Unown Observe", // uknown gender
	"0201-perform"    : {ico: "0201-perform",     flags: [FORM_0201]},             // "Unown Perform", // uknown gender
	"0201-quicken"    : {ico: "0201-quicken",     flags: [FORM_0201]},             // "Unown Quicken", // uknown gender
	"0201-reassure"   : {ico: "0201-reassure",    flags: [FORM_0201]},             // "Unown Reassure", // uknown gender
	"0201-search"     : {ico: "0201-search",      flags: [FORM_0201]},             // "Unown Search", // uknown gender
	"0201-tell"       : {ico: "0201-tell",        flags: [FORM_0201]},             // "Unown Tell", // uknown gender
	"0201-undo"       : {ico: "0201-undo",        flags: [FORM_0201]},             // "Unown Undo", // uknown gender
	"0201-vanish"     : {ico: "0201-vanish",      flags: [FORM_0201]},             // "Unown Vanish", // uknown gender
	"0201-want"       : {ico: "0201-want",        flags: [FORM_0201]},             // "Unown Want", // uknown gender
	"0201-xxxxx"      : {ico: "0201-xxxxx",       flags: [FORM_0201]},             // "Unown XXXXX", // uknown gender
	"0201-yield"      : {ico: "0201-yield",       flags: [FORM_0201]},             // "Unown Yield", // uknown gender
	"0201-zoom"       : {ico: "0201-zoom",        flags: [FORM_0201]},             // "Unown Zoom", // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: [FORM_0201]},             // "Unown !!!!!", // uknown gender
	"0201-question"   : {ico: "0201-question",    flags: [FORM_0201]},             // "Unown ?????", // uknown gender
	"0202"            : {ico: "0202",             flags: [FORM_MIN_GENDER_BASE]},  // "Wobbuffet",
	"0202-m"          : {ico: "0202",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wobbuffet♂",
	"0202-f"          : {ico: "0202",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wobbuffet♀",
	"0203"            : {ico: "0203",             flags: [FORM_MIN_GENDER_BASE]},  // "Girafarig",
	"0203-m"          : {ico: "0203",             flags: [FORM_MIN_GENDER_DIFF]},  // "Girafarig♂",
	"0203-f"          : {ico: "0203",             flags: [FORM_MIN_GENDER_DIFF]},  // "Girafarig♀",
	"0204"            : {ico: "0204",             flags: []},                      // "Pineco",
	"0205"            : {ico: "0205",             flags: []},                      // "Forretress",
	"0206"            : {ico: "0206",             flags: []},                      // "Dunsparce",
	"0207"            : {ico: "0207",             flags: [FORM_MIN_GENDER_BASE]},  // "Gligar",
	"0207-m"          : {ico: "0207",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gligar♂",
	"0207-f"          : {ico: "0207",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gligar♀",
	"0208"            : {ico: "0208",             flags: [FORM_MIN_GENDER_BASE]},  // "Steelix",
	"0208-m"          : {ico: "0208",             flags: [FORM_MIN_GENDER_DIFF]},  // "Steelix♂",
	"0208-f"          : {ico: "0208",             flags: [FORM_MIN_GENDER_DIFF]},  // "Steelix♀",
	"0209"            : {ico: "0209",             flags: []},                      // "Snubbull",
	"0210"            : {ico: "0210",             flags: []},                      // "Granbull",
	"0211"            : {ico: "0211",             flags: []},                      // "Qwilfish",
	"0212"            : {ico: "0212",             flags: [FORM_MIN_GENDER_BASE]},  // "Scizor",
	"0212-m"          : {ico: "0212",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scizor♂",
	"0212-f"          : {ico: "0212",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scizor♀",
	"0213"            : {ico: "0213",             flags: []},                      // "Shuckle",
	"0214"            : {ico: "0214",             flags: [FORM_MIN_GENDER_BASE]},  // "Heracross",
	"0214-m"          : {ico: "0214",             flags: [FORM_MIN_GENDER_DIFF]},  // "Heracross♂",
	"0214-f"          : {ico: "0214",             flags: [FORM_MIN_GENDER_DIFF]},  // "Heracross♀",
	"0215"            : {ico: "0215",             flags: [FORM_MIN_GENDER_BASE]},  // "Sneasel",
	"0215-m"          : {ico: "0215",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sneasel♂",
	"0215-f"          : {ico: "0215",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sneasel♀",
	"0216"            : {ico: "0216",             flags: []},                      // "Teddiursa",
	"0217"            : {ico: "0217",             flags: [FORM_MIN_GENDER_BASE]},  // "Ursaring",
	"0217-m"          : {ico: "0217",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ursaring♂",
	"0217-f"          : {ico: "0217",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ursaring♀",
	"0218"            : {ico: "0218",             flags: []},                      // "Slugma",
	"0219"            : {ico: "0219",             flags: []},                      // "Magcargo",
	"0220"            : {ico: "0220",             flags: []},                      // "Swinub",
	"0221"            : {ico: "0221",             flags: [FORM_MIN_GENDER_BASE]},  // "Piloswine",
	"0221-m"          : {ico: "0221",             flags: [FORM_MIN_GENDER_DIFF]},  // "Piloswine♂",
	"0221-f"          : {ico: "0221",             flags: [FORM_MIN_GENDER_DIFF]},  // "Piloswine♀",
	"0222"            : {ico: "0222",             flags: []},                      // "Corsola",
	"0223"            : {ico: "0223",             flags: []},                      // "Remoraid",
	"0224"            : {ico: "0224",             flags: [FORM_MIN_GENDER_BASE]},  // "Octillery",
	"0224-m"          : {ico: "0224",             flags: [FORM_MIN_GENDER_DIFF]},  // "Octillery♂",
	"0224-f"          : {ico: "0224",             flags: [FORM_MIN_GENDER_DIFF]},  // "Octillery♀",
	"0225"            : {ico: "0225",             flags: []},                      // "Delibird",
	"0226"            : {ico: "0226",             flags: []},                      // "Mantine",
	"0227"            : {ico: "0227",             flags: []},                      // "Skarmory",
	"0228"            : {ico: "0228",             flags: []},                      // "Houndour",
	"0229"            : {ico: "0229",             flags: [FORM_MIN_GENDER_BASE]},  // "Houndoom",
	"0229-m"          : {ico: "0229",             flags: [FORM_MIN_GENDER_DIFF]},  // "Houndoom♂",
	"0229-f"          : {ico: "0229",             flags: [FORM_MIN_GENDER_DIFF]},  // "Houndoom♀",
	"0230"            : {ico: "0230",             flags: []},                      // "Kingdra",
	"0231"            : {ico: "0231",             flags: []},                      // "Phanpy",
	"0232"            : {ico: "0232",             flags: [FORM_MIN_GENDER_BASE]},  // "Donphan",
	"0232-m"          : {ico: "0232",             flags: [FORM_MIN_GENDER_DIFF]},  // "Donphan♂",
	"0232-f"          : {ico: "0232",             flags: [FORM_MIN_GENDER_DIFF]},  // "Donphan♀",
	"0233"            : {ico: "0233",             flags: []},                      // "Porygon2", // uknown gender
	"0234"            : {ico: "0234",             flags: []},                      // "Stantler",
	"0235"            : {ico: "0235",             flags: []},                      // "Smeargle",
	"0236"            : {ico: "0236",             flags: []},                      // "Tyrogue", // male only
	"0237"            : {ico: "0237",             flags: []},                      // "Hitmontop", // male only
	"0238"            : {ico: "0238",             flags: []},                      // "Smoochum", // female only
	"0239"            : {ico: "0239",             flags: []},                      // "Elekid",
	"0240"            : {ico: "0240",             flags: []},                      // "Magby",
	"0241"            : {ico: "0241",             flags: []},                      // "Miltank", // female only
	"0242"            : {ico: "0242",             flags: []},                      // "Blissey", // female only
	"0243"            : {ico: "0243",             flags: []},                      // "Raikou", // uknown gender
	"0244"            : {ico: "0244",             flags: []},                      // "Entei", // uknown gender
	"0245"            : {ico: "0245",             flags: []},                      // "Suicune", // uknown gender
	"0246"            : {ico: "0246",             flags: []},                      // "Larvitar",
	"0247"            : {ico: "0247",             flags: []},                      // "Pupitar",
	"0248"            : {ico: "0248",             flags: []},                      // "Tyranitar",
	"0249"            : {ico: "0249",             flags: []},                      // "Lugia", // uknown gender
	"0250"            : {ico: "0250",             flags: []},                      // "Ho-Oh", // uknown gender
	"0251"            : {ico: "0251",             flags: []},                      // "Celebi", // uknown gender
	"0252"            : {ico: "0252",             flags: []},                      // "Treecko",
	"0253"            : {ico: "0253",             flags: []},                      // "Grovyle",
	"0254"            : {ico: "0254",             flags: []},                      // "Sceptile",
	"0255"            : {ico: "0255",             flags: [FORM_MIN_GENDER_BASE]},  // "Torchic",
	"0255-m"          : {ico: "0255",             flags: [FORM_MIN_GENDER_DIFF]},  // "Torchic♂",
	"0255-f"          : {ico: "0255",             flags: [FORM_MIN_GENDER_DIFF]},  // "Torchic♀",
	"0256"            : {ico: "0256",             flags: [FORM_MIN_GENDER_BASE]},  // "Combusken",
	"0256-m"          : {ico: "0256",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combusken♂",
	"0256-f"          : {ico: "0256",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combusken♀",
	"0257"            : {ico: "0257",             flags: [FORM_MIN_GENDER_BASE]},  // "Blaziken",
	"0257-m"          : {ico: "0257",             flags: [FORM_MIN_GENDER_DIFF]},  // "Blaziken♂",
	"0257-f"          : {ico: "0257",             flags: [FORM_MIN_GENDER_DIFF]},  // "Blaziken♀",
	"0258"            : {ico: "0258",             flags: []},                      // "Mudkip",
	"0259"            : {ico: "0259",             flags: []},                      // "Marshtomp",
	"0260"            : {ico: "0260",             flags: []},                      // "Swampert",
	"0261"            : {ico: "0261",             flags: []},                      // "Poochyena",
	"0262"            : {ico: "0262",             flags: []},                      // "Mightyena",
	"0263"            : {ico: "0263",             flags: []},                      // "Zigzagoon",
	"0264"            : {ico: "0264",             flags: []},                      // "Linoone",
	"0265"            : {ico: "0265",             flags: []},                      // "Wurmple",
	"0266"            : {ico: "0266",             flags: []},                      // "Silcoon",
	"0267"            : {ico: "0267",             flags: [FORM_MIN_GENDER_BASE]},  // "Beautifly",
	"0267-m"          : {ico: "0267",             flags: [FORM_MIN_GENDER_DIFF]},  // "Beautifly♂",
	"0267-f"          : {ico: "0267",             flags: [FORM_MIN_GENDER_DIFF]},  // "Beautifly♀",
	"0268"            : {ico: "0268",             flags: []},                      // "Cascoon",
	"0269"            : {ico: "0269",             flags: [FORM_MIN_GENDER_BASE]},  // "Dustox",
	"0269-m"          : {ico: "0269",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dustox♂",
	"0269-f"          : {ico: "0269",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dustox♀",
	"0270"            : {ico: "0270",             flags: []},                      // "Lotad",
	"0271"            : {ico: "0271",             flags: []},                      // "Lombre",
	"0272"            : {ico: "0272",             flags: [FORM_MIN_GENDER_BASE]},  // "Ludicolo",
	"0272-m"          : {ico: "0272",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ludicolo♂",
	"0272-f"          : {ico: "0272",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ludicolo♀",
	"0273"            : {ico: "0273",             flags: []},                      // "Seedot",
	"0274"            : {ico: "0274",             flags: [FORM_MIN_GENDER_BASE]},  // "Nuzleaf",
	"0274-m"          : {ico: "0274",             flags: [FORM_MIN_GENDER_DIFF]},  // "Nuzleaf♂",
	"0274-f"          : {ico: "0274",             flags: [FORM_MIN_GENDER_DIFF]},  // "Nuzleaf♀",
	"0275"            : {ico: "0275",             flags: [FORM_MIN_GENDER_BASE]},  // "Shiftry",
	"0275-m"          : {ico: "0275",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shiftry♂",
	"0275-f"          : {ico: "0275",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shiftry♀",
	"0276"            : {ico: "0276",             flags: []},                      // "Taillow",
	"0277"            : {ico: "0277",             flags: []},                      // "Swellow",
	"0278"            : {ico: "0278",             flags: []},                      // "Wingull",
	"0279"            : {ico: "0279",             flags: []},                      // "Pelipper",
	"0280"            : {ico: "0280",             flags: []},                      // "Ralts",
	"0281"            : {ico: "0281",             flags: []},                      // "Kirlia",
	"0282"            : {ico: "0282",             flags: []},                      // "Gardevoir",
	"0283"            : {ico: "0283",             flags: []},                      // "Surskit",
	"0284"            : {ico: "0284",             flags: []},                      // "Masquerain",
	"0285"            : {ico: "0285",             flags: []},                      // "Shroomish",
	"0286"            : {ico: "0286",             flags: []},                      // "Breloom",
	"0287"            : {ico: "0287",             flags: []},                      // "Slakoth",
	"0288"            : {ico: "0288",             flags: []},                      // "Vigoroth",
	"0289"            : {ico: "0289",             flags: []},                      // "Slaking",
	"0290"            : {ico: "0290",             flags: []},                      // "Nincada",
	"0291"            : {ico: "0291",             flags: []},                      // "Ninjask",
	"0292"            : {ico: "0292",             flags: []},                      // "Shedinja", // uknown gender
	"0293"            : {ico: "0293",             flags: []},                      // "Whismur",
	"0294"            : {ico: "0294",             flags: []},                      // "Loudred",
	"0295"            : {ico: "0295",             flags: []},                      // "Exploud",
	"0296"            : {ico: "0296",             flags: []},                      // "Makuhita",
	"0297"            : {ico: "0297",             flags: []},                      // "Hariyama",
	"0298"            : {ico: "0298",             flags: []},                      // "Azurill",
	"0299"            : {ico: "0299",             flags: []},                      // "Nosepass",
	"0300"            : {ico: "0300",             flags: []},                      // "Skitty",
	"0301"            : {ico: "0301",             flags: []},                      // "Delcatty",
	"0302"            : {ico: "0302",             flags: []},                      // "Sableye",
	"0303"            : {ico: "0303",             flags: []},                      // "Mawile",
	"0304"            : {ico: "0304",             flags: []},                      // "Aron",
	"0305"            : {ico: "0305",             flags: []},                      // "Lairon",
	"0306"            : {ico: "0306",             flags: []},                      // "Aggron",
	"0307"            : {ico: "0307",             flags: [FORM_MIN_GENDER_BASE]},  // "Meditite",
	"0307-m"          : {ico: "0307",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meditite♂",
	"0307-f"          : {ico: "0307",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meditite♀",
	"0308"            : {ico: "0308",             flags: [FORM_MIN_GENDER_BASE]},  // "Medicham",
	"0308-m"          : {ico: "0308",             flags: [FORM_MIN_GENDER_DIFF]},  // "Medicham♂",
	"0308-f"          : {ico: "0308",             flags: [FORM_MIN_GENDER_DIFF]},  // "Medicham♀",
	"0309"            : {ico: "0309",             flags: []},                      // "Electrike",
	"0310"            : {ico: "0310",             flags: []},                      // "Manectric",
	"0311"            : {ico: "0311",             flags: []},                      // "Plusle",
	"0312"            : {ico: "0312",             flags: []},                      // "Minun",
	"0313"            : {ico: "0313",             flags: []},                      // "Volbeat", // male only
	"0314"            : {ico: "0314",             flags: []},                      // "Illumise", // female only
	"0315"            : {ico: "0315",             flags: [FORM_MIN_GENDER_BASE]},  // "Roselia",
	"0315-m"          : {ico: "0315",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roselia♂",
	"0315-f"          : {ico: "0315",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roselia♀",
	"0316"            : {ico: "0316",             flags: [FORM_MIN_GENDER_BASE]},  // "Gulpin",
	"0316-m"          : {ico: "0316",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gulpin♂",
	"0316-f"          : {ico: "0316",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gulpin♀",
	"0317"            : {ico: "0317",             flags: [FORM_MIN_GENDER_BASE]},  // "Swalot",
	"0317-m"          : {ico: "0317",             flags: [FORM_MIN_GENDER_DIFF]},  // "Swalot♂",
	"0317-f"          : {ico: "0317",             flags: [FORM_MIN_GENDER_DIFF]},  // "Swalot♀",
	"0318"            : {ico: "0318",             flags: []},                      // "Carvanha",
	"0319"            : {ico: "0319",             flags: []},                      // "Sharpedo",
	"0320"            : {ico: "0320",             flags: []},                      // "Wailmer",
	"0321"            : {ico: "0321",             flags: []},                      // "Wailord",
	"0322"            : {ico: "0322",             flags: [FORM_MIN_GENDER_BASE]},  // "Numel",
	"0322-m"          : {ico: "0322",             flags: [FORM_MIN_GENDER_DIFF]},  // "Numel♂",
	"0322-f"          : {ico: "0322",             flags: [FORM_MIN_GENDER_DIFF]},  // "Numel♀",
	"0323"            : {ico: "0323",             flags: [FORM_MIN_GENDER_BASE]},  // "Camerupt",
	"0323-m"          : {ico: "0323",             flags: [FORM_MIN_GENDER_DIFF]},  // "Camerupt♂",
	"0323-f"          : {ico: "0323",             flags: [FORM_MIN_GENDER_DIFF]},  // "Camerupt♀",
	"0324"            : {ico: "0324",             flags: []},                      // "Torkoal",
	"0325"            : {ico: "0325",             flags: []},                      // "Spoink",
	"0326"            : {ico: "0326",             flags: []},                      // "Grumpig",
	"0327"            : {ico: "0327",             flags: []},                      // "Spinda",
	"0328"            : {ico: "0328",             flags: []},                      // "Trapinch",
	"0329"            : {ico: "0329",             flags: []},                      // "Vibrava",
	"0330"            : {ico: "0330",             flags: []},                      // "Flygon",
	"0331"            : {ico: "0331",             flags: []},                      // "Cacnea",
	"0332"            : {ico: "0332",             flags: [FORM_MIN_GENDER_BASE]},  // "Cacturne",
	"0332-m"          : {ico: "0332",             flags: [FORM_MIN_GENDER_DIFF]},  // "Cacturne♂",
	"0332-f"          : {ico: "0332",             flags: [FORM_MIN_GENDER_DIFF]},  // "Cacturne♀",
	"0333"            : {ico: "0333",             flags: []},                      // "Swablu",
	"0334"            : {ico: "0334",             flags: []},                      // "Altaria",
	"0335"            : {ico: "0335",             flags: []},                      // "Zangoose",
	"0336"            : {ico: "0336",             flags: []},                      // "Seviper",
	"0337"            : {ico: "0337",             flags: []},                      // "Lunatone", // uknown gender
	"0338"            : {ico: "0338",             flags: []},                      // "Solrock", // uknown gender
	"0339"            : {ico: "0339",             flags: []},                      // "Barboach",
	"0340"            : {ico: "0340",             flags: []},                      // "Whiscash",
	"0341"            : {ico: "0341",             flags: []},                      // "Corphish",
	"0342"            : {ico: "0342",             flags: []},                      // "Crawdaunt",
	"0343"            : {ico: "0343",             flags: []},                      // "Baltoy", // uknown gender
	"0344"            : {ico: "0344",             flags: []},                      // "Claydol", // uknown gender
	"0345"            : {ico: "0345",             flags: []},                      // "Lileep",
	"0346"            : {ico: "0346",             flags: []},                      // "Cradily",
	"0347"            : {ico: "0347",             flags: []},                      // "Anorith",
	"0348"            : {ico: "0348",             flags: []},                      // "Armaldo",
	"0349"            : {ico: "0349",             flags: []},                      // "Feebas",
	"0350"            : {ico: "0350",             flags: [FORM_MIN_GENDER_BASE]},  // "Milotic",
	"0350-m"          : {ico: "0350",             flags: [FORM_MIN_GENDER_DIFF]},  // "Milotic♂",
	"0350-f"          : {ico: "0350",             flags: [FORM_MIN_GENDER_DIFF]},  // "Milotic♀",
	"0351"            : {ico: "0351",             flags: []},                      // "Castform",
	"0351-sunny"      : {ico: "0351-sunny",       flags: [FORM_BATTLE]},           // "Sunny Castform",
	"0351-rainy"      : {ico: "0351-rainy",       flags: [FORM_BATTLE]},           // "Rainy Castform",
	"0351-snowy"      : {ico: "0351-snowy",       flags: [FORM_BATTLE]},           // "Snowy Castform",
	"0352"            : {ico: "0352",             flags: []},                      // "Kecleon",
	"0353"            : {ico: "0353",             flags: []},                      // "Shuppet",
	"0354"            : {ico: "0354",             flags: []},                      // "Banette",
	"0355"            : {ico: "0355",             flags: []},                      // "Duskull",
	"0356"            : {ico: "0356",             flags: []},                      // "Dusclops",
	"0357"            : {ico: "0357",             flags: []},                      // "Tropius",
	"0358"            : {ico: "0358",             flags: []},                      // "Chimecho",
	"0359"            : {ico: "0359",             flags: []},                      // "Absol",
	"0360"            : {ico: "0360",             flags: []},                      // "Wynaut",
	"0361"            : {ico: "0361",             flags: []},                      // "Snorunt",
	"0362"            : {ico: "0362",             flags: []},                      // "Glalie",
	"0363"            : {ico: "0363",             flags: []},                      // "Spheal",
	"0364"            : {ico: "0364",             flags: []},                      // "Sealeo",
	"0365"            : {ico: "0365",             flags: []},                      // "Walrein",
	"0366"            : {ico: "0366",             flags: []},                      // "Clamperl",
	"0367"            : {ico: "0367",             flags: []},                      // "Huntail",
	"0368"            : {ico: "0368",             flags: []},                      // "Gorebyss",
	"0369"            : {ico: "0369",             flags: [FORM_MIN_GENDER_BASE]},  // "Relicanth",
	"0369-m"          : {ico: "0369",             flags: [FORM_MIN_GENDER_DIFF]},  // "Relicanth♂",
	"0369-f"          : {ico: "0369",             flags: [FORM_MIN_GENDER_DIFF]},  // "Relicanth♀",
	"0370"            : {ico: "0370",             flags: []},                      // "Luvdisc",
	"0371"            : {ico: "0371",             flags: []},                      // "Bagon",
	"0372"            : {ico: "0372",             flags: []},                      // "Shelgon",
	"0373"            : {ico: "0373",             flags: []},                      // "Salamence",
	"0374"            : {ico: "0374",             flags: []},                      // "Beldum", // uknown gender
	"0375"            : {ico: "0375",             flags: []},                      // "Metang", // uknown gender
	"0376"            : {ico: "0376",             flags: []},                      // "Metagross", // uknown gender
	"0377"            : {ico: "0377",             flags: []},                      // "Regirock", // uknown gender
	"0378"            : {ico: "0378",             flags: []},                      // "Regice", // uknown gender
	"0379"            : {ico: "0379",             flags: []},                      // "Registeel", // uknown gender
	"0380"            : {ico: "0380",             flags: []},                      // "Latias", // female only
	"0381"            : {ico: "0381",             flags: []},                      // "Latios", // male only
	"0382"            : {ico: "0382",             flags: []},                      // "Kyogre", // uknown gender
	"0383"            : {ico: "0383",             flags: []},                      // "Groudon", // uknown gender
	"0384"            : {ico: "0384",             flags: []},                      // "Rayquaza", // uknown gender
	"0385"            : {ico: "0385",             flags: []},                      // "Jirachi", // uknown gender
	"0386"            : {ico: "0386",             flags: [FORM_0386_BASE,
	                                                      FORM_0386]},             // "Deoxys", // uknown gender
	"0386-attack"     : {ico: "0386-attack",      flags: [FORM_0386]},             // "Attack Deoxys", // uknown gender
	"0386-defense"    : {ico: "0386-defense",     flags: [FORM_0386]},             // "Defense Deoxys", // uknown gender
	"0386-speed"      : {ico: "0386-speed",       flags: [FORM_0386]},             // "Speed Deoxys", // uknown gender
	"0387"            : {ico: "0387",             flags: []},                      // "Turtwig",
	"0388"            : {ico: "0388",             flags: []},                      // "Grotle",
	"0389"            : {ico: "0389",             flags: []},                      // "Torterra",
	"0390"            : {ico: "0390",             flags: []},                      // "Chimchar",
	"0391"            : {ico: "0391",             flags: []},                      // "Monferno",
	"0392"            : {ico: "0392",             flags: []},                      // "Infernape",
	"0393"            : {ico: "0393",             flags: []},                      // "Piplup",
	"0394"            : {ico: "0394",             flags: []},                      // "Prinplup",
	"0395"            : {ico: "0395",             flags: []},                      // "Empoleon",
	"0396"            : {ico: "0396",             flags: [FORM_MIN_GENDER_BASE]},  // "Starly",
	"0396-m"          : {ico: "0396",             flags: [FORM_MIN_GENDER_DIFF]},  // "Starly♂",
	"0396-f"          : {ico: "0396",             flags: [FORM_MIN_GENDER_DIFF]},  // "Starly♀",
	"0397"            : {ico: "0397",             flags: [FORM_MIN_GENDER_BASE]},  // "Staravia",
	"0397-m"          : {ico: "0397",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staravia♂",
	"0397-f"          : {ico: "0397",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staravia♀",
	"0398"            : {ico: "0398",             flags: [FORM_MIN_GENDER_BASE]},  // "Staraptor",
	"0398-m"          : {ico: "0398",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staraptor♂",
	"0398-f"          : {ico: "0398",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staraptor♀",
	"0399"            : {ico: "0399",             flags: [FORM_MIN_GENDER_BASE]},  // "Bidoof",
	"0399-m"          : {ico: "0399",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bidoof♂",
	"0399-f"          : {ico: "0399",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bidoof♀",
	"0400"            : {ico: "0400",             flags: [FORM_MIN_GENDER_BASE]},  // "Bibarel",
	"0400-m"          : {ico: "0400",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bibarel♂",
	"0400-f"          : {ico: "0400",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bibarel♀",
	"0401"            : {ico: "0401",             flags: [FORM_MIN_GENDER_BASE]},  // "Kricketot",
	"0401-m"          : {ico: "0401",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketot♂",
	"0401-f"          : {ico: "0401",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketot♀",
	"0402"            : {ico: "0402",             flags: [FORM_MIN_GENDER_BASE]},  // "Kricketune",
	"0402-m"          : {ico: "0402",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketune♂",
	"0402-f"          : {ico: "0402",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketune♀",
	"0403"            : {ico: "0403",             flags: [FORM_MIN_GENDER_BASE]},  // "Shinx",
	"0403-m"          : {ico: "0403",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shinx♂",
	"0403-f"          : {ico: "0403",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shinx♀",
	"0404"            : {ico: "0404",             flags: [FORM_MIN_GENDER_BASE]},  // "Luxio",
	"0404-m"          : {ico: "0404",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxio♂",
	"0404-f"          : {ico: "0404",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxio♀",
	"0405"            : {ico: "0405",             flags: [FORM_MIN_GENDER_BASE]},  // "Luxray",
	"0405-m"          : {ico: "0405",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxray♂",
	"0405-f"          : {ico: "0405",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxray♀",
	"0406"            : {ico: "0406",             flags: []},                      // "Budew",
	"0407"            : {ico: "0407",             flags: [FORM_MIN_GENDER_BASE]},  // "Roserade",
	"0407-m"          : {ico: "0407",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roserade♂",
	"0407-f"          : {ico: "0407",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roserade♀",
	"0408"            : {ico: "0408",             flags: []},                      // "Cranidos",
	"0409"            : {ico: "0409",             flags: []},                      // "Rampardos",
	"0410"            : {ico: "0410",             flags: []},                      // "Shieldon",
	"0411"            : {ico: "0411",             flags: []},                      // "Bastiodon",
	"0412"            : {ico: "0412-plant",       flags: [FORM_0412_BASE]},        // "Burmy",
	"0412-plant"      : {ico: "0412-plant",       flags: [FORM_0412]},             // "Burmy Plant Cloak",
	"0412-sandy"      : {ico: "0412-sandy",       flags: [FORM_0412]},             // "Burmy Sandy Cloak",
	"0412-trash"      : {ico: "0412-trash",       flags: [FORM_0412]},             // "Burmy Trash Cloak",
	"0413"            : {ico: "0413-plant",       flags: [FORM_0412_BASE]},        // "Wormadam", // female only
	"0413-plant"      : {ico: "0413-plant",       flags: [FORM_0412]},             // "Wormadam Plant Cloak", // female only
	"0413-sandy"      : {ico: "0413-sandy",       flags: [FORM_0412]},             // "Wormadam Sandy Cloak", // female only
	"0413-trash"      : {ico: "0413-trash",       flags: [FORM_0412]},             // "Wormadam Trash Cloak", // female only
	"0414"            : {ico: "0414",             flags: []},                      // "Mothim", // male only
	"0415"            : {ico: "0415",             flags: [FORM_MIN_GENDER_BASE]},  // "Combee",
	"0415-m"          : {ico: "0415",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combee♂",
	"0415-f"          : {ico: "0415",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combee♀",
	"0416"            : {ico: "0416",             flags: []},                      // "Vespiquen", // female only
	"0417"            : {ico: "0417",             flags: [FORM_MIN_GENDER_BASE]},  // "Pachirisu",
	"0417-m"          : {ico: "0417",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pachirisu♂",
	"0417-f"          : {ico: "0417",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pachirisu♀",
	"0418"            : {ico: "0418",             flags: [FORM_MIN_GENDER_BASE]},  // "Buizel",
	"0418-m"          : {ico: "0418",             flags: [FORM_MIN_GENDER_DIFF]},  // "Buizel♂",
	"0418-f"          : {ico: "0418",             flags: [FORM_MIN_GENDER_DIFF]},  // "Buizel♀",
	"0419"            : {ico: "0419",             flags: [FORM_MIN_GENDER_BASE]},  // "Floatzel",
	"0419-m"          : {ico: "0419",             flags: [FORM_MIN_GENDER_DIFF]},  // "Floatzel♂",
	"0419-f"          : {ico: "0419",             flags: [FORM_MIN_GENDER_DIFF]},  // "Floatzel♀",
	"0420"            : {ico: "0420",             flags: []},                      // "Cherubi",
	"0421"            : {ico: "0421-overcast",    flags: [FORM_BATTLE_BASE]},      // "Cherrim",
	"0421-overcast"   : {ico: "0421-overcast",    flags: [FORM_BATTLE]},           // "Overcast Cherrim",
	"0421-sunshine"   : {ico: "0421-sunshine",    flags: [FORM_BATTLE]},           // "Sunshine Cherrim",
	"0422"            : {ico: "0422-west",        flags: [FORM_0422_BASE]},        // "Shellos",
	"0422-west"       : {ico: "0422-west",        flags: [FORM_0422]},             // "West Sea Shellos",
	"0422-east"       : {ico: "0422-east",        flags: [FORM_0422]},             // "East Sea Shellos",
	"0423"            : {ico: "0423-west",        flags: [FORM_0422_BASE]},        // "Gastrodon",
	"0423-west"       : {ico: "0423-west",        flags: [FORM_0422]},             // "West Sea Gastrodon",
	"0423-east"       : {ico: "0423-east",        flags: [FORM_0422]},             // "East Sea Gastrodon",
	"0424"            : {ico: "0424",             flags: [FORM_MIN_GENDER_BASE]},  // "Ambipom",
	"0424-m"          : {ico: "0424",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ambipom♂",
	"0424-f"          : {ico: "0424",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ambipom♀",
	"0425"            : {ico: "0425",             flags: []},                      // "Drifloon",
	"0426"            : {ico: "0426",             flags: []},                      // "Drifblim",
	"0427"            : {ico: "0427",             flags: []},                      // "Buneary",
	"0428"            : {ico: "0428",             flags: []},                      // "Lopunny",
	"0429"            : {ico: "0429",             flags: []},                      // "Mismagius",
	"0430"            : {ico: "0430",             flags: []},                      // "Honchkrow",
	"0431"            : {ico: "0431",             flags: []},                      // "Glameow",
	"0432"            : {ico: "0432",             flags: []},                      // "Purugly",
	"0433"            : {ico: "0433",             flags: []},                      // "Chingling",
	"0434"            : {ico: "0434",             flags: []},                      // "Stunky",
	"0435"            : {ico: "0435",             flags: []},                      // "Skuntank",
	"0436"            : {ico: "0436",             flags: []},                      // "Bronzor", // uknown gender
	"0437"            : {ico: "0437",             flags: []},                      // "Bronzong", // uknown gender
	"0438"            : {ico: "0438",             flags: []},                      // "Bonsly",
	"0439"            : {ico: "0439",             flags: []},                      // "Mime Jr.",
	"0440"            : {ico: "0440",             flags: []},                      // "Happiny", // female only
	"0441"            : {ico: "0441",             flags: []},                      // "Chatot",
	"0442"            : {ico: "0442",             flags: []},                      // "Spiritomb",
	"0443"            : {ico: "0443",             flags: [FORM_MIN_GENDER_BASE]},  // "Gible",
	"0443-m"          : {ico: "0443",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gible♂",
	"0443-f"          : {ico: "0443",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gible♀",
	"0444"            : {ico: "0444",             flags: [FORM_MIN_GENDER_BASE]},  // "Gabite",
	"0444-m"          : {ico: "0444",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gabite♂",
	"0444-f"          : {ico: "0444",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gabite♀",
	"0445"            : {ico: "0445",             flags: [FORM_MIN_GENDER_BASE]},  // "Garchomp",
	"0445-m"          : {ico: "0445",             flags: [FORM_MIN_GENDER_DIFF]},  // "Garchomp♂",
	"0445-f"          : {ico: "0445",             flags: [FORM_MIN_GENDER_DIFF]},  // "Garchomp♀",
	"0446"            : {ico: "0446",             flags: []},                      // "Munchlax",
	"0447"            : {ico: "0447",             flags: []},                      // "Riolu",
	"0448"            : {ico: "0448",             flags: []},                      // "Lucario",
	"0449"            : {ico: "0449",             flags: [FORM_MIN_GENDER_BASE]},  // "Hippopotas",
	"0449-m"          : {ico: "0449",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippopotas♂",
	"0449-f"          : {ico: "0449",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippopotas♀",
	"0450"            : {ico: "0450",             flags: [FORM_MIN_GENDER_BASE]},  // "Hippowdon",
	"0450-m"          : {ico: "0450",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippowdon♂",
	"0450-f"          : {ico: "0450",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippowdon♀",
	"0451"            : {ico: "0451",             flags: []},                      // "Skorupi",
	"0452"            : {ico: "0452",             flags: []},                      // "Drapion",
	"0453"            : {ico: "0453",             flags: [FORM_MIN_GENDER_BASE]},  // "Croagunk",
	"0453-m"          : {ico: "0453",             flags: [FORM_MIN_GENDER_DIFF]},  // "Croagunk♂",
	"0453-f"          : {ico: "0453",             flags: [FORM_MIN_GENDER_DIFF]},  // "Croagunk♀",
	"0454"            : {ico: "0454",             flags: [FORM_MIN_GENDER_BASE]},  // "Toxicroak",
	"0454-m"          : {ico: "0454",             flags: [FORM_MIN_GENDER_DIFF]},  // "Toxicroak♂",
	"0454-f"          : {ico: "0454",             flags: [FORM_MIN_GENDER_DIFF]},  // "Toxicroak♀",
	"0455"            : {ico: "0455",             flags: []},                      // "Carnivine",
	"0456"            : {ico: "0456",             flags: [FORM_MIN_GENDER_BASE]},  // "Finneon",
	"0456-m"          : {ico: "0456",             flags: [FORM_MIN_GENDER_DIFF]},  // "Finneon♂",
	"0456-f"          : {ico: "0456",             flags: [FORM_MIN_GENDER_DIFF]},  // "Finneon♀",
	"0457"            : {ico: "0457",             flags: [FORM_MIN_GENDER_BASE]},  // "Lumineon",
	"0457-m"          : {ico: "0457",             flags: [FORM_MIN_GENDER_DIFF]},  // "Lumineon♂",
	"0457-f"          : {ico: "0457",             flags: [FORM_MIN_GENDER_DIFF]},  // "Lumineon♀",
	"0458"            : {ico: "0458",             flags: []},                      // "Mantyke",
	"0459"            : {ico: "0459",             flags: [FORM_MIN_GENDER_BASE]},  // "Snover",
	"0459-m"          : {ico: "0459",             flags: [FORM_MIN_GENDER_DIFF]},  // "Snover♂",
	"0459-f"          : {ico: "0459",             flags: [FORM_MIN_GENDER_DIFF]},  // "Snover♀",
	"0460"            : {ico: "0460",             flags: [FORM_MIN_GENDER_BASE]},  // "Abomasnow",
	"0460-m"          : {ico: "0460",             flags: [FORM_MIN_GENDER_DIFF]},  // "Abomasnow♂",
	"0460-f"          : {ico: "0460",             flags: [FORM_MIN_GENDER_DIFF]},  // "Abomasnow♀",
	"0461"            : {ico: "0461",             flags: [FORM_MIN_GENDER_BASE]},  // "Weavile",
	"0461-m"          : {ico: "0461",             flags: [FORM_MIN_GENDER_DIFF]},  // "Weavile♂",
	"0461-f"          : {ico: "0461",             flags: [FORM_MIN_GENDER_DIFF]},  // "Weavile♀",
	"0462"            : {ico: "0462",             flags: []},                      // "Magnezone", // uknown gender
	"0463"            : {ico: "0463",             flags: []},                      // "Lickilicky",
	"0464"            : {ico: "0464",             flags: [FORM_MIN_GENDER_BASE]},  // "Rhyperior",
	"0464-m"          : {ico: "0464",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyperior♂",
	"0464-f"          : {ico: "0464",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyperior♀",
	"0465"            : {ico: "0465",             flags: [FORM_MIN_GENDER_BASE]},  // "Tangrowth",
	"0465-m"          : {ico: "0465",             flags: [FORM_MIN_GENDER_DIFF]},  // "Tangrowth♂",
	"0465-f"          : {ico: "0465",             flags: [FORM_MIN_GENDER_DIFF]},  // "Tangrowth♀",
	"0466"            : {ico: "0466",             flags: []},                      // "Electivire",
	"0467"            : {ico: "0467",             flags: []},                      // "Magmortar",
	"0468"            : {ico: "0468",             flags: []},                      // "Togekiss",
	"0469"            : {ico: "0469",             flags: []},                      // "Yanmega",
	"0470"            : {ico: "0470",             flags: []},                      // "Leafeon",
	"0471"            : {ico: "0471",             flags: []},                      // "Glaceon",
	"0472"            : {ico: "0472",             flags: []},                      // "Gliscor",
	"0473"            : {ico: "0473",             flags: [FORM_MIN_GENDER_BASE]},  // "Mamoswine",
	"0473-m"          : {ico: "0473",             flags: [FORM_MIN_GENDER_DIFF]},  // "Mamoswine♂",
	"0473-f"          : {ico: "0473",             flags: [FORM_MIN_GENDER_DIFF]},  // "Mamoswine♀",
	"0474"            : {ico: "0474",             flags: []},                      // "Porygon-Z", // uknown gender
	"0475"            : {ico: "0475",             flags: []},                      // "Gallade", // male only
	"0476"            : {ico: "0476",             flags: []},                      // "Probopass",
	"0477"            : {ico: "0477",             flags: []},                      // "Dusknoir",
	"0478"            : {ico: "0478",             flags: []},                      // "Froslass", // female only
	"0479"            : {ico: "0479",             flags: [FORM_0479_BASE,
                                                          FORM_0479]},             // "Rotom", // uknown gender
	"0479-heat"       : {ico: "0479-heat",        flags: [FORM_0479]},             // "Heat Rotom", // uknown gender
	"0479-wash"       : {ico: "0479-wash",        flags: [FORM_0479]},             // "Wash Rotom", // uknown gender
	"0479-frost"      : {ico: "0479-frost",       flags: [FORM_0479]},             // "Frost Rotom", // uknown gender
	"0479-fan"        : {ico: "0479-fan",         flags: [FORM_0479]},             // "Fan Rotom", // uknown gender
	"0479-mow"        : {ico: "0479-mow",         flags: [FORM_0479]},             // "Mow Rotom", // uknown gender
	"0480"            : {ico: "0480",             flags: []},                      // "Uxie", // uknown gender
	"0481"            : {ico: "0481",             flags: []},                      // "Mesprit", // uknown gender
	"0482"            : {ico: "0482",             flags: []},                      // "Azelf", // uknown gender
	"0483"            : {ico: "0483",             flags: []},                      // "Dialga", // uknown gender
	"0484"            : {ico: "0484",             flags: []},                      // "Palkia", // uknown gender
	"0485"            : {ico: "0485",             flags: []},                      // "Heatran",
	"0486"            : {ico: "0486",             flags: []},                      // "Regigigas", // uknown gender
	"0487"            : {ico: "0487-altered",     flags: [FORM_0487_BASE]},        // "Giratina", // uknown gender
	"0487-altered"    : {ico: "0487-altered",     flags: [FORM_0487]},             // "Giratina Altered Forme", // uknown gender
	"0487-origin"     : {ico: "0487-origin",      flags: [FORM_0487]},             // "Giratina Origin Forme", // uknown gender
	"0488"            : {ico: "0488",             flags: []},                      // "Cresselia", // female only
	"0489"            : {ico: "0489",             flags: []},                      // "Phione", // uknown gender
	"0490"            : {ico: "0490",             flags: []},                      // "Manaphy", // uknown gender
	"0491"            : {ico: "0491",             flags: []},                      // "Darkrai", // uknown gender
	"0492"            : {ico: "0492-land",        flags: [FORM_0492_BASE]},        // "Shaymin", // uknown gender
	"0492-land"       : {ico: "0492-land",        flags: [FORM_0492]},             // "Shaymin Land Forme", // uknown gender
	"0492-sky"        : {ico: "0492-sky",         flags: [FORM_0492]},             // "Shaymin Sky Forme", // uknown gender
	"0493"            : {ico: "0493",             flags: [FORM_0493_BASE |
	                                                      FORM_0493]},             // "Arceus", // uknown gender
	"0493-fighting"   : {ico: "0493",             flags: [FORM_0493]},             // "Fighting Arceus", // uknown gender
	"0493-flying"     : {ico: "0493",             flags: [FORM_0493]},             // "Flying Arceus", // uknown gender
	"0493-poison"     : {ico: "0493",             flags: [FORM_0493]},             // "Poison Arceus", // uknown gender
	"0493-ground"     : {ico: "0493",             flags: [FORM_0493]},             // "Ground Arceus", // uknown gender
	"0493-rock"       : {ico: "0493",             flags: [FORM_0493]},             // "Rock Arceus", // uknown gender
	"0493-bug"        : {ico: "0493",             flags: [FORM_0493]},             // "Bug Arceus", // uknown gender
	"0493-ghost"      : {ico: "0493",             flags: [FORM_0493]},             // "Ghost Arceus", // uknown gender
	"0493-steel"      : {ico: "0493",             flags: [FORM_0493]},             // "Steel Arceus", // uknown gender
	"0493-fire"       : {ico: "0493",             flags: [FORM_0493]},             // "Fire Arceus", // uknown gender
	"0493-water"      : {ico: "0493",             flags: [FORM_0493]},             // "Water Arceus", // uknown gender
	"0493-grass"      : {ico: "0493",             flags: [FORM_0493]},             // "Grass Arceus", // uknown gender
	"0493-electric"   : {ico: "0493",             flags: [FORM_0493]},             // "Electric Arceus", // uknown gender
	"0493-psychic"    : {ico: "0493",             flags: [FORM_0493]},             // "Psychic Arceus", // uknown gender
	"0493-ice"        : {ico: "0493",             flags: [FORM_0493]},             // "Ice Arceus", // uknown gender
	"0493-dragon"     : {ico: "0493",             flags: [FORM_0493]},             // "Dragon Arceus", // uknown gender
	"0493-dark"       : {ico: "0493",             flags: [FORM_0493]},             // "Dark Arceus", // uknown gender
    "0494"            : {ico: "0494",             flags: []},                      // "Victini", // uknown gender
    "0495"            : {ico: "0495",             flags: []},                      // "Snivy",
    "0496"            : {ico: "0496",             flags: []},                      // "Servine",
    "0497"            : {ico: "0497",             flags: []},                      // "Serperior",
    "0498"            : {ico: "0498",             flags: []},                      // "Tepig",
    "0499"            : {ico: "0499",             flags: []},                      // "Pignite",
    "0500"            : {ico: "0500",             flags: []},                      // "Emboar",
    "0501"            : {ico: "0501",             flags: []},                      // "Oshawott",
    "0502"            : {ico: "0502",             flags: []},                      // "Dewott",
    "0503"            : {ico: "0503",             flags: []},                      // "Samurott",
    "0504"            : {ico: "0504",             flags: []},                      // "Patrat",
    "0505"            : {ico: "0505",             flags: []},                      // "Watchog",
    "0506"            : {ico: "0506",             flags: []},                      // "Lillipup",
    "0507"            : {ico: "0507",             flags: []},                      // "Herdier",
    "0508"            : {ico: "0508",             flags: []},                      // "Stoutland",
    "0509"            : {ico: "0509",             flags: []},                      // "Purrloin",
    "0510"            : {ico: "0510",             flags: []},                      // "Liepard",
    "0511"            : {ico: "0511",             flags: []},                      // "Pansage",
    "0512"            : {ico: "0512",             flags: []},                      // "Simisage",
    "0513"            : {ico: "0513",             flags: []},                      // "Pansear",
    "0514"            : {ico: "0514",             flags: []},                      // "Simisear",
    "0515"            : {ico: "0515",             flags: []},                      // "Panpour",
    "0516"            : {ico: "0516",             flags: []},                      // "Simipour",
    "0517"            : {ico: "0517",             flags: []},                      // "Munna",
    "0518"            : {ico: "0518",             flags: []},                      // "Musharna",
    "0519"            : {ico: "0519",             flags: []},                      // "Pidove",
    "0520"            : {ico: "0520",             flags: []},                      // "Tranquill",
    "0521"            : {ico: "0521-m",           flags: [FORM_MAJ_GENDER_BASE]},  // "Unfezant",
    "0521-m"          : {ico: "0521-m",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Unfezant♂",
    "0521-f"          : {ico: "0521-f",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Unfezan♀",
    "0522"            : {ico: "0522",             flags: []},                      // "Blitzle",
    "0523"            : {ico: "0523",             flags: []},                      // "Zebstrika",
    "0524"            : {ico: "0524",             flags: []},                      // "Roggenrola",
    "0525"            : {ico: "0525",             flags: []},                      // "Boldore",
    "0526"            : {ico: "0526",             flags: []},                      // "Gigalith",
    "0527"            : {ico: "0527",             flags: []},                      // "Woobat",
    "0528"            : {ico: "0528",             flags: []},                      // "Swoobat",
    "0529"            : {ico: "0529",             flags: []},                      // "Drilbur",
    "0530"            : {ico: "0530",             flags: []},                      // "Excadrill",
    "0531"            : {ico: "0531",             flags: []},                      // "Audino",
    "0532"            : {ico: "0532",             flags: []},                      // "Timburr",
    "0533"            : {ico: "0533",             flags: []},                      // "Gurdurr",
    "0534"            : {ico: "0534",             flags: []},                      // "Conkeldurr",
    "0535"            : {ico: "0535",             flags: []},                      // "Tympole",
    "0536"            : {ico: "0536",             flags: []},                      // "Palpitoad",
    "0537"            : {ico: "0537",             flags: []},                      // "Seismitoad",
    "0538"            : {ico: "0538",             flags: []},                      // "Throh", // male only
    "0539"            : {ico: "0539",             flags: []},                      // "Sawk", // male only
    "0540"            : {ico: "0540",             flags: []},                      // "Sewaddle",
    "0541"            : {ico: "0541",             flags: []},                      // "Swadloon",
    "0542"            : {ico: "0542",             flags: []},                      // "Leavanny",
    "0543"            : {ico: "0543",             flags: []},                      // "Venipede",
    "0544"            : {ico: "0544",             flags: []},                      // "Whirlipede",
    "0545"            : {ico: "0545",             flags: []},                      // "Scolipede",
    "0546"            : {ico: "0546",             flags: []},                      // "Cottonee",
    "0547"            : {ico: "0547",             flags: []},                      // "Whimsicott",
    "0548"            : {ico: "0548",             flags: []},                      // "Petilil", // female only
    "0549"            : {ico: "0549",             flags: []},                      // "Lilligant", // female only
    "0550"            : {ico: "0550-red",         flags: [FORM_0550_BASE]},        // "Basculin",
    "0550-red"        : {ico: "0550-red",         flags: [FORM_0550]},             // "Red-striped Basculin",
    "0550-blue"       : {ico: "0550-blue",        flags: [FORM_0550]},             // "Blue-striped Basculin",
    "0551"            : {ico: "0551",             flags: []},                      // "Sandile",
    "0552"            : {ico: "0552",             flags: []},                      // "Krokorok",
    "0553"            : {ico: "0553",             flags: []},                      // "Krookodile",
    "0554"            : {ico: "0554",             flags: []},                      // "Darumaka",
    "0555"            : {ico: "0555-standard",    flags: [FORM_BATTLE_BASE]},      // "Darmanitan",
    "0555-standard"   : {ico: "0555-standard",    flags: [FORM_BATTLE]},           // "Darmanitan Standard Mode",
    "0555-zen"        : {ico: "0555-zen",         flags: [FORM_BATTLE]},           // "Darmanitan Zen Mode",
    "0556"            : {ico: "0556",             flags: []},                      // "Maractus",
    "0557"            : {ico: "0557",             flags: []},                      // "Dwebble",
    "0558"            : {ico: "0558",             flags: []},                      // "Crustle",
    "0559"            : {ico: "0559",             flags: []},                      // "Scraggy",
    "0560"            : {ico: "0560",             flags: []},                      // "Scrafty",
    "0561"            : {ico: "0561",             flags: []},                      // "Sigilyph",
    "0562"            : {ico: "0562",             flags: []},                      // "Yamask",
    "0563"            : {ico: "0563",             flags: []},                      // "Cofagrigus",
    "0564"            : {ico: "0564",             flags: []},                      // "Tirtouga",
    "0565"            : {ico: "0565",             flags: []},                      // "Carracosta",
    "0566"            : {ico: "0566",             flags: []},                      // "Archen",
    "0567"            : {ico: "0567",             flags: []},                      // "Archeops",
    "0568"            : {ico: "0568",             flags: []},                      // "Trubbish",
    "0569"            : {ico: "0569",             flags: []},                      // "Garbodor",
    "0570"            : {ico: "0570",             flags: []},                      // "Zorua",
    "0571"            : {ico: "0571",             flags: []},                      // "Zoroark",
    "0572"            : {ico: "0572",             flags: []},                      // "Minccino",
    "0573"            : {ico: "0573",             flags: []},                      // "Cinccino",
    "0574"            : {ico: "0574",             flags: []},                      // "Gothita",
    "0575"            : {ico: "0575",             flags: []},                      // "Gothorita",
    "0576"            : {ico: "0576",             flags: []},                      // "Gothitelle",
    "0577"            : {ico: "0577",             flags: []},                      // "Solosis",
    "0578"            : {ico: "0578",             flags: []},                      // "Duosion",
    "0579"            : {ico: "0579",             flags: []},                      // "Reuniclus",
    "0580"            : {ico: "0580",             flags: []},                      // "Ducklett",
    "0581"            : {ico: "0581",             flags: []},                      // "Swanna",
    "0582"            : {ico: "0582",             flags: []},                      // "Vanillite",
    "0583"            : {ico: "0583",             flags: []},                      // "Vanillish",
    "0584"            : {ico: "0584",             flags: []},                      // "Vanilluxe",
    "0585"            : {ico: "0585-spring",      flags: [FORM_0585_BASE]},        // "Deerling",
    "0585-spring"     : {ico: "0585-spring",      flags: [FORM_0585]},             // "Spring Deerling",
    "0585-summer"     : {ico: "0585-summer",      flags: [FORM_0585]},             // "Summer Deerling",
    "0585-autumn"     : {ico: "0585-autumn",      flags: [FORM_0585]},             // "Autumn Deerling",
    "0585-winter"     : {ico: "0585-winter",      flags: [FORM_0585]},             // "Winter Deerling",
    "0586"            : {ico: "0586-spring",      flags: [FORM_0585_BASE]},        // "Sawsbuck",
    "0586-spring"     : {ico: "0586-spring",      flags: [FORM_0585]},             // "Spring Sawsbuck",
    "0586-summer"     : {ico: "0586-summer",      flags: [FORM_0585]},             // "Summer Sawsbuck",
    "0586-autumn"     : {ico: "0586-autumn",      flags: [FORM_0585]},             // "Autumn Sawsbuck",
    "0586-winter"     : {ico: "0586-winter",      flags: [FORM_0585]},             // "Winter Sawsbuck",
    "0587"            : {ico: "0587",             flags: []},                      // "Emolga",
    "0588"            : {ico: "0588",             flags: []},                      // "Karrablast",
    "0589"            : {ico: "0589",             flags: []},                      // "Escavalier",
    "0590"            : {ico: "0590",             flags: []},                      // "Foongus",
    "0591"            : {ico: "0591",             flags: []},                      // "Amoonguss",
    "0592"            : {ico: "0592-m",           flags: [FORM_MAJ_GENDER_BASE]},  // "Frillish",
    "0592-m"          : {ico: "0592-m",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Frillish♂",
    "0592-f"          : {ico: "0592-f",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Frillish♀",
    "0593"            : {ico: "0593-m",           flags: [FORM_MAJ_GENDER_BASE]},  // "Jellicent",
    "0593-m"          : {ico: "0593-m",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Jellicent♂",
    "0593-f"          : {ico: "0593-f",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Jellicent♀",
    "0594"            : {ico: "0594",             flags: []},                      // "Alomomola",
    "0595"            : {ico: "0595",             flags: []},                      // "Joltik",
    "0596"            : {ico: "0596",             flags: []},                      // "Galvantula",
    "0597"            : {ico: "0597",             flags: []},                      // "Ferroseed",
    "0598"            : {ico: "0598",             flags: []},                      // "Ferrothorn",
    "0599"            : {ico: "0599",             flags: []},                      // "Klink", // uknown gender
    "0600"            : {ico: "0600",             flags: []},                      // "Klang", // uknown gender
    "0601"            : {ico: "0601",             flags: []},                      // "Klinklang", // uknown gender
    "0602"            : {ico: "0602",             flags: []},                      // "Tynamo",
    "0603"            : {ico: "0603",             flags: []},                      // "Eelektrik",
    "0604"            : {ico: "0604",             flags: []},                      // "Eelektross",
    "0605"            : {ico: "0605",             flags: []},                      // "Elgyem",
    "0606"            : {ico: "0606",             flags: []},                      // "Beheeyem",
    "0607"            : {ico: "0607",             flags: []},                      // "Litwick",
    "0608"            : {ico: "0608",             flags: []},                      // "Lampent",
    "0609"            : {ico: "0609",             flags: []},                      // "Chandelure",
    "0610"            : {ico: "0610",             flags: []},                      // "Axew",
    "0611"            : {ico: "0611",             flags: []},                      // "Fraxure",
    "0612"            : {ico: "0612",             flags: []},                      // "Haxorus",
    "0613"            : {ico: "0613",             flags: []},                      // "Cubchoo",
    "0614"            : {ico: "0614",             flags: []},                      // "Beartic",
    "0615"            : {ico: "0615",             flags: []},                      // "Cryogonal", // uknown gender
    "0616"            : {ico: "0616",             flags: []},                      // "Shelmet",
    "0617"            : {ico: "0617",             flags: []},                      // "Accelgor",
    "0618"            : {ico: "0618",             flags: []},                      // "Stunfisk",
    "0619"            : {ico: "0619",             flags: []},                      // "Mienfoo",
    "0620"            : {ico: "0620",             flags: []},                      // "Mienshao",
    "0621"            : {ico: "0621",             flags: []},                      // "Druddigon",
    "0622"            : {ico: "0622",             flags: []},                      // "Golett", // uknown gender
    "0623"            : {ico: "0623",             flags: []},                      // "Golurk", // uknown gender
    "0624"            : {ico: "0624",             flags: []},                      // "Pawniard",
    "0625"            : {ico: "0625",             flags: []},                      // "Bisharp",
    "0626"            : {ico: "0626",             flags: []},                      // "Bouffalant",
    "0627"            : {ico: "0627",             flags: []},                      // "Rufflet", // male only
    "0628"            : {ico: "0628",             flags: []},                      // "Braviary", // male only
    "0629"            : {ico: "0629",             flags: []},                      // "Vullaby", // female only
    "0630"            : {ico: "0630",             flags: []},                      // "Mandibuzz", // female only
    "0631"            : {ico: "0631",             flags: []},                      // "Heatmor",
    "0632"            : {ico: "0632",             flags: []},                      // "Durant",
    "0633"            : {ico: "0633",             flags: []},                      // "Deino",
    "0634"            : {ico: "0634",             flags: []},                      // "Zweilous",
    "0635"            : {ico: "0635",             flags: []},                      // "Hydreigon",
    "0636"            : {ico: "0636",             flags: []},                      // "Larvesta",
    "0637"            : {ico: "0637",             flags: []},                      // "Volcarona",
    "0638"            : {ico: "0638",             flags: []},                      // "Cobalion", // uknown gender
    "0639"            : {ico: "0639",             flags: []},                      // "Terrakion", // uknown gender
    "0640"            : {ico: "0640",             flags: []},                      // "Virizion", // uknown gender
    "0641"            : {ico: "0641-incarnate",   flags: [FORM_0641_BASE]},        // "Tornadus", // male only
    "0641-incarnate"  : {ico: "0641-incarnate",   flags: [FORM_0641]},             // "Incarnate Forme Tornadus", // male only
    "0641-therian"    : {ico: "0641-therian",     flags: [FORM_0641]},             // "Therian Forme Tornadus", // male only
    "0642"            : {ico: "0642-incarnate",   flags: [FORM_0642_BASE]},        // "Thundurus", // male only
    "0642-incarnate"  : {ico: "0642-incarnate",   flags: [FORM_0642]},             // "Incarnate Forme Thundurus", // male only
    "0642-therian"    : {ico: "0642-therian",     flags: [FORM_0642]},             // "Therian Forme Thundurus", // male only
    "0643"            : {ico: "0643",             flags: []},                      // "Reshiram", // uknown gender
    "0644"            : {ico: "0644",             flags: []},                      // "Zekrom", // uknown gender
    "0645"            : {ico: "0645-incarnate",   flags: [FORM_0645_BASE]},        // "Landorus", // male only
    "0645-incarnate"  : {ico: "0645-incarnate",   flags: [FORM_0645]},             // "Incarnate Forme Landorus", // male only
    "0645-therian"    : {ico: "0645-therian",     flags: [FORM_0645]},             // "Therian Forme Landorus", // male only
    "0646"            : {ico: "0646",             flags: [FORM_0646_BASE, 
	                                                      FORM_0646]},             // "Kyurem", // uknown gender
    "0646-white"      : {ico: "0646-white",       flags: [FORM_0646]},             // "White Kyurem", // uknown gender
    "0646-black"      : {ico: "0646-black",       flags: [FORM_0646]},             // "Black Kyurem", // uknown gender
    "0647"            : {ico: "0647-ordinary",    flags: [FORM_0647_BASE]},        // "Keldeo", // uknown gender
    "0647-ordinary"   : {ico: "0647-ordinary",    flags: [FORM_0647]},             // "Ordinary Form Keldeo", // uknown gender
    "0647-resolute"   : {ico: "0647-resolute",    flags: [FORM_0647]},             // "Resolute Form Keldeo", // uknown gender
    "0648"            : {ico: "0648-aria",        flags: [FORM_0648_BASE]},        // "Meloetta", // uknown gender
    "0648-aria"       : {ico: "0648-aria",        flags: [FORM_0648]},             // "Aria Forme Meloetta", // uknown gender
    "0648-pirouette"  : {ico: "0648-pirouette",   flags: [FORM_0648]},             // "Pirouette Forme Meloetta", // uknown gender
    "0649"            : {ico: "0649",             flags: [FORM_0649_BASE]},        // "Genesect", // uknown gender
    "0649-douse"      : {ico: "0649",             flags: [FORM_0649]},             // "Douse Drive Genesect", // uknown gender
    "0649-shock"      : {ico: "0649",             flags: [FORM_0649]},             // "Shock Drive Genesect", // uknown gender
    "0649-burn"       : {ico: "0649",             flags: [FORM_0649]},             // "Burn Drive Genesect", // uknown gender
    "0649-chill"      : {ico: "0649",             flags: [FORM_0649]},             // "Chill Drive Genesect", // uknown gender

	"0003-mega"       : {ico: "0003-mega",        flags: []}, // "Mega Venusaur",
    "0006-mega-x"     : {ico: "0006-mega-x",      flags: []}, // "Mega Charizard X",
    "0006-mega-y"     : {ico: "0006-mega-y",      flags: []}, // "Mega Charizard Y",
    "0009-mega"       : {ico: "0009-mega",        flags: []}, // "Mega Blastoise",
    "0015-mega"       : {ico: "0015-mega",        flags: []}, // "Mega Beedrill",
    "0018-mega"       : {ico: "0018-mega",        flags: []}, // "Mega Pidgeot",
    "0025-cosplay"    : {ico: "0025-cosplay",     flags: []}, // "Cosplay Pikachu", // female only
    "0025-rock-star"  : {ico: "0025-rock-star",   flags: []}, // "Pikachu Rock Star", // female only
    "0025-belle"      : {ico: "0025-belle",       flags: []}, // "Pikachu Belle", // female only
    "0025-popstar"    : {ico: "0025-popstar",     flags: []}, // "Pikachu Pop Star", // female only
    "0025-phd"        : {ico: "0025-phd",         flags: []}, // "Pikachu, Ph. D", // female only
    "0025-libre"      : {ico: "0025-libre",       flags: []}, // "Pikachu Libre", // female only
    "0065-mega"       : {ico: "0065-mega",        flags: []}, // "Mega Alakazam",
    "0080-mega"       : {ico: "0080-mega",        flags: []}, // "Mega Slowbro",
    "0094-mega"       : {ico: "0094-mega",        flags: []}, // "Mega Gengar",
    "0115-mega"       : {ico: "0115-mega",        flags: []}, // "Mega Kangaskhan", // female only
    "0127-mega"       : {ico: "0127-mega",        flags: []}, // "Mega Pinsir",
    "0130-mega"       : {ico: "0130-mega",        flags: []}, // "Mega Gyarados",
    "0142-mega"       : {ico: "0142-mega",        flags: []}, // "Mega Aerodactyl",
    "0150-mega-x"     : {ico: "0150-mega-x",      flags: []}, // "Mega Mewtwo X", // uknown gender
    "0150-mega-y"     : {ico: "0150-mega-y",      flags: []}, // "Mega Mewtwo Y", // uknown gender
    "0181-mega"       : {ico: "0181-mega",        flags: []}, // "Mega Ampharos",
    "0208-mega"       : {ico: "0208-mega",        flags: []}, // "Mega Steelix",
    "0212-mega"       : {ico: "0212-mega",        flags: []}, // "Mega Scizor",
    "0214-mega"       : {ico: "0214-mega",        flags: []}, // "Mega Heracross",
    "0229-mega"       : {ico: "0229-mega",        flags: []}, // "Mega Houndoom",
    "0248-mega"       : {ico: "0248-mega",        flags: []}, // "Mega Tyranitar",
    "0254-mega"       : {ico: "0254-mega",        flags: []}, // "Mega Sceptile",
    "0257-mega"       : {ico: "0257-mega",        flags: []}, // "Mega Blaziken",
    "0260-mega"       : {ico: "0260-mega",        flags: []}, // "Mega Swampert",
    "0282-mega"       : {ico: "0282-mega",        flags: []}, // "Mega Gardevoir",
    "0302-mega"       : {ico: "0302-mega",        flags: []}, // "Mega Sableye",
    "0303-mega"       : {ico: "0303-mega",        flags: []}, // "Mega Mawile",
    "0306-mega"       : {ico: "0306-mega",        flags: []}, // "Mega Aggron",
    "0308-mega"       : {ico: "0308-mega",        flags: []}, // "Mega Medicham",
    "0310-mega"       : {ico: "0310-mega",        flags: []}, // "Mega Manectric",
    "0319-mega"       : {ico: "0319-mega",        flags: []}, // "Mega Sharpedo",
    "0323-mega"       : {ico: "0323-mega",        flags: []}, // "Mega Camerupt",
    "0334-mega"       : {ico: "0334-mega",        flags: []}, // "Mega Altaria",
    "0354-mega"       : {ico: "0354-mega",        flags: []}, // "Mega Banette",
    "0359-mega"       : {ico: "0359-mega",        flags: []}, // "Mega Absol",
    "0362-mega"       : {ico: "0362-mega",        flags: []}, // "Mega Glalie",
    "0373-mega"       : {ico: "0373-mega",        flags: []}, // "Mega Salamence",
    "0376-mega"       : {ico: "0376-mega",        flags: []}, // "Mega Metagross", // uknown gender
    "0380-mega"       : {ico: "0380-mega",        flags: []}, // "Mega Latias", // female only
    "0381-mega"       : {ico: "0381-mega",        flags: []}, // "Mega Latios", // male only
    "0382-primal"     : {ico: "0382-primal",      flags: []}, // "Primal Kyogre", // uknown gender
    "0383-primal"     : {ico: "0383-primal",      flags: []}, // "Primal Groudon", // uknown gender
    "0384-mega"       : {ico: "0384-mega",        flags: []}, // "Mega Rayquaza", // uknown gender
    "0428-mega"       : {ico: "0428-mega",        flags: []}, // "Mega Lopunny",
    "0445-mega"       : {ico: "0445-mega",        flags: []}, // "Mega Garchomp",
    "0448-mega"       : {ico: "0448-mega",        flags: []}, // "Mega Lucario",
    "0460-mega"       : {ico: "0460-mega",        flags: []}, // "Mega Abomasnow",
    "0475-mega"       : {ico: "0475-mega",        flags: []}, // "Mega Gallade", // male only
    "0531-mega"       : {ico: "0531-mega",        flags: []}, // "Mega Audino",
	//----------------- {ico: //----------------, flags: []}, //
	"0650"            : {ico: "0650",             flags: []}, // "Chespin",
    "0651"            : {ico: "0651",             flags: []}, // "Quilladin",
    "0652"            : {ico: "0652",             flags: []}, // "Chesnaught",
    "0653"            : {ico: "0653",             flags: []}, // "Fennekin",
    "0654"            : {ico: "0654",             flags: []}, // "Braixen",
    "0655"            : {ico: "0655",             flags: []}, // "Delphox",
    "0656"            : {ico: "0656",             flags: []}, // "Froakie",
    "0657"            : {ico: "0657",             flags: []}, // "Frogadier",
    "0658"            : {ico: "0658",             flags: []}, // "Greninja",
    "0658-ash"        : {ico: "0658-ash",         flags: []}, // "Ash-Greninja", // male only
    "0659"            : {ico: "0659",             flags: []}, // "Bunnelby",
    "0660"            : {ico: "0660",             flags: []}, // "Diggersby",
    "0661"            : {ico: "0661",             flags: []}, // "Fletchling",
    "0662"            : {ico: "0662",             flags: []}, // "Fletchinder",
    "0663"            : {ico: "0663",             flags: []}, // "Talonflame",
    "0664"            : {ico: "0664",             flags: []}, // "Scatterbug",
    "0665"            : {ico: "0665",             flags: []}, // "Spewpa",
    "0666"            : {ico: "0666",             flags: []}, // "Vivillon",
    "0666-icy-snow"   : {ico: "0666-icy-snow",    flags: []}, // "Icy Snow Pattern Vivillon",
    "0666-polar"      : {ico: "0666-polar",       flags: []}, // "Polar Pattern Vivillon",
    "0666-tundra"     : {ico: "0666-tundra",      flags: []}, // "Tundra Pattern Vivillon",
    "0666-continental": {ico: "0666-continental", flags: []}, // "Continental Pattern Vivillon",
    "0666-garden"     : {ico: "0666-garden",      flags: []}, // "Garden Pattern Vivillon",
    "0666-elegant"    : {ico: "0666-elegant",     flags: []}, // "Elegant Pattern Vivillon",
    "0666-meadow"     : {ico: "0666-meadow",      flags: []}, // "Meadow Pattern Vivillon",
    "0666-modern"     : {ico: "0666-modern",      flags: []}, // "Modern Pattern Vivillon",
    "0666-marine"     : {ico: "0666-marine",      flags: []}, // "Marine Pattern Vivillon",
    "0666-archipelago": {ico: "0666-archipelago", flags: []}, // "Archipelago Pattern Vivillon",
    "0666-high-plains": {ico: "0666-high-plains", flags: []}, // "High Plains Pattern Vivillon",
    "0666-sandstorm"  : {ico: "0666-sandstorm",   flags: []}, // "Sandstorm Pattern Vivillon",
    "0666-river"      : {ico: "0666-river",       flags: []}, // "River Pattern Vivillon",
    "0666-monsoon"    : {ico: "0666-monsoon",     flags: []}, // "Monsoon Pattern Vivillon",
    "0666-savanna"    : {ico: "0666-savanna",     flags: []}, // "Savanna Pattern Vivillon",
    "0666-sun"        : {ico: "0666-sun",         flags: []}, // "Sun Pattern Vivillon",
    "0666-ocean"      : {ico: "0666-ocean",       flags: []}, // "Ocean Pattern Vivillon",
    "0666-jungle"     : {ico: "0666-jungle",      flags: []}, // "Jungle Pattern Vivillon",
    "0666-fancy"      : {ico: "0666-fancy",       flags: []}, // "Fancy Pattern Vivillon",
    "0666-poke-ball"  : {ico: "0666-poke-ball",   flags: []}, // "Poké Ball Pattern Vivillon",
    "0667"            : {ico: "0667",             flags: []}, // "Litleo",
    "0668"            : {ico: "0668",             flags: []}, // "Pyroar",
    "0668-m"          : {ico: "0668-m",           flags: []}, // "Pyroar♂",
    "0668-f"          : {ico: "0668-f",           flags: []}, // "Pyroar♀",
    "0669"            : {ico: "0669",             flags: []}, // "Flabébé", // female only
    "0669-red"        : {ico: "0669-red",         flags: []}, // "Red Flower Flabébé", // female only
    "0669-yellow"     : {ico: "0669-yellow",      flags: []}, // "Yellow Flower Flabébé", // female only
    "0669-orange"     : {ico: "0669-orange",      flags: []}, // "Orange Flower Flabébé", // female only
    "0669-blue"       : {ico: "0669-blue",        flags: []}, // "Blue Flower Flabébé", // female only
    "0669-white"      : {ico: "0669-white",       flags: []}, // "White Flower Flabébé", // female only
    "0670"            : {ico: "0670",             flags: []}, // "Floette", // female only
    "0670-red"        : {ico: "0670-red",         flags: []}, // "Red Flower Floette", // female only
    "0670-yellow"     : {ico: "0670-yellow",      flags: []}, // "Yellow Flower Floette", // female only
    "0670-orange"     : {ico: "0670-orange",      flags: []}, // "Orange Flower Floette", // female only
    "0670-blue"       : {ico: "0670-blue",        flags: []}, // "Blue Flower Floette", // female only
    "0670-white"      : {ico: "0670-white",       flags: []}, // "White Flower Floette", // female only
    "0670-eternal"    : {ico: "0670-eternal",     flags: []}, // "Eternal Flower Floette", // female only
    "0671"            : {ico: "0671",             flags: []}, // "Florges", // female only
    "0671-red"        : {ico: "0671-red",         flags: []}, // "Red Flower Florges", // female only
    "0671-yellow"     : {ico: "0671-yellow",      flags: []}, // "Yellow Flower Florges", // female only
    "0671-orange"     : {ico: "0671-orange",      flags: []}, // "Orange Flower Florges", // female only
    "0671-blue"       : {ico: "0671-blue",        flags: []}, // "Blue Flower Florges", // female only
    "0671-white"      : {ico: "0671-white",       flags: []}, // "White Flower Florges", // female only
    "0672"            : {ico: "0672",             flags: []}, // "Skiddo",
    "0673"            : {ico: "0673",             flags: []}, // "Gogoat",
    "0674"            : {ico: "0674",             flags: []}, // "Pancham",
    "0675"            : {ico: "0675",             flags: []}, // "Pangoro",
    "0676"            : {ico: "0676",             flags: []}, // "Furfrou",
    "0676-heart"      : {ico: "0676-heart",       flags: []}, // "Heart Trim Furfrou",
    "0676-star"       : {ico: "0676-star",        flags: []}, // "Star Trim Furfrou",
    "0676-diamond"    : {ico: "0676-diamond",     flags: []}, // "Diamond Trim Furfrou",
    "0676-debutante"  : {ico: "0676-debutante",   flags: []}, // "Debutante Trim Furfrou",
    "0676-matron"     : {ico: "0676-matron",      flags: []}, // "Matron Trim Furfrou",
    "0676-dandy"      : {ico: "0676-dandy",       flags: []}, // "Dandy Trim Furfrou",
    "0676-le-reine"   : {ico: "0676-le-reine",    flags: []}, // "Le Reine Trim Furfrou",
    "0676-kabuki"     : {ico: "0676-kabuki",      flags: []}, // "Kabuki Trim Furfrou",
    "0676-pharaoh"    : {ico: "0676-pharaoh",     flags: []}, // "Pharaoh Trim Furfrou",
    "0677"            : {ico: "0677",             flags: []}, // "Espurr",
    "0678"            : {ico: "0678",             flags: []}, // "Meowstic",
    "0678-m"          : {ico: "0678-m",           flags: []}, // "Meowstic♂",
    "0678-f"          : {ico: "0678-f",           flags: []}, // "Meowstic♀",
    "0679"            : {ico: "0679",             flags: []}, // "Honedge",
    "0680"            : {ico: "0680",             flags: []}, // "Doublade",
    "0681"            : {ico: "0681",             flags: []}, // "Aegislash",
    "0681-shield"     : {ico: "0681-shield",      flags: []}, // "Shield Aegislash",
    "0681-blade"      : {ico: "0681-blade",       flags: []}, // "Blade Aegislash",
    "0682"            : {ico: "0682",             flags: []}, // "Spritzee",
    "0683"            : {ico: "0683",             flags: []}, // "Aromatisse",
    "0684"            : {ico: "0684",             flags: []}, // "Swirlix",
    "0685"            : {ico: "0685",             flags: []}, // "Slurpuff",
    "0686"            : {ico: "0686",             flags: []}, // "Inkay",
    "0687"            : {ico: "0687",             flags: []}, // "Malamar",
    "0688"            : {ico: "0688",             flags: []}, // "Binacle",
    "0689"            : {ico: "0689",             flags: []}, // "Barbaracle",
    "0690"            : {ico: "0690",             flags: []}, // "Skrelp",
    "0691"            : {ico: "0691",             flags: []}, // "Dragalge",
    "0692"            : {ico: "0692",             flags: []}, // "Clauncher",
    "0693"            : {ico: "0693",             flags: []}, // "Clawitzer",
    "0694"            : {ico: "0694",             flags: []}, // "Helioptile",
    "0695"            : {ico: "0695",             flags: []}, // "Heliolisk",
    "0696"            : {ico: "0696",             flags: []}, // "Tyrunt",
    "0697"            : {ico: "0697",             flags: []}, // "Tyrantrum",
    "0698"            : {ico: "0698",             flags: []}, // "Amaura",
    "0699"            : {ico: "0699",             flags: []}, // "Aurorus",
    "0700"            : {ico: "0700",             flags: []}, // "Sylveon",
    "0701"            : {ico: "0701",             flags: []}, // "Hawlucha",
    "0702"            : {ico: "0702",             flags: []}, // "Dedenne",
    "0703"            : {ico: "0703",             flags: []}, // "Carbink", // uknown gender
    "0704"            : {ico: "0704",             flags: []}, // "Goomy",
    "0705"            : {ico: "0705",             flags: []}, // "Sliggoo",
    "0706"            : {ico: "0706",             flags: []}, // "Goodra",
    "0707"            : {ico: "0707",             flags: []}, // "Klefki",
    "0708"            : {ico: "0708",             flags: []}, // "Phantump",
    "0709"            : {ico: "0709",             flags: []}, // "Trevenant",
    "0710"            : {ico: "0710",             flags: []}, // "Pumpkaboo",
    "0710-average"    : {ico: "0710-average",     flags: []}, // "Average Size Pumpkaboo",
    "0710-small"      : {ico: "0710-small",       flags: []}, // "Small Size Pumpkaboo",
    "0710-large"      : {ico: "0710-large",       flags: []}, // "Large Size Pumpkaboo",
    "0710-super"      : {ico: "0710-super",       flags: []}, // "Super Size Pumpkaboo",
    "0711"            : {ico: "0711",             flags: []}, // "Gourgeist",
    "0711-average"    : {ico: "0711-average",     flags: []}, // "Average Size Gourgeist",
    "0711-small"      : {ico: "0711-small",       flags: []}, // "Small Size Gourgeist",
    "0711-large"      : {ico: "0711-large",       flags: []}, // "Large Size Gourgeist",
    "0711-super"      : {ico: "0711-super",       flags: []}, // "Super Size Gourgeist",
    "0712"            : {ico: "0712",             flags: []}, // "Bergmite",
    "0713"            : {ico: "0713",             flags: []}, // "Avalugg",
    "0714"            : {ico: "0714",             flags: []}, // "Noibat",
    "0715"            : {ico: "0715",             flags: []}, // "Noivern",
    "0716"            : {ico: "0716",             flags: []}, // "Xerneas", // uknown gender
    "0716-neutral"    : {ico: "0716-neutral",     flags: []}, // "Neutral Xerneas", // uknown gender
    "0716-active"     : {ico: "0716-active",      flags: []}, // "Active Xerneas", // uknown gender
    "0717"            : {ico: "0717",             flags: []}, // "Yveltal", // uknown gender
    "0718"            : {ico: "0718",             flags: []}, // "Zygarde", // uknown gender
    "0718-50"         : {ico: "0718-50",          flags: []}, // "50% Zygarde", // uknown gender
    "0718-10"         : {ico: "0718-10",          flags: []}, // "10% Zygarde", // uknown gender
    "0718-complete"   : {ico: "0718-complete",    flags: []}, // "Complete Zygarde", // uknown gender
    "0718-core"       : {ico: "0718-core",        flags: []}, // "Zygarde Core", // uknown gender// uncatchable
    "0718-cell"       : {ico: "0718-cell",        flags: []}, // "Zygarde Cell", // uknown gender// uncatchable
    "0719"            : {ico: "0719",             flags: []}, // "Diancie", // uknown gender
    "0719-mega"       : {ico: "0719-mega",        flags: []}, // "Mega Diancie", // uknown gender
    "0720"            : {ico: "0720",             flags: []}, // "Hoopa", // uknown gender
    "0720-confined"   : {ico: "0720-confined",    flags: []}, // "Hoopa Confined", // uknown gender
    "0720-unbound"    : {ico: "0720-unbound",     flags: []}, // "Hoopa Unbound", // uknown gender
    "0721"            : {ico: "0721",             flags: []}, // "Volcanion", // uknown gender
};

//============================================================================
// EVOLUTION POKEDEX
//============================================================================
const _Regdex_e_601 =
{
	"0001"            : {ico: "0001",             flags: []},                      // "Bulbasaur",
	"0002"            : {ico: "0002",             flags: []},                      // "Ivysaur",
	"0003"            : {ico: "0003",             flags: [FORM_MIN_GENDER_BASE]},  // "Venusaur",
	"0003-m"          : {ico: "0003",             flags: [FORM_MIN_GENDER_DIFF]},  // "Venusaur♂",
	"0003-f"          : {ico: "0003",             flags: [FORM_MIN_GENDER_DIFF]},  // "Venusaur♀",
	"0004"            : {ico: "0004",             flags: []},                      // "Charmander",
	"0005"            : {ico: "0005",             flags: []},                      // "Charmeleon",
	"0006"            : {ico: "0006",             flags: []},                      // "Charizard",
	"0007"            : {ico: "0007",             flags: []},                      // "Squirtle",
	"0008"            : {ico: "0008",             flags: []},                      // "Wartortle",
	"0009"            : {ico: "0009",             flags: []},                      // "Blastoise",
	"0010"            : {ico: "0010",             flags: []},                      // "Caterpie",
	"0011"            : {ico: "0011",             flags: []},                      // "Metapod",
	"0012"            : {ico: "0012",             flags: [FORM_MIN_GENDER_BASE]},  // "Butterfree",
	"0012-m"          : {ico: "0012",             flags: [FORM_MIN_GENDER_DIFF]},  // "Butterfree♂",
	"0012-f"          : {ico: "0012",             flags: [FORM_MIN_GENDER_DIFF]},  // "Butterfree♀",
	"0013"            : {ico: "0013",             flags: []},                      // "Weedle",
	"0014"            : {ico: "0013",             flags: []},                      // "Kakuna",
	"0015"            : {ico: "0015",             flags: []},                      // "Beedrill",
	"0016"            : {ico: "0016",             flags: []},                      // "Pidgey",
	"0017"            : {ico: "0017",             flags: []},                      // "Pidgeotto",
	"0018"            : {ico: "0018",             flags: []},                      // "Pidgeot",
	"0019"            : {ico: "0019",             flags: [FORM_MIN_GENDER_BASE]},  // "Rattata",
	"0019-m"          : {ico: "0019",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rattata♂",
	"0019-f"          : {ico: "0019",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rattata♀",
	"0020"            : {ico: "0020",             flags: [FORM_MIN_GENDER_BASE]},  // "Raticate",
	"0020-m"          : {ico: "0020",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raticate♂",
	"0020-f"          : {ico: "0020",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raticate♀",
	"0021"            : {ico: "0021",             flags: []},                      // "Spearow",
	"0022"            : {ico: "0022",             flags: []},                      // "Fearow",
	"0023"            : {ico: "0023",             flags: []},                      // "Ekans",
	"0024"            : {ico: "0024",             flags: []},                      // "Arbok",
	"0172"            : {ico: "0172",             flags: []},                      // "Pichu",
	"0025"            : {ico: "0025",             flags: [FORM_MIN_GENDER_BASE]},  // "Pikachu",
	"0025-m"          : {ico: "0025",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pikachu♂",
	"0025-f"          : {ico: "0025",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pikachu♀",
	"0026"            : {ico: "0026",             flags: [FORM_MIN_GENDER_BASE]},  // "Raichu",
	"0026-m"          : {ico: "0026",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raichu♂",
	"0026-f"          : {ico: "0026",             flags: [FORM_MIN_GENDER_DIFF]},  // "Raichu♀",
	"0172-spiky-eared": {ico: "0172",             flags: [FORM_0172_HGSS]},        // "Spiky-eared Pichu", // female only
	"0027"            : {ico: "0027",             flags: []},                      // "Sandshrew",
	"0028"            : {ico: "0028",             flags: []},                      // "Sandslash",
	"0029"            : {ico: "0029",             flags: [FORM_MAJ_GENDER_BASE]},  // "Nidoran",
	"0029-f"          : {ico: "0029",             flags: [FORM_MAJ_GENDER_DIFF]},  // "Nidoran♀",
	"0030"            : {ico: "0030",             flags: []},                      // "Nidorina",
	"0031"            : {ico: "0031",             flags: []},                      // "Nidoqueen",
	"0032"            : {ico: "0032",             flags: [FORM_MAJ_GENDER_BASE]},  // "Nidoran",
	"0032-m"          : {ico: "0032",             flags: [FORM_MAJ_GENDER_DIFF]},  // "Nidoran♂",
	"0033"            : {ico: "0033",             flags: []},                      // "Nidorino",
	"0034"            : {ico: "0034",             flags: []},                      // "Nidoking",
	"0173"            : {ico: "0173",             flags: []},                      // "Cleffa",
	"0035"            : {ico: "0035",             flags: []},                      // "Clefairy",
	"0036"            : {ico: "0036",             flags: []},                      // "Clefable",
	"0037"            : {ico: "0037",             flags: []},                      // "Vulpix",
	"0038"            : {ico: "0038",             flags: []},                      // "Ninetales",
	"0174"            : {ico: "0174",             flags: []},                      // "Igglybuff",
	"0039"            : {ico: "0039",             flags: []},                      // "Jigglypuff",
	"0040"            : {ico: "0040",             flags: []},                      // "Wigglytuff",
	"0041"            : {ico: "0041",             flags: [FORM_MIN_GENDER_BASE]},  // "Zubat",
	"0041-m"          : {ico: "0041",             flags: [FORM_MIN_GENDER_DIFF]},  // "Zubat♂",
	"0041-f"          : {ico: "0041",             flags: [FORM_MIN_GENDER_DIFF]},  // "Zubat♀",
	"0042"            : {ico: "0042",             flags: [FORM_MIN_GENDER_BASE]},  // "Golbat",
	"0042-m"          : {ico: "0042",             flags: [FORM_MIN_GENDER_DIFF]},  // "Golbat♂",
	"0042-f"          : {ico: "0042",             flags: [FORM_MIN_GENDER_DIFF]},  // "Golbat♀",
	"0169"            : {ico: "0169",             flags: []},                      // "Crobat",
	"0043"            : {ico: "0043",             flags: []},                      // "Oddish",
	"0044"            : {ico: "0044",             flags: [FORM_MIN_GENDER_BASE]},  // "Gloom",
	"0044-m"          : {ico: "0044",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gloom♂",
	"0044-f"          : {ico: "0044",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gloom♀",
	"0045"            : {ico: "0045",             flags: [FORM_MIN_GENDER_BASE]},  // "Vileplume",
	"0045-m"          : {ico: "0045",             flags: [FORM_MIN_GENDER_DIFF]},  // "Vileplume♂",
	"0045-f"          : {ico: "0045",             flags: [FORM_MIN_GENDER_DIFF]},  // "Vileplume♀",
	"0182"            : {ico: "0182",             flags: []},                      // "Bellossom",
	"0046"            : {ico: "0046",             flags: []},                      // "Paras",
	"0047"            : {ico: "0047",             flags: []},                      // "Parasect",
	"0048"            : {ico: "0048",             flags: []},                      // "Venonat",
	"0049"            : {ico: "0049",             flags: []},                      // "Venomoth",
	"0050"            : {ico: "0050",             flags: []},                      // "Diglett",
	"0051"            : {ico: "0051",             flags: []},                      // "Dugtrio",
	"0052"            : {ico: "0052",             flags: []},                      // "Meowth",
	"0053"            : {ico: "0053",             flags: []},                      // "Persian",
	"0054"            : {ico: "0054",             flags: []},                      // "Psyduck",
	"0055"            : {ico: "0055",             flags: []},                      // "Golduck",
	"0056"            : {ico: "0056",             flags: []},                      // "Mankey",
	"0057"            : {ico: "0057",             flags: []},                      // "Primeape",
	"0058"            : {ico: "0058",             flags: []},                      // "Growlithe",
	"0059"            : {ico: "0059",             flags: []},                      // "Arcanine",
	"0060"            : {ico: "0060",             flags: []},                      // "Poliwag",
	"0061"            : {ico: "0061",             flags: []},                      // "Poliwhirl",
	"0062"            : {ico: "0062",             flags: []},                      // "Poliwrath",
	"0186"            : {ico: "0186",             flags: [FORM_MIN_GENDER_BASE]},  // "Politoed",
	"0186-m"          : {ico: "0186",             flags: [FORM_MIN_GENDER_DIFF]},  // "Politoed♂",
	"0186-f"          : {ico: "0186",             flags: [FORM_MIN_GENDER_DIFF]},  // "Politoed♀",
	"0063"            : {ico: "0063",             flags: []},                      // "Abra",
	"0064"            : {ico: "0064",             flags: [FORM_MIN_GENDER_BASE]},  // "Kadabra",
	"0064-m"          : {ico: "0064",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kadabra♂",
	"0064-f"          : {ico: "0064",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kadabra♀",
	"0065"            : {ico: "0065",             flags: [FORM_MIN_GENDER_BASE]},  // "Alakazam",
	"0065-m"          : {ico: "0065",             flags: [FORM_MIN_GENDER_DIFF]},  // "Alakazam♂",
	"0065-f"          : {ico: "0065",             flags: [FORM_MIN_GENDER_DIFF]},  // "Alakazam♀",
	"0066"            : {ico: "0066",             flags: []},                      // "Machop",
	"0067"            : {ico: "0067",             flags: []},                      // "Machoke",
	"0068"            : {ico: "0068",             flags: []},                      // "Machamp",
	"0069"            : {ico: "0069",             flags: []},                      // "Bellsprout",
	"0070"            : {ico: "0070",             flags: []},                      // "Weepinbell",
	"0071"            : {ico: "0071",             flags: []},                      // "Victreebel",
	"0072"            : {ico: "0072",             flags: []},                      // "Tentacool",
	"0073"            : {ico: "0073",             flags: []},                      // "Tentacruel",
	"0074"            : {ico: "0074",             flags: []},                      // "Geodude",
	"0075"            : {ico: "0075",             flags: []},                      // "Graveler",
	"0076"            : {ico: "0076",             flags: []},                      // "Golem",
	"0077"            : {ico: "0077",             flags: []},                      // "Ponyta",
	"0078"            : {ico: "0078",             flags: []},                      // "Rapidash",
	"0079"            : {ico: "0079",             flags: []},                      // "Slowpoke",
	"0080"            : {ico: "0080",             flags: []},                      // "Slowbro",
	"0199"            : {ico: "0199",             flags: []},                      // "Slowking",
	"0081"            : {ico: "0081",             flags: []},                      // "Magnemite",
	"0082"            : {ico: "0082",             flags: []},                      // "Magneton",
	"0462"            : {ico: "0462",             flags: []},                      // "Magnezone", // uknown gender
	"0083"            : {ico: "0083",             flags: []},                      // "Farfetch'd",
	"0084"            : {ico: "0084",             flags: [FORM_MIN_GENDER_BASE]},  // "Doduo",
	"0084-m"          : {ico: "0084",             flags: [FORM_MIN_GENDER_DIFF]},  // "Doduo♂",
	"0084-f"          : {ico: "0084",             flags: [FORM_MIN_GENDER_DIFF]},  // "Doduo♀",
	"0085"            : {ico: "0085",             flags: [FORM_MIN_GENDER_BASE]},  // "Dodrio",
	"0085-m"          : {ico: "0085",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dodrio♂",
	"0085-f"          : {ico: "0085",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dodrio♀",
	"0086"            : {ico: "0086",             flags: []},                      // "Seel",
	"0087"            : {ico: "0087",             flags: []},                      // "Dewgong",
	"0088"            : {ico: "0088",             flags: []},                      // "Grimer",
	"0089"            : {ico: "0089",             flags: []},                      // "Muk",
	"0090"            : {ico: "0090",             flags: []},                      // "Shellder",
	"0091"            : {ico: "0091",             flags: []},                      // "Cloyster",
	"0092"            : {ico: "0092",             flags: []},                      // "Gastly",
	"0093"            : {ico: "0093",             flags: []},                      // "Haunter",
	"0094"            : {ico: "0094",             flags: []},                      // "Gengar",
	"0095"            : {ico: "0095",             flags: []},                      // "Onix",
	"0208"            : {ico: "0208",             flags: [FORM_MIN_GENDER_BASE]},  // "Steelix",
	"0208-m"          : {ico: "0208",             flags: [FORM_MIN_GENDER_DIFF]},  // "Steelix♂",
	"0208-f"          : {ico: "0208",             flags: [FORM_MIN_GENDER_DIFF]},  // "Steelix♀",
	"0096"            : {ico: "0096",             flags: []},                      // "Drowzee",
	"0097"            : {ico: "0097",             flags: [FORM_MIN_GENDER_BASE]},  // "Hypno",
	"0097-m"          : {ico: "0097",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hypno♂",
	"0097-f"          : {ico: "0097",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hypno♀",
	"0098"            : {ico: "0098",             flags: []},                      // "Krabby",
	"0099"            : {ico: "0099",             flags: []},                      // "Kingler",
	"0100"            : {ico: "0100",             flags: []},                      // "Voltorb", // uknown gender
	"0101"            : {ico: "0101",             flags: []},                      // "Electrode", // uknown gender
	"0102"            : {ico: "0102",             flags: []},                      // "Exeggcute",
	"0103"            : {ico: "0103",             flags: []},                      // "Exeggutor",
	"0104"            : {ico: "0104",             flags: []},                      // "Cubone",
	"0105"            : {ico: "0105",             flags: []},                      // "Marowak",
	"0236"            : {ico: "0236",             flags: []},                      // "Tyrogue", // male only
	"0106"            : {ico: "0106",             flags: []},                      // "Hitmonlee", // male only
	"0107"            : {ico: "0107",             flags: []},                      // "Hitmonchan", // male only
	"0237"            : {ico: "0237",             flags: []},                      // "Hitmontop", // male only
	"0108"            : {ico: "0108",             flags: []},                      // "Lickitung",
	"0463"            : {ico: "0463",             flags: []},                      // "Lickilicky",
	"0109"            : {ico: "0109",             flags: []},                      // "Koffing",
	"0110"            : {ico: "0110",             flags: []},                      // "Weezing",
	"0111"            : {ico: "0111",             flags: [FORM_MIN_GENDER_BASE]},  // "Rhyhorn",
	"0111-m"          : {ico: "0111",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyhorn♂",
	"0111-f"          : {ico: "0111",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyhorn♀",
	"0112"            : {ico: "0112",             flags: [FORM_MIN_GENDER_BASE]},  // "Rhydon",
	"0112-m"          : {ico: "0112",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhydon♂",
	"0112-f"          : {ico: "0112",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhydon♀",
	"0464"            : {ico: "0464",             flags: [FORM_MIN_GENDER_BASE]},  // "Rhyperior",
	"0464-m"          : {ico: "0464",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyperior♂",
	"0464-f"          : {ico: "0464",             flags: [FORM_MIN_GENDER_DIFF]},  // "Rhyperior♀",
	"0440"            : {ico: "0440",             flags: []},                      // "Happiny", // female only
	"0113"            : {ico: "0113",             flags: []},                      // "Chansey", // female only
	"0242"            : {ico: "0242",             flags: []},                      // "Blissey", // female only
	"0114"            : {ico: "0114",             flags: []},                      // "Tangela",
	"0465"            : {ico: "0465",             flags: [FORM_MIN_GENDER_BASE]},  // "Tangrowth",
	"0465-m"          : {ico: "0465",             flags: [FORM_MIN_GENDER_DIFF]},  // "Tangrowth♂",
	"0465-f"          : {ico: "0465",             flags: [FORM_MIN_GENDER_DIFF]},  // "Tangrowth♀",
	"0115"            : {ico: "0115",             flags: []},                      // "Kangaskhan", // female only
	"0116"            : {ico: "0116",             flags: []},                      // "Horsea",
	"0117"            : {ico: "0117",             flags: []},                      // "Seadra",
	"0230"            : {ico: "0230",             flags: []},                      // "Kingdra",
	"0118"            : {ico: "0118",             flags: [FORM_MIN_GENDER_BASE]},  // "Goldeen",
	"0118-m"          : {ico: "0118",             flags: [FORM_MIN_GENDER_DIFF]},  // "Goldeen♂",
	"0118-f"          : {ico: "0118",             flags: [FORM_MIN_GENDER_DIFF]},  // "Goldeen♀",
	"0119"            : {ico: "0119",             flags: [FORM_MIN_GENDER_BASE]},  // "Seaking",
	"0119-m"          : {ico: "0119",             flags: [FORM_MIN_GENDER_DIFF]},  // "Seaking♂",
	"0119-f"          : {ico: "0119",             flags: [FORM_MIN_GENDER_DIFF]},  // "Seaking♀",
 	"0120"            : {ico: "0120",             flags: []},                      // "Staryu", // uknown gender
	"0121"            : {ico: "0121",             flags: []},                      // "Starmie", // uknown gender
	"0439"            : {ico: "0439",             flags: []},                      // "Mime Jr.",
	"0122"            : {ico: "0122",             flags: []},                      // "Mr. Mime",
	"0123"            : {ico: "0123",             flags: [FORM_MIN_GENDER_BASE]},  // "Scyther",
	"0123-m"          : {ico: "0123",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scyther♂",
	"0123-f"          : {ico: "0123",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scyther♀",
	"0212"            : {ico: "0212",             flags: [FORM_MIN_GENDER_BASE]},  // "Scizor",
	"0212-m"          : {ico: "0212",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scizor♂",
	"0212-f"          : {ico: "0212",             flags: [FORM_MIN_GENDER_DIFF]},  // "Scizor♀",
	"0238"            : {ico: "0238",             flags: []},                      // "Smoochum", // female only
	"0124"            : {ico: "0124",             flags: []},                      // "Jynx",
	"0239"            : {ico: "0239",             flags: []},                      // "Elekid",
	"0125"            : {ico: "0125",             flags: []},                      // "Electabuzz",
	"0466"            : {ico: "0466",             flags: []},                      // "Electivire",
	"0240"            : {ico: "0240",             flags: []},                      // "Magby",
	"0126"            : {ico: "0126",             flags: []},                      // "Magmar",
	"0467"            : {ico: "0467",             flags: []},                      // "Magmortar",
	"0127"            : {ico: "0127",             flags: []},                      // "Pinsir",
	"0128"            : {ico: "0128",             flags: []},                      // "Tauros", // male only
	"0129"            : {ico: "0129",             flags: [FORM_MIN_GENDER_BASE]},  // "Magikarp",
	"0129-m"          : {ico: "0129",             flags: [FORM_MIN_GENDER_DIFF]},  // "Magikarp♂",
	"0129-f"          : {ico: "0129",             flags: [FORM_MIN_GENDER_DIFF]},  // "Magikarp♀",
	"0130"            : {ico: "0130",             flags: [FORM_MIN_GENDER_BASE]},  // "Gyarados",
	"0130-m"          : {ico: "0130",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gyarados♂",
	"0130-f"          : {ico: "0130",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gyarados♀",
	"0131"            : {ico: "0131",             flags: []},                      // "Lapras",
	"0132"            : {ico: "0132",             flags: []},                      // "Ditto", // uknown gender
	"0133"            : {ico: "0133",             flags: []},                      // "Eevee",
	"0134"            : {ico: "0134",             flags: []},                      // "Vaporeon",
	"0135"            : {ico: "0135",             flags: []},                      // "Jolteon",
	"0136"            : {ico: "0136",             flags: []},                      // "Flareon",
	"0196"            : {ico: "0196",             flags: []},                      // "Espeon",
	"0197"            : {ico: "0197",             flags: []},                      // "Umbreon",
	"0470"            : {ico: "0470",             flags: []},                      // "Leafeon",
	"0471"            : {ico: "0471",             flags: []},                      // "Glaceon",
	"0137"            : {ico: "0137",             flags: []},                      // "Porygon", // uknown gender
	"0233"            : {ico: "0233",             flags: []},                      // "Porygon2", // uknown gender
	"0474"            : {ico: "0474",             flags: []},                      // "Porygon-Z", // uknown gender
	"0138"            : {ico: "0138",             flags: []},                      // "Omanyte",
	"0139"            : {ico: "0139",             flags: []},                      // "Omastar",
	"0140"            : {ico: "0140",             flags: []},                      // "Kabuto",
	"0141"            : {ico: "0141",             flags: []},                      // "Kabutops",
	"0142"            : {ico: "0142",             flags: []},                      // "Aerodactyl",
	"0345"            : {ico: "0345",             flags: []},                      // "Lileep",
	"0346"            : {ico: "0346",             flags: []},                      // "Cradily",
	"0347"            : {ico: "0347",             flags: []},                      // "Anorith",
	"0348"            : {ico: "0348",             flags: []},                      // "Armaldo",
	"0408"            : {ico: "0408",             flags: []},                      // "Cranidos",
	"0409"            : {ico: "0409",             flags: []},                      // "Rampardos",
	"0410"            : {ico: "0410",             flags: []},                      // "Shieldon",
	"0411"            : {ico: "0411",             flags: []},                      // "Bastiodon",
    "0564"            : {ico: "0564",             flags: []},                      // "Tirtouga",
    "0565"            : {ico: "0565",             flags: []},                      // "Carracosta",
    "0566"            : {ico: "0566",             flags: []},                      // "Archen",
    "0567"            : {ico: "0567",             flags: []},                      // "Archeops",
	"0446"            : {ico: "0446",             flags: []},                      // "Munchlax",
	"0143"            : {ico: "0143",             flags: []},                      // "Snorlax",
	"0144"            : {ico: "0144",             flags: []},                      // "Articuno", // uknown gender
	"0145"            : {ico: "0145",             flags: []},                      // "Zapdos", // uknown gender
	"0146"            : {ico: "0146",             flags: []},                      // "Moltres", // uknown gender
	"0147"            : {ico: "0147",             flags: []},                      // "Dratini",
	"0148"            : {ico: "0148",             flags: []},                      // "Dragonair",
	"0149"            : {ico: "0149",             flags: []},                      // "Dragonite",
	"0150"            : {ico: "0150",             flags: []},                      // "Mewtwo", // uknown gender
	"0151"            : {ico: "0151",             flags: []},                      // "Mew", // uknown gender
	"0152"            : {ico: "0152",             flags: []},                      // "Chikorita",
	"0153"            : {ico: "0153",             flags: []},                      // "Bayleef",
	"0154"            : {ico: "0154",             flags: [FORM_MIN_GENDER_BASE]},  // "Meganium",
	"0154-m"          : {ico: "0154",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meganium♂",
	"0154-f"          : {ico: "0154",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meganium♀",
	"0155"            : {ico: "0155",             flags: []},                      // "Cyndaquil",
	"0156"            : {ico: "0156",             flags: []},                      // "Quilava",
	"0157"            : {ico: "0157",             flags: []},                      // "Typhlosion",
	"0158"            : {ico: "0158",             flags: []},                      // "Totodile",
	"0159"            : {ico: "0159",             flags: []},                      // "Croconaw",
	"0160"            : {ico: "0160",             flags: []},                      // "Feraligatr",
	"0161"            : {ico: "0161",             flags: []},                      // "Sentret",
	"0162"            : {ico: "0162",             flags: []},                      // "Furret",
	"0163"            : {ico: "0163",             flags: []},                      // "Hoothoot",
	"0164"            : {ico: "0164",             flags: []},                      // "Noctowl",
	"0165"            : {ico: "0165",             flags: [FORM_MIN_GENDER_BASE]},  // "Ledyba",
	"0165-m"          : {ico: "0165",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledyba♂",
	"0165-f"          : {ico: "0165",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledyba♀",
	"0166"            : {ico: "0166",             flags: [FORM_MIN_GENDER_BASE]},  // "Ledian",
	"0166-m"          : {ico: "0166",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledian♂",
	"0166-f"          : {ico: "0166",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ledian♀",
	"0167"            : {ico: "0167",             flags: []},                      // "Spinarak",
	"0168"            : {ico: "0168",             flags: []},                      // "Ariados",
	"0170"            : {ico: "0170",             flags: []},                      // "Chinchou",
	"0171"            : {ico: "0171",             flags: []},                      // "Lanturn",
	"0175"            : {ico: "0175",             flags: []},                      // "Togepi",
	"0176"            : {ico: "0176",             flags: []},                      // "Togetic",
	"0468"            : {ico: "0468",             flags: []},                      // "Togekiss",
	"0177"            : {ico: "0177",             flags: []},                      // "Natu",
	"0178"            : {ico: "0178",             flags: [FORM_MIN_GENDER_BASE]},  // "Xatu",
	"0178-m"          : {ico: "0178",             flags: [FORM_MIN_GENDER_DIFF]},  // "Xatu♂",
	"0178-f"          : {ico: "0178",             flags: [FORM_MIN_GENDER_DIFF]},  // "Xatu♀",
	"0179"            : {ico: "0179",             flags: []},                      // "Mareep",
	"0180"            : {ico: "0180",             flags: []},                      // "Flaaffy",
	"0181"            : {ico: "0181",             flags: []},                      // "Ampharos",
	"0298"            : {ico: "0298",             flags: []},                      // "Azurill",
	"0183"            : {ico: "0183",             flags: []},                      // "Marill",
	"0184"            : {ico: "0184",             flags: []},                      // "Azumarill",
	"0438"            : {ico: "0438",             flags: []},                      // "Bonsly",
	"0185"            : {ico: "0185",             flags: [FORM_MIN_GENDER_BASE]},  // "Sudowoodo",
	"0185-m"          : {ico: "0185",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sudowoodo♂",
	"0185-f"          : {ico: "0185",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sudowoodo♀",
	"0187"            : {ico: "0187",             flags: []},                      // "Hoppip",
	"0188"            : {ico: "0188",             flags: []},                      // "Skiploom",
	"0189"            : {ico: "0189",             flags: []},                      // "Jumpluff",
	"0190"            : {ico: "0190",             flags: [FORM_MIN_GENDER_BASE]},  // "Aipom",
	"0190-m"          : {ico: "0190",             flags: [FORM_MIN_GENDER_DIFF]},  // "Aipom♂",
	"0190-f"          : {ico: "0190",             flags: [FORM_MIN_GENDER_DIFF]},  // "Aipom♀",
	"0424"            : {ico: "0424",             flags: [FORM_MIN_GENDER_BASE]},  // "Ambipom",
	"0424-m"          : {ico: "0424",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ambipom♂",
	"0424-f"          : {ico: "0424",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ambipom♀",
	"0191"            : {ico: "0191",             flags: []},                      // "Sunkern",
	"0192"            : {ico: "0192",             flags: []},                      // "Sunflora",
	"0193"            : {ico: "0193",             flags: []},                      // "Yanma",
	"0469"            : {ico: "0469",             flags: []},                      // "Yanmega",
	"0194"            : {ico: "0194",             flags: [FORM_MIN_GENDER_BASE]},  // "Wooper",
	"0194-m"          : {ico: "0194",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wooper♂",
	"0194-f"          : {ico: "0194",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wooper♀",
	"0195"            : {ico: "0195",             flags: [FORM_MIN_GENDER_BASE]},  // "Quagsire",
	"0195-m"          : {ico: "0195",             flags: [FORM_MIN_GENDER_DIFF]},  // "Quagsire♂",
	"0195-f"          : {ico: "0195",             flags: [FORM_MIN_GENDER_DIFF]},  // "Quagsire♀",
	"0198"            : {ico: "0198",             flags: [FORM_MIN_GENDER_BASE]},  // "Murkrow",
	"0198-m"          : {ico: "0198",             flags: [FORM_MIN_GENDER_DIFF]},  // "Murkrow♂",
	"0198-f"          : {ico: "0198",             flags: [FORM_MIN_GENDER_DIFF]},  // "Murkrow♀",
	"0430"            : {ico: "0430",             flags: []},                      // "Honchkrow",
	"0200"            : {ico: "0200",             flags: []},                      // "Misdreavus",
	"0429"            : {ico: "0429",             flags: []},                      // "Mismagius",
	"0201"            : {ico: "0201-anger",       flags: [FORM_0201_BASE]},        // "Unown", // uknown gender
//	"0201-angry"      : {ico: "0201-anger",       flags: [FORM_0201]},             // "Unown Angry", // uknown gender
	"0201-anger"      : {ico: "0201-anger",       flags: [FORM_0201]},             // "Unown Anger", // uknown gender
	"0201-bear"       : {ico: "0201-bear",        flags: [FORM_0201]},             // "Unown Bear", // uknown gender
	"0201-chase"      : {ico: "0201-chase",       flags: [FORM_0201]},             // "Unown Chase", // uknown gender
	"0201-direct"     : {ico: "0201-direct",      flags: [FORM_0201]},             // "Unown Direct", // uknown gender
	"0201-engage"     : {ico: "0201-engage",      flags: [FORM_0201]},             // "Unown Engage", // uknown gender
	"0201-find"       : {ico: "0201-find",        flags: [FORM_0201]},             // "Unown Find", // uknown gender
	"0201-give"       : {ico: "0201-give",        flags: [FORM_0201]},             // "Unown Give", // uknown gender
	"0201-help"       : {ico: "0201-help",        flags: [FORM_0201]},             // "Unown Help", // uknown gender
	"0201-increase"   : {ico: "0201-increase",    flags: [FORM_0201]},             // "Unown Increase", // uknown gender
	"0201-join"       : {ico: "0201-join",        flags: [FORM_0201]},             // "Unown Join", // uknown gender
	"0201-keep"       : {ico: "0201-keep",        flags: [FORM_0201]},             // "Unown Keep", // uknown gender
	"0201-laugh"      : {ico: "0201-laugh",       flags: [FORM_0201]},             // "Unown Laugh", // uknown gender
	"0201-make"       : {ico: "0201-make",        flags: [FORM_0201]},             // "Unown Make", // uknown gender
	"0201-nuzzle"     : {ico: "0201-nuzzle",      flags: [FORM_0201]},             // "Unown Nuzzle", // uknown gender
	"0201-observe"    : {ico: "0201-observe",     flags: [FORM_0201]},             // "Unown Observe", // uknown gender
	"0201-perform"    : {ico: "0201-perform",     flags: [FORM_0201]},             // "Unown Perform", // uknown gender
	"0201-quicken"    : {ico: "0201-quicken",     flags: [FORM_0201]},             // "Unown Quicken", // uknown gender
	"0201-reassure"   : {ico: "0201-reassure",    flags: [FORM_0201]},             // "Unown Reassure", // uknown gender
	"0201-search"     : {ico: "0201-search",      flags: [FORM_0201]},             // "Unown Search", // uknown gender
	"0201-tell"       : {ico: "0201-tell",        flags: [FORM_0201]},             // "Unown Tell", // uknown gender
	"0201-undo"       : {ico: "0201-undo",        flags: [FORM_0201]},             // "Unown Undo", // uknown gender
	"0201-vanish"     : {ico: "0201-vanish",      flags: [FORM_0201]},             // "Unown Vanish", // uknown gender
	"0201-want"       : {ico: "0201-want",        flags: [FORM_0201]},             // "Unown Want", // uknown gender
	"0201-xxxxx"      : {ico: "0201-xxxxx",       flags: [FORM_0201]},             // "Unown XXXXX", // uknown gender
	"0201-yield"      : {ico: "0201-yield",       flags: [FORM_0201]},             // "Unown Yield", // uknown gender
	"0201-zoom"       : {ico: "0201-zoom",        flags: [FORM_0201]},             // "Unown Zoom", // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: [FORM_0201]},             // "Unown !!!!!", // uknown gender
	"0201-question"   : {ico: "0201-question",    flags: [FORM_0201]},             // "Unown ?????", // uknown gender
	"0360"            : {ico: "0360",             flags: []},                      // "Wynaut",
	"0202"            : {ico: "0202",             flags: [FORM_MIN_GENDER_BASE]},  // "Wobbuffet",
	"0202-m"          : {ico: "0202",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wobbuffet♂",
	"0202-f"          : {ico: "0202",             flags: [FORM_MIN_GENDER_DIFF]},  // "Wobbuffet♀",
	"0203"            : {ico: "0203",             flags: [FORM_MIN_GENDER_BASE]},  // "Girafarig",
	"0203-m"          : {ico: "0203",             flags: [FORM_MIN_GENDER_DIFF]},  // "Girafarig♂",
	"0203-f"          : {ico: "0203",             flags: [FORM_MIN_GENDER_DIFF]},  // "Girafarig♀",
	"0204"            : {ico: "0204",             flags: []},                      // "Pineco",
	"0205"            : {ico: "0205",             flags: []},                      // "Forretress",
	"0206"            : {ico: "0206",             flags: []},                      // "Dunsparce",
	"0207"            : {ico: "0207",             flags: [FORM_MIN_GENDER_BASE]},  // "Gligar",
	"0207-m"          : {ico: "0207",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gligar♂",
	"0207-f"          : {ico: "0207",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gligar♀",
	"0472"            : {ico: "0472",             flags: []},                      // "Gliscor",
	"0209"            : {ico: "0209",             flags: []},                      // "Snubbull",
	"0210"            : {ico: "0210",             flags: []},                      // "Granbull",
	"0211"            : {ico: "0211",             flags: []},                      // "Qwilfish",
	"0213"            : {ico: "0213",             flags: []},                      // "Shuckle",
	"0214"            : {ico: "0214",             flags: [FORM_MIN_GENDER_BASE]},  // "Heracross",
	"0214-m"          : {ico: "0214",             flags: [FORM_MIN_GENDER_DIFF]},  // "Heracross♂",
	"0214-f"          : {ico: "0214",             flags: [FORM_MIN_GENDER_DIFF]},  // "Heracross♀",
	"0215"            : {ico: "0215",             flags: [FORM_MIN_GENDER_BASE]},  // "Sneasel",
	"0215-m"          : {ico: "0215",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sneasel♂",
	"0215-f"          : {ico: "0215",             flags: [FORM_MIN_GENDER_DIFF]},  // "Sneasel♀",
	"0461"            : {ico: "0461",             flags: [FORM_MIN_GENDER_BASE]},  // "Weavile",
	"0461-m"          : {ico: "0461",             flags: [FORM_MIN_GENDER_DIFF]},  // "Weavile♂",
	"0461-f"          : {ico: "0461",             flags: [FORM_MIN_GENDER_DIFF]},  // "Weavile♀",
	"0216"            : {ico: "0216",             flags: []},                      // "Teddiursa",
	"0217"            : {ico: "0217",             flags: [FORM_MIN_GENDER_BASE]},  // "Ursaring",
	"0217-m"          : {ico: "0217",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ursaring♂",
	"0217-f"          : {ico: "0217",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ursaring♀",
	"0218"            : {ico: "0218",             flags: []},                      // "Slugma",
	"0219"            : {ico: "0219",             flags: []},                      // "Magcargo",
	"0220"            : {ico: "0220",             flags: []},                      // "Swinub",
	"0221"            : {ico: "0221",             flags: [FORM_MIN_GENDER_BASE]},  // "Piloswine",
	"0221-m"          : {ico: "0221",             flags: [FORM_MIN_GENDER_DIFF]},  // "Piloswine♂",
	"0221-f"          : {ico: "0221",             flags: [FORM_MIN_GENDER_DIFF]},  // "Piloswine♀",
	"0473"            : {ico: "0473",             flags: [FORM_MIN_GENDER_BASE]},  // "Mamoswine",
	"0473-m"          : {ico: "0473",             flags: [FORM_MIN_GENDER_DIFF]},  // "Mamoswine♂",
	"0473-f"          : {ico: "0473",             flags: [FORM_MIN_GENDER_DIFF]},  // "Mamoswine♀",
	"0222"            : {ico: "0222",             flags: []},                      // "Corsola",
	"0223"            : {ico: "0223",             flags: []},                      // "Remoraid",
	"0224"            : {ico: "0224",             flags: [FORM_MIN_GENDER_BASE]},  // "Octillery",
	"0224-m"          : {ico: "0224",             flags: [FORM_MIN_GENDER_DIFF]},  // "Octillery♂",
	"0224-f"          : {ico: "0224",             flags: [FORM_MIN_GENDER_DIFF]},  // "Octillery♀",
	"0225"            : {ico: "0225",             flags: []},                      // "Delibird",
	"0458"            : {ico: "0458",             flags: []},                      // "Mantyke",
	"0226"            : {ico: "0226",             flags: []},                      // "Mantine",
	"0227"            : {ico: "0227",             flags: []},                      // "Skarmory",
	"0228"            : {ico: "0228",             flags: []},                      // "Houndour",
	"0229"            : {ico: "0229",             flags: [FORM_MIN_GENDER_BASE]},  // "Houndoom",
	"0229-m"          : {ico: "0229",             flags: [FORM_MIN_GENDER_DIFF]},  // "Houndoom♂",
	"0229-f"          : {ico: "0229",             flags: [FORM_MIN_GENDER_DIFF]},  // "Houndoom♀",
	"0231"            : {ico: "0231",             flags: []},                      // "Phanpy",
	"0232"            : {ico: "0232",             flags: [FORM_MIN_GENDER_BASE]},  // "Donphan",
	"0232-m"          : {ico: "0232",             flags: [FORM_MIN_GENDER_DIFF]},  // "Donphan♂",
	"0232-f"          : {ico: "0232",             flags: [FORM_MIN_GENDER_DIFF]},  // "Donphan♀",
	"0234"            : {ico: "0234",             flags: []},                      // "Stantler",
	"0235"            : {ico: "0235",             flags: []},                      // "Smeargle",
	"0241"            : {ico: "0241",             flags: []},                      // "Miltank", // female only
	"0243"            : {ico: "0243",             flags: []},                      // "Raikou", // uknown gender
	"0244"            : {ico: "0244",             flags: []},                      // "Entei", // uknown gender
	"0245"            : {ico: "0245",             flags: []},                      // "Suicune", // uknown gender
	"0246"            : {ico: "0246",             flags: []},                      // "Larvitar",
	"0247"            : {ico: "0247",             flags: []},                      // "Pupitar",
	"0248"            : {ico: "0248",             flags: []},                      // "Tyranitar",
	"0249"            : {ico: "0249",             flags: []},                      // "Lugia", // uknown gender
	"0250"            : {ico: "0250",             flags: []},                      // "Ho-Oh", // uknown gender
	"0251"            : {ico: "0251",             flags: []},                      // "Celebi", // uknown gender
	"0252"            : {ico: "0252",             flags: []},                      // "Treecko",
	"0253"            : {ico: "0253",             flags: []},                      // "Grovyle",
	"0254"            : {ico: "0254",             flags: []},                      // "Sceptile",
	"0255"            : {ico: "0255",             flags: [FORM_MIN_GENDER_BASE]},  // "Torchic",
	"0255-m"          : {ico: "0255",             flags: [FORM_MIN_GENDER_DIFF]},  // "Torchic♂",
	"0255-f"          : {ico: "0255",             flags: [FORM_MIN_GENDER_DIFF]},  // "Torchic♀",
	"0256"            : {ico: "0256",             flags: [FORM_MIN_GENDER_BASE]},  // "Combusken",
	"0256-m"          : {ico: "0256",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combusken♂",
	"0256-f"          : {ico: "0256",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combusken♀",
	"0257"            : {ico: "0257",             flags: [FORM_MIN_GENDER_BASE]},  // "Blaziken",
	"0257-m"          : {ico: "0257",             flags: [FORM_MIN_GENDER_DIFF]},  // "Blaziken♂",
	"0257-f"          : {ico: "0257",             flags: [FORM_MIN_GENDER_DIFF]},  // "Blaziken♀",
	"0258"            : {ico: "0258",             flags: []},                      // "Mudkip",
	"0259"            : {ico: "0259",             flags: []},                      // "Marshtomp",
	"0260"            : {ico: "0260",             flags: []},                      // "Swampert",
	"0261"            : {ico: "0261",             flags: []},                      // "Poochyena",
	"0262"            : {ico: "0262",             flags: []},                      // "Mightyena",
	"0263"            : {ico: "0263",             flags: []},                      // "Zigzagoon",
	"0264"            : {ico: "0264",             flags: []},                      // "Linoone",
	"0265"            : {ico: "0265",             flags: []},                      // "Wurmple",
	"0266"            : {ico: "0266",             flags: []},                      // "Silcoon",
	"0267"            : {ico: "0267",             flags: [FORM_MIN_GENDER_BASE]},  // "Beautifly",
	"0267-m"          : {ico: "0267",             flags: [FORM_MIN_GENDER_DIFF]},  // "Beautifly♂",
	"0267-f"          : {ico: "0267",             flags: [FORM_MIN_GENDER_DIFF]},  // "Beautifly♀",
	"0268"            : {ico: "0268",             flags: []},                      // "Cascoon",
	"0269"            : {ico: "0269",             flags: [FORM_MIN_GENDER_BASE]},  // "Dustox",
	"0269-m"          : {ico: "0269",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dustox♂",
	"0269-f"          : {ico: "0269",             flags: [FORM_MIN_GENDER_DIFF]},  // "Dustox♀",
	"0270"            : {ico: "0270",             flags: []},                      // "Lotad",
	"0271"            : {ico: "0271",             flags: []},                      // "Lombre",
	"0272"            : {ico: "0272",             flags: [FORM_MIN_GENDER_BASE]},  // "Ludicolo",
	"0272-m"          : {ico: "0272",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ludicolo♂",
	"0272-f"          : {ico: "0272",             flags: [FORM_MIN_GENDER_DIFF]},  // "Ludicolo♀",
	"0273"            : {ico: "0273",             flags: []},                      // "Seedot",
	"0274"            : {ico: "0274",             flags: [FORM_MIN_GENDER_BASE]},  // "Nuzleaf",
	"0274-m"          : {ico: "0274",             flags: [FORM_MIN_GENDER_DIFF]},  // "Nuzleaf♂",
	"0274-f"          : {ico: "0274",             flags: [FORM_MIN_GENDER_DIFF]},  // "Nuzleaf♀",
	"0275"            : {ico: "0275",             flags: [FORM_MIN_GENDER_BASE]},  // "Shiftry",
	"0275-m"          : {ico: "0275",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shiftry♂",
	"0275-f"          : {ico: "0275",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shiftry♀",
	"0276"            : {ico: "0276",             flags: []},                      // "Taillow",
	"0277"            : {ico: "0277",             flags: []},                      // "Swellow",
	"0278"            : {ico: "0278",             flags: []},                      // "Wingull",
	"0279"            : {ico: "0279",             flags: []},                      // "Pelipper",
	"0280"            : {ico: "0280",             flags: []},                      // "Ralts",
	"0281"            : {ico: "0281",             flags: []},                      // "Kirlia",
	"0282"            : {ico: "0282",             flags: []},                      // "Gardevoir",
	"0475"            : {ico: "0475",             flags: []},                      // "Gallade", // male only
	"0283"            : {ico: "0283",             flags: []},                      // "Surskit",
	"0284"            : {ico: "0284",             flags: []},                      // "Masquerain",
	"0285"            : {ico: "0285",             flags: []},                      // "Shroomish",
	"0286"            : {ico: "0286",             flags: []},                      // "Breloom",
	"0287"            : {ico: "0287",             flags: []},                      // "Slakoth",
	"0288"            : {ico: "0288",             flags: []},                      // "Vigoroth",
	"0289"            : {ico: "0289",             flags: []},                      // "Slaking",
	"0290"            : {ico: "0290",             flags: []},                      // "Nincada",
	"0291"            : {ico: "0291",             flags: []},                      // "Ninjask",
	"0292"            : {ico: "0292",             flags: []},                      // "Shedinja", // uknown gender
	"0293"            : {ico: "0293",             flags: []},                      // "Whismur",
	"0294"            : {ico: "0294",             flags: []},                      // "Loudred",
	"0295"            : {ico: "0295",             flags: []},                      // "Exploud",
	"0296"            : {ico: "0296",             flags: []},                      // "Makuhita",
	"0297"            : {ico: "0297",             flags: []},                      // "Hariyama",
	"0299"            : {ico: "0299",             flags: []},                      // "Nosepass",
	"0476"            : {ico: "0476",             flags: []},                      // "Probopass",
	"0300"            : {ico: "0300",             flags: []},                      // "Skitty",
	"0301"            : {ico: "0301",             flags: []},                      // "Delcatty",
	"0302"            : {ico: "0302",             flags: []},                      // "Sableye",
	"0303"            : {ico: "0303",             flags: []},                      // "Mawile",
	"0304"            : {ico: "0304",             flags: []},                      // "Aron",
	"0305"            : {ico: "0305",             flags: []},                      // "Lairon",
	"0306"            : {ico: "0306",             flags: []},                      // "Aggron",
	"0307"            : {ico: "0307",             flags: [FORM_MIN_GENDER_BASE]},  // "Meditite",
	"0307-m"          : {ico: "0307",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meditite♂",
	"0307-f"          : {ico: "0307",             flags: [FORM_MIN_GENDER_DIFF]},  // "Meditite♀",
	"0308"            : {ico: "0308",             flags: [FORM_MIN_GENDER_BASE]},  // "Medicham",
	"0308-m"          : {ico: "0308",             flags: [FORM_MIN_GENDER_DIFF]},  // "Medicham♂",
	"0308-f"          : {ico: "0308",             flags: [FORM_MIN_GENDER_DIFF]},  // "Medicham♀",
	"0309"            : {ico: "0309",             flags: []},                      // "Electrike",
	"0310"            : {ico: "0310",             flags: []},                      // "Manectric",
	"0311"            : {ico: "0311",             flags: []},                      // "Plusle",
	"0312"            : {ico: "0312",             flags: []},                      // "Minun",
	"0313"            : {ico: "0313",             flags: []},                      // "Volbeat", // male only
	"0314"            : {ico: "0314",             flags: []},                      // "Illumise", // female only
	"0406"            : {ico: "0406",             flags: []},                      // "Budew",
	"0315"            : {ico: "0315",             flags: [FORM_MIN_GENDER_BASE]},  // "Roselia",
	"0315-m"          : {ico: "0315",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roselia♂",
	"0315-f"          : {ico: "0315",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roselia♀",
	"0407"            : {ico: "0407",             flags: [FORM_MIN_GENDER_BASE]},  // "Roserade",
	"0407-m"          : {ico: "0407",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roserade♂",
	"0407-f"          : {ico: "0407",             flags: [FORM_MIN_GENDER_DIFF]},  // "Roserade♀",
	"0316"            : {ico: "0316",             flags: [FORM_MIN_GENDER_BASE]},  // "Gulpin",
	"0316-m"          : {ico: "0316",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gulpin♂",
	"0316-f"          : {ico: "0316",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gulpin♀",
	"0317"            : {ico: "0317",             flags: [FORM_MIN_GENDER_BASE]},  // "Swalot",
	"0317-m"          : {ico: "0317",             flags: [FORM_MIN_GENDER_DIFF]},  // "Swalot♂",
	"0317-f"          : {ico: "0317",             flags: [FORM_MIN_GENDER_DIFF]},  // "Swalot♀",
	"0318"            : {ico: "0318",             flags: []},                      // "Carvanha",
	"0319"            : {ico: "0319",             flags: []},                      // "Sharpedo",
	"0320"            : {ico: "0320",             flags: []},                      // "Wailmer",
	"0321"            : {ico: "0321",             flags: []},                      // "Wailord",
	"0322"            : {ico: "0322",             flags: [FORM_MIN_GENDER_BASE]},  // "Numel",
	"0322-m"          : {ico: "0322",             flags: [FORM_MIN_GENDER_DIFF]},  // "Numel♂",
	"0322-f"          : {ico: "0322",             flags: [FORM_MIN_GENDER_DIFF]},  // "Numel♀",
	"0323"            : {ico: "0323",             flags: [FORM_MIN_GENDER_BASE]},  // "Camerupt",
	"0323-m"          : {ico: "0323",             flags: [FORM_MIN_GENDER_DIFF]},  // "Camerupt♂",
	"0323-f"          : {ico: "0323",             flags: [FORM_MIN_GENDER_DIFF]},  // "Camerupt♀",
	"0324"            : {ico: "0324",             flags: []},                      // "Torkoal",
	"0325"            : {ico: "0325",             flags: []},                      // "Spoink",
	"0326"            : {ico: "0326",             flags: []},                      // "Grumpig",
	"0327"            : {ico: "0327",             flags: []},                      // "Spinda",
	"0328"            : {ico: "0328",             flags: []},                      // "Trapinch",
	"0329"            : {ico: "0329",             flags: []},                      // "Vibrava",
	"0330"            : {ico: "0330",             flags: []},                      // "Flygon",
	"0331"            : {ico: "0331",             flags: []},                      // "Cacnea",
	"0332"            : {ico: "0332",             flags: [FORM_MIN_GENDER_BASE]},  // "Cacturne",
	"0332-m"          : {ico: "0332",             flags: [FORM_MIN_GENDER_DIFF]},  // "Cacturne♂",
	"0332-f"          : {ico: "0332",             flags: [FORM_MIN_GENDER_DIFF]},  // "Cacturne♀",
	"0333"            : {ico: "0333",             flags: []},                      // "Swablu",
	"0334"            : {ico: "0334",             flags: []},                      // "Altaria",
	"0335"            : {ico: "0335",             flags: []},                      // "Zangoose",
	"0336"            : {ico: "0336",             flags: []},                      // "Seviper",
	"0337"            : {ico: "0337",             flags: []},                      // "Lunatone", // uknown gender
	"0338"            : {ico: "0338",             flags: []},                      // "Solrock", // uknown gender
	"0339"            : {ico: "0339",             flags: []},                      // "Barboach",
	"0340"            : {ico: "0340",             flags: []},                      // "Whiscash",
	"0341"            : {ico: "0341",             flags: []},                      // "Corphish",
	"0342"            : {ico: "0342",             flags: []},                      // "Crawdaunt",
	"0343"            : {ico: "0343",             flags: []},                      // "Baltoy", // uknown gender
	"0344"            : {ico: "0344",             flags: []},                      // "Claydol", // uknown gender
	"0349"            : {ico: "0349",             flags: []},                      // "Feebas",
	"0350"            : {ico: "0350",             flags: [FORM_MIN_GENDER_BASE]},  // "Milotic",
	"0350-m"          : {ico: "0350",             flags: [FORM_MIN_GENDER_DIFF]},  // "Milotic♂",
	"0350-f"          : {ico: "0350",             flags: [FORM_MIN_GENDER_DIFF]},  // "Milotic♀",
	"0351"            : {ico: "0351",             flags: []},                      // "Castform",
	"0351-sunny"      : {ico: "0351-sunny",       flags: [FORM_BATTLE]},           // "Sunny Castform",
	"0351-rainy"      : {ico: "0351-rainy",       flags: [FORM_BATTLE]},           // "Rainy Castform",
	"0351-snowy"      : {ico: "0351-snowy",       flags: [FORM_BATTLE]},           // "Snowy Castform",
	"0352"            : {ico: "0352",             flags: []},                      // "Kecleon",
	"0353"            : {ico: "0353",             flags: []},                      // "Shuppet",
	"0354"            : {ico: "0354",             flags: []},                      // "Banette",
	"0355"            : {ico: "0355",             flags: []},                      // "Duskull",
	"0356"            : {ico: "0356",             flags: []},                      // "Dusclops",
	"0477"            : {ico: "0477",             flags: []},                      // "Dusknoir",
	"0357"            : {ico: "0357",             flags: []},                      // "Tropius",
	"0433"            : {ico: "0433",             flags: []},                      // "Chingling",
	"0358"            : {ico: "0358",             flags: []},                      // "Chimecho",
	"0359"            : {ico: "0359",             flags: []},                      // "Absol",
	"0361"            : {ico: "0361",             flags: []},                      // "Snorunt",
	"0362"            : {ico: "0362",             flags: []},                      // "Glalie",
	"0478"            : {ico: "0478",             flags: []},                      // "Froslass", // female only
	"0363"            : {ico: "0363",             flags: []},                      // "Spheal",
	"0364"            : {ico: "0364",             flags: []},                      // "Sealeo",
	"0365"            : {ico: "0365",             flags: []},                      // "Walrein",
	"0366"            : {ico: "0366",             flags: []},                      // "Clamperl",
	"0367"            : {ico: "0367",             flags: []},                      // "Huntail",
	"0368"            : {ico: "0368",             flags: []},                      // "Gorebyss",
	"0369"            : {ico: "0369",             flags: [FORM_MIN_GENDER_BASE]},  // "Relicanth",
	"0369-m"          : {ico: "0369",             flags: [FORM_MIN_GENDER_DIFF]},  // "Relicanth♂",
	"0369-f"          : {ico: "0369",             flags: [FORM_MIN_GENDER_DIFF]},  // "Relicanth♀",
	"0370"            : {ico: "0370",             flags: []},                      // "Luvdisc",
	"0371"            : {ico: "0371",             flags: []},                      // "Bagon",
	"0372"            : {ico: "0372",             flags: []},                      // "Shelgon",
	"0373"            : {ico: "0373",             flags: []},                      // "Salamence",
	"0374"            : {ico: "0374",             flags: []},                      // "Beldum", // uknown gender
	"0375"            : {ico: "0375",             flags: []},                      // "Metang", // uknown gender
	"0376"            : {ico: "0376",             flags: []},                      // "Metagross", // uknown gender
	"0377"            : {ico: "0377",             flags: []},                      // "Regirock", // uknown gender
	"0378"            : {ico: "0378",             flags: []},                      // "Regice", // uknown gender
	"0379"            : {ico: "0379",             flags: []},                      // "Registeel", // uknown gender
	"0380"            : {ico: "0380",             flags: []},                      // "Latias", // female only
	"0381"            : {ico: "0381",             flags: []},                      // "Latios", // male only
	"0382"            : {ico: "0382",             flags: []},                      // "Kyogre", // uknown gender
	"0383"            : {ico: "0383",             flags: []},                      // "Groudon", // uknown gender
	"0384"            : {ico: "0384",             flags: []},                      // "Rayquaza", // uknown gender
	"0385"            : {ico: "0385",             flags: []},                      // "Jirachi", // uknown gender
	"0386"            : {ico: "0386",             flags: [FORM_0386_BASE,
	                                                      FORM_0386]},             // "Deoxys", // uknown gender
	"0386-attack"     : {ico: "0386-attack",      flags: [FORM_0386]},             // "Attack Deoxys", // uknown gender
	"0386-defense"    : {ico: "0386-defense",     flags: [FORM_0386]},             // "Defense Deoxys", // uknown gender
	"0386-speed"      : {ico: "0386-speed",       flags: [FORM_0386]},             // "Speed Deoxys", // uknown gender
	"0387"            : {ico: "0387",             flags: []},                      // "Turtwig",
	"0388"            : {ico: "0388",             flags: []},                      // "Grotle",
	"0389"            : {ico: "0389",             flags: []},                      // "Torterra",
	"0390"            : {ico: "0390",             flags: []},                      // "Chimchar",
	"0391"            : {ico: "0391",             flags: []},                      // "Monferno",
	"0392"            : {ico: "0392",             flags: []},                      // "Infernape",
	"0393"            : {ico: "0393",             flags: []},                      // "Piplup",
	"0394"            : {ico: "0394",             flags: []},                      // "Prinplup",
	"0395"            : {ico: "0395",             flags: []},                      // "Empoleon",
	"0396"            : {ico: "0396",             flags: [FORM_MIN_GENDER_BASE]},  // "Starly",
	"0396-m"          : {ico: "0396",             flags: [FORM_MIN_GENDER_DIFF]},  // "Starly♂",
	"0396-f"          : {ico: "0396",             flags: [FORM_MIN_GENDER_DIFF]},  // "Starly♀",
	"0397"            : {ico: "0397",             flags: [FORM_MIN_GENDER_BASE]},  // "Staravia",
	"0397-m"          : {ico: "0397",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staravia♂",
	"0397-f"          : {ico: "0397",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staravia♀",
	"0398"            : {ico: "0398",             flags: [FORM_MIN_GENDER_BASE]},  // "Staraptor",
	"0398-m"          : {ico: "0398",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staraptor♂",
	"0398-f"          : {ico: "0398",             flags: [FORM_MIN_GENDER_DIFF]},  // "Staraptor♀",
	"0399"            : {ico: "0399",             flags: [FORM_MIN_GENDER_BASE]},  // "Bidoof",
	"0399-m"          : {ico: "0399",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bidoof♂",
	"0399-f"          : {ico: "0399",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bidoof♀",
	"0400"            : {ico: "0400",             flags: [FORM_MIN_GENDER_BASE]},  // "Bibarel",
	"0400-m"          : {ico: "0400",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bibarel♂",
	"0400-f"          : {ico: "0400",             flags: [FORM_MIN_GENDER_DIFF]},  // "Bibarel♀",
	"0401"            : {ico: "0401",             flags: [FORM_MIN_GENDER_BASE]},  // "Kricketot",
	"0401-m"          : {ico: "0401",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketot♂",
	"0401-f"          : {ico: "0401",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketot♀",
	"0402"            : {ico: "0402",             flags: [FORM_MIN_GENDER_BASE]},  // "Kricketune",
	"0402-m"          : {ico: "0402",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketune♂",
	"0402-f"          : {ico: "0402",             flags: [FORM_MIN_GENDER_DIFF]},  // "Kricketune♀",
	"0403"            : {ico: "0403",             flags: [FORM_MIN_GENDER_BASE]},  // "Shinx",
	"0403-m"          : {ico: "0403",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shinx♂",
	"0403-f"          : {ico: "0403",             flags: [FORM_MIN_GENDER_DIFF]},  // "Shinx♀",
	"0404"            : {ico: "0404",             flags: [FORM_MIN_GENDER_BASE]},  // "Luxio",
	"0404-m"          : {ico: "0404",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxio♂",
	"0404-f"          : {ico: "0404",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxio♀",
	"0405"            : {ico: "0405",             flags: [FORM_MIN_GENDER_BASE]},  // "Luxray",
	"0405-m"          : {ico: "0405",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxray♂",
	"0405-f"          : {ico: "0405",             flags: [FORM_MIN_GENDER_DIFF]},  // "Luxray♀",
	"0412"            : {ico: "0412-plant",       flags: [FORM_0412_BASE]},        // "Burmy",
	"0412-plant"      : {ico: "0412-plant",       flags: [FORM_0412]},             // "Burmy Plant Cloak",
	"0412-sandy"      : {ico: "0412-sandy",       flags: [FORM_0412]},             // "Burmy Sandy Cloak",
	"0412-trash"      : {ico: "0412-trash",       flags: [FORM_0412]},             // "Burmy Trash Cloak",
	"0413"            : {ico: "0413-plant",       flags: [FORM_0412_BASE]},        // "Wormadam", // female only
	"0413-plant"      : {ico: "0413-plant",       flags: [FORM_0412]},             // "Wormadam Plant Cloak", // female only
	"0413-sandy"      : {ico: "0413-sandy",       flags: [FORM_0412]},             // "Wormadam Sandy Cloak", // female only
	"0413-trash"      : {ico: "0413-trash",       flags: [FORM_0412]},             // "Wormadam Trash Cloak", // female only
	"0414"            : {ico: "0414",             flags: []},                      // "Mothim", // male only
	"0415"            : {ico: "0415",             flags: [FORM_MIN_GENDER_BASE]},  // "Combee",
	"0415-m"          : {ico: "0415",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combee♂",
	"0415-f"          : {ico: "0415",             flags: [FORM_MIN_GENDER_DIFF]},  // "Combee♀",
	"0416"            : {ico: "0416",             flags: []},                      // "Vespiquen", // female only
	"0417"            : {ico: "0417",             flags: [FORM_MIN_GENDER_BASE]},  // "Pachirisu",
	"0417-m"          : {ico: "0417",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pachirisu♂",
	"0417-f"          : {ico: "0417",             flags: [FORM_MIN_GENDER_DIFF]},  // "Pachirisu♀",
	"0418"            : {ico: "0418",             flags: [FORM_MIN_GENDER_BASE]},  // "Buizel",
	"0418-m"          : {ico: "0418",             flags: [FORM_MIN_GENDER_DIFF]},  // "Buizel♂",
	"0418-f"          : {ico: "0418",             flags: [FORM_MIN_GENDER_DIFF]},  // "Buizel♀",
	"0419"            : {ico: "0419",             flags: [FORM_MIN_GENDER_BASE]},  // "Floatzel",
	"0419-m"          : {ico: "0419",             flags: [FORM_MIN_GENDER_DIFF]},  // "Floatzel♂",
	"0419-f"          : {ico: "0419",             flags: [FORM_MIN_GENDER_DIFF]},  // "Floatzel♀",
	"0420"            : {ico: "0420",             flags: []},                      // "Cherubi",
	"0421"            : {ico: "0421-overcast",    flags: [FORM_BATTLE_BASE]},      // "Cherrim",
	"0421-overcast"   : {ico: "0421-overcast",    flags: [FORM_BATTLE]},           // "Overcast Cherrim",
	"0421-sunshine"   : {ico: "0421-sunshine",    flags: [FORM_BATTLE]},           // "Sunshine Cherrim",
	"0422"            : {ico: "0422-west",        flags: [FORM_0422_BASE]},        // "Shellos",
	"0422-west"       : {ico: "0422-west",        flags: [FORM_0422]},             // "West Sea Shellos",
	"0422-east"       : {ico: "0422-east",        flags: [FORM_0422]},             // "East Sea Shellos",
	"0423"            : {ico: "0423-west",        flags: [FORM_0422_BASE]},        // "Gastrodon",
	"0423-west"       : {ico: "0423-west",        flags: [FORM_0422]},             // "West Sea Gastrodon",
	"0423-east"       : {ico: "0423-east",        flags: [FORM_0422]},             // "East Sea Gastrodon",
	"0425"            : {ico: "0425",             flags: []},                      // "Drifloon",
	"0426"            : {ico: "0426",             flags: []},                      // "Drifblim",
	"0427"            : {ico: "0427",             flags: []},                      // "Buneary",
	"0428"            : {ico: "0428",             flags: []},                      // "Lopunny",
	"0431"            : {ico: "0431",             flags: []},                      // "Glameow",
	"0432"            : {ico: "0432",             flags: []},                      // "Purugly",
	"0434"            : {ico: "0434",             flags: []},                      // "Stunky",
	"0435"            : {ico: "0435",             flags: []},                      // "Skuntank",
	"0436"            : {ico: "0436",             flags: []},                      // "Bronzor", // uknown gender
	"0437"            : {ico: "0437",             flags: []},                      // "Bronzong", // uknown gender
	"0441"            : {ico: "0441",             flags: []},                      // "Chatot",
	"0442"            : {ico: "0442",             flags: []},                      // "Spiritomb",
	"0443"            : {ico: "0443",             flags: [FORM_MIN_GENDER_BASE]},  // "Gible",
	"0443-m"          : {ico: "0443",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gible♂",
	"0443-f"          : {ico: "0443",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gible♀",
	"0444"            : {ico: "0444",             flags: [FORM_MIN_GENDER_BASE]},  // "Gabite",
	"0444-m"          : {ico: "0444",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gabite♂",
	"0444-f"          : {ico: "0444",             flags: [FORM_MIN_GENDER_DIFF]},  // "Gabite♀",
	"0445"            : {ico: "0445",             flags: [FORM_MIN_GENDER_BASE]},  // "Garchomp",
	"0445-m"          : {ico: "0445",             flags: [FORM_MIN_GENDER_DIFF]},  // "Garchomp♂",
	"0445-f"          : {ico: "0445",             flags: [FORM_MIN_GENDER_DIFF]},  // "Garchomp♀",
	"0447"            : {ico: "0447",             flags: []},                      // "Riolu",
	"0448"            : {ico: "0448",             flags: []},                      // "Lucario",
	"0449"            : {ico: "0449",             flags: [FORM_MIN_GENDER_BASE]},  // "Hippopotas",
	"0449-m"          : {ico: "0449",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippopotas♂",
	"0449-f"          : {ico: "0449",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippopotas♀",
	"0450"            : {ico: "0450",             flags: [FORM_MIN_GENDER_BASE]},  // "Hippowdon",
	"0450-m"          : {ico: "0450",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippowdon♂",
	"0450-f"          : {ico: "0450",             flags: [FORM_MIN_GENDER_DIFF]},  // "Hippowdon♀",
	"0451"            : {ico: "0451",             flags: []},                      // "Skorupi",
	"0452"            : {ico: "0452",             flags: []},                      // "Drapion",
	"0453"            : {ico: "0453",             flags: [FORM_MIN_GENDER_BASE]},  // "Croagunk",
	"0453-m"          : {ico: "0453",             flags: [FORM_MIN_GENDER_DIFF]},  // "Croagunk♂",
	"0453-f"          : {ico: "0453",             flags: [FORM_MIN_GENDER_DIFF]},  // "Croagunk♀",
	"0454"            : {ico: "0454",             flags: [FORM_MIN_GENDER_BASE]},  // "Toxicroak",
	"0454-m"          : {ico: "0454",             flags: [FORM_MIN_GENDER_DIFF]},  // "Toxicroak♂",
	"0454-f"          : {ico: "0454",             flags: [FORM_MIN_GENDER_DIFF]},  // "Toxicroak♀",
	"0455"            : {ico: "0455",             flags: []},                      // "Carnivine",
	"0456"            : {ico: "0456",             flags: [FORM_MIN_GENDER_BASE]},  // "Finneon",
	"0456-m"          : {ico: "0456",             flags: [FORM_MIN_GENDER_DIFF]},  // "Finneon♂",
	"0456-f"          : {ico: "0456",             flags: [FORM_MIN_GENDER_DIFF]},  // "Finneon♀",
	"0457"            : {ico: "0457",             flags: [FORM_MIN_GENDER_BASE]},  // "Lumineon",
	"0457-m"          : {ico: "0457",             flags: [FORM_MIN_GENDER_DIFF]},  // "Lumineon♂",
	"0457-f"          : {ico: "0457",             flags: [FORM_MIN_GENDER_DIFF]},  // "Lumineon♀",
	"0459"            : {ico: "0459",             flags: [FORM_MIN_GENDER_BASE]},  // "Snover",
	"0459-m"          : {ico: "0459",             flags: [FORM_MIN_GENDER_DIFF]},  // "Snover♂",
	"0459-f"          : {ico: "0459",             flags: [FORM_MIN_GENDER_DIFF]},  // "Snover♀",
	"0460"            : {ico: "0460",             flags: [FORM_MIN_GENDER_BASE]},  // "Abomasnow",
	"0460-m"          : {ico: "0460",             flags: [FORM_MIN_GENDER_DIFF]},  // "Abomasnow♂",
	"0460-f"          : {ico: "0460",             flags: [FORM_MIN_GENDER_DIFF]},  // "Abomasnow♀",
	"0479"            : {ico: "0479",             flags: [FORM_0479_BASE,
	                                                      FORM_0479]},             // "Rotom", // uknown gender
	"0479-heat"       : {ico: "0479-heat",        flags: [FORM_0479]},             // "Heat Rotom", // uknown gender
	"0479-wash"       : {ico: "0479-wash",        flags: [FORM_0479]},             // "Wash Rotom", // uknown gender
	"0479-frost"      : {ico: "0479-frost",       flags: [FORM_0479]},             // "Frost Rotom", // uknown gender
	"0479-fan"        : {ico: "0479-fan",         flags: [FORM_0479]},             // "Fan Rotom", // uknown gender
	"0479-mow"        : {ico: "0479-mow",         flags: [FORM_0479]},             // "Mow Rotom", // uknown gender
	"0480"            : {ico: "0480",             flags: []},                      // "Uxie", // uknown gender
	"0481"            : {ico: "0481",             flags: []},                      // "Mesprit", // uknown gender
	"0482"            : {ico: "0482",             flags: []},                      // "Azelf", // uknown gender
	"0483"            : {ico: "0483",             flags: []},                      // "Dialga", // uknown gender
	"0484"            : {ico: "0484",             flags: []},                      // "Palkia", // uknown gender
	"0485"            : {ico: "0485",             flags: []},                      // "Heatran",
	"0486"            : {ico: "0486",             flags: []},                      // "Regigigas", // uknown gender
	"0487"            : {ico: "0487-altered",     flags: [FORM_0487_BASE]},        // "Giratina", // uknown gender
	"0487-altered"    : {ico: "0487-altered",     flags: [FORM_0487]},             // "Giratina Altered Forme", // uknown gender
	"0487-origin"     : {ico: "0487-origin",      flags: [FORM_0487]},             // "Giratina Origin Forme", // uknown gender
	"0488"            : {ico: "0488",             flags: []},                      // "Cresselia", // female only
	"0489"            : {ico: "0489",             flags: []},                      // "Phione", // uknown gender
	"0490"            : {ico: "0490",             flags: []},                      // "Manaphy", // uknown gender
	"0491"            : {ico: "0491",             flags: []},                      // "Darkrai", // uknown gender
	"0492"            : {ico: "0492-land",        flags: [FORM_0492_BASE]},        // "Shaymin", // uknown gender
	"0492-land"       : {ico: "0492-land",        flags: [FORM_0492]},             // "Shaymin Land Forme", // uknown gender
	"0492-sky"        : {ico: "0492-sky",         flags: [FORM_0492]},             // "Shaymin Sky Forme", // uknown gender
	"0493"            : {ico: "0493",             flags: [FORM_0493_BASE,
	                                                      FORM_0493]},             // "Arceus", // uknown gender
	"0493-fighting"   : {ico: "0493",             flags: [FORM_0493]},             // "Fighting Arceus", // uknown gender
	"0493-flying"     : {ico: "0493",             flags: [FORM_0493]},             // "Flying Arceus", // uknown gender
	"0493-poison"     : {ico: "0493",             flags: [FORM_0493]},             // "Poison Arceus", // uknown gender
	"0493-ground"     : {ico: "0493",             flags: [FORM_0493]},             // "Ground Arceus", // uknown gender
	"0493-rock"       : {ico: "0493",             flags: [FORM_0493]},             // "Rock Arceus", // uknown gender
	"0493-bug"        : {ico: "0493",             flags: [FORM_0493]},             // "Bug Arceus", // uknown gender
	"0493-ghost"      : {ico: "0493",             flags: [FORM_0493]},             // "Ghost Arceus", // uknown gender
	"0493-steel"      : {ico: "0493",             flags: [FORM_0493]},             // "Steel Arceus", // uknown gender
	"0493-fire"       : {ico: "0493",             flags: [FORM_0493]},             // "Fire Arceus", // uknown gender
	"0493-water"      : {ico: "0493",             flags: [FORM_0493]},             // "Water Arceus", // uknown gender
	"0493-grass"      : {ico: "0493",             flags: [FORM_0493]},             // "Grass Arceus", // uknown gender
	"0493-electric"   : {ico: "0493",             flags: [FORM_0493]},             // "Electric Arceus", // uknown gender
	"0493-psychic"    : {ico: "0493",             flags: [FORM_0493]},             // "Psychic Arceus", // uknown gender
	"0493-ice"        : {ico: "0493",             flags: [FORM_0493]},             // "Ice Arceus", // uknown gender
	"0493-dragon"     : {ico: "0493",             flags: [FORM_0493]},             // "Dragon Arceus", // uknown gender
	"0493-dark"       : {ico: "0493",             flags: [FORM_0493]},             // "Dark Arceus", // uknown gender
    "0494"            : {ico: "0494",             flags: []},                      // "Victini", // uknown gender
    "0495"            : {ico: "0495",             flags: []},                      // "Snivy",
    "0496"            : {ico: "0496",             flags: []},                      // "Servine",
    "0497"            : {ico: "0497",             flags: []},                      // "Serperior",
    "0498"            : {ico: "0498",             flags: []},                      // "Tepig",
    "0499"            : {ico: "0499",             flags: []},                      // "Pignite",
    "0500"            : {ico: "0500",             flags: []},                      // "Emboar",
    "0501"            : {ico: "0501",             flags: []},                      // "Oshawott",
    "0502"            : {ico: "0502",             flags: []},                      // "Dewott",
    "0503"            : {ico: "0503",             flags: []},                      // "Samurott",
    "0504"            : {ico: "0504",             flags: []},                      // "Patrat",
    "0505"            : {ico: "0505",             flags: []},                      // "Watchog",
    "0506"            : {ico: "0506",             flags: []},                      // "Lillipup",
    "0507"            : {ico: "0507",             flags: []},                      // "Herdier",
    "0508"            : {ico: "0508",             flags: []},                      // "Stoutland",
    "0509"            : {ico: "0509",             flags: []},                      // "Purrloin",
    "0510"            : {ico: "0510",             flags: []},                      // "Liepard",
    "0511"            : {ico: "0511",             flags: []},                      // "Pansage",
    "0512"            : {ico: "0512",             flags: []},                      // "Simisage",
    "0513"            : {ico: "0513",             flags: []},                      // "Pansear",
    "0514"            : {ico: "0514",             flags: []},                      // "Simisear",
    "0515"            : {ico: "0515",             flags: []},                      // "Panpour",
    "0516"            : {ico: "0516",             flags: []},                      // "Simipour",
    "0517"            : {ico: "0517",             flags: []},                      // "Munna",
    "0518"            : {ico: "0518",             flags: []},                      // "Musharna",
    "0519"            : {ico: "0519",             flags: []},                      // "Pidove",
    "0520"            : {ico: "0520",             flags: []},                      // "Tranquill",
    "0521"            : {ico: "0521-m",           flags: [FORM_MAJ_GENDER_BASE]},  // "Unfezant",
    "0521-m"          : {ico: "0521-m",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Unfezant♂",
    "0521-f"          : {ico: "0521-f",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Unfezan♀",
    "0522"            : {ico: "0522",             flags: []},                      // "Blitzle",
    "0523"            : {ico: "0523",             flags: []},                      // "Zebstrika",
    "0524"            : {ico: "0524",             flags: []},                      // "Roggenrola",
    "0525"            : {ico: "0525",             flags: []},                      // "Boldore",
    "0526"            : {ico: "0526",             flags: []},                      // "Gigalith",
    "0527"            : {ico: "0527",             flags: []},                      // "Woobat",
    "0528"            : {ico: "0528",             flags: []},                      // "Swoobat",
    "0529"            : {ico: "0529",             flags: []},                      // "Drilbur",
    "0530"            : {ico: "0530",             flags: []},                      // "Excadrill",
    "0531"            : {ico: "0531",             flags: []},                      // "Audino",
    "0532"            : {ico: "0532",             flags: []},                      // "Timburr",
    "0533"            : {ico: "0533",             flags: []},                      // "Gurdurr",
    "0534"            : {ico: "0534",             flags: []},                      // "Conkeldurr",
    "0535"            : {ico: "0535",             flags: []},                      // "Tympole",
    "0536"            : {ico: "0536",             flags: []},                      // "Palpitoad",
    "0537"            : {ico: "0537",             flags: []},                      // "Seismitoad",
    "0538"            : {ico: "0538",             flags: []},                      // "Throh", // male only
    "0539"            : {ico: "0539",             flags: []},                      // "Sawk", // male only
    "0540"            : {ico: "0540",             flags: []},                      // "Sewaddle",
    "0541"            : {ico: "0541",             flags: []},                      // "Swadloon",
    "0542"            : {ico: "0542",             flags: []},                      // "Leavanny",
    "0543"            : {ico: "0543",             flags: []},                      // "Venipede",
    "0544"            : {ico: "0544",             flags: []},                      // "Whirlipede",
    "0545"            : {ico: "0545",             flags: []},                      // "Scolipede",
    "0546"            : {ico: "0546",             flags: []},                      // "Cottonee",
    "0547"            : {ico: "0547",             flags: []},                      // "Whimsicott",
    "0548"            : {ico: "0548",             flags: []},                      // "Petilil", // female only
    "0549"            : {ico: "0549",             flags: []},                      // "Lilligant", // female only
    "0550"            : {ico: "0550-red",         flags: [FORM_0550_BASE]},        // "Basculin",
    "0550-red"        : {ico: "0550-red",         flags: [FORM_0550]},             // "Red-striped Basculin",
    "0550-blue"       : {ico: "0550-blue",        flags: [FORM_0550]},             // "Blue-striped Basculin",
    "0551"            : {ico: "0551",             flags: []},                      // "Sandile",
    "0552"            : {ico: "0552",             flags: []},                      // "Krokorok",
    "0553"            : {ico: "0553",             flags: []},                      // "Krookodile",
    "0554"            : {ico: "0554",             flags: []},                      // "Darumaka",
    "0555"            : {ico: "0555-standard",    flags: [FORM_BATTLE_BASE]},      // "Darmanitan",
    "0555-standard"   : {ico: "0555-standard",    flags: [FORM_BATTLE]},           // "Darmanitan Standard Mode",
    "0555-zen"        : {ico: "0555-zen",         flags: [FORM_BATTLE]},           // "Darmanitan Zen Mode",
    "0556"            : {ico: "0556",             flags: []},                      // "Maractus",
    "0557"            : {ico: "0557",             flags: []},                      // "Dwebble",
    "0558"            : {ico: "0558",             flags: []},                      // "Crustle",
    "0559"            : {ico: "0559",             flags: []},                      // "Scraggy",
    "0560"            : {ico: "0560",             flags: []},                      // "Scrafty",
    "0561"            : {ico: "0561",             flags: []},                      // "Sigilyph",
    "0562"            : {ico: "0562",             flags: []},                      // "Yamask",
    "0563"            : {ico: "0563",             flags: []},                      // "Cofagrigus",
    "0568"            : {ico: "0568",             flags: []},                      // "Trubbish",
    "0569"            : {ico: "0569",             flags: []},                      // "Garbodor",
    "0570"            : {ico: "0570",             flags: []},                      // "Zorua",
    "0571"            : {ico: "0571",             flags: []},                      // "Zoroark",
    "0572"            : {ico: "0572",             flags: []},                      // "Minccino",
    "0573"            : {ico: "0573",             flags: []},                      // "Cinccino",
    "0574"            : {ico: "0574",             flags: []},                      // "Gothita",
    "0575"            : {ico: "0575",             flags: []},                      // "Gothorita",
    "0576"            : {ico: "0576",             flags: []},                      // "Gothitelle",
    "0577"            : {ico: "0577",             flags: []},                      // "Solosis",
    "0578"            : {ico: "0578",             flags: []},                      // "Duosion",
    "0579"            : {ico: "0579",             flags: []},                      // "Reuniclus",
    "0580"            : {ico: "0580",             flags: []},                      // "Ducklett",
    "0581"            : {ico: "0581",             flags: []},                      // "Swanna",
    "0582"            : {ico: "0582",             flags: []},                      // "Vanillite",
    "0583"            : {ico: "0583",             flags: []},                      // "Vanillish",
    "0584"            : {ico: "0584",             flags: []},                      // "Vanilluxe",
    "0585"            : {ico: "0585-spring",      flags: [FORM_0585_BASE]},        // "Deerling",
    "0585-spring"     : {ico: "0585-spring",      flags: [FORM_0585]},             // "Spring Deerling",
    "0585-summer"     : {ico: "0585-summer",      flags: [FORM_0585]},             // "Summer Deerling",
    "0585-autumn"     : {ico: "0585-autumn",      flags: [FORM_0585]},             // "Autumn Deerling",
    "0585-winter"     : {ico: "0585-winter",      flags: [FORM_0585]},             // "Winter Deerling",
    "0586"            : {ico: "0586-spring",      flags: [FORM_0585_BASE]},        // "Sawsbuck",
    "0586-spring"     : {ico: "0586-spring",      flags: [FORM_0585]},             // "Spring Sawsbuck",
    "0586-summer"     : {ico: "0586-summer",      flags: [FORM_0585]},             // "Summer Sawsbuck",
    "0586-autumn"     : {ico: "0586-autumn",      flags: [FORM_0585]},             // "Autumn Sawsbuck",
    "0586-winter"     : {ico: "0586-winter",      flags: [FORM_0585]},             // "Winter Sawsbuck",
    "0587"            : {ico: "0587",             flags: []},                      // "Emolga",
    "0588"            : {ico: "0588",             flags: []},                      // "Karrablast",
    "0589"            : {ico: "0589",             flags: []},                      // "Escavalier",
    "0590"            : {ico: "0590",             flags: []},                      // "Foongus",
    "0591"            : {ico: "0591",             flags: []},                      // "Amoonguss",
    "0592"            : {ico: "0592-m",           flags: [FORM_MAJ_GENDER_BASE]},  // "Frillish",
    "0592-m"          : {ico: "0592-m",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Frillish♂",
    "0592-f"          : {ico: "0592-f",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Frillish♀",
    "0593"            : {ico: "0593-m",           flags: [FORM_MAJ_GENDER_BASE]},  // "Jellicent",
    "0593-m"          : {ico: "0593-m",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Jellicent♂",
    "0593-f"          : {ico: "0593-f",           flags: [FORM_MAJ_GENDER_DIFF]},  // "Jellicent♀",
    "0594"            : {ico: "0594",             flags: []},                      // "Alomomola",
    "0595"            : {ico: "0595",             flags: []},                      // "Joltik",
    "0596"            : {ico: "0596",             flags: []},                      // "Galvantula",
    "0597"            : {ico: "0597",             flags: []},                      // "Ferroseed",
    "0598"            : {ico: "0598",             flags: []},                      // "Ferrothorn",
    "0599"            : {ico: "0599",             flags: []},                      // "Klink", // uknown gender
    "0600"            : {ico: "0600",             flags: []},                      // "Klang", // uknown gender
    "0601"            : {ico: "0601",             flags: []},                      // "Klinklang", // uknown gender
    "0602"            : {ico: "0602",             flags: []},                      // "Tynamo",
    "0603"            : {ico: "0603",             flags: []},                      // "Eelektrik",
    "0604"            : {ico: "0604",             flags: []},                      // "Eelektross",
    "0605"            : {ico: "0605",             flags: []},                      // "Elgyem",
    "0606"            : {ico: "0606",             flags: []},                      // "Beheeyem",
    "0607"            : {ico: "0607",             flags: []},                      // "Litwick",
    "0608"            : {ico: "0608",             flags: []},                      // "Lampent",
    "0609"            : {ico: "0609",             flags: []},                      // "Chandelure",
    "0610"            : {ico: "0610",             flags: []},                      // "Axew",
    "0611"            : {ico: "0611",             flags: []},                      // "Fraxure",
    "0612"            : {ico: "0612",             flags: []},                      // "Haxorus",
    "0613"            : {ico: "0613",             flags: []},                      // "Cubchoo",
    "0614"            : {ico: "0614",             flags: []},                      // "Beartic",
    "0615"            : {ico: "0615",             flags: []},                      // "Cryogonal", // uknown gender
    "0616"            : {ico: "0616",             flags: []},                      // "Shelmet",
    "0617"            : {ico: "0617",             flags: []},                      // "Accelgor",
    "0618"            : {ico: "0618",             flags: []},                      // "Stunfisk",
    "0619"            : {ico: "0619",             flags: []},                      // "Mienfoo",
    "0620"            : {ico: "0620",             flags: []},                      // "Mienshao",
    "0621"            : {ico: "0621",             flags: []},                      // "Druddigon",
    "0622"            : {ico: "0622",             flags: []},                      // "Golett", // uknown gender
    "0623"            : {ico: "0623",             flags: []},                      // "Golurk", // uknown gender
    "0624"            : {ico: "0624",             flags: []},                      // "Pawniard",
    "0625"            : {ico: "0625",             flags: []},                      // "Bisharp",
    "0626"            : {ico: "0626",             flags: []},                      // "Bouffalant",
    "0627"            : {ico: "0627",             flags: []},                      // "Rufflet", // male only
    "0628"            : {ico: "0628",             flags: []},                      // "Braviary", // male only
    "0629"            : {ico: "0629",             flags: []},                      // "Vullaby", // female only
    "0630"            : {ico: "0630",             flags: []},                      // "Mandibuzz", // female only
    "0631"            : {ico: "0631",             flags: []},                      // "Heatmor",
    "0632"            : {ico: "0632",             flags: []},                      // "Durant",
    "0633"            : {ico: "0633",             flags: []},                      // "Deino",
    "0634"            : {ico: "0634",             flags: []},                      // "Zweilous",
    "0635"            : {ico: "0635",             flags: []},                      // "Hydreigon",
    "0636"            : {ico: "0636",             flags: []},                      // "Larvesta",
    "0637"            : {ico: "0637",             flags: []},                      // "Volcarona",
    "0638"            : {ico: "0638",             flags: []},                      // "Cobalion", // uknown gender
    "0639"            : {ico: "0639",             flags: []},                      // "Terrakion", // uknown gender
    "0640"            : {ico: "0640",             flags: []},                      // "Virizion", // uknown gender
    "0641"            : {ico: "0641-incarnate",   flags: [FORM_0641_BASE]},        // "Tornadus", // male only
    "0641-incarnate"  : {ico: "0641-incarnate",   flags: [FORM_0641]},             // "Incarnate Forme Tornadus", // male only
    "0641-therian"    : {ico: "0641-therian",     flags: [FORM_0641]},             // "Therian Forme Tornadus", // male only
    "0642"            : {ico: "0642-incarnate",   flags: [FORM_0642_BASE]},        // "Thundurus", // male only
    "0642-incarnate"  : {ico: "0642-incarnate",   flags: [FORM_0642]},             // "Incarnate Forme Thundurus", // male only
    "0642-therian"    : {ico: "0642-therian",     flags: [FORM_0642]},             // "Therian Forme Thundurus", // male only
    "0645"            : {ico: "0645-incarnate",   flags: [FORM_0645_BASE]},        // "Landorus", // male only
    "0645-incarnate"  : {ico: "0645-incarnate",   flags: [FORM_0645]},             // "Incarnate Forme Landorus", // male only
    "0645-therian"    : {ico: "0645-therian",     flags: [FORM_0645]},             // "Therian Forme Landorus", // male only
    "0643"            : {ico: "0643",             flags: []},                      // "Reshiram", // uknown gender
    "0644"            : {ico: "0644",             flags: []},                      // "Zekrom", // uknown gender
    "0646"            : {ico: "0646",             flags: [FORM_0646_BASE, 
	                                                      FORM_0646]},             // "Kyurem", // uknown gender
    "0646-white"      : {ico: "0646-white",       flags: [FORM_0646]},             // "White Kyurem", // uknown gender
    "0646-black"      : {ico: "0646-black",       flags: [FORM_0646]},             // "Black Kyurem", // uknown gender
    "0647"            : {ico: "0647-ordinary",    flags: [FORM_0647_BASE]},        // "Keldeo", // uknown gender
    "0647-ordinary"   : {ico: "0647-ordinary",    flags: [FORM_0647]},             // "Ordinary Form Keldeo", // uknown gender
    "0647-resolute"   : {ico: "0647-resolute",    flags: [FORM_0647]},             // "Resolute Form Keldeo", // uknown gender
    "0648"            : {ico: "0648-aria",        flags: [FORM_0648_BASE]},        // "Meloetta", // uknown gender
    "0648-aria"       : {ico: "0648-aria",        flags: [FORM_0648]},             // "Aria Forme Meloetta", // uknown gender
    "0648-pirouette"  : {ico: "0648-pirouette",   flags: [FORM_0648]},             // "Pirouette Forme Meloetta", // uknown gender
    "0649"            : {ico: "0649",             flags: [FORM_0649_BASE]},        // "Genesect", // uknown gender
    "0649-douse"      : {ico: "0649",             flags: [FORM_0649]},             // "Douse Drive Genesect", // uknown gender
    "0649-shock"      : {ico: "0649",             flags: [FORM_0649]},             // "Shock Drive Genesect", // uknown gender
    "0649-burn"       : {ico: "0649",             flags: [FORM_0649]},             // "Burn Drive Genesect", // uknown gender
    "0649-chill"      : {ico: "0649",             flags: [FORM_0649]},             // "Chill Drive Genesect", // uknown gender


    "0003-mega"                         : "Mega Venusaur",
    "0006-mega-x"                       : "Mega Charizard X",
    "0006-mega-y"                       : "Mega Charizard Y",
    "0009-mega"                         : "Mega Blastoise",
    "0015-mega"                         : "Mega Beedrill",
    "0018-mega"                         : "Mega Pidgeot",
    "0025-cosplay"                      : "Cosplay Pikachu", // female only
    "0025-rock-star"                    : "Pikachu Rock Star", // female only
    "0025-belle"                        : "Pikachu Belle", // female only
    "0025-popstar"                      : "Pikachu Pop Star", // female only
    "0025-phd"                          : "Pikachu, Ph. D", // female only
    "0025-libre"                        : "Pikachu Libre", // female only
    "0065-mega"                         : "Mega Alakazam",
    "0080-mega"                         : "Mega Slowbro",
    "0094-mega"                         : "Mega Gengar",
    "0115-mega"                         : "Mega Kangaskhan", // female only
    "0127-mega"                         : "Mega Pinsir",
    "0130-mega"                         : "Mega Gyarados",
    "0142-mega"                         : "Mega Aerodactyl",
    "0150-mega-x"                       : "Mega Mewtwo X", // uknown gender
    "0150-mega-y"                       : "Mega Mewtwo Y", // uknown gender
    "0181-mega"                         : "Mega Ampharos",
    "0208-mega"                         : "Mega Steelix",
    "0212-mega"                         : "Mega Scizor",
    "0214-mega"                         : "Mega Heracross",
    "0229-mega"                         : "Mega Houndoom",
    "0248-mega"                         : "Mega Tyranitar",
    "0254-mega"                         : "Mega Sceptile",
    "0257-mega"                         : "Mega Blaziken",
    "0260-mega"                         : "Mega Swampert",
    "0282-mega"                         : "Mega Gardevoir",
    "0302-mega"                         : "Mega Sableye",
    "0303-mega"                         : "Mega Mawile",
    "0306-mega"                         : "Mega Aggron",
    "0308-mega"                         : "Mega Medicham",
    "0310-mega"                         : "Mega Manectric",
    "0319-mega"                         : "Mega Sharpedo",
    "0323-mega"                         : "Mega Camerupt",
    "0334-mega"                         : "Mega Altaria",
    "0354-mega"                         : "Mega Banette",
    "0359-mega"                         : "Mega Absol",
    "0362-mega"                         : "Mega Glalie",
    "0373-mega"                         : "Mega Salamence",
    "0376-mega"                         : "Mega Metagross", // uknown gender
    "0380-mega"                         : "Mega Latias", // female only
    "0381-mega"                         : "Mega Latios", // male only
    "0382-primal"                       : "Primal Kyogre", // uknown gender
    "0383-primal"                       : "Primal Groudon", // uknown gender
    "0384-mega"                         : "Mega Rayquaza", // uknown gender
    "0428-mega"                         : "Mega Lopunny",
    "0445-mega"                         : "Mega Garchomp",
    "0448-mega"                         : "Mega Lucario",
    "0460-mega"                         : "Mega Abomasnow",
    "0475-mega"                         : "Mega Gallade", // male only
    "0531-mega"                         : "Mega Audino",
	//-----------------------------------
	"0650"                              : "Chespin",
    "0651"                              : "Quilladin",
    "0652"                              : "Chesnaught",
    "0653"                              : "Fennekin",
    "0654"                              : "Braixen",
    "0655"                              : "Delphox",
    "0656"                              : "Froakie",
    "0657"                              : "Frogadier",
    "0658"                              : "Greninja",
    "0658-ash"                          : "Ash-Greninja", // male only
    "0659"                              : "Bunnelby",
    "0660"                              : "Diggersby",
    "0661"                              : "Fletchling",
    "0662"                              : "Fletchinder",
    "0663"                              : "Talonflame",
    "0664"                              : "Scatterbug",
    "0665"                              : "Spewpa",
    "0666"                              : "Vivillon",
    "0666-icy-snow"                     : "Icy Snow Pattern Vivillon",
    "0666-polar"                        : "Polar Pattern Vivillon",
    "0666-tundra"                       : "Tundra Pattern Vivillon",
    "0666-continental"                  : "Continental Pattern Vivillon",
    "0666-garden"                       : "Garden Pattern Vivillon",
    "0666-elegant"                      : "Elegant Pattern Vivillon",
    "0666-meadow"                       : "Meadow Pattern Vivillon",
    "0666-modern"                       : "Modern Pattern Vivillon",
    "0666-marine"                       : "Marine Pattern Vivillon",
    "0666-archipelago"                  : "Archipelago Pattern Vivillon",
    "0666-high-plains"                  : "High Plains Pattern Vivillon",
    "0666-sandstorm"                    : "Sandstorm Pattern Vivillon",
    "0666-river"                        : "River Pattern Vivillon",
    "0666-monsoon"                      : "Monsoon Pattern Vivillon",
    "0666-savanna"                      : "Savanna Pattern Vivillon",
    "0666-sun"                          : "Sun Pattern Vivillon",
    "0666-ocean"                        : "Ocean Pattern Vivillon",
    "0666-jungle"                       : "Jungle Pattern Vivillon",
    "0666-fancy"                        : "Fancy Pattern Vivillon",
    "0666-poke-ball"                    : "Poké Ball Pattern Vivillon",
    "0667"                              : "Litleo",
    "0668"                              : "Pyroar",
    "0668-m"                            : "Pyroar♂",
    "0668-f"                            : "Pyroar♀",
    "0669"                              : "Flabébé", // female only
    "0669-red"                          : "Red Flower Flabébé", // female only
    "0669-yellow"                       : "Yellow Flower Flabébé", // female only
    "0669-orange"                       : "Orange Flower Flabébé", // female only
    "0669-blue"                         : "Blue Flower Flabébé", // female only
    "0669-white"                        : "White Flower Flabébé", // female only
    "0670"                              : "Floette", // female only
    "0670-red"                          : "Red Flower Floette", // female only
    "0670-yellow"                       : "Yellow Flower Floette", // female only
    "0670-orange"                       : "Orange Flower Floette", // female only
    "0670-blue"                         : "Blue Flower Floette", // female only
    "0670-white"                        : "White Flower Floette", // female only
    "0670-eternal"                      : "Eternal Flower Floette", // female only
    "0671"                              : "Florges", // female only
    "0671-red"                          : "Red Flower Florges", // female only
    "0671-yellow"                       : "Yellow Flower Florges", // female only
    "0671-orange"                       : "Orange Flower Florges", // female only
    "0671-blue"                         : "Blue Flower Florges", // female only
    "0671-white"                        : "White Flower Florges", // female only
    "0672"                              : "Skiddo",
    "0673"                              : "Gogoat",
    "0674"                              : "Pancham",
    "0675"                              : "Pangoro",
    "0676"                              : "Furfrou",
    "0676-heart"                        : "Heart Trim Furfrou",
    "0676-star"                         : "Star Trim Furfrou",
    "0676-diamond"                      : "Diamond Trim Furfrou",
    "0676-debutante"                    : "Debutante Trim Furfrou",
    "0676-matron"                       : "Matron Trim Furfrou",
    "0676-dandy"                        : "Dandy Trim Furfrou",
    "0676-le-reine"                     : "Le Reine Trim Furfrou",
    "0676-kabuki"                       : "Kabuki Trim Furfrou",
    "0676-pharaoh"                      : "Pharaoh Trim Furfrou",
    "0677"                              : "Espurr",
    "0678"                              : "Meowstic",
    "0678-m"                            : "Meowstic♂",
    "0678-f"                            : "Meowstic♀",
    "0679"                              : "Honedge",
    "0680"                              : "Doublade",
    "0681"                              : "Aegislash",
    "0681-shield"                       : "Shield Aegislash",
    "0681-blade"                        : "Blade Aegislash",
    "0682"                              : "Spritzee",
    "0683"                              : "Aromatisse",
    "0684"                              : "Swirlix",
    "0685"                              : "Slurpuff",
    "0686"                              : "Inkay",
    "0687"                              : "Malamar",
    "0688"                              : "Binacle",
    "0689"                              : "Barbaracle",
    "0690"                              : "Skrelp",
    "0691"                              : "Dragalge",
    "0692"                              : "Clauncher",
    "0693"                              : "Clawitzer",
    "0694"                              : "Helioptile",
    "0695"                              : "Heliolisk",
    "0696"                              : "Tyrunt",
    "0697"                              : "Tyrantrum",
    "0698"                              : "Amaura",
    "0699"                              : "Aurorus",
    "0700"                              : "Sylveon",
    "0701"                              : "Hawlucha",
    "0702"                              : "Dedenne",
    "0703"                              : "Carbink", // uknown gender
    "0704"                              : "Goomy",
    "0705"                              : "Sliggoo",
    "0706"                              : "Goodra",
    "0707"                              : "Klefki",
    "0708"                              : "Phantump",
    "0709"                              : "Trevenant",
    "0710"                              : "Pumpkaboo",
    "0710-average"                      : "Average Size Pumpkaboo",
    "0710-small"                        : "Small Size Pumpkaboo",
    "0710-large"                        : "Large Size Pumpkaboo",
    "0710-super"                        : "Super Size Pumpkaboo",
    "0711"                              : "Gourgeist",
    "0711-average"                      : "Average Size Gourgeist",
    "0711-small"                        : "Small Size Gourgeist",
    "0711-large"                        : "Large Size Gourgeist",
    "0711-super"                        : "Super Size Gourgeist",
    "0712"                              : "Bergmite",
    "0713"                              : "Avalugg",
    "0714"                              : "Noibat",
    "0715"                              : "Noivern",
    "0716"                              : "Xerneas", // uknown gender
    "0716-neutral"                      : "Neutral Xerneas", // uknown gender
    "0716-active"                       : "Active Xerneas", // uknown gender
    "0717"                              : "Yveltal", // uknown gender
    "0718"                              : "Zygarde", // uknown gender
    "0718-50"                           : "50% Zygarde", // uknown gender
    "0718-10"                           : "10% Zygarde", // uknown gender
    "0718-complete"                     : "Complete Zygarde", // uknown gender
    "0718-core"                         : "Zygarde Core", // uknown gender// uncatchable
    "0718-cell"                         : "Zygarde Cell", // uknown gender// uncatchable
    "0719"                              : "Diancie", // uknown gender
    "0719-mega"                         : "Mega Diancie", // uknown gender
    "0720"                              : "Hoopa", // uknown gender
    "0720-confined"                     : "Hoopa Confined", // uknown gender
    "0720-unbound"                      : "Hoopa Unbound", // uknown gender
    "0721"                              : "Volcanion", // uknown gender
}

//============================================================================
// REGIONAL POKEDEX
//============================================================================
const _Regdex_r_601 =
{
}