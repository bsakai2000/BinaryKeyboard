// The URL at which to find the wordlist, a list of words sorted from most to least frequent
var wordlistURL = "https://raw.githubusercontent.com/derekchuank/high-frequency-vocabulary/master/30k.txt";
// The delemeeter between words on the wordlist
var wordlistDelimeter = "\t\n";

// Returns positive if string1 is after string2, negative if string1 is before
// string2, and zero if equal
// Ignores case
function strcmp(string1, string2)
{
	return string1.toLowerCase().localeCompare(string2.toLowerCase());
}

// Gets the first word in words that is lexically between lower and upper
function getWord()
{
	// Look through the list of words
	for(var i = 0; i < words.length; ++i)
	{
		if(
			// If we have a first, make sure this word is after first
			(first == null || strcmp(words[i], first) > 0) && 
			// If we have a last, make sure this word is before last
			(last == null || strcmp(words[i], last) < 0)
		)
		{
			// If we found a matching word, return it
			return words[i];
		}
	}
	// If we did not find a matching word, return null
	return null;
}

// Sets current to the most frequent word between first and last, and updates
// the current word display
function resetCurrent()
{
	current = getWord();
	document.getElementById("currentWord").innerText = current;
}

// Moves the search window before current
function selectBefore()
{
	last = current;
	resetCurrent();
}

// Moves the search window after current
function selectAfter()
{
	first = current;
	resetCurrent();
}

// Selects the current word and resets the search window
function selectCurrent()
{
	document.getElementById("selectedWords").innerText += " " + current;
	first = null;
	last = null;
	resetCurrent();
}

// Reads the keypresses and allows arrow key control
function readKeyPress(e)
{
	console.log(e.key);
	switch(e.key)
	{
		case "ArrowLeft":
			selectBefore();
			break;
		case "ArrowRight":
			selectAfter();
			break;
		case "ArrowUp":
			selectCurrent();
			break;
		case "ArrowDown":
			first = null;
			last = null;
			resetCurrent();
			break;
	}

}

// Get our newline separated wordlist
var wordlistRequest = new XMLHttpRequest();
wordlistRequest.open("GET", wordlistURL, false);
wordlistRequest.send();
// Split the wordlist by the delimeter into the array words
var words = wordlistRequest.responseText.split(wordlistDelimeter);

// The lower and upper words for our binary search window
var first = null;
var last = null;

// Set everything up when it's ready
document.addEventListener("DOMContentLoaded", function(event){
	window.addEventListener("keydown", readKeyPress);
	resetCurrent();
});
