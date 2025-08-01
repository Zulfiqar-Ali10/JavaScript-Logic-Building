// Problem statement 13

// Write a function that calculate and returns the average of a set of numbers 

function calculateAverage(inputArray){
if (typeof inputArray !== "number") {
    console.log("Please enter only a number.");
  } else {
    console.log("Valid number:", inputArray);
  }


    console.log(inputArray);
    let sumElements = 0;
    for(let i = 0; i < inputArray.length; i++){
        // sumElements = sumElements + inputArray[i];
        sumElements += inputArray[i];
    }
    let result = sumElements / inputArray.length;    
    return result;
}

console.log(calculateAverage([1,2,4]));
console.log(calculateAverage([1,2,7,14]));


// Problem statement 13