// import handlerShopPage from "./app/category.js";
import initialRender from "./core/initialRender.js";
import listener from "./core/listener.js";

class App {
  init() {
    console.log("App start");
    initialRender();
    listener();
  }
}
export default App;
