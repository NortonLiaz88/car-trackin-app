import React from 'react';
import {PageWrapper} from '../../components/Screen/styles';
import {Header} from '../../components/Header';
import {strings} from '../../values/strings';
import {SignInForm} from '../../modules/Auth/components/SignIn';

export const OnBoarding: React.FC = () => {
  return (
    <PageWrapper>
      <Header>{strings.signIn.header}</Header>
      <SignInForm />
    </PageWrapper>
  );
};
