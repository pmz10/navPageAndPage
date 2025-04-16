import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../theme/them';
import PrimaryButton from '../../components/shared/PrimaryButton';


const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={globalStyles.container}>

      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Ir a Configuracón"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Profile' as never)}
        label="Ir a Pérfil"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Ir a Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('About' as never)}
        label="Ir a About"
      />
    </View>
  );
};

export default HomeScreen;