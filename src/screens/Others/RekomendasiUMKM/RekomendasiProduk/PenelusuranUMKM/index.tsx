import { RouteProp } from '@react-navigation/native';
import CustomIcon from '@src/components/CustomIcons';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DATA = ['Modal Awal', 'Keuntungan', 'Biaya O&M'];
const DATA2 = ['Jenis Kelamin', 'Usai', 'Profesi'];

const PenelusuranUMKM = ({ route }: { route: RouteProp<any> }) => {
  const FirstContainer = ({ title }: { title: string }) => {
    return (
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <CustomIcon name='notification' size={16} style={{ marginRight: 4 }} color={colours.yellowNormal} />
          <Text style={styles.headerText}>{route.params?.type}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        {DATA.map((_, idx) => {
          return (
            <View style={styles.col} key={idx.toString()}>
              <Text style={[styles.row1, styles.defaultText]}>{_}</Text>
              <Text style={[styles.row2, styles.defaultText]}>:</Text>
              {idx === 0 && <Text style={[styles.row3, styles.defaultText]}>Rp6.000.000 - Rp10.000.000</Text>}
              {idx === 1 && <Text style={[styles.row3, styles.defaultText]}>Rp2.600.000 - Rp3.400.000</Text>}
              {idx === 2 && <Text style={[styles.row3, styles.defaultText]}>Rp2.000.000 - Rp2.600.000</Text>}
            </View>
          );
        })}
      </View>
    );
  };

  const SecondContainer = ({ title }: { title: string }) => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.title2}>{title}</Text>
        {DATA2.map((_, idx) => {
          return (
            <View style={styles.col} key={idx.toString()}>
              <Text style={[styles.row1, styles.defaultText]}>{_}</Text>
              <Text style={[styles.row2, styles.defaultText]}>:</Text>
              {idx === 0 && <Text style={[styles.row3, styles.defaultText]}>Laki-laki / Perempuan</Text>}
              {idx === 1 && <Text style={[styles.row3, styles.defaultText]}>18 - 40 tahun</Text>}
              {idx === 2 && <Text style={[styles.row3, styles.defaultText]}>Mahasiswa, Ibu Rumah Tangga</Text>}
            </View>
          );
        })}
      </View>
    );
  };
  const ThirdContainer = ({ title }: { title: string }) => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.title2}>{title}</Text>
        <View style={styles.col}>
          <Text style={[styles.defaultText, { textAlign: 'justify' }]}>
            Mesin cuci - Timbangan - Detergen dan Pewangi - Pengering - Hanger dan Jemuran - Alat Tagging - Setrika -
            Keranjang - Plastik Kemasan
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SubPages title='Penelusuran UMKM'>
      <>
        <View style={[styles.container]}>
          <FirstContainer title={route.params?.name} />
          <SecondContainer title='Target Pasar' />
          <ThirdContainer title='Kebutuhan' />
        </View>
      </>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  container: {},
  subContainer: {
    marginBottom: 8,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: colours.backgroundSecondary,
  },
  header: {
    marginBottom: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fontFamily.regular,
  },
  title: {
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 8,
    color: colours.white,
    fontFamily: fontFamily.medium,
  },
  title2: {
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 8,
    color: colours.yellowNormal,
    fontFamily: fontFamily.regular,
  },
  col: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
  },
  row1: {
    width: '34%',
  },
  row2: {
    width: '2%',
  },
  row3: {
    width: '64%',
  },
  defaultText: {
    fontSize: 14,
    lineHeight: 18,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
});

export default PenelusuranUMKM;
