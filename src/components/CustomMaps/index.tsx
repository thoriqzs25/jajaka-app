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
// React.forwardRef<BottomSheetRefProps, {
//   style: StyleProp<any>;
//   onOpenDetail: () => void;
//   setSelected: (id: any) => void;
//   itemList: any[];
// }>(({style,
//   onOpenDetail,
//   setSelected,
//   itemList}, ref) => {

//   })

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
        style={styles.map}
        // mapPadding={{ top: 0, left: 0, right: 0, bottom: usingPadding ? 320 : 0 }}
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
