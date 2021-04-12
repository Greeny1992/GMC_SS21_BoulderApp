import React from 'react';
import { View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import getCurrentBoulderInteraction from '../../entities/BoulderInteraction';

interface BoulderInteractionListProps {
    boulder_id: string,
    user_id: any
}

const BoulderInteractionList: React.FC<BoulderInteractionListProps> = (props: any) => {
    const {boulder_id, user_id} = props;
    const boulder_interaction = getCurrentBoulderInteraction(boulder_id,user_id)
    return (
        <View>
            {
                boulder_interaction.map((interaction, i) => (
                <ListItem key={i} bottomDivider>
                    
                    <Icon name={interaction.icon} />
                    <ListItem.Content>
                    <ListItem.Title>{interaction.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                ))
            }
            </View>
    )
}

export default BoulderInteractionList 