import React from 'react'
import { NativeSyntheticEvent } from 'react-native';
import { TextInput, View} from 'react-native'
import styles from '../../../styles/utils/Input';
import BLabel from './label';



interface BInputProps {
    style?: any,
    onChangeText: Function,
    label:string,
    placeholder:string,
    value?:string,
    multiline?:boolean,
    labelStyle?: any
}
export const BInput: React.FC<BInputProps> = (props: BInputProps) => {
    const {onChangeText,label,placeholder, style, labelStyle ,multiline, value}=props
    const styling = multiline ? styles.multiline : styles.input ;
    
    return (
            <View >
                <BLabel label={label} style={labelStyle}/>
                <TextInput
                    style={[styling, style]}
                    placeholder={ placeholder ?? "Placeholder"}
                    placeholderTextColor="#adadad"
                    numberOfLines={multiline ? 8 : 1}
                    multiline={multiline}
                    value={value ??''}
                    onChangeText={  (text)=> onChangeText(text) }
                />
            </View>
        )
    
}


export default BInput;