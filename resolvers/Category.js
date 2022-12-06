const { categories } = require("../database/categories");

exports.Category = {
  books: ({ id }, args, { books }) => {
    return books.filter((book) => book.categoryId === id);
  },
};
