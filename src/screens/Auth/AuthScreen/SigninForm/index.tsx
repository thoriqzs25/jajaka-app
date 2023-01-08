import CustomCheckbox from '@src/components/Field/CustomCheckbox';
import TextField from '@src/components/Field/TextField';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { StyleSheet, Text, View } from 'react-native';

const SigninForm = () => {
  return (
    <View style={[styles.sectionContainer, globalStyle.paddingHorizontal]}>
      <Text style={styles.sectionTitle}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextField title={'E-mail'} placeholderText={'Masukkan e-mail'} style={{ marginBottom: 12 }} />
        <View style={[styles.dualInput, { marginBottom: 12 }]}>
          <TextField title={'Nama'} placeholderText={'Masukkan nama'} style={[styles.input]} />
          <View style={styles.divider} />
          <TextField title={'No. HP'} placeholderText={'Masukkan nomor hp'} style={[styles.input]} />
        </View>
        <View style={styles.dualInput}>
          <TextField title={'Password'} placeholderText={'Masukkan password'} secureInput style={[styles.input]} />
          <View style={styles.divider} />
          <TextField
            title={'Konfirmasi Password'}
            placeholderText={'Masukkan password'}
            secureInput
            style={[styles.input]}
          />
        </View>
      </View>
      <CustomCheckbox />
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 32,
    lineHeight: 36,
    marginBottom: 8,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  formContainer: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 4,
    backgroundColor: colours.backgroundSecondary,
  },
  dualInput: {
    flexDirection: 'row',
  },
  divider: {
    width: '2%',
  },
  input: {
    width: '49%',
  },
});

export default SigninForm;
//
