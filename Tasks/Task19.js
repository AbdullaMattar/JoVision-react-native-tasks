import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task19() {
  const [toggle, setToggle] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Show" onPress={() => setToggle(!toggle)} />
      {toggle && <Myclass />}
    </SafeAreaView>
  );
}

class Myclass extends Component {
  render() {
    return <Text>Hello From The Class Component</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
