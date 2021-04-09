import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from "./list";


export default function Main({navigation}: any) {

    return (
        <View style={styles.inputView}>
            <Text style={styles.text}>Boulder</Text>
            <List navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        margin: 20,
        fontFamily: 'sans-serif-medium'
    },

    text: {
        marginBottom: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 24
    },
    button: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#d77079",
        fontFamily: 'sans-serif-medium'
    }
});



