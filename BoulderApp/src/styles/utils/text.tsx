import { StyleSheet } from 'react-native'
import ColorTheme from '../theme/Color'

const TextStyle = StyleSheet.create({
    title: {
        // flex:4,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom:10,
        color:ColorTheme.hightlight
    },
    subTitle:{
        fontSize:18,
        fontWeight:'200',
        color:ColorTheme.primary_dark
    }
})

export default TextStyle