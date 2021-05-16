import React, { useEffect, useState } from 'react';
import styles from '../../styles/home';

import { View } from 'react-native';
import { BTitle } from '../widgets/utils/text';
import { useRoute } from '@react-navigation/native';
import { getData } from '../../data/store/store';
import { synchLocalUpdates } from '../../data/service/BoulderService';


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

    useEffect(() => {
      if(!user){
        getData('user').then(user => {
          setUser(user); 
          synchLocalUpdates(user.userId).then(
            items =>{
              console.log("items",items)
              setUpdateItems(items)
            }
          );
        }).catch(err => 
          console.error(err)
        )
      }
    }, [user])
   


  return (
    <View>
      <BTitle label="Synch data" />
    </View>
  );
};

export default SynchScreen;
