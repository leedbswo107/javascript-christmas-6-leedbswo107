import NUMBER from "../static/Number.js";

class ChristmasDdayDiscount {
    discountAmount(day,total) {
        let discountAmount = NUMBER.CHRISTMASDAYEVENT.discount; 
        const dDay = new Object();
        if(total >= NUMBER.eventTarget && (day >= NUMBER.eventStart && day <= NUMBER.CHRISTMASDAYEVENT.endDate)){
            for(let i = 1; i < day; i++) discountAmount += NUMBER.CHRISTMASDAYEVENT.dayBydayPlus;
            dDay['크리스마스 디데이 할인'] = Number(discountAmount);
            return dDay;
        }
        dDay['크리스마스 디데이 할인'] = 0;
        return dDay;
    }
}
export default ChristmasDdayDiscount;