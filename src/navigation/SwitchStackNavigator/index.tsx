import { SwitchStackParamList } from '@cTypes/navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import { useEffect } from 'react';
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
  const user = false;

  return (
    <Switch.Navigator initialRouteName='MainScreen'>
      {user ? (
        <Switch.Screen name={'MainScreen'} options={{ headerShown: false }}>
          {() => <MainStackNavigator />}
        </Switch.Screen>
      ) : (
        <Switch.Screen name={'AuthScreen'} options={{ headerShown: false }}>
          {() => <AuthStackNavigator />}
        </Switch.Screen>
      )}
    </Switch.Navigator>
  );
};

export default SwitchStackNavigator;
