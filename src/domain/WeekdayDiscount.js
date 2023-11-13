import NUMBER from "../static/Number.js";
import WeekdayDessertCount from "./WeekdayDessertCount.js";

class WeekdayDiscount {
    constructor() {
        this.weekdayDessertCount = new WeekdayDessertCount();
    }
    weekdayDiscount(day,dessert) {
        let weekdayDiscountTotal = 0;
        const weekday = new Object();
        let dessertCount = this.weekdayDessertCount.dessertCount(dessert);
        if(NUMBER.weekday.includes(day) === true) {
            weekdayDiscountTotal = (NUMBER.weekdayDiscount)*dessertCount;
            weekday['평일 할인'] = Number(weekdayDiscountTotal);
            return weekday;
        }
        return 0;
    }
}
export default WeekdayDiscount;