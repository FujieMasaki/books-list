export const Query = {
  books: (_: any, { filter }: any, { db }) => {
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
  book: (_, { id }, { db }) => {
    const book = db.books.find((book) => book.id === id);
    if (!book) return null;
    return book;
  },
  categories: (_, args, { db }) => db.categories,
  category: (_, { id }, { db }) => {
    const category = db.categories.find((category) => category.id === id);
    if (!category) return null;
    return category;
  },
};
