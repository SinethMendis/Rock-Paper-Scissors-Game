// const rockbtn = document.querySelector(".rockbtn");
// const paperbtn = document.querySelector(".paperbtn");
// const scissorbtn = document.querySelector(".scissorbtn");
// const result = document.querySelector(".result");

// rockbtn.addEventListener("click", () => { (playRound("ROCK", getComputerChoice())) });
// paperbtn.addEventListener("click", () => { (playRound("PAPER", getComputerChoice())) });
// scissorbtn.addEventListener("click", () => { playRound("SCISSOR", getComputerChoice()) });


// rockbtn.addEventListener("click", playRound("ROCK", getComputerChoice()));
// paperbtn.addEventListener("click", playRound("PAPER", getComputerChoice()));
// scissorbtn.addEventListener("click", playRound("SCISSOR", getComputerChoice()));






// function getComputerChoice() {
//     const weapons = ["ROCK", "PAPER", "SCISSOR"];
//     return weapons[Math.floor(Math.random() * weapons.length)];

// }

// function playRound(playerSelection, computerSelection) {

//     playerSelection = playerSelection.toUpperCase();

//     if (playerSelection === "ROCK" && computerSelection === "PAPER") { result.textContent = `You Lose! , Paper beats Rock`; }

//     else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") { result.textContent = `You Win! , Rock beats Scissor)`; }


//     else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") { result.textContent = `You Lose! , Scissor beats Paper`; }


//     else if (playerSelection === "PAPER" && computerSelection === "ROCK") { result.textContent = `You Win! , Paper beats Rock`; }


//     else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") { result.textContent = `You Win! , Scissor beats Paper`; }


//     else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") { result.textContent = `You Lose! , Rock beats Scissor`; }


//     else if (playerSelection === computerSelection) { result.textContent = `Draw , NO WINNER!`; }

//     else return result.textContent = `Invalid Selection`;
// }


// let playerWinCounts = 0;
// let computerWinCounts = 0;

// function game() {


//     // let playerSelection = prompt("Enter your weapon", "Rock , Paper or Scissor ?");
//     const computerSelection = getComputerChoice();

//     const result = (playRound(playerSelection, computerSelection));

//     {
//         if (result.textContent === `You Lose! , Paper beats Rock` || result.textContent === `You Lose! , Scissor beats Paper` || result.textContent === `You Lose! , Rock beats Scissor`) {
//             computerWinCounts++;
//         }
//         else if (result.textContent === `You Win! , Rock beats Scissor` || result.textContent === `You Win! , Paper beats Rock` || result.textContent === `You Win! , Scissor beats Paper`) {
//             playerWinCounts++;
//         }
//         else if (result.textContent === `Draw , NO WINNER!` || result.textContent === `Invalid Selection`) {
//             computerWinCounts = computerWinCounts;
//             playerWinCounts = playerWinCounts;
//         }
//     }

//     return `${result}       ComputerWins = ${computerWinCounts}  /  PlayerWins = ${playerWinCounts}`;


// }

// function functionRepeater(func, n) {
//     for (i = 1; i <= n; i++) {
//         result.textContent = (func());
//     }
// }


// function lastResult() {

//     // functionRepeater(game, 5)

//     if (playerWinCounts > computerWinCounts) {
//         return `YOU WON THE GAME , LET'S PLAY AGAIN !`;
//     } else if (playerWinCounts < computerWinCounts) {
//         return `YOU LOST THE GAME , BETTER LUCK NEXT TIME`;
//     } else if (playerWinCounts = computerWinCounts) {
//         return `DRAW !`;
//     } else {
//         return `RELOAD AND TRY AGAIN`
//     }



// }

// result.textContent = (lastResult());


// result.textContent = () is required to show something in the console.




// const rockbtn = document.querySelector(".rockbtn");
// const paperbtn = document.querySelector(".paperbtn");
// const scissorbtn = document.querySelector(".scissorbtn");
// const resetbtn = document.querySelector(".reset");
// const result = document.querySelector(".result");
// const scorecounter1 = document.querySelector(".scorecounter1");
// const scorecounter2 = document.querySelector(".scorecounter2");
// const winner = document.querySelector(".winner");

// let playerWinCounts = 0;
// let computerWinCounts = 0;

// rockbtn.addEventListener("click", () => { game(playRound("ROCK", getComputerChoice())) });
// paperbtn.addEventListener("click", () => { game(playRound("PAPER", getComputerChoice())) });
// scissorbtn.addEventListener("click", () => { game(playRound("SCISSOR", getComputerChoice())) });

// function getComputerChoice() {
//     const weapons = ["ROCK", "PAPER", "SCISSOR"];
//     return weapons[Math.floor(Math.random() * weapons.length)];
// }
// function playRound(playerSelection, computerSelection) {

//     playerSelection = playerSelection.toUpperCase();

//     if (playerSelection === "ROCK" && computerSelection === "PAPER") {
//         result.textContent = `You Lose! , Paper beats Rock`;
//         return `You Lose! , Paper beats Rock`
//     }

//     else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
//         result.textContent = `You Win! , Rock beats Scissor`;
//         return `You Win! , Rock beats Scissor`
//     }


//     else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
//         result.textContent = `You Lose! , Scissor beats Paper`;
//         return `You Lose! , Scissor beats Paper`
//     }


//     else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
//         result.textContent = `You Win! , Paper beats Rock`;
//         return `You Win! , Paper beats Rock`
//     }


//     else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
//         result.textContent = `You Win! , Scissor beats Paper`;
//         return `You Win! , Scissor beats Paper`
//     }


//     else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
//         result.textContent = `You Lose! , Rock beats Scissor`;
//         return `You Lose! , Rock beats Scissor`
//     }


//     else if (playerSelection === computerSelection) {
//         result.textContent = `Draw , NO WINNER!`;
//         return `Draw , NO WINNER!`
//     }

//     else {
//         result.textContent = `Invalid Selection`
//         return `Invalid Selection`
//     };
// }
// function winnerDecider(playerWinCounts, computerWinCounts) {
//     if (playerWinCounts > computerWinCounts) {
//         winner.textContent = `YOU WON THE GAME , LET'S PLAY AGAIN !`;
//     } else if (playerWinCounts < computerWinCounts) {
//         winner.textContent = `YOU LOST THE GAME , BETTER LUCK NEXT TIME`;
//     } else if (playerWinCounts = computerWinCounts) {
//         winner.textContent = `DRAW !`;
//     } else {
//         winner.textContent = `RELOAD AND TRY AGAIN`
//     }
// };



// function game(playRound) {

//     const result = playRound
//     for (let i = 0; i <= 4; i++) {
//         if (result === `You Lose! , Paper beats Rock` || result === `You Lose! , Scissor beats Paper` || result === `You Lose! , Rock beats Scissor`) {
//             computerWinCounts++;
//         }
//         else if (result === `You Win! , Rock beats Scissor` || result === `You Win! , Paper beats Rock` || result === `You Win! , Scissor beats Paper`) {
//             playerWinCounts++;
//         }
//         else if (result === `Draw , NO WINNER!` || result === `Invalid Selection`) {
//             computerWinCounts = computerWinCounts;
//             playerWinCounts = playerWinCounts;
//         }
//     }

//     scorecounter1.textContent = `ComputerWins = ${computerWinCounts}`;
//     scorecounter2.textContent = `PlayerWins = ${playerWinCounts}`;




// };




const rockbtn = document.querySelector(".rockbtn");
const paperbtn = document.querySelector(".paperbtn");
const scissorbtn = document.querySelector(".scissorbtn");
const resetbtn = document.querySelector(".resetbtn");
const result = document.querySelector(".result");
const scorecounter1 = document.querySelector(".scorecounter1");
const scorecounter2 = document.querySelector(".scorecounter2");
const winner = document.querySelector(".winner");

let playerWinCounts = 0;
let computerWinCounts = 0;
let roundsPlayed = 0;

rockbtn.addEventListener("click", () => { playRound("ROCK", getComputerChoice()); });
paperbtn.addEventListener("click", () => { playRound("PAPER", getComputerChoice()); });
scissorbtn.addEventListener("click", () => { playRound("SCISSOR", getComputerChoice()); });
resetbtn.addEventListener("click", () => { resetFunction(); });





function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "SCISSOR"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (roundsPlayed < 5) {
        roundsPlayed++;

        if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            computerWinCounts++;
            result.textContent = `You Lose! , Paper beats Rock`;
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
            playerWinCounts++;
            result.textContent = `You Win! , Rock beats Scissor`;
        } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
            computerWinCounts++;
            result.textContent = `You Lose! , Scissor beats Paper`;
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            playerWinCounts++;
            result.textContent = `You Win! , Paper beats Rock`;
        } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
            playerWinCounts++;
            result.textContent = `You Win! , Scissor beats Paper`;
        } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
            computerWinCounts++;
            result.textContent = `You Lose! , Rock beats Scissor`;
        } else if (playerSelection === computerSelection) {
            result.textContent = `Draw , NO WINNER!`;
        } else {
            result.textContent = `Invalid Selection`;
        }

        scorecounter1.textContent = `ComputerWins = ${computerWinCounts}`;
        scorecounter2.textContent = `PlayerWins = ${playerWinCounts}`;

        if (roundsPlayed === 5) {
            winnerDecider(playerWinCounts, computerWinCounts);
            rockbtn.disabled = true;
            paperbtn.disabled = true;
            scissorbtn.disabled = true;

        };
    };
};

function winnerDecider(playerWinCounts, computerWinCounts) {
    if (playerWinCounts > computerWinCounts) {
        winner.textContent = `YOU WON THE GAME , LET'S PLAY AGAIN !`;
    } else if (playerWinCounts < computerWinCounts) {
        winner.textContent = `YOU LOST THE GAME , BETTER LUCK NEXT TIME`;
    } else {
        winner.textContent = `DRAW !`;
    }
};


function resetFunction() {
    roundsPlayed = 0;
    playerWinCounts = 0;
    computerWinCounts = 0;
    result.textContent = "";
    scorecounter1.textContent = "ComputerWins = 0 ";
    scorecounter2.textContent = "PlayerWins = 0 ";
    winner.textContent = "";
    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissorbtn.disabled = false;
}









