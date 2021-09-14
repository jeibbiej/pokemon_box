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
	maxBox      : 0,
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

    Re	: {id: MainSeries +  1,	ico: "custom/red",             icoPath: IcoPathReBl, rDex: {},            nDex: _Regdex_n_101, eDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "Re",   name: "Pokémon Red"},
	Bl	: {id: MainSeries +  2,	ico: "custom/blue",            icoPath: IcoPathReBl, rDex: {},            nDex: _Regdex_n_101, eDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "Bl",   name: "Pokémon Blue"},
	Ye	: {id: MainSeries +  3,	ico: "custom/yellow",          icoPath: IcoPathYe,   rDex: {},            nDex: _Regdex_n_102, eDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "Ye",   name: "Pokémon Yellow"},
	Go	: {id: MainSeries +  4,	ico: "custom/gold",            icoPath: IcoPathGoSi, rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "Go",   name: "Pokémon Gold"},
	Si	: {id: MainSeries +  5,	ico: "custom/silver",          icoPath: IcoPathGoSi, rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "Si",   name: "Pokémon Silver"},
	Cr	: {id: MainSeries +  6,	ico: "custom/crystal",         icoPath: IcoPathCr,   rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "Cr",   name: "Pokémon Crystal"},
	Ru	: {id: MainSeries +  7,	ico: "custom/ruby",            icoPath: IcoPathRuSa, rDex: _Regdex_r_301, nDex: _Regdex_n_301, eDex: _Regdex_e_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, divBox: DivBox_G03, code: "Ru",   name: "Pokémon Ruby"},
	Sa	: {id: MainSeries +  8,	ico: "custom/sapphire",        icoPath: IcoPathRuSa, rDex: _Regdex_r_301, nDex: _Regdex_n_301, eDex: _Regdex_e_301, imgWd: ImgWd_G03, maxBox: MaxBox_G03, divBox: DivBox_G03, code: "Sa",   name: "Pokémon Sapphire"},
	FR	: {id: MainSeries +  9,	ico: "custom/firered_",        icoPath: IcoPathFRLG, rDex: _Regdex_r_302, nDex: _Regdex_n_302, eDex: _Regdex_e_302, imgWd: ImgWd_G03, maxBox: MaxBox_G03, divBox: DivBox_G03, code: "FR",   name: "Pokémon FireRed"},
	LG	: {id: MainSeries + 10,	ico: "custom/leafgreen_",      icoPath: IcoPathFRLG, rDex: _Regdex_r_303, nDex: _Regdex_n_303, eDex: _Regdex_e_303, imgWd: ImgWd_G03, maxBox: MaxBox_G03, divBox: DivBox_G03, code: "LG",   name: "Pokémon LeafGreen"},
	Em	: {id: MainSeries + 11,	ico: "custom/emerald",         icoPath: IcoPathEm,   rDex: _Regdex_r_304, nDex: _Regdex_n_304, eDex: _Regdex_e_304, imgWd: ImgWd_G03, maxBox: MaxBox_G03, divBox: DivBox_G03, code: "Em",   name: "Pokémon Emerald"},
	Di	: {id: MainSeries + 12,	ico: "custom/diamond",         icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Di",   name: "Pokémon Diamond"},
	Pe	: {id: MainSeries + 13,	ico: "custom/pearl",           icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Pe",   name: "Pokémon Pearl"},
	Pl	: {id: MainSeries + 14,	ico: "custom/platinum",        icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Pl",   name: "Pokémon Platinum"},
	HG	: {id: MainSeries + 15,	ico: "custom/heartgold",       icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "HG",   name: "Pokémon HeartGold"},
	SS	: {id: MainSeries + 16,	ico: "custom/soulsilver",      icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS",   name: "Pokémon SoulSilver"},
	Bk	: {id: MainSeries + 17,	ico: "black",                  icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Bk",   name: "Pokémon Black"},
	Wh	: {id: MainSeries + 18,	ico: "white",                  icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Wh",   name: "Pokémon White"},
	B2	: {id: MainSeries + 19,	ico: "black2",                 icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "B2",   name: "Pokémon Black 2"},
	W2	: {id: MainSeries + 20,	ico: "white2",                 icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "W2",   name: "Pokémon White 2"},
	X_	: {id: MainSeries + 21,	ico: "x",                      icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "X",    name: "Pokémon X"},
	Y_	: {id: MainSeries + 22,	ico: "y",                      icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Y",    name: "Pokémon Y"},
	oR	: {id: MainSeries + 23,	ico: "omega-ruby",             icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "oR",   name: "Pokémon Omega Ruby"},
	aS	: {id: MainSeries + 24,	ico: "alpha-sapphire",         icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "aS",   name: "Pokémon Alpha Sapphire"},
	Su	: {id: MainSeries + 28,	ico: "sun",                    icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Su",   name: "Pokémon Sun"},
	Mo	: {id: MainSeries + 29,	ico: "moon",                   icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Mo",   name: "Pokémon Moon"},
	US	: {id: MainSeries + 32,	ico: "ultra-sun",              icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "US",   name: "Pokémon Ultra Sun"},
	UM	: {id: MainSeries + 33,	ico: "ultra-moon",             icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "UM",   name: "Pokémon Ultra Moon"},
	LP	: {id: MainSeries + 35,	ico: "custom/lets-go-pikachu", icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "LP",   name: "Pokémon Let's GO, Pikachu!"},
	LE	: {id: MainSeries + 36,	ico: "custom/lets-go-eevee",   icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "LE",   name: "Pokémon Let's GO, Eevee!"},
	Sw	: {id: MainSeries + 37,	ico: "sword",                  icoPath: IcoPathSwSh, rDex: _Regdex_rSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, divBox: DivBox_G08, code: "Sw",   name: "Pokémon Sword"},
	Sh	: {id: MainSeries + 38,	ico: "shield",                 icoPath: IcoPathSwSh, rDex: _Regdex_rSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, divBox: DivBox_G08, code: "Sh",   name: "Pokémon Shield"},
	BD	: {id: MainSeries + 39,	ico: "",                       icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "BD",   name: "Pokémon Brilliant Diamond"},
	SP	: {id: MainSeries + 40,	ico: "",                       icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SP",   name: "Pokémon Shining Pearl"},

	LS_493	: {id: LegendsSeries + 1, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "LS_493", name: "Pokémon Legends: Arceus"},

	RS_Ra	: {id: RangerSeries + 1, ico: "custom/ranger",  icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "RS_Ra", name: "Pokémon Ranger"},
	RS_SA	: {id: RangerSeries + 2, ico: "custom/ranger2", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "RS_SA", name: "Pokémon Ranger: Shadows of Almia"},
	RS_GS	: {id: RangerSeries + 3, ico: "custom/ranger3", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "RS_GS", name: "Pokémon Ranger: Guardian Signs"},

	Pz_PL	: {id: PuzzleSeries + 1, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_PL", name: "Pokémon Puzzle League"},
	Pz_PC	: {id: PuzzleSeries + 2, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_PC", name: "Pokémon Puzzle Challenge"},
	Pz_Tr	: {id: PuzzleSeries + 3, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_Tr", name: "Pokémon Trozei!"},
	Pz_BT	: {id: PuzzleSeries + 4, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_BT", name: "Pokémon Battle Trozei"},
	Pz_Sh	: {id: PuzzleSeries + 5, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_Sh", name: "Pokémon Shuffle"},
	Pz_Pc	: {id: PuzzleSeries + 6, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_Pc", name: "Pokémon Picross"},
	Pz_CM	: {id: PuzzleSeries + 7, ico: "", icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_CM", name: "Pokémon Café Mix"},

	SS_BoxRS	: {id: StorageSystem + 1, ico: "",            icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS_BoxRS", name: "Pokémon Box Ruby & Sapphire"},
	SS_Ranch	: {id: StorageSystem + 2, ico: "",            icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS_Ranch", name: "My Pokémon Ranch"},
	SS_Bank		: {id: StorageSystem + 3, ico: "bank",        icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS_Bank",  name: "Pokémon Bank"},
	SS_Home		: {id: StorageSystem + 4, ico: "custom/home", icoPath: IcoPathSSHome, rDex: {}, nDex: _Regdex_nHome, eDex: _Regdex_eHome, imgWd: ImgWd_G08, maxBox: MaxBox_G08, divBox: DivBox_G08, code: "SS_Home",  name: "Pokémon HOME"},

    vcRe: {id: VirtualConsole + MainSeries + 1,	ico: "custom/vc-red",     icoPath: IcoPathReBl, rDex: {},            nDex: _Regdex_n_101, eDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "vcRe", name: "Virtual Console: Pokémon Red"},
	vcBl: {id: VirtualConsole + MainSeries + 2,	ico: "custom/vc-blue",    icoPath: IcoPathReBl, rDex: {},            nDex: _Regdex_n_101, eDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "vcBl", name: "Virtual Console: Pokémon Blue"},
	vcYe: {id: VirtualConsole + MainSeries + 3,	ico: "custom/vc-yellow",  icoPath: IcoPathYe,   rDex: {},            nDex: _Regdex_n_102, eDex: {},            imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "vcYe", name: "Virtual Console: Pokémon Yellow"},
	vcGo: {id: VirtualConsole + MainSeries + 4,	ico: "custom/vc-gold",    icoPath: IcoPathGoSi, rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "vcGo", name: "Virtual Console: Pokémon Gold"},
	vcSi: {id: VirtualConsole + MainSeries + 5,	ico: "custom/vc-silver",  icoPath: IcoPathGoSi, rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "vcSi", name: "Virtual Console: Pokémon Silver"},
	vcCr: {id: VirtualConsole + MainSeries + 6,	ico: "custom/vc-crystal", icoPath: IcoPathCr,   rDex: _Regdex_r_201, nDex: _Regdex_n_201, eDex: _Regdex_e_201, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "vcCr", name: "Virtual Console: Pokémon Crystal"},
};
