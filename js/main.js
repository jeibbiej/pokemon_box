if (window.visualViewport)
{
	var windowtop = document.getElementById("mainMenu");
	
	function onWindowScroll()
	{
		windowtop.style.top = window.visualViewport.offsetTop + "px";
		windowtop.style.left = window.visualViewport.offsetLeft + "px";
		//windowtop.style.right = window.visualViewport.offsetLeft + window.visualViewport.width + "px";
		windowtop.style.width = window.visualViewport.width + "px";
	}
	onWindowScroll();
	window.visualViewport.addEventListener("resize", onWindowScroll);
	window.visualViewport.addEventListener("scroll", onWindowScroll);
	// https://developers.google.com/web/updates/2017/09/visual-viewport-api#gotchas
	window.addEventListener('scroll', onWindowScroll);
}	

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) =>
{
	const fileList = event.target.files;
	if (fileList.length != 1)
		return;

	file = fileList[0];

	const reader = new FileReader();
	reader.addEventListener('load', (event) =>
	{
		img.src = event.target.result;
	});
	reader.readAsDataURL(file);
});

boxCntr = 1;
boxIdx = 1;
boxHead = "";
boxBody = "";
gameName = getQueryVariable("game");
_Dex = _GameVersions[gameName];
if (_Dex == undefined)
{
	document.writeln("Unknown game: ", gameName);
	die();
}

version = getQueryVariable("ver");

console.log(_Dex);

const HomeId = _GameVersions.SS_Home.id
game = _Dex.id;
_Rdex = _Dex.rDex;
_Ndex = _Dex.nDex;
_Edex = _Dex.eDex;
iconPath = _Dex.icoPath;
if ((game >= _GameVersions.Re.id &&
	game <= _GameVersions.Cr.id) ||
	(game >= _GameVersions.vcRe.id &&
	game <= _GameVersions.vcCr.id))
	imgWd = _Dex.imgWd * 2;
else
	imgWd = _Dex.imgWd;
boxCap = _Dex.boxCap;
divBox = _Dex.divBox;

boxIdx = 1;
if (game < _GameVersions.Ru.id)
{
	// remove Unown
	// national
	delete _GameVersions.Go.nDex["0201"];
	delete _GameVersions.Si.nDex["0201"];
	delete _GameVersions.Cr.nDex["0201"];
	// regional
	delete _GameVersions.Go.rDex["0201"];
	delete _GameVersions.Si.rDex["0201"];
	delete _GameVersions.Cr.rDex["0201"];
	// evolution
	delete _GameVersions.Go.eDex["0201"];
	delete _GameVersions.Si.eDex["0201"];
	delete _GameVersions.Cr.eDex["0201"];
}
else if (game > _GameVersions.vcYe.id &&
		game <= _GameVersions.vcCr.id)
{
	if (game <= _GameVersions.vcYe.id) // cannot rename box
		boxIdx = 2;
	// remove Unown A-Z
	const vcUnown =
	[
		"0201-angry",  "0201-bear",   "0201-chase",    "0201-direct",  "0201-engage",  "0201-find",
		"0201-give",   "0201-help",   "0201-increase", "0201-join",    "0201-keep",    "0201-laugh",
		"0201-make",   "0201-nuzzle", "0201-observe",  "0201-perform", "0201-quicken", "0201-reassure",
		"0201-search", "0201-tell",   "0201-undo",     "0201-vanish",  "0201-want",    "0201-xxxxx",
		"0201-yield",  "0201-zoom"
	];

	vcUnown.forEach(n201 =>
	{
		// national
		delete _GameVersions.vcGo.nDex[n201];
		delete _GameVersions.vcSi.nDex[n201];
		delete _GameVersions.vcCr.nDex[n201];
		// regional
		delete _GameVersions.vcGo.rDex[n201];
		delete _GameVersions.vcSi.rDex[n201];
		delete _GameVersions.vcCr.rDex[n201];
		// evolution
		delete _GameVersions.vcGo.eDex[n201];
		delete _GameVersions.vcSi.eDex[n201];
		delete _GameVersions.vcCr.eDex[n201];
	});
}

document.getElementById("btnMenu").innerHTML = `[${_Dex.name}...]`;

document.write(`<button type="button" onclick="saveToLocal()">Export</button>`);
document.write(`<button type="file" onclick="loadFromLocal()">Import</button>`);
document.write(`<a id="downloadAnchorElem" style="display:none"></a>`);

var menu = document.getElementById("divMenu");
Object.entries(_GameVersions).forEach(gv =>
{
	if (gv[1].id === -1)
		return;

	if (gv[1].ico === "")
		menu.innerHTML += `<div class='menu-icon'>
			<a href='box.html?game=${gv[1].code}&ver=${version}'>
			<img src='https://assets.pokemon.com/static2/_ui/img/chrome/loaders/pokeball_gray.png' class='menu-itm'
			title='${gv[1].name}'></a></div>`;
	else
		menu.innerHTML += `<div class='menu-icon'>
			<a href='box.html?game=${gv[1].code}&ver=${version}'>
			<img src='game_icon/${gv[1].ico}.png' class='menu-itm'
			title='${gv[1].name}'></a></div>`;
});

menu = document.getElementById("divVer");
if (version == "r") menu.innerHTML += " [ Regional ] "; else menu.innerHTML += `<a class="btnVer" href='box.html?game=${_Dex.code}&ver=r'> [ R ] </a>`;
if (version == "n") menu.innerHTML += " [ National ] "; else menu.innerHTML += `<a class="btnVer" href='box.html?game=${_Dex.code}&ver=n'> [ N ] </a>`;
if (version == "e") menu.innerHTML += " [ Evolution ] "; else menu.innerHTML += `<a class="btnVer" href='box.html?game=${_Dex.code}&ver=e'> [ E ] </a>`;

// if (game == GameVersion._Sw || game == GameVersion._Sh)
// {
// 	_Rdex = _Regdex_SwSh;
// 	_Ndex = _Natdex_G08;
// 	_Edex = _Evodex_G08;
// 	iconPath = _IcoPath_Home;
// 	if (version == "r")	// Evolution Dex
// 	{
// 		iconPath = _IcoPath_SwSh;
// 	}
// }

if (version == "e")	// Evolution Dex
{
	_Ndex = _Edex;
}
else if (version == "r") // Regional Dex
{
	_Ndex = _Rdex;
}

_MaxDex = Object.keys(_Ndex).length;

boxCntr = 1;
boxHead = "";
boxBody = "";
boxFoot = "";
key = 0;
idxStr = "0000";
keyStr = "";
console.log(`boxCap: ${boxCap}`);
for (const rdex in _Ndex)
{
	if (rdex.substring(0, 4) != idxStr)
	{
		++key;
		idxStr = rdex.substring(0, 4);
	}
	if (game < _GameVersions.Ru.id) // Gen 1 & 2
	{
		keyStr = String(key).padStart(3, "0");
	}
	else
	{
		keyStr = String(key).padStart(4, "0");
	}
	if (boxCntr == 1)
	{
		boxHead = `<table style='border:1px solid gray; font-family:consolas; text-align:center;' cellspacing=0>`;
		boxHead += `<tr><th colspan=${divBox} style='border:1px solid gray;'>${gameName} ${String(boxIdx).padStart(2, "0")}`;
		if (version == "e")
		{
			boxHead += " E";
		}
		else if (version == "r")
		{
			boxHead += " R";
		}
		else
		{
			boxHead += " N";
		}
		boxHead += keyStr;
		++boxIdx;
	}

	//console.log(typeof(rdex) + " " + rdex + ": " + _Names[rdex]);
	if (version == "e")
	{
		boxBody += `<td style='border:1px solid gray; width:50px; vertical-align:top;'>`;
		boxBody += `<span title='${rdex.substr(0, 4)} ${_Names[rdex]}'>`;
		boxBody += `<img id='${rdex}' src='${iconPath}${_Ndex[rdex]}.png' alt='${_Ndex[rdex]}' width='${imgWd}' `;
		if (!inZukan(game, version, rdex))
			boxBody += `class="zukan-icon gray"; `;
		else
			boxBody += `class="zukan-icon"; `;
		boxBody += `onclick='imgPokemon_Clicked(this, ${game}, "${version}")'/>`;
		boxBody += `</span><br/>`;
		boxBody += `<span style='font-size:10px;'>#${rdex.substr(0, 4)}<br/>`;
		boxBody += `${_Names[rdex]}</span></td>`;
	}
	else
	{
		boxBody += `<td style='border:1px solid gray; width:50px; vertical-align:top;'>`;
		boxBody += `<span title='${keyStr} ${_Names[rdex]}'>`;
		boxBody += `<img id='${rdex}' src='${iconPath}${_Ndex[rdex]}.png' alt='${_Ndex[rdex]}' width='${imgWd}' `;
		if (!inZukan(game, version, rdex))
			boxBody += `class="zukan-icon gray"; `;
		else
			boxBody += `class="zukan-icon"; `;
		boxBody += `onclick='imgPokemon_Clicked(this, ${game}, "${version}")'/>`;
		boxBody += `</span><br/><span style='font-size:10px;'>#${keyStr}<br/>${_Names[rdex]}</span></td>`;
	}

	if (boxCntr == boxCap)
	{
		boxHead += `-${keyStr}</th></tr><tr>`;

		document.write(boxHead);
		document.write(boxBody);
		document.write("</tr></table><br/>");
		boxCntr = 0;
		boxHead = "";
		boxBody = "";
	}

	if (boxCntr % divBox == 0)
		boxBody += "</tr><tr>";

	boxCntr++;
}

// filler
while (boxCntr <= boxCap)
{
	boxBody += `<td style='border:1px solid gray; width:50px; vertical-align:top;'><img src='${iconPath}`;
	if (game < _GameVersions.Ru.id || 	// Gen 1 & 2
		game > VirtualConsole)			// Virtual Console of Gen 1 and 2
	{
		boxBody += "00";
	}
	else
	{
		boxBody += "0000";
	}
	boxBody += `-none.png' width='${imgWd}px' class="zukan-icon"/>`;
	// boxBody += `-none.png' width='${imgWd}px' `;
	// if (savedZukanGame.indexOf(rdex) == -1)
	// 	boxBody += `class="gray" `;
	// boxBody += `onclick='imgPokemon_Clicked(this, ${game})'/>`;
	boxBody += `<span style='font-size:10px;'>&nbsp;</span></td>`;
	if (boxCntr % divBox == 0)
		boxBody += "</tr><tr>";
	boxCntr++;
}
boxHead += "-";
if (game < _GameVersions.Ru.id ||	// Gen 1 & 2
	game > VirtualConsole)			// Virtual Console of Gen 1 and 2
{
	keyStr = String(key).padStart(3, "0");
}
else
{
	keyStr = String(key).padStart(4, "0");
}
boxHead += `${keyStr}</th></tr><tr>`;

document.write(boxHead);
document.write(boxBody);
document.write("</tr></table><br/>");
