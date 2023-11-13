class TotalPriceAfterDiscount{
    totalPriceAfterDiscount(total,dday,weekday,weekend,special) {
        const priceAfterDiscount = total - (Number(Object.values(dday)) + Number(Object.values(weekday)) + Number(Object.values(weekend)) + Number(Object.values(special)));
        return priceAfterDiscount;
    }
}
export default TotalPriceAfterDiscount; 