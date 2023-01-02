import { SwitchStackParamList } from '@customTypes/navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import Home from '@src/screens/Main/Home';
import { useEffect } from 'react';
import MainStackNavigator from '../MainStackNavigator';

const Stack = createNativeStackNavigator<SwitchStackParamList>();

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
    <Stack.Navigator initialRouteName='MainScreen'>
      <Stack.Screen name={'MainScreen'} options={{ headerShown: false }}>
        {() => <MainStackNavigator />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SwitchStackNavigator;
