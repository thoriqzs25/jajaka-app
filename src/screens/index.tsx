import React, { useRef } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SwitchStackNavigator from '@src/navigation/SwitchStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CodepushCheck from '@src/components/CodepushCheck';

const Test = createNativeStackNavigator();

const AppComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        {/* <ErrorBox visible={message !== null} title={''} content={message ?? ''} onClose={handleInitError} /> */}
        {/* <ErrorModal /> */}
        <CodepushCheck />
        <SwitchStackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default AppComponent;
