import { ILocation, ILocationFilterValues } from "../entities/Location";
import { LOCATION_DATA } from "../fakeData/Location";

export const getDistinctLocations=():ILocationFilterValues=>{
    const tempLocation =LOCATION_DATA.filter(i => i.country !== 'Undefined')
    const countries = [...new Set(tempLocation.map(loc=> loc.country))]
    const region =[...new Set(tempLocation.map(loc=> loc.region))]
    const cities = [...new Set(tempLocation.map(loc=> loc.city))]
    return {countries, region,cities}
}
export const getAllLocations=():ILocation[]=>{
    return LOCATION_DATA
}

const getLocation = (id:string):ILocation =>
{
    const location_data = LOCATION_DATA;
    return location_data.filter((location:ILocation) => location.id ===id)?.[0] ?? location_data[0];
}
export default getLocation