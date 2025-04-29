import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/them';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>SettingsScreen</Text>

      <PrimaryButton
        onPress={() => navigation.goBack()}
        label={'Regresar'}
      />

      <PrimaryButton
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        label={'Regresar a Home'}
      />
    </View>
  );
};

export default SettingsScreen;