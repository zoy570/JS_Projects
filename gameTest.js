const choices = ["rock", "paper", "scissors"]
const winnerCount = [];

function game(){ // play game (5 rounds) - console based
    for (let i = 1; i <= 5; i++){
        playRound(i);
    }

    displayWins();

}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winnerCount.push(winnerCount);

    console.log(winner);
    logRound(playerSelection, computerSelection, winner, round);

}

function playerChoice(){
//get input from player
    let input = prompt ("Type rock, paper or scissors");

    while(input == null){
        input = prompt ("Type rock, paper or scissors")
    }

    input = input.toLowerCase();

    let check = validateInput(input)

    while (check == false){
        input = prompt ("Type rock, paper or scissors with correct spelling");
        while(input == null){
            input = prompt ("Type rock, paper or scissors")
        }

        input = input.toLowerCase();
        check = validateInput(input);
    }
return input;

}

function computerChoice(){
    //random computer input
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    if(choices.includes(choice)){
        return true
    }

    return false
    
}

function checkWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "Tie Game!";
    } else if ((playerChoice === "rock" && computerChoice == "scissors") || 
               (playerChoice === "scissors" && computerChoice == "paper") || 
               (playerChoice === "paper" && computerChoice == "rock")){
        return "Player wins this round!";
    } else {
        return "Computer wins this round!";
    }

}

function displayWins(){
    let playerWins = winnerCount.filter((winner) => winner == "Player wins this round!");
    let computerWins = winnerCount.filter((winner) => winner == "Computer wins this round!");
    let ties = winnerCount.filter((winner) => winner == "Tie Game!");

    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round:', round);
    console.log('Player Choice:', playerChoice);
    console.log("Computer Choice:", computerChoice);
    console.log(winner, 'Next Round!');
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

