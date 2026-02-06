import { useRef, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Task31() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [num, setNum] = useState('');
  const refToFL = useRef(null);

  const prelist = [
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
  ];

  const [images, setImages] = useState(
    prelist.map((value, index) => ({
      id: index,
      src: value,
    }))
  );

  const [maxLen, setMaxLen] = useState(images.length);

  function DuplicateImg(item, index) {
    const tmpList = [...images];
    const newImg = { id: maxLen, src: item.src };
    tmpList.splice(index + 1, 0, newImg);
    setImages(tmpList);
    setMaxLen(maxLen => maxLen + 1);
  }
  function CheckIndex(index) {
    if (index < 0 || index >= images.length) {
      return false;
    } else return true;
  }
  function IdToDel(id, index) {
    setImages(images => images.filter(item => item.id !== id));

    if (index > 0) {
      refToFL.current?.scrollToIndex({
        index: index - 1,
        animated: true,
      });
    }
  }

  function ScrollToImage() {
    try {
      const requestedIndex = Number(num) - 1;
      if (!CheckIndex(requestedIndex)) throw new Error('index is out of range');

      setIsModalVisible(false);
      refToFL.current?.scrollToIndex({
        index: requestedIndex,
        animated: true,
      });
    } catch (error) {
      setIsModalVisible(true);
      Alert.alert(
        'Error',
        error.message + '\nRange is between 1 and ' + images.length
      );
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Go to Image" onPress={() => setIsModalVisible(true)} />
      <FlatList
        ref={refToFL}
        horizontal={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.id)} // must be string
        renderItem={({ item, index }) => (
          <View style={{ position: 'relative' }}>
            <Pressable
              onPress={() =>
                // Don't Forget to put in () => /so you dont alert right away
                Alert.alert(
                  'Clicked an image',
                  'You have selected image:' + (index + 1)
                )
              }>
              <Image source={item.src} style={styles.image} />
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => IdToDel(item.id, index)}>
              <Text>X</Text>
            </Pressable>
            <Pressable
              style={styles.icn}
              onPress={() => DuplicateImg(item, index)}>
              <Image
                style={styles.icnimg}
                source={require('../Resource/icons/duplicate-icon.png')}
              />
            </Pressable>
          </View>
        )}
      />
      <Modal
        visible={isModalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide">
        <View style={styles.container}>
          <Text>Enter Image Index :</Text>
          <TextInput
            style={styles.input}
            onChangeText={input => setNum(input)}
            placeholder="Type here"
            keyboardType="numeric"
          />
          <Button title="Go" onPress={ScrollToImage} />
          <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    position: 'absolute',
    borderWidth: 1,
    padding: 10,
    marginTop: 100,
    marginRight: 20,
    top: 1,
    right: 1,
  },
  icn: {
    position: 'absolute',
    borderWidth: 1,
    padding: 10,
    marginTop: 100,
    marginLeft: 20,
    top: 1,
    left: 1,
  },
  icnimg: {
    height: 25,
    width: 25,
  },
});
