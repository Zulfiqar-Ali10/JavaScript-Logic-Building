/// Problem Statement 30

// Write a program  that checks if a given string of parentheses is balanced and well formed.

const parentheses = {
    '{': '}',
    '(': ')',
    '[': ']',
}


console.log(parentheses['{']);



function isBalanced( inputString ) {
       console.log( inputString );
       const parenthesesArray = [];
       for(let char of inputString){
        if(parentheses[char]){
            parenthesesArray.push(char)
        }else if(char === ')' || char === '}' || char === ']') {
            const lastOpeningParanthesis = parenthesesArray.pop();
            if(parentheses[lastOpeningParanthesis] !== char) {
                return false;
            }
        }
        
       }
       return true;
}

console.log(isBalanced('{([])}'));
console.log(isBalanced('{([]}'));


/// Problem Statement 30