import { gql } from "apollo-server";
export default gql`
  input inputUser {
    id: String
    idRol: ID
    pass: String
    available: Boolean = false
  }

  type User @unique(from: ["id"]) {
    id: ID!
    idRol: Rol!
    pass: String!
    available: Boolean!
    createdAt: String! @date
    updatedAt: String! @date
  }

  extend type Query {
    user(id: ID!, available: Boolean = true): User
    users(available: Boolean = true): [User]!
  }

  extend type Mutation {
    addUser(info: inputUser!): Boolean!
    updateUser(id: ID!, info: inputUser!): Boolean!
  }
`;
