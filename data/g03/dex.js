//============================================================================
// POKEMON INDEX
//============================================================================
MON =
{
	...CopyObject(MON),
	TREECKO   : 252,	GROVYLE   : 253,	SCEPTILE  : 254,	TORCHIC   : 255,
	COMBUSKEN : 256,	BLAZIKEN  : 257,	MUDKIP    : 258,	MARSHTOMP : 259,
	SWAMPERT  : 260,	POOCHYENA : 261,	MIGHTYENA : 262,	ZIGZAGOON : 263,
	LINOONE   : 264,	WURMPLE   : 265,	SILCOON   : 266,	BEAUTIFLY : 267,
	CASCOON   : 268,	DUSTOX    : 269,	LOTAD     : 270,	LOMBRE    : 271,
	LUDICOLO  : 272,	SEEDOT    : 273,	NUZLEAF   : 274,	SHIFTRY   : 275,
	TAILLOW   : 276,	SWELLOW   : 277,	WINGULL   : 278,	PELIPPER  : 279,
	RALTS     : 280,	KIRLIA    : 281,	GARDEVOIR : 282,	SURSKIT   : 283,
	MASQUERAIN: 284,	SHROOMISH : 285,	BRELOOM   : 286,	SLAKOTH   : 287,
	VIGOROTH  : 288,	SLAKING   : 289,	NINCADA   : 290,	NINJASK   : 291,
	SHEDINJA  : 292,	WHISMUR   : 293,	LOUDRED   : 294,	EXPLOUD   : 295,
	MAKUHITA  : 296,	HARIYAMA  : 297,	AZURILL   : 298,	NOSEPASS  : 299,
	SKITTY    : 300,	DELCATTY  : 301,	SABLEYE   : 302,	MAWILE    : 303,
	ARON      : 304,	LAIRON    : 305,	AGGRON    : 306,	MEDITITE  : 307,
	MEDICHAM  : 308,	ELECTRIKE : 309,	MANECTRIC : 310,	PLUSLE    : 311,
	MINUN     : 312,	VOLBEAT   : 313,	ILLUMISE  : 314,	ROSELIA   : 315,
	GULPIN    : 316,	SWALOT    : 317,	CARVANHA  : 318,	SHARPEDO  : 319,
	WAILMER   : 320,	WAILORD   : 321,	NUMEL     : 322,	CAMERUPT  : 323,
	TORKOAL   : 324,	SPOINK    : 325,	GRUMPIG   : 326,	SPINDA    : 327,
	TRAPINCH  : 328,	VIBRAVA   : 329,	FLYGON    : 330,	CACNEA    : 331,
	CACTURNE  : 332,	SWABLU    : 333,	ALTARIA   : 334,	ZANGOOSE  : 335,
	SEVIPER   : 336,	LUNATONE  : 337,	SOLROCK   : 338,	BARBOACH  : 339,
	WHISCASH  : 340,	CORPHISH  : 341,	CRAWDAUNT : 342,	BALTOY    : 343,
	CLAYDOL   : 344,	LILEEP    : 345,	CRADILY   : 346,	ANORITH   : 347,
	ARMALDO   : 348,	FEEBAS    : 349,	MILOTIC   : 350,	CASTFORM  : 351,
	KECLEON   : 352,	SHUPPET   : 353,	BANETTE   : 354,	DUSKULL   : 355,
	DUSCLOPS  : 356,	TROPIUS   : 357,	CHIMECHO  : 358,	ABSOL     : 359,
	SNORUNT   : 361,	GLALIE    : 362,	SPHEAL    : 363,	SEALEO    : 364,
	WALREIN   : 365,	CLAMPERL  : 366,	HUNTAIL   : 367,	GOREBYSS  : 368,
	RELICANTH : 369,	LUVDISC   : 370,	BAGON     : 371,	SHELGON   : 372,
	SALAMENCE : 373,	BELDUM    : 374,	METANG    : 375,	METAGROSS : 376,
	REGIROCK  : 377,	REGICE    : 378,	REGISTEEL : 379,	LATIAS    : 380,
	LATIOS    : 381,	KYOGRE    : 382,	GROUDON   : 383,	RAYQUAZA  : 384,
	JIRACHI   : 385,	DEOXYS    : 386
};

//============================================================================
// NATIONAL POKEDEX
//============================================================================
DEX_LIST = {...CopyObject(DEX_LIST),
[GAME.Ru]:
{
	...CopyObject(DEX_LIST[GAME.Cr]),
	[MON.TREECKO   ]: {	""          : {ico: "0252", name: "Treecko",        flags: []}},
	[MON.GROVYLE   ]: {	""          : {ico: "0253", name: "Grovyle",        flags: []}},
	[MON.SCEPTILE  ]: {	""          : {ico: "0254", name: "Sceptile",       flags: []}},
	[MON.TORCHIC   ]: {	""          : {ico: "0255", name: "Torchic",        flags: []}},
	[MON.COMBUSKEN ]: {	""          : {ico: "0256", name: "Combusken",      flags: []}},
	[MON.BLAZIKEN  ]: {	""          : {ico: "0257", name: "Blaziken",       flags: []}},
	[MON.MUDKIP    ]: {	""          : {ico: "0258", name: "Mudkip",         flags: []}},
	[MON.MARSHTOMP ]: {	""          : {ico: "0259", name: "Marshtomp",      flags: []}},
	[MON.SWAMPERT  ]: {	""          : {ico: "0260", name: "Swampert",       flags: []}},
	[MON.POOCHYENA ]: {	""          : {ico: "0261", name: "Poochyena",      flags: []}},
	[MON.MIGHTYENA ]: {	""          : {ico: "0262", name: "Mightyena",      flags: []}},
	[MON.ZIGZAGOON ]: {	""          : {ico: "0263", name: "Zigzagoon",      flags: []}},
	[MON.LINOONE   ]: {	""          : {ico: "0264", name: "Linoone",        flags: []}},
	[MON.WURMPLE   ]: {	""          : {ico: "0265", name: "Wurmple",        flags: []}},
	[MON.SILCOON   ]: {	""          : {ico: "0266", name: "Silcoon",        flags: []}},
	[MON.BEAUTIFLY ]: {	""          : {ico: "0267", name: "Beautifly",      flags: []}},
	[MON.CASCOON   ]: {	""          : {ico: "0268", name: "Cascoon",        flags: []}},
	[MON.DUSTOX    ]: {	""          : {ico: "0269", name: "Dustox",         flags: []}},
	[MON.LOTAD     ]: {	""          : {ico: "0270", name: "Lotad",          flags: []}},
	[MON.LOMBRE    ]: {	""          : {ico: "0271", name: "Lombre",         flags: []}},
	[MON.LUDICOLO  ]: {	""          : {ico: "0272", name: "Ludicolo",       flags: []}},
	[MON.SEEDOT    ]: {	""          : {ico: "0273", name: "Seedot",         flags: []}},
	[MON.NUZLEAF   ]: {	""          : {ico: "0274", name: "Nuzleaf",        flags: []}},
	[MON.SHIFTRY   ]: {	""          : {ico: "0275", name: "Shiftry",        flags: []}},
	[MON.TAILLOW   ]: {	""          : {ico: "0276", name: "Taillow",        flags: []}},
	[MON.SWELLOW   ]: {	""          : {ico: "0277", name: "Swellow",        flags: []}},
	[MON.WINGULL   ]: {	""          : {ico: "0278", name: "Wingull",        flags: []}},
	[MON.PELIPPER  ]: {	""          : {ico: "0279", name: "Pelipper",       flags: []}},
	[MON.RALTS     ]: {	""          : {ico: "0280", name: "Ralts",          flags: []}},
	[MON.KIRLIA    ]: {	""          : {ico: "0281", name: "Kirlia",         flags: []}},
	[MON.GARDEVOIR ]: {	""          : {ico: "0282", name: "Gardevoir",      flags: []}},
	[MON.SURSKIT   ]: {	""          : {ico: "0283", name: "Surskit",        flags: []}},
	[MON.MASQUERAIN]: {	""          : {ico: "0284", name: "Masquerain",     flags: []}},
	[MON.SHROOMISH ]: {	""          : {ico: "0285", name: "Shroomish",      flags: []}},
	[MON.BRELOOM   ]: {	""          : {ico: "0286", name: "Breloom",        flags: []}},
	[MON.SLAKOTH   ]: {	""          : {ico: "0287", name: "Slakoth",        flags: []}},
	[MON.VIGOROTH  ]: {	""          : {ico: "0288", name: "Vigoroth",       flags: []}},
	[MON.SLAKING   ]: {	""          : {ico: "0289", name: "Slaking",        flags: []}},
	[MON.NINCADA   ]: {	""          : {ico: "0290", name: "Nincada",        flags: []}},
	[MON.NINJASK   ]: {	""          : {ico: "0291", name: "Ninjask",        flags: []}},
	[MON.SHEDINJA  ]: {	""          : {ico: "0292", name: "Shedinja",       flags: []}},
	[MON.WHISMUR   ]: {	""          : {ico: "0293", name: "Whismur",        flags: []}},
	[MON.LOUDRED   ]: {	""          : {ico: "0294", name: "Loudred",        flags: []}},
	[MON.EXPLOUD   ]: {	""          : {ico: "0295", name: "Exploud",        flags: []}},
	[MON.MAKUHITA  ]: {	""          : {ico: "0296", name: "Makuhita",       flags: []}},
	[MON.HARIYAMA  ]: {	""          : {ico: "0297", name: "Hariyama",       flags: []}},
	[MON.AZURILL   ]: {	""          : {ico: "0298", name: "Azurill",        flags: []}},
	[MON.NOSEPASS  ]: {	""          : {ico: "0299", name: "Nosepass",       flags: []}},
	[MON.SKITTY    ]: {	""          : {ico: "0300", name: "Skitty",         flags: []}},
	[MON.DELCATTY  ]: {	""          : {ico: "0301", name: "Delcatty",       flags: []}},
	[MON.SABLEYE   ]: {	""          : {ico: "0302", name: "Sableye",        flags: []}},
	[MON.MAWILE    ]: {	""          : {ico: "0303", name: "Mawile",         flags: []}},
	[MON.ARON      ]: {	""          : {ico: "0304", name: "Aron",           flags: []}},
	[MON.LAIRON    ]: {	""          : {ico: "0305", name: "Lairon",         flags: []}},
	[MON.AGGRON    ]: {	""          : {ico: "0306", name: "Aggron",         flags: []}},
	[MON.MEDITITE  ]: {	""          : {ico: "0307", name: "Meditite",       flags: []}},
	[MON.MEDICHAM  ]: {	""          : {ico: "0308", name: "Medicham",       flags: []}},
	[MON.ELECTRIKE ]: {	""          : {ico: "0309", name: "Electrike",      flags: []}},
	[MON.MANECTRIC ]: {	""          : {ico: "0310", name: "Manectric",      flags: []}},
	[MON.PLUSLE    ]: {	""          : {ico: "0311", name: "Plusle",         flags: []}},
	[MON.MINUN     ]: {	""          : {ico: "0312", name: "Minun",          flags: []}},
	[MON.VOLBEAT   ]: {	""          : {ico: "0313", name: "Volbeat",        flags: []}},
	[MON.ILLUMISE  ]: {	""          : {ico: "0314", name: "Illumise",       flags: []}},
	[MON.ROSELIA   ]: {	""          : {ico: "0315", name: "Roselia",        flags: []}},
	[MON.GULPIN    ]: {	""          : {ico: "0316", name: "Gulpin",         flags: []}},
	[MON.SWALOT    ]: {	""          : {ico: "0317", name: "Swalot",         flags: []}},
	[MON.CARVANHA  ]: {	""          : {ico: "0318", name: "Carvanha",       flags: []}},
	[MON.SHARPEDO  ]: {	""          : {ico: "0319", name: "Sharpedo",       flags: []}},
	[MON.WAILMER   ]: {	""          : {ico: "0320", name: "Wailmer",        flags: []}},
	[MON.WAILORD   ]: {	""          : {ico: "0321", name: "Wailord",        flags: []}},
	[MON.NUMEL     ]: {	""          : {ico: "0322", name: "Numel",          flags: []}},
	[MON.CAMERUPT  ]: {	""          : {ico: "0323", name: "Camerupt",       flags: []}},
	[MON.TORKOAL   ]: {	""          : {ico: "0324", name: "Torkoal",        flags: []}},
	[MON.SPOINK    ]: {	""          : {ico: "0325", name: "Spoink ",        flags: []}},
	[MON.GRUMPIG   ]: {	""          : {ico: "0326", name: "Grumpig",        flags: []}},
	[MON.SPINDA    ]: {	""          : {ico: "0327", name: "Spinda",         flags: []}},
	[MON.TRAPINCH  ]: {	""          : {ico: "0328", name: "Trapinch",       flags: []}},
	[MON.VIBRAVA   ]: {	""          : {ico: "0329", name: "Vibrava",        flags: []}},
	[MON.FLYGON    ]: {	""          : {ico: "0330", name: "Flygon",         flags: []}},
	[MON.CACNEA    ]: {	""          : {ico: "0331", name: "Cacnea",         flags: []}},
	[MON.CACTURNE  ]: {	""          : {ico: "0332", name: "Cacturne",       flags: []}},
	[MON.SWABLU    ]: {	""          : {ico: "0333", name: "Swablu",         flags: []}},
	[MON.ALTARIA   ]: {	""          : {ico: "0334", name: "Altaria",        flags: []}},
	[MON.ZANGOOSE  ]: {	""          : {ico: "0335", name: "Zangoose",       flags: []}},
	[MON.SEVIPER   ]: {	""          : {ico: "0336", name: "Seviper",        flags: []}},
	[MON.LUNATONE  ]: {	""          : {ico: "0337", name: "Lunatone",       flags: []}},
	[MON.SOLROCK   ]: {	""          : {ico: "0338", name: "Solrock",        flags: []}},
	[MON.BARBOACH  ]: {	""          : {ico: "0339", name: "Barboach",       flags: []}},
	[MON.WHISCASH  ]: {	""          : {ico: "0340", name: "Whiscash",       flags: []}},
	[MON.CORPHISH  ]: {	""          : {ico: "0341", name: "Corphish",       flags: []}},
	[MON.CRAWDAUNT ]: {	""          : {ico: "0342", name: "Crawdaunt",      flags: []}},
	[MON.BALTOY    ]: {	""          : {ico: "0343", name: "Baltoy",         flags: []}},
	[MON.CLAYDOL   ]: {	""          : {ico: "0344", name: "Claydol",        flags: []}},
	[MON.LILEEP    ]: {	""          : {ico: "0345", name: "Lileep",         flags: []}},
	[MON.CRADILY   ]: {	""          : {ico: "0346", name: "Cradily",        flags: []}},
	[MON.ANORITH   ]: {	""          : {ico: "0347", name: "Anorith",        flags: []}},
	[MON.ARMALDO   ]: {	""          : {ico: "0348", name: "Armaldo",        flags: []}},
	[MON.FEEBAS    ]: {	""          : {ico: "0349", name: "Feebas",         flags: []}},
	[MON.MILOTIC   ]: {	""          : {ico: "0350", name: "Milotic",        flags: []}},
	[MON.CASTFORM  ]: {	""          : {ico: "0351", name: "Castform",       flags: []},
						"-sunny"    : {ico: "0351", name: "Sunny Castform", flags: [FLAGS.FORM_BATTLE]},
						"-rainy"    : {ico: "0351", name: "Rainy Castform", flags: [FLAGS.FORM_BATTLE]},
						"-snowy"    : {ico: "0351", name: "Snowy Castform", flags: [FLAGS.FORM_BATTLE]}},
	[MON.KECLEON   ]: {	""          : {ico: "0352", name: "Kecleon",        flags: []}},
	[MON.SHUPPET   ]: {	""          : {ico: "0353", name: "Shuppet",        flags: []}},
	[MON.BANETTE   ]: {	""          : {ico: "0354", name: "Banette",        flags: []}},
	[MON.DUSKULL   ]: {	""          : {ico: "0355", name: "Duskull",        flags: []}},
	[MON.DUSCLOPS  ]: {	""          : {ico: "0356", name: "Dusclops",       flags: []}},
	[MON.TROPIUS   ]: {	""          : {ico: "0357", name: "Tropius",        flags: []}},
	[MON.CHIMECHO  ]: {	""          : {ico: "0358", name: "Chimecho",       flags: []}},
	[MON.ABSOL     ]: {	""          : {ico: "0359", name: "Absol",          flags: []}},
	[MON.WYNAUT    ]: {	""          : {ico: "0360", name: "Wynaut",         flags: []}},
	[MON.SNORUNT   ]: {	""          : {ico: "0361", name: "Snorunt",        flags: []}},
	[MON.GLALIE    ]: {	""          : {ico: "0362", name: "Glalie",         flags: []}},
	[MON.SPHEAL    ]: {	""          : {ico: "0363", name: "Spheal",         flags: []}},
	[MON.SEALEO    ]: {	""          : {ico: "0364", name: "Sealeo",         flags: []}},
	[MON.WALREIN   ]: {	""          : {ico: "0365", name: "Walrein",        flags: []}},
	[MON.CLAMPERL  ]: {	""          : {ico: "0366", name: "Clamperl",       flags: []}},
	[MON.HUNTAIL   ]: {	""          : {ico: "0367", name: "Huntail",        flags: []}},
	[MON.GOREBYSS  ]: {	""          : {ico: "0368", name: "Gorebyss",       flags: []}},
	[MON.RELICANTH ]: {	""          : {ico: "0369", name: "Relicanth",      flags: []}},
	[MON.LUVDISC   ]: {	""          : {ico: "0370", name: "Luvdisc",        flags: []}},
	[MON.BAGON     ]: {	""          : {ico: "0371", name: "Bagon",          flags: []}},
	[MON.SHELGON   ]: {	""          : {ico: "0372", name: "Shelgon",        flags: []}},
	[MON.SALAMENCE ]: {	""          : {ico: "0373", name: "Salamence",      flags: []}},
	[MON.BELDUM    ]: {	""          : {ico: "0374", name: "Beldum",         flags: []}},
	[MON.METANG    ]: {	""          : {ico: "0375", name: "Metang",         flags: []}},
	[MON.METAGROSS ]: {	""          : {ico: "0376", name: "Metagross",      flags: []}},
	[MON.REGIROCK  ]: {	""          : {ico: "0377", name: "Regirock",       flags: []}},
	[MON.REGICE    ]: {	""          : {ico: "0378", name: "Regice",         flags: []}},
	[MON.REGISTEEL ]: {	""          : {ico: "0379", name: "Registeel",      flags: []}},
	[MON.LATIAS    ]: {	""          : {ico: "0380", name: "Latias",         flags: []}},
	[MON.LATIOS    ]: {	""          : {ico: "0381", name: "Latios",         flags: []}},
	[MON.KYOGRE    ]: {	""          : {ico: "0382", name: "Kyogre",         flags: []}},
	[MON.GROUDON   ]: {	""          : {ico: "0383", name: "Groudon",        flags: []}},
	[MON.RAYQUAZA  ]: {	""          : {ico: "0384", name: "Rayquaza",       flags: []}},
	[MON.JIRACHI   ]: {	""          : {ico: "0385", name: "Jirachi",        flags: []}},
	[MON.DEOXYS    ]: {	""          : {ico: "0386", name: "Deoxys",         flags: []}},
}};

DEX_LIST[GAME.Ru][MON.BULBASAUR ][""         ]["ico"] = "0001";
DEX_LIST[GAME.Ru][MON.IVYSAUR   ][""         ]["ico"] = "0002";
DEX_LIST[GAME.Ru][MON.VENUSAUR  ][""         ]["ico"] = "0003";
DEX_LIST[GAME.Ru][MON.CHARMANDER][""         ]["ico"] = "0004";
DEX_LIST[GAME.Ru][MON.CHARMELEON][""         ]["ico"] = "0005";
DEX_LIST[GAME.Ru][MON.CHARIZARD ][""         ]["ico"] = "0006";
DEX_LIST[GAME.Ru][MON.SQUIRTLE  ][""         ]["ico"] = "0007";
DEX_LIST[GAME.Ru][MON.WARTORTLE ][""         ]["ico"] = "0008";
DEX_LIST[GAME.Ru][MON.BLASTOISE ][""         ]["ico"] = "0009";
DEX_LIST[GAME.Ru][MON.CATERPIE  ][""         ]["ico"] = "0010";
DEX_LIST[GAME.Ru][MON.METAPOD   ][""         ]["ico"] = "0011";
DEX_LIST[GAME.Ru][MON.BUTTERFREE][""         ]["ico"] = "0012";
DEX_LIST[GAME.Ru][MON.WEEDLE    ][""         ]["ico"] = "0013";
DEX_LIST[GAME.Ru][MON.KAKUNA    ][""         ]["ico"] = "0014";
DEX_LIST[GAME.Ru][MON.BEEDRILL  ][""         ]["ico"] = "0015";
DEX_LIST[GAME.Ru][MON.PIDGEY    ][""         ]["ico"] = "0016";
DEX_LIST[GAME.Ru][MON.PIDGEOTTO ][""         ]["ico"] = "0017";
DEX_LIST[GAME.Ru][MON.PIDGEOT   ][""         ]["ico"] = "0018";
DEX_LIST[GAME.Ru][MON.RATTATA   ][""         ]["ico"] = "0019";
DEX_LIST[GAME.Ru][MON.RATICATE  ][""         ]["ico"] = "0020";
DEX_LIST[GAME.Ru][MON.SPEAROW   ][""         ]["ico"] = "0021";
DEX_LIST[GAME.Ru][MON.FEAROW    ][""         ]["ico"] = "0022";
DEX_LIST[GAME.Ru][MON.EKANS     ][""         ]["ico"] = "0023";
DEX_LIST[GAME.Ru][MON.ARBOK     ][""         ]["ico"] = "0024";
DEX_LIST[GAME.Ru][MON.PIKACHU   ][""         ]["ico"] = "0025";
DEX_LIST[GAME.Ru][MON.RAICHU    ][""         ]["ico"] = "0026";
DEX_LIST[GAME.Ru][MON.SANDSHREW ][""         ]["ico"] = "0027";
DEX_LIST[GAME.Ru][MON.SANDSLASH ][""         ]["ico"] = "0028";
DEX_LIST[GAME.Ru][MON.NIDORAN_F ][""         ]["ico"] = "0029";
DEX_LIST[GAME.Ru][MON.NIDORINA  ][""         ]["ico"] = "0030";
DEX_LIST[GAME.Ru][MON.NIDOQUEEN ][""         ]["ico"] = "0031";
DEX_LIST[GAME.Ru][MON.NIDORAN_M ][""         ]["ico"] = "0032";
DEX_LIST[GAME.Ru][MON.NIDORINO  ][""         ]["ico"] = "0033";
DEX_LIST[GAME.Ru][MON.NIDOKING  ][""         ]["ico"] = "0034";
DEX_LIST[GAME.Ru][MON.CLEFAIRY  ][""         ]["ico"] = "0035";
DEX_LIST[GAME.Ru][MON.CLEFABLE  ][""         ]["ico"] = "0036";
DEX_LIST[GAME.Ru][MON.VULPIX    ][""         ]["ico"] = "0037";
DEX_LIST[GAME.Ru][MON.NINETALES ][""         ]["ico"] = "0038";
DEX_LIST[GAME.Ru][MON.JIGGLYPUFF][""         ]["ico"] = "0039";
DEX_LIST[GAME.Ru][MON.WIGGLYTUFF][""         ]["ico"] = "0040";
DEX_LIST[GAME.Ru][MON.ZUBAT     ][""         ]["ico"] = "0041";
DEX_LIST[GAME.Ru][MON.GOLBAT    ][""         ]["ico"] = "0042";
DEX_LIST[GAME.Ru][MON.ODDISH    ][""         ]["ico"] = "0043";
DEX_LIST[GAME.Ru][MON.GLOOM     ][""         ]["ico"] = "0044";
DEX_LIST[GAME.Ru][MON.VILEPLUME ][""         ]["ico"] = "0045";
DEX_LIST[GAME.Ru][MON.PARAS     ][""         ]["ico"] = "0046";
DEX_LIST[GAME.Ru][MON.PARASECT  ][""         ]["ico"] = "0047";
DEX_LIST[GAME.Ru][MON.VENONAT   ][""         ]["ico"] = "0048";
DEX_LIST[GAME.Ru][MON.VENOMOTH  ][""         ]["ico"] = "0049";
DEX_LIST[GAME.Ru][MON.DIGLETT   ][""         ]["ico"] = "0050";
DEX_LIST[GAME.Ru][MON.DUGTRIO   ][""         ]["ico"] = "0051";
DEX_LIST[GAME.Ru][MON.MEOWTH    ][""         ]["ico"] = "0052";
DEX_LIST[GAME.Ru][MON.PERSIAN   ][""         ]["ico"] = "0053";
DEX_LIST[GAME.Ru][MON.PSYDUCK   ][""         ]["ico"] = "0054";
DEX_LIST[GAME.Ru][MON.GOLDUCK   ][""         ]["ico"] = "0055";
DEX_LIST[GAME.Ru][MON.MANKEY    ][""         ]["ico"] = "0056";
DEX_LIST[GAME.Ru][MON.PRIMEAPE  ][""         ]["ico"] = "0057";
DEX_LIST[GAME.Ru][MON.GROWLITHE ][""         ]["ico"] = "0058";
DEX_LIST[GAME.Ru][MON.ARCANINE  ][""         ]["ico"] = "0059";
DEX_LIST[GAME.Ru][MON.POLIWAG   ][""         ]["ico"] = "0060";
DEX_LIST[GAME.Ru][MON.POLIWHIRL ][""         ]["ico"] = "0061";
DEX_LIST[GAME.Ru][MON.POLIWRATH ][""         ]["ico"] = "0062";
DEX_LIST[GAME.Ru][MON.ABRA      ][""         ]["ico"] = "0063";
DEX_LIST[GAME.Ru][MON.KADABRA   ][""         ]["ico"] = "0064";
DEX_LIST[GAME.Ru][MON.ALAKAZAM  ][""         ]["ico"] = "0065";
DEX_LIST[GAME.Ru][MON.MACHOP    ][""         ]["ico"] = "0066";
DEX_LIST[GAME.Ru][MON.MACHOKE   ][""         ]["ico"] = "0067";
DEX_LIST[GAME.Ru][MON.MACHAMP   ][""         ]["ico"] = "0068";
DEX_LIST[GAME.Ru][MON.BELLSPROUT][""         ]["ico"] = "0069";
DEX_LIST[GAME.Ru][MON.WEEPINBELL][""         ]["ico"] = "0070";
DEX_LIST[GAME.Ru][MON.VICTREEBEL][""         ]["ico"] = "0071";
DEX_LIST[GAME.Ru][MON.TENTACOOL ][""         ]["ico"] = "0072";
DEX_LIST[GAME.Ru][MON.TENTACRUEL][""         ]["ico"] = "0073";
DEX_LIST[GAME.Ru][MON.GEODUDE   ][""         ]["ico"] = "0074";
DEX_LIST[GAME.Ru][MON.GRAVELER  ][""         ]["ico"] = "0075";
DEX_LIST[GAME.Ru][MON.GOLEM     ][""         ]["ico"] = "0076";
DEX_LIST[GAME.Ru][MON.PONYTA    ][""         ]["ico"] = "0077";
DEX_LIST[GAME.Ru][MON.RAPIDASH  ][""         ]["ico"] = "0078";
DEX_LIST[GAME.Ru][MON.SLOWPOKE  ][""         ]["ico"] = "0079";
DEX_LIST[GAME.Ru][MON.SLOWBRO   ][""         ]["ico"] = "0080";
DEX_LIST[GAME.Ru][MON.MAGNEMITE ][""         ]["ico"] = "0081";
DEX_LIST[GAME.Ru][MON.MAGNETON  ][""         ]["ico"] = "0082";
DEX_LIST[GAME.Ru][MON.FARFETCH_D][""         ]["ico"] = "0083";
DEX_LIST[GAME.Ru][MON.DODUO     ][""         ]["ico"] = "0084";
DEX_LIST[GAME.Ru][MON.DODRIO    ][""         ]["ico"] = "0085";
DEX_LIST[GAME.Ru][MON.SEEL      ][""         ]["ico"] = "0086";
DEX_LIST[GAME.Ru][MON.DEWGONG   ][""         ]["ico"] = "0087";
DEX_LIST[GAME.Ru][MON.GRIMER    ][""         ]["ico"] = "0088";
DEX_LIST[GAME.Ru][MON.MUK       ][""         ]["ico"] = "0089";
DEX_LIST[GAME.Ru][MON.SHELLDER  ][""         ]["ico"] = "0090";
DEX_LIST[GAME.Ru][MON.CLOYSTER  ][""         ]["ico"] = "0091";
DEX_LIST[GAME.Ru][MON.GASTLY    ][""         ]["ico"] = "0092";
DEX_LIST[GAME.Ru][MON.HAUNTER   ][""         ]["ico"] = "0093";
DEX_LIST[GAME.Ru][MON.GENGAR    ][""         ]["ico"] = "0094";
DEX_LIST[GAME.Ru][MON.ONIX      ][""         ]["ico"] = "0095";
DEX_LIST[GAME.Ru][MON.DROWZEE   ][""         ]["ico"] = "0096";
DEX_LIST[GAME.Ru][MON.HYPNO     ][""         ]["ico"] = "0097";
DEX_LIST[GAME.Ru][MON.KRABBY    ][""         ]["ico"] = "0098";
DEX_LIST[GAME.Ru][MON.KINGLER   ][""         ]["ico"] = "0099";
DEX_LIST[GAME.Ru][MON.VOLTORB   ][""         ]["ico"] = "0100";
DEX_LIST[GAME.Ru][MON.ELECTRODE ][""         ]["ico"] = "0101";
DEX_LIST[GAME.Ru][MON.EXEGGCUTE ][""         ]["ico"] = "0102";
DEX_LIST[GAME.Ru][MON.EXEGGUTOR ][""         ]["ico"] = "0103";
DEX_LIST[GAME.Ru][MON.CUBONE    ][""         ]["ico"] = "0104";
DEX_LIST[GAME.Ru][MON.MAROWAK   ][""         ]["ico"] = "0105";
DEX_LIST[GAME.Ru][MON.HITMONLEE ][""         ]["ico"] = "0106";
DEX_LIST[GAME.Ru][MON.HITMONCHAN][""         ]["ico"] = "0107";
DEX_LIST[GAME.Ru][MON.LICKITUNG ][""         ]["ico"] = "0108";
DEX_LIST[GAME.Ru][MON.KOFFING   ][""         ]["ico"] = "0109";
DEX_LIST[GAME.Ru][MON.WEEZING   ][""         ]["ico"] = "0110";
DEX_LIST[GAME.Ru][MON.RHYHORN   ][""         ]["ico"] = "0111";
DEX_LIST[GAME.Ru][MON.RHYDON    ][""         ]["ico"] = "0112";
DEX_LIST[GAME.Ru][MON.CHANSEY   ][""         ]["ico"] = "0113";
DEX_LIST[GAME.Ru][MON.TANGELA   ][""         ]["ico"] = "0114";
DEX_LIST[GAME.Ru][MON.KANGASKHAN][""         ]["ico"] = "0115";
DEX_LIST[GAME.Ru][MON.HORSEA    ][""         ]["ico"] = "0116";
DEX_LIST[GAME.Ru][MON.SEADRA    ][""         ]["ico"] = "0117";
DEX_LIST[GAME.Ru][MON.GOLDEEN   ][""         ]["ico"] = "0118";
DEX_LIST[GAME.Ru][MON.SEAKING   ][""         ]["ico"] = "0119";
DEX_LIST[GAME.Ru][MON.STARYU    ][""         ]["ico"] = "0120";
DEX_LIST[GAME.Ru][MON.STARMIE   ][""         ]["ico"] = "0121";
DEX_LIST[GAME.Ru][MON.MR_MIME   ][""         ]["ico"] = "0122";
DEX_LIST[GAME.Ru][MON.SCYTHER   ][""         ]["ico"] = "0123";
DEX_LIST[GAME.Ru][MON.JYNX      ][""         ]["ico"] = "0124";
DEX_LIST[GAME.Ru][MON.ELECTABUZZ][""         ]["ico"] = "0125";
DEX_LIST[GAME.Ru][MON.MAGMAR    ][""         ]["ico"] = "0126";
DEX_LIST[GAME.Ru][MON.PINSIR    ][""         ]["ico"] = "0127";
DEX_LIST[GAME.Ru][MON.TAUROS    ][""         ]["ico"] = "0128";
DEX_LIST[GAME.Ru][MON.MAGIKARP  ][""         ]["ico"] = "0129";
DEX_LIST[GAME.Ru][MON.GYARADOS  ][""         ]["ico"] = "0130";
DEX_LIST[GAME.Ru][MON.LAPRAS    ][""         ]["ico"] = "0131";
DEX_LIST[GAME.Ru][MON.DITTO     ][""         ]["ico"] = "0132";
DEX_LIST[GAME.Ru][MON.EEVEE     ][""         ]["ico"] = "0133";
DEX_LIST[GAME.Ru][MON.VAPOREON  ][""         ]["ico"] = "0134";
DEX_LIST[GAME.Ru][MON.JOLTEON   ][""         ]["ico"] = "0135";
DEX_LIST[GAME.Ru][MON.FLAREON   ][""         ]["ico"] = "0136";
DEX_LIST[GAME.Ru][MON.PORYGON   ][""         ]["ico"] = "0137";
DEX_LIST[GAME.Ru][MON.OMANYTE   ][""         ]["ico"] = "0138";
DEX_LIST[GAME.Ru][MON.OMASTAR   ][""         ]["ico"] = "0139";
DEX_LIST[GAME.Ru][MON.KABUTO    ][""         ]["ico"] = "0140";
DEX_LIST[GAME.Ru][MON.KABUTOPS  ][""         ]["ico"] = "0141";
DEX_LIST[GAME.Ru][MON.AERODACTYL][""         ]["ico"] = "0142";
DEX_LIST[GAME.Ru][MON.SNORLAX   ][""         ]["ico"] = "0143";
DEX_LIST[GAME.Ru][MON.ARTICUNO  ][""         ]["ico"] = "0144";
DEX_LIST[GAME.Ru][MON.ZAPDOS    ][""         ]["ico"] = "0145";
DEX_LIST[GAME.Ru][MON.MOLTRES   ][""         ]["ico"] = "0146";
DEX_LIST[GAME.Ru][MON.DRATINI   ][""         ]["ico"] = "0147";
DEX_LIST[GAME.Ru][MON.DRAGONAIR ][""         ]["ico"] = "0148";
DEX_LIST[GAME.Ru][MON.DRAGONITE ][""         ]["ico"] = "0149";
DEX_LIST[GAME.Ru][MON.MEWTWO    ][""         ]["ico"] = "0150";
DEX_LIST[GAME.Ru][MON.MEW       ][""         ]["ico"] = "0151";
DEX_LIST[GAME.Ru][MON.CHIKORITA ][""         ]["ico"] = "0152";
DEX_LIST[GAME.Ru][MON.BAYLEEF   ][""         ]["ico"] = "0153";
DEX_LIST[GAME.Ru][MON.MEGANIUM  ][""         ]["ico"] = "0154";
DEX_LIST[GAME.Ru][MON.CYNDAQUIL ][""         ]["ico"] = "0155";
DEX_LIST[GAME.Ru][MON.QUILAVA   ][""         ]["ico"] = "0156";
DEX_LIST[GAME.Ru][MON.TYPHLOSION][""         ]["ico"] = "0157";
DEX_LIST[GAME.Ru][MON.TOTODILE  ][""         ]["ico"] = "0158";
DEX_LIST[GAME.Ru][MON.CROCONAW  ][""         ]["ico"] = "0159";
DEX_LIST[GAME.Ru][MON.FERALIGATR][""         ]["ico"] = "0160";
DEX_LIST[GAME.Ru][MON.SENTRET   ][""         ]["ico"] = "0161";
DEX_LIST[GAME.Ru][MON.FURRET    ][""         ]["ico"] = "0162";
DEX_LIST[GAME.Ru][MON.HOOTHOOT  ][""         ]["ico"] = "0163";
DEX_LIST[GAME.Ru][MON.NOCTOWL   ][""         ]["ico"] = "0164";
DEX_LIST[GAME.Ru][MON.LEDYBA    ][""         ]["ico"] = "0165";
DEX_LIST[GAME.Ru][MON.LEDIAN    ][""         ]["ico"] = "0166";
DEX_LIST[GAME.Ru][MON.SPINARAK  ][""         ]["ico"] = "0167";
DEX_LIST[GAME.Ru][MON.ARIADOS   ][""         ]["ico"] = "0168";
DEX_LIST[GAME.Ru][MON.CROBAT    ][""         ]["ico"] = "0169";
DEX_LIST[GAME.Ru][MON.CHINCHOU  ][""         ]["ico"] = "0170";
DEX_LIST[GAME.Ru][MON.LANTURN   ][""         ]["ico"] = "0171";
DEX_LIST[GAME.Ru][MON.PICHU     ][""         ]["ico"] = "0172";
DEX_LIST[GAME.Ru][MON.CLEFFA    ][""         ]["ico"] = "0173";
DEX_LIST[GAME.Ru][MON.IGGLYBUFF ][""         ]["ico"] = "0174";
DEX_LIST[GAME.Ru][MON.TOGEPI    ][""         ]["ico"] = "0175";
DEX_LIST[GAME.Ru][MON.TOGETIC   ][""         ]["ico"] = "0176";
DEX_LIST[GAME.Ru][MON.NATU      ][""         ]["ico"] = "0177";
DEX_LIST[GAME.Ru][MON.XATU      ][""         ]["ico"] = "0178";
DEX_LIST[GAME.Ru][MON.MAREEP    ][""         ]["ico"] = "0179";
DEX_LIST[GAME.Ru][MON.FLAAFFY   ][""         ]["ico"] = "0180";
DEX_LIST[GAME.Ru][MON.AMPHAROS  ][""         ]["ico"] = "0181";
DEX_LIST[GAME.Ru][MON.BELLOSSOM ][""         ]["ico"] = "0182";
DEX_LIST[GAME.Ru][MON.MARILL    ][""         ]["ico"] = "0183";
DEX_LIST[GAME.Ru][MON.AZUMARILL ][""         ]["ico"] = "0184";
DEX_LIST[GAME.Ru][MON.SUDOWOODO ][""         ]["ico"] = "0185";
DEX_LIST[GAME.Ru][MON.POLITOED  ][""         ]["ico"] = "0186";
DEX_LIST[GAME.Ru][MON.HOPPIP    ][""         ]["ico"] = "0187";
DEX_LIST[GAME.Ru][MON.SKIPLOOM  ][""         ]["ico"] = "0188";
DEX_LIST[GAME.Ru][MON.JUMPLUFF  ][""         ]["ico"] = "0189";
DEX_LIST[GAME.Ru][MON.AIPOM     ][""         ]["ico"] = "0190";
DEX_LIST[GAME.Ru][MON.SUNKERN   ][""         ]["ico"] = "0191";
DEX_LIST[GAME.Ru][MON.SUNFLORA  ][""         ]["ico"] = "0192";
DEX_LIST[GAME.Ru][MON.YANMA     ][""         ]["ico"] = "0193";
DEX_LIST[GAME.Ru][MON.WOOPER    ][""         ]["ico"] = "0194";
DEX_LIST[GAME.Ru][MON.QUAGSIRE  ][""         ]["ico"] = "0195";
DEX_LIST[GAME.Ru][MON.ESPEON    ][""         ]["ico"] = "0196";
DEX_LIST[GAME.Ru][MON.UMBREON   ][""         ]["ico"] = "0197";
DEX_LIST[GAME.Ru][MON.MURKROW   ][""         ]["ico"] = "0198";
DEX_LIST[GAME.Ru][MON.SLOWKING  ][""         ]["ico"] = "0199";
DEX_LIST[GAME.Ru][MON.MISDREAVUS][""         ]["ico"] = "0200";
DEX_LIST[GAME.Ru][MON.UNOWN     ][""         ]["ico"] = "0201";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-angry"   ]["ico"] = "0201-angry";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-bear"    ]["ico"] = "0201-bear";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-chase"   ]["ico"] = "0201-chase";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-direct"  ]["ico"] = "0201-direct";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-engage"  ]["ico"] = "0201-engage";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-find"    ]["ico"] = "0201-find";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-give"    ]["ico"] = "0201-give";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-help"    ]["ico"] = "0201-help";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-increase"]["ico"] = "0201-increase";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-join"    ]["ico"] = "0201-join";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-keep"    ]["ico"] = "0201-keep";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-laugh"   ]["ico"] = "0201-laugh";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-make"    ]["ico"] = "0201-make";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-nuzzle"  ]["ico"] = "0201-nuzzle";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-observe" ]["ico"] = "0201-observe";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-perform" ]["ico"] = "0201-perform";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-quicken" ]["ico"] = "0201-quicken";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-reassure"]["ico"] = "0201-reassure";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-search"  ]["ico"] = "0201-search";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-tell"    ]["ico"] = "0201-tell";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-undo"    ]["ico"] = "0201-undo";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-vanish"  ]["ico"] = "0201-vanish";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-want"    ]["ico"] = "0201-want";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-xxxxx"   ]["ico"] = "0201-xxxxx";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-yield"   ]["ico"] = "0201-yield";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-zoom"    ]["ico"] = "0201-zoom";
DEX_LIST[GAME.Ru][MON.WOBBUFFET ][""         ]["ico"] = "0202";
DEX_LIST[GAME.Ru][MON.GIRAFARIG ][""         ]["ico"] = "0203";
DEX_LIST[GAME.Ru][MON.PINECO    ][""         ]["ico"] = "0204";
DEX_LIST[GAME.Ru][MON.FORRETRESS][""         ]["ico"] = "0205";
DEX_LIST[GAME.Ru][MON.DUNSPARCE ][""         ]["ico"] = "0206";
DEX_LIST[GAME.Ru][MON.GLIGAR    ][""         ]["ico"] = "0207";
DEX_LIST[GAME.Ru][MON.STEELIX   ][""         ]["ico"] = "0208";
DEX_LIST[GAME.Ru][MON.SNUBBULL  ][""         ]["ico"] = "0209";
DEX_LIST[GAME.Ru][MON.GRANBULL  ][""         ]["ico"] = "0210";
DEX_LIST[GAME.Ru][MON.QWILFISH  ][""         ]["ico"] = "0211";
DEX_LIST[GAME.Ru][MON.SCIZOR    ][""         ]["ico"] = "0212";
DEX_LIST[GAME.Ru][MON.SHUCKLE   ][""         ]["ico"] = "0213";
DEX_LIST[GAME.Ru][MON.HERACROSS ][""         ]["ico"] = "0214";
DEX_LIST[GAME.Ru][MON.SNEASEL   ][""         ]["ico"] = "0215";
DEX_LIST[GAME.Ru][MON.TEDDIURSA ][""         ]["ico"] = "0216";
DEX_LIST[GAME.Ru][MON.URSARING  ][""         ]["ico"] = "0217";
DEX_LIST[GAME.Ru][MON.SLUGMA    ][""         ]["ico"] = "0218";
DEX_LIST[GAME.Ru][MON.MAGCARGO  ][""         ]["ico"] = "0219";
DEX_LIST[GAME.Ru][MON.SWINUB    ][""         ]["ico"] = "0220";
DEX_LIST[GAME.Ru][MON.PILOSWINE ][""         ]["ico"] = "0221";
DEX_LIST[GAME.Ru][MON.CORSOLA   ][""         ]["ico"] = "0222";
DEX_LIST[GAME.Ru][MON.REMORAID  ][""         ]["ico"] = "0223";
DEX_LIST[GAME.Ru][MON.OCTILLERY ][""         ]["ico"] = "0224";
DEX_LIST[GAME.Ru][MON.DELIBIRD  ][""         ]["ico"] = "0225";
DEX_LIST[GAME.Ru][MON.MANTINE   ][""         ]["ico"] = "0226";
DEX_LIST[GAME.Ru][MON.SKARMORY  ][""         ]["ico"] = "0227";
DEX_LIST[GAME.Ru][MON.HOUNDOUR  ][""         ]["ico"] = "0228";
DEX_LIST[GAME.Ru][MON.HOUNDOOM  ][""         ]["ico"] = "0229";
DEX_LIST[GAME.Ru][MON.KINGDRA   ][""         ]["ico"] = "0230";
DEX_LIST[GAME.Ru][MON.PHANPY    ][""         ]["ico"] = "0231";
DEX_LIST[GAME.Ru][MON.DONPHAN   ][""         ]["ico"] = "0232";
DEX_LIST[GAME.Ru][MON.PORYGON2  ][""         ]["ico"] = "0233";
DEX_LIST[GAME.Ru][MON.STANTLER  ][""         ]["ico"] = "0234";
DEX_LIST[GAME.Ru][MON.SMEARGLE  ][""         ]["ico"] = "0235";
DEX_LIST[GAME.Ru][MON.TYROGUE   ][""         ]["ico"] = "0236";
DEX_LIST[GAME.Ru][MON.HITMONTOP ][""         ]["ico"] = "0237";
DEX_LIST[GAME.Ru][MON.SMOOCHUM  ][""         ]["ico"] = "0238";
DEX_LIST[GAME.Ru][MON.ELEKID    ][""         ]["ico"] = "0239";
DEX_LIST[GAME.Ru][MON.MAGBY     ][""         ]["ico"] = "0240";
DEX_LIST[GAME.Ru][MON.MILTANK   ][""         ]["ico"] = "0241";
DEX_LIST[GAME.Ru][MON.BLISSEY   ][""         ]["ico"] = "0242";
DEX_LIST[GAME.Ru][MON.RAIKOU    ][""         ]["ico"] = "0243";
DEX_LIST[GAME.Ru][MON.ENTEI     ][""         ]["ico"] = "0244";
DEX_LIST[GAME.Ru][MON.SUICUNE   ][""         ]["ico"] = "0245";
DEX_LIST[GAME.Ru][MON.LARVITAR  ][""         ]["ico"] = "0246";
DEX_LIST[GAME.Ru][MON.PUPITAR   ][""         ]["ico"] = "0247";
DEX_LIST[GAME.Ru][MON.TYRANITAR ][""         ]["ico"] = "0248";
DEX_LIST[GAME.Ru][MON.LUGIA     ][""         ]["ico"] = "0249";
DEX_LIST[GAME.Ru][MON.HO_OH     ][""         ]["ico"] = "0250";
DEX_LIST[GAME.Ru][MON.CELEBI    ][""         ]["ico"] = "0251";
// new formes
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-emark"   ] = {ico: "0201-emark",   name: "Unown !!!!!", flags: []};
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-qmark"   ] = {ico: "0201-qmark",   name: "Unown ?????", flags: []};

DEX_LIST[GAME.Sa] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.FR] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.FR][MON.DEOXYS    ][""         ]["ico"] = "0386-attack";
DEX_LIST[GAME.LG] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.LG][MON.DEOXYS    ][""         ]["ico"] = "0386-defense";
DEX_LIST[GAME.Em] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.Em][MON.DEOXYS    ][""         ]["ico"] = "0386-speed";
