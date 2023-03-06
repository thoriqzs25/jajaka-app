import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ImageView from '@src/components/ImageView';
import useBoolean from '@src/hooks/useBoolean';
import SubPages from '@src/layouts/SubPages';
import { navigate } from '@src/navigation';
import { setErrorMessage } from '@src/redux/actions/error';
import { store } from '@src/redux/store';
import { autoLogin, resendVerification } from '@src/services/auth';
import { RootState } from '@src/types/states/root';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { useCallback, useEffect, useState } from 'react';
import { AppState, AppStateStatus, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const VerifikasiScreen = () => {
  const { email, token } = useSelector((state: RootState) => state.auth);

  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);

  const { goBack } = useNavigation();

  const { value: loading, setValue: setLoading } = useBoolean(false);

  const sendVerification = async () => {
    setLoading.true();
    try {
      if (!email) navigate('AuthScreen');
      else {
        const res = await resendVerification(email);
        if (res.message) store.dispatch(setErrorMessage('Berhasil kirim verifikasi'));
      }
    } catch (e) {
      console.log('line 34', e);
    } finally {
      setLoading.false();
    }
  };

  useEffect(() => {
    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        // App has come to the foreground
        console.log('App has come to the foreground!');
        await autoLogin();
        // hit /user
      }
      setAppState(nextAppState);
    };

    // Add event listener for app state changes
    AppState.addEventListener('change', handleAppStateChange);
  }, [appState]);

  return (
    <SubPages title=''>
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          animating={loading}
          style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        />
        <ImageView name='empty-chat' style={styles.img} />
        <Text style={[styles.defaultText, styles.title]}>Verifikasi</Text>
        <Text style={[styles.defaultText, styles.desc]}>
          Pesan terkirim ke alamat email! Silakan cek alamat emailmu untuk verifikasi akun
        </Text>
        <View style={styles.linkContainer}>
          <Text style={[styles.defaultText, styles.link]}>Belum mendapatkan email? </Text>
          <TouchableOpacity activeOpacity={0.75} onPress={sendVerification}>
            <Text
              style={[styles.defaultText, styles.link, { color: colours.blueYoung, fontFamily: fontFamilyDM.medium }]}>
              Kirim ulang
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.linkContainer, { position: 'absolute', bottom: 0 }]}>
          <Text style={[styles.defaultText, styles.link]}>Ada kesalahan penulisan data? </Text>
          <TouchableOpacity activeOpacity={0.75} onPress={() => goBack()}>
            <Text
              style={[styles.defaultText, styles.link, { color: colours.redNormal, fontFamily: fontFamilyDM.medium }]}>
              Kembali
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '88%',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 14,
    paddingHorizontal: 36,
    fontFamily: fontFamilyLex.regular,
  },
  linkContainer: { flexDirection: 'row' },
  link: {
    fontSize: 12,
    fontFamily: fontFamilyDM.regular,
  },
});
export default VerifikasiScreen;
