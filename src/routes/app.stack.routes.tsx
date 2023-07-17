import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Splash: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AppStackRoutes = (): JSX.Element => {
  return (
    <Navigator initialRouteName="Splash">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      {/* <Screen
        name="SignUp"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      /> */}
    </Navigator>
  );
};