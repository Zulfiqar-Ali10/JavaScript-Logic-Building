/// Problem Statement 28

// write a program that calculates the tip amounts based on the bill total and percentage entered by the user.

// Problem Statement 28
// Write a program that calculates the tip amounts 
// based on the bill total and percentage entered by the user.

function calculateTip(baseAmount, tipPercentage) {
    console.log(baseAmount, tipPercentage);
    let result = [];

    for (let i = 0; i < tipPercentage.length; i++) {
        console.log(tipPercentage[i]);
        let tipAmount = baseAmount * (tipPercentage[i] / 100);
        // tipAmount = Number(tipAmount.toFixed(2)); 

        const formatter = new Intl.NumberFormat("en-PK", {
            style: "currency",
            currency: "PKR"
        });

        result.push(formatter.format(tipAmount));
    }

    return result;
}

console.log(calculateTip(977, [5, 10, 15]));




/// Problem Statement 28