import { Book } from "./book.js";



export class Ebook extends Book{
    constructor(title, author, year, format) {
        super(title, author, year);
        this._format = format;
 
    }

    get format() {
        return this._format;
    }


    set format(value) {
        console.log(`Current format: ${this._format}`);
        console.log(`New format: ${value}`);
        if (typeof value === 'string' && value.trim() !== '') {
            this._format = value;
        } else {
            console.log(`Invalid format: ${value}`);
            this._format = value;
        }
    }

    printInfo() {
        return(`Book ${this.title} was written by ${this.author} in ${this.year}, in ${this.format} format`);
    }

     static fromBook(bookInstance, format) {
        if (!(bookInstance instanceof Book)) {
            console.log('Error: first argument must be a Book instance');
            return null;
        }

        if (typeof format !== 'string' || format.trim() === '') {
            format = 'Unknown';
        }

        return new Ebook(
            bookInstance.title,
            bookInstance.author,
            bookInstance.year,
            format,
            bookInstance.quantity
        );
    }
}
