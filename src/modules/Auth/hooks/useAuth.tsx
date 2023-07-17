/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useToast} from 'react-native-toast-notifications';

import api from '../../../services/api';
import {login} from '../../../services/login';
import {User} from '../../../models/User';
import {LoginRequest} from '../../../models/Login';
import {Session} from '../models/session';
import {StorageToken} from '../models/storageToken';
import {strings} from '../../../values/strings';

interface AuthContextData {
  user: User;
  token: string;
  session: Session;

  control: Control<LoginRequest, any>;
  errors: FieldErrors<LoginRequest>;
  isValid: boolean;
  loading: boolean;

  clearToken: () => void;
  signIn: ({email, password}: LoginRequest) => Promise<Session>;
  signOut: () => Promise<void>;
  loadFromStorageUser: () => Promise<void>;

  getValues: UseFormGetValues<LoginRequest>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  setValue: UseFormSetValue<LoginRequest>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [currentUser] = useState<User>({} as User);
  const [token, setToken] = useState('');
  const [session, setSession] = useState({} as Session);
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
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
  } = useForm<LoginRequest>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const updateToken = useCallback(async ({accessToken}: StorageToken) => {
    setToken(accessToken);
    await AsyncStorage.setItem('@carTracking:token', accessToken);
  }, []);

  const signIn = useCallback(async ({email, password}: LoginRequest) => {
    try {
      setLoading(true);
      const newAuthState = await login({email, password});
      console.log('New AUTH STATE', newAuthState);
      updateToken({
        accessToken: newAuthState.accessToken,
      });
      api.defaults.headers.Authorization = `Bearer ${newAuthState.accessToken}`;

      setSession(newAuthState);
      setLoading(false);
      reset();

      return newAuthState;
    } catch (err) {
      console.log('ERROR');
      toast.show(strings.signIn.error.unauthorized, {
        placement: 'bottom',
        type: 'error',
      });
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      clearToken();
    } catch (error) {
      throw new Error('Erro ao realizar logout');
    }
  }, []);

  const loadFromStorageUser = useCallback(async () => {
    const storageToken = await AsyncStorage.getItem('@carTracking:token');
    if (storageToken) {
      api.defaults.headers.Authorization = `Bearer ${storageToken}`;
      setToken(storageToken);
    }
  }, []);

  const clearToken = useCallback(async () => {
    setToken('');
    await AsyncStorage.removeItem('@carTracking:token');
    await AsyncStorage.removeItem('@carTracking:refreshToken');
  }, []);

  const onSubmit = handleSubmit(
    async data => {
      await signIn(data);
    },
    invalid => {
      console.log('Invalid', invalid);
      throw new Error('Invalid form');
    },
  );

  useEffect(() => {
    loadFromStorageUser();
  }, []);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        clearToken,
        signIn,
        signOut,
        loadFromStorageUser,
        user: currentUser,
        token,
        session,
        control,
        errors,
        isValid,
        loading,

        onSubmit,
        setValue,
        getValues,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
