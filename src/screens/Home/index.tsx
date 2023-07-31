import React, {useCallback, useEffect, useState} from 'react';
import {CoreHeader} from '../../modules/Core/components/Header';
import {AddButton} from '../../modules/Core/components/AddButton';
import {CarList} from '../../modules/Core/components/CarList';
import {View} from 'react-native';
import theme from '../../styles/theme';
import api from '../../services/api';
import {useToast} from 'react-native-toast-notifications';
import {ICar} from '../../modules/Car/Register/models/createCar';
import {useIsFocused} from '@react-navigation/native';

export const Home: React.FC = () => {
  const toast = useToast();
  const isFocused = useIsFocused();
  const [cars, setCars] = useState<ICar[]>([]);

  const loadCars = useCallback(async () => {
    try {
      const {data} = await api.get('/car');

      console.log('DATA', data);
      setCars(data);
    } catch (err) {
      console.log('ERR', err);
      toast.show('Problema ao carregar seus carros', {
        placement: 'bottom',
        type: 'error',
      });
    }
  }, [toast]);

  useEffect(() => {
    const initPage = async () => {
      await loadCars();
    };

    isFocused && initPage();
  }, [isFocused]);

  return (
    <>
      <View style={{flex: 1, backgroundColor: theme.colors.background}}>
        <CoreHeader />
        <CarList cars={cars} />
      </View>

      <AddButton />
    </>
  );
};
