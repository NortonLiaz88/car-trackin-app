import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CarAsset from '../../../../assets/car.svg';

// import {Institution} from '../../models/InstitutionsModel';
// import theme from '../../styles/theme';
// import IconButton from '../IconButton';
import {ActionsWrapper, CarModel, Container, Title} from './styles';

interface CardProps {
  // institution: Institution;
  onPress: () => void;
}

export const Card: React.FC<CardProps> = ({
  // institution,
  onPress,
}: // handleParams,
// handleDelete,
CardProps) => {
  return (
    <Container onPress={onPress}>
      <ActionsWrapper>
        <Title>Chevrolet</Title>
        <CarModel>Celta</CarModel>
      </ActionsWrapper>
      <CarAsset width={wp(30)} height={hp(20)} />
    </Container>
  );
};
