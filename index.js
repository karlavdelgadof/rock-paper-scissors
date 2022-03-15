//console.log(computerSelection)
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
};
let playerSelection;
function askUser() {
    playerSelection = prompt('Rock, paper or scissors?', '').toLowerCase();
    return playerSelection;
};
//const playerSelection = prompt('Rock, paper or scissors?', '').toLowerCase();
//console.log(playerSelection)

let playerScore = 0;
let computerScore = 0;

function playRound(round) {
    const computerSelection = computerPlay();
    askUser();
    switch (true) {
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            console.log( `You've won this round! ${playerSelection} beats ${computerSelection}.\nComputer: ${computerScore}\nYou: ${++playerScore}`);
        break;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
            console.log(`You've lost this round. ${computerSelection} beats ${playerSelection}.\nComputer: ${++computerScore}\nYou: ${playerScore}`);
        break;
        case (playerSelection === computerSelection):
            console.log(`It's a draw!`);
        break;
        default:
            console.log( `Please play either rock, paper or scissors.`);
    };
};

//console.log(playRound())


function game() {
    for (let round = 0; round < 5; round++) {
        playRound(round);

        if (playerScore >= 3 || computerScore >= 3) {
            break;
        };        
    };
    if (playerScore > computerScore) {
        return `You've won the game!`;
    } else {
        return `You've lost. Computer won this time.`;
    };
};

console.log(game())

