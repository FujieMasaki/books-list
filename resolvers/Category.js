const { categories } = require("../database/categories");

exports.Category = {
  books: ({ id }, args, { db }) => {
    return books.filter((book) => book.categoryId === id);
  },
};
