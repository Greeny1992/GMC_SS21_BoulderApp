import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "../../screens/news";


const NewsStack = createStackNavigator();

const NewsNavigation = () => {
    return(
        <NavigationContainer>
            <NewsStack.Navigator>
                <NewsStack.Screen
                    name={'News'}
                    component={NewsScreen}
                    options={{
                        headerTitle: 'Willkommen',
                    }}
                />
            </NewsStack.Navigator>
        </NavigationContainer>
    )
}
export default NewsNavigation