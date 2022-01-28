const IcoPathGoSi 	= "data/g02/1";
const IcoPathCr		= "data/g02/1";

const Gen02 = 2 * GenMult;

GAME =
{
	...CopyObject(GAME),
	Go: Gen02 + 1,
	Si: Gen02 + 2,
	Cr: Gen02 + 3
};

const BOX_COL_G02 = 5;
const BOX_ROW_G02 = 4;
const BOX_CNT_G02 = 14;

var FLAGS = 
{
	FORM_POKEMON   : Gen02 + 1,
	FORM_UNOWN_BASE: Gen02 + 2,
	FORM_UNOWN     : Gen02 + 3,
};

var OPTIONS =
{
	[FLAGS.FORM_POKEMON]:
	{
		desc: "Show Pok&acute;mon forms",
		off:
		{
			[FLAGS.FORM_UNOWN]:
			{
				desc: "Show Unown forms.",
				off: [FLAGS.FORM_UNOWN_BASE]
			}
		}
	}
};

GAME_INFO =
{
	...CopyObject(GAME_INFO),
	[GAME.Go]:
	{
		code: "Go",
		name: "Pok&eacute;mon Gold",
		ico: "custom/gold",
		icoPath: IcoPathGoSi,
		boxCol: BOX_COL_G02,
		boxRow: BOX_ROW_G02,
		boxCnt: BOX_CNT_G02,
		flags: []
	},
	[GAME.Si]:
	{
		code: "Si",
		name: "Pok&eacute;mon Silver",
		ico: "custom/silver",
		icoPath: IcoPathGoSi,
		boxCol: BOX_COL_G02,
		boxRow: BOX_ROW_G02,
		boxCnt: BOX_CNT_G02,
		flags: []
	},
	[GAME.Cr]:
	{
		code: "Cr",
		name: "Pok&eacute;mon Crystal",
		ico: "custom/crystal",
		icoPath: IcoPathCr,
		boxCol: BOX_COL_G02,
		boxRow: BOX_ROW_G02,
		boxCnt: BOX_CNT_G02,
		flags: []
	}
};