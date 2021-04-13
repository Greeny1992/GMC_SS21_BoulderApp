import React, { Component, useEffect, useState } from 'react';
import {Button, Route, View} from 'react-native';
import BOULDER_DATA, { IBoulder } from '../../entities/Boulder';
import BText from "../widgets/text";
import LayoutStyle from '../../styles/utils/layout';
import {  Divider } from 'react-native-elements';
import TextStyle from '../../styles/text';
import BoulderInteractionList from '../widgets/boulderInteractionList';
import BoulderMetadata from '../widgets/boulderMetadata';

interface DetailBoulderProps {
    navigation: Navigator,
    route:Route
    style:StyleSheet
}
interface BoulderState {
    boulder:IBoulder | undefined,
}

class DetailBoulder extends Component<DetailBoulderProps,BoulderState> {
    tempBoulder : IBoulder | undefined;
    constructor(props: DetailBoulderProps) {
        super(props);
        this.tempBoulder = this.getBoulderDetails(this.props.route.params.boulderID ?? '')
        this.state ={
            boulder: this.tempBoulder,
        }
        
      }
     getBoulderDetails =(id:string):IBoulder | undefined=>{
        return BOULDER_DATA.find(boulder => boulder.id === id)
    }
    toggleLike = (state:BoulderState)=>{
        const t = this.state.boulder;
        if(t){
            t.like=!t.like ;
            this.setState({
                boulder : t
            })
        }
    }
  
     render(){
        return ( 
            this.state.boulder === undefined
            ?
                <>
                    <BText>
                        No details found!
                    </BText>
                </>
            :
                <View style={[LayoutStyle.containerView]}>
                        <BoulderMetadata boulder={this.state.boulder} navigation={this.props.navigation} handlelikeToggle={this.toggleLike}/>
                        <Divider style={LayoutStyle.divider} />
                        <BText style={[TextStyle.subTitle]}>Boulder Interaktion</BText>
                        <BoulderInteractionList boulder_id={this.state.boulder.id} user_id=''/>
                </View>
        )
    } 
    
}
export default DetailBoulder;