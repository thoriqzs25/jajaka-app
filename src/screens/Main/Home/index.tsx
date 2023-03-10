import { useFocusEffect } from '@react-navigation/native';
import useBoolean from '@src/hooks/useBoolean';
import { RootState } from '@src/types/states/root';
import { globalStyle } from '@utils/globalStyles';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
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
    <>
      <FlatList
        data={content}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        contentContainerStyle={[globalStyle.padding]}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
