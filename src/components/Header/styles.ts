import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
  margin-top: ${hp(3.6)}px;
  align-items: center;
`;

export const ImageWrapper = styled.View`
  align-items: center;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-weight: 600;
  word-wrap: break-word;
  color: ${({theme}) => theme.colors.text};
`;
