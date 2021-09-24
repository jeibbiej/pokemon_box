/************************************************************************
 * The flags for forms
 ************************************************************************/

/************************************************************************
 * With base form (optSwitch)
 ************************************************************************/

// will show or hide the following
const FLAGS_MAJ_GENDER_BASE  = 0b1; // major gender difference
const FLAGS_MAJ_GENDER_DIFF  = 0b10; // major gender difference
const FLAGS_MIN_GENDER_BASE  = 0b100; // minor gender difference
const FLAGS_MIN_GENDER_DIFF  = 0b1000; // minor gender difference
// forms
const FLAGS_FORM_0201_BASE   = 0b100000; // Unown
const FLAGS_FORM_0201        = 0b1000000; // Unown
const FLAGS_BATTLE_FORM_BASE = 0b10000000; // forms obtained during battle only
const FLAGS_BATTLE_FORM      = 0b100000000; // forms obtained during battle only

const FLAGS_FORM_0386_BASE   = 0b1000000000; // Deoxys all forms
const FLAGS_FORM_0386        = 0b10000000000; // Deoxys all forms
const FLAGS_FORM_0412_BASE   = 0b1000000000000; // Burmy & Wormadam
const FLAGS_FORM_0412        = 0b10000000000000; // Burmy & Wormadam

const FLAGS_FORM_0422_BASE   = 0b100000000000000; // Shellos & Gastrodon
const FLAGS_FORM_0422        = 0b1000000000000000; // Shellos & Gastrodon
const FLAGS_FORM_0479_BASE   = 0b10000000000000000; // Rotom (Pl up)
const FLAGS_FORM_0479        = 0b100000000000000000; // Rotom (Pl up)

const FLAGS_FORM_0487_BASE   = 0b1000000000000000000; // Giratina (Pl up)
const FLAGS_FORM_0487        = 0b10000000000000000000; // Giratina (Pl up)
const FLAGS_FORM_0492_BASE   = 0b100000000000000000000; // Shaymin (Pl up)
const FLAGS_FORM_0492        = 0b1000000000000000000000; // Shaymin (Pl up)

const FLAGS_FORM_0493_BASE   = 0b10000000000000000000000; // Arceus (Pl up)
const FLAGS_FORM_0493        = 0b100000000000000000000000; // Arceus (Pl up)

/************************************************************************
 * Triggers only (optToggle)
 ************************************************************************/

const FLAGS_BATTLE_FORM_GRP  = 0b1000000000000000000000000;
const FLAGS_FORM_0386_RuSa   = 0b10000000000000000000000000; // Deoxys (RuSa, Gen4 up)

const FLAGS_FORM_0386_FR     = 0b100000000000000000000000000; // Deoxys Attack (FR, Gen4 up)
const FLAGS_FORM_0386_LG     = 0b1000000000000000000000000000; // Deoxys Defense (LG, Gen4 up)
const FLAGS_FORM_0386_Em     = 0b10000000000000000000000000000; // Deoxys Speed (Em, Gen4 up)
const FLAGS_FORM_0172_HGSS   = 0b100000000000000000000000000000; // Spiky-eared Pichu (HGSS)

const FLAGS_FORM_0479_DiPe   = 0b1000000000000000000000000000000; // Rotom
const FLAGS_FORM_0479_PlHGSS = 0b10000000000000000000000000000000; // Rotom (All)
const FLAGS_FORM_0487_DiPe   = 0b100000000000000000000000000000000; // Giratina (Altered)
const FLAGS_FORM_0487_PlHGSS = 0b1000000000000000000000000000000000; // Giratina (Altered, Origin)

const FLAGS_FORM_0492_DiPe   = 0b10000000000000000000000000000000000; // Shaymin (Land)
const FLAGS_FORM_0492_PlHGSS = 0b100000000000000000000000000000000000; // Shaymin (Land, Sky)

const FLAGS_MEGA_FORM        = 0b1000000000000000000000000000000000000; // Mega Evolution
const FLAGS_GMAX_FORM        = 0b10000000000000000000000000000000000000; // Gigantamax

var g_Flags = 0;