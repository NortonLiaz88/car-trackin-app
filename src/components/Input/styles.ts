import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
interface Props {
  isFocused: boolean;
}

export const InputWrapper = styled.View<Props>``;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-bottom: ${hp(2)}px;
`;

export const InputText = styled.TextInput<Props>`
  color: ${({theme}) => theme.colors.text};
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 4px;
  ${({isFocused, theme}) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;

export const TextError = styled.Text`
  color: ${({theme}) => theme.colors.attention};
  margin-left: 15px;
  font-size: ${RFValue(12)}px;
  text-align: right;
`;
