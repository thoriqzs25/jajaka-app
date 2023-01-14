import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { Pressable, StyleProp, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({
  title,
  style,
  onPress,
  titleStyle,
  glow,
}: {
  title: string;
  style?: StyleProp<any>;
  onPress?: () => void;
  titleStyle?: StyleProp<any>;
  glow?: boolean;
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
          // shadowOffset: { width: 0, height: 5 },
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.blueNormal,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: fontFamily.regular,
  },
});

export default CustomButton;
