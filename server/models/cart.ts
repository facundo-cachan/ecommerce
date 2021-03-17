import cartItems from "../mocks/cartItems";
import isSubset from "../utils/isSubset";

export default {
  /* all: async (available: any) => cartItems.filter((cart) => cart.available === available), */
  filter: async (params: any) =>
    cartItems.filter((cart: any) => {
      if (isSubset(cart, params)) {
        return cart;
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
