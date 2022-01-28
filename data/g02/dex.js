//============================================================================
// POKEMON INDEX
//============================================================================
MON =
{
	...CopyObject(MON),
	CHIKORITA : 152,	BAYLEEF   : 153,	MEGANIUM  : 154,	CYNDAQUIL : 155,
	QUILAVA   : 156,	TYPHLOSION: 157,	TOTODILE  : 158,	CROCONAW  : 159,
	FERALIGATR: 160,	SENTRET   : 161,	FURRET    : 162,	HOOTHOOT  : 163,
	NOCTOWL   : 164,	LEDYBA    : 165,	LEDIAN    : 166,	SPINARAK  : 167,
	ARIADOS   : 168,	CROBAT    : 169,	CHINCHOU  : 170,	LANTURN   : 171,
	PICHU     : 172,	CLEFFA    : 173,	IGGLYBUFF : 174,	TOGEPI    : 175,
	TOGETIC   : 176,	NATU      : 177,	XATU      : 178,	MAREEP    : 179,
	FLAAFFY   : 180,	AMPHAROS  : 181,	BELLOSSOM : 182,	MARILL    : 183,
	AZUMARILL : 184,	SUDOWOODO : 185,	POLITOED  : 186,	HOPPIP    : 187,
	SKIPLOOM  : 188,	JUMPLUFF  : 189,	AIPOM     : 190,	SUNKERN   : 191,
	SUNFLORA  : 192,	YANMA     : 193,	WOOPER    : 194,	QUAGSIRE  : 195,
	ESPEON    : 196,	UMBREON   : 197,	MURKROW   : 198,	SLOWKING  : 199,
	MISDREAVUS: 200,	UNOWN     : 201,	WOBBUFFET : 202,	GIRAFARIG : 203,
	PINECO    : 204,	FORRETRESS: 205,	DUNSPARCE : 206,	GLIGAR    : 207,
	STEELIX   : 208,	SNUBBULL  : 209,	GRANBULL  : 210,	QWILFISH  : 211,
	SCIZOR    : 212,	SHUCKLE   : 213,	HERACROSS : 214,	SNEASEL   : 215,
	TEDDIURSA : 216,	URSARING  : 217,	SLUGMA    : 218,	MAGCARGO  : 219,
	SWINUB    : 220,	PILOSWINE : 221,	CORSOLA   : 222,	REMORAID  : 223,
	OCTILLERY : 224,	DELIBIRD  : 225,	MANTINE   : 226,	SKARMORY  : 227,
	HOUNDOUR  : 228,	HOUNDOOM  : 229,	KINGDRA   : 230,	PHANPY    : 231,
	DONPHAN   : 232,	PORYGON2  : 233,	STANTLER  : 234,	SMEARGLE  : 235,
	TYROGUE   : 236,	HITMONTOP : 237,	SMOOCHUM  : 238,	ELEKID    : 239,
	MAGBY     : 240,	MILTANK   : 241,	BLISSEY   : 242,	RAIKOU    : 243,
	ENTEI     : 244,	SUICUNE   : 245,	LARVITAR  : 246,	PUPITAR   : 247,
	TYRANITAR : 248,	LUGIA     : 249,	HO_OH     : 250,	CELEBI    : 251
};

//============================================================================
// NATIONAL POKEDEX
//============================================================================
DEX_LIST = {...CopyObject(DEX_LIST),
[GAME.Go]:
{
	...CopyObject(DEX_LIST[GAME.Ye]),
	[MON.CHIKORITA ]: {	""         : {ico: "10", name: "Chikorita",      flags: []}},
	[MON.BAYLEEF   ]: {	""         : {ico: "10", name: "Bayleef",        flags: []}},
	[MON.MEGANIUM  ]: {	""         : {ico: "10", name: "Meganium",       flags: []}},
	[MON.CYNDAQUIL ]: {	""         : {ico: "15", name: "Cyndaquil",      flags: []}},
	[MON.QUILAVA   ]: {	""         : {ico: "15", name: "Quilava",        flags: []}},
	[MON.TYPHLOSION]: {	""         : {ico: "15", name: "Typhlosion",     flags: []}},
	[MON.TOTODILE  ]: {	""         : {ico: "08", name: "Totodile",       flags: []}},
	[MON.CROCONAW  ]: {	""         : {ico: "08", name: "Croconaw",       flags: []}},
	[MON.FERALIGATR]: {	""         : {ico: "08", name: "Feraligatr",     flags: []}},
	[MON.SENTRET   ]: {	""         : {ico: "15", name: "Sentret",        flags: []}},
	[MON.FURRET    ]: {	""         : {ico: "15", name: "Furret",         flags: []}},
	[MON.HOOTHOOT  ]: {	""         : {ico: "07", name: "Hoothoot",       flags: []}},
	[MON.NOCTOWL   ]: {	""         : {ico: "07", name: "Noctowl",        flags: []}},
	[MON.LEDYBA    ]: {	""         : {ico: "11", name: "Ledyba",         flags: []}},
	[MON.LEDIAN    ]: {	""         : {ico: "11", name: "Ledian",         flags: []}},
	[MON.SPINARAK  ]: {	""         : {ico: "11", name: "Spinarak",       flags: []}},
	[MON.ARIADOS   ]: {	""         : {ico: "11", name: "Ariados",        flags: []}},
	[MON.CROBAT    ]: {	""         : {ico: "31", name: "Crobat",         flags: []}},
	[MON.CHINCHOU  ]: {	""         : {ico: "06", name: "Chinchou",       flags: []}},
	[MON.LANTURN   ]: {	""         : {ico: "06", name: "Lanturn",        flags: []}},
	[MON.PICHU     ]: {	""         : {ico: "04", name: "Pichu",          flags: []}},
	[MON.CLEFFA    ]: {	""         : {ico: "09", name: "Cleffa",         flags: []}},
	[MON.IGGLYBUFF ]: {	""         : {ico: "02", name: "Igglybuff",      flags: []}},
	[MON.TOGEPI    ]: {	""         : {ico: "09", name: "Togepi",         flags: []}},
	[MON.TOGETIC   ]: {	""         : {ico: "07", name: "Togetic",        flags: []}},
	[MON.NATU      ]: {	""         : {ico: "07", name: "Natu",           flags: []}},
	[MON.XATU      ]: {	""         : {ico: "07", name: "Xatu",           flags: []}},
	[MON.MAREEP    ]: {	""         : {ico: "15", name: "Mareep",         flags: []}},
	[MON.FLAAFFY   ]: {	""         : {ico: "08", name: "Flaaffy",        flags: []}},
	[MON.AMPHAROS  ]: {	""         : {ico: "08", name: "Ampharos",       flags: []}},
	[MON.BELLOSSOM ]: {	""         : {ico: "10", name: "Bellossom",      flags: []}},
	[MON.MARILL    ]: {	""         : {ico: "02", name: "Marill",         flags: []}},
	[MON.AZUMARILL ]: {	""         : {ico: "02", name: "Azumarill",      flags: []}},
	[MON.SUDOWOODO ]: {	""         : {ico: "37", name: "Sudowoodo",      flags: []}},
	[MON.POLITOED  ]: {	""         : {ico: "01", name: "Politoed",       flags: []}},
	[MON.HOPPIP    ]: {	""         : {ico: "10", name: "Hoppip",         flags: []}},
	[MON.SKIPLOOM  ]: {	""         : {ico: "10", name: "Skiploom",       flags: []}},
	[MON.JUMPLUFF  ]: {	""         : {ico: "10", name: "Jumpluff",       flags: []}},
	[MON.AIPOM     ]: {	""         : {ico: "08", name: "Aipom",          flags: []}},
	[MON.SUNKERN   ]: {	""         : {ico: "10", name: "Sunkern",        flags: []}},
	[MON.SUNFLORA  ]: {	""         : {ico: "10", name: "Sunflora",       flags: []}},
	[MON.YANMA     ]: {	""         : {ico: "11", name: "Yanma",          flags: []}},
	[MON.WOOPER    ]: {	""         : {ico: "08", name: "Wooper",         flags: []}},
	[MON.QUAGSIRE  ]: {	""         : {ico: "08", name: "Quagsire",       flags: []}},
	[MON.ESPEON    ]: {	""         : {ico: "15", name: "Espeon",         flags: []}},
	[MON.UMBREON   ]: {	""         : {ico: "15", name: "Umbreon",        flags: []}},
	[MON.MURKROW   ]: {	""         : {ico: "07", name: "Murkrow",        flags: []}},
	[MON.SLOWKING  ]: {	""         : {ico: "36", name: "Slowking",       flags: []}},
	[MON.MISDREAVUS]: {	""         : {ico: "12", name: "Misdreavus",     flags: []}},
	[MON.UNOWN     ]: {	""         : {ico: "25", name: "Unown",          flags: [FLAGS.FORM_UNOWN_BASE]},
						"-angry"   : {ico: "25", name: "Unown Angry",    flags: [FLAGS.FORM_UNOWN]},
						"-bear"    : {ico: "25", name: "Unown Bear",     flags: [FLAGS.FORM_UNOWN]},
						"-chase"   : {ico: "25", name: "Unown Chase",    flags: [FLAGS.FORM_UNOWN]},
						"-direct"  : {ico: "25", name: "Unown Direct",   flags: [FLAGS.FORM_UNOWN]},
						"-engage"  : {ico: "25", name: "Unown Engage",   flags: [FLAGS.FORM_UNOWN]},
						"-find"    : {ico: "25", name: "Unown Find",     flags: [FLAGS.FORM_UNOWN]},
						"-give"    : {ico: "25", name: "Unown Give",     flags: [FLAGS.FORM_UNOWN]},
						"-help"    : {ico: "25", name: "Unown Help",     flags: [FLAGS.FORM_UNOWN]},
						"-increase": {ico: "25", name: "Unown Increase", flags: [FLAGS.FORM_UNOWN]},
						"-join"    : {ico: "25", name: "Unown Join",     flags: [FLAGS.FORM_UNOWN]},
						"-keep"    : {ico: "25", name: "Unown Keep",     flags: [FLAGS.FORM_UNOWN]},
						"-laugh"   : {ico: "25", name: "Unown Laugh",    flags: [FLAGS.FORM_UNOWN]},
						"-make"    : {ico: "25", name: "Unown Make",     flags: [FLAGS.FORM_UNOWN]},
						"-nuzzle"  : {ico: "25", name: "Unown Nuzzle",   flags: [FLAGS.FORM_UNOWN]},
						"-observe" : {ico: "25", name: "Unown Observe",  flags: [FLAGS.FORM_UNOWN]},
						"-perform" : {ico: "25", name: "Unown Perform",  flags: [FLAGS.FORM_UNOWN]},
						"-quicken" : {ico: "25", name: "Unown Quicken",  flags: [FLAGS.FORM_UNOWN]},
						"-reassure": {ico: "25", name: "Unown Reassure", flags: [FLAGS.FORM_UNOWN]},
						"-search"  : {ico: "25", name: "Unown Search",   flags: [FLAGS.FORM_UNOWN]},
						"-tell"    : {ico: "25", name: "Unown Tell",     flags: [FLAGS.FORM_UNOWN]},
						"-undo"    : {ico: "25", name: "Unown Undo",     flags: [FLAGS.FORM_UNOWN]},
						"-vanish"  : {ico: "25", name: "Unown Vanish",   flags: [FLAGS.FORM_UNOWN]},
						"-want"    : {ico: "25", name: "Unown Want",     flags: [FLAGS.FORM_UNOWN]},
						"-xxxxx"   : {ico: "25", name: "Unown XXXXX",    flags: [FLAGS.FORM_UNOWN]},
						"-yield"   : {ico: "25", name: "Unown Yield",    flags: [FLAGS.FORM_UNOWN]},
						"-zoom"    : {ico: "25", name: "Unown Zoom",     flags: [FLAGS.FORM_UNOWN]}},
	[MON.WOBBUFFET ]: {	""         : {ico: "12", name: "Wobbuffet",      flags: []}},
	[MON.GIRAFARIG ]: {	""         : {ico: "16", name: "Girafarig",      flags: []}},
	[MON.PINECO    ]: {	""         : {ico: "11", name: "Pineco",         flags: []}},
	[MON.FORRETRESS]: {	""         : {ico: "11", name: "Forretress",     flags: []}},
	[MON.DUNSPARCE ]: {	""         : {ico: "19", name: "Dunsparce",      flags: []}},
	[MON.GLIGAR    ]: {	""         : {ico: "11", name: "Gligar",         flags: []}},
	[MON.STEELIX   ]: {	""         : {ico: "19", name: "Steelix",        flags: []}},
	[MON.SNUBBULL  ]: {	""         : {ico: "08", name: "Snubbull",       flags: []}},
	[MON.GRANBULL  ]: {	""         : {ico: "08", name: "Granbull",       flags: []}},
	[MON.QWILFISH  ]: {	""         : {ico: "06", name: "Qwilfish",       flags: []}},
	[MON.SCIZOR    ]: {	""         : {ico: "11", name: "Scizor",         flags: []}},
	[MON.SHUCKLE   ]: {	""         : {ico: "11", name: "Shuckle",        flags: []}},
	[MON.HERACROSS ]: {	""         : {ico: "11", name: "Heracross",      flags: []}},
	[MON.SNEASEL   ]: {	""         : {ico: "15", name: "Sneasel",        flags: []}},
	[MON.TEDDIURSA ]: {	""         : {ico: "08", name: "Teddiursa",      flags: []}},
	[MON.URSARING  ]: {	""         : {ico: "08", name: "Ursaring",       flags: []}},
	[MON.SLUGMA    ]: {	""         : {ico: "18", name: "Slugma",         flags: []}},
	[MON.MAGCARGO  ]: {	""         : {ico: "18", name: "Magcargo",       flags: []}},
	[MON.SWINUB    ]: {	""         : {ico: "16", name: "Swinub",         flags: []}},
	[MON.PILOSWINE ]: {	""         : {ico: "16", name: "Piloswine",      flags: []}},
	[MON.CORSOLA   ]: {	""         : {ico: "17", name: "Corsola",        flags: []}},
	[MON.REMORAID  ]: {	""         : {ico: "06", name: "Remoraid",       flags: []}},
	[MON.OCTILLERY ]: {	""         : {ico: "06", name: "Octillery",      flags: []}},
	[MON.DELIBIRD  ]: {	""         : {ico: "08", name: "Delibird",       flags: []}},
	[MON.MANTINE   ]: {	""         : {ico: "06", name: "Mantine",        flags: []}},
	[MON.SKARMORY  ]: {	""         : {ico: "07", name: "Skarmory",       flags: []}},
	[MON.HOUNDOUR  ]: {	""         : {ico: "15", name: "Houndour",       flags: []}},
	[MON.HOUNDOOM  ]: {	""         : {ico: "15", name: "Houndoom",       flags: []}},
	[MON.KINGDRA   ]: {	""         : {ico: "38", name: "Kingdra",        flags: []}},
	[MON.PHANPY    ]: {	""         : {ico: "16", name: "Phanpy",         flags: []}},
	[MON.DONPHAN   ]: {	""         : {ico: "16", name: "Donphan",        flags: []}},
	[MON.PORYGON2  ]: {	""         : {ico: "20", name: "Porygon2",       flags: []}},
	[MON.STANTLER  ]: {	""         : {ico: "16", name: "Stantler",       flags: []}},
	[MON.SMEARGLE  ]: {	""         : {ico: "08", name: "Smeargle",       flags: []}},
	[MON.TYROGUE   ]: {	""         : {ico: "27", name: "Tyrogue",        flags: []}},
	[MON.HITMONTOP ]: {	""         : {ico: "27", name: "Hitmontop",      flags: []}},
	[MON.SMOOCHUM  ]: {	""         : {ico: "14", name: "Smoochum",       flags: []}},
	[MON.ELEKID    ]: {	""         : {ico: "14", name: "Elekid",         flags: []}},
	[MON.MAGBY     ]: {	""         : {ico: "14", name: "Magby",          flags: []}},
	[MON.MILTANK   ]: {	""         : {ico: "16", name: "Miltank",        flags: []}},
	[MON.BLISSEY   ]: {	""         : {ico: "09", name: "Blissey",        flags: []}},
	[MON.RAIKOU    ]: {	""         : {ico: "15", name: "Raikou",         flags: []}},
	[MON.ENTEI     ]: {	""         : {ico: "15", name: "Entei",          flags: []}},
	[MON.SUICUNE   ]: {	""         : {ico: "15", name: "Suicune",        flags: []}},
	[MON.LARVITAR  ]: {	""         : {ico: "08", name: "Larvitar",       flags: []}},
	[MON.PUPITAR   ]: {	""         : {ico: "08", name: "Pupitar",        flags: []}},
	[MON.TYRANITAR ]: {	""         : {ico: "08", name: "Tyranitar",      flags: []}},
	[MON.LUGIA     ]: {	""         : {ico: "34", name: "Lugia",          flags: []}},
	[MON.HO_OH     ]: {	""         : {ico: "33", name: "Ho-Oh",          flags: []}},
	[MON.CELEBI    ]: {	""         : {ico: "14", name: "Celebi",         flags: []}},
}};

// update icons
DEX_LIST[GAME.Go][MON.BULBASAUR ][""]["ico"] = "22";
DEX_LIST[GAME.Go][MON.IVYSAUR   ][""]["ico"] = "22";
DEX_LIST[GAME.Go][MON.VENUSAUR  ][""]["ico"] = "22";
DEX_LIST[GAME.Go][MON.CHARMANDER][""]["ico"] = "23";
DEX_LIST[GAME.Go][MON.CHARMELEON][""]["ico"] = "23";
DEX_LIST[GAME.Go][MON.CHARIZARD ][""]["ico"] = "38";
DEX_LIST[GAME.Go][MON.SQUIRTLE  ][""]["ico"] = "21";
DEX_LIST[GAME.Go][MON.WARTORTLE ][""]["ico"] = "21";
DEX_LIST[GAME.Go][MON.BLASTOISE ][""]["ico"] = "21";
DEX_LIST[GAME.Go][MON.CATERPIE  ][""]["ico"] = "24";
DEX_LIST[GAME.Go][MON.METAPOD   ][""]["ico"] = "24";
DEX_LIST[GAME.Go][MON.BUTTERFREE][""]["ico"] = "30";
DEX_LIST[GAME.Go][MON.WEEDLE    ][""]["ico"] = "24";
DEX_LIST[GAME.Go][MON.KAKUNA    ][""]["ico"] = "24";
DEX_LIST[GAME.Go][MON.BEEDRILL  ][""]["ico"] = "11";
DEX_LIST[GAME.Go][MON.PIDGEY    ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.PIDGEOTTO ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.PIDGEOT   ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.RATTATA   ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.RATICATE  ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.SPEAROW   ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.FEAROW    ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.EKANS     ][""]["ico"] = "19";
DEX_LIST[GAME.Go][MON.ARBOK     ][""]["ico"] = "19";
DEX_LIST[GAME.Go][MON.PIKACHU   ][""]["ico"] = "04";
DEX_LIST[GAME.Go][MON.RAICHU    ][""]["ico"] = "04";
DEX_LIST[GAME.Go][MON.SANDSHREW ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.SANDSLASH ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.NIDORAN_F ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.NIDORINA  ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.NIDOQUEEN ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.NIDORAN_M ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.NIDORINO  ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.NIDOKING  ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.CLEFAIRY  ][""]["ico"] = "09";
DEX_LIST[GAME.Go][MON.CLEFABLE  ][""]["ico"] = "09";
DEX_LIST[GAME.Go][MON.VULPIX    ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.NINETALES ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.JIGGLYPUFF][""]["ico"] = "02";
DEX_LIST[GAME.Go][MON.WIGGLYTUFF][""]["ico"] = "02";
DEX_LIST[GAME.Go][MON.ZUBAT     ][""]["ico"] = "31";
DEX_LIST[GAME.Go][MON.GOLBAT    ][""]["ico"] = "31";
DEX_LIST[GAME.Go][MON.ODDISH    ][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.GLOOM     ][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.VILEPLUME ][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.PARAS     ][""]["ico"] = "11";
DEX_LIST[GAME.Go][MON.PARASECT  ][""]["ico"] = "11";
DEX_LIST[GAME.Go][MON.VENONAT   ][""]["ico"] = "24";
DEX_LIST[GAME.Go][MON.VENOMOTH  ][""]["ico"] = "30";
DEX_LIST[GAME.Go][MON.DIGLETT   ][""]["ico"] = "03";
DEX_LIST[GAME.Go][MON.DUGTRIO   ][""]["ico"] = "03";
DEX_LIST[GAME.Go][MON.MEOWTH    ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.PERSIAN   ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.PSYDUCK   ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.GOLDUCK   ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.MANKEY    ][""]["ico"] = "27";
DEX_LIST[GAME.Go][MON.PRIMEAPE  ][""]["ico"] = "27";
DEX_LIST[GAME.Go][MON.GROWLITHE ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.ARCANINE  ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.POLIWAG   ][""]["ico"] = "01";
DEX_LIST[GAME.Go][MON.POLIWHIRL ][""]["ico"] = "01";
DEX_LIST[GAME.Go][MON.POLIWRATH ][""]["ico"] = "01";
DEX_LIST[GAME.Go][MON.ABRA      ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.KADABRA   ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.ALAKAZAM  ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.MACHOP    ][""]["ico"] = "27";
DEX_LIST[GAME.Go][MON.MACHOKE   ][""]["ico"] = "27";
DEX_LIST[GAME.Go][MON.MACHAMP   ][""]["ico"] = "27";
DEX_LIST[GAME.Go][MON.BELLSPROUT][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.WEEPINBELL][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.VICTREEBEL][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.TENTACOOL ][""]["ico"] = "29";
DEX_LIST[GAME.Go][MON.TENTACRUEL][""]["ico"] = "29";
DEX_LIST[GAME.Go][MON.GEODUDE   ][""]["ico"] = "26";
DEX_LIST[GAME.Go][MON.GRAVELER  ][""]["ico"] = "26";
DEX_LIST[GAME.Go][MON.GOLEM     ][""]["ico"] = "26";
DEX_LIST[GAME.Go][MON.PONYTA    ][""]["ico"] = "16";
DEX_LIST[GAME.Go][MON.RAPIDASH  ][""]["ico"] = "16";
DEX_LIST[GAME.Go][MON.SLOWPOKE  ][""]["ico"] = "36";
DEX_LIST[GAME.Go][MON.SLOWBRO   ][""]["ico"] = "36";
DEX_LIST[GAME.Go][MON.MAGNEMITE ][""]["ico"] = "20";
DEX_LIST[GAME.Go][MON.MAGNETON  ][""]["ico"] = "20";
DEX_LIST[GAME.Go][MON.FARFETCH_D][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.DODUO     ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.DODRIO    ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.SEEL      ][""]["ico"] = "13";
DEX_LIST[GAME.Go][MON.DEWGONG   ][""]["ico"] = "13";
DEX_LIST[GAME.Go][MON.GRIMER    ][""]["ico"] = "18";
DEX_LIST[GAME.Go][MON.MUK       ][""]["ico"] = "18";
DEX_LIST[GAME.Go][MON.SHELLDER  ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.CLOYSTER  ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.GASTLY    ][""]["ico"] = "12";
DEX_LIST[GAME.Go][MON.HAUNTER   ][""]["ico"] = "12";
DEX_LIST[GAME.Go][MON.GENGAR    ][""]["ico"] = "12";
DEX_LIST[GAME.Go][MON.ONIX      ][""]["ico"] = "19";
DEX_LIST[GAME.Go][MON.DROWZEE   ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.HYPNO     ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.KRABBY    ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.KINGLER   ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.VOLTORB   ][""]["ico"] = "20";
DEX_LIST[GAME.Go][MON.ELECTRODE ][""]["ico"] = "20";
DEX_LIST[GAME.Go][MON.EXEGGCUTE ][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.EXEGGUTOR ][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.CUBONE    ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.MAROWAK   ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.HITMONLEE ][""]["ico"] = "27";
DEX_LIST[GAME.Go][MON.HITMONCHAN][""]["ico"] = "27";
DEX_LIST[GAME.Go][MON.LICKITUNG ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.KOFFING   ][""]["ico"] = "18";
DEX_LIST[GAME.Go][MON.WEEZING   ][""]["ico"] = "18";
DEX_LIST[GAME.Go][MON.RHYHORN   ][""]["ico"] = "16";
DEX_LIST[GAME.Go][MON.RHYDON    ][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.CHANSEY   ][""]["ico"] = "09";
DEX_LIST[GAME.Go][MON.TANGELA   ][""]["ico"] = "10";
DEX_LIST[GAME.Go][MON.KANGASKHAN][""]["ico"] = "08";
DEX_LIST[GAME.Go][MON.HORSEA    ][""]["ico"] = "06";
DEX_LIST[GAME.Go][MON.SEADRA    ][""]["ico"] = "06";
DEX_LIST[GAME.Go][MON.GOLDEEN   ][""]["ico"] = "06";
DEX_LIST[GAME.Go][MON.SEAKING   ][""]["ico"] = "06";
DEX_LIST[GAME.Go][MON.STARYU    ][""]["ico"] = "05";
DEX_LIST[GAME.Go][MON.STARMIE   ][""]["ico"] = "05";
DEX_LIST[GAME.Go][MON.MR_MIME   ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.SCYTHER   ][""]["ico"] = "11";
DEX_LIST[GAME.Go][MON.JYNX      ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.ELECTABUZZ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.MAGMAR    ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.PINSIR    ][""]["ico"] = "11";
DEX_LIST[GAME.Go][MON.TAUROS    ][""]["ico"] = "16";
DEX_LIST[GAME.Go][MON.MAGIKARP  ][""]["ico"] = "06";
DEX_LIST[GAME.Go][MON.GYARADOS  ][""]["ico"] = "35";
DEX_LIST[GAME.Go][MON.LAPRAS    ][""]["ico"] = "13";
DEX_LIST[GAME.Go][MON.DITTO     ][""]["ico"] = "18";
DEX_LIST[GAME.Go][MON.EEVEE     ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.VAPOREON  ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.JOLTEON   ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.FLAREON   ][""]["ico"] = "15";
DEX_LIST[GAME.Go][MON.PORYGON   ][""]["ico"] = "20";
DEX_LIST[GAME.Go][MON.OMANYTE   ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.OMASTAR   ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.KABUTO    ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.KABUTOPS  ][""]["ico"] = "17";
DEX_LIST[GAME.Go][MON.AERODACTYL][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.SNORLAX   ][""]["ico"] = "32";
DEX_LIST[GAME.Go][MON.ARTICUNO  ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.ZAPDOS    ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.MOLTRES   ][""]["ico"] = "07";
DEX_LIST[GAME.Go][MON.DRATINI   ][""]["ico"] = "19";
DEX_LIST[GAME.Go][MON.DRAGONAIR ][""]["ico"] = "19";
DEX_LIST[GAME.Go][MON.DRAGONITE ][""]["ico"] = "38";
DEX_LIST[GAME.Go][MON.MEWTWO    ][""]["ico"] = "14";
DEX_LIST[GAME.Go][MON.MEW       ][""]["ico"] = "14";

DEX_LIST[GAME.Si] = CopyObject(DEX_LIST[GAME.Go]);
DEX_LIST[GAME.Cr] = CopyObject(DEX_LIST[GAME.Go]);

DEX_LIST[GAME.Cr][MON.RAIKOU    ][""]["ico"] = "custom/0243";
DEX_LIST[GAME.Cr][MON.ENTEI     ][""]["ico"] = "custom/0244";
DEX_LIST[GAME.Cr][MON.SUICUNE   ][""]["ico"] = "custom/0245";
