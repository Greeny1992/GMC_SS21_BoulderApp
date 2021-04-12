import React, {useState} from 'react';
import {View,StyleSheet, TouchableOpacity, Image, Button,Text} from 'react-native';
import BOULDER_DATA, { IBoulder } from '../../entities/Boulder';
import ButtonStyles from '../../styles/button';
import styles from '../../styles/detailBoulder';
import { AntDesign } from '@expo/vector-icons';
import BText from "../widgets/text";
import LayoutStyle from '../../styles/layout';
import {getColor,getDifficulty} from '../../entities/boulderDetailValues';
import getLocation from '../../entities/location';
import BButton from '../widgets/button';
import { Badge, Divider } from 'react-native-elements';
import TextStyle from '../../styles/text';
import BoulderInteractionList from '../widgets/boulderInteractionList';

export default function DetailBoulder({route, navigation}: any) {
    const { boulderID } = route.params;
    const getBoulderDetails =(id:string):IBoulder | undefined=>{
        return BOULDER_DATA.find(boulder => boulder.id === boulderID)
    }
    const handlePress = (id : string) => {
        console.log("ID: " +id)
        navigation.navigate('AddBoulderScreen', {
            boulderID: id
        })
    }
    const [boulder, setBoulder] = useState(getBoulderDetails(boulderID));
    
    return ( 
        boulder === undefined
        ?
            <>
                <BText>
                    No details found!
                </BText>
            </>
        :

            
            <View style={[LayoutStyle.containerView]}>
                <View
                    style={LayoutStyle.containerRow}>
                        <BText style={[TextStyle.title]}>{boulder.title}</BText>
                    
                    <TouchableOpacity style={[ButtonStyles.btn,{flex:2, marginRight:10}]}  onPress={()=>handlePress(boulder.id)}>
                        <AntDesign name="edit" size={20} color="#ffffff" style={ButtonStyles.btnIcon}/>
                        <BText style={ButtonStyles.buttonText}>Edit</BText>
                    </TouchableOpacity>
                </View>
                <View style={[LayoutStyle.containerRow,styles.detailContainer]}>
                    <View>
                        <Image source={{uri:boulder.img}} style={[styles.image]}></Image>
                        <View style={{ position: 'absolute', top:15, right: 15 ,borderRadius:25, width:25,height:25}}>
                        <Badge
                                                        badgeStyle={{width:25,height:25,borderRadius:25, backgroundColor:getColor(boulder.color).value}}
                        />
                        </View>
                        
                    </View>

                    <View style={LayoutStyle.containerRow}>
                        <View >
                            <BText>Difficulty: </BText>
                            <BText>Country: </BText>
                            <BText>Region: </BText>
                            <BText>City: </BText>
                        </View>
                        <View>
                            <BText>{getDifficulty(boulder.difficulty).name}</BText>
                            <BText>{getLocation(boulder.location_id).country}</BText>
                            <BText>{getLocation(boulder.location_id).region}</BText>
                            <BText>{getLocation(boulder.location_id).city}</BText>
                        </View>


                    </View>
                </View>
                <View style={LayoutStyle.containerCentered}>
                    <Divider style={LayoutStyle.divider} />
                </View>
                <View>
                    <BText style={[TextStyle.subTitle]}>Boulder Interaktion</BText>
                    <BoulderInteractionList boulder_id={boulder.id} user_id=''/>
                </View>
                
            </View>
    )
    
    
}
