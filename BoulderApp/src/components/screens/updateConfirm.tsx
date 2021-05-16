import React, { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import BText, { BTitle } from '../widgets/utils/text';
import { useRoute } from '@react-navigation/native';
import { getData } from '../../data/store/store';
import { forceUpdateBoulder, synchLocalUpdates } from '../../data/service/BoulderService';
import { IEditBoulder } from '../../data/entities/Boulder';
import ColorTheme from '../../styles/theme/store/ColorMainTheme';
import LayoutStyle from '../../styles/utils/layout';
import BButton from '../widgets/utils/button';


interface SynchScreenProps {
  style?: any;
  navigation: any;
  route:any
}

const SynchScreen: React.FC<SynchScreenProps> = (props: SynchScreenProps) => {
    const route = useRoute();
    const {navigation } = props;
    const [user, setUser] = useState();
    const [updateItems, setUpdateItems] = useState();
    const {synchItems} = route?.params;

    
      console.log("synchItems", synchItems)
    

    useEffect(() => {
      if(!user){
        getData('user').then(user => {
          setUser(user); 
          
          setUpdateItems(synchItems)
        

        }).catch(err => 
          console.error(err)
        )
      }
    }, [user])
    useEffect(() => {
      console.log("updateItems: ", updateItems)
    }, [updateItems])
   

    const handleForceUpdate = (boulder: IEditBoulder)=>{
      console.log("FORCE: ", boulder);
      forceUpdateBoulder(boulder)
    }
 
    const renderItem = (boulder: IEditBoulder) => (
      <Item boulder={boulder} key={boulder.boulderId} forceUpdate={handleForceUpdate}/>
    );
  
  return (
    <View>
      <BTitle label="Synch data" />
      <BText>Items to synchronize: {synchItems?.length}</BText>
      {updateItems?.map((item:IEditBoulder) => renderItem(item))}
       
    </View>
  );
};

interface ItemProps {
  boulder:IEditBoulder,
  forceUpdate:Function
}
const Item: React.FC<ItemProps> = ( props:ItemProps ) => {
  const {boulder,forceUpdate} = props;
  return(
    <View style={styles.item}>
      <View style={[LayoutStyle.containerRow]}>
        <View style={[styles.details]}>
          <BText style={styles.title}>Boulder-ID: {boulder.boulderId}</BText>
          <BText style={styles.title}>Updated title: {boulder.name}</BText>
        </View>
        <View style={[styles.actions]}>
          <BButton onPress={()=> forceUpdate(boulder)}><Text>Force Update</Text></BButton>
        </View>
      </View>
    </View>
  )

}

export default SynchScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor:ColorTheme.primary_light,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
  details:{
    width: "70%"
  },
  actions:{
    width: "30%"
  }
});
