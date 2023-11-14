import PRICE from "../static/Price.js";

class WeekendMaindishCount{
    maindishCount(maindish) {
        const maindishKeys = Object.keys(maindish);
        let maindishCount = 0;
        maindishKeys.forEach(element => {
            if((element in PRICE.MAIN) === true) maindishCount += maindish[element];
        });
        return maindishCount;
    }
}
export default WeekendMaindishCount