import { StyleSheet } from "react-native";
import { FontSizes, ScreenSizes } from "../constants/ui";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: ScreenSizes.layout_distance,
        marginBottom: ScreenSizes.layout_distance,
    },
    loginArea: {
        flex: 0.2,
        padding: ScreenSizes.layout_distance
    },
    loginButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        width: '70%',
        alignItems: 'center',
    },
    itemImage: {
        minWidth: '100%',
        maxWidth: '100%'
    },
    headline: {
        fontSize: FontSizes.x_large,
        color: '#147aff',
        fontWeight: 'bold',
        marginTop: 20,
    },
    itemTitle: {
        marginTop: 20,
        color: '#147aff',
        fontSize: FontSizes.normal,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemDescription: {
        fontSize: FontSizes.small,
        marginVertical: 5,
    },
    itemMoreLink: {
        color: '#147aff',
        fontSize: FontSizes.tiny,
        fontWeight: 'bold',
    },
})