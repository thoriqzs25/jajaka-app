import { SwitchStackParamList } from '@cTypes/navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import { RootState } from '@src/types/states/root';
import { useSelector } from 'react-redux';
import AuthStackNavigator from '../AuthStackNavigator';
import MainStackNavigator from '../MainStackNavigator';

const Switch = createNativeStackNavigator<SwitchStackParamList>();

const disableGesturesOptions = { gestureEnabled: false };
const noHeaderOptions = { headerShown: false };
const animateFromTheSideOptions = TransitionPresets.SlideFromRightIOS;
const noHeaderAndAnimateFromTheSideOptions = { ...noHeaderOptions, ...animateFromTheSideOptions };
const noGesturesAndNoHeaderAndAnimateFromTheSideOptions = {
  ...disableGesturesOptions,
  ...noHeaderOptions,
  ...animateFromTheSideOptions,
};

const SwitchStackNavigator = () => {
  // const user = false;
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <Switch.Navigator initialRouteName='MainStackScreen'>
      {loggedIn ? (
        <Switch.Screen name={'MainStackScreen'} options={{ headerShown: false }}>
          {() => <MainStackNavigator />}
        </Switch.Screen>
      ) : (
        <Switch.Screen name={'AuthStackScreen'} options={{ headerShown: false }}>
          {() => <AuthStackNavigator />}
        </Switch.Screen>
      )}
    </Switch.Navigator>
  );
};

export default SwitchStackNavigator;
