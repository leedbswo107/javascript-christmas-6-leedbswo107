import ERROR from "../static/Error.js";
class Validator {
    validateVisitDate(date) {
        if(isNaN(date)) throw new Error(`${ERROR.INS_NAN_ERROR}`);
        if(date < 1 || date > 31) throw new Error(`${ERROR.DATE_RANGE_ERROR}`);
    }
    validateMenuPattern(menu) {
        let pattern =  /^[ㄱ-ㅎ|가-힣]+[-]+\d$/;
        if(pattern.test(menu) === false) throw new Error(`${ERROR.MENU_PATTERN_ERROR}`);
    }
}
export default Validator;