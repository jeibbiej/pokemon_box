const IcoPathReBl 	= "data/g01/1";
const IcoPathYe		= "data/g01/2";

const GenMult = 100;
const Gen01 = 1 * GenMult;

var GAME =
{
	Re: Gen01 + 1,
	Bl: Gen01 + 2,
	Ye: Gen01 + 3,
};

const BOX_COL_G01 = 5;
const BOX_ROW_G01 = 4;
const BOX_CNT_G01 = 12;

var GAME_INFO =
{
	[GAME.Re]:
	{
		code: "Re",
		name: "Pok&eacute;mon Red",
		ico: "custom/red",
		icoPath: IcoPathReBl,
		boxCol: BOX_COL_G01,
		boxRow: BOX_ROW_G01,
		boxCnt: BOX_CNT_G01,
		flags: []
	},
	[GAME.Bl]:
	{
		code: "Bl",
		name: "Pok&eacute;mon Blue",
		ico: "custom/blue",
		icoPath: IcoPathReBl,
		boxCol: BOX_COL_G01,
		boxRow: BOX_ROW_G01,
		boxCnt: BOX_CNT_G01,
		flags: []
	},
	[GAME.Ye]:
	{
		code: "Ye",
		name: "Pok&eacute;mon Yellow",
		ico: "custom/yellow",
		icoPath: IcoPathYe,
		boxCol: BOX_COL_G01,
		boxRow: BOX_ROW_G01,
		boxCnt: BOX_CNT_G01,
		flags: []
	}
};