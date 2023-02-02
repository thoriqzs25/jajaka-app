import CustomIcon from '@components/CustomIcons';
import BottomSheet from '@components/Modal/BottomSheet';
import CustomCarousels from '@src/components/CustomCarousels';
import ImageView from '@src/components/ImageView';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import { CustomMapsRefProps } from '@src/types/refs/customMaps';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { globalStyle } from '@utils/globalStyles';
import React, { Ref } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 1,
    image: 'location-dummy',
  },
  {
    id: 2,
    image: 'ngajarkeun-logo',
  },
  {
    id: 3,
    image: 'logo',
  },
  {
    id: 4,
    image: 'location-dummy',
  },
  {
    id: 5,
    image: 'location-dummy',
  },
];

const BongbolonganDetails = React.forwardRef<BottomSheetRefProps, { data: any; halfScreen: (half: boolean) => void }>(
  ({ data, halfScreen }, ref) => {
    const _renderItem = ({ item }: { item: any }) => {
      return (
        <View key={data.id.toString()} style={{}}>
          <ImageView name={item.image} style={{ width: 112, height: 90, borderRadius: 12 }} />
        </View>
      );
    };
    const _seperatorComp = () => {
      return <View style={{ width: 12 }} />;
    };

    return (
      <BottomSheet ref={ref} halfScreen={halfScreen}>
        {data ? (
          <View style={[globalStyle.paddingModal]}>
            <View style={styles.headerContainer}>
              <CustomIcon
                name={data.details.Kategori === 'Kuliner' ? 'spoon-knife' : 'service'}
                size={20}
                style={styles.icon}
              />

              <Text style={styles.title}>{data.name}</Text>
            </View>
            <View style={{ marginVertical: 16 }}>
              <FlatList data={DATA} renderItem={_renderItem} horizontal ItemSeparatorComponent={_seperatorComp} />
            </View>
            <View>
              {Object.keys(data.details).map((key) => (
                <View style={styles.textLine} key={key}>
                  <View style={styles.keyLine}>
                    <Text style={styles.textKey}>{key}</Text>
                    <Text>:</Text>
                  </View>
                  <Text style={styles.textValue}>{data.details[key]}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <Text>Loading</Text>
        )}
      </BottomSheet>
    );
  }
);

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
