const fs = require("fs");

const data = JSON.parse(fs.readFileSync("tests/data.json"));
const dataFiltered = data.filter( data => "2" !== data.id);


console.log(dataFiltered);