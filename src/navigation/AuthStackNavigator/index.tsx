import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '@screens/Auth/AuthScreen';

const Stack = createStackNavigator<Record<string, any>>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='AuthScreen'>
      <Stack.Screen name={'AuthScreen'} component={AuthScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
