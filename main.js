//the variables for player, computer and options
let playerOption;
let computerOption;
let options = ['rock', 'paper', 'scissors']

//variables for score 
let playerScore = 0;
let computerScore = 0;

//this function chooses a random number between 0 - 2 and assigns that number to the array which
//then is assigned to the computerOption variable

function getComputerChoice(){
    let randomComputerOption = Math.floor(Math.random() * 3)

    computerOption = options[randomComputerOption]
};

//this function cycles through the outcomes of the game determined by the rules of rock paper scissors
//and what the user and computer chose. Also increments score based on who wins

function playRound(playerOption, computerOption){

    if(playerOption === "rock" && computerOption === "scissors"){
        playerScore += 1
        console.log(playerScore + ":" + computerScore)
        return "You win! Rock beats Scissors"      

    } else if (playerOption === "rock" && computerOption === "paper"){
        computerScore += 1
        console.log(playerScore + ":" + computerScore)
        return "You lose! Paper beats Rock"

    } else if (playerOption === "rock" && computerOption === "rock"){
        console.log(playerScore + ":" + computerScore)
        return "Draw! Try again"
        
    } else if (playerOption === "scissors" && computerOption === "paper"){
        playerScore += 1
        console.log(playerScore + ":" + computerScore)
        return "You win! Scissors beats Paper"

    } else if(playerOption === "scissors" && computerOption === "rock"){
        computerScore += 1
        console.log(playerScore + ":" + computerScore)
        return "You lose! Rock beats Scissors"

    } else if (playerOption === "scissors" && computerOption === "scissors"){
        console.log(playerScore + ":" + computerScore)
        return "Draw! Try again"

    } else if (playerOption === "paper" && computerOption === "rock"){
        playerScore += 1
        console.log(playerScore + ":" + computerScore)
        return "You win! Paper beats Rock"

    } else if(playerOption === "paper" && computerOption === "scissors"){
        computerScore += 1
        console.log(playerScore + ":" + computerScore)
        return "You lose! Scissors beats Paper"
        
    } else if (playerOption === "paper" && computerOption === "paper"){
        console.log(playerScore + ":" + computerScore)
        return "Draw! Try again"
    }
}

//the game function loops the game 5 times

function game(){
    for(i = 0; i < 5; i++){
        playerOption = prompt("Choose between rock, paper or scissors: ").toLocaleLowerCase()
        getComputerChoice()

        console.log(playRound(playerOption, computerOption))

    }
    //tells you who won based on score
    if(playerScore > computerScore){
        console.log("Player Wins " + playerScore + " : " + computerScore)
    } else if(playerScore < computerScore){
        console.log("Computer Wins " + playerScore + " : " + computerScore)
    } else {
        console.log("draw")
    }
    
}

game()