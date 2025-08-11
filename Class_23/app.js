// Problem Statement 23

// Write a program that checks if a given string is i alphabetical order.

// console.log("a" .charCodeAt(0));

function isStringInAlphabeticalOrder(inputString){
    inputString = inputString.replace(/ /g, "");
    inputString = inputString.toLowerCase();
    for(let i = 0; i < inputString.length - 1; i++){
        if(inputString[i] > inputString[i + 1]){
            return false;
        }
    }
    return true;
}

console.log(isStringInAlphabeticalOrder("abcdefg"));
console.log(isStringInAlphabeticalOrder("abcde fg"));
console.log(isStringInAlphabeticalOrder("abcdecfg"));
console.log(isStringInAlphabeticalOrder("aBcDecfg"));






// Problem Statement 23