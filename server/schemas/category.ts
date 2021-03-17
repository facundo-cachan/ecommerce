import { gql } from "apollo-server";
export default gql`
  input inputCategory {
    id: ID
    name: String
    img: String
    available: Boolean = false
  }

  type Category @unique(from: ["id"]) {
    id: ID!
    name: String!
    img: String
    available: Boolean!
    createdAt: String! @date
    updatedAt: String! @date
  }

  extend type Query {
    category(id: ID!, available: Boolean = true): Category
    categories(available: Boolean = true): [Category]
  }

  extend type Mutation {
    addCategory(info: inputCategory!): Boolean!
    updateCategory(id: ID!, info: inputCategory!): Boolean!
  }
`;
