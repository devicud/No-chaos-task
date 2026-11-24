const prompt = require ("prompt-sync")();
let sum = 0;
let counter = 0;
while (true){
	let number = Number(prompt("Enter number(Enter -1 to stopSS): "))
	if (number == -1){
	console.log ("The overall average is " + average)
		break
	}
	else {
		counter ++;
		sum+= number;
		average = sum / counter;
		console.log ("Average = " + average)
	}
	
}
