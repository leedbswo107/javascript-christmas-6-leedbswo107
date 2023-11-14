import ERROR from "../static/Error.js";
import NUMBER from "../static/Number.js";
import PRICE from "../static/Price.js";
import RULE from "../static/Rule.js";

class Validator {
    constructor() {}
    validateVisitDate(date) {
        if(isNaN(date)) throw new Error(`${ERROR.DATE_ERROR}`);
        if(date < NUMBER.eventStart || date > NUMBER.eventEnd) throw new Error(`${ERROR.DATE_ERROR}`);
    }
    validateMenuPattern(menu) {
        let pattern =  RULE.menuInputRule;
        if(pattern.test(menu) === false) throw new Error(`${ERROR.MENU_ERROR}`);
    }   
    validateCorrectMenu(menu) {
        if((menu in PRICE.APPETIZER || menu in PRICE.MAIN || menu in PRICE.DESSERT || menu in PRICE.DRINKS) !== true) throw new Error(`${ERROR.MENU_ERROR}`);
    }
    validateDuplicateMenu(menu) {
        const duplicateMenu = [];
        for(let i = 0; i < menu.length; i++) duplicateMenu.push(menu[i][0]);
        if(duplicateMenu.length !== new Set(duplicateMenu).size) throw new Error(`${ERROR.MENU_ERROR}`);
    }
    validateOrderOnlyDrinks(menu) {
        const setMenu = new Set(Object.keys(menu));
        let count = 0;
        setMenu.forEach(element => {
            if(element in PRICE.DRINKS) count ++;
        });
        if(count === setMenu.size) throw new Error(`${ERROR.MENU_ERROR}`);
    }
    validateOrderAmount(amount) {
        const menuAmount = Object.values(amount);
        const count = menuAmount.reduce((total, element) => total + element, 0);
        if(count > NUMBER.maxAmount) throw new Error(`${ERROR.MENU_ERROR}`);
    }
    validateMinAmount(amount) {
        const menuMinAmount = Object.values(amount);
        menuMinAmount.forEach(element => {
            if(element <= 0) throw new Error(`${ERROR.MENU_ERROR}`);
        });
    }
}
export default Validator;