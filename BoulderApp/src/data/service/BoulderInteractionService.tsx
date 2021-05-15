import { BoulderInteractionApi } from "../../../api";
import { BoulderInteraction, BoulderInteractionFormData } from "../entities/BoulderInteraction";

const getCurrentBoulderInteraction= async (boulder_id:any)=>{
    const api = new BoulderInteractionApi();
    const test = api.getBoulderInteractions(boulder_id).then(result => {
        return result.json().then(json => {
            const mapedJson = json.map(
                (action: any): BoulderInteraction => {
                  return new BoulderInteraction(boulder_id, action.userId, action.userName, action.title, action.status, action.comment, action.createDate ,action.ID);
                })
      
            return mapedJson;
        })
    })
    return test
}
export const storeBoulderInteraction = (formData:BoulderInteractionFormData, boulderID:string,userID:string):void=>{
    
    const api = new BoulderInteractionApi();
    if(formData.id ==='' ){
        api.createAction({
            boulderId:Number(boulderID), 
            userId: Number(userID),
            title:formData.title, 
            comment:formData.comment, 
            status:formData.status
        })
    }else{
        api.updateAction({
            boulderId:Number(boulderID), 
            userId: Number(userID),
            title:formData.title, 
            comment:formData.comment, 
            status:formData.status,
            interactionId:Number(formData.id)
        })

    }

}
export default getCurrentBoulderInteraction;

