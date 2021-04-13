import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Pressable, Button, ImageBackground } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import AddBoulder from "./src/components/screens/addBoulder";
import Login from './src/components/screens/login';
import Main from "./src/components/screens/main";
import BoulderListContainer from "./src/components/screens/boulderListContainer";
import DetailBoulder from "./src/components/screens/detailBoulder";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const loggedInHandler = () => {
      setLoggedIn(!loggedIn);
  }
  const bg = require('./src/assets/images/background.jpg');
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      
        {loggedIn ? (
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={Main} 
              options= {{
                headerRight: () => (
                  <View style={{marginRight: 5}}>
                    <Button title="Logout" onPress={loggedInHandler} color="red"/>
                  </View>
                )
                      }} />
            <Stack.Screen name="ListScreen" component={BoulderListContainer} />
            <Stack.Screen name="AddBoulderScreen" component={AddBoulder} />
            <Stack.Screen name="DetailBoulderScreen" component={DetailBoulder} />
          </Stack.Navigator>
        ) : (
          <View style={styles.container}>
            <ImageBackground source={bg} style={styles.image}>
            <Login loggedInHandler={loggedInHandler}></Login>
            </ImageBackground>
          </View>
        )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    }
});
