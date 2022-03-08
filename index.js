const computerSelection = computerPlay();
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

function playRound(playerSelection, computerSelection) {
        switch (true) {
            case (playerSelection === 'rock' && computerSelection === 'scissors'):
            case (playerSelection === 'paper' && computerSelection === 'rock'):
            case (playerSelection === 'scissors' && computerSelection === 'paper'):
                return `You've won this round! ${playerSelection} beats ${computerSelection}.
                Computer: ${computerScore}
                You: ${++playerScore}`;
                break;
            case (playerSelection === 'rock' && computerSelection === 'paper'):
            case (playerSelection === 'paper' && computerSelection === 'scissors'):
            case (playerSelection === 'scissors' && computerSelection === 'rock'):
                return `You've lost this round. ${computerSelection} beats ${playerSelection}.
                Computer: ${++computerScore}
                You: ${playerScore}`;
                break;
            case (playerSelection === computerSelection):
                return `It's a draw!`;
                break;
            default:
                return `Please play either rock, paper or scissors.`;
        };
};



// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//         askUser();
//         playRound(playerSelection, computerSelection);
//         console.log(computerSelection);
//         if (playerScore >= 3 || computerScore >= 3) {
//             break;
//         } else {
//         };        
//     };
//     if (playerScore > computerScore) {
//         return `You've won the game!`;
//     } else {
//         return `You've lost. Computer won this time.`;
//     };
// };


