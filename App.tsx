import React, { useEffect } from 'react';
import {
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppComponent from '@src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import CodePush from 'react-native-code-push';
import colours from '@utils/colours';
import { Provider } from 'react-redux';
import { persistor, store } from '@src/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GestureHandlerRootView style={styles.appContainer}>
            <AppComponent />
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colours.backgroundPrimary,
  },
});

App = CodePush(codePushOptions)(App);
export default App;
