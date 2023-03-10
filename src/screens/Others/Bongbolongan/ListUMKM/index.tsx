import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { StyleSheet, Text, View } from 'react-native';

const DATA = {
  name: 'Abon Mitcha',
  product: 'Abon Sapi, Tongkol, dan Ayam',
  sales: '351 Juta',
  alamat: 'Situ Aksan, Gg Pagarsih Barat 1',
};
// ]

const ListUMKM = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>🏬 Jumlah UMKM</Text>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>7</Text>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={[styles.flexTable, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]}>
          <Text style={[styles.col1, styles.tableHeader]}>No</Text>
          <Text style={[styles.col2, styles.tableHeader]}>Nama UMKM</Text>
          <Text style={[styles.col3, styles.tableHeader]}>Produk Utama</Text>
          <Text style={[styles.col4, styles.tableHeader]}>Penjualan Rata-Rata</Text>
          <Text style={[styles.col5, styles.tableHeader]}>Alamat</Text>
        </View>
        {Array(60)
          .fill(0)
          .map((_, idx) => {
            return (
              <View
                key={idx.toString()}
                style={[
                  styles.flexTable,
                  { backgroundColor: idx % 2 === 0 ? colours.backgroundClickable : colours.backgroundSecondary },
                ]}>
                <Text style={[styles.col1, styles.tableItem]}>{idx + 1}</Text>
                <Text style={[styles.col2, styles.tableItem]}>{DATA.name}</Text>
                <Text style={[styles.col3, styles.tableItem]}>{DATA.product}</Text>
                <Text style={[styles.col4, styles.tableItem]}>Rp{DATA.sales}</Text>
                <Text style={[styles.col5, styles.tableItem]}>{DATA.alamat}</Text>
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
  numContainer: {
    marginLeft: 12,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: colours.yellowNormal,
  },
  numText: {
    fontSize: 14,
    lineHeight: 14,
    color: colours.backgroundPrimary,
    fontFamily: fontFamilyLex.regular,
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
    color: colours.backgroundPrimary,
    fontFamily: fontFamilyDM.medium,
  },
  tableItem: {
    paddingVertical: 8,
    textAlign: 'center',
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
  },
  col1: {
    width: '8%',
    textAlignVertical: 'center',
  },
  col2: {
    width: '21%',
    textAlignVertical: 'center',
  },
  col3: {
    width: '20.5%',
    textAlignVertical: 'center',
  },
  col4: {
    width: '20.5%',
    textAlignVertical: 'center',
  },
  col5: {
    width: '25%',
    textAlignVertical: 'center',
  },
});

export default ListUMKM;
