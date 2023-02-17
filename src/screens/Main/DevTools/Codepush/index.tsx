import React, { useState } from 'react';
import { NativeModules, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import codePush from 'react-native-code-push';
import colours from '@utils/colours';
import { fontFamily } from '@utils/fonts';
import packageJSON from 'package.json';
import KEYS from '@utils/keys';

type Status = {
  title: string;
  color: string;
};

// const packageJson = require('package.json');
// console.log(packageJson.version);

const Codepush = () => {
  const [cpStatus, setCpStatus] = useState<Status>({
    title: 'update',
    color: colours.blueYoung,
  });

  const handleCodepush = () => {
    setCpStatus({ title: 'loading', color: colours.yellowNormal });
    codePush
      .sync(
        { deploymentKey: KEYS.CODEPUSH, installMode: codePush.InstallMode.IMMEDIATE },
        (status) => {
          if (status === codePush.SyncStatus.UP_TO_DATE) {
            setCpStatus({ title: 'latest', color: colours.greenNormal });
          }
        },
        ({ receivedBytes = 0, totalBytes = 0 }) => {
          // setProgress(Math.ceil((receivedBytes / totalBytes) * 100));
          setCpStatus({ title: `${Math.ceil((receivedBytes / totalBytes) * 100)}%`, color: colours.gray500 });
        }
      )
      .catch((e) => {
        setCpStatus({ title: 'failed', color: colours.redYoung });
        return;
      });
  };

  const CodepushButton = () => {
    const env = NativeModules.RNBuildType.env; // to get the current env you just need to insert this line

    return (
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.75} onPress={() => handleCodepush()}>
        <Text style={styles.title}>Codepush OTA</Text>
        <Text style={styles.title}>{`${env} // ${packageJSON.version}`}</Text>
        <View style={[styles.bar, { backgroundColor: cpStatus.color }]}>
          <Text style={styles.status}>{cpStatus.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <CodepushButton />;
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 4,
    flexDirection: 'row',
    // borderBottomWidth: 1,
    justifyContent: 'space-between',
    marginBottom: 40,
    // borderBottomColor: colours.gray300,
  },
  bar: {
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: { fontFamily: fontFamily.regular, fontSize: 15, lineHeight: 22, color: colours.white },
  status: {
    color: colours.white,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Codepush;
