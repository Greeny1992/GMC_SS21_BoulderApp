import React, { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import BText, { BTitle } from '../widgets/utils/text';
import { useRoute } from '@react-navigation/native';
import { getData } from '../../data/store/store';
import { forceUpdateBoulder, handleRemoveLocalUpdate, localBoulderToSynch, synchLocalUpdates } from '../../data/service/BoulderService';
import { IEditBoulder } from '../../data/entities/Boulder';
import ColorTheme from '../../styles/theme/store/ColorMainTheme';
import LayoutStyle from '../../styles/utils/layout';
import BButton from '../widgets/utils/button';
import { set } from 'react-native-reanimated';


interface SynchScreenProps {
  style?: any;
  navigation: any;
  route:any
}

const SynchScreen: React.FC<SynchScreenProps> = (props: SynchScreenProps) => {
    const route = useRoute();
    const {navigation } = props;
    const [user, setUser] = useState();
    const [updateItems, setUpdateItems] = useState<IEditBoulder[]>();

    useEffect(() => {
      localBoulderToSynch().then(
        data=>{
          // console.log("localBoulderToSynch -DATA ", data)
          if(data !== undefined && data !== null && data.length>0) {
            setUpdateItems(data)
          }else{
            navigation.navigate('HomeScreen')
          }
        }
      )
    }, [updateItems])


    useEffect(() => {
      if(!user){
        getData('user').then(user => {
          setUser(user); 
        }).catch(err => 
          console.error(err)
        )
      }
    }, [user])

    const handleForceUpdate =  async(boulder: IEditBoulder)=>{
      // console.log("FORCE: ", boulder);
   
      const result = await forceUpdateBoulder(boulder)
      setUpdateItems(undefined)
    }
    const handleDiscardChanges = async(boulder:IEditBoulder)=>{
      const result = await handleRemoveLocalUpdate(boulder)
      setUpdateItems(undefined)
    }
 
    const renderItem = (boulder: IEditBoulder) => {
      // console.log("renderItem: ", renderItem)
      return (
        <Item boulder={boulder} key={boulder.boulderId} forceUpdate={handleForceUpdate} discardChanges={handleDiscardChanges}/>

      )

    }
  
  
  return (
    <View>
      <BTitle label="Synch data" />
      <BText>Items to synchronize: {updateItems?.length}</BText>
      
      {updateItems && updateItems.length>0  && updateItems?.map((item:IEditBoulder) => renderItem(item))}
       
    </View>
  );
};

interface ItemProps {
  boulder:IEditBoulder,
  forceUpdate:Function,
  discardChanges:Function
}
const Item: React.FC<ItemProps> = ( props:ItemProps ) => {
  const {boulder,forceUpdate,discardChanges} = props;
  return(
    <View style={styles.item}>
      <View style={[LayoutStyle.containerRow]}>
        <View style={[styles.details]}>
          <BText style={styles.title}>Boulder-ID: {boulder.boulderId}</BText>
          <BText style={styles.title}>Updated title: {boulder.name}</BText>
        </View>
        <View style={[styles.actions]}>
          <BButton style={[styles.action_force]} onPress={()=> forceUpdate(boulder)}><Text>Force Update</Text></BButton>
          <BButton style={[styles.action_discard]} onPress={()=> discardChanges(boulder)}><Text>Discard changes</Text></BButton>
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
  },
  action_force:{
    backgroundColor: 'red'
  },
  action_discard:{
    backgroundColor: 'yellow'
  }
});
