exports.Query = {
  books: (parent, args, { books }) => books,
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
