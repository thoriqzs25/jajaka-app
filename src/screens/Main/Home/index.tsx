import CustomIcon from '@src/components/CustomIcons';
import ImageView from '@src/components/ImageView';
import { globalStyle } from '@src/utils/globalStyles';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import FeatureHighlights from './FeatureHighlights';
import HomeHeader from './Header';
import NewsList from './NewsList';

const Home = () => {
  return (
    <View style={[globalStyle.padding]}>
      <HomeHeader />
      <FeatureHighlights />
      <NewsList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
