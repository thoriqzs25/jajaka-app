import ImageView from '@src/components/ImageView';
import { userLogout } from '@src/redux/actions/auth';
import { RootState } from '@src/types/states/root';
import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const FeatureHighlights = () => {
  const { email } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const DATA = [
    { id: 1, image: 'bongbolongan-logo', title: 'Bongbolongan', desc: 'Temukan Potensi ide UMKM!' },
    { id: 2, image: 'ngajarkeun-logo', title: 'Ngajarkeun', desc: 'Dapatkan bimbingan perintis UMKM!' },
  ];

  return (
    <View style={styles.hightlightContainer}>
      {DATA &&
        DATA.map((data, idx) => {
          return (
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.cardContainer}
              key={data.id}
              onPress={() => {
                if (data.id === 1) console.log('line 20', email);
                else dispatch(userLogout());
              }}>
              <ImageView name={data.image} style={styles.image} />
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.desc}>{data.desc}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  hightlightContainer: {
    marginTop: 8,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardContainer: {
    width: 172,
    color: colours.white,
    borderRadius: 8,
    marginHorizontal: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colours.blueNormal,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 12,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 8,
  },
  desc: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 18,
  },
});

export default FeatureHighlights;
