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
		//delete zukan[game][version][idx];
		zukan[game][version].splice(idx, 1);
		// deletes all null
		zukan[game][version] = zukan[game][version].filter(x => x != null);
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

function changeVer(newVer)
{
	updateURLParameter(window.location.href, "ver", newVer);
}

function toggleOptions()
{
	var x = document.getElementById("divOpt");
	if (x.style.display === "none")
	{
		x.style.display = "inline-block";
		optSet();
	}
	else
	{
		x.style.display = "none";
	}
}

function optSet()
{
	document.getElementById("optMinGenderDiff").checked = ((g_Flags.contains(FORM_MIN_GENDER_DIFF)));
	var val = (!(g_Flags.contains(FORM_BATTLE_GRP)));
	document.getElementById("optGrpBattleForm").checked = !val;
	{
		document.getElementById("optBattleForm").disabled = val;
		document.getElementById("optBattleForm").checked = ((g_Flags.contains(FORM_BATTLE)));
		document.getElementById("optBattleForm").parentNode.disabled = val;

		// document.getElementById("optMegaForm").disabled = val;
		// document.getElementById("optMegaForm").checked = ((g_Flags.contains(FORM_BATTLE)));
		// document.getElementById("optMegaForm").parentNode.disabled = val;

		// document.getElementById("optGmaxForm").disabled = val;
		// document.getElementById("optGmaxForm").checked = ((g_Flags.contains(FORM_BATTLE))0);
		// document.getElementById("optGmaxForm").parentNode.disabled = val;
	}
	document.getElementById("optForm0201").checked = ((g_Flags.contains(FORM_0201)));
	document.getElementById("optForm0386").checked = ((g_Flags.contains(FORM_0386)));
	document.getElementById("optForm0412").checked = ((g_Flags.contains(FORM_0412)));
	document.getElementById("optForm0422").checked = ((g_Flags.contains(FORM_0422)));
	document.getElementById("optForm0479").checked = ((g_Flags.contains(FORM_0479)));
	document.getElementById("optForm0487").checked = ((g_Flags.contains(FORM_0487)));
	document.getElementById("optForm0492").checked = ((g_Flags.contains(FORM_0492)));
	document.getElementById("optForm0493").checked = ((g_Flags.contains(FORM_0493)));
}

// switch from base form to another form
function optSwitch(checked, val)
{
	//console.log(checked + " " + val);
	optToggle(val);
	optToggle(val + 1);
	optSet();
}

function optToggle(checked, val)
{
	//console.log(checked + " " + val);
	if (checked)
	{
		if (!g_Flags.includes(val))
		{
			g_Flags.push(val);
		}
	}
	else
	{
		var idx = g_Flags.indexOf(val);
		if (idx >= 0)
		{
			//delete zukan[game][version][idx];
			g_Flags.splice(idx, 1);
			// deletes all null
			g_Flags = g_Flags.filter(x => x != null);
		}
	}
	optSet();
}

function optSave()
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return;
	zukan.opt = g_Flags;
	localStorage.setObject(lsName, zukan);

	toggleOptions();
	location.reload();
}

const InitFlag = [	FORM_MAJ_GENDER_DIFF,
					FORM_MIN_GENDER_BASE,
					FORM_BATTLE_BASE,
					FORM_0201,
					FORM_0386,
					FORM_0412,
					FORM_0422,
					FORM_0479,
					FORM_0487,
					FORM_0492,
					FORM_0493,
					FORM_BATTLE_GRP];

function optReset()
{
	g_Flags = InitFlag;
}

function optGet()
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return InitFlag;
	if (!zukan.hasOwnProperty("opt"))
		return InitFlag;
	return zukan.opt;
}