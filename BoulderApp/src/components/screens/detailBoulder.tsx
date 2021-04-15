import React, { Component } from 'react';
import {Route, View} from 'react-native';
import { IBoulder } from '../../data/entities/Boulder';
import BText from "../widgets/utils/text";
import LayoutStyle from '../../styles/utils/layout';
import {  Divider } from 'react-native-elements';
import TextStyle from '../../styles/text';
import BoulderInteractionList from '../widgets/BoulderInteractionList/boulderInteractionList';
import BoulderMetadata from '../widgets/boulderMetadata';
import { BExtendedButton } from '../widgets/utils/button';
import BoulderMetadataStyle from '../../styles/widgets/boulderMetadata';
import { getBoulderDetails } from '../../data/service/BoulderService';
import BoulderInteractionModal from './boulderInteractionModal';
import { IBoulderInteraction } from '../../data/entities/BoulderInteraction';
import { storeBoulderInteraction } from '../../data/service/BoulderInteractionService';

interface DetailBoulderProps {
    navigation: any,
    route:Route
    style:any
}
interface BoulderState {
    boulder:IBoulder | undefined,
    showModal:boolean
}

class DetailBoulder extends Component<DetailBoulderProps,BoulderState> {
    tempBoulder : IBoulder | undefined;
    constructor(props: DetailBoulderProps) {
        super(props);
        this.tempBoulder = this.handleBoulderSearch(this.props.route.params.boulderID ?? '')
        this.state ={
            boulder: this.tempBoulder,
            showModal:false
        }
        
      }

    handleBoulderSearch = (id:string):IBoulder | undefined =>{
        return getBoulderDetails(id);
    }
    handleSaveBoulderInteraction= (interaction: IBoulderInteraction):void=>{
        storeBoulderInteraction(interaction)
    }
    handleShowVisibility=(value:boolean):void=>{
        this.setState({
            showModal:value
        })
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
                    <BoulderInteractionModal showModal={this.state.showModal} handleHideModal={this.handleShowVisibility} handleSaveInteraction={this.handleSaveBoulderInteraction}/>
                    <View style={[LayoutStyle.containerView]}>
                            <View style={[LayoutStyle.containerCentered]}>
                                <BoulderMetadata boulder={this.state.boulder} handleLikeClick={this.toggleLike}/>
                            </View>
                            <Divider style={LayoutStyle.divider} />
                            <BExtendedButton onPress={()=> this.handleShowVisibility(true)} style={{marginBottom:15}} title="Add Interaction" />
                            <BText style={[TextStyle.subTitle]}>Boulder Interaktion</BText>
                            <BoulderInteractionList boulder_id={this.state.boulder.id} user_id=''/>
                    </View>
                    <View style={[LayoutStyle.containerRow,{justifyContent:'space-around'}]}>
                        <BExtendedButton onPress={this.toggleLike} title={this.state.boulder.like ? "liked": "not liked"} style={[
                            BoulderMetadataStyle.btn,{
                                backgroundColor: this.state.boulder.like ? "#ffffff" : "#147aff",},
                            ]}/>
                        <BExtendedButton onPress={this.handlePress} title="Edit" style={BoulderMetadataStyle.btn}/>
                    </View> 
                </View>
        )
    } 
    
}
export default DetailBoulder;