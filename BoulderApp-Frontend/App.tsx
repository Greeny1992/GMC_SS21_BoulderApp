import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Pressable, Button } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import AddBoulder from "./src/components/screens/addBoulder";
import Login from './src/components/screens/login';
import Main from "./src/components/screens/main";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const loggedInHandler = () => {
      setLoggedIn(!loggedIn);
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      
        {loggedIn ? (
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={Main} 
              options= {{
                headerRight: () => (
                  <div style={{marginRight: 5}}>
                    <Button title="Logout" onPress={loggedInHandler} color="red"/>
                  </div>
                )
            }}/>
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
