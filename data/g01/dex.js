//============================================================================
// POKEMON INDEX
//============================================================================
var MON =
{
	BULBASAUR :   1, IVYSAUR   :   2, VENUSAUR  :   3, CHARMANDER:   4, CHARMELEON:   5,
	CHARIZARD :   6, SQUIRTLE  :   7, WARTORTLE :   8, BLASTOISE :   9, CATERPIE  :  10,
	METAPOD   :  11, BUTTERFREE:  12, WEEDLE    :  13, KAKUNA    :  14, BEEDRILL  :  15,
	PIDGEY    :  16, PIDGEOTTO :  17, PIDGEOT   :  18, RATTATA   :  19, RATICATE  :  20,
	SPEAROW   :  21, FEAROW    :  22, EKANS     :  23, ARBOK     :  24, PIKACHU   :  25,
	RAICHU    :  26, SANDSHREW :  27, SANDSLASH :  28, NIDORAN_F :  29, NIDORINA  :  30,
	NIDOQUEEN :  31, NIDORAN_M :  32, NIDORINO  :  33, NIDOKING  :  34, CLEFAIRY  :  35,
	CLEFABLE  :  36, VULPIX    :  37, NINETALES :  38, JIGGLYPUFF:  39, WIGGLYTUFF:  40,
	ZUBAT     :  41, GOLBAT    :  42, ODDISH    :  43, GLOOM     :  44, VILEPLUME :  45,
	PARAS     :  46, PARASECT  :  47, VENONAT   :  48, VENOMOTH  :  49, DIGLETT   :  50,
	DUGTRIO   :  51, MEOWTH    :  52, PERSIAN   :  53, PSYDUCK   :  54, GOLDUCK   :  55,
	MANKEY    :  56, PRIMEAPE  :  57, GROWLITHE :  58, ARCANINE  :  59, POLIWAG   :  60,
	POLIWHIRL :  61, POLIWRATH :  62, ABRA      :  63, KADABRA   :  64, ALAKAZAM  :  65,
	MACHOP    :  66, MACHOKE   :  67, MACHAMP   :  68, BELLSPROUT:  69, WEEPINBELL:  70,
	VICTREEBEL:  71, TENTACOOL :  72, TENTACRUEL:  73, GEODUDE   :  74, GRAVELER  :  75,
	GOLEM     :  76, PONYTA    :  77, RAPIDASH  :  78, SLOWPOKE  :  79, SLOWBRO   :  80,
	MAGNEMITE :  81, MAGNETON  :  82, FARFETCH_D:  83, DODUO     :  84, DODRIO    :  85,
	SEEL      :  86, DEWGONG   :  87, GRIMER    :  88, MUK       :  89, SHELLDER  :  90,
	CLOYSTER  :  91, GASTLY    :  92, HAUNTER   :  93, GENGAR    :  94, ONIX      :  95,
	DROWZEE   :  96, HYPNO     :  97, KRABBY    :  98, KINGLER   :  99, VOLTORB   : 100,
	ELECTRODE : 101, EXEGGCUTE : 102, EXEGGUTOR : 103, CUBONE    : 104, MAROWAK   : 105,
	HITMONLEE : 106, HITMONCHAN: 107, LICKITUNG : 108, KOFFING   : 109, WEEZING   : 110,
	RHYHORN   : 111, RHYDON    : 112, CHANSEY   : 113, TANGELA   : 114, KANGASKHAN: 115,
	HORSEA    : 116, SEADRA    : 117, GOLDEEN   : 118, SEAKING   : 119, STARYU    : 120,
	STARMIE   : 121, MR_MIME   : 122, SCYTHER   : 123, JYNX      : 124, ELECTABUZZ: 125,
	MAGMAR    : 126, PINSIR    : 127, TAUROS    : 128, MAGIKARP  : 129, GYARADOS  : 130,
	LAPRAS    : 131, DITTO     : 132, EEVEE     : 133, VAPOREON  : 134, JOLTEON   : 135,
	FLAREON   : 136, PORYGON   : 137, OMANYTE   : 138, OMASTAR   : 139, KABUTO    : 140,
	KABUTOPS  : 141, AERODACTYL: 142, SNORLAX   : 143, ARTICUNO  : 144, ZAPDOS    : 145,
	MOLTRES   : 146, DRATINI   : 147, DRAGONAIR : 148, DRAGONITE : 149, MEWTWO    : 150,
	MEW       : 151,
};

//============================================================================
// NATIONAL POKEDEX
//============================================================================
var DEX_LIST = {[GAME.Re]:
{
	[MON.BULBASAUR ]: {	"": {ico: "custom/07_grn",   name: "Bulbasaur",  flags: []}},
	[MON.IVYSAUR   ]: {	"": {ico: "custom/07_grn",   name: "Ivysaur",    flags: []}},
	[MON.VENUSAUR  ]: {	"": {ico: "custom/07_grn",   name: "Venusaur",   flags: []}},
	[MON.CHARMANDER]: {	"": {ico: "custom/00_red",   name: "Charmander", flags: []}},
	[MON.CHARMELEON]: {	"": {ico: "custom/00_red",   name: "Charmeleon", flags: []}},
	[MON.CHARIZARD ]: {	"": {ico: "custom/00_red",   name: "Charizard",  flags: []}},
	[MON.SQUIRTLE  ]: {	"": {ico: "custom/05_cyn",   name: "Squirtle",   flags: []}},
	[MON.WARTORTLE ]: {	"": {ico: "custom/05_cyn",   name: "Wartortle",  flags: []}},
	[MON.BLASTOISE ]: {	"": {ico: "custom/05_cyn",   name: "Blastoise",  flags: []}},
	[MON.CATERPIE  ]: {	"": {ico: "custom/06_grn",   name: "Caterpie",   flags: []}},
	[MON.METAPOD   ]: {	"": {ico: "custom/06_grn",   name: "Metapod",    flags: []}},
	[MON.BUTTERFREE]: {	"": {ico: "custom/06_cyn",   name: "Butterfree", flags: []}},
	[MON.WEEDLE    ]: {	"": {ico: "custom/06_ylw",   name: "Weedle",     flags: []}},
	[MON.KAKUNA    ]: {	"": {ico: "custom/06_ylw",   name: "Kakuna",     flags: []}},
	[MON.BEEDRILL  ]: {	"": {ico: "custom/06_ylw",   name: "Beedrill",   flags: []}},
	[MON.PIDGEY    ]: {	"": {ico: "custom/04_brn",   name: "Pidgey",     flags: []}},
	[MON.PIDGEOTTO ]: {	"": {ico: "custom/04_brn",   name: "Pidgeotto",  flags: []}},
	[MON.PIDGEOT   ]: {	"": {ico: "custom/04_brn",   name: "Pidgeot",    flags: []}},
	[MON.RATTATA   ]: {	"": {ico: "custom/09_gry",   name: "Rattata",    flags: []}},
	[MON.RATICATE  ]: {	"": {ico: "custom/09_gry",   name: "Raticate",   flags: []}},
	[MON.SPEAROW   ]: {	"": {ico: "custom/04_brn",   name: "Spearow",    flags: []}},
	[MON.FEAROW    ]: {	"": {ico: "custom/04_brn",   name: "Fearow",     flags: []}},
	[MON.EKANS     ]: {	"": {ico: "custom/08_pur",   name: "Ekans",      flags: []}},
	[MON.ARBOK     ]: {	"": {ico: "custom/08_pur",   name: "Arbok",      flags: []}},
	[MON.PIKACHU   ]: {	"": {ico: "custom/03_ylw",   name: "Pikachu",    flags: []}},
	[MON.RAICHU    ]: {	"": {ico: "custom/03_ylw",   name: "Raichu",     flags: []}},
	[MON.SANDSHREW ]: {	"": {ico: "custom/00_brn",   name: "Sandshrew",  flags: []}},
	[MON.SANDSLASH ]: {	"": {ico: "custom/00_brn",   name: "Sandslash",  flags: []}},
	[MON.NIDORAN_F ]: {	"": {ico: "custom/00_blu",   name: "Nidoran♀",   flags: []}},
	[MON.NIDORINA  ]: {	"": {ico: "custom/00_blu",   name: "Nidorina",   flags: []}},
	[MON.NIDOQUEEN ]: {	"": {ico: "custom/00_blu",   name: "Nidoqueen",  flags: []}},
	[MON.NIDORAN_M ]: {	"": {ico: "custom/00_pur",   name: "Nidoran♂",   flags: []}},
	[MON.NIDORINO  ]: {	"": {ico: "custom/00_pur",   name: "Nidorino",   flags: []}},
	[MON.NIDOKING  ]: {	"": {ico: "custom/00_pur",   name: "Nidoking",   flags: []}},
	[MON.CLEFAIRY  ]: {	"": {ico: "custom/03_pnk",   name: "Clefairy",   flags: []}},
	[MON.CLEFABLE  ]: {	"": {ico: "custom/03_pnk",   name: "Clefable",   flags: []}},
	[MON.VULPIX    ]: {	"": {ico: "custom/09_red",   name: "Vulpix",     flags: []}},
	[MON.NINETALES ]: {	"": {ico: "custom/09_ylw",   name: "Ninetales",  flags: []}},
	[MON.JIGGLYPUFF]: {	"": {ico: "custom/03_pnk",   name: "Jigglypuff", flags: []}},
	[MON.WIGGLYTUFF]: {	"": {ico: "custom/03_pnk",   name: "Wigglytuff", flags: []}},
	[MON.ZUBAT     ]: {	"": {ico: "custom/00_blu",   name: "Zubat",      flags: []}},
	[MON.GOLBAT    ]: {	"": {ico: "custom/00_blu",   name: "Golbat",     flags: []}},
	[MON.ODDISH    ]: {	"": {ico: "custom/07_grn",   name: "Oddish",     flags: []}},
	[MON.GLOOM     ]: {	"": {ico: "custom/07_red",   name: "Gloom",      flags: []}},
	[MON.VILEPLUME ]: {	"": {ico: "custom/07_red",   name: "Vileplume",  flags: []}},
	[MON.PARAS     ]: {	"": {ico: "custom/06_red",   name: "Paras",      flags: []}},
	[MON.PARASECT  ]: {	"": {ico: "custom/06_red",   name: "Parasect",   flags: []}},
	[MON.VENONAT   ]: {	"": {ico: "custom/06_pur",   name: "Venonat",    flags: []}},
	[MON.VENOMOTH  ]: {	"": {ico: "custom/06_pur",   name: "Venomoth",   flags: []}},
	[MON.DIGLETT   ]: {	"": {ico: "custom/00_brn",   name: "Diglett",    flags: []}},
	[MON.DUGTRIO   ]: {	"": {ico: "custom/00_brn",   name: "Dugtrio",    flags: []}},
	[MON.MEOWTH    ]: {	"": {ico: "custom/00_ylw",   name: "Meowth",     flags: []}},
	[MON.PERSIAN   ]: {	"": {ico: "custom/00_ylw",   name: "Persian",    flags: []}},
	[MON.PSYDUCK   ]: {	"": {ico: "custom/00_ylw",   name: "Psyduck",    flags: []}},
	[MON.GOLDUCK   ]: {	"": {ico: "custom/00_cyn",   name: "Golduck",    flags: []}},
	[MON.MANKEY    ]: {	"": {ico: "custom/00_brn",   name: "Mankey",     flags: []}},
	[MON.PRIMEAPE  ]: {	"": {ico: "custom/00_brn",   name: "Primeape",   flags: []}},
	[MON.GROWLITHE ]: {	"": {ico: "custom/09_brn",   name: "Growlithe",  flags: []}},
	[MON.ARCANINE  ]: {	"": {ico: "custom/09_red",   name: "Arcanine",   flags: []}},
	[MON.POLIWAG   ]: {	"": {ico: "custom/00_blu",   name: "Poliwag",    flags: []}},
	[MON.POLIWHIRL ]: {	"": {ico: "custom/00_blu",   name: "Poliwhirl",  flags: []}},
	[MON.POLIWRATH ]: {	"": {ico: "custom/00_blu",   name: "Poliwrath",  flags: []}},
	[MON.ABRA      ]: {	"": {ico: "custom/00_ylw",   name: "Abra",       flags: []}},
	[MON.KADABRA   ]: {	"": {ico: "custom/00_ylw",   name: "Kadabra",    flags: []}},
	[MON.ALAKAZAM  ]: {	"": {ico: "custom/00_ylw",   name: "Alakazam",   flags: []}},
	[MON.MACHOP    ]: {	"": {ico: "custom/00_gry",   name: "Machop",     flags: []}},
	[MON.MACHOKE   ]: {	"": {ico: "custom/00_gry",   name: "Machoke",    flags: []}},
	[MON.MACHAMP   ]: {	"": {ico: "custom/00_gry",   name: "Machamp",    flags: []}},
	[MON.BELLSPROUT]: {	"": {ico: "custom/07_grn",   name: "Bellsprout", flags: []}},
	[MON.WEEPINBELL]: {	"": {ico: "custom/07_grn",   name: "Weepinbell", flags: []}},
	[MON.VICTREEBEL]: {	"": {ico: "custom/07_grn",   name: "Victreebel", flags: []}},
	[MON.TENTACOOL ]: {	"": {ico: "custom/05_cyn",   name: "Tentacool",  flags: []}},
	[MON.TENTACRUEL]: {	"": {ico: "custom/05_cyn",   name: "Tentacruel", flags: []}},
	[MON.GEODUDE   ]: {	"": {ico: "custom/00_gry",   name: "Geodude",    flags: []}},
	[MON.GRAVELER  ]: {	"": {ico: "custom/00_gry",   name: "Graveler",   flags: []}},
	[MON.GOLEM     ]: {	"": {ico: "custom/00_gry",   name: "Golem",      flags: []}},
	[MON.PONYTA    ]: {	"": {ico: "custom/09_red",   name: "Ponyta",     flags: []}},
	[MON.RAPIDASH  ]: {	"": {ico: "custom/09_red",   name: "Rapidash",   flags: []}},
	[MON.SLOWPOKE  ]: {	"": {ico: "custom/09_pnk",   name: "Slowpoke",   flags: []}},
	[MON.SLOWBRO   ]: {	"": {ico: "custom/00_pnk",   name: "Slowbro",    flags: []}},
	[MON.MAGNEMITE ]: {	"": {ico: "custom/01_gry",   name: "Magnemite",  flags: []}},
	[MON.MAGNETON  ]: {	"": {ico: "custom/01_gry",   name: "Magneton",   flags: []}},
	[MON.FARFETCH_D]: {	"": {ico: "custom/04_brn",   name: "Farfetch'd", flags: []}},
	[MON.DODUO     ]: {	"": {ico: "custom/04_brn",   name: "Doduo",      flags: []}},
	[MON.DODRIO    ]: {	"": {ico: "custom/04_brn",   name: "Dodrio",     flags: []}},
	[MON.SEEL      ]: {	"": {ico: "custom/05_blu",   name: "Seel",       flags: []}},
	[MON.DEWGONG   ]: {	"": {ico: "custom/05_blu",   name: "Dewgong",    flags: []}},
	[MON.GRIMER    ]: {	"": {ico: "custom/00_pur",   name: "Grimer",     flags: []}},
	[MON.MUK       ]: {	"": {ico: "custom/00_pur",   name: "Muk",        flags: []}},
	[MON.SHELLDER  ]: {	"": {ico: "custom/02_gry",   name: "Shellder",   flags: []}},
	[MON.CLOYSTER  ]: {	"": {ico: "custom/02_gry",   name: "Cloyster",   flags: []}},
	[MON.GASTLY    ]: {	"": {ico: "custom/00_pur",   name: "Gastly",     flags: []}},
	[MON.HAUNTER   ]: {	"": {ico: "custom/00_pur",   name: "Haunter",    flags: []}},
	[MON.GENGAR    ]: {	"": {ico: "custom/00_pur",   name: "Gengar",     flags: []}},
	[MON.ONIX      ]: {	"": {ico: "custom/08_gry",   name: "Onix",       flags: []}},
	[MON.DROWZEE   ]: {	"": {ico: "custom/00_ylw",   name: "Drowzee",    flags: []}},
	[MON.HYPNO     ]: {	"": {ico: "custom/00_ylw",   name: "Hypno",      flags: []}},
	[MON.KRABBY    ]: {	"": {ico: "custom/05_red",   name: "Krabby",     flags: []}},
	[MON.KINGLER   ]: {	"": {ico: "custom/05_red",   name: "Kingler",    flags: []}},
	[MON.VOLTORB   ]: {	"": {ico: "custom/01_ylw",   name: "Voltorb",    flags: []}},
	[MON.ELECTRODE ]: {	"": {ico: "custom/01_ylw",   name: "Electrode",  flags: []}},
	[MON.EXEGGCUTE ]: {	"": {ico: "custom/07_pnk",   name: "Exeggcute",  flags: []}},
	[MON.EXEGGUTOR ]: {	"": {ico: "custom/07_grn",   name: "Exeggutor",  flags: []}},
	[MON.CUBONE    ]: {	"": {ico: "custom/00_gry",   name: "Cubone",     flags: []}},
	[MON.MAROWAK   ]: {	"": {ico: "custom/00_gry",   name: "Marowak",    flags: []}},
	[MON.HITMONLEE ]: {	"": {ico: "custom/00_brn",   name: "Hitmonlee",  flags: []}},
	[MON.HITMONCHAN]: {	"": {ico: "custom/00_brn",   name: "Hitmonchan", flags: []}},
	[MON.LICKITUNG ]: {	"": {ico: "custom/00_pnk",   name: "Lickitung",  flags: []}},
	[MON.KOFFING   ]: {	"": {ico: "custom/00_pur",   name: "Koffing",    flags: []}},
	[MON.WEEZING   ]: {	"": {ico: "custom/00_pur",   name: "Weezing",    flags: []}},
	[MON.RHYHORN   ]: {	"": {ico: "custom/09_gry",   name: "Rhyhorn",    flags: []}},
	[MON.RHYDON    ]: {	"": {ico: "custom/00_gry",   name: "Rhydon",     flags: []}},
	[MON.CHANSEY   ]: {	"": {ico: "custom/03_pnk",   name: "Chansey",    flags: []}},
	[MON.TANGELA   ]: {	"": {ico: "custom/07_blu",   name: "Tangela",    flags: []}},
	[MON.KANGASKHAN]: {	"": {ico: "custom/00_brn",   name: "Kangaskhan", flags: []}},
	[MON.HORSEA    ]: {	"": {ico: "custom/05_cyn",   name: "Horsea",     flags: []}},
	[MON.SEADRA    ]: {	"": {ico: "custom/05_cyn",   name: "Seadra",     flags: []}},
	[MON.GOLDEEN   ]: {	"": {ico: "custom/05_red",   name: "Goldeen",    flags: []}},
	[MON.SEAKING   ]: {	"": {ico: "custom/05_red",   name: "Seaking",    flags: []}},
	[MON.STARYU    ]: {	"": {ico: "custom/02_red",   name: "Staryu",     flags: []}},
	[MON.STARMIE   ]: {	"": {ico: "custom/02_gry",   name: "Starmie",    flags: []}},
	[MON.MR_MIME   ]: {	"": {ico: "custom/00_pnk",   name: "Mr. Mime",   flags: []}},
	[MON.SCYTHER   ]: {	"": {ico: "custom/06_grn",   name: "Scyther",    flags: []}},
	[MON.JYNX      ]: {	"": {ico: "custom/00_mew",   name: "Jynx",       flags: []}},
	[MON.ELECTABUZZ]: {	"": {ico: "custom/00_ylw",   name: "Electabuzz", flags: []}},
	[MON.MAGMAR    ]: {	"": {ico: "custom/00_red",   name: "Magmar",     flags: []}},
	[MON.PINSIR    ]: {	"": {ico: "custom/06_brn",   name: "Pinsir",     flags: []}},
	[MON.TAUROS    ]: {	"": {ico: "custom/09_gry",   name: "Tauros",     flags: []}},
	[MON.MAGIKARP  ]: {	"": {ico: "custom/05_red",   name: "Magikarp",   flags: []}},
	[MON.GYARADOS  ]: {	"": {ico: "custom/08_blu",   name: "Gyarados",   flags: []}},
	[MON.LAPRAS    ]: {	"": {ico: "custom/05_cyn",   name: "Lapras",     flags: []}},
	[MON.DITTO     ]: {	"": {ico: "custom/00_gry",   name: "Ditto",      flags: []}},
	[MON.EEVEE     ]: {	"": {ico: "custom/09_gry",   name: "Eevee",      flags: []}},
	[MON.VAPOREON  ]: {	"": {ico: "custom/09_cyn",   name: "Vaporeon",   flags: []}},
	[MON.JOLTEON   ]: {	"": {ico: "custom/09_ylw",   name: "Jolteon",    flags: []}},
	[MON.FLAREON   ]: {	"": {ico: "custom/09_red",   name: "Flareon",    flags: []}},
	[MON.PORYGON   ]: {	"": {ico: "custom/00_gry",   name: "Porygon",    flags: []}},
	[MON.OMANYTE   ]: {	"": {ico: "custom/02_blu",   name: "Omanyte",    flags: []}},
	[MON.OMASTAR   ]: {	"": {ico: "custom/02_blu",   name: "Omastar",    flags: []}},
	[MON.KABUTO    ]: {	"": {ico: "custom/02_brn",   name: "Kabuto",     flags: []}},
	[MON.KABUTOPS  ]: {	"": {ico: "custom/02_brn",   name: "Kabutops",   flags: []}},
	[MON.AERODACTYL]: {	"": {ico: "custom/04_gry",   name: "Aerodactyl", flags: []}},
	[MON.SNORLAX   ]: {	"": {ico: "custom/0143_pnk", name: "Snorlax",    flags: []}},
	[MON.ARTICUNO  ]: {	"": {ico: "custom/04_blu",   name: "Articuno",   flags: []}},
	[MON.ZAPDOS    ]: {	"": {ico: "custom/04_ylw",   name: "Zapdos",     flags: []}},
	[MON.MOLTRES   ]: {	"": {ico: "custom/04_red",   name: "Moltres",    flags: []}},
	[MON.DRATINI   ]: {	"": {ico: "custom/08_gry",   name: "Dratini",    flags: []}},
	[MON.DRAGONAIR ]: {	"": {ico: "custom/08_blu",   name: "Dragonair",  flags: []}},
	[MON.DRAGONITE ]: {	"": {ico: "custom/08_brn",   name: "Dragonite",  flags: []}},
	[MON.MEWTWO    ]: {	"": {ico: "custom/00_mew",   name: "Mewtwo",     flags: []}},
	[MON.MEW       ]: {	"": {ico: "custom/00_mew",   name: "Mew",        flags: []}},
}};

DEX_LIST[GAME.Bl] = CopyObject(DEX_LIST[GAME.Re]);
DEX_LIST[GAME.Ye] = CopyObject(DEX_LIST[GAME.Re]);

DEX_LIST[GAME.Ye][MON.PIKACHU   ][""]["ico"] = "custom/10_ylw";
DEX_LIST[GAME.Ye][MON.RAICHU    ][""]["ico"] = "custom/10_ylw";
DEX_LIST[GAME.Ye][MON.CLEFAIRY  ][""]["ico"] = "custom/0035_pnk";
DEX_LIST[GAME.Ye][MON.CLEFABLE  ][""]["ico"] = "custom/0035_pnk";
DEX_LIST[GAME.Ye][MON.JIGGLYPUFF][""]["ico"] = "custom/0039_pnk";
DEX_LIST[GAME.Ye][MON.WIGGLYTUFF][""]["ico"] = "custom/0039_pnk";
DEX_LIST[GAME.Ye][MON.ODDISH    ][""]["ico"] = "custom/0043_grn";
DEX_LIST[GAME.Ye][MON.GLOOM     ][""]["ico"] = "custom/0043_red";
DEX_LIST[GAME.Ye][MON.VILEPLUME ][""]["ico"] = "custom/0043_red";
DEX_LIST[GAME.Ye][MON.CHANSEY   ][""]["ico"] = "custom/0113_pnk";