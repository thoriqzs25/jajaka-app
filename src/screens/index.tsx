import React, { useEffect, useRef } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import SwitchStackNavigator from '@src/navigation/SwitchStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CodepushCheck from '@src/components/CodepushCheck';
import colours from '@src/utils/colours';
import { navigationRef } from '@src/navigation';
import CustomSnackBar from '@src/components/SnackBar';
import { RootState } from '@src/types/states/root';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorMessage } from '@src/redux/actions/error';
import { autoLogin } from '@src/services/auth';

const Test = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colours.backgroundPrimary,
    card: colours.backgroundPrimary,
    background: colours.backgroundPrimary,
  },
};

const AppComponent = () => {
  const { message } = useSelector((state: RootState) => state.error);

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <View style={styles.screenContainer}>
      <NavigationContainer theme={appTheme} ref={navigationRef}>
        <StatusBar barStyle={'light-content'} backgroundColor={colours.backgroundPrimary} />
        <CustomSnackBar visible={message !== null && message !== ''} desc={message ?? ''} />
        <CodepushCheck />
        <SwitchStackNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default AppComponent;
