import { StyleSheet } from 'react-native'
import {FontSizes} from "../../constants/ui";
import ColorTheme from '../theme/store/ColorMainTheme'

const BoulderInteractionListStyle = StyleSheet.create({
      listinteractions:{
        backgroundColor: ColorTheme.highlightContrast,
      },
      item: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
         backgroundColor: "rgba(244,244,244,.5)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(244,244,244,.5)",

      },
      owneditem: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
        backgroundColor: "rgba(244,244,244,.5)",
        borderRadius: 5,
        borderWidth: .5,
        borderColor: "rgba(244,244,244,.5)",
      },
      box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '98%',
        margin: 1,
        borderColor: 'white', 
      },


      //Title-Flexbox
      boxtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '5%',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'white', 
      },
      titleinnerbox: {      
        justifyContent: 'center',
        width: '90%',
      },
      iconinnerbox: {      
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
      },
      title: {      
        justifyContent: 'center',
        fontSize: FontSizes.normal,
        fontWeight: 'bold',
        width:"90%",
        color: ColorTheme.default,
        
      },
      editable: {
        marginRight: '100%',
        textAlign: 'right',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'white',
      },


      //State-Flexbox
      statecomment: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        paddingLeft: '8%',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
      },
      stateHeader: {
        fontSize: FontSizes.small,
        fontWeight: 'bold',
        width: '20%',
        textAlign: 'left',
        paddingRight: 10,
        color: ColorTheme.default,
      },
      state: {
        fontSize: FontSizes.small,
        width: '80%',
        textAlign: 'left',
        paddingLeft: 10,
        marginBottom: 5,
        color: ColorTheme.default,
      },


      //Comment(Main)-Flexbox
      boxcomment: {
        justifyContent: 'center',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '10%',
        paddingTop: 5,
        paddingBottom: 5,
      },
      commentHeader: {
        fontSize: FontSizes.small,
        fontWeight: 'bold',
        textAlign: 'left',
        color: ColorTheme.default,
      },
      comment: {
        fontSize: FontSizes.small,
        color: ColorTheme.default,
      },


      //Author(Bottom)-Flexbox
      boxauthor: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingRight: '2%',
        paddingLeft: '2%',
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: 'white', 
        borderTopWidth: 0.5,
      },
      authordetails: {
        width: '50%',
        fontSize: FontSizes.tiny,
        paddingRight: '3%',
        textAlign: 'right',
        color: ColorTheme.primary_light,
      },
      datedetails:{
        width: '50%',
        fontSize: FontSizes.tiny,
        paddingLeft: '3%',
        textAlign: 'left',
        color: ColorTheme.primary_light,
      }
});

export default BoulderInteractionListStyle;