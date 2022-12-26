import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stack/authStack';
import 'react-native-gesture-handler';

const Route = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default Route;
