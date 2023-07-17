import React from 'react';
import {Header} from '../../components/Header';
import {strings} from '../../values/strings';
import {CarRegisterForm} from '../../modules/Car/Register/components/Fom';
import {PageWrapper} from '../../components/Screen/styles';
import {CarRegisterProvider} from '../../modules/Car/Register/hooks/useCar';

export const CarRegister: React.FC = () => {
  return (
    <CarRegisterProvider>
      <PageWrapper>
        <Header>{strings.car.header}</Header>
        <CarRegisterForm />
      </PageWrapper>
    </CarRegisterProvider>
  );
};
