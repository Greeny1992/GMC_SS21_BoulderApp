import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import styles from '../../styles/button';

interface BButtonProps {
    style?: any,
    onPress: any
}

const BButton: React.FC<BButtonProps> = (props: any) => {
    return <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>{props.children}</TouchableOpacity>
}

export default BButton
