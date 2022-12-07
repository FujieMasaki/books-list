export const Book = {
  category: ({ categoryId }, args, { db }) => {
    return db.categories.find((category) => category === category);
  },
};
