# pokemon_box
URL: [Pokémon Storage System vAlpha](https://jeibbiej.github.io/pokemon_box/box2.html)

## Pokémon images

### Naming icon:

* Folder names should be divided into generation: `g##`.
  * If the icon was updated or are different from game to game, include subfolder starting with `1`.
  * If an icon is custom, for unavailable icons, use `custom` as name.
* Gen 1 and 2 should use two digit code (`00`) for each original icon. If custom icon will be added, use four digits instead.
* Gen 3 above should use four digit code (`0000`) for each icon. This is in preparation (if ever) for four digit National Dex number.
* For Pokémon with forms:
  * Have a base icon with no additional name (just numbers).
  * Gender form should be added for those with gender difference. Use `-m` or `-f` for male or female, respectively. Use the correct gender for base and add only  the 'newly' found gender form. Example: Doduo - `0084`, `0084-m`, Dodrio - `0085`, `0085-f`, since Doduo's 'original' form is female and Dodrio's is male.
  * Formes (or form), including Mega Evolution, Regional variant, and Gigantamax, should be descriptive.
  * If form name share same words, it can be removed. Example: Burmy Plant Cloak, Sandy Cloak, and Trash Cloak is `0412` (Plant Cloak is considered as base form), `0412-sandy`, and `0412-trash`.

### Pokémon IDs:

* Pokémon IDs should be a four-digit number following their National Dex number.
* For Pokémon with forms, follow the 'Naming icon' guideline.

## Evolution Dex

* New Baby Pokémon should be inserted before their basic (TCG term) forms: `[Pichu] -> Pikachu -> Raichu`
* New evolution should be inserted after their respective lower evolution: `Zubat -> Golbat -> [Crobat]`.
* New split evolution should be inserted after the last existing evolution: `Poliwag -> Poliwhirl -> Poliwrath -> [Politoed]`.
* Forms should follow the official indexing.
* Fossil Pokémon should be considered as split evolution from Mysterious Fossil (TCG): `Mysterious Fossil -> Helix Fossil -> Omanyte -> Omastar -> Dome Fossil -> Kabuto -> Kabutops -> Old Amber -> Aerodactyl`. In short, all Fossil Pokémon should be placed after Aerodactyl.
* Any Pokémon that are considered as a group should be placed next to each other, sorted by priority then National ID: `Regirock -> Regice -> Registeel -> Regieleki -> Regidrago -> Regigigas`.
* Regional forms that are not split evolution should be placed after their counterpart: `Diglett -> Dugtrio -> Alolan Diglett -> Alolan Dugtrio`.
* Convergent forms should be placed next to their counterpart: `Diglett -> Dugtrio -> Alolan Diglett -> Alolan Dugtrio -> Wiglett -> Wugtrio`.
* Paradox Pokémon (Past and Future) should not follow their counterpart and should be considered as group.
* If an evolution becomses confusing consider creating an evolution tree like Pikachu's, reading left-to-right, top-to-bottom:
  * ```
    Gen 1  : Pikachu -> Raichu
    List   : Pikachu
             Raichu
    ------------------------------------------------------------------------
    Gen 2  : Pichu -> Pikachu -> Raichu
    List   : Pichu
             Pikachu
             Raichu
    ------------------------------------------------------------------------
    Gen 4.1: Pichu -------------> Pikachu -> Raichu
             Spiky-eared Pichu
    List   : Pichu
             Pikachu
             Raichu
             Spiky-eared Pichu
    ------------------------------------------------------------------------
    Gen 6  : Pichu -------------> Pikachu ---------> Raichu
             Spiky-eared Pichu
                                  Cosplay Pikachu
    List   : Pichu
             Pikachu
             Raichu
             Spiky-eared Pichu
             Cosplay Pikachu (Cosplay Pikachu, Rock Star, Belle, Pop Star, Ph.D. Libre)
    ------------------------------------------------------------------------
    Gen 7  : Pichu -------------> Pikachu +--------> Raichu
                                          '--------> Alolan Raichu
             Spiky-eared Pichu
                                  Cosplay Pikachu
                                  Pikachu in a cap
                                  Partner Pikachu
    List   : Pichu
             Pikachu
             Raichu
             Alolan Raichu
             Spiky-eared Pichu
             Cosplay Pikachu (Cosplay Pikachu, Rock Star, Belle, Pop Star, Ph.D. Libre)
             Partner Pikachu (Oiginal, Hoenn, Sinnoh, Unova, Kalos, Alola, Partner, World)
    ------------------------------------------------------------------------
    Gen 8  : Pichu -------------> Pikachu +--------> Raichu
                                          |--------> Alolan Raichu
                                          '--------> Gmax Pikachu
             Spiky-eared Pichu
                                  Cosplay Pikachu
                                  Pikachu in a cap
                                  Partner Pikachu
    List   : Pichu
             Pikachu
             Raichu
             Alolan Raichu
             Spiky-eared Pichu
             Cosplay Pikachu (Cosplay Pikachu, Rock Star, Belle, Pop Star, Ph.D. Libre)
             Partner Pikachu (Oiginal, Hoenn, Sinnoh, Unova, Kalos, Alola, Partner, World)
             Gmax Pikachu
    ```
