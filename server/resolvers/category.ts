import logger from "../utils/logger";

export default {
  Query: {
    categories: async (_, { available }, { models: { Category } }) =>
      await Category.all(available),
    category: async (_, { id, available }, { models: { Category } }) =>
      await Category.one(Number(id), available),
  },
  Mutation: {
    addCategory: async (_, { info }, { models: { Category }, pubsub }) =>
      await Category.create(info)
        .then((result) => {
          /* return result._options.isNewRecord; */
          return Math.random() >= 0.5;
        })
        .catch((e) => {
          console.log(e);
          return false;
        }),
    updateCategory: async (_, { id, info }, { models: { Category } }) =>
      await Category.update(info, { where: { id } })
        /* .then((result) => result <= Math.random() >= 0.5) */
        .then((result: any) => logger('orange', result))
        .catch((e) => {
          console.log(e);
          return false;
        }),
  },
};
