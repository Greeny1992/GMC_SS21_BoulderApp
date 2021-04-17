import React, { useState } from "react";
import { IBoulderInteraction } from '../../../data/entities/BoulderInteraction';
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

import { Icon, ListItem } from 'react-native-elements';
import BoulderInteractionListStyle from  '../../../styles/widgets/boulderInteractionList';
import TextStyle from "../../../styles/text";

interface BoulderInteractionItemProps {
    style?:any;
    interaction: IBoulderInteraction,
}

const BoulderInteractionItem: React.FC<BoulderInteractionItemProps> = (props: BoulderInteractionItemProps) => {
    const {interaction, style} = props;
    return (
        <View>
            {
            
                <ListItem bottomDivider>
                    <View style={BoulderInteractionListStyle.item}>
                        <View style={BoulderInteractionListStyle.box}>
                            <Image style={BoulderInteractionListStyle.icon} source={require('../../../assets/images/user.png')}></Image>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                            <Text style={BoulderInteractionListStyle.title}>{interaction.title}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                        <Text style={BoulderInteractionListStyle.commentHeader}>{'Comment:'}</Text>
                            <Text style={BoulderInteractionListStyle.comment}>{interaction.comment}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                        <Text>{interaction.created.toDateString()}</Text>
                        </View>
                    </View>
                </ListItem>
                
            }
        </View>
    );
        
}

export default BoulderInteractionItem;



/**
 * 
interface BoulderInteractionItemProps {
    style?:any;
    interaction: IBoulderInteraction,
    key: number
}

const BoulderInteractionItem: React.FC<BoulderInteractionItemProps> = (props: BoulderInteractionItemProps) => {
    const {interaction, style,key} = props;
    return (
            <ListItem key={key} bottomDivider>
                
                <Icon name={interaction.icon} />
                <ListItem.Content>
                <ListItem.Title>{interaction.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
    )
}

export default BoulderInteractionItem



 */