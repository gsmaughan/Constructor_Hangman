
var isLetter = require('is-letter');
  // * **Word**: Used to create an object representing the current word the user 
  // is attempting to guess. This should contain word specific logic and data.

var wordArray = ["MARKELL JOHNSON", "AL FREEMAN", "TORIN DORN", "BRAXTON BEVERLY", "OMER YURTSEVEN"];
var playerArray = [];
var dashed = [];
var playerIndex = 0;
var playerName = wordArray[playerIndex];
var playerNameLength = wordArray[playerIndex].length;


//take a player in the wordArray and push each letter into the playerArray
for(var i = 0; i < playerName.length; i++ ){
	var playerLetter = playerName.charAt(i);
	playerArray.push(playerLetter);
}


var show = function(){

	this.display = function(){
		

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
		console.log("this.replace works");
		this.inputLetter = inputLetter;

		if(playerArray.indexOf(inputLetter) > -1){
			console.log(inputLetter + " is in this word");
			this.switch(inputLetter);
		}
		else{
			console.log(inputLetter + " is NOT in this word");
		}

		}; // end this.replace 

	this.switch = function (inputLetter){
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


			//create a new instance of letter.js
			var Letter = require("./letter");
  			var input = new Letter();

  			//re-run the .enterLetter function from the letter file after letters are shown
  			input.enterLetter();
			
		}; //end switch


}; //end show constructor

module.exports = show;