import React from 'react';
import {CoreHeader} from '../../modules/Core/components/Header';
import {AddButton} from '../../modules/Core/components/AddButton';
import {CarList} from '../../modules/Core/components/CarList';
import {View} from 'react-native';
import theme from '../../styles/theme';

export const Home: React.FC = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: theme.colors.background}}>
        <CoreHeader />
        <CarList />
      </View>

      <AddButton />
    </>
  );
};
