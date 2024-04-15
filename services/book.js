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

function modifyBook(mods, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"));
    const modifiedIndex = currentBooks.findIndex( book => book.id === id);

    const modifiedData = { ...currentBooks[modifiedIndex], ...mods};

    currentBooks[modifiedIndex] = modifiedData;

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))

}

function deleteBook(id) {
    const currentBooks = JSON.parse(fs.readFileSync("books.json"));
    const filteredBooks = currentBooks.filter(book => book.id != id);
    fs.writeFileSync("books.json", JSON.stringify(filteredBooks));
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook,
    deleteBook
}