import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task17() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView>
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <Text>Abdulla Matar</Text>}
    </SafeAreaView>
  );
}
