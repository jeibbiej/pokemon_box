const IcoPathSwSh 	= "poke_icon/g08/sw-sh/";
const IcoPathSSHome	= "poke_icon/g08/home/";

const ImgWd_G08		= 68;
const BoxCap_G08	= 30;
const MaxBox_G08	= 32;
const DivBox_G08	=  6;

const _Regdex_rSwSh	=
{
	"0810"     : {ico: "0810", flags: 0}, // "Grookey"
	"0811"     : {ico: "0811", flags: 0}, // "Thwackey"
	"0812"     : {ico: "0812", flags: 0}, // "Rillaboom"
//	"0812-gmax": {ico: "0812-gmax", flags: 0}, // "Gigantamax Rillaboom"
	"0813"     : {ico: "0813", flags: 0}, // "Scorbunny"
	"0814"     : {ico: "0814", flags: 0}, // "Raboot"
	"0815"     : {ico: "0815", flags: 0}, // "Cinderace"
//	"0815-gmax": {ico: "0815-gmax", flags: 0}, // "Gigantamax Cinderace"
	"0816"     : {ico: "0816", flags: 0}, // "Sobble"
	"0817"     : {ico: "0817", flags: 0}, // "Drizzile"
	"0818"     : {ico: "0818", flags: 0}, // "Inteleon"
//	"0818-gmax": {ico: "0818-gmax", flags: 0}, // "Gigantamax Inteleon"
	"0824"     : {ico: "0824", flags: 0}, // "Blipbug"
	"0825"     : {ico: "0825", flags: 0}, // "Dottler"
	"0826"     : {ico: "0826", flags: 0}, // "Orbeetle"
//	"0826-gmax": {ico: "0826-gmax", flags: 0}, // "Gigantamax Orbeetle"
	"0010"     : {ico: "0010", flags: 0}, // "Caterpie"
	"0011"     : {ico: "0011", flags: 0}, // "Metapod"
	"0012"     : {ico: "0012", flags: 0}, // "Butterfree"
//	"0012-m"   : {ico: "0012", flags: 0}, // "Butterfree♂"
//	"0012-f"   : {ico: "custom/0012-f", flags: 0}, // "Butterfree♀"
//	"0012-gmax": {ico: "0012-gmax", flags: 0}, // "Gigantamax Butterfree"
	"0736"     : {ico: "0736", flags: 0}, // "Grubbin"
	"0737"     : {ico: "0737", flags: 0}, // "Charjabug"
	"0738"     : {ico: "0738", flags: 0}, // "Vikavolt"
	"0163"     : {ico: "0163", flags: 0}, // "Hoothoot"
	"0164"     : {ico: "0164", flags: 0}, // "Noctowl"
	"0821"     : {ico: "0821", flags: 0}, // "Rookidee"
	"0822"     : {ico: "0822", flags: 0}, // "Corvisquire"
	"0823"     : {ico: "0823", flags: 0}, // "Corviknight"
//	"0823-gmax": {ico: "0823-gmax", flags: 0}, // "Gigantamax Corviknight"
	"0819"     : {ico: "0819", flags: 0}, // "Skwovet"
	"0820"     : {ico: "0820", flags: 0}, // "Greedent"
	"0519"     : {ico: "0519", flags: 0}, // "Pidove"
	"0520"     : {ico: "0520", flags: 0}, // "Tranquill"
//	"0521"     : {ico: "0521", flags: 0}, // "Unfezant"
	"0521-m"   : {ico: "0521-m", flags: 0}, // "Unfezant♂"
	"0521-f"   : {ico: "0521-f", flags: 0}, // "Unfezan♀"
	"0827"     : {ico: "0827", flags: 0}, // "Nickit"
	"0828"     : {ico: "0828", flags: 0}, // "Thievul"
	"0263-galar": {ico: "0263-galar", flags: 0}, // "Galarian Zigzagoon"
	"0263"      : {ico: "0263", flags: 0}, // "Zigzagoon"
	"0264-galar": {ico: "0264-galar", flags: 0}, // "Galarian Linoone"
	"0264"      : {ico: "0264", flags: 0}, // "Linoone"
	"0862"      : {ico: "0862", flags: 0}, // "Obstagoon"
	"0831"      : {ico: "0831", flags: 0}, // "Wooloo"
	"0832"      : {ico: "0832", flags: 0}, // "Dubwool"
	"0270"      : {ico: "0270", flags: 0}, // "Lotad"
	"0271"      : {ico: "0271", flags: 0}, // "Lombre"
	"0272"      : {ico: "0272", flags: 0}, // "Ludicolo"
//	"0272-m"    : {ico: "0272", flags: 0}, // "Ludicolo♂"
//	"0272-f"    : {ico: "0272", flags: 0}, // "Ludicolo♀"
	"0273"      : {ico: "0273", flags: 0}, // "Seedot"
	"0274"      : {ico: "0274", flags: 0}, // "Nuzleaf"
//	"0274-m"    : {ico: "0274", flags: 0}, // "Nuzleaf♂"
//	"0274-f"    : {ico: "0274", flags: 0}, // "Nuzleaf♀"
	"0275"      : {ico: "0275", flags: 0}, // "Shiftry"
//	"0275-m"    : {ico: "0275", flags: 0}, // "Shiftry♂"
//	"0275-f"    : {ico: "0275", flags: 0}, // "Shiftry♀"
	"0833"      : {ico: "0833", flags: 0}, // "Chewtle"
	"0834"      : {ico: "0834", flags: 0}, // "Drednaw"
//	"0834-gmax" : {ico: "0834-gmax", flags: 0}, // "Gigantamax Drednaw"
	"0509"      : {ico: "0509", flags: 0}, // "Purrloin"
	"0510"      : {ico: "0510", flags: 0}, // "Liepard"
	"0835"      : {ico: "0835", flags: 0}, // "Yamper"
	"0836"      : {ico: "0836", flags: 0}, // "Boltund"
	"0659"      : {ico: "0659", flags: 0}, // "Bunnelby"
	"0660"      : {ico: "0660", flags: 0}, // "Diggersby"
	"0572"      : {ico: "0572", flags: 0}, // "Minccino"
	"0573"      : {ico: "0573", flags: 0}, // "Cinccino"
	"0761"      : {ico: "0761", flags: 0}, // "Bounsweet" // female only
	"0762"      : {ico: "0762", flags: 0}, // "Steenee" // female only
	"0763"      : {ico: "0763", flags: 0}, // "Tsareena" // female only
	"0043"      : {ico: "0043", flags: 0}, // "Oddish"
	"0044"      : {ico: "0044", flags: 0}, // "Gloom"
//	"0044-m"    : {ico: "0044", flags: 0}, // "Gloom♂"
//	"0044-f"    : {ico: "custom/0044-f", flags: 0}, // "Gloom♀"
	"0045"      : {ico: "0045", flags: 0}, // "Vileplume"
//	"0045-m"    : {ico: "0045", flags: 0}, // "Vileplume♂"
//	"0045-f"    : {ico: "custom/0045-f", flags: 0}, // "Vileplume♀"
	"0182"      : {ico: "0182", flags: 0}, // "Bellossom"
	"0406"      : {ico: "0406", flags: 0}, // "Budew"
	"0315"      : {ico: "0315", flags: 0}, // "Roselia"
//	"0315-m"    : {ico: "0315", flags: 0}, // "Roselia♂"
//	"0315-f"    : {ico: "0315", flags: 0}, // "Roselia♀"
	"0407"      : {ico: "0407", flags: 0}, // "Roserade"
//	"0407-m"    : {ico: "0407", flags: 0}, // "Roserade♂"
//	"0407-f"    : {ico: "0407", flags: 0}, // "Roserade♀"
	"0278"      : {ico: "0278", flags: 0}, // "Wingull"
	"0279"      : {ico: "0279", flags: 0}, // "Pelipper"
	"0595"      : {ico: "0595", flags: 0}, // "Joltik"
	"0596"      : {ico: "0596", flags: 0}, // "Galvantula"
	"0309"      : {ico: "0309", flags: 0}, // "Electrike"
	"0310"      : {ico: "0310", flags: 0}, // "Manectric"
//	"0310-mega" : {ico: "0310-mega", flags: 0}, // "Mega Manectric"
	"0037"      : {ico: "0037", flags: 0}, // "Vulpix"
	"0037-alola": {ico: "0037-alola", flags: 0}, // "Alolan Vulpix"
	"0038"      : {ico: "0038", flags: 0}, // "Ninetales"
	"0038-alola": {ico: "0038-alola", flags: 0}, // "Alolan Ninetales"
	"0058"      : {ico: "0058", flags: 0}, // "Growlithe"
	"0059"      : {ico: "0059", flags: 0}, // "Arcanine"
	"0582"      : {ico: "0582", flags: 0}, // "Vanillite"
	"0583"      : {ico: "0583", flags: 0}, // "Vanillish"
	"0584"      : {ico: "0584", flags: 0}, // "Vanilluxe"
	"0220"      : {ico: "0220", flags: 0}, // "Swinub"
	"0221"      : {ico: "0221", flags: 0}, // "Piloswine"
//	"0221-m"    : {ico: "0221", flags: 0}, // "Piloswine♂"
//	"0221-f"    : {ico: "0221", flags: 0}, // "Piloswine♀"
	"0473"      : {ico: "0473", flags: 0}, // "Mamoswine"
//	"0473-m"    : {ico: "0473", flags: 0}, // "Mamoswine♂"
//	"0473-f"    : {ico: "0473", flags: 0}, // "Mamoswine♀"
	"0225"      : {ico: "0225", flags: 0}, // "Delibird"
	"0361"      : {ico: "0361", flags: 0}, // "Snorunt"
	"0362"      : {ico: "0362", flags: 0}, // "Glalie"
//	"0362-mega" : {ico: "0362-mega", flags: 0}, // "Mega Glalie"
	"0478"      : {ico: "0478", flags: 0}, // "Froslass" // female only
	"0343"      : {ico: "0343", flags: 0}, // "Baltoy" // uknown gender
	"0344"      : {ico: "0344", flags: 0}, // "Claydol" // uknown gender
	"0749"      : {ico: "0749", flags: 0}, // "Mudbray"
	"0750"      : {ico: "0750", flags: 0}, // "Mudsdale"
	"0557"      : {ico: "0557", flags: 0}, // "Dwebble"
	"0558"      : {ico: "0558", flags: 0}, // "Crustle"
	"0622"      : {ico: "0622", flags: 0}, // "Golett" // uknown gender
	"0623"      : {ico: "0623", flags: 0}, // "Golurk" // uknown gender
	"0517"      : {ico: "0517", flags: 0}, // "Munna"
	"0518"      : {ico: "0518", flags: 0}, // "Musharna"
	"0177"      : {ico: "0177", flags: 0}, // "Natu"
	"0178"      : {ico: "0178", flags: 0}, // "Xatu"
//	"0178-m"    : {ico: "custom/0178-m", flags: 0}, // "Xatu♂"
//	"0178-f"    : {ico: "0178", flags: 0}, // "Xatu♀"
	"0759"      : {ico: "0759", flags: 0}, // "Stufful"
	"0760"      : {ico: "0760", flags: 0}, // "Bewear"
	"0459"      : {ico: "0459", flags: 0}, // "Snover"
//	"0459-m"    : {ico: "0459", flags: 0}, // "Snover♂"
//	"0459-f"    : {ico: "0459", flags: 0}, // "Snover♀"
	"0460"      : {ico: "0460", flags: 0}, // "Abomasnow"
//	"0460-m"    : {ico: "0460", flags: 0}, // "Abomasnow♂"
//	"0460-f"    : {ico: "0460", flags: 0}, // "Abomasnow♀"
//	"0460-mega" : {ico: "0460-mega", flags: 0}, // "Mega Abomasnow"
	"0098"      : {ico: "0098", flags: 0}, // "Krabby"
	"0099"      : {ico: "0099", flags: 0}, // "Kingler"
//	"0099-gmax" : {ico: "0099-gmax", flags: 0}, // "Gigantamax Kingler"
	"0194"      : {ico: "0194", flags: 0}, // "Wooper"
//	"0194-m"    : {ico: "0194", flags: 0}, // "Wooper♂"
//	"0194-f"    : {ico: "0194", flags: 0}, // "Wooper♀"
	"0195"      : {ico: "0195", flags: 0}, // "Quagsire"
//	"0195-m"    : {ico: "0195", flags: 0}, // "Quagsire♂"
//	"0195-f"    : {ico: "0195", flags: 0}, // "Quagsire♀"
	"0341"      : {ico: "0341", flags: 0}, // "Corphish"
	"0342"      : {ico: "0342", flags: 0}, // "Crawdaunt"
	"0290"      : {ico: "0290", flags: 0}, // "Nincada"
	"0291"      : {ico: "0291", flags: 0}, // "Ninjask"
	"0292"      : {ico: "0292", flags: 0}, // "Shedinja" // uknown gender
	"0236"      : {ico: "0236", flags: 0}, // "Tyrogue" // male only
	"0106"      : {ico: "0106", flags: 0}, // "Hitmonlee" // male only
	"0107"      : {ico: "0107", flags: 0}, // "Hitmonchan" // male only
	"0237"      : {ico: "0237", flags: 0}, // "Hitmontop" // male only
	"0674"      : {ico: "0674", flags: 0}, // "Pancham"
	"0675"      : {ico: "0675", flags: 0}, // "Pangoro"
	"0599"      : {ico: "0599", flags: 0}, // "Klink" // uknown gender
	"0600"      : {ico: "0600", flags: 0}, // "Klang" // uknown gender
	"0601"      : {ico: "0601", flags: 0}, // "Klinklang" // uknown gender
	"0415"      : {ico: "0415", flags: 0}, // "Combee"
//	"0415-m"    : {ico: "0415", flags: 0}, // "Combee♂"
//	"0415-f"    : {ico: "0415", flags: 0}, // "Combee♀"
	"0416"      : {ico: "0416", flags: 0}, // "Vespiquen" // female only
	"0436"      : {ico: "0436", flags: 0}, // "Bronzor" // uknown gender
	"0437"      : {ico: "0437", flags: 0}, // "Bronzong" // uknown gender
	"0280"      : {ico: "0280", flags: 0}, // "Ralts"
	"0281"      : {ico: "0281", flags: 0}, // "Kirlia"
	"0282"      : {ico: "0282", flags: 0}, // "Gardevoir"
//	"0282-mega" : {ico: "0282-mega", flags: 0}, // "Mega Gardevoir"
	"0475"      : {ico: "0475", flags: 0}, // "Gallade" // male only
//	"0475-mega" : {ico: "0475-mega", flags: 0}, // "Mega Gallade" // male only
	"0425"      : {ico: "0425", flags: 0}, // "Drifloon"
	"0426"      : {ico: "0426", flags: 0}, // "Drifblim"
	"0829"      : {ico: "0829", flags: 0}, // "Gossifleur"
	"0830"      : {ico: "0830", flags: 0}, // "Eldegoss"
	"0420"      : {ico: "0420", flags: 0}, // "Cherubi"
//	"0421"      : {ico: "0421", flags: 0}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: 0}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: 0}, // "Sunshine Cherrim"
	"0434"         : {ico: "0434", flags: 0}, // "Stunky"
	"0435"         : {ico: "0435", flags: 0}, // "Skuntank"
	"0535"         : {ico: "0535", flags: 0}, // "Tympole"
	"0536"         : {ico: "0536", flags: 0}, // "Palpitoad"
	"0537"         : {ico: "0537", flags: 0}, // "Seismitoad"
	"0355"         : {ico: "0355", flags: 0}, // "Duskull"
	"0356"         : {ico: "0356", flags: 0}, // "Dusclops"
	"0477"         : {ico: "0477", flags: 0}, // "Dusknoir"
	"0066"         : {ico: "0066", flags: 0}, // "Machop"
	"0067"         : {ico: "0067", flags: 0}, // "Machoke"
	"0068"         : {ico: "0068", flags: 0}, // "Machamp"
//	"0068-gmax"    : {ico: "0068-gmax", flags: 0}, // "Gigantamax Machamp"
	"0092"         : {ico: "0092", flags: 0}, // "Gastly"
	"0093"         : {ico: "0093", flags: 0}, // "Haunter"
	"0094"         : {ico: "0094", flags: 0}, // "Gengar"
//	"0094-mega"    : {ico: "0094-mega", flags: 0}, // "Mega Gengar"
//	"0094-gmax"    : {ico: "0094-gmax", flags: 0}, // "Gigantamax Gengar"
	"0129"         : {ico: "0129", flags: 0}, // "Magikarp"
//	"0129-m"       : {ico: "0129", flags: 0}, // "Magikarp♂"
//	"0129-f"       : {ico: "custom/0129-f", flags: 0}, // "Magikarp♀"
	"0130"         : {ico: "0130", flags: 0}, // "Gyarados"
//	"0130-m"       : {ico: "0130", flags: 0}, // "Gyarados♂"
//	"0130-f"       : {ico: "custom/0130-f", flags: 0}, // "Gyarados♀"
//	"0130-mega"    : {ico: "0130-mega", flags: 0}, // "Mega Gyarados"
	"0118"         : {ico: "0118", flags: 0}, // "Goldeen"
//	"0118-m"       : {ico: "0118", flags: 0}, // "Goldeen♂"
//	"0118-f"       : {ico: "custom/0118-f", flags: 0}, // "Goldeen♀"
	"0119"         : {ico: "0119", flags: 0}, // "Seaking"
//	"0119-m"       : {ico: "0119", flags: 0}, // "Seaking♂"
//	"0119-f"       : {ico: "custom/0119-f", flags: 0}, // "Seaking♀"
	"0223"         : {ico: "0223", flags: 0}, // "Remoraid"
	"0224"         : {ico: "0224", flags: 0}, // "Octillery"
//	"0224-m"       : {ico: "0224", flags: 0}, // "Octillery♂"
//	"0224-f"       : {ico: "0224", flags: 0}, // "Octillery♀"
	"0090"         : {ico: "0090", flags: 0}, // "Shellder"
	"0091"         : {ico: "0091", flags: 0}, // "Cloyster"
	"0349"         : {ico: "0349", flags: 0}, // "Feebas"
	"0350"         : {ico: "0350", flags: 0}, // "Milotic"
//	"0350-m"       : {ico: "0350", flags: 0}, // "Milotic♂"
//	"0350-f"       : {ico: "0350", flags: 0}, // "Milotic♀"
//	"0550"         : {ico: "0550", flags: 0}, // "Basculin"
	"0550-red"     : {ico: "0550-red", flags: 0}, // "Red-striped Basculin"
	"0550-blue"    : {ico: "0550-blue", flags: 0}, // "Blue-striped Basculin"
//	"0746"         : {ico: "0746", flags: 0}, // "Wishiwashi"
	"0746-solo"    : {ico: "0746-solo", flags: 0}, // "Solo Wishiwashi"
//	"0746-school"  : {ico: "0746-school", flags: 0}, // "School of Wishiwashi"
	"0771"         : {ico: "0771", flags: 0}, // "Pyukumuku"
	"0568"         : {ico: "0568", flags: 0}, // "Trubbish"
	"0569"         : {ico: "0569", flags: 0}, // "Garbodor"
//	"0569-gmax"    : {ico: "0569-gmax", flags: 0}, // "Gigantamax Garbodor"
	"0850"         : {ico: "0850", flags: 0}, // "Sizzlipede"
	"0851"         : {ico: "0851", flags: 0}, // "Centiskorch"
//	"0851-gmax"    : {ico: "0851-gmax", flags: 0}, // "Gigantamax Centiskorch"
	"0837"         : {ico: "0837", flags: 0}, // "Rolycoly"
	"0838"         : {ico: "0838", flags: 0}, // "Carkol"
	"0839"         : {ico: "0839", flags: 0}, // "Coalossal"
//	"0839-gmax"    : {ico: "0839-gmax", flags: 0}, // "Gigantamax Coalossal"
	"0050"         : {ico: "0050", flags: 0}, // "Diglett"
	"0050-alola"   : {ico: "0050-alola", flags: 0}, // "Alolan Diglett"
	"0051"         : {ico: "0051", flags: 0}, // "Dugtrio"
	"0051-alola"   : {ico: "0051-alola", flags: 0}, // "Alolan Dugtrio"
	"0529"         : {ico: "0529", flags: 0}, // "Drilbur"
	"0530"         : {ico: "0530", flags: 0}, // "Excadrill"
	"0524"         : {ico: "0524", flags: 0}, // "Roggenrola"
	"0525"         : {ico: "0525", flags: 0}, // "Boldore"
	"0526"         : {ico: "0526", flags: 0}, // "Gigalith"
	"0532"         : {ico: "0532", flags: 0}, // "Timburr"
	"0533"         : {ico: "0533", flags: 0}, // "Gurdurr"
	"0534"         : {ico: "0534", flags: 0}, // "Conkeldurr"
	"0527"         : {ico: "0527", flags: 0}, // "Woobat"
	"0528"         : {ico: "0528", flags: 0}, // "Swoobat"
	"0714"         : {ico: "0714", flags: 0}, // "Noibat"
	"0715"         : {ico: "0715", flags: 0}, // "Noivern"
	"0095"         : {ico: "0095", flags: 0}, // "Onix"
	"0208"         : {ico: "0208", flags: 0}, // "Steelix"
//	"0208-m"       : {ico: "0208", flags: 0}, // "Steelix♂"
//	"0208-f"       : {ico: "0208", flags: 0}, // "Steelix♀"
	"0846"         : {ico: "0846", flags: 0}, // "Arrokuda"
	"0847"         : {ico: "0847", flags: 0}, // "Barraskewda"
	"0052-galar"   : {ico: "0052-galar", flags: 0}, // "Galarian Meowth"
	"0052"         : {ico: "0052", flags: 0}, // "Meowth"
	"0052-alola"   : {ico: "0052-alola", flags: 0}, // "Alolan Meowth"
//	"0052-gmax"    : {ico: "0052-gmax", flags: 0}, // "Gigantamax Meowth"
	"0863"         : {ico: "0863", flags: 0}, // "Perrserker"
	"0053"         : {ico: "0053", flags: 0}, // "Persian"
	"0053-alola"   : {ico: "0053-alola", flags: 0}, // "Alolan Persian"
	"0868"         : {ico: "0868", flags: 0}, // "Milcery" // female only
//	"0869"         : {ico: "0869", flags: 0}, // "Alcremie" // female only
//	"0869-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry"     : {ico: "0869-vanilla-cream-strawberry", flags: 0}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry"          : {ico: "custom/0869-vanilla-cream-berry", flags: 0}, // "Berry Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-berry-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love"           : {ico: "custom/0869-vanilla-cream-love", flags: 0}, // "Love Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-love-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star"           : {ico: "custom/0869-vanilla-cream-star", flags: 0}, // "Star Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-star-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover"         : {ico: "custom/0869-vanilla-cream-clover", flags: 0}, // "Clover Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-clover-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower"         : {ico: "custom/0869-vanilla-cream-flower", flags: 0}, // "Flower Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-flower-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon"         : {ico: "custom/0869-vanilla-cream-ribbon", flags: 0}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-ribbon-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry"        : {ico: "0869-ruby-cream-strawberry", flags: 0}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-strawberry-gmax"   : {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry"             : {ico: "custom/0869-ruby-cream-berry", flags: 0}, // "Berry Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-berry-gmax"        : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love"              : {ico: "custom/0869-ruby-cream-love", flags: 0}, // "Love Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-love-gmax"         : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star"              : {ico: "custom/0869-ruby-cream-star", flags: 0}, // "Star Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-star-gmax"         : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover"            : {ico: "custom/0869-ruby-cream-clover", flags: 0}, // "Clover Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-clover-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower"            : {ico: "custom/0869-ruby-cream-flower", flags: 0}, // "Flower Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-flower-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon"            : {ico: "custom/0869-ruby-cream-ribbon", flags: 0}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-ribbon-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry"      : {ico: "0869-matcha-cream-strawberry", flags: 0}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-strawberry-gmax" : {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry"           : {ico: "custom/0869-matcha-cream-berry", flags: 0}, // "Berry Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-berry-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love"            : {ico: "custom/0869-matcha-cream-love", flags: 0}, // "Love Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-love-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star"            : {ico: "custom/0869-matcha-cream-star", flags: 0}, // "Star Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-star-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover"          : {ico: "custom/0869-matcha-cream-clover", flags: 0}, // "Clover Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-clover-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower"          : {ico: "custom/0869-matcha-cream-flower", flags: 0}, // "Flower Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-flower-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon"          : {ico: "custom/0869-matcha-cream-ribbon", flags: 0}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-ribbon-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry"        : {ico: "0869-mint-cream-strawberry", flags: 0}, // "Strawberry Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-strawberry-gmax"   : {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry"             : {ico: "custom/0869-mint-cream-berry", flags: 0}, // "Berry Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-berry-gmax"        : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love"              : {ico: "custom/0869-mint-cream-love", flags: 0}, // "Love Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-love-gmax"         : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star"              : {ico: "custom/0869-mint-cream-star", flags: 0}, // "Star Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-star-gmax"         : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover"            : {ico: "custom/0869-mint-cream-clover", flags: 0}, // "Clover Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-clover-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower"            : {ico: "custom/0869-mint-cream-flower", flags: 0}, // "Flower Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-flower-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon"            : {ico: "custom/0869-mint-cream-ribbon", flags: 0}, // "Ribbon Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-ribbon-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry"       : {ico: "0869-lemon-cream-strawberry", flags: 0}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-strawberry-gmax"  : {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry"            : {ico: "custom/0869-lemon-cream-berry", flags: 0}, // "Berry Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-berry-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love"             : {ico: "custom/0869-lemon-cream-love", flags: 0}, // "Love Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-love-gmax"        : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star"             : {ico: "custom/0869-lemon-cream-star", flags: 0}, // "Star Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-star-gmax"        : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover"           : {ico: "custom/0869-lemon-cream-clover", flags: 0}, // "Clover Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-clover-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower"           : {ico: "custom/0869-lemon-cream-flower", flags: 0}, // "Flower Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-flower-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon"           : {ico: "custom/0869-lemon-cream-ribbon", flags: 0}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-ribbon-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry"      : {ico: "0869-salted-cream-strawberry", flags: 0}, // "Strawberry Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-strawberry-gmax" : {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry"           : {ico: "custom/0869-salted-cream-berry", flags: 0}, // "Berry Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-berry-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love"            : {ico: "custom/0869-salted-cream-love", flags: 0}, // "Love Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-love-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star"            : {ico: "custom/0869-salted-cream-star", flags: 0}, // "Star Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-star-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover"          : {ico: "custom/0869-salted-cream-clover", flags: 0}, // "Clover Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-clover-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower"          : {ico: "custom/0869-salted-cream-flower", flags: 0}, // "Flower Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-flower-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon"          : {ico: "custom/0869-salted-cream-ribbon", flags: 0}, // "Ribbon Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-ribbon-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry"        : {ico: "0869-ruby-swirl-strawberry", flags: 0}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-strawberry-gmax"   : {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry"             : {ico: "custom/0869-ruby-swirl-berry", flags: 0}, // "Berry Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-berry-gmax"        : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love"              : {ico: "custom/0869-ruby-swirl-love", flags: 0}, // "Love Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-love-gmax"         : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star"              : {ico: "custom/0869-ruby-swirl-star", flags: 0}, // "Star Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-star-gmax"         : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover"            : {ico: "custom/0869-ruby-swirl-clover", flags: 0}, // "Clover Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-clover-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower"            : {ico: "custom/0869-ruby-swirl-flower", flags: 0}, // "Flower Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-flower-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon"            : {ico: "custom/0869-ruby-swirl-ribbon", flags: 0}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-ribbon-gmax"       : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry"     : {ico: "0869-caramel-swirl-strawberry", flags: 0}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry"          : {ico: "custom/0869-caramel-swirl-berry", flags: 0}, // "Berry Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-berry-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love"           : {ico: "custom/0869-caramel-swirl-love", flags: 0}, // "Love Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-love-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star"           : {ico: "custom/0869-caramel-swirl-star", flags: 0}, // "Star Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-star-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover"         : {ico: "custom/0869-caramel-swirl-clover", flags: 0}, // "Clover Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-clover-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower"         : {ico: "custom/0869-caramel-swirl-flower", flags: 0}, // "Flower Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-flower-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon"         : {ico: "custom/0869-caramel-swirl-ribbon", flags: 0}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-ribbon-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry"     : {ico: "0869-rainbow-swirl-strawberry", flags: 0}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry"          : {ico: "custom/0869-rainbow-swirl-berry", flags: 0}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-berry-gmax"     : {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love"           : {ico: "custom/0869-rainbow-swirl-love", flags: 0}, // "Love Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-love-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star"           : {ico: "custom/0869-rainbow-swirl-star", flags: 0}, // "Star Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-star-gmax"      : {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover"         : {ico: "custom/0869-rainbow-swirl-clover", flags: 0}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-clover-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower"         : {ico: "custom/0869-rainbow-swirl-flower", flags: 0}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-flower-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon"         : {ico: "custom/0869-rainbow-swirl-ribbon", flags: 0}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-ribbon-gmax"    : {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0742"                              : {ico: "0742", flags: 0}, // "Cutiefly"
	"0743"                              : {ico: "0743", flags: 0}, // "Ribombee"
	"0597"                              : {ico: "0597", flags: 0}, // "Ferroseed"
	"0598"                              : {ico: "0598", flags: 0}, // "Ferrothorn"
//	"0710"                              : {ico: "0710", flags: 0}, // "Pumpkaboo"
	"0710-average"                      : {ico: "0710-average", flags: 0}, // "Average Size Pumpkaboo"
	"0710-small"                        : {ico: "custom/0710-small", flags: 0}, // "Small Size Pumpkaboo"
	"0710-large"                        : {ico: "custom/0710-large", flags: 0}, // "Large Size Pumpkaboo"
	"0710-super"                        : {ico: "custom/0710-super", flags: 0}, // "Super Size Pumpkaboo"
//	"0711"                              : {ico: "0711", flags: 0}, // "Gourgeist"
	"0711-average"                      : {ico: "0711-average", flags: 0}, // "Average Size Gourgeist"
	"0711-small"                        : {ico: "0711-average", flags: 0}, // "Small Size Gourgeist"
	"0711-large"                        : {ico: "0711-average", flags: 0}, // "Large Size Gourgeist"
	"0711-super"                        : {ico: "0711-average", flags: 0}, // "Super Size Gourgeist"
	"0172": {ico: "0172", flags: 0}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: 0}, // "Spiky-eared Pichu" // female only
	"0025": {ico: "0025", flags: 0}, // "Pikachu"
//	"0025-m": {ico: "0025", flags: 0}, // "Pikachu♂"
//	"0025-f": {ico: "custom/0025-f", flags: 0}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: 0}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: 0}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: 0}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: 0}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: 0}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: 0}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: 0}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: 0}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: 0}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: 0}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: 0}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: 0}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: 0}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: 0}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: 0}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: 0}, // "Parter Pikachu♀"
//	"0025-gmax": {ico: "0025-gmax", flags: 0}, // "Gigantamax Pikachu"
	"0026": {ico: "0026", flags: 0}, // "Raichu"
//	"0026-m": {ico: "0026", flags: 0}, // "Raichu♂"
//	"0026-f": {ico: "custom/0026-f", flags: 0}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: 0}, // "Alolan Raichu"
	"0133": {ico: "0133", flags: 0}, // "Eevee"
//	"0133-m": {ico: "0133", flags: 0}, // "Eevee♂"
//	"0133-f": {ico: "custom/0133-f", flags: 0}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: 0}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: 0}, // "Partner Eevee♀"
//	"0133-gmax": {ico: "0133-gmax", flags: 0}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: 0}, // "Vaporeon"
	"0135": {ico: "0135", flags: 0}, // "Jolteon"
	"0136": {ico: "0136", flags: 0}, // "Flareon"
	"0196": {ico: "0196", flags: 0}, // "Espeon"
	"0197": {ico: "0197", flags: 0}, // "Umbreon"
	"0470": {ico: "0470", flags: 0}, // "Leafeon"
	"0471": {ico: "0471", flags: 0}, // "Glaceon"
	"0700": {ico: "0700", flags: 0}, // "Sylveon"
	"0840": {ico: "0840", flags: 0}, // "Applin"
	"0841": {ico: "0841", flags: 0}, // "Flapple"
//	"0841-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: 0}, // "Appletun"
//	"0842-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Appletun"
	"0677": {ico: "0677", flags: 0}, // "Espurr"
//	"0678": {ico: "0678", flags: 0}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: 0}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: 0}, // "Meowstic♀" // female only
	"0684": {ico: "0684", flags: 0}, // "Swirlix"
	"0685": {ico: "0685", flags: 0}, // "Slurpuff"
	"0682": {ico: "0682", flags: 0}, // "Spritzee"
	"0683": {ico: "0683", flags: 0}, // "Aromatisse"
	"0751": {ico: "0751", flags: 0}, // "Dewpider"
	"0752": {ico: "0752", flags: 0}, // "Araquanid"
	"0360": {ico: "0360", flags: 0}, // "Wynaut"
	"0202": {ico: "0202", flags: 0}, // "Wobbuffet"
//	"0202-m": {ico: "0202", flags: 0}, // "Wobbuffet♂"
//	"0202-f": {ico: "0202", flags: 0}, // "Wobbuffet♀"
	"0083-galar": {ico: "0083-galar", flags: 0}, // "Galarian Farfetch'd"
	"0083": {ico: "0083", flags: 0}, // "Farfetch'd"
	"0865": {ico: "0865", flags: 0}, // "Sirfetch'd"
	"0170": {ico: "0170", flags: 0}, // "Chinchou"
	"0171": {ico: "0171", flags: 0}, // "Lanturn"
	"0453": {ico: "0453", flags: 0}, // "Croagunk"
//	"0453-m": {ico: "0453", flags: 0}, // "Croagunk♂"
//	"0453-f": {ico: "0453", flags: 0}, // "Croagunk♀"
	"0454": {ico: "0454", flags: 0}, // "Toxicroak"
//	"0454-m": {ico: "0454", flags: 0}, // "Toxicroak♂"
//	"0454-f": {ico: "0454", flags: 0}, // "Toxicroak♀"
	"0559": {ico: "0559", flags: 0}, // "Scraggy"
	"0560": {ico: "0560", flags: 0}, // "Scrafty"
	"0618-galar": {ico: "0618-galar", flags: 0}, // "Galarian Stunfisk"
	"0618": {ico: "0618", flags: 0}, // "Stunfisk"
	"0213": {ico: "0213", flags: 0}, // "Shuckle"
	"0339": {ico: "0339", flags: 0}, // "Barboach"
	"0340": {ico: "0340", flags: 0}, // "Whiscash"
//	"0422": {ico: "0422", flags: 0}, // "Shellos"
	"0422-west": {ico: "0422-west", flags: 0}, // "West Sea Shellos"
	"0422-east": {ico: "0422-east", flags: 0}, // "East Sea Shellos"
//	"0423": {ico: "0423", flags: 0}, // "Gastrodon"
	"0423-west": {ico: "0423-west", flags: 0}, // "West Sea Gastrodon"
	"0423-east": {ico: "0423-east", flags: 0}, // "East Sea Gastrodon"
	"0767": {ico: "0767", flags: 0}, // "Wimpod"
	"0768": {ico: "0768", flags: 0}, // "Golisopod"
	"0688": {ico: "0688", flags: 0}, // "Binacle"
	"0689": {ico: "0689", flags: 0}, // "Barbaracle"
	"0222-galar": {ico: "0222-galar", flags: 0}, // "Galarian Corsola"
	"0222": {ico: "0222", flags: 0}, // "Corsola"
	"0864": {ico: "0864", flags: 0}, // "Cursola"
	"0859": {ico: "0859", flags: 0}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: 0}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: 0}, // "Grimmsnarl" // male only
//	"0861-gmax": {ico: "0861-gmax", flags: 0}, // "Gigantamax Grimmsnarl" // male only
	"0856": {ico: "0856", flags: 0}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: 0}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: 0}, // "Hatterene" // female only
//	"0858-gmax": {ico: "0858-gmax", flags: 0}, // "Gigantamax Hetterene" // female only
	"0757": {ico: "0757", flags: 0}, // "Salandit"
	"0758": {ico: "0758", flags: 0}, // "Salazzle" // female only
	"0624": {ico: "0624", flags: 0}, // "Pawniard"
	"0625": {ico: "0625", flags: 0}, // "Bisharp"
	"0538": {ico: "0538", flags: 0}, // "Throh" // male only
	"0539": {ico: "0539", flags: 0}, // "Sawk" // male only
	"0109": {ico: "0109", flags: 0}, // "Koffing"
	"0110-galar": {ico: "0110-galar", flags: 0}, // "Galarian Weezing"
	"0110": {ico: "0110", flags: 0}, // "Weezing"
	"0438": {ico: "0438", flags: 0}, // "Bonsly"
	"0185": {ico: "0185", flags: 0}, // "Sudowoodo"
//	"0185-m": {ico: "0185", flags: 0}, // "Sudowoodo♂"
//	"0185-f": {ico: "0185", flags: 0}, // "Sudowoodo♀"
	"0173": {ico: "0173", flags: 0}, // "Cleffa"
	"0035": {ico: "0035", flags: 0}, // "Clefairy"
	"0036": {ico: "0036", flags: 0}, // "Clefable"
	"0175": {ico: "0175", flags: 0}, // "Togepi"
	"0176": {ico: "0176", flags: 0}, // "Togetic"
	"0468": {ico: "0468", flags: 0}, // "Togekiss"
	"0446": {ico: "0446", flags: 0}, // "Munchlax"
	"0143": {ico: "0143", flags: 0}, // "Snorlax"
//	"0143-gmax": {ico: "0143-gmax", flags: 0}, // "Gigantamax Snorlax"
	"0546": {ico: "0546", flags: 0}, // "Cottonee"
	"0547": {ico: "0547", flags: 0}, // "Whimsicott"
	"0111": {ico: "0111", flags: 0}, // "Rhyhorn"
//	"0111-m": {ico: "0111", flags: 0}, // "Rhyhorn♂"
//	"0111-f": {ico: "custom/0111-f", flags: 0}, // "Rhyhorn♀"
	"0112": {ico: "0112", flags: 0}, // "Rhydon"
//	"0112-m": {ico: "0112", flags: 0}, // "Rhydon♂"
//	"0112-f": {ico: "custom/0112-f", flags: 0}, // "Rhydon♀"
	"0464": {ico: "0464", flags: 0}, // "Rhyperior",
//	"0464-m": {ico: "0464", flags: 0}, // "Rhyperior♂",
//	"0464-f": {ico: "0464", flags: 0}, // "Rhyperior♀",
	"0574": {ico: "0574", flags: 0}, // "Gothita"
	"0575": {ico: "0575", flags: 0}, // "Gothorita"
	"0576": {ico: "0576", flags: 0}, // "Gothitelle"
	"0577": {ico: "0577", flags: 0}, // "Solosis"
	"0578": {ico: "0578", flags: 0}, // "Duosion"
	"0579": {ico: "0579", flags: 0}, // "Reuniclus"
	"0588": {ico: "0588", flags: 0}, // "Karrablast"
	"0589": {ico: "0589", flags: 0}, // "Escavalier"
	"0616": {ico: "0616", flags: 0}, // "Shelmet"
	"0617": {ico: "0617", flags: 0}, // "Accelgor"
	"0605": {ico: "0605", flags: 0}, // "Elgyem"
	"0606": {ico: "0606", flags: 0}, // "Beheeyem"
	"0613": {ico: "0613", flags: 0}, // "Cubchoo"
	"0614": {ico: "0614", flags: 0}, // "Beartic"
	"0627": {ico: "0627", flags: 0}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: 0}, // "Braviary" // male only
	"0629": {ico: "0629", flags: 0}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: 0}, // "Mandibuzz" // female only
	"0451": {ico: "0451", flags: 0}, // "Skorupi"
	"0452": {ico: "0452", flags: 0}, // "Drapion"
	"0607": {ico: "0607", flags: 0}, // "Litwick"
	"0608": {ico: "0608", flags: 0}, // "Lampent"
	"0609": {ico: "0609", flags: 0}, // "Chandelure"
	"0686": {ico: "0686", flags: 0}, // "Inkay"
	"0687": {ico: "0687", flags: 0}, // "Malamar"
	"0215": {ico: "0215", flags: 0}, // "Sneasel"
//	"0215-m": {ico: "0215", flags: 0}, // "Sneasel♂"
//	"0215-f": {ico: "0215", flags: 0}, // "Sneasel♀"
	"0461": {ico: "0461", flags: 0}, // "Weavile"
//	"0461-m": {ico: "0461", flags: 0}, // "Weavile♂"
//	"0461-f": {ico: "0461", flags: 0}, // "Weavile♀"
	"0302": {ico: "0302", flags: 0}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: 0}, // "Mega Sableye"
	"0303": {ico: "0303", flags: 0}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: 0}, // "Mega Mawile"
	"0556": {ico: "0556", flags: 0}, // "Maractus"
	"0561": {ico: "0561", flags: 0}, // "Sigilyph"
	"0447": {ico: "0447", flags: 0}, // "Riolu"
	"0448": {ico: "0448", flags: 0}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: 0}, // "Mega Lucario"
	"0324": {ico: "0324", flags: 0}, // "Torkoal"
//	"0778": {ico: "0778", flags: 0}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: 0}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: 0}, // "Busted Mimikyu"
	"0878": {ico: "0878", flags: 0}, // "Cufant"
	"0879": {ico: "0879", flags: 0}, // "Copperajah"
//	"0879-gmax": {ico: "0879-gmax", flags: 0}, // "Gigantamax Copperajah"
	"0211": {ico: "0211", flags: 0}, // "Qwilfish"
//	"0592": {ico: "0592", flags: 0}, // "Frillish"
	"0592-m": {ico: "0592-m", flags: 0}, // "Frillish♂"
	"0592-f": {ico: "0592-f", flags: 0}, // "Frillish♀"
//	"0593": {ico: "0593", flags: 0}, // "Jellicent"
	"0593-m": {ico: "0593-m", flags: 0}, // "Jellicent♂"
	"0593-f": {ico: "0593-f", flags: 0}, // "Jellicent♀"
	"0747": {ico: "0747", flags: 0}, // "Mareanie"
	"0748": {ico: "0748", flags: 0}, // "Toxapex"
	"0845": {ico: "0845", flags: 0}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: 0}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: 0}, // "Gorging Cramorant"
	"0848": {ico: "0848", flags: 0}, // "Toxel"
//	"0849": {ico: "0849", flags: 0}, // "Toxitricity"
	"0849-low-key": {ico: "0849-low-key", flags: 0}, // "Low Key Toxtricity" // blue
//	"0849-low-key-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Low Key Toxtricity"
//	"0849-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: 0}, // "Amped Toxtricity" // yellow
//	"0849-amped-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Amped Toxtricity"
	"0843": {ico: "0843", flags: 0}, // "Silicobra"
	"0844": {ico: "0844", flags: 0}, // "Sandaconda"
//	"0844-gmax": {ico: "0844-gmax", flags: 0}, // "Gigantamax Sandaconda"
	"0449": {ico: "0449", flags: 0}, // "Hippopotas"
//	"0449-m": {ico: "0449", flags: 0}, // "Hippopotas♂"
//	"0449-f": {ico: "custom/0449-f", flags: 0}, // "Hippopotas♀"
	"0450": {ico: "0450", flags: 0}, // "Hippowdon",
//	"0450-m": {ico: "0450", flags: 0}, // "Hippowdon♂",
//	"0450-f": {ico: "custom/0450-f", flags: 0}, // "Hippowdon♀",
	"0632": {ico: "0632", flags: 0}, // "Durant"
	"0631": {ico: "0631", flags: 0}, // "Heatmor"
	"0694": {ico: "0694", flags: 0}, // "Helioptile"
	"0695": {ico: "0695", flags: 0}, // "Heliolisk"
	"0701": {ico: "0701", flags: 0}, // "Hawlucha"
	"0328": {ico: "0328", flags: 0}, // "Trapinch"
	"0329": {ico: "0329", flags: 0}, // "Vibrava"
	"0330": {ico: "0330", flags: 0}, // "Flygon"
	"0610": {ico: "0610", flags: 0}, // "Axew"
	"0611": {ico: "0611", flags: 0}, // "Fraxure"
	"0612": {ico: "0612", flags: 0}, // "Haxorus"
	"0562-galar": {ico: "0562-galar", flags: 0}, // "Galarian Yamask"
	"0562": {ico: "0562", flags: 0}, // "Yamask"
	"0867": {ico: "0867", flags: 0}, // "Runerigus"
	"0563": {ico: "0563", flags: 0}, // "Cofagrigus"
	"0679": {ico: "0679", flags: 0}, // "Honedge"
	"0680": {ico: "0680", flags: 0}, // "Doublade"
//	"0681": {ico: "0681", flags: 0}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: 0}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: 0}, // "Blade Aegislash"
	"0077-galar": {ico: "0077-galar", flags: 0}, // "Galarian Ponyta"
	"0077": {ico: "0077", flags: 0}, // "Ponyta"
	"0078-galar": {ico: "0078-galar", flags: 0}, // "Galarian Rapidash"
	"0078": {ico: "0078", flags: 0}, // "Rapidash"
//	"0854": {ico: "0854", flags: 0}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854-phony", flags: 0}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854-phony", flags: 0}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: 0}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855-phony", flags: 0}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855-phony", flags: 0}, // "Authentic Polteageist" // uknown gender
//	"0876": {ico: "0876", flags: 0}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: 0}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: 0}, // "Indeedee♀" // female only
	"0708": {ico: "0708", flags: 0}, // "Phantump"
	"0709": {ico: "0709", flags: 0}, // "Trevenant"
	"0755": {ico: "0755", flags: 0}, // "Morelull"
	"0756": {ico: "0756", flags: 0}, // "Shiinotic"
	"0765": {ico: "0765", flags: 0}, // "Oranguru"
	"0766": {ico: "0766", flags: 0}, // "Passimian"
//	"0877": {ico: "0877", flags: 0}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: 0}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: 0}, // "Hangry Mode Morpeko"
	"0870": {ico: "0870", flags: 0}, // "Falinks" // uknown gender
	"0780": {ico: "0780", flags: 0}, // "Drampa"
	"0776": {ico: "0776", flags: 0}, // "Turtonator"
	"0777": {ico: "0777", flags: 0}, // "Togedemaru"
	"0872": {ico: "0872", flags: 0}, // "Snom"
	"0873": {ico: "0873", flags: 0}, // "Frosmoth"
	"0852": {ico: "0852", flags: 0}, // "Clobbopus"
	"0853": {ico: "0853", flags: 0}, // "Grapploct"
	"0871": {ico: "0871", flags: 0}, // "Pincurchin"
	"0458": {ico: "0458", flags: 0}, // "Mantyke"
	"0226": {ico: "0226", flags: 0}, // "Mantine"
	"0320": {ico: "0320", flags: 0}, // "Wailmer"
	"0321": {ico: "0321", flags: 0}, // "Wailord"
	"0712": {ico: "0712", flags: 0}, // "Bergmite"
	"0713": {ico: "0713", flags: 0}, // "Avalugg"
	"0781": {ico: "0781", flags: 0}, // "Dhelmise" // uknown gender
	"0131": {ico: "0131", flags: 0}, // "Lapras"
//	"0131-gmax": {ico: "0131-gmax", flags: 0}, // "Gigantamax Lapras"
	"0337": {ico: "0337", flags: 0}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: 0}, // "Solrock" // uknown gender
	"0439": {ico: "0439", flags: 0}, // "Mime Jr."
	"0122-galar": {ico: "0122-galar", flags: 0}, // "Galarian Mr. Mime"
	"0122": {ico: "0122", flags: 0}, // "Mr. Mime"
	"0866": {ico: "0866", flags: 0}, // "Mr. Rime"
	"0554-galar": {ico: "0554-galar", flags: 0}, // "Galarian Darumaka"
	"0554": {ico: "0554", flags: 0}, // "Darumaka"
//	"0555-galar": {ico: "0555-galar", flags: 0}, // "Galarian Darmanitan"
//	"0555": {ico: "0555", flags: 0}, // "Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: 0}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: 0}, // "Galarian Darmanitan Zen Mode"
	"0555-standard": {ico: "0555-standard", flags: 0}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: 0}, // "Darmanitan Zen Mode"
	"0874": {ico: "0874", flags: 0}, // "Stonjourner"
//	"0875": {ico: "0875", flags: 0}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: 0}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: 0}, // "Noice Face Eiscue"
	"0884": {ico: "0884", flags: 0}, // "Duraludon"
//	"0884-gmax": {ico: "0884-gmax", flags: 0}, // "Gigantamax Duraludon"
	"0479": {ico: "0479", flags: 0}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: 0}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: 0}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: 0}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: 0}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: 0}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: 0}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: 0}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: 0}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: 0}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: 0}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: 0}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: 0}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: 0}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: 0}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: 0}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0132": {ico: "0132", flags: 0}, // "Ditto" // uknown gender
	"0880": {ico: "0880", flags: 0}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: 0}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: 0}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: 0}, // "Arctovish" // uknown gender
	"0004": {ico: "0004", flags: 0}, // "Charmander"
	"0005": {ico: "0005", flags: 0}, // "Charmeleon"
	"0006": {ico: "0006", flags: 0}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: 0}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: 0}, // "Mega Charizard Y"
//	"0006-gmax": {ico: "0006-gmax", flags: 0}, // "Gigantamax Charizard"
	"0772": {ico: "0772", flags: 0}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: 0}, // "Silvally" // uknown gender
	"0773-fighting": {ico: "custom/0773-fighting", flags: 0}, // "Silvally Type: Fighting" // uknown gender
	"0773-flying": {ico: "custom/0773-flying", flags: 0}, // "Silvally Type: Flying" // uknown gender
	"0773-poison": {ico: "custom/0773-poison", flags: 0}, // "Silvally Type: Poison" // uknown gender
	"0773-ground": {ico: "custom/0773-ground", flags: 0}, // "Silvally Type: Ground" // uknown gender
	"0773-rock": {ico: "custom/0773-rock", flags: 0}, // "Silvally Type: Rock" // uknown gender
	"0773-bug": {ico: "custom/0773-bug", flags: 0}, // "Silvally Type: Bug" // uknown gender
	"0773-ghost": {ico: "custom/0773-ghost", flags: 0}, // "Silvally Type: Ghost" // uknown gender
	"0773-steel": {ico: "custom/0773-steel", flags: 0}, // "Silvally Type: Steel" // uknown gender
	"0773-fire": {ico: "custom/0773-fire", flags: 0}, // "Silvally Type: Fire" // uknown gender
	"0773-water": {ico: "custom/0773-water", flags: 0}, // "Silvally Type: Water" // uknown gender
	"0773-grass": {ico: "custom/0773-grass", flags: 0}, // "Silvally Type: Grass" // uknown gender
	"0773-electric": {ico: "custom/0773-electric", flags: 0}, // "Silvally Type: Electric" // uknown gender
	"0773-psychic": {ico: "custom/0773-psychic", flags: 0}, // "Silvally Type: Psychic" // uknown gender
	"0773-ice": {ico: "custom/0773-ice", flags: 0}, // "Silvally Type: Ice" // uknown gender
	"0773-dragon": {ico: "custom/0773-dragon", flags: 0}, // "Silvally Type: Dragon" // uknown gender
	"0773-dark": {ico: "custom/0773-dark", flags: 0}, // "Silvally Type: Dark" // uknown gender
	"0773-fairy": {ico: "custom/0773-fairy", flags: 0}, // "Silvally Type: Fairy" // uknown gender
	"0246": {ico: "0246", flags: 0}, // "Larvitar"
	"0247": {ico: "0247", flags: 0}, // "Pupitar"
	"0248": {ico: "0248", flags: 0}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: 0}, // "Mega Tyranitar"
	"0633": {ico: "0633", flags: 0}, // "Deino"
	"0634": {ico: "0634", flags: 0}, // "Zweilous"
	"0635": {ico: "0635", flags: 0}, // "Hydreigon"
	"0704": {ico: "0704", flags: 0}, // "Goomy"
	"0705": {ico: "0705", flags: 0}, // "Sliggoo"
	"0706": {ico: "0706", flags: 0}, // "Goodra"
	"0782": {ico: "0782", flags: 0}, // "Jangmo-o"
	"0783": {ico: "0783", flags: 0}, // "Hakamo-o"
	"0784": {ico: "0784", flags: 0}, // "Kommo-o"
	"0885": {ico: "0885", flags: 0}, // "Dreepy"
	"0886": {ico: "0886", flags: 0}, // "Drakloak"
	"0887": {ico: "0887", flags: 0}, // "Dragapult"
//	"0888": {ico: "0888", flags: 0}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: 0}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: 0}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: 0}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: 0}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: 0}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: 0}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: 0}, // "Eternamax Eternatus" // uknown gender
//==============================
//	 Isle of Armor Dex exclusive
//==============================
	"0079-galar": {ico: "0079-galar", flags: 0}, // "Galarian Slowpoke"
	"0079": {ico: "0079", flags: 0}, // "Slowpoke"
	"0080-galar": {ico: "0080-galar", flags: 0}, // "Galarian Slowbro"
	"0080": {ico: "0080", flags: 0}, // "Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: 0}, // "Mega Slowbro"
	"0199-galar": {ico: "0199-galar", flags: 0}, // "Galarian Slowking"
	"0199": {ico: "0199", flags: 0}, // "Slowking"
	"0427": {ico: "0427", flags: 0}, // "Buneary"
	"0428": {ico: "0428", flags: 0}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: 0}, // "Mega Lopunny"
	"0440": {ico: "0440", flags: 0}, // "Happiny" // female only
	"0113": {ico: "0113", flags: 0}, // "Chansey" // female only
	"0242": {ico: "0242", flags: 0}, // "Blissey" // female only
	"0174": {ico: "0174", flags: 0}, // "Igglybuff"
	"0039": {ico: "0039", flags: 0}, // "Jigglypuff"
	"0040": {ico: "0040", flags: 0}, // "Wigglytuff"
	"0753": {ico: "0753", flags: 0}, // "Fomantis"
	"0754": {ico: "0754", flags: 0}, // "Lurantis"
	"0661": {ico: "0661", flags: 0}, // "Fletchling"
	"0662": {ico: "0662", flags: 0}, // "Fletchinder"
	"0663": {ico: "0663", flags: 0}, // "Talonflame"
	"0403": {ico: "0403", flags: 0}, // "Shinx"
//	"0403-m": {ico: "0403", flags: 0}, // "Shinx♂"
//	"0403-f": {ico: "0403", flags: 0}, // "Shinx♀"
	"0404": {ico: "0404", flags: 0}, // "Luxio"
//	"0404-m": {ico: "0404", flags: 0}, // "Luxio♂"
//	"0404-f": {ico: "0404", flags: 0}, // "Luxio♀"
	"0405": {ico: "0405", flags: 0}, // "Luxray"
//	"0405-m": {ico: "0405", flags: 0}, // "Luxray♂"
//	"0405-f": {ico: "0405", flags: 0}, // "Luxray♀"
	"0707": {ico: "0707", flags: 0}, // "Klefki"
	"0063": {ico: "0063", flags: 0}, // "Abra"
	"0064": {ico: "0064", flags: 0}, // "Kadabra"
//	"0064-m": {ico: "0064", flags: 0}, // "Kadabra♂"
//	"0064-f": {ico: "0064", flags: 0}, // "Kadabra♀"
	"0065": {ico: "0065", flags: 0}, // "Alakazam"
//	"0065-m": {ico: "0065", flags: 0}, // "Alakazam♂"
//	"0065-f": {ico: "0065", flags: 0}, // "Alakazam♀"
	"0072": {ico: "0072", flags: 0}, // "Tentacool"
	"0073": {ico: "0073", flags: 0}, // "Tentacruel"
	"0206": {ico: "0206", flags: 0}, // "Dunsparce"
	"0626": {ico: "0626", flags: 0}, // "Bouffalant"
	"0108": {ico: "0108", flags: 0}, // "Lickitung"
	"0463": {ico: "0463", flags: 0}, // "Lickilicky"
	"0621": {ico: "0621", flags: 0}, // "Druddigon"
	"0001": {ico: "0001", flags: 0}, // "Bulbasaur"
	"0002": {ico: "0002", flags: 0}, // "Ivysaur"
	"0003": {ico: "0003", flags: 0}, // "Venusaur"
//	"0003-m": {ico: "0003", flags: 0}, // "Venusaur♂"
//	"0003-f": {ico: "custom/0003-f", flags: 0}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: 0}, // "Mega Venusaur"
//	"0003-gmax": {ico: "0003-gmax", flags: 0}, // "Gigantamax Venusaur"
	"0007": {ico: "0007", flags: 0}, // "Squirtle"
	"0008": {ico: "0008", flags: 0}, // "Wartortle"
	"0009": {ico: "0009", flags: 0}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: 0}, // "Mega Blastoise"
//	"0009-gmax": {ico: "0009-gmax", flags: 0}, // "Gigantamax Blastoise"
	"0543": {ico: "0543", flags: 0}, // "Venipede"
	"0544": {ico: "0544", flags: 0}, // "Whirlipede"
	"0545": {ico: "0545", flags: 0}, // "Scolipede"
	"0590": {ico: "0590", flags: 0}, // "Foongus"
	"0591": {ico: "0591", flags: 0}, // "Amoonguss"
	"0764": {ico: "0764", flags: 0}, // "Comfey"
	"0114": {ico: "0114", flags: 0}, // "Tangela"
	"0465": {ico: "0465", flags: 0}, // "Tangrowth"
//	"0465-m": {ico: "0465", flags: 0}, // "Tangrowth♂"
//	"0465-f": {ico: "0465", flags: 0}, // "Tangrowth♀"
	"0570": {ico: "0570", flags: 0}, // "Zorua"
	"0571": {ico: "0571", flags: 0}, // "Zoroark"
		"0120": {ico: "0120", flags: 0}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: 0}, // "Starmie" // uknown gender
	"0891": {ico: "0891", flags: 0}, // "Kubfu"
//	"0892": {ico: "0892", flags: 0}, // "Urshifu"
	"0892-single": {ico: "0892", flags: 0}, // "Single Strike Style Urshifu"
//	"0892-single-gmax": {ico: "0892-single-gmax", flags: 0}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892", flags: 0}, // "Rapid Strike Style Urshifu"
//	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: 0}, // "Gigantamax Rapid Strike Style Urshifu"
	"0587": {ico: "0587", flags: 0}, // "Emolga"
	"0702": {ico: "0702", flags: 0}, // "Dedenne"
	"0081": {ico: "0081", flags: 0}, // "Magnemite"
	"0082": {ico: "0082", flags: 0}, // "Magneton"
	"0462": {ico: "0462", flags: 0}, // "Magnezone" // uknown gender
	"0318": {ico: "0318", flags: 0}, // "Carvanha"
	"0319": {ico: "0319", flags: 0}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: 0}, // "Mega Sharpedo"
	"0506": {ico: "0506", flags: 0}, // "Lillipup"
	"0507": {ico: "0507", flags: 0}, // "Herdier"
	"0508": {ico: "0508", flags: 0}, // "Stoutland"
	"0128": {ico: "0128", flags: 0}, // "Tauros" // male only
	"0241": {ico: "0241", flags: 0}, // "Miltank" // female only
	"0123": {ico: "0123", flags: 0}, // "Scyther"
//	"0123-m": {ico: "0123", flags: 0}, // "Scyther♂"
//	"0123-f": {ico: "0123", flags: 0}, // "Scyther♀"
	"0212": {ico: "0212", flags: 0}, // "Scizor"
//	"0212-m": {ico: "0212", flags: 0}, // "Scizor♂"
//	"0212-f": {ico: "0212", flags: 0}, // "Scizor♀"
	"0127": {ico: "0127", flags: 0}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: 0}, // "Mega Pinsir"
	"0214": {ico: "0214", flags: 0}, // "Heracross"
//	"0214-m": {ico: "0214", flags: 0}, // "Heracross♂"
//	"0214-f": {ico: "0214", flags: 0}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: 0}, // "Mega Heracross"
	"0769": {ico: "0769", flags: 0}, // "Sandygast"
	"0770": {ico: "0770", flags: 0}, // "Palossand"
	"0298": {ico: "0298", flags: 0}, // "Azurill"
	"0183": {ico: "0183", flags: 0}, // "Marill"
	"0184": {ico: "0184", flags: 0}, // "Azumarill"
	"0060": {ico: "0060", flags: 0}, // "Poliwag"
	"0061": {ico: "0061", flags: 0}, // "Poliwhirl"
	"0062": {ico: "0062", flags: 0}, // "Poliwrath"
	"0186": {ico: "0186", flags: 0}, // "Politoed"
//	"0186-m": {ico: "0186", flags: 0}, // "Politoed♂"
//	"0186-f": {ico: "0186", flags: 0}, // "Politoed♀"
	"0054": {ico: "0054", flags: 0}, // "Psyduck"
	"0055": {ico: "0055", flags: 0}, // "Golduck"
	"0293": {ico: "0293", flags: 0}, // "Whismur"
	"0294": {ico: "0294", flags: 0}, // "Loudred"
	"0295": {ico: "0295", flags: 0}, // "Exploud"
	"0227": {ico: "0227", flags: 0}, // "Skarmory"
	"0744": {ico: "0744", flags: 0}, // "Rockruff"
//	"0745": {ico: "0745", flags: 0}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: 0}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: 0}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: 0}, // "Dusk Lycanroc"
	"0619": {ico: "0619", flags: 0}, // "Mienfoo"
	"0620": {ico: "0620", flags: 0}, // "Mienshao"
	"0027": {ico: "0027", flags: 0}, // "Sandshrew"
	"0027-alola": {ico: "0027-alola", flags: 0}, // "Alolan Sandshrew"
	"0028": {ico: "0028", flags: 0}, // "Sandslash"
	"0028-alola": {ico: "0028-alola", flags: 0}, // "Alolan Sandslash"
	"0104": {ico: "0104", flags: 0}, // "Cubone"
	"0105": {ico: "0105", flags: 0}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: 0}, // "Alolan Marowak"
	"0115": {ico: "0115", flags: 0}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: 0}, // "Mega Kangaskhan" // female only
	"0551": {ico: "0551", flags: 0}, // "Sandile"
	"0552": {ico: "0552", flags: 0}, // "Krokorok"
	"0553": {ico: "0553", flags: 0}, // "Krookodile"
	"0636": {ico: "0636", flags: 0}, // "Larvesta"
	"0637": {ico: "0637", flags: 0}, // "Volcarona"
	"0690": {ico: "0690", flags: 0}, // "Skrelp"
	"0691": {ico: "0691", flags: 0}, // "Dragalge"
	"0692": {ico: "0692", flags: 0}, // "Clauncher"
	"0693": {ico: "0693", flags: 0}, // "Clawitzer"
	"0116": {ico: "0116", flags: 0}, // "Horsea"
	"0117": {ico: "0117", flags: 0}, // "Seadra"
	"0230": {ico: "0230", flags: 0}, // "Kingdra"
	"0548": {ico: "0548", flags: 0}, // "Petilil" // female only
	"0549": {ico: "0549", flags: 0}, // "Lilligant" // female only
	"0102": {ico: "0102", flags: 0}, // "Exeggcute"
	"0103": {ico: "0103", flags: 0}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: 0}, // "Alolan Exeggutor"
	"0137": {ico: "0137", flags: 0}, // "Porygon" // uknown gender
	"0233": {ico: "0233", flags: 0}, // "Porygon2" // uknown gender
	"0474": {ico: "0474", flags: 0}, // "Porygon-Z" // uknown gender
	"0893": {ico: "0893", flags: 0}, // "Zarude" // uknown gender
	"0893-dada": {ico: "0893-dada", flags: 0}, // "Dada Zarude" // uknown gender
//==============================
//	 Crown Tundra Dex exclusive
//==============================
	"0238": {ico: "0238", flags: 0}, // "Smoochum" // female only
	"0124": {ico: "0124", flags: 0}, // "Jynx" // female only
	"0239": {ico: "0239", flags: 0}, // "Elekid"
	"0125": {ico: "0125", flags: 0}, // "Electabuzz"
	"0466": {ico: "0466", flags: 0}, // "Electivire"
	"0240": {ico: "0240", flags: 0}, // "Magby"
	"0126": {ico: "0126", flags: 0}, // "Magmar"
	"0467": {ico: "0467", flags: 0}, // "Magmortar"
	"0531": {ico: "0531", flags: 0}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: 0}, // "Mega Audino"
	"0615": {ico: "0615", flags: 0}, // "Cryogonal" // uknown gender
	"0333": {ico: "0333", flags: 0}, // "Swablu"
	"0334": {ico: "0334", flags: 0}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: 0}, // "Mega Altaria"
	"0442": {ico: "0442", flags: 0}, // "Spiritomb"
//	"0029": {ico: "0029", flags: 0}, // "Nidoran"
	"0029-f": {ico: "0029-f", flags: 0}, // "Nidoran♀"
	"0030": {ico: "0030", flags: 0}, // "Nidorina"
	"0031": {ico: "0031", flags: 0}, // "Nidoqueen"
//	"0032": {ico: "0032", flags: 0}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: 0}, // "Nidoran♂"
	"0033": {ico: "0033", flags: 0}, // "Nidorino"
	"0034": {ico: "0034", flags: 0}, // "Nidoking"
	"0696": {ico: "0696", flags: 0}, // "Tyrunt"
	"0697": {ico: "0697", flags: 0}, // "Tyrantrum"
	"0698": {ico: "0698", flags: 0}, // "Amaura"
	"0699": {ico: "0699", flags: 0}, // "Aurorus"
	"0359": {ico: "0359", flags: 0}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: 0}, // "Mega Absol"
	"0371": {ico: "0371", flags: 0}, // "Bagon"
	"0372": {ico: "0372", flags: 0}, // "Shelgon"
	"0373": {ico: "0373", flags: 0}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: 0}, // "Mega Salamence"
	"0443": {ico: "0443", flags: 0}, // "Gible"
//	"0443-m": {ico: "0443", flags: 0}, // "Gible♂"
//	"0443-f": {ico: "0443", flags: 0}, // "Gible♀"
	"0444": {ico: "0444", flags: 0}, // "Gabite"
//	"0444-m": {ico: "0444", flags: 0}, // "Gabite♂"
//	"0444-f": {ico: "0444", flags: 0}, // "Gabite♀"
	"0445": {ico: "0445", flags: 0}, // "Garchomp"
//	"0445-m": {ico: "0445", flags: 0}, // "Garchomp♂"
//	"0445-f": {ico: "0445", flags: 0}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: 0}, // "Mega Garchomp"
	"0138": {ico: "0138", flags: 0}, // "Omanyte"
	"0139": {ico: "0139", flags: 0}, // "Omastar"
	"0140": {ico: "0140", flags: 0}, // "Kabuto"
	"0141": {ico: "0141", flags: 0}, // "Kabutops"
	"0142": {ico: "0142", flags: 0}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: 0}, // "Mega Aerodactyl"
	"0703": {ico: "0703", flags: 0}, // "Carbink" // uknown gender
	"0374": {ico: "0374", flags: 0}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: 0}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: 0}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: 0}, // "Mega Metagross" // uknown gender
	"0041": {ico: "0041", flags: 0}, // "Zubat"
//	"0041-m": {ico: "0041", flags: 0}, // "Zubat♂"
//	"0041-f": {ico: "0041", flags: 0}, // "Zubat♀"
	"0042": {ico: "0042", flags: 0}, // "Golbat"
//	"0042-m": {ico: "0042", flags: 0}, // "Golbat♂"
//	"0042-f": {ico: "0042", flags: 0}, // "Golbat♀"
	"0169": {ico: "0169", flags: 0}, // "Crobat"
	"0564": {ico: "0564", flags: 0}, // "Tirtouga"
	"0565": {ico: "0565", flags: 0}, // "Carracosta"
	"0566": {ico: "0566", flags: 0}, // "Archen"
	"0567": {ico: "0567", flags: 0}, // "Archeops"
	"0363": {ico: "0363", flags: 0}, // "Spheal"
	"0364": {ico: "0364", flags: 0}, // "Sealeo"
	"0365": {ico: "0365", flags: 0}, // "Walrein"
	"0345": {ico: "0345", flags: 0}, // "Lileep"
	"0346": {ico: "0346", flags: 0}, // "Cradily"
	"0347": {ico: "0347", flags: 0}, // "Anorith"
	"0348": {ico: "0348", flags: 0}, // "Armaldo"
	"0369": {ico: "0369", flags: 0}, // "Relicanth"
//	"0369-m": {ico: "0369", flags: 0}, // "Relicanth♂"
//	"0369-f": {ico: "0369", flags: 0}, // "Relicanth♀"
	"0304": {ico: "0304", flags: 0}, // "Aron"
	"0305": {ico: "0305", flags: 0}, // "Lairon"
	"0306": {ico: "0306", flags: 0}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: 0}, // "Mega Aggron"
	"0147": {ico: "0147", flags: 0}, // "Dratini"
	"0148": {ico: "0148", flags: 0}, // "Dragonair"
	"0149": {ico: "0149", flags: 0}, // "Dragonite"
	"0377": {ico: "0377", flags: 0}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: 0}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: 0}, // "Registeel" // uknown gender
	"0894": {ico: "0894", flags: 0}, // "Regieleki" // uknown gender
	"0895": {ico: "0895", flags: 0}, // "Regidrago" uknown gender
	"0144-galar": {ico: "0144-galar", flags: 0}, // "Galarian Articuno" // uknown gender
	"0144": {ico: "0144", flags: 0}, // "Articuno" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: 0}, // "Galarian Zapdos" // uknown gender
	"0145": {ico: "0145", flags: 0}, // "Zapdos" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: 0}, // "Galarian Moltres" // uknown gender
	"0146": {ico: "0146", flags: 0}, // "Moltres" // uknown gender
	"0638": {ico: "0638", flags: 0}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: 0}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: 0}, // "Virizion" // uknown gender
	"0896": {ico: "0896", flags: 0}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: 0}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: 0}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: 0}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: 0}, // "Shadow Rider Calyrex" // uknown gender
//================
//	 non-Galar Dex
//================
	"0150": {ico: "0150", flags: 0}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: 0}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: 0}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: 0}, // "Mew" // uknown gender
	"0243": {ico: "0243", flags: 0}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: 0}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: 0}, // "Suicune" // uknown gender
	"0249": {ico: "0249", flags: 0}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: 0}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: 0}, // "Celebi" // uknown gender
	"0252": {ico: "0252", flags: 0}, // "Treecko"
	"0253": {ico: "0253", flags: 0}, // "Grovyle"
	"0254": {ico: "0254", flags: 0}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: 0}, // "Mega Sceptile"
	"0255": {ico: "0255", flags: 0}, // "Torchic"
//	"0255-m": {ico: "0255", flags: 0}, // "Torchic♂"
//	"0255-f": {ico: "0255", flags: 0}, // "Torchic♀"
	"0256": {ico: "0256", flags: 0}, // "Combusken"
//	"0256-m": {ico: "0256", flags: 0}, // "Combusken♂"
//	"0256-f": {ico: "0256", flags: 0}, // "Combusken♀"
	"0257": {ico: "0257", flags: 0}, // "Blaziken"
//	"0257-m": {ico: "0257", flags: 0}, // "Blaziken♂"
//	"0257-f": {ico: "0257", flags: 0}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: 0}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: 0}, // "Mudkip"
	"0259": {ico: "0259", flags: 0}, // "Marshtomp"
	"0260": {ico: "0260", flags: 0}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: 0}, // "Mega Swampert"
	"0380": {ico: "0380", flags: 0}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: 0}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: 0}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: 0}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: 0}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: 0}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: 0}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: 0}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: 0}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: 0}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: 0}, // "Jirachi" // uknown gender
	"0480": {ico: "0480", flags: 0}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: 0}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: 0}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: 0}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: 0}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: 0}, // "Heatran"
	"0486": {ico: "0486", flags: 0}, // "Regigigas" // uknown gender
//	"0487": {ico: "0487", flags: 0}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: 0}, // "Giratina Altered Forme" // uknown gender
	"0487-origin": {ico: "0487-origin", flags: 0}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: 0}, // "Cresselia" // female only
	"0494": {ico: "0494", flags: 0}, // "Victini" // uknown gender
//	"0641": {ico: "0641", flags: 0}, // "Tornadus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: 0}, // "Incarnate Forme Tornadus" // male only
	"0641-therian": {ico: "0641-therian", flags: 0}, // "Therian Forme Tornadus" // male only
//	"0642": {ico: "0642", flags: 0}, // "Thundurus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: 0}, // "Incarnate Forme Thundurus" // male only
	"0642-therian": {ico: "0642-therian", flags: 0}, // "Therian Forme Thundurus" // male only
	"0643": {ico: "0643", flags: 0}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: 0}, // "Zekrom" // uknown gender
//	"0645": {ico: "0645", flags: 0}, // "Landorus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: 0}, // "Incarnate Forme Landorus" // male only
	"0645-therian": {ico: "0645-therian", flags: 0}, // "Therian Forme Landorus" // male only
	"0646": {ico: "0646", flags: 0}, // "Kyurem" // uknown gender
	"0646-white": {ico: "0646-white", flags: 0}, // "White Kyurem" // uknown gender
	"0646-black": {ico: "0646-black", flags: 0}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: 0}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: 0}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: 0}, // "Resolute Form Keldeo" // uknown gender
	"0649": {ico: "0649", flags: 0}, // "Genesect" // uknown gender
	"0649-douse": {ico: "0649-douse", flags: 0}, // "Douse Drive Genesect" // uknown gender
	"0649-shock": {ico: "0649-shock", flags: 0}, // "Shock Drive Genesect" // uknown gender
	"0649-burn": {ico: "0649-burn", flags: 0}, // "Burn Drive Genesect" // uknown gender
	"0649-chill": {ico: "0649-chill", flags: 0}, // "Chill Drive Genesect" // uknown gender
//	"0716": {ico: "0716", flags: 0}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: 0}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: 0}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: 0}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: 0}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: 0}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: 0}, // "10% Zygarde" // uknown gender
//	"0718-complete": {ico: "0718-complete", flags: 0}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: 0}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: 0}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: 0}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: 0}, // "Mega Diancie" // uknown gender
	"0721": {ico: "0721", flags: 0}, // "Volcanion" // uknown gender
	"0722": {ico: "0722", flags: 0}, // "Rowlet"
	"0723": {ico: "0723", flags: 0}, // "Dartrix"
	"0724": {ico: "0724", flags: 0}, // "Decidueye"
	"0725": {ico: "0725", flags: 0}, // "Litten"
	"0726": {ico: "0726", flags: 0}, // "Torracat"
	"0727": {ico: "0727", flags: 0}, // "Incineroar"
	"0728": {ico: "0728", flags: 0}, // "Popplio"
	"0729": {ico: "0729", flags: 0}, // "Brionne"
	"0730": {ico: "0730", flags: 0}, // "Primarina"
	"0785": {ico: "0785", flags: 0}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: 0}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: 0}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: 0}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: 0}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: 0}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: 0}, // "Solgaleo" // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: 0}, // "Radiant Sun Solgaleo" // unknown gender
	"0792": {ico: "0792", flags: 0}, // "Lunala" // uknown gender
//	"0792-full-moon": {ico: "0792-full-moon", flags: 0}, // "Full Monn Lunala" // uknown gender
	"0793": {ico: "0793", flags: 0}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: 0}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: 0}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: 0}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: 0}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: 0}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: 0}, // "Guzzlord" // uknown gender
	"0800": {ico: "0800", flags: 0}, // "Necrozma" // uknown gender
//	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: 0}, // "Dusk Mane Necrozma" // uknown gender
//	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: 0}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: 0}, // "Ultra Necrozma" // uknown gender
	"0801": {ico: "0801", flags: 0}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: 0}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: 0}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: 0}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: 0}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: 0}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: 0}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: 0}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: 0}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: 0}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: 0}, // "Melmetal" // uknown gender
//	"0809-gmax": {ico: "0809-gmax", flags: 0}, // "Gigantamax Melmetal" // uknown gender
//================
//	 Gigantamax Dex
//================
	"0812-gmax": {ico: "0812-gmax", flags: 0}, // "Gigantamax Rillaboom"
	"0815-gmax": {ico: "0815-gmax", flags: 0}, // "Gigantamax Cinderace"
	"0818-gmax": {ico: "0818-gmax", flags: 0}, // "Gigantamax Inteleon"
	"0826-gmax": {ico: "0826-gmax", flags: 0}, // "Gigantamax Orbeetle"
	"0012-gmax": {ico: "0012-gmax", flags: 0}, // "Gigantamax Butterfree"
	"0823-gmax": {ico: "0823-gmax", flags: 0}, // "Gigantamax Corviknight"
	"0834-gmax": {ico: "0834-gmax", flags: 0}, // "Gigantamax Drednaw"
	"0099-gmax": {ico: "0099-gmax", flags: 0}, // "Gigantamax Kingler"
	"0068-gmax": {ico: "0068-gmax", flags: 0}, // "Gigantamax Machamp"
	"0094-gmax": {ico: "0094-gmax", flags: 0}, // "Gigantamax Gengar"
	"0569-gmax": {ico: "0569-gmax", flags: 0}, // "Gigantamax Garbodor"
	"0851-gmax": {ico: "0851-gmax", flags: 0}, // "Gigantamax Centiskorch"
	"0839-gmax": {ico: "0839-gmax", flags: 0}, // "Gigantamax Coalossal"
	"0052-gmax": {ico: "0052-gmax", flags: 0}, // "Gigantamax Meowth"
//	"0869-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0025-gmax": {ico: "0025-gmax", flags: 0}, // "Gigantamax Pikachu"
	"0133-gmax": {ico: "0133-gmax", flags: 0}, // "Gigantamax Eevee"
	"0841-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Flapple"
	"0842-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Appletun"
	"0861-gmax": {ico: "0861-gmax", flags: 0}, // "Gigantamax Grimmsnarl" // male only
	"0858-gmax": {ico: "0858-gmax", flags: 0}, // "Gigantamax Hetterene" // female only
	"0143-gmax": {ico: "0143-gmax", flags: 0}, // "Gigantamax Snorlax"
	"0879-gmax": {ico: "0879-gmax", flags: 0}, // "Gigantamax Copperajah"
//	"0849-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Toxtricity"
	"0849-low-key-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Low Key Toxtricity"
	"0849-amped-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Amped Toxtricity"
	"0844-gmax": {ico: "0844-gmax", flags: 0}, // "Gigantamax Sandaconda"
	"0131-gmax": {ico: "0131-gmax", flags: 0}, // "Gigantamax Lapras"
	"0884-gmax": {ico: "0884-gmax", flags: 0}, // "Gigantamax Duraludon"
	"0006-gmax": {ico: "0006-gmax", flags: 0}, // "Gigantamax Charizard"
	"0003-gmax": {ico: "0003-gmax", flags: 0}, // "Gigantamax Venusaur"
	"0009-gmax": {ico: "0009-gmax", flags: 0}, // "Gigantamax Blastoise"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: 0}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: 0}, // "Gigantamax Rapid Strike Style Urshifu"
	"0809-gmax": {ico: "0809-gmax", flags: 0}, // "Gigantamax Melmetal" // uknown gender
}

const _Regdex_nSwSh	=
{
//	==============
//	 Generation 1
//	==============
	"0001": {ico: "0001", flags: 0}, // "Bulbasaur"
	"0002": {ico: "0002", flags: 0}, // "Ivysaur"
//	"0003": {ico: "0003", flags: 0}, // "Venusaur"
	"0003-m": {ico: "0003-m", flags: 0}, // "Venusaur♂"
	"0003-f": {ico: "0003-f", flags: 0}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: 0}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: 0}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: 0}, // "Charmander"
	"0005": {ico: "0005", flags: 0}, // "Charmeleon"
	"0006": {ico: "0006", flags: 0}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: 0}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: 0}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: 0}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: 0}, // "Squirtle"
	"0008": {ico: "0008", flags: 0}, // "Wartortle"
	"0009": {ico: "0009", flags: 0}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: 0}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: 0}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: 0}, // "Caterpie"
	"0011": {ico: "0011", flags: 0}, // "Metapod"
//	"0012": {ico: "0012", flags: 0}, // "Butterfree"
	"0012-m": {ico: "0012-m", flags: 0}, // "Butterfree♂"
	"0012-f": {ico: "0012-f", flags: 0}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: 0}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: 0}, // "Weedle"
	"0014": {ico: "0014", flags: 0}, // "Kakuna"
	"0015": {ico: "0015", flags: 0}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: 0}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: 0}, // "Pidgey"
	"0017": {ico: "0017", flags: 0}, // "Pidgeotto"
	"0018": {ico: "0018", flags: 0}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: 0}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: 0}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: 0}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: 0}, // "Rattata♀"
	"0019-alola": {ico: "0019-alola", flags: 0}, // "Alolan Rattata"
//	"0020": {ico: "0020", flags: 0}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: 0}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: 0}, // "Raticate♀"
	"0020-alola": {ico: "0020-alola", flags: 0}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: 0}, // "Spearow"
	"0022": {ico: "0022", flags: 0}, // "Fearow"
	"0023": {ico: "0023", flags: 0}, // "Ekans"
	"0024": {ico: "0024", flags: 0}, // "Arbok"
//	"0025": {ico: "0025", flags: 0}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: 0}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: 0}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: 0}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: 0}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: 0}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: 0}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: 0}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: 0}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: 0}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: 0}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: 0}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: 0}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: 0}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: 0}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: 0}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: 0}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: 0}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: 0}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: 0}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: 0}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: 0}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: 0}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: 0}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: 0}, // "Sandshrew"
	"0027-alola": {ico: "0027-alola", flags: 0}, // "Alolan Sandshrew"
	"0028": {ico: "0028", flags: 0}, // "Sandslash"
	"0028-alola": {ico: "0028-alola", flags: 0}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: 0}, // "Nidoran"
	"0029-f": {ico: "0029-f", flags: 0}, // "Nidoran♀"
	"0030": {ico: "0030", flags: 0}, // "Nidorina"
	"0031": {ico: "0031", flags: 0}, // "Nidoqueen"
//	"0032": {ico: "0032", flags: 0}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: 0}, // "Nidoran♂"
	"0033": {ico: "0033", flags: 0}, // "Nidorino"
	"0034": {ico: "0034", flags: 0}, // "Nidoking"
	"0035": {ico: "0035", flags: 0}, // "Clefairy"
	"0036": {ico: "0036", flags: 0}, // "Clefable"
	"0037": {ico: "0037", flags: 0}, // "Vulpix"
	"0037-alola": {ico: "0037-alola", flags: 0}, // "Alolan Vulpix"
	"0038": {ico: "0038", flags: 0}, // "Ninetales"
	"0038-alola": {ico: "0038-alola", flags: 0}, // "Alolan Ninetales"
	"0039": {ico: "0039", flags: 0}, // "Jigglypuff"
	"0040": {ico: "0040", flags: 0}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: 0}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: 0}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: 0}, // "Zubat♀"
//	"0042": {ico: "0042", flags: 0}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: 0}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: 0}, // "Golbat♀"
	"0043": {ico: "0043", flags: 0}, // "Oddish"
//	"0044": {ico: "0044", flags: 0}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: 0}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: 0}, // "Gloom♀"
//	"0045": {ico: "0045", flags: 0}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: 0}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: 0}, // "Vileplume♀"
	"0046": {ico: "0046", flags: 0}, // "Paras"
	"0047": {ico: "0047", flags: 0}, // "Parasect"
	"0048": {ico: "0048", flags: 0}, // "Venonat"
	"0049": {ico: "0049", flags: 0}, // "Venomoth"
	"0050": {ico: "0050", flags: 0}, // "Diglett"
	"0050-alola": {ico: "0050-alola", flags: 0}, // "Alolan Diglett"
	"0051": {ico: "0051", flags: 0}, // "Dugtrio"
	"0051-alola": {ico: "0051-alola", flags: 0}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: 0}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: 0}, // "Gigantamax Meowth"
	"0052-alola": {ico: "0052-alola", flags: 0}, // "Alolan Meowth"
	"0052-galar": {ico: "0052-galar", flags: 0}, // "Galarian Meowth"
	"0053": {ico: "0053", flags: 0}, // "Persian"
	"0053-alola": {ico: "0053-alola", flags: 0}, // "Alolan Persian"
	"0054": {ico: "0054", flags: 0}, // "Psyduck"
	"0055": {ico: "0055", flags: 0}, // "Golduck"
	"0056": {ico: "0056", flags: 0}, // "Mankey"
	"0057": {ico: "0057", flags: 0}, // "Primeape"
	"0058": {ico: "0058", flags: 0}, // "Growlithe"
	"0059": {ico: "0059", flags: 0}, // "Arcanine"
	"0060": {ico: "0060", flags: 0}, // "Poliwag"
	"0061": {ico: "0061", flags: 0}, // "Poliwhirl"
	"0062": {ico: "0062", flags: 0}, // "Poliwrath"
	"0063": {ico: "0063", flags: 0}, // "Abra"
//	"0064": {ico: "0064", flags: 0}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: 0}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: 0}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: 0}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: 0}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: 0}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: 0}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: 0}, // "Machop"
	"0067": {ico: "0067", flags: 0}, // "Machoke"
	"0068": {ico: "0068", flags: 0}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: 0}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: 0}, // "Bellsprout"
	"0070": {ico: "0070", flags: 0}, // "Weepinbell"
	"0071": {ico: "0071", flags: 0}, // "Victreebel"
	"0072": {ico: "0072", flags: 0}, // "Tentacool"
	"0073": {ico: "0073", flags: 0}, // "Tentacruel"
	"0074": {ico: "0074", flags: 0}, // "Geodude"
	"0074-alola": {ico: "0074-alola", flags: 0}, // "Alolan Geodude"
	"0075": {ico: "0075", flags: 0}, // "Graveler"
	"0075-alola": {ico: "0075-alola", flags: 0}, // "Alolan Graveler"
	"0076": {ico: "0076", flags: 0}, // "Golem"
	"0076-alola": {ico: "0076-alola", flags: 0}, // "Alolan Golem"
	"0077": {ico: "0077", flags: 0}, // "Ponyta"
	"0077-galar": {ico: "0077-galar", flags: 0}, // "Galarian Ponyta"
	"0078": {ico: "0078", flags: 0}, // "Rapidash"
	"0078-galar": {ico: "0078-galar", flags: 0}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: 0}, // "Slowpoke"
	"0079-galar": {ico: "0079-galar", flags: 0}, // "Galarian Slowpoke"
	"0080": {ico: "0080", flags: 0}, // "Slowbro"
	"0080-galar": {ico: "0080-galar", flags: 0}, // "Galarian Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: 0}, // "Mega Slowbro"
	"0081": {ico: "0081", flags: 0}, // "Magnemite"
	"0082": {ico: "0082", flags: 0}, // "Magneton"
	"0083": {ico: "0083", flags: 0}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: 0}, // "Galarian Farfetch'd"
//	"0084": {ico: "0084", flags: 0}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: 0}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: 0}, // "Doduo♀"
//	"0085": {ico: "0085", flags: 0}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: 0}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: 0}, // "Dodrio♀"
	"0086": {ico: "0086", flags: 0}, // "Seel"
	"0087": {ico: "0087", flags: 0}, // "Dewgong"
	"0088": {ico: "0088", flags: 0}, // "Grimer"
	"0088-alola": {ico: "0088-alola", flags: 0}, // "Alolan Grimer"
	"0089": {ico: "0089", flags: 0}, // "Muk"
	"0089-alola": {ico: "0089-alola", flags: 0}, // "Alolan Muk"
	"0090": {ico: "0090", flags: 0}, // "Shellder"
	"0091": {ico: "0091", flags: 0}, // "Cloyster"
	"0092": {ico: "0092", flags: 0}, // "Gastly"
	"0093": {ico: "0093", flags: 0}, // "Haunter"
	"0094": {ico: "0094", flags: 0}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: 0}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: 0}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: 0}, // "Onix"
	"0096": {ico: "0096", flags: 0}, // "Drowzee"
//	"0097": {ico: "0097", flags: 0}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: 0}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: 0}, // "Hypno♀"
	"0098": {ico: "0098", flags: 0}, // "Krabby"
	"0099": {ico: "0099", flags: 0}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: 0}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: 0}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: 0}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: 0}, // "Exeggcute"
	"0103": {ico: "0103", flags: 0}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: 0}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: 0}, // "Cubone"
	"0105": {ico: "0105", flags: 0}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: 0}, // "Alolan Marowak"
	"0106": {ico: "0106", flags: 0}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: 0}, // "Hitmonchan" // male only
	"0108": {ico: "0108", flags: 0}, // "Lickitung"
	"0109": {ico: "0109", flags: 0}, // "Koffing"
	"0110": {ico: "0110", flags: 0}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: 0}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: 0}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: 0}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: 0}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: 0}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: 0}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: 0}, // "Rhydon♀"
	"0113": {ico: "0113", flags: 0}, // "Chansey" // female only
	"0114": {ico: "0114", flags: 0}, // "Tangela"
	"0115": {ico: "0115", flags: 0}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: 0}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: 0}, // "Horsea"
	"0117": {ico: "0117", flags: 0}, // "Seadra"
//	"0118": {ico: "0118", flags: 0}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: 0}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: 0}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: 0}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: 0}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: 0}, // "Seaking♀"
		"0120": {ico: "0120", flags: 0}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: 0}, // "Starmie" // uknown gender
	"0122": {ico: "0122", flags: 0}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: 0}, // "Galarian Mr. Mime"
//	"0123": {ico: "0123", flags: 0}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: 0}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: 0}, // "Scyther♀"
	"0124": {ico: "0124", flags: 0}, // "Jynx" // female only
	"0125": {ico: "0125", flags: 0}, // "Electabuzz"
	"0126": {ico: "0126", flags: 0}, // "Magmar"
	"0127": {ico: "0127", flags: 0}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: 0}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: 0}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: 0}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: 0}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: 0}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: 0}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: 0}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: 0}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: 0}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: 0}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: 0}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: 0}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: 0}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: 0}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: 0}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: 0}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: 0}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: 0}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: 0}, // "Vaporeon"
	"0135": {ico: "0135", flags: 0}, // "Jolteon"
	"0136": {ico: "0136", flags: 0}, // "Flareon"
	"0137": {ico: "0137", flags: 0}, // "Porygon" // uknown gender
	"0138": {ico: "0138", flags: 0}, // "Omanyte"
	"0139": {ico: "0139", flags: 0}, // "Omastar"
	"0140": {ico: "0140", flags: 0}, // "Kabuto"
	"0141": {ico: "0141", flags: 0}, // "Kabutops"
	"0142": {ico: "0142", flags: 0}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: 0}, // "Mega Aerodactyl"
	"0143": {ico: "0143", flags: 0}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: 0}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: 0}, // "Articuno" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: 0}, // "Galarian Articuno" // uknown gender
	"0145": {ico: "0145", flags: 0}, // "Zapdos" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: 0}, // "Galarian Zapdos" // uknown gender
	"0146": {ico: "0146", flags: 0}, // "Moltres" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: 0}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: 0}, // "Dratini"
	"0148": {ico: "0148", flags: 0}, // "Dragonair"
	"0149": {ico: "0149", flags: 0}, // "Dragonite"
	"0150": {ico: "0150", flags: 0}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: 0}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: 0}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: 0}, // "Mew" // uknown gender
//	==============
//	 Generation 2
//	==============
	"0152": {ico: "0152", flags: 0}, // "Chikorita"
	"0153": {ico: "0153", flags: 0}, // "Bayleef"
//	"0154": {ico: "0154", flags: 0}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: 0}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: 0}, // "Meganium♀"
	"0155": {ico: "0155", flags: 0}, // "Cyndaquil"
	"0156": {ico: "0156", flags: 0}, // "Quilava"
	"0157": {ico: "0157", flags: 0}, // "Typhlosion"
	"0158": {ico: "0158", flags: 0}, // "Totodile"
	"0159": {ico: "0159", flags: 0}, // "Croconaw"
	"0160": {ico: "0160", flags: 0}, // "Feraligatr"
	"0161": {ico: "0161", flags: 0}, // "Sentret"
	"0162": {ico: "0162", flags: 0}, // "Furret"
	"0163": {ico: "0163", flags: 0}, // "Hoothoot"
	"0164": {ico: "0164", flags: 0}, // "Noctowl"
//	"0165": {ico: "0165", flags: 0}, // "Ledyba"
	"0165-m": {ico: "0165-m", flags: 0}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: 0}, // "Ledyba♀"
//	"0166": {ico: "0166", flags: 0}, // "Ledian"
	"0166-m": {ico: "0166-m", flags: 0}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: 0}, // "Ledian♀"
	"0167": {ico: "0167", flags: 0}, // "Spinarak"
	"0168": {ico: "0168", flags: 0}, // "Ariados"
	"0169": {ico: "0169", flags: 0}, // "Crobat"
	"0170": {ico: "0170", flags: 0}, // "Chinchou"
	"0171": {ico: "0171", flags: 0}, // "Lanturn"
	"0172": {ico: "0172", flags: 0}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: 0}, // "Spiky-eared Pichu" // female only
	"0173": {ico: "0173", flags: 0}, // "Cleffa"
	"0174": {ico: "0174", flags: 0}, // "Igglybuff"
	"0175": {ico: "0175", flags: 0}, // "Togepi"
	"0176": {ico: "0176", flags: 0}, // "Togetic"
	"0177": {ico: "0177", flags: 0}, // "Natu"
//	"0178": {ico: "0178", flags: 0}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: 0}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: 0}, // "Xatu♀"
	"0179": {ico: "0179", flags: 0}, // "Mareep"
	"0180": {ico: "0180", flags: 0}, // "Flaaffy"
	"0181": {ico: "0181", flags: 0}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: 0}, // "Mega Ampharos"
	"0182": {ico: "0182", flags: 0}, // "Bellossom"
	"0183": {ico: "0183", flags: 0}, // "Marill"
	"0184": {ico: "0184", flags: 0}, // "Azumarill"
//	"0185": {ico: "0185", flags: 0}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: 0}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: 0}, // "Sudowoodo♀"
//	"0186": {ico: "0186", flags: 0}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: 0}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: 0}, // "Politoed♀"
	"0187": {ico: "0187", flags: 0}, // "Hoppip"
	"0188": {ico: "0188", flags: 0}, // "Skiploom"
	"0189": {ico: "0189", flags: 0}, // "Jumpluff"
//	"0190": {ico: "0190", flags: 0}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: 0}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: 0}, // "Aipom♀"
	"0191": {ico: "0191", flags: 0}, // "Sunkern"
	"0192": {ico: "0192", flags: 0}, // "Sunflora"
	"0193": {ico: "0193", flags: 0}, // "Yanma"
//	"0194": {ico: "0194", flags: 0}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: 0}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: 0}, // "Wooper♀"
//	"0195": {ico: "0195", flags: 0}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: 0}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: 0}, // "Quagsire♀"
	"0196": {ico: "0196", flags: 0}, // "Espeon"
	"0197": {ico: "0197", flags: 0}, // "Umbreon"
//	"0198": {ico: "0198", flags: 0}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: 0}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: 0}, // "Murkrow♀"
	"0199": {ico: "0199", flags: 0}, // "Slowking"
	"0199-galar": {ico: "0199-galar", flags: 0}, // "Galarian Slowking"
	"0200": {ico: "0200", flags: 0}, // "Misdreavus"
//	"0201": {ico: "0201", flags: 0}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: 0}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: 0}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: 0}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: 0}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: 0}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: 0}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: 0}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: 0}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: 0}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: 0}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: 0}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: 0}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: 0}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: 0}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: 0}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: 0}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: 0}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: 0}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: 0}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: 0}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: 0}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: 0}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: 0}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: 0}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: 0}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: 0}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: 0}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: 0}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: 0}, // "Unown ?????" // uknown gender
//	"0202": {ico: "0202", flags: 0}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: 0}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: 0}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: 0}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: 0}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: 0}, // "Girafarig♀"
	"0204": {ico: "0204", flags: 0}, // "Pineco"
	"0205": {ico: "0205", flags: 0}, // "Forretress"
	"0206": {ico: "0206", flags: 0}, // "Dunsparce"
//	"0207": {ico: "0207", flags: 0}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: 0}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: 0}, // "Gligar♀"
//	"0208": {ico: "0208", flags: 0}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: 0}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: 0}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: 0}, // "Mega Steelix"
	"0209": {ico: "0209", flags: 0}, // "Snubbull"
	"0210": {ico: "0210", flags: 0}, // "Granbull"
	"0211": {ico: "0211", flags: 0}, // "Qwilfish"
//	"0212": {ico: "0212", flags: 0}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: 0}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: 0}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: 0}, // "Mega Scizor"
	"0213": {ico: "0213", flags: 0}, // "Shuckle"
//	"0214": {ico: "0214", flags: 0}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: 0}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: 0}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: 0}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: 0}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: 0}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: 0}, // "Sneasel♀"
	"0216": {ico: "0216", flags: 0}, // "Teddiursa"
//	"0217": {ico: "0217", flags: 0}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: 0}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: 0}, // "Ursaring♀"
	"0218": {ico: "0218", flags: 0}, // "Slugma"
	"0219": {ico: "0219", flags: 0}, // "Magcargo"
	"0220": {ico: "0220", flags: 0}, // "Swinub"
//	"0221": {ico: "0221", flags: 0}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: 0}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: 0}, // "Piloswine♀"
	"0222": {ico: "0222", flags: 0}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: 0}, // "Galarian Corsola"
	"0223": {ico: "0223", flags: 0}, // "Remoraid"
//	"0224": {ico: "0224", flags: 0}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: 0}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: 0}, // "Octillery♀"
	"0225": {ico: "0225", flags: 0}, // "Delibird"
	"0226": {ico: "0226", flags: 0}, // "Mantine"
	"0227": {ico: "0227", flags: 0}, // "Skarmory"
	"0228": {ico: "0228", flags: 0}, // "Houndour"
//	"0229": {ico: "0229", flags: 0}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: 0}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: 0}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: 0}, // "Mega Houndoom"
	"0230": {ico: "0230", flags: 0}, // "Kingdra"
	"0231": {ico: "0231", flags: 0}, // "Phanpy"
//	"0232": {ico: "0232", flags: 0}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: 0}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: 0}, // "Donphan♀"
	"0233": {ico: "0233", flags: 0}, // "Porygon2" // uknown gender
	"0234": {ico: "0234", flags: 0}, // "Stantler"
	"0235": {ico: "0235", flags: 0}, // "Smeargle"
	"0236": {ico: "0236", flags: 0}, // "Tyrogue" // male only
	"0237": {ico: "0237", flags: 0}, // "Hitmontop" // male only
	"0238": {ico: "0238", flags: 0}, // "Smoochum" // female only
	"0239": {ico: "0239", flags: 0}, // "Elekid"
	"0240": {ico: "0240", flags: 0}, // "Magby"
	"0241": {ico: "0241", flags: 0}, // "Miltank" // female only
	"0242": {ico: "0242", flags: 0}, // "Blissey" // female only
	"0243": {ico: "0243", flags: 0}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: 0}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: 0}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: 0}, // "Larvitar"
	"0247": {ico: "0247", flags: 0}, // "Pupitar"
	"0248": {ico: "0248", flags: 0}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: 0}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: 0}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: 0}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: 0}, // "Celebi" // uknown gender
//	==============
//	 Generation 3
//	==============
	"0252": {ico: "0252", flags: 0}, // "Treecko"
	"0253": {ico: "0253", flags: 0}, // "Grovyle"
	"0254": {ico: "0254", flags: 0}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: 0}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: 0}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: 0}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: 0}, // "Torchic♀"
//	"0256": {ico: "0256", flags: 0}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: 0}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: 0}, // "Combusken♀"
//	"0257": {ico: "0257", flags: 0}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: 0}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: 0}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: 0}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: 0}, // "Mudkip"
	"0259": {ico: "0259", flags: 0}, // "Marshtomp"
	"0260": {ico: "0260", flags: 0}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: 0}, // "Mega Swampert"
	"0261": {ico: "0261", flags: 0}, // "Poochyena"
	"0262": {ico: "0262", flags: 0}, // "Mightyena"
	"0263": {ico: "0263", flags: 0}, // "Zigzagoon"
	"0263-galar": {ico: "0263-galar", flags: 0}, // "Galarian Zigzagoon"
	"0264": {ico: "0264", flags: 0}, // "Linoone"
	"0264-galar": {ico: "0264-galar", flags: 0}, // "Galarian Linoone"
	"0265": {ico: "0265", flags: 0}, // "Wurmple"
	"0266": {ico: "0266", flags: 0}, // "Silcoon"
//	"0267": {ico: "0267", flags: 0}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: 0}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: 0}, // "Beautifly♀"
	"0268": {ico: "0268", flags: 0}, // "Cascoon"
//	"0269": {ico: "0269", flags: 0}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: 0}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: 0}, // "Dustox♀"
	"0270": {ico: "0270", flags: 0}, // "Lotad"
	"0271": {ico: "0271", flags: 0}, // "Lombre"
//	"0272": {ico: "0272", flags: 0}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: 0}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: 0}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: 0}, // "Seedot"
//	"0274": {ico: "0274", flags: 0}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: 0}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: 0}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: 0}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: 0}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: 0}, // "Shiftry♀"
	"0276": {ico: "0276", flags: 0}, // "Taillow"
	"0277": {ico: "0277", flags: 0}, // "Swellow"
	"0278": {ico: "0278", flags: 0}, // "Wingull"
	"0279": {ico: "0279", flags: 0}, // "Pelipper"
	"0280": {ico: "0280", flags: 0}, // "Ralts"
	"0281": {ico: "0281", flags: 0}, // "Kirlia"
	"0282": {ico: "0282", flags: 0}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: 0}, // "Mega Gardevoir"
	"0283": {ico: "0283", flags: 0}, // "Surskit"
	"0284": {ico: "0284", flags: 0}, // "Masquerain"
	"0285": {ico: "0285", flags: 0}, // "Shroomish"
	"0286": {ico: "0286", flags: 0}, // "Breloom"
	"0287": {ico: "0287", flags: 0}, // "Slakoth"
	"0288": {ico: "0288", flags: 0}, // "Vigoroth"
	"0289": {ico: "0289", flags: 0}, // "Slaking"
	"0290": {ico: "0290", flags: 0}, // "Nincada"
	"0291": {ico: "0291", flags: 0}, // "Ninjask"
	"0292": {ico: "0292", flags: 0}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: 0}, // "Whismur"
	"0294": {ico: "0294", flags: 0}, // "Loudred"
	"0295": {ico: "0295", flags: 0}, // "Exploud"
	"0296": {ico: "0296", flags: 0}, // "Makuhita"
	"0297": {ico: "0297", flags: 0}, // "Hariyama"
	"0298": {ico: "0298", flags: 0}, // "Azurill"
	"0299": {ico: "0299", flags: 0}, // "Nosepass"
	"0300": {ico: "0300", flags: 0}, // "Skitty"
	"0301": {ico: "0301", flags: 0}, // "Delcatty"
	"0302": {ico: "0302", flags: 0}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: 0}, // "Mega Sableye"
	"0303": {ico: "0303", flags: 0}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: 0}, // "Mega Mawile"
	"0304": {ico: "0304", flags: 0}, // "Aron"
	"0305": {ico: "0305", flags: 0}, // "Lairon"
	"0306": {ico: "0306", flags: 0}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: 0}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: 0}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: 0}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: 0}, // "Meditite♀"
//	"0308": {ico: "0308", flags: 0}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: 0}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: 0}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: 0}, // "Mega Medicham"
	"0309": {ico: "0309", flags: 0}, // "Electrike"
	"0310": {ico: "0310", flags: 0}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: 0}, // "Mega Manectric"
	"0311": {ico: "0311", flags: 0}, // "Plusle"
	"0312": {ico: "0312", flags: 0}, // "Minun"
	"0313": {ico: "0313", flags: 0}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: 0}, // "Illumise" // female only
//	"0315": {ico: "0315", flags: 0}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: 0}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: 0}, // "Roselia♀"
//	"0316": {ico: "0316", flags: 0}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: 0}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: 0}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: 0}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: 0}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: 0}, // "Swalot♀"
	"0318": {ico: "0318", flags: 0}, // "Carvanha"
	"0319": {ico: "0319", flags: 0}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: 0}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: 0}, // "Wailmer"
	"0321": {ico: "0321", flags: 0}, // "Wailord"
//	"0322": {ico: "0322", flags: 0}, // "Numel"
	"0322-m": {ico: "0322-m", flags: 0}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: 0}, // "Numel♀"
//	"0323": {ico: "0323", flags: 0}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: 0}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: 0}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: 0}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: 0}, // "Torkoal"
	"0325": {ico: "0325", flags: 0}, // "Spoink"
	"0326": {ico: "0326", flags: 0}, // "Grumpig"
	"0327": {ico: "0327", flags: 0}, // "Spinda"
	"0328": {ico: "0328", flags: 0}, // "Trapinch"
	"0329": {ico: "0329", flags: 0}, // "Vibrava"
	"0330": {ico: "0330", flags: 0}, // "Flygon"
	"0331": {ico: "0331", flags: 0}, // "Cacnea"
//	"0332": {ico: "0332", flags: 0}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: 0}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: 0}, // "Cacturne♀"
	"0333": {ico: "0333", flags: 0}, // "Swablu"
	"0334": {ico: "0334", flags: 0}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: 0}, // "Mega Altaria"
	"0335": {ico: "0335", flags: 0}, // "Zangoose"
	"0336": {ico: "0336", flags: 0}, // "Seviper"
	"0337": {ico: "0337", flags: 0}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: 0}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: 0}, // "Barboach"
	"0340": {ico: "0340", flags: 0}, // "Whiscash"
	"0341": {ico: "0341", flags: 0}, // "Corphish"
	"0342": {ico: "0342", flags: 0}, // "Crawdaunt"
	"0343": {ico: "0343", flags: 0}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: 0}, // "Claydol" // uknown gender
	"0345": {ico: "0345", flags: 0}, // "Lileep"
	"0346": {ico: "0346", flags: 0}, // "Cradily"
	"0347": {ico: "0347", flags: 0}, // "Anorith"
	"0348": {ico: "0348", flags: 0}, // "Armaldo"
	"0349": {ico: "0349", flags: 0}, // "Feebas"
//	"0350": {ico: "0350", flags: 0}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: 0}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: 0}, // "Milotic♀"
	"0351": {ico: "0351", flags: 0}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: 0}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: 0}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: 0}, // "Snowy Castform"
	"0352": {ico: "0352", flags: 0}, // "Kecleon"
	"0353": {ico: "0353", flags: 0}, // "Shuppet"
	"0354": {ico: "0354", flags: 0}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: 0}, // "Mega Banette"
	"0355": {ico: "0355", flags: 0}, // "Duskull"
	"0356": {ico: "0356", flags: 0}, // "Dusclops"
	"0357": {ico: "0357", flags: 0}, // "Tropius"
	"0358": {ico: "0358", flags: 0}, // "Chimecho"
	"0359": {ico: "0359", flags: 0}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: 0}, // "Mega Absol"
	"0360": {ico: "0360", flags: 0}, // "Wynaut"
	"0361": {ico: "0361", flags: 0}, // "Snorunt"
	"0362": {ico: "0362", flags: 0}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: 0}, // "Mega Glalie"
	"0363": {ico: "0363", flags: 0}, // "Spheal"
	"0364": {ico: "0364", flags: 0}, // "Sealeo"
	"0365": {ico: "0365", flags: 0}, // "Walrein"
	"0366": {ico: "0366", flags: 0}, // "Clamperl"
	"0367": {ico: "0367", flags: 0}, // "Huntail"
	"0368": {ico: "0368", flags: 0}, // "Gorebyss"
//	"0369": {ico: "0369", flags: 0}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: 0}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: 0}, // "Relicanth♀"
	"0370": {ico: "0370", flags: 0}, // "Luvdisc"
	"0371": {ico: "0371", flags: 0}, // "Bagon"
	"0372": {ico: "0372", flags: 0}, // "Shelgon"
	"0373": {ico: "0373", flags: 0}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: 0}, // "Mega Salamence"
	"0374": {ico: "0374", flags: 0}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: 0}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: 0}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: 0}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: 0}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: 0}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: 0}, // "Registeel" // uknown gender
	"0380": {ico: "0380", flags: 0}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: 0}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: 0}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: 0}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: 0}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: 0}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: 0}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: 0}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: 0}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: 0}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: 0}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: 0}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: 0}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: 0}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: 0}, // "Speed Deoxys" // uknown gender
//	==============
//	 Generation 4
//	==============
	"0387": {ico: "0387", flags: 0}, // "Turtwig"
	"0388": {ico: "0388", flags: 0}, // "Grotle"
	"0389": {ico: "0389", flags: 0}, // "Torterra"
	"0390": {ico: "0390", flags: 0}, // "Chimchar"
	"0391": {ico: "0391", flags: 0}, // "Monferno"
	"0392": {ico: "0392", flags: 0}, // "Infernape"
	"0393": {ico: "0393", flags: 0}, // "Piplup"
	"0394": {ico: "0394", flags: 0}, // "Prinplup"
	"0395": {ico: "0395", flags: 0}, // "Empoleon"
//	"0396": {ico: "0396", flags: 0}, // "Starly"
	"0396-m": {ico: "0396-m", flags: 0}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: 0}, // "Starly♀"
//	"0397": {ico: "0397", flags: 0}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: 0}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: 0}, // "Staravia♀"
//	"0398": {ico: "0398", flags: 0}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: 0}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: 0}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: 0}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: 0}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: 0}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: 0}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: 0}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: 0}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: 0}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: 0}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: 0}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: 0}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: 0}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: 0}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: 0}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: 0}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: 0}, // "Shinx♀"
//	"0404": {ico: "0404", flags: 0}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: 0}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: 0}, // "Luxio♀"
//	"0405": {ico: "0405", flags: 0}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: 0}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: 0}, // "Luxray♀"
//	"0406": {ico: "0406", flags: 0}, // "Budew"
//	"0407": {ico: "0407", flags: 0}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: 0}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: 0}, // "Roserade♀"
	"0408": {ico: "0408", flags: 0}, // "Cranidos"
	"0409": {ico: "0409", flags: 0}, // "Rampardos"
	"0410": {ico: "0410", flags: 0}, // "Shieldon"
	"0411": {ico: "0411", flags: 0}, // "Bastiodon"
//	"0412": {ico: "0412", flags: 0}, // "Burmy"
	"0412-plant": {ico: "0412-plant", flags: 0}, // "Burmy Plant Cloak"
	"0412-sandy": {ico: "0412-sandy", flags: 0}, // "Burmy Sandy Cloak"
	"0412-trash": {ico: "0412-trash", flags: 0}, // "Burmy Trash Cloak"
//	"0413": {ico: "0413", flags: 0}, // "Wormadam" // female only
	"0413-plant": {ico: "0413-plant", flags: 0}, // "Wormadam Plant Cloak" // female only
	"0413-sandy": {ico: "0413-sandy", flags: 0}, // "Wormadam Sandy Cloak" // female only
	"0413-trash": {ico: "0413-trash", flags: 0}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: 0}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: 0}, // "Combee"
	"0415-m": {ico: "0415-m", flags: 0}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: 0}, // "Combee♀"
	"0416": {ico: "0416", flags: 0}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: 0}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: 0}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: 0}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: 0}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: 0}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: 0}, // "Buizel♀"
//	"0419": {ico: "0419", flags: 0}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: 0}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: 0}, // "Floatzel♀"
	"0420": {ico: "0420", flags: 0}, // "Cherubi"
//	"0421": {ico: "0421", flags: 0}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: 0}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: 0}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: 0}, // "Shellos"
	"0422-west": {ico: "0422-west", flags: 0}, // "West Sea Shellos"
	"0422-east": {ico: "0422-east", flags: 0}, // "East Sea Shellos"
//	"0423": {ico: "0423", flags: 0}, // "Gastrodon"
	"0423-west": {ico: "0423-west", flags: 0}, // "West Sea Gastrodon"
	"0423-east": {ico: "0423-east", flags: 0}, // "East Sea Gastrodon"
//	"0424": {ico: "0424", flags: 0}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: 0}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: 0}, // "Ambipom♀"
	"0425": {ico: "0425", flags: 0}, // "Drifloon"
	"0426": {ico: "0426", flags: 0}, // "Drifblim"
	"0427": {ico: "0427", flags: 0}, // "Buneary"
	"0428": {ico: "0428", flags: 0}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: 0}, // "Mega Lopunny"
	"0429": {ico: "0429", flags: 0}, // "Mismagius"
	"0430": {ico: "0430", flags: 0}, // "Honchkrow"
	"0431": {ico: "0431", flags: 0}, // "Glameow"
	"0432": {ico: "0432", flags: 0}, // "Purugly"
	"0433": {ico: "0433", flags: 0}, // "Chingling"
	"0434": {ico: "0434", flags: 0}, // "Stunky"
	"0435": {ico: "0435", flags: 0}, // "Skuntank"
	"0436": {ico: "0436", flags: 0}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: 0}, // "Bronzong" // uknown gender
	"0438": {ico: "0438", flags: 0}, // "Bonsly"
	"0439": {ico: "0439", flags: 0}, // "Mime Jr."
	"0440": {ico: "0440", flags: 0}, // "Happiny" // female only
	"0441": {ico: "0441", flags: 0}, // "Chatot"
	"0442": {ico: "0442", flags: 0}, // "Spiritomb"
//	"0443": {ico: "0443", flags: 0}, // "Gible"
	"0443-m": {ico: "0443-m", flags: 0}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: 0}, // "Gible♀"
//	"0444": {ico: "0444", flags: 0}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: 0}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: 0}, // "Gabite♀"
//	"0445": {ico: "0445", flags: 0}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: 0}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: 0}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: 0}, // "Mega Garchomp"
	"0446": {ico: "0446", flags: 0}, // "Munchlax"
	"0447": {ico: "0447", flags: 0}, // "Riolu"
	"0448": {ico: "0448", flags: 0}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: 0}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: 0}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: 0}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: 0}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: 0}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: 0}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: 0}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: 0}, // "Skorupi"
	"0452": {ico: "0452", flags: 0}, // "Drapion"
//	"0453": {ico: "0453", flags: 0}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: 0}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: 0}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: 0}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: 0}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: 0}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: 0}, // "Carnivine"
//	"0456": {ico: "0456", flags: 0}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: 0}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: 0}, // "Finneon♀"
//	"0457": {ico: "0457", flags: 0}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: 0}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: 0}, // "Lumineon♀"
	"0458": {ico: "0458", flags: 0}, // "Mantyke"
//	"0459": {ico: "0459", flags: 0}, // "Snover"
	"0459-m": {ico: "0459-m", flags: 0}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: 0}, // "Snover♀"
//	"0460": {ico: "0460", flags: 0}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: 0}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: 0}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: 0}, // "Mega Abomasnow"
//	"0461": {ico: "0461", flags: 0}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: 0}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: 0}, // "Weavile♀"
	"0462": {ico: "0462", flags: 0}, // "Magnezone" // uknown gender
	"0463": {ico: "0463", flags: 0}, // "Lickilicky"
//	"0464": {ico: "0464", flags: 0}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: 0}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: 0}, // "Rhyperior♀"
//	"0465": {ico: "0465", flags: 0}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: 0}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: 0}, // "Tangrowth♀"
	"0466": {ico: "0466", flags: 0}, // "Electivire"
	"0467": {ico: "0467", flags: 0}, // "Magmortar"
	"0468": {ico: "0468", flags: 0}, // "Togekiss"
	"0469": {ico: "0469", flags: 0}, // "Yanmega"
	"0470": {ico: "0470", flags: 0}, // "Leafeon"
	"0471": {ico: "0471", flags: 0}, // "Glaceon"
	"0472": {ico: "0472", flags: 0}, // "Gliscor"
//	"0473": {ico: "0473", flags: 0}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: 0}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: 0}, // "Mamoswine♀"
	"0474": {ico: "0474", flags: 0}, // "Porygon-Z" // uknown gender
	"0475": {ico: "0475", flags: 0}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: 0}, // "Mega Gallade" // male only
	"0476": {ico: "0476", flags: 0}, // "Probopass"
	"0477": {ico: "0477", flags: 0}, // "Dusknoir"
	"0478": {ico: "0478", flags: 0}, // "Froslass" // female only
	"0479": {ico: "0479", flags: 0}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: 0}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: 0}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: 0}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: 0}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: 0}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: 0}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: 0}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: 0}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: 0}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: 0}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: 0}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: 0}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: 0}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: 0}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: 0}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: 0}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: 0}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: 0}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: 0}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: 0}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: 0}, // "Heatran"
	"0486": {ico: "0486", flags: 0}, // "Regigigas" // uknown gender
//	"0487": {ico: "0487", flags: 0}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: 0}, // "Giratina Altered Forme" // uknown gender
	"0487-origin": {ico: "0487-origin", flags: 0}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: 0}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: 0}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: 0}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: 0}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: 0}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: 0}, // "Shaymin Land Forme" // uknown gender
	"0492-sky": {ico: "0492-sky", flags: 0}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: 0}, // "Arceus" // uknown gender
	"0493-fighting": {ico: "0493-fighting", flags: 0}, // "Fighting Arceus" // uknown gender
	"0493-flying": {ico: "0493-flying", flags: 0}, // "Flying Arceus" // uknown gender
	"0493-poison": {ico: "0493-poison", flags: 0}, // "Poison Arceus" // uknown gender
	"0493-ground": {ico: "0493-ground", flags: 0}, // "Ground Arceus" // uknown gender
	"0493-rock": {ico: "0493-rock", flags: 0}, // "Rock Arceus" // uknown gender
	"0493-bug": {ico: "0493-bug", flags: 0}, // "Bug Arceus" // uknown gender
	"0493-ghost": {ico: "0493-ghost", flags: 0}, // "Ghost Arceus" // uknown gender
	"0493-steel": {ico: "0493-steel", flags: 0}, // "Steel Arceus" // uknown gender
	"0493-fire": {ico: "0493-fire", flags: 0}, // "Fire Arceus" // uknown gender
	"0493-water": {ico: "0493-water", flags: 0}, // "Water Arceus" // uknown gender
	"0493-grass": {ico: "0493-grass", flags: 0}, // "Grass Arceus" // uknown gender
	"0493-electric": {ico: "0493-electric", flags: 0}, // "Electric Arceus" // uknown gender
	"0493-psychic": {ico: "0493-psychic", flags: 0}, // "Psychic Arceus" // uknown gender
	"0493-ice": {ico: "0493-ice", flags: 0}, // "Ice Arceus" // uknown gender
	"0493-dragon": {ico: "0493-dragon", flags: 0}, // "Dragon Arceus" // uknown gender
	"0493-dark": {ico: "0493-dark", flags: 0}, // "Dark Arceus" // uknown gender
	"0493-fairy": {ico: "0493-fairy", flags: 0}, // "Fairy Arceus" // uknown gender
//	==============
//	 Generation 5
//	==============
	"0494": {ico: "0494", flags: 0}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: 0}, // "Snivy"
	"0496": {ico: "0496", flags: 0}, // "Servine"
	"0497": {ico: "0497", flags: 0}, // "Serperior"
	"0498": {ico: "0498", flags: 0}, // "Tepig"
	"0499": {ico: "0499", flags: 0}, // "Pignite"
	"0500": {ico: "0500", flags: 0}, // "Emboar"
	"0501": {ico: "0501", flags: 0}, // "Oshawott"
	"0502": {ico: "0502", flags: 0}, // "Dewott"
	"0503": {ico: "0503", flags: 0}, // "Samurott"
	"0504": {ico: "0504", flags: 0}, // "Patrat"
	"0505": {ico: "0505", flags: 0}, // "Watchog"
	"0506": {ico: "0506", flags: 0}, // "Lillipup"
	"0507": {ico: "0507", flags: 0}, // "Herdier"
	"0508": {ico: "0508", flags: 0}, // "Stoutland"
	"0509": {ico: "0509", flags: 0}, // "Purrloin"
	"0510": {ico: "0510", flags: 0}, // "Liepard"
	"0511": {ico: "0511", flags: 0}, // "Pansage"
	"0512": {ico: "0512", flags: 0}, // "Simisage"
	"0513": {ico: "0513", flags: 0}, // "Pansear"
	"0514": {ico: "0514", flags: 0}, // "Simisear"
	"0515": {ico: "0515", flags: 0}, // "Panpour"
	"0516": {ico: "0516", flags: 0}, // "Simipour"
	"0517": {ico: "0517", flags: 0}, // "Munna"
	"0518": {ico: "0518", flags: 0}, // "Musharna"
	"0519": {ico: "0519", flags: 0}, // "Pidove"
	"0520": {ico: "0520", flags: 0}, // "Tranquill"
//	"0521": {ico: "0521", flags: 0}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: 0}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: 0}, // "Unfezan♀"
	"0522": {ico: "0522", flags: 0}, // "Blitzle"
	"0523": {ico: "0523", flags: 0}, // "Zebstrika"
	"0524": {ico: "0524", flags: 0}, // "Roggenrola"
	"0525": {ico: "0525", flags: 0}, // "Boldore"
	"0526": {ico: "0526", flags: 0}, // "Gigalith"
	"0527": {ico: "0527", flags: 0}, // "Woobat"
	"0528": {ico: "0528", flags: 0}, // "Swoobat"
	"0529": {ico: "0529", flags: 0}, // "Drilbur"
	"0530": {ico: "0530", flags: 0}, // "Excadrill"
	"0531": {ico: "0531", flags: 0}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: 0}, // "Mega Audino"
	"0532": {ico: "0532", flags: 0}, // "Timburr"
	"0533": {ico: "0533", flags: 0}, // "Gurdurr"
	"0534": {ico: "0534", flags: 0}, // "Conkeldurr"
	"0535": {ico: "0535", flags: 0}, // "Tympole"
	"0536": {ico: "0536", flags: 0}, // "Palpitoad"
	"0537": {ico: "0537", flags: 0}, // "Seismitoad"
	"0538": {ico: "0538", flags: 0}, // "Throh" // male only
	"0539": {ico: "0539", flags: 0}, // "Sawk" // male only
	"0540": {ico: "0540", flags: 0}, // "Sewaddle"
	"0541": {ico: "0541", flags: 0}, // "Swadloon"
	"0542": {ico: "0542", flags: 0}, // "Leavanny"
	"0543": {ico: "0543", flags: 0}, // "Venipede"
	"0544": {ico: "0544", flags: 0}, // "Whirlipede"
	"0545": {ico: "0545", flags: 0}, // "Scolipede"
	"0546": {ico: "0546", flags: 0}, // "Cottonee"
	"0547": {ico: "0547", flags: 0}, // "Whimsicott"
	"0548": {ico: "0548", flags: 0}, // "Petilil" // female only
	"0549": {ico: "0549", flags: 0}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: 0}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: 0}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: 0}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: 0}, // "Sandile"
	"0552": {ico: "0552", flags: 0}, // "Krokorok"
	"0553": {ico: "0553", flags: 0}, // "Krookodile"
	"0554": {ico: "0554", flags: 0}, // "Darumaka"
	"0554-galar": {ico: "0554-galar", flags: 0}, // "Galarian Darumaka"
//	"0555": {ico: "0555", flags: 0}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: 0}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: 0}, // "Darmanitan Zen Mode"
//	"0555-galar": {ico: "0555-galar", flags: 0}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: 0}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: 0}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: 0}, // "Maractus"
	"0557": {ico: "0557", flags: 0}, // "Dwebble"
	"0558": {ico: "0558", flags: 0}, // "Crustle"
	"0559": {ico: "0559", flags: 0}, // "Scraggy"
	"0560": {ico: "0560", flags: 0}, // "Scrafty"
	"0561": {ico: "0561", flags: 0}, // "Sigilyph"
	"0562": {ico: "0562", flags: 0}, // "Yamask"
	"0562-galar": {ico: "0562-galar", flags: 0}, // "Galarian Yamask"
	"0563": {ico: "0563", flags: 0}, // "Cofagrigus"
	"0564": {ico: "0564", flags: 0}, // "Tirtouga"
	"0565": {ico: "0565", flags: 0}, // "Carracosta"
	"0566": {ico: "0566", flags: 0}, // "Archen"
	"0567": {ico: "0567", flags: 0}, // "Archeops"
	"0568": {ico: "0568", flags: 0}, // "Trubbish"
	"0569": {ico: "0569", flags: 0}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: 0}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: 0}, // "Zorua"
	"0571": {ico: "0571", flags: 0}, // "Zoroark"
	"0572": {ico: "0572", flags: 0}, // "Minccino"
	"0573": {ico: "0573", flags: 0}, // "Cinccino"
	"0574": {ico: "0574", flags: 0}, // "Gothita"
	"0575": {ico: "0575", flags: 0}, // "Gothorita"
	"0576": {ico: "0576", flags: 0}, // "Gothitelle"
	"0577": {ico: "0577", flags: 0}, // "Solosis"
	"0578": {ico: "0578", flags: 0}, // "Duosion"
	"0579": {ico: "0579", flags: 0}, // "Reuniclus"
	"0580": {ico: "0580", flags: 0}, // "Ducklett"
	"0581": {ico: "0581", flags: 0}, // "Swanna"
	"0582": {ico: "0582", flags: 0}, // "Vanillite"
	"0583": {ico: "0583", flags: 0}, // "Vanillish"
	"0584": {ico: "0584", flags: 0}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: 0}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: 0}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: 0}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: 0}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: 0}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: 0}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: 0}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: 0}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: 0}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: 0}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: 0}, // "Emolga"
	"0588": {ico: "0588", flags: 0}, // "Karrablast"
	"0589": {ico: "0589", flags: 0}, // "Escavalier"
	"0590": {ico: "0590", flags: 0}, // "Foongus"
	"0591": {ico: "0591", flags: 0}, // "Amoonguss"
//	"0592": {ico: "0592", flags: 0}, // "Frillish"
	"0592-m": {ico: "0592-m", flags: 0}, // "Frillish♂"
	"0592-f": {ico: "0592-f", flags: 0}, // "Frillish♀"
//	"0593": {ico: "0593", flags: 0}, // "Jellicent"
	"0593-m": {ico: "0593-m", flags: 0}, // "Jellicent♂"
	"0593-f": {ico: "0593-f", flags: 0}, // "Jellicent♀"
	"0594": {ico: "0594", flags: 0}, // "Alomomola"
	"0595": {ico: "0595", flags: 0}, // "Joltik"
	"0596": {ico: "0596", flags: 0}, // "Galvantula"
	"0597": {ico: "0597", flags: 0}, // "Ferroseed"
	"0598": {ico: "0598", flags: 0}, // "Ferrothorn"
	"0599": {ico: "0599", flags: 0}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: 0}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: 0}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: 0}, // "Tynamo"
	"0603": {ico: "0603", flags: 0}, // "Eelektrik"
	"0604": {ico: "0604", flags: 0}, // "Eelektross"
	"0605": {ico: "0605", flags: 0}, // "Elgyem"
	"0606": {ico: "0606", flags: 0}, // "Beheeyem"
	"0607": {ico: "0607", flags: 0}, // "Litwick"
	"0608": {ico: "0608", flags: 0}, // "Lampent"
	"0609": {ico: "0609", flags: 0}, // "Chandelure"
	"0610": {ico: "0610", flags: 0}, // "Axew"
	"0611": {ico: "0611", flags: 0}, // "Fraxure"
	"0612": {ico: "0612", flags: 0}, // "Haxorus"
	"0613": {ico: "0613", flags: 0}, // "Cubchoo"
	"0614": {ico: "0614", flags: 0}, // "Beartic"
	"0615": {ico: "0615", flags: 0}, // "Cryogonal" // uknown gender
	"0616": {ico: "0616", flags: 0}, // "Shelmet"
	"0617": {ico: "0617", flags: 0}, // "Accelgor"
	"0618": {ico: "0618", flags: 0}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: 0}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: 0}, // "Mienfoo"
	"0620": {ico: "0620", flags: 0}, // "Mienshao"
	"0621": {ico: "0621", flags: 0}, // "Druddigon"
	"0622": {ico: "0622", flags: 0}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: 0}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: 0}, // "Pawniard"
	"0625": {ico: "0625", flags: 0}, // "Bisharp"
	"0626": {ico: "0626", flags: 0}, // "Bouffalant"
	"0627": {ico: "0627", flags: 0}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: 0}, // "Braviary" // male only
	"0629": {ico: "0629", flags: 0}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: 0}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: 0}, // "Heatmor"
	"0632": {ico: "0632", flags: 0}, // "Durant"
	"0633": {ico: "0633", flags: 0}, // "Deino"
	"0634": {ico: "0634", flags: 0}, // "Zweilous"
	"0635": {ico: "0635", flags: 0}, // "Hydreigon"
	"0636": {ico: "0636", flags: 0}, // "Larvesta"
	"0637": {ico: "0637", flags: 0}, // "Volcarona"
	"0638": {ico: "0638", flags: 0}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: 0}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: 0}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: 0}, // "Tornadus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: 0}, // "Incarnate Forme Tornadus" // male only
	"0641-therian": {ico: "0641-therian", flags: 0}, // "Therian Forme Tornadus" // male only
//	"0642": {ico: "0642", flags: 0}, // "Thundurus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: 0}, // "Incarnate Forme Thundurus" // male only
	"0642-therian": {ico: "0642-therian", flags: 0}, // "Therian Forme Thundurus" // male only
	"0643": {ico: "0643", flags: 0}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: 0}, // "Zekrom" // uknown gender
//	"0645": {ico: "0645", flags: 0}, // "Landorus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: 0}, // "Incarnate Forme Landorus" // male only
	"0645-therian": {ico: "0645-therian", flags: 0}, // "Therian Forme Landorus" // male only
	"0646": {ico: "0646", flags: 0}, // "Kyurem" // uknown gender
	"0646-white": {ico: "0646-white", flags: 0}, // "White Kyurem" // uknown gender
	"0646-black": {ico: "0646-black", flags: 0}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: 0}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: 0}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: 0}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: 0}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: 0}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: 0}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: 0}, // "Genesect" // uknown gender
	"0649-douse": {ico: "0649-douse", flags: 0}, // "Douse Drive Genesect" // uknown gender
	"0649-shock": {ico: "0649-shock", flags: 0}, // "Shock Drive Genesect" // uknown gender
	"0649-burn": {ico: "0649-burn", flags: 0}, // "Burn Drive Genesect" // uknown gender
	"0649-chill": {ico: "0649-chill", flags: 0}, // "Chill Drive Genesect" // uknown gender
//	==============
//	 Generation 6
//	==============
	"0650": {ico: "0650", flags: 0}, // "Chespin"
	"0651": {ico: "0651", flags: 0}, // "Quilladin"
	"0652": {ico: "0652", flags: 0}, // "Chesnaught"
	"0653": {ico: "0653", flags: 0}, // "Fennekin"
	"0654": {ico: "0654", flags: 0}, // "Braixen"
	"0655": {ico: "0655", flags: 0}, // "Delphox"
	"0656": {ico: "0656", flags: 0}, // "Froakie"
	"0657": {ico: "0657", flags: 0}, // "Frogadier"
	"0658": {ico: "0658", flags: 0}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: 0}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: 0}, // "Bunnelby"
	"0660": {ico: "0660", flags: 0}, // "Diggersby"
	"0661": {ico: "0661", flags: 0}, // "Fletchling"
	"0662": {ico: "0662", flags: 0}, // "Fletchinder"
	"0663": {ico: "0663", flags: 0}, // "Talonflame"
	"0664": {ico: "0664", flags: 0}, // "Scatterbug"
	"0665": {ico: "0665", flags: 0}, // "Spewpa"
//	"0666": {ico: "0666", flags: 0}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: 0}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: 0}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: 0}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: 0}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: 0}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: 0}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: 0}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: 0}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: 0}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: 0}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: 0}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: 0}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: 0}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: 0}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: 0}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: 0}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: 0}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: 0}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: 0}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: 0}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: 0}, // "Litleo"
//	"0668": {ico: "0668", flags: 0}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: 0}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: 0}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: 0}, // "Flabébé" // female only
	"0669-red": {ico: "0669-red", flags: 0}, // "Red Flower Flabébé" // female only
	"0669-yellow": {ico: "0669-yellow", flags: 0}, // "Yellow Flower Flabébé" // female only
	"0669-orange": {ico: "0669-orange", flags: 0}, // "Orange Flower Flabébé" // female only
	"0669-blue": {ico: "0669-blue", flags: 0}, // "Blue Flower Flabébé" // female only
	"0669-white": {ico: "0669-white", flags: 0}, // "White Flower Flabébé" // female only
//	"0670": {ico: "0670", flags: 0}, // "Floette" // female only
	"0670-red": {ico: "0670-red", flags: 0}, // "Red Flower Floette" // female only
	"0670-yellow": {ico: "0670-yellow", flags: 0}, // "Yellow Flower Floette" // female only
	"0670-orange": {ico: "0670-orange", flags: 0}, // "Orange Flower Floette" // female only
	"0670-blue": {ico: "0670-blue", flags: 0}, // "Blue Flower Floette" // female only
	"0670-white": {ico: "0670-white", flags: 0}, // "White Flower Floette" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: 0}, // "Eternal Flower Floette" // female only
//	"0671": {ico: "0671", flags: 0}, // "Florges" // female only
	"0671-red": {ico: "0671-red", flags: 0}, // "Red Flower Florges" // female only
	"0671-yellow": {ico: "0671-yellow", flags: 0}, // "Yellow Flower Florges" // female only
	"0671-orange": {ico: "0671-orange", flags: 0}, // "Orange Flower Florges" // female only
	"0671-blue": {ico: "0671-blue", flags: 0}, // "Blue Flower Florges" // female only
	"0671-white": {ico: "0671-white", flags: 0}, // "White Flower Florges" // female only
	"0672": {ico: "0672", flags: 0}, // "Skiddo"
	"0673": {ico: "0673", flags: 0}, // "Gogoat"
	"0674": {ico: "0674", flags: 0}, // "Pancham"
	"0675": {ico: "0675", flags: 0}, // "Pangoro"
	"0676": {ico: "0676", flags: 0}, // "Furfrou"
	"0676-heart": {ico: "0676-heart", flags: 0}, // "Heart Trim Furfrou"
	"0676-star": {ico: "0676-star", flags: 0}, // "Star Trim Furfrou"
	"0676-diamond": {ico: "0676-diamond", flags: 0}, // "Diamond Trim Furfrou"
	"0676-debutante": {ico: "0676-debutante", flags: 0}, // "Debutante Trim Furfrou"
	"0676-matron": {ico: "0676-matron", flags: 0}, // "Matron Trim Furfrou"
	"0676-dandy": {ico: "0676-dandy", flags: 0}, // "Dandy Trim Furfrou"
	"0676-le-reine": {ico: "0676-le-reine", flags: 0}, // "Le Reine Trim Furfrou"
	"0676-kabuki": {ico: "0676-kabuki", flags: 0}, // "Kabuki Trim Furfrou"
	"0676-pharaoh": {ico: "0676-pharaoh", flags: 0}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: 0}, // "Espurr"
//	"0678": {ico: "0678", flags: 0}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: 0}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: 0}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: 0}, // "Honedge"
	"0680": {ico: "0680", flags: 0}, // "Doublade"
//	"0681": {ico: "0681", flags: 0}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: 0}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: 0}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: 0}, // "Spritzee"
	"0683": {ico: "0683", flags: 0}, // "Aromatisse"
	"0684": {ico: "0684", flags: 0}, // "Swirlix"
	"0685": {ico: "0685", flags: 0}, // "Slurpuff"
	"0686": {ico: "0686", flags: 0}, // "Inkay"
	"0687": {ico: "0687", flags: 0}, // "Malamar"
	"0688": {ico: "0688", flags: 0}, // "Binacle"
	"0689": {ico: "0689", flags: 0}, // "Barbaracle"
	"0690": {ico: "0690", flags: 0}, // "Skrelp"
	"0691": {ico: "0691", flags: 0}, // "Dragalge"
	"0692": {ico: "0692", flags: 0}, // "Clauncher"
	"0693": {ico: "0693", flags: 0}, // "Clawitzer"
	"0694": {ico: "0694", flags: 0}, // "Helioptile"
	"0695": {ico: "0695", flags: 0}, // "Heliolisk"
	"0696": {ico: "0696", flags: 0}, // "Tyrunt"
	"0697": {ico: "0697", flags: 0}, // "Tyrantrum"
	"0698": {ico: "0698", flags: 0}, // "Amaura"
	"0699": {ico: "0699", flags: 0}, // "Aurorus"
	"0700": {ico: "0700", flags: 0}, // "Sylveon"
	"0701": {ico: "0701", flags: 0}, // "Hawlucha"
	"0702": {ico: "0702", flags: 0}, // "Dedenne"
	"0703": {ico: "0703", flags: 0}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: 0}, // "Goomy"
	"0705": {ico: "0705", flags: 0}, // "Sliggoo"
	"0706": {ico: "0706", flags: 0}, // "Goodra"
	"0707": {ico: "0707", flags: 0}, // "Klefki"
	"0708": {ico: "0708", flags: 0}, // "Phantump"
	"0709": {ico: "0709", flags: 0}, // "Trevenant"
//	"0710": {ico: "0710", flags: 0}, // "Pumpkaboo"
	"0710-average": {ico: "0710-average", flags: 0}, // "Average Size Pumpkaboo"
	"0710-small": {ico: "0710-small", flags: 0}, // "Small Size Pumpkaboo"
	"0710-large": {ico: "0710-large", flags: 0}, // "Large Size Pumpkaboo"
	"0710-super": {ico: "0710-super", flags: 0}, // "Super Size Pumpkaboo"
//	"0711": {ico: "0711", flags: 0}, // "Gourgeist"
	"0711-average": {ico: "0711-average", flags: 0}, // "Average Size Gourgeist"
	"0711-small": {ico: "0711-small", flags: 0}, // "Small Size Gourgeist"
	"0711-large": {ico: "0711-large", flags: 0}, // "Large Size Gourgeist"
	"0711-super": {ico: "0711-super", flags: 0}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: 0}, // "Bergmite"
	"0713": {ico: "0713", flags: 0}, // "Avalugg"
	"0714": {ico: "0714", flags: 0}, // "Noibat"
	"0715": {ico: "0715", flags: 0}, // "Noivern"
//	"0716": {ico: "0716", flags: 0}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: 0}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: 0}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: 0}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: 0}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: 0}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: 0}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: 0}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: 0}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: 0}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: 0}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: 0}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: 0}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: 0}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: 0}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: 0}, // "Volcanion" // uknown gender
//	==============
//	 Generation 7
//	==============
	"0722": {ico: "0722", flags: 0}, // "Rowlet"
	"0723": {ico: "0723", flags: 0}, // "Dartrix"
	"0724": {ico: "0724", flags: 0}, // "Decidueye"
	"0725": {ico: "0725", flags: 0}, // "Litten"
	"0726": {ico: "0726", flags: 0}, // "Torracat"
	"0727": {ico: "0727", flags: 0}, // "Incineroar"
	"0728": {ico: "0728", flags: 0}, // "Popplio"
	"0729": {ico: "0729", flags: 0}, // "Brionne"
	"0730": {ico: "0730", flags: 0}, // "Primarina"
	"0731": {ico: "0731", flags: 0}, // "Pikipek"
	"0732": {ico: "0732", flags: 0}, // "Trumbeak"
	"0733": {ico: "0733", flags: 0}, // "Toucannon"
	"0734": {ico: "0734", flags: 0}, // "Yungoos"
	"0735": {ico: "0735", flags: 0}, // "Gumshoos"
	"0736": {ico: "0736", flags: 0}, // "Grubbin"
	"0737": {ico: "0737", flags: 0}, // "Charjabug"
	"0738": {ico: "0738", flags: 0}, // "Vikavolt"
	"0739": {ico: "0739", flags: 0}, // "Crabrawler"
	"0740": {ico: "0740", flags: 0}, // "Crabominable"
//	"0741": {ico: "0741", flags: 0}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: 0}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: 0}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: 0}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: 0}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: 0}, // "Cutiefly"
	"0743": {ico: "0743", flags: 0}, // "Ribombee"
	"0744": {ico: "0744", flags: 0}, // "Rockruff"
//	"0745": {ico: "0745", flags: 0}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: 0}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: 0}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: 0}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: 0}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: 0}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: 0}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: 0}, // "Mareanie"
	"0748": {ico: "0748", flags: 0}, // "Toxapex"
	"0749": {ico: "0749", flags: 0}, // "Mudbray"
	"0750": {ico: "0750", flags: 0}, // "Mudsdale"
	"0751": {ico: "0751", flags: 0}, // "Dewpider"
	"0752": {ico: "0752", flags: 0}, // "Araquanid"
	"0753": {ico: "0753", flags: 0}, // "Fomantis"
	"0754": {ico: "0754", flags: 0}, // "Lurantis"
	"0755": {ico: "0755", flags: 0}, // "Morelull"
	"0756": {ico: "0756", flags: 0}, // "Shiinotic"
	"0757": {ico: "0757", flags: 0}, // "Salandit"
	"0758": {ico: "0758", flags: 0}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: 0}, // "Stufful"
	"0760": {ico: "0760", flags: 0}, // "Bewear"
	"0761": {ico: "0761", flags: 0}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: 0}, // "Steenee" // female only
	"0763": {ico: "0763", flags: 0}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: 0}, // "Comfey"
	"0765": {ico: "0765", flags: 0}, // "Oranguru"
	"0766": {ico: "0766", flags: 0}, // "Passimian"
	"0767": {ico: "0767", flags: 0}, // "Wimpod"
	"0768": {ico: "0768", flags: 0}, // "Golisopod"
	"0769": {ico: "0769", flags: 0}, // "Sandygast"
	"0770": {ico: "0770", flags: 0}, // "Palossand"
	"0771": {ico: "0771", flags: 0}, // "Pyukumuku"
	"0772": {ico: "0772", flags: 0}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: 0}, // "Silvally" // uknown gender
	"0773-fighting": {ico: "0773-fighting", flags: 0}, // "Silvally Type: Fighting" // uknown gender
	"0773-flying": {ico: "0773-flying", flags: 0}, // "Silvally Type: Flying" // uknown gender
	"0773-poison": {ico: "0773-poison", flags: 0}, // "Silvally Type: Poison" // uknown gender
	"0773-ground": {ico: "0773-ground", flags: 0}, // "Silvally Type: Ground" // uknown gender
	"0773-rock": {ico: "0773-rock", flags: 0}, // "Silvally Type: Rock" // uknown gender
	"0773-bug": {ico: "0773-bug", flags: 0}, // "Silvally Type: Bug" // uknown gender
	"0773-ghost": {ico: "0773-ghost", flags: 0}, // "Silvally Type: Ghost" // uknown gender
	"0773-steel": {ico: "0773-steel", flags: 0}, // "Silvally Type: Steel" // uknown gender
	"0773-fire": {ico: "0773-fire", flags: 0}, // "Silvally Type: Fire" // uknown gender
	"0773-water": {ico: "0773-water", flags: 0}, // "Silvally Type: Water" // uknown gender
	"0773-grass": {ico: "0773-grass", flags: 0}, // "Silvally Type: Grass" // uknown gender
	"0773-electric": {ico: "0773-electric", flags: 0}, // "Silvally Type: Electric" // uknown gender
	"0773-psychic": {ico: "0773-psychic", flags: 0}, // "Silvally Type: Psychic" // uknown gender
	"0773-ice": {ico: "0773-ice", flags: 0}, // "Silvally Type: Ice" // uknown gender
	"0773-dragon": {ico: "0773-dragon", flags: 0}, // "Silvally Type: Dragon" // uknown gender
	"0773-dark": {ico: "0773-dark", flags: 0}, // "Silvally Type: Dark" // uknown gender
	"0773-fairy": {ico: "0773-fairy", flags: 0}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: 0}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: 0}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: 0}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: 0}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: 0}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: 0}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: 0}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: 0}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: 0}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: 0}, // "Komala"
	"0776": {ico: "0776", flags: 0}, // "Turtonator"
	"0777": {ico: "0777", flags: 0}, // "Togedemaru"
//	"0778": {ico: "0778", flags: 0}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: 0}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: 0}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: 0}, // "Bruxish"
	"0780": {ico: "0780", flags: 0}, // "Drampa"
	"0781": {ico: "0781", flags: 0}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: 0}, // "Jangmo-o"
	"0783": {ico: "0783", flags: 0}, // "Hakamo-o"
	"0784": {ico: "0784", flags: 0}, // "Kommo-o"
	"0785": {ico: "0785", flags: 0}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: 0}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: 0}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: 0}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: 0}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: 0}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: 0}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: 0}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: 0}, // "Lunala", // uknown gender
//	"0792-full-moon" // "Full Monn Lunala", // uknown gender
	"0793": {ico: "0793", flags: 0}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: 0}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: 0}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: 0}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: 0}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: 0}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: 0}, // "Guzzlord" // uknown gender
	"0800": {ico: "0800", flags: 0}, // "Necrozma" // uknown gender
	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: 0}, // "Dusk Mane Necrozma" // uknown gender
	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: 0}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: 0}, // "Ultra Necrozma" // uknown gender
	"0801": {ico: "0801", flags: 0}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: 0}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: 0}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: 0}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: 0}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: 0}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: 0}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: 0}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: 0}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: 0}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: 0}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: 0}, // "Gigantamax Melmetal" // uknown gender
//	==============
//	 Generation 8
//	==============
	"0810": {ico: "0810", flags: 0}, // "Grookey"
	"0811": {ico: "0811", flags: 0}, // "Thwackey"
	"0812": {ico: "0812", flags: 0}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: 0}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: 0}, // "Scorbunny"
	"0814": {ico: "0814", flags: 0}, // "Raboot"
	"0815": {ico: "0815", flags: 0}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: 0}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: 0}, // "Sobble"
	"0817": {ico: "0817", flags: 0}, // "Drizzile"
	"0818": {ico: "0818", flags: 0}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: 0}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: 0}, // "Skwovet"
	"0820": {ico: "0820", flags: 0}, // "Greedent"
	"0821": {ico: "0821", flags: 0}, // "Rookidee"
	"0822": {ico: "0822", flags: 0}, // "Corvisquire"
	"0823": {ico: "0823", flags: 0}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: 0}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: 0}, // "Blipbug"
	"0825": {ico: "0825", flags: 0}, // "Dottler"
	"0826": {ico: "0826", flags: 0}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: 0}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: 0}, // "Nickit"
	"0828": {ico: "0828", flags: 0}, // "Thievul"
	"0829": {ico: "0829", flags: 0}, // "Gossifleur"
	"0830": {ico: "0830", flags: 0}, // "Eldegoss"
	"0831": {ico: "0831", flags: 0}, // "Wooloo"
	"0832": {ico: "0832", flags: 0}, // "Dubwool"
	"0833": {ico: "0833", flags: 0}, // "Chewtle"
	"0834": {ico: "0834", flags: 0}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: 0}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: 0}, // "Yamper"
	"0836": {ico: "0836", flags: 0}, // "Boltund"
	"0837": {ico: "0837", flags: 0}, // "Rolycoly"
	"0838": {ico: "0838", flags: 0}, // "Carkol"
	"0839": {ico: "0839", flags: 0}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: 0}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: 0}, // "Applin"
	"0841": {ico: "0841", flags: 0}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: 0}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: 0}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: 0}, // "Silicobra"
	"0844": {ico: "0844", flags: 0}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: 0}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: 0}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: 0}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: 0}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: 0}, // "Arrokuda"
	"0847": {ico: "0847", flags: 0}, // "Barraskewda"
	"0848": {ico: "0848", flags: 0}, // "Toxel"
//	"0849": {ico: "0849", flags: 0}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: 0}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: 0}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: 0}, // "Sizzlipede"
	"0851": {ico: "0851", flags: 0}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: 0}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: 0}, // "Clobbopus"
	"0853": {ico: "0853", flags: 0}, // "Grapploct"
//	"0854": {ico: "0854", flags: 0}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854", flags: 0}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854", flags: 0}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: 0}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855", flags: 0}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855", flags: 0}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: 0}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: 0}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: 0}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: 0}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: 0}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: 0}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: 0}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: 0}, // "Gigantamax Grimmsnarl" // male only
	"0862": {ico: "0862", flags: 0}, // "Obstagoon"
	"0863": {ico: "0863", flags: 0}, // "Perrserker"
	"0864": {ico: "0864", flags: 0}, // "Cursola"
	"0865": {ico: "0865", flags: 0}, // "Sirfetch'd"
	"0866": {ico: "0866", flags: 0}, // "Mr. Rime"
	"0867": {ico: "0867", flags: 0}, // "Runerigus"
	"0868": {ico: "0868", flags: 0}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: 0}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: 0}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: 0}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: 0}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: 0}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: 0}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: 0}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: 0}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: 0}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: 0}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: 0}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: 0}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: 0}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: 0}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: 0}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: 0}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: 0}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: 0}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: 0}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: 0}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: 0}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: 0}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: 0}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: 0}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: 0}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: 0}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: 0}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: 0}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: 0}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: 0}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: 0}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: 0}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: 0}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: 0}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: 0}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: 0}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: 0}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: 0}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: 0}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: 0}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: 0}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: 0}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: 0}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: 0}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: 0}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: 0}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: 0}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: 0}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: 0}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: 0}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: 0}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: 0}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: 0}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: 0}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: 0}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: 0}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: 0}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: 0}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: 0}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: 0}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: 0}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: 0}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: 0}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: 0}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: 0}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: 0}, // "Pincurchin"
	"0872": {ico: "0872", flags: 0}, // "Snom"
	"0873": {ico: "0873", flags: 0}, // "Frosmoth"
	"0874": {ico: "0874", flags: 0}, // "Stonjourner"
//	"0875": {ico: "0875", flags: 0}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: 0}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: 0}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: 0}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: 0}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: 0}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: 0}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: 0}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: 0}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: 0}, // "Cufant"
	"0879": {ico: "0879", flags: 0}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: 0}, // "Gigantamax Copperajah"
	"0880": {ico: "0880", flags: 0}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: 0}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: 0}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: 0}, // "Arctovish" // uknown gender
	"0884": {ico: "0884", flags: 0}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: 0}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: 0}, // "Dreepy"
	"0886": {ico: "0886", flags: 0}, // "Drakloak"
	"0887": {ico: "0887", flags: 0}, // "Dragapult"
//	"0888": {ico: "0888", flags: 0}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: 0}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: 0}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: 0}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: 0}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: 0}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: 0}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: 0}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: 0}, // "Kubfu"
	"0892": {ico: "0892", flags: 0}, // "Urshifu"
	"0892-sigle": {ico: "0892-sigle", flags: 0}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: 0}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: 0}, // "Rapid Strike Style Urshifu"2021-04-02
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: 0}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: 0}, // "Zarude" // unknown gender
	"0893-dada": {ico: "0893-dada", flags: 0}, // "Dada Zarude" // unknown gender
	"0894": {ico: "0894", flags: 0}, // "Regieleki" // unknown gender
	"0895": {ico: "0895", flags: 0}, // "Regidrago" // unknown gender
	"0896": {ico: "0896", flags: 0}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: 0}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: 0}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: 0}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: 0}, // "Shadow Rider Calyrex" // uknown gender
}

const _Regdex_eSwSh	=
{
	"0001": {ico: "0001", flags: 0}, // "Bulbasaur"
	"0002": {ico: "0002", flags: 0}, // "Ivysaur"
//	"0003": {ico: "0003", flags: 0}, // "Venusaur"
	"0003-m": {ico: "0003", flags: 0}, // "Venusaur♂"
	"0003-f": {ico: "custom/0003-f", flags: 0}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: 0}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: 0}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: 0}, // "Charmander"
	"0005": {ico: "0005", flags: 0}, // "Charmeleon"
	"0006": {ico: "0006", flags: 0}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: 0}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: 0}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: 0}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: 0}, // "Squirtle"
	"0008": {ico: "0008", flags: 0}, // "Wartortle"
	"0009": {ico: "0009", flags: 0}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: 0}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: 0}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: 0}, // "Caterpie"
	"0011": {ico: "0011", flags: 0}, // "Metapod"
//	"0012": {ico: "0012", flags: 0}, // "Butterfree"
	"0012-m": {ico: "0012", flags: 0}, // "Butterfree♂"
	"0012-f": {ico: "custom/0012-f", flags: 0}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: 0}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: 0}, // "Weedle"
	"0014": {ico: "0014", flags: 0}, // "Kakuna"
	"0015": {ico: "0015", flags: 0}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: 0}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: 0}, // "Pidgey"
	"0017": {ico: "0017", flags: 0}, // "Pidgeotto"
	"0018": {ico: "0018", flags: 0}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: 0}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: 0}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: 0}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: 0}, // "Rattata♀"
//	"0020": {ico: "0020", flags: 0}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: 0}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: 0}, // "Raticate♀"
	"0019-alola": {ico: "0019-alola", flags: 0}, // "Alolan Rattata"
	"0020-alola": {ico: "0020-alola", flags: 0}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: 0}, // "Spearow"
	"0022": {ico: "0022", flags: 0}, // "Fearow"
	"0023": {ico: "0023", flags: 0}, // "Ekans"
	"0024": {ico: "0024", flags: 0}, // "Arbok"
	"0172": {ico: "0172", flags: 0}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: 0}, // "Spiky-eared Pichu" // female only
//	"0025": {ico: "0025", flags: 0}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: 0}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: 0}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: 0}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: 0}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: 0}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: 0}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: 0}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: 0}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: 0}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: 0}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: 0}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: 0}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: 0}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: 0}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: 0}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: 0}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: 0}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: 0}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: 0}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: 0}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: 0}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: 0}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: 0}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: 0}, // "Sandshrew"
	"0028": {ico: "0028", flags: 0}, // "Sandslash"
	"0027-alola": {ico: "0027-alola", flags: 0}, // "Alolan Sandshrew"
	"0028-alola": {ico: "0028-alola", flags: 0}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: 0}, // "Nidoran"
//	"0032": {ico: "0032", flags: 0}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: 0}, // "Nidoran♂"
	"0029-f": {ico: "0029-f", flags: 0}, // "Nidoran♀"
	"0030": {ico: "0030", flags: 0}, // "Nidorina"
	"0031": {ico: "0031", flags: 0}, // "Nidoqueen"
	"0033": {ico: "0033", flags: 0}, // "Nidorino"
	"0034": {ico: "0034", flags: 0}, // "Nidoking"
	"0173": {ico: "0173", flags: 0}, // "Cleffa"
	"0035": {ico: "0035", flags: 0}, // "Clefairy"
	"0036": {ico: "0036", flags: 0}, // "Clefable"
	"0037": {ico: "0037", flags: 0}, // "Vulpix"
	"0038": {ico: "0038", flags: 0}, // "Ninetales"
	"0037-alola": {ico: "0037-alola", flags: 0}, // "Alolan Vulpix"
	"0038-alola": {ico: "0038-alola", flags: 0}, // "Alolan Ninetales"
	"0174": {ico: "0174", flags: 0}, // "Igglybuff"
	"0039": {ico: "0039", flags: 0}, // "Jigglypuff"
	"0040": {ico: "0040", flags: 0}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: 0}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: 0}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: 0}, // "Zubat♀"
//	"0042": {ico: "0042", flags: 0}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: 0}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: 0}, // "Golbat♀"
	"0169": {ico: "0169", flags: 0}, // "Crobat"
	"0043": {ico: "0043", flags: 0}, // "Oddish"
//	"0044": {ico: "0044", flags: 0}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: 0}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: 0}, // "Gloom♀"
//	"0045": {ico: "0045", flags: 0}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: 0}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: 0}, // "Vileplume♀"
	"0182": {ico: "0182", flags: 0}, // "Bellossom"
	"0046": {ico: "0046", flags: 0}, // "Paras"
	"0047": {ico: "0047", flags: 0}, // "Parasect"
	"0048": {ico: "0048", flags: 0}, // "Venonat"
	"0049": {ico: "0049", flags: 0}, // "Venomoth"
	"0050": {ico: "0050", flags: 0}, // "Diglett"
	"0051": {ico: "0051", flags: 0}, // "Dugtrio"
	"0050-alola": {ico: "0050-alola", flags: 0}, // "Alolan Diglett"
	"0051-alola": {ico: "0051-alola", flags: 0}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: 0}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: 0}, // "Gigantamax Meowth"
	"0053": {ico: "0053", flags: 0}, // "Persian"
	"0052-alola": {ico: "0052-alola", flags: 0}, // "Alolan Meowth"
	"0053-alola": {ico: "0053-alola", flags: 0}, // "Alolan Persian"
	"0052-galar": {ico: "0052-galar", flags: 0}, // "Galarian Meowth"
	"0863": {ico: "0863", flags: 0}, // "Perrserker"
	"0054": {ico: "0054", flags: 0}, // "Psyduck"
	"0055": {ico: "0055", flags: 0}, // "Golduck"
	"0056": {ico: "0056", flags: 0}, // "Mankey"
	"0057": {ico: "0057", flags: 0}, // "Primeape"
	"0058": {ico: "0058", flags: 0}, // "Growlithe"
	"0059": {ico: "0059", flags: 0}, // "Arcanine"
	"0060": {ico: "0060", flags: 0}, // "Poliwag"
	"0061": {ico: "0061", flags: 0}, // "Poliwhirl"
	"0062": {ico: "0062", flags: 0}, // "Poliwrath"
//	"0186": {ico: "0186", flags: 0}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: 0}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: 0}, // "Politoed♀"
	"0063": {ico: "0063", flags: 0}, // "Abra"
//	"0064": {ico: "0064", flags: 0}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: 0}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: 0}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: 0}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: 0}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: 0}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: 0}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: 0}, // "Machop"
	"0067": {ico: "0067", flags: 0}, // "Machoke"
	"0068": {ico: "0068", flags: 0}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: 0}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: 0}, // "Bellsprout"
	"0070": {ico: "0070", flags: 0}, // "Weepinbell"
	"0071": {ico: "0071", flags: 0}, // "Victreebel"
	"0072": {ico: "0072", flags: 0}, // "Tentacool"
	"0073": {ico: "0073", flags: 0}, // "Tentacruel"
	"0074": {ico: "0074", flags: 0}, // "Geodude"
	"0075": {ico: "0075", flags: 0}, // "Graveler"
	"0076": {ico: "0076", flags: 0}, // "Golem"
	"0074-alola": {ico: "0074-alola", flags: 0}, // "Alolan Geodude"
	"0075-alola": {ico: "0075-alola", flags: 0}, // "Alolan Graveler"
	"0076-alola": {ico: "0076-alola", flags: 0}, // "Alolan Golem"
	"0077": {ico: "0077", flags: 0}, // "Ponyta"
	"0078": {ico: "0078", flags: 0}, // "Rapidash"
	"0077-galar": {ico: "0077-galar", flags: 0}, // "Galarian Ponyta"
	"0078-galar": {ico: "0078-galar", flags: 0}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: 0}, // "Slowpoke"
	"0080": {ico: "0080", flags: 0}, // "Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: 0}, // "Mega Slowbro"
	"0199": {ico: "0199", flags: 0}, // "Slowking"
	"0079-galar": {ico: "0079-galar", flags: 0}, // "Galarian Slowpoke"
	"0080-galar": {ico: "0080-galar", flags: 0}, // "Galarian Slowbro"
	"0199-galar": {ico: "0199-galar", flags: 0}, // "Galarian Slowking"
	"0081": {ico: "0081", flags: 0}, // "Magnemite"
	"0082": {ico: "0082", flags: 0}, // "Magneton"
	"0462": {ico: "0462", flags: 0}, // "Magnezone" // uknown gender
	"0083": {ico: "0083", flags: 0}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: 0}, // "Galarian Farfetch'd"
	"0865": {ico: "0865", flags: 0}, // "Sirfetch'd"
//	"0084": {ico: "0084", flags: 0}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: 0}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: 0}, // "Doduo♀"
//	"0085": {ico: "0085", flags: 0}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: 0}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: 0}, // "Dodrio♀"
	"0086": {ico: "0086", flags: 0}, // "Seel"
	"0087": {ico: "0087", flags: 0}, // "Dewgong"
	"0088": {ico: "0088", flags: 0}, // "Grimer"
	"0089": {ico: "0089", flags: 0}, // "Muk"
	"0088-alola": {ico: "0088-alola", flags: 0}, // "Alolan Grimer"
	"0089-alola": {ico: "0089-alola", flags: 0}, // "Alolan Muk"
	"0090": {ico: "0090", flags: 0}, // "Shellder"
	"0091": {ico: "0091", flags: 0}, // "Cloyster"
	"0092": {ico: "0092", flags: 0}, // "Gastly"
	"0093": {ico: "0093", flags: 0}, // "Haunter"
	"0094": {ico: "0094", flags: 0}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: 0}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: 0}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: 0}, // "Onix"
//	"0208": {ico: "0208", flags: 0}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: 0}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: 0}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: 0}, // "Mega Steelix"
	"0096": {ico: "0096", flags: 0}, // "Drowzee"
//	"0097": {ico: "0097", flags: 0}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: 0}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: 0}, // "Hypno♀"
	"0098": {ico: "0098", flags: 0}, // "Krabby"
	"0099": {ico: "0099", flags: 0}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: 0}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: 0}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: 0}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: 0}, // "Exeggcute"
	"0103": {ico: "0103", flags: 0}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: 0}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: 0}, // "Cubone"
	"0105": {ico: "0105", flags: 0}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: 0}, // "Alolan Marowak"
	"0236": {ico: "0236", flags: 0}, // "Tyrogue" // male only
	"0106": {ico: "0106", flags: 0}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: 0}, // "Hitmonchan" // male only
	"0237": {ico: "0237", flags: 0}, // "Hitmontop" // male only
	"0108": {ico: "0108", flags: 0}, // "Lickitung"
	"0463": {ico: "0463", flags: 0}, // "Lickilicky"
	"0109": {ico: "0109", flags: 0}, // "Koffing"
	"0110": {ico: "0110", flags: 0}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: 0}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: 0}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: 0}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: 0}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: 0}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: 0}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: 0}, // "Rhydon♀"
//	"0464": {ico: "0464", flags: 0}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: 0}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: 0}, // "Rhyperior♀"
	"0440": {ico: "0440", flags: 0}, // "Happiny" // female only
	"0113": {ico: "0113", flags: 0}, // "Chansey" // female only
	"0242": {ico: "0242", flags: 0}, // "Blissey" // female only
	"0114": {ico: "0114", flags: 0}, // "Tangela"
//	"0465": {ico: "0465", flags: 0}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: 0}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: 0}, // "Tangrowth♀"
	"0115": {ico: "0115", flags: 0}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: 0}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: 0}, // "Horsea"
	"0117": {ico: "0117", flags: 0}, // "Seadra"
	"0230": {ico: "0230", flags: 0}, // "Kingdra"
//	"0118": {ico: "0118", flags: 0}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: 0}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: 0}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: 0}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: 0}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: 0}, // "Seaking♀"
	"0120": {ico: "0120", flags: 0}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: 0}, // "Starmie" // uknown gender
	"0439": {ico: "0439", flags: 0}, // "Mime Jr."
	"0122": {ico: "0122", flags: 0}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: 0}, // "Galarian Mr. Mime"
	"0866": {ico: "0866", flags: 0}, // "Mr. Rime"
//	"0123": {ico: "0123", flags: 0}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: 0}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: 0}, // "Scyther♀"
//	"0212": {ico: "0212", flags: 0}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: 0}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: 0}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: 0}, // "Mega Scizor"
	"0238": {ico: "0238", flags: 0}, // "Smoochum" // female only
	"0124": {ico: "0124", flags: 0}, // "Jynx" // female only
	"0239": {ico: "0239", flags: 0}, // "Elekid"
	"0125": {ico: "0125", flags: 0}, // "Electabuzz"
	"0466": {ico: "0466", flags: 0}, // "Electivire"
	"0240": {ico: "0240", flags: 0}, // "Magby"
	"0126": {ico: "0126", flags: 0}, // "Magmar"
	"0467": {ico: "0467", flags: 0}, // "Magmortar"
	"0127": {ico: "0127", flags: 0}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: 0}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: 0}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: 0}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: 0}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: 0}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: 0}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: 0}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: 0}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: 0}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: 0}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: 0}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: 0}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: 0}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: 0}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: 0}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: 0}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: 0}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: 0}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: 0}, // "Vaporeon"
	"0135": {ico: "0135", flags: 0}, // "Jolteon"
	"0136": {ico: "0136", flags: 0}, // "Flareon"
	"0196": {ico: "0196", flags: 0}, // "Espeon"
	"0197": {ico: "0197", flags: 0}, // "Umbreon"
	"0470": {ico: "0470", flags: 0}, // "Leafeon"
	"0471": {ico: "0471", flags: 0}, // "Glaceon"
	"0700": {ico: "0700", flags: 0}, // "Sylveon"
	"0137": {ico: "0137", flags: 0}, // "Porygon" // uknown gender
	"0233": {ico: "0233", flags: 0}, // "Porygon2" // uknown gender
	"0474": {ico: "0474", flags: 0}, // "Porygon-Z" // uknown gender
	"0138": {ico: "0138", flags: 0}, // "Omanyte"
	"0139": {ico: "0139", flags: 0}, // "Omastar"
	"0140": {ico: "0140", flags: 0}, // "Kabuto"
	"0141": {ico: "0141", flags: 0}, // "Kabutops"
	"0142": {ico: "0142", flags: 0}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: 0}, // "Mega Aerodactyl"
	"0345": {ico: "0345", flags: 0}, // "Lileep"
	"0346": {ico: "0346", flags: 0}, // "Cradily"
	"0347": {ico: "0347", flags: 0}, // "Anorith"
	"0348": {ico: "0348", flags: 0}, // "Armaldo"
	"0408": {ico: "0408", flags: 0}, // "Cranidos"
	"0409": {ico: "0409", flags: 0}, // "Rampardos"
	"0410": {ico: "0410", flags: 0}, // "Shieldon"
	"0411": {ico: "0411", flags: 0}, // "Bastiodon"
	"0564": {ico: "0564", flags: 0}, // "Tirtouga"
	"0565": {ico: "0565", flags: 0}, // "Carracosta"
	"0566": {ico: "0566", flags: 0}, // "Archen"
	"0567": {ico: "0567", flags: 0}, // "Archeops"
	"0696": {ico: "0696", flags: 0}, // "Tyrunt"
	"0697": {ico: "0697", flags: 0}, // "Tyrantrum"
	"0698": {ico: "0698", flags: 0}, // "Amaura"
	"0699": {ico: "0699", flags: 0}, // "Aurorus"
	"0880": {ico: "0880", flags: 0}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: 0}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: 0}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: 0}, // "Arctovish" // uknown gender
	"0446": {ico: "0446", flags: 0}, // "Munchlax"
	"0143": {ico: "0143", flags: 0}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: 0}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: 0}, // "Articuno" // uknown gender
	"0145": {ico: "0145", flags: 0}, // "Zapdos" // uknown gender
	"0146": {ico: "0146", flags: 0}, // "Moltres" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: 0}, // "Galarian Articuno" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: 0}, // "Galarian Zapdos" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: 0}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: 0}, // "Dratini"
	"0148": {ico: "0148", flags: 0}, // "Dragonair"
	"0149": {ico: "0149", flags: 0}, // "Dragonite"
	"0150": {ico: "0150", flags: 0}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: 0}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: 0}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: 0}, // "Mew" // uknown gender
	"0152": {ico: "0152", flags: 0}, // "Chikorita"
	"0153": {ico: "0153", flags: 0}, // "Bayleef"
//	"0154": {ico: "0154", flags: 0}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: 0}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: 0}, // "Meganium♀"
	"0155": {ico: "0155", flags: 0}, // "Cyndaquil"
	"0156": {ico: "0156", flags: 0}, // "Quilava"
	"0157": {ico: "0157", flags: 0}, // "Typhlosion"
	"0158": {ico: "0158", flags: 0}, // "Totodile"
	"0159": {ico: "0159", flags: 0}, // "Croconaw"
	"0160": {ico: "0160", flags: 0}, // "Feraligatr"
	"0161": {ico: "0161", flags: 0}, // "Sentret"
	"0162": {ico: "0162", flags: 0}, // "Furret"
	"0163": {ico: "0163", flags: 0}, // "Hoothoot"
	"0164": {ico: "0164", flags: 0}, // "Noctowl"
//	"0165": {ico: "0165", flags: 0}, // "Ledyba"
//	"0166": {ico: "0166", flags: 0}, // "Ledian"
	"0165-m": {ico: "0165-m", flags: 0}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: 0}, // "Ledyba♀"
	"0166-m": {ico: "0166-m", flags: 0}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: 0}, // "Ledian♀"
	"0167": {ico: "0167", flags: 0}, // "Spinarak"
	"0168": {ico: "0168", flags: 0}, // "Ariados"
	"0170": {ico: "0170", flags: 0}, // "Chinchou"
	"0171": {ico: "0171", flags: 0}, // "Lanturn"
	"0175": {ico: "0175", flags: 0}, // "Togepi"
	"0176": {ico: "0176", flags: 0}, // "Togetic"
	"0468": {ico: "0468", flags: 0}, // "Togekiss"
	"0177": {ico: "0177", flags: 0}, // "Natu"
//	"0178": {ico: "0178", flags: 0}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: 0}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: 0}, // "Xatu♀"
	"0179": {ico: "0179", flags: 0}, // "Mareep"
	"0180": {ico: "0180", flags: 0}, // "Flaaffy"
	"0181": {ico: "0181", flags: 0}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: 0}, // "Mega Ampharos"
	"0298": {ico: "0298", flags: 0}, // "Azurill"
	"0183": {ico: "0183", flags: 0}, // "Marill"
	"0184": {ico: "0184", flags: 0}, // "Azumarill"
	"0438": {ico: "0438", flags: 0}, // "Bonsly"
//	"0185": {ico: "0185", flags: 0}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: 0}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: 0}, // "Sudowoodo♀"
	"0187": {ico: "0187", flags: 0}, // "Hoppip"
	"0188": {ico: "0188", flags: 0}, // "Skiploom"
	"0189": {ico: "0189", flags: 0}, // "Jumpluff"
//	"0190": {ico: "0190", flags: 0}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: 0}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: 0}, // "Aipom♀"
//	"0424": {ico: "0424", flags: 0}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: 0}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: 0}, // "Ambipom♀"
	"0191": {ico: "0191", flags: 0}, // "Sunkern"
	"0192": {ico: "0192", flags: 0}, // "Sunflora"
	"0193": {ico: "0193", flags: 0}, // "Yanma"
	"0469": {ico: "0469", flags: 0}, // "Yanmega"
//	"0194": {ico: "0194", flags: 0}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: 0}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: 0}, // "Wooper♀"
//	"0195": {ico: "0195", flags: 0}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: 0}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: 0}, // "Quagsire♀"
//	"0198": {ico: "0198", flags: 0}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: 0}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: 0}, // "Murkrow♀"
	"0430": {ico: "0430", flags: 0}, // "Honchkrow"
	"0200": {ico: "0200", flags: 0}, // "Misdreavus"
	"0429": {ico: "0429", flags: 0}, // "Mismagius"
//	"0201": {ico: "0201", flags: 0}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: 0}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: 0}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: 0}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: 0}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: 0}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: 0}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: 0}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: 0}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: 0}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: 0}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: 0}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: 0}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: 0}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: 0}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: 0}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: 0}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: 0}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: 0}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: 0}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: 0}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: 0}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: 0}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: 0}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: 0}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: 0}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: 0}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: 0}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: 0}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: 0}, // "Unown ?????" // uknown gender
	"0360": {ico: "0360", flags: 0}, // "Wynaut"
//	"0202": {ico: "0202", flags: 0}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: 0}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: 0}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: 0}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: 0}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: 0}, // "Girafarig♀"
	"0204": {ico: "0204", flags: 0}, // "Pineco"
	"0205": {ico: "0205", flags: 0}, // "Forretress"
	"0206": {ico: "0206", flags: 0}, // "Dunsparce"
//	"0207": {ico: "0207", flags: 0}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: 0}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: 0}, // "Gligar♀"
	"0472": {ico: "0472", flags: 0}, // "Gliscor"
	"0209": {ico: "0209", flags: 0}, // "Snubbull"
	"0210": {ico: "0210", flags: 0}, // "Granbull"
	"0211": {ico: "0211", flags: 0}, // "Qwilfish"
	"0213": {ico: "0213", flags: 0}, // "Shuckle"
//	"0214": {ico: "0214", flags: 0}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: 0}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: 0}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: 0}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: 0}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: 0}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: 0}, // "Sneasel♀"
//	"0461": {ico: "0461", flags: 0}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: 0}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: 0}, // "Weavile♀"
	"0216": {ico: "0216", flags: 0}, // "Teddiursa"
//	"0217": {ico: "0217", flags: 0}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: 0}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: 0}, // "Ursaring♀"
	"0218": {ico: "0218", flags: 0}, // "Slugma"
	"0219": {ico: "0219", flags: 0}, // "Magcargo"
	"0220": {ico: "0220", flags: 0}, // "Swinub"
//	"0221": {ico: "0221", flags: 0}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: 0}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: 0}, // "Piloswine♀"
//	"0473": {ico: "0473", flags: 0}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: 0}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: 0}, // "Mamoswine♀"
	"0222": {ico: "0222", flags: 0}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: 0}, // "Galarian Corsola"
	"0864": {ico: "0864", flags: 0}, // "Cursola"
	"0223": {ico: "0223", flags: 0}, // "Remoraid"
//	"0224": {ico: "0224", flags: 0}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: 0}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: 0}, // "Octillery♀"
	"0225": {ico: "0225", flags: 0}, // "Delibird"
	"0458": {ico: "0458", flags: 0}, // "Mantyke"
	"0226": {ico: "0226", flags: 0}, // "Mantine"
	"0227": {ico: "0227", flags: 0}, // "Skarmory"
	"0228": {ico: "0228", flags: 0}, // "Houndour"
//	"0229": {ico: "0229", flags: 0}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: 0}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: 0}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: 0}, // "Mega Houndoom"
	"0231": {ico: "0231", flags: 0}, // "Phanpy"
//	"0232": {ico: "0232", flags: 0}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: 0}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: 0}, // "Donphan♀"
	"0234": {ico: "0234", flags: 0}, // "Stantler"
	"0235": {ico: "0235", flags: 0}, // "Smeargle"
	"0241": {ico: "0241", flags: 0}, // "Miltank" // female only
	"0243": {ico: "0243", flags: 0}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: 0}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: 0}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: 0}, // "Larvitar"
	"0247": {ico: "0247", flags: 0}, // "Pupitar"
	"0248": {ico: "0248", flags: 0}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: 0}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: 0}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: 0}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: 0}, // "Celebi" // uknown gender
	"0252": {ico: "0252", flags: 0}, // "Treecko"
	"0253": {ico: "0253", flags: 0}, // "Grovyle"
	"0254": {ico: "0254", flags: 0}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: 0}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: 0}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: 0}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: 0}, // "Torchic♀"
//	"0256": {ico: "0256", flags: 0}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: 0}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: 0}, // "Combusken♀"
//	"0257": {ico: "0257", flags: 0}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: 0}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: 0}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: 0}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: 0}, // "Mudkip"
	"0259": {ico: "0259", flags: 0}, // "Marshtomp"
	"0260": {ico: "0260", flags: 0}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: 0}, // "Mega Swampert"
	"0261": {ico: "0261", flags: 0}, // "Poochyena"
	"0262": {ico: "0262", flags: 0}, // "Mightyena"
	"0263": {ico: "0263", flags: 0}, // "Zigzagoon"
	"0264": {ico: "0264", flags: 0}, // "Linoone"
	"0263-galar": {ico: "0263-galar", flags: 0}, // "Galarian Zigzagoon"
	"0264-galar": {ico: "0264-galar", flags: 0}, // "Galarian Linoone"
	"0862": {ico: "0862", flags: 0}, // "Obstagoon"
	"0265": {ico: "0265", flags: 0}, // "Wurmple"
	"0266": {ico: "0266", flags: 0}, // "Silcoon"
//	"0267": {ico: "0267", flags: 0}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: 0}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: 0}, // "Beautifly♀"
	"0268": {ico: "0268", flags: 0}, // "Cascoon"
//	"0269": {ico: "0269", flags: 0}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: 0}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: 0}, // "Dustox♀"
	"0270": {ico: "0270", flags: 0}, // "Lotad"
	"0271": {ico: "0271", flags: 0}, // "Lombre"
//	"0272": {ico: "0272", flags: 0}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: 0}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: 0}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: 0}, // "Seedot"
//	"0274": {ico: "0274", flags: 0}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: 0}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: 0}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: 0}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: 0}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: 0}, // "Shiftry♀"
	"0276": {ico: "0276", flags: 0}, // "Taillow"
	"0277": {ico: "0277", flags: 0}, // "Swellow"
	"0278": {ico: "0278", flags: 0}, // "Wingull"
	"0279": {ico: "0279", flags: 0}, // "Pelipper"
	"0280": {ico: "0280", flags: 0}, // "Ralts"
	"0281": {ico: "0281", flags: 0}, // "Kirlia"
	"0282": {ico: "0282", flags: 0}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: 0}, // "Mega Gardevoir"
	"0475": {ico: "0475", flags: 0}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: 0}, // "Mega Gallade" // male only
	"0283": {ico: "0283", flags: 0}, // "Surskit"
	"0284": {ico: "0284", flags: 0}, // "Masquerain"
	"0285": {ico: "0285", flags: 0}, // "Shroomish"
	"0286": {ico: "0286", flags: 0}, // "Breloom"
	"0287": {ico: "0287", flags: 0}, // "Slakoth"
	"0288": {ico: "0288", flags: 0}, // "Vigoroth"
	"0289": {ico: "0289", flags: 0}, // "Slaking"
	"0290": {ico: "0290", flags: 0}, // "Nincada"
	"0291": {ico: "0291", flags: 0}, // "Ninjask"
	"0292": {ico: "0292", flags: 0}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: 0}, // "Whismur"
	"0294": {ico: "0294", flags: 0}, // "Loudred"
	"0295": {ico: "0295", flags: 0}, // "Exploud"
	"0296": {ico: "0296", flags: 0}, // "Makuhita"
	"0297": {ico: "0297", flags: 0}, // "Hariyama"
	"0299": {ico: "0299", flags: 0}, // "Nosepass"
	"0476": {ico: "0476", flags: 0}, // "Probopass"
	"0300": {ico: "0300", flags: 0}, // "Skitty"
	"0301": {ico: "0301", flags: 0}, // "Delcatty"
	"0302": {ico: "0302", flags: 0}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: 0}, // "Mega Sableye"
	"0303": {ico: "0303", flags: 0}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: 0}, // "Mega Mawile"
	"0304": {ico: "0304", flags: 0}, // "Aron"
	"0305": {ico: "0305", flags: 0}, // "Lairon"
	"0306": {ico: "0306", flags: 0}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: 0}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: 0}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: 0}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: 0}, // "Meditite♀"
//	"0308": {ico: "0308", flags: 0}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: 0}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: 0}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: 0}, // "Mega Medicham"
	"0309": {ico: "0309", flags: 0}, // "Electrike"
	"0310": {ico: "0310", flags: 0}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: 0}, // "Mega Manectric"
	"0311": {ico: "0311", flags: 0}, // "Plusle"
	"0312": {ico: "0312", flags: 0}, // "Minun"
	"0313": {ico: "0313", flags: 0}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: 0}, // "Illumise" // female only
	"0406": {ico: "0406", flags: 0}, // "Budew"
//	"0315": {ico: "0315", flags: 0}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: 0}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: 0}, // "Roselia♀"
//	"0407": {ico: "0407", flags: 0}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: 0}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: 0}, // "Roserade♀"
//	"0316": {ico: "0316", flags: 0}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: 0}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: 0}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: 0}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: 0}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: 0}, // "Swalot♀"
	"0318": {ico: "0318", flags: 0}, // "Carvanha"
	"0319": {ico: "0319", flags: 0}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: 0}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: 0}, // "Wailmer"
	"0321": {ico: "0321", flags: 0}, // "Wailord"
//	"0322": {ico: "0322", flags: 0}, // "Numel"
	"0322-m": {ico: "0322-m", flags: 0}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: 0}, // "Numel♀"
//	"0323": {ico: "0323", flags: 0}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: 0}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: 0}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: 0}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: 0}, // "Torkoal"
	"0325": {ico: "0325", flags: 0}, // "Spoink"
	"0326": {ico: "0326", flags: 0}, // "Grumpig"
	"0327": {ico: "0327", flags: 0}, // "Spinda"
	"0328": {ico: "0328", flags: 0}, // "Trapinch"
	"0329": {ico: "0329", flags: 0}, // "Vibrava"
	"0330": {ico: "0330", flags: 0}, // "Flygon"
	"0331": {ico: "0331", flags: 0}, // "Cacnea"
//	"0332": {ico: "0332", flags: 0}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: 0}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: 0}, // "Cacturne♀"
	"0333": {ico: "0333", flags: 0}, // "Swablu"
	"0334": {ico: "0334", flags: 0}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: 0}, // "Mega Altaria"
	"0335": {ico: "0335", flags: 0}, // "Zangoose"
	"0336": {ico: "0336", flags: 0}, // "Seviper"
	"0337": {ico: "0337", flags: 0}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: 0}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: 0}, // "Barboach"
	"0340": {ico: "0340", flags: 0}, // "Whiscash"
	"0341": {ico: "0341", flags: 0}, // "Corphish"
	"0342": {ico: "0342", flags: 0}, // "Crawdaunt"
	"0343": {ico: "0343", flags: 0}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: 0}, // "Claydol" // uknown gender
	"0349": {ico: "0349", flags: 0}, // "Feebas"
//	"0350": {ico: "0350", flags: 0}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: 0}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: 0}, // "Milotic♀"
	"0351": {ico: "0351", flags: 0}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: 0}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: 0}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: 0}, // "Snowy Castform"
	"0352": {ico: "0352", flags: 0}, // "Kecleon"
	"0353": {ico: "0353", flags: 0}, // "Shuppet"
	"0354": {ico: "0354", flags: 0}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: 0}, // "Mega Banette"
	"0355": {ico: "0355", flags: 0}, // "Duskull"
	"0356": {ico: "0356", flags: 0}, // "Dusclops"
	"0477": {ico: "0477", flags: 0}, // "Dusknoir"
	"0357": {ico: "0357", flags: 0}, // "Tropius"
	"0433": {ico: "0433", flags: 0}, // "Chingling"
	"0358": {ico: "0358", flags: 0}, // "Chimecho"
	"0359": {ico: "0359", flags: 0}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: 0}, // "Mega Absol"
	"0361": {ico: "0361", flags: 0}, // "Snorunt"
	"0362": {ico: "0362", flags: 0}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: 0}, // "Mega Glalie"
	"0478": {ico: "0478", flags: 0}, // "Froslass" // female only
	"0363": {ico: "0363", flags: 0}, // "Spheal"
	"0364": {ico: "0364", flags: 0}, // "Sealeo"
	"0365": {ico: "0365", flags: 0}, // "Walrein"
	"0366": {ico: "0366", flags: 0}, // "Clamperl"
	"0367": {ico: "0367", flags: 0}, // "Huntail"
	"0368": {ico: "0368", flags: 0}, // "Gorebyss"
//	"0369": {ico: "0369", flags: 0}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: 0}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: 0}, // "Relicanth♀"
	"0370": {ico: "0370", flags: 0}, // "Luvdisc"
	"0371": {ico: "0371", flags: 0}, // "Bagon"
	"0372": {ico: "0372", flags: 0}, // "Shelgon"
	"0373": {ico: "0373", flags: 0}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: 0}, // "Mega Salamence"
	"0374": {ico: "0374", flags: 0}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: 0}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: 0}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: 0}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: 0}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: 0}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: 0}, // "Registeel" // uknown gender
	"0894": {ico: "0894", flags: 0}, // "Regieleki" // uknown gender
	"0895": {ico: "0895", flags: 0}, // "Regidrago" uknown gender
	"0486": {ico: "0486", flags: 0}, // "Regigigas" // uknown gender
	"0380": {ico: "0380", flags: 0}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: 0}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: 0}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: 0}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: 0}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: 0}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: 0}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: 0}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: 0}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: 0}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: 0}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: 0}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: 0}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: 0}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: 0}, // "Speed Deoxys" // uknown gender
	"0387": {ico: "0387", flags: 0}, // "Turtwig"
	"0388": {ico: "0388", flags: 0}, // "Grotle"
	"0389": {ico: "0389", flags: 0}, // "Torterra"
	"0390": {ico: "0390", flags: 0}, // "Chimchar"
	"0391": {ico: "0391", flags: 0}, // "Monferno"
	"0392": {ico: "0392", flags: 0}, // "Infernape"
	"0393": {ico: "0393", flags: 0}, // "Piplup"
	"0394": {ico: "0394", flags: 0}, // "Prinplup"
	"0395": {ico: "0395", flags: 0}, // "Empoleon"
//	"0396": {ico: "0396", flags: 0}, // "Starly"
	"0396-m": {ico: "0396-m", flags: 0}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: 0}, // "Starly♀"
//	"0397": {ico: "0397", flags: 0}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: 0}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: 0}, // "Staravia♀"
//	"0398": {ico: "0398", flags: 0}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: 0}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: 0}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: 0}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: 0}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: 0}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: 0}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: 0}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: 0}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: 0}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: 0}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: 0}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: 0}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: 0}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: 0}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: 0}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: 0}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: 0}, // "Shinx♀"
//	"0404": {ico: "0404", flags: 0}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: 0}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: 0}, // "Luxio♀"
//	"0405": {ico: "0405", flags: 0}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: 0}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: 0}, // "Luxray♀"
//	"0412": {ico: "0412", flags: 0}, // "Burmy"
//	"0413": {ico: "0413", flags: 0}, // "Wormadam" // female only
	"0412-plant": {ico: "0412-plant", flags: 0}, // "Burmy Plant Cloak"
	"0413-plant": {ico: "0413-plant", flags: 0}, // "Wormadam Plant Cloak" // female only
	"0412-sandy": {ico: "0412-sandy", flags: 0}, // "Burmy Sandy Cloak"
	"0413-sandy": {ico: "0413-sandy", flags: 0}, // "Wormadam Sandy Cloak" // female only
	"0412-trash": {ico: "0412-trash", flags: 0}, // "Burmy Trash Cloak"
	"0413-trash": {ico: "0413-trash", flags: 0}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: 0}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: 0}, // "Combee"
	"0415-m": {ico: "0415-m", flags: 0}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: 0}, // "Combee♀"
	"0416": {ico: "0416", flags: 0}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: 0}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: 0}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: 0}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: 0}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: 0}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: 0}, // "Buizel♀"
//	"0419": {ico: "0419", flags: 0}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: 0}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: 0}, // "Floatzel♀"
	"0420": {ico: "0420", flags: 0}, // "Cherubi"
//	"0421": {ico: "0421", flags: 0}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: 0}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: 0}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: 0}, // "Shellos"
//	"0423": {ico: "0423", flags: 0}, // "Gastrodon"
	"0422-west": {ico: "0422-west", flags: 0}, // "West Sea Shellos"
	"0423-west": {ico: "0423-west", flags: 0}, // "West Sea Gastrodon"
	"0422-east": {ico: "0422-east", flags: 0}, // "East Sea Shellos"
	"0423-east": {ico: "0423-east", flags: 0}, // "East Sea Gastrodon"
	"0425": {ico: "0425", flags: 0}, // "Drifloon"
	"0426": {ico: "0426", flags: 0}, // "Drifblim"
	"0427": {ico: "0427", flags: 0}, // "Buneary"
	"0428": {ico: "0428", flags: 0}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: 0}, // "Mega Lopunny"
	"0431": {ico: "0431", flags: 0}, // "Glameow"
	"0432": {ico: "0432", flags: 0}, // "Purugly"
	"0434": {ico: "0434", flags: 0}, // "Stunky"
	"0435": {ico: "0435", flags: 0}, // "Skuntank"
	"0436": {ico: "0436", flags: 0}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: 0}, // "Bronzong" // uknown gender
	"0441": {ico: "0441", flags: 0}, // "Chatot"
	"0442": {ico: "0442", flags: 0}, // "Spiritomb"
//	"0443": {ico: "0443", flags: 0}, // "Gible"
	"0443-m": {ico: "0443-m", flags: 0}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: 0}, // "Gible♀"
//	"0444": {ico: "0444", flags: 0}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: 0}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: 0}, // "Gabite♀"
//	"0445": {ico: "0445", flags: 0}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: 0}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: 0}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: 0}, // "Mega Garchomp"
	"0447": {ico: "0447", flags: 0}, // "Riolu"
	"0448": {ico: "0448", flags: 0}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: 0}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: 0}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: 0}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: 0}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: 0}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: 0}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: 0}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: 0}, // "Skorupi"
	"0452": {ico: "0452", flags: 0}, // "Drapion"
//	"0453": {ico: "0453", flags: 0}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: 0}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: 0}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: 0}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: 0}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: 0}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: 0}, // "Carnivine"
//	"0456": {ico: "0456", flags: 0}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: 0}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: 0}, // "Finneon♀"
//	"0457": {ico: "0457", flags: 0}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: 0}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: 0}, // "Lumineon♀"
//	"0459": {ico: "0459", flags: 0}, // "Snover"
	"0459-m": {ico: "0459-m", flags: 0}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: 0}, // "Snover♀"
//	"0460": {ico: "0460", flags: 0}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: 0}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: 0}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: 0}, // "Mega Abomasnow"
	"0479": {ico: "0479", flags: 0}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: 0}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: 0}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: 0}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: 0}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: 0}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: 0}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: 0}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: 0}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: 0}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: 0}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: 0}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: 0}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: 0}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: 0}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: 0}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: 0}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: 0}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: 0}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: 0}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: 0}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: 0}, // "Heatran"
//	"0487": {ico: "0487", flags: 0}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: 0}, // "Giratina Altered Forme" // uknown gender
//	"0487-origin": {ico: "0487-origin", flags: 0}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: 0}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: 0}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: 0}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: 0}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: 0}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: 0}, // "Shaymin Land Forme" // uknown gender
//	"0492-sky": {ico: "0492-sky", flags: 0}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: 0}, // "Arceus" // uknown gender
//	"0493-fighting": {ico: "0493-fighting", flags: 0}, // "Fighting Arceus" // uknown gender
//	"0493-flying": {ico: "0493-flying", flags: 0}, // "Flying Arceus" // uknown gender
//	"0493-poison": {ico: "0493-poison", flags: 0}, // "Poison Arceus" // uknown gender
//	"0493-ground": {ico: "0493-ground", flags: 0}, // "Ground Arceus" // uknown gender
//	"0493-rock": {ico: "0493-rock", flags: 0}, // "Rock Arceus" // uknown gender
//	"0493-bug": {ico: "0493-bug", flags: 0}, // "Bug Arceus" // uknown gender
//	"0493-ghost": {ico: "0493-ghost", flags: 0}, // "Ghost Arceus" // uknown gender
//	"0493-steel": {ico: "0493-steel", flags: 0}, // "Steel Arceus" // uknown gender
//	"0493-fire": {ico: "0493-fire", flags: 0}, // "Fire Arceus" // uknown gender
//	"0493-water": {ico: "0493-water", flags: 0}, // "Water Arceus" // uknown gender
//	"0493-grass": {ico: "0493-grass", flags: 0}, // "Grass Arceus" // uknown gender
//	"0493-electric": {ico: "0493-electric", flags: 0}, // "Electric Arceus" // uknown gender
//	"0493-psychic": {ico: "0493-psychic", flags: 0}, // "Psychic Arceus" // uknown gender
//	"0493-ice": {ico: "0493-ice", flags: 0}, // "Ice Arceus" // uknown gender
//	"0493-dragon": {ico: "0493-dragon", flags: 0}, // "Dragon Arceus" // uknown gender
//	"0493-dark": {ico: "0493-dark", flags: 0}, // "Dark Arceus" // uknown gender
//	"0493-fairy": {ico: "0493-fairy", flags: 0}, // "Fairy Arceus" // uknown gender
	"0494": {ico: "0494", flags: 0}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: 0}, // "Snivy"
	"0496": {ico: "0496", flags: 0}, // "Servine"
	"0497": {ico: "0497", flags: 0}, // "Serperior"
	"0498": {ico: "0498", flags: 0}, // "Tepig"
	"0499": {ico: "0499", flags: 0}, // "Pignite"
	"0500": {ico: "0500", flags: 0}, // "Emboar"
	"0501": {ico: "0501", flags: 0}, // "Oshawott"
	"0502": {ico: "0502", flags: 0}, // "Dewott"
	"0503": {ico: "0503", flags: 0}, // "Samurott"
	"0504": {ico: "0504", flags: 0}, // "Patrat"
	"0505": {ico: "0505", flags: 0}, // "Watchog"
	"0506": {ico: "0506", flags: 0}, // "Lillipup"
	"0507": {ico: "0507", flags: 0}, // "Herdier"
	"0508": {ico: "0508", flags: 0}, // "Stoutland"
	"0509": {ico: "0509", flags: 0}, // "Purrloin"
	"0510": {ico: "0510", flags: 0}, // "Liepard"
	"0511": {ico: "0511", flags: 0}, // "Pansage"
	"0512": {ico: "0512", flags: 0}, // "Simisage"
	"0513": {ico: "0513", flags: 0}, // "Pansear"
	"0514": {ico: "0514", flags: 0}, // "Simisear"
	"0515": {ico: "0515", flags: 0}, // "Panpour"
	"0516": {ico: "0516", flags: 0}, // "Simipour"
	"0517": {ico: "0517", flags: 0}, // "Munna"
	"0518": {ico: "0518", flags: 0}, // "Musharna"
	"0519": {ico: "0519", flags: 0}, // "Pidove"
	"0520": {ico: "0520", flags: 0}, // "Tranquill"
//	"0521": {ico: "0521", flags: 0}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: 0}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: 0}, // "Unfezan♀"
	"0522": {ico: "0522", flags: 0}, // "Blitzle"
	"0523": {ico: "0523", flags: 0}, // "Zebstrika"
	"0524": {ico: "0524", flags: 0}, // "Roggenrola"
	"0525": {ico: "0525", flags: 0}, // "Boldore"
	"0526": {ico: "0526", flags: 0}, // "Gigalith"
	"0527": {ico: "0527", flags: 0}, // "Woobat"
	"0528": {ico: "0528", flags: 0}, // "Swoobat"
	"0529": {ico: "0529", flags: 0}, // "Drilbur"
	"0530": {ico: "0530", flags: 0}, // "Excadrill"
	"0531": {ico: "0531", flags: 0}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: 0}, // "Mega Audino"
	"0532": {ico: "0532", flags: 0}, // "Timburr"
	"0533": {ico: "0533", flags: 0}, // "Gurdurr"
	"0534": {ico: "0534", flags: 0}, // "Conkeldurr"
	"0535": {ico: "0535", flags: 0}, // "Tympole"
	"0536": {ico: "0536", flags: 0}, // "Palpitoad"
	"0537": {ico: "0537", flags: 0}, // "Seismitoad"
	"0538": {ico: "0538", flags: 0}, // "Throh" // male only
	"0539": {ico: "0539", flags: 0}, // "Sawk" // male only
	"0540": {ico: "0540", flags: 0}, // "Sewaddle"
	"0541": {ico: "0541", flags: 0}, // "Swadloon"
	"0542": {ico: "0542", flags: 0}, // "Leavanny"
	"0543": {ico: "0543", flags: 0}, // "Venipede"
	"0544": {ico: "0544", flags: 0}, // "Whirlipede"
	"0545": {ico: "0545", flags: 0}, // "Scolipede"
	"0546": {ico: "0546", flags: 0}, // "Cottonee"
	"0547": {ico: "0547", flags: 0}, // "Whimsicott"
	"0548": {ico: "0548", flags: 0}, // "Petilil" // female only
	"0549": {ico: "0549", flags: 0}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: 0}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: 0}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: 0}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: 0}, // "Sandile"
	"0552": {ico: "0552", flags: 0}, // "Krokorok"
	"0553": {ico: "0553", flags: 0}, // "Krookodile"
	"0554": {ico: "0554", flags: 0}, // "Darumaka"
//	"0555": {ico: "0555", flags: 0}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: 0}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: 0}, // "Darmanitan Zen Mode"
	"0554-galar": {ico: "0554-galar", flags: 0}, // "Galarian Darumaka"
//	"0555-galar": {ico: "0555-galar", flags: 0}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: 0}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: 0}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: 0}, // "Maractus"
	"0557": {ico: "0557", flags: 0}, // "Dwebble"
	"0558": {ico: "0558", flags: 0}, // "Crustle"
	"0559": {ico: "0559", flags: 0}, // "Scraggy"
	"0560": {ico: "0560", flags: 0}, // "Scrafty"
	"0561": {ico: "0561", flags: 0}, // "Sigilyph"
	"0562": {ico: "0562", flags: 0}, // "Yamask"
	"0563": {ico: "0563", flags: 0}, // "Cofagrigus"
	"0562-galar": {ico: "0562-galar", flags: 0}, // "Galarian Yamask"
	"0867": {ico: "0867", flags: 0}, // "Runerigus"
	"0568": {ico: "0568", flags: 0}, // "Trubbish"
	"0569": {ico: "0569", flags: 0}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: 0}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: 0}, // "Zorua"
	"0571": {ico: "0571", flags: 0}, // "Zoroark"
	"0572": {ico: "0572", flags: 0}, // "Minccino"
	"0573": {ico: "0573", flags: 0}, // "Cinccino"
	"0574": {ico: "0574", flags: 0}, // "Gothita"
	"0575": {ico: "0575", flags: 0}, // "Gothorita"
	"0576": {ico: "0576", flags: 0}, // "Gothitelle"
	"0577": {ico: "0577", flags: 0}, // "Solosis"
	"0578": {ico: "0578", flags: 0}, // "Duosion"
	"0579": {ico: "0579", flags: 0}, // "Reuniclus"
	"0580": {ico: "0580", flags: 0}, // "Ducklett"
	"0581": {ico: "0581", flags: 0}, // "Swanna"
	"0582": {ico: "0582", flags: 0}, // "Vanillite"
	"0583": {ico: "0583", flags: 0}, // "Vanillish"
	"0584": {ico: "0584", flags: 0}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: 0}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: 0}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: 0}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: 0}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: 0}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: 0}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: 0}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: 0}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: 0}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: 0}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: 0}, // "Emolga"
	"0588": {ico: "0588", flags: 0}, // "Karrablast"
	"0589": {ico: "0589", flags: 0}, // "Escavalier"
	"0616": {ico: "0616", flags: 0}, // "Shelmet"
	"0617": {ico: "0617", flags: 0}, // "Accelgor"
	"0590": {ico: "0590", flags: 0}, // "Foongus"
	"0591": {ico: "0591", flags: 0}, // "Amoonguss"
//	"0592": {ico: "0592", flags: 0}, // "Frillish"
//	"0593": {ico: "0593", flags: 0}, // "Jellicent"
	"0592-m": {ico: "0592-m", flags: 0}, // "Frillish♂"
	"0593-m": {ico: "0593-m", flags: 0}, // "Jellicent♂"
	"0592-f": {ico: "0592-f", flags: 0}, // "Frillish♀"
	"0593-f": {ico: "0593-f", flags: 0}, // "Jellicent♀"
	"0594": {ico: "0594", flags: 0}, // "Alomomola"
	"0595": {ico: "0595", flags: 0}, // "Joltik"
	"0596": {ico: "0596", flags: 0}, // "Galvantula"
	"0597": {ico: "0597", flags: 0}, // "Ferroseed"
	"0598": {ico: "0598", flags: 0}, // "Ferrothorn"
	"0599": {ico: "0599", flags: 0}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: 0}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: 0}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: 0}, // "Tynamo"
	"0603": {ico: "0603", flags: 0}, // "Eelektrik"
	"0604": {ico: "0604", flags: 0}, // "Eelektross"
	"0605": {ico: "0605", flags: 0}, // "Elgyem"
	"0606": {ico: "0606", flags: 0}, // "Beheeyem"
	"0607": {ico: "0607", flags: 0}, // "Litwick"
	"0608": {ico: "0608", flags: 0}, // "Lampent"
	"0609": {ico: "0609", flags: 0}, // "Chandelure"
	"0610": {ico: "0610", flags: 0}, // "Axew"
	"0611": {ico: "0611", flags: 0}, // "Fraxure"
	"0612": {ico: "0612", flags: 0}, // "Haxorus"
	"0613": {ico: "0613", flags: 0}, // "Cubchoo"
	"0614": {ico: "0614", flags: 0}, // "Beartic"
	"0615": {ico: "0615", flags: 0}, // "Cryogonal" // uknown gender
	"0618": {ico: "0618", flags: 0}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: 0}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: 0}, // "Mienfoo"
	"0620": {ico: "0620", flags: 0}, // "Mienshao"
	"0621": {ico: "0621", flags: 0}, // "Druddigon"
	"0622": {ico: "0622", flags: 0}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: 0}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: 0}, // "Pawniard"
	"0625": {ico: "0625", flags: 0}, // "Bisharp"
	"0626": {ico: "0626", flags: 0}, // "Bouffalant"
	"0627": {ico: "0627", flags: 0}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: 0}, // "Braviary" // male only
	"0629": {ico: "0629", flags: 0}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: 0}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: 0}, // "Heatmor"
	"0632": {ico: "0632", flags: 0}, // "Durant"
	"0633": {ico: "0633", flags: 0}, // "Deino"
	"0634": {ico: "0634", flags: 0}, // "Zweilous"
	"0635": {ico: "0635", flags: 0}, // "Hydreigon"
	"0636": {ico: "0636", flags: 0}, // "Larvesta"
	"0637": {ico: "0637", flags: 0}, // "Volcarona"
	"0638": {ico: "0638", flags: 0}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: 0}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: 0}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: 0}, // "Tornadus" // male only
//	"0642": {ico: "0642", flags: 0}, // "Thundurus" // male only
//	"0645": {ico: "0645", flags: 0}, // "Landorus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: 0}, // "Incarnate Forme Tornadus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: 0}, // "Incarnate Forme Thundurus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: 0}, // "Incarnate Forme Landorus" // male only
	"0641-therian": {ico: "0641-therian", flags: 0}, // "Therian Forme Tornadus" // male only
	"0642-therian": {ico: "0642-therian", flags: 0}, // "Therian Forme Thundurus" // male only
	"0645-therian": {ico: "0645-therian", flags: 0}, // "Therian Forme Landorus" // male only
	"0643": {ico: "0643", flags: 0}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: 0}, // "Zekrom" // uknown gender
	"0646": {ico: "0646", flags: 0}, // "Kyurem" // uknown gender
//	"0646-white": {ico: "0646-white", flags: 0}, // "White Kyurem" // uknown gender
//	"0646-black": {ico: "0646-black", flags: 0}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: 0}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: 0}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: 0}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: 0}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: 0}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: 0}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: 0}, // "Genesect" // uknown gender
//	"0649-douse": {ico: "0649-douse", flags: 0}, // "Douse Drive Genesect" // uknown gender
//	"0649-shock": {ico: "0649-shock", flags: 0}, // "Shock Drive Genesect" // uknown gender
//	"0649-burn": {ico: "0649-burn", flags: 0}, // "Burn Drive Genesect" // uknown gender
//	"0649-chill": {ico: "0649-chill", flags: 0}, // "Chill Drive Genesect" // uknown gender
	"0650": {ico: "0650", flags: 0}, // "Chespin"
	"0651": {ico: "0651", flags: 0}, // "Quilladin"
	"0652": {ico: "0652", flags: 0}, // "Chesnaught"
	"0653": {ico: "0653", flags: 0}, // "Fennekin"
	"0654": {ico: "0654", flags: 0}, // "Braixen"
	"0655": {ico: "0655", flags: 0}, // "Delphox"
	"0656": {ico: "0656", flags: 0}, // "Froakie"
	"0657": {ico: "0657", flags: 0}, // "Frogadier"
	"0658": {ico: "0658", flags: 0}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: 0}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: 0}, // "Bunnelby"
	"0660": {ico: "0660", flags: 0}, // "Diggersby"
	"0661": {ico: "0661", flags: 0}, // "Fletchling"
	"0662": {ico: "0662", flags: 0}, // "Fletchinder"
	"0663": {ico: "0663", flags: 0}, // "Talonflame"
	"0664": {ico: "0664", flags: 0}, // "Scatterbug"
	"0665": {ico: "0665", flags: 0}, // "Spewpa"
//	"0666": {ico: "0666", flags: 0}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: 0}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: 0}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: 0}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: 0}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: 0}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: 0}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: 0}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: 0}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: 0}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: 0}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: 0}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: 0}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: 0}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: 0}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: 0}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: 0}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: 0}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: 0}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: 0}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: 0}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: 0}, // "Litleo"
//	"0668": {ico: "0668", flags: 0}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: 0}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: 0}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: 0}, // "Flabébé" // female only
//	"0670": {ico: "0670", flags: 0}, // "Floette" // female only
//	"0671": {ico: "0671", flags: 0}, // "Florges" // female only
	"0669-red": {ico: "0669-red", flags: 0}, // "Red Flower Flabébé" // female only
	"0670-red": {ico: "0670-red", flags: 0}, // "Red Flower Floette" // female only
	"0671-red": {ico: "0671-red", flags: 0}, // "Red Flower Florges" // female only
	"0669-yellow": {ico: "0669-yellow", flags: 0}, // "Yellow Flower Flabébé" // female only
	"0670-yellow": {ico: "0670-yellow", flags: 0}, // "Yellow Flower Floette" // female only
	"0671-yellow": {ico: "0671-yellow", flags: 0}, // "Yellow Flower Florges" // female only
	"0669-orange": {ico: "0669-orange", flags: 0}, // "Orange Flower Flabébé" // female only
	"0670-orange": {ico: "0670-orange", flags: 0}, // "Orange Flower Floette" // female only
	"0671-orange": {ico: "0671-orange", flags: 0}, // "Orange Flower Florges" // female only
	"0669-blue": {ico: "0669-blue", flags: 0}, // "Blue Flower Flabébé" // female only
	"0670-blue": {ico: "0670-blue", flags: 0}, // "Blue Flower Floette" // female only
	"0671-blue": {ico: "0671-blue", flags: 0}, // "Blue Flower Florges" // female only
	"0669-white": {ico: "0669-white", flags: 0}, // "White Flower Flabébé" // female only
	"0670-white": {ico: "0670-white", flags: 0}, // "White Flower Floette" // female only
	"0671-white": {ico: "0671-white", flags: 0}, // "White Flower Florges" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: 0}, // "Eternal Flower Floette" // female only
	"0672": {ico: "0672", flags: 0}, // "Skiddo"
	"0673": {ico: "0673", flags: 0}, // "Gogoat"
	"0674": {ico: "0674", flags: 0}, // "Pancham"
	"0675": {ico: "0675", flags: 0}, // "Pangoro"
	"0676": {ico: "0676", flags: 0}, // "Furfrou"
//	"0676-heart": {ico: "0676-heart", flags: 0}, // "Heart Trim Furfrou"
//	"0676-star": {ico: "0676-star", flags: 0}, // "Star Trim Furfrou"
//	"0676-diamond": {ico: "0676-diamond", flags: 0}, // "Diamond Trim Furfrou"
//	"0676-debutante": {ico: "0676-debutante", flags: 0}, // "Debutante Trim Furfrou"
//	"0676-matron": {ico: "0676-matron", flags: 0}, // "Matron Trim Furfrou"
//	"0676-dandy": {ico: "0676-dandy", flags: 0}, // "Dandy Trim Furfrou"
//	"0676-le-reine": {ico: "0676-le-reine", flags: 0}, // "Le Reine Trim Furfrou"
//	"0676-kabuki": {ico: "0676-kabuki", flags: 0}, // "Kabuki Trim Furfrou"
//	"0676-pharaoh": {ico: "0676-pharaoh", flags: 0}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: 0}, // "Espurr"
//	"0678": {ico: "0678", flags: 0}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: 0}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: 0}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: 0}, // "Honedge"
	"0680": {ico: "0680", flags: 0}, // "Doublade"
//	"0681": {ico: "0681", flags: 0}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: 0}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: 0}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: 0}, // "Spritzee"
	"0683": {ico: "0683", flags: 0}, // "Aromatisse"
	"0684": {ico: "0684", flags: 0}, // "Swirlix"
	"0685": {ico: "0685", flags: 0}, // "Slurpuff"
	"0686": {ico: "0686", flags: 0}, // "Inkay"
	"0687": {ico: "0687", flags: 0}, // "Malamar"
	"0688": {ico: "0688", flags: 0}, // "Binacle"
	"0689": {ico: "0689", flags: 0}, // "Barbaracle"
	"0690": {ico: "0690", flags: 0}, // "Skrelp"
	"0691": {ico: "0691", flags: 0}, // "Dragalge"
	"0692": {ico: "0692", flags: 0}, // "Clauncher"
	"0693": {ico: "0693", flags: 0}, // "Clawitzer"
	"0694": {ico: "0694", flags: 0}, // "Helioptile"
	"0695": {ico: "0695", flags: 0}, // "Heliolisk"
	"0701": {ico: "0701", flags: 0}, // "Hawlucha"
	"0702": {ico: "0702", flags: 0}, // "Dedenne"
	"0703": {ico: "0703", flags: 0}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: 0}, // "Goomy"
	"0705": {ico: "0705", flags: 0}, // "Sliggoo"
	"0706": {ico: "0706", flags: 0}, // "Goodra"
	"0707": {ico: "0707", flags: 0}, // "Klefki"
	"0708": {ico: "0708", flags: 0}, // "Phantump"
	"0709": {ico: "0709", flags: 0}, // "Trevenant"
//	"0710": {ico: "0710", flags: 0}, // "Pumpkaboo"
//	"0711": {ico: "0711", flags: 0}, // "Gourgeist"
	"0710-average": {ico: "0710-average", flags: 0}, // "Average Size Pumpkaboo"
	"0711-average": {ico: "0711-average", flags: 0}, // "Average Size Gourgeist"
	"0710-small": {ico: "0710-small", flags: 0}, // "Small Size Pumpkaboo"
	"0711-small": {ico: "0711-small", flags: 0}, // "Small Size Gourgeist"
	"0710-large": {ico: "0710-large", flags: 0}, // "Large Size Pumpkaboo"
	"0711-large": {ico: "0711-large", flags: 0}, // "Large Size Gourgeist"
	"0710-super": {ico: "0710-super", flags: 0}, // "Super Size Pumpkaboo"
	"0711-super": {ico: "0711-super", flags: 0}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: 0}, // "Bergmite"
	"0713": {ico: "0713", flags: 0}, // "Avalugg"
	"0714": {ico: "0714", flags: 0}, // "Noibat"
	"0715": {ico: "0715", flags: 0}, // "Noivern"
//	"0716": {ico: "0716", flags: 0}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: 0}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: 0}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: 0}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: 0}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: 0}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: 0}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: 0}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: 0}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: 0}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: 0}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: 0}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: 0}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: 0}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: 0}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: 0}, // "Volcanion" // uknown gender
	"0722": {ico: "0722", flags: 0}, // "Rowlet"
	"0723": {ico: "0723", flags: 0}, // "Dartrix"
	"0724": {ico: "0724", flags: 0}, // "Decidueye"
	"0725": {ico: "0725", flags: 0}, // "Litten"
	"0726": {ico: "0726", flags: 0}, // "Torracat"
	"0727": {ico: "0727", flags: 0}, // "Incineroar"
	"0728": {ico: "0728", flags: 0}, // "Popplio"
	"0729": {ico: "0729", flags: 0}, // "Brionne"
	"0730": {ico: "0730", flags: 0}, // "Primarina"
	"0731": {ico: "0731", flags: 0}, // "Pikipek"
	"0732": {ico: "0732", flags: 0}, // "Trumbeak"
	"0733": {ico: "0733", flags: 0}, // "Toucannon"
	"0734": {ico: "0734", flags: 0}, // "Yungoos"
	"0735": {ico: "0735", flags: 0}, // "Gumshoos"
	"0736": {ico: "0736", flags: 0}, // "Grubbin"
	"0737": {ico: "0737", flags: 0}, // "Charjabug"
	"0738": {ico: "0738", flags: 0}, // "Vikavolt"
	"0739": {ico: "0739", flags: 0}, // "Crabrawler"
	"0740": {ico: "0740", flags: 0}, // "Crabominable"
//	"0741": {ico: "0741", flags: 0}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: 0}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: 0}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: 0}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: 0}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: 0}, // "Cutiefly"
	"0743": {ico: "0743", flags: 0}, // "Ribombee"
	"0744": {ico: "0744", flags: 0}, // "Rockruff"
//	"0745": {ico: "0745", flags: 0}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: 0}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: 0}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: 0}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: 0}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: 0}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: 0}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: 0}, // "Mareanie"
	"0748": {ico: "0748", flags: 0}, // "Toxapex"
	"0749": {ico: "0749", flags: 0}, // "Mudbray"
	"0750": {ico: "0750", flags: 0}, // "Mudsdale"
	"0751": {ico: "0751", flags: 0}, // "Dewpider"
	"0752": {ico: "0752", flags: 0}, // "Araquanid"
	"0753": {ico: "0753", flags: 0}, // "Fomantis"
	"0754": {ico: "0754", flags: 0}, // "Lurantis"
	"0755": {ico: "0755", flags: 0}, // "Morelull"
	"0756": {ico: "0756", flags: 0}, // "Shiinotic"
	"0757": {ico: "0757", flags: 0}, // "Salandit"
	"0758": {ico: "0758", flags: 0}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: 0}, // "Stufful"
	"0760": {ico: "0760", flags: 0}, // "Bewear"
	"0761": {ico: "0761", flags: 0}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: 0}, // "Steenee" // female only
	"0763": {ico: "0763", flags: 0}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: 0}, // "Comfey"
	"0765": {ico: "0765", flags: 0}, // "Oranguru"
	"0766": {ico: "0766", flags: 0}, // "Passimian"
	"0767": {ico: "0767", flags: 0}, // "Wimpod"
	"0768": {ico: "0768", flags: 0}, // "Golisopod"
	"0769": {ico: "0769", flags: 0}, // "Sandygast"
	"0770": {ico: "0770", flags: 0}, // "Palossand"
	"0771": {ico: "0771", flags: 0}, // "Pyukumuku"
	"0772": {ico: "0772", flags: 0}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: 0}, // "Silvally" // uknown gender
//	"0773-fighting": {ico: "0773-fighting", flags: 0}, // "Silvally Type: Fighting" // uknown gender
//	"0773-flying": {ico: "0773-flying", flags: 0}, // "Silvally Type: Flying" // uknown gender
//	"0773-poison": {ico: "0773-poison", flags: 0}, // "Silvally Type: Poison" // uknown gender
//	"0773-ground": {ico: "0773-ground", flags: 0}, // "Silvally Type: Ground" // uknown gender
//	"0773-rock": {ico: "0773-rock", flags: 0}, // "Silvally Type: Rock" // uknown gender
//	"0773-bug": {ico: "0773-bug", flags: 0}, // "Silvally Type: Bug" // uknown gender
//	"0773-ghost": {ico: "0773-ghost", flags: 0}, // "Silvally Type: Ghost" // uknown gender
//	"0773-steel": {ico: "0773-steel", flags: 0}, // "Silvally Type: Steel" // uknown gender
//	"0773-fire": {ico: "0773-fire", flags: 0}, // "Silvally Type: Fire" // uknown gender
//	"0773-water": {ico: "0773-water", flags: 0}, // "Silvally Type: Water" // uknown gender
//	"0773-grass": {ico: "0773-grass", flags: 0}, // "Silvally Type: Grass" // uknown gender
//	"0773-electric": {ico: "0773-electric", flags: 0}, // "Silvally Type: Electric" // uknown gender
//	"0773-psychic": {ico: "0773-psychic", flags: 0}, // "Silvally Type: Psychic" // uknown gender
//	"0773-ice": {ico: "0773-ice", flags: 0}, // "Silvally Type: Ice" // uknown gender
//	"0773-dragon": {ico: "0773-dragon", flags: 0}, // "Silvally Type: Dragon" // uknown gender
//	"0773-dark": {ico: "0773-dark", flags: 0}, // "Silvally Type: Dark" // uknown gender
//	"0773-fairy": {ico: "0773-fairy", flags: 0}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: 0}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: 0}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: 0}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: 0}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: 0}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: 0}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: 0}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: 0}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: 0}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: 0}, // "Komala"
	"0776": {ico: "0776", flags: 0}, // "Turtonator"
	"0777": {ico: "0777", flags: 0}, // "Togedemaru"
//	"0778": {ico: "0778", flags: 0}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: 0}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: 0}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: 0}, // "Bruxish"
	"0780": {ico: "0780", flags: 0}, // "Drampa"
	"0781": {ico: "0781", flags: 0}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: 0}, // "Jangmo-o"
	"0783": {ico: "0783", flags: 0}, // "Hakamo-o"
	"0784": {ico: "0784", flags: 0}, // "Kommo-o"
	"0785": {ico: "0785", flags: 0}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: 0}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: 0}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: 0}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: 0}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: 0}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: 0}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: 0}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: 0}, // "Lunala", // uknown gender
//	"0792-full-moon": {ico: "0792-full-moon", flags: 0}, // "Full Monn Lunala", // uknown gender
	"0800": {ico: "0800", flags: 0}, // "Necrozma" // uknown gender
//	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: 0}, // "Dusk Mane Necrozma" // uknown gender
//	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: 0}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: 0}, // "Ultra Necrozma" // uknown gender
	"0793": {ico: "0793", flags: 0}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: 0}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: 0}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: 0}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: 0}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: 0}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: 0}, // "Guzzlord" // uknown gender
	"0801": {ico: "0801", flags: 0}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: 0}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: 0}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: 0}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: 0}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: 0}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: 0}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: 0}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: 0}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: 0}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: 0}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: 0}, // "Gigantamax Melmetal" // uknown gender
	"0810": {ico: "0810", flags: 0}, // "Grookey"
	"0811": {ico: "0811", flags: 0}, // "Thwackey"
	"0812": {ico: "0812", flags: 0}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: 0}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: 0}, // "Scorbunny"
	"0814": {ico: "0814", flags: 0}, // "Raboot"
	"0815": {ico: "0815", flags: 0}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: 0}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: 0}, // "Sobble"
	"0817": {ico: "0817", flags: 0}, // "Drizzile"
	"0818": {ico: "0818", flags: 0}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: 0}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: 0}, // "Skwovet"
	"0820": {ico: "0820", flags: 0}, // "Greedent"
	"0821": {ico: "0821", flags: 0}, // "Rookidee"
	"0822": {ico: "0822", flags: 0}, // "Corvisquire"
	"0823": {ico: "0823", flags: 0}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: 0}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: 0}, // "Blipbug"
	"0825": {ico: "0825", flags: 0}, // "Dottler"
	"0826": {ico: "0826", flags: 0}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: 0}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: 0}, // "Nickit"
	"0828": {ico: "0828", flags: 0}, // "Thievul"
	"0829": {ico: "0829", flags: 0}, // "Gossifleur"
	"0830": {ico: "0830", flags: 0}, // "Eldegoss"
	"0831": {ico: "0831", flags: 0}, // "Wooloo"
	"0832": {ico: "0832", flags: 0}, // "Dubwool"
	"0833": {ico: "0833", flags: 0}, // "Chewtle"
	"0834": {ico: "0834", flags: 0}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: 0}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: 0}, // "Yamper"
	"0836": {ico: "0836", flags: 0}, // "Boltund"
	"0837": {ico: "0837", flags: 0}, // "Rolycoly"
	"0838": {ico: "0838", flags: 0}, // "Carkol"
	"0839": {ico: "0839", flags: 0}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: 0}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: 0}, // "Applin"
	"0841": {ico: "0841", flags: 0}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: 0}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: 0}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: 0}, // "Silicobra"
	"0844": {ico: "0844", flags: 0}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: 0}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: 0}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: 0}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: 0}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: 0}, // "Arrokuda"
	"0847": {ico: "0847", flags: 0}, // "Barraskewda"
	"0848": {ico: "0848", flags: 0}, // "Toxel"
//	"0849": {ico: "0849", flags: 0}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: 0}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: 0}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: 0}, // "Sizzlipede"
	"0851": {ico: "0851", flags: 0}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: 0}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: 0}, // "Clobbopus"
	"0853": {ico: "0853", flags: 0}, // "Grapploct"
//	"0854": {ico: "0854", flags: 0}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854", flags: 0}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854", flags: 0}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: 0}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855", flags: 0}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855", flags: 0}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: 0}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: 0}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: 0}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: 0}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: 0}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: 0}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: 0}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: 0}, // "Gigantamax Grimmsnarl" // male only
	"0868": {ico: "0868", flags: 0}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: 0}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: 0}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: 0}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: 0}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: 0}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: 0}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: 0}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: 0}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: 0}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: 0}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: 0}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: 0}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: 0}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: 0}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: 0}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: 0}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: 0}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: 0}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: 0}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: 0}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: 0}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: 0}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: 0}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: 0}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: 0}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: 0}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: 0}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: 0}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: 0}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: 0}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: 0}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: 0}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: 0}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: 0}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: 0}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: 0}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: 0}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: 0}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: 0}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: 0}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: 0}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: 0}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: 0}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: 0}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: 0}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: 0}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: 0}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: 0}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: 0}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: 0}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: 0}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: 0}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: 0}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: 0}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: 0}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: 0}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: 0}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: 0}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: 0}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: 0}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: 0}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: 0}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: 0}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: 0}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: 0}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: 0}, // "Pincurchin"
	"0872": {ico: "0872", flags: 0}, // "Snom"
	"0873": {ico: "0873", flags: 0}, // "Frosmoth"
	"0874": {ico: "0874", flags: 0}, // "Stonjourner"
//	"0875": {ico: "0875", flags: 0}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: 0}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: 0}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: 0}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: 0}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: 0}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: 0}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: 0}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: 0}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: 0}, // "Cufant"
	"0879": {ico: "0879", flags: 0}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: 0}, // "Gigantamax Copperajah"
	"0884": {ico: "0884", flags: 0}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: 0}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: 0}, // "Dreepy"
	"0886": {ico: "0886", flags: 0}, // "Drakloak"
	"0887": {ico: "0887", flags: 0}, // "Dragapult"
//	"0888": {ico: "0888", flags: 0}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: 0}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: 0}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: 0}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: 0}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: 0}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: 0}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: 0}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: 0}, // "Kubfu"
//	"0892": {ico: "0892", flags: 0}, // "Urshifu"
	"0892-single": {ico: "0892-single", flags: 0}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: 0}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: 0}, // "Rapid Strike Style Urshifu"
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: 0}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: 0}, // "Zarude"
	"0893-dada": {ico: "0893-dada", flags: 0}, // "Dada Zarude" // unknown gender
	"0896": {ico: "0896", flags: 0}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: 0}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: 0}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: 0}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: 0}, // "Shadow Rider Calyrex" // uknown gender
}

const _Regdex_nHome	=
{
//	==============
//	 Generation 1
//	==============
	"0001": {ico: "0001", flags: 0}, // "Bulbasaur"
	"0002": {ico: "0002", flags: 0}, // "Ivysaur"
//	"0003": {ico: "0003", flags: 0}, // "Venusaur"
	"0003-m": {ico: "0003-m", flags: 0}, // "Venusaur♂"
	"0003-f": {ico: "0003-f", flags: 0}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: 0}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: 0}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: 0}, // "Charmander"
	"0005": {ico: "0005", flags: 0}, // "Charmeleon"
	"0006": {ico: "0006", flags: 0}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: 0}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: 0}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: 0}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: 0}, // "Squirtle"
	"0008": {ico: "0008", flags: 0}, // "Wartortle"
	"0009": {ico: "0009", flags: 0}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: 0}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: 0}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: 0}, // "Caterpie"
	"0011": {ico: "0011", flags: 0}, // "Metapod"
//	"0012": {ico: "0012", flags: 0}, // "Butterfree"
	"0012-m": {ico: "0012-m", flags: 0}, // "Butterfree♂"
	"0012-f": {ico: "0012-f", flags: 0}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: 0}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: 0}, // "Weedle"
	"0014": {ico: "0014", flags: 0}, // "Kakuna"
	"0015": {ico: "0015", flags: 0}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: 0}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: 0}, // "Pidgey"
	"0017": {ico: "0017", flags: 0}, // "Pidgeotto"
	"0018": {ico: "0018", flags: 0}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: 0}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: 0}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: 0}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: 0}, // "Rattata♀"
	"0019-alola": {ico: "0019-alola", flags: 0}, // "Alolan Rattata"
//	"0020": {ico: "0020", flags: 0}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: 0}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: 0}, // "Raticate♀"
	"0020-alola": {ico: "0020-alola", flags: 0}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: 0}, // "Spearow"
	"0022": {ico: "0022", flags: 0}, // "Fearow"
	"0023": {ico: "0023", flags: 0}, // "Ekans"
	"0024": {ico: "0024", flags: 0}, // "Arbok"
//	"0025": {ico: "0025", flags: 0}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: 0}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: 0}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: 0}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: 0}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: 0}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: 0}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: 0}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: 0}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: 0}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: 0}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: 0}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: 0}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: 0}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: 0}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: 0}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: 0}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: 0}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: 0}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: 0}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: 0}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: 0}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: 0}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: 0}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: 0}, // "Sandshrew"
	"0027-alola": {ico: "0027-alola", flags: 0}, // "Alolan Sandshrew"
	"0028": {ico: "0028", flags: 0}, // "Sandslash"
	"0028-alola": {ico: "0028-alola", flags: 0}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: 0}, // "Nidoran"
	"0029-f": {ico: "0029-f", flags: 0}, // "Nidoran♀"
	"0030": {ico: "0030", flags: 0}, // "Nidorina"
	"0031": {ico: "0031", flags: 0}, // "Nidoqueen"
//	"0032": {ico: "0032", flags: 0}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: 0}, // "Nidoran♂"
	"0033": {ico: "0033", flags: 0}, // "Nidorino"
	"0034": {ico: "0034", flags: 0}, // "Nidoking"
	"0035": {ico: "0035", flags: 0}, // "Clefairy"
	"0036": {ico: "0036", flags: 0}, // "Clefable"
	"0037": {ico: "0037", flags: 0}, // "Vulpix"
	"0037-alola": {ico: "0037-alola", flags: 0}, // "Alolan Vulpix"
	"0038": {ico: "0038", flags: 0}, // "Ninetales"
	"0038-alola": {ico: "0038-alola", flags: 0}, // "Alolan Ninetales"
	"0039": {ico: "0039", flags: 0}, // "Jigglypuff"
	"0040": {ico: "0040", flags: 0}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: 0}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: 0}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: 0}, // "Zubat♀"
//	"0042": {ico: "0042", flags: 0}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: 0}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: 0}, // "Golbat♀"
	"0043": {ico: "0043", flags: 0}, // "Oddish"
//	"0044": {ico: "0044", flags: 0}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: 0}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: 0}, // "Gloom♀"
//	"0045": {ico: "0045", flags: 0}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: 0}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: 0}, // "Vileplume♀"
	"0046": {ico: "0046", flags: 0}, // "Paras"
	"0047": {ico: "0047", flags: 0}, // "Parasect"
	"0048": {ico: "0048", flags: 0}, // "Venonat"
	"0049": {ico: "0049", flags: 0}, // "Venomoth"
	"0050": {ico: "0050", flags: 0}, // "Diglett"
	"0050-alola": {ico: "0050-alola", flags: 0}, // "Alolan Diglett"
	"0051": {ico: "0051", flags: 0}, // "Dugtrio"
	"0051-alola": {ico: "0051-alola", flags: 0}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: 0}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: 0}, // "Gigantamax Meowth"
	"0052-alola": {ico: "0052-alola", flags: 0}, // "Alolan Meowth"
	"0052-galar": {ico: "0052-galar", flags: 0}, // "Galarian Meowth"
	"0053": {ico: "0053", flags: 0}, // "Persian"
	"0053-alola": {ico: "0053-alola", flags: 0}, // "Alolan Persian"
	"0054": {ico: "0054", flags: 0}, // "Psyduck"
	"0055": {ico: "0055", flags: 0}, // "Golduck"
	"0056": {ico: "0056", flags: 0}, // "Mankey"
	"0057": {ico: "0057", flags: 0}, // "Primeape"
	"0058": {ico: "0058", flags: 0}, // "Growlithe"
	"0059": {ico: "0059", flags: 0}, // "Arcanine"
	"0060": {ico: "0060", flags: 0}, // "Poliwag"
	"0061": {ico: "0061", flags: 0}, // "Poliwhirl"
	"0062": {ico: "0062", flags: 0}, // "Poliwrath"
	"0063": {ico: "0063", flags: 0}, // "Abra"
//	"0064": {ico: "0064", flags: 0}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: 0}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: 0}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: 0}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: 0}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: 0}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: 0}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: 0}, // "Machop"
	"0067": {ico: "0067", flags: 0}, // "Machoke"
	"0068": {ico: "0068", flags: 0}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: 0}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: 0}, // "Bellsprout"
	"0070": {ico: "0070", flags: 0}, // "Weepinbell"
	"0071": {ico: "0071", flags: 0}, // "Victreebel"
	"0072": {ico: "0072", flags: 0}, // "Tentacool"
	"0073": {ico: "0073", flags: 0}, // "Tentacruel"
	"0074": {ico: "0074", flags: 0}, // "Geodude"
	"0074-alola": {ico: "0074-alola", flags: 0}, // "Alolan Geodude"
	"0075": {ico: "0075", flags: 0}, // "Graveler"
	"0075-alola": {ico: "0075-alola", flags: 0}, // "Alolan Graveler"
	"0076": {ico: "0076", flags: 0}, // "Golem"
	"0076-alola": {ico: "0076-alola", flags: 0}, // "Alolan Golem"
	"0077": {ico: "0077", flags: 0}, // "Ponyta"
	"0077-galar": {ico: "0077-galar", flags: 0}, // "Galarian Ponyta"
	"0078": {ico: "0078", flags: 0}, // "Rapidash"
	"0078-galar": {ico: "0078-galar", flags: 0}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: 0}, // "Slowpoke"
	"0079-galar": {ico: "0079-galar", flags: 0}, // "Galarian Slowpoke"
	"0080": {ico: "0080", flags: 0}, // "Slowbro"
	"0080-galar": {ico: "0080-galar", flags: 0}, // "Galarian Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: 0}, // "Mega Slowbro"
	"0081": {ico: "0081", flags: 0}, // "Magnemite"
	"0082": {ico: "0082", flags: 0}, // "Magneton"
	"0083": {ico: "0083", flags: 0}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: 0}, // "Galarian Farfetch'd"
//	"0084": {ico: "0084", flags: 0}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: 0}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: 0}, // "Doduo♀"
//	"0085": {ico: "0085", flags: 0}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: 0}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: 0}, // "Dodrio♀"
	"0086": {ico: "0086", flags: 0}, // "Seel"
	"0087": {ico: "0087", flags: 0}, // "Dewgong"
	"0088": {ico: "0088", flags: 0}, // "Grimer"
	"0088-alola": {ico: "0088-alola", flags: 0}, // "Alolan Grimer"
	"0089": {ico: "0089", flags: 0}, // "Muk"
	"0089-alola": {ico: "0089-alola", flags: 0}, // "Alolan Muk"
	"0090": {ico: "0090", flags: 0}, // "Shellder"
	"0091": {ico: "0091", flags: 0}, // "Cloyster"
	"0092": {ico: "0092", flags: 0}, // "Gastly"
	"0093": {ico: "0093", flags: 0}, // "Haunter"
	"0094": {ico: "0094", flags: 0}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: 0}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: 0}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: 0}, // "Onix"
	"0096": {ico: "0096", flags: 0}, // "Drowzee"
//	"0097": {ico: "0097", flags: 0}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: 0}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: 0}, // "Hypno♀"
	"0098": {ico: "0098", flags: 0}, // "Krabby"
	"0099": {ico: "0099", flags: 0}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: 0}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: 0}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: 0}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: 0}, // "Exeggcute"
	"0103": {ico: "0103", flags: 0}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: 0}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: 0}, // "Cubone"
	"0105": {ico: "0105", flags: 0}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: 0}, // "Alolan Marowak"
	"0106": {ico: "0106", flags: 0}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: 0}, // "Hitmonchan" // male only
	"0108": {ico: "0108", flags: 0}, // "Lickitung"
	"0109": {ico: "0109", flags: 0}, // "Koffing"
	"0110": {ico: "0110", flags: 0}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: 0}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: 0}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: 0}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: 0}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: 0}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: 0}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: 0}, // "Rhydon♀"
	"0113": {ico: "0113", flags: 0}, // "Chansey" // female only
	"0114": {ico: "0114", flags: 0}, // "Tangela"
	"0115": {ico: "0115", flags: 0}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: 0}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: 0}, // "Horsea"
	"0117": {ico: "0117", flags: 0}, // "Seadra"
//	"0118": {ico: "0118", flags: 0}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: 0}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: 0}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: 0}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: 0}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: 0}, // "Seaking♀"
		"0120": {ico: "0120", flags: 0}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: 0}, // "Starmie" // uknown gender
	"0122": {ico: "0122", flags: 0}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: 0}, // "Galarian Mr. Mime"
//	"0123": {ico: "0123", flags: 0}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: 0}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: 0}, // "Scyther♀"
	"0124": {ico: "0124", flags: 0}, // "Jynx" // female only
	"0125": {ico: "0125", flags: 0}, // "Electabuzz"
	"0126": {ico: "0126", flags: 0}, // "Magmar"
	"0127": {ico: "0127", flags: 0}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: 0}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: 0}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: 0}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: 0}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: 0}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: 0}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: 0}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: 0}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: 0}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: 0}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: 0}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: 0}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: 0}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: 0}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: 0}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: 0}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: 0}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: 0}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: 0}, // "Vaporeon"
	"0135": {ico: "0135", flags: 0}, // "Jolteon"
	"0136": {ico: "0136", flags: 0}, // "Flareon"
	"0137": {ico: "0137", flags: 0}, // "Porygon" // uknown gender
	"0138": {ico: "0138", flags: 0}, // "Omanyte"
	"0139": {ico: "0139", flags: 0}, // "Omastar"
	"0140": {ico: "0140", flags: 0}, // "Kabuto"
	"0141": {ico: "0141", flags: 0}, // "Kabutops"
	"0142": {ico: "0142", flags: 0}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: 0}, // "Mega Aerodactyl"
	"0143": {ico: "0143", flags: 0}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: 0}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: 0}, // "Articuno" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: 0}, // "Galarian Articuno" // uknown gender
	"0145": {ico: "0145", flags: 0}, // "Zapdos" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: 0}, // "Galarian Zapdos" // uknown gender
	"0146": {ico: "0146", flags: 0}, // "Moltres" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: 0}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: 0}, // "Dratini"
	"0148": {ico: "0148", flags: 0}, // "Dragonair"
	"0149": {ico: "0149", flags: 0}, // "Dragonite"
	"0150": {ico: "0150", flags: 0}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: 0}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: 0}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: 0}, // "Mew" // uknown gender
//	==============
//	 Generation 2
//	==============
	"0152": {ico: "0152", flags: 0}, // "Chikorita"
	"0153": {ico: "0153", flags: 0}, // "Bayleef"
//	"0154": {ico: "0154", flags: 0}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: 0}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: 0}, // "Meganium♀"
	"0155": {ico: "0155", flags: 0}, // "Cyndaquil"
	"0156": {ico: "0156", flags: 0}, // "Quilava"
	"0157": {ico: "0157", flags: 0}, // "Typhlosion"
	"0158": {ico: "0158", flags: 0}, // "Totodile"
	"0159": {ico: "0159", flags: 0}, // "Croconaw"
	"0160": {ico: "0160", flags: 0}, // "Feraligatr"
	"0161": {ico: "0161", flags: 0}, // "Sentret"
	"0162": {ico: "0162", flags: 0}, // "Furret"
	"0163": {ico: "0163", flags: 0}, // "Hoothoot"
	"0164": {ico: "0164", flags: 0}, // "Noctowl"
//	"0165": {ico: "0165", flags: 0}, // "Ledyba"
	"0165-m": {ico: "0165-m", flags: 0}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: 0}, // "Ledyba♀"
//	"0166": {ico: "0166", flags: 0}, // "Ledian"
	"0166-m": {ico: "0166-m", flags: 0}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: 0}, // "Ledian♀"
	"0167": {ico: "0167", flags: 0}, // "Spinarak"
	"0168": {ico: "0168", flags: 0}, // "Ariados"
	"0169": {ico: "0169", flags: 0}, // "Crobat"
	"0170": {ico: "0170", flags: 0}, // "Chinchou"
	"0171": {ico: "0171", flags: 0}, // "Lanturn"
	"0172": {ico: "0172", flags: 0}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: 0}, // "Spiky-eared Pichu" // female only
	"0173": {ico: "0173", flags: 0}, // "Cleffa"
	"0174": {ico: "0174", flags: 0}, // "Igglybuff"
	"0175": {ico: "0175", flags: 0}, // "Togepi"
	"0176": {ico: "0176", flags: 0}, // "Togetic"
	"0177": {ico: "0177", flags: 0}, // "Natu"
//	"0178": {ico: "0178", flags: 0}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: 0}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: 0}, // "Xatu♀"
	"0179": {ico: "0179", flags: 0}, // "Mareep"
	"0180": {ico: "0180", flags: 0}, // "Flaaffy"
	"0181": {ico: "0181", flags: 0}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: 0}, // "Mega Ampharos"
	"0182": {ico: "0182", flags: 0}, // "Bellossom"
	"0183": {ico: "0183", flags: 0}, // "Marill"
	"0184": {ico: "0184", flags: 0}, // "Azumarill"
//	"0185": {ico: "0185", flags: 0}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: 0}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: 0}, // "Sudowoodo♀"
//	"0186": {ico: "0186", flags: 0}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: 0}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: 0}, // "Politoed♀"
	"0187": {ico: "0187", flags: 0}, // "Hoppip"
	"0188": {ico: "0188", flags: 0}, // "Skiploom"
	"0189": {ico: "0189", flags: 0}, // "Jumpluff"
//	"0190": {ico: "0190", flags: 0}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: 0}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: 0}, // "Aipom♀"
	"0191": {ico: "0191", flags: 0}, // "Sunkern"
	"0192": {ico: "0192", flags: 0}, // "Sunflora"
	"0193": {ico: "0193", flags: 0}, // "Yanma"
//	"0194": {ico: "0194", flags: 0}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: 0}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: 0}, // "Wooper♀"
//	"0195": {ico: "0195", flags: 0}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: 0}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: 0}, // "Quagsire♀"
	"0196": {ico: "0196", flags: 0}, // "Espeon"
	"0197": {ico: "0197", flags: 0}, // "Umbreon"
//	"0198": {ico: "0198", flags: 0}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: 0}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: 0}, // "Murkrow♀"
	"0199": {ico: "0199", flags: 0}, // "Slowking"
	"0199-galar": {ico: "0199-galar", flags: 0}, // "Galarian Slowking"
	"0200": {ico: "0200", flags: 0}, // "Misdreavus"
//	"0201": {ico: "0201", flags: 0}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: 0}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: 0}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: 0}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: 0}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: 0}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: 0}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: 0}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: 0}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: 0}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: 0}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: 0}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: 0}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: 0}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: 0}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: 0}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: 0}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: 0}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: 0}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: 0}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: 0}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: 0}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: 0}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: 0}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: 0}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: 0}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: 0}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: 0}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: 0}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: 0}, // "Unown ?????" // uknown gender
//	"0202": {ico: "0202", flags: 0}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: 0}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: 0}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: 0}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: 0}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: 0}, // "Girafarig♀"
	"0204": {ico: "0204", flags: 0}, // "Pineco"
	"0205": {ico: "0205", flags: 0}, // "Forretress"
	"0206": {ico: "0206", flags: 0}, // "Dunsparce"
//	"0207": {ico: "0207", flags: 0}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: 0}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: 0}, // "Gligar♀"
//	"0208": {ico: "0208", flags: 0}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: 0}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: 0}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: 0}, // "Mega Steelix"
	"0209": {ico: "0209", flags: 0}, // "Snubbull"
	"0210": {ico: "0210", flags: 0}, // "Granbull"
	"0211": {ico: "0211", flags: 0}, // "Qwilfish"
//	"0212": {ico: "0212", flags: 0}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: 0}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: 0}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: 0}, // "Mega Scizor"
	"0213": {ico: "0213", flags: 0}, // "Shuckle"
//	"0214": {ico: "0214", flags: 0}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: 0}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: 0}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: 0}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: 0}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: 0}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: 0}, // "Sneasel♀"
	"0216": {ico: "0216", flags: 0}, // "Teddiursa"
//	"0217": {ico: "0217", flags: 0}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: 0}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: 0}, // "Ursaring♀"
	"0218": {ico: "0218", flags: 0}, // "Slugma"
	"0219": {ico: "0219", flags: 0}, // "Magcargo"
	"0220": {ico: "0220", flags: 0}, // "Swinub"
//	"0221": {ico: "0221", flags: 0}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: 0}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: 0}, // "Piloswine♀"
	"0222": {ico: "0222", flags: 0}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: 0}, // "Galarian Corsola"
	"0223": {ico: "0223", flags: 0}, // "Remoraid"
//	"0224": {ico: "0224", flags: 0}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: 0}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: 0}, // "Octillery♀"
	"0225": {ico: "0225", flags: 0}, // "Delibird"
	"0226": {ico: "0226", flags: 0}, // "Mantine"
	"0227": {ico: "0227", flags: 0}, // "Skarmory"
	"0228": {ico: "0228", flags: 0}, // "Houndour"
//	"0229": {ico: "0229", flags: 0}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: 0}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: 0}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: 0}, // "Mega Houndoom"
	"0230": {ico: "0230", flags: 0}, // "Kingdra"
	"0231": {ico: "0231", flags: 0}, // "Phanpy"
//	"0232": {ico: "0232", flags: 0}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: 0}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: 0}, // "Donphan♀"
	"0233": {ico: "0233", flags: 0}, // "Porygon2" // uknown gender
	"0234": {ico: "0234", flags: 0}, // "Stantler"
	"0235": {ico: "0235", flags: 0}, // "Smeargle"
	"0236": {ico: "0236", flags: 0}, // "Tyrogue" // male only
	"0237": {ico: "0237", flags: 0}, // "Hitmontop" // male only
	"0238": {ico: "0238", flags: 0}, // "Smoochum" // female only
	"0239": {ico: "0239", flags: 0}, // "Elekid"
	"0240": {ico: "0240", flags: 0}, // "Magby"
	"0241": {ico: "0241", flags: 0}, // "Miltank" // female only
	"0242": {ico: "0242", flags: 0}, // "Blissey" // female only
	"0243": {ico: "0243", flags: 0}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: 0}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: 0}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: 0}, // "Larvitar"
	"0247": {ico: "0247", flags: 0}, // "Pupitar"
	"0248": {ico: "0248", flags: 0}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: 0}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: 0}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: 0}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: 0}, // "Celebi" // uknown gender
//	==============
//	 Generation 3
//	==============
	"0252": {ico: "0252", flags: 0}, // "Treecko"
	"0253": {ico: "0253", flags: 0}, // "Grovyle"
	"0254": {ico: "0254", flags: 0}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: 0}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: 0}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: 0}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: 0}, // "Torchic♀"
//	"0256": {ico: "0256", flags: 0}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: 0}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: 0}, // "Combusken♀"
//	"0257": {ico: "0257", flags: 0}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: 0}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: 0}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: 0}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: 0}, // "Mudkip"
	"0259": {ico: "0259", flags: 0}, // "Marshtomp"
	"0260": {ico: "0260", flags: 0}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: 0}, // "Mega Swampert"
	"0261": {ico: "0261", flags: 0}, // "Poochyena"
	"0262": {ico: "0262", flags: 0}, // "Mightyena"
	"0263": {ico: "0263", flags: 0}, // "Zigzagoon"
	"0263-galar": {ico: "0263-galar", flags: 0}, // "Galarian Zigzagoon"
	"0264": {ico: "0264", flags: 0}, // "Linoone"
	"0264-galar": {ico: "0264-galar", flags: 0}, // "Galarian Linoone"
	"0265": {ico: "0265", flags: 0}, // "Wurmple"
	"0266": {ico: "0266", flags: 0}, // "Silcoon"
//	"0267": {ico: "0267", flags: 0}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: 0}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: 0}, // "Beautifly♀"
	"0268": {ico: "0268", flags: 0}, // "Cascoon"
//	"0269": {ico: "0269", flags: 0}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: 0}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: 0}, // "Dustox♀"
	"0270": {ico: "0270", flags: 0}, // "Lotad"
	"0271": {ico: "0271", flags: 0}, // "Lombre"
//	"0272": {ico: "0272", flags: 0}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: 0}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: 0}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: 0}, // "Seedot"
//	"0274": {ico: "0274", flags: 0}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: 0}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: 0}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: 0}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: 0}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: 0}, // "Shiftry♀"
	"0276": {ico: "0276", flags: 0}, // "Taillow"
	"0277": {ico: "0277", flags: 0}, // "Swellow"
	"0278": {ico: "0278", flags: 0}, // "Wingull"
	"0279": {ico: "0279", flags: 0}, // "Pelipper"
	"0280": {ico: "0280", flags: 0}, // "Ralts"
	"0281": {ico: "0281", flags: 0}, // "Kirlia"
	"0282": {ico: "0282", flags: 0}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: 0}, // "Mega Gardevoir"
	"0283": {ico: "0283", flags: 0}, // "Surskit"
	"0284": {ico: "0284", flags: 0}, // "Masquerain"
	"0285": {ico: "0285", flags: 0}, // "Shroomish"
	"0286": {ico: "0286", flags: 0}, // "Breloom"
	"0287": {ico: "0287", flags: 0}, // "Slakoth"
	"0288": {ico: "0288", flags: 0}, // "Vigoroth"
	"0289": {ico: "0289", flags: 0}, // "Slaking"
	"0290": {ico: "0290", flags: 0}, // "Nincada"
	"0291": {ico: "0291", flags: 0}, // "Ninjask"
	"0292": {ico: "0292", flags: 0}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: 0}, // "Whismur"
	"0294": {ico: "0294", flags: 0}, // "Loudred"
	"0295": {ico: "0295", flags: 0}, // "Exploud"
	"0296": {ico: "0296", flags: 0}, // "Makuhita"
	"0297": {ico: "0297", flags: 0}, // "Hariyama"
	"0298": {ico: "0298", flags: 0}, // "Azurill"
	"0299": {ico: "0299", flags: 0}, // "Nosepass"
	"0300": {ico: "0300", flags: 0}, // "Skitty"
	"0301": {ico: "0301", flags: 0}, // "Delcatty"
	"0302": {ico: "0302", flags: 0}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: 0}, // "Mega Sableye"
	"0303": {ico: "0303", flags: 0}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: 0}, // "Mega Mawile"
	"0304": {ico: "0304", flags: 0}, // "Aron"
	"0305": {ico: "0305", flags: 0}, // "Lairon"
	"0306": {ico: "0306", flags: 0}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: 0}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: 0}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: 0}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: 0}, // "Meditite♀"
//	"0308": {ico: "0308", flags: 0}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: 0}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: 0}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: 0}, // "Mega Medicham"
	"0309": {ico: "0309", flags: 0}, // "Electrike"
	"0310": {ico: "0310", flags: 0}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: 0}, // "Mega Manectric"
	"0311": {ico: "0311", flags: 0}, // "Plusle"
	"0312": {ico: "0312", flags: 0}, // "Minun"
	"0313": {ico: "0313", flags: 0}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: 0}, // "Illumise" // female only
//	"0315": {ico: "0315", flags: 0}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: 0}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: 0}, // "Roselia♀"
//	"0316": {ico: "0316", flags: 0}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: 0}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: 0}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: 0}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: 0}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: 0}, // "Swalot♀"
	"0318": {ico: "0318", flags: 0}, // "Carvanha"
	"0319": {ico: "0319", flags: 0}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: 0}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: 0}, // "Wailmer"
	"0321": {ico: "0321", flags: 0}, // "Wailord"
//	"0322": {ico: "0322", flags: 0}, // "Numel"
	"0322-m": {ico: "0322-m", flags: 0}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: 0}, // "Numel♀"
//	"0323": {ico: "0323", flags: 0}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: 0}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: 0}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: 0}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: 0}, // "Torkoal"
	"0325": {ico: "0325", flags: 0}, // "Spoink"
	"0326": {ico: "0326", flags: 0}, // "Grumpig"
	"0327": {ico: "0327", flags: 0}, // "Spinda"
	"0328": {ico: "0328", flags: 0}, // "Trapinch"
	"0329": {ico: "0329", flags: 0}, // "Vibrava"
	"0330": {ico: "0330", flags: 0}, // "Flygon"
	"0331": {ico: "0331", flags: 0}, // "Cacnea"
//	"0332": {ico: "0332", flags: 0}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: 0}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: 0}, // "Cacturne♀"
	"0333": {ico: "0333", flags: 0}, // "Swablu"
	"0334": {ico: "0334", flags: 0}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: 0}, // "Mega Altaria"
	"0335": {ico: "0335", flags: 0}, // "Zangoose"
	"0336": {ico: "0336", flags: 0}, // "Seviper"
	"0337": {ico: "0337", flags: 0}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: 0}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: 0}, // "Barboach"
	"0340": {ico: "0340", flags: 0}, // "Whiscash"
	"0341": {ico: "0341", flags: 0}, // "Corphish"
	"0342": {ico: "0342", flags: 0}, // "Crawdaunt"
	"0343": {ico: "0343", flags: 0}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: 0}, // "Claydol" // uknown gender
	"0345": {ico: "0345", flags: 0}, // "Lileep"
	"0346": {ico: "0346", flags: 0}, // "Cradily"
	"0347": {ico: "0347", flags: 0}, // "Anorith"
	"0348": {ico: "0348", flags: 0}, // "Armaldo"
	"0349": {ico: "0349", flags: 0}, // "Feebas"
//	"0350": {ico: "0350", flags: 0}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: 0}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: 0}, // "Milotic♀"
	"0351": {ico: "0351", flags: 0}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: 0}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: 0}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: 0}, // "Snowy Castform"
	"0352": {ico: "0352", flags: 0}, // "Kecleon"
	"0353": {ico: "0353", flags: 0}, // "Shuppet"
	"0354": {ico: "0354", flags: 0}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: 0}, // "Mega Banette"
	"0355": {ico: "0355", flags: 0}, // "Duskull"
	"0356": {ico: "0356", flags: 0}, // "Dusclops"
	"0357": {ico: "0357", flags: 0}, // "Tropius"
	"0358": {ico: "0358", flags: 0}, // "Chimecho"
	"0359": {ico: "0359", flags: 0}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: 0}, // "Mega Absol"
	"0360": {ico: "0360", flags: 0}, // "Wynaut"
	"0361": {ico: "0361", flags: 0}, // "Snorunt"
	"0362": {ico: "0362", flags: 0}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: 0}, // "Mega Glalie"
	"0363": {ico: "0363", flags: 0}, // "Spheal"
	"0364": {ico: "0364", flags: 0}, // "Sealeo"
	"0365": {ico: "0365", flags: 0}, // "Walrein"
	"0366": {ico: "0366", flags: 0}, // "Clamperl"
	"0367": {ico: "0367", flags: 0}, // "Huntail"
	"0368": {ico: "0368", flags: 0}, // "Gorebyss"
//	"0369": {ico: "0369", flags: 0}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: 0}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: 0}, // "Relicanth♀"
	"0370": {ico: "0370", flags: 0}, // "Luvdisc"
	"0371": {ico: "0371", flags: 0}, // "Bagon"
	"0372": {ico: "0372", flags: 0}, // "Shelgon"
	"0373": {ico: "0373", flags: 0}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: 0}, // "Mega Salamence"
	"0374": {ico: "0374", flags: 0}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: 0}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: 0}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: 0}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: 0}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: 0}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: 0}, // "Registeel" // uknown gender
	"0380": {ico: "0380", flags: 0}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: 0}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: 0}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: 0}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: 0}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: 0}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: 0}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: 0}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: 0}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: 0}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: 0}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: 0}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: 0}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: 0}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: 0}, // "Speed Deoxys" // uknown gender
//	==============
//	 Generation 4
//	==============
	"0387": {ico: "0387", flags: 0}, // "Turtwig"
	"0388": {ico: "0388", flags: 0}, // "Grotle"
	"0389": {ico: "0389", flags: 0}, // "Torterra"
	"0390": {ico: "0390", flags: 0}, // "Chimchar"
	"0391": {ico: "0391", flags: 0}, // "Monferno"
	"0392": {ico: "0392", flags: 0}, // "Infernape"
	"0393": {ico: "0393", flags: 0}, // "Piplup"
	"0394": {ico: "0394", flags: 0}, // "Prinplup"
	"0395": {ico: "0395", flags: 0}, // "Empoleon"
//	"0396": {ico: "0396", flags: 0}, // "Starly"
	"0396-m": {ico: "0396-m", flags: 0}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: 0}, // "Starly♀"
//	"0397": {ico: "0397", flags: 0}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: 0}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: 0}, // "Staravia♀"
//	"0398": {ico: "0398", flags: 0}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: 0}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: 0}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: 0}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: 0}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: 0}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: 0}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: 0}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: 0}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: 0}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: 0}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: 0}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: 0}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: 0}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: 0}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: 0}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: 0}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: 0}, // "Shinx♀"
//	"0404": {ico: "0404", flags: 0}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: 0}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: 0}, // "Luxio♀"
//	"0405": {ico: "0405", flags: 0}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: 0}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: 0}, // "Luxray♀"
//	"0406": {ico: "0406", flags: 0}, // "Budew"
//	"0407": {ico: "0407", flags: 0}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: 0}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: 0}, // "Roserade♀"
	"0408": {ico: "0408", flags: 0}, // "Cranidos"
	"0409": {ico: "0409", flags: 0}, // "Rampardos"
	"0410": {ico: "0410", flags: 0}, // "Shieldon"
	"0411": {ico: "0411", flags: 0}, // "Bastiodon"
//	"0412": {ico: "0412", flags: 0}, // "Burmy"
	"0412-plant": {ico: "0412-plant", flags: 0}, // "Burmy Plant Cloak"
	"0412-sandy": {ico: "0412-sandy", flags: 0}, // "Burmy Sandy Cloak"
	"0412-trash": {ico: "0412-trash", flags: 0}, // "Burmy Trash Cloak"
//	"0413": {ico: "0413", flags: 0}, // "Wormadam" // female only
	"0413-plant": {ico: "0413-plant", flags: 0}, // "Wormadam Plant Cloak" // female only
	"0413-sandy": {ico: "0413-sandy", flags: 0}, // "Wormadam Sandy Cloak" // female only
	"0413-trash": {ico: "0413-trash", flags: 0}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: 0}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: 0}, // "Combee"
	"0415-m": {ico: "0415-m", flags: 0}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: 0}, // "Combee♀"
	"0416": {ico: "0416", flags: 0}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: 0}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: 0}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: 0}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: 0}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: 0}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: 0}, // "Buizel♀"
//	"0419": {ico: "0419", flags: 0}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: 0}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: 0}, // "Floatzel♀"
	"0420": {ico: "0420", flags: 0}, // "Cherubi"
//	"0421": {ico: "0421", flags: 0}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: 0}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: 0}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: 0}, // "Shellos"
	"0422-west": {ico: "0422-west", flags: 0}, // "West Sea Shellos"
	"0422-east": {ico: "0422-east", flags: 0}, // "East Sea Shellos"
//	"0423": {ico: "0423", flags: 0}, // "Gastrodon"
	"0423-west": {ico: "0423-west", flags: 0}, // "West Sea Gastrodon"
	"0423-east": {ico: "0423-east", flags: 0}, // "East Sea Gastrodon"
//	"0424": {ico: "0424", flags: 0}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: 0}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: 0}, // "Ambipom♀"
	"0425": {ico: "0425", flags: 0}, // "Drifloon"
	"0426": {ico: "0426", flags: 0}, // "Drifblim"
	"0427": {ico: "0427", flags: 0}, // "Buneary"
	"0428": {ico: "0428", flags: 0}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: 0}, // "Mega Lopunny"
	"0429": {ico: "0429", flags: 0}, // "Mismagius"
	"0430": {ico: "0430", flags: 0}, // "Honchkrow"
	"0431": {ico: "0431", flags: 0}, // "Glameow"
	"0432": {ico: "0432", flags: 0}, // "Purugly"
	"0433": {ico: "0433", flags: 0}, // "Chingling"
	"0434": {ico: "0434", flags: 0}, // "Stunky"
	"0435": {ico: "0435", flags: 0}, // "Skuntank"
	"0436": {ico: "0436", flags: 0}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: 0}, // "Bronzong" // uknown gender
	"0438": {ico: "0438", flags: 0}, // "Bonsly"
	"0439": {ico: "0439", flags: 0}, // "Mime Jr."
	"0440": {ico: "0440", flags: 0}, // "Happiny" // female only
	"0441": {ico: "0441", flags: 0}, // "Chatot"
	"0442": {ico: "0442", flags: 0}, // "Spiritomb"
//	"0443": {ico: "0443", flags: 0}, // "Gible"
	"0443-m": {ico: "0443-m", flags: 0}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: 0}, // "Gible♀"
//	"0444": {ico: "0444", flags: 0}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: 0}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: 0}, // "Gabite♀"
//	"0445": {ico: "0445", flags: 0}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: 0}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: 0}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: 0}, // "Mega Garchomp"
	"0446": {ico: "0446", flags: 0}, // "Munchlax"
	"0447": {ico: "0447", flags: 0}, // "Riolu"
	"0448": {ico: "0448", flags: 0}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: 0}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: 0}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: 0}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: 0}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: 0}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: 0}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: 0}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: 0}, // "Skorupi"
	"0452": {ico: "0452", flags: 0}, // "Drapion"
//	"0453": {ico: "0453", flags: 0}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: 0}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: 0}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: 0}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: 0}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: 0}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: 0}, // "Carnivine"
//	"0456": {ico: "0456", flags: 0}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: 0}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: 0}, // "Finneon♀"
//	"0457": {ico: "0457", flags: 0}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: 0}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: 0}, // "Lumineon♀"
	"0458": {ico: "0458", flags: 0}, // "Mantyke"
//	"0459": {ico: "0459", flags: 0}, // "Snover"
	"0459-m": {ico: "0459-m", flags: 0}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: 0}, // "Snover♀"
//	"0460": {ico: "0460", flags: 0}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: 0}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: 0}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: 0}, // "Mega Abomasnow"
//	"0461": {ico: "0461", flags: 0}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: 0}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: 0}, // "Weavile♀"
	"0462": {ico: "0462", flags: 0}, // "Magnezone" // uknown gender
	"0463": {ico: "0463", flags: 0}, // "Lickilicky"
//	"0464": {ico: "0464", flags: 0}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: 0}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: 0}, // "Rhyperior♀"
//	"0465": {ico: "0465", flags: 0}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: 0}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: 0}, // "Tangrowth♀"
	"0466": {ico: "0466", flags: 0}, // "Electivire"
	"0467": {ico: "0467", flags: 0}, // "Magmortar"
	"0468": {ico: "0468", flags: 0}, // "Togekiss"
	"0469": {ico: "0469", flags: 0}, // "Yanmega"
	"0470": {ico: "0470", flags: 0}, // "Leafeon"
	"0471": {ico: "0471", flags: 0}, // "Glaceon"
	"0472": {ico: "0472", flags: 0}, // "Gliscor"
//	"0473": {ico: "0473", flags: 0}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: 0}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: 0}, // "Mamoswine♀"
	"0474": {ico: "0474", flags: 0}, // "Porygon-Z" // uknown gender
	"0475": {ico: "0475", flags: 0}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: 0}, // "Mega Gallade" // male only
	"0476": {ico: "0476", flags: 0}, // "Probopass"
	"0477": {ico: "0477", flags: 0}, // "Dusknoir"
	"0478": {ico: "0478", flags: 0}, // "Froslass" // female only
	"0479": {ico: "0479", flags: 0}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: 0}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: 0}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: 0}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: 0}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: 0}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: 0}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: 0}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: 0}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: 0}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: 0}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: 0}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: 0}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: 0}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: 0}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: 0}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: 0}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: 0}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: 0}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: 0}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: 0}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: 0}, // "Heatran"
	"0486": {ico: "0486", flags: 0}, // "Regigigas" // uknown gender
//	"0487": {ico: "0487", flags: 0}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: 0}, // "Giratina Altered Forme" // uknown gender
	"0487-origin": {ico: "0487-origin", flags: 0}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: 0}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: 0}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: 0}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: 0}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: 0}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: 0}, // "Shaymin Land Forme" // uknown gender
	"0492-sky": {ico: "0492-sky", flags: 0}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: 0}, // "Arceus" // uknown gender
	"0493-fighting": {ico: "0493-fighting", flags: 0}, // "Fighting Arceus" // uknown gender
	"0493-flying": {ico: "0493-flying", flags: 0}, // "Flying Arceus" // uknown gender
	"0493-poison": {ico: "0493-poison", flags: 0}, // "Poison Arceus" // uknown gender
	"0493-ground": {ico: "0493-ground", flags: 0}, // "Ground Arceus" // uknown gender
	"0493-rock": {ico: "0493-rock", flags: 0}, // "Rock Arceus" // uknown gender
	"0493-bug": {ico: "0493-bug", flags: 0}, // "Bug Arceus" // uknown gender
	"0493-ghost": {ico: "0493-ghost", flags: 0}, // "Ghost Arceus" // uknown gender
	"0493-steel": {ico: "0493-steel", flags: 0}, // "Steel Arceus" // uknown gender
	"0493-fire": {ico: "0493-fire", flags: 0}, // "Fire Arceus" // uknown gender
	"0493-water": {ico: "0493-water", flags: 0}, // "Water Arceus" // uknown gender
	"0493-grass": {ico: "0493-grass", flags: 0}, // "Grass Arceus" // uknown gender
	"0493-electric": {ico: "0493-electric", flags: 0}, // "Electric Arceus" // uknown gender
	"0493-psychic": {ico: "0493-psychic", flags: 0}, // "Psychic Arceus" // uknown gender
	"0493-ice": {ico: "0493-ice", flags: 0}, // "Ice Arceus" // uknown gender
	"0493-dragon": {ico: "0493-dragon", flags: 0}, // "Dragon Arceus" // uknown gender
	"0493-dark": {ico: "0493-dark", flags: 0}, // "Dark Arceus" // uknown gender
	"0493-fairy": {ico: "0493-fairy", flags: 0}, // "Fairy Arceus" // uknown gender
//	==============
//	 Generation 5
//	==============
	"0494": {ico: "0494", flags: 0}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: 0}, // "Snivy"
	"0496": {ico: "0496", flags: 0}, // "Servine"
	"0497": {ico: "0497", flags: 0}, // "Serperior"
	"0498": {ico: "0498", flags: 0}, // "Tepig"
	"0499": {ico: "0499", flags: 0}, // "Pignite"
	"0500": {ico: "0500", flags: 0}, // "Emboar"
	"0501": {ico: "0501", flags: 0}, // "Oshawott"
	"0502": {ico: "0502", flags: 0}, // "Dewott"
	"0503": {ico: "0503", flags: 0}, // "Samurott"
	"0504": {ico: "0504", flags: 0}, // "Patrat"
	"0505": {ico: "0505", flags: 0}, // "Watchog"
	"0506": {ico: "0506", flags: 0}, // "Lillipup"
	"0507": {ico: "0507", flags: 0}, // "Herdier"
	"0508": {ico: "0508", flags: 0}, // "Stoutland"
	"0509": {ico: "0509", flags: 0}, // "Purrloin"
	"0510": {ico: "0510", flags: 0}, // "Liepard"
	"0511": {ico: "0511", flags: 0}, // "Pansage"
	"0512": {ico: "0512", flags: 0}, // "Simisage"
	"0513": {ico: "0513", flags: 0}, // "Pansear"
	"0514": {ico: "0514", flags: 0}, // "Simisear"
	"0515": {ico: "0515", flags: 0}, // "Panpour"
	"0516": {ico: "0516", flags: 0}, // "Simipour"
	"0517": {ico: "0517", flags: 0}, // "Munna"
	"0518": {ico: "0518", flags: 0}, // "Musharna"
	"0519": {ico: "0519", flags: 0}, // "Pidove"
	"0520": {ico: "0520", flags: 0}, // "Tranquill"
//	"0521": {ico: "0521", flags: 0}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: 0}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: 0}, // "Unfezan♀"
	"0522": {ico: "0522", flags: 0}, // "Blitzle"
	"0523": {ico: "0523", flags: 0}, // "Zebstrika"
	"0524": {ico: "0524", flags: 0}, // "Roggenrola"
	"0525": {ico: "0525", flags: 0}, // "Boldore"
	"0526": {ico: "0526", flags: 0}, // "Gigalith"
	"0527": {ico: "0527", flags: 0}, // "Woobat"
	"0528": {ico: "0528", flags: 0}, // "Swoobat"
	"0529": {ico: "0529", flags: 0}, // "Drilbur"
	"0530": {ico: "0530", flags: 0}, // "Excadrill"
	"0531": {ico: "0531", flags: 0}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: 0}, // "Mega Audino"
	"0532": {ico: "0532", flags: 0}, // "Timburr"
	"0533": {ico: "0533", flags: 0}, // "Gurdurr"
	"0534": {ico: "0534", flags: 0}, // "Conkeldurr"
	"0535": {ico: "0535", flags: 0}, // "Tympole"
	"0536": {ico: "0536", flags: 0}, // "Palpitoad"
	"0537": {ico: "0537", flags: 0}, // "Seismitoad"
	"0538": {ico: "0538", flags: 0}, // "Throh" // male only
	"0539": {ico: "0539", flags: 0}, // "Sawk" // male only
	"0540": {ico: "0540", flags: 0}, // "Sewaddle"
	"0541": {ico: "0541", flags: 0}, // "Swadloon"
	"0542": {ico: "0542", flags: 0}, // "Leavanny"
	"0543": {ico: "0543", flags: 0}, // "Venipede"
	"0544": {ico: "0544", flags: 0}, // "Whirlipede"
	"0545": {ico: "0545", flags: 0}, // "Scolipede"
	"0546": {ico: "0546", flags: 0}, // "Cottonee"
	"0547": {ico: "0547", flags: 0}, // "Whimsicott"
	"0548": {ico: "0548", flags: 0}, // "Petilil" // female only
	"0549": {ico: "0549", flags: 0}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: 0}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: 0}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: 0}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: 0}, // "Sandile"
	"0552": {ico: "0552", flags: 0}, // "Krokorok"
	"0553": {ico: "0553", flags: 0}, // "Krookodile"
	"0554": {ico: "0554", flags: 0}, // "Darumaka"
	"0554-galar": {ico: "0554-galar", flags: 0}, // "Galarian Darumaka"
//	"0555": {ico: "0555", flags: 0}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: 0}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: 0}, // "Darmanitan Zen Mode"
//	"0555-galar": {ico: "0555-galar", flags: 0}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: 0}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: 0}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: 0}, // "Maractus"
	"0557": {ico: "0557", flags: 0}, // "Dwebble"
	"0558": {ico: "0558", flags: 0}, // "Crustle"
	"0559": {ico: "0559", flags: 0}, // "Scraggy"
	"0560": {ico: "0560", flags: 0}, // "Scrafty"
	"0561": {ico: "0561", flags: 0}, // "Sigilyph"
	"0562": {ico: "0562", flags: 0}, // "Yamask"
	"0562-galar": {ico: "0562-galar", flags: 0}, // "Galarian Yamask"
	"0563": {ico: "0563", flags: 0}, // "Cofagrigus"
	"0564": {ico: "0564", flags: 0}, // "Tirtouga"
	"0565": {ico: "0565", flags: 0}, // "Carracosta"
	"0566": {ico: "0566", flags: 0}, // "Archen"
	"0567": {ico: "0567", flags: 0}, // "Archeops"
	"0568": {ico: "0568", flags: 0}, // "Trubbish"
	"0569": {ico: "0569", flags: 0}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: 0}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: 0}, // "Zorua"
	"0571": {ico: "0571", flags: 0}, // "Zoroark"
	"0572": {ico: "0572", flags: 0}, // "Minccino"
	"0573": {ico: "0573", flags: 0}, // "Cinccino"
	"0574": {ico: "0574", flags: 0}, // "Gothita"
	"0575": {ico: "0575", flags: 0}, // "Gothorita"
	"0576": {ico: "0576", flags: 0}, // "Gothitelle"
	"0577": {ico: "0577", flags: 0}, // "Solosis"
	"0578": {ico: "0578", flags: 0}, // "Duosion"
	"0579": {ico: "0579", flags: 0}, // "Reuniclus"
	"0580": {ico: "0580", flags: 0}, // "Ducklett"
	"0581": {ico: "0581", flags: 0}, // "Swanna"
	"0582": {ico: "0582", flags: 0}, // "Vanillite"
	"0583": {ico: "0583", flags: 0}, // "Vanillish"
	"0584": {ico: "0584", flags: 0}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: 0}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: 0}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: 0}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: 0}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: 0}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: 0}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: 0}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: 0}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: 0}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: 0}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: 0}, // "Emolga"
	"0588": {ico: "0588", flags: 0}, // "Karrablast"
	"0589": {ico: "0589", flags: 0}, // "Escavalier"
	"0590": {ico: "0590", flags: 0}, // "Foongus"
	"0591": {ico: "0591", flags: 0}, // "Amoonguss"
//	"0592": {ico: "0592", flags: 0}, // "Frillish"
	"0592-m": {ico: "0592-m", flags: 0}, // "Frillish♂"
	"0592-f": {ico: "0592-f", flags: 0}, // "Frillish♀"
//	"0593": {ico: "0593", flags: 0}, // "Jellicent"
	"0593-m": {ico: "0593-m", flags: 0}, // "Jellicent♂"
	"0593-f": {ico: "0593-f", flags: 0}, // "Jellicent♀"
	"0594": {ico: "0594", flags: 0}, // "Alomomola"
	"0595": {ico: "0595", flags: 0}, // "Joltik"
	"0596": {ico: "0596", flags: 0}, // "Galvantula"
	"0597": {ico: "0597", flags: 0}, // "Ferroseed"
	"0598": {ico: "0598", flags: 0}, // "Ferrothorn"
	"0599": {ico: "0599", flags: 0}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: 0}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: 0}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: 0}, // "Tynamo"
	"0603": {ico: "0603", flags: 0}, // "Eelektrik"
	"0604": {ico: "0604", flags: 0}, // "Eelektross"
	"0605": {ico: "0605", flags: 0}, // "Elgyem"
	"0606": {ico: "0606", flags: 0}, // "Beheeyem"
	"0607": {ico: "0607", flags: 0}, // "Litwick"
	"0608": {ico: "0608", flags: 0}, // "Lampent"
	"0609": {ico: "0609", flags: 0}, // "Chandelure"
	"0610": {ico: "0610", flags: 0}, // "Axew"
	"0611": {ico: "0611", flags: 0}, // "Fraxure"
	"0612": {ico: "0612", flags: 0}, // "Haxorus"
	"0613": {ico: "0613", flags: 0}, // "Cubchoo"
	"0614": {ico: "0614", flags: 0}, // "Beartic"
	"0615": {ico: "0615", flags: 0}, // "Cryogonal" // uknown gender
	"0616": {ico: "0616", flags: 0}, // "Shelmet"
	"0617": {ico: "0617", flags: 0}, // "Accelgor"
	"0618": {ico: "0618", flags: 0}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: 0}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: 0}, // "Mienfoo"
	"0620": {ico: "0620", flags: 0}, // "Mienshao"
	"0621": {ico: "0621", flags: 0}, // "Druddigon"
	"0622": {ico: "0622", flags: 0}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: 0}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: 0}, // "Pawniard"
	"0625": {ico: "0625", flags: 0}, // "Bisharp"
	"0626": {ico: "0626", flags: 0}, // "Bouffalant"
	"0627": {ico: "0627", flags: 0}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: 0}, // "Braviary" // male only
	"0629": {ico: "0629", flags: 0}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: 0}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: 0}, // "Heatmor"
	"0632": {ico: "0632", flags: 0}, // "Durant"
	"0633": {ico: "0633", flags: 0}, // "Deino"
	"0634": {ico: "0634", flags: 0}, // "Zweilous"
	"0635": {ico: "0635", flags: 0}, // "Hydreigon"
	"0636": {ico: "0636", flags: 0}, // "Larvesta"
	"0637": {ico: "0637", flags: 0}, // "Volcarona"
	"0638": {ico: "0638", flags: 0}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: 0}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: 0}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: 0}, // "Tornadus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: 0}, // "Incarnate Forme Tornadus" // male only
	"0641-therian": {ico: "0641-therian", flags: 0}, // "Therian Forme Tornadus" // male only
//	"0642": {ico: "0642", flags: 0}, // "Thundurus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: 0}, // "Incarnate Forme Thundurus" // male only
	"0642-therian": {ico: "0642-therian", flags: 0}, // "Therian Forme Thundurus" // male only
	"0643": {ico: "0643", flags: 0}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: 0}, // "Zekrom" // uknown gender
//	"0645": {ico: "0645", flags: 0}, // "Landorus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: 0}, // "Incarnate Forme Landorus" // male only
	"0645-therian": {ico: "0645-therian", flags: 0}, // "Therian Forme Landorus" // male only
	"0646": {ico: "0646", flags: 0}, // "Kyurem" // uknown gender
	"0646-white": {ico: "0646-white", flags: 0}, // "White Kyurem" // uknown gender
	"0646-black": {ico: "0646-black", flags: 0}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: 0}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: 0}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: 0}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: 0}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: 0}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: 0}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: 0}, // "Genesect" // uknown gender
	"0649-douse": {ico: "0649-douse", flags: 0}, // "Douse Drive Genesect" // uknown gender
	"0649-shock": {ico: "0649-shock", flags: 0}, // "Shock Drive Genesect" // uknown gender
	"0649-burn": {ico: "0649-burn", flags: 0}, // "Burn Drive Genesect" // uknown gender
	"0649-chill": {ico: "0649-chill", flags: 0}, // "Chill Drive Genesect" // uknown gender
//	==============
//	 Generation 6
//	==============
	"0650": {ico: "0650", flags: 0}, // "Chespin"
	"0651": {ico: "0651", flags: 0}, // "Quilladin"
	"0652": {ico: "0652", flags: 0}, // "Chesnaught"
	"0653": {ico: "0653", flags: 0}, // "Fennekin"
	"0654": {ico: "0654", flags: 0}, // "Braixen"
	"0655": {ico: "0655", flags: 0}, // "Delphox"
	"0656": {ico: "0656", flags: 0}, // "Froakie"
	"0657": {ico: "0657", flags: 0}, // "Frogadier"
	"0658": {ico: "0658", flags: 0}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: 0}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: 0}, // "Bunnelby"
	"0660": {ico: "0660", flags: 0}, // "Diggersby"
	"0661": {ico: "0661", flags: 0}, // "Fletchling"
	"0662": {ico: "0662", flags: 0}, // "Fletchinder"
	"0663": {ico: "0663", flags: 0}, // "Talonflame"
	"0664": {ico: "0664", flags: 0}, // "Scatterbug"
	"0665": {ico: "0665", flags: 0}, // "Spewpa"
//	"0666": {ico: "0666", flags: 0}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: 0}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: 0}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: 0}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: 0}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: 0}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: 0}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: 0}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: 0}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: 0}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: 0}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: 0}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: 0}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: 0}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: 0}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: 0}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: 0}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: 0}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: 0}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: 0}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: 0}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: 0}, // "Litleo"
//	"0668": {ico: "0668", flags: 0}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: 0}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: 0}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: 0}, // "Flabébé" // female only
	"0669-red": {ico: "0669-red", flags: 0}, // "Red Flower Flabébé" // female only
	"0669-yellow": {ico: "0669-yellow", flags: 0}, // "Yellow Flower Flabébé" // female only
	"0669-orange": {ico: "0669-orange", flags: 0}, // "Orange Flower Flabébé" // female only
	"0669-blue": {ico: "0669-blue", flags: 0}, // "Blue Flower Flabébé" // female only
	"0669-white": {ico: "0669-white", flags: 0}, // "White Flower Flabébé" // female only
//	"0670": {ico: "0670", flags: 0}, // "Floette" // female only
	"0670-red": {ico: "0670-red", flags: 0}, // "Red Flower Floette" // female only
	"0670-yellow": {ico: "0670-yellow", flags: 0}, // "Yellow Flower Floette" // female only
	"0670-orange": {ico: "0670-orange", flags: 0}, // "Orange Flower Floette" // female only
	"0670-blue": {ico: "0670-blue", flags: 0}, // "Blue Flower Floette" // female only
	"0670-white": {ico: "0670-white", flags: 0}, // "White Flower Floette" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: 0}, // "Eternal Flower Floette" // female only
//	"0671": {ico: "0671", flags: 0}, // "Florges" // female only
	"0671-red": {ico: "0671-red", flags: 0}, // "Red Flower Florges" // female only
	"0671-yellow": {ico: "0671-yellow", flags: 0}, // "Yellow Flower Florges" // female only
	"0671-orange": {ico: "0671-orange", flags: 0}, // "Orange Flower Florges" // female only
	"0671-blue": {ico: "0671-blue", flags: 0}, // "Blue Flower Florges" // female only
	"0671-white": {ico: "0671-white", flags: 0}, // "White Flower Florges" // female only
	"0672": {ico: "0672", flags: 0}, // "Skiddo"
	"0673": {ico: "0673", flags: 0}, // "Gogoat"
	"0674": {ico: "0674", flags: 0}, // "Pancham"
	"0675": {ico: "0675", flags: 0}, // "Pangoro"
	"0676": {ico: "0676", flags: 0}, // "Furfrou"
	"0676-heart": {ico: "0676-heart", flags: 0}, // "Heart Trim Furfrou"
	"0676-star": {ico: "0676-star", flags: 0}, // "Star Trim Furfrou"
	"0676-diamond": {ico: "0676-diamond", flags: 0}, // "Diamond Trim Furfrou"
	"0676-debutante": {ico: "0676-debutante", flags: 0}, // "Debutante Trim Furfrou"
	"0676-matron": {ico: "0676-matron", flags: 0}, // "Matron Trim Furfrou"
	"0676-dandy": {ico: "0676-dandy", flags: 0}, // "Dandy Trim Furfrou"
	"0676-le-reine": {ico: "0676-le-reine", flags: 0}, // "Le Reine Trim Furfrou"
	"0676-kabuki": {ico: "0676-kabuki", flags: 0}, // "Kabuki Trim Furfrou"
	"0676-pharaoh": {ico: "0676-pharaoh", flags: 0}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: 0}, // "Espurr"
//	"0678": {ico: "0678", flags: 0}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: 0}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: 0}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: 0}, // "Honedge"
	"0680": {ico: "0680", flags: 0}, // "Doublade"
//	"0681": {ico: "0681", flags: 0}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: 0}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: 0}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: 0}, // "Spritzee"
	"0683": {ico: "0683", flags: 0}, // "Aromatisse"
	"0684": {ico: "0684", flags: 0}, // "Swirlix"
	"0685": {ico: "0685", flags: 0}, // "Slurpuff"
	"0686": {ico: "0686", flags: 0}, // "Inkay"
	"0687": {ico: "0687", flags: 0}, // "Malamar"
	"0688": {ico: "0688", flags: 0}, // "Binacle"
	"0689": {ico: "0689", flags: 0}, // "Barbaracle"
	"0690": {ico: "0690", flags: 0}, // "Skrelp"
	"0691": {ico: "0691", flags: 0}, // "Dragalge"
	"0692": {ico: "0692", flags: 0}, // "Clauncher"
	"0693": {ico: "0693", flags: 0}, // "Clawitzer"
	"0694": {ico: "0694", flags: 0}, // "Helioptile"
	"0695": {ico: "0695", flags: 0}, // "Heliolisk"
	"0696": {ico: "0696", flags: 0}, // "Tyrunt"
	"0697": {ico: "0697", flags: 0}, // "Tyrantrum"
	"0698": {ico: "0698", flags: 0}, // "Amaura"
	"0699": {ico: "0699", flags: 0}, // "Aurorus"
	"0700": {ico: "0700", flags: 0}, // "Sylveon"
	"0701": {ico: "0701", flags: 0}, // "Hawlucha"
	"0702": {ico: "0702", flags: 0}, // "Dedenne"
	"0703": {ico: "0703", flags: 0}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: 0}, // "Goomy"
	"0705": {ico: "0705", flags: 0}, // "Sliggoo"
	"0706": {ico: "0706", flags: 0}, // "Goodra"
	"0707": {ico: "0707", flags: 0}, // "Klefki"
	"0708": {ico: "0708", flags: 0}, // "Phantump"
	"0709": {ico: "0709", flags: 0}, // "Trevenant"
//	"0710": {ico: "0710", flags: 0}, // "Pumpkaboo"
	"0710-average": {ico: "0710-average", flags: 0}, // "Average Size Pumpkaboo"
	"0710-small": {ico: "0710-small", flags: 0}, // "Small Size Pumpkaboo"
	"0710-large": {ico: "0710-large", flags: 0}, // "Large Size Pumpkaboo"
	"0710-super": {ico: "0710-super", flags: 0}, // "Super Size Pumpkaboo"
//	"0711": {ico: "0711", flags: 0}, // "Gourgeist"
	"0711-average": {ico: "0711-average", flags: 0}, // "Average Size Gourgeist"
	"0711-small": {ico: "0711-small", flags: 0}, // "Small Size Gourgeist"
	"0711-large": {ico: "0711-large", flags: 0}, // "Large Size Gourgeist"
	"0711-super": {ico: "0711-super", flags: 0}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: 0}, // "Bergmite"
	"0713": {ico: "0713", flags: 0}, // "Avalugg"
	"0714": {ico: "0714", flags: 0}, // "Noibat"
	"0715": {ico: "0715", flags: 0}, // "Noivern"
//	"0716": {ico: "0716", flags: 0}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: 0}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: 0}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: 0}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: 0}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: 0}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: 0}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: 0}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: 0}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: 0}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: 0}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: 0}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: 0}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: 0}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: 0}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: 0}, // "Volcanion" // uknown gender
//	==============
//	 Generation 7
//	==============
	"0722": {ico: "0722", flags: 0}, // "Rowlet"
	"0723": {ico: "0723", flags: 0}, // "Dartrix"
	"0724": {ico: "0724", flags: 0}, // "Decidueye"
	"0725": {ico: "0725", flags: 0}, // "Litten"
	"0726": {ico: "0726", flags: 0}, // "Torracat"
	"0727": {ico: "0727", flags: 0}, // "Incineroar"
	"0728": {ico: "0728", flags: 0}, // "Popplio"
	"0729": {ico: "0729", flags: 0}, // "Brionne"
	"0730": {ico: "0730", flags: 0}, // "Primarina"
	"0731": {ico: "0731", flags: 0}, // "Pikipek"
	"0732": {ico: "0732", flags: 0}, // "Trumbeak"
	"0733": {ico: "0733", flags: 0}, // "Toucannon"
	"0734": {ico: "0734", flags: 0}, // "Yungoos"
	"0735": {ico: "0735", flags: 0}, // "Gumshoos"
	"0736": {ico: "0736", flags: 0}, // "Grubbin"
	"0737": {ico: "0737", flags: 0}, // "Charjabug"
	"0738": {ico: "0738", flags: 0}, // "Vikavolt"
	"0739": {ico: "0739", flags: 0}, // "Crabrawler"
	"0740": {ico: "0740", flags: 0}, // "Crabominable"
//	"0741": {ico: "0741", flags: 0}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: 0}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: 0}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: 0}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: 0}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: 0}, // "Cutiefly"
	"0743": {ico: "0743", flags: 0}, // "Ribombee"
	"0744": {ico: "0744", flags: 0}, // "Rockruff"
//	"0745": {ico: "0745", flags: 0}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: 0}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: 0}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: 0}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: 0}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: 0}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: 0}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: 0}, // "Mareanie"
	"0748": {ico: "0748", flags: 0}, // "Toxapex"
	"0749": {ico: "0749", flags: 0}, // "Mudbray"
	"0750": {ico: "0750", flags: 0}, // "Mudsdale"
	"0751": {ico: "0751", flags: 0}, // "Dewpider"
	"0752": {ico: "0752", flags: 0}, // "Araquanid"
	"0753": {ico: "0753", flags: 0}, // "Fomantis"
	"0754": {ico: "0754", flags: 0}, // "Lurantis"
	"0755": {ico: "0755", flags: 0}, // "Morelull"
	"0756": {ico: "0756", flags: 0}, // "Shiinotic"
	"0757": {ico: "0757", flags: 0}, // "Salandit"
	"0758": {ico: "0758", flags: 0}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: 0}, // "Stufful"
	"0760": {ico: "0760", flags: 0}, // "Bewear"
	"0761": {ico: "0761", flags: 0}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: 0}, // "Steenee" // female only
	"0763": {ico: "0763", flags: 0}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: 0}, // "Comfey"
	"0765": {ico: "0765", flags: 0}, // "Oranguru"
	"0766": {ico: "0766", flags: 0}, // "Passimian"
	"0767": {ico: "0767", flags: 0}, // "Wimpod"
	"0768": {ico: "0768", flags: 0}, // "Golisopod"
	"0769": {ico: "0769", flags: 0}, // "Sandygast"
	"0770": {ico: "0770", flags: 0}, // "Palossand"
	"0771": {ico: "0771", flags: 0}, // "Pyukumuku"
	"0772": {ico: "0772", flags: 0}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: 0}, // "Silvally" // uknown gender
	"0773-fighting": {ico: "0773-fighting", flags: 0}, // "Silvally Type: Fighting" // uknown gender
	"0773-flying": {ico: "0773-flying", flags: 0}, // "Silvally Type: Flying" // uknown gender
	"0773-poison": {ico: "0773-poison", flags: 0}, // "Silvally Type: Poison" // uknown gender
	"0773-ground": {ico: "0773-ground", flags: 0}, // "Silvally Type: Ground" // uknown gender
	"0773-rock": {ico: "0773-rock", flags: 0}, // "Silvally Type: Rock" // uknown gender
	"0773-bug": {ico: "0773-bug", flags: 0}, // "Silvally Type: Bug" // uknown gender
	"0773-ghost": {ico: "0773-ghost", flags: 0}, // "Silvally Type: Ghost" // uknown gender
	"0773-steel": {ico: "0773-steel", flags: 0}, // "Silvally Type: Steel" // uknown gender
	"0773-fire": {ico: "0773-fire", flags: 0}, // "Silvally Type: Fire" // uknown gender
	"0773-water": {ico: "0773-water", flags: 0}, // "Silvally Type: Water" // uknown gender
	"0773-grass": {ico: "0773-grass", flags: 0}, // "Silvally Type: Grass" // uknown gender
	"0773-electric": {ico: "0773-electric", flags: 0}, // "Silvally Type: Electric" // uknown gender
	"0773-psychic": {ico: "0773-psychic", flags: 0}, // "Silvally Type: Psychic" // uknown gender
	"0773-ice": {ico: "0773-ice", flags: 0}, // "Silvally Type: Ice" // uknown gender
	"0773-dragon": {ico: "0773-dragon", flags: 0}, // "Silvally Type: Dragon" // uknown gender
	"0773-dark": {ico: "0773-dark", flags: 0}, // "Silvally Type: Dark" // uknown gender
	"0773-fairy": {ico: "0773-fairy", flags: 0}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: 0}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: 0}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: 0}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: 0}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: 0}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: 0}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: 0}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: 0}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: 0}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: 0}, // "Komala"
	"0776": {ico: "0776", flags: 0}, // "Turtonator"
	"0777": {ico: "0777", flags: 0}, // "Togedemaru"
//	"0778": {ico: "0778", flags: 0}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: 0}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: 0}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: 0}, // "Bruxish"
	"0780": {ico: "0780", flags: 0}, // "Drampa"
	"0781": {ico: "0781", flags: 0}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: 0}, // "Jangmo-o"
	"0783": {ico: "0783", flags: 0}, // "Hakamo-o"
	"0784": {ico: "0784", flags: 0}, // "Kommo-o"
	"0785": {ico: "0785", flags: 0}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: 0}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: 0}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: 0}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: 0}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: 0}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: 0}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: 0}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: 0}, // "Lunala", // uknown gender
//	"0792-full-moon" // "Full Monn Lunala", // uknown gender
	"0793": {ico: "0793", flags: 0}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: 0}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: 0}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: 0}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: 0}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: 0}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: 0}, // "Guzzlord" // uknown gender
	"0800": {ico: "0800", flags: 0}, // "Necrozma" // uknown gender
	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: 0}, // "Dusk Mane Necrozma" // uknown gender
	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: 0}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: 0}, // "Ultra Necrozma" // uknown gender
	"0801": {ico: "0801", flags: 0}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: 0}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: 0}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: 0}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: 0}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: 0}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: 0}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: 0}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: 0}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: 0}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: 0}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: 0}, // "Gigantamax Melmetal" // uknown gender
//	==============
//	 Generation 8
//	==============
	"0810": {ico: "0810", flags: 0}, // "Grookey"
	"0811": {ico: "0811", flags: 0}, // "Thwackey"
	"0812": {ico: "0812", flags: 0}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: 0}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: 0}, // "Scorbunny"
	"0814": {ico: "0814", flags: 0}, // "Raboot"
	"0815": {ico: "0815", flags: 0}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: 0}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: 0}, // "Sobble"
	"0817": {ico: "0817", flags: 0}, // "Drizzile"
	"0818": {ico: "0818", flags: 0}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: 0}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: 0}, // "Skwovet"
	"0820": {ico: "0820", flags: 0}, // "Greedent"
	"0821": {ico: "0821", flags: 0}, // "Rookidee"
	"0822": {ico: "0822", flags: 0}, // "Corvisquire"
	"0823": {ico: "0823", flags: 0}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: 0}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: 0}, // "Blipbug"
	"0825": {ico: "0825", flags: 0}, // "Dottler"
	"0826": {ico: "0826", flags: 0}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: 0}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: 0}, // "Nickit"
	"0828": {ico: "0828", flags: 0}, // "Thievul"
	"0829": {ico: "0829", flags: 0}, // "Gossifleur"
	"0830": {ico: "0830", flags: 0}, // "Eldegoss"
	"0831": {ico: "0831", flags: 0}, // "Wooloo"
	"0832": {ico: "0832", flags: 0}, // "Dubwool"
	"0833": {ico: "0833", flags: 0}, // "Chewtle"
	"0834": {ico: "0834", flags: 0}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: 0}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: 0}, // "Yamper"
	"0836": {ico: "0836", flags: 0}, // "Boltund"
	"0837": {ico: "0837", flags: 0}, // "Rolycoly"
	"0838": {ico: "0838", flags: 0}, // "Carkol"
	"0839": {ico: "0839", flags: 0}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: 0}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: 0}, // "Applin"
	"0841": {ico: "0841", flags: 0}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: 0}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: 0}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: 0}, // "Silicobra"
	"0844": {ico: "0844", flags: 0}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: 0}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: 0}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: 0}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: 0}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: 0}, // "Arrokuda"
	"0847": {ico: "0847", flags: 0}, // "Barraskewda"
	"0848": {ico: "0848", flags: 0}, // "Toxel"
//	"0849": {ico: "0849", flags: 0}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: 0}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: 0}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: 0}, // "Sizzlipede"
	"0851": {ico: "0851", flags: 0}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: 0}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: 0}, // "Clobbopus"
	"0853": {ico: "0853", flags: 0}, // "Grapploct"
//	"0854": {ico: "0854", flags: 0}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854", flags: 0}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854", flags: 0}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: 0}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855", flags: 0}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855", flags: 0}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: 0}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: 0}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: 0}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: 0}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: 0}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: 0}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: 0}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: 0}, // "Gigantamax Grimmsnarl" // male only
	"0862": {ico: "0862", flags: 0}, // "Obstagoon"
	"0863": {ico: "0863", flags: 0}, // "Perrserker"
	"0864": {ico: "0864", flags: 0}, // "Cursola"
	"0865": {ico: "0865", flags: 0}, // "Sirfetch'd"
	"0866": {ico: "0866", flags: 0}, // "Mr. Rime"
	"0867": {ico: "0867", flags: 0}, // "Runerigus"
	"0868": {ico: "0868", flags: 0}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: 0}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: 0}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: 0}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: 0}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: 0}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: 0}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: 0}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: 0}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: 0}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: 0}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: 0}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: 0}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: 0}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: 0}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: 0}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: 0}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: 0}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: 0}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: 0}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: 0}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: 0}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: 0}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: 0}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: 0}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: 0}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: 0}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: 0}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: 0}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: 0}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: 0}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: 0}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: 0}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: 0}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: 0}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: 0}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: 0}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: 0}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: 0}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: 0}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: 0}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: 0}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: 0}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: 0}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: 0}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: 0}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: 0}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: 0}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: 0}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: 0}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: 0}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: 0}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: 0}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: 0}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: 0}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: 0}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: 0}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: 0}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: 0}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: 0}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: 0}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: 0}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: 0}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: 0}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: 0}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: 0}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: 0}, // "Pincurchin"
	"0872": {ico: "0872", flags: 0}, // "Snom"
	"0873": {ico: "0873", flags: 0}, // "Frosmoth"
	"0874": {ico: "0874", flags: 0}, // "Stonjourner"
//	"0875": {ico: "0875", flags: 0}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: 0}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: 0}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: 0}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: 0}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: 0}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: 0}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: 0}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: 0}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: 0}, // "Cufant"
	"0879": {ico: "0879", flags: 0}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: 0}, // "Gigantamax Copperajah"
	"0880": {ico: "0880", flags: 0}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: 0}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: 0}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: 0}, // "Arctovish" // uknown gender
	"0884": {ico: "0884", flags: 0}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: 0}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: 0}, // "Dreepy"
	"0886": {ico: "0886", flags: 0}, // "Drakloak"
	"0887": {ico: "0887", flags: 0}, // "Dragapult"
//	"0888": {ico: "0888", flags: 0}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: 0}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: 0}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: 0}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: 0}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: 0}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: 0}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: 0}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: 0}, // "Kubfu"
	"0892": {ico: "0892", flags: 0}, // "Urshifu"
	"0892-sigle": {ico: "0892-sigle", flags: 0}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: 0}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: 0}, // "Rapid Strike Style Urshifu"2021-04-02
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: 0}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: 0}, // "Zarude" // unknown gender
	"0893-dada": {ico: "0893-dada", flags: 0}, // "Dada Zarude" // unknown gender
	"0894": {ico: "0894", flags: 0}, // "Regieleki" // unknown gender
	"0895": {ico: "0895", flags: 0}, // "Regidrago" // unknown gender
	"0896": {ico: "0896", flags: 0}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: 0}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: 0}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: 0}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: 0}, // "Shadow Rider Calyrex" // uknown gender
}

const _Regdex_eHome	=
{
	"0001": {ico: "0001", flags: 0}, // "Bulbasaur"
	"0002": {ico: "0002", flags: 0}, // "Ivysaur"
//	"0003": {ico: "0003", flags: 0}, // "Venusaur"
	"0003-m": {ico: "0003-m", flags: 0}, // "Venusaur♂"
	"0003-f": {ico: "0003-f", flags: 0}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: 0}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: 0}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: 0}, // "Charmander"
	"0005": {ico: "0005", flags: 0}, // "Charmeleon"
	"0006": {ico: "0006", flags: 0}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: 0}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: 0}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: 0}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: 0}, // "Squirtle"
	"0008": {ico: "0008", flags: 0}, // "Wartortle"
	"0009": {ico: "0009", flags: 0}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: 0}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: 0}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: 0}, // "Caterpie"
	"0011": {ico: "0011", flags: 0}, // "Metapod"
//	"0012": {ico: "0012", flags: 0}, // "Butterfree"
	"0012-m": {ico: "0012-m", flags: 0}, // "Butterfree♂"
	"0012-f": {ico: "0012-f", flags: 0}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: 0}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: 0}, // "Weedle"
	"0014": {ico: "0014", flags: 0}, // "Kakuna"
	"0015": {ico: "0015", flags: 0}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: 0}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: 0}, // "Pidgey"
	"0017": {ico: "0017", flags: 0}, // "Pidgeotto"
	"0018": {ico: "0018", flags: 0}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: 0}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: 0}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: 0}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: 0}, // "Rattata♀"
//	"0020": {ico: "0020", flags: 0}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: 0}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: 0}, // "Raticate♀"
	"0019-alola": {ico: "0019-alola", flags: 0}, // "Alolan Rattata"
	"0020-alola": {ico: "0020-alola", flags: 0}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: 0}, // "Spearow"
	"0022": {ico: "0022", flags: 0}, // "Fearow"
	"0023": {ico: "0023", flags: 0}, // "Ekans"
	"0024": {ico: "0024", flags: 0}, // "Arbok"
	"0172": {ico: "0172", flags: 0}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: 0}, // "Spiky-eared Pichu" // female only
//	"0025": {ico: "0025", flags: 0}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: 0}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: 0}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: 0}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: 0}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: 0}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: 0}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: 0}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: 0}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: 0}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: 0}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: 0}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: 0}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: 0}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: 0}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: 0}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: 0}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: 0}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: 0}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: 0}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: 0}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: 0}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: 0}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: 0}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: 0}, // "Sandshrew"
	"0028": {ico: "0028", flags: 0}, // "Sandslash"
	"0027-alola": {ico: "0027-alola", flags: 0}, // "Alolan Sandshrew"
	"0028-alola": {ico: "0028-alola", flags: 0}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: 0}, // "Nidoran"
//	"0032": {ico: "0032", flags: 0}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: 0}, // "Nidoran♂"
	"0029-f": {ico: "0029-f", flags: 0}, // "Nidoran♀"
	"0030": {ico: "0030", flags: 0}, // "Nidorina"
	"0031": {ico: "0031", flags: 0}, // "Nidoqueen"
	"0033": {ico: "0033", flags: 0}, // "Nidorino"
	"0034": {ico: "0034", flags: 0}, // "Nidoking"
	"0173": {ico: "0173", flags: 0}, // "Cleffa"
	"0035": {ico: "0035", flags: 0}, // "Clefairy"
	"0036": {ico: "0036", flags: 0}, // "Clefable"
	"0037": {ico: "0037", flags: 0}, // "Vulpix"
	"0038": {ico: "0038", flags: 0}, // "Ninetales"
	"0037-alola": {ico: "0037-alola", flags: 0}, // "Alolan Vulpix"
	"0038-alola": {ico: "0038-alola", flags: 0}, // "Alolan Ninetales"
	"0174": {ico: "0174", flags: 0}, // "Igglybuff"
	"0039": {ico: "0039", flags: 0}, // "Jigglypuff"
	"0040": {ico: "0040", flags: 0}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: 0}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: 0}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: 0}, // "Zubat♀"
//	"0042": {ico: "0042", flags: 0}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: 0}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: 0}, // "Golbat♀"
	"0169": {ico: "0169", flags: 0}, // "Crobat"
	"0043": {ico: "0043", flags: 0}, // "Oddish"
//	"0044": {ico: "0044", flags: 0}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: 0}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: 0}, // "Gloom♀"
//	"0045": {ico: "0045", flags: 0}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: 0}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: 0}, // "Vileplume♀"
	"0182": {ico: "0182", flags: 0}, // "Bellossom"
	"0046": {ico: "0046", flags: 0}, // "Paras"
	"0047": {ico: "0047", flags: 0}, // "Parasect"
	"0048": {ico: "0048", flags: 0}, // "Venonat"
	"0049": {ico: "0049", flags: 0}, // "Venomoth"
	"0050": {ico: "0050", flags: 0}, // "Diglett"
	"0051": {ico: "0051", flags: 0}, // "Dugtrio"
	"0050-alola": {ico: "0050-alola", flags: 0}, // "Alolan Diglett"
	"0051-alola": {ico: "0051-alola", flags: 0}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: 0}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: 0}, // "Gigantamax Meowth"
	"0053": {ico: "0053", flags: 0}, // "Persian"
	"0052-alola": {ico: "0052-alola", flags: 0}, // "Alolan Meowth"
	"0053-alola": {ico: "0053-alola", flags: 0}, // "Alolan Persian"
	"0052-galar": {ico: "0052-galar", flags: 0}, // "Galarian Meowth"
	"0863": {ico: "0863", flags: 0}, // "Perrserker"
	"0054": {ico: "0054", flags: 0}, // "Psyduck"
	"0055": {ico: "0055", flags: 0}, // "Golduck"
	"0056": {ico: "0056", flags: 0}, // "Mankey"
	"0057": {ico: "0057", flags: 0}, // "Primeape"
	"0058": {ico: "0058", flags: 0}, // "Growlithe"
	"0059": {ico: "0059", flags: 0}, // "Arcanine"
	"0060": {ico: "0060", flags: 0}, // "Poliwag"
	"0061": {ico: "0061", flags: 0}, // "Poliwhirl"
	"0062": {ico: "0062", flags: 0}, // "Poliwrath"
//	"0186": {ico: "0186", flags: 0}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: 0}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: 0}, // "Politoed♀"
	"0063": {ico: "0063", flags: 0}, // "Abra"
//	"0064": {ico: "0064", flags: 0}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: 0}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: 0}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: 0}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: 0}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: 0}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: 0}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: 0}, // "Machop"
	"0067": {ico: "0067", flags: 0}, // "Machoke"
	"0068": {ico: "0068", flags: 0}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: 0}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: 0}, // "Bellsprout"
	"0070": {ico: "0070", flags: 0}, // "Weepinbell"
	"0071": {ico: "0071", flags: 0}, // "Victreebel"
	"0072": {ico: "0072", flags: 0}, // "Tentacool"
	"0073": {ico: "0073", flags: 0}, // "Tentacruel"
	"0074": {ico: "0074", flags: 0}, // "Geodude"
	"0075": {ico: "0075", flags: 0}, // "Graveler"
	"0076": {ico: "0076", flags: 0}, // "Golem"
	"0074-alola": {ico: "0074-alola", flags: 0}, // "Alolan Geodude"
	"0075-alola": {ico: "0075-alola", flags: 0}, // "Alolan Graveler"
	"0076-alola": {ico: "0076-alola", flags: 0}, // "Alolan Golem"
	"0077": {ico: "0077", flags: 0}, // "Ponyta"
	"0078": {ico: "0078", flags: 0}, // "Rapidash"
	"0077-galar": {ico: "0077-galar", flags: 0}, // "Galarian Ponyta"
	"0078-galar": {ico: "0078-galar", flags: 0}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: 0}, // "Slowpoke"
	"0080": {ico: "0080", flags: 0}, // "Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: 0}, // "Mega Slowbro"
	"0199": {ico: "0199", flags: 0}, // "Slowking"
	"0079-galar": {ico: "0079-galar", flags: 0}, // "Galarian Slowpoke"
	"0080-galar": {ico: "0080-galar", flags: 0}, // "Galarian Slowbro"
	"0199-galar": {ico: "0199-galar", flags: 0}, // "Galarian Slowking"
	"0081": {ico: "0081", flags: 0}, // "Magnemite"
	"0082": {ico: "0082", flags: 0}, // "Magneton"
	"0462": {ico: "0462", flags: 0}, // "Magnezone" // uknown gender
	"0083": {ico: "0083", flags: 0}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: 0}, // "Galarian Farfetch'd"
	"0865": {ico: "0865", flags: 0}, // "Sirfetch'd"
//	"0084": {ico: "0084", flags: 0}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: 0}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: 0}, // "Doduo♀"
//	"0085": {ico: "0085", flags: 0}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: 0}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: 0}, // "Dodrio♀"
	"0086": {ico: "0086", flags: 0}, // "Seel"
	"0087": {ico: "0087", flags: 0}, // "Dewgong"
	"0088": {ico: "0088", flags: 0}, // "Grimer"
	"0089": {ico: "0089", flags: 0}, // "Muk"
	"0088-alola": {ico: "0088-alola", flags: 0}, // "Alolan Grimer"
	"0089-alola": {ico: "0089-alola", flags: 0}, // "Alolan Muk"
	"0090": {ico: "0090", flags: 0}, // "Shellder"
	"0091": {ico: "0091", flags: 0}, // "Cloyster"
	"0092": {ico: "0092", flags: 0}, // "Gastly"
	"0093": {ico: "0093", flags: 0}, // "Haunter"
	"0094": {ico: "0094", flags: 0}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: 0}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: 0}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: 0}, // "Onix"
//	"0208": {ico: "0208", flags: 0}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: 0}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: 0}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: 0}, // "Mega Steelix"
	"0096": {ico: "0096", flags: 0}, // "Drowzee"
//	"0097": {ico: "0097", flags: 0}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: 0}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: 0}, // "Hypno♀"
	"0098": {ico: "0098", flags: 0}, // "Krabby"
	"0099": {ico: "0099", flags: 0}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: 0}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: 0}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: 0}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: 0}, // "Exeggcute"
	"0103": {ico: "0103", flags: 0}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: 0}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: 0}, // "Cubone"
	"0105": {ico: "0105", flags: 0}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: 0}, // "Alolan Marowak"
	"0236": {ico: "0236", flags: 0}, // "Tyrogue" // male only
	"0106": {ico: "0106", flags: 0}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: 0}, // "Hitmonchan" // male only
	"0237": {ico: "0237", flags: 0}, // "Hitmontop" // male only
	"0108": {ico: "0108", flags: 0}, // "Lickitung"
	"0463": {ico: "0463", flags: 0}, // "Lickilicky"
	"0109": {ico: "0109", flags: 0}, // "Koffing"
	"0110": {ico: "0110", flags: 0}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: 0}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: 0}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: 0}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: 0}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: 0}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: 0}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: 0}, // "Rhydon♀"
//	"0464": {ico: "0464", flags: 0}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: 0}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: 0}, // "Rhyperior♀"
	"0440": {ico: "0440", flags: 0}, // "Happiny" // female only
	"0113": {ico: "0113", flags: 0}, // "Chansey" // female only
	"0242": {ico: "0242", flags: 0}, // "Blissey" // female only
	"0114": {ico: "0114", flags: 0}, // "Tangela"
//	"0465": {ico: "0465", flags: 0}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: 0}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: 0}, // "Tangrowth♀"
	"0115": {ico: "0115", flags: 0}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: 0}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: 0}, // "Horsea"
	"0117": {ico: "0117", flags: 0}, // "Seadra"
	"0230": {ico: "0230", flags: 0}, // "Kingdra"
//	"0118": {ico: "0118", flags: 0}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: 0}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: 0}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: 0}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: 0}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: 0}, // "Seaking♀"
	"0120": {ico: "0120", flags: 0}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: 0}, // "Starmie" // uknown gender
	"0439": {ico: "0439", flags: 0}, // "Mime Jr."
	"0122": {ico: "0122", flags: 0}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: 0}, // "Galarian Mr. Mime"
	"0866": {ico: "0866", flags: 0}, // "Mr. Rime"
//	"0123": {ico: "0123", flags: 0}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: 0}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: 0}, // "Scyther♀"
//	"0212": {ico: "0212", flags: 0}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: 0}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: 0}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: 0}, // "Mega Scizor"
	"0238": {ico: "0238", flags: 0}, // "Smoochum" // female only
	"0124": {ico: "0124", flags: 0}, // "Jynx" // female only
	"0239": {ico: "0239", flags: 0}, // "Elekid"
	"0125": {ico: "0125", flags: 0}, // "Electabuzz"
	"0466": {ico: "0466", flags: 0}, // "Electivire"
	"0240": {ico: "0240", flags: 0}, // "Magby"
	"0126": {ico: "0126", flags: 0}, // "Magmar"
	"0467": {ico: "0467", flags: 0}, // "Magmortar"
	"0127": {ico: "0127", flags: 0}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: 0}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: 0}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: 0}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: 0}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: 0}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: 0}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: 0}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: 0}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: 0}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: 0}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: 0}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: 0}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: 0}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: 0}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: 0}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: 0}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: 0}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: 0}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: 0}, // "Vaporeon"
	"0135": {ico: "0135", flags: 0}, // "Jolteon"
	"0136": {ico: "0136", flags: 0}, // "Flareon"
	"0196": {ico: "0196", flags: 0}, // "Espeon"
	"0197": {ico: "0197", flags: 0}, // "Umbreon"
	"0470": {ico: "0470", flags: 0}, // "Leafeon"
	"0471": {ico: "0471", flags: 0}, // "Glaceon"
	"0700": {ico: "0700", flags: 0}, // "Sylveon"
	"0137": {ico: "0137", flags: 0}, // "Porygon" // uknown gender
	"0233": {ico: "0233", flags: 0}, // "Porygon2" // uknown gender
	"0474": {ico: "0474", flags: 0}, // "Porygon-Z" // uknown gender
	"0138": {ico: "0138", flags: 0}, // "Omanyte"
	"0139": {ico: "0139", flags: 0}, // "Omastar"
	"0140": {ico: "0140", flags: 0}, // "Kabuto"
	"0141": {ico: "0141", flags: 0}, // "Kabutops"
	"0142": {ico: "0142", flags: 0}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: 0}, // "Mega Aerodactyl"
	"0345": {ico: "0345", flags: 0}, // "Lileep"
	"0346": {ico: "0346", flags: 0}, // "Cradily"
	"0347": {ico: "0347", flags: 0}, // "Anorith"
	"0348": {ico: "0348", flags: 0}, // "Armaldo"
	"0408": {ico: "0408", flags: 0}, // "Cranidos"
	"0409": {ico: "0409", flags: 0}, // "Rampardos"
	"0410": {ico: "0410", flags: 0}, // "Shieldon"
	"0411": {ico: "0411", flags: 0}, // "Bastiodon"
	"0564": {ico: "0564", flags: 0}, // "Tirtouga"
	"0565": {ico: "0565", flags: 0}, // "Carracosta"
	"0566": {ico: "0566", flags: 0}, // "Archen"
	"0567": {ico: "0567", flags: 0}, // "Archeops"
	"0696": {ico: "0696", flags: 0}, // "Tyrunt"
	"0697": {ico: "0697", flags: 0}, // "Tyrantrum"
	"0698": {ico: "0698", flags: 0}, // "Amaura"
	"0699": {ico: "0699", flags: 0}, // "Aurorus"
	"0880": {ico: "0880", flags: 0}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: 0}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: 0}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: 0}, // "Arctovish" // uknown gender
	"0446": {ico: "0446", flags: 0}, // "Munchlax"
	"0143": {ico: "0143", flags: 0}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: 0}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: 0}, // "Articuno" // uknown gender
	"0145": {ico: "0145", flags: 0}, // "Zapdos" // uknown gender
	"0146": {ico: "0146", flags: 0}, // "Moltres" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: 0}, // "Galarian Articuno" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: 0}, // "Galarian Zapdos" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: 0}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: 0}, // "Dratini"
	"0148": {ico: "0148", flags: 0}, // "Dragonair"
	"0149": {ico: "0149", flags: 0}, // "Dragonite"
	"0150": {ico: "0150", flags: 0}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: 0}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: 0}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: 0}, // "Mew" // uknown gender
	"0152": {ico: "0152", flags: 0}, // "Chikorita"
	"0153": {ico: "0153", flags: 0}, // "Bayleef"
//	"0154": {ico: "0154", flags: 0}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: 0}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: 0}, // "Meganium♀"
	"0155": {ico: "0155", flags: 0}, // "Cyndaquil"
	"0156": {ico: "0156", flags: 0}, // "Quilava"
	"0157": {ico: "0157", flags: 0}, // "Typhlosion"
	"0158": {ico: "0158", flags: 0}, // "Totodile"
	"0159": {ico: "0159", flags: 0}, // "Croconaw"
	"0160": {ico: "0160", flags: 0}, // "Feraligatr"
	"0161": {ico: "0161", flags: 0}, // "Sentret"
	"0162": {ico: "0162", flags: 0}, // "Furret"
	"0163": {ico: "0163", flags: 0}, // "Hoothoot"
	"0164": {ico: "0164", flags: 0}, // "Noctowl"
//	"0165": {ico: "0165", flags: 0}, // "Ledyba"
//	"0166": {ico: "0166", flags: 0}, // "Ledian"
	"0165-m": {ico: "0165-m", flags: 0}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: 0}, // "Ledyba♀"
	"0166-m": {ico: "0166-m", flags: 0}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: 0}, // "Ledian♀"
	"0167": {ico: "0167", flags: 0}, // "Spinarak"
	"0168": {ico: "0168", flags: 0}, // "Ariados"
	"0170": {ico: "0170", flags: 0}, // "Chinchou"
	"0171": {ico: "0171", flags: 0}, // "Lanturn"
	"0175": {ico: "0175", flags: 0}, // "Togepi"
	"0176": {ico: "0176", flags: 0}, // "Togetic"
	"0468": {ico: "0468", flags: 0}, // "Togekiss"
	"0177": {ico: "0177", flags: 0}, // "Natu"
//	"0178": {ico: "0178", flags: 0}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: 0}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: 0}, // "Xatu♀"
	"0179": {ico: "0179", flags: 0}, // "Mareep"
	"0180": {ico: "0180", flags: 0}, // "Flaaffy"
	"0181": {ico: "0181", flags: 0}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: 0}, // "Mega Ampharos"
	"0298": {ico: "0298", flags: 0}, // "Azurill"
	"0183": {ico: "0183", flags: 0}, // "Marill"
	"0184": {ico: "0184", flags: 0}, // "Azumarill"
	"0438": {ico: "0438", flags: 0}, // "Bonsly"
//	"0185": {ico: "0185", flags: 0}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: 0}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: 0}, // "Sudowoodo♀"
	"0187": {ico: "0187", flags: 0}, // "Hoppip"
	"0188": {ico: "0188", flags: 0}, // "Skiploom"
	"0189": {ico: "0189", flags: 0}, // "Jumpluff"
//	"0190": {ico: "0190", flags: 0}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: 0}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: 0}, // "Aipom♀"
//	"0424": {ico: "0424", flags: 0}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: 0}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: 0}, // "Ambipom♀"
	"0191": {ico: "0191", flags: 0}, // "Sunkern"
	"0192": {ico: "0192", flags: 0}, // "Sunflora"
	"0193": {ico: "0193", flags: 0}, // "Yanma"
	"0469": {ico: "0469", flags: 0}, // "Yanmega"
//	"0194": {ico: "0194", flags: 0}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: 0}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: 0}, // "Wooper♀"
//	"0195": {ico: "0195", flags: 0}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: 0}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: 0}, // "Quagsire♀"
//	"0198": {ico: "0198", flags: 0}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: 0}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: 0}, // "Murkrow♀"
	"0430": {ico: "0430", flags: 0}, // "Honchkrow"
	"0200": {ico: "0200", flags: 0}, // "Misdreavus"
	"0429": {ico: "0429", flags: 0}, // "Mismagius"
//	"0201": {ico: "0201", flags: 0}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: 0}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: 0}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: 0}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: 0}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: 0}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: 0}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: 0}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: 0}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: 0}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: 0}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: 0}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: 0}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: 0}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: 0}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: 0}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: 0}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: 0}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: 0}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: 0}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: 0}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: 0}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: 0}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: 0}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: 0}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: 0}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: 0}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: 0}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: 0}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: 0}, // "Unown ?????" // uknown gender
	"0360": {ico: "0360", flags: 0}, // "Wynaut"
//	"0202": {ico: "0202", flags: 0}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: 0}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: 0}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: 0}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: 0}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: 0}, // "Girafarig♀"
	"0204": {ico: "0204", flags: 0}, // "Pineco"
	"0205": {ico: "0205", flags: 0}, // "Forretress"
	"0206": {ico: "0206", flags: 0}, // "Dunsparce"
//	"0207": {ico: "0207", flags: 0}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: 0}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: 0}, // "Gligar♀"
	"0472": {ico: "0472", flags: 0}, // "Gliscor"
	"0209": {ico: "0209", flags: 0}, // "Snubbull"
	"0210": {ico: "0210", flags: 0}, // "Granbull"
	"0211": {ico: "0211", flags: 0}, // "Qwilfish"
	"0213": {ico: "0213", flags: 0}, // "Shuckle"
//	"0214": {ico: "0214", flags: 0}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: 0}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: 0}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: 0}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: 0}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: 0}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: 0}, // "Sneasel♀"
//	"0461": {ico: "0461", flags: 0}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: 0}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: 0}, // "Weavile♀"
	"0216": {ico: "0216", flags: 0}, // "Teddiursa"
//	"0217": {ico: "0217", flags: 0}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: 0}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: 0}, // "Ursaring♀"
	"0218": {ico: "0218", flags: 0}, // "Slugma"
	"0219": {ico: "0219", flags: 0}, // "Magcargo"
	"0220": {ico: "0220", flags: 0}, // "Swinub"
//	"0221": {ico: "0221", flags: 0}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: 0}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: 0}, // "Piloswine♀"
//	"0473": {ico: "0473", flags: 0}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: 0}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: 0}, // "Mamoswine♀"
	"0222": {ico: "0222", flags: 0}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: 0}, // "Galarian Corsola"
	"0864": {ico: "0864", flags: 0}, // "Cursola"
	"0223": {ico: "0223", flags: 0}, // "Remoraid"
//	"0224": {ico: "0224", flags: 0}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: 0}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: 0}, // "Octillery♀"
	"0225": {ico: "0225", flags: 0}, // "Delibird"
	"0458": {ico: "0458", flags: 0}, // "Mantyke"
	"0226": {ico: "0226", flags: 0}, // "Mantine"
	"0227": {ico: "0227", flags: 0}, // "Skarmory"
	"0228": {ico: "0228", flags: 0}, // "Houndour"
//	"0229": {ico: "0229", flags: 0}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: 0}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: 0}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: 0}, // "Mega Houndoom"
	"0231": {ico: "0231", flags: 0}, // "Phanpy"
//	"0232": {ico: "0232", flags: 0}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: 0}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: 0}, // "Donphan♀"
	"0234": {ico: "0234", flags: 0}, // "Stantler"
	"0235": {ico: "0235", flags: 0}, // "Smeargle"
	"0241": {ico: "0241", flags: 0}, // "Miltank" // female only
	"0243": {ico: "0243", flags: 0}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: 0}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: 0}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: 0}, // "Larvitar"
	"0247": {ico: "0247", flags: 0}, // "Pupitar"
	"0248": {ico: "0248", flags: 0}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: 0}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: 0}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: 0}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: 0}, // "Celebi" // uknown gender
	"0252": {ico: "0252", flags: 0}, // "Treecko"
	"0253": {ico: "0253", flags: 0}, // "Grovyle"
	"0254": {ico: "0254", flags: 0}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: 0}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: 0}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: 0}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: 0}, // "Torchic♀"
//	"0256": {ico: "0256", flags: 0}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: 0}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: 0}, // "Combusken♀"
//	"0257": {ico: "0257", flags: 0}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: 0}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: 0}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: 0}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: 0}, // "Mudkip"
	"0259": {ico: "0259", flags: 0}, // "Marshtomp"
	"0260": {ico: "0260", flags: 0}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: 0}, // "Mega Swampert"
	"0261": {ico: "0261", flags: 0}, // "Poochyena"
	"0262": {ico: "0262", flags: 0}, // "Mightyena"
	"0263": {ico: "0263", flags: 0}, // "Zigzagoon"
	"0264": {ico: "0264", flags: 0}, // "Linoone"
	"0263-galar": {ico: "0263-galar", flags: 0}, // "Galarian Zigzagoon"
	"0264-galar": {ico: "0264-galar", flags: 0}, // "Galarian Linoone"
	"0862": {ico: "0862", flags: 0}, // "Obstagoon"
	"0265": {ico: "0265", flags: 0}, // "Wurmple"
	"0266": {ico: "0266", flags: 0}, // "Silcoon"
//	"0267": {ico: "0267", flags: 0}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: 0}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: 0}, // "Beautifly♀"
	"0268": {ico: "0268", flags: 0}, // "Cascoon"
//	"0269": {ico: "0269", flags: 0}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: 0}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: 0}, // "Dustox♀"
	"0270": {ico: "0270", flags: 0}, // "Lotad"
	"0271": {ico: "0271", flags: 0}, // "Lombre"
//	"0272": {ico: "0272", flags: 0}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: 0}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: 0}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: 0}, // "Seedot"
//	"0274": {ico: "0274", flags: 0}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: 0}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: 0}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: 0}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: 0}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: 0}, // "Shiftry♀"
	"0276": {ico: "0276", flags: 0}, // "Taillow"
	"0277": {ico: "0277", flags: 0}, // "Swellow"
	"0278": {ico: "0278", flags: 0}, // "Wingull"
	"0279": {ico: "0279", flags: 0}, // "Pelipper"
	"0280": {ico: "0280", flags: 0}, // "Ralts"
	"0281": {ico: "0281", flags: 0}, // "Kirlia"
	"0282": {ico: "0282", flags: 0}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: 0}, // "Mega Gardevoir"
	"0475": {ico: "0475", flags: 0}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: 0}, // "Mega Gallade" // male only
	"0283": {ico: "0283", flags: 0}, // "Surskit"
	"0284": {ico: "0284", flags: 0}, // "Masquerain"
	"0285": {ico: "0285", flags: 0}, // "Shroomish"
	"0286": {ico: "0286", flags: 0}, // "Breloom"
	"0287": {ico: "0287", flags: 0}, // "Slakoth"
	"0288": {ico: "0288", flags: 0}, // "Vigoroth"
	"0289": {ico: "0289", flags: 0}, // "Slaking"
	"0290": {ico: "0290", flags: 0}, // "Nincada"
	"0291": {ico: "0291", flags: 0}, // "Ninjask"
	"0292": {ico: "0292", flags: 0}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: 0}, // "Whismur"
	"0294": {ico: "0294", flags: 0}, // "Loudred"
	"0295": {ico: "0295", flags: 0}, // "Exploud"
	"0296": {ico: "0296", flags: 0}, // "Makuhita"
	"0297": {ico: "0297", flags: 0}, // "Hariyama"
	"0299": {ico: "0299", flags: 0}, // "Nosepass"
	"0476": {ico: "0476", flags: 0}, // "Probopass"
	"0300": {ico: "0300", flags: 0}, // "Skitty"
	"0301": {ico: "0301", flags: 0}, // "Delcatty"
	"0302": {ico: "0302", flags: 0}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: 0}, // "Mega Sableye"
	"0303": {ico: "0303", flags: 0}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: 0}, // "Mega Mawile"
	"0304": {ico: "0304", flags: 0}, // "Aron"
	"0305": {ico: "0305", flags: 0}, // "Lairon"
	"0306": {ico: "0306", flags: 0}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: 0}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: 0}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: 0}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: 0}, // "Meditite♀"
//	"0308": {ico: "0308", flags: 0}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: 0}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: 0}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: 0}, // "Mega Medicham"
	"0309": {ico: "0309", flags: 0}, // "Electrike"
	"0310": {ico: "0310", flags: 0}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: 0}, // "Mega Manectric"
	"0311": {ico: "0311", flags: 0}, // "Plusle"
	"0312": {ico: "0312", flags: 0}, // "Minun"
	"0313": {ico: "0313", flags: 0}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: 0}, // "Illumise" // female only
	"0406": {ico: "0406", flags: 0}, // "Budew"
//	"0315": {ico: "0315", flags: 0}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: 0}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: 0}, // "Roselia♀"
//	"0407": {ico: "0407", flags: 0}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: 0}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: 0}, // "Roserade♀"
//	"0316": {ico: "0316", flags: 0}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: 0}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: 0}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: 0}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: 0}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: 0}, // "Swalot♀"
	"0318": {ico: "0318", flags: 0}, // "Carvanha"
	"0319": {ico: "0319", flags: 0}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: 0}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: 0}, // "Wailmer"
	"0321": {ico: "0321", flags: 0}, // "Wailord"
//	"0322": {ico: "0322", flags: 0}, // "Numel"
	"0322-m": {ico: "0322-m", flags: 0}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: 0}, // "Numel♀"
//	"0323": {ico: "0323", flags: 0}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: 0}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: 0}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: 0}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: 0}, // "Torkoal"
	"0325": {ico: "0325", flags: 0}, // "Spoink"
	"0326": {ico: "0326", flags: 0}, // "Grumpig"
	"0327": {ico: "0327", flags: 0}, // "Spinda"
	"0328": {ico: "0328", flags: 0}, // "Trapinch"
	"0329": {ico: "0329", flags: 0}, // "Vibrava"
	"0330": {ico: "0330", flags: 0}, // "Flygon"
	"0331": {ico: "0331", flags: 0}, // "Cacnea"
//	"0332": {ico: "0332", flags: 0}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: 0}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: 0}, // "Cacturne♀"
	"0333": {ico: "0333", flags: 0}, // "Swablu"
	"0334": {ico: "0334", flags: 0}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: 0}, // "Mega Altaria"
	"0335": {ico: "0335", flags: 0}, // "Zangoose"
	"0336": {ico: "0336", flags: 0}, // "Seviper"
	"0337": {ico: "0337", flags: 0}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: 0}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: 0}, // "Barboach"
	"0340": {ico: "0340", flags: 0}, // "Whiscash"
	"0341": {ico: "0341", flags: 0}, // "Corphish"
	"0342": {ico: "0342", flags: 0}, // "Crawdaunt"
	"0343": {ico: "0343", flags: 0}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: 0}, // "Claydol" // uknown gender
	"0349": {ico: "0349", flags: 0}, // "Feebas"
//	"0350": {ico: "0350", flags: 0}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: 0}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: 0}, // "Milotic♀"
	"0351": {ico: "0351", flags: 0}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: 0}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: 0}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: 0}, // "Snowy Castform"
	"0352": {ico: "0352", flags: 0}, // "Kecleon"
	"0353": {ico: "0353", flags: 0}, // "Shuppet"
	"0354": {ico: "0354", flags: 0}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: 0}, // "Mega Banette"
	"0355": {ico: "0355", flags: 0}, // "Duskull"
	"0356": {ico: "0356", flags: 0}, // "Dusclops"
	"0477": {ico: "0477", flags: 0}, // "Dusknoir"
	"0357": {ico: "0357", flags: 0}, // "Tropius"
	"0433": {ico: "0433", flags: 0}, // "Chingling"
	"0358": {ico: "0358", flags: 0}, // "Chimecho"
	"0359": {ico: "0359", flags: 0}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: 0}, // "Mega Absol"
	"0361": {ico: "0361", flags: 0}, // "Snorunt"
	"0362": {ico: "0362", flags: 0}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: 0}, // "Mega Glalie"
	"0478": {ico: "0478", flags: 0}, // "Froslass" // female only
	"0363": {ico: "0363", flags: 0}, // "Spheal"
	"0364": {ico: "0364", flags: 0}, // "Sealeo"
	"0365": {ico: "0365", flags: 0}, // "Walrein"
	"0366": {ico: "0366", flags: 0}, // "Clamperl"
	"0367": {ico: "0367", flags: 0}, // "Huntail"
	"0368": {ico: "0368", flags: 0}, // "Gorebyss"
//	"0369": {ico: "0369", flags: 0}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: 0}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: 0}, // "Relicanth♀"
	"0370": {ico: "0370", flags: 0}, // "Luvdisc"
	"0371": {ico: "0371", flags: 0}, // "Bagon"
	"0372": {ico: "0372", flags: 0}, // "Shelgon"
	"0373": {ico: "0373", flags: 0}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: 0}, // "Mega Salamence"
	"0374": {ico: "0374", flags: 0}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: 0}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: 0}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: 0}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: 0}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: 0}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: 0}, // "Registeel" // uknown gender
	"0894": {ico: "0894", flags: 0}, // "Regieleki" // uknown gender
	"0895": {ico: "0895", flags: 0}, // "Regidrago" uknown gender
	"0486": {ico: "0486", flags: 0}, // "Regigigas" // uknown gender
	"0380": {ico: "0380", flags: 0}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: 0}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: 0}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: 0}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: 0}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: 0}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: 0}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: 0}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: 0}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: 0}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: 0}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: 0}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: 0}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: 0}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: 0}, // "Speed Deoxys" // uknown gender
	"0387": {ico: "0387", flags: 0}, // "Turtwig"
	"0388": {ico: "0388", flags: 0}, // "Grotle"
	"0389": {ico: "0389", flags: 0}, // "Torterra"
	"0390": {ico: "0390", flags: 0}, // "Chimchar"
	"0391": {ico: "0391", flags: 0}, // "Monferno"
	"0392": {ico: "0392", flags: 0}, // "Infernape"
	"0393": {ico: "0393", flags: 0}, // "Piplup"
	"0394": {ico: "0394", flags: 0}, // "Prinplup"
	"0395": {ico: "0395", flags: 0}, // "Empoleon"
//	"0396": {ico: "0396", flags: 0}, // "Starly"
	"0396-m": {ico: "0396-m", flags: 0}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: 0}, // "Starly♀"
//	"0397": {ico: "0397", flags: 0}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: 0}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: 0}, // "Staravia♀"
//	"0398": {ico: "0398", flags: 0}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: 0}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: 0}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: 0}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: 0}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: 0}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: 0}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: 0}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: 0}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: 0}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: 0}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: 0}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: 0}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: 0}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: 0}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: 0}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: 0}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: 0}, // "Shinx♀"
//	"0404": {ico: "0404", flags: 0}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: 0}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: 0}, // "Luxio♀"
//	"0405": {ico: "0405", flags: 0}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: 0}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: 0}, // "Luxray♀"
//	"0412": {ico: "0412", flags: 0}, // "Burmy"
//	"0413": {ico: "0413", flags: 0}, // "Wormadam" // female only
	"0412-plant": {ico: "0412-plant", flags: 0}, // "Burmy Plant Cloak"
	"0413-plant": {ico: "0413-plant", flags: 0}, // "Wormadam Plant Cloak" // female only
	"0412-sandy": {ico: "0412-sandy", flags: 0}, // "Burmy Sandy Cloak"
	"0413-sandy": {ico: "0413-sandy", flags: 0}, // "Wormadam Sandy Cloak" // female only
	"0412-trash": {ico: "0412-trash", flags: 0}, // "Burmy Trash Cloak"
	"0413-trash": {ico: "0413-trash", flags: 0}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: 0}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: 0}, // "Combee"
	"0415-m": {ico: "0415-m", flags: 0}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: 0}, // "Combee♀"
	"0416": {ico: "0416", flags: 0}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: 0}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: 0}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: 0}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: 0}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: 0}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: 0}, // "Buizel♀"
//	"0419": {ico: "0419", flags: 0}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: 0}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: 0}, // "Floatzel♀"
	"0420": {ico: "0420", flags: 0}, // "Cherubi"
//	"0421": {ico: "0421", flags: 0}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: 0}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: 0}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: 0}, // "Shellos"
//	"0423": {ico: "0423", flags: 0}, // "Gastrodon"
	"0422-west": {ico: "0422-west", flags: 0}, // "West Sea Shellos"
	"0423-west": {ico: "0423-west", flags: 0}, // "West Sea Gastrodon"
	"0422-east": {ico: "0422-east", flags: 0}, // "East Sea Shellos"
	"0423-east": {ico: "0423-east", flags: 0}, // "East Sea Gastrodon"
	"0425": {ico: "0425", flags: 0}, // "Drifloon"
	"0426": {ico: "0426", flags: 0}, // "Drifblim"
	"0427": {ico: "0427", flags: 0}, // "Buneary"
	"0428": {ico: "0428", flags: 0}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: 0}, // "Mega Lopunny"
	"0431": {ico: "0431", flags: 0}, // "Glameow"
	"0432": {ico: "0432", flags: 0}, // "Purugly"
	"0434": {ico: "0434", flags: 0}, // "Stunky"
	"0435": {ico: "0435", flags: 0}, // "Skuntank"
	"0436": {ico: "0436", flags: 0}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: 0}, // "Bronzong" // uknown gender
	"0441": {ico: "0441", flags: 0}, // "Chatot"
	"0442": {ico: "0442", flags: 0}, // "Spiritomb"
//	"0443": {ico: "0443", flags: 0}, // "Gible"
	"0443-m": {ico: "0443-m", flags: 0}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: 0}, // "Gible♀"
//	"0444": {ico: "0444", flags: 0}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: 0}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: 0}, // "Gabite♀"
//	"0445": {ico: "0445", flags: 0}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: 0}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: 0}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: 0}, // "Mega Garchomp"
	"0447": {ico: "0447", flags: 0}, // "Riolu"
	"0448": {ico: "0448", flags: 0}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: 0}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: 0}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: 0}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: 0}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: 0}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: 0}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: 0}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: 0}, // "Skorupi"
	"0452": {ico: "0452", flags: 0}, // "Drapion"
//	"0453": {ico: "0453", flags: 0}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: 0}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: 0}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: 0}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: 0}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: 0}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: 0}, // "Carnivine"
//	"0456": {ico: "0456", flags: 0}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: 0}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: 0}, // "Finneon♀"
//	"0457": {ico: "0457", flags: 0}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: 0}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: 0}, // "Lumineon♀"
//	"0459": {ico: "0459", flags: 0}, // "Snover"
	"0459-m": {ico: "0459-m", flags: 0}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: 0}, // "Snover♀"
//	"0460": {ico: "0460", flags: 0}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: 0}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: 0}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: 0}, // "Mega Abomasnow"
	"0479": {ico: "0479", flags: 0}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: 0}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: 0}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: 0}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: 0}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: 0}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: 0}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: 0}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: 0}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: 0}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: 0}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: 0}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: 0}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: 0}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: 0}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: 0}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: 0}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: 0}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: 0}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: 0}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: 0}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: 0}, // "Heatran"
//	"0487": {ico: "0487", flags: 0}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: 0}, // "Giratina Altered Forme" // uknown gender
//	"0487-origin": {ico: "0487-origin", flags: 0}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: 0}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: 0}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: 0}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: 0}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: 0}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: 0}, // "Shaymin Land Forme" // uknown gender
//	"0492-sky": {ico: "0492-sky", flags: 0}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: 0}, // "Arceus" // uknown gender
//	"0493-fighting": {ico: "0493-fighting", flags: 0}, // "Fighting Arceus" // uknown gender
//	"0493-flying": {ico: "0493-flying", flags: 0}, // "Flying Arceus" // uknown gender
//	"0493-poison": {ico: "0493-poison", flags: 0}, // "Poison Arceus" // uknown gender
//	"0493-ground": {ico: "0493-ground", flags: 0}, // "Ground Arceus" // uknown gender
//	"0493-rock": {ico: "0493-rock", flags: 0}, // "Rock Arceus" // uknown gender
//	"0493-bug": {ico: "0493-bug", flags: 0}, // "Bug Arceus" // uknown gender
//	"0493-ghost": {ico: "0493-ghost", flags: 0}, // "Ghost Arceus" // uknown gender
//	"0493-steel": {ico: "0493-steel", flags: 0}, // "Steel Arceus" // uknown gender
//	"0493-fire": {ico: "0493-fire", flags: 0}, // "Fire Arceus" // uknown gender
//	"0493-water": {ico: "0493-water", flags: 0}, // "Water Arceus" // uknown gender
//	"0493-grass": {ico: "0493-grass", flags: 0}, // "Grass Arceus" // uknown gender
//	"0493-electric": {ico: "0493-electric", flags: 0}, // "Electric Arceus" // uknown gender
//	"0493-psychic": {ico: "0493-psychic", flags: 0}, // "Psychic Arceus" // uknown gender
//	"0493-ice": {ico: "0493-ice", flags: 0}, // "Ice Arceus" // uknown gender
//	"0493-dragon": {ico: "0493-dragon", flags: 0}, // "Dragon Arceus" // uknown gender
//	"0493-dark": {ico: "0493-dark", flags: 0}, // "Dark Arceus" // uknown gender
//	"0493-fairy": {ico: "0493-fairy", flags: 0}, // "Fairy Arceus" // uknown gender
	"0494": {ico: "0494", flags: 0}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: 0}, // "Snivy"
	"0496": {ico: "0496", flags: 0}, // "Servine"
	"0497": {ico: "0497", flags: 0}, // "Serperior"
	"0498": {ico: "0498", flags: 0}, // "Tepig"
	"0499": {ico: "0499", flags: 0}, // "Pignite"
	"0500": {ico: "0500", flags: 0}, // "Emboar"
	"0501": {ico: "0501", flags: 0}, // "Oshawott"
	"0502": {ico: "0502", flags: 0}, // "Dewott"
	"0503": {ico: "0503", flags: 0}, // "Samurott"
	"0504": {ico: "0504", flags: 0}, // "Patrat"
	"0505": {ico: "0505", flags: 0}, // "Watchog"
	"0506": {ico: "0506", flags: 0}, // "Lillipup"
	"0507": {ico: "0507", flags: 0}, // "Herdier"
	"0508": {ico: "0508", flags: 0}, // "Stoutland"
	"0509": {ico: "0509", flags: 0}, // "Purrloin"
	"0510": {ico: "0510", flags: 0}, // "Liepard"
	"0511": {ico: "0511", flags: 0}, // "Pansage"
	"0512": {ico: "0512", flags: 0}, // "Simisage"
	"0513": {ico: "0513", flags: 0}, // "Pansear"
	"0514": {ico: "0514", flags: 0}, // "Simisear"
	"0515": {ico: "0515", flags: 0}, // "Panpour"
	"0516": {ico: "0516", flags: 0}, // "Simipour"
	"0517": {ico: "0517", flags: 0}, // "Munna"
	"0518": {ico: "0518", flags: 0}, // "Musharna"
	"0519": {ico: "0519", flags: 0}, // "Pidove"
	"0520": {ico: "0520", flags: 0}, // "Tranquill"
//	"0521": {ico: "0521", flags: 0}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: 0}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: 0}, // "Unfezan♀"
	"0522": {ico: "0522", flags: 0}, // "Blitzle"
	"0523": {ico: "0523", flags: 0}, // "Zebstrika"
	"0524": {ico: "0524", flags: 0}, // "Roggenrola"
	"0525": {ico: "0525", flags: 0}, // "Boldore"
	"0526": {ico: "0526", flags: 0}, // "Gigalith"
	"0527": {ico: "0527", flags: 0}, // "Woobat"
	"0528": {ico: "0528", flags: 0}, // "Swoobat"
	"0529": {ico: "0529", flags: 0}, // "Drilbur"
	"0530": {ico: "0530", flags: 0}, // "Excadrill"
	"0531": {ico: "0531", flags: 0}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: 0}, // "Mega Audino"
	"0532": {ico: "0532", flags: 0}, // "Timburr"
	"0533": {ico: "0533", flags: 0}, // "Gurdurr"
	"0534": {ico: "0534", flags: 0}, // "Conkeldurr"
	"0535": {ico: "0535", flags: 0}, // "Tympole"
	"0536": {ico: "0536", flags: 0}, // "Palpitoad"
	"0537": {ico: "0537", flags: 0}, // "Seismitoad"
	"0538": {ico: "0538", flags: 0}, // "Throh" // male only
	"0539": {ico: "0539", flags: 0}, // "Sawk" // male only
	"0540": {ico: "0540", flags: 0}, // "Sewaddle"
	"0541": {ico: "0541", flags: 0}, // "Swadloon"
	"0542": {ico: "0542", flags: 0}, // "Leavanny"
	"0543": {ico: "0543", flags: 0}, // "Venipede"
	"0544": {ico: "0544", flags: 0}, // "Whirlipede"
	"0545": {ico: "0545", flags: 0}, // "Scolipede"
	"0546": {ico: "0546", flags: 0}, // "Cottonee"
	"0547": {ico: "0547", flags: 0}, // "Whimsicott"
	"0548": {ico: "0548", flags: 0}, // "Petilil" // female only
	"0549": {ico: "0549", flags: 0}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: 0}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: 0}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: 0}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: 0}, // "Sandile"
	"0552": {ico: "0552", flags: 0}, // "Krokorok"
	"0553": {ico: "0553", flags: 0}, // "Krookodile"
	"0554": {ico: "0554", flags: 0}, // "Darumaka"
//	"0555": {ico: "0555", flags: 0}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: 0}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: 0}, // "Darmanitan Zen Mode"
	"0554-galar": {ico: "0554-galar", flags: 0}, // "Galarian Darumaka"
//	"0555-galar": {ico: "0555-galar", flags: 0}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: 0}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: 0}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: 0}, // "Maractus"
	"0557": {ico: "0557", flags: 0}, // "Dwebble"
	"0558": {ico: "0558", flags: 0}, // "Crustle"
	"0559": {ico: "0559", flags: 0}, // "Scraggy"
	"0560": {ico: "0560", flags: 0}, // "Scrafty"
	"0561": {ico: "0561", flags: 0}, // "Sigilyph"
	"0562": {ico: "0562", flags: 0}, // "Yamask"
	"0563": {ico: "0563", flags: 0}, // "Cofagrigus"
	"0562-galar": {ico: "0562-galar", flags: 0}, // "Galarian Yamask"
	"0867": {ico: "0867", flags: 0}, // "Runerigus"
	"0568": {ico: "0568", flags: 0}, // "Trubbish"
	"0569": {ico: "0569", flags: 0}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: 0}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: 0}, // "Zorua"
	"0571": {ico: "0571", flags: 0}, // "Zoroark"
	"0572": {ico: "0572", flags: 0}, // "Minccino"
	"0573": {ico: "0573", flags: 0}, // "Cinccino"
	"0574": {ico: "0574", flags: 0}, // "Gothita"
	"0575": {ico: "0575", flags: 0}, // "Gothorita"
	"0576": {ico: "0576", flags: 0}, // "Gothitelle"
	"0577": {ico: "0577", flags: 0}, // "Solosis"
	"0578": {ico: "0578", flags: 0}, // "Duosion"
	"0579": {ico: "0579", flags: 0}, // "Reuniclus"
	"0580": {ico: "0580", flags: 0}, // "Ducklett"
	"0581": {ico: "0581", flags: 0}, // "Swanna"
	"0582": {ico: "0582", flags: 0}, // "Vanillite"
	"0583": {ico: "0583", flags: 0}, // "Vanillish"
	"0584": {ico: "0584", flags: 0}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: 0}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: 0}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: 0}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: 0}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: 0}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: 0}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: 0}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: 0}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: 0}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: 0}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: 0}, // "Emolga"
	"0588": {ico: "0588", flags: 0}, // "Karrablast"
	"0589": {ico: "0589", flags: 0}, // "Escavalier"
	"0616": {ico: "0616", flags: 0}, // "Shelmet"
	"0617": {ico: "0617", flags: 0}, // "Accelgor"
	"0590": {ico: "0590", flags: 0}, // "Foongus"
	"0591": {ico: "0591", flags: 0}, // "Amoonguss"
//	"0592": {ico: "0592", flags: 0}, // "Frillish"
//	"0593": {ico: "0593", flags: 0}, // "Jellicent"
	"0592-m": {ico: "0592-m", flags: 0}, // "Frillish♂"
	"0593-m": {ico: "0593-m", flags: 0}, // "Jellicent♂"
	"0592-f": {ico: "0592-f", flags: 0}, // "Frillish♀"
	"0593-f": {ico: "0593-f", flags: 0}, // "Jellicent♀"
	"0594": {ico: "0594", flags: 0}, // "Alomomola"
	"0595": {ico: "0595", flags: 0}, // "Joltik"
	"0596": {ico: "0596", flags: 0}, // "Galvantula"
	"0597": {ico: "0597", flags: 0}, // "Ferroseed"
	"0598": {ico: "0598", flags: 0}, // "Ferrothorn"
	"0599": {ico: "0599", flags: 0}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: 0}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: 0}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: 0}, // "Tynamo"
	"0603": {ico: "0603", flags: 0}, // "Eelektrik"
	"0604": {ico: "0604", flags: 0}, // "Eelektross"
	"0605": {ico: "0605", flags: 0}, // "Elgyem"
	"0606": {ico: "0606", flags: 0}, // "Beheeyem"
	"0607": {ico: "0607", flags: 0}, // "Litwick"
	"0608": {ico: "0608", flags: 0}, // "Lampent"
	"0609": {ico: "0609", flags: 0}, // "Chandelure"
	"0610": {ico: "0610", flags: 0}, // "Axew"
	"0611": {ico: "0611", flags: 0}, // "Fraxure"
	"0612": {ico: "0612", flags: 0}, // "Haxorus"
	"0613": {ico: "0613", flags: 0}, // "Cubchoo"
	"0614": {ico: "0614", flags: 0}, // "Beartic"
	"0615": {ico: "0615", flags: 0}, // "Cryogonal" // uknown gender
	"0618": {ico: "0618", flags: 0}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: 0}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: 0}, // "Mienfoo"
	"0620": {ico: "0620", flags: 0}, // "Mienshao"
	"0621": {ico: "0621", flags: 0}, // "Druddigon"
	"0622": {ico: "0622", flags: 0}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: 0}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: 0}, // "Pawniard"
	"0625": {ico: "0625", flags: 0}, // "Bisharp"
	"0626": {ico: "0626", flags: 0}, // "Bouffalant"
	"0627": {ico: "0627", flags: 0}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: 0}, // "Braviary" // male only
	"0629": {ico: "0629", flags: 0}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: 0}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: 0}, // "Heatmor"
	"0632": {ico: "0632", flags: 0}, // "Durant"
	"0633": {ico: "0633", flags: 0}, // "Deino"
	"0634": {ico: "0634", flags: 0}, // "Zweilous"
	"0635": {ico: "0635", flags: 0}, // "Hydreigon"
	"0636": {ico: "0636", flags: 0}, // "Larvesta"
	"0637": {ico: "0637", flags: 0}, // "Volcarona"
	"0638": {ico: "0638", flags: 0}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: 0}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: 0}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: 0}, // "Tornadus" // male only
//	"0642": {ico: "0642", flags: 0}, // "Thundurus" // male only
//	"0645": {ico: "0645", flags: 0}, // "Landorus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: 0}, // "Incarnate Forme Tornadus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: 0}, // "Incarnate Forme Thundurus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: 0}, // "Incarnate Forme Landorus" // male only
	"0641-therian": {ico: "0641-therian", flags: 0}, // "Therian Forme Tornadus" // male only
	"0642-therian": {ico: "0642-therian", flags: 0}, // "Therian Forme Thundurus" // male only
	"0645-therian": {ico: "0645-therian", flags: 0}, // "Therian Forme Landorus" // male only
	"0643": {ico: "0643", flags: 0}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: 0}, // "Zekrom" // uknown gender
	"0646": {ico: "0646", flags: 0}, // "Kyurem" // uknown gender
//	"0646-white": {ico: "0646-white", flags: 0}, // "White Kyurem" // uknown gender
//	"0646-black": {ico: "0646-black", flags: 0}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: 0}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: 0}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: 0}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: 0}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: 0}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: 0}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: 0}, // "Genesect" // uknown gender
//	"0649-douse": {ico: "0649-douse", flags: 0}, // "Douse Drive Genesect" // uknown gender
//	"0649-shock": {ico: "0649-shock", flags: 0}, // "Shock Drive Genesect" // uknown gender
//	"0649-burn": {ico: "0649-burn", flags: 0}, // "Burn Drive Genesect" // uknown gender
//	"0649-chill": {ico: "0649-chill", flags: 0}, // "Chill Drive Genesect" // uknown gender
	"0650": {ico: "0650", flags: 0}, // "Chespin"
	"0651": {ico: "0651", flags: 0}, // "Quilladin"
	"0652": {ico: "0652", flags: 0}, // "Chesnaught"
	"0653": {ico: "0653", flags: 0}, // "Fennekin"
	"0654": {ico: "0654", flags: 0}, // "Braixen"
	"0655": {ico: "0655", flags: 0}, // "Delphox"
	"0656": {ico: "0656", flags: 0}, // "Froakie"
	"0657": {ico: "0657", flags: 0}, // "Frogadier"
	"0658": {ico: "0658", flags: 0}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: 0}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: 0}, // "Bunnelby"
	"0660": {ico: "0660", flags: 0}, // "Diggersby"
	"0661": {ico: "0661", flags: 0}, // "Fletchling"
	"0662": {ico: "0662", flags: 0}, // "Fletchinder"
	"0663": {ico: "0663", flags: 0}, // "Talonflame"
	"0664": {ico: "0664", flags: 0}, // "Scatterbug"
	"0665": {ico: "0665", flags: 0}, // "Spewpa"
//	"0666": {ico: "0666", flags: 0}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: 0}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: 0}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: 0}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: 0}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: 0}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: 0}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: 0}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: 0}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: 0}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: 0}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: 0}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: 0}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: 0}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: 0}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: 0}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: 0}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: 0}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: 0}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: 0}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: 0}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: 0}, // "Litleo"
//	"0668": {ico: "0668", flags: 0}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: 0}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: 0}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: 0}, // "Flabébé" // female only
//	"0670": {ico: "0670", flags: 0}, // "Floette" // female only
//	"0671": {ico: "0671", flags: 0}, // "Florges" // female only
	"0669-red": {ico: "0669-red", flags: 0}, // "Red Flower Flabébé" // female only
	"0670-red": {ico: "0670-red", flags: 0}, // "Red Flower Floette" // female only
	"0671-red": {ico: "0671-red", flags: 0}, // "Red Flower Florges" // female only
	"0669-yellow": {ico: "0669-yellow", flags: 0}, // "Yellow Flower Flabébé" // female only
	"0670-yellow": {ico: "0670-yellow", flags: 0}, // "Yellow Flower Floette" // female only
	"0671-yellow": {ico: "0671-yellow", flags: 0}, // "Yellow Flower Florges" // female only
	"0669-orange": {ico: "0669-orange", flags: 0}, // "Orange Flower Flabébé" // female only
	"0670-orange": {ico: "0670-orange", flags: 0}, // "Orange Flower Floette" // female only
	"0671-orange": {ico: "0671-orange", flags: 0}, // "Orange Flower Florges" // female only
	"0669-blue": {ico: "0669-blue", flags: 0}, // "Blue Flower Flabébé" // female only
	"0670-blue": {ico: "0670-blue", flags: 0}, // "Blue Flower Floette" // female only
	"0671-blue": {ico: "0671-blue", flags: 0}, // "Blue Flower Florges" // female only
	"0669-white": {ico: "0669-white", flags: 0}, // "White Flower Flabébé" // female only
	"0670-white": {ico: "0670-white", flags: 0}, // "White Flower Floette" // female only
	"0671-white": {ico: "0671-white", flags: 0}, // "White Flower Florges" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: 0}, // "Eternal Flower Floette" // female only
	"0672": {ico: "0672", flags: 0}, // "Skiddo"
	"0673": {ico: "0673", flags: 0}, // "Gogoat"
	"0674": {ico: "0674", flags: 0}, // "Pancham"
	"0675": {ico: "0675", flags: 0}, // "Pangoro"
	"0676": {ico: "0676", flags: 0}, // "Furfrou"
//	"0676-heart": {ico: "0676-heart", flags: 0}, // "Heart Trim Furfrou"
//	"0676-star": {ico: "0676-star", flags: 0}, // "Star Trim Furfrou"
//	"0676-diamond": {ico: "0676-diamond", flags: 0}, // "Diamond Trim Furfrou"
//	"0676-debutante": {ico: "0676-debutante", flags: 0}, // "Debutante Trim Furfrou"
//	"0676-matron": {ico: "0676-matron", flags: 0}, // "Matron Trim Furfrou"
//	"0676-dandy": {ico: "0676-dandy", flags: 0}, // "Dandy Trim Furfrou"
//	"0676-le-reine": {ico: "0676-le-reine", flags: 0}, // "Le Reine Trim Furfrou"
//	"0676-kabuki": {ico: "0676-kabuki", flags: 0}, // "Kabuki Trim Furfrou"
//	"0676-pharaoh": {ico: "0676-pharaoh", flags: 0}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: 0}, // "Espurr"
//	"0678": {ico: "0678", flags: 0}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: 0}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: 0}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: 0}, // "Honedge"
	"0680": {ico: "0680", flags: 0}, // "Doublade"
//	"0681": {ico: "0681", flags: 0}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: 0}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: 0}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: 0}, // "Spritzee"
	"0683": {ico: "0683", flags: 0}, // "Aromatisse"
	"0684": {ico: "0684", flags: 0}, // "Swirlix"
	"0685": {ico: "0685", flags: 0}, // "Slurpuff"
	"0686": {ico: "0686", flags: 0}, // "Inkay"
	"0687": {ico: "0687", flags: 0}, // "Malamar"
	"0688": {ico: "0688", flags: 0}, // "Binacle"
	"0689": {ico: "0689", flags: 0}, // "Barbaracle"
	"0690": {ico: "0690", flags: 0}, // "Skrelp"
	"0691": {ico: "0691", flags: 0}, // "Dragalge"
	"0692": {ico: "0692", flags: 0}, // "Clauncher"
	"0693": {ico: "0693", flags: 0}, // "Clawitzer"
	"0694": {ico: "0694", flags: 0}, // "Helioptile"
	"0695": {ico: "0695", flags: 0}, // "Heliolisk"
	"0701": {ico: "0701", flags: 0}, // "Hawlucha"
	"0702": {ico: "0702", flags: 0}, // "Dedenne"
	"0703": {ico: "0703", flags: 0}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: 0}, // "Goomy"
	"0705": {ico: "0705", flags: 0}, // "Sliggoo"
	"0706": {ico: "0706", flags: 0}, // "Goodra"
	"0707": {ico: "0707", flags: 0}, // "Klefki"
	"0708": {ico: "0708", flags: 0}, // "Phantump"
	"0709": {ico: "0709", flags: 0}, // "Trevenant"
//	"0710": {ico: "0710", flags: 0}, // "Pumpkaboo"
//	"0711": {ico: "0711", flags: 0}, // "Gourgeist"
	"0710-average": {ico: "0710-average", flags: 0}, // "Average Size Pumpkaboo"
	"0711-average": {ico: "0711-average", flags: 0}, // "Average Size Gourgeist"
	"0710-small": {ico: "0710-small", flags: 0}, // "Small Size Pumpkaboo"
	"0711-small": {ico: "0711-small", flags: 0}, // "Small Size Gourgeist"
	"0710-large": {ico: "0710-large", flags: 0}, // "Large Size Pumpkaboo"
	"0711-large": {ico: "0711-large", flags: 0}, // "Large Size Gourgeist"
	"0710-super": {ico: "0710-super", flags: 0}, // "Super Size Pumpkaboo"
	"0711-super": {ico: "0711-super", flags: 0}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: 0}, // "Bergmite"
	"0713": {ico: "0713", flags: 0}, // "Avalugg"
	"0714": {ico: "0714", flags: 0}, // "Noibat"
	"0715": {ico: "0715", flags: 0}, // "Noivern"
//	"0716": {ico: "0716", flags: 0}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: 0}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: 0}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: 0}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: 0}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: 0}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: 0}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: 0}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: 0}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: 0}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: 0}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: 0}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: 0}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: 0}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: 0}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: 0}, // "Volcanion" // uknown gender
	"0722": {ico: "0722", flags: 0}, // "Rowlet"
	"0723": {ico: "0723", flags: 0}, // "Dartrix"
	"0724": {ico: "0724", flags: 0}, // "Decidueye"
	"0725": {ico: "0725", flags: 0}, // "Litten"
	"0726": {ico: "0726", flags: 0}, // "Torracat"
	"0727": {ico: "0727", flags: 0}, // "Incineroar"
	"0728": {ico: "0728", flags: 0}, // "Popplio"
	"0729": {ico: "0729", flags: 0}, // "Brionne"
	"0730": {ico: "0730", flags: 0}, // "Primarina"
	"0731": {ico: "0731", flags: 0}, // "Pikipek"
	"0732": {ico: "0732", flags: 0}, // "Trumbeak"
	"0733": {ico: "0733", flags: 0}, // "Toucannon"
	"0734": {ico: "0734", flags: 0}, // "Yungoos"
	"0735": {ico: "0735", flags: 0}, // "Gumshoos"
	"0736": {ico: "0736", flags: 0}, // "Grubbin"
	"0737": {ico: "0737", flags: 0}, // "Charjabug"
	"0738": {ico: "0738", flags: 0}, // "Vikavolt"
	"0739": {ico: "0739", flags: 0}, // "Crabrawler"
	"0740": {ico: "0740", flags: 0}, // "Crabominable"
//	"0741": {ico: "0741", flags: 0}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: 0}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: 0}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: 0}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: 0}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: 0}, // "Cutiefly"
	"0743": {ico: "0743", flags: 0}, // "Ribombee"
	"0744": {ico: "0744", flags: 0}, // "Rockruff"
//	"0745": {ico: "0745", flags: 0}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: 0}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: 0}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: 0}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: 0}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: 0}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: 0}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: 0}, // "Mareanie"
	"0748": {ico: "0748", flags: 0}, // "Toxapex"
	"0749": {ico: "0749", flags: 0}, // "Mudbray"
	"0750": {ico: "0750", flags: 0}, // "Mudsdale"
	"0751": {ico: "0751", flags: 0}, // "Dewpider"
	"0752": {ico: "0752", flags: 0}, // "Araquanid"
	"0753": {ico: "0753", flags: 0}, // "Fomantis"
	"0754": {ico: "0754", flags: 0}, // "Lurantis"
	"0755": {ico: "0755", flags: 0}, // "Morelull"
	"0756": {ico: "0756", flags: 0}, // "Shiinotic"
	"0757": {ico: "0757", flags: 0}, // "Salandit"
	"0758": {ico: "0758", flags: 0}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: 0}, // "Stufful"
	"0760": {ico: "0760", flags: 0}, // "Bewear"
	"0761": {ico: "0761", flags: 0}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: 0}, // "Steenee" // female only
	"0763": {ico: "0763", flags: 0}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: 0}, // "Comfey"
	"0765": {ico: "0765", flags: 0}, // "Oranguru"
	"0766": {ico: "0766", flags: 0}, // "Passimian"
	"0767": {ico: "0767", flags: 0}, // "Wimpod"
	"0768": {ico: "0768", flags: 0}, // "Golisopod"
	"0769": {ico: "0769", flags: 0}, // "Sandygast"
	"0770": {ico: "0770", flags: 0}, // "Palossand"
	"0771": {ico: "0771", flags: 0}, // "Pyukumuku"
	"0772": {ico: "0772", flags: 0}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: 0}, // "Silvally" // uknown gender
//	"0773-fighting": {ico: "0773-fighting", flags: 0}, // "Silvally Type: Fighting" // uknown gender
//	"0773-flying": {ico: "0773-flying", flags: 0}, // "Silvally Type: Flying" // uknown gender
//	"0773-poison": {ico: "0773-poison", flags: 0}, // "Silvally Type: Poison" // uknown gender
//	"0773-ground": {ico: "0773-ground", flags: 0}, // "Silvally Type: Ground" // uknown gender
//	"0773-rock": {ico: "0773-rock", flags: 0}, // "Silvally Type: Rock" // uknown gender
//	"0773-bug": {ico: "0773-bug", flags: 0}, // "Silvally Type: Bug" // uknown gender
//	"0773-ghost": {ico: "0773-ghost", flags: 0}, // "Silvally Type: Ghost" // uknown gender
//	"0773-steel": {ico: "0773-steel", flags: 0}, // "Silvally Type: Steel" // uknown gender
//	"0773-fire": {ico: "0773-fire", flags: 0}, // "Silvally Type: Fire" // uknown gender
//	"0773-water": {ico: "0773-water", flags: 0}, // "Silvally Type: Water" // uknown gender
//	"0773-grass": {ico: "0773-grass", flags: 0}, // "Silvally Type: Grass" // uknown gender
//	"0773-electric": {ico: "0773-electric", flags: 0}, // "Silvally Type: Electric" // uknown gender
//	"0773-psychic": {ico: "0773-psychic", flags: 0}, // "Silvally Type: Psychic" // uknown gender
//	"0773-ice": {ico: "0773-ice", flags: 0}, // "Silvally Type: Ice" // uknown gender
//	"0773-dragon": {ico: "0773-dragon", flags: 0}, // "Silvally Type: Dragon" // uknown gender
//	"0773-dark": {ico: "0773-dark", flags: 0}, // "Silvally Type: Dark" // uknown gender
//	"0773-fairy": {ico: "0773-fairy", flags: 0}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: 0}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: 0}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: 0}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: 0}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: 0}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: 0}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: 0}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: 0}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: 0}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: 0}, // "Komala"
	"0776": {ico: "0776", flags: 0}, // "Turtonator"
	"0777": {ico: "0777", flags: 0}, // "Togedemaru"
//	"0778": {ico: "0778", flags: 0}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: 0}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: 0}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: 0}, // "Bruxish"
	"0780": {ico: "0780", flags: 0}, // "Drampa"
	"0781": {ico: "0781", flags: 0}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: 0}, // "Jangmo-o"
	"0783": {ico: "0783", flags: 0}, // "Hakamo-o"
	"0784": {ico: "0784", flags: 0}, // "Kommo-o"
	"0785": {ico: "0785", flags: 0}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: 0}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: 0}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: 0}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: 0}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: 0}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: 0}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: 0}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: 0}, // "Lunala", // uknown gender
//	"0792-full-moon": {ico: "0792-full-moon", flags: 0}, // "Full Monn Lunala", // uknown gender
	"0800": {ico: "0800", flags: 0}, // "Necrozma" // uknown gender
//	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: 0}, // "Dusk Mane Necrozma" // uknown gender
//	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: 0}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: 0}, // "Ultra Necrozma" // uknown gender
	"0793": {ico: "0793", flags: 0}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: 0}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: 0}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: 0}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: 0}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: 0}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: 0}, // "Guzzlord" // uknown gender
	"0801": {ico: "0801", flags: 0}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: 0}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: 0}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: 0}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: 0}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: 0}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: 0}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: 0}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: 0}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: 0}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: 0}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: 0}, // "Gigantamax Melmetal" // uknown gender
	"0810": {ico: "0810", flags: 0}, // "Grookey"
	"0811": {ico: "0811", flags: 0}, // "Thwackey"
	"0812": {ico: "0812", flags: 0}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: 0}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: 0}, // "Scorbunny"
	"0814": {ico: "0814", flags: 0}, // "Raboot"
	"0815": {ico: "0815", flags: 0}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: 0}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: 0}, // "Sobble"
	"0817": {ico: "0817", flags: 0}, // "Drizzile"
	"0818": {ico: "0818", flags: 0}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: 0}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: 0}, // "Skwovet"
	"0820": {ico: "0820", flags: 0}, // "Greedent"
	"0821": {ico: "0821", flags: 0}, // "Rookidee"
	"0822": {ico: "0822", flags: 0}, // "Corvisquire"
	"0823": {ico: "0823", flags: 0}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: 0}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: 0}, // "Blipbug"
	"0825": {ico: "0825", flags: 0}, // "Dottler"
	"0826": {ico: "0826", flags: 0}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: 0}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: 0}, // "Nickit"
	"0828": {ico: "0828", flags: 0}, // "Thievul"
	"0829": {ico: "0829", flags: 0}, // "Gossifleur"
	"0830": {ico: "0830", flags: 0}, // "Eldegoss"
	"0831": {ico: "0831", flags: 0}, // "Wooloo"
	"0832": {ico: "0832", flags: 0}, // "Dubwool"
	"0833": {ico: "0833", flags: 0}, // "Chewtle"
	"0834": {ico: "0834", flags: 0}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: 0}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: 0}, // "Yamper"
	"0836": {ico: "0836", flags: 0}, // "Boltund"
	"0837": {ico: "0837", flags: 0}, // "Rolycoly"
	"0838": {ico: "0838", flags: 0}, // "Carkol"
	"0839": {ico: "0839", flags: 0}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: 0}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: 0}, // "Applin"
	"0841": {ico: "0841", flags: 0}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: 0}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: 0}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: 0}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: 0}, // "Silicobra"
	"0844": {ico: "0844", flags: 0}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: 0}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: 0}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: 0}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: 0}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: 0}, // "Arrokuda"
	"0847": {ico: "0847", flags: 0}, // "Barraskewda"
	"0848": {ico: "0848", flags: 0}, // "Toxel"
//	"0849": {ico: "0849", flags: 0}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: 0}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: 0}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: 0}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: 0}, // "Sizzlipede"
	"0851": {ico: "0851", flags: 0}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: 0}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: 0}, // "Clobbopus"
	"0853": {ico: "0853", flags: 0}, // "Grapploct"
//	"0854": {ico: "0854", flags: 0}, // "Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: 0}, // "Polteageist" // uknown gender
	"0854-phony": {ico: "0854", flags: 0}, // "Phony Sinistea" // uknown gender
	"0855-phony": {ico: "0855", flags: 0}, // "Phony Polteageist" // uknown gender
	"0854-authentic": {ico: "0854", flags: 0}, // "Authentic Sinistea" // uknown gender
	"0855-authentic": {ico: "0855", flags: 0}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: 0}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: 0}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: 0}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: 0}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: 0}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: 0}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: 0}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: 0}, // "Gigantamax Grimmsnarl" // male only
	"0868": {ico: "0868", flags: 0}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: 0}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: 0}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: 0}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: 0}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: 0}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: 0}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: 0}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: 0}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: 0}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: 0}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: 0}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: 0}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: 0}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: 0}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: 0}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: 0}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: 0}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: 0}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: 0}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: 0}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: 0}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: 0}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: 0}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: 0}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: 0}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: 0}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: 0}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: 0}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: 0}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: 0}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: 0}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: 0}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: 0}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: 0}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: 0}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: 0}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: 0}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: 0}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: 0}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: 0}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: 0}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: 0}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: 0}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: 0}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: 0}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: 0}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: 0}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: 0}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: 0}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: 0}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: 0}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: 0}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: 0}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: 0}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: 0}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: 0}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: 0}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: 0}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: 0}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: 0}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: 0}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: 0}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: 0}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: 0}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: 0}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: 0}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: 0}, // "Pincurchin"
	"0872": {ico: "0872", flags: 0}, // "Snom"
	"0873": {ico: "0873", flags: 0}, // "Frosmoth"
	"0874": {ico: "0874", flags: 0}, // "Stonjourner"
//	"0875": {ico: "0875", flags: 0}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: 0}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: 0}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: 0}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: 0}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: 0}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: 0}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: 0}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: 0}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: 0}, // "Cufant"
	"0879": {ico: "0879", flags: 0}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: 0}, // "Gigantamax Copperajah"
	"0884": {ico: "0884", flags: 0}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: 0}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: 0}, // "Dreepy"
	"0886": {ico: "0886", flags: 0}, // "Drakloak"
	"0887": {ico: "0887", flags: 0}, // "Dragapult"
//	"0888": {ico: "0888", flags: 0}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: 0}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: 0}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: 0}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: 0}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: 0}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: 0}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: 0}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: 0}, // "Kubfu"
//	"0892": {ico: "0892", flags: 0}, // "Urshifu"
	"0892-single": {ico: "0892-single", flags: 0}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: 0}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: 0}, // "Rapid Strike Style Urshifu"
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: 0}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: 0}, // "Zarude"
	"0893-dada": {ico: "0893-dada", flags: 0}, // "Dada Zarude" // unknown gender
	"0896": {ico: "0896", flags: 0}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: 0}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: 0}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: 0}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: 0}, // "Shadow Rider Calyrex" // uknown gender
}
