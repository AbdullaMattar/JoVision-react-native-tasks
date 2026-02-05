import React, {
  useState,
  useEffect,
  Component,
  useRef,
  useImperativeHandle,
  forwardRef,
  createRef,
} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  Alert,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Video from 'react-native-video';
import thumbnail from '../Resource/Images/(2).jpg'; //here we import our image
import TestVideo from '../Resource/Videos/1.mp4'; //we can import video like this also
const posterUri = Image.resolveAssetSource(thumbnail).uri; // because videos require poster in uri format

export default function Task32() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Video
          style={styles.video}
          source={TestVideo}
          poster={{
            source: { uri: posterUri },
            resizeMode: 'contain',
          }}
          controls={false} // we can set it to true
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});
