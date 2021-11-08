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

// game series
const MainSeries		=    0;
const LegendsSeries		=  100;
const RangerSeries		=  200;
const StorageSystem		=  300;
const PinballSeries		=  400;
const PuzzleSeries		=  500;
const OtherSeries		=  600;
const VirtualConsole	= 1000; // combine with above
/*
PinballSeries
TrozeiSeries
OtherSeries
*/

                    /* 0    1    2    3    4    5    6    7    8*/
const GenerationMax = [0, 151, 251, 386, 493, 649, 721, 809, 893];

const _GameVersions =
{
    Unk: {id: -1, icoPath: "", rDex: {}, nDex: {}, eDex: {}, code:"Unk", name: "<i>Unknown</i>"},

    Re	: {id: MainSeries +  1,	code: "Re",   name: "Pokémon Red",                ico: "custom/red",             icoPath: IcoPathReBl, nDex: _Regdex_n_101, eDex: {},            rDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, flags: [FORM_MAJ_GENDER_DIFF]},
	Bl	: {id: MainSeries +  2,	code: "Bl",   name: "Pokémon Blue",               ico: "custom/blue",            icoPath: IcoPathReBl, nDex: _Regdex_n_101, eDex: {},            rDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, flags: [FORM_MAJ_GENDER_DIFF]},
	Ye	: {id: MainSeries +  3,	code: "Ye",   name: "Pokémon Yellow",             ico: "custom/yellow",          icoPath: IcoPathYe,   nDex: _Regdex_n_102, eDex: {},            rDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, boxCap: BoxCap_G01, divBox: DivBox_G01, flags: [FORM_MAJ_GENDER_DIFF]},
	Go	: {id: MainSeries +  4,	code: "Go",   name: "Pokémon Gold",               ico: "custom/gold",            icoPath: IcoPathGoSi, nDex: _Regdex_n_201, eDex: _Regdex_e_201, rDex: _Regdex_r_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, flags: [FORM_MAJ_GENDER_DIFF]},
	Si	: {id: MainSeries +  5,	code: "Si",   name: "Pokémon Silver",             ico: "custom/silver",          icoPath: IcoPathGoSi, nDex: _Regdex_n_201, eDex: _Regdex_e_201, rDex: _Regdex_r_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, flags: [FORM_MAJ_GENDER_DIFF]},
	Cr	: {id: MainSeries +  6,	code: "Cr",   name: "Pokémon Crystal",            ico: "custom/crystal",         icoPath: IcoPathCr,   nDex: _Regdex_n_201, eDex: _Regdex_e_201, rDex: _Regdex_r_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, boxCap: BoxCap_G02, divBox: DivBox_G02, flags: [FORM_MAJ_GENDER_DIFF]},
	Ru	: {id: MainSeries +  7,	code: "Ru",   name: "Pokémon Ruby",               ico: "custom/ruby",            icoPath: IcoPathRuSa, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_BASE]},
	Sa	: {id: MainSeries +  8,	code: "Sa",   name: "Pokémon Sapphire",           ico: "custom/sapphire",        icoPath: IcoPathRuSa, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_BASE]},
	FR	: {id: MainSeries +  9,	code: "FR",   name: "Pokémon FireRed",            ico: "custom/firered_",        icoPath: IcoPathFRLG, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_302, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_FR]},
	LG	: {id: MainSeries + 10,	code: "LG",   name: "Pokémon LeafGreen",          ico: "custom/leafgreen_",      icoPath: IcoPathFRLG, nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_302, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_LG]},
	Em	: {id: MainSeries + 11,	code: "Em",   name: "Pokémon Emerald",            ico: "custom/emerald",         icoPath: IcoPathEm,   nDex: _Regdex_n_301, eDex: _Regdex_e_301, rDex: _Regdex_r_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, boxCap: BoxCap_G03, divBox: DivBox_G03, flags: [FORM_MAJ_GENDER_DIFF, FORM_0386_Em]},
	Di	: {id: MainSeries + 12,	code: "Di",   name: "Pokémon Diamond",            ico: "custom/diamond",         icoPath: IcoPathDiPe, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_401, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0479_BASE, FORM_0487_BASE, FORM_0492_BASE]},
	Pe	: {id: MainSeries + 13,	code: "Pe",   name: "Pokémon Pearl",              ico: "custom/pearl",           icoPath: IcoPathDiPe, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_401, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0479_BASE, FORM_0487_BASE, FORM_0492_BASE]},
	Pl	: {id: MainSeries + 14,	code: "Pl",   name: "Pokémon Platinum",           ico: "custom/platinum",        icoPath: IcoPathPl,   nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_402, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF]},
	HG	: {id: MainSeries + 15,	code: "HG",   name: "Pokémon HeartGold",          ico: "custom/heartgold",       icoPath: IcoPathHGSS, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_403, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0172_HGSS]},
	SS	: {id: MainSeries + 16,	code: "SS",   name: "Pokémon SoulSilver",         ico: "custom/soulsilver",      icoPath: IcoPathHGSS, nDex: _Regdex_n_401, eDex: _Regdex_e_401, rDex: _Regdex_r_403, imgWd: ImgWd_G04, maxBox: MaxBox_G04, boxCap: BoxCap_G04, divBox: DivBox_G04, flags: [FORM_MAJ_GENDER_DIFF, FORM_0172_HGSS]},
	Bk	: {id: MainSeries + 17,	code: "Bk",   name: "Pokémon Black",              ico: "black",                  icoPath: IcoPathBkWh, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_501, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF, FORM_0641_BASE, FORM_0642_BASE, FORM_0645_BASE, FORM_0646_BASE, FORM_0647_BASE, FORM_0648_BASE, FORM_0649_BASE]},
	Wh	: {id: MainSeries + 18,	code: "Wh",   name: "Pokémon White",              ico: "white",                  icoPath: IcoPathBkWh, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_501, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF, FORM_0641_BASE, FORM_0642_BASE, FORM_0645_BASE, FORM_0646_BASE, FORM_0647_BASE, FORM_0648_BASE, FORM_0649_BASE]},
	B2	: {id: MainSeries + 19,	code: "B2",   name: "Pokémon Black 2",            ico: "black2",                 icoPath: IcoPathB2W2, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_502, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF]},
	W2	: {id: MainSeries + 20,	code: "W2",   name: "Pokémon White 2",            ico: "white2",                 icoPath: IcoPathB2W2, nDex: _Regdex_n_501, eDex: _Regdex_e_501, rDex: _Regdex_r_502, imgWd: ImgWd_G05, maxBox: MaxBox_G05, boxCap: BoxCap_G05, divBox: DivBox_G05, flags: [FORM_MAJ_GENDER_DIFF]},
	X_	: {id: MainSeries + 21,	code: "X_",   name: "Pokémon X",                  ico: "x",                      icoPath: IcoPathX_Y_, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	Y_	: {id: MainSeries + 22,	code: "Y_",   name: "Pokémon Y",                  ico: "y",                      icoPath: IcoPathX_Y_, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	oR	: {id: MainSeries + 23,	code: "oR",   name: "Pokémon Omega Ruby",         ico: "omega-ruby",             icoPath: IcoPathoRaS, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	aS	: {id: MainSeries + 24,	code: "aS",   name: "Pokémon Alpha Sapphire",     ico: "alpha-sapphire",         icoPath: IcoPathoRaS, nDex: _Regdex_n_601, eDex: _Regdex_n_601, rDex: _Regdex_n_601, imgWd: ImgWd_G06, maxBox: MaxBox_G06, boxCap: BoxCap_G06, divBox: DivBox_G06, flags: [FORM_MAJ_GENDER_DIFF]},
	Su	: {id: MainSeries + 28,	code: "Su",   name: "Pokémon Sun",                ico: "sun",                    icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	Mo	: {id: MainSeries + 29,	code: "Mo",   name: "Pokémon Moon",               ico: "moon",                   icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	US	: {id: MainSeries + 32,	code: "US",   name: "Pokémon Ultra Sun",          ico: "ultra-sun",              icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	UM	: {id: MainSeries + 33,	code: "UM",   name: "Pokémon Ultra Moon",         ico: "ultra-moon",             icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	LP	: {id: MainSeries + 35,	code: "LP",   name: "Pokémon Let's GO, Pikachu!", ico: "custom/lets-go-pikachu", icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	LE	: {id: MainSeries + 36,	code: "LE",   name: "Pokémon Let's GO, Eevee!",   ico: "custom/lets-go-eevee",   icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	Sw	: {id: MainSeries + 37,	code: "Sw",   name: "Pokémon Sword",              ico: "sword",                  icoPath: IcoPathSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, rDex: _Regdex_rSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, boxCap: BoxCap_G08, divBox: DivBox_G08, flags: [FORM_MAJ_GENDER_DIFF]},
	Sh	: {id: MainSeries + 38,	code: "Sh",   name: "Pokémon Shield",             ico: "shield",                 icoPath: IcoPathSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, rDex: _Regdex_rSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, boxCap: BoxCap_G08, divBox: DivBox_G08, flags: [FORM_MAJ_GENDER_DIFF]},
	BD	: {id: MainSeries + 39,	code: "BD",   name: "Pokémon Brilliant Diamond",  ico: "",                       icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},
	SP	: {id: MainSeries + 40,	code: "SP",   name: "Pokémon Shining Pearl",      ico: "",                       icoPath: "",          nDex: {},            eDex: {},            rDex: {},            imgWd: 0,         maxBox: 0,          boxCap: 0,          divBox: 0,          flags: [FORM_MAJ_GENDER_DIFF]},

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
