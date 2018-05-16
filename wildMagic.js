var request = new XMLHttpRequest();
var fileContentLines = null;

function surge()
{
	var lineIndex = Math.floor(Math.random() * fileContentLines.length);
	var line = fileContentLines[lineIndex];
	document.getElementById("result").innerHTML = line;
}

function setup() {
	console.log("Setting up...");
	request.onload = function() {
		var fileContent = this.responseText;
		fileContentLines = fileContent.split('\n');
	};
	request.open('GET', '/content/wildMagic.txt');
	request.send();
}
