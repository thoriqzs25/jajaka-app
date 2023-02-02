import CustomIcon from '@src/components/CustomIcons';
import ImageView from '@src/components/ImageView';
import { navigate } from '@src/navigation';
import colours from '@src/utils/colours';
import { fontFamily, fontFamilyDM, fontFamilyLex } from '@src/utils/fonts';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const KonsultanCard = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      // onPress={() => navigate('Chat', { name: item.name })}
      style={styles.boxContainer}>
      <View style={styles.imageContainer}>
        {item.image ? (
          <ImageView name={item.image} style={styles.image} />
        ) : (
          <CustomIcon name='user-solid-circle' size={40} style={{ width: 44 }} />
        )}
      </View>
      <View style={styles.leftContainer}>
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          {item.type &&
            item.type.map((type: string) => {
              return (
                <View
                  style={{
                    width: 16,
                    height: 16,
                    marginRight: 4,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colours.yellowNormal,
                  }}
                  key={type}>
                  <CustomIcon name={type === 'Jasa' ? 'service' : 'spoon-knife'} color={colours.black} size={10} />
                </View>
              );
            })}
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.grayText}>
          {item.title}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <CustomIcon name='fab' size={18} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '100%',
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colours.backgroundClickable,
  },
  imageContainer: {
    width: 44,
    height: 44,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 30,
  },
  leftContainer: {
    flex: 1,
    width: '100%',
  },
  rightContainer: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    backgroundColor: colours.blueNormal,
    alignItems: 'center',
    borderRadius: 18,
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
});

export default KonsultanCard;
