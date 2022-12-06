const { books } = require("../database/books");

exports.Book = {
  category: ({ categoryId }, args, { db }) => {
    return categories.find((category) => category === category);
  },
};
