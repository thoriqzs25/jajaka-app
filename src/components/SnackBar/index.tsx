import useBoolean from '@src/hooks/useBoolean';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import CustomIcon from '../CustomIcons';

const CustomSnackBar = ({ visible, onClose, desc }: { visible: boolean; onClose: () => void; desc: string }) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        onClose?.();
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <View style={[styles.container, { backgroundColor: colours.blueNormal }]}>
      <View style={[styles.subContainer]}>
        <Snackbar style={styles.snackbar} visible={visible} onDismiss={onClose} duration={2600}>
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
    backgroundColor: colours.redNormal,
  },
});

export default CustomSnackBar;
