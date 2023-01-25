import useBoolean from '@src/hooks/useBoolean';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const CustomSnackBar = ({ visible, setVisible, desc }: { visible: boolean; setVisible: UseBoolean; desc: string }) => {
  const onDismissSnackBar = () => setVisible.false();

  return (
    <View style={[styles.container, { backgroundColor: colours.blueNormal }]}>
      <View style={[styles.subContainer]}>
        <Snackbar style={styles.snackbar} visible={visible} onDismiss={onDismissSnackBar} duration={2600}>
          <Text style={{ fontFamily: fontFamily.regular, fontSize: 14, color: colours.redNormal }}>{desc}</Text>
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
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colours.redNormal,
    backgroundColor: colours.redYoung,
  },
});

export default CustomSnackBar;
