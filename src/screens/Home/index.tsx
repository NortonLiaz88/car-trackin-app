import React from 'react';
import {CoreHeader} from '../../modules/Core/components/Header';
import {PageWrapper} from '../../components/Screen/styles';
import {AddButton} from '../../modules/Core/components/AddButton';
import {CarList} from '../../modules/Core/components/CarList';

export const Home: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <CoreHeader />
        <CarList />
      </PageWrapper>
      <AddButton />
    </>
  );
};
