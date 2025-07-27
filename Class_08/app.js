// Problem Statement 8

// Write a function that finds and prints the maximum element in an array of numbers 

function findtheBiggestnumber(arrayNumbers) {
    if(!arrayNumbers || arrayNumbers.length === 0){
        throw new Error("We need some number in the arry!")
    }
    let biggestNumber = arrayNumbers[0];
    for (let i = 1; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > biggestNumber) {
            biggestNumber = arrayNumbers[i];
        }
    }
       return biggestNumber;
}
console.log(findtheBiggestnumber([2,6,8,9,,23]));


/////////////// second way ////////////////////

function findTheBiggestNumber2(arrayNumbers1){
    const maxNumber = Math.max(2,3,5,6,7,8);
    console.log("maxNumber", maxNumber);
    
}
findTheBiggestNumber2();



function findTheBiggestNumber3(arrayNumbers2){
    const maxNumber2 = Math.max(...arrayNumbers2);
    console.log("maxNumber", maxNumber2);
    return maxNumber2
}
findTheBiggestNumber3([2,3,47,9]);
// Problem Statement 8