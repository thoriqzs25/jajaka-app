import CustomMaps from '@src/components/CustomMaps';
import useBoolean from '@src/hooks/useBoolean';
import SubPages from '@src/layouts/SubPages';
import BongbolonganDetails from '@src/screens/Main/Home/FeatureHighlights/BongbolonganDetails';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import colours from '@src/utils/colours';
import { useCallback, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Bongbolongan = () => {
  // const { value: visibleModal, setValue: setVisibleModal } = useBoolean(false);
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-230);
    }
  }, []);

  return (
    <SubPages title={'Bongbolongan'} childPadding={false}>
      <>
        <Pressable
          style={styles.button}
          onPress={() => {
            // setVisibleModal.toggle();
            onPress();
          }}>
          <Text>Modal</Text>
        </Pressable>
        <View style={styles.mapsContainer}>
          <CustomMaps style={styles.maps} onOpenDetail={onPress} />
        </View>
        <BongbolonganDetails ref={ref} />
      </>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    marginTop: 12,
    marginBottom: 20,
    backgroundColor: colours.blueNormal,
  },
  mapsContainer: {
    flex: 1,
  },
  maps: {
    overflow: 'hidden',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});

export default Bongbolongan;
