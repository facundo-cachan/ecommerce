import { gql } from "apollo-server";
export default gql`
  enum Published {
    Normal
    New
    Offer
  }
  input inputProduct {
    id: ID
    name: String
    price: Int
    title: String
    details: String
    img: String
    categories: [Int]
    available: Boolean = false
    published: Published = Normal
  }

  type Product @unique(from: ["id"]) {
    id: ID!
    name: String! @upper
    price: Int!
    title: String
    details: String!
    img: String!
    categories: [Category!]
    available: Boolean!
    published: Published
    createdAt: String! @date
    updatedAt: String! @date
  }

  extend type Query {
    products(available: Boolean = true): [Product]
    product(id: ID, published: Published = Normal, available: Boolean = true): [Product]
  }

  extend type Mutation {
    addProduct(info: inputProduct!): Boolean!
    updateProduct(id: ID!, info: inputProduct!): Boolean!
  }

  extend type Subscription {
    newProduct: Product!
  }
`;
