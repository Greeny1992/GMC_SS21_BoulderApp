import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import BoulderList from "../widgets/boulderList";
import Navbar from "../widgets/navbar";

export default function BoulderListContainer({navigation}: any) {
    const handlePress = () => {
        navigation.navigate('AddBoulderScreen', {
            passingParams: 'Testparameters',
        })
    }
  
    const AddButton = ()=>{
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.btn]}  onPress={handlePress}>
                    <Text style={styles.buttonText}>
                        <AntDesign name="plus" size={20} color="#ffffff" />
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        ) 
    }
    const FilterButton = ()=>{
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity  style={[styles.btn]} >
                    <Text style={styles.buttonText}>Filter</Text>
                </TouchableOpacity>
            </View>
        )
    } 
    return (
        <View style={styles.inputView}>
            <View style={styles.container}>
                <AddButton/>
                <FilterButton/>
            </View>
            <View style={styles.bouldList}>
                <BoulderList navigation={navigation}/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        margin: 20,
        fontFamily: 'sans-serif-medium',
    },

    text: {
        marginBottom: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 24,
    },

    btn: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50,
        backgroundColor: "#147aff",
    },
    bouldList:{
        marginTop: 30,
    },
    buttonText: {
        color: '#ffffff',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    }
});