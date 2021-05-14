
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
      console.log("connected")
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
export const storeBoulder = (formData:BoulderFormData,userID:string):void=>{
    console.log("store DATA")
    console.log(formData);
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
        //const tempBoulder = getBoulderData().filter(boulder => boulder.id === formData.id)
        // tempBoulder = {
            
        // }
    }
    
}
