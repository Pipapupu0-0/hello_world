import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home_screen';
import ProfileScreen from './screens/Profile_screen';
import ItemScreen from './screens/Item_scrreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeStack =  createNativeStackNavigator();

function HomeStackScreen() {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Профиль" component={ProfileScreen} />
            <HomeStack.Screen name="Item" component={ItemScreen} />
        </HomeStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Профиль" component={ProfileScreen} />
            <ProfileStack.Screen name="Home" component={HomeScreen} />
            <ProfileStack.Screen name="Item" component={ItemScreen}/>
        </ProfileStack.Navigator>
    );
}

export default function MyStack () {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

