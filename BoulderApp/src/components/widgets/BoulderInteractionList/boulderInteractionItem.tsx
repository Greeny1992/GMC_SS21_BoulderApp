import React from 'react';
import { Icon, ListItem } from 'react-native-elements';
import { IBoulderInteraction } from '../../../data/entities/BoulderInteraction';

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