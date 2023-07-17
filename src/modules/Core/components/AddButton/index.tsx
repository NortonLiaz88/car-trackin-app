import {FloatingAction} from 'react-native-floating-action';
import {actions} from './actions';
import theme from '../../../../styles/theme';
import {useNavigation} from '@react-navigation/native';

export const AddButton: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <FloatingAction
      actions={actions}
      color={theme.colors.main}
      onPressItem={() => navigate('CarRegister')}
    />
  );
};
