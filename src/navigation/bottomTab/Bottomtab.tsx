import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Favorite, Home } from '../../screens';
import screenName from '../../utils/screenName';
import CustomBottomTab from './CustomBottom';

export type BottomNavigationProps = BottomTabNavigationProp<BottomParams>;
export type BottomParams = {
    home: undefined,
    favorite: undefined
};

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomBottomTab {...props} />}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name={screenName.home} component={Home} />
            <Tab.Screen name={screenName.favorite} component={Favorite} />
        </Tab.Navigator>
    );
};



export default BottomTab;
