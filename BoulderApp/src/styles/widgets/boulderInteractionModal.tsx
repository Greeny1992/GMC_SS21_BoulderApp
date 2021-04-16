import { StyleSheet } from "react-native"

const styles = StyleSheet.create ({
    modal: {
       flex: 1,
       flexDirection:'column',
       justifyContent:'center',
       alignItems: 'center',
        width:'100%',

    },
    text: {
       color: '#3f2949',
       marginTop: 10
    },
    modalInside:{
        alignItems: 'center',
        height:'50%',
        width: '80%'
    }
 })

 export default styles