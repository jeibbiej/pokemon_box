function inArray(haystack, needle)
{
	// parameter check
	if (!(haystack instanceof Array))
		return -1;
	if (typeof (haystack[0]) != typeof (needle))
		return -1;

	var len = haystack.length;
	for (var i = 0; i < len; i++)
	{
		if (haystack[i] == needle)
		{
			return i;
		}
	}
	//console.log("needle:" + needle + " haystack:" + haystack);
	return -1
};

function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++)
	{
		var pair = vars[i].split("=");
		if (pair[0] == variable)
			return pair[1];
	}
	return "";
};

function imgPokemon_Clicked(el, game, version)
{
	// check if image is "enabled" or not
	if (el.classList.contains('gray'))
		insertZukan(game, version, el.id);
	else
		deleteZukan(game, version, el.id);

	if (inZukan(game, version, el.id))
		el.classList.remove('gray');
	else
		el.classList.add('gray');
}

const lsName = "zukanData";

/// <summary>
/// Inserts a clicked "Pokémon" to the current game list.
/// </summary>
/// <param name=""></param>
/// <param name=""></param>
/// <returns></returns>
function insertZukan(game, version, pkmn)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		zukan = {};
	if (!zukan.hasOwnProperty(game))
		zukan[game] = {};
	if (!zukan[game].hasOwnProperty(version))
		zukan[game][version] = [];
	if (!zukan[game][version].includes(pkmn))
	{
		zukan[game][version].push(pkmn);
		localStorage.setObject(lsName, zukan);
	}
}

/// <summary>
/// Deletes a clicked "Pokémon" to the current game list.
/// </summary>
/// <param name=""></param>
/// <param name=""></param>
/// <returns></returns>
function deleteZukan(game, version, pkmn)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return;
	if (!zukan.hasOwnProperty(game))
		return;
	if (!zukan[game].hasOwnProperty(version))
		return;
	var idx = zukan[game][version].indexOf(pkmn);
	if (idx >= 0)
	{
		delete zukan[game][version][idx];
		localStorage.setObject(lsName, zukan);
	}
}

function getZukan(game, version)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		zukan = {};
	if (!zukan.hasOwnProperty(game))
		zukan[game] = {};
	if (!zukan.hasOwnProperty(version))
		zukan[game][version] = [];
	return zukan[game][version];
}

function inZukan(game, version, pkmn)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return false;
	if (!zukan.hasOwnProperty(game))
		return false;
	if (!zukan[game].hasOwnProperty(version))
		return false;
	return zukan[game][version].includes(pkmn);
}

Storage.prototype.setObject = function (key, value)
{
	this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key)
{
	var val = this.getItem(key);
	if (val === 'undefined')
		return {};
	return val && JSON.parse(val);
}

function saveToLocal()
{
	var zukan = localStorage.getItem(lsName);
	var dataStr = "data:text/json;charset=utf-8," + JSON.stringify(zukan);
	var downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href", dataStr);
	downloadAnchorNode.setAttribute("download", lsName + ".json");
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}

function loadFromLocal()
{
	fetch(`${lsName}.json`)
	.then(response => response.json())
	.then(json => console.log(json));
}

function toggleMenu()
{
	var x = document.getElementById("divMenu");
	if (x.style.display === "none")
	{
		x.style.display = "inline-block";
	}
	else
	{
		x.style.display = "none";
	}
}