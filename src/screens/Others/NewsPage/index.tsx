import CustomIcon from '@src/components/CustomIcons';
import newsCard from '@src/components/Renderer/newsCard';
import SubPages from '@src/layouts/SubPages';
import { allNews, queryNews } from '@src/services/news';
import { News } from '@src/types/props/news';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const NewsPage = () => {
  const [newsData, setData] = useState<News[]>([]);
  const [searchData, setSearchRes] = useState<News[]>([]);

  const getAllNews = async () => {
    const res = await allNews();
    setData(res);
    setSearchRes(res);
  };

  const searchNews = async (key: string) => {
    if (key.length > 2) {
      const qRes = await queryNews({ q: key });
      setSearchRes(qRes);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <SubPages title={'Berita UMKM'}>
      <>
        <View style={styles.headerContainer}>
          <View style={styles.searchContainer}>
            <CustomIcon name={'search1'} size={12} color={colours.gray300} />
            <TextInput
              style={styles.text}
              placeholder={'Masukkan kata kunci berita'}
              onChangeText={(text) => {
                searchNews(text);
              }}
            />
          </View>
        </View>
        <FlatList
          data={searchData.length > 0 ? searchData : newsData}
          renderItem={newsCard}
          scrollIndicatorInsets={{ right: 15 }}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </>
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
