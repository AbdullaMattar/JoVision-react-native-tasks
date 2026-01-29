import React, {
  useState,
  useEffect,
  Component,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const MyFunctionPage = forwardRef((props, ref) => {
  // in modern react forwardRef is gonna be Deprecated
  // modern react =  const MyFunctionPage = ({ref}) => {
  const [txt, settxt] = useState();
  useImperativeHandle(ref, () => ({
    printText(value) {
      settxt(value);
    },
  }));
  return <Text>{txt}</Text>;
});

export default function Task24() {
  const myref = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Type Here"
        onChangeText={inputText => myref.current.printText(inputText)}
      />
      <MyFunctionPage ref={myref} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
