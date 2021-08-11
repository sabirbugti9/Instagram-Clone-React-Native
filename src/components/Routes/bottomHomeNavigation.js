import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import DiscoveryScreen from '../../screens/DiscoveryScreen/index';
import ProfileScreen from '../../screens/ProfileScreen/index';
import Notification from '../../screens/NotificationScreen/index';
import CreatePostScreen from '../../screens/CreatePostScreen/index';
import ADIcon from 'react-native-vector-icons/AntDesign';
import HomeRoutes from './home_route';
const BottomHomeNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {

                    if (route.name === 'Home') {
                        return <Foundation name="home" size={size} color={color} />

                    }
                    if (route.name === 'Discovery') {
                        return <Feather name="search" size={size} color={color} />

                    }
                    if (route.name === 'Post') {
                        return <Feather name="plus-square" size={size} color={color} />

                    }
                    if (route.name === 'Notification') {
                        return <ADIcon name={"hearto"} size={size} color={color} />

                    }
                    if (route.name === 'Profile') {
                        return <Ionicon name={"person-outline"} size={size} color={color} />

                    }
                    // You can return any component that you like here!
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false

            })}

        >
            <Tab.Screen name="Home" component={HomeRoutes} options={{ headerShown: false }} />
            <Tab.Screen name="Discovery" component={DiscoveryScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Post" component={CreatePostScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, }} />

        </Tab.Navigator>
    );
}
export default BottomHomeNavigation;