import {isUndefined} from "util";
interface IBook {
    readonly title : string,
    author: string,
    published?: Date,
    pages?: number
}

class Book implements IBook{
    constructor(public title: string,
                public author: string,
                public published?: Date,
                public pages?: number){
        if(this.published == undefined){console.log("hej")}
        if(this.pages == undefined){this.pages = 0}
    }
    toString(): string{return `${this.title} - written by ${this.author} - was published ${this.published} and consists of ${this.pages} pages`}

}

let book = new Book("'I'm gay'", "Magnoob Larsen", new Date(), 320);
let book2 = new Book("I'm gay again", "Magnoob Laren");
let book3: IBook = {title: "hej med dig", author: "Magnoob Larsen"}
//book3.title = "hej" // simply not possible because of 'readonly' property

function test(book : IBook){
    console.log(book.toString())
}

test(book)
test(book2)
console.log(book3)