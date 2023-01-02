import { SwitchStackParamList } from '@customTypes/navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<SwitchStackParamList>();

const SwitchStackNavigator = ({}) => {
  return (
    <></>
    // <Stack.Navigator>
    //   <Stack.Screen name={'MainScreen'}>

    //   </Stack.Screen>
    // </Stack.Navigator>
  );
};

export default SwitchStackNavigator;
