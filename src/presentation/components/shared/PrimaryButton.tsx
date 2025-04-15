import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme/them';

interface PrimaryButtonProps {
  onPress: () => void;
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, label }) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
