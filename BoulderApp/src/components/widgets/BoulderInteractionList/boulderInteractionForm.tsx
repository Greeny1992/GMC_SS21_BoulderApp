import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import { Icon } from 'react-native-elements';
import { IBoulderInteraction } from '../../../data/entities/BoulderInteraction';
import { IStatus } from '../../../data/entities/BoulderInteractionValues';
import { getAllStatus } from '../../../data/lookupValues/BoulderInteractionValues';
import LayoutStyle from '../../../styles/utils/layout';
import styles from '../../../styles/widgets/boulderInteractionForm';
import { BExtendedButton } from '../utils/button';
import IconPicker from '../utils/IconPicker';
import BText from '../utils/text';
interface BoulderInteractionFormProps {
  style?:any,
  handleHideModal:Function;
  handleSaveInteraction:Function
}

const BoulderInteractionForm: React.FC<BoulderInteractionFormProps> = (props: BoulderInteractionFormProps) => {
  const {handleHideModal,handleSaveInteraction,style}=props
    const iconValues = [
        {label: 'What a move', value: 'What a move', icon: () => <Icon name="star" size={18} color="#900" />},
        {label: 'Awesome', value: 'Awesome', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'I did it', value: 'I did it', icon: () => <Icon name="check-circle" size={18} color="#900" />},
    ]
    const statusValues = getAllStatus();
    const statusPickerItems = statusValues.map((item:IStatus )=> {return {label: item.name, value:item.id,icon: () => <Icon name={item.icon} size={18} color="#900" />}})
    // const statusPickerItems = statusValues.forEach((item:IStatus )=> {console.log(item.icon)})
    console.log("statusPickerItems")
    console.log(statusPickerItems)
    console.log(statusValues)

    const storeInteraction = ()=>{
      const interaction :IBoulderInteraction ={
        boulder_id:'',   
        user_id:'', 
        title: '',
        status:1,
        comment:'',
        icon: '',
        created: new Date(),
        creator_id:''
      }
      handleSaveInteraction(interaction)
      handleHideModal(false);
    }
  return (
    <View style={styles.container}>
      <BText >Boulder Interaction Title</BText>
      <View style={styles.content}>
        <TextInput 
          placeholder="Title"
          style={styles.input} />
      <BText >Boulder Interaction Description </BText>
        <TextInput
          placeholder="Description"
          multiline
          numberOfLines={4}
            style={styles.multiLine}
            editable
        />
        <BText >Status </BText>

        <IconPicker items={statusPickerItems} placeholder="Select Status" style={{zIndex:200}}/>
        {/* <IconPicker items={iconValues} placeholder="Select Tag" style={{zIndex:9}}/> */}
        <View style={LayoutStyle.containerRow}>
                        <BExtendedButton onPress={()=>handleHideModal(false) } title="Cancel" />
                        <BExtendedButton onPress={()=>storeInteraction() } title="Save" />

                     </View>
        
      </View>
    </View>
  );
};


export default BoulderInteractionForm;