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

const _GameId =
{
	/*Unknown           */Unk: -1,
	//== MAIN SERIES
	/*Main Series       */_MainSeries: 0,
	/*Red               */_Re: _MainSeries + 1,
	/*Blue              */_Bl: _MainSeries + 2,
	/*Yellow            */_Ye: _MainSeries + 3,
	/*Gold              */_Go: _MainSeries + 4,
	/*Silver            */_Si: _MainSeries + 5,
	/*Crystal           */_Cr: _MainSeries + 6,
	/*Ruby              */_Ru: _MainSeries + 7,
	/*Sapphire          */_Sa: _MainSeries + 8,
	/*FireRed           */_FR: _MainSeries + 9,
	/*LeafGreen         */_LG: _MainSeries + 10,
	/*Emerald           */_Em: _MainSeries + 11,
	/*Diamond           */_Di: _MainSeries + 12,
	/*Pearl             */_Pe: _MainSeries + 13,
	/*Platinum          */_Pl: _MainSeries + 14,
	/*HeartGold         */_HG: _MainSeries + 15,
	/*SoulSilver        */_SS: _MainSeries + 16,
	/*Black             */_Bk: _MainSeries + 17,
	/*White             */_Wh: _MainSeries + 18,
	/*Black 2           */_B2: _MainSeries + 19,
	/*White 2           */_W2: _MainSeries + 20,
	/*X                 */_X_: _MainSeries + 21,
	/*Y                 */_Y_: _MainSeries + 22,
	/*Omega Ruby        */_oR: _MainSeries + 23,
	/*Alpha Sapphire    */_aS: _MainSeries + 24,
	/*Sun               */_Su: _MainSeries + 25,
	/*Moon              */_Mo: _MainSeries + 26,
	/*Ultra Sun         */_US: _MainSeries + 27,
	/*Ultra Moon        */_UM: _MainSeries + 28,
	/*Let's GO, Pikachu!*/_LP: _MainSeries + 29,
	/*Let's GO, Eevee!  */_LE: _MainSeries + 30,
	/*Sword             */_Sw: _MainSeries + 31,
	/*Shield            */_Sh: _MainSeries + 32,
	/*Brilliant Diamond */_BD: _MainSeries + 33,
	/*Shinning Pearl    */_SP: _MainSeries + 34,
	/*Legends: Arceus   */_L1: _MainSeries + 35,

	/*Ranger Series  */_RangerSeries: 1000,
    /*Ranger         */_PR_Ra: _RangerSeries + 1,
    /*Shadow of Almia*/_PR_SA: _RangerSeries + 2,
    /*Guardian Signs */_PR_GS: _RangerSeries + 3,

	/*Storage System*/_StorageSystem: 2000,
	/*Bank          */_SSBank: _StorageSystem + 1,
	/*Home          */_SSHome: _StorageSystem + 2,
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