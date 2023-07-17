import {throwHttpError} from '../utils/throwHttpError';
import {LoginRequest, LoginResponse} from '../models/Login';
import {UserRegister} from '../modules/Auth/models/register';
import api from './api';

export const login = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  try {
    console.log('REQUEST', email, password);
    const {data} = await api.post('/auth/login', {email, password});
    return data;
  } catch (err) {
    console.log('ERROR', err);
    return throwHttpError(err);
  }
};

export const register = async ({
  name,
  email,
  password,
}: UserRegister): Promise<UserRegister> => {
  try {
    const {data} = await api.post('/users', {name, email, password});
    return data;
  } catch (err) {
    console.log('ERROR', err);
    return throwHttpError(err);
  }
};
