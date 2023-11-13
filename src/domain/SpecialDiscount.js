import NUMBER from "../static/Number.js";

class SpecialDiscount {
    specialDiscount(day) {
        const special = new Object();
        if(NUMBER.special.includes(day) === true) {
            special['특별 할인'] = Number(NUMBER.specialDiscount);
            return special;
        }
        return 0;
    }
}
export default SpecialDiscount;