import React from "react";
import { View } from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
import { BExtendedButton } from '../../widgets/utils/button';
import LayoutStyle from '../../../styles/utils/layout';
import BIcon from "../utils/icon";

interface BoulderSearchProps {
    style?: any;
    searchBoulderList:Function;
    searchText:string;
    navigation: any;
    showFilterDialog: Function;
  }
  const BoulderSearch: React.FC<BoulderSearchProps> = (props: BoulderSearchProps) => {

    const {searchBoulderList,searchText, navigation,showFilterDialog} = props;


    const handleFilter =()=>{
      showFilterDialog(true)  }

  const handleAddBoulder = () => {
    navigation.navigate('AddBoulderScreen', {
      boulder:undefined,
  });
  }


    return (
            <View style={BoulderListStyle.headerSearch}>
              <View style={BoulderListStyle.searchbox}>
                <SearchBar inputContainerStyle={BoulderListStyle.textInputStyle}
                containerStyle={BoulderListStyle.textInputContainerStyle} round searchIcon={{ size: 24 }}
                onChangeText={(text) => searchBoulderList(text)}
                onClear ={() => searchBoulderList('')}
                value={searchText}
                placeholder="Enter a name..."/>
              </View>
              <View style={[BoulderListStyle.btnbox, LayoutStyle.containerRow ,{alignItems:'center'}]}>
                <BIcon icon="filter-alt" onPress={handleFilter}/>
                <BIcon icon="add" onPress={handleAddBoulder}/>
              </View>  
            </View>
    )       
  };
  export default BoulderSearch;