import CustomMaps, { defaultDelta } from '@components/CustomMaps';
import SubPages from '@src/layouts/SubPages';
import BongbolonganDetails from '@screens/Main/Home/FeatureHighlights/BongbolonganDetails';
import { BottomSheetRefProps } from '@cTypes/refs/bottomSheet';
import colours from '@utils/colours';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '@components/Field/CustomButton';
import { globalStyle } from '@utils/globalStyles';
import KategoriData from './KategoriData';
import { fontFamily } from '@utils/fonts';
import { SCREEN_HEIGHT } from '@utils/deviceDimensions';
import ListUMKM from './ListUMKM';
import { ScrollView } from 'react-native-gesture-handler';
import { navigate } from '@src/navigation';

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
      Kategori: 'Donasi',
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

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 36;

const Bongbolongan = () => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const [selected, setSelected] = useState<any>();
  const [tabs, setTabs] = useState<'Maps' | 'Database'>('Maps');
  const [isHalf, setHalfScreen] = useState<boolean>(false);

  const onPress = useCallback(() => {
    if (!bottomSheetRef?.current?.isActive()) {
      bottomSheetRef?.current?.scrollTo(MAX_TRANSLATE_Y / 1.8);
      halfScreen(true);
    }
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
              selectedItem={selected}
            />
          </View>
        );
      case 'Database':
        return (
          <ScrollView style={[styles.databaseContainer, globalStyle.paddingHorizontal]} nestedScrollEnabled={true}>
            <KategoriData />
            <ListUMKM />
          </ScrollView>
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
            onPress={() => {
              setTabs('Database');
              halfScreen(false);
            }}
            style={[styles.tabsButton, tabs === 'Database' && activeStyle.container]}
            titleStyle={[styles.tabsText, tabs === 'Database' && activeStyle.text]}
          />
        </View>
        {tabsNav()}
        {tabs === 'Maps' && <BongbolonganDetails ref={bottomSheetRef} data={selected} halfScreen={halfScreen} />}
        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 20,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
          }}>
          <CustomButton
            glow
            onPress={() => {
              navigate('RekomendasiUMKM');
            }}
            title={'Tentukan idemu'}
            titleStyle={{ fontFamily: fontFamily.regular, fontSize: 14, lineHeight: 16, color: colours.white }}
            style={{ width: 200, paddingVertical: 10 }}
            iconName={'light-bulb'}
            iconNameRight={'cheveron-right'}
          />
        </View>
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
    lineHeight: 14,
    color: colours.white,
  },
  mapsContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 72,
  },
  maps: {
    overflow: 'hidden',
    borderRadius: 24,
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
