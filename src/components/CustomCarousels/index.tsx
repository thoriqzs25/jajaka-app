import colours from '@utils/colours';
import { SCREEN_WIDTH } from '@utils/deviceDimensions';
import { fontFamily } from '@utils/fonts';
import { globalStyle, ph } from '@utils/globalStyles';
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import ImageView from '../ImageView';
import Pagination from './Pagination';

const DATA = [
  {
    id: 1,
    image: 'character-1-logo',
    title: 'Temukan ide usaha baru untuk UMKM',
    // color: 'yellow',
  },
  {
    id: 2,
    image: 'character-2-logo',
    title: 'Tentukan usaha yang tepat dengan sasaran',
    // color: 'green',
  },
  {
    id: 3,
    image: 'character-3-logo',
    title: 'Pembimbingan konsultasi dengan para ahli',
    // color: 'blue',
  },
];

const CustomCarousels = () => {
  const [index, setIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const totalIndex = DATA.length - 1;

  const handleOnScroll = ({ event }: { event: any }) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: true,
      }
    );
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleScrollToIndex = (idx?: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: idx ?? index + 1 });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < totalIndex) {
        handleScrollToIndex();
      } else {
        handleScrollToIndex(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const _renderItem = ({ item }: { item: any }) => {
    return (
      <View style={[styles.carouselContainer]}>
        <View style={styles.itemContainer}>
          <ImageView name={item.image} style={styles.image} />
          {item.title && (
            <View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        horizontal
        data={DATA}
        pagingEnabled
        renderItem={_renderItem}
        snapToAlignment={'center'}
        keyExtractor={(item, _) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        initialScrollIndex={index}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
          });
        }}
        decelerationRate={'normal'}
      />
      <Pagination data={DATA} index={index} paginationClick={handleScrollToIndex} />
    </>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  itemContainer: {
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH - ph * 2,
    backgroundColor: colours.backgroundSecondary,
  },
  image: { width: 200, height: 180 },
  title: {
    fontSize: 16,
    color: colours.white,
    fontFamily: fontFamily.medium,
  },
});

export default CustomCarousels;
