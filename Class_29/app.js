/// Problem Statement 29


// Write a program to find and count all palindromic substrings within a given String. 


function isPalindrome(inputString) {

    for(let i = 0; i <= inputString.length / 2; i++) {
        if(inputString[i] !== inputString[inputString.length - 1 - i ]) {
            return false;
        }
    }
    return true;
}


function findPalindromes(inputString1) {
    // console.log("Slice", inputString.slice(1,5));
    const result = [];
    for(let i = 0; i < inputString1.length; i++){
        for(let j = i + 1; j <= inputString1.length; j++){
            const substr = inputString1.slice(i, j);
            if(isPalindrome(substr) && substr.length > 1) {
                   result.push(substr);
            }
        }
    }
    return result;
}

console.log(findPalindromes("abcd"));
console.log(findPalindromes("radar"));
console.log(findPalindromes("ababpalindromemadam"));



/// Problem Statement 29