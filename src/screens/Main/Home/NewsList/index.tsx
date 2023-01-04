import CustomIcon from '@components/CustomIcons';
import ImageView from '@components/ImageView';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
  const _renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.cardContainer}>
        <ImageView name={'news-dummy-image'} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.regular, styles.date]}>{item.date}</Text>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
            {item.title}
          </Text>
          <Text style={[styles.regular, styles.desc]} numberOfLines={2} ellipsizeMode='tail'>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.listContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.leftText}>📰 Berita UMKM</Text>
        <View style={styles.more}>
          <Text style={styles.rightText}>Lihat Selengkapnya</Text>
          <CustomIcon name={'cheveron-right'} color={colours.blueYoung} size={20} />
        </View>
      </View>
      <FlatList data={DATA} renderItem={_renderItem} keyExtractor={(item, index) => item.id.toString()} />
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
  cardContainer: {
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    backgroundColor: colours.backgroundClickable,
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textContainer: {
    padding: 8,
    width: 244,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  regular: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 18,
    color: colours.gray300,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 20,
    color: colours.white,
  },
  date: {
    color: colours.gray300,
  },
  desc: {
    color: colours.white,
  },
});

export default NewsList;
