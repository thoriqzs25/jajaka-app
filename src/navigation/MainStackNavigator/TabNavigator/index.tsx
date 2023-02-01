import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, RouteProp, Router, RouterConfigOptions } from '@react-navigation/native';
import Home from '@screens/Main/Home';
import CustomIcon from '@src/components/CustomIcons';
import Chat from '@src/screens/Main/Messages';
import Profile from '@src/screens/Main/Profile';
import { fontFamily } from '@src/utils/fonts';
import colours from '@utils/colours';
import { FULL_TAB_BAR_HEIGHT, SCREEN_WIDTH } from '@utils/deviceDimensions';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatStackNavigator from './ChatStack';
import HomeStackNavigator from './HomeStack';

const Tab = createBottomTabNavigator<any>();

const TabNavigator = () => {
  const getTabBarVisibility = (route: RouteProp<any>) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    const hideOnScreens = ['Chat'];
    if (hideOnScreens.indexOf(routeName) <= -1) return 'flex';
    return 'none';
  };

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
                <View style={[styles.icon as ViewStyle, { marginTop: isFocused ? 5.5 : 6 }]}>
                  <CustomIcon name={'fluent_home'} size={24} color={focused ? colours.yellowNormal : colours.gray300} />
                </View>
                <Text style={[styles.text, { color: focused ? colours.yellowNormal : colours.gray300 }]}>Home</Text>
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Tab.Screen
        name='ChatStack'
        component={ChatStackNavigator}
        options={({ navigation, route }) => {
          const isFocused = navigation.isFocused();
          return {
            tabBarStyle: { display: getTabBarVisibility(route), height: 72 },
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
                onPress={() => navigation.navigate('ChatStack')}>
                <View style={[styles.icon as ViewStyle, { marginTop: isFocused ? 5.5 : 6 }]}>
                  <CustomIcon name={'forum'} size={24} color={focused ? colours.yellowNormal : colours.gray300} />
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
                <View style={[styles.icon as ViewStyle, { marginTop: isFocused ? 5.5 : 6 }]}>
                  <CustomIcon
                    name={'fluent_person'}
                    size={24}
                    color={focused ? colours.yellowNormal : colours.gray300}
                  />
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
