import React, {ReactNode} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CarAsset from '../../assets/car.svg';

import {ImageWrapper, Title, TitleWrapper, Wrapper} from './styles';

type HeaderType = {
  children: ReactNode;
};

export const Header: React.FC<HeaderType> = ({children}: HeaderType) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <CarAsset width={wp(70)} height={hp(30)} />
      </ImageWrapper>

      <TitleWrapper>
        <Title>{children}</Title>
      </TitleWrapper>
    </Wrapper>
  );
};
