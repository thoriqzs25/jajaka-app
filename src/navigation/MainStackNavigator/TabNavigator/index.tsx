import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Main/Home';
import CustomIcon from '@src/components/CustomIcons';
import Profile from '@src/screens/Main/Profile';
import { fontFamily } from '@src/utils/fonts';
import colours from '@utils/colours';
import { FULL_TAB_BAR_HEIGHT, SCREEN_WIDTH } from '@utils/deviceDimensions';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator<any>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 72 },
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
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
                    borderTopColor: isFocused ? colours.yellowNormal : colours.backgroundClickable,
                    borderTopWidth: isFocused ? 2 : 1,
                  },
                ]}
                onPress={() => navigation.navigate('Home')}>
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
                    borderTopColor: isFocused ? colours.yellowNormal : colours.backgroundClickable,
                    borderTopWidth: isFocused ? 2 : 1,
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
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: SCREEN_WIDTH / 5,
    paddingHorizontal: 2,
    height: 73,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colours.blueNormal,
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  text: {
    marginVertical: 2,
    fontFamily: fontFamily.bold,
  },
});

export default TabNavigator;
