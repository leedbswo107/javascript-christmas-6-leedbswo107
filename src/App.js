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
      // 예외 발생시 throw new Error("객체") 의 객체가 모든 메시지를 포함하여
      // catch 부분을 비워도 상관 없음.
    }

  }
}
export default App;
