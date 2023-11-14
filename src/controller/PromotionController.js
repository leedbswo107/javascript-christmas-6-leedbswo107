import Badge from "../domain/Badge.js";
import ChristmasDdayDiscount from "../domain/ChristmasDdayDiscount.js";
import GiveAwayEvent from "../domain/GiveAwayEvent.js";
import SpecialDiscount from "../domain/SpecialDiscount.js";
import TotalBenefitPrice from "../domain/TotalBenefitPrice.js";
import TotalPriceAfterDiscount from "../domain/TotalPriceAfterDiscount.js";
import TotalPriceBeforeDiscount from "../domain/TotalPriceBeforeDiscount.js";
import WeekdayDiscount from "../domain/WeekdayDiscount.js";
import WeekendDiscount from "../domain/WeekendDiscount.js";
import RULE from "../static/Rule.js";
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
    async inputArea() {
        this.#visitDate = await this.#inputView.visitDate();
        this.#orderMenu = await this.#inputView.orderMenu();
        
        await this.relatedPrice();
    }
    async relatedPrice() {
        this.#totalPrice = this.#totalPriceBeforeDiscount.totalPrice(this.#orderMenu);
        this.#commaPrice = await this.#totalPrice.toString().replace(RULE.thousandUnitsRule, ",");
        this.relatedDiscount();
    }
    relatedDiscount() {
        this.#christmasDiscountAmount = this.#christmasDdayDiscount.discountAmount(this.#visitDate,this.#totalPrice);
        this.#giveAway = this.#giveAwayEvent.giveAway(this.#totalPrice);
        this.#weekdayDiscountTotal = this.#weekdayDiscount.weekdayDiscount(this.#visitDate,this.#orderMenu,this.#totalPrice);
        this.#weekendDiscountTotal = this.#weekendDiscount.weekendDiscount(this.#visitDate,this.#orderMenu,this.#totalPrice);
        this.#specialDiscountTotal = this.#specialDiscount.specialDiscount(this.#visitDate,this.#totalPrice);
        this.#totalBenefitPrice = this.#totalBenefit.totalBenefitPrice(this.#christmasDiscountAmount,this.#weekdayDiscountTotal,this.#weekendDiscountTotal,this.#specialDiscountTotal,this.#giveAway);
        this.#totalafterBenefit = this.#afterBenefit.totalPriceAfterDiscount(this.#totalPrice,this.#christmasDiscountAmount,this.#weekdayDiscountTotal,this.#weekendDiscountTotal,this.#specialDiscountTotal);
        this.badgeResult();
    }
    badgeResult() {
        this.#badge = this.#badgeFunc.badge(this.#totalBenefitPrice);
        this.displayResultIntro();
    }
    displayResultIntro() {
        this.#outputView.printResultIntro(this.#visitDate);
        this.displayResult();
    }
    displayResult() {
        this.#outputView.printMenu(this.#orderMenu);
        this.#outputView.printTotalPriceBeforeDiscount(this.#commaPrice);
        this.#outputView.printGiveAwayMenu(this.#giveAway);
        this.#outputView.printBenefitDetails(this.#christmasDiscountAmount,this.#weekdayDiscountTotal,this.#weekendDiscountTotal,this.#specialDiscountTotal,this.#giveAway);
        this.#outputView.printTotalBenefitPrice(this.#totalBenefitPrice);
        this.#outputView.printTotalPriceAfterDiscount(this.#totalafterBenefit);
        this.#outputView.printBadge(this.#badge);
    }
}
export default PromotionController;
