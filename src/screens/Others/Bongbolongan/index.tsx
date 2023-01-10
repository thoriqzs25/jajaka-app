import useBoolean from '@src/hooks/useBoolean';
import SubPages from '@src/layouts/SubPages';
import BongbolonganDetails from '@src/screens/Main/Home/FeatureHighlights/BongbolonganDetails';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import colours from '@src/utils/colours';
import { useCallback, useRef } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Bongbolongan = () => {
  // const { value: visibleModal, setValue: setVisibleModal } = useBoolean(false);
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    console.log('line 15', isActive);
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-230);
    }
  }, []);

  return (
    <SubPages title={'Bongbolongan'}>
      <>
        <Pressable
          style={styles.button}
          onPress={() => {
            // setVisibleModal.toggle();
            onPress();
          }}>
          <Text>Modal</Text>
        </Pressable>
        <BongbolonganDetails
          ref={ref}

          // visible={visibleModal}
          // onClose={() => {
          //   setVisibleModal.false();
          // }}
        />
      </>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.blueNormal,
  },
});

export default Bongbolongan;
