import {StyleSheet} from "react-native";
import ColorTheme from "./theme/Color";

const Home = StyleSheet.create({
    userRow:{
        height:20,
        backgroundColor: '#ffffff',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    userDetail:{
        width:'30%',
        textAlign:'right',
        position:'absolute',
        right:50,
        color: ColorTheme.primary_light,
    },
    userIcon:{
        position:'absolute',
        color: ColorTheme.primary_light,
    }
});

export default Home;