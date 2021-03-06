import { StyleSheet } from 'react-native'

const LayoutStyle = StyleSheet.create({
    containerRow: {
        // flex: 1,
        flexDirection: 'row',
      
    },
    containerRowSpace: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerCentered: {
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
        marginTop: 10,
        marginBottom:10,
    },
    debug:{
        backgroundColor:'red'
    },
    debug_2:{
        backgroundColor:'green'
    },
    fullWidth:{
        width:'100%'
    }

}
);
export default LayoutStyle;
