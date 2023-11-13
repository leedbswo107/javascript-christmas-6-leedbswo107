import { Console } from "@woowacourse/mission-utils";
import PRICE from "../static/Price.js";
import { OUTPUT_MESSAGE } from "../static/message.js";

class OutputView {
    printIntro() {
        Console.print(`${OUTPUT_MESSAGE.intro}`);
    }
    printResultIntro(date) {
        Console.print(`${OUTPUT_MESSAGE.previewFront}${date}${OUTPUT_MESSAGE.previewBack}`);
    }
    printMenu(menu) {
        Console.print(`${OUTPUT_MESSAGE.orderMenu}`);
        for (const key in menu) {
            console.log(`${key} ${menu[key]}${OUTPUT_MESSAGE.quantity}`);
        }
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
    //함수 분리 필요 함
    printBenefitDetails(dday,weekday,weekend,special) {
        Console.print(`${OUTPUT_MESSAGE.benefitDetails}`);
        if(dday !== 0) Console.print(`${Object.keys(dday)}: -${Object.values(dday).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${OUTPUT_MESSAGE.won}`);
        if(weekday !== 0) Console.print(`${Object.keys(weekday)}: -${Object.values(weekday).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${OUTPUT_MESSAGE.won}`);
        if(weekend !== 0) Console.print(`${Object.keys(weekend)}: -${Object.values(weekend).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${OUTPUT_MESSAGE.won}`);
        if(special !== 0) Console.print(`${Object.keys(special)}: -${Object.values(special).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${OUTPUT_MESSAGE.won}`);
        else Console.print(OUTPUT_MESSAGE.none);
    }
    //if 절 분리 필요
    printTotalBenefitPrice(total) {
        Console.print(`${OUTPUT_MESSAGE.totalBenefitPrice}`);
        if(total === 0) Console.print(OUTPUT_MESSAGE.none);
        else Console.print(`-${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${OUTPUT_MESSAGE.won}`);
    }
    printTotalPriceAfterDiscount(price) {
        Console.print(`${OUTPUT_MESSAGE.totalPriceAfterDiscount}`);
        Console.print(`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${OUTPUT_MESSAGE.won}`);
    }
    printBadge(badge) {
        Console.print(`${OUTPUT_MESSAGE.badge}`);
        if(badge === 0) Console.print(`${OUTPUT_MESSAGE.none}`);
        else Console.print(`${badge}`);
    }
}
export default OutputView;