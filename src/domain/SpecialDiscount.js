import NUMBER from "../static/Number.js";

class SpecialDiscount {
    specialDiscount(day,total) {
        const special = new Object();
        if((total >= NUMBER.eventTarget) && (NUMBER.special.includes(day) === true)) {
            special['특별 할인'] = Number(NUMBER.specialDiscount);
            return special;
        }
        special['특별 할인'] = 0;
        return special;
    }
}
export default SpecialDiscount;