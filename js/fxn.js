
function inArray(haystack, needle) {
    // parameter check
    if (!(haystack instanceof Array))
        return -1;
    if (typeof (haystack[0]) != typeof (needle))
        return -1;

    var len = haystack.length;
    for (var i = 0; i < len; i++) {
        if (haystack[i] == needle) {
            return i;
        }
    }
    //console.log("needle:" + needle + " haystack:" + haystack);
    return -1
};

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable)
            return pair[1];
    }
    return "";
};

function imgPokemon_Clicked(el, game) {
    // check if image is "enabled" or not
    if (el.classList.contains('gray')) {
        el.classList.remove('gray');
        deleteZukan(game, el.id);
    }
    else {
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
function insertZukan(game, pkmn) {
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
function deleteZukan(game, pkmn) {

}

Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
    var val = this.getItem(key);
    return value && JSON.parse(val);
}