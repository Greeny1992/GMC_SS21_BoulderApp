import { ILocation } from "../entities/Location";
import { LOCATION_DATA } from "../fakeData/Location";

const getLocation = (id:string):ILocation =>
{
    const location_data = LOCATION_DATA;
    return location_data.filter((location:ILocation) => location.id ===id)?.[0] ?? location_data[0];
}
export default getLocation