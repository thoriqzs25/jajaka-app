import React, { useRef } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import SwitchStackNavigator from '@src/navigation/SwitchStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CodepushCheck from '@src/components/CodepushCheck';
import colours from '@src/utils/colours';

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
  return (
    <View style={styles.screenContainer}>
      <NavigationContainer theme={appTheme}>
        <StatusBar barStyle={'light-content'} backgroundColor={colours.backgroundPrimary} />
        {/* <ErrorBox visible={message !== null} title={''} content={message ?? ''} onClose={handleInitError} /> */}
        {/* <ErrorModal /> */}
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
