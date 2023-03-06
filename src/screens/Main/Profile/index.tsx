import CustomIcon from '@src/components/CustomIcons';
import CustomButton from '@src/components/Field/CustomButton';
import CustomDropdown from '@src/components/Field/CustomDropdown';
import ImageView from '@src/components/ImageView';
import MiddleModal from '@src/components/Modal/MiddleModal';
import useBoolean from '@src/hooks/useBoolean';
import { navigate } from '@src/navigation';
import { userLogout } from '@src/redux/actions/auth';
import { Biodata, Pengalaman } from '@src/screens/Others/Ngajarkeun/KonsultanProfile';
import { RootState } from '@src/types/states/root';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { globalStyle } from '@src/utils/globalStyles';
import colours from '@utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@utils/fonts';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Codepush from '../DevTools/Codepush';

const DATA = {
  name: 'Kuya Kuyi Tahiber',
  image: 'dummy-user-3',
  email: 'kuyakuyi@gmail.com',
  phone: '+6287766554433',
};

const DATA2 = [
  { title: 'Daftar sebagai konsultan!', icon: 'person', id: 'DSK' },
  { title: 'Kebijakan Privasi', icon: 'lock-closed', id: 'KP' },
  { title: 'Ketentuan Layanan', icon: 'sticky_note', id: 'KL' },
  { title: 'Pusat Bantuan', icon: 'help_outline', id: 'PB' },
  { title: 'Pengaturan Akun', icon: 'settings', id: 'PA' },
  { title: 'Keluar', icon: 'logout', id: 'K' },
];

const DATA3 = [
  { label: 'Customer', value: 'customer' },
  { label: 'Konsultan', value: 'konsultan' },
];

const Profile = () => {
  const [userType, setType] = useState<string>('konsultan');
  const { value: logoutModal, setValue: setModal1 } = useBoolean(false);

  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const onClick = (code: string) => {
    if (code === 'K') {
      setModal1.true();
    } else if (code === 'DSK') {
      navigate('RegisterKonsultan');
    } else if (code === 'KP') {
      navigate('KebijakanPrivasi');
    } else if (code === 'KL') {
      navigate('KetentuanLayanan');
    } else if (code === 'PA') {
      navigate('PengaturanAkun');
    }
  };

  const Card = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        onPress={() => onClick(item.id)}
        activeOpacity={0.75}
        style={[
          cardStyles.container,
          {
            backgroundColor:
              item.icon === 'logout'
                ? colours.redNormal
                : item.icon === 'person'
                ? colours.blueOld
                : colours.backgroundClickable,
            marginBottom: 12,
          },
        ]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon
            name={item.icon}
            color={item.icon === 'logout' ? colours.white : colours.yellowNormal}
            size={item.icon === 'lock-closed' ? 12 : 16}
          />
          <Text
            style={{
              marginLeft: item.icon === 'lock-closed' ? 16 : 12,
              fontFamily: fontFamilyDM.regular,
              fontSize: 14,
              lineHeight: 18,
              color: colours.white,
            }}>
            {item.title}
          </Text>
        </View>
        {item.icon !== 'logout' && (
          <CustomIcon
            name='cheveron-right'
            size={16}
            color={item.icon === 'person' ? colours.white : colours.blueYoung}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[globalStyle.padding]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.title}>Profile</Text>
          <CustomDropdown
            data={DATA3}
            style={{ width: 160 }}
            image={'dummy-user-3'}
            value={userType}
            setValue={(type) => setType(type)}
          />
        </View>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', marginTop: 90 }]}>
          <View style={{ position: 'absolute', top: -70 }}>
            {user.profile_url !== undefined ? (
              <ImageView
                remoteAssetFullUri={user.profile_url as string}
                style={{
                  width: 144,
                  height: 144,
                  borderRadius: 700,
                }}
              />
            ) : (
              <CustomIcon name={'user-solid-circle'} size={140} style={{ width: 144 }} />
            )}
          </View>

          <Text style={[styles.name, { paddingTop: 70 }]}>{user.name ?? ''}</Text>
          <Text style={styles.secondaryText}>{user.email ?? ''}</Text>
          <Text style={styles.secondaryText}>{user.phone ?? ''}</Text>
        </View>
        {userType === 'konsultan' && <Biodata desc={user.consultant?.bio} />}
        {userType === 'konsultan' && <Pengalaman />}
        {DATA2.map((data: any, idx: number) => {
          if (data.icon === 'person' && userType === 'konsultan') return;
          return <Card key={idx.toString()} item={data} />;
        })}
        <Codepush />
      </ScrollView>
      <MiddleModal
        visible={logoutModal}
        onClose={() => {
          setModal1.false();
        }}
        style={{ width: 260, paddingVertical: 32 }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              width: 160,
              fontFamily: fontFamilyLex.regular,
              fontSize: 16,
              color: colours.white,
              marginBottom: 20,
            }}>
            Apakah kamu yakin ingin keluar?
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <CustomButton
              title='Batal'
              onPress={() => setModal1.false()}
              style={[styles.button, { backgroundColor: colours.white, borderColor: colours.blueNormal }]}
              titleStyle={{ color: colours.blueNormal, fontFamily: fontFamilyDM.regular, fontSize: 14 }}
            />
            <CustomButton
              title='Keluar'
              onPress={() => dispatch(userLogout())}
              style={[styles.button, { backgroundColor: colours.redNormal, borderColor: colours.redNormal }]}
              titleStyle={{ color: colours.white, fontFamily: fontFamilyDM.regular, fontSize: 14 }}
            />
          </View>
        </View>
      </MiddleModal>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 20,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  container: {
    marginBottom: 12,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colours.backgroundSecondary,
  },
  name: {
    fontSize: 18,
    lineHeight: 22,
    color: colours.white,
    fontFamily: fontFamilyLex.regular,
  },
  secondaryText: {
    fontSize: 12,
    lineHeight: 16,
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
  },
  button: {
    width: 104,
    borderWidth: 1,
    borderRadius: 28,
    marginHorizontal: 4,
    paddingVertical: 10,
  },
});
export default Profile;
