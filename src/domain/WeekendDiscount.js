import NUMBER from "../static/Number.js";
import WeekendMaindishCount from "./WeekendMaindishCount.js";

class WeekendDiscount {
    constructor() {
        this.weekendMaindishCount = new WeekendMaindishCount();
    }
    weekendDiscount(day,maindish) {
        let weekendDiscountTotal = 0;
        const weekend = new Object();
        let maindishCount = this.weekendMaindishCount.maindishCount(maindish);
        if(NUMBER.weekend.includes(day) === true) {
            weekendDiscountTotal = (NUMBER.weekendDiscount)*maindishCount;
            weekend['주말 할인'] = weekendDiscountTotal;
            return weekend;
        }
        return 0;
    }
}
export default WeekendDiscount;