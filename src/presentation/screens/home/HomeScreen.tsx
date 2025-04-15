import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../theme/them';
import PrimaryButton from '../../components/shared/PrimaryButton';


const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Details' as never)}
        label="Go to Details Screen"
      />
    </View>
  );
};

export default HomeScreen;