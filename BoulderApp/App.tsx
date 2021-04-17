import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from 'react';
import { StyleSheet, View, Button, ImageBackground } from 'react-native';
import AddBoulder from "./src/components/screens/addBoulder";
import Login from './src/components/screens/login';
import Main from "./src/components/screens/main";
import BoulderListContainer from "./src/components/screens/home";
import DetailBoulder from "./src/components/screens/detailBoulder";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContext } from "./src/contexts/auth_context";
import NewsNavigation from "./src/components/widgets/news_navigation";
import MainNavigation from "./src/components/widgets/main_navigation";
import LoginNavigation from "./src/components/widgets/login_navigation";


export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
        switch (action.type) {
            case 'VERIFY':
                return {
                    ...prevState,
                    hasVerified: action.hasVerified,
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    isLoggedIn: action.isLoggedIn,
                }
        }
    },
    {
        hasVerified: false,
        isLoggedIn: false,
    },
  );

  const authContext = {
    verify: (hasVerified: boolean) => {
        dispatch({type: 'VERIFY', hasVerified: hasVerified})
    },
    login: (isLoggedIn: boolean) => {
        dispatch({type: 'LOGIN', isLoggedIn: isLoggedIn})
    },
  }

  return(
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        {!state.isLoggedIn ? (
          <NewsNavigation/>
        ) : state.hasVerified ? (
          <MainNavigation/>
        ) : (
          <LoginNavigation/>
        )}
      </AuthContext.Provider>
    </SafeAreaProvider>
  )


}
