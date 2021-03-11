import products from "../mocks/products";
import isSubset from "../utils/isSubset";

export default {
  all: async (available: boolean) => products.filter((product) => product.available === available),
  filter: async (params: any) =>
    products.filter((product: any) => {
      if (isSubset(product, params)) {
        return product;
      }
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
