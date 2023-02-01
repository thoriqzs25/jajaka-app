import { createStackNavigator } from '@react-navigation/stack';
import Messages from '@src/screens/Main/Messages';
import Chat from '@src/screens/Others/Chat';

const ChatStack = createStackNavigator<Record<string, any>>();

const ChatStackNavigator = () => {
  return (
    <ChatStack.Navigator initialRouteName='Messages'>
      <ChatStack.Screen name='Messages' component={Messages} options={{ headerShown: false }} />
      <ChatStack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
    </ChatStack.Navigator>
  );
};

export default ChatStackNavigator;
