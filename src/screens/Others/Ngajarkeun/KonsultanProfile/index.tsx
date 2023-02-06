import { RouteProp } from '@react-navigation/native';
import CustomIcon from '@src/components/CustomIcons';
import CustomButton from '@src/components/Field/CustomButton';
import ImageView from '@src/components/ImageView';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const DATA = [
  { name: 'CEO Bank Goja', duration: '2022 - 2023' },
  { name: 'COO Gojekin', duration: '2020 - 2021' },
  { name: 'Manager of IT Tokopaedi', duration: '2019 - 2020' },
  { name: 'Manager Tokopaedi', duration: '2017 - 2220' },
  { name: 'Astra Bhineka', duration: '2010 - 2120' },
];

export const Biodata = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>📝 Biodata</Text>
      <Text
        style={{
          fontFamily: fontFamilyDM.regular,
          fontSize: 14,
          lineHeight: 16,
          color: colours.white,
          marginTop: 12,
        }}>
        Saya adalah seorang konsultan blabla ini isinya quotes gitu
      </Text>
    </View>
  );
};

export const Pengalaman = () => {
  const [shownExp, setShownExp] = useState<any[]>(DATA.slice(0, 3));

  const toggleSeeMore = () => {
    if (shownExp.length < DATA.length) {
      setShownExp(DATA);
    } else {
      setShownExp(DATA.slice(0, 3));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>✨ Pengalaman</Text>
      {shownExp &&
        shownExp.map((_, idx) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} key={idx.toString()}>
              <Text
                style={{
                  fontFamily: fontFamilyDM.regular,
                  fontSize: 14,
                  lineHeight: 16,
                  color: colours.white,
                  marginTop: 12,
                }}>
                {_.name}
              </Text>
              <Text
                style={{
                  fontFamily: fontFamilyDM.regular,
                  fontSize: 14,
                  lineHeight: 16,
                  color: colours.white,
                  marginTop: 12,
                }}>
                {_.duration}
              </Text>
            </View>
          );
        })}
      <CustomButton
        title={shownExp.length < DATA.length ? `+ ${DATA.length - 3} lainnya` : 'Tutup'}
        style={styles.button}
        titleStyle={{ color: colours.blueYoung }}
        onPress={toggleSeeMore}
      />
    </View>
  );
};

const KonsultanProfile = ({ route }: { route: RouteProp<any> }) => {
  const KonsultasiSekarang = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.containerTitle}>🤔 Konsultasi Sekarang!</Text>
        <Text
          style={{
            fontFamily: fontFamilyDM.regular,
            fontSize: 14,
            lineHeight: 16,
            color: colours.white,
            marginTop: 12,
          }}>
          Tertarik untuk mengembangkan usaha dengan bimbingan ahli? Konsultasikan usahamu dengan Bram Tanuwijaya!{' '}
        </Text>
        <CustomButton
          style={{ paddingHorizontal: 16, paddingVertical: 8, alignSelf: 'flex-end', marginTop: 8 }}
          // titleStyle={}
          iconName={'fab'}
          title={'Chat'}
          iconSize={20}

          // onPress={handleFilter}
        />
      </View>
    );
  };

  return (
    <SubPages title='Ngajarkeun' subTitle='Pembimbingan usaha bagi perintis dan UMKM' subTitleIcon='person'>
      <ScrollView>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', marginTop: 90 }]}>
          <View style={{ position: 'absolute', top: -70 }}>
            {route.params?.item.image ? (
              <ImageView name={route.params?.item.image} style={{ width: 140, height: 140 }} />
            ) : (
              <CustomIcon name={'user-solid-circle'} size={140} style={{ width: 144 }} />
            )}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 4, paddingTop: 70 }}>
            {route.params?.item.type &&
              route.params?.item.type.map((type: string) => {
                return (
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      marginRight: 4,
                      borderRadius: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colours.yellowNormal,
                    }}
                    key={type}>
                    <CustomIcon name={type === 'Jasa' ? 'service' : 'spoon-knife'} color={colours.black} size={10} />
                  </View>
                );
              })}
          </View>
          <Text style={styles.name}>{route.params?.item.name}</Text>
          <Text style={styles.title}>{route.params?.item.title}</Text>
        </View>
        <Biodata />
        <Pengalaman />
        <KonsultasiSekarang />
      </ScrollView>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: colours.backgroundSecondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  name: {
    fontFamily: fontFamilyLex.regular,
    fontSize: 18,
    color: colours.white,
    lineHeight: 22,
  },
  title: {
    fontFamily: fontFamilyDM.regular,
    fontSize: 12,
    color: colours.white,
    lineHeight: 16,
  },
  containerTitle: {
    fontFamily: fontFamilyLex.regular,
    fontSize: 18,
    lineHeight: 22,
    color: colours.white,
  },
  button: {
    backgroundColor: colours.backgroundClickable,
    borderRadius: 12,
    paddingVertical: 8,
    marginTop: 12,
  },
});

export default KonsultanProfile;
