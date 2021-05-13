import { Guid } from "../../utils/CreateGuid";
import { BoulderFormData, IBoulder } from "../entities/Boulder";
import { BOULDER_DATA } from "../fakeData/Boulder";

export const toggleLike =(boulder: IBoulder):IBoulder =>{
    const tempBoulder = boulder;
    tempBoulder.like =!boulder.like
    return tempBoulder
  }
export const getBoulderData = ():IBoulder[] =>{
    return BOULDER_DATA
}
export const getBoulderDetails =(id:string):IBoulder | undefined=>{
    return getBoulderData().find(boulder => boulder.id === id)
}

export const storeBoulderInteraction = (formData:BoulderFormData, boulderID:string,userID:string):void=>{
    if(formData.id ===''){
        BOULDER_DATA.push(
                {
                    id: String(new Guid()),
                    title: formData.title,
                    color: formData.color,
                    difficulty: formData.difficulty,
                    img:formData.img,
                    created: new Date(),
                    location_id:formData.location_id,
                    creator_id:userID,
                    like:true
                  }
    
        )
    }else{
        const tempBoulder = getBoulderData().filter(boulder => boulder.id === formData.id)
        // tempBoulder = {
            
        // }
    }
    
}