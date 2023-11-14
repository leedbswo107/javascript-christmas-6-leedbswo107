const NUMBER = {
    eventStart : 1,
    eventEnd : 31,
    eventTarget : 10000,
    샴페인 : 1,
    maxAmount : 20,
    
    weekday : [3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28,31],
    weekend : [1,2,8,9,15,16,22,23,29,30],
    special : [3,10,17,24,25,31],

    weekdayDiscount : 2023,
    weekendDiscount : 2023,
    specialDiscount : 1000,
    GIVEAWAYEVENT : 120000,

    CHRISTMASDAYEVENT : {
        endDate : 25,
        discount : 1000,
        dayBydayPlus : 100,    
    },

    EVENTBADGE : {
        star : 5000,
        tree : 10000,
        santa : 20000,
    }
    
}
export default NUMBER;