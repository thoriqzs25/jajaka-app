import CustomCarousels from '@src/components/CustomCarousels';
import ImageView from '@src/components/ImageView';
import { globalStyle } from '@src/utils/globalStyles';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'}>
      <View style={styles.pageContainer}>
        <View style={[styles.header, globalStyle.padding]}>
          <ImageView name={'logo'} style={styles.logo} />
        </View>
        <CustomCarousels />
        <LoginForm />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {},
  header: {
    marginBottom: 24,
  },
  logo: {
    width: 44,
    height: 44,
  },
});
export default Login;
