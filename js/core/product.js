import { homePageProductGroup, homePageProductTemplate } from "./selectors.js";

export const createHomePageProduct = (product) => {
  const template = homePageProductTemplate.content.cloneNode(true);
  template.querySelector(".homepage-product-card-link").href = product.link;
  template.querySelector(".homepage-product-image").src = product.image;
  template.querySelector(".homepage-product-name").innerText = product.name;
  template.querySelector(".homepage-product-price").innerText =
    product.price.toFixed(2);
  console.log(template);
  return template;
};

export const renderHomePageProduct = (products) => {
  products.filter(
    (product) =>
      product.category == "Dinning Chairs" &&
      homePageProductGroup.append(createHomePageProduct(product))
  );
  console.log(products);
};
