import { products } from "./storeData";

const categories = {};
const tags = {};

products.forEach((product) => {
  let category = product.category;

  categories[category] = categories[category] ? categories[category] + 1 : 1;
  product.tags?.forEach((tag) => {
    tags[tag] = tags[tag] ? tags[tag] + 1 : 1;
  });
});

export { products, categories, tags };
