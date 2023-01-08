import { createStackNavigator } from '@react-navigation/stack';
import Login from '@screens/Auth/Login';

const Stack = createStackNavigator<Record<string, any>>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
