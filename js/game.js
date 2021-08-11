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
const MainSeries	=   0;
const LegendsSeries	= 100;
const RangerSeries	= 200;
const StorageSystem	= 300;
const PinballSeries	= 400;
const PuzzleSeries	= 500;
const OtherSeries	= 600;
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

    Re	: {id: MainSeries +  1,	icoPath: IcoPathReBl, rDex: _Regdex_rReBl, nDex: _Regdex_rReBl, eDex: _Regdex_rReBl, imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "Re", name: "Pokémon Red"},
	Bl	: {id: MainSeries +  2,	icoPath: IcoPathReBl, rDex: _Regdex_rReBl, nDex: _Regdex_rReBl, eDex: _Regdex_rReBl, imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "Bl", name: "Pokémon Blue"},
	Ye	: {id: MainSeries +  3,	icoPath: IcoPathYe,   rDex: _Regdex_rYe,   nDex: _Regdex_rYe,   eDex: _Regdex_rYe,   imgWd: ImgWd_G01, maxBox: MaxBox_G01, divBox: DivBox_G01, code: "Ye", name: "Pokémon Yellow"},
	Go	: {id: MainSeries +  4,	icoPath: IcoPathGoSi, rDex: _Regdex_rGoSi, nDex: _Regdex_nGoSi, eDex: _Regdex_eGoSi, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "Go", name: "Pokémon Gold"},
	Si	: {id: MainSeries +  5,	icoPath: IcoPathGoSi, rDex: _Regdex_rGoSi, nDex: _Regdex_nGoSi, eDex: _Regdex_eGoSi, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "Si", name: "Pokémon Silver"},
	Cr	: {id: MainSeries +  6,	icoPath: IcoPathCr,   rDex: _Regdex_rCr,   nDex: _Regdex_nGoSi, eDex: _Regdex_eGoSi, imgWd: ImgWd_G02, maxBox: MaxBox_G02, divBox: DivBox_G02, code: "Cr", name: "Pokémon Crystal"},
	Ru	: {id: MainSeries +  7,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Ru", name: "Pokémon Ruby"},
	Sa	: {id: MainSeries +  8,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Sa", name: "Pokémon Sapphire"},
	FR	: {id: MainSeries +  9,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "FR", name: "Pokémon FireRed"},
	LG	: {id: MainSeries + 10,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "LG", name: "Pokémon LeafGreen"},
	Em	: {id: MainSeries + 11,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Em", name: "Pokémon Emerald"},
	Di	: {id: MainSeries + 12,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Di", name: "Pokémon Diamond"},
	Pe	: {id: MainSeries + 13,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Pe", name: "Pokémon Pearl"},
	Pl	: {id: MainSeries + 14,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Pl", name: "Pokémon Platinum"},
	HG	: {id: MainSeries + 15,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "HG", name: "Pokémon HeartGold"},
	SS	: {id: MainSeries + 16,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS", name: "Pokémon SoulSilver"},
	Bk	: {id: MainSeries + 17,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Bk", name: "Pokémon Black"},
	Wh	: {id: MainSeries + 18,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Wh", name: "Pokémon White"},
	B2	: {id: MainSeries + 19,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "B2", name: "Pokémon Black 2"},
	W2	: {id: MainSeries + 20,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "W2", name: "Pokémon White 2"},
	X_	: {id: MainSeries + 21,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "X",  name: "Pokémon X"},
	Y_	: {id: MainSeries + 22,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Y",  name: "Pokémon Y"},
	oR	: {id: MainSeries + 23,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "oR", name: "Pokémon Omega Ruby"},
	aS	: {id: MainSeries + 24,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "aS", name: "Pokémon Alpha Sapphire"},
	Su	: {id: MainSeries + 25,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Su", name: "Pokémon Sun"},
	Mo	: {id: MainSeries + 26,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "Mo", name: "Pokémon Moon"},
	US	: {id: MainSeries + 27,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "US", name: "Pokémon Ultra Sun"},
	UM	: {id: MainSeries + 28,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "UM", name: "Pokémon Ultra Moon"},
	LP	: {id: MainSeries + 29,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "LP", name: "Pokémon Let's GO, Pikachu!"},
	LE	: {id: MainSeries + 30,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "LE", name: "Pokémon Let's GO, Eevee!"},
	Sw	: {id: MainSeries + 31,	icoPath: IcoPathSwSh, rDex: _Regdex_rSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, divBox: DivBox_G08, code: "Sw", name: "Pokémon Sword"},
	Sh	: {id: MainSeries + 32,	icoPath: IcoPathSwSh, rDex: _Regdex_rSwSh, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, divBox: DivBox_G08, code: "Sh", name: "Pokémon Shield"},
	BD	: {id: MainSeries + 33,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "BD", name: "Pokémon Brilliant Diamond"},
	SP	: {id: MainSeries + 34,	icoPath: "",          rDex: {},            nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SP", name: "Pokémon Shining Pearl"},

	LS_493	: {id: LegendsSeries + 1, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "LS_493", name: "Pokémon Legends: Arceus"},

    RS_Ra	: {id: RangerSeries + 1, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "RS_Ra", name: "Pokémon Ranger"},
	RS_SA	: {id: RangerSeries + 2, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "RS_SA", name: "Pokémon Ranger: Shadows of Almia"},
	RS_GS	: {id: RangerSeries + 3, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "RS_GS", name: "Pokémon Ranger: Guardian Signs"},

	Pz_PL	: {id: PuzzleSeries + 1, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_PL", name: "Pokémon Puzzle League"},
	Pz_PC	: {id: PuzzleSeries + 2, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_PC", name: "Pokémon Puzzle Challenge"},
	Pz_Tr	: {id: PuzzleSeries + 3, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_Tr", name: "Pokémon Trozei!"},
	Pz_BT	: {id: PuzzleSeries + 4, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_BT", name: "Pokémon Battle Trozei"},
	Pz_Sh	: {id: PuzzleSeries + 5, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_Sh", name: "Pokémon Shuffle"},
	Pz_Pc	: {id: PuzzleSeries + 6, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_Pc", name: "Pokémon Picross"},
	Pz_CM	: {id: PuzzleSeries + 7, icoPath: "", rDex: {}, nDex: {}, eDex: {}, imgWd: 0, maxBox: 0, divBox: 0, code: "Pz_CM", name: "Pokémon Café Mix"},

	SS_BoxRS	: {id: StorageSystem + 1, icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS_BoxRS", name: "Pokémon Box Ruby & Sapphire"},
	SS_Ranch	: {id: StorageSystem + 2, icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS_Ranch", name: "My Pokémon Ranch"},
	SS_Bank		: {id: StorageSystem + 3, icoPath: "",            rDex: {}, nDex: {},            eDex: {},            imgWd: 0,         maxBox: 0,          divBox: 0,          code: "SS_Bank",  name: "Pokémon Bank"},
	SS_Home		: {id: StorageSystem + 4, icoPath: IcoPathSSHome, rDex: {}, nDex: _Regdex_nSwSh, eDex: _Regdex_eSwSh, imgWd: ImgWd_G08, maxBox: MaxBox_G08, divBox: DivBox_G08, code: "SS_Home",  name: "Pokémon HOME"},
};