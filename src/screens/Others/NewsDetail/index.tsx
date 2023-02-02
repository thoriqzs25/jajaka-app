import ImageView from '@src/components/ImageView';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { SCREEN_WIDTH } from '@src/utils/deviceDimensions';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { ScrollView, Text, TextStyle, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA = {
  image: 'news-dummy-image',
  date: '06-11-2022',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia felis nisi, vel feugiat est lacinia vel. Ut interdum commodo augue eget euismod. Duis efficitur ex eget risus porttitor commodo. In auctor et justo et gravida. Quisque scelerisque felis a nibh eleifend, et maximus est laoreet. Suspendisse pretium turpis nunc, sit amet facilisis enim auctor ac. Vivamus in condimentum ex, sit amet sagittis tortor. Ut dignissim ex vitae ante sodales tincidunt. Donec euismod purus id pharetra egestas. Vivamus iaculis metus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eleifend mauris eget fermentum consectetur. Nulla accumsan, est vel tempus interdum, eros purus feugiat nisl, sit amet rhoncus mi erat at mauris. Nullam ultrices eleifend dapibus. Mauris ut lorem maximus, faucibus nulla a, maximus lectus. Sed ut nisi eu ex faucibus bibendum. Nunc accumsan egestas metus, eget viverra lorem convallis eget. Donec ultrices vel est non tristique. Nam lorem nulla, porttitor et malesuada at, lacinia blandit ante. Duis quam nisl, tempus sed ipsum sed, varius pulvinar dui. Suspendisse dignissim vulputate ante et blandit. Morbi eget enim odio. Praesent eget est semper, placerat ex at, egestas tellus. Vivamus sem arcu, laoreet sed tellus et, cursus commodo ante. Proin tincidunt vitae turpis quis mattis. Nunc vitae odio aliquam, ultricies ante nec, dictum diam. Quisque tincidunt tincidunt accumsan. Nam a nibh id tortor mollis feugiat. Sed quis posuere nunc. Mauris ut volutpat ipsum. Maecenas at tellus erat.',
};

const NewsDetail = () => {
  return (
    <SubPages title={'Berita UMKM #1'} childPadding={false}>
      <ScrollView style={{ flex: 1 }}>
        <ImageView name={DATA.image} style={styles.image} resizeMode={'cover'} />
        <View style={globalStyle.paddingHorizontal}>
          <View style={styles.textContainer}>
            <Text style={[styles.date, styles.regular]}>{DATA.date}</Text>
            <Text style={styles.title}>{DATA.title}</Text>
            <Text style={[styles.regular, { textAlign: 'justify' }]}>{DATA.desc}</Text>
          </View>
        </View>
      </ScrollView>
    </SubPages>
  );
};

const styles = {
  image: {
    height: 180,
    width: SCREEN_WIDTH,
    // alignSelf: 'flex-end',
  },
  textContainer: {
    marginTop: 16,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colours.backgroundSecondary,
  },
  regular: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 8,
    fontFamily: fontFamily.regular,
  },
  date: {
    color: colours.gray300,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 16,
    fontFamily: fontFamily.bold,
  },
};

export default NewsDetail;
