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

const _GameVersions =
{
    Unk :{id: -1, name: "<i>Unknown</i>"},

    Re	: {id: MainSeries +  1, code: "Re", name: "Pokémon Red"},
	Bl	: {id: MainSeries +  2, code: "Bl", name: "Pokémon Blue"},
	Ye	: {id: MainSeries +  3, code: "Ye", name: "Pokémon Yellow"},
	Go	: {id: MainSeries +  4, code: "Go", name: "Pokémon Gold"},
	Si	: {id: MainSeries +  5, code: "Si", name: "Pokémon Silver"},
	Cr	: {id: MainSeries +  6, code: "Cr", name: "Pokémon Crystal"},
	Ru	: {id: MainSeries +  7, code: "Ru", name: "Pokémon Ruby"},
	Sa	: {id: MainSeries +  8, code: "Sa", name: "Pokémon Sapphire"},
	FR	: {id: MainSeries +  9, code: "FR", name: "Pokémon FireRed"},
	LG	: {id: MainSeries + 10, code: "LG", name: "Pokémon LeafGreen"},
	Em	: {id: MainSeries + 11, code: "Em", name: "Pokémon Emerald"},
	Di	: {id: MainSeries + 12, code: "Di", name: "Pokémon Diamond"},
	Pe	: {id: MainSeries + 13, code: "Pe", name: "Pokémon Pearl"},
	Pl	: {id: MainSeries + 14, code: "Pl", name: "Pokémon Platinum"},
	HG	: {id: MainSeries + 15, code: "HG", name: "Pokémon HeartGold"},
	SS	: {id: MainSeries + 16, code: "SS", name: "Pokémon SoulSilver"},
	Bk	: {id: MainSeries + 17, code: "Bk", name: "Pokémon Black"},
	Wh	: {id: MainSeries + 18, code: "Wh", name: "Pokémon White"},
	B2	: {id: MainSeries + 19, code: "B2", name: "Pokémon Black 2"},
	W2	: {id: MainSeries + 20, code: "W2", name: "Pokémon White 2"},
	X	: {id: MainSeries + 21, code: "X",  name: "Pokémon X"},
	Y	: {id: MainSeries + 22, code: "Y",  name: "Pokémon Y"},
	oR	: {id: MainSeries + 23, code: "oR", name: "Pokémon Omega Ruby"},
	aS	: {id: MainSeries + 24, code: "aS", name: "Pokémon Alpha Sapphire"},
	Su	: {id: MainSeries + 25, code: "Su", name: "Pokémon Sun"},
	Mo	: {id: MainSeries + 26, code: "Mo", name: "Pokémon Moon"},
	US	: {id: MainSeries + 27, code: "US", name: "Pokémon Ultra Sun"},
	UM	: {id: MainSeries + 28, code: "UM", name: "Pokémon Ultra Moon"},
	LP	: {id: MainSeries + 29, code: "LP", name: "Pokémon Let's GO, Pikachu!"},
	LE	: {id: MainSeries + 30, code: "LE", name: "Pokémon Let's GO, Eevee!"},
	Sw	: {id: MainSeries + 31, code: "Sw", name: "Pokémon Sword"},
	Sh	: {id: MainSeries + 32, code: "Sh", name: "Pokémon Shield"},
	BD	: {id: MainSeries + 33, code: "BD", name: "Pokémon Brilliant Diamond"},
	SP	: {id: MainSeries + 34, code: "SP", name: "Pokémon Shining Pearl"},

	LS_493	: {id: LegendsSeries + 1, code: "LS_493", name: "Pokémon Legends: Arceus"},

    RS_Ra	: {id: RangerSeries + 1, code: "RS_Ra", name: "Pokémon Ranger"},
	RS_SA	: {id: RangerSeries + 2, code: "RS_SA", name: "Pokémon Ranger: Shadows of Almia"},
	RS_GS	: {id: RangerSeries + 3, code: "RS_GS", name: "Pokémon Ranger: Guardian Signs"},

	Pz_PL	: {id: PuzzleSeries + 1, code: "Pz_PL", name: "Pokémon Puzzle League"},
	Pz_PC	: {id: PuzzleSeries + 2, code: "Pz_PC", name: "Pokémon Puzzle Challenge"},
	Pz_Tr	: {id: PuzzleSeries + 3, code: "Pz_Tr", name: "Pokémon Trozei!"},
	Pz_BT	: {id: PuzzleSeries + 4, code: "Pz_BT", name: "Pokémon Battle Trozei"},
	Pz_Sh	: {id: PuzzleSeries + 5, code: "Pz_Sh", name: "Pokémon Shuffle"},
	Pz_Pc	: {id: PuzzleSeries + 6, code: "Pz_Pc", name: "Pokémon Picross"},
	Pz_CM	: {id: PuzzleSeries + 7, code: "Pz_CM", name: "Pokémon Café Mix"},

	SS_BoxRS	: {id: StorageSystem + 1, code: "SS_BoxRS", name: "Pokémon Box Ruby & Sapphire"},
	SS_Ranch	: {id: StorageSystem + 2, code: "SS_Ranch", name: "My Pokémon Ranch"},
	SS_Bank		: {id: StorageSystem + 3, code: "SS_Bank",  name: "Pokémon Bank"},
	SS_Home		: {id: StorageSystem + 4, code: "SS_Home",  name: "Pokémon HOME"},
};

var Dex =
{
// main series
    Re: _Regdex_Re,
    Bl: _Regdex_Bl,
    Ye: _Regdex_Ye,/*
    Go: {},
    Si: {},
    Cr: {},
    Ru: {},
    Sa: {},
    FR: {},
    LG: {},
    Em: {},
    Di: {},
    Pe: {},
    Pl: {},
    HG: {},
    SS: {},
    Bk: {},
    Wh: {},
    B2: {},
    W2: {},
    X:  {},
    Y:  {},
    oR: {},
    aS: {},
    LP: {},
    LE: {},*/
    Sw: _Regdex_Sw,
    Sh: _Regdex_Sh,/*
    BD: _Regdex_BD,
    SP: _Regdex_SP,*/
// spin-off
// Pokemon Storage System
    Ba: {}, // Bank
    Ho: {}, // Home
};