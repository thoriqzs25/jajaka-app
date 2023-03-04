import { useNavigation } from '@react-navigation/native';
import CustomIcon from '@components/CustomIcons';
import colours from '@utils/colours';
import { fontFamily, fontFamilyDM } from '@utils/fonts';
import { globalStyle } from '@utils/globalStyles';
import { IconType } from '@utils/icons';
import { Pressable, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SubPages = ({
  children,
  title,
  childPadding = true,
  subTitle,
  subTitleIcon,
  style,
}: {
  children: JSX.Element;
  title: string;
  childPadding?: boolean;
  subTitle?: string;
  subTitleIcon?: IconType;
  style?: StyleProp<any>;
}) => {
  const { navigate, goBack, canGoBack } = useNavigation();

  const handleBack = () => {
    if (canGoBack()) goBack();
  };
  return (
    <View
      style={[styles.layoutContainer, childPadding && globalStyle.paddingHorizontal, globalStyle.paddingTop, style]}>
      <View style={[styles.headerContainer, !childPadding && globalStyle.paddingHorizontal]}>
        <TouchableOpacity activeOpacity={0.75} style={styles.leftContainer} onPress={handleBack}>
          <CustomIcon name={'cheveron-left'} size={32} color={colours.white} style={styles.icon} />
          {subTitle ? (
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.subTitleContainer}>
                {subTitleIcon && <CustomIcon style={styles.subTitleIcon} name={subTitleIcon} size={12} />}
                <Text style={styles.subTitle}>{subTitle}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layoutContainer: { flex: 1, zIndex: 100 },
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
  textContainer: {},
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: colours.white,
    fontFamily: fontFamily.bold,
  },
  subTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subTitle: {
    fontSize: 10,
    lineHeight: 14,
    color: colours.white,
    fontFamily: fontFamilyDM.regular,
  },
  subTitleIcon: {
    marginRight: 4,
  },
});

export default SubPages;
