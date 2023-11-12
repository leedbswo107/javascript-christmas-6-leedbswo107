import PromotionController from "./controller/PromotionController.js";

class App {
  #promotion;

  constructor() {
    this.#promotion = new PromotionController();
  }
  async run() {
    try {
      this.#promotion.intro();
    } catch (error) {
      
    }
  }
}

export default App;
