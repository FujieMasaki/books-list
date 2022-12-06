const { books } = require("../database/books");

exports.Book = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((category) => category === category);
  },
};
