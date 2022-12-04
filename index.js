const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books: [String!]!
    amout: Int
  }
`;

const resolvers = {
  Query: {
    books: () => {
      return ["オズの魔法使", "風と共に去りぬ"];
    },
    amount: () => {
      return 2;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("🚀  Server ready at " + url);
});
