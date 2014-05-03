/* Functions that handle Mado's footer. */

/*
* Variables (in alphabetical order).
*/

var charsDiv; // The div that contains the document's chars number.
var linkUrlSpan; // The div that displays the href when a user is overing a link.
var nameDiv; // The div that contains the name of the opened document.
var wordsDiv; // The div that contains the document's words number.

/*
* Functions (in alphabetical order).
*
* Resume:
	* counterSelection (): what counter to display.
	* displayCounter (): change charsDiv and wordsDiv.
	* resetCounter (): what to display if there is nothing in the contenteditable.
*/


function counterSelection () {
	if (charsDiv.style.display == "none") {
		$(charsDiv).css("display", "inline");
		$(wordsDiv).css("display", "none");
		sendEvent("Number of chars diplayed");
	}
	else {
		$(charsDiv).css("display", "none");
		$(wordsDiv).css("display", "inline");
		sendEvent("Number of words diplayed");
	}
}

function displayCounter (counter) {
	charsDiv.innerHTML = "&nbsp;" + counter.characters + " characters&nbsp;";
  	wordsDiv.innerHTML = "&nbsp;" + counter.words + " words&nbsp;";
  	if (counter.characters == 1)
  		charsDiv.innerHTML = "&nbsp;" + counter.characters + " character&nbsp;";
  	if (counter.words == 1)
		wordsDiv.innerHTML = "&nbsp;" + counter.words + " word&nbsp;";
}

function resetCounter () {
	charsDiv.innerHTML = "&nbsp;0 characters&nbsp;";
  	wordsDiv.innerHTML = "&nbsp;0 words&nbsp;";
}