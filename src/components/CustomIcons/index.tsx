import colours from '@utils/colours';
import React from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import Icon, { IconType } from '@utils/icons';

const CustomIcon = ({
  name,
  size = 16,
  color = colours.white,
  style,
  onPress,
}: {
  name: IconType;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) => {
  return (
    <>
      {onPress ? (
        <Pressable onPress={onPress} style={style}>
          <Icon name={name} size={size} color={color} />
        </Pressable>
      ) : (
        <View style={style}>
          <Icon name={name} size={size} color={color} />
        </View>
      )}
    </>
  );
};

export default CustomIcon;
