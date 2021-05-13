import React from 'react'
import {Platform, Text, StyleSheet} from 'react-native'
import TextStyle from '../../../styles/utils/text'

interface BTextProps {
    style?: any,
    numberOfLines?: number,
    children?:any,
    color?:string
}

const BText: React.FC<BTextProps> = (props: any) => {
    return <Text style={[styles.font, props.style, {color:props.color}]} numberOfLines={props.numberOfLines}>{props.children}</Text>
}
interface BTitleProps {
    style?: any,
    label:string
    color?:string
}

export const BTitle: React.FC<BTitleProps> = (props: BTitleProps) => {
    const {style,  label, color} = props;
    return <BText style={[styles.font, style,TextStyle.title]} color={color} >{label}</BText>
}

export const BSubTitle: React.FC<BTitleProps> = (props: BTitleProps) => {
    const {style,  label} = props;
    return <BText style={[styles.font, style,TextStyle.subTitle]} >{label}</BText>
}
const styles = StyleSheet.create({
    font: {
        fontFamily: Platform.OS=== 'ios' ? 'Futura Medium' : 'Roboto'
    },
})
export default BText
