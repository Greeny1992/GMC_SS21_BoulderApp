import React from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet}

from 'react-native'
import LayoutStyle from '../../styles/utils/layout';
import styles from '../../styles/widgets/boulderInteractionModal';
import { BExtendedButton } from '../widgets/utils/button';
import BoulderInteractionForm from '../widgets/BoulderInteractionList/boulderInteractionForm';

interface BoulderInteractionModalProps {
   style?:any,
   showModal:boolean;
   handleHideModal:Function;
   handleSaveInteraction:Function
}

const BoulderInteractionModal: React.FC<BoulderInteractionModalProps> = (props: BoulderInteractionModalProps) => {
   const {showModal, handleHideModal, handleSaveInteraction} = props
   return (
            <Modal animationType = {"slide"} transparent = {false}
               visible = {showModal}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <View style={[styles.modalInside, {justifyContent:'space-between'}]}>
                     <BoulderInteractionForm handleHideModal={handleHideModal} handleSaveInteraction={handleSaveInteraction}/>
                     

                  </View>
               </View>
            </Modal>
            
         )
   
}
export default BoulderInteractionModal

