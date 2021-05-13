import React, { useState } from 'react';
import { View} from 'react-native';
import BoulderList from '../widgets/BoulderList/boulderList';
import BoulderSearch from '../widgets/BoulderList/boulderSearch';
import { getBoulderData } from '../../data/service/BoulderService';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IBoulder } from '../../data/entities/Boulder';
import BText from "../widgets/utils/text";
import { getData } from "../../data/store/store";
import BBottomSheet from '../widgets/BoulderList/boulderFilter';
import { getAllLocations, getDistinctLocations } from '../../data/service/LocationService';
import { ILocationFilterValues } from '../../data/entities/Location';

interface HomeProps {
  style?: any;
  navigation: any;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const {navigation } = props;
    const [searchText, setSearchText] = useState('');
    const [userId, setUserId] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(getBoulderData());
    const [masterDataSource, setMasterDataSource] = useState(filteredDataSource);
    const [visibleFilter, setVisible] = useState(false);
    const locations :ILocationFilterValues = getDistinctLocations()
  
    getData('user').then(user => {
      setUserId(user.userId);  
    }).catch(err => 
      console.error(err)
    )
    const handleFilter =(value:string,type:string)=>{
      const filteredLocation = getAllLocations().filter( (item) =>{
        switch(type){
          case "country": item.country===value; break;
          case "region" : item.region === value; break;
        }
        });
      const filteredBoulder = masterDataSource.filter( (item) =>{ filteredLocation.findIndex((value, index, array) => {value.id === item.location_id}) !== -1 });
      console.log(filteredBoulder)
      setFilteredDataSource(filteredBoulder);
    }
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
    <View >
      <View >
        <BText>UserId: {userId}</BText>
        <BoulderSearch searchBoulderList={handleSearchInput} navigation={navigation} searchText={searchText} showFilterDialog={setVisible}/>
        <BoulderList navigation={navigation} searchText={searchText} handleSelectBoulder={handleBoulderSelect} locations={locations.region} items={filteredDataSource}/>
        <BBottomSheet visible={visibleFilter} title={"Filter by region"} hide={setVisible} locations={locations.region} handleFilter={handleFilter}/>
      </View>
    </View>
  );
};

export default Home;
