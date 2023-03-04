import TextField from '@src/components/Field/TextField';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { useState } from 'react';
import { Text, View } from 'react-native';

const GantiPassword = () => {
  const [currPass, setCurrPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [confPass, setConfPass] = useState<string>('');

  return (
    <SubPages title='Ganti Password'>
      <View style={{ borderRadius: 12, backgroundColor: colours.backgroundSecondary, padding: 12, marginTop: 20 }}>
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
    </SubPages>
  );
};

export default GantiPassword;
