import { IBoulder } from "../entities/Boulder";
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