import {ReactNode} from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {AuthProvider} from '../modules/Auth/hooks/useAuth';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps): JSX.Element {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
}

export {AppProvider};
