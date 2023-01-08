import CustomButton from '@src/components/Field/CustomButton';
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
        <TextField title={'E-mail'} placeholderText={'Masukkan e-mail'} style={{ marginBottom: 12 }} />
        <TextField title={'Password'} placeholderText={'Masukkan password'} secureInput />
      </View>
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
    backgroundColor: colours.backgroundSecondary,
  },
});

export default LoginForm;
