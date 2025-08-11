// Problem Statement 24

// Write a program that checks if two given strings are anangrams of each other


function areAnagrams(s1, s2){
    // console.log(s1, s2);

    if(s1.length !== s2.length){
        return false;
    }
    

    const charIns1 = {};
    for(let char of s1){
        if(!charIns1[char]){
            charIns1[char] = 0;
        }
        charIns1[char] = charIns1[char] + 1;;
    }

    const charIns2 = {};
    for(let char of s2){
        if(!charIns2[char]){
            charIns2[char] = 0;
        }
        charIns2[char] = charIns2[char] + 1;;
    }

    for(let key in charIns1){
        if(charIns1[key] !== charIns2[key]){
            return false
        }
    }
        
    return true;
}

console.log(areAnagrams("pools", "spool"));
console.log(areAnagrams("act", "cat"));
console.log(areAnagrams("many", "any"));





// Problem Statement 24