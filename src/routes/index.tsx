import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackRoutes} from './app.stack.routes';
import {navigationRef} from '../utils/rootNavigation';
import {useAuth} from '../modules/Auth/hooks/useAuth';
import {AuthRoutes} from './auth.routes';

export const Routes = () => {
  const {token} = useAuth();

  return (
    <NavigationContainer ref={navigationRef}>
      {token ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
