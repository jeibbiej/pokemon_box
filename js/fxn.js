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
		zukan[game][version] = {};
	if (!zukan[game][version].hasOwnProperty("dex"))
		zukan[game][version].dex = [];
	if (!zukan[game][version].dex.includes(pkmn))
	{
		zukan[game][version].dex.push(pkmn);
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
	if (!zukan[game][version].hasOwnProperty("dex"))
		return;
	var idx = zukan[game][version].dex.indexOf(pkmn);
	if (idx >= 0)
	{
		//delete zukan[game][version][idx];
		zukan[game][version].dex.splice(idx, 1);
		// deletes all null
		//zukan[game][version].dex = zukan[game][version].dex.filter(x => x != null);
		localStorage.setObject(lsName, zukan);
	}
}

function getZukan(game, version)
{
	var zukan = localStorage.getObject(lsName);

	// update the saved data in localStorage

	if (zukan == null)
		zukan = {};
	if (!zukan.hasOwnProperty(game))
		zukan[game] = {};
	if (!zukan[game].hasOwnProperty(version))
		zukan[game][version] = {};
	if (!zukan[game][version].hasOwnProperty("dex"))
		zukan[game][version].dex = [];
	return zukan[game][version].dex;
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
	if (!zukan[game][version].hasOwnProperty("dex"))
		return false;
	return zukan[game][version].dex.includes(pkmn);
}

Storage.prototype.setObject = function (key, obj)
{
	this.setItem(key, JSON.stringify(obj));
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
	document.getElementById("optMinGenderDiff").checked = g_Flags.includes(FORM_MIN_GENDER_DIFF);
	var val = !g_Flags.includes(FORM_BATTLE_GRP);
	document.getElementById("optGrpBattleForm").checked = !val;
	{
		document.getElementById("optBattleForm").disabled = val;
		document.getElementById("optBattleForm").checked = g_Flags.includes(FORM_BATTLE);
		document.getElementById("optBattleForm").parentNode.disabled = val;

		// document.getElementById("optMegaForm").disabled = val;
		// document.getElementById("optMegaForm").checked = g_Flags.includes(FORM_BATTLE);
		// document.getElementById("optMegaForm").parentNode.disabled = val;

		// document.getElementById("optGmaxForm").disabled = val;
		// document.getElementById("optGmaxForm").checked = g_Flags.includes(FORM_BATTLE);
		// document.getElementById("optGmaxForm").parentNode.disabled = val;
	}
	document.getElementById("optForm0201").checked = g_Flags.includes(FORM_0201);
	document.getElementById("optForm0386").checked = g_Flags.includes(FORM_0386);
	document.getElementById("optForm0412").checked = g_Flags.includes(FORM_0412);
	document.getElementById("optForm0422").checked = g_Flags.includes(FORM_0422);
	document.getElementById("optForm0479").checked = g_Flags.includes(FORM_0479);
	document.getElementById("optForm0487").checked = g_Flags.includes(FORM_0487);
	document.getElementById("optForm0492").checked = g_Flags.includes(FORM_0492);
	document.getElementById("optForm0493").checked = g_Flags.includes(FORM_0493);
}

// switch from base form to another form
function optSwitch(checked, val)
{
	//console.log(checked + " " + val);
	optToggle(checked, val);
	optToggle(!checked, val - 1);
	console.log("g_Flags: " + g_Flags);
}

function optToggle(checked, val)
{
	console.log(checked + " " + val);
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
			// remove val;
			g_Flags.splice(idx, 1);
			// remove all null
			//g_Flags = g_Flags.filter(x => x != null);
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
					FORM_0201, // Unown
					FORM_0386, // Deoxys
					FORM_0412, // Burmy and Wormadam
					FORM_0422, // Shellos and Gastrodon
					FORM_0479, // Rotom
					FORM_0487, // Giratina
					FORM_0492, // Shaymin
					FORM_0493, // Arceus
					FORM_0550, // Basculin
					FORM_0585, // Deerling and Sawsbuck
					FORM_0641, // Tornadus
					FORM_0642, // Thundurus
					FORM_0645, // Landorus
					FORM_0646, // Kyurem
					FORM_0647, // Keldeo
					FORM_0648, // Meloetta
					FORM_0649, // Genesect
					/*FORM_BATTLE_GRP*/];

function optReset()
{
	g_Flags = InitFlag;
}

function optGet(game, version)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return InitFlag;
	if (!zukan.hasOwnProperty(game))
		return InitFlag;
	if (!zukan[game].hasOwnProperty(version))
		return InitFlag;
	if (!zukan[game][version].hasOwnProperty("opt"))
		return InitFlag;
	return zukan[game][version].opt;
}

// makes sure that the flags are "unique"
function unionFlags(gFlags, dFlags)
{
	if (dFlags.includes(FORM_MAJ_GENDER_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_MAJ_GENDER_DIFF);
		if (!gFlags.includes(FORM_MAJ_GENDER_BASE))
			gFlags.push(FORM_MAJ_GENDER_BASE);
	}
	else if (dFlags.includes(FORM_MAJ_GENDER_DIFF))
	{
		gFlags = gFlags.filter(flag => flag != FORM_MAJ_GENDER_BASE);
		if (!gFlags.includes(FORM_MAJ_GENDER_DIFF))
			gFlags.push(FORM_MAJ_GENDER_DIFF);
	}

	if (dFlags.includes(FORM_MIN_GENDER_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_MIN_GENDER_DIFF);
		if (!gFlags.includes(FORM_MIN_GENDER_BASE))
			gFlags.push(FORM_MIN_GENDER_BASE);
	}
	else if (dFlags.includes(FORM_MIN_GENDER_DIFF))
	{
		gFlags = gFlags.filter(flag => flag != FORM_MIN_GENDER_BASE);
		if (!gFlags.includes(FORM_MIN_GENDER_DIFF))
			gFlags.push(FORM_MIN_GENDER_DIFF);
	}
	
	if (dFlags.includes(FORM_0201_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0201);
		if (!gFlags.includes(FORM_0201_BASE))
			gFlags.push(FORM_0201_BASE);
	}
	else if (dFlags.includes(FORM_0201))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0201_BASE);
		if (!gFlags.includes(FORM_0201))
			gFlags.push(FORM_0201);
	}

	if (dFlags.includes(FORM_BATTLE_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_BATTLE);
		if (!gFlags.includes(FORM_BATTLE_BASE))
			gFlags.push(FORM_BATTLE_BASE);
	}
	else if (dFlags.includes(FORM_BATTLE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_BATTLE_BASE);
		if (!gFlags.includes(FORM_BATTLE))
			gFlags.push(FORM_BATTLE);
	}
	
	// FORM_MEGA
	// FORM_GMAX
	
	if (dFlags.includes(FORM_0386_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0386);
		if (!gFlags.includes(FORM_0386_BASE))
			gFlags.push(FORM_0386_BASE);
	}
	// FORM_0386_FR
	// FORM_0386_LG
	// FORM_0386_Em
	else if (dFlags.includes(FORM_0386))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0386_BASE);
		if (!gFlags.includes(FORM_0386))
			gFlags.push(FORM_0386);
	}
	
	// FORM_0172_BASE
	if (dFlags.includes(FORM_0172_HGSS))
	{
		if (!gFlags.includes(FORM_0172_HGSS))
			gFlags.push(FORM_0172_HGSS);
	}
	
	if (dFlags.includes(FORM_0412_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0412);
		if (!gFlags.includes(FORM_0412_BASE))
			gFlags.push(FORM_0412_BASE);
	}
	else if (dFlags.includes(FORM_0412))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0412_BASE);
		if (!gFlags.includes(FORM_0412))
			gFlags.push(FORM_0412);
	}
	
	if (dFlags.includes(FORM_0422_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0422);
		if (!gFlags.includes(FORM_0422_BASE))
			gFlags.push(FORM_0422_BASE);
	}
	else if (dFlags.includes(FORM_0422))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0422_BASE);
		if (!gFlags.includes(FORM_0422))
			gFlags.push(FORM_0422);
	}
	
	if (dFlags.includes(FORM_0479_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0479);
		if (!gFlags.includes(FORM_0479_BASE))
			gFlags.push(FORM_0479_BASE);
	}
	else if (dFlags.includes(FORM_0479))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0479_BASE);
		if (!gFlags.includes(FORM_0479))
			gFlags.push(FORM_0479);
	}
	
	if (dFlags.includes(FORM_0487_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0487);
		if (!gFlags.includes(FORM_0487_BASE))
			gFlags.push(FORM_0487_BASE);
	}
	else if (dFlags.includes(FORM_0487))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0487_BASE);
		if (!gFlags.includes(FORM_0487))
			gFlags.push(FORM_0487);
	}
	
	if (dFlags.includes(FORM_0492_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0492);
		if (!gFlags.includes(FORM_0492_BASE))
			gFlags.push(FORM_0492_BASE);
	}
	else if (dFlags.includes(FORM_0492))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0492_BASE);
		if (!gFlags.includes(FORM_0492))
			gFlags.push(FORM_0492);
	}
	
	if (dFlags.includes(FORM_0493_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0493);
		if (!gFlags.includes(FORM_0493_BASE))
			gFlags.push(FORM_0493_BASE);
	}
	else if (dFlags.includes(FORM_0493))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0493_BASE);
		if (!gFlags.includes(FORM_0493))
			gFlags.push(FORM_0493);
	}

	if (dFlags.includes(FORM_0550_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0550);
		if (!gFlags.includes(FORM_0550_BASE))
			gFlags.push(FORM_0550_BASE);
	}
	else if (dFlags.includes(FORM_0550))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0550_BASE);
		if (!gFlags.includes(FORM_0550))
			gFlags.push(FORM_0550);
	}

	if (dFlags.includes(FORM_0641_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0641);
		if (!gFlags.includes(FORM_0641_BASE))
			gFlags.push(FORM_0641_BASE);
	}
	else if (dFlags.includes(FORM_0641))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0641_BASE);
		if (!gFlags.includes(FORM_0641))
			gFlags.push(FORM_0641);
	}

	if (dFlags.includes(FORM_0642_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0642);
		if (!gFlags.includes(FORM_0642_BASE))
			gFlags.push(FORM_0642_BASE);
	}
	else if (dFlags.includes(FORM_0642))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0642_BASE);
		if (!gFlags.includes(FORM_0642))
			gFlags.push(FORM_0642);
	}

	if (dFlags.includes(FORM_0645_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0645);
		if (!gFlags.includes(FORM_0645_BASE))
			gFlags.push(FORM_0645_BASE);
	}
	else if (dFlags.includes(FORM_0645))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0645_BASE);
		if (!gFlags.includes(FORM_0645))
			gFlags.push(FORM_0645);
	}

	if (dFlags.includes(FORM_0646_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0646);
		if (!gFlags.includes(FORM_0646_BASE))
			gFlags.push(FORM_0646_BASE);
	}
	else if (dFlags.includes(FORM_0646))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0646_BASE);
		if (!gFlags.includes(FORM_0646))
			gFlags.push(FORM_0646);
	}

	if (dFlags.includes(FORM_0647_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0647);
		if (!gFlags.includes(FORM_0647_BASE))
			gFlags.push(FORM_0647_BASE);
	}
	else if (dFlags.includes(FORM_0647))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0647_BASE);
		if (!gFlags.includes(FORM_0647))
			gFlags.push(FORM_0647);
	}

	if (dFlags.includes(FORM_0648_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0648);
		if (!gFlags.includes(FORM_0648_BASE))
			gFlags.push(FORM_0648_BASE);
	}
	else if (dFlags.includes(FORM_0648))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0648_BASE);
		if (!gFlags.includes(FORM_0648))
			gFlags.push(FORM_0648);
	}

	if (dFlags.includes(FORM_0649_BASE))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0649);
		if (!gFlags.includes(FORM_0649_BASE))
			gFlags.push(FORM_0649_BASE);
	}
	else if (dFlags.includes(FORM_0649))
	{
		gFlags = gFlags.filter(flag => flag != FORM_0649_BASE);
		if (!gFlags.includes(FORM_0649))
			gFlags.push(FORM_0649);
	}

	return gFlags;
}

///////////////////////////////////////////////////////
// localStorage "zukan" version converter
///////////////////////////////////////////////////////

function getZukanVersion()
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return "";
	if (!zukan.hasOwnProperty("ver"))
		zukan["ver"] = "0.0.0";
	return zukan["ver"];
}

function convertZukanTo_0_0_1()
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return;
	zukan["ver"] = "0.0.1";

	var newZukan = {};
	var opt = InitFlag;
	if (zukan.hasOwnProperty("opt"))
		opt = zukan.opt;


	for (const game in zukan)
	{
		console.log("game: " + game);
		var zukanGame = zukan[game];
		newZukan[game] = {};
		for (const ver in zukanGame)
		{
			console.log("ver: " + ver);
			var zukanGameVer = zukanGame[ver];
			newZukan[game][ver] = {};
			newZukan[game][ver].dex = zukanGameVer;
			newZukan[game][ver].opt = opt;
		}
	}

	localStorage.setObject(lsName, newZukan);

	return zukan["ver"];
}

function updateZukan()
{
	var zukanVersion = getZukanVersion();
	if (zukanVersion === "0.0.0")
		zukanVersion = convertZukanTo_0_0_1();
	// if (zukanVersion === "0.0.0")
	// 	zukanVersion = convertZukanTo_();
}