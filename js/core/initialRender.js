import { products } from "./data.js";
import { renderHomePageProduct } from "./product.js";

const initialRender = () => {
  renderHomePageProduct(products);
};
export default initialRender;
