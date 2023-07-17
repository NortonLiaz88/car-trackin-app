import React from 'react';
import {PageWrapper} from '../../components/Screen/styles';
import {Header} from '../../components/Header';
import {strings} from '../../values/strings';
import {UserProvider} from '../../modules/Auth/hooks/useRegister';
import {SignUpForm} from '../../modules/Auth/components/SignUp';

export const SignUp: React.FC = () => {
  return (
    <UserProvider>
      <PageWrapper>
        <Header>{strings.signUp.header}</Header>
        <SignUpForm />
      </PageWrapper>
    </UserProvider>
  );
};
