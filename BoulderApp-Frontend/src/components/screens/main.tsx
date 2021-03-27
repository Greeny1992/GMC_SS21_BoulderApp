import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Main({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Add a new Boulder"
        onPress={() => navigation.navigate('AddBoulderScreen', {
            passingParams: 'Testparameters',
        })}
      />
      </View>
    )
}