import categories from "../mocks/categories";
export default {
  all: async (available: boolean) =>
    categories.filter((category) => category.available === available),
  one: async (id: number, available: boolean) =>
    categories.find((category: any) => {
      if (category.id === id && category.available === available)
        return category;
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
