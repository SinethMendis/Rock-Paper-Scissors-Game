function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "SCISSOR"];
    return weapons[Math.floor(Math.random() * weapons.length)];

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === "PAPER") { return `You Lose! , Paper beats Rock`; }

    else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") { return `You Win! , Rock beats Scissor`; }


    else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") { return `You Lose! , Scissor beats Paper`; }


    else if (playerSelection === "PAPER" && computerSelection === "ROCK") { return `You Win! , Paper beats Rock`; }


    else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") { return `You Win! , Scissor beats Paper`; }


    else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") { return `You Lose! , Rock beats Scissor`; }


    else if (playerSelection === computerSelection) { return `Draw , NO WINNER!`; }

    return `Invalid Selection`;
}


let playerWinCounts = 0;
let computerWinCounts = 0;

function game() {


    let playerSelection = prompt("Enter your weapon", "Rock , Paper or Scissor ?");
    const computerSelection = getComputerChoice();

    const result = (playRound(playerSelection, computerSelection));

    {
        if (result === `You Lose! , Paper beats Rock` || result === `You Lose! , Scissor beats Paper` || result === `You Lose! , Rock beats Scissor`) {
            computerWinCounts++;
        }
        else if (result === `You Win! , Rock beats Scissor` || result === `You Win! , Paper beats Rock` || result === `You Win! , Scissor beats Paper`) {
            playerWinCounts++;
        }
        else if( result === `Draw , NO WINNER!` || result ===`Invalid Selection`) {
            computerWinCounts = computerWinCounts;
            playerWinCounts = playerWinCounts;
        }
    }

    return `${result}       ComputerWins = ${computerWinCounts}  /  PlayerWins = ${playerWinCounts}`;


}

function functionRepeater(func, n) {
    for (i = 1; i <= n; i++) {
        console.log(func());
    }
}


function lastResult() {

    functionRepeater(game, 5)

    if (playerWinCounts > computerWinCounts) {
        return `YOU WON THE GAME , LET'S PLAY AGAIN !`;
    } else if (playerWinCounts < computerWinCounts) {
        return `YOU LOST THE GAME , BETTER LUCK NEXT TIME`;
    } else if (playerWinCounts = computerWinCounts) {
        return `DRAW !`;
    } else {
        return `RELOAD AND TRY AGAIN`
    }



}

console.log(lastResult());


// console.log() is required to show something in the console.










































