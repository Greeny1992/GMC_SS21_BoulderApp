import React from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import BoulderListStyle from '../../../styles/BoulderList/boulderList';
import LayoutStyle from '../../../styles/utils/layout';
import BIcon from '../utils/icon';

interface BoulderSearchProps {
  style?: any;
  searchBoulderList: Function;
  searchText: string;
  navigation: any;
  showFilterDialog: Function;
  clearSearch: Function;
  showReset: boolean;
}
const BoulderSearch: React.FC<BoulderSearchProps> = (
  props: BoulderSearchProps,
) => {
  const {
    searchBoulderList,
    searchText,
    navigation,
    showFilterDialog,
    clearSearch,
    showReset,
  } = props;

  const handleFilter = () => {
    showFilterDialog(true);
  };

  const handleAddBoulder = () => {
    navigation.navigate('AddBoulderScreen', {
      boulder: undefined,
    });
  };

  return (
    <View style={BoulderListStyle.headerSearch}>
      <View style={BoulderListStyle.searchbox}>
        <SearchBar
          inputContainerStyle={BoulderListStyle.textInputStyle}
          containerStyle={BoulderListStyle.textInputContainerStyle}
          round
          searchIcon={{size: 30}}
          onChangeText={text => searchBoulderList(text)}
          onClear={() => {searchBoulderList('');clearSearch()}}
          value={searchText}
          placeholder="Search for boulder"
        />
      </View>
      <View
        style={[
          BoulderListStyle.btnbox,
          LayoutStyle.containerRow,
          {alignItems: 'center'},
        ]}>
        {showReset && showReset === true ? (
          <BIcon
            icon="clear"
            style={[BoulderListStyle.icon]}
            onPress={clearSearch}
          />
        ) : (
          <></>
        )}
        <BIcon
          icon="filter-alt"
          style={[BoulderListStyle.icon]}
          onPress={handleFilter}
        />
        <BIcon
          icon="add"
          style={[BoulderListStyle.icon]}
          onPress={handleAddBoulder}
        />
      </View>
    </View>
  );
};
export default BoulderSearch;
