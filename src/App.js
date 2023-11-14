import { Console } from "@woowacourse/mission-utils";
import PromotionController from "./controller/PromotionController.js";

class App {
  #promotion;

  constructor() {
    this.#promotion = new PromotionController();
  }
  async run() {
    try {
      await this.#promotion.inputArea();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
