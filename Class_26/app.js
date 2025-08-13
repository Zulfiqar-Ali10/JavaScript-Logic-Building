/// Problem Statement 26

// Write a program that checks if a given number is a perfect number.

function isPerfectNumber(inputNumber){
 
    const properDivisors = [];
    for(let i = 1; i < inputNumber; i++){
        if(inputNumber % i === 0){
            properDivisors.push(i)
            // console.log(`${i} is a proper divisor of inputNumber`);
            
        }
    }
    let sum = 0;
    properDivisors.forEach(d => {sum += d});

    if(sum === inputNumber){
        return true;
    }
    return false;

    // console.log("sum is", sum);

}
console.log(isPerfectNumber(7));


// Problem Statement 26