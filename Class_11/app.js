// Problem statement 11

// Write a function that counts and prints the number of vowels and consonants in a given string 


function calculateVowelAndConsonants(inputString) {
    inputString = inputString.toLowerCase(); 
    // inputString = inputString.replace(" ", "");
    inputString = inputString.replace(/ /g, "");
    console.log(inputString);
    const vowel = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwnyz"
    
    let vowelCount = 0
    let consonantCount = 0;
    for(let i = 0; i < inputString.length; i++) {
        if(vowel.includes(inputString[i])){
            vowelCount++;
        // }else if(consonants.includes(inputString[i])){
        }else if(/^[a-z]$/.test(inputString[i])){
            consonantCount++;
        }else{
            console.log(inputString[i], "Is neither vowel nor consonants");
            
        }
    }
    return {vowelCount, consonantCount}
}

console.log("calculateVowelAndConsonants", calculateVowelAndConsonants("Hello World"));
console.log("calculateVowelAndConsonants", calculateVowelAndConsonants("Zulfiqar Ali"));
console.log("calculateVowelAndConsonants", calculateVowelAndConsonants("Zulfiqar Ali Sartaj Balti"));
console.log("calculateVowelAndConsonants", calculateVowelAndConsonants("Zulfiqar Ali 123"));


// Problem statement 11 

