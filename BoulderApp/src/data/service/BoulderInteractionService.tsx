import { IBoulderInteraction } from "../entities/BoulderInteraction";
import { BOULDER_INTERACTION_DATA } from "../fakeData/BoulderInteraction";
let boulder_interaction_data = BOULDER_INTERACTION_DATA;

const getCurrentBoulderInteraction=(boulder_id:string, user_id:string) : IBoulderInteraction[]=>{
    return boulder_interaction_data.filter(interaction => interaction.boulder_id === boulder_id && interaction.user_id=== user_id )
}
export const storeBoulderInteraction = (interaction:IBoulderInteraction):void=>{
    console.log("STORRrrrrrrrrr_____#############################________________________________")
    console.log(interaction)
    boulder_interaction_data = [...boulder_interaction_data, interaction]
}
export default getCurrentBoulderInteraction;

