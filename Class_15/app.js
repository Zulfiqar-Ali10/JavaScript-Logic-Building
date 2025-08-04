// Problem statement 15

function isPrime(inputNumber){
    let result = true;
    for(let i = 2; i < inputNumber; i++){
    console.log(inputNumber, "%", i, inputNumber % i);
    if(inputNumber % i === 0) {
        result = false;
        break;
    }
    }
}

console.log(isPrime(5));
console.log(isPrime(4));

// Problem statement 15