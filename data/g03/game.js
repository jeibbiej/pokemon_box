const IcoPathRuSa 	= "data/g05/1";
const IcoPathFRLG 	= "data/g05/1";
const IcoPathEm		= "data/g05/1";

const Gen03 = 3 * GenMult;

GAME =
{
	...CopyObject(GAME),
	Ru: Gen03 + 1,
	Sa: Gen03 + 2,
	FR: Gen03 + 3,
	LG: Gen03 + 4,
	Em: Gen03 + 5
};

const BOX_COL_G03 = 6;
const BOX_ROW_G03 = 5;
const BOX_CNT_G03 = 14;

FLAGS =
{
	...{FLAGS},
	FORM_BATTLE   : Gen03 + 1,
	FORM_CHANGABLE: Gen03 + 2,
	FORM_DEOXYS   : Gen03 + 3
};

OPTIONS =
{
	...CopyObject(OPTIONS),
	[FLAGS.FORM_BATTLE]:
	{
		desc: "Show Pok&acute;mon battle forms",
		off:
		{
		}
	},
};

GAME_INFO =
{
	...CopyObject(GAME_INFO),
	[GAME.Ru]:
	{
		code: "Ru",
		name: "Pok&eacute;mon Ruby",
		ico: "custom/ruby",
		icoPath: IcoPathRuSa,
		boxCol: BOX_COL_G03,
		boxRow: BOX_ROW_G03,
		boxCnt: BOX_CNT_G03,
		flags: []
	},
	[GAME.Sa]:
	{
		code: "Sa",
		name: "Pok&eacute;mon Sapphire",
		ico: "custom/sapphire",
		icoPath: IcoPathRuSa,
		boxCol: BOX_COL_G03,
		boxRow: BOX_ROW_G03,
		boxCnt: BOX_CNT_G03,
		flags: []
	},
	[GAME.Em]:
	{
		code: "Em",
		name: "Pok&eacute;mon Emerald",
		ico: "custom/crystal",
		icoPath: IcoPathEm,
		boxCol: BOX_COL_G03,
		boxRow: BOX_ROW_G03,
		boxCnt: BOX_CNT_G03,
		flags: []
	},
	[GAME.FR]:
	{
		code: "FR",
		name: "Pok&eacute;mon FireRed",
		ico: "custom/firered",
		icoPath: IcoPathFRLG,
		boxCol: BOX_COL_G03,
		boxRow: BOX_ROW_G03,
		boxCnt: BOX_CNT_G03,
		flags: []
	},
	[GAME.LG]:
	{
		code: "LG",
		name: "Pok&eacute;mon LeafGreen",
		ico: "custom/leafgreen",
		icoPath: IcoPathFRLG,
		boxCol: BOX_COL_G03,
		boxRow: BOX_ROW_G03,
		boxCnt: BOX_CNT_G03,
		flags: []
	}
};