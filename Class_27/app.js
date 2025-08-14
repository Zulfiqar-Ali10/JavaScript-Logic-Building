/// Problem Statement 27

// Write a program that checks if the provided password is strong or not;

function isStrongPassword(passwordString) {
    passwordString = passwordString.trim();
    if(passwordString.length < 8){
        return false
    }
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?";
    
    let lowerCaseCharacterExists =  false;
    let upperCaseCharacterExists = false;
    let numbersExists = false;
    let specialCharacterExists = false;
    for(let char of passwordString){
        if(lowerCaseCharacters.includes(char)) {
            lowerCaseCharacterExists = true;
        }else if(upperCaseCharacters.includes(char)){
            upperCaseCharacterExists = true;
        }else if(numbers.includes(char)){
            numbersExists = true;
        }else if(specialCharacters.includes(char)){
            specialCharacterExists = true;
        }
    }

    if(lowerCaseCharacterExists && upperCaseCharacterExists && numbersExists && specialCharacterExists){
        return true;
    }

    return false;

    // console.log(lowerCaseCharacterExists);
    // console.log(upperCaseCharacterExists);
    // console.log(numbersExists);
    // console.log(specialCharacterExists);
}

console.log(isStrongPassword("Zulfiqar Ali123$$"));


// Problem Statement 27