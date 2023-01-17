import CustomIcon from '@src/components/CustomIcons';
import useBoolean from '@src/hooks/useBoolean';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { useEffect, useRef, useState } from 'react';
import { KeyboardTypeOptions, StyleProp, StyleSheet, StyleSheetProperties, TextInputProps } from 'react-native';
import { Text, TextInput, View } from 'react-native';

const TextField = ({
  title,
  autoFocus,
  placeholderText,
  style,
  secureInput,
  setValue,
  value,
  autoCapitalize = 'none',
  keyboardType = 'default',
  error = '',
}: {
  title?: string;
  autoFocus?: boolean;
  placeholderText?: string;
  style?: StyleProp<any>;
  secureInput?: boolean;
  setValue: (val: string) => void;
  value?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: KeyboardTypeOptions;
  error?: string;
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
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error ? colours.redNormal : active ? colours.gray500 : colours.backgroundClickable,
          },
        ]}>
        <TextInput
          placeholder={placeholderText}
          ref={inputRef}
          secureTextEntry={secureInput && !visible}
          onChangeText={(val) => setValue(val)}
          style={[styles.inputText, { width: secureInput ? '84%' : '100%' }]}
          value={value ?? value}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          onFocus={() => setActive.true()}
          onBlur={() => setActive.false()}
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
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: fontFamily.regular,
    justifyContent: 'space-between',
    borderColor: colours.backgroundClickable,
    backgroundColor: colours.backgroundClickable,
  },
  inputText: {
    fontSize: 14,
    paddingVertical: 8,
    fontFamily: fontFamily.regular,
  },
  icon: {
    height: 30,
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focus: {
    borderColor: colours.greenNormal,
  },
});

export default TextField;
