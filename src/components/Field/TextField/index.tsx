import CustomIcon from '@src/components/CustomIcons';
import useBoolean from '@src/hooks/useBoolean';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { useEffect, useRef, useState } from 'react';
import { StyleProp, StyleSheet, StyleSheetProperties } from 'react-native';
import { Text, TextInput, View } from 'react-native';

const TextField = ({
  title,
  autoFocus,
  placeholderText,
  style,
  secureInput,
  setValue,
  value,
}: {
  title?: string;
  autoFocus?: boolean;
  placeholderText?: string;
  style?: StyleProp<any>;
  secureInput?: boolean;
  setValue: (val: string) => void;
  value?: string;
}) => {
  const { value: active, setValue: setActive } = useBoolean(false);
  const { value: visible, setValue: setVisible } = useBoolean(false);
  const inputRef = useRef<TextInput>(null);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [autoFocus]);

  return (
    <View style={[styles.wholeContainer, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelTitle}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholderText}
          ref={inputRef}
          secureTextEntry={secureInput && !visible}
          onChangeText={(val) => setValue(val)}
          style={[styles.inputText, { width: secureInput ? '86%' : '100%' }]}
          value={value ?? value}
        />
        {secureInput && (
          <CustomIcon
            name={!visible ? 'eye' : 'eye-blocked'}
            size={16}
            style={styles.icon}
            onPress={() => setVisible.toggle()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {},
  labelContainer: {},
  labelTitle: {
    fontFamily: fontFamily.regular,
    color: colours.white,
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 4,
  },
  inputContainer: {
    fontSize: 16,
    lineHeight: 20,
    borderRadius: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: fontFamily.regular,
    backgroundColor: colours.backgroundClickable,
  },
  inputText: {},
  icon: {
    height: 30,
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextField;
