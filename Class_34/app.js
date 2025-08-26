/// Problem Statement 34

// Write a program that builds a number guess game.
const prompt = require("prompt-sync")();
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let userInput = prompt("Please guess the number, its between 1 and 100:");
userInput = parseInt(userInput);

while (userInput != randomNumber) {
    if (userInput > randomNumber) {
        if (userInput - randomNumber > 5) {
            console.log("Your number is too high!");
        } else {
            console.log("Your number is high but you are close!");
        }
    } else {
        if (randomNumber - userInput > 5) {
            console.log("Your number is too high!");
        }
        else {
            console.log("Your number is low but you are close!");
        }

    }
    userInput = prompt("Please guess again: ")
}
console.log("Congratulation! you have found the correct number", randomNumber);

/// Problem Statement 34