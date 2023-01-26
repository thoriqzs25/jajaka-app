import { RouteProp } from '@react-navigation/native';
import CustomIcon from '@src/components/CustomIcons';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DATA = ['Modal Awal', 'Keuntungan', 'Biaya O&M'];

const PenelusuranUMKM = ({ route }: { route: RouteProp<any> }) => {
  useEffect(() => {
    console.log(route.params?.id, 'line 8');
  }, []);
  return (
    <SubPages title='Penelusuran UMKM'>
      <>
        <View style={[styles.container]}>
          <View style={styles.firstContainer}>
            <View style={styles.header}>
              <CustomIcon name='notification' size={16} style={{ marginRight: 4 }} color={colours.yellowNormal} />
              <Text style={styles.headerText}>Jasa</Text>
            </View>
            <Text style={styles.title}>Laundry</Text>
            {DATA.map((_, idx) => {
              return (
                <View style={styles.col} key={idx.toString()}>
                  <Text style={[styles.row1, styles.defaultText]}>{_}</Text>
                  <Text style={[styles.row2, styles.defaultText]}>:</Text>
                  <Text style={[styles.row3, styles.defaultText]}>Rp6.000.000 - Rp10.000.000</Text>
                </View>
              );
            })}
          </View>
        </View>
      </>
    </SubPages>
  );
};

const styles = StyleSheet.create({
  container: {},
  firstContainer: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: colours.backgroundSecondary,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fontFamily.regular,
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 8,
    color: colours.white,
    fontFamily: fontFamily.medium,
  },
  col: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
  },
  row1: {
    width: '34%',
    // backgroundColor: colours.redNormal,
  },
  row2: {
    width: '2%',
    // backgroundColor: colours.blueNormal,
  },
  row3: {
    width: '64%',
    // backgroundColor: colours.yellowNormal,
  },
  defaultText: {
    fontSize: 16,
    lineHeight: 18,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
});

export default PenelusuranUMKM;
