//  problem statement 6 

// Write a function that return the reverse of a string 

function reverseAString(inputString) {
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        // console.log(inputString[i]);
        result = result + inputString[i];
    }
    return result;
}

console.log(reverseAString("Zulfiqar")); 
console.log(reverseAString("Zulfiqar Ecochamp backend developer")); 


//  problem statement 6 