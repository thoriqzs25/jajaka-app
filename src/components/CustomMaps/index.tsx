import { imageSource } from '@src/assets/images';
import useBoolean from '@src/hooks/useBoolean';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import { CustomMapsRefProps } from '@src/types/refs/customMaps';
import colours from '@src/utils/colours';
import React, { createRef, LegacyRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
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
  selectedItem,
}: {
  style: StyleProp<any>;
  onOpenDetail: () => void;
  setSelected: (id: any) => void;
  selectedItem: any;
  itemList: any[];
  isHalf: boolean;
}) => {
  const mapRef = useRef<MapView>() as React.MutableRefObject<MapView>;
  // const mapRef = createRef<MapView>();

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

  useEffect(() => {
    console.log('changed isHalf line 53', isHalf);
    const timeout = setTimeout(() => {
      if (selectedItem) {
        mapRef.current?.animateCamera({
          center: {
            latitude: selectedItem.coordinate.latitude,
            longitude: selectedItem.coordinate.longitude,
          },

          zoom: isHalf ? 14.8 : 14.4,
        });
      }
    }, 350);
    // mapRef.current?.on
    return () => clearTimeout(timeout);
  }, [mapRef, isHalf]);

  return (
    <View style={[styles.container, style]}>
      <MapView
        ref={mapRef}
        onMapReady={() => {
          console.log('line 77 ready');
        }}
        onMapLoaded={() => {
          console.log('line 78 loaded');
        }}
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
