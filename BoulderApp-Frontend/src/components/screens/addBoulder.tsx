import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox} from 'react-native';

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
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [colour, setColour] = useState(colourScale.none);
    const [topped, setTopped] = useState(false);
    return (
        <>
            <Text style={styles.text}>Add Boulder Screen</Text>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter a name"
                    placeholderTextColor="#adadad"
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Location</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter a location"
                    placeholderTextColor="#adadad"
                    onChangeText={(location) => setLocation(location)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Difficulty</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter a difficulty"
                    placeholderTextColor="#adadad"
                    onChangeText={(difficulty) => setDifficulty(difficulty)}
                />
            </View>
            <View style={styles.buttonView}>
                <Text style={styles.inputText}>Add colour</Text>
                <TouchableOpacity style={styles.colourButton}>
                    <Text style={styles.buttonText}>Pick colour</Text>
                </TouchableOpacity>
                <Text style={styles.inputText}>Add image</Text>
                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.buttonText}>Add image</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <CheckBox
                    value={topped}
                    onValueChange={setTopped}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxText}>Boulder has been topped</Text>
            </View>
        </>
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
    colourButton: {
        width: "30%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#797878",
        fontFamily: 'sans-serif-medium'
    },
    imageButton: {
        width: "30%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
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