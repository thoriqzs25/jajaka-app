import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Main/Home';
import CustomIcon from '@src/components/CustomIcons';
import { fontFamily } from '@src/utils/fonts';
import colours from '@utils/colours';
import { FULL_TAB_BAR_HEIGHT, SCREEN_WIDTH } from '@utils/deviceDimensions';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator<any>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => {
          const isFocused = navigation.isFocused();
          return {
            tabBarShowLabel: false,
            tabBarItemStyle: {
              borderTopColor: isFocused ? colours.blueNormal : colours.white,
              borderTopWidth: 4,
            },
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity style={styles.container as ViewStyle} onPress={() => navigation.navigate('Home')}>
                <View style={styles.icon as ViewStyle}>
                  <CustomIcon name={'bluetooth'} size={24} color={focused ? colours.blueNormal : colours.gray200} />
                </View>
                <Text style={[styles.text, { color: focused ? colours.blueNormal : colours.blueYoung }]}>Home</Text>
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
    width: SCREEN_WIDTH / 5,
    height: FULL_TAB_BAR_HEIGHT + 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  text: {
    marginVertical: 3,
  },
});

export default TabNavigator;
