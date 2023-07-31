/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useContext, useCallback} from 'react';
import * as yup from 'yup';
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ICreateCar} from '../models/createMaintenance';
import api from '../../../../services/api';
import {useToast} from 'react-native-toast-notifications';

interface MaintenanceRegisterContextData {
  control: Control<ICreateCar, any>;
  errors: FieldErrors<ICreateCar>;
  isValid: boolean;

  getValues: UseFormGetValues<ICreateCar>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  setValue: UseFormSetValue<ICreateCar>;
}

interface CarRegisterProviderProps {
  children: React.ReactNode;
}

const MaintenanceRegisterContext =
  createContext<MaintenanceRegisterContextData>(
    {} as MaintenanceRegisterContextData,
  );

function MaintenanceRegisterProvider({children}: CarRegisterProviderProps) {
  const toast = useToast();

  const schema = yup.object().shape({
    mileage: yup
      .number()
      .min(0, 'O valor mínimo para esse campo é 0.')
      .required('Esse campo é obrigatório'),
    consumption: yup
      .number()
      .min(0, 'O valor mínimo para esse campo é 0.')
      .required('Esse campo é obrigatório'),
    maintenance: yup
      .string()
      .min(3, 'Esse campo deve ter pelo menos 3 caracteres')
      .max(52, 'Esse campo deve ter no máximo 52 caracteres'),
    system: yup
      .string()
      .min(3, 'Esse campo deve ter pelo menos 3 caracteres')
      .max(52, 'Esse campo deve ter no máximo 52 caracteres'),
    local: yup
      .string()
      .min(3, 'Esse campo deve ter pelo menos 3 caracteres')
      .max(52, 'Esse campo deve ter no máximo 52 caracteres'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    getValues,
    reset,
  } = useForm<ICreateCar>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const createCar = useCallback(async () => {
    try {
      const form = getValues();
      const {data} = await api.post('/car-transactions', {...form});
      console.log('DATA', data);
      toast.show('Manutenção registrada com sucesso.', {
        placement: 'bottom',
        type: 'success',
      });
    } catch (err) {
      console.log('ERROR', err);
      throw new Error(JSON.stringify(err));
    }
  }, []);

  const onSubmit = handleSubmit(
    async data => {
      console.log('SUBMIT', data);
      await createCar();
    },
    invalid => {
      console.log('Invalid', invalid);
      throw new Error('Invalid form');
    },
  );

  return (
    <MaintenanceRegisterContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        control,
        errors,
        isValid,

        onSubmit,
        setValue,
        getValues,
      }}>
      {children}
    </MaintenanceRegisterContext.Provider>
  );
}

function useMaintenanceRegister(): MaintenanceRegisterContextData {
  const context = useContext(MaintenanceRegisterContext);
  return context;
}

export {MaintenanceRegisterProvider, useMaintenanceRegister};
