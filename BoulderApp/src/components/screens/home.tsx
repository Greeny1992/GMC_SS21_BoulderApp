import React, { useState } from 'react';
import { View} from 'react-native';
import BoulderList from '../widgets/BoulderList/boulderList';
import { BExtendedButton } from '../widgets/utils/button';
import LayoutStyle from '../../styles/utils/layout';
import BoulderSearch from '../widgets/BoulderList/boulderSearch';
import { getBoulderData } from '../../data/service/BoulderService';

interface HomeProps {
  style?: any;
  navigation: any;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const {navigation } = props;
    const [searchText, setSearchText] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(getBoulderData());
    const [masterDataSource, setMasterDataSource] = useState(filteredDataSource);

    const handleAddBoulder = () => {
        navigation.navigate('AddBoulderScreen', {
        boulderID: -1,
        });
    };
    const handleBoulderSelect = (id:string) => {
        navigation.navigate('DetailBoulderScreen', {
            boulderID:id,
        })
    }
    const handleFilter =()=>{
        console.log("Filter")
    }
    const handleSearchInput = (input:string)=> {
        setSearchText(input)
        searchBoulderList(searchText)
    }
    //Searching for Boulders
    const searchBoulderList: any = (input: string) => {
        if (input) {
            const filteredData = masterDataSource.filter( (item) =>{
                const itemData = item.title? item.title.toUpperCase() : '';
                const textData = input.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(filteredData);
        } else {
            setFilteredDataSource(masterDataSource);
        }
    };
  return (
    <View>
      <View >
        <BoulderSearch searchBoulderList={handleSearchInput} searchText={searchText}/>
        <View style={LayoutStyle.containerRow}>
            <BExtendedButton onPress={handleAddBoulder} title="Add"/>
            <BExtendedButton onPress={handleFilter} title="Filter"/>
        </View> 
        <BoulderList navigation={navigation} searchText={searchText} handleSelectBoulder={handleBoulderSelect} items={filteredDataSource}/>
      </View>
    
    </View>
  );
};

export default Home;
