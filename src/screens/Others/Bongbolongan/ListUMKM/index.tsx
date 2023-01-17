import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
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
          <Text style={[styles.col4, styles.tableHeader]}>Penjualan Rata-Rata (Rp)</Text>
          <Text style={[styles.col5, styles.tableHeader]}>Alamat</Text>
        </View>
        {Array(60)
          .fill(0)
          .map((_, idx) => {
            return (
              <View
                style={[
                  styles.flexTable,
                  { backgroundColor: idx % 2 === 0 ? colours.backgroundClickable : colours.backgroundSecondary },
                ]}>
                <Text style={[styles.col1, styles.tableItem]}>{idx}</Text>
                <Text style={[styles.col2, styles.tableItem]}>{DATA.name}</Text>
                <Text style={[styles.col3, styles.tableItem]}>{DATA.product}</Text>
                <Text style={[styles.col4, styles.tableItem]}>{DATA.sales}</Text>
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
    backgroundColor: colours.yellowNormal,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 12,
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
    justifyContent: 'space-around',
    backgroundColor: colours.yellowYoung,
  },
  tableHeader: {
    paddingVertical: 6,
    textAlign: 'center',
    fontFamily: fontFamily.semiBold,
    color: colours.backgroundPrimary,
    // backgroundColor: colours.yellowYoung,
  },
  tableItem: {
    paddingVertical: 8,
    textAlign: 'center',
    color: colours.white,
    fontFamily: fontFamily.regular,
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
