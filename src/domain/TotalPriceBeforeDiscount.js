import PRICE from "../static/Price.js";

class TotalPriceBeforeDiscount{
    totalPrice(menu) {
        const menuKeys = Object.keys(menu);
        let priceTotal = 0;
        menuKeys.forEach(element => {
            if((element in PRICE.APPETIZER) === true) priceTotal += PRICE.APPETIZER[element]*menu[element];
            else if((element in PRICE.MAIN) === true) priceTotal += PRICE.MAIN[element]*menu[element];
            else if((element in PRICE.DESSERT) === true) priceTotal += PRICE.DESSERT[element]*menu[element];
            else if((element in PRICE.DRINKS) === true) priceTotal += PRICE.DRINKS[element]*menu[element]; 
        });
        return priceTotal;
    }
}
export default TotalPriceBeforeDiscount;