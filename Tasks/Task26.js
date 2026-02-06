import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Task26() {
  const [res, setRes] = useState(null);
  const [isblocking, setIsBlocking] = useState(false);

  async function blockingcall() {
    setIsBlocking(true);
    try {
      const ip = await fetch('https://api.ipify.org?format=json');
      //Normal const not state => because it's temp values and don't effect rendering rn
      const json = await ip.json();
      setRes(json.ip);
    } finally {
      //try => need finally or catch
      setIsBlocking(false);
    }
  }

  async function nonBlocking() {
    const ip = await fetch('https://api.ipify.org?format=json');
    const json = await ip.json();
    setRes(json.ip);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttoncon}>
        <View style={styles.button}>
          <Button
            title="Non-blocking Request"
            onPress={nonBlocking}
            disabled={isblocking} //disabled prop => to control the blocking
          />
        </View>
        <View style={styles.button}>
          <Button
            title="blocking Request"
            onPress={blockingcall}
            disabled={isblocking}
          />
        </View>
      </View>
      <View>
        <Text>{isblocking ? 'Loading... ' : res}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoncon: {
    flexDirection: 'row',
  },
  button: {
    padding: 15,
  },
});
