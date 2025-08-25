/// Problem Statement 33

// Write a program that simulated rolling a dice.

const prompt = require('prompt-sync')();

function rollADice(sidesInADice) {
    return Math.floor(Math.random() * sidesInADice) + 1;
}

function rollMultipleDices(numberOfDice, sidesInADice) {
    const result = [];
    let counter = 0;
    while(counter < numberOfDice) {
        const rollADiceResult = rollADice(sidesInADice);
        result.push(rollADiceResult)
        counter++;
    }

    return result;
}

const numberOfDices = prompt("Please tell number of dices: ");
const numberOfSides = prompt("Please tell number of sides in a dice: ");

console.log(rollMultipleDices(numberOfDices, numberOfSides));


/// Problem Statement 33