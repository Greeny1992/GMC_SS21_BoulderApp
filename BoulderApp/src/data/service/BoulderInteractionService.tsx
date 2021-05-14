import { BoulderInteractionApi } from "../../../api";
import { Guid } from "../../utils/CreateGuid";
import { BoulderInteraction, BoulderInteractionFormData } from "../entities/BoulderInteraction";
import { BOULDER_INTERACTION_DATA } from "../fakeData/BoulderInteraction";
let boulder_interaction_data = BOULDER_INTERACTION_DATA;

const getCurrentBoulderInteraction=(boulder_id:any) : BoulderInteraction[]=>{
    const api = new BoulderInteractionApi();
    const test = api.getBoulderInteractions(boulder_id).then(result => {
        return result.json().then(json => {
            const mapedJson = json.map(
                (boulder: any): BoulderInteraction => {
                  return new BoulderInteraction(boulder.ID, boulder.userName, boulder.titel, boulder.status, boulder.comment, boulder.createDate, boulder.ID );
                })
            return mapedJson;
        })
    })
    return boulder_interaction_data.filter(interaction => interaction.boulder_id === boulder_id  )
}
export const storeBoulderInteraction = (formData:BoulderInteractionFormData, boulderID:string,userID:string):void=>{
    let tempBoulder:BoulderInteraction;
    if(formData.id ==='' ){
        tempBoulder = new BoulderInteraction(boulderID,userID,formData.title,formData.status,formData.comment) 
        tempBoulder.id = Guid.newGuid()
    } else{
        const temp =boulder_interaction_data.filter(action=> action.id === formData.id)
        if(temp){
            tempBoulder =  temp[0] 
            tempBoulder.title=formData.title;
            tempBoulder.comment=formData.comment
            tempBoulder.status=formData.status;
        } else{
            tempBoulder =  new BoulderInteraction(boulderID,userID,formData.title,formData.status,formData.comment)
        }
    }
 
    if(tempBoulder){
        const index = boulder_interaction_data.findIndex((value) => {
            return value.id === tempBoulder.id
        })

        if(index && index!==-1){
            boulder_interaction_data[index] = tempBoulder
        } else{
            boulder_interaction_data = [...boulder_interaction_data, tempBoulder]
        }
    }
}
export default getCurrentBoulderInteraction;

