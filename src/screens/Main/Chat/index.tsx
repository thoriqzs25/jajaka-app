import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { StyleSheet, Text, View } from 'react-native';

const ChatBox = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      {/* <View style={styles.subContainer}> */}
      <View style={styles.leftContainer}>
        <Text style={styles.name}>Name</Text>
        <Text numberOfLines={1} style={styles.grayText}>
          Chats
        </Text>
      </View>
      {/* </View> */}
      <View style={styles.rightContainer}>
        <Text style={styles.grayText}>06-11-2022</Text>
        <View style={styles.notif}>
          <Text style={{ fontFamily: fontFamily.regular, color: colours.white, fontSize: 12, lineHeight: 12 }}>2</Text>
        </View>
      </View>
    </View>
  );
};

const Chat = () => {
  return (
    <View style={[globalStyle.padding]}>
      <Text style={styles.title}>Chat</Text>
      <ChatBox />
      <ChatBox />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    lineHeight: 20,
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
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.redYoung,
  },
  subContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: colours.blueYoung,
  },
  leftContainer: {
    flex: 1,
    width: '100%',
    // backgroundColor: colours.yellowNormal,
  },
  rightContainer: {
    width: 76,
    alignItems: 'flex-end',
    // backgroundColor: colours.greenNormal,
  },
  grayText: {
    fontSize: 12,
    lineHeight: 14,
    color: colours.gray300,
    fontFamily: fontFamily.light,
  },
  name: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: colours.white,
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
});

export default Chat;
