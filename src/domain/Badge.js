import NUMBER from "../static/Number.js";
import { BADGE } from "../static/Message.js";

class Badge{
    badge(price) {
        if(price >= NUMBER.EVENTBADGE.star && price < NUMBER.EVENTBADGE.tree) return BADGE.star;
        else if (price >= NUMBER.EVENTBADGE.tree && price < NUMBER.EVENTBADGE.santa) return BADGE.tree;
        else if (price >= NUMBER.EVENTBADGE.santa) return BADGE.santa;
        return 0;
    }
}
export default Badge;