const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { args } = require("commander");

const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Book } = require("./resolvers/Book");

const { books } = require("./database/books");
const { categories } = require("./database/categories");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Book,
    Category,
  },
  context: {
    books,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log("🚀  Server ready at " + url);
});
