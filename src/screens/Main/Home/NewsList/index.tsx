import CustomIcon from '@components/CustomIcons';
import ImageView from '@components/ImageView';
import { useNavigation } from '@react-navigation/native';
import NewsCard from '@src/components/Renderer/newsCard';
import { navigate } from '@src/navigation';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
];

const NewsList = () => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.leftText}>📰 Berita UMKM</Text>
        <TouchableOpacity
          style={styles.more}
          activeOpacity={0.75}
          onPress={() => {
            navigate('NewsPage');
          }}>
          <Text style={styles.rightText}>Lihat Selengkapnya</Text>
          <CustomIcon name={'cheveron-right'} color={colours.blueYoung} size={20} />
        </TouchableOpacity>
      </View>
      <FlatList data={DATA} renderItem={NewsCard} keyExtractor={(item, index) => item.id.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 8,
  },
  headerContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    lineHeight: 20,
    color: colours.white,
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    fontSize: 16,
    lineHeight: 16,
    marginRight: 2,
    color: colours.blueYoung,
    fontFamily: fontFamily.bold,
  },
});

export default NewsList;
