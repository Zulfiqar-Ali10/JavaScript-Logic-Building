
// problem statement -1
// 1) Write a program that prints "Hello World" on the console 

console.log("Hello World");

// 1) Write a program that prints "Hello World" on the console 

// problem statement -2

// 2) Write a function that takes two numbers as input and prints their sum
// . input: Two number a & b 
// . Sum = a + b 
// . Print the sum on the console 
// . Pause the video and try it yourself 


function sum(a,b){
    const sum =  a + b;
    console.log("Sum id",  sum);
    
}
sum(5,10);
sum(123, 145);
sum(-1, 2);
sum(-1, -2);
sum(1,0);
sum(1.2, 5);
sum(1.5, 2.5);


// 2) Write a function that takes two numbers as input and prints their sum


// problem statement -3

// 3) Write a function that calculate and print the area of a rectangle give is length and width

function calculateArea(length, width){
    if(length <= 0){
        throw new Error("Length should be a postive number")
    }

    if(width <= 0){
        throw new Error("Width should be a postive number")
    }

    const area = length * width;
    console.log("Area of rectangle is", area);
}

calculateArea(2,3)
// calculateArea(-2,300)
// calculateArea(-2,-300)
// calculateArea(-2,0)
calculateArea(2,300)

// 3) Write a function that calculate and print the area of a rectangle give is length and width