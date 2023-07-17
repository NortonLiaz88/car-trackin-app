import React, {useState} from 'react';
import {View} from 'react-native';

import {ActionWrapper, ButtonWrapper, InputWrapper} from './styles';
import {Input} from '../../../../../components/Input';
import {strings} from '../../../../../values/strings';
import PrimaryButton from '../../../../../components/PrimaryButton';

export const CarRegisterForm: React.FC = () => {
  const [submittingForm] = useState(false);

  return (
    <View>
      <InputWrapper>
        <Input
          label={strings.car.form.brandLabel}
          placeholder={strings.car.form.brandPlaceholder}
          returnKeyType="next"
        />
        <Input
          label={strings.car.form.modelLabel}
          placeholder={strings.car.form.modelPlaceholder}
          returnKeyType="next"
        />
        <Input
          label={strings.car.form.surnameLabel}
          placeholder={strings.car.form.surnamePlaceholder}
          returnKeyType="next"
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
