import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button} from 'react-native-elements';
import BOULDER_DATA, { IBoulder } from '../../entities/Boulder';
import ButtonStyles from '../../styles/button';

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
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
        },
        header: {
            width: '80%',
        },
        buttonContainer: {
            width: '20%',
            marginTop:10,
        },
        button:{
            color: 'white',
            border: 'none',
        }

    }
    )
    return ( 
        boulder === undefined
        ?
            <>
                <Text h1>
                    No details found!
                </Text>
            </>
        :
            <>
                <View
                    style={styles.container}>
                    <View
                        style={styles.header}>
                        <Text h1 >
                            Boulder: {boulder.title}
                        </Text>
                        
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
                    </View>
                </View>
            </>
    )
    
    
}
