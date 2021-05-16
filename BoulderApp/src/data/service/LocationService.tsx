import { ILocation, ILocationFilterValues } from "../entities/Location";
import { location } from "../lookupValues/boulderDetailValues";

export const getDistinctLocations=():ILocationFilterValues=>{
    const tempLocation =location().filter(i => i.country !== 'Undefined')
    const countries = [...new Set(tempLocation.map(loc=> loc.country))]
    const region =[...new Set(tempLocation.map(loc=> loc.region))]
    return {countries, region}
}
export const getAllLocations=():ILocation[]=>{
    return location()
}

const getLocation = (id:number):ILocation =>
{
    const location_data = location();
    return location_data.filter((location:ILocation) => location.id ===id)?.[0] ?? location_data[0];
}
export default getLocation