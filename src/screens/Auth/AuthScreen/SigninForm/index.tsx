import CustomCheckbox from '@components/Field/CustomCheckbox';
import TextField from '@components/Field/TextField';
import { UseBoolean } from '@cTypes/hooks/UseBoolean';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { globalStyle } from '@utils/globalStyles';
import { StyleSheet, Text, View } from 'react-native';

const SigninForm = ({
  name,
  email,
  phoneNum,
  setName,
  setEmail,
  setPassword,
  setPhoneNum,
  setPasswordConf,
  setTerm,
  errorEmail,
  errorName,
  errorPass,
  errorAggree,
}: {
  name?: string;
  email?: string;
  phoneNum?: string;
  setName: (val: string) => void;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setPhoneNum: (val: string) => void;
  setPasswordConf: (val: string) => void;
  setTerm: UseBoolean;
  errorEmail?: boolean;
  errorName?: boolean;
  errorPass?: boolean;
  errorAggree?: boolean;
}) => {
  return (
    <View style={[styles.sectionContainer, globalStyle.paddingHorizontal]}>
      <Text style={styles.sectionTitle}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextField
          title={'E-mail'}
          placeholderText={'Masukkan e-mail'}
          style={{ marginBottom: 12 }}
          setValue={setEmail}
          value={email}
          error={errorEmail}
        />
        <View style={[styles.dualInput, { marginBottom: 12 }]}>
          <TextField
            title={'Nama'}
            placeholderText={'Jajaka Tahiber'}
            style={[styles.input]}
            setValue={setName}
            value={name}
            autoCapitalize={'words'}
            error={errorName}
          />
          <View style={styles.divider} />
          <TextField
            title={'No. HP'}
            placeholderText={'0812345678'}
            style={[styles.input]}
            setValue={setPhoneNum}
            value={phoneNum}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.dualInput}>
          <TextField
            title={'Password'}
            placeholderText={'Masukkan password'}
            secureInput
            style={[styles.input]}
            setValue={setPassword}
            error={errorPass}
          />
          <View style={styles.divider} />
          <TextField
            title={'Konfirmasi Password'}
            placeholderText={'Masukkan password'}
            secureInput
            style={[styles.input]}
            setValue={setPasswordConf}
            error={errorPass}
          />
        </View>
      </View>
      <CustomCheckbox title={'Saya telah setuju dengan syarat dan ketentuan.'} error={errorAggree} setValue={setTerm} />
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
