// Problem Statement 20

// Write a program that prints numbers from 1 to N 

function fizzBuzz(inputNumber){
    for(let i = 1; i <= inputNumber; i++){

        if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
            
        }
    }
}

console.log(fizzBuzz(10));



// Problem Statement 20