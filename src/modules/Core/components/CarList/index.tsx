import React, {useEffect} from 'react';
import {CarListComponent, ListWrapper} from './styles';
import {Card} from '../Card';
import {useNavigation} from '@react-navigation/native';
import {ICar} from '../../../Car/Register/models/createCar';
import { View } from 'react-native';

interface Props {
  cars: ICar[];
}

export const CarList: React.FC<Props> = ({cars}: Props) => {
  const {navigate} = useNavigation();

  const handleSelect = (id: string) => {
    navigate('MaintenanceRegister', {id});
  };

  useEffect(() => {
    console.log('CARS', cars);
  });
  return (
    <ListWrapper>
      <CarListComponent
        data={cars}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        renderItem={({item, index}) => (
          <Card
            key={index}
            onPress={() => handleSelect(item.id)}
            brand={item?.brand}
            model={item?.model}
          />
        )}
      />
    </ListWrapper>
  );
};
