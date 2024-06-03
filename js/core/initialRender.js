import { products } from "./data.js";
import { renderProduct } from "./product.js";

const initialRender = () => {
  renderProduct(products);
};
export default initialRender;
