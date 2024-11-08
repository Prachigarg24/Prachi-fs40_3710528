// books.js


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

const library = [
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)
];

module.exports = library;


// app.js


const library = require('./books');

const summaries = library.map(book => book.getSummary());

summaries.forEach(summary => console.log(summary));