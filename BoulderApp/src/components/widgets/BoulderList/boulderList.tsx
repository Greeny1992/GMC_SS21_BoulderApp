import React from "react";
import {View,FlatList,SectionList} from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { IBoulder } from "../../../data/entities/Boulder";
import BoulderListItem from "./boulderItem";
import BoulderSectionListHeader from "./boulderSectionListHeader";
import {LOCATION_DATA} from "../../../data/fakeData/Location";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
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
    for(let locationItem of LOCATION_DATA) {
      for(let boulderItem of items) {
        if (boulderItem.location_id == locationItem.id)
        {
          retArray.push({
            title: locationItem.region,
            data: [...items.filter(item => item.location_id == locationItem.id) ]
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
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => <BoulderListItem item={item} onPress={()=>handleSelectBoulder(item.id)}/>}
        renderSectionHeader={({ section: { title } }) => <BoulderSectionListHeader title={title}/>}
      />
    </View>
  );
  
};

export default BoulderList;
