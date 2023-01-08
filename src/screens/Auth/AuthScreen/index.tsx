import CustomCarousels from '@src/components/CustomCarousels';
import CustomButton from '@src/components/Field/CustomButton';
import ImageView from '@src/components/ImageView';
import useBoolean from '@src/hooks/useBoolean';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';

const AuthScreen = () => {
  // user if already have registered account
  const { value: user, setValue: setUser } = useBoolean(true);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'}>
      <View style={styles.pageContainer}>
        <View style={[styles.header, globalStyle.padding]}>
          <ImageView name={'logo'} style={styles.logo} />
        </View>
        <CustomCarousels />
        {user ? <LoginForm /> : <SigninForm />}
        <View style={[globalStyle.paddingHorizontal]}>
          <CustomButton title={'Login'} style={styles.button} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            Belum punya akun?{' '}
            <Text
              style={styles.footerSpan}
              onPress={() => {
                setUser.toggle();
              }}>
              {user ? 'Sign Up' : 'Login'}
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {},
  header: {
    marginBottom: 24,
  },
  logo: {
    width: 44,
    height: 44,
  },
  button: {
    marginBottom: 16,
  },
  footer: {
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
  footerSpan: {
    color: colours.blueYoung,
    fontFamily: fontFamily.semiBold,
  },
});
export default AuthScreen;
