import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

export default function List({navigation}: any) {
    const handlePress = () => {
        navigation.navigate('AddBoulderScreen', {
            passingParams: 'Testparameters',
        })
    }
    return (
        <View style={styles.inputView}>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.buttonText}>Filter</Text>
            </TouchableOpacity>
            <Text>I will soon become a list</Text>
            <TouchableOpacity style={styles.addButton} onPress={handlePress}>
                <Text style={styles.buttonText}>
                    <AntDesign name="plus" size={20} color="#ffffff" />
                    Add
                </Text>
            </TouchableOpacity>
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
    filterButton: {
        width: '30%',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        right: 0,
        marginTop: 40,
        backgroundColor: '#d77079',
        fontFamily: 'sans-serif-medium'
    },
    addButton: {
        width: '30%',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        marginTop: 40,
        backgroundColor: "#d77079",
        fontFamily: 'sans-serif-medium'
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'sans-serif-medium'
    }
});