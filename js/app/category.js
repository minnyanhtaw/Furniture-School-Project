import { categoryGroup, categoryGroupTemplate } from "../core/selectors.js";

function handlerShopPage() {
   const createCategory = (categoryName) => {
    const template = categoryGroupTemplate.content.cloneNode(true);
    template.querySelector(".category-item").innerText = categoryName;
    return template;
  };

   const renderCategory = (categories) => {
    categories.forEach((category) =>
      categoryGroup.append(createCategory(category))
    );
  };
}
export default handlerShopPage;
