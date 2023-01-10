import CustomMaps, { defaultDelta } from '@components/CustomMaps';
import SubPages from '@src/layouts/SubPages';
import BongbolonganDetails from '@src/screens/Main/Home/FeatureHighlights/BongbolonganDetails';
import { BottomSheetRefProps } from '@cTypes/refs/bottomSheet';
import colours from '@utils/colours';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Test 1',
    coordinate: {
      latitude: -6.60255,
      longitude: 106.81303,
      ...defaultDelta,
    },
    details: {
      Kategori: 'Kuliner',
      Produk: 'Aneka nasi dan jajanan',
      Alamat: 'Jl. Tamansari Bawah, Tamansari, Kec. Bandung Wetan',
      'Jam Buka': 'Senin - Sabtu, 09.00 - 20.00',
      'Tahun Berdiri': '2020',
    },
  },
  {
    id: 2,
    name: 'Test 2',
    coordinate: {
      latitude: -6.60754,
      longitude: 106.81503,
      ...defaultDelta,
    },
    details: {
      Kategori: 'Kuliner',
      Produk: 'Aneka nasi dan jajanan',
      Alamat: 'Jl. Tamansari Kec. Bandung Wetan',
      'Jam Buka': 'Rabu - Sabtu, 19.30 - 20.00',
      'Tahun Berdiri': '2002',
    },
  },
  {
    id: 3,
    name: 'Test 3',
    coordinate: {
      latitude: -6.60255,
      longitude: 106.81203,
      ...defaultDelta,
    },
    details: {
      Kategori: 'Kuliner',
      Produk: 'Aneka nasi dan jajanan',
      Alamat: 'Jl. Kec. Bandung Wetan',
      'Jam Buka': 'Senin - Selasa, 09.00 - 12.00',
      'Tahun Berdiri': '2010',
    },
  },
];

const Bongbolongan = () => {
  // const { value: visibleModal, setValue: setVisibleModal } = useBoolean(false);
  const ref = useRef<BottomSheetRefProps>(null);
  const [selected, setSelected] = useState<any>();

  const onPress = useCallback(() => {
    // const isActive = ref?.current?.isActive();
    // if (isActive) {
    // ref?.current?.scrollTo(0);
    // } else {
    ref?.current?.scrollTo(-230);
    // }
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
          <CustomMaps style={styles.maps} itemList={DATA} onOpenDetail={onPress} setSelected={setSelected} />
        </View>
        <BongbolonganDetails ref={ref} item={selected} />
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
