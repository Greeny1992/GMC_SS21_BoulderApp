import React from "react";
import {View,FlatList,SectionList} from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { IBoulder } from "../../../data/entities/Boulder";
import BoulderListItem from "./boulderItem";
import BoulderSectionListHeader from "./boulderSectionListHeader";
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
   * Temporär hardcoded
   * @returns Array for Section list
   */
  const getSectionLocations = () => {
    return [
      {
          title: "Austria",
          data: [ ...items.filter(item => item.location_id == '1') ]
      },
      {
          title: "Germany",
          data: [ ...items.filter(item => item.location_id == '2') ]
      },
    ]
  }
  
  return (
    <SafeAreaView>
      <SectionList
        sections={getSectionLocations()}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => <BoulderListItem item={item} onPress={()=>handleSelectBoulder(item.id)}/>}
        renderSectionHeader={({ section: { title } }) => <BoulderSectionListHeader title={title}/>}
      />
    </SafeAreaView>
  );
  
};

export default BoulderList;
