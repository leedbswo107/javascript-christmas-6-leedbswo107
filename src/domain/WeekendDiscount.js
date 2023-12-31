import NUMBER from "../static/Number.js";
import WeekendMaindishCount from "./WeekendMaindishCount.js";

class WeekendDiscount {
    constructor() {
        this.weekendMaindishCount = new WeekendMaindishCount();
    }
    weekendDiscount(day,maindish,total) {
        let weekendDiscountTotal = 0;
        const weekend = new Object();
        let maindishCount = this.weekendMaindishCount.maindishCount(maindish);
        if(total >= NUMBER.eventTarget && NUMBER.weekend.includes(day) === true) {
            weekendDiscountTotal = (NUMBER.weekendDiscount)*maindishCount;
            weekend['주말 할인'] = Number(weekendDiscountTotal);
            return weekend;
        }
        weekend['주말 할인'] = 0;
        return weekend;
    }
}
export default WeekendDiscount;