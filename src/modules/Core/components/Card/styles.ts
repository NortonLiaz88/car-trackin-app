import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.colors.card};
  padding: 0 ${RFValue(14)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  height: ${hp('15.875')}px;
  width: ${wp('25.875')}px;
`;

export const ActionsWrapper = styled.View`
  width: 65%;
  flex-direction: column;
  text-align: justify;
  text-justify: inter-word;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${RFValue(10)}px 0;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.cardTitle};
  font-size: ${RFValue(12)}px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  word-wrap: break-word;
`;

export const CarModel = styled.Text`
  color: ${({theme}) => theme.colors.cardTitleSecondary};
  font-size: ${RFValue(15)}px;
  font-family: Archivo;
  font-weight: 500;
  word-wrap: break-word;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

export const SizedBox = styled.View`
  width: ${RFValue(16)}px;
`;
