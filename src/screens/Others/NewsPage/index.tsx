import CustomIcon from '@src/components/CustomIcons';
import newsCard from '@src/components/Renderer/newsCard';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const DATA = [
  {
    id: 1,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. height: 73,',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 6,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 7,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 8,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 9,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 10,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 11,
    image: 'news-dummy-image',
    date: '06-11-2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const NewsPage = () => {
  const SearchBar = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <CustomIcon name={'search1'} size={12} color={colours.gray300} />
          <TextInput style={styles.text} placeholder={'Masukkan kata kunci berita'} />
        </View>
      </View>
    );
  };

  return (
    <SubPages title={'Berita UMKM'}>
      <FlatList
        data={DATA}
        renderItem={newsCard}
        stickyHeaderIndices={[0]}
        scrollIndicatorInsets={{ right: 15 }}
        ListHeaderComponent={SearchBar}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </SubPages>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colours.backgroundPrimary,
  },
  searchContainer: {
    height: 40,
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colours.backgroundClickable,
  },
  contentContainer: {},
  text: {
    flex: 1,
    width: '100%',
    fontSize: 14,
    marginLeft: 4,
    lineHeight: 16,
    color: colours.gray300,
    fontFamily: fontFamilyDM.regular,
  },
});

export default NewsPage;
