//an array of Wolfpack basketball players
// var wordArray = ["Markell Johnson", "Torin Dorn", "Al Freeman", "Braxton Beverly", "Omer Yurtseven"];
//an array where we keep each letter of the player's name

function input(){

	var Letter = require("./letter");
	var inquirer = require("inquirer");
	var isLetter = require('is-letter');

	inquirer.prompt([
    	// Here we create a basic text prompt.
    	{
      	type: "input",
      	name: "letter",
      	message: "Guess a letter"
      
    	}
    
  	]).then(function(user) {
  		var inputLetter = user.letter;
  		inputLetter = inputLetter.toUpperCase();
  		var test = isLetter(inputLetter); // test will either be TRUE or FALSE
  		
    
    	if (test == true) {
      	console.log("Thank you for choosing a letter");
      	
      	
      	
      	// create an instance of the Letter.  
      	var CheckLetter = new Letter();
      	//grabs the .check() function from letter.js and runs it
      	CheckLetter.check(inputLetter, playerArray);


    	}
    	else {
      	console.log("That was not a letter");
      	input();  //recursive function to prompt this same function
    	}
  	});

}  //end input()

input();

 
