import React, { Component } from 'react';
import {Route, ScrollView, View} from 'react-native';
import { IBoulder } from '../../data/entities/Boulder';
import BText, { BTitle } from "../widgets/utils/text";
import LayoutStyle from '../../styles/utils/layout';
import {  Divider } from 'react-native-elements';
import BoulderInteractionList from '../widgets/BoulderInteractionList/boulderInteractionList';
import BoulderMetadata from '../widgets/boulderMetadata';
import { getBoulderDetails } from '../../data/service/BoulderService';
import BoulderInteractionModal from '../widgets/BoulderInteractionList/boulderInteractionModal';
import { BoulderInteraction, BoulderInteractionFormData } from '../../data/entities/BoulderInteraction';
import getCurrentBoulderInteraction, { storeBoulderInteraction } from '../../data/service/BoulderInteractionService';
import BIcon from '../widgets/utils/icon';
import { getAllStatus } from '../../data/lookupValues/BoulderInteractionValues';
import { getData } from '../../data/store/store';
interface DetailBoulderProps {
    navigation: any,
    route:Route
    style:any
}
interface BoulderState {
    boulder:IBoulder ,
    showModal:boolean,
    selectedInteraction:BoulderInteraction|undefined,
    boulderInteractions:BoulderInteraction[],
    user_id:string,
}
class DetailBoulder extends Component<DetailBoulderProps,BoulderState> {
    tempBoulder : IBoulder | undefined;
    statusValues = getAllStatus();

    constructor(props: DetailBoulderProps) {
        super(props);
        this.tempBoulder = this.handleBoulderSearch(this.props.route.params.boulderID ) as IBoulder
        this.state ={
            boulder: this.tempBoulder,
            showModal:false,
            selectedInteraction:undefined,
            boulderInteractions:getCurrentBoulderInteraction(this.tempBoulder?.id??''),
            user_id:''
        }
     
        getData('user').then(
            (data)=> {
                this.setState({user_id:data['userId'] }) ;
            },
            (error)=> console.error(error)
        )
    }
  
    handleBoulderSearch = (id:string):IBoulder | undefined => getBoulderDetails(id); 
    handleSaveBoulderInteraction= (data:BoulderInteractionFormData):void=>{
        storeBoulderInteraction(data,this.state.boulder.id,this.state.user_id)
        this.setState({boulderInteractions:getCurrentBoulderInteraction(this.state.boulder?.id)})
    }
    
    handleShowVisibility=(value:boolean):void=>{
        this.setState({
            showModal:value
        })
    }

    hideModal = ():void=>{ this.handleShowVisibility(false)}
    showModal = ():void=>{this.handleShowVisibility(true)}

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
          boulder: this.state.boulder,
        });
    }

    handleEditInteraction =(interaction :BoulderInteraction) =>{
        this.setState({
            selectedInteraction:interaction
        })
        this.showModal();
    }

    handleNewInteraction = () =>{
        this.setState({
            selectedInteraction: new BoulderInteraction(this.state.boulder?.id ?? '','')
        })
        this.showModal();
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
                <View style={{justifyContent:'center'}}>
                    <BoulderInteractionModal showModal={this.state.showModal} handleHideModal={this.hideModal} handleSaveInteraction={this.handleSaveBoulderInteraction} currentAction={this.state.selectedInteraction} boulderID={this.state.boulder.id}/>
                    <ScrollView style={[LayoutStyle.containerView]}>
                            <View style={[LayoutStyle.containerCentered]}>
                                <BoulderMetadata boulder={this.state.boulder} handleLikeClick={this.toggleLike} handleEditClick={this.handleEditBoulder}/>
                            </View>
                            <Divider style={LayoutStyle.divider} />
                            <View style={LayoutStyle.containerRow}>
                                <BTitle label="Activities" style={[{flex:8}]}/>
                                <BIcon icon="add" onPress={()=> this.handleNewInteraction()} style={{flex:2}}/>
                            </View>
                            <BoulderInteractionList boulder_id={this.state.boulder.id} boulder_interaction={this.state.boulderInteractions} user_id={this.state.user_id} handleEditInteraction={this.handleEditInteraction} />
                    </ScrollView>
                   
                </View>
        )
    } 
    
}
export default DetailBoulder;