import { RouteProp } from '@react-navigation/native';
import CustomIcon from '@src/components/CustomIcons';
import SubPages from '@src/layouts/SubPages';
import colours from '@src/utils/colours';
import { fontFamilyDM } from '@src/utils/fonts';
import { useState, useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  Bubble,
  Composer,
  GiftedChat,
  IChatMessage,
  InputToolbar,
  Message,
  MessageText,
  Send,
  Time,
} from 'react-native-gifted-chat';

const Chat = ({ route }: { route: RouteProp<any> }) => {
  const [messages, setMessages] = useState<IChatMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((message: IChatMessage[]) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, message));
  }, []);

  const _renderSend = (props: any) => {
    return (
      <Send
        {...props}
        containerStyle={{
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: colours.blueNormal,
            height: 42,
            width: 42,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomIcon name='send-alt' size={20} />
        </View>
      </Send>
    );
  };

  const _renderBubble = (props: any) => {
    return (
      <View>
        <Bubble
          {...props}
          renderTime={() => {
            const { ...timeProps } = props;
            return (
              <Time
                {...timeProps}
                timeTextStyle={{
                  left: {
                    color: colours.gray500,
                    fontFamily: fontFamilyDM.regular,
                  },
                  right: {
                    color: colours.gray500,
                    fontFamily: fontFamilyDM.regular,
                  },
                }}
                containerStyle={{
                  left: { position: 'absolute', right: -52, top: -14 },
                  right: { position: 'absolute', left: -54, top: -14 },
                }}
              />
            );
          }}
          wrapperStyle={{
            right: {
              borderBottomRightRadius: 0,
              backgroundColor: colours.gray300,
              marginRight: 8,
            },
            left: {
              borderBottomLeftRadius: 0,
              backgroundColor: colours.yellowYoung,
            },
          }}
          textStyle={{
            right: {
              padding: 4,
              fontSize: 14,
              color: colours.black,
              fontFamily: fontFamilyDM.regular,
            },
            left: {
              padding: 4,
              fontSize: 14,
              color: colours.black,
              fontFamily: fontFamilyDM.regular,
            },
          }}
        />
      </View>
    );
  };

  const _renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          paddingVertical: 6,
          paddingHorizontal: 16,
          backgroundColor: colours.backgroundPrimary,
        }}
        renderSend={_renderSend}
        renderComposer={() => {
          return (
            <View
              style={{
                flex: 1,
                width: '100%',
                marginRight: 8,
                borderRadius: 8,
                backgroundColor: colours.backgroundClickable,
              }}>
              <Composer
                {...props}
                multiline={true}
                textInputStyle={{
                  fontSize: 14,
                  marginBottom: 0,
                  marginLeft: 8,
                  lineHeight: 18,
                  marginRight: 8,
                  fontFamily: fontFamilyDM.regular,
                }}
              />
            </View>
          );
        }}
      />
    );
  };

  const _renderMessage = (props: any) => (
    <Message
      {...props}
      containerStyle={{
        left: { backgroundColor: 'lime' },
        right: { backgroundColor: 'gold' },
      }}
    />
  );

  return (
    <SubPages title={route.params?.name} childPadding={false}>
      <GiftedChat
        placeholder='Masukkan pesan'
        messages={messages}
        onSend={(message) => onSend(message)}
        user={{
          _id: 1,
        }}
        alwaysShowSend={true}
        renderBubble={_renderBubble}
        renderInputToolbar={_renderInputToolbar}
        renderAvatar={() => null}
        // renderMessage={_renderMessage}
        // renderMessageText={_renderMessageText}
        messagesContainerStyle={{ paddingBottom: 14 }}
      />
    </SubPages>
  );
};

export default Chat;
