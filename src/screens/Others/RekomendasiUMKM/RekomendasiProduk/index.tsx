import CustomIcon from '@src/components/CustomIcons';
import CustomButton from '@src/components/Field/CustomButton';
import { navigate } from '@src/navigation';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet, Text, View } from 'react-native';

const itemcount = 4;

const RekomendasiProduk = ({ DATA, title }: { DATA: any; title: string }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>💡 Rekomendasi Ide Produk UMKM </Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={[styles.flexTable, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]}>
          <View style={[styles.col1, { flexDirection: 'row', alignItems: 'center' }]}>
            <CustomIcon name='notification' size={16} style={{ marginRight: 4 }} color={colours.backgroundPrimary} />
            <Text style={[styles.tableHeader]}>{title}</Text>
          </View>
          <Text style={[styles.col2, styles.tableHeader]}>Jumlah Kebutuhan</Text>
          <View style={[styles.col3, styles.tableHeader]} />
        </View>
        {Array(itemcount)
          .fill(0)
          .map((_, idx) => {
            return (
              <View
                key={idx.toString()}
                style={[
                  styles.flexTable,
                  { backgroundColor: idx % 2 === 0 ? colours.backgroundClickable : colours.backgroundSecondary },
                  {
                    borderBottomRightRadius: idx === itemcount - 1 ? 8 : 0,
                    borderBottomLeftRadius: idx === itemcount - 1 ? 8 : 0,
                  },
                ]}>
                <Text style={[styles.col1, styles.tableItem]}>{DATA.name}</Text>
                <Text style={[styles.col2, styles.tableItem]}>{DATA.total}</Text>
                <View style={[styles.col3, styles.tableItem]}>
                  <CustomButton
                    title={'Telusuri'}
                    titleStyle={styles.buttonText}
                    style={styles.buttonContainer}
                    iconName={'light-bulb'}
                    onPress={() => navigate('PenelusuranUMKM', { id: idx })}
                  />
                </View>
              </View>
            );
          })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  numText: {
    color: colours.backgroundPrimary,
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 16,
  },
  tableContainer: {},
  flexTable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colours.yellowYoung,
  },
  tableHeader: {
    paddingVertical: 6,
    textAlign: 'center',
    fontFamily: fontFamily.semiBold,
    color: colours.backgroundPrimary,
  },
  tableItem: {
    paddingVertical: 8,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
  col1: {
    width: '25%',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  col2: {
    width: '35%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  col3: {
    width: '28%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  buttonContainer: {
    paddingVertical: 8,
  },
});

export default RekomendasiProduk;
