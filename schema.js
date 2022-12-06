const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    books(filter: BooksInput): [Book!]!
    book(id: Int!): Book
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Book {
    id: Int!
    title: String!
    author: String!
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
    books: [Book!]!
  }

  input BooksInput {
    isRead: Boolean
  }
`;
