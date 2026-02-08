import React, { Component, useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputContext } from '../Component/customContext';
export default function Task38() {
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <InputContext.Provider value={{ text: input, setText: setInput }}>
        <MyFunc />
        <MyFunc />
        <MyFunc />
        <MyFunc />
      </InputContext.Provider>
    </SafeAreaView>
  );
}

class Myclass extends Component {
  render() {
    return (
      <InputContext.Consumer>
        {theInput => {
          return <Text>{theInput.text}</Text>;
        }}
      </InputContext.Consumer>
    );
  }
}

const MyFunc = () => {
  const { text, setText } = useContext(InputContext);
  return (
    <View>
      <TextInput
        style={styles.txtinput}
        value={text}
        placeholder="Type here"
        onChangeText={setText}
        placeholderTextColor="green"
        backgroundColor="black"
      />
      <Myclass />
    </View>
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
