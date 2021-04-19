import React, { Component } from 'react';
import {Route, ScrollView, View} from 'react-native';
import { IBoulder } from '../../data/entities/Boulder';
import BText from "../widgets/utils/text";
import LayoutStyle from '../../styles/utils/layout';
import {  Divider } from 'react-native-elements';
import TextStyle from '../../styles/utils/text';
import BoulderInteractionList from '../widgets/BoulderInteractionList/boulderInteractionList';
import BoulderMetadata from '../widgets/boulderMetadata';
import { BExtendedButton } from '../widgets/utils/button';
import BoulderMetadataStyle from '../../styles/widgets/boulderMetadata';
import { getBoulderDetails } from '../../data/service/BoulderService';
import BoulderInteractionModal from './boulderInteractionModal';
import { IBoulderInteraction } from '../../data/entities/BoulderInteraction';
import { storeBoulderInteraction } from '../../data/service/BoulderInteractionService';
import BIcon from '../widgets/utils/icon';

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

    handleEditBoulder = (id: string) => {
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
                    <ScrollView style={[LayoutStyle.containerView]}>
                            <View style={[LayoutStyle.containerCentered]}>
                                <BoulderMetadata boulder={this.state.boulder} handleLikeClick={this.toggleLike} handleEditClick={this.handleEditBoulder}/>
                            </View>
                            <Divider style={LayoutStyle.divider} />
                            <View style={LayoutStyle.containerRow}>
                                <BText style={[TextStyle.title, {flex:8}]}>Activities</BText>

                                <BIcon icon="add" onPress={()=> this.handleShowVisibility(true)} style={{flex:2}}/>
                            </View>
                            <BoulderInteractionList boulder_id={this.state.boulder.id} user_id=''/>
                    </ScrollView>
                   
                </View>
        )
    } 
    
}
export default DetailBoulder;