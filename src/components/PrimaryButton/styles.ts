import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export interface IButtonProps {
  type?: 'main' | 'success' | 'alternative';
}

export const Container = styled.View``;

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: 'Montserrat';
  text-align: center;
  font-weight: bold;
  line-height: ${RFValue(24)}px;
  margin: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text};
  background-color: transparent;
  /* text-transform: uppercase;  */
`;

export const CustomButton = styled.TouchableOpacity<IButtonProps>`
  background-color: ${({theme}) => theme.colors.main};
  border-radius: 4px;

  ${props =>
    props.type === 'main' &&
    css`
      background-color: ${({theme}) => theme.colors.main};
    `};

  ${props =>
    props.type === 'success' &&
    css`
      background-color: ${({theme}) => theme.colors.success};
    `};

  ${props =>
    props.type === 'alternative' &&
    css`
      background-color: ${({theme}) => theme.colors.shape};
    `};

  ${props => props?.disabled && `background: ${props.theme.colors.text}`};
  ${props => props.disabled && 'opacity: 0.4;'};
`;
