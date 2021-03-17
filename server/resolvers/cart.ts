import logger from "../utils/logger";
import log from "../utils/logger";
const NEW_CART = "newCart";
export default {
  Query: {
    cartItems: async (
      _,
      args,
      {
        models: {
          Cart: { filter },
        },
      }
    ) => {
      for (let key in args) {
        if (key.includes("id") || key.includes("Id"))
          args[key] = Number(args[key]);
      }
      return await filter(args);
    },
  },
  Mutation: {
    addToCart: async (_, { info }, { models: { Cart }, pubsub }) =>
      await Cart.create(info)
        .then((result) => {
          /* pubsub.publish(NEW_PRODUCT, { newProduct: info }); */
          /* return result._options.isNewRecord; */
          return Math.random() >= 0.5;
        })
        .catch((e) => {
          console.log(e);
          return false;
        }),
    updateCart: async (_, { id, info }, { models: { Cart } }) =>
      await Cart.update(info, { where: { id } })
      .then((result: any) => logger('orange', result))
        /* .then((result) => result <= Math.random() >= 0.5) */
        .catch((e) => {
          console.log(e);
          return false;
        }),
  },
  Subscription: {
    newCart: {
      subscribe: (_, _args, { pubsub }) => pubsub.asyncIterator(NEW_CART),
    },
  },
  Cart: {
    ownerId: async ({ ownerId, available }, _, { models: { User } }) =>
      await User.one(ownerId, available),
  },
};
