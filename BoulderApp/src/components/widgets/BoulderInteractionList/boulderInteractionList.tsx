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
                    />
        
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