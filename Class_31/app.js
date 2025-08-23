/// Problem Statement 31

// Write a program that finds all occurrences of a given word in a big string

const bigString = "This is a big string with the word big repeated in the big string"
const wordToFind = "big"

// console.log(bigString.indexOf("big"));


function findAllOccurences(big, word){
    const result = [];
    let index = big.indexOf(word);
    while(index !== -1){
        result.push(index);
        index = big.indexOf(word, index + 1);
    }
        console.log(result);
}

console.log(findAllOccurences(bigString, wordToFind));


/// Problem Statement 31