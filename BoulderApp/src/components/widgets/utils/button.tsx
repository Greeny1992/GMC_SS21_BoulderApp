import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import { Icon } from 'react-native-elements';
import { FontSizes } from '../../../constants/ui';
import styles from '../../../styles/button';
import ColorTheme from '../../../styles/theme/Color';
import BIcon, { BIconProps } from './icon';
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
    onPress: any,
    title:string,
    underlined?:boolean
}
export const BExtendedButton: React.FC<BExtendedButtonProps> = (props: BExtendedButtonProps) => {
    const {onPress,title, style,underlined}=props
    const btnStyle = underlined ? styles.btnUnderlined : styles.btn;
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[btnStyle, props.style]} onPress={onPress}>
                <BText style={[styles.buttonText, {fontSize:FontSizes.normal}]}>
                    {title}
                </BText>
            </TouchableOpacity>
            
        </View>
    )
}


interface BIconButtonProps extends BIconProps {
    label?:string
}

export const BIconButton: React.FC<BIconButtonProps> = (props: BIconButtonProps) => {
    const {onPress, style, icon,color,size,label}=props
    return (
        <TouchableOpacity onPress={onPress} style={[style, styles.btn,{justifyContent:'center'}]}>
            <Icon  name={icon} color={ColorTheme.highlightContrast} size={28} />
            <BText style={{marginLeft:8, color:ColorTheme.highlightContrast}}>{label}</BText>
        </TouchableOpacity>
    )
}

export default BButton;