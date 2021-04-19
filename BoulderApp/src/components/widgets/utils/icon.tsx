import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import { Icon } from 'react-native-elements';
import ColorTheme from '../../../styles/theme/Color';
import IconStyle from '../../../styles/utils/icon';
import styles from '../../../styles/utils/icon';
import BButton from './button';
import BText from './text';
export interface BIconProps {
    style?: any,
    onPress?: any,
    icon:string,
    color?:string,
    size?:number
}

const BIcon: React.FC<BIconProps> = (props: any) => {
    const {onPress,title, style, icon,color,size}=props
    return (
        <TouchableOpacity onPress={onPress} style={[style, IconStyle.iconContainer]}>
            <Icon  name={icon} color={color} size={size ?? 35} type="material" />
        </TouchableOpacity>
    )
}

export const BIconBackround: React.FC<BIconProps> = (props: any) => {
    const {onPress,title, style, icon,color,size}=props
    return (
        <TouchableOpacity onPress={onPress} style={[style, IconStyle.iconContainer,{borderBottomWidth:1,borderColor:ColorTheme.primary,borderRadius:60,width:30}]}>
            <View style={{width:50,height:50, borderRadius:25,justifyContent:'center', alignItems: 'center'}}>
                <Icon  name={icon} color={ColorTheme.primary} size={size ?? 35} type="material" />

            </View>
        </TouchableOpacity>
    )
}




export default BIcon;