function createBook(title, author, pages){   
    let book = {
         bookTitle: title,
         bookAuthor: author,
         booPage: pages,
         printBook: function() {
             console.log('Printing...');
         }
     }
     return book;
 }
 
 const book1 = createBook('Atomic', 'James', 306);
 const book2 = createBook('Hills', 'Napolean', 405);
 
 book1.color = 'white';
 
 console.log(book1);
 console.log(book2);