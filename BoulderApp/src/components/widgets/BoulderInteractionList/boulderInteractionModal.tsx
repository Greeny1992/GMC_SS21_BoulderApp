import React from 'react';
import { View}from 'react-native'
import {Overlay } from 'react-native-elements';
import { IBoulderInteraction } from '../../../data/entities/BoulderInteraction';
import { getAllStatus } from '../../../data/lookupValues/BoulderInteractionValues';
import LayoutStyle from '../../../styles/utils/layout';
import TextStyle from '../../../styles/utils/text';
import styles from '../../../styles/widgets/boulderInteractionModal';
import { BExtendedButton } from '../utils/button';
import BIcon from '../utils/icon';
import IconPicker from '../utils/IconPicker';
import BInput from '../utils/Input';
import BText, { BTitle } from '../utils/text';

interface BoulderInteractionModalProps {
   style?:any,
   showModal:boolean;
   handleHideModal:Function;
   handleSaveInteraction:Function
}

const BoulderInteractionModal: React.FC<BoulderInteractionModalProps> = (props: BoulderInteractionModalProps) => {
   const {showModal, handleHideModal,handleSaveInteraction} = props

   const statusValues = getAllStatus();
   
   const storeInteraction = ()=>{
     const interaction :IBoulderInteraction ={
       boulder_id:'',   
       user_id:'', 
       title: '',
       status:1,
       comment:'',
       created: new Date(),
       creator_id:''
     }
     handleSaveInteraction(interaction)
   //   handleHideModal();
   }
   
   return (
            <Overlay animationType = {"slide"} transparent = {true}
               isVisible = {showModal}
               
               onBackdropPress = {() => { console.log("Modal has been closed.") } }
               overlayStyle={styles.modal}
               >
              <View >
                  <View style={LayoutStyle.containerRow}>
                     <BTitle label="Create a activity" style={[{flex:8}]}/>
                     <BIcon icon="close" onPress={()=> handleHideModal()} style={{flex:2}}/>
                  </View>

                  <View >

                     <BInput label="Title" placeholder="First trial and I did it"/>
                     <BInput  label="Description" multiline={true} placeholder="the first few moves, are really hard but after them, this is the rock to go"/>

                     <IconPicker items={statusValues} placeholder="Select Status" containerStyle={{zIndex:200}} label="Status"/>

                     <View style={[LayoutStyle.containerRowSpace,{marginTop:30}]}>

                        {/* <BIconBackround onPress={()=>handleHideModal(false) } icon="cancel" style={{flex:3,width:'30%'}}/>
                        <BIconBackround onPress={()=>storeInteraction() } icon="save"  style={{flex:3,width:'30%'}}/> */}
                        <BExtendedButton  underlined={true} onPress={()=>storeInteraction() } title="cancel"/>
                        <BExtendedButton  underlined={true} onPress={()=>storeInteraction() } title="save"/>

                     </View>
                     
                  </View>
               </View>
            </Overlay>
            
         )
   
}
export default BoulderInteractionModal
