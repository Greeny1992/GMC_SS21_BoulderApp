import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../../styles/addBoulder';
import BText from "../widgets/utils/text";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { ScreenSizes } from "../../constants/ui";

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
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [colour, setColour] = useState(colourScale.none);
    const [topped, setTopped] = useState(false);
    const [image, setImage] = useState('');

    const RenderName = () =>  {
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

    const RenderLocation = () =>  {
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

    const RenderDifficulty = () => {
    
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

    const onPressImageUpload = () => {
        launchCamera({mediaType: 'photo'}, res => {
            if(res && res.uri) {
                setImage(res.uri);
                console.log(image)
            }
        })
    }

    const RenderColourAndImagePicker = () =>  {
    
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
                    <TouchableOpacity style={styles.imageButton} onPress={onPressImageUpload}>
                        <BText style={styles.buttonText}>
                            Add image
                        </BText>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const RenderImage = () => {
        return(
            <View style={{flex: 1, padding: ScreenSizes.layout_distance }}>
                <Image source={{uri: image}} style={{width: 200, height: '100%', borderRadius: 5 }}/>
            </View>
        )
    }
    
    const RenderTopped = () => {
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

    const bg = require('../../assets/images/background.jpg');
    return (
        <ImageBackground source={bg} style={styles.background}>
            <BText style={styles.text}>Add new boulder</BText>
            {RenderName()}
            {RenderLocation()}
            {RenderDifficulty()}
            {RenderColourAndImagePicker()}
            {RenderImage()}
            {RenderTopped()}
        </ImageBackground>
    )
}











