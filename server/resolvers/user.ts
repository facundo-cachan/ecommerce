import logger from "../utils/logger";

export default {
  Query: {
    users: async (_, { available }, { models: { User } }) =>
      await User.all(available),
    user: async (_, { id, available }, { models: { User } }) =>
      await User.one(Number(id), available),
  },
  Mutation: {
    addUser: async (_, { info }, { models: { User }, pubsub }) =>
      await User.create(info)
        .then((result) => {
          /* return result._options.isNewRecord; */
          return Math.random() >= 0.5;
        })
        .catch((e) => {
          console.log(e);
          return false;
        }),
    updateUser: async (_, { id, info }, { models: { User } }) =>
      await User.update(info, { where: { id } })
      .then((result: any) => logger('orange', result))
        .catch((e) => {
          console.log(e);
          return false;
        }),
  },
  User: {
    idRol: async ({ idRol, available }, _, { models: { Rol } }) =>
      await Rol.one(idRol, available),
  },
};
