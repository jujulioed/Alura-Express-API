const fs = require("fs");

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"));
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));

    const bookFiltered = books.filter( book => book.id === id )[0]
    return bookFiltered;
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"));

    const newBooksList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBooksList));
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook
}