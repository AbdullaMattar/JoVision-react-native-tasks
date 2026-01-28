import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function Task16() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View>
      {isVisible && <Text>Abdulla Matar</Text>}
      <Button title="Show" onPress={() => setIsVisible(!isVisible)} />
      {/*another way- Text Component is still there*/}
      <Text>{isVisible ? 'Abdulla Matar' : null}</Text>
    </View>
  );
}
