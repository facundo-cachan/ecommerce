import logger from "../utils/logger";

export default {
  Query: {
    roles: async (_, { available }, { models: { Rol } }) =>
      await Rol.all(available),
    rol: async (_, { id, available }, { models: { Rol } }) =>
      await Rol.one(Number(id), available),
  },
  Mutation: {
    addRol: async (_, { info }, { models: { Rol }, pubsub }) =>
      await Rol.create(info)
        .then((result) => {
          /* return result._options.isNewRecord; */
          return Math.random() >= 0.5;
        })
        .catch((e) => {
          console.log(e);
          return false;
        }),
    updateRol: async (_, { id, info }, { models: { Rol } }) =>
      await Rol.update(info, { where: { id } })
        .then((result: any) => logger('orange', result))
        .catch((e: any) => {
          console.log(e);
          return false;
        }),
  },
};
