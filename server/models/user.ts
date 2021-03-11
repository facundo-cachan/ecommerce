import users from "../mocks/users";
export default {
  all: async (available: boolean) =>
    users.filter((user) => user.available === available),
  one: async (id: string, available: boolean) =>
    users.find((user: any) => {
      if (user.id === id && user.available === available) return user;
    }),
  create: async (data: any) => {
    console.log(data);
    return true;
  },
  update: async (data: any) => {
    console.log(data);
    return true;
  },
};
