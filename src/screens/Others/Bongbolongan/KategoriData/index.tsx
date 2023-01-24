import CustomButton from '@src/components/Field/CustomButton';
import CustomDropdown from '@src/components/Field/CustomDropdown';
import TextField from '@src/components/Field/TextField';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet, Text, View } from 'react-native';

const DATA = ['Kota', 'Kecamatan', 'Sektor', 'Kredit'];

const KategoriData = () => {
  const handleFilter = () => {
    return;
  };

  return (
    <>
      <Text style={styles.title}>🗒️ Kategori Data</Text>
      <View style={styles.container}>
        {DATA.map((_, idx) => {
          if (idx !== 0) {
            return (
              <View style={styles.sectionContainer} key={idx.toString()}>
                <Text style={styles.sectionTitle}>{_}</Text>
                <CustomDropdown />
              </View>
            );
          } else {
            return (
              <View style={styles.sectionContainer} key={idx.toString()}>
                <Text style={styles.sectionTitle}>{_}</Text>
                <TextField
                  inputStyle={{ borderRadius: 8 }}
                  style={{ width: 200, height: 33 }}
                  placeholderText='Bandung'
                  setValue={() => console.log('line 31')}
                />
              </View>
            );
          }
        })}
      </View>
      <CustomButton
        style={styles.button}
        titleStyle={styles.buttonText}
        iconName={'search1'}
        title={'Cari'}
        onPress={handleFilter}
      />
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
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 14,
    lineHeight: 18,
    color: colours.white,
    fontFamily: fontFamily.regular,
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

export default KategoriData;
