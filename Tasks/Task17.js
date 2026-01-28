import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function Task17() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <Text>Abdulla Matar</Text>}
    </View>
  );
}
