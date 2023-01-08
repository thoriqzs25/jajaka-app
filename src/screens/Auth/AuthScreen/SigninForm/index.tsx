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
        />
        <View style={[styles.dualInput, { marginBottom: 12 }]}>
          <TextField
            title={'Nama'}
            placeholderText={'Masukkan nama'}
            style={[styles.input]}
            setValue={setName}
            value={name}
          />
          <View style={styles.divider} />
          <TextField
            title={'No. HP'}
            placeholderText={'Masukkan nomor hp'}
            style={[styles.input]}
            setValue={setPhoneNum}
            value={phoneNum}
          />
        </View>
        <View style={styles.dualInput}>
          <TextField
            title={'Password'}
            placeholderText={'Masukkan password'}
            secureInput
            style={[styles.input]}
            setValue={setPassword}
          />
          <View style={styles.divider} />
          <TextField
            title={'Konfirmasi Password'}
            placeholderText={'Masukkan password'}
            secureInput
            style={[styles.input]}
            setValue={setPasswordConf}
          />
        </View>
      </View>
      <CustomCheckbox setValue={setTerm} />
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
