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
    printTotalPriceBeforeDiscount() {
        Console.print(`${OUTPUT_MESSAGE.totalPriceBeforeDiscount}`);
        
    }
    printGiveAwayMenu() {
        Console.print(`${OUTPUT_MESSAGE.giveAwayMenu}`);

    }
    printBenefitDetails() {
        Console.print(`${OUTPUT_MESSAGE.benefitDetails}`);
    
    }
    printTotalBenefitPrice() {
        Console.print(`${OUTPUT_MESSAGE.totalBenefitPrice}`);

    }
    printTotalPriceAfterDiscount() {
        Console.print(`${OUTPUT_MESSAGE.totalPriceAfterDiscount}`);

    }
    printBadge() {
        Console.print(`${OUTPUT_MESSAGE.badge}`);
    }
    // menu 값을 객체로 받을지 배열로 받을지에 따라 menu, amount 가 각각의 배열로 오거나
    // 하나의 객체로 key value로 나눌지 생각 하고 결정 예정.
    // ...
}
// 객체 키와 값을 출력하는 방법.
// for (const key in PRICE.APPETIZER) {
//     const value = PRICE.APPETIZER[key];
//     Console.print(key);
//     Console.print(value);
// }
export default OutputView;