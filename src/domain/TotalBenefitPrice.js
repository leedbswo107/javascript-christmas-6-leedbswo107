import PRICE from "../static/Price.js";

class TotalBenefitPrice{
    totalBenefitPrice(dday,weekday,weekend,special,giveAway) {
        let giveAwayPrice = Number(PRICE.DRINKS.샴페인);
        let totalBenefit = Number(Object.values(dday)) + Number(Object.values(weekday)) + Number(Object.values(weekend)) + Number(Object.values(special));
        if(Number(Object.values(giveAway)) === 1) {
            totalBenefit += giveAwayPrice
            return totalBenefit;
        };
        return totalBenefit;
    }
}
export default TotalBenefitPrice;