import {StyleSheet} from "react-native";
import ColorTheme from "./theme/Color";

const ButtonStyles = StyleSheet.create({
    btn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ColorTheme.hightlight,
        flexDirection:'row',
        color: 'white',
        marginTop:10
    },
  
    buttonText: {
        color: '#ffffff',
    },
   
   
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    }
});

export default ButtonStyles;