import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const VerticalDivider = styled.View`
  height: ${hp(2)}px;
`;

export const InputWrapper = styled.View`
  margin-top: ${hp(2)}px;
`;

export const ButtonWrapper = styled.View`
  margin: ${hp(2)}px 0 ${hp(2)}px 0px;
  width: 100%;
`;

export const ActionWrapper = styled.View`
  flex: 1;
  margin-top: ${hp(10)}px;
  justify-content: flex-end;
  align-items: flex-end;
`;
