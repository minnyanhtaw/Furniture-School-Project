import { homePageProductGroup, homePageProductTemplate } from "./selectors.js";

export const createHomePageProduct = (product) => {
  const template = homePageProductTemplate.content.cloneNode(true);
  template.querySelector(".homepage-product-image").src = product.image;
  template.querySelector(".homepage-product-name").name = product.name;
  template.querySelector(".homepage-product-price").price = product.price;
  console.log(template);
  return template;
};

export const renderProduct = (products) => {
  products.forEach((product) =>
    homePageProductGroup.append(createHomePageProduct(product))
  );
};
