import BoulderMetadata from "../../components/widgets/boulderMetadata";
import {StyleSheet} from "react-native";

const BoulderMetadataStyle = StyleSheet.create({
   btn: {
        width: '45%',
       marginTop: 0,
       justifyContent:'center',
       alignItems:'center',
       marginBottom:10
   },
   details:{
      marginTop:7
   },
   icon:{
      marginRight:15
   },
   image:{
      borderRadius: 50,
      margin: 10,
      width:100,
      height:100,
   },
   edit:{
      justifyContent:'flex-end'
   },
  column:{
      marginLeft: 15,
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
});

export default BoulderMetadataStyle;