import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { BoulderInteraction, IBoulderInteraction } from '../../../data/entities/BoulderInteraction';
import getCurrentBoulderInteraction from '../../../data/service/BoulderInteractionService';
import BoulderInteractionItem from './boulderInteractionItem';

interface BoulderInteractionListProps {
    boulder_id: string,
    user_id: any,
    handleEditInteraction:Function,
    boulder_interaction?:IBoulderInteraction[] 
}

const BoulderInteractionList: React.FC<BoulderInteractionListProps> = (props: any) => {
    const {boulder_id, user_id, handleEditInteraction,boulder_interaction} = props;
    return (
        <View>
            {
                boulder_interaction.map((interaction:BoulderInteraction, i:number) => (
                <BoulderInteractionItem 
                    key={i}
                    interaction={interaction}
                    handleEdit={handleEditInteraction}
                    editAble={user_id == interaction.user_id}
                    />
        
                ))
            }
        </View >
    )
}

export default BoulderInteractionList;