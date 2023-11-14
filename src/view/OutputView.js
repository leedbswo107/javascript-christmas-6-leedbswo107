import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../static/Message.js";
import PRICE from "../static/Price.js";
import RULE from "../static/Rule.js";

class OutputView {
    printResultIntro(date) {
        Console.print(`${OUTPUT_MESSAGE.previewFront}${date}${OUTPUT_MESSAGE.previewBack}`);
    }
    printMenu(menu) {
        Console.print(`${(OUTPUT_MESSAGE.orderMenu)}`);
        Console.print(Object.entries(menu).map(([key, value]) => `${key} ${value}${OUTPUT_MESSAGE.quantity}`).join('\n'));
    }
    printTotalPriceBeforeDiscount(price) {
        Console.print(`${OUTPUT_MESSAGE.totalPriceBeforeDiscount}`);
        Console.print(`${price}${OUTPUT_MESSAGE.won}`);
    }
    printGiveAwayMenu(gift) {
        Console.print(`${OUTPUT_MESSAGE.giveAwayMenu}`);
        if(gift === 0) Console.print(OUTPUT_MESSAGE.none);
        else Console.print(`${Object.keys(gift)} ${Object.values(gift)}${OUTPUT_MESSAGE.quantity}`)
    }
    printBenefitDetails(dday,weekday,weekend,special,giveAway) {
        Console.print(`${OUTPUT_MESSAGE.benefitDetails}`);
        if(Number(Object.values(dday)) !== 0) Console.print(`${OUTPUT_MESSAGE.ddayEvent}: -${Object.values(dday).toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
        if(Number(Object.values(weekday)) !== 0) Console.print(`${OUTPUT_MESSAGE.weekdayEvent}: -${Object.values(weekday).toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
        if(Number(Object.values(weekend)) !== 0) Console.print(`${OUTPUT_MESSAGE.weekendEvent}: -${Object.values(weekend).toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
        if(Number(Object.values(special)) !== 0) Console.print(`${OUTPUT_MESSAGE.specialEvent}: -${Object.values(special).toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
        if(Number(Object.values(giveAway)) !== 0) Console.print(`${OUTPUT_MESSAGE.giveAwayEvent}: -${PRICE.DRINKS.샴페인.toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
        if(((Number(Object.values(dday)) === 0) && (Number(Object.values(weekday)) === 0) && (Number(Object.values(weekend)) === 0) && (Number(Object.values(special)) === 0) && (giveAway === 0)) === true) Console.print(OUTPUT_MESSAGE.none);
    }
    printTotalBenefitPrice(total) {
        Console.print(`${OUTPUT_MESSAGE.totalBenefitPrice}`);
        // if(total === 0) Console.print(`${total.toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
        // else Console.print(`-${total.toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
        switch (true) {
            case total === 0:
              Console.print(`${total.toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
              break;
            default:
              Console.print(`-${total.toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
              break;
          }
    }
    printTotalPriceAfterDiscount(price) {
        Console.print(`${OUTPUT_MESSAGE.totalPriceAfterDiscount}`);
        Console.print(`${price.toString().replace(RULE.thousandUnitsRule, ",")}${OUTPUT_MESSAGE.won}`);
    }
    printBadge(badge) {
        Console.print(`${OUTPUT_MESSAGE.badge}`);
        // if(badge === 0) Console.print(`${OUTPUT_MESSAGE.none}`);
        // else Console.print(`${badge}`);
        switch (badge) {
            case 0:
              Console.print(`${OUTPUT_MESSAGE.none}`);
              break;
            default:
              Console.print(`${badge}`);
              break;
        }
    }
}
export default OutputView;