import crypto from "crypto";
import logger from "../utils/logger";
export default {
  Query: {
    app: async (_, { id, available }, { models: { one } }) =>
      one("apps", id, available),
    isLoggedIn: async (_, { token }) => true,
  },
  Mutation: {
    signIn: async (_, { id, pass, available }, { models }) => {
      logger("red", { id, pass, available });
      const user = await models.one("users", { id, pass, available });
      if (user) {
        user.token = crypto.randomBytes(20).toString("hex");
        return user;
      } else return null;
    },
    signOut: async (_, { id }, { models: { User } }) => {
      logger("SignOut", id);
      return true;
    },
  },
};
