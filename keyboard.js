// The URL at which to find the wordlist, a list of words sorted from most to least frequent
var wordlistURL = "https://raw.githubusercontent.com/derekchuank/high-frequency-vocabulary/master/30k.txt";
// The delemeeter between words on the wordlist
var wordlistDelimeter = "\t\n";

// Returns positive if string1 > string2, negative if string2 > string1, and zero if equal
// Ignores case
function strcmp(string1, string2)
{
	return string1.toLowerCase().localeCompare(string2.toLowerCase());
}

// Gets the first word in words that is lexically between lower and upper
function getWord(lower, upper, words)
{
	// Look through the list of words
	for(var i = 0; i < words.length; ++i)
	{
		if(
			// If we have a lower, make sure this word is above lower
			(lower == null || strcmp(words[i], lower) > 0) && 
			// If we have an upper, make sure this word is below upper
			(upper == null || strcmp(words[i], upper) < 0)
		)
		{
			// If we found a matching word, return it
			return words[i];
		}
	}
	// If we did not find a matching word, return null
	return null;
}

// Get our newline separated wordlist
var wordlistRequest = new XMLHttpRequest();
wordlistRequest.open("GET", wordlistURL, false);
wordlistRequest.send();
// Split the wordlist by the delimeter into the array words
var words = wordlistRequest.responseText.split(wordlistDelimeter);

// The lower and upper words for our binary search window
var lower = null;
var upper = null;
