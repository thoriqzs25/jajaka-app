import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Main/Home';
import CustomIcon from '@src/components/CustomIcons';
import Chat from '@src/screens/Main/Chat';
import Profile from '@src/screens/Main/Profile';
import { fontFamily } from '@src/utils/fonts';
import colours from '@utils/colours';
import { FULL_TAB_BAR_HEIGHT, SCREEN_WIDTH } from '@utils/deviceDimensions';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeStackNavigator from './HomeStack';

const Tab = createBottomTabNavigator<any>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 72 },
      }}>
      <Tab.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={({ navigation }) => {
          const isFocused = navigation.isFocused();
          return {
            tabBarShowLabel: false,

            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                style={[
                  styles.container as ViewStyle,
                  {
                    borderTopColor: isFocused ? colours.yellowNormal : colours.gray500,
                    borderTopWidth: isFocused ? 2 : 0.5,
                    paddingTop: isFocused ? 0 : 0.5,
                  },
                ]}
                onPress={() => navigation.navigate('HomeStack')}>
                <View style={styles.icon as ViewStyle}>
                  <CustomIcon name={'home1'} size={24} color={focused ? colours.yellowNormal : colours.gray300} />
                </View>
                <Text style={[styles.text, { color: focused ? colours.yellowNormal : colours.gray300 }]}>Home</Text>
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Tab.Screen
        name='Chat'
        component={Chat}
        options={({ navigation }) => {
          const isFocused = navigation.isFocused();
          return {
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                style={[
                  styles.container as ViewStyle,
                  {
                    borderTopColor: isFocused ? colours.yellowNormal : colours.gray500,
                    borderTopWidth: isFocused ? 2 : 0.5,
                    paddingTop: isFocused ? 0 : 0.5,
                  },
                ]}
                onPress={() => navigation.navigate('Chat')}>
                <View style={styles.icon as ViewStyle}>
                  <CustomIcon
                    name={'chat-bubble-dots'}
                    size={24}
                    color={focused ? colours.yellowNormal : colours.gray300}
                  />
                </View>
                <Text style={[styles.text, { color: focused ? colours.yellowNormal : colours.gray300 }]}>Chat</Text>
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={({ navigation }) => {
          const isFocused = navigation.isFocused();
          return {
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                style={[
                  styles.container as ViewStyle,
                  {
                    borderTopColor: isFocused ? colours.yellowNormal : colours.gray500,
                    borderTopWidth: isFocused ? 2 : 0.5,
                    paddingTop: isFocused ? 0 : 0.5,
                  },
                ]}
                onPress={() => navigation.navigate('Profile')}>
                <View style={styles.icon as ViewStyle}>
                  <CustomIcon name={'user1'} size={24} color={focused ? colours.yellowNormal : colours.gray300} />
                </View>
                <Text style={[styles.text, { color: focused ? colours.yellowNormal : colours.gray300 }]}>Profile</Text>
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 73,
    alignItems: 'center',
    paddingHorizontal: 2,
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 2,
    fontFamily: fontFamily.bold,
  },
});

export default TabNavigator;
