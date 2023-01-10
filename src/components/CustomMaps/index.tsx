import { imageSource } from '@src/assets/images';
import colours from '@src/utils/colours';
import React from 'react';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
}: {
  style: StyleProp<any>;
  onOpenDetail: () => void;
  setSelected: (id: any) => void;
  itemList: any[];
}) => {
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
        {itemList.map((item: any, idx: number) => {
          return (
            <Marker
              key={item.name}
              coordinate={item.coordinate}
              onPress={() => {
                setSelected(item);
                onOpenDetail();
              }}>
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
