import React from 'react';
import {CarListComponent, ListWrapper} from './styles';
import {Card} from '../Card';

export const CarList: React.FC = () => {
  return (
    <ListWrapper>
      <CarListComponent
        data={['car']}
        renderItem={({_, index}) => <Card key={index} onPress={() => null} />}
      />
    </ListWrapper>
  );
};
