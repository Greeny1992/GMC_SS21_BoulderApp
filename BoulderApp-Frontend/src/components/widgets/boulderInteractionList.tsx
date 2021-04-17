import React, { useState } from "react";
import IBoulderInteraction from "../../entities/BoulderInteraction"
import styles from '../../styles/boulderListContainer';
import ButtonStyles from "../../styles/button";
import BText from "../widgets/text";
import BButton from "../widgets/button";
import {AntDesign} from "@expo/vector-icons";
import {
  SafeAreaView,
  View,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ImageComponent,
} from "react-native";
import {
  SearchBar,
  Badge,
} from "react-native-elements";
import BOULDER_DATA, { IBoulder } from "../../entities/Boulder";
import BoulderListStyle from "../../styles/boulderList";
import {getColor,getDifficulty} from '../../entities/boulderDetailValues';

import { Icon, ListItem } from 'react-native-elements';
import getCurrentBoulderInteraction from '../../entities/BoulderInteraction';
import BoulderInteractionListStyle from  '../../styles/boulderInteractionList';
import TextStyle from "../../styles/text";

interface BoulderInteractionListProps {
    boulder_id:string,   
    user_id:string, 
    title: string,
    status:number,
    comment:string,
    icon: string,
    created: Date,
    creator_id:string,
}

const BoulderInteractionList: React.FC<BoulderInteractionListProps[]> = (props: any) => {
    const {boulder_id, user_id} = props;
    const boulder_interaction = getCurrentBoulderInteraction(boulder_id,user_id);
    const [boulder_interaction_data, setBoulder_interaction_data] = useState(getCurrentBoulderInteraction(boulder_id,user_id));


    return (
        <View>
            {
                boulder_interaction.map((interaction, i) => (
                <ListItem key={i} bottomDivider>
                    <View style={BoulderInteractionListStyle.item}>
                        <View style={BoulderInteractionListStyle.box}>
                            <Image style={BoulderInteractionListStyle.icon} source={require('../../assets/images/user.png')}></Image>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                            <Text style={BoulderInteractionListStyle.title}>{interaction.title}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                            <Text style={BoulderInteractionListStyle.comment}>{interaction.comment}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                        <Text>{interaction.created.toDateString()}</Text>
                        </View>
                    </View>
                </ListItem>
                ))
            }
            </View>
    );
        
}

export default BoulderInteractionList;
