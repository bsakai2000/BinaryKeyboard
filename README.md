# BinaryKeyboard

An alphabetical binary search-esque word finder. Given a list of words in order
of most to least frequent usage, the program will do an alphabetical binary
search of the list, but instead of choosing the word exactly between the upper
and lower bounds, it will choose the most frequent word in that range. This
means that more likely words will appear sooner, allowing us to hopefully find
the word the user is searching for fastest.
