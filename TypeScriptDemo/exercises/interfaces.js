"use strict";
var Book = (function () {
    function Book(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
        if (this.published == undefined) {
            console.log("hej");
        }
        if (this.pages == undefined) {
            this.pages = 0;
        }
    }
    Book.prototype.toString = function () { return this.title + " - written by " + this.author + " - was published " + this.published + " and consists of " + this.pages + " pages"; };
    return Book;
}());
var book = new Book("'I'm gay'", "Magnoob Larsen", new Date(), 320);
var book2 = new Book("I'm gay again", "Magnoob Laren");
var book3 = { title: "hej med dig", author: "Magnoob Larsen" };
//book3.title = "hej" // simply not possible because of 'readonly' property
function test(book) {
    console.log(book.toString());
}
test(book);
test(book2);
console.log(book3);
//# sourceMappingURL=interfaces.js.map