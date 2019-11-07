const csv = require('csvtojson')
const path = require("path");
let filePath = path.join(__dirname, "../../csv-generated/test.csv");

async function readCSV() {
    try {
        const arrayDataCSV = await csv({
            noheader: false,
            headers: ['idCompany', 'name', 'description', 'price']
        }).fromFile(filePath);
        console.log("Passed readCsv");
        return arrayDataCSV;
    } catch (error) {
        console.log(error)
        return []
    }

}

module.exports = readCSV;



