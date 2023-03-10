import CustomIcon from '@components/CustomIcons';
import useBoolean from '@src/hooks/useBoolean';
import { UseBoolean } from '@cTypes/hooks/UseBoolean';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';

const CustomCheckbox = ({
  style,
  boxStyle,
  title,
  setValue,
  error = false,
}: {
  style?: StyleProp<any>;
  boxStyle?: StyleProp<any>;
  title?: string;
  setValue: UseBoolean;
  error?: boolean;
}) => {
  const { value: active, setValue: setActive } = useBoolean(false);

  useEffect(() => {
    if (active) setValue.true();
    else setValue.false();
  }, [active]);
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        setActive.toggle();
      }}
      style={[styles.container, style]}>
      <View
        style={[
          styles.boxContainer,
          boxStyle,
          { borderColor: active ? colours.blueYoung : error ? colours.redNormal : colours.blueYoung },
        ]}>
        {active && <CustomIcon name={'checkmark1'} size={12} />}
      </View>
      <View>
        <Text style={styles.label}>{title ?? ''}</Text>
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
    backgroundColor: colours.backgroundClickable,
  },
  label: { fontFamily: fontFamily.regular, color: colours.white, fontSize: 14, lineHeight: 18 },
});

export default CustomCheckbox;
