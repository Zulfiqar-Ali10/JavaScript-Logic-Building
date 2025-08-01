// Problem statement 14

// Write a function that calculate and prints the sample interest on a loan amount;

function calculateSimpleInterest(principalAmount, interestYearly, durationInYears){
    let multiplicationResult = principalAmount * interestYearly * durationInYears;
    let simpleInterest = multiplicationResult / 100;
    simpleInterest = simpleInterest.toFixed(2);
    // console.log(principalAmount, interestYearly, durationInYears);
    return simpleInterest;
}

console.log(calculateSimpleInterest(1000, 5, 1));
console.log(calculateSimpleInterest(2000, 10, 5));



// Problem statement 14