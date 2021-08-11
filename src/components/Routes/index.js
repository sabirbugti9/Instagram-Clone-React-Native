import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoryScreen from '../../screens/StoryScreen/index';
import BottomHomeNavigation from './bottomHomeNavigation';

const Routes = () => {
    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={BottomHomeNavigation}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Story"
                component={StoryScreen}
                options={{ headerShown: false }}
            />
            
        </RootStack.Navigator>
    );
}
export default Routes;