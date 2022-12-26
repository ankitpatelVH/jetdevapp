import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Favorite, Home } from '../../screens';
import screenName from '../../utils/screenName';
import BottomTab from '../bottomTab/Bottomtab';

export type AuthNavigationProps = NativeStackNavigationProp<AuthParams>;
export type AuthParams = {
  // Parameters navigation and routes
  login: undefined,
  homeNavigator: undefined,
  favorite: undefined
};

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenName.login} component={Login} />
      <Stack.Screen name={screenName.homeNavigator} component={BottomTab} />
      <Stack.Screen name={screenName.favorite} component={Favorite} />

    </Stack.Navigator>
  );
};



export default AuthStack;
