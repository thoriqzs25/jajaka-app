import colours from '@utils/colours';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Icon, { IconType } from '@utils/icons';

const CustomIcon = ({
  name,
  size = 16,
  color = colours.white,
  style,
}: {
  name: IconType;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return <Icon name={name} size={size} color={color} style={style} />;
};

export default CustomIcon;
