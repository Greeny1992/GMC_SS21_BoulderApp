import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../contexts/auth_context";
import AddBoulder from "../screens/addBoulder";
import DetailBoulder from "../screens/detailBoulder";
import Home from "../screens/home";
import Main from "../screens/main";
import BButton from "./utils/button";
import BText from "./utils/text";


const MainStack = createStackNavigator();
const MainNavigation = () => {
    const authContext = useContext(AuthContext);
    const onPressLogout = () =>{
        authContext.login(false);
        authContext.verify(false);
    };
    return(
    <NavigationContainer>
          <MainStack.Navigator initialRouteName="HomeScreen">
            <MainStack.Screen name="HomeScreen" component={Main} 
              options= {{
                headerRight: () => (
                    <BButton onPress={onPressLogout} style={{backgroundColor: 'red'}}><BText>Logout</BText></BButton>
                )
                      }} />
            <MainStack.Screen name="ListScreen" component={Home} />
            <MainStack.Screen name="AddBoulderScreen" component={AddBoulder} />
            <MainStack.Screen name="DetailBoulderScreen" component={DetailBoulder} />
          </MainStack.Navigator>
    </NavigationContainer>
    )
}
export default MainNavigation