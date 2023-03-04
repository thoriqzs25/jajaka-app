import CustomIcon from '@src/components/CustomIcons';
import CustomButton from '@src/components/Field/CustomButton';
import ImageView from '@src/components/ImageView';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { useCallback, useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, Text, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import TextField from '@src/components/Field/TextField';
import { useSelector } from 'react-redux';
import { RootState } from '@src/types/states/root';
import { fontFamilyDM } from '@src/utils/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '@src/navigation';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/utils/deviceDimensions';

const PengaturanAkun = () => {
  const { user } = useSelector((state: RootState) => state);

  const [photo, setPhoto] = useState<any>();
  const [email, setEmail] = useState<string>(user.email ?? '');
  const [name, setName] = useState<string>(user.name ?? '');
  const [phone, setPhone] = useState<string>(user.phone?.toString() ?? '');

  const handleOpenLibrary = async () => {
    const image = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 400,
      maxWidth: 400,
    });

    if (image.assets) {
      const tempFile = {
        fileName: 'image of thoriq',
        // fileData: image.assets[0]?.base64,
        fileUri: image.assets[0]?.uri,
      };

      setPhoto(tempFile.fileUri);
      console.log('Response', tempFile);
    }
  };

  const ProfilePicture = () => {
    return (
      <Pressable onPress={() => handleOpenLibrary()}>
        <View style={{ position: 'relative' }}>
          {photo ? (
            <Image
              source={{ uri: photo }}
              style={{
                width: 144,
                height: 144,
                borderRadius: 700,
              }}
            />
          ) : (
            <CustomIcon name={'user-solid-circle'} size={140} style={{ width: 144 }} />
          )}
          <CustomIcon
            name={'edit-pencil'}
            size={18}
            style={{
              right: 12,
              bottom: 0,
              padding: 8,
              borderRadius: 100,
              position: 'absolute',
              backgroundColor: colours.blueNormal,
            }}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <SubPages title='Pengaturan Akun'>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'} keyboardVerticalOffset={-100}>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            height: SCREEN_HEIGHT - 200,
            backgroundColor: colours.backgroundPrimary,
          }}>
          <ProfilePicture />
          <View style={{ borderRadius: 12, backgroundColor: colours.backgroundSecondary, padding: 12, marginTop: 20 }}>
            <TextField
              title={'E-mail'}
              placeholderText={'Masukkan e-mail'}
              style={{ marginBottom: 12 }}
              setValue={setEmail}
              value={email}
            />
            <TextField
              title={'Name'}
              placeholderText={'Jajaka Tahiber'}
              style={{ marginBottom: 12 }}
              setValue={setName}
              value={name}
            />
            <TextField
              title={'No. HP'}
              placeholderText={'0812345678'}
              style={{ marginBottom: 12 }}
              setValue={setPhone}
              value={phone}
            />
            <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('GantiPassword')}>
              <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: colours.blueYoung, fontFamily: fontFamilyDM.medium }}>Ganti Password</Text>
                <CustomIcon name={'cheveron-right'} color={colours.blueYoung} />
              </View>
            </TouchableOpacity>
          </View>
          <CustomButton title='Save' style={{ position: 'absolute', bottom: 0, width: '100%' }} />
        </View>
      </KeyboardAvoidingView>
    </SubPages>
  );
};

export default PengaturanAkun;
