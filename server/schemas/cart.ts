import { gql } from "apollo-server";
export default gql`
  enum Status {
    Pending
    Close
  }

  type ProductInCart {
    id: ID!
    price: Int!
    qt: Int!
  }

  input inputCart {
    id: ID
    ownerId: ID
    items: ID
    price: Int
  }

  type Cart @unique(from: ["id"]) {
    id: ID!
    ownerId: ID
    items: [ProductInCart]
    price: Int!
    status: Status
    createdAt: String! @date
    updatedAt: String! @date
  }

  extend type Query {
    cartItems(ownerId: ID, status: Status = Pending): [Cart]
  }

  extend type Mutation {
    addToCart(info: inputCart!): Boolean!
    updateCart(id: ID!, info: inputCart!): Boolean!
  }

  extend type Subscription {
    newCart: Cart!
  }
`;
