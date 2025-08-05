// Problem Statement 18

// Write a program that swap two numbers 


let a = 5;
let b = 6;


c = b;
b = a;
a = c;

console.log(`Value After Swapping: a = ${a}, b = ${b}`);


// Solve WithOut Using Third Variable

a = a + b;
b = a - b;
a = a - b;


// Problem Statement 18