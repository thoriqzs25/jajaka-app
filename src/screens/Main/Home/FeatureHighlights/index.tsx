import ImageView from '@src/components/ImageView';
import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { fontFamily } from '@src/utils/fonts';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const FeatureHighlights = () => {
  const DATA = [
    {
      image: 'bongbolongan-logo',
      title: 'Bongbolongan',
      desc: 'Temukan Potensi ide UMKM!',
    },
    {
      image: 'ngajarkeun-logo',
      title: 'Ngajarkeun',
      desc: 'Dapatkan bimbingan perintis UMKM!',
    },
  ];

  return (
    <View style={styles.hightlightContainer}>
      {DATA &&
        DATA.map((data, idx) => {
          return (
            <View style={styles.cardContainer}>
              <ImageView name={data.image} style={styles.image} />
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.desc}>{data.desc}</Text>
            </View>
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
    // height: 230,
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
    fontSize: 16,
    lineHeight: 20,
  },
});

export default FeatureHighlights;
