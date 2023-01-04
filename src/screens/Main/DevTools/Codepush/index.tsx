import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import codePush from 'react-native-code-push';
import colours from '@src/utils/colours';
import { fontFamily } from '@src/utils/fonts';

type Status = {
  title: string;
  color: string;
};

const Codepush = () => {
  const [cpStatus, setCpStatus] = useState<Status>({
    title: 'update',
    color: colours.blueYoung,
  });

  const handleCodepush = () => {
    setCpStatus({ title: 'loading', color: colours.yellowNormal });
    codePush
      .sync(
        { deploymentKey: 'smegzDoYLtSW-PZG7zFLkRYglf7pmxawAqGIh', installMode: codePush.InstallMode.IMMEDIATE },
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
    return (
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.75} onPress={() => handleCodepush()}>
        <Text style={styles.title}>Codepush OTA</Text>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colours.gray300,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
