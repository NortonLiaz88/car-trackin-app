import React, {useState} from 'react';
import {View} from 'react-native';

import {ActionWrapper, ButtonWrapper, InputWrapper} from './styles';
import {Input} from '../../../../../components/Input';
import {strings} from '../../../../../values/strings';
import PrimaryButton from '../../../../../components/PrimaryButton';
import {useCarRegister} from '../../hooks/useCar';
import {Controller} from 'react-hook-form';

export const CarRegisterForm: React.FC = () => {
  const [submittingForm] = useState(false);
  const {control, errors} = useCarRegister();

  return (
    <View>
      <InputWrapper>
        <Controller
          name={'brand'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.car.form.brandLabel}
              placeholder={strings.car.form.brandPlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.brand?.message}
              returnKeyType="next"
            />
          )}
        />

        <Controller
          name={'model'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.car.form.modelLabel}
              placeholder={strings.car.form.modelPlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.model?.message}
              returnKeyType="next"
            />
          )}
        />

        <Controller
          name={'surname'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.car.form.surnameLabel}
              placeholder={strings.car.form.surnamePlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.surname?.message}
              returnKeyType="next"
            />
          )}
        />
      </InputWrapper>

      <ActionWrapper>
        <ButtonWrapper>
          <PrimaryButton
            testID="Budget.Step.Transaction"
            accessibilityLabel="button.car"
            text={strings.car.form.btnSignUp}
            type="success"
            onPress={() => null}
            loading={submittingForm}
          />
        </ButtonWrapper>
      </ActionWrapper>
    </View>
  );
};
