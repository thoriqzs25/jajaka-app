import CustomCarousels from '@src/components/CustomCarousels';
import CustomButton from '@src/components/Field/CustomButton';
import ImageView from '@src/components/ImageView';
import useBoolean from '@src/hooks/useBoolean';
import { userLogin } from '@src/redux/actions/auth';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';

const AuthScreen = () => {
  // user if already have registered account
  const dispatch = useDispatch();

  const { value: user, setValue: setUser } = useBoolean(true);
  const { value: termAggreement, setValue: setTerm } = useBoolean(true);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConf, setPasswordConf] = useState<string>('');

  const handleSubmit = () => {
    if (email === '123' && password === '123') {
      console.log('success login line 22');
      dispatch(userLogin({ token: 'abcefghi', email: email }));
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'}>
      <View style={styles.pageContainer}>
        <View style={[styles.header, globalStyle.padding]}>
          <ImageView name={'logo'} style={styles.logo} />
        </View>
        <CustomCarousels />
        {user ? (
          <LoginForm setEmail={setEmail} setPassword={setPassword} email={email} />
        ) : (
          <SigninForm
            name={name}
            email={email}
            phoneNum={phoneNum}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setPhoneNum={setPhoneNum}
            setPasswordConf={setPasswordConf}
            setTerm={setTerm}
          />
        )}
        <View style={[globalStyle.paddingHorizontal]}>
          <CustomButton title={user ? 'Login' : 'Sign Up'} style={styles.button} onPress={handleSubmit} />
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
    marginBottom: 16,
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
