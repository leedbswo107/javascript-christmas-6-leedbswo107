import OrderMenu from "../domain/OrderMenu.js";
import TotalPriceBeforeDiscount from "../domain/TotalPriceBeforeDiscount.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class PromotionController {
    #outputView;
    #inputView;
    #orderMenu;
    #dividedMenu;
    #visitDate;
    #totalPrice;
    #totalPriceBeforeDiscount;

    constructor() {
        this.#outputView = new OutputView();
        this.#inputView = new InputView();
    }
    
    intro() {
        this.#outputView.printIntro();
        this.#inputDateInput();
    }
    async #inputDateInput() {
        this.#visitDate = await this.#inputView.visitDate();
        await this.#inputOrderMenu();
    }
    async #inputOrderMenu() {
        this.#orderMenu = await this.#inputView.orderMenu();
        this.#displayResult();
        await this.#relatedPice();
    }
    async #relatedPice() {
        this.#totalPriceBeforeDiscount = new TotalPriceBeforeDiscount();
        this.#totalPrice = await this.#totalPriceBeforeDiscount.totalPrice(this.#orderMenu);
        this.commaPrice = this.#totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.#displayResult();
    }
    #displayResult() {
        this.#outputView.printResultIntro(this.#visitDate);
        this.#outputView.printMenu(this.#orderMenu);
        this.#outputView.printTotalPriceBeforeDiscount(this.commaPrice);
        this.#outputView.printGiveAwayMenu();
        this.#outputView.printBenefitDetails();
        this.#outputView.printTotalBenefitPrice();
        this.#outputView.printTotalPriceAfterDiscount();
        this.#outputView.printBadge();
    }


}
export default PromotionController;
