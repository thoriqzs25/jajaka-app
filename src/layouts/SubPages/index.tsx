import { useNavigation } from '@react-navigation/native';
import CustomIcon from '@src/components/CustomIcons';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';
import { globalStyle } from '@src/utils/globalStyles';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SubPages = ({
  children,
  title,
  childPadding = true,
}: {
  children: JSX.Element;
  title: string;
  childPadding?: boolean;
}) => {
  const { navigate, goBack, canGoBack } = useNavigation();

  const handleBack = () => {
    if (canGoBack()) goBack();
  };
  return (
    <View style={[styles.layoutContainer, childPadding && globalStyle.paddingHorizontal, globalStyle.paddingTop]}>
      <View style={[styles.headerContainer, !childPadding && globalStyle.paddingHorizontal]}>
        <TouchableOpacity activeOpacity={0.75} style={styles.leftContainer} onPress={handleBack}>
          <CustomIcon name={'cheveron-left'} size={32} color={colours.white} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layoutContainer: { flex: 1 },
  headerContainer: { alignSelf: 'flex-start' },
  leftContainer: {
    paddingRight: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    marginRight: 4,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default SubPages;
