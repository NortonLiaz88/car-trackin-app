import {ReactNode} from 'react';
import {ToastProvider} from 'react-native-toast-notifications';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps): JSX.Element {
  return <ToastProvider>{children}</ToastProvider>;
}

export {AppProvider};
