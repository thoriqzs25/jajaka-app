import { createStackNavigator } from '@react-navigation/stack';
import Home from '@src/screens/Main/Home';
import NewsDetail from '@src/screens/Others/NewsDetail';
import NewsPage from '@src/screens/Others/NewsPage';
import Notification from '@src/screens/Others/Notification';
import TabNavigator from './TabNavigator';

const Main = createStackNavigator<Record<string, any>>();

const MainStackNavigator = () => {
  return (
    <Main.Navigator initialRouteName='TabNavigator'>
      <Main.Screen name={'TabNavigator'} component={TabNavigator} options={{ headerShown: false }} />
      <Main.Screen name={'NewsPage'} component={NewsPage} options={{ headerShown: false }} />
      <Main.Screen name={'NewsDetail'} component={NewsDetail} options={{ headerShown: false }} />
      <Main.Screen name={'Notification'} component={Notification} options={{ headerShown: false }} />
    </Main.Navigator>
  );
};

export default MainStackNavigator;
