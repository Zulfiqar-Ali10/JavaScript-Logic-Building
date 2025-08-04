// Problem statement 16

function countWords(sentence){
    console.log("Before Trim", sentence);
    sentence = sentence.trim();
    console.log("After Trim", sentence);
    const splilledSentence = sentence.split(" ");
    console.log(splilledSentence);
    const nonEmptyElement = splilledSentence.filter((element) => element != '');
    console.log("nonEmptyElement", nonEmptyElement);
    
    return nonEmptyElement.length;
}

// console.log(countWords("Hello World! This is a test sentence."));
console.log("Hello World! This is a test sentence", countWords("   This   is a sentence."));



// Problem statement 16