import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../../styles/addBoulder';
import BText from "../widgets/utils/text";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

enum colourScale {
    black = 'black',
    white = 'white',
    yellow = 'yellow',
    red = 'red',
    blue = 'blue',
    green = 'green',
    turquoise = 'turquoise',
    orange = 'orange',
    violet = 'violet',
    pink = 'pink',
    grey = 'grey',
    none = ''
}

export interface Boulder {
    name: string;
    location: string;
    difficulty: string;
    colour: colourScale;
    image: string;
    isTopped: boolean;
}

export default function AddBoulder({route, navigation}: any) {
    // const { passingParams } = route.params;
    const bg = require('../../assets/images/background.jpg');
    return (
        <>
            <ImageBackground source={bg} style={styles.background}>
            <BText style={styles.text}>Add new boulder</BText>
            <RenderName/>
            <RenderLocation/>
            <RenderDifficulty/>
            <RenderColourAndImage/>
            <RenderTopped/>
            </ImageBackground>
        </>
    )
}

function RenderName() {
    const [name, setName] = useState('');
    return (
        <View style={styles.inputView}>
            <BText style={styles.inputText}>Name</BText>
            <TextInput
                style={styles.textInput}
                placeholder="Enter a name"
                placeholderTextColor="#adadad"
                onChangeText={(name) => setName(name)}
            />
        </View>
    )
}

function RenderLocation() {
    const [location, setLocation] = useState('');
    return (
        <View style={styles.inputView}>
            <BText style={styles.inputText}>Location</BText>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={styles.locationInput}
                    placeholder="Enter a location"
                    placeholderTextColor="#adadad"
                    onChangeText={(location) => setLocation(location)}
                />
            </View>
        </View>
    )
}

function RenderDifficulty() {
    const [difficulty, setDifficulty] = useState('');
    return (
        <View style={styles.inputView}>
            <BText style={styles.inputText}>Difficulty</BText>
            <TextInput
                style={styles.textInput}
                placeholder="Enter a difficulty"
                placeholderTextColor="#adadad"
                onChangeText={(difficulty) => setDifficulty(difficulty)}
            />
        </View>
    )
}

function RenderColourAndImage() {
    const [colour, setColour] = useState(colourScale.none);
    return (
        <View style={styles.buttonView}>
            <View style={{width: '50%'}}>
                <BText style={styles.inputText}>Add colour</BText>
                <TouchableOpacity style={styles.colourButton}>
                    <BText style={styles.buttonText}>
                        Pick colour
                    </BText>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%'}}>
                <BText style={styles.inputText}>Add image</BText>
                <TouchableOpacity style={styles.imageButton}>
                    <BText style={styles.buttonText}>
                        Add image
                    </BText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function RenderTopped() {
    const [topped, setTopped] = useState(false);
    return (
        <View style={styles.checkboxView}>
            <CheckBox
                value={topped}
                onValueChange={setTopped}
                style={styles.checkbox}
            />
            <BText style={styles.checkboxText}>Boulder has been topped</BText>
        </View>
    )
}