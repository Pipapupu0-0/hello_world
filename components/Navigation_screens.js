import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home_screen';
import ProfileScreen from './screens/Profile_screen';

export default function MyStack () {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Добро пожаловать!'}}/>
                <Stack.Screen name='Профиль' component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

