import { createStackNavigator } from '@react-navigation/stack';
import Profile from '@src/screens/Main/Profile';
import KebijakanPrivasi from '@src/screens/Main/Profile/KebijakanPrivasi';
import KetentuanLayanan from '@src/screens/Main/Profile/KetentuanLayanan';
import PengaturanAkun from '@src/screens/Main/Profile/PengaturanAkun';
import GantiPassword from '@src/screens/Main/Profile/PengaturanAkun/GantiPassword';
import RegisterKonsultan from '@src/screens/Main/Profile/RegisterKonsultan';

const ProfileStack = createStackNavigator<Record<string, any>>();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName='Profile'>
      <ProfileStack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      <ProfileStack.Screen name='RegisterKonsultan' component={RegisterKonsultan} options={{ headerShown: false }} />
      <ProfileStack.Screen name='KebijakanPrivasi' component={KebijakanPrivasi} options={{ headerShown: false }} />
      <ProfileStack.Screen name='KetentuanLayanan' component={KetentuanLayanan} options={{ headerShown: false }} />
      <ProfileStack.Screen name='PengaturanAkun' component={PengaturanAkun} options={{ headerShown: false }} />
      <ProfileStack.Screen name='GantiPassword' component={GantiPassword} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
