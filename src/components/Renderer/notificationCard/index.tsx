import CustomIcon from '@src/components/CustomIcons';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Pressable } from 'react-native';

const notificationCard = ({ item }: { item: any }) => {
  return (
    <Pressable onPress={() => console.log('line 5')}>
      <TouchableOpacity activeOpacity={0.75}>
        <View style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            <CustomIcon name={'bullhorn'} style={styles.icon} size={24} color={colours.white} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
                {item.title}
              </Text>
              <Text style={[styles.date, styles.regular]}>{item.date}</Text>
            </View>
            <Text style={styles.regular} numberOfLines={1} ellipsizeMode='tail'>
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
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    backgroundColor: colours.backgroundClickable,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 1000,
    backgroundColor: colours.yellowNormal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  textContainer: {
    flex: 1,
    paddingLeft: 8,
    alignSelf: 'flex-start',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  regular: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 18,
  },
  title: {
    width: 100,
    fontSize: 14,
    lineHeight: 18,
    marginRight: 8,
    flex: 1,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  date: {
    color: colours.gray300,
  },
});
export default notificationCard;
