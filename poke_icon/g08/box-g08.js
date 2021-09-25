const IcoPathSwSh 	= "poke_icon/g08/sw-sh/";
const IcoPathSSHome	= "poke_icon/g08/home/";

const ImgWd_G08		= 68;
const BoxCap_G08	= 30;
const MaxBox_G08	= 32;
const DivBox_G08	=  6;

const _Regdex_rSwSh	=
{
	"0810"     : {ico: "0810", flags: []}, // "Grookey"
	"0811"     : {ico: "0811", flags: []}, // "Thwackey"
	"0812"     : {ico: "0812", flags: []}, // "Rillaboom"
//	"0812-gmax": {ico: "0812-gmax", flags: []}, // "Gigantamax Rillaboom"
	"0813"     : {ico: "0813", flags: []}, // "Scorbunny"
	"0814"     : {ico: "0814", flags: []}, // "Raboot"
	"0815"     : {ico: "0815", flags: []}, // "Cinderace"
//	"0815-gmax": {ico: "0815-gmax", flags: []}, // "Gigantamax Cinderace"
	"0816"     : {ico: "0816", flags: []}, // "Sobble"
	"0817"     : {ico: "0817", flags: []}, // "Drizzile"
	"0818"     : {ico: "0818", flags: []}, // "Inteleon"
//	"0818-gmax": {ico: "0818-gmax", flags: []}, // "Gigantamax Inteleon"
	"0824"     : {ico: "0824", flags: []}, // "Blipbug"
	"0825"     : {ico: "0825", flags: []}, // "Dottler"
	"0826"     : {ico: "0826", flags: []}, // "Orbeetle"
//	"0826-gmax": {ico: "0826-gmax", flags: []}, // "Gigantamax Orbeetle"
	"0010"     : {ico: "0010", flags: []}, // "Caterpie"
	"0011"     : {ico: "0011", flags: []}, // "Metapod"
	"0012"     : {ico: "0012", flags: []}, // "Butterfree"
//	"0012-m"   : {ico: "0012", flags: []}, // "Butterfree♂"
//	"0012-f"   : {ico: "custom/0012-f", flags: []}, // "Butterfree♀"
//	"0012-gmax": {ico: "0012-gmax", flags: []}, // "Gigantamax Butterfree"
	"0736"     : {ico: "0736", flags: []}, // "Grubbin"
	"0737"     : {ico: "0737", flags: []}, // "Charjabug"
	"0738"     : {ico: "0738", flags: []}, // "Vikavolt"
	"0163"     : {ico: "0163", flags: []}, // "Hoothoot"
	"0164"     : {ico: "0164", flags: []}, // "Noctowl"
	"0821"     : {ico: "0821", flags: []}, // "Rookidee"
	"0822"     : {ico: "0822", flags: []}, // "Corvisquire"
	"0823"     : {ico: "0823", flags: []}, // "Corviknight"
//	"0823-gmax": {ico: "0823-gmax", flags: []}, // "Gigantamax Corviknight"
	"0819"     : {ico: "0819", flags: []}, // "Skwovet"
	"0820"     : {ico: "0820", flags: []}, // "Greedent"
	"0519"     : {ico: "0519", flags: []}, // "Pidove"
	"0520"     : {ico: "0520", flags: []}, // "Tranquill"
//	"0521"     : {ico: "0521", flags: []}, // "Unfezant"
	"0521-m"   : {ico: "0521-m", flags: []}, // "Unfezant♂"
	"0521-f"   : {ico: "0521-f", flags: []}, // "Unfezan♀"
	"0827"     : {ico: "0827", flags: []}, // "Nickit"
	"0828"     : {ico: "0828", flags: []}, // "Thievul"
	"0263-galar": {ico: "0263-galar", flags: []}, // "Galarian Zigzagoon"
	"0263"      : {ico: "0263", flags: []}, // "Zigzagoon"
	"0264-galar": {ico: "0264-galar", flags: []}, // "Galarian Linoone"
	"0264"      : {ico: "0264", flags: []}, // "Linoone"
	"0862"      : {ico: "0862", flags: []}, // "Obstagoon"
	"0831"      : {ico: "0831", flags: []}, // "Wooloo"
	"0832"      : {ico: "0832", flags: []}, // "Dubwool"
	"0270"      : {ico: "0270", flags: []}, // "Lotad"
	"0271"      : {ico: "0271", flags: []}, // "Lombre"
	"0272"      : {ico: "0272", flags: []}, // "Ludicolo"
//	"0272-m"    : {ico: "0272", flags: []}, // "Ludicolo♂"
//	"0272-f"    : {ico: "0272", flags: []}, // "Ludicolo♀"
	"0273"      : {ico: "0273", flags: []}, // "Seedot"
	"0274"      : {ico: "0274", flags: []}, // "Nuzleaf"
//	"0274-m"    : {ico: "0274", flags: []}, // "Nuzleaf♂"
//	"0274-f"    : {ico: "0274", flags: []}, // "Nuzleaf♀"
	"0275"      : {ico: "0275", flags: []}, // "Shiftry"
//	"0275-m"    : {ico: "0275", flags: []}, // "Shiftry♂"
//	"0275-f"    : {ico: "0275", flags: []}, // "Shiftry♀"
	"0833"      : {ico: "0833", flags: []}, // "Chewtle"
	"0834"      : {ico: "0834", flags: []}, // "Drednaw"
//	"0834-gmax" : {ico: "0834-gmax", flags: []}, // "Gigantamax Drednaw"
	"0509"      : {ico: "0509", flags: []}, // "Purrloin"
	"0510"      : {ico: "0510", flags: []}, // "Liepard"
	"0835"      : {ico: "0835", flags: []}, // "Yamper"
	"0836"      : {ico: "0836", flags: []}, // "Boltund"
	"0659"      : {ico: "0659", flags: []}, // "Bunnelby"
	"0660"      : {ico: "0660", flags: []}, // "Diggersby"
	"0572"      : {ico: "0572", flags: []}, // "Minccino"
	"0573"      : {ico: "0573", flags: []}, // "Cinccino"
	"0761"      : {ico: "0761", flags: []}, // "Bounsweet" // female only
	"0762"      : {ico: "0762", flags: []}, // "Steenee" // female only
	"0763"      : {ico: "0763", flags: []}, // "Tsareena" // female only
	"0043"      : {ico: "0043", flags: []}, // "Oddish"
	"0044"      : {ico: "0044", flags: []}, // "Gloom"
//	"0044-m"    : {ico: "0044", flags: []}, // "Gloom♂"
//	"0044-f"    : {ico: "custom/0044-f", flags: []}, // "Gloom♀"
	"0045"      : {ico: "0045", flags: []}, // "Vileplume"
//	"0045-m"    : {ico: "0045", flags: []}, // "Vileplume♂"
//	"0045-f"    : {ico: "custom/0045-f", flags: []}, // "Vileplume♀"
	"0182"      : {ico: "0182", flags: []}, // "Bellossom"
	"0406"      : {ico: "0406", flags: []}, // "Budew"
	"0315"      : {ico: "0315", flags: []}, // "Roselia"
//	"0315-m"    : {ico: "0315", flags: []}, // "Roselia♂"
//	"0315-f"    : {ico: "0315", flags: []}, // "Roselia♀"
	"0407"      : {ico: "0407", flags: []}, // "Roserade"
//	"0407-m"    : {ico: "0407", flags: []}, // "Roserade♂"
//	"0407-f"    : {ico: "0407", flags: []}, // "Roserade♀"
	"0278"      : {ico: "0278", flags: []}, // "Wingull"
	"0279"      : {ico: "0279", flags: []}, // "Pelipper"
	"0595"      : {ico: "0595", flags: []}, // "Joltik"
	"0596"      : {ico: "0596", flags: []}, // "Galvantula"
	"0309"      : {ico: "0309", flags: []}, // "Electrike"
	"0310"      : {ico: "0310", flags: []}, // "Manectric"
//	"0310-mega" : {ico: "0310-mega", flags: []}, // "Mega Manectric"
	"0037"      : {ico: "0037", flags: []}, // "Vulpix"
	"0037-alola": {ico: "0037-alola", flags: []}, // "Alolan Vulpix"
	"0038"      : {ico: "0038", flags: []}, // "Ninetales"
	"0038-alola": {ico: "0038-alola", flags: []}, // "Alolan Ninetales"
	"0058"      : {ico: "0058", flags: []}, // "Growlithe"
	"0059"      : {ico: "0059", flags: []}, // "Arcanine"
	"0582"      : {ico: "0582", flags: []}, // "Vanillite"
	"0583"      : {ico: "0583", flags: []}, // "Vanillish"
	"0584"      : {ico: "0584", flags: []}, // "Vanilluxe"
	"0220"      : {ico: "0220", flags: []}, // "Swinub"
	"0221"      : {ico: "0221", flags: []}, // "Piloswine"
//	"0221-m"    : {ico: "0221", flags: []}, // "Piloswine♂"
//	"0221-f"    : {ico: "0221", flags: []}, // "Piloswine♀"
	"0473"      : {ico: "0473", flags: []}, // "Mamoswine"
//	"0473-m"    : {ico: "0473", flags: []}, // "Mamoswine♂"
//	"0473-f"    : {ico: "0473", flags: []}, // "Mamoswine♀"
	"0225"      : {ico: "0225", flags: []}, // "Delibird"
	"0361"      : {ico: "0361", flags: []}, // "Snorunt"
	"0362"      : {ico: "0362", flags: []}, // "Glalie"
//	"0362-mega" : {ico: "0362-mega", flags: []}, // "Mega Glalie"
	"0478"      : {ico: "0478", flags: []}, // "Froslass" // female only
	"0343"      : {ico: "0343", flags: []}, // "Baltoy" // uknown gender
	"0344"      : {ico: "0344", flags: []}, // "Claydol" // uknown gender
	"0749"      : {ico: "0749", flags: []}, // "Mudbray"
	"0750"      : {ico: "0750", flags: []}, // "Mudsdale"
	"0557"      : {ico: "0557", flags: []}, // "Dwebble"
	"0558"      : {ico: "0558", flags: []}, // "Crustle"
	"0622"      : {ico: "0622", flags: []}, // "Golett" // uknown gender
	"0623"      : {ico: "0623", flags: []}, // "Golurk" // uknown gender
	"0517"      : {ico: "0517", flags: []}, // "Munna"
	"0518"      : {ico: "0518", flags: []}, // "Musharna"
	"0177"      : {ico: "0177", flags: []}, // "Natu"
	"0178"      : {ico: "0178", flags: []}, // "Xatu"
//	"0178-m"    : {ico: "custom/0178-m", flags: []}, // "Xatu♂"
//	"0178-f"    : {ico: "0178", flags: []}, // "Xatu♀"
	"0759"      : {ico: "0759", flags: []}, // "Stufful"
	"0760"      : {ico: "0760", flags: []}, // "Bewear"
	"0459"      : {ico: "0459", flags: []}, // "Snover"
//	"0459-m"    : {ico: "0459", flags: []}, // "Snover♂"
//	"0459-f"    : {ico: "0459", flags: []}, // "Snover♀"
	"0460"      : {ico: "0460", flags: []}, // "Abomasnow"
//	"0460-m"    : {ico: "0460", flags: []}, // "Abomasnow♂"
//	"0460-f"    : {ico: "0460", flags: []}, // "Abomasnow♀"
//	"0460-mega" : {ico: "0460-mega", flags: []}, // "Mega Abomasnow"
	"0098"      : {ico: "0098", flags: []}, // "Krabby"
	"0099"      : {ico: "0099", flags: []}, // "Kingler"
//	"0099-gmax" : {ico: "0099-gmax", flags: []}, // "Gigantamax Kingler"
	"0194"      : {ico: "0194", flags: []}, // "Wooper"
//	"0194-m"    : {ico: "0194", flags: []}, // "Wooper♂"
//	"0194-f"    : {ico: "0194", flags: []}, // "Wooper♀"
	"0195"      : {ico: "0195", flags: []}, // "Quagsire"
//	"0195-m"    : {ico: "0195", flags: []}, // "Quagsire♂"
//	"0195-f"    : {ico: "0195", flags: []}, // "Quagsire♀"
	"0341"      : {ico: "0341", flags: []}, // "Corphish"
	"0342"      : {ico: "0342", flags: []}, // "Crawdaunt"
	"0290"      : {ico: "0290", flags: []}, // "Nincada"
	"0291"      : {ico: "0291", flags: []}, // "Ninjask"
	"0292"      : {ico: "0292", flags: []}, // "Shedinja" // uknown gender
	"0236"      : {ico: "0236", flags: []}, // "Tyrogue" // male only
	"0106"      : {ico: "0106", flags: []}, // "Hitmonlee" // male only
	"0107"      : {ico: "0107", flags: []}, // "Hitmonchan" // male only
	"0237"      : {ico: "0237", flags: []}, // "Hitmontop" // male only
	"0674"      : {ico: "0674", flags: []}, // "Pancham"
	"0675"      : {ico: "0675", flags: []}, // "Pangoro"
	"0599"      : {ico: "0599", flags: []}, // "Klink" // uknown gender
	"0600"      : {ico: "0600", flags: []}, // "Klang" // uknown gender
	"0601"      : {ico: "0601", flags: []}, // "Klinklang" // uknown gender
	"0415"      : {ico: "0415", flags: []}, // "Combee"
//	"0415-m"    : {ico: "0415", flags: []}, // "Combee♂"
//	"0415-f"    : {ico: "0415", flags: []}, // "Combee♀"
	"0416"      : {ico: "0416", flags: []}, // "Vespiquen" // female only
	"0436"      : {ico: "0436", flags: []}, // "Bronzor" // uknown gender
	"0437"      : {ico: "0437", flags: []}, // "Bronzong" // uknown gender
	"0280"      : {ico: "0280", flags: []}, // "Ralts"
	"0281"      : {ico: "0281", flags: []}, // "Kirlia"
	"0282"      : {ico: "0282", flags: []}, // "Gardevoir"
//	"0282-mega" : {ico: "0282-mega", flags: []}, // "Mega Gardevoir"
	"0475"      : {ico: "0475", flags: []}, // "Gallade" // male only
//	"0475-mega" : {ico: "0475-mega", flags: []}, // "Mega Gallade" // male only
	"0425"      : {ico: "0425", flags: []}, // "Drifloon"
	"0426"      : {ico: "0426", flags: []}, // "Drifblim"
	"0829"      : {ico: "0829", flags: []}, // "Gossifleur"
	"0830"      : {ico: "0830", flags: []}, // "Eldegoss"
	"0420"      : {ico: "0420", flags: []}, // "Cherubi"
//	"0421"      : {ico: "0421", flags: []}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: []}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: []}, // "Sunshine Cherrim"
	"0434"         : {ico: "0434", flags: []}, // "Stunky"
	"0435"         : {ico: "0435", flags: []}, // "Skuntank"
	"0535"         : {ico: "0535", flags: []}, // "Tympole"
	"0536"         : {ico: "0536", flags: []}, // "Palpitoad"
	"0537"         : {ico: "0537", flags: []}, // "Seismitoad"
	"0355"         : {ico: "0355", flags: []}, // "Duskull"
	"0356"         : {ico: "0356", flags: []}, // "Dusclops"
	"0477"         : {ico: "0477", flags: []}, // "Dusknoir"
	"0066"         : {ico: "0066", flags: []}, // "Machop"
	"0067"         : {ico: "0067", flags: []}, // "Machoke"
	"0068"         : {ico: "0068", flags: []}, // "Machamp"
//	"0068-gmax"    : {ico: "0068-gmax", flags: []}, // "Gigantamax Machamp"
	"0092"         : {ico: "0092", flags: []}, // "Gastly"
	"0093"         : {ico: "0093", flags: []}, // "Haunter"
	"0094"         : {ico: "0094", flags: []}, // "Gengar"
//	"0094-mega"    : {ico: "0094-mega", flags: []}, // "Mega Gengar"
//	"0094-gmax"    : {ico: "0094-gmax", flags: []}, // "Gigantamax Gengar"
	"0129"         : {ico: "0129", flags: []}, // "Magikarp"
//	"0129-m"       : {ico: "0129", flags: []}, // "Magikarp♂"
//	"0129-f"       : {ico: "custom/0129-f", flags: []}, // "Magikarp♀"
	"0130"         : {ico: "0130", flags: []}, // "Gyarados"
//	"0130-m"       : {ico: "0130", flags: []}, // "Gyarados♂"
//	"0130-f"       : {ico: "custom/0130-f", flags: []}, // "Gyarados♀"
//	"0130-mega"    : {ico: "0130-mega", flags: []}, // "Mega Gyarados"
	"0118"         : {ico: "0118", flags: []}, // "Goldeen"
//	"0118-m"       : {ico: "0118", flags: []}, // "Goldeen♂"
//	"0118-f"       : {ico: "custom/0118-f", flags: []}, // "Goldeen♀"
	"0119"         : {ico: "0119", flags: []}, // "Seaking"
//	"0119-m"       : {ico: "0119", flags: []}, // "Seaking♂"
//	"0119-f"       : {ico: "custom/0119-f", flags: []}, // "Seaking♀"
	"0223"         : {ico: "0223", flags: []}, // "Remoraid"
	"0224"         : {ico: "0224", flags: []}, // "Octillery"
//	"0224-m"       : {ico: "0224", flags: []}, // "Octillery♂"
//	"0224-f"       : {ico: "0224", flags: []}, // "Octillery♀"
	"0090"         : {ico: "0090", flags: []}, // "Shellder"
	"0091"         : {ico: "0091", flags: []}, // "Cloyster"
	"0349"         : {ico: "0349", flags: []}, // "Feebas"
	"0350"         : {ico: "0350", flags: []}, // "Milotic"
//	"0350-m"       : {ico: "0350", flags: []}, // "Milotic♂"
//	"0350-f"       : {ico: "0350", flags: []}, // "Milotic♀"
//	"0550"         : {ico: "0550", flags: []}, // "Basculin"
	"0550-red"     : {ico: "0550-red", flags: []}, // "Red-striped Basculin"
	"0550-blue"    : {ico: "0550-blue", flags: []}, // "Blue-striped Basculin"
//	"0746"         : {ico: "0746", flags: []}, // "Wishiwashi"
	"0746-solo"    : {ico: "0746-solo", flags: []}, // "Solo Wishiwashi"
//	"0746-school"  : {ico: "0746-school", flags: []}, // "School of Wishiwashi"
	"0771"         : {ico: "0771", flags: []}, // "Pyukumuku"
	"0568"         : {ico: "0568", flags: []}, // "Trubbish"
	"0569"         : {ico: "0569", flags: []}, // "Garbodor"
//	"0569-gmax"    : {ico: "0569-gmax", flags: []}, // "Gigantamax Garbodor"
	"0850"         : {ico: "0850", flags: []}, // "Sizzlipede"
	"0851"         : {ico: "0851", flags: []}, // "Centiskorch"
//	"0851-gmax"    : {ico: "0851-gmax", flags: []}, // "Gigantamax Centiskorch"
	"0837"         : {ico: "0837", flags: []}, // "Rolycoly"
	"0838"         : {ico: "0838", flags: []}, // "Carkol"
	"0839"         : {ico: "0839", flags: []}, // "Coalossal"
//	"0839-gmax"    : {ico: "0839-gmax", flags: []}, // "Gigantamax Coalossal"
	"0050"         : {ico: "0050", flags: []}, // "Diglett"
	"0050-alola"   : {ico: "0050-alola", flags: []}, // "Alolan Diglett"
	"0051"         : {ico: "0051", flags: []}, // "Dugtrio"
	"0051-alola"   : {ico: "0051-alola", flags: []}, // "Alolan Dugtrio"
	"0529"         : {ico: "0529", flags: []}, // "Drilbur"
	"0530"         : {ico: "0530", flags: []}, // "Excadrill"
	"0524"         : {ico: "0524", flags: []}, // "Roggenrola"
	"0525"         : {ico: "0525", flags: []}, // "Boldore"
	"0526"         : {ico: "0526", flags: []}, // "Gigalith"
	"0532"         : {ico: "0532", flags: []}, // "Timburr"
	"0533"         : {ico: "0533", flags: []}, // "Gurdurr"
	"0534"         : {ico: "0534", flags: []}, // "Conkeldurr"
	"0527"         : {ico: "0527", flags: []}, // "Woobat"
	"0528"         : {ico: "0528", flags: []}, // "Swoobat"
	"0714"         : {ico: "0714", flags: []}, // "Noibat"
	"0715"         : {ico: "0715", flags: []}, // "Noivern"
	"0095"         : {ico: "0095", flags: []}, // "Onix"
	"0208"         : {ico: "0208", flags: []}, // "Steelix"
//	"0208-m"       : {ico: "0208", flags: []}, // "Steelix♂"
//	"0208-f"       : {ico: "0208", flags: []}, // "Steelix♀"
	"0846"         : {ico: "0846", flags: []}, // "Arrokuda"
	"0847"         : {ico: "0847", flags: []}, // "Barraskewda"
	"0052-galar"   : {ico: "0052-galar", flags: []}, // "Galarian Meowth"
	"0052"         : {ico: "0052", flags: []}, // "Meowth"
	"0052-alola"   : {ico: "0052-alola", flags: []}, // "Alolan Meowth"
//	"0052-gmax"    : {ico: "0052-gmax", flags: []}, // "Gigantamax Meowth"
	"0863"         : {ico: "0863", flags: []}, // "Perrserker"
	"0053"         : {ico: "0053", flags: []}, // "Persian"
	"0053-alola"   : {ico: "0053-alola", flags: []}, // "Alolan Persian"
	"0868"         : {ico: "0868", flags: []}, // "Milcery" // female only
//	"0869"         : {ico: "0869", flags: []}, // "Alcremie" // female only
//	"0869-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry"     : {ico: "0869-vanilla-cream-strawberry", flags: []}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry"          : {ico: "custom/0869-vanilla-cream-berry", flags: []}, // "Berry Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-berry-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love"           : {ico: "custom/0869-vanilla-cream-love", flags: []}, // "Love Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-love-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star"           : {ico: "custom/0869-vanilla-cream-star", flags: []}, // "Star Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-star-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover"         : {ico: "custom/0869-vanilla-cream-clover", flags: []}, // "Clover Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-clover-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower"         : {ico: "custom/0869-vanilla-cream-flower", flags: []}, // "Flower Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-flower-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon"         : {ico: "custom/0869-vanilla-cream-ribbon", flags: []}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
//	"0869-vanilla-cream-ribbon-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry"        : {ico: "0869-ruby-cream-strawberry", flags: []}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-strawberry-gmax"   : {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry"             : {ico: "custom/0869-ruby-cream-berry", flags: []}, // "Berry Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-berry-gmax"        : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love"              : {ico: "custom/0869-ruby-cream-love", flags: []}, // "Love Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-love-gmax"         : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star"              : {ico: "custom/0869-ruby-cream-star", flags: []}, // "Star Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-star-gmax"         : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover"            : {ico: "custom/0869-ruby-cream-clover", flags: []}, // "Clover Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-clover-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower"            : {ico: "custom/0869-ruby-cream-flower", flags: []}, // "Flower Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-flower-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon"            : {ico: "custom/0869-ruby-cream-ribbon", flags: []}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
//	"0869-ruby-cream-ribbon-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry"      : {ico: "0869-matcha-cream-strawberry", flags: []}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-strawberry-gmax" : {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry"           : {ico: "custom/0869-matcha-cream-berry", flags: []}, // "Berry Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-berry-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love"            : {ico: "custom/0869-matcha-cream-love", flags: []}, // "Love Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-love-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star"            : {ico: "custom/0869-matcha-cream-star", flags: []}, // "Star Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-star-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover"          : {ico: "custom/0869-matcha-cream-clover", flags: []}, // "Clover Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-clover-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower"          : {ico: "custom/0869-matcha-cream-flower", flags: []}, // "Flower Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-flower-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon"          : {ico: "custom/0869-matcha-cream-ribbon", flags: []}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
//	"0869-matcha-cream-ribbon-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry"        : {ico: "0869-mint-cream-strawberry", flags: []}, // "Strawberry Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-strawberry-gmax"   : {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry"             : {ico: "custom/0869-mint-cream-berry", flags: []}, // "Berry Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-berry-gmax"        : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love"              : {ico: "custom/0869-mint-cream-love", flags: []}, // "Love Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-love-gmax"         : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star"              : {ico: "custom/0869-mint-cream-star", flags: []}, // "Star Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-star-gmax"         : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover"            : {ico: "custom/0869-mint-cream-clover", flags: []}, // "Clover Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-clover-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower"            : {ico: "custom/0869-mint-cream-flower", flags: []}, // "Flower Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-flower-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon"            : {ico: "custom/0869-mint-cream-ribbon", flags: []}, // "Ribbon Sweet Mint Cream Alcremie" // female only
//	"0869-mint-cream-ribbon-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry"       : {ico: "0869-lemon-cream-strawberry", flags: []}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-strawberry-gmax"  : {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry"            : {ico: "custom/0869-lemon-cream-berry", flags: []}, // "Berry Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-berry-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love"             : {ico: "custom/0869-lemon-cream-love", flags: []}, // "Love Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-love-gmax"        : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star"             : {ico: "custom/0869-lemon-cream-star", flags: []}, // "Star Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-star-gmax"        : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover"           : {ico: "custom/0869-lemon-cream-clover", flags: []}, // "Clover Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-clover-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower"           : {ico: "custom/0869-lemon-cream-flower", flags: []}, // "Flower Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-flower-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon"           : {ico: "custom/0869-lemon-cream-ribbon", flags: []}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
//	"0869-lemon-cream-ribbon-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry"      : {ico: "0869-salted-cream-strawberry", flags: []}, // "Strawberry Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-strawberry-gmax" : {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry"           : {ico: "custom/0869-salted-cream-berry", flags: []}, // "Berry Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-berry-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love"            : {ico: "custom/0869-salted-cream-love", flags: []}, // "Love Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-love-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star"            : {ico: "custom/0869-salted-cream-star", flags: []}, // "Star Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-star-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover"          : {ico: "custom/0869-salted-cream-clover", flags: []}, // "Clover Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-clover-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower"          : {ico: "custom/0869-salted-cream-flower", flags: []}, // "Flower Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-flower-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon"          : {ico: "custom/0869-salted-cream-ribbon", flags: []}, // "Ribbon Sweet Salted Cream Alcremie" // female only
//	"0869-salted-cream-ribbon-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry"        : {ico: "0869-ruby-swirl-strawberry", flags: []}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-strawberry-gmax"   : {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry"             : {ico: "custom/0869-ruby-swirl-berry", flags: []}, // "Berry Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-berry-gmax"        : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love"              : {ico: "custom/0869-ruby-swirl-love", flags: []}, // "Love Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-love-gmax"         : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star"              : {ico: "custom/0869-ruby-swirl-star", flags: []}, // "Star Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-star-gmax"         : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover"            : {ico: "custom/0869-ruby-swirl-clover", flags: []}, // "Clover Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-clover-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower"            : {ico: "custom/0869-ruby-swirl-flower", flags: []}, // "Flower Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-flower-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon"            : {ico: "custom/0869-ruby-swirl-ribbon", flags: []}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
//	"0869-ruby-swirl-ribbon-gmax"       : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry"     : {ico: "0869-caramel-swirl-strawberry", flags: []}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry"          : {ico: "custom/0869-caramel-swirl-berry", flags: []}, // "Berry Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-berry-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love"           : {ico: "custom/0869-caramel-swirl-love", flags: []}, // "Love Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-love-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star"           : {ico: "custom/0869-caramel-swirl-star", flags: []}, // "Star Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-star-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover"         : {ico: "custom/0869-caramel-swirl-clover", flags: []}, // "Clover Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-clover-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower"         : {ico: "custom/0869-caramel-swirl-flower", flags: []}, // "Flower Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-flower-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon"         : {ico: "custom/0869-caramel-swirl-ribbon", flags: []}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
//	"0869-caramel-swirl-ribbon-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry"     : {ico: "0869-rainbow-swirl-strawberry", flags: []}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry"          : {ico: "custom/0869-rainbow-swirl-berry", flags: []}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-berry-gmax"     : {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love"           : {ico: "custom/0869-rainbow-swirl-love", flags: []}, // "Love Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-love-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star"           : {ico: "custom/0869-rainbow-swirl-star", flags: []}, // "Star Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-star-gmax"      : {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover"         : {ico: "custom/0869-rainbow-swirl-clover", flags: []}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-clover-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower"         : {ico: "custom/0869-rainbow-swirl-flower", flags: []}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-flower-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon"         : {ico: "custom/0869-rainbow-swirl-ribbon", flags: []}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
//	"0869-rainbow-swirl-ribbon-gmax"    : {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0742"                              : {ico: "0742", flags: []}, // "Cutiefly"
	"0743"                              : {ico: "0743", flags: []}, // "Ribombee"
	"0597"                              : {ico: "0597", flags: []}, // "Ferroseed"
	"0598"                              : {ico: "0598", flags: []}, // "Ferrothorn"
//	"0710"                              : {ico: "0710", flags: []}, // "Pumpkaboo"
	"0710-average"                      : {ico: "0710-average", flags: []}, // "Average Size Pumpkaboo"
	"0710-small"                        : {ico: "custom/0710-small", flags: []}, // "Small Size Pumpkaboo"
	"0710-large"                        : {ico: "custom/0710-large", flags: []}, // "Large Size Pumpkaboo"
	"0710-super"                        : {ico: "custom/0710-super", flags: []}, // "Super Size Pumpkaboo"
//	"0711"                              : {ico: "0711", flags: []}, // "Gourgeist"
	"0711-average"                      : {ico: "0711-average", flags: []}, // "Average Size Gourgeist"
	"0711-small"                        : {ico: "0711-average", flags: []}, // "Small Size Gourgeist"
	"0711-large"                        : {ico: "0711-average", flags: []}, // "Large Size Gourgeist"
	"0711-super"                        : {ico: "0711-average", flags: []}, // "Super Size Gourgeist"
	"0172": {ico: "0172", flags: []}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: []}, // "Spiky-eared Pichu" // female only
	"0025": {ico: "0025", flags: []}, // "Pikachu"
//	"0025-m": {ico: "0025", flags: []}, // "Pikachu♂"
//	"0025-f": {ico: "custom/0025-f", flags: []}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: []}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: []}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: []}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: []}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: []}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: []}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: []}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: []}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: []}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: []}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: []}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: []}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: []}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: []}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: []}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: []}, // "Parter Pikachu♀"
//	"0025-gmax": {ico: "0025-gmax", flags: []}, // "Gigantamax Pikachu"
	"0026": {ico: "0026", flags: []}, // "Raichu"
//	"0026-m": {ico: "0026", flags: []}, // "Raichu♂"
//	"0026-f": {ico: "custom/0026-f", flags: []}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: []}, // "Alolan Raichu"
	"0133": {ico: "0133", flags: []}, // "Eevee"
//	"0133-m": {ico: "0133", flags: []}, // "Eevee♂"
//	"0133-f": {ico: "custom/0133-f", flags: []}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: []}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: []}, // "Partner Eevee♀"
//	"0133-gmax": {ico: "0133-gmax", flags: []}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: []}, // "Vaporeon"
	"0135": {ico: "0135", flags: []}, // "Jolteon"
	"0136": {ico: "0136", flags: []}, // "Flareon"
	"0196": {ico: "0196", flags: []}, // "Espeon"
	"0197": {ico: "0197", flags: []}, // "Umbreon"
	"0470": {ico: "0470", flags: []}, // "Leafeon"
	"0471": {ico: "0471", flags: []}, // "Glaceon"
	"0700": {ico: "0700", flags: []}, // "Sylveon"
	"0840": {ico: "0840", flags: []}, // "Applin"
	"0841": {ico: "0841", flags: []}, // "Flapple"
//	"0841-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: []}, // "Appletun"
//	"0842-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Appletun"
	"0677": {ico: "0677", flags: []}, // "Espurr"
//	"0678": {ico: "0678", flags: []}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: []}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: []}, // "Meowstic♀" // female only
	"0684": {ico: "0684", flags: []}, // "Swirlix"
	"0685": {ico: "0685", flags: []}, // "Slurpuff"
	"0682": {ico: "0682", flags: []}, // "Spritzee"
	"0683": {ico: "0683", flags: []}, // "Aromatisse"
	"0751": {ico: "0751", flags: []}, // "Dewpider"
	"0752": {ico: "0752", flags: []}, // "Araquanid"
	"0360": {ico: "0360", flags: []}, // "Wynaut"
	"0202": {ico: "0202", flags: []}, // "Wobbuffet"
//	"0202-m": {ico: "0202", flags: []}, // "Wobbuffet♂"
//	"0202-f": {ico: "0202", flags: []}, // "Wobbuffet♀"
	"0083-galar": {ico: "0083-galar", flags: []}, // "Galarian Farfetch'd"
	"0083": {ico: "0083", flags: []}, // "Farfetch'd"
	"0865": {ico: "0865", flags: []}, // "Sirfetch'd"
	"0170": {ico: "0170", flags: []}, // "Chinchou"
	"0171": {ico: "0171", flags: []}, // "Lanturn"
	"0453": {ico: "0453", flags: []}, // "Croagunk"
//	"0453-m": {ico: "0453", flags: []}, // "Croagunk♂"
//	"0453-f": {ico: "0453", flags: []}, // "Croagunk♀"
	"0454": {ico: "0454", flags: []}, // "Toxicroak"
//	"0454-m": {ico: "0454", flags: []}, // "Toxicroak♂"
//	"0454-f": {ico: "0454", flags: []}, // "Toxicroak♀"
	"0559": {ico: "0559", flags: []}, // "Scraggy"
	"0560": {ico: "0560", flags: []}, // "Scrafty"
	"0618-galar": {ico: "0618-galar", flags: []}, // "Galarian Stunfisk"
	"0618": {ico: "0618", flags: []}, // "Stunfisk"
	"0213": {ico: "0213", flags: []}, // "Shuckle"
	"0339": {ico: "0339", flags: []}, // "Barboach"
	"0340": {ico: "0340", flags: []}, // "Whiscash"
//	"0422": {ico: "0422", flags: []}, // "Shellos"
	"0422-west": {ico: "0422-west", flags: []}, // "West Sea Shellos"
	"0422-east": {ico: "0422-east", flags: []}, // "East Sea Shellos"
//	"0423": {ico: "0423", flags: []}, // "Gastrodon"
	"0423-west": {ico: "0423-west", flags: []}, // "West Sea Gastrodon"
	"0423-east": {ico: "0423-east", flags: []}, // "East Sea Gastrodon"
	"0767": {ico: "0767", flags: []}, // "Wimpod"
	"0768": {ico: "0768", flags: []}, // "Golisopod"
	"0688": {ico: "0688", flags: []}, // "Binacle"
	"0689": {ico: "0689", flags: []}, // "Barbaracle"
	"0222-galar": {ico: "0222-galar", flags: []}, // "Galarian Corsola"
	"0222": {ico: "0222", flags: []}, // "Corsola"
	"0864": {ico: "0864", flags: []}, // "Cursola"
	"0859": {ico: "0859", flags: []}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: []}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: []}, // "Grimmsnarl" // male only
//	"0861-gmax": {ico: "0861-gmax", flags: []}, // "Gigantamax Grimmsnarl" // male only
	"0856": {ico: "0856", flags: []}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: []}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: []}, // "Hatterene" // female only
//	"0858-gmax": {ico: "0858-gmax", flags: []}, // "Gigantamax Hetterene" // female only
	"0757": {ico: "0757", flags: []}, // "Salandit"
	"0758": {ico: "0758", flags: []}, // "Salazzle" // female only
	"0624": {ico: "0624", flags: []}, // "Pawniard"
	"0625": {ico: "0625", flags: []}, // "Bisharp"
	"0538": {ico: "0538", flags: []}, // "Throh" // male only
	"0539": {ico: "0539", flags: []}, // "Sawk" // male only
	"0109": {ico: "0109", flags: []}, // "Koffing"
	"0110-galar": {ico: "0110-galar", flags: []}, // "Galarian Weezing"
	"0110": {ico: "0110", flags: []}, // "Weezing"
	"0438": {ico: "0438", flags: []}, // "Bonsly"
	"0185": {ico: "0185", flags: []}, // "Sudowoodo"
//	"0185-m": {ico: "0185", flags: []}, // "Sudowoodo♂"
//	"0185-f": {ico: "0185", flags: []}, // "Sudowoodo♀"
	"0173": {ico: "0173", flags: []}, // "Cleffa"
	"0035": {ico: "0035", flags: []}, // "Clefairy"
	"0036": {ico: "0036", flags: []}, // "Clefable"
	"0175": {ico: "0175", flags: []}, // "Togepi"
	"0176": {ico: "0176", flags: []}, // "Togetic"
	"0468": {ico: "0468", flags: []}, // "Togekiss"
	"0446": {ico: "0446", flags: []}, // "Munchlax"
	"0143": {ico: "0143", flags: []}, // "Snorlax"
//	"0143-gmax": {ico: "0143-gmax", flags: []}, // "Gigantamax Snorlax"
	"0546": {ico: "0546", flags: []}, // "Cottonee"
	"0547": {ico: "0547", flags: []}, // "Whimsicott"
	"0111": {ico: "0111", flags: []}, // "Rhyhorn"
//	"0111-m": {ico: "0111", flags: []}, // "Rhyhorn♂"
//	"0111-f": {ico: "custom/0111-f", flags: []}, // "Rhyhorn♀"
	"0112": {ico: "0112", flags: []}, // "Rhydon"
//	"0112-m": {ico: "0112", flags: []}, // "Rhydon♂"
//	"0112-f": {ico: "custom/0112-f", flags: []}, // "Rhydon♀"
	"0464": {ico: "0464", flags: []}, // "Rhyperior",
//	"0464-m": {ico: "0464", flags: []}, // "Rhyperior♂",
//	"0464-f": {ico: "0464", flags: []}, // "Rhyperior♀",
	"0574": {ico: "0574", flags: []}, // "Gothita"
	"0575": {ico: "0575", flags: []}, // "Gothorita"
	"0576": {ico: "0576", flags: []}, // "Gothitelle"
	"0577": {ico: "0577", flags: []}, // "Solosis"
	"0578": {ico: "0578", flags: []}, // "Duosion"
	"0579": {ico: "0579", flags: []}, // "Reuniclus"
	"0588": {ico: "0588", flags: []}, // "Karrablast"
	"0589": {ico: "0589", flags: []}, // "Escavalier"
	"0616": {ico: "0616", flags: []}, // "Shelmet"
	"0617": {ico: "0617", flags: []}, // "Accelgor"
	"0605": {ico: "0605", flags: []}, // "Elgyem"
	"0606": {ico: "0606", flags: []}, // "Beheeyem"
	"0613": {ico: "0613", flags: []}, // "Cubchoo"
	"0614": {ico: "0614", flags: []}, // "Beartic"
	"0627": {ico: "0627", flags: []}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: []}, // "Braviary" // male only
	"0629": {ico: "0629", flags: []}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: []}, // "Mandibuzz" // female only
	"0451": {ico: "0451", flags: []}, // "Skorupi"
	"0452": {ico: "0452", flags: []}, // "Drapion"
	"0607": {ico: "0607", flags: []}, // "Litwick"
	"0608": {ico: "0608", flags: []}, // "Lampent"
	"0609": {ico: "0609", flags: []}, // "Chandelure"
	"0686": {ico: "0686", flags: []}, // "Inkay"
	"0687": {ico: "0687", flags: []}, // "Malamar"
	"0215": {ico: "0215", flags: []}, // "Sneasel"
//	"0215-m": {ico: "0215", flags: []}, // "Sneasel♂"
//	"0215-f": {ico: "0215", flags: []}, // "Sneasel♀"
	"0461": {ico: "0461", flags: []}, // "Weavile"
//	"0461-m": {ico: "0461", flags: []}, // "Weavile♂"
//	"0461-f": {ico: "0461", flags: []}, // "Weavile♀"
	"0302": {ico: "0302", flags: []}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: []}, // "Mega Sableye"
	"0303": {ico: "0303", flags: []}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: []}, // "Mega Mawile"
	"0556": {ico: "0556", flags: []}, // "Maractus"
	"0561": {ico: "0561", flags: []}, // "Sigilyph"
	"0447": {ico: "0447", flags: []}, // "Riolu"
	"0448": {ico: "0448", flags: []}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: []}, // "Mega Lucario"
	"0324": {ico: "0324", flags: []}, // "Torkoal"
//	"0778": {ico: "0778", flags: []}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: []}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: []}, // "Busted Mimikyu"
	"0878": {ico: "0878", flags: []}, // "Cufant"
	"0879": {ico: "0879", flags: []}, // "Copperajah"
//	"0879-gmax": {ico: "0879-gmax", flags: []}, // "Gigantamax Copperajah"
	"0211": {ico: "0211", flags: []}, // "Qwilfish"
//	"0592": {ico: "0592", flags: []}, // "Frillish"
	"0592-m": {ico: "0592-m", flags: []}, // "Frillish♂"
	"0592-f": {ico: "0592-f", flags: []}, // "Frillish♀"
//	"0593": {ico: "0593", flags: []}, // "Jellicent"
	"0593-m": {ico: "0593-m", flags: []}, // "Jellicent♂"
	"0593-f": {ico: "0593-f", flags: []}, // "Jellicent♀"
	"0747": {ico: "0747", flags: []}, // "Mareanie"
	"0748": {ico: "0748", flags: []}, // "Toxapex"
	"0845": {ico: "0845", flags: []}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: []}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: []}, // "Gorging Cramorant"
	"0848": {ico: "0848", flags: []}, // "Toxel"
//	"0849": {ico: "0849", flags: []}, // "Toxitricity"
	"0849-low-key": {ico: "0849-low-key", flags: []}, // "Low Key Toxtricity" // blue
//	"0849-low-key-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Low Key Toxtricity"
//	"0849-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: []}, // "Amped Toxtricity" // yellow
//	"0849-amped-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Amped Toxtricity"
	"0843": {ico: "0843", flags: []}, // "Silicobra"
	"0844": {ico: "0844", flags: []}, // "Sandaconda"
//	"0844-gmax": {ico: "0844-gmax", flags: []}, // "Gigantamax Sandaconda"
	"0449": {ico: "0449", flags: []}, // "Hippopotas"
//	"0449-m": {ico: "0449", flags: []}, // "Hippopotas♂"
//	"0449-f": {ico: "custom/0449-f", flags: []}, // "Hippopotas♀"
	"0450": {ico: "0450", flags: []}, // "Hippowdon",
//	"0450-m": {ico: "0450", flags: []}, // "Hippowdon♂",
//	"0450-f": {ico: "custom/0450-f", flags: []}, // "Hippowdon♀",
	"0632": {ico: "0632", flags: []}, // "Durant"
	"0631": {ico: "0631", flags: []}, // "Heatmor"
	"0694": {ico: "0694", flags: []}, // "Helioptile"
	"0695": {ico: "0695", flags: []}, // "Heliolisk"
	"0701": {ico: "0701", flags: []}, // "Hawlucha"
	"0328": {ico: "0328", flags: []}, // "Trapinch"
	"0329": {ico: "0329", flags: []}, // "Vibrava"
	"0330": {ico: "0330", flags: []}, // "Flygon"
	"0610": {ico: "0610", flags: []}, // "Axew"
	"0611": {ico: "0611", flags: []}, // "Fraxure"
	"0612": {ico: "0612", flags: []}, // "Haxorus"
	"0562-galar": {ico: "0562-galar", flags: []}, // "Galarian Yamask"
	"0562": {ico: "0562", flags: []}, // "Yamask"
	"0867": {ico: "0867", flags: []}, // "Runerigus"
	"0563": {ico: "0563", flags: []}, // "Cofagrigus"
	"0679": {ico: "0679", flags: []}, // "Honedge"
	"0680": {ico: "0680", flags: []}, // "Doublade"
//	"0681": {ico: "0681", flags: []}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: []}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: []}, // "Blade Aegislash"
	"0077-galar": {ico: "0077-galar", flags: []}, // "Galarian Ponyta"
	"0077": {ico: "0077", flags: []}, // "Ponyta"
	"0078-galar": {ico: "0078-galar", flags: []}, // "Galarian Rapidash"
	"0078": {ico: "0078", flags: []}, // "Rapidash"
//	"0854": {ico: "0854", flags: []}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854-phony", flags: []}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854-phony", flags: []}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: []}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855-phony", flags: []}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855-phony", flags: []}, // "Authentic Polteageist" // uknown gender
//	"0876": {ico: "0876", flags: []}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: []}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: []}, // "Indeedee♀" // female only
	"0708": {ico: "0708", flags: []}, // "Phantump"
	"0709": {ico: "0709", flags: []}, // "Trevenant"
	"0755": {ico: "0755", flags: []}, // "Morelull"
	"0756": {ico: "0756", flags: []}, // "Shiinotic"
	"0765": {ico: "0765", flags: []}, // "Oranguru"
	"0766": {ico: "0766", flags: []}, // "Passimian"
//	"0877": {ico: "0877", flags: []}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: []}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: []}, // "Hangry Mode Morpeko"
	"0870": {ico: "0870", flags: []}, // "Falinks" // uknown gender
	"0780": {ico: "0780", flags: []}, // "Drampa"
	"0776": {ico: "0776", flags: []}, // "Turtonator"
	"0777": {ico: "0777", flags: []}, // "Togedemaru"
	"0872": {ico: "0872", flags: []}, // "Snom"
	"0873": {ico: "0873", flags: []}, // "Frosmoth"
	"0852": {ico: "0852", flags: []}, // "Clobbopus"
	"0853": {ico: "0853", flags: []}, // "Grapploct"
	"0871": {ico: "0871", flags: []}, // "Pincurchin"
	"0458": {ico: "0458", flags: []}, // "Mantyke"
	"0226": {ico: "0226", flags: []}, // "Mantine"
	"0320": {ico: "0320", flags: []}, // "Wailmer"
	"0321": {ico: "0321", flags: []}, // "Wailord"
	"0712": {ico: "0712", flags: []}, // "Bergmite"
	"0713": {ico: "0713", flags: []}, // "Avalugg"
	"0781": {ico: "0781", flags: []}, // "Dhelmise" // uknown gender
	"0131": {ico: "0131", flags: []}, // "Lapras"
//	"0131-gmax": {ico: "0131-gmax", flags: []}, // "Gigantamax Lapras"
	"0337": {ico: "0337", flags: []}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: []}, // "Solrock" // uknown gender
	"0439": {ico: "0439", flags: []}, // "Mime Jr."
	"0122-galar": {ico: "0122-galar", flags: []}, // "Galarian Mr. Mime"
	"0122": {ico: "0122", flags: []}, // "Mr. Mime"
	"0866": {ico: "0866", flags: []}, // "Mr. Rime"
	"0554-galar": {ico: "0554-galar", flags: []}, // "Galarian Darumaka"
	"0554": {ico: "0554", flags: []}, // "Darumaka"
//	"0555-galar": {ico: "0555-galar", flags: []}, // "Galarian Darmanitan"
//	"0555": {ico: "0555", flags: []}, // "Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: []}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: []}, // "Galarian Darmanitan Zen Mode"
	"0555-standard": {ico: "0555-standard", flags: []}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: []}, // "Darmanitan Zen Mode"
	"0874": {ico: "0874", flags: []}, // "Stonjourner"
//	"0875": {ico: "0875", flags: []}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: []}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: []}, // "Noice Face Eiscue"
	"0884": {ico: "0884", flags: []}, // "Duraludon"
//	"0884-gmax": {ico: "0884-gmax", flags: []}, // "Gigantamax Duraludon"
	"0479": {ico: "0479", flags: []}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: []}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: []}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: []}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: []}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: []}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: []}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: []}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: []}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: []}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: []}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: []}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: []}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: []}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: []}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: []}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0132": {ico: "0132", flags: []}, // "Ditto" // uknown gender
	"0880": {ico: "0880", flags: []}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: []}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: []}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: []}, // "Arctovish" // uknown gender
	"0004": {ico: "0004", flags: []}, // "Charmander"
	"0005": {ico: "0005", flags: []}, // "Charmeleon"
	"0006": {ico: "0006", flags: []}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: []}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: []}, // "Mega Charizard Y"
//	"0006-gmax": {ico: "0006-gmax", flags: []}, // "Gigantamax Charizard"
	"0772": {ico: "0772", flags: []}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: []}, // "Silvally" // uknown gender
	"0773-fighting": {ico: "custom/0773-fighting", flags: []}, // "Silvally Type: Fighting" // uknown gender
	"0773-flying": {ico: "custom/0773-flying", flags: []}, // "Silvally Type: Flying" // uknown gender
	"0773-poison": {ico: "custom/0773-poison", flags: []}, // "Silvally Type: Poison" // uknown gender
	"0773-ground": {ico: "custom/0773-ground", flags: []}, // "Silvally Type: Ground" // uknown gender
	"0773-rock": {ico: "custom/0773-rock", flags: []}, // "Silvally Type: Rock" // uknown gender
	"0773-bug": {ico: "custom/0773-bug", flags: []}, // "Silvally Type: Bug" // uknown gender
	"0773-ghost": {ico: "custom/0773-ghost", flags: []}, // "Silvally Type: Ghost" // uknown gender
	"0773-steel": {ico: "custom/0773-steel", flags: []}, // "Silvally Type: Steel" // uknown gender
	"0773-fire": {ico: "custom/0773-fire", flags: []}, // "Silvally Type: Fire" // uknown gender
	"0773-water": {ico: "custom/0773-water", flags: []}, // "Silvally Type: Water" // uknown gender
	"0773-grass": {ico: "custom/0773-grass", flags: []}, // "Silvally Type: Grass" // uknown gender
	"0773-electric": {ico: "custom/0773-electric", flags: []}, // "Silvally Type: Electric" // uknown gender
	"0773-psychic": {ico: "custom/0773-psychic", flags: []}, // "Silvally Type: Psychic" // uknown gender
	"0773-ice": {ico: "custom/0773-ice", flags: []}, // "Silvally Type: Ice" // uknown gender
	"0773-dragon": {ico: "custom/0773-dragon", flags: []}, // "Silvally Type: Dragon" // uknown gender
	"0773-dark": {ico: "custom/0773-dark", flags: []}, // "Silvally Type: Dark" // uknown gender
	"0773-fairy": {ico: "custom/0773-fairy", flags: []}, // "Silvally Type: Fairy" // uknown gender
	"0246": {ico: "0246", flags: []}, // "Larvitar"
	"0247": {ico: "0247", flags: []}, // "Pupitar"
	"0248": {ico: "0248", flags: []}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: []}, // "Mega Tyranitar"
	"0633": {ico: "0633", flags: []}, // "Deino"
	"0634": {ico: "0634", flags: []}, // "Zweilous"
	"0635": {ico: "0635", flags: []}, // "Hydreigon"
	"0704": {ico: "0704", flags: []}, // "Goomy"
	"0705": {ico: "0705", flags: []}, // "Sliggoo"
	"0706": {ico: "0706", flags: []}, // "Goodra"
	"0782": {ico: "0782", flags: []}, // "Jangmo-o"
	"0783": {ico: "0783", flags: []}, // "Hakamo-o"
	"0784": {ico: "0784", flags: []}, // "Kommo-o"
	"0885": {ico: "0885", flags: []}, // "Dreepy"
	"0886": {ico: "0886", flags: []}, // "Drakloak"
	"0887": {ico: "0887", flags: []}, // "Dragapult"
//	"0888": {ico: "0888", flags: []}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: []}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: []}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: []}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: []}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: []}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: []}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: []}, // "Eternamax Eternatus" // uknown gender
//==============================
//	 Isle of Armor Dex exclusive
//==============================
	"0079-galar": {ico: "0079-galar", flags: []}, // "Galarian Slowpoke"
	"0079": {ico: "0079", flags: []}, // "Slowpoke"
	"0080-galar": {ico: "0080-galar", flags: []}, // "Galarian Slowbro"
	"0080": {ico: "0080", flags: []}, // "Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: []}, // "Mega Slowbro"
	"0199-galar": {ico: "0199-galar", flags: []}, // "Galarian Slowking"
	"0199": {ico: "0199", flags: []}, // "Slowking"
	"0427": {ico: "0427", flags: []}, // "Buneary"
	"0428": {ico: "0428", flags: []}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: []}, // "Mega Lopunny"
	"0440": {ico: "0440", flags: []}, // "Happiny" // female only
	"0113": {ico: "0113", flags: []}, // "Chansey" // female only
	"0242": {ico: "0242", flags: []}, // "Blissey" // female only
	"0174": {ico: "0174", flags: []}, // "Igglybuff"
	"0039": {ico: "0039", flags: []}, // "Jigglypuff"
	"0040": {ico: "0040", flags: []}, // "Wigglytuff"
	"0753": {ico: "0753", flags: []}, // "Fomantis"
	"0754": {ico: "0754", flags: []}, // "Lurantis"
	"0661": {ico: "0661", flags: []}, // "Fletchling"
	"0662": {ico: "0662", flags: []}, // "Fletchinder"
	"0663": {ico: "0663", flags: []}, // "Talonflame"
	"0403": {ico: "0403", flags: []}, // "Shinx"
//	"0403-m": {ico: "0403", flags: []}, // "Shinx♂"
//	"0403-f": {ico: "0403", flags: []}, // "Shinx♀"
	"0404": {ico: "0404", flags: []}, // "Luxio"
//	"0404-m": {ico: "0404", flags: []}, // "Luxio♂"
//	"0404-f": {ico: "0404", flags: []}, // "Luxio♀"
	"0405": {ico: "0405", flags: []}, // "Luxray"
//	"0405-m": {ico: "0405", flags: []}, // "Luxray♂"
//	"0405-f": {ico: "0405", flags: []}, // "Luxray♀"
	"0707": {ico: "0707", flags: []}, // "Klefki"
	"0063": {ico: "0063", flags: []}, // "Abra"
	"0064": {ico: "0064", flags: []}, // "Kadabra"
//	"0064-m": {ico: "0064", flags: []}, // "Kadabra♂"
//	"0064-f": {ico: "0064", flags: []}, // "Kadabra♀"
	"0065": {ico: "0065", flags: []}, // "Alakazam"
//	"0065-m": {ico: "0065", flags: []}, // "Alakazam♂"
//	"0065-f": {ico: "0065", flags: []}, // "Alakazam♀"
	"0072": {ico: "0072", flags: []}, // "Tentacool"
	"0073": {ico: "0073", flags: []}, // "Tentacruel"
	"0206": {ico: "0206", flags: []}, // "Dunsparce"
	"0626": {ico: "0626", flags: []}, // "Bouffalant"
	"0108": {ico: "0108", flags: []}, // "Lickitung"
	"0463": {ico: "0463", flags: []}, // "Lickilicky"
	"0621": {ico: "0621", flags: []}, // "Druddigon"
	"0001": {ico: "0001", flags: []}, // "Bulbasaur"
	"0002": {ico: "0002", flags: []}, // "Ivysaur"
	"0003": {ico: "0003", flags: []}, // "Venusaur"
//	"0003-m": {ico: "0003", flags: []}, // "Venusaur♂"
//	"0003-f": {ico: "custom/0003-f", flags: []}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: []}, // "Mega Venusaur"
//	"0003-gmax": {ico: "0003-gmax", flags: []}, // "Gigantamax Venusaur"
	"0007": {ico: "0007", flags: []}, // "Squirtle"
	"0008": {ico: "0008", flags: []}, // "Wartortle"
	"0009": {ico: "0009", flags: []}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: []}, // "Mega Blastoise"
//	"0009-gmax": {ico: "0009-gmax", flags: []}, // "Gigantamax Blastoise"
	"0543": {ico: "0543", flags: []}, // "Venipede"
	"0544": {ico: "0544", flags: []}, // "Whirlipede"
	"0545": {ico: "0545", flags: []}, // "Scolipede"
	"0590": {ico: "0590", flags: []}, // "Foongus"
	"0591": {ico: "0591", flags: []}, // "Amoonguss"
	"0764": {ico: "0764", flags: []}, // "Comfey"
	"0114": {ico: "0114", flags: []}, // "Tangela"
	"0465": {ico: "0465", flags: []}, // "Tangrowth"
//	"0465-m": {ico: "0465", flags: []}, // "Tangrowth♂"
//	"0465-f": {ico: "0465", flags: []}, // "Tangrowth♀"
	"0570": {ico: "0570", flags: []}, // "Zorua"
	"0571": {ico: "0571", flags: []}, // "Zoroark"
		"0120": {ico: "0120", flags: []}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: []}, // "Starmie" // uknown gender
	"0891": {ico: "0891", flags: []}, // "Kubfu"
//	"0892": {ico: "0892", flags: []}, // "Urshifu"
	"0892-single": {ico: "0892", flags: []}, // "Single Strike Style Urshifu"
//	"0892-single-gmax": {ico: "0892-single-gmax", flags: []}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892", flags: []}, // "Rapid Strike Style Urshifu"
//	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: []}, // "Gigantamax Rapid Strike Style Urshifu"
	"0587": {ico: "0587", flags: []}, // "Emolga"
	"0702": {ico: "0702", flags: []}, // "Dedenne"
	"0081": {ico: "0081", flags: []}, // "Magnemite"
	"0082": {ico: "0082", flags: []}, // "Magneton"
	"0462": {ico: "0462", flags: []}, // "Magnezone" // uknown gender
	"0318": {ico: "0318", flags: []}, // "Carvanha"
	"0319": {ico: "0319", flags: []}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: []}, // "Mega Sharpedo"
	"0506": {ico: "0506", flags: []}, // "Lillipup"
	"0507": {ico: "0507", flags: []}, // "Herdier"
	"0508": {ico: "0508", flags: []}, // "Stoutland"
	"0128": {ico: "0128", flags: []}, // "Tauros" // male only
	"0241": {ico: "0241", flags: []}, // "Miltank" // female only
	"0123": {ico: "0123", flags: []}, // "Scyther"
//	"0123-m": {ico: "0123", flags: []}, // "Scyther♂"
//	"0123-f": {ico: "0123", flags: []}, // "Scyther♀"
	"0212": {ico: "0212", flags: []}, // "Scizor"
//	"0212-m": {ico: "0212", flags: []}, // "Scizor♂"
//	"0212-f": {ico: "0212", flags: []}, // "Scizor♀"
	"0127": {ico: "0127", flags: []}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: []}, // "Mega Pinsir"
	"0214": {ico: "0214", flags: []}, // "Heracross"
//	"0214-m": {ico: "0214", flags: []}, // "Heracross♂"
//	"0214-f": {ico: "0214", flags: []}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: []}, // "Mega Heracross"
	"0769": {ico: "0769", flags: []}, // "Sandygast"
	"0770": {ico: "0770", flags: []}, // "Palossand"
	"0298": {ico: "0298", flags: []}, // "Azurill"
	"0183": {ico: "0183", flags: []}, // "Marill"
	"0184": {ico: "0184", flags: []}, // "Azumarill"
	"0060": {ico: "0060", flags: []}, // "Poliwag"
	"0061": {ico: "0061", flags: []}, // "Poliwhirl"
	"0062": {ico: "0062", flags: []}, // "Poliwrath"
	"0186": {ico: "0186", flags: []}, // "Politoed"
//	"0186-m": {ico: "0186", flags: []}, // "Politoed♂"
//	"0186-f": {ico: "0186", flags: []}, // "Politoed♀"
	"0054": {ico: "0054", flags: []}, // "Psyduck"
	"0055": {ico: "0055", flags: []}, // "Golduck"
	"0293": {ico: "0293", flags: []}, // "Whismur"
	"0294": {ico: "0294", flags: []}, // "Loudred"
	"0295": {ico: "0295", flags: []}, // "Exploud"
	"0227": {ico: "0227", flags: []}, // "Skarmory"
	"0744": {ico: "0744", flags: []}, // "Rockruff"
//	"0745": {ico: "0745", flags: []}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: []}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: []}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: []}, // "Dusk Lycanroc"
	"0619": {ico: "0619", flags: []}, // "Mienfoo"
	"0620": {ico: "0620", flags: []}, // "Mienshao"
	"0027": {ico: "0027", flags: []}, // "Sandshrew"
	"0027-alola": {ico: "0027-alola", flags: []}, // "Alolan Sandshrew"
	"0028": {ico: "0028", flags: []}, // "Sandslash"
	"0028-alola": {ico: "0028-alola", flags: []}, // "Alolan Sandslash"
	"0104": {ico: "0104", flags: []}, // "Cubone"
	"0105": {ico: "0105", flags: []}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: []}, // "Alolan Marowak"
	"0115": {ico: "0115", flags: []}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: []}, // "Mega Kangaskhan" // female only
	"0551": {ico: "0551", flags: []}, // "Sandile"
	"0552": {ico: "0552", flags: []}, // "Krokorok"
	"0553": {ico: "0553", flags: []}, // "Krookodile"
	"0636": {ico: "0636", flags: []}, // "Larvesta"
	"0637": {ico: "0637", flags: []}, // "Volcarona"
	"0690": {ico: "0690", flags: []}, // "Skrelp"
	"0691": {ico: "0691", flags: []}, // "Dragalge"
	"0692": {ico: "0692", flags: []}, // "Clauncher"
	"0693": {ico: "0693", flags: []}, // "Clawitzer"
	"0116": {ico: "0116", flags: []}, // "Horsea"
	"0117": {ico: "0117", flags: []}, // "Seadra"
	"0230": {ico: "0230", flags: []}, // "Kingdra"
	"0548": {ico: "0548", flags: []}, // "Petilil" // female only
	"0549": {ico: "0549", flags: []}, // "Lilligant" // female only
	"0102": {ico: "0102", flags: []}, // "Exeggcute"
	"0103": {ico: "0103", flags: []}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: []}, // "Alolan Exeggutor"
	"0137": {ico: "0137", flags: []}, // "Porygon" // uknown gender
	"0233": {ico: "0233", flags: []}, // "Porygon2" // uknown gender
	"0474": {ico: "0474", flags: []}, // "Porygon-Z" // uknown gender
	"0893": {ico: "0893", flags: []}, // "Zarude" // uknown gender
	"0893-dada": {ico: "0893-dada", flags: []}, // "Dada Zarude" // uknown gender
//==============================
//	 Crown Tundra Dex exclusive
//==============================
	"0238": {ico: "0238", flags: []}, // "Smoochum" // female only
	"0124": {ico: "0124", flags: []}, // "Jynx" // female only
	"0239": {ico: "0239", flags: []}, // "Elekid"
	"0125": {ico: "0125", flags: []}, // "Electabuzz"
	"0466": {ico: "0466", flags: []}, // "Electivire"
	"0240": {ico: "0240", flags: []}, // "Magby"
	"0126": {ico: "0126", flags: []}, // "Magmar"
	"0467": {ico: "0467", flags: []}, // "Magmortar"
	"0531": {ico: "0531", flags: []}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: []}, // "Mega Audino"
	"0615": {ico: "0615", flags: []}, // "Cryogonal" // uknown gender
	"0333": {ico: "0333", flags: []}, // "Swablu"
	"0334": {ico: "0334", flags: []}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: []}, // "Mega Altaria"
	"0442": {ico: "0442", flags: []}, // "Spiritomb"
//	"0029": {ico: "0029", flags: []}, // "Nidoran"
	"0029-f": {ico: "0029-f", flags: []}, // "Nidoran♀"
	"0030": {ico: "0030", flags: []}, // "Nidorina"
	"0031": {ico: "0031", flags: []}, // "Nidoqueen"
//	"0032": {ico: "0032", flags: []}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: []}, // "Nidoran♂"
	"0033": {ico: "0033", flags: []}, // "Nidorino"
	"0034": {ico: "0034", flags: []}, // "Nidoking"
	"0696": {ico: "0696", flags: []}, // "Tyrunt"
	"0697": {ico: "0697", flags: []}, // "Tyrantrum"
	"0698": {ico: "0698", flags: []}, // "Amaura"
	"0699": {ico: "0699", flags: []}, // "Aurorus"
	"0359": {ico: "0359", flags: []}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: []}, // "Mega Absol"
	"0371": {ico: "0371", flags: []}, // "Bagon"
	"0372": {ico: "0372", flags: []}, // "Shelgon"
	"0373": {ico: "0373", flags: []}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: []}, // "Mega Salamence"
	"0443": {ico: "0443", flags: []}, // "Gible"
//	"0443-m": {ico: "0443", flags: []}, // "Gible♂"
//	"0443-f": {ico: "0443", flags: []}, // "Gible♀"
	"0444": {ico: "0444", flags: []}, // "Gabite"
//	"0444-m": {ico: "0444", flags: []}, // "Gabite♂"
//	"0444-f": {ico: "0444", flags: []}, // "Gabite♀"
	"0445": {ico: "0445", flags: []}, // "Garchomp"
//	"0445-m": {ico: "0445", flags: []}, // "Garchomp♂"
//	"0445-f": {ico: "0445", flags: []}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: []}, // "Mega Garchomp"
	"0138": {ico: "0138", flags: []}, // "Omanyte"
	"0139": {ico: "0139", flags: []}, // "Omastar"
	"0140": {ico: "0140", flags: []}, // "Kabuto"
	"0141": {ico: "0141", flags: []}, // "Kabutops"
	"0142": {ico: "0142", flags: []}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: []}, // "Mega Aerodactyl"
	"0703": {ico: "0703", flags: []}, // "Carbink" // uknown gender
	"0374": {ico: "0374", flags: []}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: []}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: []}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: []}, // "Mega Metagross" // uknown gender
	"0041": {ico: "0041", flags: []}, // "Zubat"
//	"0041-m": {ico: "0041", flags: []}, // "Zubat♂"
//	"0041-f": {ico: "0041", flags: []}, // "Zubat♀"
	"0042": {ico: "0042", flags: []}, // "Golbat"
//	"0042-m": {ico: "0042", flags: []}, // "Golbat♂"
//	"0042-f": {ico: "0042", flags: []}, // "Golbat♀"
	"0169": {ico: "0169", flags: []}, // "Crobat"
	"0564": {ico: "0564", flags: []}, // "Tirtouga"
	"0565": {ico: "0565", flags: []}, // "Carracosta"
	"0566": {ico: "0566", flags: []}, // "Archen"
	"0567": {ico: "0567", flags: []}, // "Archeops"
	"0363": {ico: "0363", flags: []}, // "Spheal"
	"0364": {ico: "0364", flags: []}, // "Sealeo"
	"0365": {ico: "0365", flags: []}, // "Walrein"
	"0345": {ico: "0345", flags: []}, // "Lileep"
	"0346": {ico: "0346", flags: []}, // "Cradily"
	"0347": {ico: "0347", flags: []}, // "Anorith"
	"0348": {ico: "0348", flags: []}, // "Armaldo"
	"0369": {ico: "0369", flags: []}, // "Relicanth"
//	"0369-m": {ico: "0369", flags: []}, // "Relicanth♂"
//	"0369-f": {ico: "0369", flags: []}, // "Relicanth♀"
	"0304": {ico: "0304", flags: []}, // "Aron"
	"0305": {ico: "0305", flags: []}, // "Lairon"
	"0306": {ico: "0306", flags: []}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: []}, // "Mega Aggron"
	"0147": {ico: "0147", flags: []}, // "Dratini"
	"0148": {ico: "0148", flags: []}, // "Dragonair"
	"0149": {ico: "0149", flags: []}, // "Dragonite"
	"0377": {ico: "0377", flags: []}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: []}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: []}, // "Registeel" // uknown gender
	"0894": {ico: "0894", flags: []}, // "Regieleki" // uknown gender
	"0895": {ico: "0895", flags: []}, // "Regidrago" uknown gender
	"0144-galar": {ico: "0144-galar", flags: []}, // "Galarian Articuno" // uknown gender
	"0144": {ico: "0144", flags: []}, // "Articuno" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: []}, // "Galarian Zapdos" // uknown gender
	"0145": {ico: "0145", flags: []}, // "Zapdos" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: []}, // "Galarian Moltres" // uknown gender
	"0146": {ico: "0146", flags: []}, // "Moltres" // uknown gender
	"0638": {ico: "0638", flags: []}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: []}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: []}, // "Virizion" // uknown gender
	"0896": {ico: "0896", flags: []}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: []}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: []}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: []}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: []}, // "Shadow Rider Calyrex" // uknown gender
//================
//	 non-Galar Dex
//================
	"0150": {ico: "0150", flags: []}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: []}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: []}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: []}, // "Mew" // uknown gender
	"0243": {ico: "0243", flags: []}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: []}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: []}, // "Suicune" // uknown gender
	"0249": {ico: "0249", flags: []}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: []}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: []}, // "Celebi" // uknown gender
	"0252": {ico: "0252", flags: []}, // "Treecko"
	"0253": {ico: "0253", flags: []}, // "Grovyle"
	"0254": {ico: "0254", flags: []}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: []}, // "Mega Sceptile"
	"0255": {ico: "0255", flags: []}, // "Torchic"
//	"0255-m": {ico: "0255", flags: []}, // "Torchic♂"
//	"0255-f": {ico: "0255", flags: []}, // "Torchic♀"
	"0256": {ico: "0256", flags: []}, // "Combusken"
//	"0256-m": {ico: "0256", flags: []}, // "Combusken♂"
//	"0256-f": {ico: "0256", flags: []}, // "Combusken♀"
	"0257": {ico: "0257", flags: []}, // "Blaziken"
//	"0257-m": {ico: "0257", flags: []}, // "Blaziken♂"
//	"0257-f": {ico: "0257", flags: []}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: []}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: []}, // "Mudkip"
	"0259": {ico: "0259", flags: []}, // "Marshtomp"
	"0260": {ico: "0260", flags: []}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: []}, // "Mega Swampert"
	"0380": {ico: "0380", flags: []}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: []}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: []}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: []}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: []}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: []}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: []}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: []}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: []}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: []}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: []}, // "Jirachi" // uknown gender
	"0480": {ico: "0480", flags: []}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: []}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: []}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: []}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: []}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: []}, // "Heatran"
	"0486": {ico: "0486", flags: []}, // "Regigigas" // uknown gender
//	"0487": {ico: "0487", flags: []}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: []}, // "Giratina Altered Forme" // uknown gender
	"0487-origin": {ico: "0487-origin", flags: []}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: []}, // "Cresselia" // female only
	"0494": {ico: "0494", flags: []}, // "Victini" // uknown gender
//	"0641": {ico: "0641", flags: []}, // "Tornadus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: []}, // "Incarnate Forme Tornadus" // male only
	"0641-therian": {ico: "0641-therian", flags: []}, // "Therian Forme Tornadus" // male only
//	"0642": {ico: "0642", flags: []}, // "Thundurus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: []}, // "Incarnate Forme Thundurus" // male only
	"0642-therian": {ico: "0642-therian", flags: []}, // "Therian Forme Thundurus" // male only
	"0643": {ico: "0643", flags: []}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: []}, // "Zekrom" // uknown gender
//	"0645": {ico: "0645", flags: []}, // "Landorus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: []}, // "Incarnate Forme Landorus" // male only
	"0645-therian": {ico: "0645-therian", flags: []}, // "Therian Forme Landorus" // male only
	"0646": {ico: "0646", flags: []}, // "Kyurem" // uknown gender
	"0646-white": {ico: "0646-white", flags: []}, // "White Kyurem" // uknown gender
	"0646-black": {ico: "0646-black", flags: []}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: []}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: []}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: []}, // "Resolute Form Keldeo" // uknown gender
	"0649": {ico: "0649", flags: []}, // "Genesect" // uknown gender
	"0649-douse": {ico: "0649-douse", flags: []}, // "Douse Drive Genesect" // uknown gender
	"0649-shock": {ico: "0649-shock", flags: []}, // "Shock Drive Genesect" // uknown gender
	"0649-burn": {ico: "0649-burn", flags: []}, // "Burn Drive Genesect" // uknown gender
	"0649-chill": {ico: "0649-chill", flags: []}, // "Chill Drive Genesect" // uknown gender
//	"0716": {ico: "0716", flags: []}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: []}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: []}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: []}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: []}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: []}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: []}, // "10% Zygarde" // uknown gender
//	"0718-complete": {ico: "0718-complete", flags: []}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: []}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: []}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: []}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: []}, // "Mega Diancie" // uknown gender
	"0721": {ico: "0721", flags: []}, // "Volcanion" // uknown gender
	"0722": {ico: "0722", flags: []}, // "Rowlet"
	"0723": {ico: "0723", flags: []}, // "Dartrix"
	"0724": {ico: "0724", flags: []}, // "Decidueye"
	"0725": {ico: "0725", flags: []}, // "Litten"
	"0726": {ico: "0726", flags: []}, // "Torracat"
	"0727": {ico: "0727", flags: []}, // "Incineroar"
	"0728": {ico: "0728", flags: []}, // "Popplio"
	"0729": {ico: "0729", flags: []}, // "Brionne"
	"0730": {ico: "0730", flags: []}, // "Primarina"
	"0785": {ico: "0785", flags: []}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: []}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: []}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: []}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: []}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: []}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: []}, // "Solgaleo" // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: []}, // "Radiant Sun Solgaleo" // unknown gender
	"0792": {ico: "0792", flags: []}, // "Lunala" // uknown gender
//	"0792-full-moon": {ico: "0792-full-moon", flags: []}, // "Full Monn Lunala" // uknown gender
	"0793": {ico: "0793", flags: []}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: []}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: []}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: []}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: []}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: []}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: []}, // "Guzzlord" // uknown gender
	"0800": {ico: "0800", flags: []}, // "Necrozma" // uknown gender
//	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: []}, // "Dusk Mane Necrozma" // uknown gender
//	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: []}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: []}, // "Ultra Necrozma" // uknown gender
	"0801": {ico: "0801", flags: []}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: []}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: []}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: []}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: []}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: []}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: []}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: []}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: []}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: []}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: []}, // "Melmetal" // uknown gender
//	"0809-gmax": {ico: "0809-gmax", flags: []}, // "Gigantamax Melmetal" // uknown gender
//================
//	 Gigantamax Dex
//================
	"0812-gmax": {ico: "0812-gmax", flags: []}, // "Gigantamax Rillaboom"
	"0815-gmax": {ico: "0815-gmax", flags: []}, // "Gigantamax Cinderace"
	"0818-gmax": {ico: "0818-gmax", flags: []}, // "Gigantamax Inteleon"
	"0826-gmax": {ico: "0826-gmax", flags: []}, // "Gigantamax Orbeetle"
	"0012-gmax": {ico: "0012-gmax", flags: []}, // "Gigantamax Butterfree"
	"0823-gmax": {ico: "0823-gmax", flags: []}, // "Gigantamax Corviknight"
	"0834-gmax": {ico: "0834-gmax", flags: []}, // "Gigantamax Drednaw"
	"0099-gmax": {ico: "0099-gmax", flags: []}, // "Gigantamax Kingler"
	"0068-gmax": {ico: "0068-gmax", flags: []}, // "Gigantamax Machamp"
	"0094-gmax": {ico: "0094-gmax", flags: []}, // "Gigantamax Gengar"
	"0569-gmax": {ico: "0569-gmax", flags: []}, // "Gigantamax Garbodor"
	"0851-gmax": {ico: "0851-gmax", flags: []}, // "Gigantamax Centiskorch"
	"0839-gmax": {ico: "0839-gmax", flags: []}, // "Gigantamax Coalossal"
	"0052-gmax": {ico: "0052-gmax", flags: []}, // "Gigantamax Meowth"
//	"0869-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0025-gmax": {ico: "0025-gmax", flags: []}, // "Gigantamax Pikachu"
	"0133-gmax": {ico: "0133-gmax", flags: []}, // "Gigantamax Eevee"
	"0841-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Flapple"
	"0842-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Appletun"
	"0861-gmax": {ico: "0861-gmax", flags: []}, // "Gigantamax Grimmsnarl" // male only
	"0858-gmax": {ico: "0858-gmax", flags: []}, // "Gigantamax Hetterene" // female only
	"0143-gmax": {ico: "0143-gmax", flags: []}, // "Gigantamax Snorlax"
	"0879-gmax": {ico: "0879-gmax", flags: []}, // "Gigantamax Copperajah"
//	"0849-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Toxtricity"
	"0849-low-key-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Low Key Toxtricity"
	"0849-amped-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Amped Toxtricity"
	"0844-gmax": {ico: "0844-gmax", flags: []}, // "Gigantamax Sandaconda"
	"0131-gmax": {ico: "0131-gmax", flags: []}, // "Gigantamax Lapras"
	"0884-gmax": {ico: "0884-gmax", flags: []}, // "Gigantamax Duraludon"
	"0006-gmax": {ico: "0006-gmax", flags: []}, // "Gigantamax Charizard"
	"0003-gmax": {ico: "0003-gmax", flags: []}, // "Gigantamax Venusaur"
	"0009-gmax": {ico: "0009-gmax", flags: []}, // "Gigantamax Blastoise"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: []}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: []}, // "Gigantamax Rapid Strike Style Urshifu"
	"0809-gmax": {ico: "0809-gmax", flags: []}, // "Gigantamax Melmetal" // uknown gender
}

const _Regdex_nSwSh	=
{
//	==============
//	 Generation 1
//	==============
	"0001": {ico: "0001", flags: []}, // "Bulbasaur"
	"0002": {ico: "0002", flags: []}, // "Ivysaur"
//	"0003": {ico: "0003", flags: []}, // "Venusaur"
	"0003-m": {ico: "0003-m", flags: []}, // "Venusaur♂"
	"0003-f": {ico: "0003-f", flags: []}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: []}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: []}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: []}, // "Charmander"
	"0005": {ico: "0005", flags: []}, // "Charmeleon"
	"0006": {ico: "0006", flags: []}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: []}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: []}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: []}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: []}, // "Squirtle"
	"0008": {ico: "0008", flags: []}, // "Wartortle"
	"0009": {ico: "0009", flags: []}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: []}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: []}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: []}, // "Caterpie"
	"0011": {ico: "0011", flags: []}, // "Metapod"
//	"0012": {ico: "0012", flags: []}, // "Butterfree"
	"0012-m": {ico: "0012-m", flags: []}, // "Butterfree♂"
	"0012-f": {ico: "0012-f", flags: []}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: []}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: []}, // "Weedle"
	"0014": {ico: "0014", flags: []}, // "Kakuna"
	"0015": {ico: "0015", flags: []}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: []}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: []}, // "Pidgey"
	"0017": {ico: "0017", flags: []}, // "Pidgeotto"
	"0018": {ico: "0018", flags: []}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: []}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: []}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: []}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: []}, // "Rattata♀"
	"0019-alola": {ico: "0019-alola", flags: []}, // "Alolan Rattata"
//	"0020": {ico: "0020", flags: []}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: []}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: []}, // "Raticate♀"
	"0020-alola": {ico: "0020-alola", flags: []}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: []}, // "Spearow"
	"0022": {ico: "0022", flags: []}, // "Fearow"
	"0023": {ico: "0023", flags: []}, // "Ekans"
	"0024": {ico: "0024", flags: []}, // "Arbok"
//	"0025": {ico: "0025", flags: []}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: []}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: []}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: []}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: []}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: []}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: []}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: []}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: []}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: []}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: []}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: []}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: []}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: []}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: []}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: []}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: []}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: []}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: []}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: []}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: []}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: []}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: []}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: []}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: []}, // "Sandshrew"
	"0027-alola": {ico: "0027-alola", flags: []}, // "Alolan Sandshrew"
	"0028": {ico: "0028", flags: []}, // "Sandslash"
	"0028-alola": {ico: "0028-alola", flags: []}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: []}, // "Nidoran"
	"0029-f": {ico: "0029-f", flags: []}, // "Nidoran♀"
	"0030": {ico: "0030", flags: []}, // "Nidorina"
	"0031": {ico: "0031", flags: []}, // "Nidoqueen"
//	"0032": {ico: "0032", flags: []}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: []}, // "Nidoran♂"
	"0033": {ico: "0033", flags: []}, // "Nidorino"
	"0034": {ico: "0034", flags: []}, // "Nidoking"
	"0035": {ico: "0035", flags: []}, // "Clefairy"
	"0036": {ico: "0036", flags: []}, // "Clefable"
	"0037": {ico: "0037", flags: []}, // "Vulpix"
	"0037-alola": {ico: "0037-alola", flags: []}, // "Alolan Vulpix"
	"0038": {ico: "0038", flags: []}, // "Ninetales"
	"0038-alola": {ico: "0038-alola", flags: []}, // "Alolan Ninetales"
	"0039": {ico: "0039", flags: []}, // "Jigglypuff"
	"0040": {ico: "0040", flags: []}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: []}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: []}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: []}, // "Zubat♀"
//	"0042": {ico: "0042", flags: []}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: []}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: []}, // "Golbat♀"
	"0043": {ico: "0043", flags: []}, // "Oddish"
//	"0044": {ico: "0044", flags: []}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: []}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: []}, // "Gloom♀"
//	"0045": {ico: "0045", flags: []}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: []}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: []}, // "Vileplume♀"
	"0046": {ico: "0046", flags: []}, // "Paras"
	"0047": {ico: "0047", flags: []}, // "Parasect"
	"0048": {ico: "0048", flags: []}, // "Venonat"
	"0049": {ico: "0049", flags: []}, // "Venomoth"
	"0050": {ico: "0050", flags: []}, // "Diglett"
	"0050-alola": {ico: "0050-alola", flags: []}, // "Alolan Diglett"
	"0051": {ico: "0051", flags: []}, // "Dugtrio"
	"0051-alola": {ico: "0051-alola", flags: []}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: []}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: []}, // "Gigantamax Meowth"
	"0052-alola": {ico: "0052-alola", flags: []}, // "Alolan Meowth"
	"0052-galar": {ico: "0052-galar", flags: []}, // "Galarian Meowth"
	"0053": {ico: "0053", flags: []}, // "Persian"
	"0053-alola": {ico: "0053-alola", flags: []}, // "Alolan Persian"
	"0054": {ico: "0054", flags: []}, // "Psyduck"
	"0055": {ico: "0055", flags: []}, // "Golduck"
	"0056": {ico: "0056", flags: []}, // "Mankey"
	"0057": {ico: "0057", flags: []}, // "Primeape"
	"0058": {ico: "0058", flags: []}, // "Growlithe"
	"0059": {ico: "0059", flags: []}, // "Arcanine"
	"0060": {ico: "0060", flags: []}, // "Poliwag"
	"0061": {ico: "0061", flags: []}, // "Poliwhirl"
	"0062": {ico: "0062", flags: []}, // "Poliwrath"
	"0063": {ico: "0063", flags: []}, // "Abra"
//	"0064": {ico: "0064", flags: []}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: []}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: []}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: []}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: []}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: []}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: []}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: []}, // "Machop"
	"0067": {ico: "0067", flags: []}, // "Machoke"
	"0068": {ico: "0068", flags: []}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: []}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: []}, // "Bellsprout"
	"0070": {ico: "0070", flags: []}, // "Weepinbell"
	"0071": {ico: "0071", flags: []}, // "Victreebel"
	"0072": {ico: "0072", flags: []}, // "Tentacool"
	"0073": {ico: "0073", flags: []}, // "Tentacruel"
	"0074": {ico: "0074", flags: []}, // "Geodude"
	"0074-alola": {ico: "0074-alola", flags: []}, // "Alolan Geodude"
	"0075": {ico: "0075", flags: []}, // "Graveler"
	"0075-alola": {ico: "0075-alola", flags: []}, // "Alolan Graveler"
	"0076": {ico: "0076", flags: []}, // "Golem"
	"0076-alola": {ico: "0076-alola", flags: []}, // "Alolan Golem"
	"0077": {ico: "0077", flags: []}, // "Ponyta"
	"0077-galar": {ico: "0077-galar", flags: []}, // "Galarian Ponyta"
	"0078": {ico: "0078", flags: []}, // "Rapidash"
	"0078-galar": {ico: "0078-galar", flags: []}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: []}, // "Slowpoke"
	"0079-galar": {ico: "0079-galar", flags: []}, // "Galarian Slowpoke"
	"0080": {ico: "0080", flags: []}, // "Slowbro"
	"0080-galar": {ico: "0080-galar", flags: []}, // "Galarian Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: []}, // "Mega Slowbro"
	"0081": {ico: "0081", flags: []}, // "Magnemite"
	"0082": {ico: "0082", flags: []}, // "Magneton"
	"0083": {ico: "0083", flags: []}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: []}, // "Galarian Farfetch'd"
//	"0084": {ico: "0084", flags: []}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: []}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: []}, // "Doduo♀"
//	"0085": {ico: "0085", flags: []}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: []}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: []}, // "Dodrio♀"
	"0086": {ico: "0086", flags: []}, // "Seel"
	"0087": {ico: "0087", flags: []}, // "Dewgong"
	"0088": {ico: "0088", flags: []}, // "Grimer"
	"0088-alola": {ico: "0088-alola", flags: []}, // "Alolan Grimer"
	"0089": {ico: "0089", flags: []}, // "Muk"
	"0089-alola": {ico: "0089-alola", flags: []}, // "Alolan Muk"
	"0090": {ico: "0090", flags: []}, // "Shellder"
	"0091": {ico: "0091", flags: []}, // "Cloyster"
	"0092": {ico: "0092", flags: []}, // "Gastly"
	"0093": {ico: "0093", flags: []}, // "Haunter"
	"0094": {ico: "0094", flags: []}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: []}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: []}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: []}, // "Onix"
	"0096": {ico: "0096", flags: []}, // "Drowzee"
//	"0097": {ico: "0097", flags: []}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: []}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: []}, // "Hypno♀"
	"0098": {ico: "0098", flags: []}, // "Krabby"
	"0099": {ico: "0099", flags: []}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: []}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: []}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: []}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: []}, // "Exeggcute"
	"0103": {ico: "0103", flags: []}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: []}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: []}, // "Cubone"
	"0105": {ico: "0105", flags: []}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: []}, // "Alolan Marowak"
	"0106": {ico: "0106", flags: []}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: []}, // "Hitmonchan" // male only
	"0108": {ico: "0108", flags: []}, // "Lickitung"
	"0109": {ico: "0109", flags: []}, // "Koffing"
	"0110": {ico: "0110", flags: []}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: []}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: []}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: []}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: []}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: []}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: []}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: []}, // "Rhydon♀"
	"0113": {ico: "0113", flags: []}, // "Chansey" // female only
	"0114": {ico: "0114", flags: []}, // "Tangela"
	"0115": {ico: "0115", flags: []}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: []}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: []}, // "Horsea"
	"0117": {ico: "0117", flags: []}, // "Seadra"
//	"0118": {ico: "0118", flags: []}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: []}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: []}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: []}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: []}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: []}, // "Seaking♀"
		"0120": {ico: "0120", flags: []}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: []}, // "Starmie" // uknown gender
	"0122": {ico: "0122", flags: []}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: []}, // "Galarian Mr. Mime"
//	"0123": {ico: "0123", flags: []}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: []}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: []}, // "Scyther♀"
	"0124": {ico: "0124", flags: []}, // "Jynx" // female only
	"0125": {ico: "0125", flags: []}, // "Electabuzz"
	"0126": {ico: "0126", flags: []}, // "Magmar"
	"0127": {ico: "0127", flags: []}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: []}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: []}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: []}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: []}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: []}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: []}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: []}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: []}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: []}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: []}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: []}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: []}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: []}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: []}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: []}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: []}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: []}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: []}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: []}, // "Vaporeon"
	"0135": {ico: "0135", flags: []}, // "Jolteon"
	"0136": {ico: "0136", flags: []}, // "Flareon"
	"0137": {ico: "0137", flags: []}, // "Porygon" // uknown gender
	"0138": {ico: "0138", flags: []}, // "Omanyte"
	"0139": {ico: "0139", flags: []}, // "Omastar"
	"0140": {ico: "0140", flags: []}, // "Kabuto"
	"0141": {ico: "0141", flags: []}, // "Kabutops"
	"0142": {ico: "0142", flags: []}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: []}, // "Mega Aerodactyl"
	"0143": {ico: "0143", flags: []}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: []}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: []}, // "Articuno" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: []}, // "Galarian Articuno" // uknown gender
	"0145": {ico: "0145", flags: []}, // "Zapdos" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: []}, // "Galarian Zapdos" // uknown gender
	"0146": {ico: "0146", flags: []}, // "Moltres" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: []}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: []}, // "Dratini"
	"0148": {ico: "0148", flags: []}, // "Dragonair"
	"0149": {ico: "0149", flags: []}, // "Dragonite"
	"0150": {ico: "0150", flags: []}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: []}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: []}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: []}, // "Mew" // uknown gender
//	==============
//	 Generation 2
//	==============
	"0152": {ico: "0152", flags: []}, // "Chikorita"
	"0153": {ico: "0153", flags: []}, // "Bayleef"
//	"0154": {ico: "0154", flags: []}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: []}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: []}, // "Meganium♀"
	"0155": {ico: "0155", flags: []}, // "Cyndaquil"
	"0156": {ico: "0156", flags: []}, // "Quilava"
	"0157": {ico: "0157", flags: []}, // "Typhlosion"
	"0158": {ico: "0158", flags: []}, // "Totodile"
	"0159": {ico: "0159", flags: []}, // "Croconaw"
	"0160": {ico: "0160", flags: []}, // "Feraligatr"
	"0161": {ico: "0161", flags: []}, // "Sentret"
	"0162": {ico: "0162", flags: []}, // "Furret"
	"0163": {ico: "0163", flags: []}, // "Hoothoot"
	"0164": {ico: "0164", flags: []}, // "Noctowl"
//	"0165": {ico: "0165", flags: []}, // "Ledyba"
	"0165-m": {ico: "0165-m", flags: []}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: []}, // "Ledyba♀"
//	"0166": {ico: "0166", flags: []}, // "Ledian"
	"0166-m": {ico: "0166-m", flags: []}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: []}, // "Ledian♀"
	"0167": {ico: "0167", flags: []}, // "Spinarak"
	"0168": {ico: "0168", flags: []}, // "Ariados"
	"0169": {ico: "0169", flags: []}, // "Crobat"
	"0170": {ico: "0170", flags: []}, // "Chinchou"
	"0171": {ico: "0171", flags: []}, // "Lanturn"
	"0172": {ico: "0172", flags: []}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: []}, // "Spiky-eared Pichu" // female only
	"0173": {ico: "0173", flags: []}, // "Cleffa"
	"0174": {ico: "0174", flags: []}, // "Igglybuff"
	"0175": {ico: "0175", flags: []}, // "Togepi"
	"0176": {ico: "0176", flags: []}, // "Togetic"
	"0177": {ico: "0177", flags: []}, // "Natu"
//	"0178": {ico: "0178", flags: []}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: []}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: []}, // "Xatu♀"
	"0179": {ico: "0179", flags: []}, // "Mareep"
	"0180": {ico: "0180", flags: []}, // "Flaaffy"
	"0181": {ico: "0181", flags: []}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: []}, // "Mega Ampharos"
	"0182": {ico: "0182", flags: []}, // "Bellossom"
	"0183": {ico: "0183", flags: []}, // "Marill"
	"0184": {ico: "0184", flags: []}, // "Azumarill"
//	"0185": {ico: "0185", flags: []}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: []}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: []}, // "Sudowoodo♀"
//	"0186": {ico: "0186", flags: []}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: []}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: []}, // "Politoed♀"
	"0187": {ico: "0187", flags: []}, // "Hoppip"
	"0188": {ico: "0188", flags: []}, // "Skiploom"
	"0189": {ico: "0189", flags: []}, // "Jumpluff"
//	"0190": {ico: "0190", flags: []}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: []}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: []}, // "Aipom♀"
	"0191": {ico: "0191", flags: []}, // "Sunkern"
	"0192": {ico: "0192", flags: []}, // "Sunflora"
	"0193": {ico: "0193", flags: []}, // "Yanma"
//	"0194": {ico: "0194", flags: []}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: []}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: []}, // "Wooper♀"
//	"0195": {ico: "0195", flags: []}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: []}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: []}, // "Quagsire♀"
	"0196": {ico: "0196", flags: []}, // "Espeon"
	"0197": {ico: "0197", flags: []}, // "Umbreon"
//	"0198": {ico: "0198", flags: []}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: []}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: []}, // "Murkrow♀"
	"0199": {ico: "0199", flags: []}, // "Slowking"
	"0199-galar": {ico: "0199-galar", flags: []}, // "Galarian Slowking"
	"0200": {ico: "0200", flags: []}, // "Misdreavus"
//	"0201": {ico: "0201", flags: []}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: []}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: []}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: []}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: []}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: []}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: []}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: []}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: []}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: []}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: []}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: []}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: []}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: []}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: []}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: []}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: []}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: []}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: []}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: []}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: []}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: []}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: []}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: []}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: []}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: []}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: []}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: []}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: []}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: []}, // "Unown ?????" // uknown gender
//	"0202": {ico: "0202", flags: []}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: []}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: []}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: []}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: []}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: []}, // "Girafarig♀"
	"0204": {ico: "0204", flags: []}, // "Pineco"
	"0205": {ico: "0205", flags: []}, // "Forretress"
	"0206": {ico: "0206", flags: []}, // "Dunsparce"
//	"0207": {ico: "0207", flags: []}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: []}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: []}, // "Gligar♀"
//	"0208": {ico: "0208", flags: []}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: []}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: []}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: []}, // "Mega Steelix"
	"0209": {ico: "0209", flags: []}, // "Snubbull"
	"0210": {ico: "0210", flags: []}, // "Granbull"
	"0211": {ico: "0211", flags: []}, // "Qwilfish"
//	"0212": {ico: "0212", flags: []}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: []}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: []}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: []}, // "Mega Scizor"
	"0213": {ico: "0213", flags: []}, // "Shuckle"
//	"0214": {ico: "0214", flags: []}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: []}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: []}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: []}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: []}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: []}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: []}, // "Sneasel♀"
	"0216": {ico: "0216", flags: []}, // "Teddiursa"
//	"0217": {ico: "0217", flags: []}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: []}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: []}, // "Ursaring♀"
	"0218": {ico: "0218", flags: []}, // "Slugma"
	"0219": {ico: "0219", flags: []}, // "Magcargo"
	"0220": {ico: "0220", flags: []}, // "Swinub"
//	"0221": {ico: "0221", flags: []}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: []}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: []}, // "Piloswine♀"
	"0222": {ico: "0222", flags: []}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: []}, // "Galarian Corsola"
	"0223": {ico: "0223", flags: []}, // "Remoraid"
//	"0224": {ico: "0224", flags: []}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: []}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: []}, // "Octillery♀"
	"0225": {ico: "0225", flags: []}, // "Delibird"
	"0226": {ico: "0226", flags: []}, // "Mantine"
	"0227": {ico: "0227", flags: []}, // "Skarmory"
	"0228": {ico: "0228", flags: []}, // "Houndour"
//	"0229": {ico: "0229", flags: []}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: []}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: []}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: []}, // "Mega Houndoom"
	"0230": {ico: "0230", flags: []}, // "Kingdra"
	"0231": {ico: "0231", flags: []}, // "Phanpy"
//	"0232": {ico: "0232", flags: []}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: []}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: []}, // "Donphan♀"
	"0233": {ico: "0233", flags: []}, // "Porygon2" // uknown gender
	"0234": {ico: "0234", flags: []}, // "Stantler"
	"0235": {ico: "0235", flags: []}, // "Smeargle"
	"0236": {ico: "0236", flags: []}, // "Tyrogue" // male only
	"0237": {ico: "0237", flags: []}, // "Hitmontop" // male only
	"0238": {ico: "0238", flags: []}, // "Smoochum" // female only
	"0239": {ico: "0239", flags: []}, // "Elekid"
	"0240": {ico: "0240", flags: []}, // "Magby"
	"0241": {ico: "0241", flags: []}, // "Miltank" // female only
	"0242": {ico: "0242", flags: []}, // "Blissey" // female only
	"0243": {ico: "0243", flags: []}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: []}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: []}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: []}, // "Larvitar"
	"0247": {ico: "0247", flags: []}, // "Pupitar"
	"0248": {ico: "0248", flags: []}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: []}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: []}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: []}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: []}, // "Celebi" // uknown gender
//	==============
//	 Generation 3
//	==============
	"0252": {ico: "0252", flags: []}, // "Treecko"
	"0253": {ico: "0253", flags: []}, // "Grovyle"
	"0254": {ico: "0254", flags: []}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: []}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: []}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: []}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: []}, // "Torchic♀"
//	"0256": {ico: "0256", flags: []}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: []}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: []}, // "Combusken♀"
//	"0257": {ico: "0257", flags: []}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: []}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: []}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: []}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: []}, // "Mudkip"
	"0259": {ico: "0259", flags: []}, // "Marshtomp"
	"0260": {ico: "0260", flags: []}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: []}, // "Mega Swampert"
	"0261": {ico: "0261", flags: []}, // "Poochyena"
	"0262": {ico: "0262", flags: []}, // "Mightyena"
	"0263": {ico: "0263", flags: []}, // "Zigzagoon"
	"0263-galar": {ico: "0263-galar", flags: []}, // "Galarian Zigzagoon"
	"0264": {ico: "0264", flags: []}, // "Linoone"
	"0264-galar": {ico: "0264-galar", flags: []}, // "Galarian Linoone"
	"0265": {ico: "0265", flags: []}, // "Wurmple"
	"0266": {ico: "0266", flags: []}, // "Silcoon"
//	"0267": {ico: "0267", flags: []}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: []}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: []}, // "Beautifly♀"
	"0268": {ico: "0268", flags: []}, // "Cascoon"
//	"0269": {ico: "0269", flags: []}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: []}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: []}, // "Dustox♀"
	"0270": {ico: "0270", flags: []}, // "Lotad"
	"0271": {ico: "0271", flags: []}, // "Lombre"
//	"0272": {ico: "0272", flags: []}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: []}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: []}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: []}, // "Seedot"
//	"0274": {ico: "0274", flags: []}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: []}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: []}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: []}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: []}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: []}, // "Shiftry♀"
	"0276": {ico: "0276", flags: []}, // "Taillow"
	"0277": {ico: "0277", flags: []}, // "Swellow"
	"0278": {ico: "0278", flags: []}, // "Wingull"
	"0279": {ico: "0279", flags: []}, // "Pelipper"
	"0280": {ico: "0280", flags: []}, // "Ralts"
	"0281": {ico: "0281", flags: []}, // "Kirlia"
	"0282": {ico: "0282", flags: []}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: []}, // "Mega Gardevoir"
	"0283": {ico: "0283", flags: []}, // "Surskit"
	"0284": {ico: "0284", flags: []}, // "Masquerain"
	"0285": {ico: "0285", flags: []}, // "Shroomish"
	"0286": {ico: "0286", flags: []}, // "Breloom"
	"0287": {ico: "0287", flags: []}, // "Slakoth"
	"0288": {ico: "0288", flags: []}, // "Vigoroth"
	"0289": {ico: "0289", flags: []}, // "Slaking"
	"0290": {ico: "0290", flags: []}, // "Nincada"
	"0291": {ico: "0291", flags: []}, // "Ninjask"
	"0292": {ico: "0292", flags: []}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: []}, // "Whismur"
	"0294": {ico: "0294", flags: []}, // "Loudred"
	"0295": {ico: "0295", flags: []}, // "Exploud"
	"0296": {ico: "0296", flags: []}, // "Makuhita"
	"0297": {ico: "0297", flags: []}, // "Hariyama"
	"0298": {ico: "0298", flags: []}, // "Azurill"
	"0299": {ico: "0299", flags: []}, // "Nosepass"
	"0300": {ico: "0300", flags: []}, // "Skitty"
	"0301": {ico: "0301", flags: []}, // "Delcatty"
	"0302": {ico: "0302", flags: []}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: []}, // "Mega Sableye"
	"0303": {ico: "0303", flags: []}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: []}, // "Mega Mawile"
	"0304": {ico: "0304", flags: []}, // "Aron"
	"0305": {ico: "0305", flags: []}, // "Lairon"
	"0306": {ico: "0306", flags: []}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: []}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: []}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: []}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: []}, // "Meditite♀"
//	"0308": {ico: "0308", flags: []}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: []}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: []}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: []}, // "Mega Medicham"
	"0309": {ico: "0309", flags: []}, // "Electrike"
	"0310": {ico: "0310", flags: []}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: []}, // "Mega Manectric"
	"0311": {ico: "0311", flags: []}, // "Plusle"
	"0312": {ico: "0312", flags: []}, // "Minun"
	"0313": {ico: "0313", flags: []}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: []}, // "Illumise" // female only
//	"0315": {ico: "0315", flags: []}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: []}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: []}, // "Roselia♀"
//	"0316": {ico: "0316", flags: []}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: []}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: []}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: []}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: []}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: []}, // "Swalot♀"
	"0318": {ico: "0318", flags: []}, // "Carvanha"
	"0319": {ico: "0319", flags: []}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: []}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: []}, // "Wailmer"
	"0321": {ico: "0321", flags: []}, // "Wailord"
//	"0322": {ico: "0322", flags: []}, // "Numel"
	"0322-m": {ico: "0322-m", flags: []}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: []}, // "Numel♀"
//	"0323": {ico: "0323", flags: []}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: []}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: []}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: []}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: []}, // "Torkoal"
	"0325": {ico: "0325", flags: []}, // "Spoink"
	"0326": {ico: "0326", flags: []}, // "Grumpig"
	"0327": {ico: "0327", flags: []}, // "Spinda"
	"0328": {ico: "0328", flags: []}, // "Trapinch"
	"0329": {ico: "0329", flags: []}, // "Vibrava"
	"0330": {ico: "0330", flags: []}, // "Flygon"
	"0331": {ico: "0331", flags: []}, // "Cacnea"
//	"0332": {ico: "0332", flags: []}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: []}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: []}, // "Cacturne♀"
	"0333": {ico: "0333", flags: []}, // "Swablu"
	"0334": {ico: "0334", flags: []}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: []}, // "Mega Altaria"
	"0335": {ico: "0335", flags: []}, // "Zangoose"
	"0336": {ico: "0336", flags: []}, // "Seviper"
	"0337": {ico: "0337", flags: []}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: []}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: []}, // "Barboach"
	"0340": {ico: "0340", flags: []}, // "Whiscash"
	"0341": {ico: "0341", flags: []}, // "Corphish"
	"0342": {ico: "0342", flags: []}, // "Crawdaunt"
	"0343": {ico: "0343", flags: []}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: []}, // "Claydol" // uknown gender
	"0345": {ico: "0345", flags: []}, // "Lileep"
	"0346": {ico: "0346", flags: []}, // "Cradily"
	"0347": {ico: "0347", flags: []}, // "Anorith"
	"0348": {ico: "0348", flags: []}, // "Armaldo"
	"0349": {ico: "0349", flags: []}, // "Feebas"
//	"0350": {ico: "0350", flags: []}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: []}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: []}, // "Milotic♀"
	"0351": {ico: "0351", flags: []}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: []}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: []}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: []}, // "Snowy Castform"
	"0352": {ico: "0352", flags: []}, // "Kecleon"
	"0353": {ico: "0353", flags: []}, // "Shuppet"
	"0354": {ico: "0354", flags: []}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: []}, // "Mega Banette"
	"0355": {ico: "0355", flags: []}, // "Duskull"
	"0356": {ico: "0356", flags: []}, // "Dusclops"
	"0357": {ico: "0357", flags: []}, // "Tropius"
	"0358": {ico: "0358", flags: []}, // "Chimecho"
	"0359": {ico: "0359", flags: []}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: []}, // "Mega Absol"
	"0360": {ico: "0360", flags: []}, // "Wynaut"
	"0361": {ico: "0361", flags: []}, // "Snorunt"
	"0362": {ico: "0362", flags: []}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: []}, // "Mega Glalie"
	"0363": {ico: "0363", flags: []}, // "Spheal"
	"0364": {ico: "0364", flags: []}, // "Sealeo"
	"0365": {ico: "0365", flags: []}, // "Walrein"
	"0366": {ico: "0366", flags: []}, // "Clamperl"
	"0367": {ico: "0367", flags: []}, // "Huntail"
	"0368": {ico: "0368", flags: []}, // "Gorebyss"
//	"0369": {ico: "0369", flags: []}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: []}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: []}, // "Relicanth♀"
	"0370": {ico: "0370", flags: []}, // "Luvdisc"
	"0371": {ico: "0371", flags: []}, // "Bagon"
	"0372": {ico: "0372", flags: []}, // "Shelgon"
	"0373": {ico: "0373", flags: []}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: []}, // "Mega Salamence"
	"0374": {ico: "0374", flags: []}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: []}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: []}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: []}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: []}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: []}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: []}, // "Registeel" // uknown gender
	"0380": {ico: "0380", flags: []}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: []}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: []}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: []}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: []}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: []}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: []}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: []}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: []}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: []}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: []}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: []}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: []}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: []}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: []}, // "Speed Deoxys" // uknown gender
//	==============
//	 Generation 4
//	==============
	"0387": {ico: "0387", flags: []}, // "Turtwig"
	"0388": {ico: "0388", flags: []}, // "Grotle"
	"0389": {ico: "0389", flags: []}, // "Torterra"
	"0390": {ico: "0390", flags: []}, // "Chimchar"
	"0391": {ico: "0391", flags: []}, // "Monferno"
	"0392": {ico: "0392", flags: []}, // "Infernape"
	"0393": {ico: "0393", flags: []}, // "Piplup"
	"0394": {ico: "0394", flags: []}, // "Prinplup"
	"0395": {ico: "0395", flags: []}, // "Empoleon"
//	"0396": {ico: "0396", flags: []}, // "Starly"
	"0396-m": {ico: "0396-m", flags: []}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: []}, // "Starly♀"
//	"0397": {ico: "0397", flags: []}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: []}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: []}, // "Staravia♀"
//	"0398": {ico: "0398", flags: []}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: []}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: []}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: []}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: []}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: []}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: []}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: []}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: []}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: []}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: []}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: []}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: []}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: []}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: []}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: []}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: []}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: []}, // "Shinx♀"
//	"0404": {ico: "0404", flags: []}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: []}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: []}, // "Luxio♀"
//	"0405": {ico: "0405", flags: []}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: []}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: []}, // "Luxray♀"
//	"0406": {ico: "0406", flags: []}, // "Budew"
//	"0407": {ico: "0407", flags: []}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: []}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: []}, // "Roserade♀"
	"0408": {ico: "0408", flags: []}, // "Cranidos"
	"0409": {ico: "0409", flags: []}, // "Rampardos"
	"0410": {ico: "0410", flags: []}, // "Shieldon"
	"0411": {ico: "0411", flags: []}, // "Bastiodon"
//	"0412": {ico: "0412", flags: []}, // "Burmy"
	"0412-plant": {ico: "0412-plant", flags: []}, // "Burmy Plant Cloak"
	"0412-sandy": {ico: "0412-sandy", flags: []}, // "Burmy Sandy Cloak"
	"0412-trash": {ico: "0412-trash", flags: []}, // "Burmy Trash Cloak"
//	"0413": {ico: "0413", flags: []}, // "Wormadam" // female only
	"0413-plant": {ico: "0413-plant", flags: []}, // "Wormadam Plant Cloak" // female only
	"0413-sandy": {ico: "0413-sandy", flags: []}, // "Wormadam Sandy Cloak" // female only
	"0413-trash": {ico: "0413-trash", flags: []}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: []}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: []}, // "Combee"
	"0415-m": {ico: "0415-m", flags: []}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: []}, // "Combee♀"
	"0416": {ico: "0416", flags: []}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: []}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: []}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: []}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: []}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: []}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: []}, // "Buizel♀"
//	"0419": {ico: "0419", flags: []}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: []}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: []}, // "Floatzel♀"
	"0420": {ico: "0420", flags: []}, // "Cherubi"
//	"0421": {ico: "0421", flags: []}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: []}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: []}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: []}, // "Shellos"
	"0422-west": {ico: "0422-west", flags: []}, // "West Sea Shellos"
	"0422-east": {ico: "0422-east", flags: []}, // "East Sea Shellos"
//	"0423": {ico: "0423", flags: []}, // "Gastrodon"
	"0423-west": {ico: "0423-west", flags: []}, // "West Sea Gastrodon"
	"0423-east": {ico: "0423-east", flags: []}, // "East Sea Gastrodon"
//	"0424": {ico: "0424", flags: []}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: []}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: []}, // "Ambipom♀"
	"0425": {ico: "0425", flags: []}, // "Drifloon"
	"0426": {ico: "0426", flags: []}, // "Drifblim"
	"0427": {ico: "0427", flags: []}, // "Buneary"
	"0428": {ico: "0428", flags: []}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: []}, // "Mega Lopunny"
	"0429": {ico: "0429", flags: []}, // "Mismagius"
	"0430": {ico: "0430", flags: []}, // "Honchkrow"
	"0431": {ico: "0431", flags: []}, // "Glameow"
	"0432": {ico: "0432", flags: []}, // "Purugly"
	"0433": {ico: "0433", flags: []}, // "Chingling"
	"0434": {ico: "0434", flags: []}, // "Stunky"
	"0435": {ico: "0435", flags: []}, // "Skuntank"
	"0436": {ico: "0436", flags: []}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: []}, // "Bronzong" // uknown gender
	"0438": {ico: "0438", flags: []}, // "Bonsly"
	"0439": {ico: "0439", flags: []}, // "Mime Jr."
	"0440": {ico: "0440", flags: []}, // "Happiny" // female only
	"0441": {ico: "0441", flags: []}, // "Chatot"
	"0442": {ico: "0442", flags: []}, // "Spiritomb"
//	"0443": {ico: "0443", flags: []}, // "Gible"
	"0443-m": {ico: "0443-m", flags: []}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: []}, // "Gible♀"
//	"0444": {ico: "0444", flags: []}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: []}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: []}, // "Gabite♀"
//	"0445": {ico: "0445", flags: []}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: []}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: []}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: []}, // "Mega Garchomp"
	"0446": {ico: "0446", flags: []}, // "Munchlax"
	"0447": {ico: "0447", flags: []}, // "Riolu"
	"0448": {ico: "0448", flags: []}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: []}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: []}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: []}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: []}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: []}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: []}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: []}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: []}, // "Skorupi"
	"0452": {ico: "0452", flags: []}, // "Drapion"
//	"0453": {ico: "0453", flags: []}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: []}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: []}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: []}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: []}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: []}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: []}, // "Carnivine"
//	"0456": {ico: "0456", flags: []}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: []}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: []}, // "Finneon♀"
//	"0457": {ico: "0457", flags: []}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: []}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: []}, // "Lumineon♀"
	"0458": {ico: "0458", flags: []}, // "Mantyke"
//	"0459": {ico: "0459", flags: []}, // "Snover"
	"0459-m": {ico: "0459-m", flags: []}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: []}, // "Snover♀"
//	"0460": {ico: "0460", flags: []}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: []}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: []}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: []}, // "Mega Abomasnow"
//	"0461": {ico: "0461", flags: []}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: []}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: []}, // "Weavile♀"
	"0462": {ico: "0462", flags: []}, // "Magnezone" // uknown gender
	"0463": {ico: "0463", flags: []}, // "Lickilicky"
//	"0464": {ico: "0464", flags: []}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: []}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: []}, // "Rhyperior♀"
//	"0465": {ico: "0465", flags: []}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: []}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: []}, // "Tangrowth♀"
	"0466": {ico: "0466", flags: []}, // "Electivire"
	"0467": {ico: "0467", flags: []}, // "Magmortar"
	"0468": {ico: "0468", flags: []}, // "Togekiss"
	"0469": {ico: "0469", flags: []}, // "Yanmega"
	"0470": {ico: "0470", flags: []}, // "Leafeon"
	"0471": {ico: "0471", flags: []}, // "Glaceon"
	"0472": {ico: "0472", flags: []}, // "Gliscor"
//	"0473": {ico: "0473", flags: []}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: []}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: []}, // "Mamoswine♀"
	"0474": {ico: "0474", flags: []}, // "Porygon-Z" // uknown gender
	"0475": {ico: "0475", flags: []}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: []}, // "Mega Gallade" // male only
	"0476": {ico: "0476", flags: []}, // "Probopass"
	"0477": {ico: "0477", flags: []}, // "Dusknoir"
	"0478": {ico: "0478", flags: []}, // "Froslass" // female only
	"0479": {ico: "0479", flags: []}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: []}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: []}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: []}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: []}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: []}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: []}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: []}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: []}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: []}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: []}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: []}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: []}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: []}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: []}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: []}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: []}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: []}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: []}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: []}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: []}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: []}, // "Heatran"
	"0486": {ico: "0486", flags: []}, // "Regigigas" // uknown gender
//	"0487": {ico: "0487", flags: []}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: []}, // "Giratina Altered Forme" // uknown gender
	"0487-origin": {ico: "0487-origin", flags: []}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: []}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: []}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: []}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: []}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: []}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: []}, // "Shaymin Land Forme" // uknown gender
	"0492-sky": {ico: "0492-sky", flags: []}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: []}, // "Arceus" // uknown gender
	"0493-fighting": {ico: "0493-fighting", flags: []}, // "Fighting Arceus" // uknown gender
	"0493-flying": {ico: "0493-flying", flags: []}, // "Flying Arceus" // uknown gender
	"0493-poison": {ico: "0493-poison", flags: []}, // "Poison Arceus" // uknown gender
	"0493-ground": {ico: "0493-ground", flags: []}, // "Ground Arceus" // uknown gender
	"0493-rock": {ico: "0493-rock", flags: []}, // "Rock Arceus" // uknown gender
	"0493-bug": {ico: "0493-bug", flags: []}, // "Bug Arceus" // uknown gender
	"0493-ghost": {ico: "0493-ghost", flags: []}, // "Ghost Arceus" // uknown gender
	"0493-steel": {ico: "0493-steel", flags: []}, // "Steel Arceus" // uknown gender
	"0493-fire": {ico: "0493-fire", flags: []}, // "Fire Arceus" // uknown gender
	"0493-water": {ico: "0493-water", flags: []}, // "Water Arceus" // uknown gender
	"0493-grass": {ico: "0493-grass", flags: []}, // "Grass Arceus" // uknown gender
	"0493-electric": {ico: "0493-electric", flags: []}, // "Electric Arceus" // uknown gender
	"0493-psychic": {ico: "0493-psychic", flags: []}, // "Psychic Arceus" // uknown gender
	"0493-ice": {ico: "0493-ice", flags: []}, // "Ice Arceus" // uknown gender
	"0493-dragon": {ico: "0493-dragon", flags: []}, // "Dragon Arceus" // uknown gender
	"0493-dark": {ico: "0493-dark", flags: []}, // "Dark Arceus" // uknown gender
	"0493-fairy": {ico: "0493-fairy", flags: []}, // "Fairy Arceus" // uknown gender
//	==============
//	 Generation 5
//	==============
	"0494": {ico: "0494", flags: []}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: []}, // "Snivy"
	"0496": {ico: "0496", flags: []}, // "Servine"
	"0497": {ico: "0497", flags: []}, // "Serperior"
	"0498": {ico: "0498", flags: []}, // "Tepig"
	"0499": {ico: "0499", flags: []}, // "Pignite"
	"0500": {ico: "0500", flags: []}, // "Emboar"
	"0501": {ico: "0501", flags: []}, // "Oshawott"
	"0502": {ico: "0502", flags: []}, // "Dewott"
	"0503": {ico: "0503", flags: []}, // "Samurott"
	"0504": {ico: "0504", flags: []}, // "Patrat"
	"0505": {ico: "0505", flags: []}, // "Watchog"
	"0506": {ico: "0506", flags: []}, // "Lillipup"
	"0507": {ico: "0507", flags: []}, // "Herdier"
	"0508": {ico: "0508", flags: []}, // "Stoutland"
	"0509": {ico: "0509", flags: []}, // "Purrloin"
	"0510": {ico: "0510", flags: []}, // "Liepard"
	"0511": {ico: "0511", flags: []}, // "Pansage"
	"0512": {ico: "0512", flags: []}, // "Simisage"
	"0513": {ico: "0513", flags: []}, // "Pansear"
	"0514": {ico: "0514", flags: []}, // "Simisear"
	"0515": {ico: "0515", flags: []}, // "Panpour"
	"0516": {ico: "0516", flags: []}, // "Simipour"
	"0517": {ico: "0517", flags: []}, // "Munna"
	"0518": {ico: "0518", flags: []}, // "Musharna"
	"0519": {ico: "0519", flags: []}, // "Pidove"
	"0520": {ico: "0520", flags: []}, // "Tranquill"
//	"0521": {ico: "0521", flags: []}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: []}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: []}, // "Unfezan♀"
	"0522": {ico: "0522", flags: []}, // "Blitzle"
	"0523": {ico: "0523", flags: []}, // "Zebstrika"
	"0524": {ico: "0524", flags: []}, // "Roggenrola"
	"0525": {ico: "0525", flags: []}, // "Boldore"
	"0526": {ico: "0526", flags: []}, // "Gigalith"
	"0527": {ico: "0527", flags: []}, // "Woobat"
	"0528": {ico: "0528", flags: []}, // "Swoobat"
	"0529": {ico: "0529", flags: []}, // "Drilbur"
	"0530": {ico: "0530", flags: []}, // "Excadrill"
	"0531": {ico: "0531", flags: []}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: []}, // "Mega Audino"
	"0532": {ico: "0532", flags: []}, // "Timburr"
	"0533": {ico: "0533", flags: []}, // "Gurdurr"
	"0534": {ico: "0534", flags: []}, // "Conkeldurr"
	"0535": {ico: "0535", flags: []}, // "Tympole"
	"0536": {ico: "0536", flags: []}, // "Palpitoad"
	"0537": {ico: "0537", flags: []}, // "Seismitoad"
	"0538": {ico: "0538", flags: []}, // "Throh" // male only
	"0539": {ico: "0539", flags: []}, // "Sawk" // male only
	"0540": {ico: "0540", flags: []}, // "Sewaddle"
	"0541": {ico: "0541", flags: []}, // "Swadloon"
	"0542": {ico: "0542", flags: []}, // "Leavanny"
	"0543": {ico: "0543", flags: []}, // "Venipede"
	"0544": {ico: "0544", flags: []}, // "Whirlipede"
	"0545": {ico: "0545", flags: []}, // "Scolipede"
	"0546": {ico: "0546", flags: []}, // "Cottonee"
	"0547": {ico: "0547", flags: []}, // "Whimsicott"
	"0548": {ico: "0548", flags: []}, // "Petilil" // female only
	"0549": {ico: "0549", flags: []}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: []}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: []}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: []}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: []}, // "Sandile"
	"0552": {ico: "0552", flags: []}, // "Krokorok"
	"0553": {ico: "0553", flags: []}, // "Krookodile"
	"0554": {ico: "0554", flags: []}, // "Darumaka"
	"0554-galar": {ico: "0554-galar", flags: []}, // "Galarian Darumaka"
//	"0555": {ico: "0555", flags: []}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: []}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: []}, // "Darmanitan Zen Mode"
//	"0555-galar": {ico: "0555-galar", flags: []}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: []}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: []}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: []}, // "Maractus"
	"0557": {ico: "0557", flags: []}, // "Dwebble"
	"0558": {ico: "0558", flags: []}, // "Crustle"
	"0559": {ico: "0559", flags: []}, // "Scraggy"
	"0560": {ico: "0560", flags: []}, // "Scrafty"
	"0561": {ico: "0561", flags: []}, // "Sigilyph"
	"0562": {ico: "0562", flags: []}, // "Yamask"
	"0562-galar": {ico: "0562-galar", flags: []}, // "Galarian Yamask"
	"0563": {ico: "0563", flags: []}, // "Cofagrigus"
	"0564": {ico: "0564", flags: []}, // "Tirtouga"
	"0565": {ico: "0565", flags: []}, // "Carracosta"
	"0566": {ico: "0566", flags: []}, // "Archen"
	"0567": {ico: "0567", flags: []}, // "Archeops"
	"0568": {ico: "0568", flags: []}, // "Trubbish"
	"0569": {ico: "0569", flags: []}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: []}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: []}, // "Zorua"
	"0571": {ico: "0571", flags: []}, // "Zoroark"
	"0572": {ico: "0572", flags: []}, // "Minccino"
	"0573": {ico: "0573", flags: []}, // "Cinccino"
	"0574": {ico: "0574", flags: []}, // "Gothita"
	"0575": {ico: "0575", flags: []}, // "Gothorita"
	"0576": {ico: "0576", flags: []}, // "Gothitelle"
	"0577": {ico: "0577", flags: []}, // "Solosis"
	"0578": {ico: "0578", flags: []}, // "Duosion"
	"0579": {ico: "0579", flags: []}, // "Reuniclus"
	"0580": {ico: "0580", flags: []}, // "Ducklett"
	"0581": {ico: "0581", flags: []}, // "Swanna"
	"0582": {ico: "0582", flags: []}, // "Vanillite"
	"0583": {ico: "0583", flags: []}, // "Vanillish"
	"0584": {ico: "0584", flags: []}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: []}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: []}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: []}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: []}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: []}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: []}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: []}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: []}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: []}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: []}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: []}, // "Emolga"
	"0588": {ico: "0588", flags: []}, // "Karrablast"
	"0589": {ico: "0589", flags: []}, // "Escavalier"
	"0590": {ico: "0590", flags: []}, // "Foongus"
	"0591": {ico: "0591", flags: []}, // "Amoonguss"
//	"0592": {ico: "0592", flags: []}, // "Frillish"
	"0592-m": {ico: "0592-m", flags: []}, // "Frillish♂"
	"0592-f": {ico: "0592-f", flags: []}, // "Frillish♀"
//	"0593": {ico: "0593", flags: []}, // "Jellicent"
	"0593-m": {ico: "0593-m", flags: []}, // "Jellicent♂"
	"0593-f": {ico: "0593-f", flags: []}, // "Jellicent♀"
	"0594": {ico: "0594", flags: []}, // "Alomomola"
	"0595": {ico: "0595", flags: []}, // "Joltik"
	"0596": {ico: "0596", flags: []}, // "Galvantula"
	"0597": {ico: "0597", flags: []}, // "Ferroseed"
	"0598": {ico: "0598", flags: []}, // "Ferrothorn"
	"0599": {ico: "0599", flags: []}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: []}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: []}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: []}, // "Tynamo"
	"0603": {ico: "0603", flags: []}, // "Eelektrik"
	"0604": {ico: "0604", flags: []}, // "Eelektross"
	"0605": {ico: "0605", flags: []}, // "Elgyem"
	"0606": {ico: "0606", flags: []}, // "Beheeyem"
	"0607": {ico: "0607", flags: []}, // "Litwick"
	"0608": {ico: "0608", flags: []}, // "Lampent"
	"0609": {ico: "0609", flags: []}, // "Chandelure"
	"0610": {ico: "0610", flags: []}, // "Axew"
	"0611": {ico: "0611", flags: []}, // "Fraxure"
	"0612": {ico: "0612", flags: []}, // "Haxorus"
	"0613": {ico: "0613", flags: []}, // "Cubchoo"
	"0614": {ico: "0614", flags: []}, // "Beartic"
	"0615": {ico: "0615", flags: []}, // "Cryogonal" // uknown gender
	"0616": {ico: "0616", flags: []}, // "Shelmet"
	"0617": {ico: "0617", flags: []}, // "Accelgor"
	"0618": {ico: "0618", flags: []}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: []}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: []}, // "Mienfoo"
	"0620": {ico: "0620", flags: []}, // "Mienshao"
	"0621": {ico: "0621", flags: []}, // "Druddigon"
	"0622": {ico: "0622", flags: []}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: []}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: []}, // "Pawniard"
	"0625": {ico: "0625", flags: []}, // "Bisharp"
	"0626": {ico: "0626", flags: []}, // "Bouffalant"
	"0627": {ico: "0627", flags: []}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: []}, // "Braviary" // male only
	"0629": {ico: "0629", flags: []}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: []}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: []}, // "Heatmor"
	"0632": {ico: "0632", flags: []}, // "Durant"
	"0633": {ico: "0633", flags: []}, // "Deino"
	"0634": {ico: "0634", flags: []}, // "Zweilous"
	"0635": {ico: "0635", flags: []}, // "Hydreigon"
	"0636": {ico: "0636", flags: []}, // "Larvesta"
	"0637": {ico: "0637", flags: []}, // "Volcarona"
	"0638": {ico: "0638", flags: []}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: []}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: []}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: []}, // "Tornadus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: []}, // "Incarnate Forme Tornadus" // male only
	"0641-therian": {ico: "0641-therian", flags: []}, // "Therian Forme Tornadus" // male only
//	"0642": {ico: "0642", flags: []}, // "Thundurus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: []}, // "Incarnate Forme Thundurus" // male only
	"0642-therian": {ico: "0642-therian", flags: []}, // "Therian Forme Thundurus" // male only
	"0643": {ico: "0643", flags: []}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: []}, // "Zekrom" // uknown gender
//	"0645": {ico: "0645", flags: []}, // "Landorus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: []}, // "Incarnate Forme Landorus" // male only
	"0645-therian": {ico: "0645-therian", flags: []}, // "Therian Forme Landorus" // male only
	"0646": {ico: "0646", flags: []}, // "Kyurem" // uknown gender
	"0646-white": {ico: "0646-white", flags: []}, // "White Kyurem" // uknown gender
	"0646-black": {ico: "0646-black", flags: []}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: []}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: []}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: []}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: []}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: []}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: []}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: []}, // "Genesect" // uknown gender
	"0649-douse": {ico: "0649-douse", flags: []}, // "Douse Drive Genesect" // uknown gender
	"0649-shock": {ico: "0649-shock", flags: []}, // "Shock Drive Genesect" // uknown gender
	"0649-burn": {ico: "0649-burn", flags: []}, // "Burn Drive Genesect" // uknown gender
	"0649-chill": {ico: "0649-chill", flags: []}, // "Chill Drive Genesect" // uknown gender
//	==============
//	 Generation 6
//	==============
	"0650": {ico: "0650", flags: []}, // "Chespin"
	"0651": {ico: "0651", flags: []}, // "Quilladin"
	"0652": {ico: "0652", flags: []}, // "Chesnaught"
	"0653": {ico: "0653", flags: []}, // "Fennekin"
	"0654": {ico: "0654", flags: []}, // "Braixen"
	"0655": {ico: "0655", flags: []}, // "Delphox"
	"0656": {ico: "0656", flags: []}, // "Froakie"
	"0657": {ico: "0657", flags: []}, // "Frogadier"
	"0658": {ico: "0658", flags: []}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: []}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: []}, // "Bunnelby"
	"0660": {ico: "0660", flags: []}, // "Diggersby"
	"0661": {ico: "0661", flags: []}, // "Fletchling"
	"0662": {ico: "0662", flags: []}, // "Fletchinder"
	"0663": {ico: "0663", flags: []}, // "Talonflame"
	"0664": {ico: "0664", flags: []}, // "Scatterbug"
	"0665": {ico: "0665", flags: []}, // "Spewpa"
//	"0666": {ico: "0666", flags: []}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: []}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: []}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: []}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: []}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: []}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: []}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: []}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: []}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: []}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: []}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: []}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: []}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: []}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: []}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: []}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: []}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: []}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: []}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: []}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: []}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: []}, // "Litleo"
//	"0668": {ico: "0668", flags: []}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: []}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: []}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: []}, // "Flabébé" // female only
	"0669-red": {ico: "0669-red", flags: []}, // "Red Flower Flabébé" // female only
	"0669-yellow": {ico: "0669-yellow", flags: []}, // "Yellow Flower Flabébé" // female only
	"0669-orange": {ico: "0669-orange", flags: []}, // "Orange Flower Flabébé" // female only
	"0669-blue": {ico: "0669-blue", flags: []}, // "Blue Flower Flabébé" // female only
	"0669-white": {ico: "0669-white", flags: []}, // "White Flower Flabébé" // female only
//	"0670": {ico: "0670", flags: []}, // "Floette" // female only
	"0670-red": {ico: "0670-red", flags: []}, // "Red Flower Floette" // female only
	"0670-yellow": {ico: "0670-yellow", flags: []}, // "Yellow Flower Floette" // female only
	"0670-orange": {ico: "0670-orange", flags: []}, // "Orange Flower Floette" // female only
	"0670-blue": {ico: "0670-blue", flags: []}, // "Blue Flower Floette" // female only
	"0670-white": {ico: "0670-white", flags: []}, // "White Flower Floette" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: []}, // "Eternal Flower Floette" // female only
//	"0671": {ico: "0671", flags: []}, // "Florges" // female only
	"0671-red": {ico: "0671-red", flags: []}, // "Red Flower Florges" // female only
	"0671-yellow": {ico: "0671-yellow", flags: []}, // "Yellow Flower Florges" // female only
	"0671-orange": {ico: "0671-orange", flags: []}, // "Orange Flower Florges" // female only
	"0671-blue": {ico: "0671-blue", flags: []}, // "Blue Flower Florges" // female only
	"0671-white": {ico: "0671-white", flags: []}, // "White Flower Florges" // female only
	"0672": {ico: "0672", flags: []}, // "Skiddo"
	"0673": {ico: "0673", flags: []}, // "Gogoat"
	"0674": {ico: "0674", flags: []}, // "Pancham"
	"0675": {ico: "0675", flags: []}, // "Pangoro"
	"0676": {ico: "0676", flags: []}, // "Furfrou"
	"0676-heart": {ico: "0676-heart", flags: []}, // "Heart Trim Furfrou"
	"0676-star": {ico: "0676-star", flags: []}, // "Star Trim Furfrou"
	"0676-diamond": {ico: "0676-diamond", flags: []}, // "Diamond Trim Furfrou"
	"0676-debutante": {ico: "0676-debutante", flags: []}, // "Debutante Trim Furfrou"
	"0676-matron": {ico: "0676-matron", flags: []}, // "Matron Trim Furfrou"
	"0676-dandy": {ico: "0676-dandy", flags: []}, // "Dandy Trim Furfrou"
	"0676-le-reine": {ico: "0676-le-reine", flags: []}, // "Le Reine Trim Furfrou"
	"0676-kabuki": {ico: "0676-kabuki", flags: []}, // "Kabuki Trim Furfrou"
	"0676-pharaoh": {ico: "0676-pharaoh", flags: []}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: []}, // "Espurr"
//	"0678": {ico: "0678", flags: []}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: []}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: []}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: []}, // "Honedge"
	"0680": {ico: "0680", flags: []}, // "Doublade"
//	"0681": {ico: "0681", flags: []}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: []}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: []}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: []}, // "Spritzee"
	"0683": {ico: "0683", flags: []}, // "Aromatisse"
	"0684": {ico: "0684", flags: []}, // "Swirlix"
	"0685": {ico: "0685", flags: []}, // "Slurpuff"
	"0686": {ico: "0686", flags: []}, // "Inkay"
	"0687": {ico: "0687", flags: []}, // "Malamar"
	"0688": {ico: "0688", flags: []}, // "Binacle"
	"0689": {ico: "0689", flags: []}, // "Barbaracle"
	"0690": {ico: "0690", flags: []}, // "Skrelp"
	"0691": {ico: "0691", flags: []}, // "Dragalge"
	"0692": {ico: "0692", flags: []}, // "Clauncher"
	"0693": {ico: "0693", flags: []}, // "Clawitzer"
	"0694": {ico: "0694", flags: []}, // "Helioptile"
	"0695": {ico: "0695", flags: []}, // "Heliolisk"
	"0696": {ico: "0696", flags: []}, // "Tyrunt"
	"0697": {ico: "0697", flags: []}, // "Tyrantrum"
	"0698": {ico: "0698", flags: []}, // "Amaura"
	"0699": {ico: "0699", flags: []}, // "Aurorus"
	"0700": {ico: "0700", flags: []}, // "Sylveon"
	"0701": {ico: "0701", flags: []}, // "Hawlucha"
	"0702": {ico: "0702", flags: []}, // "Dedenne"
	"0703": {ico: "0703", flags: []}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: []}, // "Goomy"
	"0705": {ico: "0705", flags: []}, // "Sliggoo"
	"0706": {ico: "0706", flags: []}, // "Goodra"
	"0707": {ico: "0707", flags: []}, // "Klefki"
	"0708": {ico: "0708", flags: []}, // "Phantump"
	"0709": {ico: "0709", flags: []}, // "Trevenant"
//	"0710": {ico: "0710", flags: []}, // "Pumpkaboo"
	"0710-average": {ico: "0710-average", flags: []}, // "Average Size Pumpkaboo"
	"0710-small": {ico: "0710-small", flags: []}, // "Small Size Pumpkaboo"
	"0710-large": {ico: "0710-large", flags: []}, // "Large Size Pumpkaboo"
	"0710-super": {ico: "0710-super", flags: []}, // "Super Size Pumpkaboo"
//	"0711": {ico: "0711", flags: []}, // "Gourgeist"
	"0711-average": {ico: "0711-average", flags: []}, // "Average Size Gourgeist"
	"0711-small": {ico: "0711-small", flags: []}, // "Small Size Gourgeist"
	"0711-large": {ico: "0711-large", flags: []}, // "Large Size Gourgeist"
	"0711-super": {ico: "0711-super", flags: []}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: []}, // "Bergmite"
	"0713": {ico: "0713", flags: []}, // "Avalugg"
	"0714": {ico: "0714", flags: []}, // "Noibat"
	"0715": {ico: "0715", flags: []}, // "Noivern"
//	"0716": {ico: "0716", flags: []}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: []}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: []}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: []}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: []}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: []}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: []}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: []}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: []}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: []}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: []}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: []}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: []}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: []}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: []}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: []}, // "Volcanion" // uknown gender
//	==============
//	 Generation 7
//	==============
	"0722": {ico: "0722", flags: []}, // "Rowlet"
	"0723": {ico: "0723", flags: []}, // "Dartrix"
	"0724": {ico: "0724", flags: []}, // "Decidueye"
	"0725": {ico: "0725", flags: []}, // "Litten"
	"0726": {ico: "0726", flags: []}, // "Torracat"
	"0727": {ico: "0727", flags: []}, // "Incineroar"
	"0728": {ico: "0728", flags: []}, // "Popplio"
	"0729": {ico: "0729", flags: []}, // "Brionne"
	"0730": {ico: "0730", flags: []}, // "Primarina"
	"0731": {ico: "0731", flags: []}, // "Pikipek"
	"0732": {ico: "0732", flags: []}, // "Trumbeak"
	"0733": {ico: "0733", flags: []}, // "Toucannon"
	"0734": {ico: "0734", flags: []}, // "Yungoos"
	"0735": {ico: "0735", flags: []}, // "Gumshoos"
	"0736": {ico: "0736", flags: []}, // "Grubbin"
	"0737": {ico: "0737", flags: []}, // "Charjabug"
	"0738": {ico: "0738", flags: []}, // "Vikavolt"
	"0739": {ico: "0739", flags: []}, // "Crabrawler"
	"0740": {ico: "0740", flags: []}, // "Crabominable"
//	"0741": {ico: "0741", flags: []}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: []}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: []}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: []}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: []}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: []}, // "Cutiefly"
	"0743": {ico: "0743", flags: []}, // "Ribombee"
	"0744": {ico: "0744", flags: []}, // "Rockruff"
//	"0745": {ico: "0745", flags: []}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: []}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: []}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: []}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: []}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: []}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: []}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: []}, // "Mareanie"
	"0748": {ico: "0748", flags: []}, // "Toxapex"
	"0749": {ico: "0749", flags: []}, // "Mudbray"
	"0750": {ico: "0750", flags: []}, // "Mudsdale"
	"0751": {ico: "0751", flags: []}, // "Dewpider"
	"0752": {ico: "0752", flags: []}, // "Araquanid"
	"0753": {ico: "0753", flags: []}, // "Fomantis"
	"0754": {ico: "0754", flags: []}, // "Lurantis"
	"0755": {ico: "0755", flags: []}, // "Morelull"
	"0756": {ico: "0756", flags: []}, // "Shiinotic"
	"0757": {ico: "0757", flags: []}, // "Salandit"
	"0758": {ico: "0758", flags: []}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: []}, // "Stufful"
	"0760": {ico: "0760", flags: []}, // "Bewear"
	"0761": {ico: "0761", flags: []}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: []}, // "Steenee" // female only
	"0763": {ico: "0763", flags: []}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: []}, // "Comfey"
	"0765": {ico: "0765", flags: []}, // "Oranguru"
	"0766": {ico: "0766", flags: []}, // "Passimian"
	"0767": {ico: "0767", flags: []}, // "Wimpod"
	"0768": {ico: "0768", flags: []}, // "Golisopod"
	"0769": {ico: "0769", flags: []}, // "Sandygast"
	"0770": {ico: "0770", flags: []}, // "Palossand"
	"0771": {ico: "0771", flags: []}, // "Pyukumuku"
	"0772": {ico: "0772", flags: []}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: []}, // "Silvally" // uknown gender
	"0773-fighting": {ico: "0773-fighting", flags: []}, // "Silvally Type: Fighting" // uknown gender
	"0773-flying": {ico: "0773-flying", flags: []}, // "Silvally Type: Flying" // uknown gender
	"0773-poison": {ico: "0773-poison", flags: []}, // "Silvally Type: Poison" // uknown gender
	"0773-ground": {ico: "0773-ground", flags: []}, // "Silvally Type: Ground" // uknown gender
	"0773-rock": {ico: "0773-rock", flags: []}, // "Silvally Type: Rock" // uknown gender
	"0773-bug": {ico: "0773-bug", flags: []}, // "Silvally Type: Bug" // uknown gender
	"0773-ghost": {ico: "0773-ghost", flags: []}, // "Silvally Type: Ghost" // uknown gender
	"0773-steel": {ico: "0773-steel", flags: []}, // "Silvally Type: Steel" // uknown gender
	"0773-fire": {ico: "0773-fire", flags: []}, // "Silvally Type: Fire" // uknown gender
	"0773-water": {ico: "0773-water", flags: []}, // "Silvally Type: Water" // uknown gender
	"0773-grass": {ico: "0773-grass", flags: []}, // "Silvally Type: Grass" // uknown gender
	"0773-electric": {ico: "0773-electric", flags: []}, // "Silvally Type: Electric" // uknown gender
	"0773-psychic": {ico: "0773-psychic", flags: []}, // "Silvally Type: Psychic" // uknown gender
	"0773-ice": {ico: "0773-ice", flags: []}, // "Silvally Type: Ice" // uknown gender
	"0773-dragon": {ico: "0773-dragon", flags: []}, // "Silvally Type: Dragon" // uknown gender
	"0773-dark": {ico: "0773-dark", flags: []}, // "Silvally Type: Dark" // uknown gender
	"0773-fairy": {ico: "0773-fairy", flags: []}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: []}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: []}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: []}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: []}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: []}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: []}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: []}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: []}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: []}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: []}, // "Komala"
	"0776": {ico: "0776", flags: []}, // "Turtonator"
	"0777": {ico: "0777", flags: []}, // "Togedemaru"
//	"0778": {ico: "0778", flags: []}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: []}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: []}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: []}, // "Bruxish"
	"0780": {ico: "0780", flags: []}, // "Drampa"
	"0781": {ico: "0781", flags: []}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: []}, // "Jangmo-o"
	"0783": {ico: "0783", flags: []}, // "Hakamo-o"
	"0784": {ico: "0784", flags: []}, // "Kommo-o"
	"0785": {ico: "0785", flags: []}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: []}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: []}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: []}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: []}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: []}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: []}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: []}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: []}, // "Lunala", // uknown gender
//	"0792-full-moon" // "Full Monn Lunala", // uknown gender
	"0793": {ico: "0793", flags: []}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: []}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: []}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: []}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: []}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: []}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: []}, // "Guzzlord" // uknown gender
	"0800": {ico: "0800", flags: []}, // "Necrozma" // uknown gender
	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: []}, // "Dusk Mane Necrozma" // uknown gender
	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: []}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: []}, // "Ultra Necrozma" // uknown gender
	"0801": {ico: "0801", flags: []}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: []}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: []}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: []}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: []}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: []}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: []}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: []}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: []}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: []}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: []}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: []}, // "Gigantamax Melmetal" // uknown gender
//	==============
//	 Generation 8
//	==============
	"0810": {ico: "0810", flags: []}, // "Grookey"
	"0811": {ico: "0811", flags: []}, // "Thwackey"
	"0812": {ico: "0812", flags: []}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: []}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: []}, // "Scorbunny"
	"0814": {ico: "0814", flags: []}, // "Raboot"
	"0815": {ico: "0815", flags: []}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: []}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: []}, // "Sobble"
	"0817": {ico: "0817", flags: []}, // "Drizzile"
	"0818": {ico: "0818", flags: []}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: []}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: []}, // "Skwovet"
	"0820": {ico: "0820", flags: []}, // "Greedent"
	"0821": {ico: "0821", flags: []}, // "Rookidee"
	"0822": {ico: "0822", flags: []}, // "Corvisquire"
	"0823": {ico: "0823", flags: []}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: []}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: []}, // "Blipbug"
	"0825": {ico: "0825", flags: []}, // "Dottler"
	"0826": {ico: "0826", flags: []}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: []}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: []}, // "Nickit"
	"0828": {ico: "0828", flags: []}, // "Thievul"
	"0829": {ico: "0829", flags: []}, // "Gossifleur"
	"0830": {ico: "0830", flags: []}, // "Eldegoss"
	"0831": {ico: "0831", flags: []}, // "Wooloo"
	"0832": {ico: "0832", flags: []}, // "Dubwool"
	"0833": {ico: "0833", flags: []}, // "Chewtle"
	"0834": {ico: "0834", flags: []}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: []}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: []}, // "Yamper"
	"0836": {ico: "0836", flags: []}, // "Boltund"
	"0837": {ico: "0837", flags: []}, // "Rolycoly"
	"0838": {ico: "0838", flags: []}, // "Carkol"
	"0839": {ico: "0839", flags: []}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: []}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: []}, // "Applin"
	"0841": {ico: "0841", flags: []}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: []}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: []}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: []}, // "Silicobra"
	"0844": {ico: "0844", flags: []}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: []}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: []}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: []}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: []}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: []}, // "Arrokuda"
	"0847": {ico: "0847", flags: []}, // "Barraskewda"
	"0848": {ico: "0848", flags: []}, // "Toxel"
//	"0849": {ico: "0849", flags: []}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: []}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: []}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: []}, // "Sizzlipede"
	"0851": {ico: "0851", flags: []}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: []}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: []}, // "Clobbopus"
	"0853": {ico: "0853", flags: []}, // "Grapploct"
//	"0854": {ico: "0854", flags: []}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854", flags: []}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854", flags: []}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: []}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855", flags: []}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855", flags: []}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: []}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: []}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: []}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: []}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: []}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: []}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: []}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: []}, // "Gigantamax Grimmsnarl" // male only
	"0862": {ico: "0862", flags: []}, // "Obstagoon"
	"0863": {ico: "0863", flags: []}, // "Perrserker"
	"0864": {ico: "0864", flags: []}, // "Cursola"
	"0865": {ico: "0865", flags: []}, // "Sirfetch'd"
	"0866": {ico: "0866", flags: []}, // "Mr. Rime"
	"0867": {ico: "0867", flags: []}, // "Runerigus"
	"0868": {ico: "0868", flags: []}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: []}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: []}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: []}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: []}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: []}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: []}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: []}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: []}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: []}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: []}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: []}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: []}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: []}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: []}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: []}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: []}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: []}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: []}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: []}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: []}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: []}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: []}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: []}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: []}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: []}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: []}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: []}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: []}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: []}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: []}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: []}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: []}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: []}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: []}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: []}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: []}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: []}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: []}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: []}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: []}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: []}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: []}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: []}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: []}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: []}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: []}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: []}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: []}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: []}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: []}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: []}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: []}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: []}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: []}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: []}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: []}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: []}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: []}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: []}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: []}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: []}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: []}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: []}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: []}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: []}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: []}, // "Pincurchin"
	"0872": {ico: "0872", flags: []}, // "Snom"
	"0873": {ico: "0873", flags: []}, // "Frosmoth"
	"0874": {ico: "0874", flags: []}, // "Stonjourner"
//	"0875": {ico: "0875", flags: []}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: []}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: []}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: []}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: []}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: []}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: []}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: []}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: []}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: []}, // "Cufant"
	"0879": {ico: "0879", flags: []}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: []}, // "Gigantamax Copperajah"
	"0880": {ico: "0880", flags: []}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: []}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: []}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: []}, // "Arctovish" // uknown gender
	"0884": {ico: "0884", flags: []}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: []}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: []}, // "Dreepy"
	"0886": {ico: "0886", flags: []}, // "Drakloak"
	"0887": {ico: "0887", flags: []}, // "Dragapult"
//	"0888": {ico: "0888", flags: []}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: []}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: []}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: []}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: []}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: []}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: []}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: []}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: []}, // "Kubfu"
	"0892": {ico: "0892", flags: []}, // "Urshifu"
	"0892-sigle": {ico: "0892-sigle", flags: []}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: []}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: []}, // "Rapid Strike Style Urshifu"2021-04-02
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: []}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: []}, // "Zarude" // unknown gender
	"0893-dada": {ico: "0893-dada", flags: []}, // "Dada Zarude" // unknown gender
	"0894": {ico: "0894", flags: []}, // "Regieleki" // unknown gender
	"0895": {ico: "0895", flags: []}, // "Regidrago" // unknown gender
	"0896": {ico: "0896", flags: []}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: []}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: []}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: []}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: []}, // "Shadow Rider Calyrex" // uknown gender
}

const _Regdex_eSwSh	=
{
	"0001": {ico: "0001", flags: []}, // "Bulbasaur"
	"0002": {ico: "0002", flags: []}, // "Ivysaur"
//	"0003": {ico: "0003", flags: []}, // "Venusaur"
	"0003-m": {ico: "0003", flags: []}, // "Venusaur♂"
	"0003-f": {ico: "custom/0003-f", flags: []}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: []}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: []}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: []}, // "Charmander"
	"0005": {ico: "0005", flags: []}, // "Charmeleon"
	"0006": {ico: "0006", flags: []}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: []}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: []}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: []}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: []}, // "Squirtle"
	"0008": {ico: "0008", flags: []}, // "Wartortle"
	"0009": {ico: "0009", flags: []}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: []}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: []}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: []}, // "Caterpie"
	"0011": {ico: "0011", flags: []}, // "Metapod"
//	"0012": {ico: "0012", flags: []}, // "Butterfree"
	"0012-m": {ico: "0012", flags: []}, // "Butterfree♂"
	"0012-f": {ico: "custom/0012-f", flags: []}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: []}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: []}, // "Weedle"
	"0014": {ico: "0014", flags: []}, // "Kakuna"
	"0015": {ico: "0015", flags: []}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: []}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: []}, // "Pidgey"
	"0017": {ico: "0017", flags: []}, // "Pidgeotto"
	"0018": {ico: "0018", flags: []}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: []}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: []}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: []}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: []}, // "Rattata♀"
//	"0020": {ico: "0020", flags: []}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: []}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: []}, // "Raticate♀"
	"0019-alola": {ico: "0019-alola", flags: []}, // "Alolan Rattata"
	"0020-alola": {ico: "0020-alola", flags: []}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: []}, // "Spearow"
	"0022": {ico: "0022", flags: []}, // "Fearow"
	"0023": {ico: "0023", flags: []}, // "Ekans"
	"0024": {ico: "0024", flags: []}, // "Arbok"
	"0172": {ico: "0172", flags: []}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: []}, // "Spiky-eared Pichu" // female only
//	"0025": {ico: "0025", flags: []}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: []}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: []}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: []}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: []}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: []}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: []}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: []}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: []}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: []}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: []}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: []}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: []}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: []}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: []}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: []}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: []}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: []}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: []}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: []}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: []}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: []}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: []}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: []}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: []}, // "Sandshrew"
	"0028": {ico: "0028", flags: []}, // "Sandslash"
	"0027-alola": {ico: "0027-alola", flags: []}, // "Alolan Sandshrew"
	"0028-alola": {ico: "0028-alola", flags: []}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: []}, // "Nidoran"
//	"0032": {ico: "0032", flags: []}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: []}, // "Nidoran♂"
	"0029-f": {ico: "0029-f", flags: []}, // "Nidoran♀"
	"0030": {ico: "0030", flags: []}, // "Nidorina"
	"0031": {ico: "0031", flags: []}, // "Nidoqueen"
	"0033": {ico: "0033", flags: []}, // "Nidorino"
	"0034": {ico: "0034", flags: []}, // "Nidoking"
	"0173": {ico: "0173", flags: []}, // "Cleffa"
	"0035": {ico: "0035", flags: []}, // "Clefairy"
	"0036": {ico: "0036", flags: []}, // "Clefable"
	"0037": {ico: "0037", flags: []}, // "Vulpix"
	"0038": {ico: "0038", flags: []}, // "Ninetales"
	"0037-alola": {ico: "0037-alola", flags: []}, // "Alolan Vulpix"
	"0038-alola": {ico: "0038-alola", flags: []}, // "Alolan Ninetales"
	"0174": {ico: "0174", flags: []}, // "Igglybuff"
	"0039": {ico: "0039", flags: []}, // "Jigglypuff"
	"0040": {ico: "0040", flags: []}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: []}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: []}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: []}, // "Zubat♀"
//	"0042": {ico: "0042", flags: []}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: []}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: []}, // "Golbat♀"
	"0169": {ico: "0169", flags: []}, // "Crobat"
	"0043": {ico: "0043", flags: []}, // "Oddish"
//	"0044": {ico: "0044", flags: []}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: []}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: []}, // "Gloom♀"
//	"0045": {ico: "0045", flags: []}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: []}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: []}, // "Vileplume♀"
	"0182": {ico: "0182", flags: []}, // "Bellossom"
	"0046": {ico: "0046", flags: []}, // "Paras"
	"0047": {ico: "0047", flags: []}, // "Parasect"
	"0048": {ico: "0048", flags: []}, // "Venonat"
	"0049": {ico: "0049", flags: []}, // "Venomoth"
	"0050": {ico: "0050", flags: []}, // "Diglett"
	"0051": {ico: "0051", flags: []}, // "Dugtrio"
	"0050-alola": {ico: "0050-alola", flags: []}, // "Alolan Diglett"
	"0051-alola": {ico: "0051-alola", flags: []}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: []}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: []}, // "Gigantamax Meowth"
	"0053": {ico: "0053", flags: []}, // "Persian"
	"0052-alola": {ico: "0052-alola", flags: []}, // "Alolan Meowth"
	"0053-alola": {ico: "0053-alola", flags: []}, // "Alolan Persian"
	"0052-galar": {ico: "0052-galar", flags: []}, // "Galarian Meowth"
	"0863": {ico: "0863", flags: []}, // "Perrserker"
	"0054": {ico: "0054", flags: []}, // "Psyduck"
	"0055": {ico: "0055", flags: []}, // "Golduck"
	"0056": {ico: "0056", flags: []}, // "Mankey"
	"0057": {ico: "0057", flags: []}, // "Primeape"
	"0058": {ico: "0058", flags: []}, // "Growlithe"
	"0059": {ico: "0059", flags: []}, // "Arcanine"
	"0060": {ico: "0060", flags: []}, // "Poliwag"
	"0061": {ico: "0061", flags: []}, // "Poliwhirl"
	"0062": {ico: "0062", flags: []}, // "Poliwrath"
//	"0186": {ico: "0186", flags: []}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: []}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: []}, // "Politoed♀"
	"0063": {ico: "0063", flags: []}, // "Abra"
//	"0064": {ico: "0064", flags: []}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: []}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: []}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: []}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: []}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: []}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: []}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: []}, // "Machop"
	"0067": {ico: "0067", flags: []}, // "Machoke"
	"0068": {ico: "0068", flags: []}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: []}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: []}, // "Bellsprout"
	"0070": {ico: "0070", flags: []}, // "Weepinbell"
	"0071": {ico: "0071", flags: []}, // "Victreebel"
	"0072": {ico: "0072", flags: []}, // "Tentacool"
	"0073": {ico: "0073", flags: []}, // "Tentacruel"
	"0074": {ico: "0074", flags: []}, // "Geodude"
	"0075": {ico: "0075", flags: []}, // "Graveler"
	"0076": {ico: "0076", flags: []}, // "Golem"
	"0074-alola": {ico: "0074-alola", flags: []}, // "Alolan Geodude"
	"0075-alola": {ico: "0075-alola", flags: []}, // "Alolan Graveler"
	"0076-alola": {ico: "0076-alola", flags: []}, // "Alolan Golem"
	"0077": {ico: "0077", flags: []}, // "Ponyta"
	"0078": {ico: "0078", flags: []}, // "Rapidash"
	"0077-galar": {ico: "0077-galar", flags: []}, // "Galarian Ponyta"
	"0078-galar": {ico: "0078-galar", flags: []}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: []}, // "Slowpoke"
	"0080": {ico: "0080", flags: []}, // "Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: []}, // "Mega Slowbro"
	"0199": {ico: "0199", flags: []}, // "Slowking"
	"0079-galar": {ico: "0079-galar", flags: []}, // "Galarian Slowpoke"
	"0080-galar": {ico: "0080-galar", flags: []}, // "Galarian Slowbro"
	"0199-galar": {ico: "0199-galar", flags: []}, // "Galarian Slowking"
	"0081": {ico: "0081", flags: []}, // "Magnemite"
	"0082": {ico: "0082", flags: []}, // "Magneton"
	"0462": {ico: "0462", flags: []}, // "Magnezone" // uknown gender
	"0083": {ico: "0083", flags: []}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: []}, // "Galarian Farfetch'd"
	"0865": {ico: "0865", flags: []}, // "Sirfetch'd"
//	"0084": {ico: "0084", flags: []}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: []}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: []}, // "Doduo♀"
//	"0085": {ico: "0085", flags: []}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: []}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: []}, // "Dodrio♀"
	"0086": {ico: "0086", flags: []}, // "Seel"
	"0087": {ico: "0087", flags: []}, // "Dewgong"
	"0088": {ico: "0088", flags: []}, // "Grimer"
	"0089": {ico: "0089", flags: []}, // "Muk"
	"0088-alola": {ico: "0088-alola", flags: []}, // "Alolan Grimer"
	"0089-alola": {ico: "0089-alola", flags: []}, // "Alolan Muk"
	"0090": {ico: "0090", flags: []}, // "Shellder"
	"0091": {ico: "0091", flags: []}, // "Cloyster"
	"0092": {ico: "0092", flags: []}, // "Gastly"
	"0093": {ico: "0093", flags: []}, // "Haunter"
	"0094": {ico: "0094", flags: []}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: []}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: []}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: []}, // "Onix"
//	"0208": {ico: "0208", flags: []}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: []}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: []}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: []}, // "Mega Steelix"
	"0096": {ico: "0096", flags: []}, // "Drowzee"
//	"0097": {ico: "0097", flags: []}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: []}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: []}, // "Hypno♀"
	"0098": {ico: "0098", flags: []}, // "Krabby"
	"0099": {ico: "0099", flags: []}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: []}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: []}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: []}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: []}, // "Exeggcute"
	"0103": {ico: "0103", flags: []}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: []}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: []}, // "Cubone"
	"0105": {ico: "0105", flags: []}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: []}, // "Alolan Marowak"
	"0236": {ico: "0236", flags: []}, // "Tyrogue" // male only
	"0106": {ico: "0106", flags: []}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: []}, // "Hitmonchan" // male only
	"0237": {ico: "0237", flags: []}, // "Hitmontop" // male only
	"0108": {ico: "0108", flags: []}, // "Lickitung"
	"0463": {ico: "0463", flags: []}, // "Lickilicky"
	"0109": {ico: "0109", flags: []}, // "Koffing"
	"0110": {ico: "0110", flags: []}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: []}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: []}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: []}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: []}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: []}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: []}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: []}, // "Rhydon♀"
//	"0464": {ico: "0464", flags: []}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: []}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: []}, // "Rhyperior♀"
	"0440": {ico: "0440", flags: []}, // "Happiny" // female only
	"0113": {ico: "0113", flags: []}, // "Chansey" // female only
	"0242": {ico: "0242", flags: []}, // "Blissey" // female only
	"0114": {ico: "0114", flags: []}, // "Tangela"
//	"0465": {ico: "0465", flags: []}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: []}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: []}, // "Tangrowth♀"
	"0115": {ico: "0115", flags: []}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: []}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: []}, // "Horsea"
	"0117": {ico: "0117", flags: []}, // "Seadra"
	"0230": {ico: "0230", flags: []}, // "Kingdra"
//	"0118": {ico: "0118", flags: []}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: []}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: []}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: []}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: []}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: []}, // "Seaking♀"
	"0120": {ico: "0120", flags: []}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: []}, // "Starmie" // uknown gender
	"0439": {ico: "0439", flags: []}, // "Mime Jr."
	"0122": {ico: "0122", flags: []}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: []}, // "Galarian Mr. Mime"
	"0866": {ico: "0866", flags: []}, // "Mr. Rime"
//	"0123": {ico: "0123", flags: []}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: []}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: []}, // "Scyther♀"
//	"0212": {ico: "0212", flags: []}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: []}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: []}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: []}, // "Mega Scizor"
	"0238": {ico: "0238", flags: []}, // "Smoochum" // female only
	"0124": {ico: "0124", flags: []}, // "Jynx" // female only
	"0239": {ico: "0239", flags: []}, // "Elekid"
	"0125": {ico: "0125", flags: []}, // "Electabuzz"
	"0466": {ico: "0466", flags: []}, // "Electivire"
	"0240": {ico: "0240", flags: []}, // "Magby"
	"0126": {ico: "0126", flags: []}, // "Magmar"
	"0467": {ico: "0467", flags: []}, // "Magmortar"
	"0127": {ico: "0127", flags: []}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: []}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: []}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: []}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: []}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: []}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: []}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: []}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: []}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: []}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: []}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: []}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: []}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: []}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: []}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: []}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: []}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: []}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: []}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: []}, // "Vaporeon"
	"0135": {ico: "0135", flags: []}, // "Jolteon"
	"0136": {ico: "0136", flags: []}, // "Flareon"
	"0196": {ico: "0196", flags: []}, // "Espeon"
	"0197": {ico: "0197", flags: []}, // "Umbreon"
	"0470": {ico: "0470", flags: []}, // "Leafeon"
	"0471": {ico: "0471", flags: []}, // "Glaceon"
	"0700": {ico: "0700", flags: []}, // "Sylveon"
	"0137": {ico: "0137", flags: []}, // "Porygon" // uknown gender
	"0233": {ico: "0233", flags: []}, // "Porygon2" // uknown gender
	"0474": {ico: "0474", flags: []}, // "Porygon-Z" // uknown gender
	"0138": {ico: "0138", flags: []}, // "Omanyte"
	"0139": {ico: "0139", flags: []}, // "Omastar"
	"0140": {ico: "0140", flags: []}, // "Kabuto"
	"0141": {ico: "0141", flags: []}, // "Kabutops"
	"0142": {ico: "0142", flags: []}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: []}, // "Mega Aerodactyl"
	"0345": {ico: "0345", flags: []}, // "Lileep"
	"0346": {ico: "0346", flags: []}, // "Cradily"
	"0347": {ico: "0347", flags: []}, // "Anorith"
	"0348": {ico: "0348", flags: []}, // "Armaldo"
	"0408": {ico: "0408", flags: []}, // "Cranidos"
	"0409": {ico: "0409", flags: []}, // "Rampardos"
	"0410": {ico: "0410", flags: []}, // "Shieldon"
	"0411": {ico: "0411", flags: []}, // "Bastiodon"
	"0564": {ico: "0564", flags: []}, // "Tirtouga"
	"0565": {ico: "0565", flags: []}, // "Carracosta"
	"0566": {ico: "0566", flags: []}, // "Archen"
	"0567": {ico: "0567", flags: []}, // "Archeops"
	"0696": {ico: "0696", flags: []}, // "Tyrunt"
	"0697": {ico: "0697", flags: []}, // "Tyrantrum"
	"0698": {ico: "0698", flags: []}, // "Amaura"
	"0699": {ico: "0699", flags: []}, // "Aurorus"
	"0880": {ico: "0880", flags: []}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: []}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: []}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: []}, // "Arctovish" // uknown gender
	"0446": {ico: "0446", flags: []}, // "Munchlax"
	"0143": {ico: "0143", flags: []}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: []}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: []}, // "Articuno" // uknown gender
	"0145": {ico: "0145", flags: []}, // "Zapdos" // uknown gender
	"0146": {ico: "0146", flags: []}, // "Moltres" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: []}, // "Galarian Articuno" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: []}, // "Galarian Zapdos" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: []}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: []}, // "Dratini"
	"0148": {ico: "0148", flags: []}, // "Dragonair"
	"0149": {ico: "0149", flags: []}, // "Dragonite"
	"0150": {ico: "0150", flags: []}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: []}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: []}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: []}, // "Mew" // uknown gender
	"0152": {ico: "0152", flags: []}, // "Chikorita"
	"0153": {ico: "0153", flags: []}, // "Bayleef"
//	"0154": {ico: "0154", flags: []}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: []}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: []}, // "Meganium♀"
	"0155": {ico: "0155", flags: []}, // "Cyndaquil"
	"0156": {ico: "0156", flags: []}, // "Quilava"
	"0157": {ico: "0157", flags: []}, // "Typhlosion"
	"0158": {ico: "0158", flags: []}, // "Totodile"
	"0159": {ico: "0159", flags: []}, // "Croconaw"
	"0160": {ico: "0160", flags: []}, // "Feraligatr"
	"0161": {ico: "0161", flags: []}, // "Sentret"
	"0162": {ico: "0162", flags: []}, // "Furret"
	"0163": {ico: "0163", flags: []}, // "Hoothoot"
	"0164": {ico: "0164", flags: []}, // "Noctowl"
//	"0165": {ico: "0165", flags: []}, // "Ledyba"
//	"0166": {ico: "0166", flags: []}, // "Ledian"
	"0165-m": {ico: "0165-m", flags: []}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: []}, // "Ledyba♀"
	"0166-m": {ico: "0166-m", flags: []}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: []}, // "Ledian♀"
	"0167": {ico: "0167", flags: []}, // "Spinarak"
	"0168": {ico: "0168", flags: []}, // "Ariados"
	"0170": {ico: "0170", flags: []}, // "Chinchou"
	"0171": {ico: "0171", flags: []}, // "Lanturn"
	"0175": {ico: "0175", flags: []}, // "Togepi"
	"0176": {ico: "0176", flags: []}, // "Togetic"
	"0468": {ico: "0468", flags: []}, // "Togekiss"
	"0177": {ico: "0177", flags: []}, // "Natu"
//	"0178": {ico: "0178", flags: []}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: []}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: []}, // "Xatu♀"
	"0179": {ico: "0179", flags: []}, // "Mareep"
	"0180": {ico: "0180", flags: []}, // "Flaaffy"
	"0181": {ico: "0181", flags: []}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: []}, // "Mega Ampharos"
	"0298": {ico: "0298", flags: []}, // "Azurill"
	"0183": {ico: "0183", flags: []}, // "Marill"
	"0184": {ico: "0184", flags: []}, // "Azumarill"
	"0438": {ico: "0438", flags: []}, // "Bonsly"
//	"0185": {ico: "0185", flags: []}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: []}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: []}, // "Sudowoodo♀"
	"0187": {ico: "0187", flags: []}, // "Hoppip"
	"0188": {ico: "0188", flags: []}, // "Skiploom"
	"0189": {ico: "0189", flags: []}, // "Jumpluff"
//	"0190": {ico: "0190", flags: []}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: []}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: []}, // "Aipom♀"
//	"0424": {ico: "0424", flags: []}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: []}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: []}, // "Ambipom♀"
	"0191": {ico: "0191", flags: []}, // "Sunkern"
	"0192": {ico: "0192", flags: []}, // "Sunflora"
	"0193": {ico: "0193", flags: []}, // "Yanma"
	"0469": {ico: "0469", flags: []}, // "Yanmega"
//	"0194": {ico: "0194", flags: []}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: []}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: []}, // "Wooper♀"
//	"0195": {ico: "0195", flags: []}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: []}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: []}, // "Quagsire♀"
//	"0198": {ico: "0198", flags: []}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: []}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: []}, // "Murkrow♀"
	"0430": {ico: "0430", flags: []}, // "Honchkrow"
	"0200": {ico: "0200", flags: []}, // "Misdreavus"
	"0429": {ico: "0429", flags: []}, // "Mismagius"
//	"0201": {ico: "0201", flags: []}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: []}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: []}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: []}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: []}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: []}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: []}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: []}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: []}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: []}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: []}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: []}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: []}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: []}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: []}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: []}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: []}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: []}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: []}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: []}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: []}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: []}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: []}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: []}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: []}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: []}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: []}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: []}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: []}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: []}, // "Unown ?????" // uknown gender
	"0360": {ico: "0360", flags: []}, // "Wynaut"
//	"0202": {ico: "0202", flags: []}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: []}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: []}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: []}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: []}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: []}, // "Girafarig♀"
	"0204": {ico: "0204", flags: []}, // "Pineco"
	"0205": {ico: "0205", flags: []}, // "Forretress"
	"0206": {ico: "0206", flags: []}, // "Dunsparce"
//	"0207": {ico: "0207", flags: []}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: []}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: []}, // "Gligar♀"
	"0472": {ico: "0472", flags: []}, // "Gliscor"
	"0209": {ico: "0209", flags: []}, // "Snubbull"
	"0210": {ico: "0210", flags: []}, // "Granbull"
	"0211": {ico: "0211", flags: []}, // "Qwilfish"
	"0213": {ico: "0213", flags: []}, // "Shuckle"
//	"0214": {ico: "0214", flags: []}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: []}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: []}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: []}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: []}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: []}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: []}, // "Sneasel♀"
//	"0461": {ico: "0461", flags: []}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: []}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: []}, // "Weavile♀"
	"0216": {ico: "0216", flags: []}, // "Teddiursa"
//	"0217": {ico: "0217", flags: []}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: []}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: []}, // "Ursaring♀"
	"0218": {ico: "0218", flags: []}, // "Slugma"
	"0219": {ico: "0219", flags: []}, // "Magcargo"
	"0220": {ico: "0220", flags: []}, // "Swinub"
//	"0221": {ico: "0221", flags: []}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: []}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: []}, // "Piloswine♀"
//	"0473": {ico: "0473", flags: []}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: []}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: []}, // "Mamoswine♀"
	"0222": {ico: "0222", flags: []}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: []}, // "Galarian Corsola"
	"0864": {ico: "0864", flags: []}, // "Cursola"
	"0223": {ico: "0223", flags: []}, // "Remoraid"
//	"0224": {ico: "0224", flags: []}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: []}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: []}, // "Octillery♀"
	"0225": {ico: "0225", flags: []}, // "Delibird"
	"0458": {ico: "0458", flags: []}, // "Mantyke"
	"0226": {ico: "0226", flags: []}, // "Mantine"
	"0227": {ico: "0227", flags: []}, // "Skarmory"
	"0228": {ico: "0228", flags: []}, // "Houndour"
//	"0229": {ico: "0229", flags: []}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: []}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: []}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: []}, // "Mega Houndoom"
	"0231": {ico: "0231", flags: []}, // "Phanpy"
//	"0232": {ico: "0232", flags: []}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: []}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: []}, // "Donphan♀"
	"0234": {ico: "0234", flags: []}, // "Stantler"
	"0235": {ico: "0235", flags: []}, // "Smeargle"
	"0241": {ico: "0241", flags: []}, // "Miltank" // female only
	"0243": {ico: "0243", flags: []}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: []}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: []}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: []}, // "Larvitar"
	"0247": {ico: "0247", flags: []}, // "Pupitar"
	"0248": {ico: "0248", flags: []}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: []}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: []}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: []}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: []}, // "Celebi" // uknown gender
	"0252": {ico: "0252", flags: []}, // "Treecko"
	"0253": {ico: "0253", flags: []}, // "Grovyle"
	"0254": {ico: "0254", flags: []}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: []}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: []}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: []}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: []}, // "Torchic♀"
//	"0256": {ico: "0256", flags: []}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: []}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: []}, // "Combusken♀"
//	"0257": {ico: "0257", flags: []}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: []}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: []}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: []}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: []}, // "Mudkip"
	"0259": {ico: "0259", flags: []}, // "Marshtomp"
	"0260": {ico: "0260", flags: []}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: []}, // "Mega Swampert"
	"0261": {ico: "0261", flags: []}, // "Poochyena"
	"0262": {ico: "0262", flags: []}, // "Mightyena"
	"0263": {ico: "0263", flags: []}, // "Zigzagoon"
	"0264": {ico: "0264", flags: []}, // "Linoone"
	"0263-galar": {ico: "0263-galar", flags: []}, // "Galarian Zigzagoon"
	"0264-galar": {ico: "0264-galar", flags: []}, // "Galarian Linoone"
	"0862": {ico: "0862", flags: []}, // "Obstagoon"
	"0265": {ico: "0265", flags: []}, // "Wurmple"
	"0266": {ico: "0266", flags: []}, // "Silcoon"
//	"0267": {ico: "0267", flags: []}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: []}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: []}, // "Beautifly♀"
	"0268": {ico: "0268", flags: []}, // "Cascoon"
//	"0269": {ico: "0269", flags: []}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: []}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: []}, // "Dustox♀"
	"0270": {ico: "0270", flags: []}, // "Lotad"
	"0271": {ico: "0271", flags: []}, // "Lombre"
//	"0272": {ico: "0272", flags: []}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: []}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: []}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: []}, // "Seedot"
//	"0274": {ico: "0274", flags: []}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: []}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: []}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: []}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: []}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: []}, // "Shiftry♀"
	"0276": {ico: "0276", flags: []}, // "Taillow"
	"0277": {ico: "0277", flags: []}, // "Swellow"
	"0278": {ico: "0278", flags: []}, // "Wingull"
	"0279": {ico: "0279", flags: []}, // "Pelipper"
	"0280": {ico: "0280", flags: []}, // "Ralts"
	"0281": {ico: "0281", flags: []}, // "Kirlia"
	"0282": {ico: "0282", flags: []}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: []}, // "Mega Gardevoir"
	"0475": {ico: "0475", flags: []}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: []}, // "Mega Gallade" // male only
	"0283": {ico: "0283", flags: []}, // "Surskit"
	"0284": {ico: "0284", flags: []}, // "Masquerain"
	"0285": {ico: "0285", flags: []}, // "Shroomish"
	"0286": {ico: "0286", flags: []}, // "Breloom"
	"0287": {ico: "0287", flags: []}, // "Slakoth"
	"0288": {ico: "0288", flags: []}, // "Vigoroth"
	"0289": {ico: "0289", flags: []}, // "Slaking"
	"0290": {ico: "0290", flags: []}, // "Nincada"
	"0291": {ico: "0291", flags: []}, // "Ninjask"
	"0292": {ico: "0292", flags: []}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: []}, // "Whismur"
	"0294": {ico: "0294", flags: []}, // "Loudred"
	"0295": {ico: "0295", flags: []}, // "Exploud"
	"0296": {ico: "0296", flags: []}, // "Makuhita"
	"0297": {ico: "0297", flags: []}, // "Hariyama"
	"0299": {ico: "0299", flags: []}, // "Nosepass"
	"0476": {ico: "0476", flags: []}, // "Probopass"
	"0300": {ico: "0300", flags: []}, // "Skitty"
	"0301": {ico: "0301", flags: []}, // "Delcatty"
	"0302": {ico: "0302", flags: []}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: []}, // "Mega Sableye"
	"0303": {ico: "0303", flags: []}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: []}, // "Mega Mawile"
	"0304": {ico: "0304", flags: []}, // "Aron"
	"0305": {ico: "0305", flags: []}, // "Lairon"
	"0306": {ico: "0306", flags: []}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: []}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: []}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: []}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: []}, // "Meditite♀"
//	"0308": {ico: "0308", flags: []}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: []}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: []}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: []}, // "Mega Medicham"
	"0309": {ico: "0309", flags: []}, // "Electrike"
	"0310": {ico: "0310", flags: []}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: []}, // "Mega Manectric"
	"0311": {ico: "0311", flags: []}, // "Plusle"
	"0312": {ico: "0312", flags: []}, // "Minun"
	"0313": {ico: "0313", flags: []}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: []}, // "Illumise" // female only
	"0406": {ico: "0406", flags: []}, // "Budew"
//	"0315": {ico: "0315", flags: []}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: []}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: []}, // "Roselia♀"
//	"0407": {ico: "0407", flags: []}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: []}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: []}, // "Roserade♀"
//	"0316": {ico: "0316", flags: []}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: []}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: []}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: []}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: []}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: []}, // "Swalot♀"
	"0318": {ico: "0318", flags: []}, // "Carvanha"
	"0319": {ico: "0319", flags: []}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: []}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: []}, // "Wailmer"
	"0321": {ico: "0321", flags: []}, // "Wailord"
//	"0322": {ico: "0322", flags: []}, // "Numel"
	"0322-m": {ico: "0322-m", flags: []}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: []}, // "Numel♀"
//	"0323": {ico: "0323", flags: []}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: []}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: []}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: []}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: []}, // "Torkoal"
	"0325": {ico: "0325", flags: []}, // "Spoink"
	"0326": {ico: "0326", flags: []}, // "Grumpig"
	"0327": {ico: "0327", flags: []}, // "Spinda"
	"0328": {ico: "0328", flags: []}, // "Trapinch"
	"0329": {ico: "0329", flags: []}, // "Vibrava"
	"0330": {ico: "0330", flags: []}, // "Flygon"
	"0331": {ico: "0331", flags: []}, // "Cacnea"
//	"0332": {ico: "0332", flags: []}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: []}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: []}, // "Cacturne♀"
	"0333": {ico: "0333", flags: []}, // "Swablu"
	"0334": {ico: "0334", flags: []}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: []}, // "Mega Altaria"
	"0335": {ico: "0335", flags: []}, // "Zangoose"
	"0336": {ico: "0336", flags: []}, // "Seviper"
	"0337": {ico: "0337", flags: []}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: []}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: []}, // "Barboach"
	"0340": {ico: "0340", flags: []}, // "Whiscash"
	"0341": {ico: "0341", flags: []}, // "Corphish"
	"0342": {ico: "0342", flags: []}, // "Crawdaunt"
	"0343": {ico: "0343", flags: []}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: []}, // "Claydol" // uknown gender
	"0349": {ico: "0349", flags: []}, // "Feebas"
//	"0350": {ico: "0350", flags: []}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: []}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: []}, // "Milotic♀"
	"0351": {ico: "0351", flags: []}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: []}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: []}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: []}, // "Snowy Castform"
	"0352": {ico: "0352", flags: []}, // "Kecleon"
	"0353": {ico: "0353", flags: []}, // "Shuppet"
	"0354": {ico: "0354", flags: []}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: []}, // "Mega Banette"
	"0355": {ico: "0355", flags: []}, // "Duskull"
	"0356": {ico: "0356", flags: []}, // "Dusclops"
	"0477": {ico: "0477", flags: []}, // "Dusknoir"
	"0357": {ico: "0357", flags: []}, // "Tropius"
	"0433": {ico: "0433", flags: []}, // "Chingling"
	"0358": {ico: "0358", flags: []}, // "Chimecho"
	"0359": {ico: "0359", flags: []}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: []}, // "Mega Absol"
	"0361": {ico: "0361", flags: []}, // "Snorunt"
	"0362": {ico: "0362", flags: []}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: []}, // "Mega Glalie"
	"0478": {ico: "0478", flags: []}, // "Froslass" // female only
	"0363": {ico: "0363", flags: []}, // "Spheal"
	"0364": {ico: "0364", flags: []}, // "Sealeo"
	"0365": {ico: "0365", flags: []}, // "Walrein"
	"0366": {ico: "0366", flags: []}, // "Clamperl"
	"0367": {ico: "0367", flags: []}, // "Huntail"
	"0368": {ico: "0368", flags: []}, // "Gorebyss"
//	"0369": {ico: "0369", flags: []}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: []}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: []}, // "Relicanth♀"
	"0370": {ico: "0370", flags: []}, // "Luvdisc"
	"0371": {ico: "0371", flags: []}, // "Bagon"
	"0372": {ico: "0372", flags: []}, // "Shelgon"
	"0373": {ico: "0373", flags: []}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: []}, // "Mega Salamence"
	"0374": {ico: "0374", flags: []}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: []}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: []}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: []}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: []}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: []}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: []}, // "Registeel" // uknown gender
	"0894": {ico: "0894", flags: []}, // "Regieleki" // uknown gender
	"0895": {ico: "0895", flags: []}, // "Regidrago" uknown gender
	"0486": {ico: "0486", flags: []}, // "Regigigas" // uknown gender
	"0380": {ico: "0380", flags: []}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: []}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: []}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: []}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: []}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: []}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: []}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: []}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: []}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: []}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: []}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: []}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: []}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: []}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: []}, // "Speed Deoxys" // uknown gender
	"0387": {ico: "0387", flags: []}, // "Turtwig"
	"0388": {ico: "0388", flags: []}, // "Grotle"
	"0389": {ico: "0389", flags: []}, // "Torterra"
	"0390": {ico: "0390", flags: []}, // "Chimchar"
	"0391": {ico: "0391", flags: []}, // "Monferno"
	"0392": {ico: "0392", flags: []}, // "Infernape"
	"0393": {ico: "0393", flags: []}, // "Piplup"
	"0394": {ico: "0394", flags: []}, // "Prinplup"
	"0395": {ico: "0395", flags: []}, // "Empoleon"
//	"0396": {ico: "0396", flags: []}, // "Starly"
	"0396-m": {ico: "0396-m", flags: []}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: []}, // "Starly♀"
//	"0397": {ico: "0397", flags: []}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: []}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: []}, // "Staravia♀"
//	"0398": {ico: "0398", flags: []}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: []}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: []}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: []}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: []}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: []}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: []}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: []}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: []}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: []}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: []}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: []}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: []}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: []}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: []}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: []}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: []}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: []}, // "Shinx♀"
//	"0404": {ico: "0404", flags: []}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: []}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: []}, // "Luxio♀"
//	"0405": {ico: "0405", flags: []}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: []}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: []}, // "Luxray♀"
//	"0412": {ico: "0412", flags: []}, // "Burmy"
//	"0413": {ico: "0413", flags: []}, // "Wormadam" // female only
	"0412-plant": {ico: "0412-plant", flags: []}, // "Burmy Plant Cloak"
	"0413-plant": {ico: "0413-plant", flags: []}, // "Wormadam Plant Cloak" // female only
	"0412-sandy": {ico: "0412-sandy", flags: []}, // "Burmy Sandy Cloak"
	"0413-sandy": {ico: "0413-sandy", flags: []}, // "Wormadam Sandy Cloak" // female only
	"0412-trash": {ico: "0412-trash", flags: []}, // "Burmy Trash Cloak"
	"0413-trash": {ico: "0413-trash", flags: []}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: []}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: []}, // "Combee"
	"0415-m": {ico: "0415-m", flags: []}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: []}, // "Combee♀"
	"0416": {ico: "0416", flags: []}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: []}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: []}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: []}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: []}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: []}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: []}, // "Buizel♀"
//	"0419": {ico: "0419", flags: []}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: []}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: []}, // "Floatzel♀"
	"0420": {ico: "0420", flags: []}, // "Cherubi"
//	"0421": {ico: "0421", flags: []}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: []}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: []}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: []}, // "Shellos"
//	"0423": {ico: "0423", flags: []}, // "Gastrodon"
	"0422-west": {ico: "0422-west", flags: []}, // "West Sea Shellos"
	"0423-west": {ico: "0423-west", flags: []}, // "West Sea Gastrodon"
	"0422-east": {ico: "0422-east", flags: []}, // "East Sea Shellos"
	"0423-east": {ico: "0423-east", flags: []}, // "East Sea Gastrodon"
	"0425": {ico: "0425", flags: []}, // "Drifloon"
	"0426": {ico: "0426", flags: []}, // "Drifblim"
	"0427": {ico: "0427", flags: []}, // "Buneary"
	"0428": {ico: "0428", flags: []}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: []}, // "Mega Lopunny"
	"0431": {ico: "0431", flags: []}, // "Glameow"
	"0432": {ico: "0432", flags: []}, // "Purugly"
	"0434": {ico: "0434", flags: []}, // "Stunky"
	"0435": {ico: "0435", flags: []}, // "Skuntank"
	"0436": {ico: "0436", flags: []}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: []}, // "Bronzong" // uknown gender
	"0441": {ico: "0441", flags: []}, // "Chatot"
	"0442": {ico: "0442", flags: []}, // "Spiritomb"
//	"0443": {ico: "0443", flags: []}, // "Gible"
	"0443-m": {ico: "0443-m", flags: []}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: []}, // "Gible♀"
//	"0444": {ico: "0444", flags: []}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: []}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: []}, // "Gabite♀"
//	"0445": {ico: "0445", flags: []}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: []}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: []}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: []}, // "Mega Garchomp"
	"0447": {ico: "0447", flags: []}, // "Riolu"
	"0448": {ico: "0448", flags: []}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: []}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: []}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: []}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: []}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: []}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: []}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: []}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: []}, // "Skorupi"
	"0452": {ico: "0452", flags: []}, // "Drapion"
//	"0453": {ico: "0453", flags: []}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: []}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: []}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: []}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: []}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: []}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: []}, // "Carnivine"
//	"0456": {ico: "0456", flags: []}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: []}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: []}, // "Finneon♀"
//	"0457": {ico: "0457", flags: []}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: []}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: []}, // "Lumineon♀"
//	"0459": {ico: "0459", flags: []}, // "Snover"
	"0459-m": {ico: "0459-m", flags: []}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: []}, // "Snover♀"
//	"0460": {ico: "0460", flags: []}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: []}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: []}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: []}, // "Mega Abomasnow"
	"0479": {ico: "0479", flags: []}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: []}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: []}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: []}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: []}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: []}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: []}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: []}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: []}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: []}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: []}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: []}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: []}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: []}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: []}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: []}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: []}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: []}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: []}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: []}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: []}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: []}, // "Heatran"
//	"0487": {ico: "0487", flags: []}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: []}, // "Giratina Altered Forme" // uknown gender
//	"0487-origin": {ico: "0487-origin", flags: []}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: []}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: []}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: []}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: []}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: []}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: []}, // "Shaymin Land Forme" // uknown gender
//	"0492-sky": {ico: "0492-sky", flags: []}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: []}, // "Arceus" // uknown gender
//	"0493-fighting": {ico: "0493-fighting", flags: []}, // "Fighting Arceus" // uknown gender
//	"0493-flying": {ico: "0493-flying", flags: []}, // "Flying Arceus" // uknown gender
//	"0493-poison": {ico: "0493-poison", flags: []}, // "Poison Arceus" // uknown gender
//	"0493-ground": {ico: "0493-ground", flags: []}, // "Ground Arceus" // uknown gender
//	"0493-rock": {ico: "0493-rock", flags: []}, // "Rock Arceus" // uknown gender
//	"0493-bug": {ico: "0493-bug", flags: []}, // "Bug Arceus" // uknown gender
//	"0493-ghost": {ico: "0493-ghost", flags: []}, // "Ghost Arceus" // uknown gender
//	"0493-steel": {ico: "0493-steel", flags: []}, // "Steel Arceus" // uknown gender
//	"0493-fire": {ico: "0493-fire", flags: []}, // "Fire Arceus" // uknown gender
//	"0493-water": {ico: "0493-water", flags: []}, // "Water Arceus" // uknown gender
//	"0493-grass": {ico: "0493-grass", flags: []}, // "Grass Arceus" // uknown gender
//	"0493-electric": {ico: "0493-electric", flags: []}, // "Electric Arceus" // uknown gender
//	"0493-psychic": {ico: "0493-psychic", flags: []}, // "Psychic Arceus" // uknown gender
//	"0493-ice": {ico: "0493-ice", flags: []}, // "Ice Arceus" // uknown gender
//	"0493-dragon": {ico: "0493-dragon", flags: []}, // "Dragon Arceus" // uknown gender
//	"0493-dark": {ico: "0493-dark", flags: []}, // "Dark Arceus" // uknown gender
//	"0493-fairy": {ico: "0493-fairy", flags: []}, // "Fairy Arceus" // uknown gender
	"0494": {ico: "0494", flags: []}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: []}, // "Snivy"
	"0496": {ico: "0496", flags: []}, // "Servine"
	"0497": {ico: "0497", flags: []}, // "Serperior"
	"0498": {ico: "0498", flags: []}, // "Tepig"
	"0499": {ico: "0499", flags: []}, // "Pignite"
	"0500": {ico: "0500", flags: []}, // "Emboar"
	"0501": {ico: "0501", flags: []}, // "Oshawott"
	"0502": {ico: "0502", flags: []}, // "Dewott"
	"0503": {ico: "0503", flags: []}, // "Samurott"
	"0504": {ico: "0504", flags: []}, // "Patrat"
	"0505": {ico: "0505", flags: []}, // "Watchog"
	"0506": {ico: "0506", flags: []}, // "Lillipup"
	"0507": {ico: "0507", flags: []}, // "Herdier"
	"0508": {ico: "0508", flags: []}, // "Stoutland"
	"0509": {ico: "0509", flags: []}, // "Purrloin"
	"0510": {ico: "0510", flags: []}, // "Liepard"
	"0511": {ico: "0511", flags: []}, // "Pansage"
	"0512": {ico: "0512", flags: []}, // "Simisage"
	"0513": {ico: "0513", flags: []}, // "Pansear"
	"0514": {ico: "0514", flags: []}, // "Simisear"
	"0515": {ico: "0515", flags: []}, // "Panpour"
	"0516": {ico: "0516", flags: []}, // "Simipour"
	"0517": {ico: "0517", flags: []}, // "Munna"
	"0518": {ico: "0518", flags: []}, // "Musharna"
	"0519": {ico: "0519", flags: []}, // "Pidove"
	"0520": {ico: "0520", flags: []}, // "Tranquill"
//	"0521": {ico: "0521", flags: []}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: []}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: []}, // "Unfezan♀"
	"0522": {ico: "0522", flags: []}, // "Blitzle"
	"0523": {ico: "0523", flags: []}, // "Zebstrika"
	"0524": {ico: "0524", flags: []}, // "Roggenrola"
	"0525": {ico: "0525", flags: []}, // "Boldore"
	"0526": {ico: "0526", flags: []}, // "Gigalith"
	"0527": {ico: "0527", flags: []}, // "Woobat"
	"0528": {ico: "0528", flags: []}, // "Swoobat"
	"0529": {ico: "0529", flags: []}, // "Drilbur"
	"0530": {ico: "0530", flags: []}, // "Excadrill"
	"0531": {ico: "0531", flags: []}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: []}, // "Mega Audino"
	"0532": {ico: "0532", flags: []}, // "Timburr"
	"0533": {ico: "0533", flags: []}, // "Gurdurr"
	"0534": {ico: "0534", flags: []}, // "Conkeldurr"
	"0535": {ico: "0535", flags: []}, // "Tympole"
	"0536": {ico: "0536", flags: []}, // "Palpitoad"
	"0537": {ico: "0537", flags: []}, // "Seismitoad"
	"0538": {ico: "0538", flags: []}, // "Throh" // male only
	"0539": {ico: "0539", flags: []}, // "Sawk" // male only
	"0540": {ico: "0540", flags: []}, // "Sewaddle"
	"0541": {ico: "0541", flags: []}, // "Swadloon"
	"0542": {ico: "0542", flags: []}, // "Leavanny"
	"0543": {ico: "0543", flags: []}, // "Venipede"
	"0544": {ico: "0544", flags: []}, // "Whirlipede"
	"0545": {ico: "0545", flags: []}, // "Scolipede"
	"0546": {ico: "0546", flags: []}, // "Cottonee"
	"0547": {ico: "0547", flags: []}, // "Whimsicott"
	"0548": {ico: "0548", flags: []}, // "Petilil" // female only
	"0549": {ico: "0549", flags: []}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: []}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: []}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: []}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: []}, // "Sandile"
	"0552": {ico: "0552", flags: []}, // "Krokorok"
	"0553": {ico: "0553", flags: []}, // "Krookodile"
	"0554": {ico: "0554", flags: []}, // "Darumaka"
//	"0555": {ico: "0555", flags: []}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: []}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: []}, // "Darmanitan Zen Mode"
	"0554-galar": {ico: "0554-galar", flags: []}, // "Galarian Darumaka"
//	"0555-galar": {ico: "0555-galar", flags: []}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: []}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: []}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: []}, // "Maractus"
	"0557": {ico: "0557", flags: []}, // "Dwebble"
	"0558": {ico: "0558", flags: []}, // "Crustle"
	"0559": {ico: "0559", flags: []}, // "Scraggy"
	"0560": {ico: "0560", flags: []}, // "Scrafty"
	"0561": {ico: "0561", flags: []}, // "Sigilyph"
	"0562": {ico: "0562", flags: []}, // "Yamask"
	"0563": {ico: "0563", flags: []}, // "Cofagrigus"
	"0562-galar": {ico: "0562-galar", flags: []}, // "Galarian Yamask"
	"0867": {ico: "0867", flags: []}, // "Runerigus"
	"0568": {ico: "0568", flags: []}, // "Trubbish"
	"0569": {ico: "0569", flags: []}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: []}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: []}, // "Zorua"
	"0571": {ico: "0571", flags: []}, // "Zoroark"
	"0572": {ico: "0572", flags: []}, // "Minccino"
	"0573": {ico: "0573", flags: []}, // "Cinccino"
	"0574": {ico: "0574", flags: []}, // "Gothita"
	"0575": {ico: "0575", flags: []}, // "Gothorita"
	"0576": {ico: "0576", flags: []}, // "Gothitelle"
	"0577": {ico: "0577", flags: []}, // "Solosis"
	"0578": {ico: "0578", flags: []}, // "Duosion"
	"0579": {ico: "0579", flags: []}, // "Reuniclus"
	"0580": {ico: "0580", flags: []}, // "Ducklett"
	"0581": {ico: "0581", flags: []}, // "Swanna"
	"0582": {ico: "0582", flags: []}, // "Vanillite"
	"0583": {ico: "0583", flags: []}, // "Vanillish"
	"0584": {ico: "0584", flags: []}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: []}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: []}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: []}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: []}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: []}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: []}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: []}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: []}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: []}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: []}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: []}, // "Emolga"
	"0588": {ico: "0588", flags: []}, // "Karrablast"
	"0589": {ico: "0589", flags: []}, // "Escavalier"
	"0616": {ico: "0616", flags: []}, // "Shelmet"
	"0617": {ico: "0617", flags: []}, // "Accelgor"
	"0590": {ico: "0590", flags: []}, // "Foongus"
	"0591": {ico: "0591", flags: []}, // "Amoonguss"
//	"0592": {ico: "0592", flags: []}, // "Frillish"
//	"0593": {ico: "0593", flags: []}, // "Jellicent"
	"0592-m": {ico: "0592-m", flags: []}, // "Frillish♂"
	"0593-m": {ico: "0593-m", flags: []}, // "Jellicent♂"
	"0592-f": {ico: "0592-f", flags: []}, // "Frillish♀"
	"0593-f": {ico: "0593-f", flags: []}, // "Jellicent♀"
	"0594": {ico: "0594", flags: []}, // "Alomomola"
	"0595": {ico: "0595", flags: []}, // "Joltik"
	"0596": {ico: "0596", flags: []}, // "Galvantula"
	"0597": {ico: "0597", flags: []}, // "Ferroseed"
	"0598": {ico: "0598", flags: []}, // "Ferrothorn"
	"0599": {ico: "0599", flags: []}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: []}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: []}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: []}, // "Tynamo"
	"0603": {ico: "0603", flags: []}, // "Eelektrik"
	"0604": {ico: "0604", flags: []}, // "Eelektross"
	"0605": {ico: "0605", flags: []}, // "Elgyem"
	"0606": {ico: "0606", flags: []}, // "Beheeyem"
	"0607": {ico: "0607", flags: []}, // "Litwick"
	"0608": {ico: "0608", flags: []}, // "Lampent"
	"0609": {ico: "0609", flags: []}, // "Chandelure"
	"0610": {ico: "0610", flags: []}, // "Axew"
	"0611": {ico: "0611", flags: []}, // "Fraxure"
	"0612": {ico: "0612", flags: []}, // "Haxorus"
	"0613": {ico: "0613", flags: []}, // "Cubchoo"
	"0614": {ico: "0614", flags: []}, // "Beartic"
	"0615": {ico: "0615", flags: []}, // "Cryogonal" // uknown gender
	"0618": {ico: "0618", flags: []}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: []}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: []}, // "Mienfoo"
	"0620": {ico: "0620", flags: []}, // "Mienshao"
	"0621": {ico: "0621", flags: []}, // "Druddigon"
	"0622": {ico: "0622", flags: []}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: []}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: []}, // "Pawniard"
	"0625": {ico: "0625", flags: []}, // "Bisharp"
	"0626": {ico: "0626", flags: []}, // "Bouffalant"
	"0627": {ico: "0627", flags: []}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: []}, // "Braviary" // male only
	"0629": {ico: "0629", flags: []}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: []}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: []}, // "Heatmor"
	"0632": {ico: "0632", flags: []}, // "Durant"
	"0633": {ico: "0633", flags: []}, // "Deino"
	"0634": {ico: "0634", flags: []}, // "Zweilous"
	"0635": {ico: "0635", flags: []}, // "Hydreigon"
	"0636": {ico: "0636", flags: []}, // "Larvesta"
	"0637": {ico: "0637", flags: []}, // "Volcarona"
	"0638": {ico: "0638", flags: []}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: []}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: []}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: []}, // "Tornadus" // male only
//	"0642": {ico: "0642", flags: []}, // "Thundurus" // male only
//	"0645": {ico: "0645", flags: []}, // "Landorus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: []}, // "Incarnate Forme Tornadus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: []}, // "Incarnate Forme Thundurus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: []}, // "Incarnate Forme Landorus" // male only
	"0641-therian": {ico: "0641-therian", flags: []}, // "Therian Forme Tornadus" // male only
	"0642-therian": {ico: "0642-therian", flags: []}, // "Therian Forme Thundurus" // male only
	"0645-therian": {ico: "0645-therian", flags: []}, // "Therian Forme Landorus" // male only
	"0643": {ico: "0643", flags: []}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: []}, // "Zekrom" // uknown gender
	"0646": {ico: "0646", flags: []}, // "Kyurem" // uknown gender
//	"0646-white": {ico: "0646-white", flags: []}, // "White Kyurem" // uknown gender
//	"0646-black": {ico: "0646-black", flags: []}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: []}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: []}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: []}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: []}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: []}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: []}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: []}, // "Genesect" // uknown gender
//	"0649-douse": {ico: "0649-douse", flags: []}, // "Douse Drive Genesect" // uknown gender
//	"0649-shock": {ico: "0649-shock", flags: []}, // "Shock Drive Genesect" // uknown gender
//	"0649-burn": {ico: "0649-burn", flags: []}, // "Burn Drive Genesect" // uknown gender
//	"0649-chill": {ico: "0649-chill", flags: []}, // "Chill Drive Genesect" // uknown gender
	"0650": {ico: "0650", flags: []}, // "Chespin"
	"0651": {ico: "0651", flags: []}, // "Quilladin"
	"0652": {ico: "0652", flags: []}, // "Chesnaught"
	"0653": {ico: "0653", flags: []}, // "Fennekin"
	"0654": {ico: "0654", flags: []}, // "Braixen"
	"0655": {ico: "0655", flags: []}, // "Delphox"
	"0656": {ico: "0656", flags: []}, // "Froakie"
	"0657": {ico: "0657", flags: []}, // "Frogadier"
	"0658": {ico: "0658", flags: []}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: []}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: []}, // "Bunnelby"
	"0660": {ico: "0660", flags: []}, // "Diggersby"
	"0661": {ico: "0661", flags: []}, // "Fletchling"
	"0662": {ico: "0662", flags: []}, // "Fletchinder"
	"0663": {ico: "0663", flags: []}, // "Talonflame"
	"0664": {ico: "0664", flags: []}, // "Scatterbug"
	"0665": {ico: "0665", flags: []}, // "Spewpa"
//	"0666": {ico: "0666", flags: []}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: []}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: []}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: []}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: []}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: []}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: []}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: []}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: []}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: []}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: []}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: []}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: []}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: []}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: []}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: []}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: []}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: []}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: []}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: []}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: []}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: []}, // "Litleo"
//	"0668": {ico: "0668", flags: []}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: []}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: []}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: []}, // "Flabébé" // female only
//	"0670": {ico: "0670", flags: []}, // "Floette" // female only
//	"0671": {ico: "0671", flags: []}, // "Florges" // female only
	"0669-red": {ico: "0669-red", flags: []}, // "Red Flower Flabébé" // female only
	"0670-red": {ico: "0670-red", flags: []}, // "Red Flower Floette" // female only
	"0671-red": {ico: "0671-red", flags: []}, // "Red Flower Florges" // female only
	"0669-yellow": {ico: "0669-yellow", flags: []}, // "Yellow Flower Flabébé" // female only
	"0670-yellow": {ico: "0670-yellow", flags: []}, // "Yellow Flower Floette" // female only
	"0671-yellow": {ico: "0671-yellow", flags: []}, // "Yellow Flower Florges" // female only
	"0669-orange": {ico: "0669-orange", flags: []}, // "Orange Flower Flabébé" // female only
	"0670-orange": {ico: "0670-orange", flags: []}, // "Orange Flower Floette" // female only
	"0671-orange": {ico: "0671-orange", flags: []}, // "Orange Flower Florges" // female only
	"0669-blue": {ico: "0669-blue", flags: []}, // "Blue Flower Flabébé" // female only
	"0670-blue": {ico: "0670-blue", flags: []}, // "Blue Flower Floette" // female only
	"0671-blue": {ico: "0671-blue", flags: []}, // "Blue Flower Florges" // female only
	"0669-white": {ico: "0669-white", flags: []}, // "White Flower Flabébé" // female only
	"0670-white": {ico: "0670-white", flags: []}, // "White Flower Floette" // female only
	"0671-white": {ico: "0671-white", flags: []}, // "White Flower Florges" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: []}, // "Eternal Flower Floette" // female only
	"0672": {ico: "0672", flags: []}, // "Skiddo"
	"0673": {ico: "0673", flags: []}, // "Gogoat"
	"0674": {ico: "0674", flags: []}, // "Pancham"
	"0675": {ico: "0675", flags: []}, // "Pangoro"
	"0676": {ico: "0676", flags: []}, // "Furfrou"
//	"0676-heart": {ico: "0676-heart", flags: []}, // "Heart Trim Furfrou"
//	"0676-star": {ico: "0676-star", flags: []}, // "Star Trim Furfrou"
//	"0676-diamond": {ico: "0676-diamond", flags: []}, // "Diamond Trim Furfrou"
//	"0676-debutante": {ico: "0676-debutante", flags: []}, // "Debutante Trim Furfrou"
//	"0676-matron": {ico: "0676-matron", flags: []}, // "Matron Trim Furfrou"
//	"0676-dandy": {ico: "0676-dandy", flags: []}, // "Dandy Trim Furfrou"
//	"0676-le-reine": {ico: "0676-le-reine", flags: []}, // "Le Reine Trim Furfrou"
//	"0676-kabuki": {ico: "0676-kabuki", flags: []}, // "Kabuki Trim Furfrou"
//	"0676-pharaoh": {ico: "0676-pharaoh", flags: []}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: []}, // "Espurr"
//	"0678": {ico: "0678", flags: []}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: []}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: []}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: []}, // "Honedge"
	"0680": {ico: "0680", flags: []}, // "Doublade"
//	"0681": {ico: "0681", flags: []}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: []}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: []}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: []}, // "Spritzee"
	"0683": {ico: "0683", flags: []}, // "Aromatisse"
	"0684": {ico: "0684", flags: []}, // "Swirlix"
	"0685": {ico: "0685", flags: []}, // "Slurpuff"
	"0686": {ico: "0686", flags: []}, // "Inkay"
	"0687": {ico: "0687", flags: []}, // "Malamar"
	"0688": {ico: "0688", flags: []}, // "Binacle"
	"0689": {ico: "0689", flags: []}, // "Barbaracle"
	"0690": {ico: "0690", flags: []}, // "Skrelp"
	"0691": {ico: "0691", flags: []}, // "Dragalge"
	"0692": {ico: "0692", flags: []}, // "Clauncher"
	"0693": {ico: "0693", flags: []}, // "Clawitzer"
	"0694": {ico: "0694", flags: []}, // "Helioptile"
	"0695": {ico: "0695", flags: []}, // "Heliolisk"
	"0701": {ico: "0701", flags: []}, // "Hawlucha"
	"0702": {ico: "0702", flags: []}, // "Dedenne"
	"0703": {ico: "0703", flags: []}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: []}, // "Goomy"
	"0705": {ico: "0705", flags: []}, // "Sliggoo"
	"0706": {ico: "0706", flags: []}, // "Goodra"
	"0707": {ico: "0707", flags: []}, // "Klefki"
	"0708": {ico: "0708", flags: []}, // "Phantump"
	"0709": {ico: "0709", flags: []}, // "Trevenant"
//	"0710": {ico: "0710", flags: []}, // "Pumpkaboo"
//	"0711": {ico: "0711", flags: []}, // "Gourgeist"
	"0710-average": {ico: "0710-average", flags: []}, // "Average Size Pumpkaboo"
	"0711-average": {ico: "0711-average", flags: []}, // "Average Size Gourgeist"
	"0710-small": {ico: "0710-small", flags: []}, // "Small Size Pumpkaboo"
	"0711-small": {ico: "0711-small", flags: []}, // "Small Size Gourgeist"
	"0710-large": {ico: "0710-large", flags: []}, // "Large Size Pumpkaboo"
	"0711-large": {ico: "0711-large", flags: []}, // "Large Size Gourgeist"
	"0710-super": {ico: "0710-super", flags: []}, // "Super Size Pumpkaboo"
	"0711-super": {ico: "0711-super", flags: []}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: []}, // "Bergmite"
	"0713": {ico: "0713", flags: []}, // "Avalugg"
	"0714": {ico: "0714", flags: []}, // "Noibat"
	"0715": {ico: "0715", flags: []}, // "Noivern"
//	"0716": {ico: "0716", flags: []}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: []}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: []}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: []}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: []}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: []}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: []}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: []}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: []}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: []}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: []}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: []}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: []}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: []}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: []}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: []}, // "Volcanion" // uknown gender
	"0722": {ico: "0722", flags: []}, // "Rowlet"
	"0723": {ico: "0723", flags: []}, // "Dartrix"
	"0724": {ico: "0724", flags: []}, // "Decidueye"
	"0725": {ico: "0725", flags: []}, // "Litten"
	"0726": {ico: "0726", flags: []}, // "Torracat"
	"0727": {ico: "0727", flags: []}, // "Incineroar"
	"0728": {ico: "0728", flags: []}, // "Popplio"
	"0729": {ico: "0729", flags: []}, // "Brionne"
	"0730": {ico: "0730", flags: []}, // "Primarina"
	"0731": {ico: "0731", flags: []}, // "Pikipek"
	"0732": {ico: "0732", flags: []}, // "Trumbeak"
	"0733": {ico: "0733", flags: []}, // "Toucannon"
	"0734": {ico: "0734", flags: []}, // "Yungoos"
	"0735": {ico: "0735", flags: []}, // "Gumshoos"
	"0736": {ico: "0736", flags: []}, // "Grubbin"
	"0737": {ico: "0737", flags: []}, // "Charjabug"
	"0738": {ico: "0738", flags: []}, // "Vikavolt"
	"0739": {ico: "0739", flags: []}, // "Crabrawler"
	"0740": {ico: "0740", flags: []}, // "Crabominable"
//	"0741": {ico: "0741", flags: []}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: []}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: []}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: []}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: []}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: []}, // "Cutiefly"
	"0743": {ico: "0743", flags: []}, // "Ribombee"
	"0744": {ico: "0744", flags: []}, // "Rockruff"
//	"0745": {ico: "0745", flags: []}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: []}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: []}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: []}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: []}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: []}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: []}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: []}, // "Mareanie"
	"0748": {ico: "0748", flags: []}, // "Toxapex"
	"0749": {ico: "0749", flags: []}, // "Mudbray"
	"0750": {ico: "0750", flags: []}, // "Mudsdale"
	"0751": {ico: "0751", flags: []}, // "Dewpider"
	"0752": {ico: "0752", flags: []}, // "Araquanid"
	"0753": {ico: "0753", flags: []}, // "Fomantis"
	"0754": {ico: "0754", flags: []}, // "Lurantis"
	"0755": {ico: "0755", flags: []}, // "Morelull"
	"0756": {ico: "0756", flags: []}, // "Shiinotic"
	"0757": {ico: "0757", flags: []}, // "Salandit"
	"0758": {ico: "0758", flags: []}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: []}, // "Stufful"
	"0760": {ico: "0760", flags: []}, // "Bewear"
	"0761": {ico: "0761", flags: []}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: []}, // "Steenee" // female only
	"0763": {ico: "0763", flags: []}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: []}, // "Comfey"
	"0765": {ico: "0765", flags: []}, // "Oranguru"
	"0766": {ico: "0766", flags: []}, // "Passimian"
	"0767": {ico: "0767", flags: []}, // "Wimpod"
	"0768": {ico: "0768", flags: []}, // "Golisopod"
	"0769": {ico: "0769", flags: []}, // "Sandygast"
	"0770": {ico: "0770", flags: []}, // "Palossand"
	"0771": {ico: "0771", flags: []}, // "Pyukumuku"
	"0772": {ico: "0772", flags: []}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: []}, // "Silvally" // uknown gender
//	"0773-fighting": {ico: "0773-fighting", flags: []}, // "Silvally Type: Fighting" // uknown gender
//	"0773-flying": {ico: "0773-flying", flags: []}, // "Silvally Type: Flying" // uknown gender
//	"0773-poison": {ico: "0773-poison", flags: []}, // "Silvally Type: Poison" // uknown gender
//	"0773-ground": {ico: "0773-ground", flags: []}, // "Silvally Type: Ground" // uknown gender
//	"0773-rock": {ico: "0773-rock", flags: []}, // "Silvally Type: Rock" // uknown gender
//	"0773-bug": {ico: "0773-bug", flags: []}, // "Silvally Type: Bug" // uknown gender
//	"0773-ghost": {ico: "0773-ghost", flags: []}, // "Silvally Type: Ghost" // uknown gender
//	"0773-steel": {ico: "0773-steel", flags: []}, // "Silvally Type: Steel" // uknown gender
//	"0773-fire": {ico: "0773-fire", flags: []}, // "Silvally Type: Fire" // uknown gender
//	"0773-water": {ico: "0773-water", flags: []}, // "Silvally Type: Water" // uknown gender
//	"0773-grass": {ico: "0773-grass", flags: []}, // "Silvally Type: Grass" // uknown gender
//	"0773-electric": {ico: "0773-electric", flags: []}, // "Silvally Type: Electric" // uknown gender
//	"0773-psychic": {ico: "0773-psychic", flags: []}, // "Silvally Type: Psychic" // uknown gender
//	"0773-ice": {ico: "0773-ice", flags: []}, // "Silvally Type: Ice" // uknown gender
//	"0773-dragon": {ico: "0773-dragon", flags: []}, // "Silvally Type: Dragon" // uknown gender
//	"0773-dark": {ico: "0773-dark", flags: []}, // "Silvally Type: Dark" // uknown gender
//	"0773-fairy": {ico: "0773-fairy", flags: []}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: []}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: []}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: []}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: []}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: []}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: []}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: []}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: []}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: []}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: []}, // "Komala"
	"0776": {ico: "0776", flags: []}, // "Turtonator"
	"0777": {ico: "0777", flags: []}, // "Togedemaru"
//	"0778": {ico: "0778", flags: []}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: []}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: []}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: []}, // "Bruxish"
	"0780": {ico: "0780", flags: []}, // "Drampa"
	"0781": {ico: "0781", flags: []}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: []}, // "Jangmo-o"
	"0783": {ico: "0783", flags: []}, // "Hakamo-o"
	"0784": {ico: "0784", flags: []}, // "Kommo-o"
	"0785": {ico: "0785", flags: []}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: []}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: []}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: []}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: []}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: []}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: []}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: []}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: []}, // "Lunala", // uknown gender
//	"0792-full-moon": {ico: "0792-full-moon", flags: []}, // "Full Monn Lunala", // uknown gender
	"0800": {ico: "0800", flags: []}, // "Necrozma" // uknown gender
//	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: []}, // "Dusk Mane Necrozma" // uknown gender
//	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: []}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: []}, // "Ultra Necrozma" // uknown gender
	"0793": {ico: "0793", flags: []}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: []}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: []}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: []}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: []}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: []}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: []}, // "Guzzlord" // uknown gender
	"0801": {ico: "0801", flags: []}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: []}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: []}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: []}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: []}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: []}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: []}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: []}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: []}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: []}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: []}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: []}, // "Gigantamax Melmetal" // uknown gender
	"0810": {ico: "0810", flags: []}, // "Grookey"
	"0811": {ico: "0811", flags: []}, // "Thwackey"
	"0812": {ico: "0812", flags: []}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: []}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: []}, // "Scorbunny"
	"0814": {ico: "0814", flags: []}, // "Raboot"
	"0815": {ico: "0815", flags: []}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: []}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: []}, // "Sobble"
	"0817": {ico: "0817", flags: []}, // "Drizzile"
	"0818": {ico: "0818", flags: []}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: []}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: []}, // "Skwovet"
	"0820": {ico: "0820", flags: []}, // "Greedent"
	"0821": {ico: "0821", flags: []}, // "Rookidee"
	"0822": {ico: "0822", flags: []}, // "Corvisquire"
	"0823": {ico: "0823", flags: []}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: []}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: []}, // "Blipbug"
	"0825": {ico: "0825", flags: []}, // "Dottler"
	"0826": {ico: "0826", flags: []}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: []}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: []}, // "Nickit"
	"0828": {ico: "0828", flags: []}, // "Thievul"
	"0829": {ico: "0829", flags: []}, // "Gossifleur"
	"0830": {ico: "0830", flags: []}, // "Eldegoss"
	"0831": {ico: "0831", flags: []}, // "Wooloo"
	"0832": {ico: "0832", flags: []}, // "Dubwool"
	"0833": {ico: "0833", flags: []}, // "Chewtle"
	"0834": {ico: "0834", flags: []}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: []}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: []}, // "Yamper"
	"0836": {ico: "0836", flags: []}, // "Boltund"
	"0837": {ico: "0837", flags: []}, // "Rolycoly"
	"0838": {ico: "0838", flags: []}, // "Carkol"
	"0839": {ico: "0839", flags: []}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: []}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: []}, // "Applin"
	"0841": {ico: "0841", flags: []}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: []}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: []}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: []}, // "Silicobra"
	"0844": {ico: "0844", flags: []}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: []}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: []}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: []}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: []}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: []}, // "Arrokuda"
	"0847": {ico: "0847", flags: []}, // "Barraskewda"
	"0848": {ico: "0848", flags: []}, // "Toxel"
//	"0849": {ico: "0849", flags: []}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: []}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: []}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: []}, // "Sizzlipede"
	"0851": {ico: "0851", flags: []}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: []}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: []}, // "Clobbopus"
	"0853": {ico: "0853", flags: []}, // "Grapploct"
//	"0854": {ico: "0854", flags: []}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854", flags: []}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854", flags: []}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: []}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855", flags: []}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855", flags: []}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: []}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: []}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: []}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: []}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: []}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: []}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: []}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: []}, // "Gigantamax Grimmsnarl" // male only
	"0868": {ico: "0868", flags: []}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: []}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: []}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: []}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: []}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: []}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: []}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: []}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: []}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: []}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: []}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: []}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: []}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: []}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: []}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: []}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: []}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: []}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: []}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: []}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: []}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: []}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: []}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: []}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: []}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: []}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: []}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: []}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: []}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: []}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: []}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: []}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: []}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: []}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: []}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: []}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: []}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: []}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: []}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: []}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: []}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: []}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: []}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: []}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: []}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: []}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: []}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: []}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: []}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: []}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: []}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: []}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: []}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: []}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: []}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: []}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: []}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: []}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: []}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: []}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: []}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: []}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: []}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: []}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: []}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: []}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: []}, // "Pincurchin"
	"0872": {ico: "0872", flags: []}, // "Snom"
	"0873": {ico: "0873", flags: []}, // "Frosmoth"
	"0874": {ico: "0874", flags: []}, // "Stonjourner"
//	"0875": {ico: "0875", flags: []}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: []}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: []}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: []}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: []}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: []}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: []}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: []}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: []}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: []}, // "Cufant"
	"0879": {ico: "0879", flags: []}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: []}, // "Gigantamax Copperajah"
	"0884": {ico: "0884", flags: []}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: []}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: []}, // "Dreepy"
	"0886": {ico: "0886", flags: []}, // "Drakloak"
	"0887": {ico: "0887", flags: []}, // "Dragapult"
//	"0888": {ico: "0888", flags: []}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: []}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: []}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: []}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: []}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: []}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: []}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: []}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: []}, // "Kubfu"
//	"0892": {ico: "0892", flags: []}, // "Urshifu"
	"0892-single": {ico: "0892-single", flags: []}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: []}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: []}, // "Rapid Strike Style Urshifu"
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: []}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: []}, // "Zarude"
	"0893-dada": {ico: "0893-dada", flags: []}, // "Dada Zarude" // unknown gender
	"0896": {ico: "0896", flags: []}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: []}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: []}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: []}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: []}, // "Shadow Rider Calyrex" // uknown gender
}

const _Regdex_nHome	=
{
//	==============
//	 Generation 1
//	==============
	"0001": {ico: "0001", flags: []}, // "Bulbasaur"
	"0002": {ico: "0002", flags: []}, // "Ivysaur"
//	"0003": {ico: "0003", flags: []}, // "Venusaur"
	"0003-m": {ico: "0003-m", flags: []}, // "Venusaur♂"
	"0003-f": {ico: "0003-f", flags: []}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: []}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: []}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: []}, // "Charmander"
	"0005": {ico: "0005", flags: []}, // "Charmeleon"
	"0006": {ico: "0006", flags: []}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: []}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: []}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: []}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: []}, // "Squirtle"
	"0008": {ico: "0008", flags: []}, // "Wartortle"
	"0009": {ico: "0009", flags: []}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: []}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: []}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: []}, // "Caterpie"
	"0011": {ico: "0011", flags: []}, // "Metapod"
//	"0012": {ico: "0012", flags: []}, // "Butterfree"
	"0012-m": {ico: "0012-m", flags: []}, // "Butterfree♂"
	"0012-f": {ico: "0012-f", flags: []}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: []}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: []}, // "Weedle"
	"0014": {ico: "0014", flags: []}, // "Kakuna"
	"0015": {ico: "0015", flags: []}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: []}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: []}, // "Pidgey"
	"0017": {ico: "0017", flags: []}, // "Pidgeotto"
	"0018": {ico: "0018", flags: []}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: []}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: []}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: []}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: []}, // "Rattata♀"
	"0019-alola": {ico: "0019-alola", flags: []}, // "Alolan Rattata"
//	"0020": {ico: "0020", flags: []}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: []}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: []}, // "Raticate♀"
	"0020-alola": {ico: "0020-alola", flags: []}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: []}, // "Spearow"
	"0022": {ico: "0022", flags: []}, // "Fearow"
	"0023": {ico: "0023", flags: []}, // "Ekans"
	"0024": {ico: "0024", flags: []}, // "Arbok"
//	"0025": {ico: "0025", flags: []}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: []}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: []}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: []}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: []}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: []}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: []}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: []}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: []}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: []}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: []}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: []}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: []}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: []}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: []}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: []}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: []}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: []}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: []}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: []}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: []}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: []}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: []}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: []}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: []}, // "Sandshrew"
	"0027-alola": {ico: "0027-alola", flags: []}, // "Alolan Sandshrew"
	"0028": {ico: "0028", flags: []}, // "Sandslash"
	"0028-alola": {ico: "0028-alola", flags: []}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: []}, // "Nidoran"
	"0029-f": {ico: "0029-f", flags: []}, // "Nidoran♀"
	"0030": {ico: "0030", flags: []}, // "Nidorina"
	"0031": {ico: "0031", flags: []}, // "Nidoqueen"
//	"0032": {ico: "0032", flags: []}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: []}, // "Nidoran♂"
	"0033": {ico: "0033", flags: []}, // "Nidorino"
	"0034": {ico: "0034", flags: []}, // "Nidoking"
	"0035": {ico: "0035", flags: []}, // "Clefairy"
	"0036": {ico: "0036", flags: []}, // "Clefable"
	"0037": {ico: "0037", flags: []}, // "Vulpix"
	"0037-alola": {ico: "0037-alola", flags: []}, // "Alolan Vulpix"
	"0038": {ico: "0038", flags: []}, // "Ninetales"
	"0038-alola": {ico: "0038-alola", flags: []}, // "Alolan Ninetales"
	"0039": {ico: "0039", flags: []}, // "Jigglypuff"
	"0040": {ico: "0040", flags: []}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: []}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: []}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: []}, // "Zubat♀"
//	"0042": {ico: "0042", flags: []}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: []}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: []}, // "Golbat♀"
	"0043": {ico: "0043", flags: []}, // "Oddish"
//	"0044": {ico: "0044", flags: []}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: []}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: []}, // "Gloom♀"
//	"0045": {ico: "0045", flags: []}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: []}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: []}, // "Vileplume♀"
	"0046": {ico: "0046", flags: []}, // "Paras"
	"0047": {ico: "0047", flags: []}, // "Parasect"
	"0048": {ico: "0048", flags: []}, // "Venonat"
	"0049": {ico: "0049", flags: []}, // "Venomoth"
	"0050": {ico: "0050", flags: []}, // "Diglett"
	"0050-alola": {ico: "0050-alola", flags: []}, // "Alolan Diglett"
	"0051": {ico: "0051", flags: []}, // "Dugtrio"
	"0051-alola": {ico: "0051-alola", flags: []}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: []}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: []}, // "Gigantamax Meowth"
	"0052-alola": {ico: "0052-alola", flags: []}, // "Alolan Meowth"
	"0052-galar": {ico: "0052-galar", flags: []}, // "Galarian Meowth"
	"0053": {ico: "0053", flags: []}, // "Persian"
	"0053-alola": {ico: "0053-alola", flags: []}, // "Alolan Persian"
	"0054": {ico: "0054", flags: []}, // "Psyduck"
	"0055": {ico: "0055", flags: []}, // "Golduck"
	"0056": {ico: "0056", flags: []}, // "Mankey"
	"0057": {ico: "0057", flags: []}, // "Primeape"
	"0058": {ico: "0058", flags: []}, // "Growlithe"
	"0059": {ico: "0059", flags: []}, // "Arcanine"
	"0060": {ico: "0060", flags: []}, // "Poliwag"
	"0061": {ico: "0061", flags: []}, // "Poliwhirl"
	"0062": {ico: "0062", flags: []}, // "Poliwrath"
	"0063": {ico: "0063", flags: []}, // "Abra"
//	"0064": {ico: "0064", flags: []}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: []}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: []}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: []}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: []}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: []}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: []}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: []}, // "Machop"
	"0067": {ico: "0067", flags: []}, // "Machoke"
	"0068": {ico: "0068", flags: []}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: []}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: []}, // "Bellsprout"
	"0070": {ico: "0070", flags: []}, // "Weepinbell"
	"0071": {ico: "0071", flags: []}, // "Victreebel"
	"0072": {ico: "0072", flags: []}, // "Tentacool"
	"0073": {ico: "0073", flags: []}, // "Tentacruel"
	"0074": {ico: "0074", flags: []}, // "Geodude"
	"0074-alola": {ico: "0074-alola", flags: []}, // "Alolan Geodude"
	"0075": {ico: "0075", flags: []}, // "Graveler"
	"0075-alola": {ico: "0075-alola", flags: []}, // "Alolan Graveler"
	"0076": {ico: "0076", flags: []}, // "Golem"
	"0076-alola": {ico: "0076-alola", flags: []}, // "Alolan Golem"
	"0077": {ico: "0077", flags: []}, // "Ponyta"
	"0077-galar": {ico: "0077-galar", flags: []}, // "Galarian Ponyta"
	"0078": {ico: "0078", flags: []}, // "Rapidash"
	"0078-galar": {ico: "0078-galar", flags: []}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: []}, // "Slowpoke"
	"0079-galar": {ico: "0079-galar", flags: []}, // "Galarian Slowpoke"
	"0080": {ico: "0080", flags: []}, // "Slowbro"
	"0080-galar": {ico: "0080-galar", flags: []}, // "Galarian Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: []}, // "Mega Slowbro"
	"0081": {ico: "0081", flags: []}, // "Magnemite"
	"0082": {ico: "0082", flags: []}, // "Magneton"
	"0083": {ico: "0083", flags: []}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: []}, // "Galarian Farfetch'd"
//	"0084": {ico: "0084", flags: []}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: []}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: []}, // "Doduo♀"
//	"0085": {ico: "0085", flags: []}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: []}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: []}, // "Dodrio♀"
	"0086": {ico: "0086", flags: []}, // "Seel"
	"0087": {ico: "0087", flags: []}, // "Dewgong"
	"0088": {ico: "0088", flags: []}, // "Grimer"
	"0088-alola": {ico: "0088-alola", flags: []}, // "Alolan Grimer"
	"0089": {ico: "0089", flags: []}, // "Muk"
	"0089-alola": {ico: "0089-alola", flags: []}, // "Alolan Muk"
	"0090": {ico: "0090", flags: []}, // "Shellder"
	"0091": {ico: "0091", flags: []}, // "Cloyster"
	"0092": {ico: "0092", flags: []}, // "Gastly"
	"0093": {ico: "0093", flags: []}, // "Haunter"
	"0094": {ico: "0094", flags: []}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: []}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: []}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: []}, // "Onix"
	"0096": {ico: "0096", flags: []}, // "Drowzee"
//	"0097": {ico: "0097", flags: []}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: []}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: []}, // "Hypno♀"
	"0098": {ico: "0098", flags: []}, // "Krabby"
	"0099": {ico: "0099", flags: []}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: []}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: []}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: []}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: []}, // "Exeggcute"
	"0103": {ico: "0103", flags: []}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: []}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: []}, // "Cubone"
	"0105": {ico: "0105", flags: []}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: []}, // "Alolan Marowak"
	"0106": {ico: "0106", flags: []}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: []}, // "Hitmonchan" // male only
	"0108": {ico: "0108", flags: []}, // "Lickitung"
	"0109": {ico: "0109", flags: []}, // "Koffing"
	"0110": {ico: "0110", flags: []}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: []}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: []}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: []}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: []}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: []}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: []}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: []}, // "Rhydon♀"
	"0113": {ico: "0113", flags: []}, // "Chansey" // female only
	"0114": {ico: "0114", flags: []}, // "Tangela"
	"0115": {ico: "0115", flags: []}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: []}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: []}, // "Horsea"
	"0117": {ico: "0117", flags: []}, // "Seadra"
//	"0118": {ico: "0118", flags: []}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: []}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: []}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: []}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: []}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: []}, // "Seaking♀"
		"0120": {ico: "0120", flags: []}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: []}, // "Starmie" // uknown gender
	"0122": {ico: "0122", flags: []}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: []}, // "Galarian Mr. Mime"
//	"0123": {ico: "0123", flags: []}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: []}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: []}, // "Scyther♀"
	"0124": {ico: "0124", flags: []}, // "Jynx" // female only
	"0125": {ico: "0125", flags: []}, // "Electabuzz"
	"0126": {ico: "0126", flags: []}, // "Magmar"
	"0127": {ico: "0127", flags: []}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: []}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: []}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: []}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: []}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: []}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: []}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: []}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: []}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: []}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: []}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: []}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: []}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: []}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: []}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: []}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: []}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: []}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: []}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: []}, // "Vaporeon"
	"0135": {ico: "0135", flags: []}, // "Jolteon"
	"0136": {ico: "0136", flags: []}, // "Flareon"
	"0137": {ico: "0137", flags: []}, // "Porygon" // uknown gender
	"0138": {ico: "0138", flags: []}, // "Omanyte"
	"0139": {ico: "0139", flags: []}, // "Omastar"
	"0140": {ico: "0140", flags: []}, // "Kabuto"
	"0141": {ico: "0141", flags: []}, // "Kabutops"
	"0142": {ico: "0142", flags: []}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: []}, // "Mega Aerodactyl"
	"0143": {ico: "0143", flags: []}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: []}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: []}, // "Articuno" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: []}, // "Galarian Articuno" // uknown gender
	"0145": {ico: "0145", flags: []}, // "Zapdos" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: []}, // "Galarian Zapdos" // uknown gender
	"0146": {ico: "0146", flags: []}, // "Moltres" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: []}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: []}, // "Dratini"
	"0148": {ico: "0148", flags: []}, // "Dragonair"
	"0149": {ico: "0149", flags: []}, // "Dragonite"
	"0150": {ico: "0150", flags: []}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: []}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: []}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: []}, // "Mew" // uknown gender
//	==============
//	 Generation 2
//	==============
	"0152": {ico: "0152", flags: []}, // "Chikorita"
	"0153": {ico: "0153", flags: []}, // "Bayleef"
//	"0154": {ico: "0154", flags: []}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: []}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: []}, // "Meganium♀"
	"0155": {ico: "0155", flags: []}, // "Cyndaquil"
	"0156": {ico: "0156", flags: []}, // "Quilava"
	"0157": {ico: "0157", flags: []}, // "Typhlosion"
	"0158": {ico: "0158", flags: []}, // "Totodile"
	"0159": {ico: "0159", flags: []}, // "Croconaw"
	"0160": {ico: "0160", flags: []}, // "Feraligatr"
	"0161": {ico: "0161", flags: []}, // "Sentret"
	"0162": {ico: "0162", flags: []}, // "Furret"
	"0163": {ico: "0163", flags: []}, // "Hoothoot"
	"0164": {ico: "0164", flags: []}, // "Noctowl"
//	"0165": {ico: "0165", flags: []}, // "Ledyba"
	"0165-m": {ico: "0165-m", flags: []}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: []}, // "Ledyba♀"
//	"0166": {ico: "0166", flags: []}, // "Ledian"
	"0166-m": {ico: "0166-m", flags: []}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: []}, // "Ledian♀"
	"0167": {ico: "0167", flags: []}, // "Spinarak"
	"0168": {ico: "0168", flags: []}, // "Ariados"
	"0169": {ico: "0169", flags: []}, // "Crobat"
	"0170": {ico: "0170", flags: []}, // "Chinchou"
	"0171": {ico: "0171", flags: []}, // "Lanturn"
	"0172": {ico: "0172", flags: []}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: []}, // "Spiky-eared Pichu" // female only
	"0173": {ico: "0173", flags: []}, // "Cleffa"
	"0174": {ico: "0174", flags: []}, // "Igglybuff"
	"0175": {ico: "0175", flags: []}, // "Togepi"
	"0176": {ico: "0176", flags: []}, // "Togetic"
	"0177": {ico: "0177", flags: []}, // "Natu"
//	"0178": {ico: "0178", flags: []}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: []}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: []}, // "Xatu♀"
	"0179": {ico: "0179", flags: []}, // "Mareep"
	"0180": {ico: "0180", flags: []}, // "Flaaffy"
	"0181": {ico: "0181", flags: []}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: []}, // "Mega Ampharos"
	"0182": {ico: "0182", flags: []}, // "Bellossom"
	"0183": {ico: "0183", flags: []}, // "Marill"
	"0184": {ico: "0184", flags: []}, // "Azumarill"
//	"0185": {ico: "0185", flags: []}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: []}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: []}, // "Sudowoodo♀"
//	"0186": {ico: "0186", flags: []}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: []}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: []}, // "Politoed♀"
	"0187": {ico: "0187", flags: []}, // "Hoppip"
	"0188": {ico: "0188", flags: []}, // "Skiploom"
	"0189": {ico: "0189", flags: []}, // "Jumpluff"
//	"0190": {ico: "0190", flags: []}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: []}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: []}, // "Aipom♀"
	"0191": {ico: "0191", flags: []}, // "Sunkern"
	"0192": {ico: "0192", flags: []}, // "Sunflora"
	"0193": {ico: "0193", flags: []}, // "Yanma"
//	"0194": {ico: "0194", flags: []}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: []}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: []}, // "Wooper♀"
//	"0195": {ico: "0195", flags: []}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: []}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: []}, // "Quagsire♀"
	"0196": {ico: "0196", flags: []}, // "Espeon"
	"0197": {ico: "0197", flags: []}, // "Umbreon"
//	"0198": {ico: "0198", flags: []}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: []}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: []}, // "Murkrow♀"
	"0199": {ico: "0199", flags: []}, // "Slowking"
	"0199-galar": {ico: "0199-galar", flags: []}, // "Galarian Slowking"
	"0200": {ico: "0200", flags: []}, // "Misdreavus"
//	"0201": {ico: "0201", flags: []}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: []}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: []}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: []}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: []}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: []}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: []}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: []}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: []}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: []}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: []}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: []}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: []}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: []}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: []}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: []}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: []}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: []}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: []}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: []}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: []}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: []}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: []}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: []}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: []}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: []}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: []}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: []}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: []}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: []}, // "Unown ?????" // uknown gender
//	"0202": {ico: "0202", flags: []}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: []}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: []}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: []}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: []}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: []}, // "Girafarig♀"
	"0204": {ico: "0204", flags: []}, // "Pineco"
	"0205": {ico: "0205", flags: []}, // "Forretress"
	"0206": {ico: "0206", flags: []}, // "Dunsparce"
//	"0207": {ico: "0207", flags: []}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: []}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: []}, // "Gligar♀"
//	"0208": {ico: "0208", flags: []}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: []}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: []}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: []}, // "Mega Steelix"
	"0209": {ico: "0209", flags: []}, // "Snubbull"
	"0210": {ico: "0210", flags: []}, // "Granbull"
	"0211": {ico: "0211", flags: []}, // "Qwilfish"
//	"0212": {ico: "0212", flags: []}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: []}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: []}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: []}, // "Mega Scizor"
	"0213": {ico: "0213", flags: []}, // "Shuckle"
//	"0214": {ico: "0214", flags: []}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: []}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: []}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: []}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: []}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: []}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: []}, // "Sneasel♀"
	"0216": {ico: "0216", flags: []}, // "Teddiursa"
//	"0217": {ico: "0217", flags: []}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: []}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: []}, // "Ursaring♀"
	"0218": {ico: "0218", flags: []}, // "Slugma"
	"0219": {ico: "0219", flags: []}, // "Magcargo"
	"0220": {ico: "0220", flags: []}, // "Swinub"
//	"0221": {ico: "0221", flags: []}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: []}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: []}, // "Piloswine♀"
	"0222": {ico: "0222", flags: []}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: []}, // "Galarian Corsola"
	"0223": {ico: "0223", flags: []}, // "Remoraid"
//	"0224": {ico: "0224", flags: []}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: []}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: []}, // "Octillery♀"
	"0225": {ico: "0225", flags: []}, // "Delibird"
	"0226": {ico: "0226", flags: []}, // "Mantine"
	"0227": {ico: "0227", flags: []}, // "Skarmory"
	"0228": {ico: "0228", flags: []}, // "Houndour"
//	"0229": {ico: "0229", flags: []}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: []}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: []}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: []}, // "Mega Houndoom"
	"0230": {ico: "0230", flags: []}, // "Kingdra"
	"0231": {ico: "0231", flags: []}, // "Phanpy"
//	"0232": {ico: "0232", flags: []}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: []}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: []}, // "Donphan♀"
	"0233": {ico: "0233", flags: []}, // "Porygon2" // uknown gender
	"0234": {ico: "0234", flags: []}, // "Stantler"
	"0235": {ico: "0235", flags: []}, // "Smeargle"
	"0236": {ico: "0236", flags: []}, // "Tyrogue" // male only
	"0237": {ico: "0237", flags: []}, // "Hitmontop" // male only
	"0238": {ico: "0238", flags: []}, // "Smoochum" // female only
	"0239": {ico: "0239", flags: []}, // "Elekid"
	"0240": {ico: "0240", flags: []}, // "Magby"
	"0241": {ico: "0241", flags: []}, // "Miltank" // female only
	"0242": {ico: "0242", flags: []}, // "Blissey" // female only
	"0243": {ico: "0243", flags: []}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: []}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: []}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: []}, // "Larvitar"
	"0247": {ico: "0247", flags: []}, // "Pupitar"
	"0248": {ico: "0248", flags: []}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: []}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: []}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: []}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: []}, // "Celebi" // uknown gender
//	==============
//	 Generation 3
//	==============
	"0252": {ico: "0252", flags: []}, // "Treecko"
	"0253": {ico: "0253", flags: []}, // "Grovyle"
	"0254": {ico: "0254", flags: []}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: []}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: []}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: []}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: []}, // "Torchic♀"
//	"0256": {ico: "0256", flags: []}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: []}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: []}, // "Combusken♀"
//	"0257": {ico: "0257", flags: []}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: []}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: []}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: []}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: []}, // "Mudkip"
	"0259": {ico: "0259", flags: []}, // "Marshtomp"
	"0260": {ico: "0260", flags: []}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: []}, // "Mega Swampert"
	"0261": {ico: "0261", flags: []}, // "Poochyena"
	"0262": {ico: "0262", flags: []}, // "Mightyena"
	"0263": {ico: "0263", flags: []}, // "Zigzagoon"
	"0263-galar": {ico: "0263-galar", flags: []}, // "Galarian Zigzagoon"
	"0264": {ico: "0264", flags: []}, // "Linoone"
	"0264-galar": {ico: "0264-galar", flags: []}, // "Galarian Linoone"
	"0265": {ico: "0265", flags: []}, // "Wurmple"
	"0266": {ico: "0266", flags: []}, // "Silcoon"
//	"0267": {ico: "0267", flags: []}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: []}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: []}, // "Beautifly♀"
	"0268": {ico: "0268", flags: []}, // "Cascoon"
//	"0269": {ico: "0269", flags: []}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: []}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: []}, // "Dustox♀"
	"0270": {ico: "0270", flags: []}, // "Lotad"
	"0271": {ico: "0271", flags: []}, // "Lombre"
//	"0272": {ico: "0272", flags: []}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: []}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: []}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: []}, // "Seedot"
//	"0274": {ico: "0274", flags: []}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: []}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: []}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: []}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: []}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: []}, // "Shiftry♀"
	"0276": {ico: "0276", flags: []}, // "Taillow"
	"0277": {ico: "0277", flags: []}, // "Swellow"
	"0278": {ico: "0278", flags: []}, // "Wingull"
	"0279": {ico: "0279", flags: []}, // "Pelipper"
	"0280": {ico: "0280", flags: []}, // "Ralts"
	"0281": {ico: "0281", flags: []}, // "Kirlia"
	"0282": {ico: "0282", flags: []}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: []}, // "Mega Gardevoir"
	"0283": {ico: "0283", flags: []}, // "Surskit"
	"0284": {ico: "0284", flags: []}, // "Masquerain"
	"0285": {ico: "0285", flags: []}, // "Shroomish"
	"0286": {ico: "0286", flags: []}, // "Breloom"
	"0287": {ico: "0287", flags: []}, // "Slakoth"
	"0288": {ico: "0288", flags: []}, // "Vigoroth"
	"0289": {ico: "0289", flags: []}, // "Slaking"
	"0290": {ico: "0290", flags: []}, // "Nincada"
	"0291": {ico: "0291", flags: []}, // "Ninjask"
	"0292": {ico: "0292", flags: []}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: []}, // "Whismur"
	"0294": {ico: "0294", flags: []}, // "Loudred"
	"0295": {ico: "0295", flags: []}, // "Exploud"
	"0296": {ico: "0296", flags: []}, // "Makuhita"
	"0297": {ico: "0297", flags: []}, // "Hariyama"
	"0298": {ico: "0298", flags: []}, // "Azurill"
	"0299": {ico: "0299", flags: []}, // "Nosepass"
	"0300": {ico: "0300", flags: []}, // "Skitty"
	"0301": {ico: "0301", flags: []}, // "Delcatty"
	"0302": {ico: "0302", flags: []}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: []}, // "Mega Sableye"
	"0303": {ico: "0303", flags: []}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: []}, // "Mega Mawile"
	"0304": {ico: "0304", flags: []}, // "Aron"
	"0305": {ico: "0305", flags: []}, // "Lairon"
	"0306": {ico: "0306", flags: []}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: []}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: []}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: []}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: []}, // "Meditite♀"
//	"0308": {ico: "0308", flags: []}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: []}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: []}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: []}, // "Mega Medicham"
	"0309": {ico: "0309", flags: []}, // "Electrike"
	"0310": {ico: "0310", flags: []}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: []}, // "Mega Manectric"
	"0311": {ico: "0311", flags: []}, // "Plusle"
	"0312": {ico: "0312", flags: []}, // "Minun"
	"0313": {ico: "0313", flags: []}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: []}, // "Illumise" // female only
//	"0315": {ico: "0315", flags: []}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: []}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: []}, // "Roselia♀"
//	"0316": {ico: "0316", flags: []}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: []}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: []}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: []}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: []}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: []}, // "Swalot♀"
	"0318": {ico: "0318", flags: []}, // "Carvanha"
	"0319": {ico: "0319", flags: []}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: []}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: []}, // "Wailmer"
	"0321": {ico: "0321", flags: []}, // "Wailord"
//	"0322": {ico: "0322", flags: []}, // "Numel"
	"0322-m": {ico: "0322-m", flags: []}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: []}, // "Numel♀"
//	"0323": {ico: "0323", flags: []}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: []}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: []}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: []}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: []}, // "Torkoal"
	"0325": {ico: "0325", flags: []}, // "Spoink"
	"0326": {ico: "0326", flags: []}, // "Grumpig"
	"0327": {ico: "0327", flags: []}, // "Spinda"
	"0328": {ico: "0328", flags: []}, // "Trapinch"
	"0329": {ico: "0329", flags: []}, // "Vibrava"
	"0330": {ico: "0330", flags: []}, // "Flygon"
	"0331": {ico: "0331", flags: []}, // "Cacnea"
//	"0332": {ico: "0332", flags: []}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: []}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: []}, // "Cacturne♀"
	"0333": {ico: "0333", flags: []}, // "Swablu"
	"0334": {ico: "0334", flags: []}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: []}, // "Mega Altaria"
	"0335": {ico: "0335", flags: []}, // "Zangoose"
	"0336": {ico: "0336", flags: []}, // "Seviper"
	"0337": {ico: "0337", flags: []}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: []}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: []}, // "Barboach"
	"0340": {ico: "0340", flags: []}, // "Whiscash"
	"0341": {ico: "0341", flags: []}, // "Corphish"
	"0342": {ico: "0342", flags: []}, // "Crawdaunt"
	"0343": {ico: "0343", flags: []}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: []}, // "Claydol" // uknown gender
	"0345": {ico: "0345", flags: []}, // "Lileep"
	"0346": {ico: "0346", flags: []}, // "Cradily"
	"0347": {ico: "0347", flags: []}, // "Anorith"
	"0348": {ico: "0348", flags: []}, // "Armaldo"
	"0349": {ico: "0349", flags: []}, // "Feebas"
//	"0350": {ico: "0350", flags: []}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: []}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: []}, // "Milotic♀"
	"0351": {ico: "0351", flags: []}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: []}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: []}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: []}, // "Snowy Castform"
	"0352": {ico: "0352", flags: []}, // "Kecleon"
	"0353": {ico: "0353", flags: []}, // "Shuppet"
	"0354": {ico: "0354", flags: []}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: []}, // "Mega Banette"
	"0355": {ico: "0355", flags: []}, // "Duskull"
	"0356": {ico: "0356", flags: []}, // "Dusclops"
	"0357": {ico: "0357", flags: []}, // "Tropius"
	"0358": {ico: "0358", flags: []}, // "Chimecho"
	"0359": {ico: "0359", flags: []}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: []}, // "Mega Absol"
	"0360": {ico: "0360", flags: []}, // "Wynaut"
	"0361": {ico: "0361", flags: []}, // "Snorunt"
	"0362": {ico: "0362", flags: []}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: []}, // "Mega Glalie"
	"0363": {ico: "0363", flags: []}, // "Spheal"
	"0364": {ico: "0364", flags: []}, // "Sealeo"
	"0365": {ico: "0365", flags: []}, // "Walrein"
	"0366": {ico: "0366", flags: []}, // "Clamperl"
	"0367": {ico: "0367", flags: []}, // "Huntail"
	"0368": {ico: "0368", flags: []}, // "Gorebyss"
//	"0369": {ico: "0369", flags: []}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: []}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: []}, // "Relicanth♀"
	"0370": {ico: "0370", flags: []}, // "Luvdisc"
	"0371": {ico: "0371", flags: []}, // "Bagon"
	"0372": {ico: "0372", flags: []}, // "Shelgon"
	"0373": {ico: "0373", flags: []}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: []}, // "Mega Salamence"
	"0374": {ico: "0374", flags: []}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: []}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: []}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: []}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: []}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: []}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: []}, // "Registeel" // uknown gender
	"0380": {ico: "0380", flags: []}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: []}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: []}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: []}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: []}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: []}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: []}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: []}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: []}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: []}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: []}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: []}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: []}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: []}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: []}, // "Speed Deoxys" // uknown gender
//	==============
//	 Generation 4
//	==============
	"0387": {ico: "0387", flags: []}, // "Turtwig"
	"0388": {ico: "0388", flags: []}, // "Grotle"
	"0389": {ico: "0389", flags: []}, // "Torterra"
	"0390": {ico: "0390", flags: []}, // "Chimchar"
	"0391": {ico: "0391", flags: []}, // "Monferno"
	"0392": {ico: "0392", flags: []}, // "Infernape"
	"0393": {ico: "0393", flags: []}, // "Piplup"
	"0394": {ico: "0394", flags: []}, // "Prinplup"
	"0395": {ico: "0395", flags: []}, // "Empoleon"
//	"0396": {ico: "0396", flags: []}, // "Starly"
	"0396-m": {ico: "0396-m", flags: []}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: []}, // "Starly♀"
//	"0397": {ico: "0397", flags: []}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: []}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: []}, // "Staravia♀"
//	"0398": {ico: "0398", flags: []}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: []}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: []}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: []}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: []}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: []}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: []}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: []}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: []}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: []}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: []}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: []}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: []}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: []}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: []}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: []}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: []}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: []}, // "Shinx♀"
//	"0404": {ico: "0404", flags: []}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: []}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: []}, // "Luxio♀"
//	"0405": {ico: "0405", flags: []}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: []}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: []}, // "Luxray♀"
//	"0406": {ico: "0406", flags: []}, // "Budew"
//	"0407": {ico: "0407", flags: []}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: []}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: []}, // "Roserade♀"
	"0408": {ico: "0408", flags: []}, // "Cranidos"
	"0409": {ico: "0409", flags: []}, // "Rampardos"
	"0410": {ico: "0410", flags: []}, // "Shieldon"
	"0411": {ico: "0411", flags: []}, // "Bastiodon"
//	"0412": {ico: "0412", flags: []}, // "Burmy"
	"0412-plant": {ico: "0412-plant", flags: []}, // "Burmy Plant Cloak"
	"0412-sandy": {ico: "0412-sandy", flags: []}, // "Burmy Sandy Cloak"
	"0412-trash": {ico: "0412-trash", flags: []}, // "Burmy Trash Cloak"
//	"0413": {ico: "0413", flags: []}, // "Wormadam" // female only
	"0413-plant": {ico: "0413-plant", flags: []}, // "Wormadam Plant Cloak" // female only
	"0413-sandy": {ico: "0413-sandy", flags: []}, // "Wormadam Sandy Cloak" // female only
	"0413-trash": {ico: "0413-trash", flags: []}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: []}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: []}, // "Combee"
	"0415-m": {ico: "0415-m", flags: []}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: []}, // "Combee♀"
	"0416": {ico: "0416", flags: []}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: []}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: []}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: []}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: []}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: []}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: []}, // "Buizel♀"
//	"0419": {ico: "0419", flags: []}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: []}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: []}, // "Floatzel♀"
	"0420": {ico: "0420", flags: []}, // "Cherubi"
//	"0421": {ico: "0421", flags: []}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: []}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: []}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: []}, // "Shellos"
	"0422-west": {ico: "0422-west", flags: []}, // "West Sea Shellos"
	"0422-east": {ico: "0422-east", flags: []}, // "East Sea Shellos"
//	"0423": {ico: "0423", flags: []}, // "Gastrodon"
	"0423-west": {ico: "0423-west", flags: []}, // "West Sea Gastrodon"
	"0423-east": {ico: "0423-east", flags: []}, // "East Sea Gastrodon"
//	"0424": {ico: "0424", flags: []}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: []}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: []}, // "Ambipom♀"
	"0425": {ico: "0425", flags: []}, // "Drifloon"
	"0426": {ico: "0426", flags: []}, // "Drifblim"
	"0427": {ico: "0427", flags: []}, // "Buneary"
	"0428": {ico: "0428", flags: []}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: []}, // "Mega Lopunny"
	"0429": {ico: "0429", flags: []}, // "Mismagius"
	"0430": {ico: "0430", flags: []}, // "Honchkrow"
	"0431": {ico: "0431", flags: []}, // "Glameow"
	"0432": {ico: "0432", flags: []}, // "Purugly"
	"0433": {ico: "0433", flags: []}, // "Chingling"
	"0434": {ico: "0434", flags: []}, // "Stunky"
	"0435": {ico: "0435", flags: []}, // "Skuntank"
	"0436": {ico: "0436", flags: []}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: []}, // "Bronzong" // uknown gender
	"0438": {ico: "0438", flags: []}, // "Bonsly"
	"0439": {ico: "0439", flags: []}, // "Mime Jr."
	"0440": {ico: "0440", flags: []}, // "Happiny" // female only
	"0441": {ico: "0441", flags: []}, // "Chatot"
	"0442": {ico: "0442", flags: []}, // "Spiritomb"
//	"0443": {ico: "0443", flags: []}, // "Gible"
	"0443-m": {ico: "0443-m", flags: []}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: []}, // "Gible♀"
//	"0444": {ico: "0444", flags: []}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: []}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: []}, // "Gabite♀"
//	"0445": {ico: "0445", flags: []}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: []}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: []}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: []}, // "Mega Garchomp"
	"0446": {ico: "0446", flags: []}, // "Munchlax"
	"0447": {ico: "0447", flags: []}, // "Riolu"
	"0448": {ico: "0448", flags: []}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: []}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: []}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: []}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: []}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: []}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: []}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: []}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: []}, // "Skorupi"
	"0452": {ico: "0452", flags: []}, // "Drapion"
//	"0453": {ico: "0453", flags: []}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: []}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: []}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: []}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: []}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: []}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: []}, // "Carnivine"
//	"0456": {ico: "0456", flags: []}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: []}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: []}, // "Finneon♀"
//	"0457": {ico: "0457", flags: []}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: []}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: []}, // "Lumineon♀"
	"0458": {ico: "0458", flags: []}, // "Mantyke"
//	"0459": {ico: "0459", flags: []}, // "Snover"
	"0459-m": {ico: "0459-m", flags: []}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: []}, // "Snover♀"
//	"0460": {ico: "0460", flags: []}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: []}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: []}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: []}, // "Mega Abomasnow"
//	"0461": {ico: "0461", flags: []}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: []}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: []}, // "Weavile♀"
	"0462": {ico: "0462", flags: []}, // "Magnezone" // uknown gender
	"0463": {ico: "0463", flags: []}, // "Lickilicky"
//	"0464": {ico: "0464", flags: []}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: []}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: []}, // "Rhyperior♀"
//	"0465": {ico: "0465", flags: []}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: []}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: []}, // "Tangrowth♀"
	"0466": {ico: "0466", flags: []}, // "Electivire"
	"0467": {ico: "0467", flags: []}, // "Magmortar"
	"0468": {ico: "0468", flags: []}, // "Togekiss"
	"0469": {ico: "0469", flags: []}, // "Yanmega"
	"0470": {ico: "0470", flags: []}, // "Leafeon"
	"0471": {ico: "0471", flags: []}, // "Glaceon"
	"0472": {ico: "0472", flags: []}, // "Gliscor"
//	"0473": {ico: "0473", flags: []}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: []}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: []}, // "Mamoswine♀"
	"0474": {ico: "0474", flags: []}, // "Porygon-Z" // uknown gender
	"0475": {ico: "0475", flags: []}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: []}, // "Mega Gallade" // male only
	"0476": {ico: "0476", flags: []}, // "Probopass"
	"0477": {ico: "0477", flags: []}, // "Dusknoir"
	"0478": {ico: "0478", flags: []}, // "Froslass" // female only
	"0479": {ico: "0479", flags: []}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: []}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: []}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: []}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: []}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: []}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: []}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: []}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: []}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: []}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: []}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: []}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: []}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: []}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: []}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: []}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: []}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: []}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: []}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: []}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: []}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: []}, // "Heatran"
	"0486": {ico: "0486", flags: []}, // "Regigigas" // uknown gender
//	"0487": {ico: "0487", flags: []}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: []}, // "Giratina Altered Forme" // uknown gender
	"0487-origin": {ico: "0487-origin", flags: []}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: []}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: []}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: []}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: []}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: []}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: []}, // "Shaymin Land Forme" // uknown gender
	"0492-sky": {ico: "0492-sky", flags: []}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: []}, // "Arceus" // uknown gender
	"0493-fighting": {ico: "0493-fighting", flags: []}, // "Fighting Arceus" // uknown gender
	"0493-flying": {ico: "0493-flying", flags: []}, // "Flying Arceus" // uknown gender
	"0493-poison": {ico: "0493-poison", flags: []}, // "Poison Arceus" // uknown gender
	"0493-ground": {ico: "0493-ground", flags: []}, // "Ground Arceus" // uknown gender
	"0493-rock": {ico: "0493-rock", flags: []}, // "Rock Arceus" // uknown gender
	"0493-bug": {ico: "0493-bug", flags: []}, // "Bug Arceus" // uknown gender
	"0493-ghost": {ico: "0493-ghost", flags: []}, // "Ghost Arceus" // uknown gender
	"0493-steel": {ico: "0493-steel", flags: []}, // "Steel Arceus" // uknown gender
	"0493-fire": {ico: "0493-fire", flags: []}, // "Fire Arceus" // uknown gender
	"0493-water": {ico: "0493-water", flags: []}, // "Water Arceus" // uknown gender
	"0493-grass": {ico: "0493-grass", flags: []}, // "Grass Arceus" // uknown gender
	"0493-electric": {ico: "0493-electric", flags: []}, // "Electric Arceus" // uknown gender
	"0493-psychic": {ico: "0493-psychic", flags: []}, // "Psychic Arceus" // uknown gender
	"0493-ice": {ico: "0493-ice", flags: []}, // "Ice Arceus" // uknown gender
	"0493-dragon": {ico: "0493-dragon", flags: []}, // "Dragon Arceus" // uknown gender
	"0493-dark": {ico: "0493-dark", flags: []}, // "Dark Arceus" // uknown gender
	"0493-fairy": {ico: "0493-fairy", flags: []}, // "Fairy Arceus" // uknown gender
//	==============
//	 Generation 5
//	==============
	"0494": {ico: "0494", flags: []}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: []}, // "Snivy"
	"0496": {ico: "0496", flags: []}, // "Servine"
	"0497": {ico: "0497", flags: []}, // "Serperior"
	"0498": {ico: "0498", flags: []}, // "Tepig"
	"0499": {ico: "0499", flags: []}, // "Pignite"
	"0500": {ico: "0500", flags: []}, // "Emboar"
	"0501": {ico: "0501", flags: []}, // "Oshawott"
	"0502": {ico: "0502", flags: []}, // "Dewott"
	"0503": {ico: "0503", flags: []}, // "Samurott"
	"0504": {ico: "0504", flags: []}, // "Patrat"
	"0505": {ico: "0505", flags: []}, // "Watchog"
	"0506": {ico: "0506", flags: []}, // "Lillipup"
	"0507": {ico: "0507", flags: []}, // "Herdier"
	"0508": {ico: "0508", flags: []}, // "Stoutland"
	"0509": {ico: "0509", flags: []}, // "Purrloin"
	"0510": {ico: "0510", flags: []}, // "Liepard"
	"0511": {ico: "0511", flags: []}, // "Pansage"
	"0512": {ico: "0512", flags: []}, // "Simisage"
	"0513": {ico: "0513", flags: []}, // "Pansear"
	"0514": {ico: "0514", flags: []}, // "Simisear"
	"0515": {ico: "0515", flags: []}, // "Panpour"
	"0516": {ico: "0516", flags: []}, // "Simipour"
	"0517": {ico: "0517", flags: []}, // "Munna"
	"0518": {ico: "0518", flags: []}, // "Musharna"
	"0519": {ico: "0519", flags: []}, // "Pidove"
	"0520": {ico: "0520", flags: []}, // "Tranquill"
//	"0521": {ico: "0521", flags: []}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: []}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: []}, // "Unfezan♀"
	"0522": {ico: "0522", flags: []}, // "Blitzle"
	"0523": {ico: "0523", flags: []}, // "Zebstrika"
	"0524": {ico: "0524", flags: []}, // "Roggenrola"
	"0525": {ico: "0525", flags: []}, // "Boldore"
	"0526": {ico: "0526", flags: []}, // "Gigalith"
	"0527": {ico: "0527", flags: []}, // "Woobat"
	"0528": {ico: "0528", flags: []}, // "Swoobat"
	"0529": {ico: "0529", flags: []}, // "Drilbur"
	"0530": {ico: "0530", flags: []}, // "Excadrill"
	"0531": {ico: "0531", flags: []}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: []}, // "Mega Audino"
	"0532": {ico: "0532", flags: []}, // "Timburr"
	"0533": {ico: "0533", flags: []}, // "Gurdurr"
	"0534": {ico: "0534", flags: []}, // "Conkeldurr"
	"0535": {ico: "0535", flags: []}, // "Tympole"
	"0536": {ico: "0536", flags: []}, // "Palpitoad"
	"0537": {ico: "0537", flags: []}, // "Seismitoad"
	"0538": {ico: "0538", flags: []}, // "Throh" // male only
	"0539": {ico: "0539", flags: []}, // "Sawk" // male only
	"0540": {ico: "0540", flags: []}, // "Sewaddle"
	"0541": {ico: "0541", flags: []}, // "Swadloon"
	"0542": {ico: "0542", flags: []}, // "Leavanny"
	"0543": {ico: "0543", flags: []}, // "Venipede"
	"0544": {ico: "0544", flags: []}, // "Whirlipede"
	"0545": {ico: "0545", flags: []}, // "Scolipede"
	"0546": {ico: "0546", flags: []}, // "Cottonee"
	"0547": {ico: "0547", flags: []}, // "Whimsicott"
	"0548": {ico: "0548", flags: []}, // "Petilil" // female only
	"0549": {ico: "0549", flags: []}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: []}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: []}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: []}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: []}, // "Sandile"
	"0552": {ico: "0552", flags: []}, // "Krokorok"
	"0553": {ico: "0553", flags: []}, // "Krookodile"
	"0554": {ico: "0554", flags: []}, // "Darumaka"
	"0554-galar": {ico: "0554-galar", flags: []}, // "Galarian Darumaka"
//	"0555": {ico: "0555", flags: []}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: []}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: []}, // "Darmanitan Zen Mode"
//	"0555-galar": {ico: "0555-galar", flags: []}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: []}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: []}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: []}, // "Maractus"
	"0557": {ico: "0557", flags: []}, // "Dwebble"
	"0558": {ico: "0558", flags: []}, // "Crustle"
	"0559": {ico: "0559", flags: []}, // "Scraggy"
	"0560": {ico: "0560", flags: []}, // "Scrafty"
	"0561": {ico: "0561", flags: []}, // "Sigilyph"
	"0562": {ico: "0562", flags: []}, // "Yamask"
	"0562-galar": {ico: "0562-galar", flags: []}, // "Galarian Yamask"
	"0563": {ico: "0563", flags: []}, // "Cofagrigus"
	"0564": {ico: "0564", flags: []}, // "Tirtouga"
	"0565": {ico: "0565", flags: []}, // "Carracosta"
	"0566": {ico: "0566", flags: []}, // "Archen"
	"0567": {ico: "0567", flags: []}, // "Archeops"
	"0568": {ico: "0568", flags: []}, // "Trubbish"
	"0569": {ico: "0569", flags: []}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: []}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: []}, // "Zorua"
	"0571": {ico: "0571", flags: []}, // "Zoroark"
	"0572": {ico: "0572", flags: []}, // "Minccino"
	"0573": {ico: "0573", flags: []}, // "Cinccino"
	"0574": {ico: "0574", flags: []}, // "Gothita"
	"0575": {ico: "0575", flags: []}, // "Gothorita"
	"0576": {ico: "0576", flags: []}, // "Gothitelle"
	"0577": {ico: "0577", flags: []}, // "Solosis"
	"0578": {ico: "0578", flags: []}, // "Duosion"
	"0579": {ico: "0579", flags: []}, // "Reuniclus"
	"0580": {ico: "0580", flags: []}, // "Ducklett"
	"0581": {ico: "0581", flags: []}, // "Swanna"
	"0582": {ico: "0582", flags: []}, // "Vanillite"
	"0583": {ico: "0583", flags: []}, // "Vanillish"
	"0584": {ico: "0584", flags: []}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: []}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: []}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: []}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: []}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: []}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: []}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: []}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: []}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: []}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: []}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: []}, // "Emolga"
	"0588": {ico: "0588", flags: []}, // "Karrablast"
	"0589": {ico: "0589", flags: []}, // "Escavalier"
	"0590": {ico: "0590", flags: []}, // "Foongus"
	"0591": {ico: "0591", flags: []}, // "Amoonguss"
//	"0592": {ico: "0592", flags: []}, // "Frillish"
	"0592-m": {ico: "0592-m", flags: []}, // "Frillish♂"
	"0592-f": {ico: "0592-f", flags: []}, // "Frillish♀"
//	"0593": {ico: "0593", flags: []}, // "Jellicent"
	"0593-m": {ico: "0593-m", flags: []}, // "Jellicent♂"
	"0593-f": {ico: "0593-f", flags: []}, // "Jellicent♀"
	"0594": {ico: "0594", flags: []}, // "Alomomola"
	"0595": {ico: "0595", flags: []}, // "Joltik"
	"0596": {ico: "0596", flags: []}, // "Galvantula"
	"0597": {ico: "0597", flags: []}, // "Ferroseed"
	"0598": {ico: "0598", flags: []}, // "Ferrothorn"
	"0599": {ico: "0599", flags: []}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: []}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: []}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: []}, // "Tynamo"
	"0603": {ico: "0603", flags: []}, // "Eelektrik"
	"0604": {ico: "0604", flags: []}, // "Eelektross"
	"0605": {ico: "0605", flags: []}, // "Elgyem"
	"0606": {ico: "0606", flags: []}, // "Beheeyem"
	"0607": {ico: "0607", flags: []}, // "Litwick"
	"0608": {ico: "0608", flags: []}, // "Lampent"
	"0609": {ico: "0609", flags: []}, // "Chandelure"
	"0610": {ico: "0610", flags: []}, // "Axew"
	"0611": {ico: "0611", flags: []}, // "Fraxure"
	"0612": {ico: "0612", flags: []}, // "Haxorus"
	"0613": {ico: "0613", flags: []}, // "Cubchoo"
	"0614": {ico: "0614", flags: []}, // "Beartic"
	"0615": {ico: "0615", flags: []}, // "Cryogonal" // uknown gender
	"0616": {ico: "0616", flags: []}, // "Shelmet"
	"0617": {ico: "0617", flags: []}, // "Accelgor"
	"0618": {ico: "0618", flags: []}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: []}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: []}, // "Mienfoo"
	"0620": {ico: "0620", flags: []}, // "Mienshao"
	"0621": {ico: "0621", flags: []}, // "Druddigon"
	"0622": {ico: "0622", flags: []}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: []}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: []}, // "Pawniard"
	"0625": {ico: "0625", flags: []}, // "Bisharp"
	"0626": {ico: "0626", flags: []}, // "Bouffalant"
	"0627": {ico: "0627", flags: []}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: []}, // "Braviary" // male only
	"0629": {ico: "0629", flags: []}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: []}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: []}, // "Heatmor"
	"0632": {ico: "0632", flags: []}, // "Durant"
	"0633": {ico: "0633", flags: []}, // "Deino"
	"0634": {ico: "0634", flags: []}, // "Zweilous"
	"0635": {ico: "0635", flags: []}, // "Hydreigon"
	"0636": {ico: "0636", flags: []}, // "Larvesta"
	"0637": {ico: "0637", flags: []}, // "Volcarona"
	"0638": {ico: "0638", flags: []}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: []}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: []}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: []}, // "Tornadus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: []}, // "Incarnate Forme Tornadus" // male only
	"0641-therian": {ico: "0641-therian", flags: []}, // "Therian Forme Tornadus" // male only
//	"0642": {ico: "0642", flags: []}, // "Thundurus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: []}, // "Incarnate Forme Thundurus" // male only
	"0642-therian": {ico: "0642-therian", flags: []}, // "Therian Forme Thundurus" // male only
	"0643": {ico: "0643", flags: []}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: []}, // "Zekrom" // uknown gender
//	"0645": {ico: "0645", flags: []}, // "Landorus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: []}, // "Incarnate Forme Landorus" // male only
	"0645-therian": {ico: "0645-therian", flags: []}, // "Therian Forme Landorus" // male only
	"0646": {ico: "0646", flags: []}, // "Kyurem" // uknown gender
	"0646-white": {ico: "0646-white", flags: []}, // "White Kyurem" // uknown gender
	"0646-black": {ico: "0646-black", flags: []}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: []}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: []}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: []}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: []}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: []}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: []}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: []}, // "Genesect" // uknown gender
	"0649-douse": {ico: "0649-douse", flags: []}, // "Douse Drive Genesect" // uknown gender
	"0649-shock": {ico: "0649-shock", flags: []}, // "Shock Drive Genesect" // uknown gender
	"0649-burn": {ico: "0649-burn", flags: []}, // "Burn Drive Genesect" // uknown gender
	"0649-chill": {ico: "0649-chill", flags: []}, // "Chill Drive Genesect" // uknown gender
//	==============
//	 Generation 6
//	==============
	"0650": {ico: "0650", flags: []}, // "Chespin"
	"0651": {ico: "0651", flags: []}, // "Quilladin"
	"0652": {ico: "0652", flags: []}, // "Chesnaught"
	"0653": {ico: "0653", flags: []}, // "Fennekin"
	"0654": {ico: "0654", flags: []}, // "Braixen"
	"0655": {ico: "0655", flags: []}, // "Delphox"
	"0656": {ico: "0656", flags: []}, // "Froakie"
	"0657": {ico: "0657", flags: []}, // "Frogadier"
	"0658": {ico: "0658", flags: []}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: []}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: []}, // "Bunnelby"
	"0660": {ico: "0660", flags: []}, // "Diggersby"
	"0661": {ico: "0661", flags: []}, // "Fletchling"
	"0662": {ico: "0662", flags: []}, // "Fletchinder"
	"0663": {ico: "0663", flags: []}, // "Talonflame"
	"0664": {ico: "0664", flags: []}, // "Scatterbug"
	"0665": {ico: "0665", flags: []}, // "Spewpa"
//	"0666": {ico: "0666", flags: []}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: []}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: []}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: []}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: []}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: []}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: []}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: []}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: []}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: []}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: []}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: []}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: []}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: []}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: []}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: []}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: []}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: []}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: []}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: []}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: []}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: []}, // "Litleo"
//	"0668": {ico: "0668", flags: []}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: []}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: []}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: []}, // "Flabébé" // female only
	"0669-red": {ico: "0669-red", flags: []}, // "Red Flower Flabébé" // female only
	"0669-yellow": {ico: "0669-yellow", flags: []}, // "Yellow Flower Flabébé" // female only
	"0669-orange": {ico: "0669-orange", flags: []}, // "Orange Flower Flabébé" // female only
	"0669-blue": {ico: "0669-blue", flags: []}, // "Blue Flower Flabébé" // female only
	"0669-white": {ico: "0669-white", flags: []}, // "White Flower Flabébé" // female only
//	"0670": {ico: "0670", flags: []}, // "Floette" // female only
	"0670-red": {ico: "0670-red", flags: []}, // "Red Flower Floette" // female only
	"0670-yellow": {ico: "0670-yellow", flags: []}, // "Yellow Flower Floette" // female only
	"0670-orange": {ico: "0670-orange", flags: []}, // "Orange Flower Floette" // female only
	"0670-blue": {ico: "0670-blue", flags: []}, // "Blue Flower Floette" // female only
	"0670-white": {ico: "0670-white", flags: []}, // "White Flower Floette" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: []}, // "Eternal Flower Floette" // female only
//	"0671": {ico: "0671", flags: []}, // "Florges" // female only
	"0671-red": {ico: "0671-red", flags: []}, // "Red Flower Florges" // female only
	"0671-yellow": {ico: "0671-yellow", flags: []}, // "Yellow Flower Florges" // female only
	"0671-orange": {ico: "0671-orange", flags: []}, // "Orange Flower Florges" // female only
	"0671-blue": {ico: "0671-blue", flags: []}, // "Blue Flower Florges" // female only
	"0671-white": {ico: "0671-white", flags: []}, // "White Flower Florges" // female only
	"0672": {ico: "0672", flags: []}, // "Skiddo"
	"0673": {ico: "0673", flags: []}, // "Gogoat"
	"0674": {ico: "0674", flags: []}, // "Pancham"
	"0675": {ico: "0675", flags: []}, // "Pangoro"
	"0676": {ico: "0676", flags: []}, // "Furfrou"
	"0676-heart": {ico: "0676-heart", flags: []}, // "Heart Trim Furfrou"
	"0676-star": {ico: "0676-star", flags: []}, // "Star Trim Furfrou"
	"0676-diamond": {ico: "0676-diamond", flags: []}, // "Diamond Trim Furfrou"
	"0676-debutante": {ico: "0676-debutante", flags: []}, // "Debutante Trim Furfrou"
	"0676-matron": {ico: "0676-matron", flags: []}, // "Matron Trim Furfrou"
	"0676-dandy": {ico: "0676-dandy", flags: []}, // "Dandy Trim Furfrou"
	"0676-le-reine": {ico: "0676-le-reine", flags: []}, // "Le Reine Trim Furfrou"
	"0676-kabuki": {ico: "0676-kabuki", flags: []}, // "Kabuki Trim Furfrou"
	"0676-pharaoh": {ico: "0676-pharaoh", flags: []}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: []}, // "Espurr"
//	"0678": {ico: "0678", flags: []}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: []}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: []}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: []}, // "Honedge"
	"0680": {ico: "0680", flags: []}, // "Doublade"
//	"0681": {ico: "0681", flags: []}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: []}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: []}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: []}, // "Spritzee"
	"0683": {ico: "0683", flags: []}, // "Aromatisse"
	"0684": {ico: "0684", flags: []}, // "Swirlix"
	"0685": {ico: "0685", flags: []}, // "Slurpuff"
	"0686": {ico: "0686", flags: []}, // "Inkay"
	"0687": {ico: "0687", flags: []}, // "Malamar"
	"0688": {ico: "0688", flags: []}, // "Binacle"
	"0689": {ico: "0689", flags: []}, // "Barbaracle"
	"0690": {ico: "0690", flags: []}, // "Skrelp"
	"0691": {ico: "0691", flags: []}, // "Dragalge"
	"0692": {ico: "0692", flags: []}, // "Clauncher"
	"0693": {ico: "0693", flags: []}, // "Clawitzer"
	"0694": {ico: "0694", flags: []}, // "Helioptile"
	"0695": {ico: "0695", flags: []}, // "Heliolisk"
	"0696": {ico: "0696", flags: []}, // "Tyrunt"
	"0697": {ico: "0697", flags: []}, // "Tyrantrum"
	"0698": {ico: "0698", flags: []}, // "Amaura"
	"0699": {ico: "0699", flags: []}, // "Aurorus"
	"0700": {ico: "0700", flags: []}, // "Sylveon"
	"0701": {ico: "0701", flags: []}, // "Hawlucha"
	"0702": {ico: "0702", flags: []}, // "Dedenne"
	"0703": {ico: "0703", flags: []}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: []}, // "Goomy"
	"0705": {ico: "0705", flags: []}, // "Sliggoo"
	"0706": {ico: "0706", flags: []}, // "Goodra"
	"0707": {ico: "0707", flags: []}, // "Klefki"
	"0708": {ico: "0708", flags: []}, // "Phantump"
	"0709": {ico: "0709", flags: []}, // "Trevenant"
//	"0710": {ico: "0710", flags: []}, // "Pumpkaboo"
	"0710-average": {ico: "0710-average", flags: []}, // "Average Size Pumpkaboo"
	"0710-small": {ico: "0710-small", flags: []}, // "Small Size Pumpkaboo"
	"0710-large": {ico: "0710-large", flags: []}, // "Large Size Pumpkaboo"
	"0710-super": {ico: "0710-super", flags: []}, // "Super Size Pumpkaboo"
//	"0711": {ico: "0711", flags: []}, // "Gourgeist"
	"0711-average": {ico: "0711-average", flags: []}, // "Average Size Gourgeist"
	"0711-small": {ico: "0711-small", flags: []}, // "Small Size Gourgeist"
	"0711-large": {ico: "0711-large", flags: []}, // "Large Size Gourgeist"
	"0711-super": {ico: "0711-super", flags: []}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: []}, // "Bergmite"
	"0713": {ico: "0713", flags: []}, // "Avalugg"
	"0714": {ico: "0714", flags: []}, // "Noibat"
	"0715": {ico: "0715", flags: []}, // "Noivern"
//	"0716": {ico: "0716", flags: []}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: []}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: []}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: []}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: []}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: []}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: []}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: []}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: []}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: []}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: []}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: []}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: []}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: []}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: []}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: []}, // "Volcanion" // uknown gender
//	==============
//	 Generation 7
//	==============
	"0722": {ico: "0722", flags: []}, // "Rowlet"
	"0723": {ico: "0723", flags: []}, // "Dartrix"
	"0724": {ico: "0724", flags: []}, // "Decidueye"
	"0725": {ico: "0725", flags: []}, // "Litten"
	"0726": {ico: "0726", flags: []}, // "Torracat"
	"0727": {ico: "0727", flags: []}, // "Incineroar"
	"0728": {ico: "0728", flags: []}, // "Popplio"
	"0729": {ico: "0729", flags: []}, // "Brionne"
	"0730": {ico: "0730", flags: []}, // "Primarina"
	"0731": {ico: "0731", flags: []}, // "Pikipek"
	"0732": {ico: "0732", flags: []}, // "Trumbeak"
	"0733": {ico: "0733", flags: []}, // "Toucannon"
	"0734": {ico: "0734", flags: []}, // "Yungoos"
	"0735": {ico: "0735", flags: []}, // "Gumshoos"
	"0736": {ico: "0736", flags: []}, // "Grubbin"
	"0737": {ico: "0737", flags: []}, // "Charjabug"
	"0738": {ico: "0738", flags: []}, // "Vikavolt"
	"0739": {ico: "0739", flags: []}, // "Crabrawler"
	"0740": {ico: "0740", flags: []}, // "Crabominable"
//	"0741": {ico: "0741", flags: []}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: []}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: []}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: []}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: []}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: []}, // "Cutiefly"
	"0743": {ico: "0743", flags: []}, // "Ribombee"
	"0744": {ico: "0744", flags: []}, // "Rockruff"
//	"0745": {ico: "0745", flags: []}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: []}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: []}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: []}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: []}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: []}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: []}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: []}, // "Mareanie"
	"0748": {ico: "0748", flags: []}, // "Toxapex"
	"0749": {ico: "0749", flags: []}, // "Mudbray"
	"0750": {ico: "0750", flags: []}, // "Mudsdale"
	"0751": {ico: "0751", flags: []}, // "Dewpider"
	"0752": {ico: "0752", flags: []}, // "Araquanid"
	"0753": {ico: "0753", flags: []}, // "Fomantis"
	"0754": {ico: "0754", flags: []}, // "Lurantis"
	"0755": {ico: "0755", flags: []}, // "Morelull"
	"0756": {ico: "0756", flags: []}, // "Shiinotic"
	"0757": {ico: "0757", flags: []}, // "Salandit"
	"0758": {ico: "0758", flags: []}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: []}, // "Stufful"
	"0760": {ico: "0760", flags: []}, // "Bewear"
	"0761": {ico: "0761", flags: []}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: []}, // "Steenee" // female only
	"0763": {ico: "0763", flags: []}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: []}, // "Comfey"
	"0765": {ico: "0765", flags: []}, // "Oranguru"
	"0766": {ico: "0766", flags: []}, // "Passimian"
	"0767": {ico: "0767", flags: []}, // "Wimpod"
	"0768": {ico: "0768", flags: []}, // "Golisopod"
	"0769": {ico: "0769", flags: []}, // "Sandygast"
	"0770": {ico: "0770", flags: []}, // "Palossand"
	"0771": {ico: "0771", flags: []}, // "Pyukumuku"
	"0772": {ico: "0772", flags: []}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: []}, // "Silvally" // uknown gender
	"0773-fighting": {ico: "0773-fighting", flags: []}, // "Silvally Type: Fighting" // uknown gender
	"0773-flying": {ico: "0773-flying", flags: []}, // "Silvally Type: Flying" // uknown gender
	"0773-poison": {ico: "0773-poison", flags: []}, // "Silvally Type: Poison" // uknown gender
	"0773-ground": {ico: "0773-ground", flags: []}, // "Silvally Type: Ground" // uknown gender
	"0773-rock": {ico: "0773-rock", flags: []}, // "Silvally Type: Rock" // uknown gender
	"0773-bug": {ico: "0773-bug", flags: []}, // "Silvally Type: Bug" // uknown gender
	"0773-ghost": {ico: "0773-ghost", flags: []}, // "Silvally Type: Ghost" // uknown gender
	"0773-steel": {ico: "0773-steel", flags: []}, // "Silvally Type: Steel" // uknown gender
	"0773-fire": {ico: "0773-fire", flags: []}, // "Silvally Type: Fire" // uknown gender
	"0773-water": {ico: "0773-water", flags: []}, // "Silvally Type: Water" // uknown gender
	"0773-grass": {ico: "0773-grass", flags: []}, // "Silvally Type: Grass" // uknown gender
	"0773-electric": {ico: "0773-electric", flags: []}, // "Silvally Type: Electric" // uknown gender
	"0773-psychic": {ico: "0773-psychic", flags: []}, // "Silvally Type: Psychic" // uknown gender
	"0773-ice": {ico: "0773-ice", flags: []}, // "Silvally Type: Ice" // uknown gender
	"0773-dragon": {ico: "0773-dragon", flags: []}, // "Silvally Type: Dragon" // uknown gender
	"0773-dark": {ico: "0773-dark", flags: []}, // "Silvally Type: Dark" // uknown gender
	"0773-fairy": {ico: "0773-fairy", flags: []}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: []}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: []}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: []}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: []}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: []}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: []}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: []}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: []}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: []}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: []}, // "Komala"
	"0776": {ico: "0776", flags: []}, // "Turtonator"
	"0777": {ico: "0777", flags: []}, // "Togedemaru"
//	"0778": {ico: "0778", flags: []}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: []}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: []}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: []}, // "Bruxish"
	"0780": {ico: "0780", flags: []}, // "Drampa"
	"0781": {ico: "0781", flags: []}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: []}, // "Jangmo-o"
	"0783": {ico: "0783", flags: []}, // "Hakamo-o"
	"0784": {ico: "0784", flags: []}, // "Kommo-o"
	"0785": {ico: "0785", flags: []}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: []}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: []}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: []}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: []}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: []}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: []}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: []}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: []}, // "Lunala", // uknown gender
//	"0792-full-moon" // "Full Monn Lunala", // uknown gender
	"0793": {ico: "0793", flags: []}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: []}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: []}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: []}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: []}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: []}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: []}, // "Guzzlord" // uknown gender
	"0800": {ico: "0800", flags: []}, // "Necrozma" // uknown gender
	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: []}, // "Dusk Mane Necrozma" // uknown gender
	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: []}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: []}, // "Ultra Necrozma" // uknown gender
	"0801": {ico: "0801", flags: []}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: []}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: []}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: []}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: []}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: []}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: []}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: []}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: []}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: []}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: []}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: []}, // "Gigantamax Melmetal" // uknown gender
//	==============
//	 Generation 8
//	==============
	"0810": {ico: "0810", flags: []}, // "Grookey"
	"0811": {ico: "0811", flags: []}, // "Thwackey"
	"0812": {ico: "0812", flags: []}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: []}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: []}, // "Scorbunny"
	"0814": {ico: "0814", flags: []}, // "Raboot"
	"0815": {ico: "0815", flags: []}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: []}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: []}, // "Sobble"
	"0817": {ico: "0817", flags: []}, // "Drizzile"
	"0818": {ico: "0818", flags: []}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: []}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: []}, // "Skwovet"
	"0820": {ico: "0820", flags: []}, // "Greedent"
	"0821": {ico: "0821", flags: []}, // "Rookidee"
	"0822": {ico: "0822", flags: []}, // "Corvisquire"
	"0823": {ico: "0823", flags: []}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: []}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: []}, // "Blipbug"
	"0825": {ico: "0825", flags: []}, // "Dottler"
	"0826": {ico: "0826", flags: []}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: []}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: []}, // "Nickit"
	"0828": {ico: "0828", flags: []}, // "Thievul"
	"0829": {ico: "0829", flags: []}, // "Gossifleur"
	"0830": {ico: "0830", flags: []}, // "Eldegoss"
	"0831": {ico: "0831", flags: []}, // "Wooloo"
	"0832": {ico: "0832", flags: []}, // "Dubwool"
	"0833": {ico: "0833", flags: []}, // "Chewtle"
	"0834": {ico: "0834", flags: []}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: []}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: []}, // "Yamper"
	"0836": {ico: "0836", flags: []}, // "Boltund"
	"0837": {ico: "0837", flags: []}, // "Rolycoly"
	"0838": {ico: "0838", flags: []}, // "Carkol"
	"0839": {ico: "0839", flags: []}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: []}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: []}, // "Applin"
	"0841": {ico: "0841", flags: []}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: []}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: []}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: []}, // "Silicobra"
	"0844": {ico: "0844", flags: []}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: []}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: []}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: []}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: []}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: []}, // "Arrokuda"
	"0847": {ico: "0847", flags: []}, // "Barraskewda"
	"0848": {ico: "0848", flags: []}, // "Toxel"
//	"0849": {ico: "0849", flags: []}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: []}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: []}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: []}, // "Sizzlipede"
	"0851": {ico: "0851", flags: []}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: []}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: []}, // "Clobbopus"
	"0853": {ico: "0853", flags: []}, // "Grapploct"
//	"0854": {ico: "0854", flags: []}, // "Sinistea" // uknown gender
	"0854-phony": {ico: "0854", flags: []}, // "Phony Sinistea" // uknown gender
	"0854-authentic": {ico: "0854", flags: []}, // "Authentic Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: []}, // "Polteageist" // uknown gender
	"0855-phony": {ico: "0855", flags: []}, // "Phony Polteageist" // uknown gender
	"0855-authentic": {ico: "0855", flags: []}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: []}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: []}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: []}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: []}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: []}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: []}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: []}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: []}, // "Gigantamax Grimmsnarl" // male only
	"0862": {ico: "0862", flags: []}, // "Obstagoon"
	"0863": {ico: "0863", flags: []}, // "Perrserker"
	"0864": {ico: "0864", flags: []}, // "Cursola"
	"0865": {ico: "0865", flags: []}, // "Sirfetch'd"
	"0866": {ico: "0866", flags: []}, // "Mr. Rime"
	"0867": {ico: "0867", flags: []}, // "Runerigus"
	"0868": {ico: "0868", flags: []}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: []}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: []}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: []}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: []}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: []}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: []}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: []}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: []}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: []}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: []}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: []}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: []}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: []}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: []}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: []}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: []}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: []}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: []}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: []}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: []}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: []}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: []}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: []}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: []}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: []}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: []}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: []}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: []}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: []}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: []}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: []}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: []}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: []}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: []}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: []}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: []}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: []}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: []}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: []}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: []}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: []}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: []}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: []}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: []}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: []}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: []}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: []}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: []}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: []}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: []}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: []}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: []}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: []}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: []}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: []}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: []}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: []}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: []}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: []}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: []}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: []}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: []}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: []}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: []}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: []}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: []}, // "Pincurchin"
	"0872": {ico: "0872", flags: []}, // "Snom"
	"0873": {ico: "0873", flags: []}, // "Frosmoth"
	"0874": {ico: "0874", flags: []}, // "Stonjourner"
//	"0875": {ico: "0875", flags: []}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: []}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: []}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: []}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: []}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: []}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: []}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: []}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: []}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: []}, // "Cufant"
	"0879": {ico: "0879", flags: []}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: []}, // "Gigantamax Copperajah"
	"0880": {ico: "0880", flags: []}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: []}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: []}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: []}, // "Arctovish" // uknown gender
	"0884": {ico: "0884", flags: []}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: []}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: []}, // "Dreepy"
	"0886": {ico: "0886", flags: []}, // "Drakloak"
	"0887": {ico: "0887", flags: []}, // "Dragapult"
//	"0888": {ico: "0888", flags: []}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: []}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: []}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: []}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: []}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: []}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: []}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: []}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: []}, // "Kubfu"
	"0892": {ico: "0892", flags: []}, // "Urshifu"
	"0892-sigle": {ico: "0892-sigle", flags: []}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: []}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: []}, // "Rapid Strike Style Urshifu"2021-04-02
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: []}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: []}, // "Zarude" // unknown gender
	"0893-dada": {ico: "0893-dada", flags: []}, // "Dada Zarude" // unknown gender
	"0894": {ico: "0894", flags: []}, // "Regieleki" // unknown gender
	"0895": {ico: "0895", flags: []}, // "Regidrago" // unknown gender
	"0896": {ico: "0896", flags: []}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: []}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: []}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: []}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: []}, // "Shadow Rider Calyrex" // uknown gender
}

const _Regdex_eHome	=
{
	"0001": {ico: "0001", flags: []}, // "Bulbasaur"
	"0002": {ico: "0002", flags: []}, // "Ivysaur"
//	"0003": {ico: "0003", flags: []}, // "Venusaur"
	"0003-m": {ico: "0003-m", flags: []}, // "Venusaur♂"
	"0003-f": {ico: "0003-f", flags: []}, // "Venusaur♀"
//	"0003-mega": {ico: "0003-mega", flags: []}, // "Mega Venusaur"
	"0003-gmax": {ico: "0003-gmax", flags: []}, // "Gigantamax Venusaur"
	"0004": {ico: "0004", flags: []}, // "Charmander"
	"0005": {ico: "0005", flags: []}, // "Charmeleon"
	"0006": {ico: "0006", flags: []}, // "Charizard"
//	"0006-mega-x": {ico: "0006-mega-x", flags: []}, // "Mega Charizard X"
//	"0006-mega-y": {ico: "0006-mega-y", flags: []}, // "Mega Charizard Y"
	"0006-gmax": {ico: "0006-gmax", flags: []}, // "Gigantamax Charizard"
	"0007": {ico: "0007", flags: []}, // "Squirtle"
	"0008": {ico: "0008", flags: []}, // "Wartortle"
	"0009": {ico: "0009", flags: []}, // "Blastoise"
//	"0009-mega": {ico: "0009-mega", flags: []}, // "Mega Blastoise"
	"0009-gmax": {ico: "0009-gmax", flags: []}, // "Gigantamax Blastoise"
	"0010": {ico: "0010", flags: []}, // "Caterpie"
	"0011": {ico: "0011", flags: []}, // "Metapod"
//	"0012": {ico: "0012", flags: []}, // "Butterfree"
	"0012-m": {ico: "0012-m", flags: []}, // "Butterfree♂"
	"0012-f": {ico: "0012-f", flags: []}, // "Butterfree♀"
	"0012-gmax": {ico: "0012-gmax", flags: []}, // "Gigantamax Butterfree"
	"0013": {ico: "0013", flags: []}, // "Weedle"
	"0014": {ico: "0014", flags: []}, // "Kakuna"
	"0015": {ico: "0015", flags: []}, // "Beedrill"
//	"0015-mega": {ico: "0015-mega", flags: []}, // "Mega Beedrill"
	"0016": {ico: "0016", flags: []}, // "Pidgey"
	"0017": {ico: "0017", flags: []}, // "Pidgeotto"
	"0018": {ico: "0018", flags: []}, // "Pidgeot"
//	"0018-mega": {ico: "0018-mega", flags: []}, // "Mega Pidgeot"
//	"0019": {ico: "0019", flags: []}, // "Rattata"
	"0019-m": {ico: "0019-m", flags: []}, // "Rattata♂"
	"0019-f": {ico: "0019-f", flags: []}, // "Rattata♀"
//	"0020": {ico: "0020", flags: []}, // "Raticate"
	"0020-m": {ico: "0020-m", flags: []}, // "Raticate♂"
	"0020-f": {ico: "0020-f", flags: []}, // "Raticate♀"
	"0019-alola": {ico: "0019-alola", flags: []}, // "Alolan Rattata"
	"0020-alola": {ico: "0020-alola", flags: []}, // "Alolan Raticate"
	"0021": {ico: "0021", flags: []}, // "Spearow"
	"0022": {ico: "0022", flags: []}, // "Fearow"
	"0023": {ico: "0023", flags: []}, // "Ekans"
	"0024": {ico: "0024", flags: []}, // "Arbok"
	"0172": {ico: "0172", flags: []}, // "Pichu"
//	"0172-spiky-eared": {ico: "0172-spiky-eared", flags: []}, // "Spiky-eared Pichu" // female only
//	"0025": {ico: "0025", flags: []}, // "Pikachu"
	"0025-m": {ico: "0025-m", flags: []}, // "Pikachu♂"
	"0025-f": {ico: "0025-f", flags: []}, // "Pikachu♀"
//	"0025-cosplay": {ico: "0025-cosplay", flags: []}, // "Cosplay Pikachu" // female only
//	"0025-rock-star": {ico: "0025-rock-star", flags: []}, // "Pikachu Rock Star" // female only
//	"0025-belle": {ico: "0025-belle", flags: []}, // "Pikachu Belle" // female only
//	"0025-popstar": {ico: "0025-popstar", flags: []}, // "Pikachu Pop Star" // female only
//	"0025-phd": {ico: "0025-phd", flags: []}, // "Pikachu, Ph. D" // female only
//	"0025-libre": {ico: "0025-libre", flags: []}, // "Pikachu Libre" // female only
	"0025-original-cap": {ico: "0025-original-cap", flags: []}, // "Original Cap Pikachu" // male only
	"0025-hoenn-cap": {ico: "0025-hoenn-cap", flags: []}, // "Hoenn Cap Pikachu" // male only
	"0025-sinnoh-cap": {ico: "0025-sinnoh-cap", flags: []}, // "Sinnoh Cap Pikachu" // male only
	"0025-unova-cap": {ico: "0025-unova-cap", flags: []}, // "Unova Cap Pikachu" // male only
	"0025-kalos-cap": {ico: "0025-kalos-cap", flags: []}, // "Kalos Cap Pikachu" // male only
	"0025-alola-cap": {ico: "0025-alola-cap", flags: []}, // "Alola Cap Pikachu" // male only
	"0025-partner-cap": {ico: "0025-partner-cap", flags: []}, // "Partner Cap Pikachu" // male only
	"0025-world-cap": {ico: "0025-world-cap", flags: []}, // "World Cap Pikachu" // male only
//	"0025-m-letsgo": {ico: "0025-m-letsgo", flags: []}, // "Parter Pikachu♂"
//	"0025-f-letsgo": {ico: "0025-f-letsgo", flags: []}, // "Parter Pikachu♀"
	"0025-gmax": {ico: "0025-gmax", flags: []}, // "Gigantamax Pikachu"
//	"0026": {ico: "0026", flags: []}, // "Raichu"
	"0026-m": {ico: "0026-m", flags: []}, // "Raichu♂"
	"0026-f": {ico: "0026-f", flags: []}, // "Raichu♀"
	"0026-alola": {ico: "0026-alola", flags: []}, // "Alolan Raichu"
	"0027": {ico: "0027", flags: []}, // "Sandshrew"
	"0028": {ico: "0028", flags: []}, // "Sandslash"
	"0027-alola": {ico: "0027-alola", flags: []}, // "Alolan Sandshrew"
	"0028-alola": {ico: "0028-alola", flags: []}, // "Alolan Sandslash"
//	"0029": {ico: "0029", flags: []}, // "Nidoran"
//	"0032": {ico: "0032", flags: []}, // "Nidoran"
	"0032-m": {ico: "0032-m", flags: []}, // "Nidoran♂"
	"0029-f": {ico: "0029-f", flags: []}, // "Nidoran♀"
	"0030": {ico: "0030", flags: []}, // "Nidorina"
	"0031": {ico: "0031", flags: []}, // "Nidoqueen"
	"0033": {ico: "0033", flags: []}, // "Nidorino"
	"0034": {ico: "0034", flags: []}, // "Nidoking"
	"0173": {ico: "0173", flags: []}, // "Cleffa"
	"0035": {ico: "0035", flags: []}, // "Clefairy"
	"0036": {ico: "0036", flags: []}, // "Clefable"
	"0037": {ico: "0037", flags: []}, // "Vulpix"
	"0038": {ico: "0038", flags: []}, // "Ninetales"
	"0037-alola": {ico: "0037-alola", flags: []}, // "Alolan Vulpix"
	"0038-alola": {ico: "0038-alola", flags: []}, // "Alolan Ninetales"
	"0174": {ico: "0174", flags: []}, // "Igglybuff"
	"0039": {ico: "0039", flags: []}, // "Jigglypuff"
	"0040": {ico: "0040", flags: []}, // "Wigglytuff"
//	"0041": {ico: "0041", flags: []}, // "Zubat"
	"0041-m": {ico: "0041-m", flags: []}, // "Zubat♂"
	"0041-f": {ico: "0041-f", flags: []}, // "Zubat♀"
//	"0042": {ico: "0042", flags: []}, // "Golbat"
	"0042-m": {ico: "0042-m", flags: []}, // "Golbat♂"
	"0042-f": {ico: "0042-f", flags: []}, // "Golbat♀"
	"0169": {ico: "0169", flags: []}, // "Crobat"
	"0043": {ico: "0043", flags: []}, // "Oddish"
//	"0044": {ico: "0044", flags: []}, // "Gloom"
	"0044-m": {ico: "0044-m", flags: []}, // "Gloom♂"
	"0044-f": {ico: "0044-f", flags: []}, // "Gloom♀"
//	"0045": {ico: "0045", flags: []}, // "Vileplume"
	"0045-m": {ico: "0045-m", flags: []}, // "Vileplume♂"
	"0045-f": {ico: "0045-f", flags: []}, // "Vileplume♀"
	"0182": {ico: "0182", flags: []}, // "Bellossom"
	"0046": {ico: "0046", flags: []}, // "Paras"
	"0047": {ico: "0047", flags: []}, // "Parasect"
	"0048": {ico: "0048", flags: []}, // "Venonat"
	"0049": {ico: "0049", flags: []}, // "Venomoth"
	"0050": {ico: "0050", flags: []}, // "Diglett"
	"0051": {ico: "0051", flags: []}, // "Dugtrio"
	"0050-alola": {ico: "0050-alola", flags: []}, // "Alolan Diglett"
	"0051-alola": {ico: "0051-alola", flags: []}, // "Alolan Dugtrio"
	"0052": {ico: "0052", flags: []}, // "Meowth"
	"0052-gmax": {ico: "0052-gmax", flags: []}, // "Gigantamax Meowth"
	"0053": {ico: "0053", flags: []}, // "Persian"
	"0052-alola": {ico: "0052-alola", flags: []}, // "Alolan Meowth"
	"0053-alola": {ico: "0053-alola", flags: []}, // "Alolan Persian"
	"0052-galar": {ico: "0052-galar", flags: []}, // "Galarian Meowth"
	"0863": {ico: "0863", flags: []}, // "Perrserker"
	"0054": {ico: "0054", flags: []}, // "Psyduck"
	"0055": {ico: "0055", flags: []}, // "Golduck"
	"0056": {ico: "0056", flags: []}, // "Mankey"
	"0057": {ico: "0057", flags: []}, // "Primeape"
	"0058": {ico: "0058", flags: []}, // "Growlithe"
	"0059": {ico: "0059", flags: []}, // "Arcanine"
	"0060": {ico: "0060", flags: []}, // "Poliwag"
	"0061": {ico: "0061", flags: []}, // "Poliwhirl"
	"0062": {ico: "0062", flags: []}, // "Poliwrath"
//	"0186": {ico: "0186", flags: []}, // "Politoed"
	"0186-m": {ico: "0186-m", flags: []}, // "Politoed♂"
	"0186-f": {ico: "0186-f", flags: []}, // "Politoed♀"
	"0063": {ico: "0063", flags: []}, // "Abra"
//	"0064": {ico: "0064", flags: []}, // "Kadabra"
	"0064-m": {ico: "0064-m", flags: []}, // "Kadabra♂"
	"0064-f": {ico: "0064-f", flags: []}, // "Kadabra♀"
//	"0065": {ico: "0065", flags: []}, // "Alakazam"
	"0065-m": {ico: "0065-m", flags: []}, // "Alakazam♂"
	"0065-f": {ico: "0065-f", flags: []}, // "Alakazam♀"
//	"0065-mega": {ico: "0065-mega", flags: []}, // "Mega Alakazam"
	"0066": {ico: "0066", flags: []}, // "Machop"
	"0067": {ico: "0067", flags: []}, // "Machoke"
	"0068": {ico: "0068", flags: []}, // "Machamp"
	"0068-gmax": {ico: "0068-gmax", flags: []}, // "Gigantamax Machamp"
	"0069": {ico: "0069", flags: []}, // "Bellsprout"
	"0070": {ico: "0070", flags: []}, // "Weepinbell"
	"0071": {ico: "0071", flags: []}, // "Victreebel"
	"0072": {ico: "0072", flags: []}, // "Tentacool"
	"0073": {ico: "0073", flags: []}, // "Tentacruel"
	"0074": {ico: "0074", flags: []}, // "Geodude"
	"0075": {ico: "0075", flags: []}, // "Graveler"
	"0076": {ico: "0076", flags: []}, // "Golem"
	"0074-alola": {ico: "0074-alola", flags: []}, // "Alolan Geodude"
	"0075-alola": {ico: "0075-alola", flags: []}, // "Alolan Graveler"
	"0076-alola": {ico: "0076-alola", flags: []}, // "Alolan Golem"
	"0077": {ico: "0077", flags: []}, // "Ponyta"
	"0078": {ico: "0078", flags: []}, // "Rapidash"
	"0077-galar": {ico: "0077-galar", flags: []}, // "Galarian Ponyta"
	"0078-galar": {ico: "0078-galar", flags: []}, // "Galarian Rapidash"
	"0079": {ico: "0079", flags: []}, // "Slowpoke"
	"0080": {ico: "0080", flags: []}, // "Slowbro"
//	"0080-mega": {ico: "0080-mega", flags: []}, // "Mega Slowbro"
	"0199": {ico: "0199", flags: []}, // "Slowking"
	"0079-galar": {ico: "0079-galar", flags: []}, // "Galarian Slowpoke"
	"0080-galar": {ico: "0080-galar", flags: []}, // "Galarian Slowbro"
	"0199-galar": {ico: "0199-galar", flags: []}, // "Galarian Slowking"
	"0081": {ico: "0081", flags: []}, // "Magnemite"
	"0082": {ico: "0082", flags: []}, // "Magneton"
	"0462": {ico: "0462", flags: []}, // "Magnezone" // uknown gender
	"0083": {ico: "0083", flags: []}, // "Farfetch'd"
	"0083-galar": {ico: "0083-galar", flags: []}, // "Galarian Farfetch'd"
	"0865": {ico: "0865", flags: []}, // "Sirfetch'd"
//	"0084": {ico: "0084", flags: []}, // "Doduo"
	"0084-m": {ico: "0084-m", flags: []}, // "Doduo♂"
	"0084-f": {ico: "0084-f", flags: []}, // "Doduo♀"
//	"0085": {ico: "0085", flags: []}, // "Dodrio"
	"0085-m": {ico: "0085-m", flags: []}, // "Dodrio♂"
	"0085-f": {ico: "0085-f", flags: []}, // "Dodrio♀"
	"0086": {ico: "0086", flags: []}, // "Seel"
	"0087": {ico: "0087", flags: []}, // "Dewgong"
	"0088": {ico: "0088", flags: []}, // "Grimer"
	"0089": {ico: "0089", flags: []}, // "Muk"
	"0088-alola": {ico: "0088-alola", flags: []}, // "Alolan Grimer"
	"0089-alola": {ico: "0089-alola", flags: []}, // "Alolan Muk"
	"0090": {ico: "0090", flags: []}, // "Shellder"
	"0091": {ico: "0091", flags: []}, // "Cloyster"
	"0092": {ico: "0092", flags: []}, // "Gastly"
	"0093": {ico: "0093", flags: []}, // "Haunter"
	"0094": {ico: "0094", flags: []}, // "Gengar"
//	"0094-mega": {ico: "0094-mega", flags: []}, // "Mega Gengar"
	"0094-gmax": {ico: "0094-gmax", flags: []}, // "Gigantamax Gengar"
	"0095": {ico: "0095", flags: []}, // "Onix"
//	"0208": {ico: "0208", flags: []}, // "Steelix"
	"0208-m": {ico: "0208-m", flags: []}, // "Steelix♂"
	"0208-f": {ico: "0208-f", flags: []}, // "Steelix♀"
//	"0208-mega": {ico: "0208-mega", flags: []}, // "Mega Steelix"
	"0096": {ico: "0096", flags: []}, // "Drowzee"
//	"0097": {ico: "0097", flags: []}, // "Hypno"
	"0097-m": {ico: "0097-m", flags: []}, // "Hypno♂"
	"0097-f": {ico: "0097-f", flags: []}, // "Hypno♀"
	"0098": {ico: "0098", flags: []}, // "Krabby"
	"0099": {ico: "0099", flags: []}, // "Kingler"
	"0099-gmax": {ico: "0099-gmax", flags: []}, // "Gigantamax Kingler"
	"0100": {ico: "0100", flags: []}, // "Voltorb" // uknown gender
	"0101": {ico: "0101", flags: []}, // "Electrode" // uknown gender
	"0102": {ico: "0102", flags: []}, // "Exeggcute"
	"0103": {ico: "0103", flags: []}, // "Exeggutor"
	"0103-alola": {ico: "0103-alola", flags: []}, // "Alolan Exeggutor"
	"0104": {ico: "0104", flags: []}, // "Cubone"
	"0105": {ico: "0105", flags: []}, // "Marowak"
	"0105-alola": {ico: "0105-alola", flags: []}, // "Alolan Marowak"
	"0236": {ico: "0236", flags: []}, // "Tyrogue" // male only
	"0106": {ico: "0106", flags: []}, // "Hitmonlee" // male only
	"0107": {ico: "0107", flags: []}, // "Hitmonchan" // male only
	"0237": {ico: "0237", flags: []}, // "Hitmontop" // male only
	"0108": {ico: "0108", flags: []}, // "Lickitung"
	"0463": {ico: "0463", flags: []}, // "Lickilicky"
	"0109": {ico: "0109", flags: []}, // "Koffing"
	"0110": {ico: "0110", flags: []}, // "Weezing"
	"0110-galar": {ico: "0110-galar", flags: []}, // "Galarian Weezing"
//	"0111": {ico: "0111", flags: []}, // "Rhyhorn"
	"0111-m": {ico: "0111-m", flags: []}, // "Rhyhorn♂"
	"0111-f": {ico: "0111-f", flags: []}, // "Rhyhorn♀"
//	"0112": {ico: "0112", flags: []}, // "Rhydon"
	"0112-m": {ico: "0112-m", flags: []}, // "Rhydon♂"
	"0112-f": {ico: "0112-f", flags: []}, // "Rhydon♀"
//	"0464": {ico: "0464", flags: []}, // "Rhyperior"
	"0464-m": {ico: "0464-m", flags: []}, // "Rhyperior♂"
	"0464-f": {ico: "0464-f", flags: []}, // "Rhyperior♀"
	"0440": {ico: "0440", flags: []}, // "Happiny" // female only
	"0113": {ico: "0113", flags: []}, // "Chansey" // female only
	"0242": {ico: "0242", flags: []}, // "Blissey" // female only
	"0114": {ico: "0114", flags: []}, // "Tangela"
//	"0465": {ico: "0465", flags: []}, // "Tangrowth"
	"0465-m": {ico: "0465-m", flags: []}, // "Tangrowth♂"
	"0465-f": {ico: "0465-f", flags: []}, // "Tangrowth♀"
	"0115": {ico: "0115", flags: []}, // "Kangaskhan" // female only
//	"0115-mega": {ico: "0115-mega", flags: []}, // "Mega Kangaskhan" // female only
	"0116": {ico: "0116", flags: []}, // "Horsea"
	"0117": {ico: "0117", flags: []}, // "Seadra"
	"0230": {ico: "0230", flags: []}, // "Kingdra"
//	"0118": {ico: "0118", flags: []}, // "Goldeen"
	"0118-m": {ico: "0118-m", flags: []}, // "Goldeen♂"
	"0118-f": {ico: "0118-f", flags: []}, // "Goldeen♀"
//	"0119": {ico: "0119", flags: []}, // "Seaking"
	"0119-m": {ico: "0119-m", flags: []}, // "Seaking♂"
	"0119-f": {ico: "0119-f", flags: []}, // "Seaking♀"
	"0120": {ico: "0120", flags: []}, // "Staryu" // uknown gender
	"0121": {ico: "0121", flags: []}, // "Starmie" // uknown gender
	"0439": {ico: "0439", flags: []}, // "Mime Jr."
	"0122": {ico: "0122", flags: []}, // "Mr. Mime"
	"0122-galar": {ico: "0122-galar", flags: []}, // "Galarian Mr. Mime"
	"0866": {ico: "0866", flags: []}, // "Mr. Rime"
//	"0123": {ico: "0123", flags: []}, // "Scyther"
	"0123-m": {ico: "0123-m", flags: []}, // "Scyther♂"
	"0123-f": {ico: "0123-f", flags: []}, // "Scyther♀"
//	"0212": {ico: "0212", flags: []}, // "Scizor"
	"0212-m": {ico: "0212-m", flags: []}, // "Scizor♂"
	"0212-f": {ico: "0212-f", flags: []}, // "Scizor♀"
//	"0212-mega": {ico: "0212-mega", flags: []}, // "Mega Scizor"
	"0238": {ico: "0238", flags: []}, // "Smoochum" // female only
	"0124": {ico: "0124", flags: []}, // "Jynx" // female only
	"0239": {ico: "0239", flags: []}, // "Elekid"
	"0125": {ico: "0125", flags: []}, // "Electabuzz"
	"0466": {ico: "0466", flags: []}, // "Electivire"
	"0240": {ico: "0240", flags: []}, // "Magby"
	"0126": {ico: "0126", flags: []}, // "Magmar"
	"0467": {ico: "0467", flags: []}, // "Magmortar"
	"0127": {ico: "0127", flags: []}, // "Pinsir"
//	"0127-mega": {ico: "0127-mega", flags: []}, // "Mega Pinsir"
	"0128": {ico: "0128", flags: []}, // "Tauros" // male only
//	"0129": {ico: "0129", flags: []}, // "Magikarp"
	"0129-m": {ico: "0129-m", flags: []}, // "Magikarp♂"
	"0129-f": {ico: "0129-f", flags: []}, // "Magikarp♀"
//	"0130": {ico: "0130", flags: []}, // "Gyarados"
	"0130-m": {ico: "0130-m", flags: []}, // "Gyarados♂"
	"0130-f": {ico: "0130-f", flags: []}, // "Gyarados♀"
//	"0130-mega": {ico: "0130-mega", flags: []}, // "Mega Gyarados"
	"0131": {ico: "0131", flags: []}, // "Lapras"
	"0131-gmax": {ico: "0131-gmax", flags: []}, // "Gigantamax Lapras"
	"0132": {ico: "0132", flags: []}, // "Ditto" // uknown gender
//	"0133": {ico: "0133", flags: []}, // "Eevee"
	"0133-m": {ico: "0133-m", flags: []}, // "Eevee♂"
	"0133-f": {ico: "0133-f", flags: []}, // "Eevee♀"
//	"0133-m-letsgo": {ico: "0133-m-letsgo", flags: []}, // "Partner Eevee♂"
//	"0133-f-letsgo": {ico: "0133-f-letsgo", flags: []}, // "Partner Eevee♀"
	"0133-gmax": {ico: "0133-gmax", flags: []}, // "Gigantamax Eevee"
	"0134": {ico: "0134", flags: []}, // "Vaporeon"
	"0135": {ico: "0135", flags: []}, // "Jolteon"
	"0136": {ico: "0136", flags: []}, // "Flareon"
	"0196": {ico: "0196", flags: []}, // "Espeon"
	"0197": {ico: "0197", flags: []}, // "Umbreon"
	"0470": {ico: "0470", flags: []}, // "Leafeon"
	"0471": {ico: "0471", flags: []}, // "Glaceon"
	"0700": {ico: "0700", flags: []}, // "Sylveon"
	"0137": {ico: "0137", flags: []}, // "Porygon" // uknown gender
	"0233": {ico: "0233", flags: []}, // "Porygon2" // uknown gender
	"0474": {ico: "0474", flags: []}, // "Porygon-Z" // uknown gender
	"0138": {ico: "0138", flags: []}, // "Omanyte"
	"0139": {ico: "0139", flags: []}, // "Omastar"
	"0140": {ico: "0140", flags: []}, // "Kabuto"
	"0141": {ico: "0141", flags: []}, // "Kabutops"
	"0142": {ico: "0142", flags: []}, // "Aerodactyl"
//	"0142-mega": {ico: "0142-mega", flags: []}, // "Mega Aerodactyl"
	"0345": {ico: "0345", flags: []}, // "Lileep"
	"0346": {ico: "0346", flags: []}, // "Cradily"
	"0347": {ico: "0347", flags: []}, // "Anorith"
	"0348": {ico: "0348", flags: []}, // "Armaldo"
	"0408": {ico: "0408", flags: []}, // "Cranidos"
	"0409": {ico: "0409", flags: []}, // "Rampardos"
	"0410": {ico: "0410", flags: []}, // "Shieldon"
	"0411": {ico: "0411", flags: []}, // "Bastiodon"
	"0564": {ico: "0564", flags: []}, // "Tirtouga"
	"0565": {ico: "0565", flags: []}, // "Carracosta"
	"0566": {ico: "0566", flags: []}, // "Archen"
	"0567": {ico: "0567", flags: []}, // "Archeops"
	"0696": {ico: "0696", flags: []}, // "Tyrunt"
	"0697": {ico: "0697", flags: []}, // "Tyrantrum"
	"0698": {ico: "0698", flags: []}, // "Amaura"
	"0699": {ico: "0699", flags: []}, // "Aurorus"
	"0880": {ico: "0880", flags: []}, // "Dracozolt" // uknown gender
	"0881": {ico: "0881", flags: []}, // "Arctozolt" // uknown gender
	"0882": {ico: "0882", flags: []}, // "Dracovish" // uknown gender
	"0883": {ico: "0883", flags: []}, // "Arctovish" // uknown gender
	"0446": {ico: "0446", flags: []}, // "Munchlax"
	"0143": {ico: "0143", flags: []}, // "Snorlax"
	"0143-gmax": {ico: "0143-gmax", flags: []}, // "Gigantamax Snorlax"
	"0144": {ico: "0144", flags: []}, // "Articuno" // uknown gender
	"0145": {ico: "0145", flags: []}, // "Zapdos" // uknown gender
	"0146": {ico: "0146", flags: []}, // "Moltres" // uknown gender
	"0144-galar": {ico: "0144-galar", flags: []}, // "Galarian Articuno" // uknown gender
	"0145-galar": {ico: "0145-galar", flags: []}, // "Galarian Zapdos" // uknown gender
	"0146-galar": {ico: "0146-galar", flags: []}, // "Galarian Moltres" // uknown gender
	"0147": {ico: "0147", flags: []}, // "Dratini"
	"0148": {ico: "0148", flags: []}, // "Dragonair"
	"0149": {ico: "0149", flags: []}, // "Dragonite"
	"0150": {ico: "0150", flags: []}, // "Mewtwo" // uknown gender
//	"0150-mega-x": {ico: "0150-mega-x", flags: []}, // "Mega Mewtwo X" // uknown gender
//	"0150-mega-y": {ico: "0150-mega-y", flags: []}, // "Mega Mewtwo Y" // uknown gender
	"0151": {ico: "0151", flags: []}, // "Mew" // uknown gender
	"0152": {ico: "0152", flags: []}, // "Chikorita"
	"0153": {ico: "0153", flags: []}, // "Bayleef"
//	"0154": {ico: "0154", flags: []}, // "Meganium"
	"0154-m": {ico: "0154-m", flags: []}, // "Meganium♂"
	"0154-f": {ico: "0154-f", flags: []}, // "Meganium♀"
	"0155": {ico: "0155", flags: []}, // "Cyndaquil"
	"0156": {ico: "0156", flags: []}, // "Quilava"
	"0157": {ico: "0157", flags: []}, // "Typhlosion"
	"0158": {ico: "0158", flags: []}, // "Totodile"
	"0159": {ico: "0159", flags: []}, // "Croconaw"
	"0160": {ico: "0160", flags: []}, // "Feraligatr"
	"0161": {ico: "0161", flags: []}, // "Sentret"
	"0162": {ico: "0162", flags: []}, // "Furret"
	"0163": {ico: "0163", flags: []}, // "Hoothoot"
	"0164": {ico: "0164", flags: []}, // "Noctowl"
//	"0165": {ico: "0165", flags: []}, // "Ledyba"
//	"0166": {ico: "0166", flags: []}, // "Ledian"
	"0165-m": {ico: "0165-m", flags: []}, // "Ledyba♂"
	"0165-f": {ico: "0165-f", flags: []}, // "Ledyba♀"
	"0166-m": {ico: "0166-m", flags: []}, // "Ledian♂"
	"0166-f": {ico: "0166-f", flags: []}, // "Ledian♀"
	"0167": {ico: "0167", flags: []}, // "Spinarak"
	"0168": {ico: "0168", flags: []}, // "Ariados"
	"0170": {ico: "0170", flags: []}, // "Chinchou"
	"0171": {ico: "0171", flags: []}, // "Lanturn"
	"0175": {ico: "0175", flags: []}, // "Togepi"
	"0176": {ico: "0176", flags: []}, // "Togetic"
	"0468": {ico: "0468", flags: []}, // "Togekiss"
	"0177": {ico: "0177", flags: []}, // "Natu"
//	"0178": {ico: "0178", flags: []}, // "Xatu"
	"0178-m": {ico: "0178-m", flags: []}, // "Xatu♂"
	"0178-f": {ico: "0178-f", flags: []}, // "Xatu♀"
	"0179": {ico: "0179", flags: []}, // "Mareep"
	"0180": {ico: "0180", flags: []}, // "Flaaffy"
	"0181": {ico: "0181", flags: []}, // "Ampharos"
//	"0181-mega": {ico: "0181-mega", flags: []}, // "Mega Ampharos"
	"0298": {ico: "0298", flags: []}, // "Azurill"
	"0183": {ico: "0183", flags: []}, // "Marill"
	"0184": {ico: "0184", flags: []}, // "Azumarill"
	"0438": {ico: "0438", flags: []}, // "Bonsly"
//	"0185": {ico: "0185", flags: []}, // "Sudowoodo"
	"0185-m": {ico: "0185-m", flags: []}, // "Sudowoodo♂"
	"0185-f": {ico: "0185-f", flags: []}, // "Sudowoodo♀"
	"0187": {ico: "0187", flags: []}, // "Hoppip"
	"0188": {ico: "0188", flags: []}, // "Skiploom"
	"0189": {ico: "0189", flags: []}, // "Jumpluff"
//	"0190": {ico: "0190", flags: []}, // "Aipom"
	"0190-m": {ico: "0190-m", flags: []}, // "Aipom♂"
	"0190-f": {ico: "0190-f", flags: []}, // "Aipom♀"
//	"0424": {ico: "0424", flags: []}, // "Ambipom"
	"0424-m": {ico: "0424-m", flags: []}, // "Ambipom♂"
	"0424-f": {ico: "0424-f", flags: []}, // "Ambipom♀"
	"0191": {ico: "0191", flags: []}, // "Sunkern"
	"0192": {ico: "0192", flags: []}, // "Sunflora"
	"0193": {ico: "0193", flags: []}, // "Yanma"
	"0469": {ico: "0469", flags: []}, // "Yanmega"
//	"0194": {ico: "0194", flags: []}, // "Wooper"
	"0194-m": {ico: "0194-m", flags: []}, // "Wooper♂"
	"0194-f": {ico: "0194-f", flags: []}, // "Wooper♀"
//	"0195": {ico: "0195", flags: []}, // "Quagsire"
	"0195-m": {ico: "0195-m", flags: []}, // "Quagsire♂"
	"0195-f": {ico: "0195-f", flags: []}, // "Quagsire♀"
//	"0198": {ico: "0198", flags: []}, // "Murkrow"
	"0198-m": {ico: "0198-m", flags: []}, // "Murkrow♂"
	"0198-f": {ico: "0198-f", flags: []}, // "Murkrow♀"
	"0430": {ico: "0430", flags: []}, // "Honchkrow"
	"0200": {ico: "0200", flags: []}, // "Misdreavus"
	"0429": {ico: "0429", flags: []}, // "Mismagius"
//	"0201": {ico: "0201", flags: []}, // "Unown" // uknown gender
//	"0201-angry": {ico: "0201-angry", flags: []}, // "Unown Angry" // uknown gender
	"0201-anger": {ico: "0201-anger", flags: []}, // "Unown Anger" // uknown gender
	"0201-bear": {ico: "0201-bear", flags: []}, // "Unown Bear" // uknown gender
	"0201-chase": {ico: "0201-chase", flags: []}, // "Unown Chase" // uknown gender
	"0201-direct": {ico: "0201-direct", flags: []}, // "Unown Direct" // uknown gender
	"0201-engage": {ico: "0201-engage", flags: []}, // "Unown Engage" // uknown gender
	"0201-find": {ico: "0201-find", flags: []}, // "Unown Find" // uknown gender
	"0201-give": {ico: "0201-give", flags: []}, // "Unown Give" // uknown gender
	"0201-help": {ico: "0201-help", flags: []}, // "Unown Help" // uknown gender
	"0201-increase": {ico: "0201-increase", flags: []}, // "Unown Increase" // uknown gender
	"0201-join": {ico: "0201-join", flags: []}, // "Unown Join" // uknown gender
	"0201-keep": {ico: "0201-keep", flags: []}, // "Unown Keep" // uknown gender
	"0201-laugh": {ico: "0201-laugh", flags: []}, // "Unown Laugh" // uknown gender
	"0201-make": {ico: "0201-make", flags: []}, // "Unown Make" // uknown gender
	"0201-nuzzle": {ico: "0201-nuzzle", flags: []}, // "Unown Nuzzle" // uknown gender
	"0201-observe": {ico: "0201-observe", flags: []}, // "Unown Observe" // uknown gender
	"0201-perform": {ico: "0201-perform", flags: []}, // "Unown Perform" // uknown gender
	"0201-quicken": {ico: "0201-quicken", flags: []}, // "Unown Quicken" // uknown gender
	"0201-reassure": {ico: "0201-reassure", flags: []}, // "Unown Reassure" // uknown gender
	"0201-search": {ico: "0201-search", flags: []}, // "Unown Search" // uknown gender
	"0201-tell": {ico: "0201-tell", flags: []}, // "Unown Tell" // uknown gender
	"0201-undo": {ico: "0201-undo", flags: []}, // "Unown Undo" // uknown gender
	"0201-vanish": {ico: "0201-vanish", flags: []}, // "Unown Vanish" // uknown gender
	"0201-want": {ico: "0201-want", flags: []}, // "Unown Want" // uknown gender
	"0201-xxxxx": {ico: "0201-xxxxx", flags: []}, // "Unown XXXXX" // uknown gender
	"0201-yield": {ico: "0201-yield", flags: []}, // "Unown Yield" // uknown gender
	"0201-zoom": {ico: "0201-zoom", flags: []}, // "Unown Zoom" // uknown gender
	"0201-exclamation": {ico: "0201-exclamation", flags: []}, // "Unown !!!!!" // uknown gender
	"0201-question": {ico: "0201-question", flags: []}, // "Unown ?????" // uknown gender
	"0360": {ico: "0360", flags: []}, // "Wynaut"
//	"0202": {ico: "0202", flags: []}, // "Wobbuffet"
	"0202-m": {ico: "0202-m", flags: []}, // "Wobbuffet♂"
	"0202-f": {ico: "0202-f", flags: []}, // "Wobbuffet♀"
//	"0203": {ico: "0203", flags: []}, // "Girafarig"
	"0203-m": {ico: "0203-m", flags: []}, // "Girafarig♂"
	"0203-f": {ico: "0203-f", flags: []}, // "Girafarig♀"
	"0204": {ico: "0204", flags: []}, // "Pineco"
	"0205": {ico: "0205", flags: []}, // "Forretress"
	"0206": {ico: "0206", flags: []}, // "Dunsparce"
//	"0207": {ico: "0207", flags: []}, // "Gligar"
	"0207-m": {ico: "0207-m", flags: []}, // "Gligar♂"
	"0207-f": {ico: "0207-f", flags: []}, // "Gligar♀"
	"0472": {ico: "0472", flags: []}, // "Gliscor"
	"0209": {ico: "0209", flags: []}, // "Snubbull"
	"0210": {ico: "0210", flags: []}, // "Granbull"
	"0211": {ico: "0211", flags: []}, // "Qwilfish"
	"0213": {ico: "0213", flags: []}, // "Shuckle"
//	"0214": {ico: "0214", flags: []}, // "Heracross"
	"0214-m": {ico: "0214-m", flags: []}, // "Heracross♂"
	"0214-f": {ico: "0214-f", flags: []}, // "Heracross♀"
//	"0214-mega": {ico: "0214-mega", flags: []}, // "Mega Heracross"
//	"0215": {ico: "0215", flags: []}, // "Sneasel"
	"0215-m": {ico: "0215-m", flags: []}, // "Sneasel♂"
	"0215-f": {ico: "0215-f", flags: []}, // "Sneasel♀"
//	"0461": {ico: "0461", flags: []}, // "Weavile"
	"0461-m": {ico: "0461-m", flags: []}, // "Weavile♂"
	"0461-f": {ico: "0461-f", flags: []}, // "Weavile♀"
	"0216": {ico: "0216", flags: []}, // "Teddiursa"
//	"0217": {ico: "0217", flags: []}, // "Ursaring"
	"0217-m": {ico: "0217-m", flags: []}, // "Ursaring♂"
	"0217-f": {ico: "0217-f", flags: []}, // "Ursaring♀"
	"0218": {ico: "0218", flags: []}, // "Slugma"
	"0219": {ico: "0219", flags: []}, // "Magcargo"
	"0220": {ico: "0220", flags: []}, // "Swinub"
//	"0221": {ico: "0221", flags: []}, // "Piloswine"
	"0221-m": {ico: "0221-m", flags: []}, // "Piloswine♂"
	"0221-f": {ico: "0221-f", flags: []}, // "Piloswine♀"
//	"0473": {ico: "0473", flags: []}, // "Mamoswine"
	"0473-m": {ico: "0473-m", flags: []}, // "Mamoswine♂"
	"0473-f": {ico: "0473-f", flags: []}, // "Mamoswine♀"
	"0222": {ico: "0222", flags: []}, // "Corsola"
	"0222-galar": {ico: "0222-galar", flags: []}, // "Galarian Corsola"
	"0864": {ico: "0864", flags: []}, // "Cursola"
	"0223": {ico: "0223", flags: []}, // "Remoraid"
//	"0224": {ico: "0224", flags: []}, // "Octillery"
	"0224-m": {ico: "0224-m", flags: []}, // "Octillery♂"
	"0224-f": {ico: "0224-f", flags: []}, // "Octillery♀"
	"0225": {ico: "0225", flags: []}, // "Delibird"
	"0458": {ico: "0458", flags: []}, // "Mantyke"
	"0226": {ico: "0226", flags: []}, // "Mantine"
	"0227": {ico: "0227", flags: []}, // "Skarmory"
	"0228": {ico: "0228", flags: []}, // "Houndour"
//	"0229": {ico: "0229", flags: []}, // "Houndoom"
	"0229-m": {ico: "0229-m", flags: []}, // "Houndoom♂"
	"0229-f": {ico: "0229-f", flags: []}, // "Houndoom♀"
//	"0229-mega": {ico: "0229-mega", flags: []}, // "Mega Houndoom"
	"0231": {ico: "0231", flags: []}, // "Phanpy"
//	"0232": {ico: "0232", flags: []}, // "Donphan"
	"0232-m": {ico: "0232-m", flags: []}, // "Donphan♂"
	"0232-f": {ico: "0232-f", flags: []}, // "Donphan♀"
	"0234": {ico: "0234", flags: []}, // "Stantler"
	"0235": {ico: "0235", flags: []}, // "Smeargle"
	"0241": {ico: "0241", flags: []}, // "Miltank" // female only
	"0243": {ico: "0243", flags: []}, // "Raikou" // uknown gender
	"0244": {ico: "0244", flags: []}, // "Entei" // uknown gender
	"0245": {ico: "0245", flags: []}, // "Suicune" // uknown gender
	"0246": {ico: "0246", flags: []}, // "Larvitar"
	"0247": {ico: "0247", flags: []}, // "Pupitar"
	"0248": {ico: "0248", flags: []}, // "Tyranitar"
//	"0248-mega": {ico: "0248-mega", flags: []}, // "Mega Tyranitar"
	"0249": {ico: "0249", flags: []}, // "Lugia" // uknown gender
	"0250": {ico: "0250", flags: []}, // "Ho-Oh" // uknown gender
	"0251": {ico: "0251", flags: []}, // "Celebi" // uknown gender
	"0252": {ico: "0252", flags: []}, // "Treecko"
	"0253": {ico: "0253", flags: []}, // "Grovyle"
	"0254": {ico: "0254", flags: []}, // "Sceptile"
//	"0254-mega": {ico: "0254-mega", flags: []}, // "Mega Sceptile"
//	"0255": {ico: "0255", flags: []}, // "Torchic"
	"0255-m": {ico: "0255-m", flags: []}, // "Torchic♂"
	"0255-f": {ico: "0255-f", flags: []}, // "Torchic♀"
//	"0256": {ico: "0256", flags: []}, // "Combusken"
	"0256-m": {ico: "0256-m", flags: []}, // "Combusken♂"
	"0256-f": {ico: "0256-f", flags: []}, // "Combusken♀"
//	"0257": {ico: "0257", flags: []}, // "Blaziken"
	"0257-m": {ico: "0257-m", flags: []}, // "Blaziken♂"
	"0257-f": {ico: "0257-f", flags: []}, // "Blaziken♀"
//	"0257-mega": {ico: "0257-mega", flags: []}, // "Mega Blaziken"
	"0258": {ico: "0258", flags: []}, // "Mudkip"
	"0259": {ico: "0259", flags: []}, // "Marshtomp"
	"0260": {ico: "0260", flags: []}, // "Swampert"
//	"0260-mega": {ico: "0260-mega", flags: []}, // "Mega Swampert"
	"0261": {ico: "0261", flags: []}, // "Poochyena"
	"0262": {ico: "0262", flags: []}, // "Mightyena"
	"0263": {ico: "0263", flags: []}, // "Zigzagoon"
	"0264": {ico: "0264", flags: []}, // "Linoone"
	"0263-galar": {ico: "0263-galar", flags: []}, // "Galarian Zigzagoon"
	"0264-galar": {ico: "0264-galar", flags: []}, // "Galarian Linoone"
	"0862": {ico: "0862", flags: []}, // "Obstagoon"
	"0265": {ico: "0265", flags: []}, // "Wurmple"
	"0266": {ico: "0266", flags: []}, // "Silcoon"
//	"0267": {ico: "0267", flags: []}, // "Beautifly"
	"0267-m": {ico: "0267-m", flags: []}, // "Beautifly♂"
	"0267-f": {ico: "0267-f", flags: []}, // "Beautifly♀"
	"0268": {ico: "0268", flags: []}, // "Cascoon"
//	"0269": {ico: "0269", flags: []}, // "Dustox"
	"0269-m": {ico: "0269-m", flags: []}, // "Dustox♂"
	"0269-f": {ico: "0269-f", flags: []}, // "Dustox♀"
	"0270": {ico: "0270", flags: []}, // "Lotad"
	"0271": {ico: "0271", flags: []}, // "Lombre"
//	"0272": {ico: "0272", flags: []}, // "Ludicolo"
	"0272-m": {ico: "0272-m", flags: []}, // "Ludicolo♂"
	"0272-f": {ico: "0272-f", flags: []}, // "Ludicolo♀"
	"0273": {ico: "0273", flags: []}, // "Seedot"
//	"0274": {ico: "0274", flags: []}, // "Nuzleaf"
	"0274-m": {ico: "0274-m", flags: []}, // "Nuzleaf♂"
	"0274-f": {ico: "0274-f", flags: []}, // "Nuzleaf♀"
//	"0275": {ico: "0275", flags: []}, // "Shiftry"
	"0275-m": {ico: "0275-m", flags: []}, // "Shiftry♂"
	"0275-f": {ico: "0275-f", flags: []}, // "Shiftry♀"
	"0276": {ico: "0276", flags: []}, // "Taillow"
	"0277": {ico: "0277", flags: []}, // "Swellow"
	"0278": {ico: "0278", flags: []}, // "Wingull"
	"0279": {ico: "0279", flags: []}, // "Pelipper"
	"0280": {ico: "0280", flags: []}, // "Ralts"
	"0281": {ico: "0281", flags: []}, // "Kirlia"
	"0282": {ico: "0282", flags: []}, // "Gardevoir"
//	"0282-mega": {ico: "0282-mega", flags: []}, // "Mega Gardevoir"
	"0475": {ico: "0475", flags: []}, // "Gallade" // male only
//	"0475-mega": {ico: "0475-mega", flags: []}, // "Mega Gallade" // male only
	"0283": {ico: "0283", flags: []}, // "Surskit"
	"0284": {ico: "0284", flags: []}, // "Masquerain"
	"0285": {ico: "0285", flags: []}, // "Shroomish"
	"0286": {ico: "0286", flags: []}, // "Breloom"
	"0287": {ico: "0287", flags: []}, // "Slakoth"
	"0288": {ico: "0288", flags: []}, // "Vigoroth"
	"0289": {ico: "0289", flags: []}, // "Slaking"
	"0290": {ico: "0290", flags: []}, // "Nincada"
	"0291": {ico: "0291", flags: []}, // "Ninjask"
	"0292": {ico: "0292", flags: []}, // "Shedinja" // uknown gender
	"0293": {ico: "0293", flags: []}, // "Whismur"
	"0294": {ico: "0294", flags: []}, // "Loudred"
	"0295": {ico: "0295", flags: []}, // "Exploud"
	"0296": {ico: "0296", flags: []}, // "Makuhita"
	"0297": {ico: "0297", flags: []}, // "Hariyama"
	"0299": {ico: "0299", flags: []}, // "Nosepass"
	"0476": {ico: "0476", flags: []}, // "Probopass"
	"0300": {ico: "0300", flags: []}, // "Skitty"
	"0301": {ico: "0301", flags: []}, // "Delcatty"
	"0302": {ico: "0302", flags: []}, // "Sableye"
//	"0302-mega": {ico: "0302-mega", flags: []}, // "Mega Sableye"
	"0303": {ico: "0303", flags: []}, // "Mawile"
//	"0303-mega": {ico: "0303-mega", flags: []}, // "Mega Mawile"
	"0304": {ico: "0304", flags: []}, // "Aron"
	"0305": {ico: "0305", flags: []}, // "Lairon"
	"0306": {ico: "0306", flags: []}, // "Aggron"
//	"0306-mega": {ico: "0306-mega", flags: []}, // "Mega Aggron"
//	"0307": {ico: "0307", flags: []}, // "Meditite"
	"0307-m": {ico: "0307-m", flags: []}, // "Meditite♂"
	"0307-f": {ico: "0307-f", flags: []}, // "Meditite♀"
//	"0308": {ico: "0308", flags: []}, // "Medicham"
	"0308-m": {ico: "0308-m", flags: []}, // "Medicham♂"
	"0308-f": {ico: "0308-f", flags: []}, // "Medicham♀"
//	"0308-mega": {ico: "0308-mega", flags: []}, // "Mega Medicham"
	"0309": {ico: "0309", flags: []}, // "Electrike"
	"0310": {ico: "0310", flags: []}, // "Manectric"
//	"0310-mega": {ico: "0310-mega", flags: []}, // "Mega Manectric"
	"0311": {ico: "0311", flags: []}, // "Plusle"
	"0312": {ico: "0312", flags: []}, // "Minun"
	"0313": {ico: "0313", flags: []}, // "Volbeat" // male only
	"0314": {ico: "0314", flags: []}, // "Illumise" // female only
	"0406": {ico: "0406", flags: []}, // "Budew"
//	"0315": {ico: "0315", flags: []}, // "Roselia"
	"0315-m": {ico: "0315-m", flags: []}, // "Roselia♂"
	"0315-f": {ico: "0315-f", flags: []}, // "Roselia♀"
//	"0407": {ico: "0407", flags: []}, // "Roserade"
	"0407-m": {ico: "0407-m", flags: []}, // "Roserade♂"
	"0407-f": {ico: "0407-f", flags: []}, // "Roserade♀"
//	"0316": {ico: "0316", flags: []}, // "Gulpin"
	"0316-m": {ico: "0316-m", flags: []}, // "Gulpin♂"
	"0316-f": {ico: "0316-f", flags: []}, // "Gulpin♀"
//	"0317": {ico: "0317", flags: []}, // "Swalot"
	"0317-m": {ico: "0317-m", flags: []}, // "Swalot♂"
	"0317-f": {ico: "0317-f", flags: []}, // "Swalot♀"
	"0318": {ico: "0318", flags: []}, // "Carvanha"
	"0319": {ico: "0319", flags: []}, // "Sharpedo"
//	"0319-mega": {ico: "0319-mega", flags: []}, // "Mega Sharpedo"
	"0320": {ico: "0320", flags: []}, // "Wailmer"
	"0321": {ico: "0321", flags: []}, // "Wailord"
//	"0322": {ico: "0322", flags: []}, // "Numel"
	"0322-m": {ico: "0322-m", flags: []}, // "Numel♂"
	"0322-f": {ico: "0322-f", flags: []}, // "Numel♀"
//	"0323": {ico: "0323", flags: []}, // "Camerupt"
	"0323-m": {ico: "0323-m", flags: []}, // "Camerupt♂"
	"0323-f": {ico: "0323-f", flags: []}, // "Camerupt♀"
//	"0323-mega": {ico: "0323-mega", flags: []}, // "Mega Camerupt"
	"0324": {ico: "0324", flags: []}, // "Torkoal"
	"0325": {ico: "0325", flags: []}, // "Spoink"
	"0326": {ico: "0326", flags: []}, // "Grumpig"
	"0327": {ico: "0327", flags: []}, // "Spinda"
	"0328": {ico: "0328", flags: []}, // "Trapinch"
	"0329": {ico: "0329", flags: []}, // "Vibrava"
	"0330": {ico: "0330", flags: []}, // "Flygon"
	"0331": {ico: "0331", flags: []}, // "Cacnea"
//	"0332": {ico: "0332", flags: []}, // "Cacturne"
	"0332-m": {ico: "0332-m", flags: []}, // "Cacturne♂"
	"0332-f": {ico: "0332-f", flags: []}, // "Cacturne♀"
	"0333": {ico: "0333", flags: []}, // "Swablu"
	"0334": {ico: "0334", flags: []}, // "Altaria"
//	"0334-mega": {ico: "0334-mega", flags: []}, // "Mega Altaria"
	"0335": {ico: "0335", flags: []}, // "Zangoose"
	"0336": {ico: "0336", flags: []}, // "Seviper"
	"0337": {ico: "0337", flags: []}, // "Lunatone" // uknown gender
	"0338": {ico: "0338", flags: []}, // "Solrock" // uknown gender
	"0339": {ico: "0339", flags: []}, // "Barboach"
	"0340": {ico: "0340", flags: []}, // "Whiscash"
	"0341": {ico: "0341", flags: []}, // "Corphish"
	"0342": {ico: "0342", flags: []}, // "Crawdaunt"
	"0343": {ico: "0343", flags: []}, // "Baltoy" // uknown gender
	"0344": {ico: "0344", flags: []}, // "Claydol" // uknown gender
	"0349": {ico: "0349", flags: []}, // "Feebas"
//	"0350": {ico: "0350", flags: []}, // "Milotic"
	"0350-m": {ico: "0350-m", flags: []}, // "Milotic♂"
	"0350-f": {ico: "0350-f", flags: []}, // "Milotic♀"
	"0351": {ico: "0351", flags: []}, // "Castform"
//	"0351-sunny": {ico: "0351-sunny", flags: []}, // "Sunny Castform"
//	"0351-rainy": {ico: "0351-rainy", flags: []}, // "Rainy Castform"
//	"0351-snowy": {ico: "0351-snowy", flags: []}, // "Snowy Castform"
	"0352": {ico: "0352", flags: []}, // "Kecleon"
	"0353": {ico: "0353", flags: []}, // "Shuppet"
	"0354": {ico: "0354", flags: []}, // "Banette"
//	"0354-mega": {ico: "0354-mega", flags: []}, // "Mega Banette"
	"0355": {ico: "0355", flags: []}, // "Duskull"
	"0356": {ico: "0356", flags: []}, // "Dusclops"
	"0477": {ico: "0477", flags: []}, // "Dusknoir"
	"0357": {ico: "0357", flags: []}, // "Tropius"
	"0433": {ico: "0433", flags: []}, // "Chingling"
	"0358": {ico: "0358", flags: []}, // "Chimecho"
	"0359": {ico: "0359", flags: []}, // "Absol"
//	"0359-mega": {ico: "0359-mega", flags: []}, // "Mega Absol"
	"0361": {ico: "0361", flags: []}, // "Snorunt"
	"0362": {ico: "0362", flags: []}, // "Glalie"
//	"0362-mega": {ico: "0362-mega", flags: []}, // "Mega Glalie"
	"0478": {ico: "0478", flags: []}, // "Froslass" // female only
	"0363": {ico: "0363", flags: []}, // "Spheal"
	"0364": {ico: "0364", flags: []}, // "Sealeo"
	"0365": {ico: "0365", flags: []}, // "Walrein"
	"0366": {ico: "0366", flags: []}, // "Clamperl"
	"0367": {ico: "0367", flags: []}, // "Huntail"
	"0368": {ico: "0368", flags: []}, // "Gorebyss"
//	"0369": {ico: "0369", flags: []}, // "Relicanth"
	"0369-m": {ico: "0369-m", flags: []}, // "Relicanth♂"
	"0369-f": {ico: "0369-f", flags: []}, // "Relicanth♀"
	"0370": {ico: "0370", flags: []}, // "Luvdisc"
	"0371": {ico: "0371", flags: []}, // "Bagon"
	"0372": {ico: "0372", flags: []}, // "Shelgon"
	"0373": {ico: "0373", flags: []}, // "Salamence"
//	"0373-mega": {ico: "0373-mega", flags: []}, // "Mega Salamence"
	"0374": {ico: "0374", flags: []}, // "Beldum" // uknown gender
	"0375": {ico: "0375", flags: []}, // "Metang" // uknown gender
	"0376": {ico: "0376", flags: []}, // "Metagross" // uknown gender
//	"0376-mega": {ico: "0376-mega", flags: []}, // "Mega Metagross" // uknown gender
	"0377": {ico: "0377", flags: []}, // "Regirock" // uknown gender
	"0378": {ico: "0378", flags: []}, // "Regice" // uknown gender
	"0379": {ico: "0379", flags: []}, // "Registeel" // uknown gender
	"0894": {ico: "0894", flags: []}, // "Regieleki" // uknown gender
	"0895": {ico: "0895", flags: []}, // "Regidrago" uknown gender
	"0486": {ico: "0486", flags: []}, // "Regigigas" // uknown gender
	"0380": {ico: "0380", flags: []}, // "Latias" // female only
//	"0380-mega": {ico: "0380-mega", flags: []}, // "Mega Latias" // female only
	"0381": {ico: "0381", flags: []}, // "Latios" // male only
//	"0381-mega": {ico: "0381-mega", flags: []}, // "Mega Latios" // male only
	"0382": {ico: "0382", flags: []}, // "Kyogre" // uknown gender
//	"0382-primal": {ico: "0382-primal", flags: []}, // "Primal Kyogre" // uknown gender
	"0383": {ico: "0383", flags: []}, // "Groudon" // uknown gender
//	"0383-primal": {ico: "0383-primal", flags: []}, // "Primal Groudon" // uknown gender
	"0384": {ico: "0384", flags: []}, // "Rayquaza" // uknown gender
//	"0384-mega": {ico: "0384-mega", flags: []}, // "Mega Rayquaza" // uknown gender
	"0385": {ico: "0385", flags: []}, // "Jirachi" // uknown gender
	"0386": {ico: "0386", flags: []}, // "Deoxys" // uknown gender
	"0386-attack": {ico: "0386-attack", flags: []}, // "Attack Deoxys" // uknown gender
	"0386-defense": {ico: "0386-defense", flags: []}, // "Defense Deoxys" // uknown gender
	"0386-speed": {ico: "0386-speed", flags: []}, // "Speed Deoxys" // uknown gender
	"0387": {ico: "0387", flags: []}, // "Turtwig"
	"0388": {ico: "0388", flags: []}, // "Grotle"
	"0389": {ico: "0389", flags: []}, // "Torterra"
	"0390": {ico: "0390", flags: []}, // "Chimchar"
	"0391": {ico: "0391", flags: []}, // "Monferno"
	"0392": {ico: "0392", flags: []}, // "Infernape"
	"0393": {ico: "0393", flags: []}, // "Piplup"
	"0394": {ico: "0394", flags: []}, // "Prinplup"
	"0395": {ico: "0395", flags: []}, // "Empoleon"
//	"0396": {ico: "0396", flags: []}, // "Starly"
	"0396-m": {ico: "0396-m", flags: []}, // "Starly♂"
	"0396-f": {ico: "0396-f", flags: []}, // "Starly♀"
//	"0397": {ico: "0397", flags: []}, // "Staravia"
	"0397-m": {ico: "0397-m", flags: []}, // "Staravia♂"
	"0397-f": {ico: "0397-f", flags: []}, // "Staravia♀"
//	"0398": {ico: "0398", flags: []}, // "Staraptor"
	"0398-m": {ico: "0398-m", flags: []}, // "Staraptor♂"
	"0398-f": {ico: "0398-f", flags: []}, // "Staraptor♀"
//	"0399": {ico: "0399", flags: []}, // "Bidoof"
	"0399-m": {ico: "0399-m", flags: []}, // "Bidoof♂"
	"0399-f": {ico: "0399-f", flags: []}, // "Bidoof♀"
//	"0400": {ico: "0400", flags: []}, // "Bibarel"
	"0400-m": {ico: "0400-m", flags: []}, // "Bibarel♂"
	"0400-f": {ico: "0400-f", flags: []}, // "Bibarel♀"
//	"0401": {ico: "0401", flags: []}, // "Kricketot"
	"0401-m": {ico: "0401-m", flags: []}, // "Kricketot♂"
	"0401-f": {ico: "0401-f", flags: []}, // "Kricketot♀"
//	"0402": {ico: "0402", flags: []}, // "Kricketune"
	"0402-m": {ico: "0402-m", flags: []}, // "Kricketune♂"
	"0402-f": {ico: "0402-f", flags: []}, // "Kricketune♀"
//	"0403": {ico: "0403", flags: []}, // "Shinx"
	"0403-m": {ico: "0403-m", flags: []}, // "Shinx♂"
	"0403-f": {ico: "0403-f", flags: []}, // "Shinx♀"
//	"0404": {ico: "0404", flags: []}, // "Luxio"
	"0404-m": {ico: "0404-m", flags: []}, // "Luxio♂"
	"0404-f": {ico: "0404-f", flags: []}, // "Luxio♀"
//	"0405": {ico: "0405", flags: []}, // "Luxray"
	"0405-m": {ico: "0405-m", flags: []}, // "Luxray♂"
	"0405-f": {ico: "0405-f", flags: []}, // "Luxray♀"
//	"0412": {ico: "0412", flags: []}, // "Burmy"
//	"0413": {ico: "0413", flags: []}, // "Wormadam" // female only
	"0412-plant": {ico: "0412-plant", flags: []}, // "Burmy Plant Cloak"
	"0413-plant": {ico: "0413-plant", flags: []}, // "Wormadam Plant Cloak" // female only
	"0412-sandy": {ico: "0412-sandy", flags: []}, // "Burmy Sandy Cloak"
	"0413-sandy": {ico: "0413-sandy", flags: []}, // "Wormadam Sandy Cloak" // female only
	"0412-trash": {ico: "0412-trash", flags: []}, // "Burmy Trash Cloak"
	"0413-trash": {ico: "0413-trash", flags: []}, // "Wormadam Trash Cloak" // female only
	"0414": {ico: "0414", flags: []}, // "Mothim" // male only
//	"0415": {ico: "0415", flags: []}, // "Combee"
	"0415-m": {ico: "0415-m", flags: []}, // "Combee♂"
	"0415-f": {ico: "0415-f", flags: []}, // "Combee♀"
	"0416": {ico: "0416", flags: []}, // "Vespiquen" // female only
//	"0417": {ico: "0417", flags: []}, // "Pachirisu"
	"0417-m": {ico: "0417-m", flags: []}, // "Pachirisu♂"
	"0417-f": {ico: "0417-f", flags: []}, // "Pachirisu♀"
//	"0418": {ico: "0418", flags: []}, // "Buizel"
	"0418-m": {ico: "0418-m", flags: []}, // "Buizel♂"
	"0418-f": {ico: "0418-f", flags: []}, // "Buizel♀"
//	"0419": {ico: "0419", flags: []}, // "Floatzel"
	"0419-m": {ico: "0419-m", flags: []}, // "Floatzel♂"
	"0419-f": {ico: "0419-f", flags: []}, // "Floatzel♀"
	"0420": {ico: "0420", flags: []}, // "Cherubi"
//	"0421": {ico: "0421", flags: []}, // "Cherrim"
	"0421-overcast": {ico: "0421-overcast", flags: []}, // "Overcast Cherrim"
//	"0421-sunshine": {ico: "0421-sunshine", flags: []}, // "Sunshine Cherrim"
//	"0422": {ico: "0422", flags: []}, // "Shellos"
//	"0423": {ico: "0423", flags: []}, // "Gastrodon"
	"0422-west": {ico: "0422-west", flags: []}, // "West Sea Shellos"
	"0423-west": {ico: "0423-west", flags: []}, // "West Sea Gastrodon"
	"0422-east": {ico: "0422-east", flags: []}, // "East Sea Shellos"
	"0423-east": {ico: "0423-east", flags: []}, // "East Sea Gastrodon"
	"0425": {ico: "0425", flags: []}, // "Drifloon"
	"0426": {ico: "0426", flags: []}, // "Drifblim"
	"0427": {ico: "0427", flags: []}, // "Buneary"
	"0428": {ico: "0428", flags: []}, // "Lopunny"
//	"0428-mega": {ico: "0428-mega", flags: []}, // "Mega Lopunny"
	"0431": {ico: "0431", flags: []}, // "Glameow"
	"0432": {ico: "0432", flags: []}, // "Purugly"
	"0434": {ico: "0434", flags: []}, // "Stunky"
	"0435": {ico: "0435", flags: []}, // "Skuntank"
	"0436": {ico: "0436", flags: []}, // "Bronzor" // uknown gender
	"0437": {ico: "0437", flags: []}, // "Bronzong" // uknown gender
	"0441": {ico: "0441", flags: []}, // "Chatot"
	"0442": {ico: "0442", flags: []}, // "Spiritomb"
//	"0443": {ico: "0443", flags: []}, // "Gible"
	"0443-m": {ico: "0443-m", flags: []}, // "Gible♂"
	"0443-f": {ico: "0443-f", flags: []}, // "Gible♀"
//	"0444": {ico: "0444", flags: []}, // "Gabite"
	"0444-m": {ico: "0444-m", flags: []}, // "Gabite♂"
	"0444-f": {ico: "0444-f", flags: []}, // "Gabite♀"
//	"0445": {ico: "0445", flags: []}, // "Garchomp"
	"0445-m": {ico: "0445-m", flags: []}, // "Garchomp♂"
	"0445-f": {ico: "0445-f", flags: []}, // "Garchomp♀"
//	"0445-mega": {ico: "0445-mega", flags: []}, // "Mega Garchomp"
	"0447": {ico: "0447", flags: []}, // "Riolu"
	"0448": {ico: "0448", flags: []}, // "Lucario"
//	"0448-mega": {ico: "0448-mega", flags: []}, // "Mega Lucario"
//	"0449": {ico: "0449", flags: []}, // "Hippopotas"
	"0449-m": {ico: "0449-m", flags: []}, // "Hippopotas♂"
	"0449-f": {ico: "0449-f", flags: []}, // "Hippopotas♀"
//	"0450": {ico: "0450", flags: []}, // "Hippowdon"
	"0450-m": {ico: "0450-m", flags: []}, // "Hippowdon♂"
	"0450-f": {ico: "0450-f", flags: []}, // "Hippowdon♀"
	"0451": {ico: "0451", flags: []}, // "Skorupi"
	"0452": {ico: "0452", flags: []}, // "Drapion"
//	"0453": {ico: "0453", flags: []}, // "Croagunk"
	"0453-m": {ico: "0453-m", flags: []}, // "Croagunk♂"
	"0453-f": {ico: "0453-f", flags: []}, // "Croagunk♀"
//	"0454": {ico: "0454", flags: []}, // "Toxicroak"
	"0454-m": {ico: "0454-m", flags: []}, // "Toxicroak♂"
	"0454-f": {ico: "0454-f", flags: []}, // "Toxicroak♀"
	"0455": {ico: "0455", flags: []}, // "Carnivine"
//	"0456": {ico: "0456", flags: []}, // "Finneon"
	"0456-m": {ico: "0456-m", flags: []}, // "Finneon♂"
	"0456-f": {ico: "0456-f", flags: []}, // "Finneon♀"
//	"0457": {ico: "0457", flags: []}, // "Lumineon"
	"0457-m": {ico: "0457-m", flags: []}, // "Lumineon♂"
	"0457-f": {ico: "0457-f", flags: []}, // "Lumineon♀"
//	"0459": {ico: "0459", flags: []}, // "Snover"
	"0459-m": {ico: "0459-m", flags: []}, // "Snover♂"
	"0459-f": {ico: "0459-f", flags: []}, // "Snover♀"
//	"0460": {ico: "0460", flags: []}, // "Abomasnow"
	"0460-m": {ico: "0460-m", flags: []}, // "Abomasnow♂"
	"0460-f": {ico: "0460-f", flags: []}, // "Abomasnow♀"
//	"0460-mega": {ico: "0460-mega", flags: []}, // "Mega Abomasnow"
	"0479": {ico: "0479", flags: []}, // "Rotom" // uknown gender
	"0479-heat": {ico: "0479-heat", flags: []}, // "Heat Rotom" // uknown gender
	"0479-wash": {ico: "0479-wash", flags: []}, // "Wash Rotom" // uknown gender
	"0479-frost": {ico: "0479-frost", flags: []}, // "Frost Rotom" // uknown gender
	"0479-fan": {ico: "0479-fan", flags: []}, // "Fan Rotom" // uknown gender
	"0479-mow": {ico: "0479-mow", flags: []}, // "Mow Rotom" // uknown gender
//	"0479-dex": {ico: "0479-dex", flags: []}, // "Pokédex Rotom" // uknown gender// unofficial
//	"0479-phone": {ico: "0479-phone", flags: []}, // "Phone Rotom" // uknown gender// unofficial
//	"0479-rotomi": {ico: "0479-rotomi", flags: []}, // "Rotomi" // uknown gender// unofficial
//	"0479-drone": {ico: "0479-drone", flags: []}, // "Drone Rotom" // uknown gender// unofficial
//	"0479-bike": {ico: "0479-bike", flags: []}, // "Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-water-bike": {ico: "0479-water-bike", flags: []}, // "Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-white-bike": {ico: "0479-white-bike", flags: []}, // "Sparkling White Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-white-water-bike": {ico: "0479-white-water-bike", flags: []}, // "Sparkling White Rotom Bike, Water Mode" // uknown gender// unofficial
//	"0479-black-bike": {ico: "0479-black-bike", flags: []}, // "Glistening Black Rotom Bike, Land Mode" // uknown gender// unofficial
//	"0479-black-water-bike": {ico: "0479-black-water-bike", flags: []}, // "Glistening Black Rotom Bike, Water Mode" // uknown gender// unofficial
	"0480": {ico: "0480", flags: []}, // "Uxie" // uknown gender
	"0481": {ico: "0481", flags: []}, // "Mesprit" // uknown gender
	"0482": {ico: "0482", flags: []}, // "Azelf" // uknown gender
	"0483": {ico: "0483", flags: []}, // "Dialga" // uknown gender
	"0484": {ico: "0484", flags: []}, // "Palkia" // uknown gender
	"0485": {ico: "0485", flags: []}, // "Heatran"
//	"0487": {ico: "0487", flags: []}, // "Giratina" // uknown gender
	"0487-altered": {ico: "0487-altered", flags: []}, // "Giratina Altered Forme" // uknown gender
//	"0487-origin": {ico: "0487-origin", flags: []}, // "Giratina Origin Forme" // uknown gender
	"0488": {ico: "0488", flags: []}, // "Cresselia" // female only
	"0489": {ico: "0489", flags: []}, // "Phione" // uknown gender
	"0490": {ico: "0490", flags: []}, // "Manaphy" // uknown gender
	"0491": {ico: "0491", flags: []}, // "Darkrai" // uknown gender
//	"0492": {ico: "0492", flags: []}, // "Shaymin" // uknown gender
	"0492-land": {ico: "0492-land", flags: []}, // "Shaymin Land Forme" // uknown gender
//	"0492-sky": {ico: "0492-sky", flags: []}, // "Shaymin Sky Forme" // uknown gender
	"0493": {ico: "0493", flags: []}, // "Arceus" // uknown gender
//	"0493-fighting": {ico: "0493-fighting", flags: []}, // "Fighting Arceus" // uknown gender
//	"0493-flying": {ico: "0493-flying", flags: []}, // "Flying Arceus" // uknown gender
//	"0493-poison": {ico: "0493-poison", flags: []}, // "Poison Arceus" // uknown gender
//	"0493-ground": {ico: "0493-ground", flags: []}, // "Ground Arceus" // uknown gender
//	"0493-rock": {ico: "0493-rock", flags: []}, // "Rock Arceus" // uknown gender
//	"0493-bug": {ico: "0493-bug", flags: []}, // "Bug Arceus" // uknown gender
//	"0493-ghost": {ico: "0493-ghost", flags: []}, // "Ghost Arceus" // uknown gender
//	"0493-steel": {ico: "0493-steel", flags: []}, // "Steel Arceus" // uknown gender
//	"0493-fire": {ico: "0493-fire", flags: []}, // "Fire Arceus" // uknown gender
//	"0493-water": {ico: "0493-water", flags: []}, // "Water Arceus" // uknown gender
//	"0493-grass": {ico: "0493-grass", flags: []}, // "Grass Arceus" // uknown gender
//	"0493-electric": {ico: "0493-electric", flags: []}, // "Electric Arceus" // uknown gender
//	"0493-psychic": {ico: "0493-psychic", flags: []}, // "Psychic Arceus" // uknown gender
//	"0493-ice": {ico: "0493-ice", flags: []}, // "Ice Arceus" // uknown gender
//	"0493-dragon": {ico: "0493-dragon", flags: []}, // "Dragon Arceus" // uknown gender
//	"0493-dark": {ico: "0493-dark", flags: []}, // "Dark Arceus" // uknown gender
//	"0493-fairy": {ico: "0493-fairy", flags: []}, // "Fairy Arceus" // uknown gender
	"0494": {ico: "0494", flags: []}, // "Victini" // uknown gender
	"0495": {ico: "0495", flags: []}, // "Snivy"
	"0496": {ico: "0496", flags: []}, // "Servine"
	"0497": {ico: "0497", flags: []}, // "Serperior"
	"0498": {ico: "0498", flags: []}, // "Tepig"
	"0499": {ico: "0499", flags: []}, // "Pignite"
	"0500": {ico: "0500", flags: []}, // "Emboar"
	"0501": {ico: "0501", flags: []}, // "Oshawott"
	"0502": {ico: "0502", flags: []}, // "Dewott"
	"0503": {ico: "0503", flags: []}, // "Samurott"
	"0504": {ico: "0504", flags: []}, // "Patrat"
	"0505": {ico: "0505", flags: []}, // "Watchog"
	"0506": {ico: "0506", flags: []}, // "Lillipup"
	"0507": {ico: "0507", flags: []}, // "Herdier"
	"0508": {ico: "0508", flags: []}, // "Stoutland"
	"0509": {ico: "0509", flags: []}, // "Purrloin"
	"0510": {ico: "0510", flags: []}, // "Liepard"
	"0511": {ico: "0511", flags: []}, // "Pansage"
	"0512": {ico: "0512", flags: []}, // "Simisage"
	"0513": {ico: "0513", flags: []}, // "Pansear"
	"0514": {ico: "0514", flags: []}, // "Simisear"
	"0515": {ico: "0515", flags: []}, // "Panpour"
	"0516": {ico: "0516", flags: []}, // "Simipour"
	"0517": {ico: "0517", flags: []}, // "Munna"
	"0518": {ico: "0518", flags: []}, // "Musharna"
	"0519": {ico: "0519", flags: []}, // "Pidove"
	"0520": {ico: "0520", flags: []}, // "Tranquill"
//	"0521": {ico: "0521", flags: []}, // "Unfezant"
	"0521-m": {ico: "0521-m", flags: []}, // "Unfezant♂"
	"0521-f": {ico: "0521-f", flags: []}, // "Unfezan♀"
	"0522": {ico: "0522", flags: []}, // "Blitzle"
	"0523": {ico: "0523", flags: []}, // "Zebstrika"
	"0524": {ico: "0524", flags: []}, // "Roggenrola"
	"0525": {ico: "0525", flags: []}, // "Boldore"
	"0526": {ico: "0526", flags: []}, // "Gigalith"
	"0527": {ico: "0527", flags: []}, // "Woobat"
	"0528": {ico: "0528", flags: []}, // "Swoobat"
	"0529": {ico: "0529", flags: []}, // "Drilbur"
	"0530": {ico: "0530", flags: []}, // "Excadrill"
	"0531": {ico: "0531", flags: []}, // "Audino"
//	"0531-mega": {ico: "0531-mega", flags: []}, // "Mega Audino"
	"0532": {ico: "0532", flags: []}, // "Timburr"
	"0533": {ico: "0533", flags: []}, // "Gurdurr"
	"0534": {ico: "0534", flags: []}, // "Conkeldurr"
	"0535": {ico: "0535", flags: []}, // "Tympole"
	"0536": {ico: "0536", flags: []}, // "Palpitoad"
	"0537": {ico: "0537", flags: []}, // "Seismitoad"
	"0538": {ico: "0538", flags: []}, // "Throh" // male only
	"0539": {ico: "0539", flags: []}, // "Sawk" // male only
	"0540": {ico: "0540", flags: []}, // "Sewaddle"
	"0541": {ico: "0541", flags: []}, // "Swadloon"
	"0542": {ico: "0542", flags: []}, // "Leavanny"
	"0543": {ico: "0543", flags: []}, // "Venipede"
	"0544": {ico: "0544", flags: []}, // "Whirlipede"
	"0545": {ico: "0545", flags: []}, // "Scolipede"
	"0546": {ico: "0546", flags: []}, // "Cottonee"
	"0547": {ico: "0547", flags: []}, // "Whimsicott"
	"0548": {ico: "0548", flags: []}, // "Petilil" // female only
	"0549": {ico: "0549", flags: []}, // "Lilligant" // female only
//	"0550": {ico: "0550", flags: []}, // "Basculin"
	"0550-red": {ico: "0550-red", flags: []}, // "Red-striped Basculin"
	"0550-blue": {ico: "0550-blue", flags: []}, // "Blue-striped Basculin"
	"0551": {ico: "0551", flags: []}, // "Sandile"
	"0552": {ico: "0552", flags: []}, // "Krokorok"
	"0553": {ico: "0553", flags: []}, // "Krookodile"
	"0554": {ico: "0554", flags: []}, // "Darumaka"
//	"0555": {ico: "0555", flags: []}, // "Darmanitan"
	"0555-standard": {ico: "0555-standard", flags: []}, // "Darmanitan Standard Mode"
//	"0555-zen": {ico: "0555-zen", flags: []}, // "Darmanitan Zen Mode"
	"0554-galar": {ico: "0554-galar", flags: []}, // "Galarian Darumaka"
//	"0555-galar": {ico: "0555-galar", flags: []}, // "Galarian Darmanitan"
	"0555-standard-galar": {ico: "0555-standard-galar", flags: []}, // "Galarian Darmanitan Standard Mode"
//	"0555-zen-galar": {ico: "0555-zen-galar", flags: []}, // "Galarian Darmanitan Zen Mode"
	"0556": {ico: "0556", flags: []}, // "Maractus"
	"0557": {ico: "0557", flags: []}, // "Dwebble"
	"0558": {ico: "0558", flags: []}, // "Crustle"
	"0559": {ico: "0559", flags: []}, // "Scraggy"
	"0560": {ico: "0560", flags: []}, // "Scrafty"
	"0561": {ico: "0561", flags: []}, // "Sigilyph"
	"0562": {ico: "0562", flags: []}, // "Yamask"
	"0563": {ico: "0563", flags: []}, // "Cofagrigus"
	"0562-galar": {ico: "0562-galar", flags: []}, // "Galarian Yamask"
	"0867": {ico: "0867", flags: []}, // "Runerigus"
	"0568": {ico: "0568", flags: []}, // "Trubbish"
	"0569": {ico: "0569", flags: []}, // "Garbodor"
	"0569-gmax": {ico: "0569-gmax", flags: []}, // "Gigantamax Garbodor"
	"0570": {ico: "0570", flags: []}, // "Zorua"
	"0571": {ico: "0571", flags: []}, // "Zoroark"
	"0572": {ico: "0572", flags: []}, // "Minccino"
	"0573": {ico: "0573", flags: []}, // "Cinccino"
	"0574": {ico: "0574", flags: []}, // "Gothita"
	"0575": {ico: "0575", flags: []}, // "Gothorita"
	"0576": {ico: "0576", flags: []}, // "Gothitelle"
	"0577": {ico: "0577", flags: []}, // "Solosis"
	"0578": {ico: "0578", flags: []}, // "Duosion"
	"0579": {ico: "0579", flags: []}, // "Reuniclus"
	"0580": {ico: "0580", flags: []}, // "Ducklett"
	"0581": {ico: "0581", flags: []}, // "Swanna"
	"0582": {ico: "0582", flags: []}, // "Vanillite"
	"0583": {ico: "0583", flags: []}, // "Vanillish"
	"0584": {ico: "0584", flags: []}, // "Vanilluxe"
//	"0585": {ico: "0585", flags: []}, // "Deerling"
	"0585-spring": {ico: "0585-spring", flags: []}, // "Spring Deerling"
	"0585-summer": {ico: "0585-summer", flags: []}, // "Summer Deerling"
	"0585-autumn": {ico: "0585-autumn", flags: []}, // "Autumn Deerling"
	"0585-winter": {ico: "0585-winter", flags: []}, // "Winter Deerling"
//	"0586": {ico: "0586", flags: []}, // "Sawsbuck"
	"0586-spring": {ico: "0586-spring", flags: []}, // "Spring Sawsbuck"
	"0586-summer": {ico: "0586-summer", flags: []}, // "Summer Sawsbuck"
	"0586-autumn": {ico: "0586-autumn", flags: []}, // "Autumn Sawsbuck"
	"0586-winter": {ico: "0586-winter", flags: []}, // "Winter Sawsbuck"
	"0587": {ico: "0587", flags: []}, // "Emolga"
	"0588": {ico: "0588", flags: []}, // "Karrablast"
	"0589": {ico: "0589", flags: []}, // "Escavalier"
	"0616": {ico: "0616", flags: []}, // "Shelmet"
	"0617": {ico: "0617", flags: []}, // "Accelgor"
	"0590": {ico: "0590", flags: []}, // "Foongus"
	"0591": {ico: "0591", flags: []}, // "Amoonguss"
//	"0592": {ico: "0592", flags: []}, // "Frillish"
//	"0593": {ico: "0593", flags: []}, // "Jellicent"
	"0592-m": {ico: "0592-m", flags: []}, // "Frillish♂"
	"0593-m": {ico: "0593-m", flags: []}, // "Jellicent♂"
	"0592-f": {ico: "0592-f", flags: []}, // "Frillish♀"
	"0593-f": {ico: "0593-f", flags: []}, // "Jellicent♀"
	"0594": {ico: "0594", flags: []}, // "Alomomola"
	"0595": {ico: "0595", flags: []}, // "Joltik"
	"0596": {ico: "0596", flags: []}, // "Galvantula"
	"0597": {ico: "0597", flags: []}, // "Ferroseed"
	"0598": {ico: "0598", flags: []}, // "Ferrothorn"
	"0599": {ico: "0599", flags: []}, // "Klink" // uknown gender
	"0600": {ico: "0600", flags: []}, // "Klang" // uknown gender
	"0601": {ico: "0601", flags: []}, // "Klinklang" // uknown gender
	"0602": {ico: "0602", flags: []}, // "Tynamo"
	"0603": {ico: "0603", flags: []}, // "Eelektrik"
	"0604": {ico: "0604", flags: []}, // "Eelektross"
	"0605": {ico: "0605", flags: []}, // "Elgyem"
	"0606": {ico: "0606", flags: []}, // "Beheeyem"
	"0607": {ico: "0607", flags: []}, // "Litwick"
	"0608": {ico: "0608", flags: []}, // "Lampent"
	"0609": {ico: "0609", flags: []}, // "Chandelure"
	"0610": {ico: "0610", flags: []}, // "Axew"
	"0611": {ico: "0611", flags: []}, // "Fraxure"
	"0612": {ico: "0612", flags: []}, // "Haxorus"
	"0613": {ico: "0613", flags: []}, // "Cubchoo"
	"0614": {ico: "0614", flags: []}, // "Beartic"
	"0615": {ico: "0615", flags: []}, // "Cryogonal" // uknown gender
	"0618": {ico: "0618", flags: []}, // "Stunfisk"
	"0618-galar": {ico: "0618-galar", flags: []}, // "Galarian Stunfisk"
	"0619": {ico: "0619", flags: []}, // "Mienfoo"
	"0620": {ico: "0620", flags: []}, // "Mienshao"
	"0621": {ico: "0621", flags: []}, // "Druddigon"
	"0622": {ico: "0622", flags: []}, // "Golett" // uknown gender
	"0623": {ico: "0623", flags: []}, // "Golurk" // uknown gender
	"0624": {ico: "0624", flags: []}, // "Pawniard"
	"0625": {ico: "0625", flags: []}, // "Bisharp"
	"0626": {ico: "0626", flags: []}, // "Bouffalant"
	"0627": {ico: "0627", flags: []}, // "Rufflet" // male only
	"0628": {ico: "0628", flags: []}, // "Braviary" // male only
	"0629": {ico: "0629", flags: []}, // "Vullaby" // female only
	"0630": {ico: "0630", flags: []}, // "Mandibuzz" // female only
	"0631": {ico: "0631", flags: []}, // "Heatmor"
	"0632": {ico: "0632", flags: []}, // "Durant"
	"0633": {ico: "0633", flags: []}, // "Deino"
	"0634": {ico: "0634", flags: []}, // "Zweilous"
	"0635": {ico: "0635", flags: []}, // "Hydreigon"
	"0636": {ico: "0636", flags: []}, // "Larvesta"
	"0637": {ico: "0637", flags: []}, // "Volcarona"
	"0638": {ico: "0638", flags: []}, // "Cobalion" // uknown gender
	"0639": {ico: "0639", flags: []}, // "Terrakion" // uknown gender
	"0640": {ico: "0640", flags: []}, // "Virizion" // uknown gender
//	"0641": {ico: "0641", flags: []}, // "Tornadus" // male only
//	"0642": {ico: "0642", flags: []}, // "Thundurus" // male only
//	"0645": {ico: "0645", flags: []}, // "Landorus" // male only
	"0641-incarnate": {ico: "0641-incarnate", flags: []}, // "Incarnate Forme Tornadus" // male only
	"0642-incarnate": {ico: "0642-incarnate", flags: []}, // "Incarnate Forme Thundurus" // male only
	"0645-incarnate": {ico: "0645-incarnate", flags: []}, // "Incarnate Forme Landorus" // male only
	"0641-therian": {ico: "0641-therian", flags: []}, // "Therian Forme Tornadus" // male only
	"0642-therian": {ico: "0642-therian", flags: []}, // "Therian Forme Thundurus" // male only
	"0645-therian": {ico: "0645-therian", flags: []}, // "Therian Forme Landorus" // male only
	"0643": {ico: "0643", flags: []}, // "Reshiram" // uknown gender
	"0644": {ico: "0644", flags: []}, // "Zekrom" // uknown gender
	"0646": {ico: "0646", flags: []}, // "Kyurem" // uknown gender
//	"0646-white": {ico: "0646-white", flags: []}, // "White Kyurem" // uknown gender
//	"0646-black": {ico: "0646-black", flags: []}, // "Black Kyurem" // uknown gender
//	"0647": {ico: "0647", flags: []}, // "Keldeo" // uknown gender
	"0647-ordinary": {ico: "0647-ordinary", flags: []}, // "Ordinary Form Keldeo" // uknown gender
	"0647-resolute": {ico: "0647-resolute", flags: []}, // "Resolute Form Keldeo" // uknown gender
//	"0648": {ico: "0648", flags: []}, // "Meloetta" // uknown gender
	"0648-aria": {ico: "0648-aria", flags: []}, // "Aria Forme Meloetta" // uknown gender
	"0648-pirouette": {ico: "0648-pirouette", flags: []}, // "Pirouette Forme Meloetta" // uknown gender
	"0649": {ico: "0649", flags: []}, // "Genesect" // uknown gender
//	"0649-douse": {ico: "0649-douse", flags: []}, // "Douse Drive Genesect" // uknown gender
//	"0649-shock": {ico: "0649-shock", flags: []}, // "Shock Drive Genesect" // uknown gender
//	"0649-burn": {ico: "0649-burn", flags: []}, // "Burn Drive Genesect" // uknown gender
//	"0649-chill": {ico: "0649-chill", flags: []}, // "Chill Drive Genesect" // uknown gender
	"0650": {ico: "0650", flags: []}, // "Chespin"
	"0651": {ico: "0651", flags: []}, // "Quilladin"
	"0652": {ico: "0652", flags: []}, // "Chesnaught"
	"0653": {ico: "0653", flags: []}, // "Fennekin"
	"0654": {ico: "0654", flags: []}, // "Braixen"
	"0655": {ico: "0655", flags: []}, // "Delphox"
	"0656": {ico: "0656", flags: []}, // "Froakie"
	"0657": {ico: "0657", flags: []}, // "Frogadier"
	"0658": {ico: "0658", flags: []}, // "Greninja"
	"0658-ash": {ico: "0658-ash", flags: []}, // "Ash-Greninja" // male only
	"0659": {ico: "0659", flags: []}, // "Bunnelby"
	"0660": {ico: "0660", flags: []}, // "Diggersby"
	"0661": {ico: "0661", flags: []}, // "Fletchling"
	"0662": {ico: "0662", flags: []}, // "Fletchinder"
	"0663": {ico: "0663", flags: []}, // "Talonflame"
	"0664": {ico: "0664", flags: []}, // "Scatterbug"
	"0665": {ico: "0665", flags: []}, // "Spewpa"
//	"0666": {ico: "0666", flags: []}, // "Vivillon"
	"0666-icy-snow": {ico: "0666-icy-snow", flags: []}, // "Icy Snow Pattern Vivillon"
	"0666-polar": {ico: "0666-polar", flags: []}, // "Polar Pattern Vivillon"
	"0666-tundra": {ico: "0666-tundra", flags: []}, // "Tundra Pattern Vivillon"
	"0666-continental": {ico: "0666-continental", flags: []}, // "Continental Pattern Vivillon"
	"0666-garden": {ico: "0666-garden", flags: []}, // "Garden Pattern Vivillon"
	"0666-elegant": {ico: "0666-elegant", flags: []}, // "Elegant Pattern Vivillon"
	"0666-meadow": {ico: "0666-meadow", flags: []}, // "Meadow Pattern Vivillon"
	"0666-modern": {ico: "0666-modern", flags: []}, // "Modern Pattern Vivillon"
	"0666-marine": {ico: "0666-marine", flags: []}, // "Marine Pattern Vivillon"
	"0666-archipelago": {ico: "0666-archipelago", flags: []}, // "Archipelago Pattern Vivillon"
	"0666-high-plains": {ico: "0666-high-plains", flags: []}, // "High Plains Pattern Vivillon"
	"0666-sandstorm": {ico: "0666-sandstorm", flags: []}, // "Sandstorm Pattern Vivillon"
	"0666-river": {ico: "0666-river", flags: []}, // "River Pattern Vivillon"
	"0666-monsoon": {ico: "0666-monsoon", flags: []}, // "Monsoon Pattern Vivillon"
	"0666-savanna": {ico: "0666-savanna", flags: []}, // "Savanna Pattern Vivillon"
	"0666-sun": {ico: "0666-sun", flags: []}, // "Sun Pattern Vivillon"
	"0666-ocean": {ico: "0666-ocean", flags: []}, // "Ocean Pattern Vivillon"
	"0666-jungle": {ico: "0666-jungle", flags: []}, // "Jungle Pattern Vivillon"
	"0666-fancy": {ico: "0666-fancy", flags: []}, // "Fancy Pattern Vivillon"
	"0666-poke-ball": {ico: "0666-poke-ball", flags: []}, // "Poké Ball Pattern Vivillon"
	"0667": {ico: "0667", flags: []}, // "Litleo"
//	"0668": {ico: "0668", flags: []}, // "Pyroar"
	"0668-m": {ico: "0668-m", flags: []}, // "Pyroar♂"
	"0668-f": {ico: "0668-f", flags: []}, // "Pyroar♀"
//	"0669": {ico: "0669", flags: []}, // "Flabébé" // female only
//	"0670": {ico: "0670", flags: []}, // "Floette" // female only
//	"0671": {ico: "0671", flags: []}, // "Florges" // female only
	"0669-red": {ico: "0669-red", flags: []}, // "Red Flower Flabébé" // female only
	"0670-red": {ico: "0670-red", flags: []}, // "Red Flower Floette" // female only
	"0671-red": {ico: "0671-red", flags: []}, // "Red Flower Florges" // female only
	"0669-yellow": {ico: "0669-yellow", flags: []}, // "Yellow Flower Flabébé" // female only
	"0670-yellow": {ico: "0670-yellow", flags: []}, // "Yellow Flower Floette" // female only
	"0671-yellow": {ico: "0671-yellow", flags: []}, // "Yellow Flower Florges" // female only
	"0669-orange": {ico: "0669-orange", flags: []}, // "Orange Flower Flabébé" // female only
	"0670-orange": {ico: "0670-orange", flags: []}, // "Orange Flower Floette" // female only
	"0671-orange": {ico: "0671-orange", flags: []}, // "Orange Flower Florges" // female only
	"0669-blue": {ico: "0669-blue", flags: []}, // "Blue Flower Flabébé" // female only
	"0670-blue": {ico: "0670-blue", flags: []}, // "Blue Flower Floette" // female only
	"0671-blue": {ico: "0671-blue", flags: []}, // "Blue Flower Florges" // female only
	"0669-white": {ico: "0669-white", flags: []}, // "White Flower Flabébé" // female only
	"0670-white": {ico: "0670-white", flags: []}, // "White Flower Floette" // female only
	"0671-white": {ico: "0671-white", flags: []}, // "White Flower Florges" // female only
//	"0670-eternal": {ico: "0670-eternal", flags: []}, // "Eternal Flower Floette" // female only
	"0672": {ico: "0672", flags: []}, // "Skiddo"
	"0673": {ico: "0673", flags: []}, // "Gogoat"
	"0674": {ico: "0674", flags: []}, // "Pancham"
	"0675": {ico: "0675", flags: []}, // "Pangoro"
	"0676": {ico: "0676", flags: []}, // "Furfrou"
//	"0676-heart": {ico: "0676-heart", flags: []}, // "Heart Trim Furfrou"
//	"0676-star": {ico: "0676-star", flags: []}, // "Star Trim Furfrou"
//	"0676-diamond": {ico: "0676-diamond", flags: []}, // "Diamond Trim Furfrou"
//	"0676-debutante": {ico: "0676-debutante", flags: []}, // "Debutante Trim Furfrou"
//	"0676-matron": {ico: "0676-matron", flags: []}, // "Matron Trim Furfrou"
//	"0676-dandy": {ico: "0676-dandy", flags: []}, // "Dandy Trim Furfrou"
//	"0676-le-reine": {ico: "0676-le-reine", flags: []}, // "Le Reine Trim Furfrou"
//	"0676-kabuki": {ico: "0676-kabuki", flags: []}, // "Kabuki Trim Furfrou"
//	"0676-pharaoh": {ico: "0676-pharaoh", flags: []}, // "Pharaoh Trim Furfrou"
	"0677": {ico: "0677", flags: []}, // "Espurr"
//	"0678": {ico: "0678", flags: []}, // "Meowstic"
	"0678-m": {ico: "0678-m", flags: []}, // "Meowstic♂" // male only
	"0678-f": {ico: "0678-f", flags: []}, // "Meowstic♀" // female only
	"0679": {ico: "0679", flags: []}, // "Honedge"
	"0680": {ico: "0680", flags: []}, // "Doublade"
//	"0681": {ico: "0681", flags: []}, // "Aegislash"
	"0681-shield": {ico: "0681-shield", flags: []}, // "Shield Aegislash"
//	"0681-blade": {ico: "0681-blade", flags: []}, // "Blade Aegislash"
	"0682": {ico: "0682", flags: []}, // "Spritzee"
	"0683": {ico: "0683", flags: []}, // "Aromatisse"
	"0684": {ico: "0684", flags: []}, // "Swirlix"
	"0685": {ico: "0685", flags: []}, // "Slurpuff"
	"0686": {ico: "0686", flags: []}, // "Inkay"
	"0687": {ico: "0687", flags: []}, // "Malamar"
	"0688": {ico: "0688", flags: []}, // "Binacle"
	"0689": {ico: "0689", flags: []}, // "Barbaracle"
	"0690": {ico: "0690", flags: []}, // "Skrelp"
	"0691": {ico: "0691", flags: []}, // "Dragalge"
	"0692": {ico: "0692", flags: []}, // "Clauncher"
	"0693": {ico: "0693", flags: []}, // "Clawitzer"
	"0694": {ico: "0694", flags: []}, // "Helioptile"
	"0695": {ico: "0695", flags: []}, // "Heliolisk"
	"0701": {ico: "0701", flags: []}, // "Hawlucha"
	"0702": {ico: "0702", flags: []}, // "Dedenne"
	"0703": {ico: "0703", flags: []}, // "Carbink" // uknown gender
	"0704": {ico: "0704", flags: []}, // "Goomy"
	"0705": {ico: "0705", flags: []}, // "Sliggoo"
	"0706": {ico: "0706", flags: []}, // "Goodra"
	"0707": {ico: "0707", flags: []}, // "Klefki"
	"0708": {ico: "0708", flags: []}, // "Phantump"
	"0709": {ico: "0709", flags: []}, // "Trevenant"
//	"0710": {ico: "0710", flags: []}, // "Pumpkaboo"
//	"0711": {ico: "0711", flags: []}, // "Gourgeist"
	"0710-average": {ico: "0710-average", flags: []}, // "Average Size Pumpkaboo"
	"0711-average": {ico: "0711-average", flags: []}, // "Average Size Gourgeist"
	"0710-small": {ico: "0710-small", flags: []}, // "Small Size Pumpkaboo"
	"0711-small": {ico: "0711-small", flags: []}, // "Small Size Gourgeist"
	"0710-large": {ico: "0710-large", flags: []}, // "Large Size Pumpkaboo"
	"0711-large": {ico: "0711-large", flags: []}, // "Large Size Gourgeist"
	"0710-super": {ico: "0710-super", flags: []}, // "Super Size Pumpkaboo"
	"0711-super": {ico: "0711-super", flags: []}, // "Super Size Gourgeist"
	"0712": {ico: "0712", flags: []}, // "Bergmite"
	"0713": {ico: "0713", flags: []}, // "Avalugg"
	"0714": {ico: "0714", flags: []}, // "Noibat"
	"0715": {ico: "0715", flags: []}, // "Noivern"
//	"0716": {ico: "0716", flags: []}, // "Xerneas" // uknown gender
	"0716-neutral": {ico: "0716-neutral", flags: []}, // "Neutral Xerneas" // uknown gender
//	"0716-active": {ico: "0716-active", flags: []}, // "Active Xerneas" // uknown gender
	"0717": {ico: "0717", flags: []}, // "Yveltal" // uknown gender
//	"0718": {ico: "0718", flags: []}, // "Zygarde" // uknown gender
	"0718-50": {ico: "0718-50", flags: []}, // "50% Zygarde" // uknown gender
	"0718-10": {ico: "0718-10", flags: []}, // "10% Zygarde" // uknown gender
	"0718-complete": {ico: "0718-complete", flags: []}, // "Complete Zygarde" // uknown gender
//	"0718-core": {ico: "0718-core", flags: []}, // "Zygarde Core" // uknown gender// uncatchable
//	"0718-cell": {ico: "0718-cell", flags: []}, // "Zygarde Cell" // uknown gender// uncatchable
	"0719": {ico: "0719", flags: []}, // "Diancie" // uknown gender
//	"0719-mega": {ico: "0719-mega", flags: []}, // "Mega Diancie" // uknown gender
//	"0720": {ico: "0720", flags: []}, // "Hoopa" // uknown gender
	"0720-confined": {ico: "0720-confined", flags: []}, // "Hoopa Confined" // uknown gender
	"0720-unbound": {ico: "0720-unbound", flags: []}, // "Hoopa Unbound" // uknown gender
	"0721": {ico: "0721", flags: []}, // "Volcanion" // uknown gender
	"0722": {ico: "0722", flags: []}, // "Rowlet"
	"0723": {ico: "0723", flags: []}, // "Dartrix"
	"0724": {ico: "0724", flags: []}, // "Decidueye"
	"0725": {ico: "0725", flags: []}, // "Litten"
	"0726": {ico: "0726", flags: []}, // "Torracat"
	"0727": {ico: "0727", flags: []}, // "Incineroar"
	"0728": {ico: "0728", flags: []}, // "Popplio"
	"0729": {ico: "0729", flags: []}, // "Brionne"
	"0730": {ico: "0730", flags: []}, // "Primarina"
	"0731": {ico: "0731", flags: []}, // "Pikipek"
	"0732": {ico: "0732", flags: []}, // "Trumbeak"
	"0733": {ico: "0733", flags: []}, // "Toucannon"
	"0734": {ico: "0734", flags: []}, // "Yungoos"
	"0735": {ico: "0735", flags: []}, // "Gumshoos"
	"0736": {ico: "0736", flags: []}, // "Grubbin"
	"0737": {ico: "0737", flags: []}, // "Charjabug"
	"0738": {ico: "0738", flags: []}, // "Vikavolt"
	"0739": {ico: "0739", flags: []}, // "Crabrawler"
	"0740": {ico: "0740", flags: []}, // "Crabominable"
//	"0741": {ico: "0741", flags: []}, // "Oricorio"
	"0741-baile": {ico: "0741-baile", flags: []}, // "Baile Style Oricorio"
	"0741-pom-pom": {ico: "0741-pom-pom", flags: []}, // "Pom-Pom Style Oricorio"
	"0741-pau": {ico: "0741-pau", flags: []}, // "Pa'u Style Oricorio"
	"0741-sensu": {ico: "0741-sensu", flags: []}, // "Sensu Style Oricorio"
	"0742": {ico: "0742", flags: []}, // "Cutiefly"
	"0743": {ico: "0743", flags: []}, // "Ribombee"
	"0744": {ico: "0744", flags: []}, // "Rockruff"
//	"0745": {ico: "0745", flags: []}, // "Lycanroc"
	"0745-midday": {ico: "0745-midday", flags: []}, // "Midday Lycanroc"
	"0745-midnight": {ico: "0745-midnight", flags: []}, // "Midnight Lycanroc"
	"0745-dusk": {ico: "0745-dusk", flags: []}, // "Dusk Lycanroc"
//	"0746": {ico: "0746", flags: []}, // "Wishiwashi"
	"0746-solo": {ico: "0746-solo", flags: []}, // "Solo Wishiwashi"
//	"0746-school": {ico: "0746-school", flags: []}, // "School of Wishiwashi"
	"0747": {ico: "0747", flags: []}, // "Mareanie"
	"0748": {ico: "0748", flags: []}, // "Toxapex"
	"0749": {ico: "0749", flags: []}, // "Mudbray"
	"0750": {ico: "0750", flags: []}, // "Mudsdale"
	"0751": {ico: "0751", flags: []}, // "Dewpider"
	"0752": {ico: "0752", flags: []}, // "Araquanid"
	"0753": {ico: "0753", flags: []}, // "Fomantis"
	"0754": {ico: "0754", flags: []}, // "Lurantis"
	"0755": {ico: "0755", flags: []}, // "Morelull"
	"0756": {ico: "0756", flags: []}, // "Shiinotic"
	"0757": {ico: "0757", flags: []}, // "Salandit"
	"0758": {ico: "0758", flags: []}, // "Salazzle" // female only
	"0759": {ico: "0759", flags: []}, // "Stufful"
	"0760": {ico: "0760", flags: []}, // "Bewear"
	"0761": {ico: "0761", flags: []}, // "Bounsweet" // female only
	"0762": {ico: "0762", flags: []}, // "Steenee" // female only
	"0763": {ico: "0763", flags: []}, // "Tsareena" // female only
	"0764": {ico: "0764", flags: []}, // "Comfey"
	"0765": {ico: "0765", flags: []}, // "Oranguru"
	"0766": {ico: "0766", flags: []}, // "Passimian"
	"0767": {ico: "0767", flags: []}, // "Wimpod"
	"0768": {ico: "0768", flags: []}, // "Golisopod"
	"0769": {ico: "0769", flags: []}, // "Sandygast"
	"0770": {ico: "0770", flags: []}, // "Palossand"
	"0771": {ico: "0771", flags: []}, // "Pyukumuku"
	"0772": {ico: "0772", flags: []}, // "Type: Null" // uknown gender
	"0773": {ico: "0773", flags: []}, // "Silvally" // uknown gender
//	"0773-fighting": {ico: "0773-fighting", flags: []}, // "Silvally Type: Fighting" // uknown gender
//	"0773-flying": {ico: "0773-flying", flags: []}, // "Silvally Type: Flying" // uknown gender
//	"0773-poison": {ico: "0773-poison", flags: []}, // "Silvally Type: Poison" // uknown gender
//	"0773-ground": {ico: "0773-ground", flags: []}, // "Silvally Type: Ground" // uknown gender
//	"0773-rock": {ico: "0773-rock", flags: []}, // "Silvally Type: Rock" // uknown gender
//	"0773-bug": {ico: "0773-bug", flags: []}, // "Silvally Type: Bug" // uknown gender
//	"0773-ghost": {ico: "0773-ghost", flags: []}, // "Silvally Type: Ghost" // uknown gender
//	"0773-steel": {ico: "0773-steel", flags: []}, // "Silvally Type: Steel" // uknown gender
//	"0773-fire": {ico: "0773-fire", flags: []}, // "Silvally Type: Fire" // uknown gender
//	"0773-water": {ico: "0773-water", flags: []}, // "Silvally Type: Water" // uknown gender
//	"0773-grass": {ico: "0773-grass", flags: []}, // "Silvally Type: Grass" // uknown gender
//	"0773-electric": {ico: "0773-electric", flags: []}, // "Silvally Type: Electric" // uknown gender
//	"0773-psychic": {ico: "0773-psychic", flags: []}, // "Silvally Type: Psychic" // uknown gender
//	"0773-ice": {ico: "0773-ice", flags: []}, // "Silvally Type: Ice" // uknown gender
//	"0773-dragon": {ico: "0773-dragon", flags: []}, // "Silvally Type: Dragon" // uknown gender
//	"0773-dark": {ico: "0773-dark", flags: []}, // "Silvally Type: Dark" // uknown gender
//	"0773-fairy": {ico: "0773-fairy", flags: []}, // "Silvally Type: Fairy" // uknown gender
//	"0774": {ico: "0774", flags: []}, // "Minior" // uknown gender
//	"0774-meteor": {ico: "0774-meteor", flags: []}, // "Meteor Minior" // uknown gender
	"0774-red": {ico: "0774-red", flags: []}, // "Red Core Minior" // uknown gender
	"0774-orange": {ico: "0774-orange", flags: []}, // "Orange Core Minior" // uknown gender
	"0774-yellow": {ico: "0774-yellow", flags: []}, // "Yellow Core Minior" // uknown gender
	"0774-green": {ico: "0774-green", flags: []}, // "Green Core Minior" // uknown gender
	"0774-blue": {ico: "0774-blue", flags: []}, // "Blue Core Minior" // uknown gender
	"0774-indigo": {ico: "0774-indigo", flags: []}, // "Indigo Core Minior" // uknown gender
	"0774-violet": {ico: "0774-violet", flags: []}, // "Violet Core Minior" // uknown gender
	"0775": {ico: "0775", flags: []}, // "Komala"
	"0776": {ico: "0776", flags: []}, // "Turtonator"
	"0777": {ico: "0777", flags: []}, // "Togedemaru"
//	"0778": {ico: "0778", flags: []}, // "Mimikyu"
	"0778-disguised": {ico: "0778-disguised", flags: []}, // "Disguised Mimikyu"
//	"0778-busted": {ico: "0778-busted", flags: []}, // "Busted Mimikyu"
	"0779": {ico: "0779", flags: []}, // "Bruxish"
	"0780": {ico: "0780", flags: []}, // "Drampa"
	"0781": {ico: "0781", flags: []}, // "Dhelmise" // uknown gender
	"0782": {ico: "0782", flags: []}, // "Jangmo-o"
	"0783": {ico: "0783", flags: []}, // "Hakamo-o"
	"0784": {ico: "0784", flags: []}, // "Kommo-o"
	"0785": {ico: "0785", flags: []}, // "Tapu Koko" // uknown gender
	"0786": {ico: "0786", flags: []}, // "Tapu Lele" // uknown gender
	"0787": {ico: "0787", flags: []}, // "Tapu Bulu" // uknown gender
	"0788": {ico: "0788", flags: []}, // "Tapu Fini" // uknown gender
	"0789": {ico: "0789", flags: []}, // "Cosmog" // uknown gender
	"0790": {ico: "0790", flags: []}, // "Cosmoen" // uknown gender
	"0791": {ico: "0791", flags: []}, // "Solgaleo", // uknown gender
//	"0791-radiant-sun": {ico: "0791-radiant-sun", flags: []}, // "Radiant Sun Solgaleo", // unknown gender
	"0792": {ico: "0792", flags: []}, // "Lunala", // uknown gender
//	"0792-full-moon": {ico: "0792-full-moon", flags: []}, // "Full Monn Lunala", // uknown gender
	"0800": {ico: "0800", flags: []}, // "Necrozma" // uknown gender
//	"0800-dusk-mane": {ico: "0800-dusk-mane", flags: []}, // "Dusk Mane Necrozma" // uknown gender
//	"0800-dawn-wings": {ico: "0800-dawn-wings", flags: []}, // "Dawn Wings Necrozma" // uknown gender
//	"0800-ultra": {ico: "0800-ultra", flags: []}, // "Ultra Necrozma" // uknown gender
	"0793": {ico: "0793", flags: []}, // "Nihilego" // uknown gender
	"0794": {ico: "0794", flags: []}, // "Buzzwole" // uknown gender
	"0795": {ico: "0795", flags: []}, // "Pheromosa" // uknown gender
	"0796": {ico: "0796", flags: []}, // "Xurkitree" // uknown gender
	"0797": {ico: "0797", flags: []}, // "Celesteela" // uknown gender
	"0798": {ico: "0798", flags: []}, // "Kartana" // uknown gender
	"0799": {ico: "0799", flags: []}, // "Guzzlord" // uknown gender
	"0801": {ico: "0801", flags: []}, // "Magearna" // uknown gender
	"0801-original": {ico: "0801-original", flags: []}, // "Original Color Magearna" // uknown gender
	"0802": {ico: "0802", flags: []}, // "Marshadow" // uknown gender
//	"0802-zenith": {ico: "0802-zenith", flags: []}, // "Zenith Marshadow" // uknown gender
	"0803": {ico: "0803", flags: []}, // "Poipole" // uknown gender
	"0804": {ico: "0804", flags: []}, // "Naganadel" // uknown gender
	"0805": {ico: "0805", flags: []}, // "Stakataka" // uknown gender
	"0806": {ico: "0806", flags: []}, // "Blacephalon" // uknown gender
	"0807": {ico: "0807", flags: []}, // "Zeraora" // uknown gender
	"0808": {ico: "0808", flags: []}, // "Meltan" // uknown gender
	"0809": {ico: "0809", flags: []}, // "Melmetal" // uknown gender
	"0809-gmax": {ico: "0809-gmax", flags: []}, // "Gigantamax Melmetal" // uknown gender
	"0810": {ico: "0810", flags: []}, // "Grookey"
	"0811": {ico: "0811", flags: []}, // "Thwackey"
	"0812": {ico: "0812", flags: []}, // "Rillaboom"
	"0812-gmax": {ico: "0812-gmax", flags: []}, // "Gigantamax Rillaboom"
	"0813": {ico: "0813", flags: []}, // "Scorbunny"
	"0814": {ico: "0814", flags: []}, // "Raboot"
	"0815": {ico: "0815", flags: []}, // "Cinderace"
	"0815-gmax": {ico: "0815-gmax", flags: []}, // "Gigantamax Cinderace"
	"0816": {ico: "0816", flags: []}, // "Sobble"
	"0817": {ico: "0817", flags: []}, // "Drizzile"
	"0818": {ico: "0818", flags: []}, // "Inteleon"
	"0818-gmax": {ico: "0818-gmax", flags: []}, // "Gigantamax Inteleon"
	"0819": {ico: "0819", flags: []}, // "Skwovet"
	"0820": {ico: "0820", flags: []}, // "Greedent"
	"0821": {ico: "0821", flags: []}, // "Rookidee"
	"0822": {ico: "0822", flags: []}, // "Corvisquire"
	"0823": {ico: "0823", flags: []}, // "Corviknight"
	"0823-gmax": {ico: "0823-gmax", flags: []}, // "Gigantamax Corviknight"
	"0824": {ico: "0824", flags: []}, // "Blipbug"
	"0825": {ico: "0825", flags: []}, // "Dottler"
	"0826": {ico: "0826", flags: []}, // "Orbeetle"
	"0826-gmax": {ico: "0826-gmax", flags: []}, // "Gigantamax Orbeetle"
	"0827": {ico: "0827", flags: []}, // "Nickit"
	"0828": {ico: "0828", flags: []}, // "Thievul"
	"0829": {ico: "0829", flags: []}, // "Gossifleur"
	"0830": {ico: "0830", flags: []}, // "Eldegoss"
	"0831": {ico: "0831", flags: []}, // "Wooloo"
	"0832": {ico: "0832", flags: []}, // "Dubwool"
	"0833": {ico: "0833", flags: []}, // "Chewtle"
	"0834": {ico: "0834", flags: []}, // "Drednaw"
	"0834-gmax": {ico: "0834-gmax", flags: []}, // "Gigantamax Drednaw"
	"0835": {ico: "0835", flags: []}, // "Yamper"
	"0836": {ico: "0836", flags: []}, // "Boltund"
	"0837": {ico: "0837", flags: []}, // "Rolycoly"
	"0838": {ico: "0838", flags: []}, // "Carkol"
	"0839": {ico: "0839", flags: []}, // "Coalossal"
	"0839-gmax": {ico: "0839-gmax", flags: []}, // "Gigantamax Coalossal"
	"0840": {ico: "0840", flags: []}, // "Applin"
	"0841": {ico: "0841", flags: []}, // "Flapple"
	"0841-gmax": {ico: "0841-gmax", flags: []}, // "Gigantamax Flapple"
	"0842": {ico: "0842", flags: []}, // "Appletun"
	"0842-gmax": {ico: "0842-gmax", flags: []}, // "Gigantamax Appletun"
	"0843": {ico: "0843", flags: []}, // "Silicobra"
	"0844": {ico: "0844", flags: []}, // "Sandaconda"
	"0844-gmax": {ico: "0844-gmax", flags: []}, // "Gigantamax Sandaconda"
	"0845": {ico: "0845", flags: []}, // "Cramorant"
//	"0845-gulping": {ico: "0845-gulping", flags: []}, // "Gulping Cramorant"
//	"0845-gorging": {ico: "0845-gorging", flags: []}, // "Gorging Cramorant"
	"0846": {ico: "0846", flags: []}, // "Arrokuda"
	"0847": {ico: "0847", flags: []}, // "Barraskewda"
	"0848": {ico: "0848", flags: []}, // "Toxel"
//	"0849": {ico: "0849", flags: []}, // "Toxitricity"
//	"0849-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Toxtricity"
	"0849-low-key": {ico: "0849-low-key", flags: []}, // "Low Key Toxtricity" // blue
	"0849-low-key-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Low Key Toxtricity"
	"0849-amped": {ico: "0849-amped", flags: []}, // "Amped Toxtricity" // yellow
	"0849-amped-gmax": {ico: "0849-gmax", flags: []}, // "Gigantamax Amped Toxtricity"
	"0850": {ico: "0850", flags: []}, // "Sizzlipede"
	"0851": {ico: "0851", flags: []}, // "Centiskorch"
	"0851-gmax": {ico: "0851-gmax", flags: []}, // "Gigantamax Centiskorch"
	"0852": {ico: "0852", flags: []}, // "Clobbopus"
	"0853": {ico: "0853", flags: []}, // "Grapploct"
//	"0854": {ico: "0854", flags: []}, // "Sinistea" // uknown gender
//	"0855": {ico: "0855", flags: []}, // "Polteageist" // uknown gender
	"0854-phony": {ico: "0854", flags: []}, // "Phony Sinistea" // uknown gender
	"0855-phony": {ico: "0855", flags: []}, // "Phony Polteageist" // uknown gender
	"0854-authentic": {ico: "0854", flags: []}, // "Authentic Sinistea" // uknown gender
	"0855-authentic": {ico: "0855", flags: []}, // "Authentic Polteageist" // uknown gender
	"0856": {ico: "0856", flags: []}, // "Hatenna" // female only
	"0857": {ico: "0857", flags: []}, // "Hattrem" // female only
	"0858": {ico: "0858", flags: []}, // "Hatterene" // female only
	"0858-gmax": {ico: "0858-gmax", flags: []}, // "Gigantamax Hetterene" // female only
	"0859": {ico: "0859", flags: []}, // "Impidimp" // male only
	"0860": {ico: "0860", flags: []}, // "Morgrem" // male only
	"0861": {ico: "0861", flags: []}, // "Grimmsnarl" // male only
	"0861-gmax": {ico: "0861-gmax", flags: []}, // "Gigantamax Grimmsnarl" // male only
	"0868": {ico: "0868", flags: []}, // "Milcery" // female only
//	"0869": {ico: "0869", flags: []}, // "Alcremie" // female only
//	"0869-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Alcremie" // female only
	"0869-vanilla-cream-strawberry": {ico: "0869-vanilla-cream-strawberry", flags: []}, // "Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry": {ico: "0869-vanilla-cream-berry", flags: []}, // "Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love": {ico: "0869-vanilla-cream-love", flags: []}, // "Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star": {ico: "0869-vanilla-cream-star", flags: []}, // "Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover": {ico: "0869-vanilla-cream-clover", flags: []}, // "Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower": {ico: "0869-vanilla-cream-flower", flags: []}, // "Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon": {ico: "0869-vanilla-cream-ribbon", flags: []}, // "Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-vanilla-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Vanilla Cream Alcremie" // female only
	"0869-ruby-cream-strawberry": {ico: "0869-ruby-cream-strawberry", flags: []}, // "Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry": {ico: "0869-ruby-cream-berry", flags: []}, // "Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love": {ico: "0869-ruby-cream-love", flags: []}, // "Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star": {ico: "0869-ruby-cream-star", flags: []}, // "Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover": {ico: "0869-ruby-cream-clover", flags: []}, // "Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower": {ico: "0869-ruby-cream-flower", flags: []}, // "Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon": {ico: "0869-ruby-cream-ribbon", flags: []}, // "Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-ruby-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Cream Alcremie" // female only
	"0869-matcha-cream-strawberry": {ico: "0869-matcha-cream-strawberry", flags: []}, // "Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry": {ico: "0869-matcha-cream-berry", flags: []}, // "Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love": {ico: "0869-matcha-cream-love", flags: []}, // "Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star": {ico: "0869-matcha-cream-star", flags: []}, // "Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover": {ico: "0869-matcha-cream-clover", flags: []}, // "Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower": {ico: "0869-matcha-cream-flower", flags: []}, // "Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon": {ico: "0869-matcha-cream-ribbon", flags: []}, // "Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-matcha-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Matcha Cream Alcremie" // female only
	"0869-mint-cream-strawberry": {ico: "0869-mint-cream-strawberry", flags: []}, // "Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry": {ico: "0869-mint-cream-berry", flags: []}, // "Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love": {ico: "0869-mint-cream-love", flags: []}, // "Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star": {ico: "0869-mint-cream-star", flags: []}, // "Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover": {ico: "0869-mint-cream-clover", flags: []}, // "Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower": {ico: "0869-mint-cream-flower", flags: []}, // "Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon": {ico: "0869-mint-cream-ribbon", flags: []}, // "Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-mint-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Mint Cream Alcremie" // female only
	"0869-lemon-cream-strawberry": {ico: "0869-lemon-cream-strawberry", flags: []}, // "Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry": {ico: "0869-lemon-cream-berry", flags: []}, // "Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love": {ico: "0869-lemon-cream-love", flags: []}, // "Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star": {ico: "0869-lemon-cream-star", flags: []}, // "Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover": {ico: "0869-lemon-cream-clover", flags: []}, // "Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower": {ico: "0869-lemon-cream-flower", flags: []}, // "Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon": {ico: "0869-lemon-cream-ribbon", flags: []}, // "Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-lemon-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Lemon Cream Alcremie" // female only
	"0869-salted-cream-strawberry": {ico: "0869-salted-cream-strawberry", flags: []}, // "Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry": {ico: "0869-salted-cream-berry", flags: []}, // "Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love": {ico: "0869-salted-cream-love", flags: []}, // "Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star": {ico: "0869-salted-cream-star", flags: []}, // "Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover": {ico: "0869-salted-cream-clover", flags: []}, // "Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower": {ico: "0869-salted-cream-flower", flags: []}, // "Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon": {ico: "0869-salted-cream-ribbon", flags: []}, // "Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-salted-cream-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Salted Cream Alcremie" // female only
	"0869-ruby-swirl-strawberry": {ico: "0869-ruby-swirl-strawberry", flags: []}, // "Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry": {ico: "0869-ruby-swirl-berry", flags: []}, // "Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love": {ico: "0869-ruby-swirl-love", flags: []}, // "Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star": {ico: "0869-ruby-swirl-star", flags: []}, // "Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover": {ico: "0869-ruby-swirl-clover", flags: []}, // "Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower": {ico: "0869-ruby-swirl-flower", flags: []}, // "Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon": {ico: "0869-ruby-swirl-ribbon", flags: []}, // "Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-ruby-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Ruby Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry": {ico: "0869-caramel-swirl-strawberry", flags: []}, // "Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry": {ico: "0869-caramel-swirl-berry", flags: []}, // "Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love": {ico: "0869-caramel-swirl-love", flags: []}, // "Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star": {ico: "0869-caramel-swirl-star", flags: []}, // "Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover": {ico: "0869-caramel-swirl-clover", flags: []}, // "Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower": {ico: "0869-caramel-swirl-flower", flags: []}, // "Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon": {ico: "0869-caramel-swirl-ribbon", flags: []}, // "Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-caramel-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Caramel Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry": {ico: "0869-rainbow-swirl-strawberry", flags: []}, // "Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-strawberry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Strawberry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry": {ico: "0869-rainbow-swirl-berry", flags: []}, // "Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-berry-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Berry Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love": {ico: "0869-rainbow-swirl-love", flags: []}, // "Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-love-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Love Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star": {ico: "0869-rainbow-swirl-star", flags: []}, // "Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-star-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Star Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover": {ico: "0869-rainbow-swirl-clover", flags: []}, // "Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-clover-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Clover Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower": {ico: "0869-rainbow-swirl-flower", flags: []}, // "Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-flower-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Flower Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon": {ico: "0869-rainbow-swirl-ribbon", flags: []}, // "Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0869-rainbow-swirl-ribbon-gmax": {ico: "0869-gmax", flags: []}, // "Gigantamax Ribbon Sweet Rainbow Swirl Alcremie" // female only
	"0870": {ico: "0870", flags: []}, // "Falinks" // uknown gender
	"0871": {ico: "0871", flags: []}, // "Pincurchin"
	"0872": {ico: "0872", flags: []}, // "Snom"
	"0873": {ico: "0873", flags: []}, // "Frosmoth"
	"0874": {ico: "0874", flags: []}, // "Stonjourner"
//	"0875": {ico: "0875", flags: []}, // "Eiscue"
	"0875-ice": {ico: "0875-ice", flags: []}, // "Ice Face Eiscue"
//	"0875-noice": {ico: "0875-noice", flags: []}, // "Noice Face Eiscue"
//	"0876": {ico: "0876", flags: []}, // "Indeedee"
	"0876-m": {ico: "0876-m", flags: []}, // "Indeedee♂" // male only
	"0876-f": {ico: "0876-f", flags: []}, // "Indeedee♀" // female only
//	"0877": {ico: "0877", flags: []}, // "Morpeko"
	"0877-full-belly": {ico: "0877-full-belly", flags: []}, // "Full Belly Mode Morpeko"
//	"0877-hangry": {ico: "0877-hangry", flags: []}, // "Hangry Mode Morpeko"
	"0878": {ico: "0878", flags: []}, // "Cufant"
	"0879": {ico: "0879", flags: []}, // "Copperajah"
	"0879-gmax": {ico: "0879-gmax", flags: []}, // "Gigantamax Copperajah"
	"0884": {ico: "0884", flags: []}, // "Duraludon"
	"0884-gmax": {ico: "0884-gmax", flags: []}, // "Gigantamax Duraludon"
	"0885": {ico: "0885", flags: []}, // "Dreepy"
	"0886": {ico: "0886", flags: []}, // "Drakloak"
	"0887": {ico: "0887", flags: []}, // "Dragapult"
//	"0888": {ico: "0888", flags: []}, // "Zacian" // uknown gender
	"0888-hero": {ico: "0888-hero", flags: []}, // "Hero of Many Battles, Zacian" // uknown gender
//	"0888-crowned": {ico: "0888-crowned", flags: []}, // "Crowned Sword Zacian" // uknown gender
//	"0889": {ico: "0889", flags: []}, // "Zamazenta" // uknown gender
	"0889-hero": {ico: "0889-hero", flags: []}, // "Hero of Many Battles, Zamazenta" // uknown gender
//	"0889-crowned": {ico: "0889-crowned", flags: []}, // "Crowned Shield Zamazenta" // uknown gender
	"0890": {ico: "0890", flags: []}, // "Eternatus" // uknown gender
//	"0890-emax": {ico: "0890-emax", flags: []}, // "Eternamax Eternatus" // uknown gender
	"0891": {ico: "0891", flags: []}, // "Kubfu"
//	"0892": {ico: "0892", flags: []}, // "Urshifu"
	"0892-single": {ico: "0892-single", flags: []}, // "Single Strike Style Urshifu"
	"0892-single-gmax": {ico: "0892-single-gmax", flags: []}, // "Gigantamax Single Strike Style Urshifu"
	"0892-rapid": {ico: "0892-rapid", flags: []}, // "Rapid Strike Style Urshifu"
	"0892-rapid-gmax": {ico: "0892-rapid-gmax", flags: []}, // "Gigantamax Rapid Strike Style Urshifu"
	"0893": {ico: "0893", flags: []}, // "Zarude"
	"0893-dada": {ico: "0893-dada", flags: []}, // "Dada Zarude" // unknown gender
	"0896": {ico: "0896", flags: []}, // "Glastrier" // unknown gender
	"0897": {ico: "0897", flags: []}, // "Spectrier" // unknown gender
	"0898": {ico: "0898", flags: []}, // "Calyrex" // uknown gender
	"0898-ice": {ico: "0898-ice", flags: []}, // "Ice Rider Calyrex" // uknown gender
	"0898-shadow": {ico: "0898-shadow", flags: []}, // "Shadow Rider Calyrex" // uknown gender
}
