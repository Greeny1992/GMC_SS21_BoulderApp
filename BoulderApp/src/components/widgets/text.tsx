import React from 'react'
import {Platform, Text, StyleSheet} from 'react-native'

interface BTextProps {
    style?: any,
    numberOfLines?: number
}

const BText: React.FC<BTextProps> = (props: any) => {
    return <Text style={[styles.font, props.style]} numberOfLines={props.numberOfLines}>{props.children}</Text>
}
const styles = StyleSheet.create({
    font: {
        fontFamily: Platform.OS=== 'ios' ? 'San Francisco' : 'Roboto'
    },
})
export default BText
