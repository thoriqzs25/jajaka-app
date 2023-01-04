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
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    width: 152,
    height: 200,
    color: colours.white,
    borderRadius: 8,
    marginHorizontal: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colours.blueNormal,
  },
  image: {
    width: 128,
    height: 128,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 20,
  },
  desc: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
  },
});

export default FeatureHighlights;
