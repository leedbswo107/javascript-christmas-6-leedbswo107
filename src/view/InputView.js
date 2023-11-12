import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../static/message.js";
import Validator from "../common/Validator.js";
class InputView {
    constructor() {
        this.validator = new Validator(); 
    }
    async visitDate() {
        while(true){
            try{
                const visitDate = await Console.readLineAsync(`${INPUT_MESSAGE.visitDay}`);
                this.validator.validateVisitDate(visitDate);
                return visitDate;
            } catch(e) {
                Console.print(`${e}`);
            }
        }
    }
    async orderMenu() {
        const orderMenu = await Console.readLineAsync(`${INPUT_MESSAGE.orderMenu}`);
        this.validator.validateMenuPattern(orderMenu);
        return orderMenu;
    }
    // ...
}
export default InputView;