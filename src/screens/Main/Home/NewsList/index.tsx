import { FlatList, StyleSheet, Text, View } from 'react-native';

const NewsList = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text>📰 Berita UMKM</Text>
        <Text>Lihat Selengkapnya</Text>
      </View>
      {/* <FlatList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NewsList;
