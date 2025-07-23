
// Problem statement -4 

// ) Write a function that tells if a given number is even or odd 

//  old function
function checkIfEvenOrOdd(a){
    const remainder = a % 2;
    if(remainder === 0){
        return "Event"
    }else{
        return "Odd";
    }
}
//  old function


// arrow function 

function checkIfEvenOrOdd2(a) {
    return a % 2 === 0 ? "Even" : "Odd";
}
// arrow function 

console.log(checkIfEvenOrOdd(1));
console.log(checkIfEvenOrOdd(0));
console.log(checkIfEvenOrOdd(135));
console.log(checkIfEvenOrOdd(-2));
console.log(checkIfEvenOrOdd(14));

// arrow function 
console.log("Arrow Function", checkIfEvenOrOdd2(14));




// ) Write a function that tells if a given number is even or odd 


// problem statement -5

// ) Write a function that finds and prints the smallest number among three given numbers 

// old way 
function smallestOfThree(a, b, c){
    if(a < b && a < c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else if(c < a && c < b){
        return c;
    }
}
// old way 

// new and easy way 
function smallestOfThree2(a, b, c){
    let smallestNumber = a;
    if(b < smallestNumber){
        smallestNumber = b;
    }else if(c < smallestNumber){
        smallestNumber = c;
    }
    return smallestNumber;
}
// new and easy way 

// one more way apply my idea 

var arr1 = [1, 6, 9, 4, 7];
arr1.sort();
console.log(arr1);

// one more way apply my idea 

console.log("SmallestOfThree:", smallestOfThree(3, 6, 8));
console.log("SmallestOfThree:", smallestOfThree(-3, 6, 8));
console.log("SmallestOfThree:", smallestOfThree(-3, 6, -8));
console.log("SmallestOfThree:", smallestOfThree(2, 2, 2));

// New way 
console.log("SmallestOfThree2:", smallestOfThree2(9, 3, 8));


// problem statement -5



