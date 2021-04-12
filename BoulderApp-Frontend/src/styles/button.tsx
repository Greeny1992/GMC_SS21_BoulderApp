import {StyleSheet} from "react-native";

const ButtonStyles = StyleSheet.create({
    btn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#147aff",
        flexDirection:'row',
        color: 'white'
    },
  
    buttonText: {
        color: '#ffffff',
    },
    btnIcon:{
        paddingRight: 5,
    },
   
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    }
});

export default ButtonStyles;