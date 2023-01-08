import TextField from '@src/components/Field/TextField';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { StyleSheet, Text, View } from 'react-native';

const SigninForm = () => {
  return (
    <View style={[styles.sectionContainer, globalStyle.padding]}>
      <Text style={styles.sectionTitle}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextField title={'E-mail'} autoFocus placeholderText={'Masukkan e-mail'} style={{ marginBottom: 12 }} />
        <View style={styles.namaHp}>
          <TextField
            title={'Nama'}
            placeholderText={'Masukkan nama'}
            style={[styles.input, { backgroundColor: colours.yellowNormal }]}
          />
          {/* <View style={styles.divider} /> */}
          <TextField
            title={'No. HP'}
            placeholderText={'Masukkan nomor hp'}
            style={[styles.input, { backgroundColor: colours.greenNormal }]}
          />
        </View>
        <View>
          <TextField title={'Password'} placeholderText={'Masukkan password'} secureInput />
          <TextField title={'Konfirmasi Password'} placeholderText={'Masukkan password'} secureInput />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 40,
    lineHeight: 44,
    marginBottom: 8,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  formContainer: {
    borderRadius: 12,
    backgroundColor: colours.backgroundSecondary,
    padding: 12,
  },
  namaHp: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colours.redNormal,
  },
  divider: {
    // width: 8,

    backgroundColor: colours.blueNormal,
  },
  input: {},
});

export default SigninForm;
//
