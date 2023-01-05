import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import { navigate } from '@src/navigation';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageView from '../../ImageView';

const newsCard = ({ item }: { item: any }) => {
  const handleOpenNews = () => {
    navigate('NewsDetail');
  };

  return (
    <Pressable onPress={handleOpenNews}>
      <TouchableOpacity activeOpacity={0.75}>
        <View style={styles.cardContainer}>
          <ImageView name={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={[styles.regular, styles.date]}>{item.date}</Text>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
              {item.title}
            </Text>
            <Text style={[styles.regular, styles.desc]} numberOfLines={2} ellipsizeMode='tail'>
              {item.desc}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    backgroundColor: colours.backgroundClickable,
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textContainer: {
    padding: 8,
    width: 244,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  regular: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 18,
    color: colours.gray300,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 20,
    color: colours.white,
  },
  date: {
    color: colours.gray300,
  },
  desc: {
    color: colours.white,
  },
});

export default newsCard;
