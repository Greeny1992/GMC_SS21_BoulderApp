import BoulderMetadata from "../../components/widgets/boulderMetadata";
import {StyleSheet} from "react-native";
import { FontSizes } from "../../constants/ui";
import ColorTheme from "../theme/Color";

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
  date:{
    marginTop:20,
    width: '100%',
    fontSize: FontSizes.tiny,
    paddingRight: '3%',
    textAlign: 'left',
    color: ColorTheme.primary_light,
  },
  row:{
      marginTop:5
  },
  creationDetails:{
     
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