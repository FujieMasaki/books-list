exports.Query = {
  books: (parent, { filter }, { books }) => {
    let filteredBooks = books;
    if (filter.isRead === true) {
      filteredBooks = filteredBooks.filter((book) => {
        return book.isRead;
      });
    }
    return filteredBooks;
  },
  book: (parent, { id }, { books }) => {
    const book = books.find((book) => book.id === bookId);
    if (!book) return null;
    return book;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    const category = categories.find((category) => category.id === categoryId);
    if (!category) return null;
    return category;
  },
};
