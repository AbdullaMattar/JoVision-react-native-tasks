import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task20() {
  const [toggle, setToggle] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Show" onPress={() => setToggle(!toggle)} />
      {toggle && <MyClassPage />}
    </SafeAreaView>
  );
}

class MyClassPage extends Component {
  render() {
    return <Text>Hello From The Class Component</Text>;
  }
  //This is the Changed Part From Task 19
  componentDidMount() {
    console.log('Mounted');
  }
  componentWillUnmount() {
    console.log('Un Mounted');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
