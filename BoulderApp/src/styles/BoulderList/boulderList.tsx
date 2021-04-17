import { StyleSheet, StatusBar } from 'react-native'
import { withTheme } from 'react-native-elements';

const BoulderListStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
      },
      item: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: "#c0e6ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 0,
      },
      title: {
        textAlign: 'center',
        flexDirection: "row",
        width: '25%',
        fontSize: 18,
      },
      difficulty: {
        textAlign: 'center',
        flexDirection: "column",
        fontSize: 14,
        justifyContent: 'center',
      },
      badge: {
        textAlign: 'center',
        flexDirection: "column",
      },
      date: {
        flexDirection: "column",
        textAlign: 'center',
        fontSize: 14,
      },
      itemsgroup: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      location: {
        flexDirection: "row",
        fontSize: 14,
      },
      icon: {
        height: 20,
        width: 18,
        flexDirection: "column",
        justifyContent: 'center',
      },


      //Search and Add-button
      headerSearch: {
        flexDirection: 'row',
      },
      textInputStyle: {
        height: 40,
        borderWidth: 0,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#ffffff',
        backgroundColor: '#e0ffff',
        paddingVertical: 0,
      },
      textInputContainerStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        borderBottomColor: 'white',
        borderTopColor: 'white'
      },
      addbuttoncontainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 1,
      },
      searchbox: {
        width: '80%',
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
        marginTop: 0,
        backgroundColor: "#147aff",
        flexDirection:'row',
        color: 'white'
      },


      //Header List
      itemheader: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: "#c0e6ff",
        padding: 5,

      },
      headlinesectiontitle: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '20%',
        textAlign: 'center',
      },
      headlinesectionlocation: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '20%',
        textAlign: 'center',
      },
      headlinesectiondifficulty: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '20%',
        textAlign: 'center',
      },
      headlinesectiondate: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '20%',
        textAlign: 'center',
      },
      headlinesectioncolor: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '20%',
        textAlign: 'center',
      },
});

export default BoulderListStyle;