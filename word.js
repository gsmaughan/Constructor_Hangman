
var isLetter = require('is-letter');
  // * **Word**: Used to create an object representing the current word the user 
  // is attempting to guess. This should contain word specific logic and data.



	var wordArray = ["MARKELL JOHNSON", "AL FREEMAN", "TORIN DORN", "BRAXTON BEVERLY", "OMER YURTSEVEN"];
	var playerArray = [];
	var dashed = [];
	var playerIndex = 0;
	var wins = 0;
	var losses = 0;
	


let guessesRemaining = 5;


//take a player in the wordArray and push each letter into the playerArray



var show = function(){



	this.display = function(){
		

		var playerName = wordArray[playerIndex];
		var playerNameLength = wordArray[playerIndex].length;

		for(var i = 0; i < playerName.length; i++ ){
			var playerLetter = playerName.charAt(i);
			playerArray.push(playerLetter);
		}


		// replace with dashes
		for(var j = 0; j < playerArray.length; j++){
			
				if(isLetter(playerArray[j])){
					// dashed += "_ ";
					dashed.push("_");
				}
				else{
					dashed.push(" ");
				}
		} //end for loop


		var str = dashed.join(' ');
		console.log(str);

		// } //end for loop
	
	};// end display

	this.replace = function(inputLetter){
		// console.log("this.replace works");
		this.inputLetter = inputLetter;
		//create a new instance of letter.js
			var Letter = require("./letter");
  			var input = new Letter();


		if(playerArray.indexOf(inputLetter) > -1){
			// console.log(inputLetter + " is in this word");
			this.switch(inputLetter);
		}

		else{
			console.log(inputLetter + " is NOT in this word");
			guessesRemaining--;
			console.log("Only", guessesRemaining, "guesses left.");
			
  			//re-run the .enterLetter function from the letter file after letters are shown
  			input.enterLetter();
		}

		if (guessesRemaining == 0){
				console.log("Out of guesses");

				playerArray = [];
				dashed = [];
				playerIndex++;
				guessesRemaining = 5;
				losses++;
				console.log("Wins", wins, "Losses", losses);



				var Letter = require("./letter");
  				var input = new Letter();
				input.check();
			}
		

		}; // end this.replace 

	this.switch = function (inputLetter){
				//create a new instance of letter.js
			

			this.inputLetter = inputLetter;

			//for loop for changing the dashes with inputLetter
			for (var k = 0; k < dashed.length; k++){
				if (playerArray[k] == this.inputLetter){
					dashed[k] = this.inputLetter;
				} // end if loop

			} // end for loop

			//make a string out of all elements in dashed array
			var str = dashed.join(' ');
			console.log(str);

			if(dashed.indexOf("_") == -1){
				console.log("Good job");
				playerArray = [];
				dashed = [];
				playerIndex++;
				wins++;
				console.log("Wins", wins, "Losses", losses);


				var Letter = require("./letter");
  				var input = new Letter();
				input.check();
				
			}



			else{
  			//re-run the .enterLetter function from the letter file after letters are shown
  			var Letter = require("./letter");
  			var input = new Letter();

  			input.enterLetter();

			}
			
			
		}; //end switch

}; //end show constructor

module.exports = show;