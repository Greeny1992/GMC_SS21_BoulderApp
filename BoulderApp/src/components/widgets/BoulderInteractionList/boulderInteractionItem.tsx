import React, { useState } from "react";
import { BoulderInteraction, IBoulderInteraction } from '../../../data/entities/BoulderInteraction';
import { View, Text, Image } from "react-native";
import { Icon, ListItem } from 'react-native-elements';
import BoulderInteractionListStyle from  '../../../styles/widgets/boulderInteractionList';
import BIcon from "../utils/icon";
import {FontSizes} from "../../../constants/ui";
const userImage = require('../../../../../BoulderApp/src/assets/images/user.png')
interface BoulderInteractionItemProps {
    style?: any;
    interaction: BoulderInteraction,
    handleEdit: Function,
    editAble: boolean
}

const BoulderInteractionItem: React.FC<BoulderInteractionItemProps> = (props: BoulderInteractionItemProps) => {

    const {interaction, style,handleEdit,editAble} = props;
    return (
        <View style={BoulderInteractionListStyle.listinteractions}>
            {               
                <ListItem containerStyle={BoulderInteractionListStyle.listinteractions}>
                    <View style={editAble ? BoulderInteractionListStyle.owneditem : BoulderInteractionListStyle.item}>
                        <View style={BoulderInteractionListStyle.boxtitle}>
                            <View style={BoulderInteractionListStyle.titleinnerbox}>
                                <Text style={BoulderInteractionListStyle.title}>{interaction.title}</Text>
                            </View>  
                            <View style={BoulderInteractionListStyle.iconinnerbox}>
                                {editAble ? 
                                <BIcon style={BoulderInteractionListStyle.editable} icon="edit" onPress={() => handleEdit(interaction)}/> : <></>
                                }
                            </View>
                        </View>
                        <View style={BoulderInteractionListStyle.statecomment}>
                            <Text style={BoulderInteractionListStyle.stateHeader}>{'State: '}</Text>
                            <Text style={BoulderInteractionListStyle.state}>{'Probiert ' + interaction.status}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.boxcomment}>
                        <Text style={BoulderInteractionListStyle.commentHeader}>{'Comment:'}</Text>
                            <Text style={BoulderInteractionListStyle.comment}>{interaction.comment}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.boxauthor}>
                        <Text style={BoulderInteractionListStyle.authordetails}>{interaction.created.toDateString()}</Text>
                        <Text style={BoulderInteractionListStyle.authordetails}>{interaction.user_id + 'Max Musterkletterer'}</Text>
                        </View>                          
                    </View>
                </ListItem>
                
            }
        </View>
    );
        
}

export default BoulderInteractionItem;

<Image style={BoulderInteractionListStyle.icon} source={userImage}></Image>

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