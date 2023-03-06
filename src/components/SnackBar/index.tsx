import useBoolean from '@src/hooks/useBoolean';
import { resetErrorMessage } from '@src/redux/actions/error';
import { store } from '@src/redux/store';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import CustomIcon from '../CustomIcons';

const CustomSnackBar = ({ visible, desc }: { visible: boolean; desc: string }) => {
  const onClose = () => {
    store.dispatch(resetErrorMessage());
  };

  const bgColor =
    desc?.toLowerCase().includes('berhasil') || desc?.toLowerCase().includes('sukses')
      ? colours.greenNormal
      : colours.redNormal;

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        store.dispatch(resetErrorMessage());
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <View style={[styles.container, { backgroundColor: colours.blueNormal }]}>
      <View style={[styles.subContainer]}>
        <Snackbar
          style={[styles.snackbar, { backgroundColor: bgColor }]}
          visible={visible}
          onDismiss={onClose}
          duration={2600}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {/* <CustomIcon name='checkmark-outline' style={{ marginRight: 8 }} /> */}
            <CustomIcon name='notification' style={{ marginRight: 8 }} />
            <Text style={{ fontFamily: fontFamily.regular, fontSize: 14, lineHeight: 18, color: colours.white }}>
              {desc}
            </Text>
          </View>
        </Snackbar>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 100,
    flex: 1,
    zIndex: 100,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    width: SCREEN_WIDTH - 32,
    justifyContent: 'space-between',
  },
  snackbar: {
    borderRadius: 12,
  },
});

export default CustomSnackBar;
