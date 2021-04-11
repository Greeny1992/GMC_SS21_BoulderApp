import React, {useState} from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Text,Button} from 'react-native-elements';
import BOULDER_DATA, { IBoulder } from '../../entities/Boulder';
import ButtonStyles from '../../styles/button';
import styles from '../../styles/detailBoulder';
import { AntDesign } from '@expo/vector-icons';
import BText from "../widgets/text";

export default function DetailBoulder({route, navigation}: any) {
    const { boulderID } = route.params;
    console.log(boulderID)
    const getBoulderDetails =(id:string):IBoulder | undefined=>{
        return BOULDER_DATA.find(boulder => boulder.id = boulderID)
    }
    const handlePress = (id : string) => {
        console.log("ID: " +id)
        navigation.navigate('AddBoulderScreen', {
            boulderID: id
        })
    }
    const [boulder, setBoulder] = useState(getBoulderDetails(boulderID));
    console.log(boulder?.id ?? "empty")
    console.log(boulder?.title?? "empty")
    return ( 
        boulder === undefined
        ?
            <>
                <BText>
                    No details found!
                </BText>
            </>
        :
            <>
                <View
                    style={styles.container}>
                    <View
                        style={styles.header}>
                        <BText>
                            Boulder: {boulder.title}
                        </BText>
                        
                    </View>
                    <View
                        style={styles.buttonContainer}
                    >
                    <Button
                        icon={{
                            name: "edit",
                            size: 15,
                            color: "white"
                        }}
                        style={[ButtonStyles.btn]}
                        title="Edit"
                        type="outline"
                        onPress={() =>handlePress(boulder.id)}
                        />
                    <TouchableOpacity style={[ButtonStyles.btn]}  onPress={()=>handlePress(boulder.id)}>
                        <AntDesign name="edit" size={20} color="#ffffff" />
                    </TouchableOpacity>
                    </View>
                </View>
            </>
    )
    
    
}
