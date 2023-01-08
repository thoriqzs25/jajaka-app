import CustomIcon from '@src/components/CustomIcons';
import ImageView from '@src/components/ImageView';
import { navigate } from '@src/navigation';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

const HomeHeader = () => {
  const name = 'Kuya Kuyi Tahiber';
  const incomingNotif = true;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <ImageView name={'logo'} style={styles.logo} />
        <Text style={styles.text}>
          Halo,
          {'\n'}
          {name}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.rightContainer}
        onPress={() => {
          navigate('Notification');
        }}>
        <CustomIcon name={'notifications-outline'} size={16} color={colours.blueOld} style={{ padding: 8 }} />
        {incomingNotif && <View style={styles.redDot} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  leftContainer: { flexDirection: 'row', alignItems: 'center' },
  rightContainer: {
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.yellowNormal,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colours.redNormal,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  logo: {
    width: 44,
    height: 44,
    marginRight: 12,
  },
  text: {
    color: colours.white,
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default HomeHeader;
