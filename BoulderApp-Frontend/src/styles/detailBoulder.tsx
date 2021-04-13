import { StyleSheet } from 'react-native'

const DetailBoulderStyle = StyleSheet.create({


    image:{
        borderRadius: 50,
        margin: 10,
        width:100,
        height:100,
    },
   
    column:{
        marginRight: 5,
    },
    row:{
        marginTop:5
    },
    badgeContainer:{
        position: "absolute",
        top: 15,
        right: 15,
        borderRadius: 25,
        width: 25,
        height: 25,
    },
    badge:{
        width: 25,
        height: 25,
        borderRadius: 25,
    }
}
);
export default DetailBoulderStyle;
