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
        flexDirection: 'row',
        width: '100%',
        backgroundColor: "#c0e6ff",
        padding: 20,
        marginVertical: 0,
        marginHorizontal: 0,
        borderWidth:0.5,
        borderColor: ColorTheme.highlightContrast,
        alignItems: 'center',
      },
      title: {
        textAlign: 'center',
        fontSize: FontSizes.normal,
        width: '50%'
      },
      difficulty: {
        textAlign: 'center',
        fontSize: FontSizes.normal,
        justifyContent: 'center',
      },
      badge: {
        textAlign: 'center',
        flexDirection: "column",
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
        backgroundColor: 'red',
        height: '10%',
      },
      textInputStyle: {
        height: 40,
        borderWidth: 0,
        paddingLeft: 20,
        margin: 10,
        borderColor: '#ffffff',
        backgroundColor: '#e0ffff',
        paddingVertical: 0,
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
      },
      searchbox: {
        width: '80%',
        height: '100%',
      },
      btnbox: {
        width: '20%',
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
        backgroundColor: ColorTheme.highlight,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
      },
      textsectionheader: {
        fontSize: FontSizes.large,
        color: ColorTheme.highlightContrast,
      }
});

export default BoulderListStyle;