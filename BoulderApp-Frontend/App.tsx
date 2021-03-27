import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddBoulder from "./src/components/screens/addBoulder";
import Login from './src/components/screens/login';
import Main from "./src/components/screens/main";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const loggedInHandler = (loggedIn: boolean) => {
      setLoggedIn(loggedIn);
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      
        {loggedIn ? (
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={Main} />
            <Stack.Screen name="AddBoulderScreen" component={AddBoulder} />
          </Stack.Navigator>
        ) : (
          <View style={styles.container}>
          <Login loggedInHandler={loggedInHandler}></Login>
          </View>
        )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
