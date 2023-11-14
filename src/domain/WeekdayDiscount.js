import NUMBER from "../static/Number.js";
import WeekdayDessertCount from "./WeekdayDessertCount.js";

class WeekdayDiscount {
    constructor() {
        this.weekdayDessertCount = new WeekdayDessertCount();
    }
    weekdayDiscount(day,dessert,total) {
        let weekdayDiscountTotal = 0;
        const weekday = new Object();
        let dessertCount = this.weekdayDessertCount.dessertCount(dessert);
        if(total >= NUMBER.eventTarget && NUMBER.weekday.includes(day) === true) {
            weekdayDiscountTotal = (NUMBER.weekdayDiscount)*dessertCount;
            weekday['평일 할인'] = Number(weekdayDiscountTotal);
            return weekday;
        }
        weekday['평일 할인'] = 0;
        return weekday;
    }
}
export default WeekdayDiscount;