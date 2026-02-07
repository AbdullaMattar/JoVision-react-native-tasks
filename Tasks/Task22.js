import React, { useState } from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyFunctionPage = props => {
  // another way of declaring  MyFunctionPage = ({setT}) ....
  return (
    <TextInput
      placeholder="Type here"
      onChangeText={newtext => props.setT(newtext)}></TextInput>
  );
};

export default function Task22() {
  const [Tinput, setTinput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text>{Tinput}</Text>
      <MyFunctionPage setT={setTinput} /> {/* not  setTinput() */}
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
