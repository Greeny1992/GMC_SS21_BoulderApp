import { BottomSheet } from 'react-native-btr';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { ILocation } from '../../../data/entities/Location';
import { BTitle } from '../utils/text';
interface BBottomSheetProps{
    style?:any,
    visible:boolean,
    hide:Function, 
    locations:string[],
    title: string,
    handleFilter:Function
}
const BBottomSheet: React.FC<BBottomSheetProps> = (props: BBottomSheetProps) => {

    const {visible, hide, style,locations,title, handleFilter} = props;
    const toggleBottomNavigationView =()=>{hide()}
    const ItemPickerItems = locations?.map((location )=> {return(   <Picker.Item label={location} value={location}  />)})
    const [selectedItem, setSelectedItem ] = useState();
  
    return (
          <BottomSheet
            visible={visible}
            onBackButtonPress={toggleBottomNavigationView}
            onBackdropPress={toggleBottomNavigationView}
          >
            <View style={styles.bottomNavigationView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <BTitle label={title} style={{
                    textAlign: 'center',
                    padding: 25,
                    fontSize: 20
                  }}/>
                <Picker
                    style={styles.dropdown}
                    selectedValue={selectedItem}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedItem(itemValue)
                    }>
                        {ItemPickerItems}
                    </Picker>
                
              </View>
            </View>
          </BottomSheet>
    );
  };
  
  export default BBottomSheet;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F7FA',
    },
    dropdown:{
       
    },
    bottomNavigationView: {
      backgroundColor: '#fff',
      width: '100%',
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });