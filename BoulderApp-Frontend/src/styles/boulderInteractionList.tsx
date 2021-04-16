import { StyleSheet, StatusBar } from 'react-native'
import { withTheme } from 'react-native-elements';

const BoulderInteractionListStyle = StyleSheet.create({
      item: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        position: 'relative',
        backgroundColor: "#c0e6ff",
        padding: 20,
      },
      icon: {
        height: 50,
        width: 50,
      },
      title: {
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        fontSize: 14,
      },
      box: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        paddingRight: 5,
      },
      comment: {
        textAlign: 'center',
        flexDirection: "column",
        fontSize: '12',
      },
      date: {
        flexDirection: "column",
        textAlign: 'center',
        fontSize: 12,
      },
});

export default BoulderInteractionListStyle;