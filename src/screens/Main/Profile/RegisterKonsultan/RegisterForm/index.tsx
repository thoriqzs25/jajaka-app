import CustomCheckbox from '@components/Field/CustomCheckbox';
import TextField from '@components/Field/TextField';
import { UseBoolean } from '@cTypes/hooks/UseBoolean';
import CustomIcon from '@src/components/CustomIcons';
import CustomDropdown from '@src/components/Field/CustomDropdown';
import colours from '@utils/colours';
import { fontFamily, fontFamilyDM } from '@utils/fonts';
import { globalStyle } from '@utils/globalStyles';
import { StyleSheet, Text, View } from 'react-native';

const RegisterForm = ({
  name,
  email,
  phoneNum,
  setName,
  setEmail,
  setPhoneNum,
  setTerm,
  setJasa,
  setKuliner,
  errorEmail,
  errorName,
  errorAggree,
}: {
  name?: string;
  email?: string;
  phoneNum?: string;
  setName: (val: string) => void;
  setEmail: (val: string) => void;
  setPhoneNum: (val: string) => void;
  setTerm: UseBoolean;
  setJasa: UseBoolean;
  setKuliner: UseBoolean;
  errorEmail?: string;
  errorName?: string;
  errorAggree?: string;
}) => {
  return (
    <View style={[styles.sectionContainer, globalStyle.paddingHorizontal]}>
      <Text style={styles.sectionTitle}>Register</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <CustomIcon name='person' color={colours.yellowNormal} />
        <Text
          style={{
            fontFamily: fontFamilyDM.regular,
            fontSize: 14,
            lineHeight: 18,
            color: colours.white,
            marginLeft: 8,
          }}>
          Daftar sebagai konsultan!
        </Text>
      </View>
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
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.label}>Kategori</Text>
          <CustomCheckbox title={'UMKM Jasa'} setValue={setJasa} style={{ marginBottom: 2 }} />
          <CustomCheckbox title={'UMKM Kuliner'} setValue={setKuliner} />
        </View>
        <View>
          <Text style={styles.label}>Tipe</Text>
          <CustomDropdown style={{ width: '100%', height: 48, borderRadius: 16 }} />
        </View>
      </View>
      <CustomCheckbox title='Saya telah setuju dengan syarat dan ketentuan.' error={errorAggree} setValue={setTerm} />
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
  label: {
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 4,
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
  },
});

export default RegisterForm;
