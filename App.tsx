import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppComponent from '@src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import CodePush from 'react-native-code-push';

// ts-ignore
const Test = createStackNavigator();

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };

let App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <AppComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

App = CodePush(codePushOptions)(App);
export default App;
