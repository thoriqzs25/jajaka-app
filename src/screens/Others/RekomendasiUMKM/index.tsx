import CustomMaps, { defaultDelta } from '@src/components/CustomMaps';
import CustomButton from '@src/components/Field/CustomButton';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { globalStyle } from '@src/utils/globalStyles';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RekomendasiLokasi from './RekomendasiLokasi';
import RekomendasiProduk from './RekomendasiProduk';
import TentukanIdemu from './TentukanIdemu';
import TentukanLokasi from './TentukanLokasi';

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
];

const DATA2 = [
  {
    name: 'Abon Mitcha',
    total: '2',
  },
  {
    name: 'Revenue',
    total: '3',
  },
  {
    name: 'Pillow',
    total: '1',
  },
  {
    name: 'Cucian',
    total: '4',
  },
];

const DATA3 = [
  {
    name: 'Laundry',
    total: '3',
  },
  {
    name: 'Cuci Mobil',
    total: '4',
  },
  {
    name: 'Salon',
    total: '8',
  },
  {
    name: 'Bengkel',
    total: '6',
  },
];

const RekomendasiUMKM = () => {
  const [tabs, setTabs] = useState<'Cari Ide Usaha' | 'Cari Lokasi Usaha'>('Cari Ide Usaha');

  const TabsNav = () => {
    return (
      <>
        {tabs === 'Cari Ide Usaha' ? (
          <ScrollView style={[globalStyle.paddingHorizontal, { marginBottom: 16 }]}>
            <TentukanIdemu />
            <RekomendasiProduk DATA={DATA2} title={'Jasa'} />
            <RekomendasiProduk DATA={DATA3} title={'Kuliner'} noHeader />
          </ScrollView>
        ) : tabs === 'Cari Lokasi Usaha' ? (
          <ScrollView style={[globalStyle.paddingHorizontal, { marginBottom: 16 }]}>
            <TentukanLokasi />
            <RekomendasiLokasi
              DATA={{
                name: 'Coblong',
                total: '3',
              }}
            />
            <View style={{ marginTop: 16, height: 200, width: '100%' }}>
              <CustomMaps style={styles.maps} itemList={DATA} />
            </View>
          </ScrollView>
        ) : (
          <View>
            <Text>Loading</Text>
          </View>
        )}
      </>
    );
  };

  return (
    <SubPages
      title={'Bongbolongan'}
      subTitle={'Rekomendasi ide untuk UMKM versimu'}
      subTitleIcon={'search1'}
      childPadding={false}>
      <>
        <View style={styles.tabsContainer}>
          <CustomButton
            title={'Cari Ide Usaha'}
            onPress={() => setTabs('Cari Ide Usaha')}
            style={[styles.tabsButton, tabs === 'Cari Ide Usaha' && activeStyle.container]}
            titleStyle={[styles.tabsText, tabs === 'Cari Ide Usaha' && activeStyle.text]}
          />
          <CustomButton
            title={'Cari Lokasi Usaha'}
            onPress={() => {
              setTabs('Cari Lokasi Usaha');
            }}
            style={[styles.tabsButton, tabs === 'Cari Lokasi Usaha' && activeStyle.container]}
            titleStyle={[styles.tabsText, tabs === 'Cari Lokasi Usaha' && activeStyle.text]}
          />
        </View>
        <TabsNav />
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
  maps: {
    borderRadius: 24,
    overflow: 'hidden',
  },
});

const activeStyle = StyleSheet.create({
  container: {
    backgroundColor: colours.yellowNormal,
  },
  text: {
    color: colours.backgroundPrimary,
  },
});

export default RekomendasiUMKM;
