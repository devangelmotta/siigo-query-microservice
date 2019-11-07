
const fs = require('fs');
const path = require('path');
const os = require('os');

// output file in the same folder
const filename = path.join(__dirname, '../csv-generated/test.csv');
const output = []; // holds all rows of data
var data = [];
var count = 0;

function generateCsv() {

    while (count < 1000000) {

        dataToWrite = {
            idCompany: `Id${count}`,
            name: `NameTest${count}`,
            description: `DescriptionTest${count}`,
            price: `PriceTest${count}`,
        }
        data.push(dataToWrite);
        count++;
    }
    data.forEach((d) => {
        const row = []; // a new array for each row of data
        row.push(d.idCompany);
        row.push(d.name);
        row.push(d.description);
        row.push(d.price);

        output.push(row.join()); // by default, join() uses a ','
    });

    fs.writeFileSync(filename, output.join(os.EOL));



    console.log("SCV Generated!");
}
generateCsv();
module.exports = generateCsv;