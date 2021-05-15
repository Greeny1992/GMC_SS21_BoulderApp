import {StyleSheet} from "react-native";

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
        right:50
    },
    userIcon:{
        position:'absolute'
    }
});

export default Home;