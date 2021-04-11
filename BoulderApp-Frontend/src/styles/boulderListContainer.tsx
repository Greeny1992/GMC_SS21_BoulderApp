import { StyleSheet } from 'react-native'

const BoulderListContainerStyle = StyleSheet.create({
    inputView: {
        margin: 20,
        fontFamily: 'sans-serif-medium',
    },

    text: {
        marginBottom: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 24,
    },

    btn: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50,
        backgroundColor: "#147aff",
    },
    bouldList:{
        marginTop: 30,
    },
    buttonText: {
        color: '#ffffff',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    }
});

export default BoulderListContainerStyle;