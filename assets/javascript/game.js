
// letter and word choices

var letterchoice = ["abcdefghijklmnopqrstuvwxyz"].split("");
    
var wordList = ["britney", "selena", "bob dylan", "john legend", "michael jackson", "pink", "chris brown", "rihanna", "adele"];

// User starts with a score of 0.
 var score = 0;

// Assigning name to user entry and converting it to match list format
var usertext = ".guessLetter"
var userGuessLower = usertext.toLowerCase();


document.getElementById("button").addEventListener("click", function(){ document.getElementById("entry").innerHTML = "usertext"
});


    /* User enters one letter, if the letter is in the first word then the user gets a prompt that says its a match and score +10 , if not then say guess again and score -5, need to display letters that are chosen and matched or unmatched,need to tally score and need to reset all and repeat process with next word */


  