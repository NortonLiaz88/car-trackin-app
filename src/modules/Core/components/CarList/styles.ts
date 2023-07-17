import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ListWrapper = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const CarListComponent = styled(FlatList).attrs({
  style: {
    width: '100%',
  },
})``;
