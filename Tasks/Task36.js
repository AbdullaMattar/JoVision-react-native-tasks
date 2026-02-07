import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Task36() {
  const txtArray = Array.from({ length: 100 }, () => generateRandomWord(10));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {txtArray.map((word, index) => (
          <Text key={index}>{word}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'rgb(233, 196, 175)',
    paddingHorizontal: 65,
  },
});
