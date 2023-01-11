import CustomIcon from '@components/CustomIcons';
import BottomSheet from '@components/Modal/BottomSheet';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import { CustomMapsRefProps } from '@src/types/refs/customMaps';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { globalStyle } from '@utils/globalStyles';
import React, { Ref } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BongbolonganDetails = React.forwardRef<BottomSheetRefProps, { item: any }>(({ item }, ref) => {
  return (
    <BottomSheet ref={ref}>
      {item ? (
        <View style={[globalStyle.paddingModal]}>
          <View style={styles.headerContainer}>
            <CustomIcon name={'spoon-knife'} size={20} style={styles.icon} />

            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View>
            <Text>Foto-Foto</Text>
          </View>
          <View>
            {Object.keys(item.details).map((key) => (
              <View style={styles.textLine} key={key}>
                <View style={styles.keyLine}>
                  <Text style={styles.textKey}>{key}</Text>
                  <Text>:</Text>
                </View>
                <Text style={styles.textValue}>{item.details[key]}</Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <Text>Loading</Text>
      )}
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
