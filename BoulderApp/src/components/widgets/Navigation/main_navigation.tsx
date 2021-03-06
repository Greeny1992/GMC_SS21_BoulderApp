import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenSizes } from "../../../constants/ui";
import { AuthContext } from "../../../contexts/auth_context";
import { clearData } from "../../../data/store/store";
import ButtonStyles from "../../../styles/button";
import AddBoulder from "../../screens/addBoulder";
import DetailBoulder from "../../screens/detailBoulder";
import Home from "../../screens/home";
import Main from "../../screens/main";
import SynchScreen from "../../screens/updateConfirm";
import BText from "../utils/text";


const MainStack = createStackNavigator();
const MainNavigation = () => {
    const authContext = useContext(AuthContext);
    const onPressLogout = () =>{
        authContext.login(false);
        authContext.verify(false);
        clearData();
    };
    return(
    <NavigationContainer>
          <MainStack.Navigator initialRouteName="HomeScreen">
            <MainStack.Screen name="HomeScreen" component={Home} 
              options= {{
                headerRight: () => (
                  <TouchableOpacity onPress={onPressLogout} style={{padding: ScreenSizes.layout_distance}}>
                    <Icon  name="logout" color="#df4040"/>
                  </TouchableOpacity>
                
                ),
                title: "Change the world on a boulder!"}} 
                initialParams={{ update: false }}
                />
            <MainStack.Screen name="ListScreen" component={Home} options={{title: ""}}/>
            <MainStack.Screen name="SynchScreen" component={SynchScreen} options={{title: ""}}/>
            <MainStack.Screen name="AddBoulderScreen" component={AddBoulder} options={{title: ""}}/>
            <MainStack.Screen name="DetailBoulderScreen" component={DetailBoulder} options={{title: ""}}/>
          </MainStack.Navigator>
    </NavigationContainer>
    )
}
export default MainNavigation