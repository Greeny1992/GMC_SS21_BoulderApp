import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import { Icon } from 'react-native-elements';
import IconStyle from '../../../styles/utils/icon';
interface BIconProps {
    style?: any,
    onPress: any,
    icon:string,
    color?:string
}

const BIcon: React.FC<BIconProps> = (props: any) => {
    const {onPress,title, style, icon,color}=props
    return (
        <TouchableOpacity onPress={onPress} style={[style, IconStyle.iconContainer]}>
            <Icon  name={icon} color={color} size={35}/>
        </TouchableOpacity>
    )
}



export default BIcon;