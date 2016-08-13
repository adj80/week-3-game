var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"]

var Wins = 0;
var Losses = 0;
var GuessesLeft =9;


var computerGuess = options[Math.floor(Math.random(options.Length))];
console.log (options[computerGuess]); 
console.log (computerGuess);
var userGuess = prompt("Guess what letter I am thinking of");
	if ((userGuess == computerGuess)){
		Wins++;
	}else if ((userGuess != computerGuess)){
		GuessesLeft--;
	}
	console.log(userGuess);
	console.log(Wins);
	console.log(GuessesLeft);
document.onkeyup = function(event) {
	alert('pressed a button');
	var userGuess = 9;
}