import CustomIcon from '@src/components/CustomIcons';
import ImageView from '@src/components/ImageView';
import { globalStyle } from '@src/utils/globalStyles';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import FeatureHighlights from './FeatureHighlights';
import HomeHeader from './Header';
import NewsList from './NewsList';

const content = [
  { id: 1, title: 'HomeHeader' },
  { id: 2, title: 'FeatureHighlights' },
  { id: 3, title: 'NewsList' },
];

const Home = () => {
  const _renderItem = ({ item }: { item: any }) => {
    console.log('line 16', item.title);
    switch (item.title) {
      case 'HomeHeader':
        return <HomeHeader />;
      case 'FeatureHighlights':
        return <FeatureHighlights />;
      case 'NewsList':
        return <NewsList />;
      default:
        return <></>;
    }
  };
  return (
    <FlatList
      data={content}
      renderItem={_renderItem}
      keyExtractor={(item, index) => item.id.toString()}
      contentContainerStyle={[globalStyle.padding]}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll={true}
    />
  );
};

const styles = StyleSheet.create({});

export default Home;
