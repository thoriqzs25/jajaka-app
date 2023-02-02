import CustomIcon from '@src/components/CustomIcons';
import ImageView from '@src/components/ImageView';
import { navigate } from '@src/navigation';
import colours from '@src/utils/colours';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
  {
    name: 'Bram Tanuwijaya',
    image: 'dummy-user',
    message: ['Hello nice to meet you', 'Let me introduce myself'],
    date: '06-11-2022',
  },
  {
    name: 'Helene',
    image: 'dummy-user-2',
    message: ['Hi! nice to know you too'],
    date: '02-09-2022',
  },
  {
    name: 'Bryan Eagan',
    image: '',
    message: ['Eyy', 'What a day huh?', 'Let me know if you have any problem'],
    date: '09-11-2022',
  },
];

const _renderChat = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.boxContainer}
      onPress={() => navigate('Chat', { name: item.name })}>
      <View style={styles.imageContainer}>
        {item.image ? (
          <ImageView name={item.image} style={styles.image} />
        ) : (
          <CustomIcon name='user-solid-circle' size={30} style={{ width: 32 }} />
        )}
      </View>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.grayText}>
          {item.message[item.message.length - 1]}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.grayText}>{item.date}</Text>
        <View style={styles.notif}>
          <Text style={{ fontFamily: fontFamily.regular, color: colours.white, fontSize: 12, lineHeight: 12 }}>
            {item.message.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Messages = () => {
  return (
    <View style={[globalStyle.padding]}>
      <Text style={styles.title}>Chat</Text>
      {DATA ? (
        <FlatList data={DATA} renderItem={_renderChat} />
      ) : (
        <View
          style={{
            // backgroundColor: colours.blueNormal,
            height: '94%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageView name='empty-chat' style={{ width: 180, height: 180, marginBottom: 20 }} />
          <Text
            style={{
              fontSize: 16,
              lineHeight: 18,
              textAlign: 'center',
              color: colours.white,
              width: (SCREEN_WIDTH / 3) * 2,
              fontFamily: fontFamilyLex.regular,
            }}>
            Kamu belum menerima chat, silakan mulai berkonsultasi dengan para ahli!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 20,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  boxContainer: {
    padding: 8,
    width: '100%',
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colours.backgroundClickable,
  },
  imageContainer: {
    width: 32,
    height: 32,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    width: '100%',
  },
  rightContainer: {
    width: 76,
    alignItems: 'flex-end',
  },
  grayText: {
    fontSize: 12,
    lineHeight: 16,
    color: colours.gray300,
    fontFamily: fontFamilyDM.regular,
  },
  name: {
    fontSize: 16,
    lineHeight: 18,
    color: colours.white,
    fontFamily: fontFamilyLex.regular,
  },
  notif: {
    width: 20,
    height: 20,
    marginTop: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.redNormal,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

export default Messages;
