import React from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
import { BExtendedButton } from '../../widgets/utils/button';
import LayoutStyle from '../../../styles/utils/layout';

interface BoulderSearchProps {
    style?: any;
    searchBoulderList:Function;
    searchText:string
    navigation: any
  
  }
  const BoulderSearch: React.FC<BoulderSearchProps> = (props: BoulderSearchProps) => {

    const {searchBoulderList,searchText, navigation} = props;


    const handleFilter =()=>{
      console.log("Filter")
  }

  const handleAddBoulder = () => {
    navigation.navigate('AddBoulderScreen', {
    boulderID: -1,
    });
  }



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
              <View style={BoulderListStyle.btnbox}>
                <BExtendedButton onPress={handleAddBoulder} title="Add"/>
              </View>  
            </View>
    )       
  };
  export default BoulderSearch;