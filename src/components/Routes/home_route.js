import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/index';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Image } from 'react-native';
import React from 'react';
const HomeStack = createStackNavigator();
const HomeRoutes = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home" component={HomeScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return <Image source={require("../../assets/Instagramlogo.png")} style={{ height: 40, width: 100 }} />
                    },
                    headerLeft: () => {
                        return <Feather name="camera" size={25} color={"#000"} style={{ marginLeft: 12.0 }} />

                    },
                    headerRight: () => {
                        return <Ionicon name="paper-plane-outline" size={25} color={"#000"} style={{ marginRight: 12.0 }} />

                    }
                }}

            />
          
        </HomeStack.Navigator>
    );
}
export default HomeRoutes;