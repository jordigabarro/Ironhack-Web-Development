const user = { name: 'Nick', id: 7 };
const book1 = { title: 'The Catcher in the Rye', author: 'J.D Salinger', isbn: '0316769487', category: 'Classic Literature' };
const book2 = { title: 'To Kill a Mockingibrd', author: 'Harper Lee', isbn: '0446310786', category: 'Classic Literature' };

user.books = [book1, book2];

console.log(Object.keys(user));
console.log(Object.values(user));

const library = [];

library.push(user);
console.log(library);

const book3 = { title: 'Harry Potter', author: 'J.k.', isbn: '9587412658', category: 'Magician' };
library[0].books.push(book3);

console.log(library);
console.log(Object.values(user));

const user2 = { name: 'Lara', id: 3 };
user2.books = [book1, book3];

const user3 = { name: 'Jrdin', id: 10 };
user3.books = [book2];

library.push(user2, user3);
console.log(library);

function iterationLibrary(miArray) {
   let i = 0;
   if (miArray.length === 0) {
      return null;
   }

   miArray.forEach(element => {
      console.log(element.name)
      while (i < element.books.length) {
         console.log(`- ${element.books[i].title}`);
         i++;
      }
      i = 0;
   });
   return;

}
console.log(iterationLibrary(library));