//============================================================================
// POKEMON INDEX
//============================================================================
MON =
{
	...CopyObject(MON),
	/**************/ TURTWIG   : 387, GROTLE    : 388, TORTERRA  : 389, CHIMCHAR : 390,
	MONFERNO  : 391, INFERNAPE : 392, PIPLUP    : 393, PRINPLUP  : 394, EMPOLEON : 395,
	STARLY    : 396, STARAVIA  : 397, STARAPTOR : 398, BIDOOF    : 399, BIBAREL  : 400,
	KRIKETOT  : 401, KRICKETUNE: 402, SHINX     : 403, LUXIO     : 404, LUXRAY   : 405,
	BUDEW     : 406, ROSERADE  : 407, CRANIDOS  : 408, RAMPARDOS : 409, SHIELDON : 410,
	BASTIODON : 411, BURMY     : 412, WORMADAM  : 413, MOTHIM    : 414, COMBEE   : 415,
	VVESPIQUEN: 416, PACHIRISU : 417, BUIZEL    : 418, FLOATZEL  : 419, CHERUBI  : 420,
	CHERRIM   : 421, SHELLOS   : 422, GASTRODON : 423, AMBIPOM   : 424, DRIFLOON : 425,
	DRIFBLIM  : 426, BUNEARY   : 427, LOPUNNY   : 428, MISMAGUIS : 429, HONCHKROW: 430,
	GLAMEOW   : 431, PURUGLY   : 432, CHINGLING : 433, STUNKY    : 434, SKUNTANK : 435,
	BRONZOR   : 436, BRONZONG  : 437, BONSLY    : 438, MIME_JR   : 439, HAPPINY  : 440,
	CHATOT    : 441, SPIRITOMB : 442, GIBLE     : 443, GABITE    : 444, GARCHOMP : 445,
	MUNCHLAX  : 446, RIOLU     : 447, LUCARIO   : 448, HIPPOPOTAS: 449, HIPPOWDON: 450,
	SKORUPI   : 451, DRAPION   : 452, CROAGUNK  : 453, TOXICROAK : 454, CARNIVINE: 455,
	FINNEON   : 456, LUMINEON  : 457, MANTYKE   : 458, SNOVER    : 459, ABOMASNOW: 460,
	WEAVILE   : 461, MAGNEZONE : 462, LICKILICKY: 463, RHYPERIOR : 464, TANGROWTH: 465,
	ELECTIVIRE: 466, MAGMORTAR : 467, TOGEKISS  : 468, YANMEGA   : 469, LEAFEON  : 470,
	GLACEON   : 471, GLISCOR   : 472, MAMOSWINE : 473, PORYGON_Z : 474, GALLADE  : 475,
	PROBOPASS : 476, DUSKNOIR  : 477, FROSLASS  : 478, ROTOM     : 479, UXIE     : 480,
	MESPRIT   : 481, AZELF     : 482, DIALGA    : 483, PALKIA    : 484, HEATRAN  : 485,
	REGIGIGAS : 486, GIRATINA  : 487, CRESSELIA : 488, PHIONE    : 489, MANAPHY  : 490,
	DARKRAI   : 491, SHAYMIN   : 492, ARCEUS    : 493,
};

//============================================================================
// NATIONAL POKEDEX
//============================================================================
DEX_LIST = {...CopyObject(DEX_LIST),
[GAME.Ru]:
{
	...CopyObject(DEX_LIST[GAME.Cr]),
	[MON.TURTWIG   ]: { "": { ico: "0387", name: "Turtwig",    flags: [] } },
	[MON.GROTLE    ]: { "": { ico: "0388", name: "Grotle",     flags: [] } },
	[MON.TORTERRA  ]: { "": { ico: "0389", name: "Torterra",   flags: [] } },
	[MON.CHIMCHAR  ]: { "": { ico: "0390", name: "Chimchar",   flags: [] } },
	[MON.MONFERNO  ]: { "": { ico: "0391", name: "Monferno",   flags: [] } },
	[MON.INFERNAPE ]: { "": { ico: "0392", name: "Infernape",  flags: [] } },
	[MON.PIPLUP    ]: { "": { ico: "0393", name: "Piplup",     flags: [] } },
	[MON.PRINPLUP  ]: { "": { ico: "0394", name: "Prinplup",   flags: [] } },
	[MON.EMPOLEON  ]: { "": { ico: "0395", name: "Empoleon",   flags: [] } },
	[MON.STARLY    ]: { "": { ico: "0396", name: "Starly",     flags: [] } },
	[MON.STARAVIA  ]: { "": { ico: "0397", name: "Staravia",   flags: [] } },
	[MON.STARAPTOR ]: { "": { ico: "0398", name: "Staraptor",  flags: [] } },
	[MON.BIDOOF    ]: { "": { ico: "0399", name: "Bidoof",     flags: [] } },
	[MON.BIBAREL   ]: { "": { ico: "0400", name: "Bibarel",    flags: [] } },
	[MON.KRICKETOT ]: { "": { ico: "0401", name: "Kricketot",  flags: [] } },
	[MON.KRICKETUNE]: { "": { ico: "0402", name: "Kricketune", flags: [] } },
	[MON.SHINX     ]: { "": { ico: "0403", name: "Shinx",      flags: [] } },
	#0403	Shinx	Shinx
	Electric
	#0404	Luxio	Luxio
	Electric
	#0405	Luxray	Luxray
	Electric
	#0406	Budew	Budew
	Grass	Poison
	#0407	Roserade	Roserade
	Grass	Poison
	#0408	Cranidos	Cranidos
	Rock
	#0409	Rampardos	Rampardos
	Rock
	#0410	Shieldon	Shieldon
	Rock	Steel
	#0411	Bastiodon	Bastiodon
	Rock	Steel
	#0412	Burmy	Burmy
	Plant Cloak	Bug
	Burmy	Burmy
	Sandy Cloak	Bug
	Burmy	Burmy
	Trash Cloak	Bug
	#0413	Wormadam	Wormadam
	Plant Cloak	Bug	Grass
	Wormadam	Wormadam
	Sandy Cloak	Bug	Ground
	Wormadam	Wormadam
	Trash Cloak	Bug	Steel
	#0414	Mothim	Mothim
	Bug	Flying
	#0415	Combee	Combee
	Bug	Flying
	#0416	Vespiquen	Vespiquen
	Bug	Flying
	#0417	Pachirisu	Pachirisu
	Electric
	#0418	Buizel	Buizel
	Water
	#0419	Floatzel	Floatzel
	Water
	#0420	Cherubi	Cherubi
	Grass
	#0421	Cherrim	Cherrim
	Overcast Form	Grass
	Cherrim	Cherrim
	Sunshine Form	Grass
	#0422	Shellos	Shellos
	West Sea	Water
	Shellos	Shellos
	East Sea	Water
	#0423	Gastrodon	Gastrodon
	West Sea	Water	Ground
	Gastrodon	Gastrodon
	East Sea	Water	Ground
	#0424	Ambipom	Ambipom
	Normal
	#0425	Drifloon	Drifloon
	Ghost	Flying
	#0426	Drifblim	Drifblim
	Ghost	Flying
	#0427	Buneary	Buneary
	Normal
	#0428	Lopunny	Lopunny
	Normal
	#0429	Mismagius	Mismagius
	Ghost
	#0430	Honchkrow	Honchkrow
	Dark	Flying
	#0431	Glameow	Glameow
	Normal
	#0432	Purugly	Purugly
	Normal
	#0433	Chingling	Chingling
	Psychic
	#0434	Stunky	Stunky
	Poison	Dark
	#0435	Skuntank	Skuntank
	Poison	Dark
	#0436	Bronzor	Bronzor
	Steel	Psychic
	#0437	Bronzong	Bronzong
	Steel	Psychic
	#0438	Bonsly	Bonsly
	Rock
	#0439	Mime Jr.	Mime Jr.
	Psychic	Fairy
	#0440	Happiny	Happiny
	Normal
	#0441	Chatot	Chatot
	Normal	Flying
	#0442	Spiritomb	Spiritomb
	Ghost	Dark
	#0443	Gible	Gible
	Dragon	Ground
	#0444	Gabite	Gabite
	Dragon	Ground
	#0445	Garchomp	Garchomp
	Dragon	Ground
	#0446	Munchlax	Munchlax
	Normal
	#0447	Riolu	Riolu
	Fighting
	#0448	Lucario	Lucario
	Fighting	Steel
	#0449	Hippopotas	Hippopotas
	Ground
	#0450	Hippowdon	Hippowdon
	Ground
	#0451	Skorupi	Skorupi
	Poison	Bug
	#0452	Drapion	Drapion
	Poison	Dark
	#0453	Croagunk	Croagunk
	Poison	Fighting
	#0454	Toxicroak	Toxicroak
	Poison	Fighting
	#0455	Carnivine	Carnivine
	Grass
	#0456	Finneon	Finneon
	Water
	#0457	Lumineon	Lumineon
	Water
	#0458	Mantyke	Mantyke
	Water	Flying
	#0459	Snover	Snover
	Grass	Ice
	#0460	Abomasnow	Abomasnow
	Grass	Ice
	#0461	Weavile	Weavile
	Dark	Ice
	#0462	Magnezone	Magnezone
	Electric	Steel
	#0463	Lickilicky	Lickilicky
	Normal
	#0464	Rhyperior	Rhyperior
	Ground	Rock
	#0465	Tangrowth	Tangrowth
	Grass
	#0466	Electivire	Electivire
	Electric
	#0467	Magmortar	Magmortar
	Fire
	#0468	Togekiss	Togekiss
	Fairy	Flying
	#0469	Yanmega	Yanmega
	Bug	Flying
	#0470	Leafeon	Leafeon
	Grass
	#0471	Glaceon	Glaceon
	Ice
	#0472	Gliscor	Gliscor
	Ground	Flying
	#0473	Mamoswine	Mamoswine
	Ice	Ground
	#0474	Porygon-Z	Porygon-Z
	Normal
	#0475	Gallade	Gallade
	Psychic	Fighting
	#0476	Probopass	Probopass
	Rock	Steel
	#0477	Dusknoir	Dusknoir
	Ghost
	#0478	Froslass	Froslass
	Ice	Ghost
	#0479	Rotom	Rotom
	Rotom	Electric	Ghost
	Rotom	Rotom
	Heat Rotom	Electric	Fire
	Rotom	Rotom
	Wash Rotom	Electric	Water
	Rotom	Rotom
	Frost Rotom	Electric	Ice
	Rotom	Rotom
	Fan Rotom	Electric	Flying
	Rotom	Rotom
	Mow Rotom	Electric	Grass
	#0480	Uxie	Uxie
	Psychic
	#0481	Mesprit	Mesprit
	Psychic
	#0482	Azelf	Azelf
	Psychic
	#0483	Dialga	Dialga
	Steel	Dragon
	Dialga	Dialga
	Origin Forme	Steel	Dragon
	#0484	Palkia	Palkia
	Water	Dragon
	Palkia	Palkia
	Origin Forme	Water	Dragon
	#0485	Heatran	Heatran
	Fire	Steel
	#0486	Regigigas	Regigigas
	Normal
	#0487	Giratina	Giratina
	Altered Forme	Ghost	Dragon
	Giratina	Giratina
	Origin Forme	Ghost	Dragon
	#0488	Cresselia	Cresselia
	Psychic
	#0489	Phione	Phione
	Water
	#0490	Manaphy	Manaphy
	Water
	#0491	Darkrai	Darkrai
	Dark
	#0492	Shaymin	Shaymin
	Land Forme	Grass
	Shaymin	Shaymin
	Sky Forme	Grass	Flying
	#0493	Arceus	Arceus
	Arceus	Normal
}};

// new forms
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-emark"   ] = {ico: "0201-exclamation", name: "Unown !!!!!", flags: [FLAGS.FORM_UNOWN]};
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-qmark"   ] = {ico: "0201-question",    name: "Unown ?????", flags: [FLAGS.FORM_UNOWN]};

// update icons
DEX_LIST[GAME.Ru][MON.BULBASAUR ][""         ]["ico"] = "0001";
DEX_LIST[GAME.Ru][MON.IVYSAUR   ][""         ]["ico"] = "0002";
DEX_LIST[GAME.Ru][MON.VENUSAUR  ][""         ]["ico"] = "0003";
DEX_LIST[GAME.Ru][MON.CHARMANDER][""         ]["ico"] = "0004";
DEX_LIST[GAME.Ru][MON.CHARMELEON][""         ]["ico"] = "0005";
DEX_LIST[GAME.Ru][MON.CHARIZARD ][""         ]["ico"] = "0006";
DEX_LIST[GAME.Ru][MON.SQUIRTLE  ][""         ]["ico"] = "0007";
DEX_LIST[GAME.Ru][MON.WARTORTLE ][""         ]["ico"] = "0008";
DEX_LIST[GAME.Ru][MON.BLASTOISE ][""         ]["ico"] = "0009";
DEX_LIST[GAME.Ru][MON.CATERPIE  ][""         ]["ico"] = "0010";
DEX_LIST[GAME.Ru][MON.METAPOD   ][""         ]["ico"] = "0011";
DEX_LIST[GAME.Ru][MON.BUTTERFREE][""         ]["ico"] = "0012";
DEX_LIST[GAME.Ru][MON.WEEDLE    ][""         ]["ico"] = "0013";
DEX_LIST[GAME.Ru][MON.KAKUNA    ][""         ]["ico"] = "0014";
DEX_LIST[GAME.Ru][MON.BEEDRILL  ][""         ]["ico"] = "0015";
DEX_LIST[GAME.Ru][MON.PIDGEY    ][""         ]["ico"] = "0016";
DEX_LIST[GAME.Ru][MON.PIDGEOTTO ][""         ]["ico"] = "0017";
DEX_LIST[GAME.Ru][MON.PIDGEOT   ][""         ]["ico"] = "0018";
DEX_LIST[GAME.Ru][MON.RATTATA   ][""         ]["ico"] = "0019";
DEX_LIST[GAME.Ru][MON.RATICATE  ][""         ]["ico"] = "0020";
DEX_LIST[GAME.Ru][MON.SPEAROW   ][""         ]["ico"] = "0021";
DEX_LIST[GAME.Ru][MON.FEAROW    ][""         ]["ico"] = "0022";
DEX_LIST[GAME.Ru][MON.EKANS     ][""         ]["ico"] = "0023";
DEX_LIST[GAME.Ru][MON.ARBOK     ][""         ]["ico"] = "0024";
DEX_LIST[GAME.Ru][MON.PIKACHU   ][""         ]["ico"] = "0025";
DEX_LIST[GAME.Ru][MON.RAICHU    ][""         ]["ico"] = "0026";
DEX_LIST[GAME.Ru][MON.SANDSHREW ][""         ]["ico"] = "0027";
DEX_LIST[GAME.Ru][MON.SANDSLASH ][""         ]["ico"] = "0028";
DEX_LIST[GAME.Ru][MON.NIDORAN_F ][""         ]["ico"] = "0029";
DEX_LIST[GAME.Ru][MON.NIDORINA  ][""         ]["ico"] = "0030";
DEX_LIST[GAME.Ru][MON.NIDOQUEEN ][""         ]["ico"] = "0031";
DEX_LIST[GAME.Ru][MON.NIDORAN_M ][""         ]["ico"] = "0032";
DEX_LIST[GAME.Ru][MON.NIDORINO  ][""         ]["ico"] = "0033";
DEX_LIST[GAME.Ru][MON.NIDOKING  ][""         ]["ico"] = "0034";
DEX_LIST[GAME.Ru][MON.CLEFAIRY  ][""         ]["ico"] = "0035";
DEX_LIST[GAME.Ru][MON.CLEFABLE  ][""         ]["ico"] = "0036";
DEX_LIST[GAME.Ru][MON.VULPIX    ][""         ]["ico"] = "0037";
DEX_LIST[GAME.Ru][MON.NINETALES ][""         ]["ico"] = "0038";
DEX_LIST[GAME.Ru][MON.JIGGLYPUFF][""         ]["ico"] = "0039";
DEX_LIST[GAME.Ru][MON.WIGGLYTUFF][""         ]["ico"] = "0040";
DEX_LIST[GAME.Ru][MON.ZUBAT     ][""         ]["ico"] = "0041";
DEX_LIST[GAME.Ru][MON.GOLBAT    ][""         ]["ico"] = "0042";
DEX_LIST[GAME.Ru][MON.ODDISH    ][""         ]["ico"] = "0043";
DEX_LIST[GAME.Ru][MON.GLOOM     ][""         ]["ico"] = "0044";
DEX_LIST[GAME.Ru][MON.VILEPLUME ][""         ]["ico"] = "0045";
DEX_LIST[GAME.Ru][MON.PARAS     ][""         ]["ico"] = "0046";
DEX_LIST[GAME.Ru][MON.PARASECT  ][""         ]["ico"] = "0047";
DEX_LIST[GAME.Ru][MON.VENONAT   ][""         ]["ico"] = "0048";
DEX_LIST[GAME.Ru][MON.VENOMOTH  ][""         ]["ico"] = "0049";
DEX_LIST[GAME.Ru][MON.DIGLETT   ][""         ]["ico"] = "0050";
DEX_LIST[GAME.Ru][MON.DUGTRIO   ][""         ]["ico"] = "0051";
DEX_LIST[GAME.Ru][MON.MEOWTH    ][""         ]["ico"] = "0052";
DEX_LIST[GAME.Ru][MON.PERSIAN   ][""         ]["ico"] = "0053";
DEX_LIST[GAME.Ru][MON.PSYDUCK   ][""         ]["ico"] = "0054";
DEX_LIST[GAME.Ru][MON.GOLDUCK   ][""         ]["ico"] = "0055";
DEX_LIST[GAME.Ru][MON.MANKEY    ][""         ]["ico"] = "0056";
DEX_LIST[GAME.Ru][MON.PRIMEAPE  ][""         ]["ico"] = "0057";
DEX_LIST[GAME.Ru][MON.GROWLITHE ][""         ]["ico"] = "0058";
DEX_LIST[GAME.Ru][MON.ARCANINE  ][""         ]["ico"] = "0059";
DEX_LIST[GAME.Ru][MON.POLIWAG   ][""         ]["ico"] = "0060";
DEX_LIST[GAME.Ru][MON.POLIWHIRL ][""         ]["ico"] = "0061";
DEX_LIST[GAME.Ru][MON.POLIWRATH ][""         ]["ico"] = "0062";
DEX_LIST[GAME.Ru][MON.ABRA      ][""         ]["ico"] = "0063";
DEX_LIST[GAME.Ru][MON.KADABRA   ][""         ]["ico"] = "0064";
DEX_LIST[GAME.Ru][MON.ALAKAZAM  ][""         ]["ico"] = "0065";
DEX_LIST[GAME.Ru][MON.MACHOP    ][""         ]["ico"] = "0066";
DEX_LIST[GAME.Ru][MON.MACHOKE   ][""         ]["ico"] = "0067";
DEX_LIST[GAME.Ru][MON.MACHAMP   ][""         ]["ico"] = "0068";
DEX_LIST[GAME.Ru][MON.BELLSPROUT][""         ]["ico"] = "0069";
DEX_LIST[GAME.Ru][MON.WEEPINBELL][""         ]["ico"] = "0070";
DEX_LIST[GAME.Ru][MON.VICTREEBEL][""         ]["ico"] = "0071";
DEX_LIST[GAME.Ru][MON.TENTACOOL ][""         ]["ico"] = "0072";
DEX_LIST[GAME.Ru][MON.TENTACRUEL][""         ]["ico"] = "0073";
DEX_LIST[GAME.Ru][MON.GEODUDE   ][""         ]["ico"] = "0074";
DEX_LIST[GAME.Ru][MON.GRAVELER  ][""         ]["ico"] = "0075";
DEX_LIST[GAME.Ru][MON.GOLEM     ][""         ]["ico"] = "0076";
DEX_LIST[GAME.Ru][MON.PONYTA    ][""         ]["ico"] = "0077";
DEX_LIST[GAME.Ru][MON.RAPIDASH  ][""         ]["ico"] = "0078";
DEX_LIST[GAME.Ru][MON.SLOWPOKE  ][""         ]["ico"] = "0079";
DEX_LIST[GAME.Ru][MON.SLOWBRO   ][""         ]["ico"] = "0080";
DEX_LIST[GAME.Ru][MON.MAGNEMITE ][""         ]["ico"] = "0081";
DEX_LIST[GAME.Ru][MON.MAGNETON  ][""         ]["ico"] = "0082";
DEX_LIST[GAME.Ru][MON.FARFETCH_D][""         ]["ico"] = "0083";
DEX_LIST[GAME.Ru][MON.DODUO     ][""         ]["ico"] = "0084";
DEX_LIST[GAME.Ru][MON.DODRIO    ][""         ]["ico"] = "0085";
DEX_LIST[GAME.Ru][MON.SEEL      ][""         ]["ico"] = "0086";
DEX_LIST[GAME.Ru][MON.DEWGONG   ][""         ]["ico"] = "0087";
DEX_LIST[GAME.Ru][MON.GRIMER    ][""         ]["ico"] = "0088";
DEX_LIST[GAME.Ru][MON.MUK       ][""         ]["ico"] = "0089";
DEX_LIST[GAME.Ru][MON.SHELLDER  ][""         ]["ico"] = "0090";
DEX_LIST[GAME.Ru][MON.CLOYSTER  ][""         ]["ico"] = "0091";
DEX_LIST[GAME.Ru][MON.GASTLY    ][""         ]["ico"] = "0092";
DEX_LIST[GAME.Ru][MON.HAUNTER   ][""         ]["ico"] = "0093";
DEX_LIST[GAME.Ru][MON.GENGAR    ][""         ]["ico"] = "0094";
DEX_LIST[GAME.Ru][MON.ONIX      ][""         ]["ico"] = "0095";
DEX_LIST[GAME.Ru][MON.DROWZEE   ][""         ]["ico"] = "0096";
DEX_LIST[GAME.Ru][MON.HYPNO     ][""         ]["ico"] = "0097";
DEX_LIST[GAME.Ru][MON.KRABBY    ][""         ]["ico"] = "0098";
DEX_LIST[GAME.Ru][MON.KINGLER   ][""         ]["ico"] = "0099";
DEX_LIST[GAME.Ru][MON.VOLTORB   ][""         ]["ico"] = "0100";
DEX_LIST[GAME.Ru][MON.ELECTRODE ][""         ]["ico"] = "0101";
DEX_LIST[GAME.Ru][MON.EXEGGCUTE ][""         ]["ico"] = "0102";
DEX_LIST[GAME.Ru][MON.EXEGGUTOR ][""         ]["ico"] = "0103";
DEX_LIST[GAME.Ru][MON.CUBONE    ][""         ]["ico"] = "0104";
DEX_LIST[GAME.Ru][MON.MAROWAK   ][""         ]["ico"] = "0105";
DEX_LIST[GAME.Ru][MON.HITMONLEE ][""         ]["ico"] = "0106";
DEX_LIST[GAME.Ru][MON.HITMONCHAN][""         ]["ico"] = "0107";
DEX_LIST[GAME.Ru][MON.LICKITUNG ][""         ]["ico"] = "0108";
DEX_LIST[GAME.Ru][MON.KOFFING   ][""         ]["ico"] = "0109";
DEX_LIST[GAME.Ru][MON.WEEZING   ][""         ]["ico"] = "0110";
DEX_LIST[GAME.Ru][MON.RHYHORN   ][""         ]["ico"] = "0111";
DEX_LIST[GAME.Ru][MON.RHYDON    ][""         ]["ico"] = "0112";
DEX_LIST[GAME.Ru][MON.CHANSEY   ][""         ]["ico"] = "0113";
DEX_LIST[GAME.Ru][MON.TANGELA   ][""         ]["ico"] = "0114";
DEX_LIST[GAME.Ru][MON.KANGASKHAN][""         ]["ico"] = "0115";
DEX_LIST[GAME.Ru][MON.HORSEA    ][""         ]["ico"] = "0116";
DEX_LIST[GAME.Ru][MON.SEADRA    ][""         ]["ico"] = "0117";
DEX_LIST[GAME.Ru][MON.GOLDEEN   ][""         ]["ico"] = "0118";
DEX_LIST[GAME.Ru][MON.SEAKING   ][""         ]["ico"] = "0119";
DEX_LIST[GAME.Ru][MON.STARYU    ][""         ]["ico"] = "0120";
DEX_LIST[GAME.Ru][MON.STARMIE   ][""         ]["ico"] = "0121";
DEX_LIST[GAME.Ru][MON.MR_MIME   ][""         ]["ico"] = "0122";
DEX_LIST[GAME.Ru][MON.SCYTHER   ][""         ]["ico"] = "0123";
DEX_LIST[GAME.Ru][MON.JYNX      ][""         ]["ico"] = "0124";
DEX_LIST[GAME.Ru][MON.ELECTABUZZ][""         ]["ico"] = "0125";
DEX_LIST[GAME.Ru][MON.MAGMAR    ][""         ]["ico"] = "0126";
DEX_LIST[GAME.Ru][MON.PINSIR    ][""         ]["ico"] = "0127";
DEX_LIST[GAME.Ru][MON.TAUROS    ][""         ]["ico"] = "0128";
DEX_LIST[GAME.Ru][MON.MAGIKARP  ][""         ]["ico"] = "0129";
DEX_LIST[GAME.Ru][MON.GYARADOS  ][""         ]["ico"] = "0130";
DEX_LIST[GAME.Ru][MON.LAPRAS    ][""         ]["ico"] = "0131";
DEX_LIST[GAME.Ru][MON.DITTO     ][""         ]["ico"] = "0132";
DEX_LIST[GAME.Ru][MON.EEVEE     ][""         ]["ico"] = "0133";
DEX_LIST[GAME.Ru][MON.VAPOREON  ][""         ]["ico"] = "0134";
DEX_LIST[GAME.Ru][MON.JOLTEON   ][""         ]["ico"] = "0135";
DEX_LIST[GAME.Ru][MON.FLAREON   ][""         ]["ico"] = "0136";
DEX_LIST[GAME.Ru][MON.PORYGON   ][""         ]["ico"] = "0137";
DEX_LIST[GAME.Ru][MON.OMANYTE   ][""         ]["ico"] = "0138";
DEX_LIST[GAME.Ru][MON.OMASTAR   ][""         ]["ico"] = "0139";
DEX_LIST[GAME.Ru][MON.KABUTO    ][""         ]["ico"] = "0140";
DEX_LIST[GAME.Ru][MON.KABUTOPS  ][""         ]["ico"] = "0141";
DEX_LIST[GAME.Ru][MON.AERODACTYL][""         ]["ico"] = "0142";
DEX_LIST[GAME.Ru][MON.SNORLAX   ][""         ]["ico"] = "0143";
DEX_LIST[GAME.Ru][MON.ARTICUNO  ][""         ]["ico"] = "0144";
DEX_LIST[GAME.Ru][MON.ZAPDOS    ][""         ]["ico"] = "0145";
DEX_LIST[GAME.Ru][MON.MOLTRES   ][""         ]["ico"] = "0146";
DEX_LIST[GAME.Ru][MON.DRATINI   ][""         ]["ico"] = "0147";
DEX_LIST[GAME.Ru][MON.DRAGONAIR ][""         ]["ico"] = "0148";
DEX_LIST[GAME.Ru][MON.DRAGONITE ][""         ]["ico"] = "0149";
DEX_LIST[GAME.Ru][MON.MEWTWO    ][""         ]["ico"] = "0150";
DEX_LIST[GAME.Ru][MON.MEW       ][""         ]["ico"] = "0151";
DEX_LIST[GAME.Ru][MON.CHIKORITA ][""         ]["ico"] = "0152";
DEX_LIST[GAME.Ru][MON.BAYLEEF   ][""         ]["ico"] = "0153";
DEX_LIST[GAME.Ru][MON.MEGANIUM  ][""         ]["ico"] = "0154";
DEX_LIST[GAME.Ru][MON.CYNDAQUIL ][""         ]["ico"] = "0155";
DEX_LIST[GAME.Ru][MON.QUILAVA   ][""         ]["ico"] = "0156";
DEX_LIST[GAME.Ru][MON.TYPHLOSION][""         ]["ico"] = "0157";
DEX_LIST[GAME.Ru][MON.TOTODILE  ][""         ]["ico"] = "0158";
DEX_LIST[GAME.Ru][MON.CROCONAW  ][""         ]["ico"] = "0159";
DEX_LIST[GAME.Ru][MON.FERALIGATR][""         ]["ico"] = "0160";
DEX_LIST[GAME.Ru][MON.SENTRET   ][""         ]["ico"] = "0161";
DEX_LIST[GAME.Ru][MON.FURRET    ][""         ]["ico"] = "0162";
DEX_LIST[GAME.Ru][MON.HOOTHOOT  ][""         ]["ico"] = "0163";
DEX_LIST[GAME.Ru][MON.NOCTOWL   ][""         ]["ico"] = "0164";
DEX_LIST[GAME.Ru][MON.LEDYBA    ][""         ]["ico"] = "0165";
DEX_LIST[GAME.Ru][MON.LEDIAN    ][""         ]["ico"] = "0166";
DEX_LIST[GAME.Ru][MON.SPINARAK  ][""         ]["ico"] = "0167";
DEX_LIST[GAME.Ru][MON.ARIADOS   ][""         ]["ico"] = "0168";
DEX_LIST[GAME.Ru][MON.CROBAT    ][""         ]["ico"] = "0169";
DEX_LIST[GAME.Ru][MON.CHINCHOU  ][""         ]["ico"] = "0170";
DEX_LIST[GAME.Ru][MON.LANTURN   ][""         ]["ico"] = "0171";
DEX_LIST[GAME.Ru][MON.PICHU     ][""         ]["ico"] = "0172";
DEX_LIST[GAME.Ru][MON.CLEFFA    ][""         ]["ico"] = "0173";
DEX_LIST[GAME.Ru][MON.IGGLYBUFF ][""         ]["ico"] = "0174";
DEX_LIST[GAME.Ru][MON.TOGEPI    ][""         ]["ico"] = "0175";
DEX_LIST[GAME.Ru][MON.TOGETIC   ][""         ]["ico"] = "0176";
DEX_LIST[GAME.Ru][MON.NATU      ][""         ]["ico"] = "0177";
DEX_LIST[GAME.Ru][MON.XATU      ][""         ]["ico"] = "0178";
DEX_LIST[GAME.Ru][MON.MAREEP    ][""         ]["ico"] = "0179";
DEX_LIST[GAME.Ru][MON.FLAAFFY   ][""         ]["ico"] = "0180";
DEX_LIST[GAME.Ru][MON.AMPHAROS  ][""         ]["ico"] = "0181";
DEX_LIST[GAME.Ru][MON.BELLOSSOM ][""         ]["ico"] = "0182";
DEX_LIST[GAME.Ru][MON.MARILL    ][""         ]["ico"] = "0183";
DEX_LIST[GAME.Ru][MON.AZUMARILL ][""         ]["ico"] = "0184";
DEX_LIST[GAME.Ru][MON.SUDOWOODO ][""         ]["ico"] = "0185";
DEX_LIST[GAME.Ru][MON.POLITOED  ][""         ]["ico"] = "0186";
DEX_LIST[GAME.Ru][MON.HOPPIP    ][""         ]["ico"] = "0187";
DEX_LIST[GAME.Ru][MON.SKIPLOOM  ][""         ]["ico"] = "0188";
DEX_LIST[GAME.Ru][MON.JUMPLUFF  ][""         ]["ico"] = "0189";
DEX_LIST[GAME.Ru][MON.AIPOM     ][""         ]["ico"] = "0190";
DEX_LIST[GAME.Ru][MON.SUNKERN   ][""         ]["ico"] = "0191";
DEX_LIST[GAME.Ru][MON.SUNFLORA  ][""         ]["ico"] = "0192";
DEX_LIST[GAME.Ru][MON.YANMA     ][""         ]["ico"] = "0193";
DEX_LIST[GAME.Ru][MON.WOOPER    ][""         ]["ico"] = "0194";
DEX_LIST[GAME.Ru][MON.QUAGSIRE  ][""         ]["ico"] = "0195";
DEX_LIST[GAME.Ru][MON.ESPEON    ][""         ]["ico"] = "0196";
DEX_LIST[GAME.Ru][MON.UMBREON   ][""         ]["ico"] = "0197";
DEX_LIST[GAME.Ru][MON.MURKROW   ][""         ]["ico"] = "0198";
DEX_LIST[GAME.Ru][MON.SLOWKING  ][""         ]["ico"] = "0199";
DEX_LIST[GAME.Ru][MON.MISDREAVUS][""         ]["ico"] = "0200";
DEX_LIST[GAME.Ru][MON.UNOWN     ][""         ]["ico"] = "0201-find"; // defualt icon is F
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-angry"   ]["ico"] = "0201-angry";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-bear"    ]["ico"] = "0201-bear";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-chase"   ]["ico"] = "0201-chase";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-direct"  ]["ico"] = "0201-direct";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-engage"  ]["ico"] = "0201-engage";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-find"    ]["ico"] = "0201-find";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-give"    ]["ico"] = "0201-give";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-help"    ]["ico"] = "0201-help";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-increase"]["ico"] = "0201-increase";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-join"    ]["ico"] = "0201-join";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-keep"    ]["ico"] = "0201-keep";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-laugh"   ]["ico"] = "0201-laugh";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-make"    ]["ico"] = "0201-make";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-nuzzle"  ]["ico"] = "0201-nuzzle";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-observe" ]["ico"] = "0201-observe";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-perform" ]["ico"] = "0201-perform";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-quicken" ]["ico"] = "0201-quicken";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-reassure"]["ico"] = "0201-reassure";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-search"  ]["ico"] = "0201-search";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-tell"    ]["ico"] = "0201-tell";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-undo"    ]["ico"] = "0201-undo";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-vanish"  ]["ico"] = "0201-vanish";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-want"    ]["ico"] = "0201-want";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-xxxxx"   ]["ico"] = "0201-xxxxx";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-yield"   ]["ico"] = "0201-yield";
DEX_LIST[GAME.Ru][MON.UNOWN     ]["-zoom"    ]["ico"] = "0201-zoom";
DEX_LIST[GAME.Ru][MON.WOBBUFFET ][""         ]["ico"] = "0202";
DEX_LIST[GAME.Ru][MON.GIRAFARIG ][""         ]["ico"] = "0203";
DEX_LIST[GAME.Ru][MON.PINECO    ][""         ]["ico"] = "0204";
DEX_LIST[GAME.Ru][MON.FORRETRESS][""         ]["ico"] = "0205";
DEX_LIST[GAME.Ru][MON.DUNSPARCE ][""         ]["ico"] = "0206";
DEX_LIST[GAME.Ru][MON.GLIGAR    ][""         ]["ico"] = "0207";
DEX_LIST[GAME.Ru][MON.STEELIX   ][""         ]["ico"] = "0208";
DEX_LIST[GAME.Ru][MON.SNUBBULL  ][""         ]["ico"] = "0209";
DEX_LIST[GAME.Ru][MON.GRANBULL  ][""         ]["ico"] = "0210";
DEX_LIST[GAME.Ru][MON.QWILFISH  ][""         ]["ico"] = "0211";
DEX_LIST[GAME.Ru][MON.SCIZOR    ][""         ]["ico"] = "0212";
DEX_LIST[GAME.Ru][MON.SHUCKLE   ][""         ]["ico"] = "0213";
DEX_LIST[GAME.Ru][MON.HERACROSS ][""         ]["ico"] = "0214";
DEX_LIST[GAME.Ru][MON.SNEASEL   ][""         ]["ico"] = "0215";
DEX_LIST[GAME.Ru][MON.TEDDIURSA ][""         ]["ico"] = "0216";
DEX_LIST[GAME.Ru][MON.URSARING  ][""         ]["ico"] = "0217";
DEX_LIST[GAME.Ru][MON.SLUGMA    ][""         ]["ico"] = "0218";
DEX_LIST[GAME.Ru][MON.MAGCARGO  ][""         ]["ico"] = "0219";
DEX_LIST[GAME.Ru][MON.SWINUB    ][""         ]["ico"] = "0220";
DEX_LIST[GAME.Ru][MON.PILOSWINE ][""         ]["ico"] = "0221";
DEX_LIST[GAME.Ru][MON.CORSOLA   ][""         ]["ico"] = "0222";
DEX_LIST[GAME.Ru][MON.REMORAID  ][""         ]["ico"] = "0223";
DEX_LIST[GAME.Ru][MON.OCTILLERY ][""         ]["ico"] = "0224";
DEX_LIST[GAME.Ru][MON.DELIBIRD  ][""         ]["ico"] = "0225";
DEX_LIST[GAME.Ru][MON.MANTINE   ][""         ]["ico"] = "0226";
DEX_LIST[GAME.Ru][MON.SKARMORY  ][""         ]["ico"] = "0227";
DEX_LIST[GAME.Ru][MON.HOUNDOUR  ][""         ]["ico"] = "0228";
DEX_LIST[GAME.Ru][MON.HOUNDOOM  ][""         ]["ico"] = "0229";
DEX_LIST[GAME.Ru][MON.KINGDRA   ][""         ]["ico"] = "0230";
DEX_LIST[GAME.Ru][MON.PHANPY    ][""         ]["ico"] = "0231";
DEX_LIST[GAME.Ru][MON.DONPHAN   ][""         ]["ico"] = "0232";
DEX_LIST[GAME.Ru][MON.PORYGON2  ][""         ]["ico"] = "0233";
DEX_LIST[GAME.Ru][MON.STANTLER  ][""         ]["ico"] = "0234";
DEX_LIST[GAME.Ru][MON.SMEARGLE  ][""         ]["ico"] = "0235";
DEX_LIST[GAME.Ru][MON.TYROGUE   ][""         ]["ico"] = "0236";
DEX_LIST[GAME.Ru][MON.HITMONTOP ][""         ]["ico"] = "0237";
DEX_LIST[GAME.Ru][MON.SMOOCHUM  ][""         ]["ico"] = "0238";
DEX_LIST[GAME.Ru][MON.ELEKID    ][""         ]["ico"] = "0239";
DEX_LIST[GAME.Ru][MON.MAGBY     ][""         ]["ico"] = "0240";
DEX_LIST[GAME.Ru][MON.MILTANK   ][""         ]["ico"] = "0241";
DEX_LIST[GAME.Ru][MON.BLISSEY   ][""         ]["ico"] = "0242";
DEX_LIST[GAME.Ru][MON.RAIKOU    ][""         ]["ico"] = "0243";
DEX_LIST[GAME.Ru][MON.ENTEI     ][""         ]["ico"] = "0244";
DEX_LIST[GAME.Ru][MON.SUICUNE   ][""         ]["ico"] = "0245";
DEX_LIST[GAME.Ru][MON.LARVITAR  ][""         ]["ico"] = "0246";
DEX_LIST[GAME.Ru][MON.PUPITAR   ][""         ]["ico"] = "0247";
DEX_LIST[GAME.Ru][MON.TYRANITAR ][""         ]["ico"] = "0248";
DEX_LIST[GAME.Ru][MON.LUGIA     ][""         ]["ico"] = "0249";
DEX_LIST[GAME.Ru][MON.HO_OH     ][""         ]["ico"] = "0250";
DEX_LIST[GAME.Ru][MON.CELEBI    ][""         ]["ico"] = "0251";
// new formes
DEX_LIST[GAME.Sa] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.FR] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.FR][MON.DEOXYS    ][""         ] = {ico: "0386-attack",  name: "Attack Deoxys",  flags: []};
DEX_LIST[GAME.LG] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.LG][MON.DEOXYS    ][""         ] = {ico: "0386-defense", name: "Defense Deoxys", flags: []};
DEX_LIST[GAME.Em] = CopyObject(DEX_LIST[GAME.Ru]);
DEX_LIST[GAME.Em][MON.DEOXYS    ][""         ] = {ico: "0386-speed",   name: "Speed Deoxys",   flags: []};
