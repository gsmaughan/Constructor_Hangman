// * **Letter**: Used for each letter in the current word. Each letter object should either display 
// an underlying character, or a blank placeholder (such as an underscore), depending on whether or not 
// the user has guessed the letter. This should contain letter specific logic and data.
// var Letter = require("./word.js");

//LetterConst is a CONSTRUCTOR 
var LetterConst  = function(){

	var Word = require("./word");

	//this.check is a function that 
	this.check = function(){

			var Word = require("./word");

  			var displayWord = new Word();

  			displayWord.display();
		
		

		// console.log("this.check works"); //SO FAR SO GOOD!

		this.enterLetter();
	};  // end this.check

	// var Word = require("./word");

	this.enterLetter = function(){
			var Word = require("./word");

  			var displayWord = new Word();

  			

			var inquirer = require("inquirer");
			var isLetter = require('is-letter');

			inquirer.prompt([ //closed
    		// Here we create a basic text prompt.
    		{
      			type: "input",
      			name: "letter",
      			message: "Guess a letter"
      
    		}
    
  			]).then(function(user) {  //closed
  				var inputLetter = user.letter;
  				inputLetter = inputLetter.toUpperCase();
  				var test = isLetter(inputLetter); // test will either be TRUE or FALSE

  				if (test == true) {
      				
					console.log("You chose", inputLetter);
					displayWord.replace(inputLetter);

				}//end if
				else {
      				console.log("That was not a letter");
      				this.enterLetter();  //recursive function to prompt this same function
    			}// end else
			});
		
		
    
   


    	}; //end .this.enterLetter()
    };  //end LetterConst
    


 

module.exports = LetterConst;