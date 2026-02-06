import { useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';
import thumbnail from '../Resource/Images/(2).jpg'; //here we import our image
import TestVideo from '../Resource/Videos/1.mp4'; //we can import video like this also
const posterUri = Image.resolveAssetSource(thumbnail).uri; // because videos require poster in uri format
export default function Task33() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Video
          paused={isPaused}
          ref={videoRef}
          style={styles.video}
          source={TestVideo}
          poster={{
            source: { uri: posterUri },
            resizeMode: 'contain',
          }}
          controls={false}
          repeat={true}
        />
        <View style={styles.pauseOverlay}>
          <Pressable
            onPress={() => setIsPaused(!isPaused)}
            style={{
              height: '100%',
              width: '100%',
            }}></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  pauseOverlay: {
    height: '50%',
    width: '50%',
    top: '25%',
    left: '25%',
    // backgroundColor: 'red',  // for testing
    position: 'absolute',
  },
});
