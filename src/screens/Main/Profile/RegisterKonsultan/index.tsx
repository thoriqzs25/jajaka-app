import CustomCarousels from '@src/components/CustomCarousels';
import CustomButton from '@src/components/Field/CustomButton';
import useBoolean from '@src/hooks/useBoolean';
import SubPages from '@src/layouts/SubPages';
import { globalStyle } from '@src/utils/globalStyles';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import RegisterForm from './RegisterForm';

const RegisterKonsultan = () => {
  const { value: termAggreement, setValue: setTerm } = useBoolean(false);
  const { value: jasaCheck, setValue: setJasa } = useBoolean(false);
  const { value: kulinerCheck, setValue: setKuliner } = useBoolean(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');

  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorName, setErrorName] = useState<string>('');
  const [errorAggree, setErrorAggree] = useState<string>('');

  return (
    <SubPages title='' childPadding={false}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'} keyboardVerticalOffset={20}>
        {/* <ScrollView> */}
        <CustomCarousels />
        <RegisterForm
          name={name}
          email={email}
          phoneNum={phoneNum}
          setName={setName}
          setEmail={setEmail}
          setPhoneNum={setPhoneNum}
          setTerm={setTerm}
          setJasa={setJasa}
          setKuliner={setKuliner}
          errorEmail={errorEmail}
          errorName={errorName}
          errorAggree={errorAggree}
        />
        <View style={[globalStyle.paddingHorizontal]}>
          <CustomButton title={'Register'} />
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </SubPages>
  );
};

export default RegisterKonsultan;
