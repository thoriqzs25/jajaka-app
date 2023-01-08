import CustomIcon from '@src/components/CustomIcons';
import useBoolean from '@src/hooks/useBoolean';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomCheckbox = ({
  style,
  boxStyle,
  label,
}: {
  style?: StyleProp<any>;
  boxStyle?: StyleProp<any>;
  label?: string;
}) => {
  const { value: active, setValue: setActive } = useBoolean(false);

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={() => setActive.toggle()} style={[styles.container, style]}>
      <View style={[styles.boxContainer, boxStyle]}>{active && <CustomIcon name={'checkmark1'} size={12} />}</View>
      <View>
        <Text style={styles.label}>Saya telah setuju dengan syarat dan ketentuan.</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 4,
    borderColor: colours.blueYoung,
    backgroundColor: colours.backgroundClickable,
  },
  label: { fontFamily: fontFamily.regular, color: colours.white, fontSize: 14, lineHeight: 18 },
});

export default CustomCheckbox;
