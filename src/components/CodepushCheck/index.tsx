import useBoolean from '@src/hooks/useBoolean';
import { useEffect } from 'react';
import codePush from 'react-native-code-push';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const CodepushCheck = () => {
  const { value: loading, setValue: setLoading } = useBoolean(false);

  const syncCodepush = async () => {
    setLoading.true();
    try {
      const hasUpdate = await codePush.checkForUpdate();
      if (hasUpdate) {
        codePush.sync({ installMode: codePush.InstallMode.ON_NEXT_RESTART });
      }
    } catch (e) {
      __DEV__ && console.log('Error line 16', e);
      setLoading.false();
    }
  };

  useEffect(() => {
    syncCodepush();
  }, []);

  return <Spinner visible={loading} />;
};

export default CodepushCheck;
