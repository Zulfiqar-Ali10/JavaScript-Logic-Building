/// Problem Statement 25

// Write a program that transposes a given matrix (swaps rows with columns);


function transposeMatrix(inputArray){
    console.log(inputArray);
    const numberOfRows = inputArray.length;
    const numberOfColumns = inputArray[0].length;
    const result = [];
   
    for(let i = 0; i < numberOfRows; i++){
        for(let j = 0; j < numberOfColumns; j++){
            console.log(inputArray[i][j]);
            if (!result[j]) {
                result[j] = [];
            }

            result[j][i] = inputArray[i][j];
        }
    }
      
    return result;
}

// const inputMatrix = [  [3,4,7], [5,6,8]  ]
const inputMatrix = [  [3,4,7,11], [5,6,8,12]  ]
console.log(transposeMatrix(inputMatrix));


// Problem Statement 25