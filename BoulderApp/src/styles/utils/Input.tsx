import { StyleSheet } from 'react-native'
import ColorTheme from '../theme/Color'

const inputBasic = {
    color: ColorTheme.primary,
    borderBottomColor: ColorTheme.primary_dark,
    borderBottomWidth: 2,
}

const InputStyle = StyleSheet.create({
    label: {
        color: ColorTheme.primary,
        fontWeight: 'bold',
    },
    input: {
        ...inputBasic
    },
    multiline:{
        ...inputBasic,
        height:150,
        textAlignVertical: 'top',
        paddingTop: 0,
        paddingBottom: 0
    }
 }
)

export default InputStyle