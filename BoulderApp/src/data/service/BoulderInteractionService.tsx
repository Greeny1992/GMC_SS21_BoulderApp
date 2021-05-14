import { BoulderInteractionApi } from "../../../api";
import { Guid } from "../../utils/CreateGuid";
import { BoulderInteraction, BoulderInteractionFormData } from "../entities/BoulderInteraction";
import { BOULDER_INTERACTION_DATA } from "../fakeData/BoulderInteraction";
let boulder_interaction_data = BOULDER_INTERACTION_DATA;

const getCurrentBoulderInteraction= async (boulder_id:any)=>{
    const api = new BoulderInteractionApi();
    const test = api.getBoulderInteractions(boulder_id).then(result => {
        return result.json().then(json => {
            const mapedJson = json.map(
                (action: any): BoulderInteraction => {
                    console.log("action")
                    console.log(action)
                  return new BoulderInteraction(boulder_id, action.userId, action.userName, action.title, action.status, action.comment, action.createDate ,action.ID);
                })
            console.log("HASDJFJLSKAFJSJAFJSAJFJLSADJFJASJFSAJLJLFLJK")
            console.log(mapedJson)
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
    
    /* let tempBoulder:BoulderInteraction;
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
    }*/
}
export default getCurrentBoulderInteraction;

