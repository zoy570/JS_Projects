var playerSelection = prompt("Rock, Paper, or Scissors");


function computerPlay (){

    // Generates a random number 0, 1, 2 //
    
        let randomNumber = Math.floor(Math.random() * 3);
    
        if (randomNumber == 0){
            return rock;
        } else if (randomNumber == 1){
            return paper;
        } else if (randomNumber == 2) {
            return scissors;
        } else {
            return 'Incorrect';
        }
    
    }


    
var Game = function(playerSelection, computerPlay){
   var rock = "Rock";
   var paper = "Paper";
   var scissors = "Scissors";
   if(playerSelection === computerPlay){
       alert("Tie Game!");
   }else{
       if(playerSelection === rock && computerPlay === scissors || playerSelection === paper && computerPlay === rock  ||playerSelection === scissors && computerPlay === paper ){
           console.log("Player One Wins!");
       }else{
           console.log("Player Two Wins!");
       }
   }
};

Game(playerSelection,computerPlay);