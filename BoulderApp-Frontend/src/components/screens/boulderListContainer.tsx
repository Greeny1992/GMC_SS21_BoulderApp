import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import BoulderList from "../widgets/boulderList";
import Navbar from "../widgets/navbar";
import ButtonStyles from "../../styles/button";
import styles from '../../styles/boulderListContainer';
import BText from "../widgets/text";
import BButton from "../widgets/button";

export default function BoulderListContainer({navigation}: any) {
    const handlePress = () => {
        navigation.navigate('AddBoulderScreen', {
            passingParams: 'Testparameters',
        })
    }
  
    const AddButton = ()=>{
        return (
            <View style={styles.buttonContainer}>
                <BButton style={[ButtonStyles.btn]}  onPress={handlePress}>
                    <BText style={styles.buttonText}>
                        <AntDesign name="plus" size={20} color="#ffffff" />
                        Add
                    </BText>
                </BButton>
            </View>
        ) 
    }
    const FilterButton = ()=>{
        return (
            <View style={styles.buttonContainer}>
                <BButton onPress={() => {}}>
                    <BText style={styles.buttonText}>Filter</BText>
                </BButton>
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