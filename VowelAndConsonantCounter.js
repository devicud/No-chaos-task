const prompt = require("prompt-sync")();
let vowel_counter = 0;
let vowel = "aeiou";
let consonant = "bcdfghjklmnpqrstvwxyz"
let consonant_counter = 0;
let input = prompt("Enter any word: ");
for (letters of input){
	if (letters of vowel){
		vowel_counter+=1;
		}
	for (letters of  consonant){
		consonant_counter += 1;
	}
	}
console.log("the number of consonants are " + consonant_counter );
console.log("the number of vowels are " + vowel_counter );
