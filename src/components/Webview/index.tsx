import { RouteProp } from '@react-navigation/native';
import SubPages from '@src/layouts/SubPages';
import { WebView } from 'react-native-webview';

const Webview = ({ route }: { route: RouteProp<any> }) => {
  return (
    <SubPages title='Kembali' childPadding={false}>
      <WebView javaScriptEnabled source={{ uri: route.params?.url ?? 'https://reactnative.dev/' }} />
    </SubPages>
  );
};

export default Webview;
