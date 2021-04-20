import React, { useState } from 'react';
import { Button, Text, TextInput, View}from 'react-native'
import {Overlay } from 'react-native-elements';
import { BoulderInteraction, IBoulderInteraction,BoulderInteractionFormData } from '../../../data/entities/BoulderInteraction';
import { getAllStatus } from '../../../data/lookupValues/BoulderInteractionValues';
import LayoutStyle from '../../../styles/utils/layout';
import styles from '../../../styles/widgets/boulderInteractionModal';
import { BExtendedButton } from '../utils/button';
import BIcon from '../utils/icon';
import IconPicker from '../utils/IconPicker';
import BInput from '../utils/Input';
import BText, { BTitle } from '../utils/text';
import { useForm, Controller } from "react-hook-form";
import InputStyle from '../../../styles/utils/Input';

interface BoulderInteractionModalProps {
   style?:any,
   showModal:boolean;
   handleHideModal:Function;
   handleSaveInteraction:Function;
   currentAction?: BoulderInteraction;
   boulderID:string
}

const BoulderInteractionModal: React.FC<BoulderInteractionModalProps> = (props: BoulderInteractionModalProps) => {
   const {showModal, handleHideModal,handleSaveInteraction,currentAction, boulderID} = props
   const { control, handleSubmit, formState: { errors },setValue } = useForm<BoulderInteractionFormData>();
      React.useEffect(()=>{
         setDefaultForm()
      }, [showModal])
   const onSubmit = (data: BoulderInteractionFormData) => {
      console.log("SUBMIT " + data.id)
      handleSaveInteraction(data)
      handleHideModal()
      clearForm()
   };
   const clearForm= ()=>{
      setValue('title','')
      setValue('comment','')
      setValue('status',1)
      setValue('id', '')
   }
   const setDefaultForm= ()=>{
      if(currentAction){
         setValue('id', currentAction.id)
         setValue('title',currentAction.title)
         setValue('comment',currentAction.comment)
         setValue('status',currentAction.status)
      }
   }
   const statusValues = getAllStatus();
   const closeForm=()=>{
      handleHideModal()
      clearForm()
   }

   
   
   return (
            <Overlay animationType = {"slide"} transparent = {true}
               isVisible = {showModal}
               onBackdropPress = {closeForm }
               overlayStyle={styles.modal}
               >
              <View >
                  <View style={LayoutStyle.containerRow}>
                     <BTitle label="Create a activity" style={[{flex:8}]}/>
                     
                     <BIcon icon="close" onPress={closeForm} style={{flex:2}}/>
                  </View>

                  <View >
                     <Controller 
                        control={control}
                        render={({field:{onChange,onBlur,value}})=>(
                           <BInput label="Headline" placeholder="First trial and I did it" value={value} onChangeText={(value: string)=>onChange(value)} />
                           
                        )}
                        name='title'
                        rules={{required:true}}
                        defaultValue={control.defaultValuesRef}
                     />
                     {errors.title && <Text>This is required.</Text>}
                     <Controller 
                        control={control}
                        render={({field:{onChange,onBlur,value}})=>(
                           <BInput label="Comment" multiline={true}  value={value} onChangeText={(value: string)=>onChange(value)} placeholder="the first few moves, are really hard but after them, this is the rock to go"/>
                           
                        )}
                        name='comment'
                        rules={{required:true}}
                        defaultValue=""
                     />
                     {errors.comment && <Text>This is required.</Text>}

                     <Controller 
                        control={control}
                        render={({field:{onChange,onBlur,value}})=>(
                           <IconPicker items={statusValues} placeholder="Select Status" containerStyle={{zIndex:200}} onChange={onChange} defaultSelectedItem={1} label="Status"/> 
                        )}
                        name='status'
                        rules={{required:true}}
                        defaultValue={1}
                     />
   
                     <View style={[LayoutStyle.containerRowSpace,{marginTop:30}]}>

                        {/* <BIconBackround onPress={()=>handleHideModal() } icon="cancel" style={{flex:3,width:'30%'}}/>
                        <BIconBackround onPress={()=>storeInteraction() } icon="save"  style={{flex:3,width:'30%'}}/>  */}
                        <BExtendedButton  underlined={true} onPress={closeForm } title="cancel"/>
                        <BExtendedButton  underlined={true} onPress={handleSubmit(onSubmit)} title="save"/>

                     </View>

                  </View>
               </View>
   
            </Overlay>
            
         )
   
}
export default BoulderInteractionModal
