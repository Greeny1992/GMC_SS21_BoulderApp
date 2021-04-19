import React from 'react'
import {TextInput, View} from 'react-native'
import styles from '../../../styles/utils/Input';
import BText from './text';



interface BInputProps {
    style?: any,
    onChangeText: Function,
    label:string,
    placeholder:string,
    numberOfLines?:number
}
export const BInput: React.FC<BInputProps> = (props: BInputProps) => {
    const {onChangeText,label,placeholder, style,numberOfLines}=props
    return (
            <View >
                <BText style={styles.label}>{label}</BText>
                <TextInput
                    style={styles.input}
                    placeholder={ placeholder ?? "Placeholder"}
                    placeholderTextColor="#adadad"
                    onChangeText={(text)=> onChangeText(text)}
                    numberOfLines={numberOfLines ?? 1}
                />
            </View>
        )
    
}


export default BInput;