import { IBoulderInteraction } from "../entities/BoulderInteraction";
import { BOULDER_INTERACTION_DATA } from "../fakeData/BoulderInteraction";

const getCurrentBoulderInteraction=(boulder_id:string, user_id:string) : IBoulderInteraction[]=>{
    const boulder_interaction_data = BOULDER_INTERACTION_DATA;
    return boulder_interaction_data.filter(interaction => interaction.boulder_id === boulder_id && interaction.user_id=== user_id )
}
export default getCurrentBoulderInteraction;

