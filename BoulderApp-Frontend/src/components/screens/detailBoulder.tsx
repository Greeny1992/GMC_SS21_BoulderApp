import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BOULDER_DATA, { IBoulder } from '../../entities/Boulder';

export default function DetailBoulder({route, navigation}: any) {
    // const { passingParams } = route.params;
    const { boulderID, otherParam } = route.params;
    console.log(boulderID)
    const getBoulderDetails =(id:string):IBoulder | undefined=>{
        return BOULDER_DATA.find(boulder => boulder.id = boulderID)
    }
    const [boulder, setBoulder_data] = useState(getBoulderDetails(boulderID));
    console.log(boulder?.id ?? "empty")
    console.log(boulder?.title?? "empty")

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
                <Text h1>
                    Boulder: {boulder.title}
                </Text>
            </>
    )
}