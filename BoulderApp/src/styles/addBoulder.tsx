import {StyleSheet} from "react-native";

const AddBoulderStyle = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center"
    },
    inputView: {
        marginTop: 20,
        width: '80%'
    },
    buttonView: {
        marginTop: 20,
        width: '80%',
        flexDirection: 'row'
    },
    checkboxView: {
        flex: 1,
        width: '80%',
        flexDirection: 'row'
    },
    text: {
        marginBottom: 20,
        fontSize: 24
    },
    inputText: {
        color: '#d77079',
        fontWeight: 'bold',
    },
    textInput: {
        color: 'black',
        borderBottomColor: '#adadad',
        borderBottomWidth: 2,
    },
    locationInput: {
        color: 'black',
        borderBottomColor: '#adadad',
        borderBottomWidth: 2,
        width: '90%',
    },
    colourButton: {
        width: "80%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#797878",
    },
    imageButton: {
        width: "80%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#797878",
    },
    buttonText: {
        color: '#ffffff',
    },
    checkbox: {
        alignSelf: "center",
        marginRight:15
    },
  
    formrow:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:30
        
    }
});

export default AddBoulderStyle;