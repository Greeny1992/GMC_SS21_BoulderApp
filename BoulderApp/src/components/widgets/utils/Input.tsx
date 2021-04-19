import React from 'react'
import {TextInput, View} from 'react-native'
import styles from '../../../styles/utils/Input';
import BLabel from './label';



interface BInputProps {
    style?: any,
    onChangeText?: Function,
    label:string,
    placeholder:string,
    multiline?:boolean
}
export const BInput: React.FC<BInputProps> = (props: BInputProps) => {
    const {onChangeText,label,placeholder, style,multiline}=props
    const styling = multiline ? styles.multiline : styles.input ;

    return (
            <View >
                <BLabel label={label}/>
                <TextInput
                    style={[styling]}
                    placeholder={ placeholder ?? "Placeholder"}
                    placeholderTextColor="#adadad"
                    onChangeText={(text)=> onChangeText(text)}
                    numberOfLines={multiline ? 8 : 1}
                    multiline={multiline}
                />
            </View>
        )
    
}


export default BInput;