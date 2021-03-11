import DataLoader from "dataloader";
import dbValues from "../mocks/products";

export default new DataLoader(async (ids) =>
  dbValues
    .filter((post) => ids.includes(post.id))
    .map(({ id }) => id || new Error(`No result for ${id}`))
);
/*
const loader = new DataLoader(async (keys) => {
  const results = await db.fetchAllKeys(keys);
  return keys.map((key) => results[key] || new Error(`No result for ${key}`));
});
*/
