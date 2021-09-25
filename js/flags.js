/************************************************************************
 * The flags for forms
 ************************************************************************/

// will show or hide the following
const FORM_MAJ_GENDER_BASE = 1;                        // major gender difference
const FORM_MAJ_GENDER_DIFF = FORM_MAJ_GENDER_BASE + 1; // major gender difference
const FORM_MIN_GENDER_BASE = FORM_MAJ_GENDER_BASE + 2; // minor gender difference
const FORM_MIN_GENDER_DIFF = FORM_MAJ_GENDER_BASE + 3; // minor gender difference

const FORM_0201_BASE       = 20100;                    // Unown
const FORM_0201            = FORM_0201_BASE + 1;       // Unown

const FORM_BATTLE_GRP      = 100;
const FORM_BATTLE_BASE     = FORM_BATTLE_GRP + 1;      // forms obtained during battle only
const FORM_BATTLE          = FORM_BATTLE_GRP + 2;      // forms obtained during battle only
const FORM_MEGA            = FORM_BATTLE_GRP + 3;      // Mega Evolution
const FORM_GMAX            = FORM_BATTLE_GRP + 4;      // Gigantamax

const FORM_0386_BASE       = 38600;                    // Deoxys (Normal)
const FORM_0386            = FORM_0386_BASE + 1;       // Deoxys all forms
const FORM_0386_FR         = FORM_0386_BASE + 2;       // Deoxys Attack (FR, Gen4 up)
const FORM_0386_LG         = FORM_0386_BASE + 3;       // Deoxys Defense (LG, Gen4 up)
const FORM_0386_Em         = FORM_0386_BASE + 4;       // Deoxys Speed (Em, Gen4 up)

const FORM_0172_BASE       = 17200;                    // Spiky-eared Pichu (HGSS)
const FORM_0172_HGSS       = FORM_0172_BASE + 1;       // Spiky-eared Pichu (HGSS)

const FORM_0412_BASE       = 41200;                    // Burmy & Wormadam
const FORM_0412            = FORM_0412_BASE + 1;       // Burmy & Wormadam

const FORM_0422_BASE       = 42200;                    // Shellos & Gastrodon
const FORM_0422            = FORM_0422_BASE + 1;       // Shellos & Gastrodon

const FORM_0479_BASE       = 47900;                    // Rotom (DiPe up)
const FORM_0479            = FORM_0479_BASE + 1;       // Rotom (Pl up)

const FORM_0487_BASE       = 48700;                    // Giratina (DiPe up)
const FORM_0487            = FORM_0487_BASE + 1;       // Giratina (Pl up)

const FORM_0492_BASE       = 49200;                    // Shaymin (DiPe up)
const FORM_0492            = FORM_0492_BASE + 1;       // Shaymin (Pl up)

const FORM_0493_BASE       = 49300;                    // Arceus (Pl up)
const FORM_0493            = FORM_0493_BASE + 1;       // Arceus (Pl up)

var g_Flags = [];