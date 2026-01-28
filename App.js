import React from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
import Task19 from './Tasks/Task19';
function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {/*
        <Task16></Task16>
        <Task17></Task17>
        <Task18></Task18>
      */}
        <Task19 />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
