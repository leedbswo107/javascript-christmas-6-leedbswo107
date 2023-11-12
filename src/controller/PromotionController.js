import OrderMenu from "../domain/OrderMenu.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class PromotionController {
    #outputView;
    #inputView;
    #orderMenu;
    #dividedMenu;
    #visitDate;

    constructor() {
        this.#outputView = new OutputView();
        this.#inputView = new InputView();
    }
    
    async intro() {
        this.#outputView.printIntro();
        await this.#inputDateInput();
    }
    async #inputDateInput() {
        this.#visitDate = await this.#inputView.visitDate();
        await this.#inputOrderMenu();
    }
    async #inputOrderMenu() {
        const orderMenu = await this.#inputView.orderMenu();
        this.#orderMenu = new OrderMenu(orderMenu);
        this.#dividedMenu = await this.#orderMenu.getMenu();
        this.#displayResult();
    }
    #displayResult() {
        this.#outputView.printResultIntro(this.#visitDate);
        this.#outputView.printMenu(this.#dividedMenu);
        this.#outputView.printTotalPriceBeforeDiscount();
        this.#outputView.printGiveAwayMenu();
        this.#outputView.printBenefitDetails();
        this.#outputView.printTotalBenefitPrice();
        this.#outputView.printTotalPriceAfterDiscount();
        this.#outputView.printBadge();
    }


}
export default PromotionController;
