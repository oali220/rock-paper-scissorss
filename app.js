


let Rock;
let Paper;
let Scissors;

function getComputerChoice() {
    const randChoice = Math.floor(Math.random() * 3) + 1;

    if(randChoice == 1) {
        return "Rock";
    }
    else if(randChoice == 2) {
        return "Paper";
    }
    else if(randChoice == 3){
        return "Scissors";
    }
}

function getPlayerChoice() {
    const input = prompt("Pick your choice (Rock, Paper, Scissors): ") 

    if(input == "Rock") {
        return "Rock";
    }
    else if(input == "Paper") {
        return "Paper";
    }
    else if(input == "Scissors"){
        return "Scissors";
    }
    else {
        return "Invalid input."
    }
}

function findWinner(playerChoice, computerChoice) {

    if (playerChoice == computerChoice)
        return "Tie!"

    else if (playerChoice == "Rock" && computerChoice == "Paper")
        return "Computer wins!"

    else if (playerChoice == "Rock" && computerChoice == "Scissors")
    return "Player wins!"

    else if (playerChoice == "Paper" && computerChoice == "Rock")
        return "Player wins!"

    else if (playerChoice == "Paper" && computerChoice == "Scissors")
        return "Computer wins!"

    else if (playerChoice == "Scissors" && computerChoice == "Rock")
        return "Computer wins!"

    else if (playerChoice == "Scissors" && computerChoice == "Paper")
        return "Player wins!"
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (var i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        if (findWinner(playerSelection, computerSelection) == "Player wins!") {
            playerScore++
        } 
        else if (findWinner(playerSelection, computerSelection) == "Computer wins!") {
            computerScore++
        }
    }

    if (playerScore > computerScore) {
        return "Player wins!"
    }
    else (computerScore > playerScore) {
        return "Computer wins!"
    }

}

console.log(game());