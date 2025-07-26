//// problem no -7 

// Write a function that tells if provided year is a leap year or not: 

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false
    }
}

//////////second way //////

function isLeapYear2(year){
    return year % 4 === 0
}
    
//////////second way //////

console.log(isLeapYear(2004));
console.log(isLeapYear2(2004));

//// problem no -7 