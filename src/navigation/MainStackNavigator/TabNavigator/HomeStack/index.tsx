import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Main/Home';
import Bongbolongan from '@src/screens/Others/Bongbolongan';
import NewsDetail from '@src/screens/Others/NewsDetail';
import NewsPage from '@src/screens/Others/NewsPage';
import Ngajarkeun from '@src/screens/Others/Ngajarkeun';
import Notification from '@src/screens/Others/Notification';
import RekomendasiUMKM from '@src/screens/Others/RekomendasiUMKM';
import PenelusuranUMKM from '@src/screens/Others/RekomendasiUMKM/RekomendasiProduk/PenelusuranUMKM';

const HomeStack = createStackNavigator<Record<string, any>>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name='NewsPage' component={NewsPage} options={{ headerShown: false }} />
      <HomeStack.Screen name='NewsDetail' component={NewsDetail} options={{ headerShown: false }} />
      <HomeStack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />
      <HomeStack.Screen name='Bongbolongan' component={Bongbolongan} options={{ headerShown: false }} />
      <HomeStack.Screen name='Ngajarkeun' component={Ngajarkeun} options={{ headerShown: false }} />
      <HomeStack.Screen name='RekomendasiUMKM' component={RekomendasiUMKM} options={{ headerShown: false }} />
      <HomeStack.Screen name='PenelusuranUMKM' component={PenelusuranUMKM} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
