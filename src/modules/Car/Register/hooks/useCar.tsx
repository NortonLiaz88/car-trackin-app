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
import {ICreateCar} from '../models/createCar';
import api from '../../../../services/api';
import {useToast} from 'react-native-toast-notifications';

interface CarRegisterContextData {
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

const CarRegisterContext = createContext<CarRegisterContextData>(
  {} as CarRegisterContextData,
);

function CarRegisterProvider({children}: CarRegisterProviderProps) {
  const toast = useToast();

  const schema = yup.object().shape({
    brand: yup
      .string()
      .min(3, 'Esse campo deve ter pelo menos 3 caracteres')
      .max(52, 'Esse campo deve ter no máximo 52 caracteres')
      .required('Esse campo é obrigatório'),
    model: yup
      .string()
      .min(3, 'Esse campo deve ter pelo menos 6 caracteres')
      .max(52, 'Esse campo deve ter no máximo 52 caracteres')
      .required('Esse campo é obrigatório'),
    surname: yup
      .string()
      .min(3, 'Esse campo deve ter pelo menos 6 caracteres')
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
      const {data} = await api.post('/car/transaction', {form});
      console.log('DATA', data);
      toast.show('Carro criado com sucesso', {
        placement: 'bottom',
        type: 'success',
      });
    } catch (err) {
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
    <CarRegisterContext.Provider
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
    </CarRegisterContext.Provider>
  );
}

function useCarRegister(): CarRegisterContextData {
  const context = useContext(CarRegisterContext);
  return context;
}

export {CarRegisterProvider, useCarRegister};
