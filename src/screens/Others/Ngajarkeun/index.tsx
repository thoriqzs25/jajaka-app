import CustomIcon from '@src/components/CustomIcons';
import CustomButton from '@src/components/Field/CustomButton';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import KonsultanCard from './KonsultanCard';

const DATA = [
  {
    name: 'Bram Tanuwijaya',
    title: 'Konsultan Keuangan',
    type: ['Jasa', 'Kuliner'],
    image: 'dummy-user',
  },
  {
    name: 'Yeen Suketi',
    title: 'Konsultan Bisnis',
    type: ['Jasa'],
    image: 'dummy-user-2',
  },
  {
    name: 'Iqbal Permana',
    title: 'Konsultan Pemasaran',
    type: ['Kuliner'],
  },
];

const Ngajarkeun = () => {
  const [tabs, setTabs] = useState<'Semua' | 'Jasa' | 'Kuliner'>('Semua');
  const [filtered, setFiltered] = useState<any[]>(DATA);

  useEffect(() => {
    switch (tabs) {
      case 'Semua':
        setFiltered(DATA);
        break;
      case 'Jasa':
        setFiltered(
          DATA.filter((item: any) => {
            if (item.type.includes('Jasa')) return item;
          })
        );
        break;
      case 'Kuliner':
        setFiltered(
          DATA.filter((item: any) => {
            if (item.type.includes('Kuliner')) return item;
          })
        );
        break;
      default:
        break;
    }
  }, [tabs]);

  const SearchBar = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <CustomIcon name={'search1'} size={12} color={colours.gray300} />
          <TextInput style={styles.text} placeholder={'Masukkan kata kunci berita'} />
        </View>
      </View>
    );
  };

  const Tabs = () => {
    return (
      <View style={styles.tabsContainer}>
        <CustomButton
          title={'Semua'}
          onPress={() => setTabs('Semua')}
          style={[styles.tabsButton, tabs === 'Semua' && activeStyle.container]}
          titleStyle={[styles.tabsText, tabs === 'Semua' && activeStyle.text]}
        />
        <CustomButton
          title={'Jasa'}
          onPress={() => {
            setTabs('Jasa');
          }}
          style={[styles.tabsButton, tabs === 'Jasa' && activeStyle.container]}
          titleStyle={[styles.tabsText, tabs === 'Jasa' && activeStyle.text]}
        />
        <CustomButton
          title={'Kuliner'}
          onPress={() => {
            setTabs('Kuliner');
          }}
          style={[styles.tabsButton, tabs === 'Kuliner' && activeStyle.container]}
          titleStyle={[styles.tabsText, tabs === 'Kuliner' && activeStyle.text]}
        />
      </View>
    );
  };

  const _renderItem = ({ item }: { item: any }) => {
    return <KonsultanCard item={item} key={item.name} />;
  };

  return (
    <SubPages title='Ngajarkeun' subTitle='Pembimbingan usaha bagi perintis dan UMKM' subTitleIcon='person'>
      <View>
        <SearchBar />
        <View style={styles.header}>
          <Text style={styles.title}>Limit konsultasi gratis:</Text>
          <View style={styles.numContainer}>
            <Text style={styles.numText}>3</Text>
          </View>
          <View style={{ width: '100%', flex: 1 }}>
            <CustomButton
              style={styles.button}
              titleStyle={styles.buttonText}
              iconName={'star-full'}
              title={'Beralih ke premium!'}
            />
          </View>
        </View>
        <Tabs />
        <FlatList data={filtered} renderItem={_renderItem} />
      </View>
    </SubPages>
  );
};

export default Ngajarkeun;

const styles = StyleSheet.create({
  header: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
  },
  numContainer: {
    marginLeft: 6,
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: colours.yellowNormal,
  },
  numText: {
    fontSize: 14,
    lineHeight: 16,
    color: colours.backgroundPrimary,
    fontFamily: fontFamilyLex.regular,
  },
  headerContainer: {
    backgroundColor: colours.backgroundPrimary,
  },
  searchContainer: {
    height: 40,
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colours.backgroundClickable,
  },
  contentContainer: {},
  text: {
    flex: 1,
    width: '100%',
    fontSize: 14,
    marginLeft: 4,
    lineHeight: 16,
    color: colours.gray300,
    fontFamily: fontFamilyDM.regular,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 16,
  },
  tabsContainer: {
    marginTop: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabsButton: {
    width: 110,
    borderRadius: 16,
    paddingVertical: 8,
    // marginHorizontal: 6,
    backgroundColor: colours.backgroundClickable,
  },
  tabsText: {
    fontSize: 12,
    lineHeight: 14,
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
