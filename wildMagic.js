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
	
	numResults = 10;
	var i;
	for (i = 0; i < numResults; i++) {
		var p = document.createElement("p");
		var node = document.id = "result"+i.toString();
		var e;
		if (i == 0) {
			e = document.getElementById("button");
		} else {
			e = "result"-i.toString();
		}
	}
	
}
