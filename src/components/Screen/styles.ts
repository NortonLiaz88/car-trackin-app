import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const PageWrapper = styled.ScrollView`
  flex: 1;
  padding: ${wp(4)}px;
  background-color: ${({theme}) => theme.colors.background};
`;
