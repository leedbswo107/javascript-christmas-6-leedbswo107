import Badge from "../domain/Badge.js";
import ChristmasDdayDiscount from "../domain/ChristmasDdayDiscount.js";
import GiveAwayEvent from "../domain/GiveAwayEvent.js";
import SpecialDiscount from "../domain/SpecialDiscount.js";
import TotalBenefitPrice from "../domain/TotalBenefitPrice.js";
import TotalPriceAfterDiscount from "../domain/TotalPriceAfterDiscount.js";
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
    #specialDiscount;
    #weekdayDiscountTotal;
    #weekendDiscountTotal;
    #specialDiscountTotal;
    #totalBenefit;
    #totalBenefitPrice;
    #afterBenefit;
    #totalafterBenefit;
    #badgeFunc;
    #badge;

    constructor() {
        this.#outputView = new OutputView();
        this.#inputView = new InputView();
        this.#totalPriceBeforeDiscount = new TotalPriceBeforeDiscount();
        this.#christmasDdayDiscount = new ChristmasDdayDiscount();
        this.#giveAwayEvent = new GiveAwayEvent();
        this.#weekdayDiscount = new WeekdayDiscount();
        this.#weekendDiscount = new WeekendDiscount();
        this.#specialDiscount = new SpecialDiscount();
        this.#totalBenefit = new TotalBenefitPrice();
        this.#afterBenefit = new TotalPriceAfterDiscount();
        this.#badgeFunc = new Badge();
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
        this.#christmasDiscountAmount = this.#christmasDdayDiscount.discountAmount(this.#visitDate);
        this.#giveAway = this.#giveAwayEvent.giveAway(this.#totalPrice);
        this.#weekdayDiscountTotal = this.#weekdayDiscount.weekdayDiscount(this.#visitDate,this.#orderMenu);
        this.#weekendDiscountTotal = this.#weekendDiscount.weekendDiscount(this.#visitDate,this.#orderMenu);
        this.#specialDiscountTotal = this.#specialDiscount.specialDiscount(this.#visitDate);
        this.#totalBenefitPrice = this.#totalBenefit.totalBenefitPrice(this.#christmasDiscountAmount,this.#weekdayDiscountTotal,this.#weekendDiscountTotal,this.#specialDiscountTotal,this.#giveAway);
        this.#totalafterBenefit = this.#afterBenefit.totalPriceAfterDiscount(this.#totalPrice,this.#christmasDiscountAmount,this.#weekdayDiscountTotal,this.#weekendDiscountTotal,this.#specialDiscountTotal);
        await this.#badgeResult();
    }
    async #badgeResult() {
        this.#badge = this.#badgeFunc.badge(this.#totalBenefitPrice);
        this.#displayResult();
    }
    #displayResult() {
        this.#outputView.printResultIntro(this.#visitDate);
        this.#outputView.printMenu(this.#orderMenu);
        this.#outputView.printTotalPriceBeforeDiscount(this.#commaPrice);
        this.#outputView.printGiveAwayMenu(this.#giveAway);
        this.#outputView.printBenefitDetails(this.#christmasDiscountAmount,this.#weekdayDiscountTotal,this.#weekendDiscountTotal,this.#specialDiscountTotal);
        this.#outputView.printTotalBenefitPrice(this.#totalBenefitPrice);
        this.#outputView.printTotalPriceAfterDiscount(this.#totalafterBenefit);
        this.#outputView.printBadge(this.#badge);
    }
}
export default PromotionController;
