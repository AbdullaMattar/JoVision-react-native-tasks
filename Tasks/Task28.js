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
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task28() {
  const [images, setimages] = useState([
    require('../Resource/Images/(1).jpg'),
    require('../Resource/Images/(2).jpg'),
    require('../Resource/Images/(3).jpg'),
    require('../Resource/Images/(4).jpg'),
    require('../Resource/Images/(5).jpg'),
    require('../Resource/Images/(6).jpg'),
    require('../Resource/Images/(7).jpg'),
    require('../Resource/Images/(8).jpg'),
    require('../Resource/Images/(9).jpg'),
    require('../Resource/Images/(10).jpg'),
    require('../Resource/Images/(11).jpg'),
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        //keyExtractor tells FlatList to use each item’s position in the array (converted to a string) as a unique key
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() =>
              // Don't Forget to put in () => /so you dont alert right away
              Alert.alert(
                'Clicked an image',
                'You have selected image:' + (index + 1)
              )
            }>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: 'red',
    height: 400,
    width: 400,
    margin: 10,
    marginTop: 100,
  },
});
