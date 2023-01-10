import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { Pressable, StyleProp, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({
  title,
  style,
  onPress,
  titleStyle,
}: {
  title: string;
  style?: StyleProp<any>;
  onPress?: () => void;
  titleStyle?: StyleProp<any>;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={[styles.container, style]} onPress={onPress}>
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
