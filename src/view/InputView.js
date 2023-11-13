import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../static/message.js";
import Validator from "../common/Validator.js";
import OrderMenu from "../domain/OrderMenu.js";
class InputView {
    constructor() {
        this.validator = new Validator(); 
    }
    async visitDate() {
        while(true){
            try{
                const visitDate = Number(await Console.readLineAsync(`${INPUT_MESSAGE.visitDay}`));
                this.validator.validateVisitDate(visitDate);
                return visitDate;
            } catch(e) {
                await Console.print(`${e}`);
            }
        }
    }
    async orderMenu() {
        while(true) {
            try {
                const orderMenu = await Console.readLineAsync(`${INPUT_MESSAGE.orderMenu}`);
                this.orderMenu = new OrderMenu(orderMenu);
                this.dividedMenu = await this.orderMenu.getMenu();
                return this.dividedMenu;
            } catch (e) {
                await Console.print(`${e}`);
            }    
        }
    }
    // ...
}
export default InputView;