
// Statement no 10

// Write a function that returns the result of reising a given number to a specified power

function calculatePower(base, exponent) {
    let result = 1;
    for(let i = 1; i <= exponent; i++){
        console.log(result);
        result = result * base;
    }
    return result
}

console.log(calculatePower(2,3));


// Statement no 10