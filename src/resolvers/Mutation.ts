export const Mutation = {
  addBook: (parent, { input }, { db }) => {
    const { id, title, author, categoryId, isRead } = input;
    const newBook = {
      id,
      title,
      author,
      categoryId,
      isRead,
    };

    db.books.push(newBook);

    return newBook;
  },

  deleteBook: (parent, { id }, { db }) => {
    db.books = db.books.filter((book) => book.id !== id);
    return true;
  },

  updateBook: (parent, { id, input }, { db }) => {
    const index = db.books.findIndex((book) => book.id === id);
    const updateData = (db.books[index] = {
      ...db.books[index],
      ...input,
    });
    return updateData;
  },
};
