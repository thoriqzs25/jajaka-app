import CustomButton from '@src/components/Field/CustomButton';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { globalStyle } from '@src/utils/globalStyles';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RekomendasiLokasi from './RekomendasiLokasi';
import RekomendasiProduk from './RekomendasiProduk';
import TentukanIdemu from './TentukanIdemu';
import TentukanLokasi from './TentukanLokasi';

const RekomendasiUMKM = () => {
  const [tabs, setTabs] = useState<'Cari Ide Usaha' | 'Cari Lokasi Usaha'>('Cari Ide Usaha');

  const tabsNav = () => {
    switch (tabs) {
      case 'Cari Ide Usaha':
        return (
          <ScrollView style={[globalStyle.paddingHorizontal, { marginBottom: 16 }]}>
            <TentukanIdemu />
            <RekomendasiProduk
              DATA={{
                name: 'Abon Mitcha',
                total: '2',
              }}
              title={'Jasa'}
            />
            <RekomendasiProduk
              DATA={{
                name: 'Abon Mitcha',
                total: '2',
              }}
              title={'Kuliner'}
            />
          </ScrollView>
        );
      case 'Cari Lokasi Usaha':
        return (
          <ScrollView style={[globalStyle.paddingHorizontal, { marginBottom: 16 }]}>
            <TentukanLokasi />
            <RekomendasiLokasi
              DATA={{
                name: 'Coblong',
                total: '3',
              }}
            />
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
        {tabsNav()}
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
