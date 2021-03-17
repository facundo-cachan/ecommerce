import { gql } from "apollo-server";
export default gql`
  input inputRol {
    id: ID
    name: String!
    available: Boolean = false
  }

  type Rol @unique(from: ["id"]) {
    id: ID!
    name: String!
    available: Boolean!
    createdAt: String! @date
    updatedAt: String! @date
  }

  extend type Query {
    rol(id: ID!, available: Boolean = true): Rol
    roles(available: Boolean = true): [Rol]!
  }

  extend type Mutation {
    addRol(info: inputRol!): Boolean!
    updateRol(id: ID!, info: inputRol!): Boolean!
  }
`;
