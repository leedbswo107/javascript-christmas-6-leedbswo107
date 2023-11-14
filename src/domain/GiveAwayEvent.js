import NUMBER from "../static/Number.js";

class GiveAwayEvent {
    giveAway(total){
        let giveAwayChampagne = new Object();
        if(total >= NUMBER.GIVEAWAYEVENT) {
            giveAwayChampagne.샴페인 = 1;
            return giveAwayChampagne; 
        } 
        return 0;
    }
}
export default GiveAwayEvent;