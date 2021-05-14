
// import { BOULDER_DATA } from "../fakeData/Boulder";

// export const toggleLike =(boulder: IBoulder):IBoulder =>{
    //     const tempBoulder = boulder;
    //     tempBoulder.like =!boulder.like
    //     return tempBoulder
    //   }
    // export const getBoulderData = ():IBoulder[] =>{
        //     return BOULDER_DATA
        // }
        // export const getBoulderDetails =(id:string):IBoulder | undefined=>{
            //     return getBoulderData().find(boulder => boulder.id === id)
            // }
            
            
            
import { Guid } from "../../utils/CreateGuid";
import {BoulderApi} from '../../../api';
import {BOULDER_DATA} from '../fakeData/Boulder';
import {getData, storeData} from '../store/store';
import { BoulderFormData, IBoulder } from "../entities/Boulder";

export const toggleLike = (boulder: IBoulder): IBoulder => {
  const tempBoulder = boulder;
  tempBoulder.like = !boulder.like;
  return tempBoulder;
};
export const getBoulderData = async (userId?: number) => {
  let test;
  getData("connected").then(console.log)
    const api = new BoulderApi();
    test = await api.getBoulderList(userId).then(res => {
      return res.json().then(json => {
        const mapedJson = json.map(
          (boulder: any): IBoulder => {
            return {
              id: boulder.boulderId,
              title: boulder.name,
              color: boulder.colour,
              difficulty: boulder.difficulty,
              img: boulder.photo,
              location_id: boulder.locationId,
              created: boulder.lastChangeTimestamp,
              creator_id: boulder.lastChangeUserName,
              like: boulder.isLikeAssigned,
            };
          },
        );
        storeData('BoulderList', mapedJson);
        return mapedJson;
      });
    });
    test = await getData('BoulderList').then(boulder => {return boulder});

  return test;
};
export const getBoulderDetails = (id: string) => {
  return getData('BoulderList').then(res => {return res.find((boulder: any) => boulder.id === id)});
};
export const storeBoulder = (formData:BoulderFormData,userID:string,boulderID?:number):void=>{
    const api = new BoulderApi();
  
    if(boulderID){
      console.log("UPDATE "+boulderID)
      const boulderData = {
        userId:   Number(userID),
        name:         formData.title,
        colour:       formData.color,
        difficulty:   formData.difficulty,
        locationId:  Number(formData.location_id)
      };
      api.updateBoulder(boulderData,boulderID)
    }else{
      const boulderData = {
        creatorId:   Number(userID),
        name:         formData.title,
        colour:       formData.color,
        difficulty:   formData.difficulty,
        locationId:  Number(formData.location_id)
      };
      api.createBoulder(boulderData)
    }
        
    
}
