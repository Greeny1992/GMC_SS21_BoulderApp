import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddBoulder from "./src/components/screens/addBoulder";
import Login from './src/components/screens/login';
import Main from "./src/components/screens/main";
import BoulderListContainer from "./src/components/screens/boulderListContainer";


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
                    <Stack.Screen name="Boulder Crack" component={Main}/>
                    <Stack.Screen name="ListScreen" component={BoulderListContainer}/>
                    <Stack.Screen name="AddBoulderScreen" component={AddBoulder}/>
                </Stack.Navigator>
            ) : (
                <View style={styles.container}>
                    <Login loggedInHandler={loggedInHandler}></Login>
                    {/*<AddBoulder/>*/}
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
