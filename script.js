function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "SCISSOR"];
    return weapons[Math.floor(Math.random() * weapons.length)];

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    // computerSelection = computerSelection.toUpperCase(); Ignore this line of code (ITLC)
    // console.log(computerSelection); (ITLC) 


    if (playerSelection === "ROCK" && computerSelection === "PAPER") { return `You Lose! , Paper beats Rock`; }

    else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") { return `You Win! , Rock beats Scissor`; }


    else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") { return `You Lose! , Scissor beats Paper`; }


    else if (playerSelection === "PAPER" && computerSelection === "ROCK") { return `You Win! , Paper beats Rock`; }


    else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") { return `You Win! , Scissor beats Paper`; }


    else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") { return `You Lose! , Rock beats Scissor`; }


    else if (playerSelection === computerSelection) { return `Draw , NO WINNER!`; }

    return `Invalid Selection`;
}

const playerSelection = "";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));












