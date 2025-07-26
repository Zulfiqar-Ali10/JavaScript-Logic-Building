
// Problem statement 08 

// Write a function that calcualtes and prints the sum of the digits of a given number 

function calcualteSumOfDigits(inputNumber){
    if(inputNumber < 1){
        throw new Error("InputNumber must be a positive Number.")
    }

    const inputNumberAsString = inputNumber.toString()
    // console.log(inputNumberAsString);
//   console.log(typeof inputNumberAsString);
    const splittedInputString = inputNumberAsString.split("");
    // console.log(splittedInputString);
    let sumOfDigits = 0;
    splittedInputString.forEach(num => {
       sumOfDigits = sumOfDigits + parseInt(num)
    })    
    return sumOfDigits;

    
    
}
console.log(calcualteSumOfDigits(21));
console.log(calcualteSumOfDigits(23));



////////// second way /////////////

function calcualteSumOfDigits2(inputNumber){
  let number = inputNumber;
  let sumOfDigits2 = 0;
  while(number > 0){
    let lastDigits = number % 10;
    number = Math.floor(number / 10);
    sumOfDigits2 = sumOfDigits2 + lastDigits;
  } 
  return sumOfDigits2;
}
console.log("calcualteSumOfDigits2", calcualteSumOfDigits2(21));




// Problem statement 08 