import * as yup from 'yup';
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import React, {createContext, useState, useContext, useCallback} from 'react';
import {Session} from '../models/session';
import {useToast} from 'react-native-toast-notifications';
import {UserRegister} from '../models/register';
import {register} from '../../../services/login';

interface UserContextData {
  user: UserRegister;
  control: Control<UserRegister, any>;
  errors: FieldErrors<UserRegister>;
  isValid: boolean;
  loading: boolean;

  handleRegister: ({email, password}: UserRegister) => Promise<Session>;
  getValues: UseFormGetValues<UserRegister>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  setValue: UseFormSetValue<UserRegister>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({children}: UserProviderProps) {
  const [currentUser, setUser] = useState<UserRegister>({} as UserRegister);
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required('Esse campo é obrigatório'),
    email: yup
      .string()
      .email('Email inválido.')
      .required('Esse campo é obrigatório'),
    password: yup
      .string()
      .min(6, 'Esse campo deve ter pelo menos 6 caracteres')
      .max(52, 'Esse campo deve ter no máximo 52 caracteres')
      .required('Esse campo é obrigatório'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    getValues,
    reset,
  } = useForm<UserRegister>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const handleRegister = useCallback(
    async ({name, email, password}: UserRegister) => {
      try {
        setLoading(true);
        const newAuthState = await register({name, email, password});
        setUser(newAuthState);
        setLoading(false);
        reset();
        return newAuthState;
      } catch (err) {
        console.log('ERROR');
        toast.show('Erro ao realizar autenticação', {
          placement: 'bottom',
          type: 'error',
        });
      }
    },
    [],
  );

  const onSubmit = handleSubmit(
    async data => {
      await register(data);
    },
    invalid => {
      console.log('Invalid', invalid);
      throw new Error('Invalid form');
    },
  );

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        handleRegister,
        user: currentUser,
        control,
        errors,
        isValid,
        loading,

        onSubmit,
        setValue,
        getValues,
      }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserRegister(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

export {UserProvider, useUserRegister};
