import React, { useState } from "react";
import { BoulderInteraction, IBoulderInteraction } from '../../../data/entities/BoulderInteraction';
import { View, Text, Image } from "react-native";
import { Icon, ListItem } from 'react-native-elements';
import BoulderInteractionListStyle from  '../../../styles/widgets/boulderInteractionList';
import BIcon from "../utils/icon";
const userImage = require('../../../../../BoulderApp/src/assets/images/user.png')
interface BoulderInteractionItemProps {
    style?:any;
    interaction: BoulderInteraction,
    handleEdit:Function,
    editAble:boolean
}

const BoulderInteractionItem: React.FC<BoulderInteractionItemProps> = (props: BoulderInteractionItemProps) => {

    const {interaction, style,handleEdit,editAble} = props;
    return (
        <View>
            {               
                <ListItem bottomDivider>
                    <View style={BoulderInteractionListStyle.item}>
                        <View style={BoulderInteractionListStyle.box}>
                            <Image style={BoulderInteractionListStyle.icon} source={userImage}></Image>
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
                        <Text>{interaction.user_id}</Text>
                        </View>
                        {editAble ? 
                            <BIcon icon="edit" onPress={() => handleEdit(interaction)} />
                            :
                            <></>
                        }

                    

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