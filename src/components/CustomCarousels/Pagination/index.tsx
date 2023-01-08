import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const Pagination = ({
  data,
  index,
  paginationClick,
}: {
  data: any;
  index: number;
  paginationClick: (idx: number) => void;
}) => {
  return (
    <View style={styles.container}>
      {data &&
        data.map((_: any, idx: number) => {
          return (
            <Pressable
              key={idx.toString()}
              onPress={() => {
                console.log('index line 20', index);
                paginationClick(idx);
              }}>
              <Animated.View
                style={[
                  styles.dot,
                  { backgroundColor: idx === index ? colours.yellowNormal : colours.gray300 },
                  // { backgroundColor },
                ]}
              />
            </Pressable>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 6,
  },
});

export default Pagination;
