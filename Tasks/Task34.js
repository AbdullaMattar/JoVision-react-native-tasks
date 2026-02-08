import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useCurrentTime from '../Component/useCurrentTime';

export default function Task34() {
  const currentTime = useCurrentTime();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}> {currentTime}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    margin: 15,
  },
});
