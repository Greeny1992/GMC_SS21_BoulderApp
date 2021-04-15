import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import styles from '../../styles/button';
import BText from './text';

interface BButtonProps {
    style?: any,
    onPress: any
}

const BButton: React.FC<BButtonProps> = (props: any) => {
    return <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>{props.children}</TouchableOpacity>
}
interface BExtendedButtonProps {
    style?: any,
    onPress: Function,
    title:string
}
export const BExtendedButton: React.FC<BExtendedButtonProps> = (props: BExtendedButtonProps) => {
    const {onPress,title}=props
    return (
        <View style={styles.buttonContainer}>
            <BButton style={[styles.btn]}  onPress={onPress}>
                <BText style={styles.buttonText}>
                    {title}
                </BText>
            </BButton>
        </View>
    )
}


export default BButton;