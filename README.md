# BinaryKeyboard

An alphabetical binary search-esque word finder. Given a list of words in order
of most to least frequent usage, the program will do an alphabetical binary
search of the list, but instead of choosing the word exactly in the middle of
the upper and lower bounds, it will choose the most frequent word in that range.
This means that more likely words will appear sooner, allowing us to hopefully
find the word the user is searching for fastest.

The search can be navigated using the arrow keys
 - If the desired word is lexographically before the currently displayed word, press left
 - If the desired word is lexographically after the current word, press right
 - If the correct word is currently showing, press up to add it to your sentence
 - Press down to restart the current search

This project is just for fun, and rather slow overall, but I had some fun
writing it.

Credit to https://raw.githubusercontent.com/derekchuank/high-frequency-vocabulary/master/30k.txt
for providing a good default wordlist
