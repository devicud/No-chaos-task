 const prompt = require ("prompt-sync")();
word = prompt ("Enter word: ");
reverseWord = ""
for (character of word){
	reverseWord = character + reverseWord;
}
if (reverseWord !== word){
	console.log("It is not  a palindrome")
}
else if(reverseWord === word){
	console.log ("It is a a palindrome")
}
