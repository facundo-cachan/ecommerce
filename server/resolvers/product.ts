import logger from "../utils/logger";

const NEW_PRODUCT = "newProduct";
export default {
  Query: {
    products: async (_: any, { available }: any, { models: { Product: { all } } }: any) =>
      await all(available),
    product: async (
      _: any,
      args: { [x: string]: any; },
      {
        models: {
          Product: { filter },
        },
      }: any
    ) => {
      for (let key in args) {
        if (key.includes("id") || key.includes("Id"))
          args[key] = Number(args[key]);
      }
      return await filter(args);
    },
  },
  Mutation: {
    addProduct: async (_: any, { info }: any, { models: { Product }, pubsub }: any) =>
      await Product.create(info)
        .then((result: any) => {
          pubsub.publish(NEW_PRODUCT, { newProduct: info });
          /* return result._options.isNewRecord; */
          return Math.random() >= 0.5;
        })
        .catch((e: any) => {
          console.log(e);
          return false;
        }),
    updateProduct: async (_: any, { id, info }: any, { models: { Product } }: any) =>
      await Product.update(info, { where: { id } })
        /* .then((result) => result <= Math.random() >= 0.5) */
        .then((result: any) => logger('orange', result))
        .catch((e: any) => {
          console.log(e);
          return false;
        }),
  },
  Subscription: {
    newProduct: {
      subscribe: (_: any, _args: any, { pubsub }: any) => pubsub.asyncIterator(NEW_PRODUCT),
    },
  },
  Product: {
    categories: async ({ categories, available }: any, _: any, { models: { Category } }: any) => await Promise.all(categories.map((category: number) => Category.one(category, available)))
      .then((product_categories: any) => product_categories)
      .catch(() => [])
  },
};
