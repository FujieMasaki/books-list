exports.Query = {
  books: (parent, { filter }, { db }) => {
    let filteredBooks = db.books;
    if (filter) {
      if (filter.isRead === true) {
        filteredBooks = filteredBooks.filter((book) => {
          return book.isRead;
        });
      }
    }
    return filteredBooks;
  },
  book: (parent, { id }, { db }) => {
    const book = books.find((book) => book.id === bookId);
    if (!book) return null;
    return book;
  },
  categories: (parent, args, { db }) => categories,
  category: (parent, { id }, { db }) => {
    const category = categories.find((category) => category.id === categoryId);
    if (!category) return null;
    return category;
  },
};
