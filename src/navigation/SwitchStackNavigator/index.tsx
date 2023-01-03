import { SwitchStackParamList } from '@cTypes/navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import Home from '@src/screens/Main/Home';
import { useEffect } from 'react';
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
  return (
    <Switch.Navigator initialRouteName='MainScreen'>
      <Switch.Screen name={'MainScreen'} options={{ headerShown: false }}>
        {() => <MainStackNavigator />}
      </Switch.Screen>
    </Switch.Navigator>
  );
};

export default SwitchStackNavigator;
