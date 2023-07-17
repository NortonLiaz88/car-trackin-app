import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import {Controller} from 'react-hook-form';

import {Input} from '../../../../components/Input';
import {strings} from '../../../../values/strings';
import PrimaryButton from '../../../../components/PrimaryButton';

import {ActionWrapper, ButtonWrapper, InputWrapper} from './styles';
import {useToast} from 'react-native-toast-notifications';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/useAuth';

export const SignInForm: React.FC = () => {
  const toast = useToast();

  const [submittingForm, setSubmittingForm] = useState(false);

  const {navigate} = useNavigation();

  const {onSubmit, control, errors} = useAuth();

  const handleSubmit = async () => {
    try {
      setSubmittingForm(true);
      await onSubmit();
    } catch (err) {
      console.log('ERROR', err);
      toast.show('Erro ao realizar autenticação.', {
        type: 'danger',
        placement: 'bottom',
      });
    } finally {
      setSubmittingForm(false);
    }
  };

  const handleRegister = () => {
    navigate('SignUp');
  };

  return (
    <View>
      <InputWrapper>
        <Controller
          name={'email'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.signIn.form.emailLabel}
              placeholder={strings.signIn.form.emailPlaceholder}
              onChangeText={value => props.onChange(value)}
              keyboardType="email-address"
              {...(Platform.OS === 'ios' && {
                textContentType: 'emailAddress',
              })}
              returnKeyType="next"
              error={errors?.email?.message}
            />
          )}
        />
      </InputWrapper>
      <InputWrapper>
        <Controller
          name={'password'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.signIn.form.passwordLabel}
              placeholder={strings.signIn.form.passwordPlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.password?.message}
              secureTextEntry
            />
          )}
        />
      </InputWrapper>

      <ActionWrapper>
        <ButtonWrapper>
          <PrimaryButton
            testID="Budget.Step.Transaction"
            accessibilityLabel="button.signIn"
            text={strings.signIn.form.btnSignIn}
            type="main"
            onPress={() => handleSubmit()}
            loading={submittingForm}
          />
        </ButtonWrapper>

        <ButtonWrapper>
          <PrimaryButton
            testID="Budget.Step.Transaction"
            accessibilityLabel="button.signUp"
            text={strings.signIn.form.btnSignUp}
            type="alternative"
            onPress={() => handleRegister()}
          />
        </ButtonWrapper>
      </ActionWrapper>
    </View>
  );
};
