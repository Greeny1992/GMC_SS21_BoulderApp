import React from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
interface BoulderSearchProps {
    style?: any;
    searchBoulderList:Function;
    searchText:string
  
  }
  const BoulderSearch: React.FC<BoulderSearchProps> = (props: BoulderSearchProps) => {

    const {searchBoulderList,searchText} = props;
    return (
            <View style={BoulderListStyle.header}>
              <View style={BoulderListStyle.searchbox}>
                <SearchBar inputContainerStyle={BoulderListStyle.textInputStyle}
                containerStyle={BoulderListStyle.textInputContainerStyle} round searchIcon={{ size: 24 }}
                onChangeText={(text) => searchBoulderList(text)}
                onClear ={() => searchBoulderList('')}
                value={searchText}
                placeholder="Enter a name..."/>
              </View>
            </View>
    )       
  };
  export default BoulderSearch