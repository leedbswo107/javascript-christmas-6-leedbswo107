import PRICE from "../static/Price.js";

class WeekdayDessertCount{
    dessertCount(dessert) {
        const dessertKeys = Object.keys(dessert);
        let dessertCount = 0;
        dessertKeys.forEach(element => {
            if((element in PRICE.DESSERT) === true) dessertCount += dessert[element];
        });
        return dessertCount;
    }
}
export default WeekdayDessertCount;