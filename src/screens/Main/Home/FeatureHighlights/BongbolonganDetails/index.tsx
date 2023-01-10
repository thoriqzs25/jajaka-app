import CustomIcon from '@components/CustomIcons';
import BottomSheet from '@components/Modal/BottomSheet';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { globalStyle } from '@utils/globalStyles';
import React, { Ref } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DATA = {
  Kategori: 'Kuliner',
  Produk: 'Aneka nasi dan jajanan',
  Alamat: 'Jl. Tamansari Bawah, Tamansari, Kec. Bandung Wetan',
  'Jam Buka': 'Senin - Sabtu, 09.00 - 20.00',
  'Tahun Berdiri': '2020',
};

const BongbolonganDetails = React.forwardRef<BottomSheetRefProps>((_, ref) => {
  return (
    <BottomSheet ref={ref}>
      <View style={[globalStyle.paddingModal]}>
        <View style={styles.headerContainer}>
          <CustomIcon name={'spoon-knife'} size={20} style={styles.icon} />
          <Text style={styles.title}>Warung Nasi Bukan Warteg</Text>
        </View>
        <View>
          <Text>Foto-Foto</Text>
        </View>
        <View>
          {Object.keys(DATA).map((key) => (
            <View style={styles.textLine} key={key}>
              <View style={styles.keyLine}>
                <Text style={styles.textKey}>{key}</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.textValue}>{DATA[key]}</Text>
            </View>
          ))}
        </View>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.yellowNormal,
  },
  title: {
    fontSize: 18,
    marginLeft: 8,
    lineHeight: 20,
    color: colours.white,
    fontFamily: fontFamily.semiBold,
  },
  textLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyLine: {
    marginRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  textKey: {
    width: 120,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
  textValue: {
    flex: 1,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
});

export default BongbolonganDetails;
