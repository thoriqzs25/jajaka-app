import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '@screens/Auth/AuthScreen';
import LupaPassword from '@src/screens/Auth/LupaPassword';
import VerifikasiScreen from '@src/screens/Auth/VerifikasiScreen';

const Stack = createStackNavigator<Record<string, any>>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='AuthScreen'>
      <Stack.Screen name={'AuthScreen'} component={AuthScreen} options={{ headerShown: false }} />
      <Stack.Screen name={'Verifikasi'} component={VerifikasiScreen} options={{ headerShown: false }} />
      <Stack.Screen name={'LupaPassword'} component={LupaPassword} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
