
export class Book {
    constructor(title, author, year, quantity = 0) {
        this.title = title;      
        this.author = author;    
        this.year = year;         
       
    }


    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._title = value;
        } else {
            console.log(`Invalid title: ${value}`);
            this._title = 'Unknown';
        }
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._author = value;
        } else {
            console.log(`Invalid author: ${value}`);
            this._author = 'Unknown';
        }
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (Number.isInteger(value) && value > 0) {
            this._year = value;
        } else {
            console.log(`Invalid year: ${value}`);
            this._year = 0;
        }
    }

	printInfo() {
        return `Book ${this.title} was written by ${this.author} in ${this.year}, quantity: ${this.quantity}`;
    }

	static getOldestBook(booksArray) {
        if (!Array.isArray(booksArray) || booksArray.length === 0) return null;

        let oldest = booksArray[0];

        for (let book of booksArray) {
            if (book.year < oldest.year) {
                oldest = book;
            }
        }

        return oldest;
	}

}   

 