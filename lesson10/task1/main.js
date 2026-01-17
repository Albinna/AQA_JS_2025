
import { Book } from "./book.js";
import { Ebook } from "./ebook.js";


const ebook1 = new Ebook("1234", 'Aldous Huxley', 1932, 'PDF');
const ebook2 = new Ebook('The Kaidash Family', 'Ivan Nechuy-Levytsky', 1878, 'PDF');
const ebook3 = new Ebook('Sweet Darusia', 'Maria Matios', 2003, 'EPUB');

const allBooks = [ebook1, ebook2, ebook3];

const oldestBook = Book.getOldestBook(allBooks);

const myBook = new Book('The Kaidash Family', 'Ivan Nechuy-Levytsky', 1878, 5);
const myEbook = Ebook.fromBook(myBook, 'PDF');


console.log(ebook1.printInfo()); 
console.log(ebook2.printInfo()); 
console.log(ebook3.printInfo()); 


ebook1.title = 'Brave New World';    
ebook1.author = '';                 
ebook1.year = 'text';                  
ebook1.format = 'MOBI';              

console.log(ebook1.printInfo());

ebook1._quantity = 5;

console.log(`The oldest book is: ${oldestBook.printInfo()}`);

console.log(myEbook.printInfo());
console.log(ebook2.printInfo()); 
// console.log(ebook1.title);
// console.log(ebook1.author);

// ebook.printInfo();
// ebook.quantity = 0;
// ebook.quantity = 15;
// console.log(ebook.quantity);


// const allBooks = [ebook1, ebook2, ebook3];
// const oldest = Book.getOldestBook(allBooks);

// console.log(`The oldest book is: ${oldest.printInfo()}`);