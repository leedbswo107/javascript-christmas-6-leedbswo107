import ChristmasDdayDiscount from "../domain/ChristmasDdayDiscount.js";
import GiveAwayEvent from "../domain/GiveAwayEvent.js";
import TotalPriceBeforeDiscount from "../domain/TotalPriceBeforeDiscount.js";
import WeekdayDiscount from "../domain/WeekdayDiscount.js";
import WeekendDiscount from "../domain/WeekendDiscount.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class PromotionController {
    #outputView;
    #inputView;
    #orderMenu;
    #visitDate;
    #totalPrice;
    #totalPriceBeforeDiscount;
    #giveAwayEvent;
    #giveAway;
    #commaPrice;
    #christmasDdayDiscount;
    #christmasDiscountAmount;
    #weekdayDiscount;
    #weekendDiscount;
    #weekdayDiscountTotal;
    #weekendDiscountTotal;

    constructor() {
        this.#outputView = new OutputView();
        this.#inputView = new InputView();
        this.#totalPriceBeforeDiscount = new TotalPriceBeforeDiscount();
        this.#christmasDdayDiscount = new ChristmasDdayDiscount();
        this.#giveAwayEvent = new GiveAwayEvent();
        this.#weekdayDiscount = new WeekdayDiscount();
        this.#weekendDiscount = new WeekendDiscount();
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
        await this.#relatedPrice();
    }
    async #relatedPrice() {
        this.#totalPrice = await this.#totalPriceBeforeDiscount.totalPrice(this.#orderMenu);
        this.#commaPrice = await this.#totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        await this.#relatedDiscount();
    }
    async #relatedDiscount() {
        this.#christmasDiscountAmount = await this.#christmasDdayDiscount.discountAmount(this.#visitDate);
        this.#giveAway = this.#giveAwayEvent.giveAway(this.#totalPrice);
        this.#weekdayDiscountTotal = await this.#weekdayDiscount.weekdayDiscount(this.#visitDate,this.#orderMenu);
        this.#weekendDiscountTotal = this.#weekendDiscount.weekendDiscount(this.#visitDate,this.#orderMenu);
        console.log(this.#christmasDiscountAmount);
        console.log(this.#weekdayDiscountTotal);
        console.log(this.#weekendDiscountTotal);
        this.#displayResult();
    }
    #displayResult() {
        this.#outputView.printResultIntro(this.#visitDate);
        this.#outputView.printMenu(this.#orderMenu);
        this.#outputView.printTotalPriceBeforeDiscount(this.#commaPrice);
        this.#outputView.printGiveAwayMenu(this.#giveAway);
        this.#outputView.printBenefitDetails();
        this.#outputView.printTotalBenefitPrice();
        this.#outputView.printTotalPriceAfterDiscount();
        this.#outputView.printBadge();
    }
}
export default PromotionController;
