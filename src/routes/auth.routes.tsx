import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from '../screens/OnBoarding';
import {SignUp} from '../screens/SignUp';

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Screen name="SignIn" component={OnBoarding} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
