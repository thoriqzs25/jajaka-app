import React, { useEffect } from 'react';
import {
  Linking,
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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigate } from '@src/navigation';

// ts-ignore
const Test = createStackNavigator();

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

let App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      console.log('line 45', url);
      // handleDeeplink(url, handleSearch);
    });

    return () => linkingSubscription.remove();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <GestureHandlerRootView style={styles.appContainer}>
              <AppComponent />
            </GestureHandlerRootView>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
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
