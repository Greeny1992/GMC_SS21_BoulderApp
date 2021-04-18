import { StyleSheet, StatusBar } from 'react-native'
import { withTheme } from 'react-native-elements';

const BoulderInteractionListStyle = StyleSheet.create({
      item: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
        backgroundColor: "#c0e6ff",
        padding: 20,
      },
      icon: {
        height: 70,
        width: 70,
      },
      title: {      
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
      },
      box: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '33%',
        maxWidth: '90%',
        margin: 10,
      },
      comment: {
        fontSize: 12,
      },
      commentHeader: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      date: {
        fontSize: 12,
      },
});

export default BoulderInteractionListStyle;