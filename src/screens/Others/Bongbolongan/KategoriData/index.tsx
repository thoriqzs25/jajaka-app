import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet, Text, View } from 'react-native';

const KategoriData = () => {
  return (
    <>
      <Text style={styles.title}>🗒️ Kategori Data</Text>
      <View style={styles.container}>
        {Array(4)
          .fill(0)
          .map((_, idx) => {
            return (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Kota</Text>
                <Text>Box</Text>
              </View>
            );
          })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 16,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  container: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: colours.backgroundSecondary,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: fontFamily.regular,
    color: colours.white,
  },
});

export default KategoriData;
