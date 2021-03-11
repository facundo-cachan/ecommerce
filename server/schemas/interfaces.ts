import { gql } from "apollo-server";
export default gql`
  interface Character {
    id: ID
    name: String
  }
  type App {
    id: String!
    db: String!
    title: String!
  }
  type UserLogger {
    userId: ID!
    token: String!
  }
  type Query {
    app(id: ID!, available: Boolean = true): App!
    isLoggedIn(token: String!): Boolean!
  }
  type Mutation {
    signIn(id: String!, pass: String!, available: Boolean = true): UserLogger
    signOut(id: String!): Boolean!
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`;
