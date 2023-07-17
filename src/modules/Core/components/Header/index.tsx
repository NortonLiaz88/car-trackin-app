import React from 'react';
import {AppTitle, HeaderInfo, HeaderWrapper} from './styles';

export const CoreHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <AppTitle>DigitalCar</AppTitle>
      <HeaderInfo>Meu Carro</HeaderInfo>
    </HeaderWrapper>
  );
};
