const prompt = require ("prompt-sync")();
word = prompt ("Enter Word: ")
reversedWord = ""
for (character of word) {
	reversedWord = character + reversedWord
}
console.log (reversedWord)
