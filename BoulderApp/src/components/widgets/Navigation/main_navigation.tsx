import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenSizes } from "../../../constants/ui";
import { AuthContext } from "../../../contexts/auth_context";
import ButtonStyles from "../../../styles/button";
import AddBoulder from "../../screens/addBoulder";
import DetailBoulder from "../../screens/detailBoulder";
import Home from "../../screens/home";
import Main from "../../screens/main";
import BText from "../utils/text";


const MainStack = createStackNavigator();
const MainNavigation = () => {
    const authContext = useContext(AuthContext);
    const onPressLogout = () =>{
        authContext.login(false);
        authContext.verify(false);
    };

    const logoutButton = ()  => {
      return (
        <TouchableOpacity onPress={onPressLogout} style={ButtonStyles.btn}>
                    <BText>Logout</BText>
        </TouchableOpacity>
      )
    }
    return(
    <NavigationContainer>
          <MainStack.Navigator initialRouteName="HomeScreen">
            <MainStack.Screen name="HomeScreen" component={Main} 
              options= {{
                headerRight: () => (
                  <TouchableOpacity onPress={onPressLogout} style={{padding: ScreenSizes.layout_distance}}>
                    <Icon  name="logout" color="#df4040"/>
                  </TouchableOpacity>
                )}} />
            <MainStack.Screen name="ListScreen" component={Home} />
            <MainStack.Screen name="AddBoulderScreen" component={AddBoulder} />
            <MainStack.Screen name="DetailBoulderScreen" component={DetailBoulder} />
          </MainStack.Navigator>
    </NavigationContainer>
    )
}
export default MainNavigation