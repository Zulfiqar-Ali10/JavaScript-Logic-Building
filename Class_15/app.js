// Problem statement 15

function isPrime(inputNumber) {
    let result = true;
    for (let i = 2; i < inputNumber; i++) {
        console.log(inputNumber, "%", i, inputNumber % i);
        if (inputNumber % i === 0) {
            result = false;
            break;
        }
    }
    return result;
}


console.log(isPrime(5));
console.log(isPrime(4));


function isPrime2(inputNumber) {
    let result = true;

    if(inputNumber === 2){
        result = true;
    }

    if (inputNumber % 2 === 0) {
        result = false;
    }

    if (result === true) {
        for (let i = 3; i < inputNumber; i = i + 2) {
            if (inputNumber % i === 0) {
                result = false;
                break;
            }
        }
    }
    return result;

}

console.log("isPrime2");
console.log(isPrime2(5));
console.log(isPrime2(4));
console.log(isPrime2(97));

// Problem statement 15