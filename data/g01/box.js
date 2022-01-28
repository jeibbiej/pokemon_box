////////////////////////////////////////////////////////////////////////////////
// Pokemon Storage System box sorting order: National Dex
////////////////////////////////////////////////////////////////////////////////
var g_NatBox = {[GAME.Re]:
[
	[MON.BULBASAUR , ""], [MON.IVYSAUR   , ""], [MON.VENUSAUR  , ""],
	[MON.CHARMANDER, ""], [MON.CHARMELEON, ""], [MON.CHARIZARD , ""],
	[MON.SQUIRTLE  , ""], [MON.WARTORTLE , ""], [MON.BLASTOISE , ""],
	[MON.CATERPIE  , ""], [MON.METAPOD   , ""], [MON.BUTTERFREE, ""],
	[MON.WEEDLE    , ""], [MON.KAKUNA    , ""], [MON.BEEDRILL  , ""],
	[MON.PIDGEY    , ""], [MON.PIDGEOTTO , ""], [MON.PIDGEOT   , ""],
	[MON.RATTATA   , ""], [MON.RATICATE  , ""], [MON.SPEAROW   , ""],
	[MON.FEAROW    , ""], [MON.EKANS     , ""], [MON.ARBOK     , ""],
	[MON.PIKACHU   , ""], [MON.RAICHU    , ""], [MON.SANDSHREW , ""],
	[MON.SANDSLASH , ""], [MON.NIDORAN_F , ""], [MON.NIDORINA  , ""],
	[MON.NIDOQUEEN , ""], [MON.NIDORAN_M , ""], [MON.NIDORINO  , ""],
	[MON.NIDOKING  , ""], [MON.CLEFAIRY  , ""], [MON.CLEFABLE  , ""],
	[MON.VULPIX    , ""], [MON.NINETALES , ""], [MON.JIGGLYPUFF, ""],
	[MON.WIGGLYTUFF, ""], [MON.ZUBAT     , ""], [MON.GOLBAT    , ""],
	[MON.ODDISH    , ""], [MON.GLOOM     , ""], [MON.VILEPLUME , ""],
	[MON.PARAS     , ""], [MON.PARASECT  , ""], [MON.VENONAT   , ""],
	[MON.VENOMOTH  , ""], [MON.DIGLETT   , ""], [MON.DUGTRIO   , ""],
	[MON.MEOWTH    , ""], [MON.PERSIAN   , ""], [MON.PSYDUCK   , ""],
	[MON.GOLDUCK   , ""], [MON.MANKEY    , ""], [MON.PRIMEAPE  , ""],
	[MON.GROWLITHE , ""], [MON.ARCANINE  , ""], [MON.POLIWAG   , ""],
	[MON.POLIWHIRL , ""], [MON.POLIWRATH , ""], [MON.ABRA      , ""],
	[MON.KADABRA   , ""], [MON.ALAKAZAM  , ""], [MON.MACHOP    , ""],
	[MON.MACHOKE   , ""], [MON.MACHAMP   , ""], [MON.BELLSPROUT, ""],
	[MON.WEEPINBELL, ""], [MON.VICTREEBEL, ""], [MON.TENTACOOL , ""],
	[MON.TENTACRUEL, ""], [MON.GEODUDE   , ""], [MON.GRAVELER  , ""],
	[MON.GOLEM     , ""], [MON.PONYTA    , ""], [MON.RAPIDASH  , ""],
	[MON.SLOWPOKE  , ""], [MON.SLOWBRO   , ""], [MON.MAGNEMITE , ""],
	[MON.MAGNETON  , ""], [MON.FARFETCH_D, ""], [MON.DODUO     , ""],
	[MON.DODRIO    , ""], [MON.SEEL      , ""], [MON.DEWGONG   , ""],
	[MON.GRIMER    , ""], [MON.MUK       , ""], [MON.SHELLDER  , ""],
	[MON.CLOYSTER  , ""], [MON.GASTLY    , ""], [MON.HAUNTER   , ""],
	[MON.GENGAR    , ""], [MON.ONIX      , ""], [MON.DROWZEE   , ""],
	[MON.HYPNO     , ""], [MON.KRABBY    , ""], [MON.KINGLER   , ""],
	[MON.VOLTORB   , ""], [MON.ELECTRODE , ""], [MON.EXEGGCUTE , ""],
	[MON.EXEGGUTOR , ""], [MON.CUBONE    , ""], [MON.MAROWAK   , ""],
	[MON.HITMONLEE , ""], [MON.HITMONCHAN, ""], [MON.LICKITUNG , ""],
	[MON.KOFFING   , ""], [MON.WEEZING   , ""], [MON.RHYHORN   , ""],
	[MON.RHYDON    , ""], [MON.CHANSEY   , ""], [MON.TANGELA   , ""],
	[MON.KANGASKHAN, ""], [MON.HORSEA    , ""], [MON.SEADRA    , ""],
	[MON.GOLDEEN   , ""], [MON.SEAKING   , ""], [MON.STARYU    , ""],
	[MON.STARMIE   , ""], [MON.MR_MIME   , ""], [MON.SCYTHER   , ""],
	[MON.JYNX      , ""], [MON.ELECTABUZZ, ""], [MON.MAGMAR    , ""],
	[MON.PINSIR    , ""], [MON.TAUROS    , ""], [MON.MAGIKARP  , ""],
	[MON.GYARADOS  , ""], [MON.LAPRAS    , ""], [MON.DITTO     , ""],
	[MON.EEVEE     , ""], [MON.VAPOREON  , ""], [MON.JOLTEON   , ""],
	[MON.FLAREON   , ""], [MON.PORYGON   , ""], [MON.OMANYTE   , ""],
	[MON.OMASTAR   , ""], [MON.KABUTO    , ""], [MON.KABUTOPS  , ""],
	[MON.AERODACTYL, ""], [MON.SNORLAX   , ""], [MON.ARTICUNO  , ""],
	[MON.ZAPDOS    , ""], [MON.MOLTRES   , ""], [MON.DRATINI   , ""],
	[MON.DRAGONAIR , ""], [MON.DRAGONITE , ""], [MON.MEWTWO    , ""],
	[MON.MEW       , ""]
]};

g_NatBox[GAME.Bl] = CopyObject(g_NatBox[GAME.Re]);
g_NatBox[GAME.Ye] = CopyObject(g_NatBox[GAME.Re]);

////////////////////////////////////////////////////////////////////////////////
// Pokemon Storage System box sorting order: Evolution Dex
////////////////////////////////////////////////////////////////////////////////
var g_EvoBox = {[GAME.Re]:
[
	[MON.BULBASAUR , ""],	[MON.IVYSAUR   , ""],	[MON.VENUSAUR  , ""],
	[MON.CHARMANDER, ""],	[MON.CHARMELEON, ""],	[MON.CHARIZARD , ""],
	[MON.SQUIRTLE  , ""],	[MON.WARTORTLE , ""],	[MON.BLASTOISE , ""],
	[MON.CATERPIE  , ""],	[MON.METAPOD   , ""],	[MON.BUTTERFREE, ""],
	[MON.WEEDLE    , ""],	[MON.KAKUNA    , ""],	[MON.BEEDRILL  , ""],
	[MON.PIDGEY    , ""],	[MON.PIDGEOTTO , ""],	[MON.PIDGEOT   , ""],
	[MON.RATTATA   , ""],	[MON.RATICATE  , ""],
	[MON.SPEAROW   , ""],	[MON.FEAROW    , ""],
	[MON.EKANS     , ""],	[MON.ARBOK     , ""],
	[MON.PIKACHU   , ""],	[MON.RAICHU    , ""],
	[MON.SANDSHREW , ""],	[MON.SANDSLASH , ""],
	[MON.NIDORAN_F , ""],	[MON.NIDORINA  , ""],	[MON.NIDOQUEEN , ""],
	[MON.NIDORAN_M , ""],	[MON.NIDORINO  , ""],	[MON.NIDOKING  , ""],
	[MON.CLEFAIRY  , ""],	[MON.CLEFABLE  , ""],
	[MON.VULPIX    , ""],	[MON.NINETALES , ""],
	[MON.JIGGLYPUFF, ""],	[MON.WIGGLYTUFF, ""],
	[MON.ZUBAT     , ""],	[MON.GOLBAT    , ""],
	[MON.ODDISH    , ""],	[MON.GLOOM     , ""],	[MON.VILEPLUME , ""],
	[MON.PARAS     , ""],	[MON.PARASECT  , ""],
	[MON.VENONAT   , ""],	[MON.VENOMOTH  , ""],
	[MON.DIGLETT   , ""],	[MON.DUGTRIO   , ""],
	[MON.MEOWTH    , ""],	[MON.PERSIAN   , ""],
	[MON.PSYDUCK   , ""],	[MON.GOLDUCK   , ""],
	[MON.MANKEY    , ""],	[MON.PRIMEAPE  , ""],
	[MON.GROWLITHE , ""],	[MON.ARCANINE  , ""],
	[MON.POLIWAG   , ""],	[MON.POLIWHIRL , ""],	[MON.POLIWRATH , ""],
	[MON.ABRA      , ""],	[MON.KADABRA   , ""],	[MON.ALAKAZAM  , ""],
	[MON.MACHOP    , ""],	[MON.MACHOKE   , ""],	[MON.MACHAMP   , ""],
	[MON.BELLSPROUT, ""],	[MON.WEEPINBELL, ""],	[MON.VICTREEBEL, ""],
	[MON.TENTACOOL , ""],	[MON.TENTACRUEL, ""],
	[MON.GEODUDE   , ""],	[MON.GRAVELER  , ""],	[MON.GOLEM     , ""],
	[MON.PONYTA    , ""],	[MON.RAPIDASH  , ""],
	[MON.SLOWPOKE  , ""],	[MON.SLOWBRO   , ""],
	[MON.MAGNEMITE , ""],	[MON.MAGNETON  , ""],
	[MON.FARFETCH_D, ""],
	[MON.DODUO     , ""],	[MON.DODRIO    , ""],
	[MON.SEEL      , ""],	[MON.DEWGONG   , ""],
	[MON.GRIMER    , ""],	[MON.MUK       , ""],
	[MON.SHELLDER  , ""],	[MON.CLOYSTER  , ""],
	[MON.GASTLY    , ""],	[MON.HAUNTER   , ""],	[MON.GENGAR    , ""],
	[MON.ONIX      , ""],
	[MON.DROWZEE   , ""],	[MON.HYPNO     , ""],
	[MON.KRABBY    , ""],	[MON.KINGLER   , ""],
	[MON.VOLTORB   , ""],	[MON.ELECTRODE , ""],
	[MON.EXEGGCUTE , ""],	[MON.EXEGGUTOR , ""],
	[MON.CUBONE    , ""],	[MON.MAROWAK   , ""],
	[MON.HITMONLEE , ""],
	[MON.HITMONCHAN, ""],
	[MON.LICKITUNG , ""],
	[MON.KOFFING   , ""],	[MON.WEEZING   , ""],
	[MON.RHYHORN   , ""],	[MON.RHYDON    , ""],
	[MON.CHANSEY   , ""],
	[MON.TANGELA   , ""],
	[MON.KANGASKHAN, ""],
	[MON.HORSEA    , ""],	[MON.SEADRA    , ""],
	[MON.GOLDEEN   , ""],	[MON.SEAKING   , ""],
	[MON.STARYU    , ""],	[MON.STARMIE   , ""],
	[MON.MR_MIME   , ""],
	[MON.SCYTHER   , ""],
	[MON.JYNX      , ""],
	[MON.ELECTABUZZ, ""],
	[MON.MAGMAR    , ""],
	[MON.PINSIR    , ""],
	[MON.TAUROS    , ""],
	[MON.MAGIKARP  , ""],	[MON.GYARADOS  , ""],
	[MON.LAPRAS    , ""],
	[MON.DITTO     , ""],
	[MON.EEVEE     , ""],	[MON.VAPOREON  , ""],
						 	[MON.JOLTEON   , ""],
						 	[MON.FLAREON   , ""],
	[MON.PORYGON   , ""],
	[MON.OMANYTE   , ""],	[MON.OMASTAR   , ""],
	[MON.KABUTO    , ""],	[MON.KABUTOPS  , ""],
	[MON.AERODACTYL, ""],
	[MON.SNORLAX   , ""],
	[MON.ARTICUNO  , ""],
	[MON.ZAPDOS    , ""],
	[MON.MOLTRES   , ""],
	[MON.DRATINI   , ""],	[MON.DRAGONAIR , ""],	[MON.DRAGONITE , ""],
	[MON.MEWTWO    , ""],
	[MON.MEW       , ""]
]};
g_EvoBox[GAME.Bl] = CopyObject(g_NatBox[GAME.Re]);
g_EvoBox[GAME.Ye] = CopyObject(g_NatBox[GAME.Re]);

////////////////////////////////////////////////////////////////////////////////
// Pokemon Storage System box sorting order: Regional Dex
////////////////////////////////////////////////////////////////////////////////
const g_RegBox = {[GAME.Re]: CopyObject(g_NatBox[GAME.Re])};
g_RegBox[GAME.Bl] = CopyObject(g_NatBox[GAME.Re]);
g_RegBox[GAME.Ye] = CopyObject(g_NatBox[GAME.Re]);
