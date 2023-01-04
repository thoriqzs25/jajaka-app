import { createStackNavigator } from '@react-navigation/stack';
import Home from '@src/screens/Main/Home';
import TabNavigator from './TabNavigator';

const Main = createStackNavigator<Record<string, any>>();

const MainStackNavigator = () => {
  return (
    <Main.Navigator initialRouteName='TabNavigator'>
      <Main.Screen name={'TabNavigator'} component={TabNavigator} options={{ headerShown: false }} />
    </Main.Navigator>
  );
};

export default MainStackNavigator;
