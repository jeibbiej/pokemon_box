const DEX_TYPE =
{
	NAT: 1,
	REG: 2,
	EVO: 3
}

const DEX_TYPE_NAME =
{
	[DEX_TYPE.NAT]: {code: "N", full: "National Pokedex"},
	[DEX_TYPE.REG]: {code: "R", full: "Regional Pokedex"},
	[DEX_TYPE.EVO]: {code: "E", full: "Evolution Pokedex"}
}

/**
 * Creates a Pokemon Storage System based on the given list.
 */
function CreatePSS()
{
	// Get _game and _type from localStorage
	let currGame = getCurrZukan();
	let _game = currGame["game"];
	let _type = currGame["type"];
	let _divElem = document.getElementById("pss");
	_divElem.innerHTML = "";

	let boxList = g_NatBox[_game];
	boxName = "g_NatBox";
	if (_type == DEX_TYPE.EVO)
	{
		boxList = g_EvoBox[_game];
		boxName = "g_EvoBox";
	}
	else if (_type == DEX_TYPE.REG)
	{
		boxList = g_RegBox[_game];
		boxName = "g_RegBox";
	}
	console.log("boxList: ", boxList);
	let game = GAME_INFO[_game];
	console.log("_game: ", _game);
	console.log("_type: ", _type);
	let cnt = boxList.length;
	let maxCol = game.boxCol;
	let maxRow = game.boxRow;
	let maxBox = game.boxCnt;
	let maxCnt = maxCol * maxRow;
	let boxCnt = 0;
	let box = document.createElement("div");
	let subRow = document.createElement("div");
	for (let i = 0; i < cnt; ++i)
	{
		let index = boxList[i][0];
		let forme = boxList[i][1];
		let dexItem = DEX_LIST[_game][index];
		let dexIdx = boxCnt + 1;
		let boxIdx = (boxCnt / maxCnt) + 1;
		let pkmnCode = String(index).padStart(4, "0") + forme;

		if (boxCnt % maxCnt == 0)
		{
			box = document.createElement("div");
			box.id = `box-${dexIdx}`;
			if (boxIdx > maxBox)
				box.classList.add("pss-box-ex");
			else
				box.classList.add("pss-box");
			_divElem.appendChild(box);

			subRow = document.createElement("div");
			subRow.classList.add("pss-row");
			box.appendChild(subRow);

			let boxTitle = document.createElement("div");
			boxTitle.id = `box-title-${boxIdx}`;
			boxTitle.classList.add("pss-box-title");
			boxTitle.innerHTML = `${game["code"]} ${DEX_TYPE_NAME[_type]["full"]} ${String(boxIdx).padStart(2, "0")}`;
			subRow.appendChild(boxTitle);
		}

		if (boxCnt % maxCol == 0)
		{
			subRow = document.createElement("div");
			subRow.classList.add("pss-row");
			box.appendChild(subRow);
		}

		//if (TODO: flag check if item will be added or not)
		{			
			let cell = document.createElement("div");
			cell.classList.add(`pss-cell-${maxCol}`);
			cell.width = `${100 / maxCol}%`
			subRow.appendChild(cell);

			let ico = document.createElement("img");
			ico.id = pkmnCode;

			console.log(`DEX_LIST[${_game}][${index}]: ${DEX_LIST[_game][index]}`);
			console.log(`forme: ${forme}`);
			ico.src = `${game.icoPath}/${dexItem[forme]["ico"]}.png`;
			//console.log("ico.src: ", ico.src);
			ico.classList.add("zukan-icon");
			//ico.title = dexItem[forme]["ico"];
			if (!inZukan(_game, _type, pkmnCode))
			{
				ico.classList.add("gray");
			}
			ico.onclick = function() {imgPokemon_Clicked(this, _game, _type)};
			cell.appendChild(ico);

			let name = document.createElement("div");
			name.classList.add("pss-name");
			let indexStr = String(index).padStart(3, "0");
			name.innerHTML = `${indexStr}<br/>${dexItem[forme]["name"]}`;
			//if (boxCnt == 4)
			//	name.innerHTML += "oseihf [apsf haiuehf apks f[e";
			cell.appendChild(name);

			cell.title = `${indexStr} ${dexItem[forme]["name"]}`;
			++boxCnt;
		}
	}
	while (boxCnt % (maxCnt) != 0)
	{
		if (boxCnt % maxCol == 0)
		{
			subRow = document.createElement("div");
			subRow.classList.add("pss-row");
			box.appendChild(subRow);
		}

		let cell = document.createElement("div");
		cell.classList.add(`pss-cell-${maxCol}`);
		cell.width = `${100 / maxCol}%`
		subRow.appendChild(cell);

		let ico = document.createElement("img");
		ico.src = `${game.icoPath}/0000-none.png`;
		ico.classList.add("zukan-icon");
		cell.appendChild(ico);

		let name = document.createElement("div");
		name.classList.add("pss-name");
		name.innerHTML = "&nbsp;";
		cell.appendChild(name);

		++boxCnt;
	}
}

function SetGameMenu()
{
	let divElem = document.getElementById("gameList");
	divElem.innerHTML = "";
	let game = getCurrZukan()["game"];
	let type = getCurrZukan()["type"];

	for (const key in GAME_INFO)
	{
		let gameInfo = GAME_INFO[key];
		let ref = document.createElement("div");
		if (game == key)
		{
			ref.classList.add("pss-game-full");
			ref.innerHTML += `[ ${gameInfo["name"]} ] `;
		}
		else
		{
			ref.classList.add("pss-game");
			ref.innerHTML += `[ ${gameInfo["code"]} ] `;
			ref.addEventListener("click", function()
			{
				console.log(key + " " + type)
				setCurrZukan(key, type);
				CreatePSS();
				SetGameMenu();
			});
		}
		divElem.appendChild(ref);
	}

	divElem.appendChild(document.createElement("br"));

	for (const key in DEX_TYPE)
	{
		let ref = document.createElement("div");
		if (type == DEX_TYPE[key])
		{
			ref.classList.add("pss-game-full");
			ref.innerHTML += `[ ${DEX_TYPE_NAME[DEX_TYPE[key]]["full"]} ] `;
		}
		else
		{
			ref.classList.add("pss-game");
			ref.innerHTML += `[ ${DEX_TYPE_NAME[DEX_TYPE[key]]["code"]} ] `;
			ref.addEventListener("click", function()
			{
				console.log(game + " " + DEX_TYPE[key])
				setCurrZukan(game, DEX_TYPE[key]);
				CreatePSS();
				SetGameMenu();
			});
		}
		divElem.appendChild(ref);
	}
}