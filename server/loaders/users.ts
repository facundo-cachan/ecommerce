import DataLoader from "dataloader";
import dbValues from "../mocks/users";

export default new DataLoader(async (ids) =>
  dbValues
    .filter((post) => ids.includes(post.id))
    .map(({ id }) => id || new Error(`No result for ${id}`))
);