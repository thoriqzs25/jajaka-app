import CustomIcon from '@src/components/CustomIcons';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM } from '@src/utils/fonts';
import { IconType } from '@src/utils/icons';
import { Pressable, StyleProp, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({
  title,
  style,
  onPress,
  titleStyle,
  glow,
  iconName,
  iconNameRight,
  iconSize,
}: {
  title: string;
  style?: StyleProp<any>;
  onPress?: () => void;
  titleStyle?: StyleProp<any>;
  glow?: boolean;
  iconName?: IconType;
  iconNameRight?: IconType;
  iconSize?: number;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.container,
        style,
        glow && {
          elevation: 2,
          shadowColor: colours.white,
        },
      ]}
      onPress={onPress}>
      {iconName && <CustomIcon name={iconName} style={{ marginRight: 4 }} size={iconSize ? iconSize : 12} />}
      <Text style={[styles.title, titleStyle]}>{title}</Text>

      {iconNameRight && (
        <CustomIcon name={iconNameRight} style={{ marginRight: 4, position: 'absolute', right: 8 }} size={12} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colours.blueNormal,
  },
  title: {
    fontSize: 16,
    lineHeight: 18,
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
  },
});

export default CustomButton;
