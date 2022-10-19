//the variables for player, computer and options
let playerOption;
let computerOption;
let options = ['rock', 'paper', 'scissors']

//this function chooses a random number between 0 - 2 and assigns that number to the array which
//then is assigned to the computerOption variable

function getComputerChoice(){
    let randomComputerOption = Math.floor(Math.random() * 3)

    computerOption = options[randomComputerOption]
};

//this function cycles through the outcomes of the game determined by the rules of rock paper scissors
//and what the user and computer chose

function playRound(playerOption, computerOption){

    if(playerOption === "rock" && computerOption === "scissors"){
        return "You win! Rock beats Scissors"
    } else if (playerOption === "rock" && computerOption === "paper"){
        return "You lose! Paper beats Rock"
    } else if (playerOption === "rock" && computerOption === "rock"){
        return "Draw! Try again"
    } else if (playerOption === "scissors" && computerOption === "paper"){
        return "You win! Scissors beats Paper"
    } else if(playerOption === "scissors" && computerOption === "rock"){
        return "You lose! Rock beats Scissors"
    } else if (playerOption === "scissors" && computerOption === "scissors"){
        return "Draw! Try again"
    } else if (playerOption === "paper" && computerOption === "rock"){
        return "You win! Paper beats Rock"
    } else if(playerOption === "paper" && computerOption === "scissors"){
        return "You lose! Scissors beats Paper"
    } else if (playerOption === "paper" && computerOption === "paper"){
        return "Draw! Try again"
    }
}

// playerOption = prompt("Choose between rock, paper or scissors: ").toLocaleLowerCase()
// getComputerChoice()

// console.log(playRound(playerOption, computerOption))

//the game function loops the game until either the user or computer reach a score of 5