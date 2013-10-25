/* The JS on background */
chrome.app.runtime.onLaunched.addListener(function(parameters) { // Open mado.html in a new window when button pressed.
	/* If you want to try opening a Markdown file with Mado on Windows, open the command line and try that : 
	"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app-id=YourAppId "C:\Path\To\document.md"
	*/
	if (parameters.items != undefined) // If you're opening a Markdown file.
		chrome.storage.local.set({ "tempFileEntry" : chrome.fileSystem.retainEntry(parameters.items[0].entry) }, windowCreation);		
	else // New file.
	  	windowCreation();
});

function windowCreation () {
	chrome.storage.local.get(["lastX", "lastY", "lastWidth", "lastHeight"], function(mado) {
		if (mado["lastX"] != undefined && mado["lastY"] != undefined && mado["lastWidth"] != undefined && mado["lastHeight"] != undefined)
			anotherWindow(mado["lastX"], mado["lastY"], mado["lastWidth"], mado["lastHeight"]);
		else
			firstWindow();
	});	
}

function anotherWindow (theX, theY, theWidth, theHeight) {
	chrome.app.window.create("mado.html", {
	    bounds: {
			left: theX,
	    	top: theY,
	      	width: theWidth,
	      	height: theHeight
	    }, 
	    minWidth: theMinWidth(), 
	    minHeight: 240
	});
}

function firstWindow () {
	chrome.app.window.create("mado.html", {
	    bounds: {
	      	width: Math.round(screen.width * 0.85),
	      	height: Math.round(screen.height * 0.85)
	    }, 
	    minWidth: theMinWidth(), 
	    minHeight: 240
	});
}

function theMinWidth () {
	if (screen.width < 1600)
		return 683;
	else
		return 800;
}