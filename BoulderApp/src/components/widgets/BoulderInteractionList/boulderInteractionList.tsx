import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import getCurrentBoulderInteraction from '../../../data/service/BoulderInteractionService';
import BoulderInteractionItem from './boulderInteractionItem';

interface BoulderInteractionListProps {
    boulder_id: string,
    user_id: any,
    handleEditInteraction:Function
}

const BoulderInteractionList: React.FC<BoulderInteractionListProps> = (props: any) => {
    const {boulder_id, user_id, handleEditInteraction} = props;
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
        </View >
    )
}

export default BoulderInteractionList;


/**
 * 

<FlatList
                data={boulder_interaction}
                renderItem={({item}) => (
                <BoulderInteractionItem
                interaction={item}/>
                )}
                keyExtractor={(item) => item.user_id}
            >

            </FlatList>




 */