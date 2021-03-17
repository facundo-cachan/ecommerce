import roles from "../mocks/roles";
export default {
  all: async (available: boolean) => roles.filter((rol) => rol.available === available),
  one: async (id: number, available: boolean) =>
    roles.find((rol: any) => {
      if (rol.id === id && rol.available === available) return rol;
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
