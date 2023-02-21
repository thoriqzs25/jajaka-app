import { useNavigation } from '@react-navigation/native';
import ImageView from '@src/components/ImageView';
import SubPages from '@src/layouts/SubPages';
import { navigate } from '@src/navigation';
import { resendVerification } from '@src/services/auth';
import { RootState } from '@src/types/states/root';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const VerifikasiScreen = () => {
  const { email, token } = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    console.log('line 18', email, token);
  }, []);

  const sendVerification = async () => {
    if (!email) navigate('AuthScreen');
    else await resendVerification(email);
  };

  return (
    <SubPages title=''>
      <View style={styles.container}>
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
          <TouchableOpacity activeOpacity={0.75}>
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
