import CustomMaps, { defaultDelta } from '@components/CustomMaps';
import SubPages from '@src/layouts/SubPages';
import BongbolonganDetails from '@src/screens/Main/Home/FeatureHighlights/BongbolonganDetails';
import { BottomSheetRefProps } from '@cTypes/refs/bottomSheet';
import colours from '@utils/colours';
import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CustomButton from '@src/components/Field/CustomButton';
import { globalStyle } from '@src/utils/globalStyles';
import KategoriData from './KategoriData';
import useBoolean from '@src/hooks/useBoolean';
import { EdgePadding } from 'react-native-maps';
import { CustomMapsRefProps } from '@src/types/refs/customMaps';
import { runOnJS, useSharedValue, useWorkletCallback } from 'react-native-reanimated';

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
      Kategori: 'Donasi',
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
  {
    id: 4,
    name: 'Test 4',
    coordinate: {
      latitude: -6.60455,
      longitude: 106.82203,
      ...defaultDelta,
    },
    details: {
      Kategori: 'Kulineran',
      Produk: 'Aneka nasi dan jajanan',
      Alamat: 'Jl. Kec. Bandung Wetan',
      'Jam Buka': 'Senin - Selasa, 09.00 - 12.00',
      'Tahun Berdiri': '2010',
    },
  },
  {
    id: 5,
    name: 'Test 5',
    coordinate: {
      latitude: -6.59355,
      longitude: 106.81003,
      ...defaultDelta,
    },
    details: {
      Kategori: 'Kulineran 5',
      Produk: 'Aneka nasi dan jajanan',
      Alamat: 'Jl. Kec. Bandung Wetan',
      'Jam Buka': 'Senin - Selasa, 09.00 - 12.00',
      'Tahun Berdiri': '2010',
    },
  },
];

const Bongbolongan = () => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const [selected, setSelected] = useState<any>();
  const [tabs, setTabs] = useState<'Maps' | 'Database'>('Maps');
  const [isHalf, setHalfScreen] = useState<boolean>(false);

  const onPress = useCallback(() => {
    if (!bottomSheetRef?.current?.isActive()) bottomSheetRef?.current?.scrollTo(-230);
  }, []);

  const halfScreen = (half: boolean) => {
    setHalfScreen(half);
  };

  const tabsNav = () => {
    switch (tabs) {
      case 'Maps':
        return (
          <View style={styles.mapsContainer}>
            <CustomMaps
              itemList={DATA}
              style={styles.maps}
              onOpenDetail={onPress}
              setSelected={setSelected}
              isHalf={isHalf}
            />
          </View>
        );
      case 'Database':
        return (
          <View style={[styles.databaseContainer, globalStyle.paddingHorizontal]}>
            <KategoriData />
          </View>
        );
      default:
        return (
          <View>
            <Text>Loading</Text>
          </View>
        );
    }
  };

  return (
    <SubPages
      title={'Bongbolongan'}
      childPadding={false}
      subTitle={'Pencarian data UMKM di sekitarmu'}
      subTitleIcon={'search1'}>
      <>
        <View style={styles.tabsContainer}>
          <CustomButton
            title={'Maps'}
            onPress={() => setTabs('Maps')}
            style={[styles.tabsButton, tabs === 'Maps' && activeStyle.container]}
            titleStyle={[styles.tabsText, tabs === 'Maps' && activeStyle.text]}
          />
          <CustomButton
            title={'Database'}
            onPress={() => setTabs('Database')}
            style={[styles.tabsButton, tabs === 'Database' && activeStyle.container]}
            titleStyle={[styles.tabsText, tabs === 'Database' && activeStyle.text]}
          />
        </View>
        {tabsNav()}
        <BongbolonganDetails ref={bottomSheetRef} item={selected} halfScreen={halfScreen} />
      </>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsButton: {
    width: 140,
    borderRadius: 16,
    paddingVertical: 8,
    marginHorizontal: 6,
    backgroundColor: colours.backgroundClickable,
  },
  tabsText: {
    fontSize: 12,
    lineHeight: 12,
    color: colours.white,
  },
  mapsContainer: {
    flex: 1,
  },
  maps: {
    overflow: 'hidden',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  databaseContainer: {},
});

const activeStyle = StyleSheet.create({
  container: {
    backgroundColor: colours.yellowNormal,
  },
  text: {
    color: colours.backgroundPrimary,
  },
});

export default Bongbolongan;
