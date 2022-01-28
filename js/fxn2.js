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

Object.defineProperty(Array.prototype, "AddEvolution",
{
	/**
	 * 
	 * @param {string} pkmn1 first Pokemon ID in evolution line and forme
	 * @param {string} pkmn1 second Pokemon ID in evolution line and forme
	 * @returns {Array} the newly spliced ID
	 * @notes Only one of the parameters must be existing in the current array.
	 * If the first parameter is existing, the second parameter will be added 
	 * next to it. If the second parameter is existing, the first parameter will
	 * be added before it.
	 */
	value: function(pkmn1, pkmn2)
	{
		// check validity of items
		let pkmn1Idx = -1; /*this.indexOf(pkmn1);*/
		let pkmn2Idx = -1; /*this.indexOf(pkmn2);*/

		//console.log("pkmn1: ", pkmn1, "  pkmn2: ", pkmn2);
		for (let i = 0; i < this.length; ++i)
		{
			if (pkmn1[0] == this[i][0] && pkmn1[1] == this[i][1])
			{
				pkmn1Idx = i;
				//console.log("i: ", i, "  pkmn1: ", pkmn1);
			}
			if (pkmn2[0] == this[i][0] && pkmn2[1] == this[i][1])
			{
				pkmn2Idx = i;
				//console.log("i: ", i, "  pkmn2: ", pkmn2);
			}
			if (pkmn1Idx >= 0 && pkmn2Idx >= 0)
				break;
		}

		if (pkmn1Idx == -1 && pkmn2Idx == -1)
			return this; // both are not existing
		else if (pkmn1Idx != -1 && pkmn2Idx != -1)
			return this;
		else if (pkmn2Idx != -1)
			return this.splice(pkmn2Idx, 0, pkmn1);
		else if (pkmn1Idx != -1)
			return this.splice(pkmn1Idx + 1, 0, pkmn2);
	}
});

const lsName = "zukanData";

/**
 * Inserts an info to localStorage.
 * @param {bigint} game The game id to save.
 * @param {bigint} dexType National, regional or evolution pokedex.
 * @param {string} pkmn Pokemon code including 4-digit national index and forme.
 */
function insertZukan(game, dexType, pkmn)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		zukan = {};
	if (!zukan.hasOwnProperty(game))
		zukan[game] = {};
	if (!zukan[game].hasOwnProperty(dexType))
		zukan[game][dexType] = {};
	if (!zukan[game][dexType].hasOwnProperty("dex"))
		zukan[game][dexType].dex = [];
	if (!zukan[game][dexType].dex.includes(pkmn))
	{
		zukan[game][dexType].dex.push(pkmn);
		localStorage.setObject(lsName, zukan);
	}
}

/**
 * Deletes an info to localStorage.
 * @param {bigint} game The game id to save.
 * @param {bigint} dexType National, regional or evolution pokedex.
 * @param {string} pkmn Pokemon code including 4-digit national index and forme.
 */
function deleteZukan(game, dexType, pkmn)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return;
	if (!zukan.hasOwnProperty(game))
		return;
	if (!zukan[game].hasOwnProperty(dexType))
		return;
	if (!zukan[game][dexType].hasOwnProperty("dex"))
		return;
	var idx = zukan[game][dexType].dex.indexOf(pkmn);
	if (idx >= 0)
	{
		//delete zukan[game][dexType][idx];
		zukan[game][dexType].dex.splice(idx, 1);
		// deletes all null
		//zukan[game][dexType].dex = zukan[game][dexType].dex.filter(x => x != null);
		localStorage.setObject(lsName, zukan);
	}
}

/**
 * Get an info from localStorage.
 * @param {bigint} game The game id to save.
 * @param {bigint} dexType National, regional or evolution pokedex.
 */
function getZukan(game, dexType)
{
	var zukan = localStorage.getObject(lsName);

	// update the saved data in localStorage

	if (zukan == null)
		zukan = {};
	if (!zukan.hasOwnProperty(game))
		zukan[game] = {};
	if (!zukan[game].hasOwnProperty(dexType))
		zukan[game][dexType] = {};
	if (!zukan[game][dexType].hasOwnProperty("dex"))
		zukan[game][dexType].dex = [];
	return zukan[game][dexType].dex;
}

/**
 * Checks if a Pokemon is already on localStorage.
 * @param {bigint} game The game id to save.
 * @param {bigint} dexType National, regional or evolution pokedex.
 * @param {string} pkmn Pokemon code including 4-digit national index and forme.
 */
function inZukan(game, dexType, pkmn)
{
	var zukan = localStorage.getObject(lsName);
	if (zukan == null)
		return false;
	if (!zukan.hasOwnProperty(game))
		return false;
		if (!zukan[game].hasOwnProperty(dexType))
		return false;
	if (!zukan[game][dexType].hasOwnProperty("dex"))
		return false;
	return zukan[game][dexType].dex.includes(pkmn);
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

function imgPokemon_Clicked(el, game, dexType)
{
	// check if image is "enabled" or not
	if (el.classList.contains('gray'))
		insertZukan(game, dexType, el.id);
	else
		deleteZukan(game, dexType, el.id);

	if (inZukan(game, dexType, el.id))
		el.classList.remove('gray');
	else
		el.classList.add('gray');
}

function getCurrZukan()
{
	var zukan = localStorage.getObject(lsName);

	if (zukan == null)
		zukan = {};
	if (!zukan.hasOwnProperty("curr"))
		zukan["curr"] = {game: GAME._Re, type: DEX_TYPE.NAT};
	return zukan["curr"];
}

/**
 * 
 * @param {bigint} _game Game ID.
 * @param {bigint} _type Pokedex/listing type.
 */
function setCurrZukan(_game, _type)
{
	var zukan = localStorage.getObject(lsName);
	console.log(zukan);
	if (zukan == null)
		zukan = {};
	zukan["curr"] = {game: _game, type: _type};
	localStorage.setObject(lsName, zukan);
}

/**
 * Deep copy object.
 * @param {Object} obj Object to copy.
 * @returns 
 */
function CopyObject(obj)
{
	return JSON.parse(JSON.stringify(obj));
}