import Validator from "../common/Validator.js";

class OrderMenu {
    #orderMenu;
    #dividedMenu;

    constructor(menu) {
        this.#orderMenu = menu.split(',');
        this.validator = new Validator();
    }
    async #divideOrderMenu(input) {
        let element = []
        for(let i =0; i < input.length; i++){
            element.push(input[i].split('-'));
        }
        return element;
    }
    async #stringToObject(menu) {
        const obj = {};
        const arr = await this.#divideOrderMenu(menu);
        this.validator.validateDuplicateMenu(arr);
        for(let i = 0; i < arr.length; i++) obj[arr[i][0]] = parseInt(arr[i][1]);
        this.validator.validateOrderOnlyDrinks(obj);
        this.validator.validateOrderAmount(obj);
        this.validator.validateMinAmount(obj);
        return obj;
    }
    async getMenu() {
        this.#orderMenu.forEach(element => {
            this.validator.validateMenuPattern(element);
        });
        this.#dividedMenu = await this.#stringToObject(this.#orderMenu);
        
        Object.keys(this.#dividedMenu).forEach(key => this.validator.validateCorrectMenu(key));

        return this.#dividedMenu;
    }
}
export default OrderMenu;