import React, { useEffect, useState } from 'react';
import styles from '../../styles/home';

import { View } from 'react-native';
import BoulderList from '../widgets/BoulderList/boulderList';
import BoulderSearch from '../widgets/BoulderList/boulderSearch';
import { getBoulderData } from '../../data/service/BoulderService';
import { IBoulder } from '../../data/entities/Boulder';
import BText from "../widgets/utils/text";
import { getData } from "../../data/store/store";
import BBottomSheet from '../widgets/BoulderList/boulderFilter';
import { getAllLocations, getDistinctLocations } from '../../data/service/LocationService';
import { ILocationFilterValues } from '../../data/entities/Location';
import { useRoute } from '@react-navigation/native';
import BIcon from '../widgets/utils/icon';
import LayoutStyle from '../../styles/utils/layout';

import ColorTheme from '../../styles/theme/store/ColorMainTheme';

interface HomeProps {
  style?: any;
  navigation: any;
  route:any
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const route = useRoute();
    const {navigation } = props;
    const [searchText, setSearchText] = useState('');
    const [user, setUser] = useState();
    const [filteredDataSource, setFilteredDataSource] = useState<any>([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [visibleFilter, setVisible] = useState(false);
    const locations :ILocationFilterValues = getDistinctLocations()
    const [showReset, setShowReset] = useState(false);
    const {update} = route?.params;

    if(update){
      navigation.setParams({update:false})
      getBoulderData(user?.userId).then((val: any) => {
        setFilteredDataSource(val);
      }) 
    }
 
    useEffect(() => {
      if(!user){
        getData('user').then(user => {
          setUser(user); 
          getBoulderData(user.userId).then((val: any) => {
            setMasterDataSource(val)
            setFilteredDataSource(val);
          }) 
        }).catch(err => 
          console.error(err)
        )
      }
    }, [user])
   
    const handleFilter =(value:string)=>{
    
      const filteredLocation = getAllLocations().filter( (item) => item.region === value);
      if(filteredLocation){
        setShowReset(true)
        const filteredBoulder = masterDataSource.filter( (item) =>filteredLocation[0].id === item?.location_id);
        setFilteredDataSource(filteredBoulder);

      }
    
    }
  
    const handleBoulderSelect = (boulder:IBoulder) => {
        navigation.navigate('DetailBoulderScreen', {
            boulder:boulder,
        })
    }

    const handleSearchInput = (input:string)=> {
        let inputLength = input? input.length : 0;
        if(inputLength >= 0) {
          setSearchText(input);
          searchBoulderList(input);
        }
        else {
          setSearchText('');
          refresh();
        }
        
    }
    const refresh =()=>{
      setShowReset(false)
      setSearchText('')
      setFilteredDataSource(masterDataSource)
     
    }
    const searchBoulderList: any = (input: string) => {
        if (input) {
          setShowReset(true)
            const filteredData = masterDataSource.filter( (item) =>{
                const itemData = item.title? item.title.toUpperCase() : '';
                const textData = input.toUpperCase();
                return itemData.indexOf(textData,0) > -1;
            });
            setFilteredDataSource(filteredData);
        }
    };


  return (
    <View>
      <View >
        <View style={[LayoutStyle.containerRow, styles.userRow]}>
          <BText style={[styles.userDetail]}>{user?.userName}</BText>
          <BIcon style={[styles.userIcon]} icon="account-circle" size={20} color={ColorTheme.primary}/> 
        </View>
        <BoulderSearch searchBoulderList={handleSearchInput} navigation={navigation} searchText={searchText} showFilterDialog={setVisible} clearSearch={refresh} showReset={showReset}/>
        <BoulderList navigation={navigation} searchText={searchText} handleSelectBoulder={handleBoulderSelect} locations={locations.region} items={filteredDataSource}/>
        <BBottomSheet  visible={visibleFilter} title={"Filter by region"} hide={setVisible} locations={locations.region} handleFilter={handleFilter}/>
      </View>
    </View>
  );
};

export default Home;
