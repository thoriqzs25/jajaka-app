import CustomIcon from '@src/components/CustomIcons';
import useBoolean from '@src/hooks/useBoolean';
import { navigate } from '@src/navigation';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM } from '@src/utils/fonts';
import { useEffect, useRef, useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  StyleSheetProperties,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
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
  error = false,
  inputStyle,
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
  error?: boolean;
  inputStyle?: StyleProp<any>;
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
      {title && (
        <View style={[styles.labelContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={styles.labelTitle}>{title}</Text>
          {title === 'Password' && (
            <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('LupaPassword')}>
              <Text style={{ color: colours.redNormal }}>Lupa Password?</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error ? colours.redNormal : active ? colours.gray500 : colours.backgroundClickable,
          },
          inputStyle,
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
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 4,
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
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
    fontFamily: fontFamilyDM.regular,
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
