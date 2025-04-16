import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/home/HomeScreen'
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProfileScreen from "../screens/profile/ProfileScreen";
import ProductScreen from "../screens/products/ProductScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import AboutScreen from "../screens/about/AboutScreen";


export const StackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}
