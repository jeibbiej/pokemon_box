/************************************************************************
 * The flags for forms
 ************************************************************************/

// will show or hide the following
const FORM_GENDER_DIFF_BASE = 1;							// minor gender difference, use this if hide minor gender diff is active
const FORM_GENDER_DIFF_PLUS = FORM_GENDER_DIFF_BASE + 1;	// minor gender difference, hide this if hide minor gender diff is active
const FORM_GENDER_DIFF_M    = FORM_GENDER_DIFF_BASE + 2;	// major gender difference, male
const FORM_GENDER_DIFF_F    = FORM_GENDER_DIFF_BASE + 3;	// major gender difference, female


const FORM_0201_BASE       =       20100;              // Unown
const FORM_0201            = FORM_0201_BASE + 1;       // Unown

const FORM_BATTLE_GRP      =         100;
const FORM_BATTLE_BASE     = FORM_BATTLE_GRP + 1;      // 
const FORM_BATTLE          = FORM_BATTLE_GRP + 2;      // forms obtained during battle only
const FORM_MEGA            = FORM_BATTLE_GRP + 3;      // Mega/Primal Evolution
const FORM_MEGA_X_Y_       = FORM_BATTLE_GRP + 4;      // Mega Evolution introduced in XY
const FORM_MEGA_ORAS       = FORM_BATTLE_GRP + 5;      // Mega Evolution introduced in oRaS
const FORM_GMAX            = FORM_BATTLE_GRP + 6;      // Gigantamax/Eternamax

const FORM_0386_BASE       =       38600;              // Deoxys (Normal)
const FORM_0386            = FORM_0386_BASE + 1;       // Deoxys all forms
const FORM_0386_FR         = FORM_0386_BASE + 2;       // Deoxys Attack (FR, Gen4 up)
const FORM_0386_LG         = FORM_0386_BASE + 3;       // Deoxys Defense (LG, Gen4 up)
const FORM_0386_Em         = FORM_0386_BASE + 4;       // Deoxys Speed (Em, Gen4 up)

const FORM_0172_BASE       =       17200;              // Spiky-eared Pichu (HGSS)
const FORM_0172_HGSS       = FORM_0172_BASE + 1;       // Spiky-eared Pichu (HGSS)

const FORM_0412_BASE       =       41200;              // Burmy & Wormadam
const FORM_0412            = FORM_0412_BASE + 1;       // Burmy & Wormadam

const FORM_0422_BASE       =       42200;              // Shellos & Gastrodon
const FORM_0422            = FORM_0422_BASE + 1;       // Shellos & Gastrodon

const FORM_0479_BASE       =       47900;              // Rotom (DiPe up)
const FORM_0479            = FORM_0479_BASE + 1;       // Rotom (Pl up)

const FORM_0487_BASE       =       48700;              // Giratina (DiPe up)
const FORM_0487            = FORM_0487_BASE + 1;       // Giratina (Pl up)

const FORM_0492_BASE       =       49200;              // Shaymin (DiPe up)
const FORM_0492            = FORM_0492_BASE + 1;       // Shaymin (Pl up)

const FORM_0493_BASE       =       49300;              // Arceus (Pl up)
const FORM_0493            = FORM_0493_BASE + 1;       // Arceus (Pl up)

const FORM_0550_BASE       =       55000;              // Basculin
const FORM_0550            = FORM_0550_BASE + 1;       // Basculin

const FORM_0585_BASE       =       58500;              // Deerling and Sawsbuck
const FORM_0585            = FORM_0585_BASE + 1;       // Deerling and Sawsbuck

const FORM_0641_BASE       =       64100;              // Tornadus
const FORM_0641            = FORM_0641_BASE + 1;       // Tornadus

const FORM_0642_BASE       =       64200;              // Thundurus
const FORM_0642            = FORM_0642_BASE + 1;       // Thundurus

const FORM_0645_BASE       =       64500;              // Landorus
const FORM_0645            = FORM_0645_BASE + 1;       // Landorus

const FORM_0646_BASE       =       64600;              // Kyurem
const FORM_0646            = FORM_0646_BASE + 1;       // Kyurem

const FORM_0647_BASE       =       64700;              // Keldeo
const FORM_0647            = FORM_0647_BASE + 1;       // Keldeo

const FORM_0648_BASE       =       64800;              // Meloetta
const FORM_0648            = FORM_0648_BASE + 1;       // Meloetta

const FORM_0649_BASE       =       64900;              // Genesect
const FORM_0649            = FORM_0649_BASE + 1;       // Genesect

const FORM_0666_BASE       =       66600;              // Vivillon
const FORM_0666_REGULAR    = FORM_0666_BASE + 1;       // regular pattern Vivillon
const FORM_0666_EVENT      = FORM_0666_BASE + 2;       // event pattern Vivillon

const FORM_0025_BASE       =        2500;              // Pikachu
const FORM_0025_ORAS       = FORM_0025_BASE + 1;       // Cosplay Pikachu
const FORM_0025_CAP        = FORM_0025_BASE + 2;       // capped Pikachu
const FORM_0025_CAP2       = FORM_0025_BASE + 3;       // capped Pikachu

const FORM_0669_BASE       =       66900;              // Flabébé line
const FORM_0669            = FORM_0669_BASE + 1;       // color variation
const FORM_0669_ETERNAL    = FORM_0669_BASE + 2;       // Floette Eternal

const FORM_0676_BASE       =       67600;              // Furfrou
const FORM_0676            = FORM_0676_BASE + 1;

const FORM_0710_BASE       =       71000;              // Pumpkaboo line
const FORM_0710            = FORM_0710_BASE + 1;

const FORM_0718_BASE       =       71800;              // Zygarde
const FORM_0718            = FORM_0718_BASE + 1;

const FORM_0720_BASE       =       72000;              // Hoopa
const FORM_0720            = FORM_0720_BASE + 1;

var g_Flags = [];