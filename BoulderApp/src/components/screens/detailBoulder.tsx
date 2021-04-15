import React, { Component, useEffect, useState } from 'react';
import {Route, View, StyleSheet} from 'react-native';
import { IBoulder } from '../../data/entities/Boulder';
import BText from "../widgets/text";
import LayoutStyle from '../../styles/utils/layout';
import {  Divider } from 'react-native-elements';
import TextStyle from '../../styles/text';
import BoulderInteractionList from '../widgets/BoulderInteractionList/boulderInteractionList';
import BoulderMetadata from '../widgets/boulderMetadata';
import BButton from '../widgets/button';
import ButtonStyles from '../../styles/button';
import BoulderMetadataStyle from '../../styles/widgets/boulderMetadata';
import { getBoulderDetails } from '../../data/service/BoulderService';

interface DetailBoulderProps {
    navigation: any,
    route:Route
    style:any
}
interface BoulderState {
    boulder:IBoulder | undefined,
}

class DetailBoulder extends Component<DetailBoulderProps,BoulderState> {
    tempBoulder : IBoulder | undefined;
    constructor(props: DetailBoulderProps) {
        super(props);
        this.tempBoulder = this.handleBoulderSearch(this.props.route.params.boulderID ?? '')
        this.state ={
            boulder: this.tempBoulder,
        }
        
      }

      handleBoulderSearch = (id:string):IBoulder | undefined =>{
        return getBoulderDetails(id);
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
     handlePress = (id: string) => {
        this.props.navigation.navigate("AddBoulderScreen", {
          boulderID: id,
        });
      };
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
                <View style={{justifyContent:'space-between',height:'100%'}}>
                    <View style={[LayoutStyle.containerView]}>
                            <BoulderMetadata boulder={this.state.boulder} handleLikeClick={this.toggleLike}/>
                            <Divider style={LayoutStyle.divider} />
                            <BText style={[TextStyle.subTitle]}>Boulder Interaktion</BText>
                            <BoulderInteractionList boulder_id={this.state.boulder.id} user_id=''/>
                    </View>
                    <View style={[LayoutStyle.containerRow,{justifyContent:'space-around'}]}>
                    <BButton
                        style={[
                        ButtonStyles.btn,
                        BoulderMetadataStyle.btn,
                        {
                            backgroundColor: this.state.boulder.like ? "#ffffff" : "#147aff",
                            
                        },
                        ]}
                        onPress={this.toggleLike}
                    >
                        <BText>{this.state.boulder.like ? "liked": "not liked"}</BText>
                    </BButton>
                    <BButton
                        style={[ButtonStyles.btn, BoulderMetadataStyle.btn]}
                        onPress={this.handlePress}
                        >
                        <BText>Edit</BText>
                        </BButton>
                    </View>
                </View>
        )
    } 
    
}
export default DetailBoulder;