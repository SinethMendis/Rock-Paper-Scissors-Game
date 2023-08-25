// function getComputerChoice() {
//     const weapons = [rock, paper, scissor];
//    ((Math.floor((Math.random())*weapons.length))+1) ;

//     let randomNumber ;

//     return weapons[randomNumber] ;
// }

// console.log(randomNumber) ;
// console.log((Math.floor((Math.random())*10))+1) ;

// const weapons = ["rock", "paper", "scissor"];
// ((Math.floor((Math.random())*weapons.length))+1) ;
// console.log(((Math.floor((Math.random()) * weapons.length)) + 1));


// function getComputerChoice() {

//     const weapons = ["rock", "paper", "scissor"];
//     let randomNumber = (((Math.floor((Math.random()) * weapons.length + 1))));

//     // return weapons[randomNumber] ;
//     return randomNumber;

// }

// console.log(getComputerChoice());

// function getComputerChoice() {
//     const weapons = ["rock", "paper", "scissor"];
//     let randomItem = (weapons[(Math.floor(Math.random() * weapons.length))]);
//     return randomItem;

// }
// console.log(getComputerChoice());


// function testing() {
//     const weapons = ["rock", "paper", "scissor"];

//     // return Math.floor(Math.random() * weapons.length)
//     return weapons[Math.floor((Math.random()*weapons.length))];
// }


// console.log(testing()) ;

function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "hrSCISSOR"] ;
    return weapons[Math.floor(Math.random() * weapons.length)] ;
}

console.log(getComputerChoice()) ;