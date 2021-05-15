import { StyleSheet, StatusBar } from 'react-native'
import {FontSizes} from "../../constants/ui";
import ColorTheme from '../theme/store/ColorMainTheme'

const BoulderListStyle = StyleSheet.create({
  sectionLi: {
    height: '90%',
  },
    container: {
        flex: 1,
        width: '100%',
      },
      item: {
        width: '100%',
        // backgroundColor: "#c0e6ff",
        padding: 8,
        marginVertical: 0,
        marginHorizontal: 0,
        borderWidth:0.5,
        borderColor: ColorTheme.highlightContrast,
        alignItems: 'center',
      },
      title: {
        textAlign: 'left',
        fontSize: FontSizes.normal,
        width: '90%',
      },
      detailRow:{
        width:'100%',
        marginTop:2,
        alignContent: 'space-between',
      },
      details:{
        fontSize:FontSizes.small,
        color:ColorTheme.primary_light,

      },
      difficulty: {
        textAlign: 'left',
        width:'40%'

      },
      badge: {
      },
      date: {
        flexDirection: "column",
        textAlign: 'center',
        fontSize: FontSizes.small
      },
      itemsgroup: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      itemsgroupdate: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
      },


      //Search and Add-button
      headerSearch: {
        flexDirection: 'row',
        height:60,
        width:"100%",
        backgroundColor:'white'
     
      },
      textInputStyle: {
        height: 30,
        paddingLeft: 0,
        margin: 5,
        color:'#ffffff',
        paddingVertical: 0,
        backgroundColor: '#ffffff',
        borderColor: ColorTheme.primary,
        borderWidth:1,
      },
      icon:{
        width:30
      },
      textInputContainerStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
        borderBottomColor: '#ffffff',
        borderTopColor: '#ffffff',
        backgroundColor: '#ffffff',
      },
      addbuttoncontainer: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        paddingBottom: 10,
        paddingTop: 1,
        height: '10%',
      },
      searchbox: {
        width: '70%',
        height: '80%',
        color:'#ffffff',
        backgroundColor:'green'

      },
      btnbox: {
        width: '30%',
        height: '100%',
        backgroundColor: 'white',      
      },
      btn: {
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#147aff",
        flexDirection:'row',
        color: 'white'
      },


      //Header List
      sectionheader: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#999999',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
      },
      textsectionheader: {
        fontSize: FontSizes.large,
        color: '#ffffff',
      }
});

export default BoulderListStyle;