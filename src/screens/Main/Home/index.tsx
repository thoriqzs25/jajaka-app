import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Raleway</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  test: { color: colours.white, fontFamily: fontFamily.bold, fontSize: 40 },
  container: { width: 200, height: 400, backgroundColor: colours.blueNormal },
});

export default Home;
