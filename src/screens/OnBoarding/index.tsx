import React from 'react';
import {PageWrapper} from '../../components/Screen/styles';
import {Header} from '../../components/Header';
import {strings} from '../../values/strings';
import {SignInForm} from '../../modules/Auth/components/SignIn';
import {AuthProvider} from '../../modules/Auth/hooks/useAuth';

export const OnBoarding: React.FC = () => {
  return (
    <AuthProvider>
      <PageWrapper>
        <Header>{strings.signIn.header}</Header>
        <SignInForm />
      </PageWrapper>
    </AuthProvider>
  );
};
