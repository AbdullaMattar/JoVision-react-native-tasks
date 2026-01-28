import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task16() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView>
      {isVisible && <Text>Abdulla Matar</Text>}
      <Button title="Show" onPress={() => setIsVisible(!isVisible)} />
      {/*another way- Text Component is still there*/}
      <Text>{isVisible ? 'Abdulla Matar' : null}</Text>
    </SafeAreaView>
  );
}
