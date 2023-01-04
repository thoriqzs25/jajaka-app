import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import Codepush from '../DevTools/Codepush';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Raleway</Text>
      <Codepush />
    </View>
  );
};

const styles = StyleSheet.create({
  test: { color: colours.white, fontFamily: fontFamily.bold, fontSize: 40 },
  container: {},
});

export default Home;
