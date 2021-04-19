import { BoulderInteraction, IBoulderInteraction } from "../entities/BoulderInteraction";
import { BOULDER_INTERACTION_DATA } from "../fakeData/BoulderInteraction";
let boulder_interaction_data = BOULDER_INTERACTION_DATA;

const getCurrentBoulderInteraction=(boulder_id:string, user_id:string) : BoulderInteraction[]=>{
    return boulder_interaction_data.filter(interaction => interaction.boulder_id === boulder_id && interaction.user_id=== user_id )
}
export const storeBoulderInteraction = (interaction:BoulderInteraction):BoulderInteraction[]=>{
    const actionToUptade = findBoulderInteraction(interaction) ?? interaction
    if(actionToUptade.isEqual(interaction)){
        boulder_interaction_data = [...boulder_interaction_data, interaction]
    }
    return getCurrentBoulderInteraction(interaction.boulder_id,interaction.user_id)
}
const findBoulderInteraction = (interaction : BoulderInteraction) : BoulderInteraction => {
    boulder_interaction_data.find((action, index, array) => { 
        if(action.isEqual(interaction)){
            return action
        } }
        )
    return interaction
}
export default getCurrentBoulderInteraction;

