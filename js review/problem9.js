/*
Create a function called toggleBookStatus that takes a book object as a parameter. The function should:

If the book has a property isRead that is true, change it to false
If the book has a property isRead that is false, change it to true
If the book doesn't have an isRead property, add it and set it to true
Return the modified book object
*/

// SAMPLE INPUT: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isRead: true, pages: 180, genre: "Classic" }
// SAMPLE OUTPUT:
/*
{
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isRead: false,
  pages: 180,
  genre: "Classic"
}
*/

function toggleBookStatus(book) {
  if (book.isRead === true) book.isRead = false;
  else if (book.isRead === false) book.isRead = true;
  else book.isRead = true;

  return book;
}

console.log(
  toggleBookStatus({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isRead: true,
    pages: 180,
    genre: 'Classic',
  }),
);
