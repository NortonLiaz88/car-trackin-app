import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {ActionWrapper, ButtonWrapper, InputWrapper} from './styles';
import {Input} from '../../../../../components/Input';
import {strings} from '../../../../../values/strings';
import PrimaryButton from '../../../../../components/PrimaryButton';
import {useMaintenanceRegister} from '../../hooks/useCar';
import {Controller} from 'react-hook-form';

interface Props {
  id: string;
}

export const MaintenanceRegisterForm: React.FC<Props> = ({id}: Props) => {
  const [submittingForm, setSubmitting] = useState(false);
  const {control, errors, setValue, onSubmit} = useMaintenanceRegister();

  useEffect(() => {
    setValue('carRef', id);
  });

  const handleSubmit = async () => {
    setSubmitting(true);
    await onSubmit();
    setSubmitting(false);
  };

  return (
    <View>
      <InputWrapper>
        <Controller
          name={'mileage'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.maintenance.form.mileageLabel}
              placeholder={strings.maintenance.form.mileagePlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.mileage?.message}
              returnKeyType="next"
            />
          )}
        />

        <Controller
          name={'consumption'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.maintenance.form.consumptionLabel}
              placeholder={strings.maintenance.form.consumptionPlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.consumption?.message}
              returnKeyType="next"
            />
          )}
        />

        <Controller
          name={'maintenance'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.maintenance.form.maintenanceLabel}
              placeholder={strings.maintenance.form.maintenancePlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.maintenance?.message}
              returnKeyType="next"
            />
          )}
        />

        <Controller
          name={'system'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.maintenance.form.systemLabel}
              placeholder={strings.maintenance.form.systemPlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.system?.message}
              returnKeyType="next"
            />
          )}
        />

        <Controller
          name={'local'}
          control={control}
          render={({field: props}) => (
            <Input
              label={strings.maintenance.form.localLabel}
              placeholder={strings.maintenance.form.localPlaceholder}
              onChangeText={value => props.onChange(value)}
              error={errors?.local?.message}
              returnKeyType="next"
            />
          )}
        />
      </InputWrapper>

      <ActionWrapper>
        <ButtonWrapper>
          <PrimaryButton
            testID="Budget.Step.Transaction"
            accessibilityLabel="button.maintenance"
            text={strings.maintenance.form.btnSignUp}
            type="success"
            onPress={() => handleSubmit()}
            loading={submittingForm}
          />
        </ButtonWrapper>
      </ActionWrapper>
    </View>
  );
};
