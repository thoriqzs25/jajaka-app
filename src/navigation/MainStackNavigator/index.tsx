import { createStackNavigator } from '@react-navigation/stack';
import Home from '@src/screens/Main/Home';

const Stack = createStackNavigator<Record<string, any>>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name={'Home'} component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
