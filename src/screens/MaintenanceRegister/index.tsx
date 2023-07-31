import React, {useEffect, useState} from 'react';
import {Header} from '../../components/Header';
import {strings} from '../../values/strings';
import {PageWrapper} from '../../components/Screen/styles';
import {MaintenanceRegisterForm} from '../../modules/Maintenance/Register/components/Fom';
import {MaintenanceRegisterProvider} from '../../modules/Maintenance/Register/hooks/useCar';
import {Route} from '@react-navigation/native';

interface Props {
  route: Route<any>;
}

export const MaintenanceRegister: React.FC<Props> = ({route}: Props) => {
  const [id, setId] = useState('');

  useEffect(() => {
    console.log('ROUTE PARAMS', route?.params);
    setId(route?.params);
  }, [route?.params]);

  return (
    <MaintenanceRegisterProvider>
      <PageWrapper>
        <Header>{strings.maintenance.header}</Header>
        <MaintenanceRegisterForm id={id} />
      </PageWrapper>
    </MaintenanceRegisterProvider>
  );
};
