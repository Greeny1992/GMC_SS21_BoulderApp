import React from "react";
import {View,FlatList,SectionList} from "react-native";
import { IBoulder } from "../../../data/entities/Boulder";
import BoulderListItem from "./boulderItem";
import BoulderSectionListHeader from "./boulderSectionListHeader";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
import { location } from "../../../data/lookupValues/boulderDetailValues";
interface BoulderMetaProps {
  style?: any;
  navigation: any;
  searchText:string;
  handleSelectBoulder:Function;
  locations:string[];
  items:IBoulder[];

}
const BoulderList: React.FC<BoulderMetaProps> = (props: BoulderMetaProps) => {
  const {handleSelectBoulder, items} = props;
  // let LOCATION_DATA = location();

  /**
   * Structure
   * {
   *   title: "Austria",
   *   data: [ ...items.filter(item => item.location_id == '1') ]
   * }
   * @returns Array for Section list
   */
  const getSectionLocations = () => {
    let retArray = [];

    for(let locationItem of location()) {
      for(let boulderItem of items) {
    
        if (boulderItem.location_id === locationItem.id)
        {
       
          retArray.push({
            title: locationItem.region,
            data: [...items.filter(item => item.location_id === locationItem.id) ]
          })
          break;
        }
      }
    }
    
    return retArray;
  }
  
  return (
    <View style={BoulderListStyle.sectionLi}>
      <SectionList
        sections={getSectionLocations()}
        renderItem={({ item }) => <BoulderListItem item={item} onPress={()=>handleSelectBoulder(item)}/>}
        renderSectionHeader={({ section: { title } }) => <BoulderSectionListHeader title={title}/>}
      />
    </View>
  );
  
};

export default BoulderList;
