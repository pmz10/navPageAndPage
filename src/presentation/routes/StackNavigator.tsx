import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/home/HomeScreen'
import SettingsScreen from '../screens/settings/SettingsScreen';



export const StackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={SettingsScreen} />
        </Stack.Navigator>
    )
}
