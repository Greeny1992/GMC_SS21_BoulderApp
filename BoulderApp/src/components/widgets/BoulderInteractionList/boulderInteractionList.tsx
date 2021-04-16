import React from 'react';
import { View } from 'react-native';
import getCurrentBoulderInteraction from '../../../data/service/BoulderInteractionService';
import BoulderInteractionItem from './boulderInteractionItem';

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
                <BoulderInteractionItem 
                    key={i}
                    interaction={interaction}/>
        
                ))
            }
        </View>
    )
}

export default BoulderInteractionList 