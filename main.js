//html elements
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

const user = document.querySelector('.user')
const computer = document.querySelector('.computer')
const score = document.querySelector('.score')
const outcome = document.querySelector('.outcome')

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

    if(computerOption === 'rock'){
        computer.innerHTML = '<img class="weapon" src="img/rock.png" alt="a rock">'
    } 
    else if(computerOption === 'paper'){
        computer.innerHTML = '<img class="weapon" src="img/sheet.png" alt="a paper">'
    } 
    else if(computerOption === 'scissors'){
        computer.innerHTML = '<img class="weapon" src="img/scissors.png" alt="a scissor">'
    }
};

//this function cycles through the outcomes of the game determined by the rules of rock paper scissors
//and what the user and computer chose. Also increments score based on who wins

function playRound(playerOption, computerOption){

    if(playerOption === "rock" && computerOption === "scissors"){
        playerScore += 1
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML= "You win! Rock beats Scissors" 
        return "You win! Rock beats Scissors"      

    } else if (playerOption === "rock" && computerOption === "paper"){
        computerScore += 1
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "You lose! Paper beats Rock" 
        return "You lose! Paper beats Rock"

    } else if (playerOption === "rock" && computerOption === "rock"){
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "Draw! Try again" 
        return "Draw! Try again"
        
    } else if (playerOption === "scissors" && computerOption === "paper"){
        playerScore += 1
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "You win! Scissors beats Paper" 
        return "You win! Scissors beats Paper"

    } else if(playerOption === "scissors" && computerOption === "rock"){
        computerScore += 1
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "You lose! Rock beats Scissors"
        return "You lose! Rock beats Scissors"

    } else if (playerOption === "scissors" && computerOption === "scissors"){
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "Draw! Try again" 
        return "Draw! Try again"

    } else if (playerOption === "paper" && computerOption === "rock"){
        playerScore += 1
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "You win! Paper beats Rock" 
        return "You win! Paper beats Rock"

    } else if(playerOption === "paper" && computerOption === "scissors"){
        computerScore += 1
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "You lose! Scissors beats Paper" 
        return "You lose! Scissors beats Paper"
        
    } else if (playerOption === "paper" && computerOption === "paper"){
        score.innerHTML = `${playerScore} : ${computerScore}`
        outcome.innerHTML = "Draw! Try again" 
        return "Draw! Try again"
    }
}

//tells you who won based on score
function finalScore(){
    if(playerScore === 5){
        rock.disabled = true
        paper.disabled = true
        scissor.disabled = true
        outcome.innerHTML = "You Win the game! Reload to start a new one!"
    } 
    else if(computerScore === 5){
        rock.disabled = true
        paper.disabled = true
        scissor.disabled = true
        outcome.innerHTML = "The Computer Win the game! Reload to start a new one!"
    }
}

//the game function plays the game and gets a winner when a player reaches 5

function game(){
    rock.addEventListener('click', (e) => {
        playerOption = 'rock'
        console.log(playerOption)
        user.innerHTML = '<img class="weapon" src="img/rock.png" alt="a rock">'
        getComputerChoice()
        console.log(playRound(playerOption, computerOption))
        finalScore()
    })

    paper.addEventListener('click', (e) => {
        user.innerHTML = ''
        playerOption = 'paper'
        console.log(playerOption)
        user.innerHTML = '<img class="weapon" src="img/sheet.png" alt="a paper">'
        getComputerChoice()
        console.log(playRound(playerOption, computerOption))
        finalScore()
    })

    scissor.addEventListener('click', (e) => {
        user.innerHTML = ''
        playerOption = 'scissors'
        console.log(playerOption)
        user.innerHTML = '<img class="weapon" src="img/scissors.png" alt="a scissor">'
        getComputerChoice()
        console.log(playRound(playerOption, computerOption))
        finalScore()
    })   
}

game()