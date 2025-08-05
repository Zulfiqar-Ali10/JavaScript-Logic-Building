// Problem Statement 17

function convertToFahrenhit(temperatureInCelsius) {
    if (typeof temperatureInCelsius !== 'number') {
        throw new Error("Input must be a number");
    }
    let result = (temperatureInCelsius * 9/5) + 32;
    result = Math.round(result)
    return result;
};

console.log("27 is", convertToFahrenhit(27), "in Fahrenhit");
console.log("37 is", convertToFahrenhit(37), "in Fahrenhit");
console.log("97 is", convertToFahrenhit(97), "in Fahrenhit");



// Problem Statement 17