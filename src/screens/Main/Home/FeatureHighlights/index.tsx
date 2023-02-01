import { useNavigation } from '@react-navigation/native';
import ImageView from '@src/components/ImageView';
import useBoolean from '@src/hooks/useBoolean';
import { navigate } from '@src/navigation';
import { userLogout } from '@src/redux/actions/auth';
import { RootState } from '@src/types/states/root';
import colours from '@src/utils/colours';
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
                if (data.id === 1) {
                  navigate('Bongbolongan');
                } else dispatch(userLogout());
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
    borderRadius: 8,
    marginHorizontal: 6,
    paddingVertical: 12,
    color: colours.white,
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
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 8,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  desc: {
    fontSize: 14,
    lineHeight: 18,
    color: colours.white,
    fontFamily: fontFamily.regular,
  },
});

export default FeatureHighlights;
