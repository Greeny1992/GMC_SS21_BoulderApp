import React, { useState } from 'react';
import { View} from 'react-native';
import BoulderList from '../widgets/BoulderList/boulderList';
import BoulderSearch from '../widgets/BoulderList/boulderSearch';
import { getBoulderData } from '../../data/service/BoulderService';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IBoulder } from '../../data/entities/Boulder';
import BText from "../widgets/utils/text";
import { getData } from "../../data/store/store";

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
    
    getData('user').then(user => {
      setUserId(user.userId);  
    })
    
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
        <BoulderSearch searchBoulderList={handleSearchInput} navigation={navigation} searchText={searchText}/>
        <BoulderList navigation={navigation} searchText={searchText} handleSelectBoulder={handleBoulderSelect} items={filteredDataSource}/>
      </View>
    </View>
  );
};

export default Home;
