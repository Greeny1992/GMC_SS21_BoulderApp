import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox} from 'react-native';
// Find more icons at https://icons.expo.fyi/
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



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
    return (
        <>
            <Text style={styles.text}>Add new boulder</Text>
            <RenderName/>
            <RenderLocation/>
            <RenderDifficulty/>
            <RenderColourAndImage/>
            <RenderTopped/>
        </>
    )
}

function RenderName() {
    const [name, setName] = useState('');
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputText}>Name</Text>
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
            <Text style={styles.inputText}>Location</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={styles.locationInput}
                    placeholder="Enter a location"
                    placeholderTextColor="#adadad"
                    onChangeText={(location) => setLocation(location)}
                />
                <MaterialIcons name="add-location-alt" size={24} color="black" />
            </View>
        </View>
    )
}

function RenderDifficulty() {
    const [difficulty, setDifficulty] = useState('');
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputText}>Difficulty</Text>
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
                <Text style={styles.inputText}>Add colour</Text>
                <TouchableOpacity style={styles.colourButton}>
                    <Text style={styles.buttonText}>
                        <MaterialIcons name="color-lens" size={20} color="#ffffff"/>
                        Pick colour
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%'}}>
                <Text style={styles.inputText}>Add image</Text>
                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.buttonText}>
                        <AntDesign name="plus" size={20} color="#ffffff" />
                        Add image
                    </Text>
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
            <Text style={styles.checkboxText}>Boulder has been topped</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    inputView: {
        marginTop: 20,
        fontFamily: 'sans-serif-medium',
        width: '80%'
    },
    buttonView: {
        marginTop: 20,
        fontFamily: 'sans-serif-medium',
        width: '80%',
        flexDirection: 'row'
    },
    checkboxView: {
        marginTop: 20,
        fontFamily: 'sans-serif-medium',
        width: '80%',
        flexDirection: 'row'
    },
    text: {
        marginBottom: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 24
    },
    inputText: {
        color: '#d77079',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
    textInput: {
        color: 'black',
        borderBottomColor: '#adadad',
        borderBottomWidth: 2,
        fontFamily: 'sans-serif-medium',
    },
    locationInput: {
        color: 'black',
        borderBottomColor: '#adadad',
        borderBottomWidth: 2,
        width: '90%',
        fontFamily: 'sans-serif-medium',
    },
    colourButton: {
        width: "80%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#797878",
        fontFamily: 'sans-serif-medium'
    },
    imageButton: {
        width: "80%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#797878",
        fontFamily: 'sans-serif-medium'
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'sans-serif-medium'
    },
    checkbox: {
        alignSelf: "center",
    },
    checkboxText: {
        margin: 0
    }
});

// <Text>Passed Parameters: {JSON.stringify(passingParams)}</Text>