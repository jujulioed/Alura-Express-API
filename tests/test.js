// Manipulating data from files

const fs = require("fs")

const currentData = JSON.parse(fs.readFileSync("books.json"));
const newData = { id: '3', nome: 'Livro top demais mesmo'}

fs.writeFileSync("books.json", JSON.stringify([...currentData, newData]))

console.log(JSON.parse(fs.readFileSync("books.json")))