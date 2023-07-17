import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  padding-bottom: ${hp(2)}px;
  padding: 0px ${wp(4)}px ${hp(2)}px ${wp(4)}px;
  height: ${hp(15)}px;
  background-color: ${({theme}) => theme.colors.header};
`;

export const AppTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const HeaderInfo = styled.Text`
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;
