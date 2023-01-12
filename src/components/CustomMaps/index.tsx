import { imageSource } from '@src/assets/images';
import useBoolean from '@src/hooks/useBoolean';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import { CustomMapsRefProps } from '@src/types/refs/customMaps';
import colours from '@src/utils/colours';
import React, { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import MapView, { EdgePadding, Marker } from 'react-native-maps';
import { SharedValue } from 'react-native-reanimated';
import CustomIcon from '../CustomIcons';
import ImageView from '../ImageView';

export const defaultDelta = {
  latitudeDelta: 0.02,
  longitudeDelta: 0.01,
};

const CustomMaps = ({
  style,
  onOpenDetail,
  setSelected,
  itemList,
  isHalf,
}: {
  style: StyleProp<any>;
  onOpenDetail: () => void;
  setSelected: (id: any) => void;
  itemList: any[];
  isHalf: boolean;
}) => {
  const Point = ({ category }: { category: string }) => {
    return (
      <View style={styles.pointContainer}>
        <ImageView name={'map-marker'} style={styles.image} />
        <CustomIcon
          name={category === 'Kuliner' ? 'spoon-knife' : 'coin-dollar'}
          size={14}
          color={colours.white}
          style={styles.icon}
        />
        <View style={styles.dot} />
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <MapView
        mapPadding={{ top: 0, right: 0, bottom: isHalf ? 320 : 0, left: 0 }}
        style={styles.map}
        showsCompass={false}
        initialRegion={{
          latitude: -6.60755,
          longitude: 106.81303,
          ...defaultDelta,
        }}>
        {itemList.map((item: any, idx: number) => {
          return (
            <Marker
              key={item.name}
              coordinate={item.coordinate}
              onPress={() => {
                setSelected(item);
                onOpenDetail();
              }}>
              <Point category={item.details.Kategori} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  pointContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    // width: 23,
  },
  image: {
    width: 23,
    height: 32,
  },
  icon: {
    top: 6,
    position: 'absolute',
  },
  dot: {
    width: 4,
    height: 4,
    bottom: 1,
    borderRadius: 2,
    position: 'absolute',
    backgroundColor: colours.blueYoung,
  },
});
export default CustomMaps;
