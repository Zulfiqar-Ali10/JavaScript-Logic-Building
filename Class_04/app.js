// statement no -6

// Write a function the calculate factorial of a given number 

function calculateFactorial(inputNumber){
    if(inputNumber < 0){
        throw new Error("inputNumber should be greater than or equal to zero");
    }
   let result = 1;
    for(let i = 1; i <= inputNumber; i++){
        // result = result * i;
        result *= i;
    }
    return result;
}
console.log(calculateFactorial(4));
console.log(calculateFactorial(6));
console.log("!8", calculateFactorial(8));
console.log("!0", calculateFactorial(0));
// console.log("!-1", calculateFactorial(-1));


// new way 

function calculateFactorialUsingRecursion(inputNumber1){
    if(inputNumber1 < 0){
        throw new Error("inputNumber should be greater than or equal to zero");
    }

    if(inputNumber1 === 0 || inputNumber1 === 1) {
        return 1;
    }

    return inputNumber1 * calculateFactorialUsingRecursion(inputNumber1 - 1);
    
}
console.log("calculateFactorialUsingRecursion");

console.log(calculateFactorialUsingRecursion(4));
console.log(calculateFactorialUsingRecursion(3));
console.log("!2", calculateFactorialUsingRecursion(2));
console.log("!0", calculateFactorialUsingRecursion(0));


// statement no -6