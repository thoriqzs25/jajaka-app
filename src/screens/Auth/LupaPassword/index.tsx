import CustomButton from '@src/components/Field/CustomButton';
import TextField from '@src/components/Field/TextField';
import ImageView from '@src/components/ImageView';
import useBoolean from '@src/hooks/useBoolean';
import SubPages from '@src/layouts/SubPages';
import { setErrorMessage } from '@src/redux/actions/error';
import { store } from '@src/redux/store';
import { resetPassword } from '@src/services/auth';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LupaPassword = () => {
  const [email, setEmail] = useState<string>('');

  const { value: error, setValue: setError } = useBoolean(false);
  const { value: emailSent, setValue: setEmailSent } = useBoolean(false);
  const { value: loading, setValue: setLoading } = useBoolean(false);

  const sendResetRequest = async () => {
    setLoading.true();
    try {
      if (!email) {
        setError.true();
        store.dispatch(setErrorMessage('Masukkan email milikmu'));
      } else {
        const res = await resetPassword(email);

        console.log(res);
        if (res.message === 'Success') {
          store.dispatch(setErrorMessage('Berhasil kirim verifikasi'));
          setEmailSent.true();
        }
      }
    } catch (e) {
      console.log('line 32', e);
    } finally {
      setLoading.false();
    }
  };

  return (
    <SubPages title=''>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ActivityIndicator
            size={'large'}
            animating={loading}
            style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
          />
          <ImageView name='empty-chat' style={styles.img} />
          <Text style={[styles.defaultText, styles.title]}>Lupa Password</Text>
          {emailSent ? (
            <>
              <Text style={[styles.defaultText, styles.desc]}>
                Email telah terkirim! Silakan cek untuk mengatur ulang password
              </Text>
              <View style={styles.linkContainer}>
                <Text style={[styles.defaultText, styles.link]}>Belum mendapatkan email? </Text>
                <TouchableOpacity activeOpacity={0.75} onPress={sendResetRequest}>
                  <Text
                    style={[
                      styles.defaultText,
                      styles.link,
                      { color: colours.blueYoung, fontFamily: fontFamilyDM.medium },
                    ]}>
                    Kirim ulang
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Text style={[styles.defaultText, styles.desc]}>
                Masukkan alamat email Anda untuk mengatur ulang password{' '}
              </Text>
              <TextField
                title='E-mail'
                setValue={setEmail}
                error={error}
                placeholderText={'Masukkan email'}
                style={{ paddingHorizontal: 36 }}
              />
            </>
          )}
        </View>
        <CustomButton
          title={emailSent ? 'Kembali' : 'Kirim'}
          style={{ width: '100%' }}
          // style={{ position: 'absolute', bottom: 0, width: '100%' }}
          onPress={emailSent ? () => setEmailSent.false() : sendResetRequest}
        />
      </KeyboardAvoidingView>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '88%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colours.redNormal,
  },
  img: {
    width: 180,
    height: 180,
  },
  defaultText: {
    textAlign: 'center',
    color: colours.white,
  },
  title: {
    fontSize: 36,
    marginBottom: 14,
    fontFamily: fontFamily.semiBold,
  },
  desc: {
    fontSize: 16,
    marginBottom: 18,
    paddingHorizontal: 36,
    fontFamily: fontFamilyLex.regular,
  },
  linkContainer: { flexDirection: 'row' },
  link: {
    fontSize: 12,
    fontFamily: fontFamilyDM.regular,
  },
});

export default LupaPassword;
