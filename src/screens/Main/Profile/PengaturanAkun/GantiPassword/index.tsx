import { useNavigation } from '@react-navigation/native';
import CustomButton from '@src/components/Field/CustomButton';
import TextField from '@src/components/Field/TextField';
import SubPages from '@src/layouts/SubPages';
import { setErrorMessage } from '@src/redux/actions/error';
import { store } from '@src/redux/store';
import { changePassword } from '@src/services/auth';
import colours from '@src/utils/colours';
import { SCREEN_HEIGHT } from '@src/utils/deviceDimensions';
import { useState } from 'react';
import { Text, View } from 'react-native';

const GantiPassword = () => {
  const [currPass, setCurrPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [confPass, setConfPass] = useState<string>('');

  const { goBack } = useNavigation();

  const handleChangePassword = async () => {
    try {
      if (newPass.length > 0 && newPass === confPass) {
        const payload = {
          new_password: newPass,
          old_password: currPass,
        };
        const res = await changePassword(payload);

        if (res.message === 'Success') {
          store.dispatch(setErrorMessage('Sukses ganti password'));
          goBack();
        }
      } else {
        store.dispatch(setErrorMessage('Password tidak sama'));
      }
    } catch (e) {
      console.log('line 35 e', e);
    }
  };

  return (
    <SubPages title='Ganti Password'>
      <View
        style={{
          height: SCREEN_HEIGHT - 200,
          marginTop: 20,
        }}>
        <View style={{ borderRadius: 12, backgroundColor: colours.backgroundSecondary, padding: 12 }}>
          <TextField
            title={'Password Lama'}
            secureInput={true}
            placeholderText={'Masukkan password lama'}
            style={{ marginBottom: 12 }}
            setValue={setCurrPass}
            value={currPass}
          />
          <TextField
            title={'Password Baru'}
            secureInput={true}
            placeholderText={'Masukkan password baru'}
            style={{ marginBottom: 12 }}
            setValue={setNewPass}
            value={newPass}
          />
          <TextField
            title={'Konfirmasi Password'}
            secureInput={true}
            placeholderText={'Masukkan password baru'}
            style={{ marginBottom: 12 }}
            setValue={setConfPass}
            value={confPass}
          />
        </View>
        <CustomButton
          title='Save'
          style={{ position: 'absolute', bottom: 0, width: '100%' }}
          onPress={handleChangePassword}
        />
      </View>
    </SubPages>
  );
};

export default GantiPassword;
