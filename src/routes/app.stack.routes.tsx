import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {CarRegister} from '../screens/CarRegister';
import {MaintenanceRegister} from '../screens/MaintenanceRegister';

export type RootStackParamList = {
  Home: undefined;
  CarRegister: undefined;
  Splash: undefined;
  MaintenanceRegister: undefined;
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
      <Screen
        name="CarRegister"
        component={CarRegister}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="MaintenanceRegister"
        component={MaintenanceRegister}
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
