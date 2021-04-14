import {StyleSheet} from "react-native";

const ButtonStyles = StyleSheet.create({
    btn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#147aff",
        flexDirection:'row',
        color: 'white',
        marginTop:25,
    },
  
    buttonText: {
        color: '#ffffff',
    },
    btnIcon:{
        paddingRight: 5,
        color:'#ffffff'
    },
   
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    }
});

export default ButtonStyles;