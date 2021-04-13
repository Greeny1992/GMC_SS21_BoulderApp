import React from 'react';
import {View} from 'react-native';
import BOULDER_DATA, { IBoulder } from '../../entities/Boulder';
import BText from "../widgets/text";
import LayoutStyle from '../../styles/layout';
import {  Divider } from 'react-native-elements';
import TextStyle from '../../styles/text';
import BoulderInteractionList from '../widgets/boulderInteractionList';
import BoulderMetadata from '../widgets/boulderMetadata';

export default function DetailBoulder({route, navigation}: any) {
    const { boulderID } = route.params;
    const getBoulderDetails =(id:string):IBoulder | undefined=>{
        return BOULDER_DATA.find(boulder => boulder.id === boulderID)
    }
 
    const boulder = getBoulderDetails(boulderID);
    
    return ( 
        boulder === undefined
        ?
            <>
                <BText>
                    No details found!
                </BText>
            </>
        :
            <View style={[LayoutStyle.containerView]}>
                    <BoulderMetadata boulder={boulder} navigation={navigation}/>
                    <Divider style={LayoutStyle.divider} />
                    <BText style={[TextStyle.subTitle]}>Boulder Interaktion</BText>
                    <BoulderInteractionList boulder_id={boulder.id} user_id=''/>
            </View>
    )
    
    
}
