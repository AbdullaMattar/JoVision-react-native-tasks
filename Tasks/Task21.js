import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('Mounted');

    return () => {
      // cleanup function
      console.log('Un Mounted');
    };
  }, []);

  return <Text>Hello From The Functional Component</Text>;
};

export default function Task21() {
  const [toggle, setToggle] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Show" onPress={() => setToggle(!toggle)} />
      {toggle && <MyFunctionPage />}
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
