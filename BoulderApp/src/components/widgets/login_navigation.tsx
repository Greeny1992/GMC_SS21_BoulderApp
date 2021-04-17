import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Alert, View } from "react-native";
import AddBoulder from "../screens/addBoulder";
import DetailBoulder from "../screens/detailBoulder";
import Home from "../screens/home";
import Login from "../screens/login";
import Main from "../screens/main";
import NewsScreen from "../screens/news";
import BButton from "./utils/button";
import BText from "./utils/text";


const LoginStack = createStackNavigator();
const LoginNavigation = () => {
    return(
    <NavigationContainer>
          <LoginStack.Navigator>
            <LoginStack.Screen name="LoginScreen" component={Login}  />
          </LoginStack.Navigator>
    </NavigationContainer>
    )
}
export default LoginNavigation;