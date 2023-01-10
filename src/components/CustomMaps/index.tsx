import { imageSource } from '@src/assets/images';
import colours from '@src/utils/colours';
import React from 'react';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomIcon from '../CustomIcons';
import ImageView from '../ImageView';

const defaultDelta = {
  latitudeDelta: 0.02,
  longitudeDelta: 0.01,
};

const DATA = [
  {
    name: 'test 1',
    coordinate: {
      latitude: -6.60255,
      longitude: 106.81303,
      ...defaultDelta,
    },
  },
  {
    name: 'test 2',
    coordinate: {
      latitude: -6.60754,
      longitude: 106.81503,
      ...defaultDelta,
    },
  },
  {
    name: 'test 3',
    coordinate: {
      latitude: -6.60255,
      longitude: 106.81203,
      ...defaultDelta,
    },
  },
];

const CustomMaps = ({ style, onOpenDetail }: { style: StyleProp<any>; onOpenDetail: () => void }) => {
  const Point = () => {
    return (
      <View style={styles.pointContainer}>
        <ImageView name={'map-marker'} style={styles.image} />
        <CustomIcon name={'spoon-knife'} size={14} color={colours.white} style={styles.icon} />
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.60755,
          longitude: 106.81303,
          ...defaultDelta,
        }}>
        {DATA.map((item: any, idx: number) => {
          return (
            <Marker key={item.name} coordinate={item.coordinate} onPress={onOpenDetail}>
              <Point />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
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
  },
  image: {
    width: 23,
    height: 32,
  },
  icon: { position: 'absolute', top: 6 },
});
export default CustomMaps;
