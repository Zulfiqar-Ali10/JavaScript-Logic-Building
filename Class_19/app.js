// Problem Statement 19

// Write a program that checks if a number is ArmStrong or not.

function isArmStrong(inputNumber) {
    console.log(inputNumber);

    let number = inputNumber;
    const digits = [];

    while (number > 0) {
        let lastDigit = number % 10;
        console.log("Last Digit:", lastDigit);
        number = Math.floor(number / 10);
        console.log("New number is", number);
        digits.push(lastDigit);
    }
    const length = digits.length;
    console.log("Length is", length);
    let sum = 0;
    digits.forEach(d => {
        // console.log(d, length, Math.pow(d, length));
        // sum = sum + Math.pow(d, length);
        sum += Math.pow(d, length);
    })
    console.log("Sum is", sum);

    if(sum === inputNumber){
        return true;
    }
    return false;
}

console.log("IsArmStrong(153):", isArmStrong(153));
console.log("IsArmStrong(1523):", isArmStrong(1523));
console.log("IsArmStrong(92727):", isArmStrong(92727));


// Problem Statement 19