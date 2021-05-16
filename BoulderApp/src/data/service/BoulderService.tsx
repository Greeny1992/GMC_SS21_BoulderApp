import {BoulderApi} from '../../../api';
import {clearData, getData, storeData} from '../store/store';
import {BoulderFormData, IBoulder, IEditBoulder} from '../entities/Boulder';

export const toggleLike = (boulder: IBoulder): IBoulder => {
  const tempBoulder = boulder;
  tempBoulder.like = !boulder.like;
  return tempBoulder;
};
export const getBoulderData = async (userId: number) => {
  let boulderData;
  const connected = getData('connected');
  if (connected) {
    console.log('ONLINE');

    const api = new BoulderApi();
    boulderData = await api.getBoulderList(userId).then(res => {
      return res.json().then(json => {
        const mapedJson = json.map(
          (boulder: any): IBoulder => {
            return {
              id: boulder.boulderId,
              title: boulder.name,
              color: boulder.colour,
              difficulty: boulder.difficulty,
              location_id: boulder.locationId,
              lastChangeTimestamp: boulder.lastChangeTimestamp,
              lastEditor: boulder.lastChangeUserName,
              like: boulder.isLikeAssigned,
            };
          },
        );
        storeData('BoulderList', mapedJson);
        return mapedJson;
      });
    });
    boulderData = await getData('BoulderList').then(boulder => {
      return boulder;
    });
    storeData('BOULDER_DATA', boulderData);
  } else {
    console.log('OFFLINE');
    boulderData = await getData('BOULDER_DATA');
  }

  return boulderData;
};

export const localBoulderToSynch= async ()=>{
  const dataToSynch = await getData('BOULDER_DATA_TO_UPDATE')
  return dataToSynch 
}
export const getBoulderDetails = (id: string) => {
  return getData('BoulderList').then(res => {
    return res.find((boulder: any) => boulder.id === id);
  });
};

export const synchLocalUpdates = async (userID:number)=>{
  const api = new BoulderApi();
  const dataToUpdate = await getData('BOULDER_DATA_TO_UPDATE')
  console.log('dataToUpdate',dataToUpdate)
  if(dataToUpdate?.length){
     dataToUpdate.map((item:IEditBoulder) => api.updateBoulder(item)).then((data:any)=>{
       console.log("map update", data)

     })
  }else{
    api.updateBoulder(dataToUpdate)
  }
  return dataToUpdate
}

export const storeBoulder = async (
  formData: BoulderFormData,
  userID: string,
  boulderID?: number,
  lastChangeTimestamp?:Date,
  lastEditor?:string
) => {
  const connected = getData('connected');
  const api = new BoulderApi();
  console.log('storeBoulders');
  console.log(formData, userID,lastChangeTimestamp, lastEditor);
  // EDIT 
  if (boulderID) {
    const boulderData = {
      userId: Number(userID),
      name: formData.title,
      colour: formData.color,
      difficulty: formData.difficulty,
      locationId: formData.location_id,
      lastChangeTimestamp: lastChangeTimestamp,
      lastEditor:lastEditor,
      force: false,
      boulderId: boulderID,
    };
    //console.log(boulderData, boulderID);
    if (false) {
      // api.updateBoulder(boulderData, boulderID);
      api.updateBoulder(boulderData);
    } else {
      let BOULDER_DATA_TO_UPDATE = getData('BOULDER_DATA_TO_UPDATE',).then((data: any)=>
        {
          // console.log("data");
          // console.log(data);
          const boulderToUpdateList = data;
          // console.log("boulderToUpdateList")
          // console.log(boulderToUpdateList)
          updateLocalBoulder(boulderData);
          if (boulderToUpdateList) {
            let updateArray = []
            if (boulderToUpdateList?.length) {
              let updated= false;
              for( let i=0; i< boulderToUpdateList.length;i++){
                if (
                  boulderToUpdateList[i] &&
                  boulderData &&
                  boulderToUpdateList[i]?.boulderId === boulderData?.boulderId
                ) {
                  updated=true;
                  boulderToUpdateList[i].name = boulderData.name;
                  boulderToUpdateList[i].difficulty = boulderData.difficulty;
                  boulderToUpdateList[i].colour = boulderData.colour;
                  boulderToUpdateList[i].locationId = boulderData.locationId;
                }
                
              }
              updateArray = [...boulderToUpdateList];
              if(!updated){
                updateArray.push(boulderData);
              }
            }else{
              updateArray = [boulderToUpdateList];
            }
            
            storeData('BOULDER_DATA_TO_UPDATE', updateArray);
          } else {
            storeData('BOULDER_DATA_TO_UPDATE', [boulderData]);
          }
          getData('BOULDER_DATA_TO_UPDATE').then(udata => console.log('DATA-u', udata))
        }
    
      )
    }
  //NEW
  } else {
    const boulderData = {
      creatorId: Number(userID),
      name: formData.title,
      colour: formData.color,
      difficulty: formData.difficulty,
      locationId: Number(formData.location_id),
    };
    api.createBoulder(boulderData);
  }
};
const updateLocalBoulder = (boulder: IEditBoulder) => {
  getData('BOULDER_DATA')
    .then((data:IBoulder[]) => {
      if(data?.length){
        let d = data.map((localBoulder: IBoulder) => {
          if (
            localBoulder &&
            boulder &&
            localBoulder?.id === boulder?.boulderId
          ) {
            localBoulder.title = boulder.name;
            localBoulder.difficulty = boulder.difficulty;
            localBoulder.color = boulder.colour;
            localBoulder.location_id = boulder.locationId;
          }
          return localBoulder
        });
        return d;

      }else{
        return boulder
      }
    })
    .then(updatedData => {
      // console.log("updateLocalBoulder UPDATED" , updatedData)
      storeData('BOULDER_DATA', updatedData);
    });
};
export const updateLike = (
  boulderId: number,
  userId: number,
  like: boolean,
) => {
  const api = new BoulderApi();
  if (like) {
    api.disLikeBoulder(boulderId, userId);
  } else {
    api.likeBoulder(boulderId, userId);
  }
};
