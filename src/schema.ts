const { gql } = require("apollo-server");

export const typeDefs = gql`
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

  type Mutation {
    addBook(input: addBookInput!): Book!
    deleteBook(id: Int!): Boolean!
    updateBook(id: Int!, input: UpdateBookInput!): Book!
  }

  input addBookInput {
    id: Int!
    title: String!
    author: String!
    categoryId: String!
    isRead: Boolean!
  }

  input UpdateBookInput {
    id: Int
    title: String
    author: String
    categoryId: String
    isRead: Boolean
  }
`;
