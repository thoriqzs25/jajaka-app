import CustomCarousels from '@src/components/CustomCarousels';
import CustomButton from '@src/components/Field/CustomButton';
import ImageView from '@src/components/ImageView';
import CustomSnackBar from '@src/components/SnackBar';
import useBoolean from '@src/hooks/useBoolean';
import { userLogin } from '@src/redux/actions/auth';
import colours from '@src/utils/colours';
import { validateEmail, validateName, validatePassword } from '@src/utils/constraints/signup';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';

const AuthScreen = () => {
  // user if already have registered account
  const dispatch = useDispatch();

  const { value: user, setValue: setUser } = useBoolean(true);
  const { value: termAggreement, setValue: setTerm } = useBoolean(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConf, setPasswordConf] = useState<string>('');

  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorName, setErrorName] = useState<string>('');
  const [errorPass, setErrorPass] = useState<string>('');
  const [errorAggree, setErrorAggree] = useState<string>('');

  const { value: visible, setValue: setVisible } = useBoolean(false);

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (email === '123' && password === '123') {
      console.log('success login line 22');
      dispatch(userLogin({ token: 'abcefghi', email: email }));
    }
    if (user) {
      if (!validateLogin()) setVisible.true();
    } else {
      if (!validateSignup()) setVisible.true();
    }
  };

  const validateLogin = () => {
    let res = true;
    const emailValidation = validateEmail(email);

    if (!emailValidation.value) res = false;

    setErrorEmail(emailValidation.message);

    return res;
  };

  const validateSignup = () => {
    let res = true;
    const emailValidation = validateEmail(email);
    const nameValidation = validateName(name);
    const passValidation = validatePassword(password, passwordConf);

    if (!emailValidation.value || !nameValidation.value || !passValidation.value || !termAggreement) res = false;

    setErrorEmail(emailValidation.message);
    setErrorName(nameValidation.message);
    setErrorPass(passValidation.message);

    setErrorAggree(termAggreement ? '' : 'Harap setujui syarat dan ketentuan');

    return res;
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'}>
      <CustomSnackBar
        visible={visible}
        setVisible={setVisible}
        desc={errorEmail ? errorEmail : errorName ? errorName : errorPass ? errorPass : errorAggree}
      />
      <View style={styles.pageContainer}>
        <View style={[styles.header, globalStyle.padding]}>
          <ImageView name={'logo'} style={styles.logo} />
        </View>
        <CustomCarousels />
        {user ? (
          <LoginForm setEmail={setEmail} setPassword={setPassword} email={email} errorEmail={errorEmail} />
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
            errorEmail={errorEmail}
            errorName={errorName}
            errorPass={errorPass}
            errorAggree={errorAggree}
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
  pageContainer: {
    position: 'relative',
  },
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
