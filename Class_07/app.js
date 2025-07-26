
// Problem statement 08

// Write a function that generates and prints a multiplication table for a gien number up to a specified range 

function createTable(tableOf, tableTill) {

    // Validation block
    if (
        typeof tableOf !== "number" ||
        typeof tableTill !== "number" ||
        !Number.isInteger(tableOf) ||
        !Number.isInteger(tableTill) ||
        tableOf <= 0 ||
        tableTill <= 0
    ) {
        console.log(" Please enter valid **positive integers** only.");
        return;
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${tableOf} x ${i} = ${i * tableOf}`);

    }
}
createTable(2, 10);



////// second way ///////////

function createTable2(tableOf1, tableTill1) {
    for (let i = tableOf1; i <= tableOf1 * tableTill1; i = i + tableOf1) {
        console.log(i);

    }
}

createTable2(8, 20)

// Problem statement 08