//an array of Wolfpack basketball players
// var wordArray = ["Markell Johnson", "Torin Dorn", "Al Freeman", "Braxton Beverly", "Omer Yurtseven"];
//an array where we keep each letter of the player's name

function input(){

	
	var inquirer = require("inquirer");
	var isLetter = require('is-letter');

	inquirer.prompt([
    	// Here we create a basic text prompt.
    	{
      		type: "list",
      		message: "Are you ready to play Hangman?",
      		choices: ["Yes", "No"],
      		name: "start"
    	}
    
  	]).then(function(user) {
  		
  		if(user.start === "Yes"){
  			console.log("Guess this NCSU Wolfpack basketball player");
  			var Letter = require("./letter");

  			var displayLetter = new Letter();

  			displayLetter.check();
  		} //end if
  		else{
  			console.log("You aint ready");
  		}

    	
    	
      	
      	
      	
      	
  	}); // end .then

}  //end input()

input();

 
