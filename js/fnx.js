function imgPokemon_Clicked(el: Element, game)
{
    // check if image is "enabled" or not
    if (el.classList.contains('gray'))
    {
        el.classList.remove('gray');
        deleteZukan(game, el.id);
    }
    else
    {
        el.classList.add('gray');
        insertZukan(game, el.id);
    }
}

/// <summary>
/// Inserts a clicked "Pokémon" to the current game list.
/// </summary>
/// <param name=""></param>
/// <param name=""></param>
/// <returns></returns>
function insertZukan(game, pkmn)
{
    var zukan = localStorage.getObject("zukanData");
    var zukanGame = zukan[game];
    zukanGame.push(pkmn);
}

/// <summary>
/// Deletes a clicked "Pokémon" to the current game list.
/// </summary>
/// <param name=""></param>
/// <param name=""></param>
/// <returns></returns>
function deleteZukan(game, pkmn)
{

}

Storage.prototype.setObject = function(key, value)
{
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key)
{
    var val = this.getItem(key);
    return value && JSON.parse(val);
}