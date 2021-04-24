import {StyleSheet} from "react-native";
import ColorTheme from "./theme/Color";

const ButtonStyles = StyleSheet.create({
    btn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ColorTheme.highlight,
        flexDirection:'row',
        color: ColorTheme.highlightContrast,
        marginTop:10
    },
    btnUnderlined:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection:'row',
        
        color: ColorTheme.highlight,
        marginTop:10,
        borderBottomWidth:1,
        borderColor:ColorTheme.primary
    },
  
    buttonText: {
        color: ColorTheme.primary,
        fontSize: 20
    },
   
   
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    }
});

export default ButtonStyles;