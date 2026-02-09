import React, { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { textChanged } from '../store/index';

export default function Task39() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <MyFunc />}
    </SafeAreaView>
  );
}

const MyFunc = () => {
  const text = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <TextInput
      value={text}
      placeholder="Type here"
      onChangeText={newText => dispatch(textChanged(newText))}
      style={{ borderWidth: 15, color: 'black' }}
      placeholderTextColor="green"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtinput: {
    color: 'green',
    backgroundColor: 'rgb(233, 196, 175)',
    paddingHorizontal: 65,
  },
});
