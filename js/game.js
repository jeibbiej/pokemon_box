/*
var _Regdex_XX =
{
    id          : _GameId._XX,
	code        : "XX",
	name        : _GameNames._XX,
	icoPath     : "",
	rList       : {},
	nList       : {},
	eList       : {},
	imgWd       : 0,
	boxCap      : 0,
	divBox      : 0,
}
*/

//==============================================================================
// GAME IDs
//==============================================================================

// generations
const Generation01 = 100;
const Generation02 = 200;
const Generation03 = 300;
const Generation04 = 400;
const Generation05 = 500;
const Generation06 = 600;
const Generation07 = 700;
const Generation08 = 800;
const Generation09 = 900;
// side series
const SS_Ba = 10;	// Battle Stadium and the like
const SS_PB = 15;	// Pinball
const SS_PC = 20;	// PC Storage System
const SS_MD = 25;	// Mystery Dungeon
const SS_Ra = 30;	// Ranger
const SS_DW = 35;	// Dream World
const SS_Pz = 40;	// puzzle games
const SS_DP = 45;	// Detective Pikachu
const SS_PT = 50;	// Pokken Tournament
const SS_Ru = 55;	// Rumble
const SS_Sn = 60;	// Snap
const SS_XX = 90;	// Others

//https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_games
/*1996-02-27*/const _Re = Generation01 + 1;			// Red
/*1996-02-27*/const _Gr = Generation01 + 2;			// Green
/*1996-10-15*/const _Bl = Generation01 + 3; 		// Blue
/*1998-09-12*/const _Ye = Generation01 + 4; 		// Yellow
/*1998-08-01*/const _St = Generation01 + SS_Ba + 1;	// Stadium
/*1999-04-14*/const _PB = Generation01 + SS_PB + 1;	// Pinball
/*2000-09-25*/const _PL = Generation01 + SS_Pz + 1;	// Puzzle League
/*1999-03-21*/const _Sn = Generation01 + SS_Sn + 1;	// Snap

/*1999-11-21*/const _Go = Generation02 + 1; 		// Gold
/*1999-11-21*/const _Si = Generation02 + 2; 		// Silver
/*2000-12-14*/const _Cr = Generation02 + 3; 		// Crystal
/*2000-12-14*/const _S2 = Generation02 + SS_Ba + 1;	// Stadium 2
/*2000-09-21*/const _PC = Generation02 + SS_Pz + 1; // Puzzle Challenge

/*2002-11-21*/const _Ru = Generation03 + 1; 		// Ruby
/*2002-11-21*/const _Sa = Generation03 + 2; 		// Sapphire
/*2004-01-29*/const _FR = Generation03 + 3; 		// FireRed
/*2004-01-29*/const _LG = Generation03 + 4; 		// LeafGreen
/*2004-09-16*/const _Em = Generation03 + 5; 		// Emerald
/*2003-11-21*/const _Co = Generation03 + SS_Ba + 1;	// Colosseum
/*2005-08-04*/const _XD = Generation03 + SS_Ba + 2;	// XD: Gale of Darkness
/*2003-08-01*/const PRS = Generation03 + SS_PB + 1;	// Pinball: Ruby & Sapphire
/*2003-05-30*/const BRS = Generation03 + SS_PC + 1;	// Box: Ruby & Sapphire
/*2005-11-17*/const MDr = Generation03 + SS_MD + 1;	// Mystery Dungeon: Red Rescue Team
/*2005-11-17*/const MDb = Generation03 + SS_MD + 2;	// Mystery Dungeon: Red Rescue Team
/*2006-03-23*/const RRa = Generation03 + SS_Ra + 1;	// Ranger
/*2005-10-20*/const Trz = Generation03 + SS_Pz + 1;	// Trozei!
/*2024-10-02*/const Dsh = Generation03 + SS_XX + 1;	// Dash

/*2006-09-28*/const _Di = Generation04 + 1;			// Diamond
/*2006-09-28*/const _Pe = Generation04 + 2;			// Pearl
/*2008-09-13*/const _Pl = Generation04 + 7;			// Platinum
/*2009-09-12*/const _HG = Generation04 + 8;			// HeartGold
/*2009-09-12*/const _SS = Generation04 + 9;			// SoulSilver
/*2006-12-14*/const _BR = Generation04 + SS_Ba + 1;	// Battle Revolution
/*2008-03-20*/const RSA = Generation04 + SS_Ra + 1;	// Ranger: Shadows of Almia
/*2010-03-06*/const RGS = Generation04 + SS_Ra + 2;	// Ranger: Guardian Signs
/*2008-03-25*/const _PR = Generation04 + SS_PC + 1;	// My Pokemon Ranch
/*2009-04-18*/const MDs = Generation04 + SS_MD + 1;	// Mystery Dungeon: Explorer of Sky
/*2009-06-16*/const Ru_ = Generation04 + SS_Ru + 1;	// Rumble

/*2010-09-18*/const _Bk = Generation05 + 1;			// Black
/*2010-09-18*/const _Wh = Generation05 + 2;			// White
/*2012-06-23*/const _B2 = Generation05 + 3;			// Black2
/*2012-06-23*/const _W2 = Generation05 + 4;			// White2
/*2010-09-18*/const _DW = Generation05 + SS_DW + 1;	// Dream World
/*2012-06-23*/const _DR = Generation05 + SS_DW + 2;	// Dream Radar
/*2012-11-23*/const MDi = Generation05 + SS_MD + 1; // Mytery Dungeon: Gates to Infinity
/*2011-08-11*/const RuB = Generation05 + SS_Ru + 1;	// Rumble Blast
/*2013-04-24*/const RuU = Generation05 + SS_Ru + 2;	// Rumble U
/*2012-03-17*/const Cnq = Generation05 + SS_XX + 1;	// Conquest

/*2013-10-12*/const _X_ = Generation06 + 1;			// X
/*2013-10-12*/const _Y_ = Generation06 + 2;			// Y
/*2014-11-21*/const _oR = Generation06 + 3;			// omega Ruby
/*2014-11-21*/const _aS = Generation06 + 4;			// alpha Sapphire
/*2013-10-25*/const _Ba = Generation06 + SS_PC + 1;	// Bank + Transporter
/*2016-06-06*/const _GO = Generation06 + SS_XX + 1;	// GO
/*2015-09-17*/const MDS = Generation06 + SS_MD + 1;	// Super Mystery Dungeon
/*2015-12-02*/const _Px = Generation06 + SS_Pz + 1;	// Picross
/*2015-02-18*/const Sh_ = Generation06 + SS_Pz + 2;	// Shuffle
/*2015-08-24*/const ShM = Generation06 + SS_Pz + 3;	// Shuffle Mobile
/*2014-03-12*/const BTr = Generation06 + SS_Pz + 4;	// Battle Trozei
/*2016-03-18*/const _PT = Generation06 + SS_PT + 1;	// Pokken Tournament
/*2015-04-08*/const RuW = Generation06 + SS_Ru + 1;	// Rumble World

/*2016-11-18*/const _Su = Generation07 + 1; 		// Sun
/*2016-11-18*/const _Mo = Generation07 + 2; 		// Moon
/*2017-11-17*/const _US = Generation07 + 3; 		// Ultra Sun
/*2017-11-17*/const _UM = Generation07 + 4; 		// Ultra Moon
/*2018-11-16*/const _LP = Generation07 + 6; 		// Let's Go, Pikachu!
/*2018-11-16*/const _LE = Generation07 + 7; 		// Let's Go, Eevee!
/*2018-05-30*/const _Qu = Generation07 + SS_XX + 1; // Quest
/*2017-05-17*/const MJp = Generation07 + SS_XX + 2;	// Magikarp Jump
/*2018-05-30*/const Qst = Generation07 + SS_XX + 3;	// Quest
/*2019-08-09*/const MEx = Generation07 + SS_XX + 4;	// Masters Ex
/*2018-03-23*/const _DP = Generation07 + SS_DP + 1; // Detective Pikachu
/*2017-09-22*/const PTx = Generation07 + SS_PT + 1; // Pokken Tournament DX
/*2019-05-15*/const RuR = Generation07 + SS_Ru + 1;	// Rumble Rush

/*2018-11-15*/const _Sw = Generation08 + 1; 		// Sword
/*2018-11-15*/const _Sh = Generation08 + 2; 		// Shield
/*2020-06-17*/const _IA = Generation08 + 3; 		// Sword & Shield: The Isle of Armor
/*2020-10-22*/const _CT = Generation08 + 4; 		// Sword & Shield: The Crown Tundra
/*2021-11-19*/const _BD = Generation08 + 5; 		// Brilliant Diamond
/*2021-11-19*/const _SP = Generation08 + 6; 		// Shining Pearl
/*2022-01-28*/const _LA = Generation08 + 7; 		// Legends: Arceus
/*2020-02-12*/const _Ho = Generation08 + SS_PC + 1; // Home
/*2020-03-06*/const MDx = Generation08 + SS_MD + 1;	// Mystery Dungeon: Rescue Team DX
/*2021-04-30*/const nSn = Generation08 + SS_Sn + 1;	// New Snap
/*2020-06-24*/const CRe = Generation08 + SS_Pz + 1;	// Cafe Remix
/*2021-07-21*/const Unt = Generation08 + SS_XX + 1;	// UNITE
/*2020-06-17*/const Sml = Generation08 + SS_XX + 2;	// Smile

/*2022-11-18*/const _Sc = Generation09 + 1; 		// Scarlet
/*2022-11-18*/const _Vi = Generation09 + 2; 		// Violet
/*2023-09-13*/const _TM = Generation09 + 3; 		// Scarlet & Violet: The Hidden Treasure of Area Zero - The Teal Mask
/*2023-09-13*/const _ID = Generation09 + 4; 		// Scarlet & Violet: The Hidden Treasure of Area Zero - The Indigo Disk
/*2023-10-06*/const DPR = Generation09 + SS_DP + 1;	// Detective Pikachu Returns
/*2023-07-16*/const Slp = Generation09 + SS+XX + 1;	// Sleep

//==============================================================================
// LANGUAGE ID
//==============================================================================

const _JPN = 0; // Japanese Kana
const _ROM = 1; // Japanese Romanji
const _ENG = 2; // English
const _SPA = 3; // Spanish
const _FRE = 4; // French
const _GER = 5; // German
const _ITA = 6; // Italian
const _KOR = 7; // Korean
const _CHS = 8; // Chinese (Simplified)
const _CHT = 9; // Chinese (Traditional)

                    /* 0    1    2    3    4    5    6    7    8*/
const GenerationMax = [0, 151, 251, 386, 493, 649, 721, 809, 893];

const _GameVersions =
{
    Unk: {id: -1, icoPath: "", rDex: {}, nDex: {}, eDex: {}, code:"Unk", name: "<i>Unknown</i>"},

    _Re	: {code: "Re",   name: "Pokémon Red",                ico: "custom/red",             icoPath: IcoPathReBl, nDex: _Regdex_n_101, eDex: {},            rDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, flags: [FORM_MAJ_GENDER_DIFF]},
	_Bl	: {code: "Bl",   name: "Pokémon Blue",               ico: "custom/blue",            icoPath: IcoPathReBl, nDex: _Regdex_n_101, eDex: {},            rDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, flags: [FORM_MAJ_GENDER_DIFF]},
	_Ye	: {code: "Ye",   name: "Pokémon Yellow",             ico: "custom/yellow",          icoPath: IcoPathYe,   nDex: _Regdex_n_102, eDex: {},            rDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, flags: [FORM_MAJ_GENDER_DIFF]},
	_Go	: {code: "Go",   name: "Pokémon Gold",               ico: "custom/gold",            icoPath: IcoPathGoSi, nDex: _Regdex_n_201, eDex: _Regdex_e_201, rDex: _Regdex_r_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, flags: [FORM_MAJ_GENDER_DIFF]},
	_Si	: {code: "Si",   name: "Pokémon Silver",             ico: "custom/silver",          icoPath: IcoPathGoSi, nDex: _Regdex_n_201, eDex: _Regdex_e_201, rDex: _Regdex_r_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, flags: [FORM_MAJ_GENDER_DIFF]},
	_Cr	: {code: "Cr",   name: "Pokémon Crystal",            ico: "custom/crystal",         icoPath: IcoPathCr,   nDex: _Regdex_n_201, eDex: _Regdex_e_201, rDex: _Regdex_r_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, flags: [FORM_MAJ_GENDER_DIFF]},
	_Ru	: {code: "Ru",   name: "Pokémon Ruby",               ico: "custom/ruby",            icoPath: IcoPathRuSa, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_BASE]},
	_Sa	: {code: "Sa",   name: "Pokémon Sapphire",           ico: "custom/sapphire",        icoPath: IcoPathRuSa, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_BASE]},
	_FR	: {code: "FR",   name: "Pokémon FireRed",            ico: "custom/firered_",        icoPath: IcoPathFRLG, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_302, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_FR]},
	_LG	: {code: "LG",   name: "Pokémon LeafGreen",          ico: "custom/leafgreen_",      icoPath: IcoPathFRLG, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_302, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_LG]},
	_Em	: {code: "Em",   name: "Pokémon Emerald",            ico: "custom/emerald",         icoPath: IcoPathEm,   nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_Em]},
	_Di	: {code: "Di",   name: "Pokémon Diamond",            ico: "custom/diamond",         icoPath: IcoPathDiPe, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_401, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0479_BASE, FORM_0487_BASE, FORM_0492_BASE]},
	_Pe	: {code: "Pe",   name: "Pokémon Pearl",              ico: "custom/pearl",           icoPath: IcoPathDiPe, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_401, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0479_BASE, FORM_0487_BASE, FORM_0492_BASE]},
	_Pl	: {code: "Pl",   name: "Pokémon Platinum",           ico: "custom/platinum",        icoPath: IcoPathPl,   nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_402, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF]},
	_HG	: {code: "HG",   name: "Pokémon HeartGold",          ico: "custom/heartgold",       icoPath: IcoPathHGSS, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_403, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0172_HGSS]},
	_SS	: {code: "SS",   name: "Pokémon SoulSilver",         ico: "custom/soulsilver",      icoPath: IcoPathHGSS, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_403, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0172_HGSS]},
	_Bk	: {code: "Bk",   name: "Pokémon Black",              ico: "black",                  icoPath: IcoPathBkWh, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_501, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF, FORM_0641_BASE, FORM_0642_BASE, FORM_0645_BASE, FORM_0646_BASE, FORM_0647_BASE, FORM_0648_BASE, FORM_0649_BASE]},
	_Wh	: {code: "Wh",   name: "Pokémon White",              ico: "white",                  icoPath: IcoPathBkWh, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_501, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF, FORM_0641_BASE, FORM_0642_BASE, FORM_0645_BASE, FORM_0646_BASE, FORM_0647_BASE, FORM_0648_BASE, FORM_0649_BASE]},
	_B2	: {code: "B2",   name: "Pokémon Black 2",            ico: "black2",                 icoPath: IcoPathB2W2, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_502, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF]},
	_W2	: {code: "W2",   name: "Pokémon White 2",            ico: "white2",                 icoPath: IcoPathB2W2, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_502, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF]},
	_X_	: {code: "X",    name: "Pokémon X",                  ico: "x",                      icoPath: IcoPathX_Y_, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	_Y_	: {code: "Y",    name: "Pokémon Y",                  ico: "y",                      icoPath: IcoPathX_Y_, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	_oR	: {code: "oR",   name: "Pokémon Omega Ruby",         ico: "omega-ruby",             icoPath: IcoPathoRaS, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	_aS	: {code: "aS",   name: "Pokémon Alpha Sapphire",     ico: "alpha-sapphire",         icoPath: IcoPathoRaS, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	_Su	: {code: "Su",   name: "Pokémon Sun",                ico: "sun",                    icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	_Mo	: {code: "Mo",   name: "Pokémon Moon",               ico: "moon",                   icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	_US	: {code: "US",   name: "Pokémon Ultra Sun",          ico: "ultra-sun",              icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	_UM	: {code: "UM",   name: "Pokémon Ultra Moon",         ico: "ultra-moon",             icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	_LP	: {code: "LP",   name: "Pokémon Let's GO, Pikachu!", ico: "custom/lets-go-pikachu", icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	_LE	: {code: "LE",   name: "Pokémon Let's GO, Eevee!",   ico: "custom/lets-go-eevee",   icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	_Sw	: {code: "Sw",   name: "Pokémon Sword",              ico: "sword",                  icoPath: IcoPathSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, rDex: _Regdex_rSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, boxCap: BoxCap_G08, divBox: DivBox_G08, flags: [FORM_MAJ_GENDER_DIFF]},
	_Sh	: {code: "Sh",   name: "Pokémon Shield",             ico: "shield",                 icoPath: IcoPathSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, rDex: _Regdex_rSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, boxCap: BoxCap_G08, divBox: DivBox_G08, flags: [FORM_MAJ_GENDER_DIFF]},
	_BD	: {code: "BD",   name: "Pokémon Brilliant Diamond",  ico: "",                       icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	_SP	: {code: "SP",   name: "Pokémon Shining Pearl",      ico: "",                       icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},

	LS_493	: {id: LegendsSeries + 1, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "LS_493", name: "Pokémon Legends: Arceus"},

	RS_Ra	: {id: RangerSeries + 1, ico: "custom/ranger",  icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "RS_Ra", name: "Pokémon Ranger"},
	RS_SA	: {id: RangerSeries + 2, ico: "custom/ranger2", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "RS_SA", name: "Pokémon Ranger: Shadows of Almia"},
	RS_GS	: {id: RangerSeries + 3, ico: "custom/ranger3", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "RS_GS", name: "Pokémon Ranger: Guardian Signs"},

	Pz_PL	: {id: PuzzleSeries + 1, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "Pz_PL", name: "Pokémon Puzzle League"},
	Pz_PC	: {id: PuzzleSeries + 2, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "Pz_PC", name: "Pokémon Puzzle Challenge"},
	Pz_Tr	: {id: PuzzleSeries + 3, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "Pz_Tr", name: "Pokémon Trozei!"},
	Pz_BT	: {id: PuzzleSeries + 4, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "Pz_BT", name: "Pokémon Battle Trozei"},
	Pz_Sh	: {id: PuzzleSeries + 5, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "Pz_Sh", name: "Pokémon Shuffle"},
	Pz_Pc	: {id: PuzzleSeries + 6, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "Pz_Pc", name: "Pokémon Picross"},
	Pz_CM	: {id: PuzzleSeries + 7, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, boxCap: 0, divBox: 0, code: "Pz_CM", name: "Pokémon Café Mix"},

	SS_BoxRS	: {id: StorageSystem + 1, ico: "",            icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         boxCap: 0,          divBox: 0,          code: "SS_BoxRS", name: "Pokémon Box Ruby & Sapphire"},
	SS_Ranch	: {id: StorageSystem + 2, ico: "",            icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         boxCap: 0,          divBox: 0,          code: "SS_Ranch", name: "My Pokémon Ranch"},
	SS_Bank		: {id: StorageSystem + 3, ico: "bank",        icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         boxCap: 0,          divBox: 0,          code: "SS_Bank",  name: "Pokémon Bank"},
	SS_Home		: {id: StorageSystem + 4, ico: "custom/home", icoPath: IcoPathSSHome, rDex: {}, nDex: _Regdex_nHome, eDex: _Regdex_eHome, imgWd: ImgWd_G08, boxCap: BoxCap_G08, divBox: DivBox_G08, code: "SS_Home",  name: "Pokémon HOME"},

    vcRe: {id: VirtualConsole + MainSeries + 1,	ico: "custom/vc-red",     icoPath: IcoPathReBl, rDex: {},            nDex: _Regdex_n_101, eDex: {},            imgWd: ImgWd_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, code: "vcRe", name: "Virtual Console: Pokémon Red"},
	vcBl: {id: VirtualConsole + MainSeries + 2,	ico: "custom/vc-blue",    icoPath: IcoPathReBl, rDex: {},            nDex: _Regdex_n_101, eDex: {},            imgWd: ImgWd_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, code: "vcBl", name: "Virtual Console: Pokémon Blue"},
	vcYe: {id: VirtualConsole + MainSeries + 3,	ico: "custom/vc-yellow",  icoPath: IcoPathYe,   rDex: {},            nDex: _Regdex_n_102, eDex: {},            imgWd: ImgWd_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, code: "vcYe", name: "Virtual Console: Pokémon Yellow"},
	vcGo: {id: VirtualConsole + MainSeries + 4,	ico: "custom/vc-gold",    icoPath: IcoPathGoSi, rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, code: "vcGo", name: "Virtual Console: Pokémon Gold"},
	vcSi: {id: VirtualConsole + MainSeries + 5,	ico: "custom/vc-silver",  icoPath: IcoPathGoSi, rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, code: "vcSi", name: "Virtual Console: Pokémon Silver"},
	vcCr: {id: VirtualConsole + MainSeries + 6,	ico: "custom/vc-crystal", icoPath: IcoPathCr,   rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, code: "vcCr", name: "Virtual Console: Pokémon Crystal"},
}
