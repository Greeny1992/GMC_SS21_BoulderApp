import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../../screens/login";


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