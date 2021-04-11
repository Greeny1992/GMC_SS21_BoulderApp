import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BoulderListContainer from "./boulderListContainer";
import styles from '../../styles/main';

export default function Main({navigation}: any) {

    return (
        <View style={styles.inputView}>
            <BoulderListContainer navigation={navigation}/>
        </View>
    )
}





