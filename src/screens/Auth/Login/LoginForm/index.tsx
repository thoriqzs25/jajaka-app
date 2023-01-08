import TextField from '@src/components/Field/TextField';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { StyleSheet, Text, View } from 'react-native';

const LoginForm = () => {
  return (
    <View style={[styles.sectionContainer, globalStyle.padding]}>
      <Text style={styles.sectionTitle}>Login</Text>
      <View style={styles.formContainer}>
        <TextField title={'E-mail'} autoFocus placeholderText={'Masukkan e-mail'} style={{ marginBottom: 12 }} />
        <TextField title={'Password'} placeholderText={'Masukkan password'} secureInput />
      </View>
      <Text>Login //custombutton</Text>
      <Text>
        Belum punya akun? <Text>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {},
  sectionTitle: {
    fontSize: 40,
    lineHeight: 44,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  formContainer: {
    borderRadius: 12,
    backgroundColor: colours.backgroundSecondary,
    padding: 12,
  },
});

export default LoginForm;
