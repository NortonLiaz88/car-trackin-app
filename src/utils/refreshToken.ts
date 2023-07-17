import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const updateSessionData = async (
  accessToken: string,
  refresh_token: string,
) => {
  await AsyncStorage.setItem('@carTracking:token', accessToken);
  await AsyncStorage.setItem('@carTracking:refreshToken', refresh_token);
  api.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

// eslint-disable-next-line consistent-return
export const axiosRefreshToken = async () => {
  try {
    const refresh_token = await AsyncStorage.getItem('emanager:refresh_token');
    if (refresh_token) {
      const sessionData = await refreshToken(refresh_token);
      updateSessionData(sessionData.token, sessionData.refresh_token);
    } else {
      return new Error('Refresh token not exist');
    }
  } catch (err) {
    return new Error(err as string);
  }
};
