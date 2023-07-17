import React from 'react';
import {ActivityIndicator} from 'react-native';
import theme from '../../styles/theme';
import {ButtonText, CustomButton, IButtonProps} from './styles';

interface Props extends IButtonProps {
  testID: string;
  accessibilityLabel: string;
  text: Element;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const PrimaryButton: React.FC<Props> = ({
  text,
  disabled,
  loading,
  testID,
  accessibilityLabel,
  type,
  onPress,
}: Props) => {
  return (
    <CustomButton
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessible
      onPress={onPress}
      disabled={disabled}
      type={type ?? 'main'}>
      {loading ? (
        <ActivityIndicator
          animating={loading}
          size="large"
          color={theme.colors.text}
        />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </CustomButton>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
  loading: false,
  onPress: () => null,
};

export default PrimaryButton;
