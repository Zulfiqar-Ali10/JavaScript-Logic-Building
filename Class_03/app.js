//  problem statement 6 

// Write a function that return the reverse of a string 

function reverseAString(inputString) {

    if(typeof inputString !== "string"){
        throw new Error("Only strings are allowed");
    }
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        // console.log(inputString[i]);

        // result = result + inputString[i];
        result += inputString[i];
    }
    return result;
}

console.log(reverseAString("Zulfiqar")); 
console.log(reverseAString("Zulfiqar Ecochamp backend developer")); 

// console.log(reverseAString(1233)); 



// Second Way same work according to my idea and easy ...

function reverseAString2(inputString1){
       const splittedInput = inputString1.split("");
       const reverseArr = splittedInput.reverse();
       const joinArr = reverseArr.join("");
    //    console.log(splittedInput);
    //    console.log(reverseArr);
    //    console.log(joinArr);
    return joinArr
}

console.log("reverceAString2");
console.log(reverseAString2("Asad"));



//  problem statement 6 