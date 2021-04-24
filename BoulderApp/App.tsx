import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContext } from "./src/contexts/auth_context";
import NewsNavigation from "./src/components/widgets/Navigation/news_navigation";
import MainNavigation from "./src/components/widgets/Navigation/main_navigation";
import LoginNavigation from "./src/components/widgets/Navigation/login_navigation";


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
