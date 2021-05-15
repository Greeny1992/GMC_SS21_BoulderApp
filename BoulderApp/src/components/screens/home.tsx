import React, { useEffect, useState } from 'react';
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

interface HomeProps {
  style?: any;
  navigation: any;
  route:any
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const route = useRoute();

    const {navigation } = props;
    const [searchText, setSearchText] = useState('');
    const [userId, setUserId] = useState();
    const [filteredDataSource, setFilteredDataSource] = useState<any>([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [visibleFilter, setVisible] = useState(false);
    const locations :ILocationFilterValues = getDistinctLocations()
    const {update} = route?.params;
    console.log(update)
    console.log(route?.params)
    if(update){
      navigation.setParams({update:false})
      
      getBoulderData(userId).then((val: any) => {
        setFilteredDataSource(val);
      }) 
    }
 
    useEffect(() => {
      if(!userId){
        getData('user').then(user => {
          setUserId(user.userId); 
          getBoulderData(user.userId).then((val: any) => {
            setFilteredDataSource(val);
          }) 
        }).catch(err => 
          console.error(err)
        )
      }
    }, [userId])

    useEffect(() => {
      console.log("filteredDataSource")
      if(!masterDataSource){
        console.log(filteredDataSource)
        setMasterDataSource(filteredDataSource)
      }
    }, [filteredDataSource])

    // useEffect(() => {
    //   if(!masterDataSource)
    //     setMasterDataSource(filteredDataSource)
    // }, [masterDataSource])

    const handleFilter =(value:string,type:string)=>{
      const filteredLocation = getAllLocations().filter( (item) =>{
        switch(type){
          case "country": item.country===value; break;
          case "region" : item.region === value; break;
        }
        });
      const filteredBoulder = masterDataSource.filter( (item) =>{ filteredLocation.findIndex((value, index, array) => {value.id === item.location_id}) !== -1 });
    
      setFilteredDataSource(filteredBoulder);
    }
    const handleAddBoulder = () => {
        navigation.navigate('AddBoulderScreen', {
        boulderID: -1,
        });
    };
    const handleBoulderSelect = (boulder:IBoulder) => {
        navigation.navigate('DetailBoulderScreen', {
            boulder:boulder,
        })
    }

    const handleSearchInput = (input:string)=> {
        let inputLength = input? input.length : 0;
        if(inputLength != 0) {
          setSearchText(input);
          searchBoulderList(input);
        }
        else {
          setSearchText('');
          resetBoulderList();
        }
        
    }
    const refresh =()=>{
      getBoulderData(userId).then((val: any) => {
        setFilteredDataSource(val);
      }) 
    }
    //Searching for Boulders
    const searchBoulderList: any = (input: string) => {
        if (input) {
            const filteredData = masterDataSource.filter( (item) =>{
                const itemData = item.title? item.title.toUpperCase() : '';
                const textData = input.toUpperCase();
                console.log(textData);
                return itemData.indexOf(textData,0) > -1;
            });
            setFilteredDataSource(filteredData);
        }
    };

    const resetBoulderList: any = () => {
      setFilteredDataSource(masterDataSource);
    };

  return (
    <View>
      <View >
        {<BText>UserId: {userId}</BText> }
        <BoulderSearch searchBoulderList={handleSearchInput} navigation={navigation} searchText={searchText} showFilterDialog={setVisible}/>
        <BoulderList navigation={navigation} searchText={searchText} handleSelectBoulder={handleBoulderSelect} locations={locations.region} items={filteredDataSource}/>
        <BBottomSheet  visible={visibleFilter} title={"Filter by region"} hide={setVisible} locations={locations.region} handleFilter={handleFilter}/>
      </View>
    </View>
  );
};

export default Home;
