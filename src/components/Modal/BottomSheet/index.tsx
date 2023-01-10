import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { Ref, useCallback, useEffect, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { BottomSheetRefProps } from '@src/types/refs/bottomSheet';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import colours from '@src/utils/colours';
import { UseBoolean } from '@src/types/hooks/UseBoolean';

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 36;

const BottomSheet = React.forwardRef<BottomSheetRefProps, { children: JSX.Element }>(({ children }, ref) => {
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    active.value = destination === MAX_TRANSLATE_Y / 1.8;

    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      } else if (translateY.value < -SCREEN_HEIGHT / 2.5) {
        scrollTo(MAX_TRANSLATE_Y / 1.8);
      } else if (translateY.value < -195) {
        scrollTo(-230);
      } else {
        scrollTo(0);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 24,
    backgroundColor: colours.backgroundPrimary,
    borderWidth: 1,
    borderColor: '#43445A',
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 8,
    borderRadius: 2,
  },
});

export default BottomSheet;

// import colours from '@src/utils/colours';
// import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/utils/deviceDimensions';
// import { StyleProp, StyleSheet, View } from 'react-native';
// import Modal from 'react-native-modal';

// const BottomSheet = ({
//   children,
//   visible,
//   onClose,
//   backdropPress = true,
//   icon,
//   style,
// }: {
//   children: JSX.Element;
//   visible: boolean;
//   onClose: () => void;
//   backdropPress?: boolean;
//   icon?: string;
//   style?: StyleProp<any>;
// }) => {
//   return (
//     <View style={[style, styles.modalContainer, { bottom: visible ? 0 : -2000 }]}>
//       <View style={styles.modalItem}>
//         <View style={styles.spanBar} />
//         <View style={styles.childContainer}>{children}</View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     // margin: 0,
//     // justifyContent: 'flex-end',
//     // backgroundColor: colours.blueNormal,
//     position: 'absolute',
//     width: SCREEN_WIDTH,
//   },
//   spanBar: {
//     alignSelf: 'center',
//     borderRadius: 12,
//     height: 6,
//     width: 100,
//     backgroundColor: colours.backgroundClickable,
//   },
//   modalItem: {
//     paddingTop: 8,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     height: SCREEN_HEIGHT / 2 - 110,
//     backgroundColor: colours.blueYoung,
//     // paddingBottom: 0,
//   },
//   childContainer: {},
// });

// export default BottomSheet;
