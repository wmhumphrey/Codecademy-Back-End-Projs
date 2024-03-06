let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);

}

const compareGuesses = (human, computer, target) => {
    let compDif = Math.abs(computer - target);
    let humanDif = Math.abs(human - target);

    if(humanDif <= compDif){
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if(winner === 'human'){
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
