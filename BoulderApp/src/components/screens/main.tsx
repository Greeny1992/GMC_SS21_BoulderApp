import React from 'react';
import {View} from 'react-native';
import BoulderListContainer from "./home";

export default function Main({navigation}: any) {

    return (
        <View >
            <BoulderListContainer navigation={navigation}/>
        </View>
    )
}





