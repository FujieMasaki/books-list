const { categories } = require("../database/categories");

export const Category = {
  books: ({ id }, args, { db }) => {
    return db.books.filter((book) => book.categoryId === id);
  },
};
