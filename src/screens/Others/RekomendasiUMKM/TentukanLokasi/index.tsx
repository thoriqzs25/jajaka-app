import CustomButton from '@src/components/Field/CustomButton';
import CustomDropdown from '@src/components/Field/CustomDropdown';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet, Text, View } from 'react-native';

const DATA = ['Kategori', 'Produk'];

const TentukanLokasi = () => {
  return (
    <>
      <Text style={styles.title}>📍 Tentukan Lokasi UMKM</Text>
      <View style={styles.container}>
        <Text style={styles.desc}>Masukkan produk usaha</Text>
        {DATA.map((_, idx) => {
          return (
            <View style={styles.sectionContainer} key={idx.toString()}>
              <Text style={styles.sectionTitle}>{_}</Text>
              <CustomDropdown />
            </View>
          );
        })}
      </View>
      <CustomButton style={styles.button} titleStyle={styles.buttonText} iconName={'search1'} title={'Cari'} />
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
  desc: {
    marginBottom: 12,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
  sectionContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: fontFamily.regular,
    color: colours.white,
  },
  button: {
    width: 80,
    marginTop: 4,
    paddingVertical: 8,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 14,
  },
});

export default TentukanLokasi;
