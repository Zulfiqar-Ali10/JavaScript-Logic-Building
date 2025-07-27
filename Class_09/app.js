// Problem Statment 09

// Write a function that checks if a string is palindrome or not ?


function isPalindrome(inputString) {
    for(let i = 0; i <= inputString.length / 2; i++) {
        if(inputString[i] !== inputString[inputString.length - 1 - i ]) {
            return false;
        }
    }
    return true;
}

console.log("ashish", isPalindrome("ashish"));
console.log("madam", isPalindrome("madam"));
console.log("madam", isPalindrome("madassssm"));


// second way 

function isPalindrome(input) {
    let original = input.toString(); // number ko string banane ke liye
    let reversed = original.split('').reverse().join('');
    
    return original === reversed;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome(121));       // true
console.log(isPalindrome(123));       // false


// third way 




// Problem Statment 09