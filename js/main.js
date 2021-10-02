const g_ZukanVersion = "0.0.1";

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

var dexType = getQueryVariable("ver");

console.log(_Dex);

const HomeId = _GameVersions.SS_Home.id
game = _Dex.id;
_Rdex = _Dex.rDex;
_Ndex = _Dex.nDex;
_Edex = _Dex.eDex;
iconPath = _Dex.icoPath;
// if ((game >= _GameVersions.Re.id &&
// 	game <= _GameVersions.Cr.id) ||
// 	(game >= _GameVersions.vcRe.id &&
// 	game <= _GameVersions.vcCr.id))
// 	imgWd = _Dex.imgWd * 2;
// else
// 	imgWd = _Dex.imgWd;
imgWd = _Dex.imgWd;
if (imgWd <= 32)
	imgWd *= 2;
boxCap = _Dex.boxCap;
divBox = _Dex.divBox;

g_Flags = optGet(game, dexType);
flags = unionFlags(g_Flags, _Dex.flags);
console.log("g_Flags: " + g_Flags + " _Dex.flags: " + _Dex.flags + " flags: " + flags);
boxIdx = 1;
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
			<a href='box.html?game=${gv[1].code}&ver=${dexType}'>
			<img src='https://assets.pokemon.com/static2/_ui/img/chrome/loaders/pokeball_gray.png' class='menu-itm'
			title='${gv[1].name}'></a></div>`;
	else
		menu.innerHTML += `<div class='menu-icon'>
			<a href='box.html?game=${gv[1].code}&ver=${dexType}'>
			<img src='game_icon/${gv[1].ico}.png' class='menu-itm'
			title='${gv[1].name}'></a></div>`;
});

menu = document.getElementById("divVer");
if (dexType == "r") menu.innerHTML += " [ Regional ] "; else menu.innerHTML += `<a class="btnVer" href='box.html?game=${_Dex.code}&ver=r'> [ R ] </a>`;
if (dexType == "n") menu.innerHTML += " [ National ] "; else menu.innerHTML += `<a class="btnVer" href='box.html?game=${_Dex.code}&ver=n'> [ N ] </a>`;
if (dexType == "e") menu.innerHTML += " [ Evolution ] "; else menu.innerHTML += `<a class="btnVer" href='box.html?game=${_Dex.code}&ver=e'> [ E ] </a>`;
menu.innerHTML += ` <span id="btnOpt" onclick="toggleOptions()"> [ Options ] </span>`;

if (dexType == "e")	// Evolution Dex
{
	_Ndex = _Edex;
}
else if (dexType == "r") // Regional Dex
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
for (const dex in _Ndex)
{
	var dexInfo = _Ndex[dex];
	var dexIco = dexInfo.ico;
	var dexFlags = dexInfo.flags;

	// check flags
	if (dexFlags != 0)
	{
		var chkFlags = flags.filter(flag => dexFlags.includes(flag));
		//console.log(dex + " flags: " + flags + " dexFlags: " + dexFlags + " chkFlags: " + chkFlags);
		if (chkFlags.length == 0)
			continue;
	}

	if (dex.substring(0, 4) != idxStr)
	{
		++key;
		idxStr = dex.substring(0, 4);
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
		if (dexType == "e")
		{
			boxHead += " E";
		}
		else if (dexType == "r")
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

	//console.log(typeof(dex) + " " + dex + ": " + _Names[dex]);
	if (dexType == "e")
	{
		boxBody += `<td style='border:1px solid gray; width:50px; vertical-align:top;'>`;
		boxBody += `<span title='${dex.substr(0, 4)} ${_Names[dex]}'>`;
		boxBody += `<img id='${dex}' src='${iconPath}${dexIco}.png' alt='${dexIco}' width='${imgWd}' `;
		if (!inZukan(game, dexType, dex))
			boxBody += `class="zukan-icon gray"; `;
		else
			boxBody += `class="zukan-icon"; `;
		boxBody += `onclick='imgPokemon_Clicked(this, ${game}, "${dexType}")'/>`;
		boxBody += `</span><br/>`;
		boxBody += `<span style='font-size:10px;'>#${dex.substr(0, 4)}<br/>`;
		boxBody += `${_Names[dex]}</span></td>`;
	}
	else
	{
		boxBody += `<td style='border:1px solid gray; width:50px; vertical-align:top;'>`;
		boxBody += `<span title='${keyStr} ${_Names[dex]}'>`;
		boxBody += `<img id='${dex}' src='${iconPath}${dexIco}.png' alt='${dexIco}' width='${imgWd}' `;
		if (!inZukan(game, dexType, dex))
			boxBody += `class="zukan-icon gray"; `;
		else
			boxBody += `class="zukan-icon"; `;
		boxBody += `onclick='imgPokemon_Clicked(this, ${game}, "${dexType}")'/>`;
		boxBody += `</span><br/><span style='font-size:10px;'>#${keyStr}<br/>${_Names[dex]}</span></td>`;
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
	// if (savedZukanGame.indexOf(dex) == -1)
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
