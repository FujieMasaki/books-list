const { ApolloServer } = require("apollo-server");

import { typeDefs } from "./schema";
import { Query } from "./resolvers/Query";
import { Category } from "./resolvers/Category";
import { Book } from "./resolvers/Book";
import { Mutation } from "./resolvers/Mutation";
import { books } from "./database/books";
import { categories } from "./database/categories";

const db = { books, categories };

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Book,
  },
  context: {
    db,
  },
});

server.listen().then(({ url }: any) => {
  console.log("🚀  Server ready at " + url);
});
