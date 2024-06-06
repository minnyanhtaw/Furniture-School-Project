import handlerShopPage from "../app/category.js";
import { categories, products } from "./data.js";
import handlerIndexPage from "../app/homePageProduct.js";

const initialRender = () => {
  if (document.querySelector("#index")) {
    handlerIndexPage();
  } else if (document.querySelector("#shop")) {
    handlerShopPage();
  }
};
export default initialRender;
