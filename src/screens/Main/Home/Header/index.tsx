import CustomIcon from '@src/components/CustomIcons';
import ImageView from '@src/components/ImageView';
import { navigate } from '@src/navigation';
import { UseBoolean } from '@src/types/hooks/UseBoolean';
import { RootState } from '@src/types/states/root';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const HomeHeader = () => {
  const { user } = useSelector((state: RootState) => state);

  const incomingNotif = true;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <ImageView name={'logo'} style={styles.logo} />
        <Text style={styles.text}>
          Halo,
          {'\n'}
          {user.name ?? ''}
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
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colours.backgroundPrimary,
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
