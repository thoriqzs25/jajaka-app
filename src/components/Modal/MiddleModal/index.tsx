import { UseBoolean } from '@src/types/hooks/UseBoolean';
import colours from '@src/utils/colours';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const MiddleModal = ({
  visible,
  setVisible,
  style,
  children,
}: {
  visible: boolean;
  setVisible: UseBoolean;
  style?: StyleProp<any>;
  children: JSX.Element;
}) => {
  return (
    // <View style={{ flex: 1 }}>
    <Modal
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      isVisible={visible}
      onBackdropPress={() => {
        setVisible.false();
        console.log('set false line 23');
      }}
      backdropOpacity={0.5}>
      <View style={[styles.modal, style]}>{children}</View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    // width: 260,
    // height: 200,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.backgroundPrimary,
  },
});

export default MiddleModal;
