import React from 'react';
import { View, Text } from 'react-native';

export default function AddBoulder({ route, navigation }: any) {
    const { passingParams } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Boulder Screen</Text>
        <Text>Passed Parameters: {JSON.stringify(passingParams)}</Text>
      </View>
    )
}