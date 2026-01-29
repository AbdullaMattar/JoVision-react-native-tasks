import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task23() {
  const [Tinput, setTinput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text>{Tinput}</Text>
      <MyClassPage setT={setTinput} />
    </SafeAreaView>
  );
}

class MyClassPage extends Component {
  render() {
    return (
      <TextInput
        placeholder="Type here"
        onChangeText={newtext => this.props.setT(newtext)}
      ></TextInput>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
