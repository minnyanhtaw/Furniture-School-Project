import initialRender from "./core/initialRender";
import listener from "./core/listener";
import { createHomePageProduct } from "./core/product";

class App {
  init() {
    console.log("App start");
    listener();
    initialRender();
  }
}
export default App;
