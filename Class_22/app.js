// Problem Statement 22

// Write a problem that counts the ossurrences of each character in a string!



// function countCharacters(inputString){
//     const result = {};
//     inputString = inputString.toLowerCase();
//      console.log("Result Before", result);
//     for(let i = 0; i < inputString.length; i++){
//          if(!result[inputString[i]]) {
//             result[inputString[i]] = 0;
//          }
//          result[inputString[i]] = result[inputString[i]] + 1;
//     }
//     console.log("Result After", result);
//     return result;

// };


// console.log("Name", countCharacters("Zulfiqar Ali"));



// Method 2 


function countCharacters2(inputString) {
    inputString = inputString.toLowerCase();
    const splittedString2 = inputString.split("");
  const result2 =   splittedString2.reduce((acc, char) => {
        console.log(char);
        if (!acc[char]) {
            acc[char] = 0;
        }
        acc[char] += 1;
        return acc;
    }, {});

    console.log("Result After", result2);
    return result2;
    
    // console.log(splittedString);
}
console.log("countCharacters2");
console.log("Name", countCharacters2("Zulfiqar Ali"));


// Problem Statement 22