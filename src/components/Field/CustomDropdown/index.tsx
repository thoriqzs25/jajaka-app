import ImageView from '@src/components/ImageView';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM } from '@src/utils/fonts';
import React, { useState } from 'react';
import { StyleSheet, View, Text, StyleProp } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const DATA = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const CustomDropdown = ({
  data,
  style,
  image,
  value,
  setValue,
}: {
  data?: { label: string; value: string }[];
  style?: StyleProp<any>;
  image?: string;
  value?: string;
  setValue?: (type: string) => void | UseBoolean;
}) => {
  const [dummyValue, setDummyValue] = useState(data ? data[0] : null);

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        {image && <ImageView name={image} style={{ width: 18, height: 18, marginRight: 8 }} />}
        <Text style={[styles.textItem, styles.defaultText]}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={[styles.dropdown, style]}
      placeholderStyle={[styles.placeholderStyle, styles.defaultText]}
      selectedTextStyle={[styles.selectedTextStyle, styles.defaultText]}
      iconStyle={styles.iconStyle}
      data={data ?? DATA}
      maxHeight={100}
      containerStyle={styles.containerStyle}
      itemContainerStyle={{ borderRadius: 8 }}
      labelField='label'
      valueField='value'
      placeholder='Select item'
      searchPlaceholder='Search...'
      value={value ?? dummyValue}
      onChange={(item) => {
        if (setValue) setValue(item.value);
        else setDummyValue(item.value);
      }}
      renderItem={renderItem}
      renderLeftIcon={() => {
        if (image) return <ImageView name='dummy-user-3' style={{ width: 18, height: 18, marginRight: 8 }} />;
      }}
      activeColor={colours.backgroundSecondary}
    />
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 32,
    backgroundColor: colours.backgroundClickable,
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: 200,
    elevation: 2,
  },
  containerStyle: {
    padding: 8,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: colours.backgroundClickable,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  defaultText: {
    fontSize: 14,
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
  },
  textItem: {
    flex: 1,
  },
  placeholderStyle: {},
  selectedTextStyle: {},
  iconStyle: {
    width: 20,
    height: 20,
  },
});
