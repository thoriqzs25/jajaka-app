import colours from '@src/utils/colours';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { StyleProp, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

const BottomModal = ({
  children,
  visible,
  onClose,
  backdropPress = true,
  icon,
  style,
}: {
  children: JSX.Element;
  visible: boolean;
  onClose: () => void;
  backdropPress?: boolean;
  icon?: string;
  style?: StyleProp<any>;
}) => {
  return (
    <Modal
      useNativeDriver={true}
      isVisible={visible}
      onBackdropPress={backdropPress ? onClose : () => null}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      backdropTransitionOutTiming={0}
      deviceWidth={SCREEN_WIDTH}
      deviceHeight={SCREEN_HEIGHT}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      propagateSwipe={true}
      style={[style, styles.modalContainer]}>
      <View style={styles.modalItem}>
        <View style={styles.spanBar} />
        <View style={styles.childContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: { margin: 0, justifyContent: 'flex-end' },
  spanBar: {
    alignSelf: 'center',
    borderRadius: 12,
    height: 6,
    width: 100,
    backgroundColor: colours.backgroundClickable,
  },
  modalItem: {
    paddingTop: 8,
    backgroundColor: colours.backgroundPrimary,
    paddingBottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: SCREEN_HEIGHT - 110,
  },
  childContainer: {},
});

export default BottomModal;
