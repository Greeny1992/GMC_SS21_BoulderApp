import {BoulderApi} from '../../../api';
import {IBoulder} from '../entities/Boulder';
import {BOULDER_DATA} from '../fakeData/Boulder';
import {getData, storeData} from '../store/store';

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
