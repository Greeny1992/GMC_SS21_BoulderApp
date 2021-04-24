import React from "react";
import {View,FlatList,} from "react-native";
import { IBoulder } from "../../../data/entities/Boulder";
import BoulderListItem from "./boulderItem";
import BoulderListHeader from "./boulderListHeader";
interface BoulderMetaProps {
  style?: any;
  navigation: any;
  searchText:string;
  handleSelectBoulder:Function;
  items: IBoulder[]

}
const BoulderList: React.FC<BoulderMetaProps> = (props: BoulderMetaProps) => {
  const {handleSelectBoulder, items} = props;

  const renderItem = ({ item }: { item: IBoulder }) => {
    return (
      <BoulderListItem
        item={item}
        onPress={()=>handleSelectBoulder(item.id)}
      />
    );
  };
  return (
    <View >
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={BoulderListHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
  );
  
};

export default BoulderList;
