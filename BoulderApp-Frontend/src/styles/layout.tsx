import { StyleSheet } from 'react-native'

const LayoutStyle = StyleSheet.create({
    containerRow: {
        flex: 1,
        flexDirection: 'row',
    },
    containerCentered: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerView:{
        marginLeft:10,
        marginRight:10,
    },
    divider:{ 
        backgroundColor: '#147aff', 
        width:'100%',
    }
  

}
);
export default LayoutStyle;
