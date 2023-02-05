import CustomButton from '@src/components/Field/CustomButton';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import colours from '@src/utils/colours';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const MiddleModal = ({
  visible,
  onClose,
  style,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  style?: StyleProp<any>;
  children?: ReactNode;
}) => {
  return (
    <Modal
      style={{ alignItems: 'center', justifyContent: 'center' }}
      isVisible={visible}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      backdropTransitionOutTiming={0}
      deviceWidth={SCREEN_WIDTH}
      deviceHeight={SCREEN_HEIGHT}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}>
      <View style={[styles.modal, style]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    // width: 260,
    // height: 200,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.backgroundPrimary,
  },
});

export default MiddleModal;
