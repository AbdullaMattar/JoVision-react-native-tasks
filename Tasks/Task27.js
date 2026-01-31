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
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task27() {
  const [loc, setLoc] = useState(null);

  function showAlert() {
    Alert.alert('Choose the image', 'Enter a number 1, 2 or, 3', [
      {
        text: '1',
        onPress: () => {
          setLoc(require('../Resource/1.png'));
        },
      },
      {
        text: '2',
        onPress: () => {
          setLoc(require('../Resource/2.jpg'));
        },
      },
      {
        text: '3',
        onPress: () => {
          setLoc(require('../Resource/3.jpg'));
        },
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Press here" onPress={showAlert} />
      <View>{loc && <Image style={styles.image} source={loc}></Image>}</View>
      {/* source accepts variables but require(loc) is wrong */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: 'red',
    height: 400,
    width: 400,
  },
});
